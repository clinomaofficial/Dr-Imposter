import { runTransaction, type Firestore, type Transaction } from 'firebase/firestore';

export async function runRoomTransaction<T>(db: Firestore, action: (tx: Transaction) => Promise<T>): Promise<T> {
  // With strict roster/ballot rules, a concurrent commit may fail authorization
  // against the newer room before the SDK reports an optimistic conflict.
  // Re-read in a fresh transaction; permanent denial still fails after 3 tries.
  for (let attempt = 0; ; attempt++) {
    try { return await runTransaction(db, action); }
    catch (error: any) {
      if (attempt >= 2 || !['permission-denied', 'aborted'].includes(error?.code)) throw error;
    }
  }
}
