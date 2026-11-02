import { readLocal, writeLocal } from './localStore';

interface ScoreBank { total: number; earned: number; claimedGuest?: number }
const key = (uid?: string) => `clinoma-score-v1:${uid || 'guest'}`;
export function scoreBank(uid?: string, cloudScore = 0): ScoreBank {
  const legacyGuest = readLocal('dr_imposter_guest_score', 0);
  const bank = readLocal<ScoreBank>(key(uid), { total: uid ? cloudScore : Number(legacyGuest) || 0, earned: 0 });
  return { ...bank, total: Math.max(bank.total, cloudScore), earned: bank.earned };
}
export function saveLocalScore(total: number, uid?: string, cloudScore = 0) {
  const bank = scoreBank(uid, cloudScore);
  const delta = Math.max(0, total - bank.total);
  writeLocal(key(uid), { ...bank, total: Math.max(total, bank.total), earned: bank.earned + delta });
  if (!uid) writeLocal('dr_imposter_guest_score', total);
}
export function acceptCloudScore(uid: string, total: number, acknowledgedEarned = 0) {
  const bank = scoreBank(uid);
  writeLocal(key(uid), { ...bank, total: total + Math.max(0, bank.earned - acknowledgedEarned) });
}

export function claimGuestScore(uid: string, cloudScore = 0) {
  const guestTotal = Number(readLocal('dr_imposter_guest_score', 0)) || 0;
  const bank = scoreBank(uid, cloudScore);
  // Persist the receipt alongside the earned points before clearing the legacy
  // bank; replay after a crash cannot add the same guest points twice.
  const delta = Math.max(0, guestTotal - (bank.claimedGuest || 0));
  if (delta) writeLocal(key(uid), { ...bank, total: bank.total + delta, earned: bank.earned + delta, claimedGuest: guestTotal });
}
