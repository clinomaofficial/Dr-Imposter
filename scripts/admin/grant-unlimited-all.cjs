const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const path = require('path');

const serviceAccount = require(path.resolve(__dirname, '../../serviceAccountKey.json'));

const app = initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore(app);

async function grantUnlimitedAndSetGlobalConfig() {
  console.log("🎮 Enabling Free & Unlimited Gameplay System in Firebase...");

  // 1. Update settings/gameConfig to disable attempt limits
  const configRef = db.collection('settings').doc('gameConfig');
  await configRef.set({
    enforceAttemptLimits: false,
    updatedAt: Date.now()
  }, { merge: true });
  console.log("✅ settings/gameConfig updated: enforceAttemptLimits = false (Free & Unlimited Play Active)");

  // 2. Update all existing registered users to have 99999 attempts and active status
  const usersSnap = await db.collection('users').get();
  console.log(`Found ${usersSnap.size} user documents to update...`);

  let count = 0;
  const batch = db.batch();
  usersSnap.forEach(doc => {
    batch.update(doc.ref, {
      totalAttempts: 99999,
      remainingAttempts: 99999,
      remainingDetectiveAttempts: 99999,
      subscriptionActive: true
    });
    count++;
  });

  if (count > 0) {
    await batch.commit();
    console.log(`✅ Granted 99,999 attempts to all ${count} registered doctors/users!`);
  } else {
    console.log("No existing user documents needed batch update.");
  }
}

grantUnlimitedAndSetGlobalConfig().catch(console.error);
