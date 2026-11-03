import {initializeTestEnvironment} from '@firebase/rules-unit-testing';
import {readFileSync} from 'node:fs';
import {doc,setDoc,updateDoc,getDoc} from 'firebase/firestore';
let rules=readFileSync('firestore.rules','utf8');
const start=rules.indexOf('      // Separate rules'), end=rules.indexOf('      allow delete:',start);
rules=rules.slice(0,start)+`      allow update: if debug(isSignedIn()) && debug(live()) && debug(stable()) && debug(validRoster()) && debug(joining());\n`+rules.slice(end);
const env=await initializeTestEnvironment({projectId:'demo-clinoma-offline',firestore:{host:'127.0.0.1',port:8080,rules}});
const p=id=>({id,name:id,role:'NORMAL',assignedWordId:'',score:0});
const db=env.authenticatedContext('alice').firestore();
await env.withSecurityRulesDisabled(c=>setDoc(doc(c.firestore(),'rooms','DEBUG1'),{hostId:'host',memberIds:['host'],players:[p('host')],maxPlayers:4,status:'LOBBY',isPublic:true,createdAt:Date.now(),expiresAt:Date.now()+7200000,votes:{},secretWord:null,imposterAssignedWord:null}));
console.log((await getDoc(doc(db,'rooms','DEBUG1'))).data());
try {await updateDoc(doc(db,'rooms','DEBUG1'),{memberIds:['host','alice'],players:[p('host'),p('alice')]}); console.log('join passed');}
finally {await env.cleanup();}
