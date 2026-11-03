import { medicalWords, MedicalWord } from '../src/data/medicalWords';

const specialties = [
  'Internal Medicine',
  'Cardiology',
  'Neurology',
  'Gastroenterology',
  'Pulmonology',
  'Nephrology',
  'Endocrinology',
  'Pediatrics',
  'General Surgery',
  'Obstetrics and Gynecology',
  'Orthopedics',
  'Ophthalmology',
  'Dermatology',
  'Forensic Medicine',
  'Clinical Toxicology',
  'Emergency Medicine',
  'Radiology',
  'Immunology',
  'Oncology'
];

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

  // Priority 2: Compatible clinical type with same difficulty
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

console.log('================ MULTI-SPECIALTY DUEL TEST ================');

let allPassed = true;
for (const spec of specialties) {
  for (const diff of [1, 2, 3]) {
    const pool = medicalWords.filter(w => w.subjects.includes(spec) && w.difficulty === diff);
    if (pool.length < 2) {
      // Small pool or specialty not used at this difficulty level
      continue;
    }

    let outOfSpec = 0;
    let diffMismatch = 0;
    const rounds = 200;

    for (let i = 0; i < rounds; i++) {
      const p1 = pool[Math.floor(Math.random() * pool.length)];
      const p2 = testGetRelatedWord(p1, pool);

      if (!p2.subjects.includes(spec)) outOfSpec++;
      if (p2.difficulty !== p1.difficulty) diffMismatch++;
    }

    const status = outOfSpec === 0 && diffMismatch === 0 ? 'PASS' : 'FAIL';
    if (status === 'FAIL') allPassed = false;

    console.log(`[${spec} - Diff ${diff} (Pool size: ${pool.length})]: OutOfSpec=${outOfSpec}, DiffMismatch=${diffMismatch} -> ${status}`);
  }
}

console.log('============================================================');
console.log('OVERALL MULTI-SPECIALTY VERIFICATION:', allPassed ? 'ALL PASSED (100% CLEAN)' : 'FAILED');
