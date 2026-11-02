const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const path = require('path');

const serviceAccount = require(path.resolve(__dirname, '../../serviceAccountKey.json'));

const app = initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore(app);

async function updateConfig() {
  const args = process.argv.slice(2);
  const updates = { updatedAt: Date.now() };

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--timer' && args[i + 1]) {
      updates.turnTimeLimit = Number(args[i + 1]);
      i++;
    } else if (args[i] === '--questions' && args[i + 1]) {
      updates.questionsPerPlayer = Number(args[i + 1]);
      i++;
    } else if (args[i] === '--specialty' && args[i + 1]) {
      updates.dailyFeaturedSpecialty = args[i + 1];
      i++;
    } else if (args[i] === '--bonus' && args[i + 1]) {
      updates.speedBonusPoints = Number(args[i + 1]);
      i++;
    }
  }

  if (Object.keys(updates).length === 1) {
    console.log("Usage: node scripts/admin/update-game-config.cjs [--timer <seconds>] [--questions <num>] [--specialty <name>] [--bonus <pts>]");
    console.log("Example: node scripts/admin/update-game-config.cjs --timer 60 --bonus 15");
    return;
  }

  const configRef = db.collection('settings').doc('gameConfig');
  await configRef.set(updates, { merge: true });
  console.log("🚀 Live Game Settings updated successfully!");
  console.log("Changes applied:", updates);
}

updateConfig().catch(console.error);
