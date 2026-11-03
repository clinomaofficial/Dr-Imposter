import { initializeTestEnvironment, assertFails, assertSucceeds } from '@firebase/rules-unit-testing';
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import { doc, getDoc, setDoc, updateDoc, deleteDoc, getDocs, query, collection, where, limit } from 'firebase/firestore';
import { runRoomTransaction as runTransaction } from '../src/lib/roomTransaction.ts';

const env = await initializeTestEnvironment({
  projectId: 'demo-clinoma-offline',
  firestore: { host: '127.0.0.1', port: 8080, rules: readFileSync('firestore.rules', 'utf8') },
});
const passed = [];
async function check(name, action) { await action(); passed.push(name); console.log('PASS', name); }
const player = id => ({ id, name: id, role: 'NORMAL', assignedWordId: '', score: 0 });
const base = (ids = ['host'], maxPlayers = 4) => ({
  id: 'ABC123', hostId: 'host', memberIds: ids, players: ids.map(player), maxPlayers,
  status: 'LOBBY', isPublic: true, createdAt: Date.now(), expiresAt: Date.now()+7200000,
  secretWord: null, imposterAssignedWord: null, votes: {}, twoPlayersGuessMatched: {},
});
const db = uid => env.authenticatedContext(uid, {email:`${uid}@example.invalid`}).firestore();
const host = db('host'), a = db('alice'), b = db('bob'), outsider = db('outsider');
const ref = client => doc(client,'rooms','ABC123');
const seed = async room => env.withSecurityRulesDisabled(c => setDoc(ref(c.firestore()),room));
try {
  await env.clearFirestore();
  await check('unauthenticated room create rejected', () => assertFails(setDoc(ref(env.unauthenticatedContext().firestore()),base())));
  await check('host creates authenticated lobby', () => assertSucceeds(setDoc(ref(host),base())));
  await check('host identity cannot be forged', () => assertFails(setDoc(doc(a,'rooms','FAKE12'),base())));
  await check('outsider cannot modify game state', () => assertFails(updateDoc(ref(outsider),{status:'PLAYING'})));
  await check('over-capacity roster rejected', () => assertFails(updateDoc(ref(host),{memberIds:['host','a','b','c','d'],players:['host','a','b','c','d'].map(player)})));
  const join = (client,uid) => runTransaction(client,async tx => {
    const snap=await tx.get(ref(client)), room=snap.data();
    tx.update(ref(client),{memberIds:[...room.memberIds,uid],players:[...room.players,player(uid)]});
  });
  await check('simultaneous joins preserve both players', async () => {
    await Promise.all([join(a,'alice'),join(b,'bob')]);
    assert.equal((await getDoc(ref(host))).data().players.length,3);
  });
  await check('joining player cannot replace existing roster', () => assertFails(updateDoc(ref(outsider),{memberIds:['host','alice','bob','outsider'],players:[player('host'),player('alice'),{...player('bob'),score:100},player('outsider')]})));
  await check('member can leave lobby without rewriting others', () => assertSucceeds(updateDoc(ref(a),{memberIds:['host','bob'],players:[player('host'),player('bob')]})));
  await seed({...base(['host','alice','bob']),status:'VOTING'});
  await check('outsider cannot read a live game', () => assertFails(getDoc(ref(outsider))));
  await check('member can read live game', () => assertSucceeds(getDoc(ref(a))));
  await check('vote spoofing rejected', () => assertFails(updateDoc(ref(a),{votes:{bob:'host'}})));
  await check('valid own vote accepted', () => assertSucceeds(updateDoc(ref(a),{votes:{alice:'host'}})));
  await check('duplicate vote cannot be changed', () => assertFails(updateDoc(ref(a),{votes:{alice:'bob'}})));
  await check('concurrent votes retain all ballots',async () => {
    const vote=(client,uid)=>runTransaction(client,async tx=>{
      const room=(await tx.get(ref(client))).data(), votes={...room.votes,[uid]:'host'};
      tx.update(ref(client),Object.keys(votes).length===3 ? {votes,status:'REVEALED',votedOutPlayerId:'host'} : {votes});
    });
    await Promise.all([vote(host,'host'),vote(b,'bob')]);
    const room=(await getDoc(ref(host))).data();
    assert.equal(Object.keys(room.votes).length,3); assert.equal(room.status,'REVEALED');
  });
  await seed({...base(['host','alice'],2),status:'TWO_PLAYERS_GUESS',players:[{...player('host'),assignedWordId:'A'},{...player('alice'),assignedWordId:'B'}]});
  await check('first duel guess accepted',()=>assertSucceeds(updateDoc(ref(a),{twoPlayersGuessMatched:{alice:'A'}})));
  await check('forged duel score rejected',()=>assertFails(updateDoc(ref(a),{twoPlayersGuessMatched:{alice:'A'},players:[{...player('host'),assignedWordId:'A',score:999},player('alice')],status:'SCOREBOARD'})));
  await check('final duel guess scores once',()=>assertSucceeds(updateDoc(ref(host),{twoPlayersGuessMatched:{alice:'A',host:'B'},players:[{...player('host'),assignedWordId:'A',score:50},{...player('alice'),assignedWordId:'B',score:50}],status:'SCOREBOARD'})));
  await seed({...base(),expiresAt:Date.now()-1000});
  await check('expired room cannot be updated',()=>assertFails(updateDoc(ref(host),{status:'PLAYING'})));
  await check('user cannot self-register as administrator',()=>assertFails(setDoc(doc(a,'users','alice'),{id:'alice',email:'alice@example.invalid',role:'super_admin'})));
  await check('ordinary free profile accepted',()=>assertSucceeds(setDoc(doc(a,'users','alice'),{id:'alice',email:'alice@example.invalid',role:'user',detectiveScore:0})));
  await check('user cannot promote own role',()=>assertFails(updateDoc(doc(a,'users','alice'),{role:'admin'})));
  await check('user cannot change access permissions',()=>assertFails(updateDoc(doc(a,'users','alice'),{permissions:{admin:true}})));
  await check('owner score receipt accepted',()=>assertSucceeds(setDoc(doc(a,'users','alice','scoreReceipts','device1'),{earned:50})));
  await check('another user cannot change score receipt',()=>assertFails(setDoc(doc(b,'users','alice','scoreReceipts','device1'),{earned:100})));
  await check('score receipt cannot contain arbitrary fields',()=>assertFails(setDoc(doc(a,'users','alice','scoreReceipts','device1'),{earned:0,role:'admin'})));
  console.log('Completed',passed.length,'security checks');
} finally {
  mkdirSync('reports/offline-first',{recursive:true});
  writeFileSync('reports/offline-first/rules-results.json',JSON.stringify({passed,project:'demo-clinoma-offline',productionAccessed:false},null,2));
  await env.cleanup();
}
