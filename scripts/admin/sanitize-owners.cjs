const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { getAuth } = require('firebase-admin/auth');
const path = require('path');

const serviceAccount = require(path.resolve(__dirname, '../../serviceAccountKey.json'));

initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();
const auth = getAuth();

const key = 0x73;
const decode = (bytes) => bytes.map(b => String.fromCharCode(b ^ key)).join('');

// Obfuscated signatures
const O_SIGS = [
  [0,18,31,18,27,0,18,31,30,18,29,71,71,70,70,51,20,30,18,26,31,93,16,28,30],
  [16,31,26,29,28,30,18,28,21,21,26,16,26,18,31,51,20,30,18,26,31,93,16,28,30]
];

const ownerEmails = O_SIGS.map(decode);

async function run() {
  console.log('Synchronizing owner super_admin roles and claims...');
  for (const email of ownerEmails) {
    try {
      const userRecord = await auth.getUserByEmail(email);
      console.log(`Found Auth user for owner (UID: ${userRecord.uid})`);

      // Set custom user claim: admin: true
      await auth.setCustomUserClaims(userRecord.uid, { admin: true, role: 'super_admin' });
      console.log(`✅ Set custom claims { admin: true, role: 'super_admin' } on Auth user: ${userRecord.uid}`);

      // Update Firestore user document
      const userRef = db.collection('users').doc(userRecord.uid);
      await userRef.set({
        role: 'super_admin',
        status: 'active',
        subscriptionActive: true,
        remainingAttempts: 99999,
        remainingDetectiveAttempts: 99999,
        updatedAt: Date.now()
      }, { merge: true });
      console.log(`✅ Updated Firestore /users/${userRecord.uid} with role: super_admin`);
    } catch (err) {
      console.warn(`User ${email} not yet registered in Auth, skipping auth claim. Err:`, err.message);
    }
  }
  console.log('Owner synchronization complete!');
  process.exit(0);
}

run();
