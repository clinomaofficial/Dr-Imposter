import { readLocal, writeLocal } from './localStore';

interface ScoreBank { total: number; earned: number }
const key = (uid?: string) => `clinoma-score-v1:${uid || 'guest'}`;
function recoverGuestTransfer() {
  const pending = readLocal<{ uid: string; bank: ScoreBank } | null>('clinoma-guest-transfer', null);
  if (!pending) return;
  writeLocal(key(pending.uid), pending.bank);
  writeLocal(key(), { total: 0, earned: 0 });
  writeLocal('dr_imposter_guest_score', 0);
  writeLocal('clinoma-guest-transfer', null);
}
export function scoreBank(uid?: string, cloudScore = 0): ScoreBank {
  recoverGuestTransfer();
  const legacyGuest = readLocal('dr_imposter_guest_score', 0);
  const bank = readLocal<ScoreBank>(key(uid), { total: uid ? cloudScore : Number(legacyGuest) || 0, earned: 0 });
  return bank;
}
export function saveLocalScore(total: number, uid?: string, cloudScore = 0) {
  const bank = scoreBank(uid, cloudScore);
  const delta = total - bank.total;
  writeLocal(key(uid), { total, earned: bank.earned + delta });
  if (!uid) writeLocal('dr_imposter_guest_score', total);
}
export function acceptCloudScore(uid: string, total: number, acknowledgedEarned = 0) {
  const bank = scoreBank(uid);
  writeLocal(key(uid), { ...bank, total: Math.max(0, total + bank.earned - acknowledgedEarned) });
}

export function claimGuestScore(uid: string, cloudScore = 0) {
  recoverGuestTransfer();
  const guestTotal = scoreBank().total;
  const bank = scoreBank(uid, cloudScore);
  // A journal makes the multi-key transfer recoverable after a reload/crash.
  if (guestTotal > 0) {
    writeLocal('clinoma-guest-transfer', { uid, bank: { total: bank.total + guestTotal, earned: bank.earned + guestTotal } });
    recoverGuestTransfer();
  }
}
