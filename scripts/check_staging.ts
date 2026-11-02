import { medicalWords } from '../src/data/medicalWords';
import { STAGING_MEDICAL_WORDS } from '../src/data/staging_batch_1';

const existingNames = new Map(medicalWords.map(w => [w.word.English.toLowerCase().trim(), w]));
const existingAr = new Map(medicalWords.map(w => [w.word.Arabic.toLowerCase().trim(), w]));

console.log('--- WORDS IN STAGING THAT ARE NEW ---');
const newWords = [];
const existingInStaging = [];

for (const sw of STAGING_MEDICAL_WORDS) {
  const en = sw.word.English.toLowerCase().trim();
  const ar = sw.word.Arabic.toLowerCase().trim();
  const match = existingNames.get(en) || existingAr.get(ar);
  if (!match) {
    newWords.push(sw);
    console.log(`[NEW] ${sw.word.Arabic} (${sw.word.English}) - ${sw.subjects.join(', ')}`);
  } else {
    existingInStaging.push({ staging: sw, existing: match });
    console.log(`[ALREADY EXISTS as ${match.id}] ${sw.word.Arabic} (${sw.word.English})`);
  }
}

console.log(`\nSummary: ${newWords.length} NEW, ${existingInStaging.length} ALREADY EXIST`);
