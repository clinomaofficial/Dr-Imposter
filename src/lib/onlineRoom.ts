import { doc } from 'firebase/firestore';
import { runRoomTransaction as runTransaction } from './roomTransaction';
import { db, ensureOnlineIdentity } from '../firebase';

// All contested read/modify/write operations use a server transaction. No stale
// React snapshot can replace a concurrent join, vote or final guess.
export async function joinRoom(code: string, name: string, matches: (capacity: number) => boolean) {
  const uid = await ensureOnlineIdentity();
  await runTransaction(db, async tx => {
    const ref = doc(db, 'rooms', code);
    const snap = await tx.get(ref);
    if (!snap.exists()) throw new Error('Room not found');
    const room = snap.data();
    if (!matches(room.maxPlayers)) throw new Error('Different game mode');
    if (room.status !== 'LOBBY' || room.expiresAt <= Date.now()) throw new Error('Room unavailable');
    if (room.memberIds.includes(uid)) return;
    if (room.players.length >= room.maxPlayers) throw new Error('Room full');
    tx.update(ref, {
      players: [...room.players, { id: uid, name: name.trim().slice(0, 40), score: 0, role: 'NORMAL', assignedWordId: '' }],
      memberIds: [...room.memberIds, uid],
    });
  });
  return uid;
}
export async function leaveRoom(code: string, uid: string) {
  await runTransaction(db, async tx => {
    const ref = doc(db, 'rooms', code);
    const snap = await tx.get(ref);
    if (!snap.exists()) return;
    const room = snap.data();
    if (!room.memberIds.includes(uid)) return;
    if (room.hostId === uid) { tx.delete(ref); return; }
    // Mid-match departures close the room rather than leaving an unfinishable game.
    if (room.status !== 'LOBBY') { tx.delete(ref); return; }
    tx.update(ref, {
      players: room.players.filter((p: any) => p.id !== uid),
      memberIds: room.memberIds.filter((id: string) => id !== uid),
    });
  });
}
export async function voteInRoom(code: string, uid: string, votedId: string) {
  await runTransaction(db, async tx => {
    const ref = doc(db, 'rooms', code);
    const snap = await tx.get(ref);
    if (!snap.exists()) throw new Error('Room closed');
    const room = snap.data();
    if (room.status !== 'VOTING' || !room.memberIds.includes(uid) || !room.memberIds.includes(votedId)) throw new Error('Invalid vote');
    if (room.votes[uid]) return;
    const votes = { ...room.votes, [uid]: votedId };
    const patch: any = { votes };
    if (Object.keys(votes).length === room.players.length) {
      const tally: Record<string, number> = {};
      Object.values(votes).forEach((id: any) => { tally[id] = (tally[id] || 0) + 1; });
      // Stable tie-break across transaction retries.
      patch.votedOutPlayerId = Object.keys(tally).sort((a, b) => tally[b] - tally[a] || a.localeCompare(b))[0];
      patch.status = 'REVEALED';
    }
    tx.update(ref, patch);
  });
}
export async function guessInDuel(code: string, uid: string, word: string) {
  await runTransaction(db, async tx => {
    const ref = doc(db, 'rooms', code);
    const snap = await tx.get(ref);
    if (!snap.exists()) throw new Error('Room closed');
    const room = snap.data();
    if (room.status !== 'TWO_PLAYERS_GUESS' || !room.memberIds.includes(uid)) throw new Error('Invalid turn');
    if (room.twoPlayersGuessMatched[uid]) return;
    const guesses = { ...room.twoPlayersGuessMatched, [uid]: word };
    const patch: any = { twoPlayersGuessMatched: guesses };
    if (Object.keys(guesses).length === 2) {
      patch.players = room.players.map((p: any, i: number) => ({
        ...p, score: p.score + (guesses[p.id] === room.players[1 - i].assignedWordId ? 50 : 0),
      }));
      patch.status = 'SCOREBOARD';
    }
    tx.update(ref, patch);
  });
}
