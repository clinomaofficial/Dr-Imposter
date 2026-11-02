const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const path = require('path');

const serviceAccount = require(path.resolve(__dirname, '../../serviceAccountKey.json'));

const app = initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore(app);

async function initConfig() {
  console.log("⚙️ Initializing Firestore Global Game Settings...");
  const configRef = db.collection('settings').doc('gameConfig');

  const defaultConfig = {
    turnTimeLimit: 45,           // مدة مؤقت الدور بالثواني
    questionsPerPlayer: 1,       // عدد الأسئلة لكل لاعب
    maxPlayers: 10,              // السعة القصوى للغرفة
    speedBonusThreshold: 30,     // وقت بونص السرعة (ثانية متبقية)
    speedBonusPoints: 10,        // نقاط بونص السرعة
    dailyFeaturedSpecialty: 'All', // التخصص المميز
    updatedAt: Date.now()
  };

  await configRef.set(defaultConfig, { merge: true });
  console.log("✅ Successfully published live Game Settings to Firestore!");
  console.log("📄 Document path: settings/gameConfig");
  console.log("Current values:", defaultConfig);
}

initConfig().catch(console.error);
