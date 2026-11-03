// Optional bounded maintenance. Dry-run by default; never invoked by the game.
// Uses existing Google Application Default Credentials, never embeds a key.
import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
const projectId = process.env.GCLOUD_PROJECT;
if (!projectId) throw new Error('Set GCLOUD_PROJECT to the intended project explicitly.');
initializeApp({ credential: applicationDefault(), projectId });
const db = getFirestore();
const expired = await db.collection('rooms').where('expiresAt', '<=', Date.now()).limit(100).get();
console.log(`${expired.size} expired rooms (maximum 100 per run).`);
if (process.argv.includes('--apply')) {
  const batch = db.batch();
  expired.docs.forEach(room => batch.delete(room.ref));
  await batch.commit();
  console.log('Expired rooms deleted.');
} else console.log('Dry run only. Add --apply after reviewing the target project.');
