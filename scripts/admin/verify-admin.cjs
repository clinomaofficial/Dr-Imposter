const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { getAuth } = require('firebase-admin/auth');
const path = require('path');
const fs = require('fs');

const keyPath = path.resolve(__dirname, '../../serviceAccountKey.json');
if (!fs.existsSync(keyPath)) {
  console.error("❌ serviceAccountKey.json NOT found at:", keyPath);
  process.exit(1);
}

const serviceAccount = require(keyPath);

const app = initializeApp({
  credential: cert(serviceAccount),
  databaseURL: "https://dr-imposter-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "dr-imposter.firebasestorage.app"
});

async function verify() {
  console.log("=================================================");
  console.log("🔐 Testing Firebase Admin SDK Connection...");
  console.log("📁 Project ID:", serviceAccount.project_id);
  console.log("📧 Client Email:", serviceAccount.client_email);
  console.log("=================================================");

  try {
    // 1. Test Firestore
    const db = getFirestore(app);
    const usersSnap = await db.collection('users').limit(5).get();
    console.log(`✅ Firestore Connected successfully! Found ${usersSnap.size} user documents.`);

    // 2. Test Auth
    const auth = getAuth(app);
    const listUsers = await auth.listUsers(5);
    console.log(`✅ Firebase Auth Connected! Registered users count in batch: ${listUsers.users.length}`);
    listUsers.users.forEach(u => console.log(`   - User: ${u.email || u.uid} (${u.displayName || 'No Name'})`));

    // 3. Test Rooms
    const roomsSnap = await db.collection('rooms').limit(5).get();
    console.log(`✅ Rooms Collection Accessible! Found ${roomsSnap.size} existing game room documents.`);

    console.log("=================================================");
    console.log("🎉 ALL ADMIN PERMISSIONS VERIFIED AND ACTIVE! We have full programmatic control.");
    console.log("=================================================");
  } catch (err) {
    console.error("❌ Verification failed:", err);
    process.exit(1);
  }
}

verify();
