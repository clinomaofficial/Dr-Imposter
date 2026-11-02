import { doc, runTransaction, updateDoc } from 'firebase/firestore';
import { auth, db, syncUserDoc, withCloudAccess } from '../firebase';
import { acceptCloudScore, scoreBank, claimGuestScore } from './localScore';
import { deviceId, writeLocal, readLocal } from './localStore';

// Cumulative per-device receipts make retrying a score upload idempotent.
export async function syncAccount() {
  const user = auth.currentUser;
  if (!user || user.isAnonymous) return null;
  return withCloudAccess(async () => {
    const profile = await syncUserDoc(user, true);
    if (!profile || profile.isOfflineFallback) throw new Error('Profile sync failed');
    const pending = readLocal<Record<string, string>>(`clinoma-profile-edits:${user.uid}`, {});
    if (Object.keys(pending).length) {
      await updateDoc(doc(db, 'users', user.uid), pending);
      Object.assign(profile, pending);
      writeLocal(`clinoma-profile-edits:${user.uid}`, {});
    }
    claimGuestScore(user.uid, profile.detectiveScore);
    const bank = scoreBank(user.uid, profile.detectiveScore);
    const receipt = doc(db, 'users', user.uid, 'scoreReceipts', deviceId());
    if (bank.earned > 0) {
      profile.detectiveScore = await runTransaction(db, async tx => {
        const [current, saved] = await Promise.all([tx.get(doc(db, 'users', user.uid)), tx.get(receipt)]);
        const prior = saved.exists() ? saved.data().earned || 0 : 0;
        const delta = Math.max(0, bank.earned - prior);
        const total = (current.data()?.detectiveScore || 0) + delta;
        if (delta > 0) {
          tx.update(doc(db, 'users', user.uid), { detectiveScore: total });
          tx.set(receipt, { earned: bank.earned });
        }
        return total;
      });
    }
    acceptCloudScore(user.uid, profile.detectiveScore, bank.earned);
    writeLocal(`clinoma-profile:${user.uid}`, profile);
    return { ...profile, detectiveScore: scoreBank(user.uid, profile.detectiveScore).total };
  });
}
