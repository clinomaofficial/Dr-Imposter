const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const path = require('path');

const serviceAccount = require(path.resolve(__dirname, '../../serviceAccountKey.json'));

const app = initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore(app);

async function cleanupStaleRooms() {
  console.log("🧹 Running Automated Stale Rooms Cleanup...");
  const sixHoursAgo = Date.now() - 6 * 60 * 60 * 1000;
  
  const roomsRef = db.collection('rooms');
  const snapshot = await roomsRef.get();
  
  let deletedCount = 0;
  const batch = db.batch();

  snapshot.forEach(doc => {
    const data = doc.data();
    const createdAt = data.createdAt || 0;
    
    // Delete if created more than 6 hours ago or no createdAt
    if (createdAt < sixHoursAgo) {
      batch.delete(doc.ref);
      deletedCount++;
    }
  });

  if (deletedCount > 0) {
    await batch.commit();
    console.log(`✅ Cleaned up ${deletedCount} stale room(s) from database.`);
  } else {
    console.log(`✅ All active rooms are fresh. No stale rooms found (${snapshot.size} active rooms).`);
  }
}

cleanupStaleRooms().catch(console.error);
