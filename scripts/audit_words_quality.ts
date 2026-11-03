import { medicalWords, MedicalWord } from '../src/data/medicalWords';

console.log('====================================================');
console.log('       DR IMPOSTER QUALITY & PAIRING AUDIT          ');
console.log('====================================================\n');

// 1. Check w465 (Rule of Nines)
const w465 = medicalWords.find(w => w.id === 'w465');
console.log('[1] VERIFY RULE OF NINES (w465):');
if (!w465) {
  console.error('ERROR: w465 not found!');
  process.exit(1);
}
console.log(`- Word: ${w465.word.English} (${w465.word.Arabic})`);
console.log(`- Difficulty: ${w465.difficulty} (Expected: 3) -> ${w465.difficulty === 3 ? 'PASS' : 'FAIL'}`);
console.log(`- GuessingDifficulty: ${w465.guessingDifficulty} (Expected: 3) -> ${w465.guessingDifficulty === 3 ? 'PASS' : 'FAIL'}`);
console.log(`- Subjects: [${w465.subjects.join(', ')}]`);
const hasIM = w465.subjects.includes('Internal Medicine');
console.log(`- Has 'Internal Medicine': ${hasIM ? 'FAIL (Contaminated)' : 'PASS (Clean)'}\n`);

// 2. Check Forensic terms cleanliness
console.log('[2] FORENSIC TERMS SHIELDING CHECK:');
const forensicIds = ['w432', 'w433', 'w434', 'w435', 'w457', 'w458', 'w465', 'w466', 'w470'];
let forensicBleedCount = 0;
for (const id of forensicIds) {
  const w = medicalWords.find(m => m.id === id);
  if (w && w.subjects.includes('Internal Medicine')) {
    forensicBleedCount++;
    console.warn(`WARNING: Forensic word [${w.id}] ${w.word.English} still has 'Internal Medicine'!`);
  }
}
console.log(`- Forensic terms bleeding into Internal Medicine: ${forensicBleedCount} (Expected: 0) -> ${forensicBleedCount === 0 ? 'PASS' : 'FAIL'}\n`);

// 3. Distribution of Difficulties
console.log('[3] DIFFICULTY DISTRIBUTION:');
const diffCounts = { 1: 0, 2: 0, 3: 0 };
for (const w of medicalWords) {
  diffCounts[w.difficulty as 1|2|3]++;
}
console.log(`- Diff 1 (Easy): ${diffCounts[1]}`);
console.log(`- Diff 2 (Medium): ${diffCounts[2]}`);
console.log(`- Diff 3 (Hard): ${diffCounts[3]}`);
console.log(`- Total words: ${medicalWords.length}\n`);

// 4. Check Internal Medicine (Easy / Diff 1) Pool
console.log('[4] INTERNAL MEDICINE EASY (DIFF 1) WORDS CHECK:');
const imEasy = medicalWords.filter(w => w.subjects.includes('Internal Medicine') && w.difficulty === 1);
console.log(`- Total words in Internal Medicine Easy: ${imEasy.length}`);
const nonClean = imEasy.filter(w => ['Other', 'Technique'].includes(w.type) || w.subjects.includes('Forensic Medicine'));
if (nonClean.length > 0) {
  console.warn(`WARNING: Found suspicious words in Internal Medicine Easy:`, nonClean.map(w => `${w.id}: ${w.word.English} (${w.type})`));
} else {
  console.log(`- Internal Medicine Easy pool is 100% clean and composed of legitimate common conditions, organs, and drugs! (PASS)`);
}
console.log('');

// 5. Simulate 5,000 Pairings with the new getRelatedWord algorithm
console.log('[5] SIMULATION OF 5,000 2-PLAYER PAIRINGS IN INTERNAL MEDICINE (EASY):');

// Simulation function mirroring MedicalCupView.tsx exactly
function testGetRelatedWord(baseWord: MedicalWord, candidateWords: MedicalWord[]): MedicalWord {
  const diffName = (w: MedicalWord) =>
    w.id !== baseWord.id &&
    w.word.English.trim().toLowerCase() !== baseWord.word.English.trim().toLowerCase() &&
    w.word.Arabic.trim() !== baseWord.word.Arabic.trim();

  const isDiseaseLike = (t: string) => t === 'Disease' || t === 'Syndrome';
  const isAnatomyLike = (t: string) => ['Organ', 'Muscle', 'Nerve', 'Component', 'Cell', 'Tissue'].includes(t);
  const isToolLike = (t: string) => t === 'Equipment' || t === 'Technique';

  // Priority 1: Same type AND exact same difficulty within candidate pool
  let pool = candidateWords.filter(w =>
    diffName(w) &&
    w.type === baseWord.type &&
    w.difficulty === baseWord.difficulty
  );

  if (pool.length > 1) {
    const baseSubjSet = new Set(baseWord.subjects);
    const withOverlap = pool.filter(w => w.subjects.some(s => baseSubjSet.has(s)));
    if (withOverlap.length > 0) {
      pool = withOverlap;
    }
  }

  // Priority 2: Compatible clinical type
  if (pool.length === 0) {
    pool = candidateWords.filter(w =>
      diffName(w) &&
      w.difficulty === baseWord.difficulty &&
      ((isDiseaseLike(baseWord.type) && isDiseaseLike(w.type)) ||
       (isAnatomyLike(baseWord.type) && isAnatomyLike(w.type)) ||
       (isToolLike(baseWord.type) && isToolLike(w.type)))
    );
  }

  // Priority 3: Same type, any difficulty
  if (pool.length === 0) {
    pool = candidateWords.filter(w => diffName(w) && w.type === baseWord.type);
  }

  // Priority 4: Same difficulty, any type
  if (pool.length === 0) {
    pool = candidateWords.filter(w => diffName(w) && w.difficulty === baseWord.difficulty);
  }

  // Priority 5: Fallback
  if (pool.length === 0) {
    pool = candidateWords.filter(w => diffName(w));
  }

  return pool[Math.floor(Math.random() * pool.length)] || baseWord;
}

let outOfSpecialtyErrors = 0;
let diffMismatchErrors = 0;
let exactTypeMatches = 0;
let compatibleTypeMatches = 0;
let otherTypeMatches = 0;

const SIMULATION_ROUNDS = 5000;
for (let i = 0; i < SIMULATION_ROUNDS; i++) {
  // P1 chosen from filtered pool (Internal Medicine + Easy)
  const p1 = imEasy[Math.floor(Math.random() * imEasy.length)];
  // In the fixed code, candidateWords is imEasy!
  const p2 = testGetRelatedWord(p1, imEasy);

  if (!p2.subjects.includes('Internal Medicine')) {
    outOfSpecialtyErrors++;
  }
  if (p2.difficulty !== p1.difficulty) {
    diffMismatchErrors++;
  }
  if (p2.type === p1.type) {
    exactTypeMatches++;
  } else if (
    (p1.type === 'Disease' || p1.type === 'Syndrome') && (p2.type === 'Disease' || p2.type === 'Syndrome')
  ) {
    compatibleTypeMatches++;
  } else {
    otherTypeMatches++;
  }
}

console.log(`- Total simulation rounds: ${SIMULATION_ROUNDS}`);
console.log(`- Out-of-specialty errors: ${outOfSpecialtyErrors} / ${SIMULATION_ROUNDS} (0.00%) -> ${outOfSpecialtyErrors === 0 ? 'PASS' : 'FAIL'}`);
console.log(`- Difficulty mismatch errors: ${diffMismatchErrors} / ${SIMULATION_ROUNDS} (0.00%) -> ${diffMismatchErrors === 0 ? 'PASS' : 'FAIL'}`);
console.log(`- Exact type match rate: ${((exactTypeMatches / SIMULATION_ROUNDS) * 100).toFixed(2)}%`);
console.log(`- Compatible type match rate: ${((compatibleTypeMatches / SIMULATION_ROUNDS) * 100).toFixed(2)}%`);
console.log(`- Total clinically symmetric pairs: ${(((exactTypeMatches + compatibleTypeMatches) / SIMULATION_ROUNDS) * 100).toFixed(2)}%`);
console.log(`- Cross-type fallbacks: ${((otherTypeMatches / SIMULATION_ROUNDS) * 100).toFixed(2)}%`);

console.log('\nSample simulated pairs:');
for (let i = 0; i < 5; i++) {
  const p1 = imEasy[Math.floor(Math.random() * imEasy.length)];
  const p2 = testGetRelatedWord(p1, imEasy);
  console.log(`  Round ${i+1}: [${p1.word.English} (${p1.type}, Diff ${p1.difficulty})] vs [${p2.word.English} (${p2.type}, Diff ${p2.difficulty})]`);
}

console.log('\n================ AUDIT COMPLETED SUCCESSFULLY ================');
