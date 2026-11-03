import assert from 'node:assert/strict';
import { scoreBank, saveLocalScore, acceptCloudScore, claimGuestScore } from '../src/lib/localScore';
import { writeLocal } from '../src/lib/localStore';
const rows = new Map<string,string>();
Object.assign(globalThis, { localStorage: {
  getItem: (key:string) => rows.get(key) ?? null,
  setItem: (key:string,value:string) => rows.set(key,value),
} });
saveLocalScore(50);
assert.equal(scoreBank().total,50);
saveLocalScore(40);
assert.equal(scoreBank().total,40, 'penalties survive re-opening');
claimGuestScore('alice',100);
assert.deepEqual(scoreBank('alice'),{total:140,earned:40});
assert.equal(scoreBank().total,0);
claimGuestScore('alice',100);
assert.equal(scoreBank('alice').total,140,'guest transfer cannot repeat');
claimGuestScore('bob',0);
assert.equal(scoreBank('bob').total,0,'guest transfer cannot be claimed by a second account');
saveLocalScore(130,'alice',100);
assert.deepEqual(scoreBank('alice',100),{total:130,earned:30});
saveLocalScore(180,'alice',100); // Earn points while an upload of 30 is in flight.
acceptCloudScore('alice',230,30); // Another device also earned 100.
assert.equal(scoreBank('alice').total,280);
assert.equal(scoreBank('alice').earned,80);
saveLocalScore(270,'alice');
acceptCloudScore('alice',280,80); // A penalty while upload was in flight.
assert.equal(scoreBank('alice').total,270);
writeLocal('clinoma-guest-transfer',{uid:'crash',bank:{total:25,earned:25}});
assert.equal(scoreBank('crash').total,25,'interrupted transfer replays exactly once');
assert.equal(scoreBank('crash').total,25);
console.log('PASS local scores, penalties, account isolation, crash recovery, concurrent sync rebasing');
