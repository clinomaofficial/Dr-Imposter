const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const path = require('path');

const serviceAccount = require(path.resolve(__dirname, '../../serviceAccountKey.json'));

const app = initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore(app);

async function broadcast() {
  const message = process.argv[2] || "🏆 مرحباً بكم في تحدي د. إمبوستر الأسبوعي! اكتشف المحتال واكسب نقاط مضاعفة.";
  const title = process.argv[3] || "تحدي الأطباء الأسبوعي";
  const hoursValid = Number(process.argv[4]) || 48;

  console.log(`📢 Broadcasting announcement to all Dr Imposter players...`);
  console.log(`Title: ${title}`);
  console.log(`Message: ${message}`);
  console.log(`Valid for: ${hoursValid} hours`);

  const now = Date.now();
  const announcement = {
    title,
    message,
    type: 'info',
    createdAt: now,
    expiresAt: now + (hoursValid * 60 * 60 * 1000)
  };

  const ref = await db.collection('announcements').add(announcement);
  console.log(`✅ Announcement published with ID: ${ref.id}`);
  console.log(`It will now be displayed to all active users on mobile and web.`);
}

broadcast().catch(console.error);
