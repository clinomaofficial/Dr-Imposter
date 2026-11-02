import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInAnonymously, connectAuthEmulator } from 'firebase/auth';
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from 'firebase/app-check';
import { 
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager,
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  deleteDoc, 
  doc, 
  setDoc,
  getDoc,
  getDocFromServer,
  disableNetwork, enableNetwork, connectFirestoreEmulator
} from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';
import { AppUser } from './types';
import { isOwnerEmail } from './lib/ownerAdminIdentity';
import { readLocal, writeLocal } from './lib/localStore';
import { scoreBank } from './lib/localScore';

const getEnvVar = (key: string, fallback: string) => {
  const value = import.meta.env[key];
  if (value === undefined || value === null || value === "" || value === "undefined") {
    return fallback;
  }
  return value;
};

const firebaseConfigFromEnv = {
  apiKey: getEnvVar('VITE_FIREBASE_API_KEY', firebaseConfig.apiKey),
  authDomain: getEnvVar('VITE_FIREBASE_AUTH_DOMAIN', firebaseConfig.authDomain),
  databaseURL: getEnvVar('VITE_FIREBASE_DATABASE_URL', (firebaseConfig as any).databaseURL || "https://dr-imposter-default-rtdb.europe-west1.firebasedatabase.app"),
  projectId: getEnvVar('VITE_FIREBASE_PROJECT_ID', firebaseConfig.projectId),
  storageBucket: getEnvVar('VITE_FIREBASE_STORAGE_BUCKET', firebaseConfig.storageBucket),
  messagingSenderId: getEnvVar('VITE_FIREBASE_MESSAGING_SENDER_ID', firebaseConfig.messagingSenderId),
  appId: getEnvVar('VITE_FIREBASE_APP_ID', firebaseConfig.appId),
  measurementId: getEnvVar('VITE_FIREBASE_MEASUREMENT_ID', (firebaseConfig as any).measurementId || "G-SNEQXTRRJD"),
  firestoreDatabaseId: getEnvVar('VITE_FIREBASE_FIRESTORE_DATABASE_ID', (firebaseConfig as any).firestoreDatabaseId || ""),
};

// CRITICAL DEBUG: Log where each variable is coming from (Sanitized)
const logSource = (key: string, envKey: string) => {
  const envVal = import.meta.env[envKey];
  const hasEnv = envVal !== undefined && envVal !== null && envVal !== "" && envVal !== "undefined";
  return hasEnv ? `ENV (${envKey})` : 'JSON (fallback)';
};

// Ensure we use (default) for standard production databases and never fall into stale AI Studio sandboxes
const rawDbId = firebaseConfigFromEnv.firestoreDatabaseId;
const dbId = (rawDbId && rawDbId !== 'default' && rawDbId !== '(default)' && !rawDbId.startsWith('ai-studio-'))
  ? rawDbId
  : undefined;

const maskKey = (key: string) => key ? `${key.substring(0, 6)}...${key.substring(Math.max(0, key.length - 4))}` : 'MISSING';

console.log("🔥 Firebase Init Diagnostics:", {
  projectId: { value: firebaseConfigFromEnv.projectId, source: logSource('projectId', 'VITE_FIREBASE_PROJECT_ID') },
  databaseId: { value: dbId || '(default)', source: logSource('firestoreDatabaseId', 'VITE_FIREBASE_FIRESTORE_DATABASE_ID') },
  apiKey: { value: maskKey(firebaseConfigFromEnv.apiKey), source: logSource('apiKey', 'VITE_FIREBASE_API_KEY') },
  authDomain: { value: firebaseConfigFromEnv.authDomain, source: logSource('authDomain', 'VITE_FIREBASE_AUTH_DOMAIN') },
});

const app = initializeApp(firebaseConfigFromEnv);
export const auth = getAuth(app);

// Production-grade Firestore settings with bounded cache (50MB) to prevent memory leaks and app freezes
let firestoreSettings: any = {};
try {
  firestoreSettings = {
    ignoreUndefinedProperties: true,
    localCache: persistentLocalCache({
      tabManager: persistentMultipleTabManager(),
      cacheSizeBytes: 50 * 1024 * 1024, // 50MB bound prevents unbounded SQLite/IndexedDB growth
    })
  };
} catch {
  // Graceful fallback if persistent storage is unavailable in certain restricted environments
  firestoreSettings = {};
}

// Explicitly handle the undefined case for the 3rd argument
export const db = dbId 
  ? initializeFirestore(app, firestoreSettings, dbId)
  : initializeFirestore(app, firestoreSettings);

// Development-only local services. Production can never be redirected by URL.
if (import.meta.env.DEV && import.meta.env.VITE_USE_FIREBASE_EMULATORS === 'true') {
  connectFirestoreEmulator(db, '127.0.0.1', 8080);
  connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
}
let appCheckReady = false;
function prepareAppCheck() {
  const siteKey = import.meta.env.VITE_FIREBASE_APPCHECK_SITE_KEY;
  if (appCheckReady || !siteKey) return;
  initializeAppCheck(app, { provider: new ReCaptchaEnterpriseProvider(siteKey), isTokenAutoRefreshEnabled: false });
  appCheckReady = true;
}

// Network leases are explicit: opening the game or playing locally is never a
// reason to connect Firestore. Serialize transitions so overlapping actions and
// React StrictMode cannot disable another action's connection.
let cloudUsers = 0;
let networkTransition = disableNetwork(db);
export async function acquireCloudAccess(): Promise<() => void> {
  prepareAppCheck();
  cloudUsers++;
  networkTransition = networkTransition.catch(() => {}).then(() => enableNetwork(db));
  try { await networkTransition; } catch (error) { cloudUsers--; throw error; }
  let released = false;
  return () => {
    if (released) return;
    released = true;
    cloudUsers--;
    networkTransition = networkTransition.catch(() => {}).then(async () => {
      if (cloudUsers === 0) await disableNetwork(db);
    });
  };
}
export async function withCloudAccess<T>(action: () => Promise<T>): Promise<T> {
  if (typeof navigator !== 'undefined' && !navigator.onLine) throw new Error('offline');
  const release = await acquireCloudAccess();
  try { return await action(); } finally { release(); }
}
let anonymousSignIn: Promise<any> | null = null;
export async function ensureOnlineIdentity(): Promise<string> {
  if (auth.currentUser) return auth.currentUser.uid;
  anonymousSignIn ??= signInAnonymously(auth).finally(() => { anonymousSignIn = null; });
  return (await anonymousSignIn).user.uid;
}

export const googleProvider = new GoogleAuthProvider();

export const syncUserDoc = async (user: any, refresh = false): Promise<AppUser | null> => {
  if (!user || user.isAnonymous) return null;
  const cacheKey = `clinoma-profile:${user.uid}`;
  const cached = readLocal<AppUser | null>(cacheKey, null);
  const fallbackUser: AppUser = cached || {
    id: user.uid, email: user.email || '', displayName: user.displayName || 'Doctor',
    role: 'user', status: 'active',
    permissions: { medicalSubject: true, educationalFile: true, medicalDetective: true, tikTeb: true },
    subscriptionActive: true, totalAttempts: 99999, remainingAttempts: 99999,
    remainingDetectiveAttempts: 99999, lastLogin: 0, detectiveScore: 0,
  };
  if (!refresh) return { ...fallbackUser, detectiveScore: scoreBank(user.uid, fallbackUser.detectiveScore).total };
  return withCloudAccess(async () => {
  
  const userRef = doc(db, 'users', user.uid);
  try {
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      const userData = userSnap.data() as AppUser;
      
      // At most one last-login write per day, and only during an explicit sync.
      if (Date.now() - (userData.lastLogin || 0) >= 24 * 60 * 60 * 1000) {
        userData.lastLogin = Date.now();
        await setDoc(userRef, { lastLogin: userData.lastLogin }, { merge: true });
      }
      writeLocal(cacheKey, userData);
      return userData;
    } else {
      const isAdmin = user.role === 'admin' || user.role === 'supervisor';
      const newUser: AppUser = {
        id: user.uid,
        email: user.email,
        role: 'user',
        status: 'active',
        permissions: {
          medicalSubject: true,
          educationalFile: true,
          medicalDetective: true,
          tikTeb: true
        },
        subscriptionActive: true, // Free & open play by default
        totalAttempts: 99999,     // Unlimited free gameplay
        remainingAttempts: 99999,
        remainingDetectiveAttempts: 99999,
        lastLogin: Date.now(),
        detectiveScore: 0
      };
      await setDoc(userRef, newUser);
      writeLocal(cacheKey, newUser);
      return newUser;
    }
  } catch (error: any) {
    console.warn("⚠️ Firestore is offline or unprovisioned. Falling back to local/offline user state:", error);
    return { ...fallbackUser, isOfflineFallback: true };
  }
  });
};

// Test connection
async function testConnection() {
  const checkDirectApi = async () => {
    try {
      // Use a more standard discovery URL to test if the domain is reachable at all
      const url = `https://firestore.googleapis.com/$discovery/rest?version=v1&key=${firebaseConfigFromEnv.apiKey}`;
      const res = await fetch(url, { mode: 'no-cors' }); 
      // with no-cors, we can't see the body but if it doesn't throw, the network line is open.
      console.log(`📡 Network Reachability Test (no-cors) to Google APIs: SUCCESS`);
      return 200;
    } catch (e) {
      console.warn("📡 Network Reachability Test (non-fatal warning):", e);
      return 0;
    }
  };

  try {
    const netStatus = await checkDirectApi();
    if (netStatus === 0) {
      console.warn("⚠️ Network appears to be blocking Google API domains.");
    }

    // Attempt to get a dummy doc to verify connection
    await getDocFromServer(doc(db, 'settings', 'health'));
    console.log("✅ Firebase Connection: Success (Firestore reached)");
  } catch (error: any) {
    console.warn("⚠️ Firebase Connection Warning (non-fatal):", error);
    
    if (error.message?.includes('the client is offline')) {
      const msg = `Firebase is reporting as 'offline'.
Status: ${window.navigator.onLine ? 'BROWSER ONLINE' : 'BROWSER OFFLINE'}
Current Config:
- Project: ${firebaseConfigFromEnv.projectId}
- DB ID: ${dbId || '(default)'}
- Key: ${maskKey(firebaseConfigFromEnv.apiKey)}
- Domain: ${window.location.hostname}

Troubleshooting:
1. Ensure the domain "${window.location.hostname}" is in Firebase Console -> Auth -> Settings -> Authorized Domains.
2. Verify "Cloud Firestore API" is ENABLED in Google Cloud Console for project "${firebaseConfigFromEnv.projectId}".
3. Check if your network/firewall or browser extensions (AdBlock) block firestore.googleapis.com.`;
      console.warn(msg);
    }
  }
}
// Diagnostics are opt-in; never spend a read on every application launch.
export const checkFirebaseConnection = () => withCloudAccess(testConnection);

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  }
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error: any) {
    console.error("Login failed", error);
    if (error.code === 'auth/cancelled-popup-request' || error.code === 'auth/popup-closed-by-user') {
      alert('Login popup was cancelled or closed. Please try again. If the issue persists, please open the app in a new tab.');
    } else if (error.code === 'auth/popup-blocked') {
      alert('Login popup was blocked by your browser. Please allow popups for this site, or open the app in a new tab.');
    } else if (error.code === 'auth/unauthorized-domain') {
      const currentDomain = window.location.hostname;
      const arMsg = `❌ خطأ في ترخيص النطاق بـ Firebase:
هذا النطاق غير مصرح به لتسجيل الدخول بجوجل.

لحل هذه المشكلة:
1. اذهب إلى Firebase Console الخاص بـ dr-imposter.
2. اذهب إلى Authentication ثم Settings ثم Authorized Domains.
3. قم بإضافة النطاق التالي:
${currentDomain}

---
❌ Firebase Unauthorized Domain Error:
This domain is not authorized for Google Sign-In in Firebase.

To fix this:
1. Go to Firebase Console -> Authentication -> Settings -> Authorized Domains.
2. Add the following domain:
${currentDomain}`;
      alert(arMsg);
    }
    throw error;
  }
};
