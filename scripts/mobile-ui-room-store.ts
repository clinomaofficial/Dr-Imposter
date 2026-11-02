// In-memory room transport for the separate online UI test build only.
// No production code imports this module. It never calls Firestore or auth.
export * from 'firebase/firestore';
import { medicalWords } from '../src/data/medicalWords';

const battle = new URLSearchParams(location.search).get('mode') === 'battle';
let localId = '';
let failNextWrite = false;
let room: any = {
  hostId: 'host', status: 'LOBBY', maxPlayers: battle ? 2 : 4, specialty: 'All', difficulty: 'All',
  players: [{id:'host', name:'Host Doctor', score:0, role:'NORMAL', assignedWordId:''},
    ...(!battle ? [{id:'peer', name:'Doctor with a long display name', score:0, role:'NORMAL', assignedWordId:''}] : [])],
  votes:{}, twoPlayersGuessMatched:{}, questionsPerPlayer:0, questionTimeLimit:0,
  imposterRevealsMode:'IMPOSTER', imposterCount:1, questioningCycle:[], currentCycleIdx:0,
};
const listeners = new Set<(snapshot: any) => void>();
const snapshot = () => ({ exists: () => true, data: () => structuredClone(room), id:'UITEST' });
const emit = () => listeners.forEach(listener => listener(snapshot()));
export const getDoc = async (ref: any) => {
  if (!ref.path.startsWith('rooms/')) throw new Error('Only local room fixtures are supported');
  return snapshot();
};
export const getDocs = async () => ({ docs:[], empty:true, forEach: () => {} });
export const onSnapshot = (ref: any, next: (snapshot: any) => void) => {
  if (!ref.path?.startsWith('rooms/')) return () => {};
  listeners.add(next); queueMicrotask(() => next(snapshot()));
  return () => { listeners.delete(next); };
};
export const updateDoc = async (ref: any, patch: any) => {
  if (failNextWrite) { failNextWrite=false; throw new Error('Simulated local connection failure'); }
  if (!ref.path.startsWith('rooms/')) throw new Error('Cloud writes are disabled in UI fixtures');
  for (const [path,value] of Object.entries(patch)) {
    const keys = path.split('.'); let target=room;
    keys.slice(0,-1).forEach(key => { target=target[key] ??= {}; });
    target[keys.at(-1)!] = structuredClone(value);
  }
  if (!localId && patch.players) localId=patch.players.at(-1).id;
  emit();
};
export const setDoc = async (ref: any, value: any) => {
  if (!ref.path.startsWith('rooms/')) throw new Error('Cloud writes are disabled in UI fixtures');
  room=structuredClone(value); localId=room.hostId; emit();
};
(window as any).roomFixture = {
  get: () => structuredClone(room), localId: () => localId,
  failNextWrite: () => { failNextWrite=true; },
  patch: (patch: any) => { Object.assign(room,structuredClone(patch)); emit(); },
  advance: (status: string) => {
    room.secretWord=medicalWords[0]; room.imposterAssignedWord=medicalWords[1];
    room.players=room.players.map((p: any,i: number) => ({...p,role: !battle && p.id===localId ? 'IMPOSTER':'NORMAL', assignedWordId: battle ? medicalWords[i].id : p.id===localId ? 'IMPOSTER':medicalWords[0].id}));
    room.inquiry={stage:1,turnPlayerId:localId,targetPlayerId:'host',activeQuestion:null,activeAnswer:null,turnsInStage:0,history:[],resolvedBranches:{}};
    room.status=status; emit();
  },
};
