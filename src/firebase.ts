import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { 
  initializeFirestore,
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
  getDocFromServer
} from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';
import { AppUser } from './types';

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
  projectId: getEnvVar('VITE_FIREBASE_PROJECT_ID', firebaseConfig.projectId),
  storageBucket: getEnvVar('VITE_FIREBASE_STORAGE_BUCKET', firebaseConfig.storageBucket),
  messagingSenderId: getEnvVar('VITE_FIREBASE_MESSAGING_SENDER_ID', firebaseConfig.messagingSenderId),
  appId: getEnvVar('VITE_FIREBASE_APP_ID', firebaseConfig.appId),
  firestoreDatabaseId: getEnvVar('VITE_FIREBASE_FIRESTORE_DATABASE_ID', firebaseConfig.firestoreDatabaseId),
};

// CRITICAL DEBUG: Log where each variable is coming from (Sanitized)
const logSource = (key: string, envKey: string) => {
  const envVal = import.meta.env[envKey];
  const hasEnv = envVal !== undefined && envVal !== null && envVal !== "" && envVal !== "undefined";
  return hasEnv ? `ENV (${envKey})` : 'JSON (fallback)';
};

// CRITICAL: Ensure we use the exact database ID string.
// If the environment variable is 'default' or '(default)', but the JSON config has a specific ID (ai-studio-...),
// we MUST use the specific ID because AI Studio projects often don't have a 'default' database.
const rawDbId = firebaseConfigFromEnv.firestoreDatabaseId;
const dbId = (rawDbId && rawDbId !== 'default' && rawDbId !== '(default)')
  ? rawDbId
  : (firebaseConfig.firestoreDatabaseId && firebaseConfig.firestoreDatabaseId !== 'default' ? firebaseConfig.firestoreDatabaseId : undefined);

const maskKey = (key: string) => key ? `${key.substring(0, 6)}...${key.substring(Math.max(0, key.length - 4))}` : 'MISSING';

console.log("🔥 Firebase Init Diagnostics:", {
  projectId: { value: firebaseConfigFromEnv.projectId, source: logSource('projectId', 'VITE_FIREBASE_PROJECT_ID') },
  databaseId: { value: dbId || '(default)', source: logSource('firestoreDatabaseId', 'VITE_FIREBASE_FIRESTORE_DATABASE_ID') },
  apiKey: { value: maskKey(firebaseConfigFromEnv.apiKey), source: logSource('apiKey', 'VITE_FIREBASE_API_KEY') },
  authDomain: { value: firebaseConfigFromEnv.authDomain, source: logSource('authDomain', 'VITE_FIREBASE_AUTH_DOMAIN') },
});

const app = initializeApp(firebaseConfigFromEnv);
export const auth = getAuth(app);

// Use initializeFirestore. We'll toggle experimentalForceLongPolling to see if it fixes the 'offline' issue.
const firestoreSettings = {
  // We keep this enabled by default as it's usually required in AI Studio, 
  // but if it fails, the user might need to check their network.
  experimentalForceLongPolling: true,
};

// Explicitly handle the undefined case for the 3rd argument
export const db = dbId 
  ? initializeFirestore(app, firestoreSettings, dbId)
  : initializeFirestore(app, firestoreSettings);

export const googleProvider = new GoogleAuthProvider();

export const syncUserDoc = async (user: any): Promise<AppUser | null> => {
  if (!user) return null;
  
  const userRef = doc(db, 'users', user.uid);
  try {
    const userSnap = await getDoc(userRef);
    const isManager = user.email === 'salahsalman4455@gmail.com';
    
    if (userSnap.exists()) {
      const userData = userSnap.data() as AppUser;
      
      // Force super_admin/manager role if email matches
      if (isManager && userData.role !== 'super_admin') {
        const updates = { 
          role: 'super_admin' as const,
          totalAttempts: 99999,
          remainingAttempts: 99999,
          remainingDetectiveAttempts: 99999,
          subscriptionActive: true,
          detectiveScore: userData.detectiveScore || 0,
          'permissions.medicalSubject': true,
          'permissions.educationalFile': true,
          'permissions.medicalDetective': true,
          'permissions.tikTeb': true
        };
        await setDoc(userRef, updates, { merge: true });
        return { ...userData, ...updates };
      }

      // Update last login
      setDoc(userRef, { lastLogin: Date.now() }, { merge: true }).catch(console.error);
      return userData;
    } else {
      const isAdmin = user.role === 'admin' || user.role === 'supervisor';
      const newUser: AppUser = {
        id: user.uid,
        email: user.email,
        role: isManager ? 'super_admin' : 'user',
        status: 'active',
        permissions: {
          medicalSubject: true,
          educationalFile: true,
          medicalDetective: true,
          tikTeb: true
        },
        subscriptionActive: isManager, 
        totalAttempts: isManager ? 99999 : (isAdmin ? 10 : 3),
        remainingAttempts: isManager ? 99999 : (isAdmin ? 10 : 3),
        remainingDetectiveAttempts: isManager ? 99999 : (isAdmin ? 10 : 1),
        lastLogin: Date.now(),
        detectiveScore: 0
      };
      await setDoc(userRef, newUser);
      return newUser;
    }
  } catch (error: any) {
    console.warn("⚠️ Firestore is offline or unprovisioned. Falling back to local/offline user state:", error);
    const isManager = user.email === 'salahsalman4455@gmail.com';
    const fallbackUser: AppUser = {
      id: user.uid,
      email: user.email || 'offline_user@dr-imposter.com',
      displayName: user.displayName || user.email?.split('@')[0] || 'Doctor',
      role: isManager ? 'super_admin' : 'user',
      status: 'active',
      permissions: {
        medicalSubject: true,
        educationalFile: true,
        medicalDetective: true,
        tikTeb: true
      },
      subscriptionActive: isManager, 
      totalAttempts: isManager ? 99999 : 3,
      remainingAttempts: isManager ? 99999 : 3,
      remainingDetectiveAttempts: isManager ? 99999 : 1,
      lastLogin: Date.now(),
      detectiveScore: 0,
      isOfflineFallback: true
    };
    return fallbackUser;
  }
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
testConnection();

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
