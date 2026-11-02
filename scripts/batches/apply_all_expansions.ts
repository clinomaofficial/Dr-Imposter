import fs from 'fs';
import path from 'path';
import { OPHTHALMOLOGY_EXPANSION } from './batch1_ophthalmology';
import { RADIOLOGY_DERMATOLOGY_EXPANSION } from './batch2_radiology_dermatology';
import { IMMUNOLOGY_ONCOLOGY_EXPANSION } from './batch3_immunology_oncology';
import { OBGYN_EXPANSION } from './batch4_obgyn';
import { WordExpansionEntry } from './types';

const allBatches: WordExpansionEntry[] = [
  ...OPHTHALMOLOGY_EXPANSION,
  ...RADIOLOGY_DERMATOLOGY_EXPANSION,
  ...IMMUNOLOGY_ONCOLOGY_EXPANSION,
  ...OBGYN_EXPANSION
];

console.log(`Loaded ${allBatches.length} expansion words in total.`);

// 1. Check uniqueness of IDs and names
const seenIds = new Set<string>();
const seenEn = new Set<string>();
for (const entry of allBatches) {
  if (seenIds.has(entry.word.id)) {
    throw new Error(`Duplicate ID within expansion: ${entry.word.id}`);
  }
  seenIds.add(entry.word.id);
  const en = entry.word.word.English.toLowerCase().trim();
  if (seenEn.has(en)) {
    throw new Error(`Duplicate English name within expansion: ${entry.word.word.English}`);
  }
  seenEn.add(en);
}
console.log('Internal uniqueness check passed.');

// 2. Paths
const rootDir = process.cwd();
const medicalWordsPath = path.join(rootDir, 'src/data/medicalWords.ts');
const hintsPath = path.join(rootDir, 'src/data/hints.ts');
const flashcardsPath = path.join(rootDir, 'src/data/soloFlashcards.ts');
const medicalCupViewPath = path.join(rootDir, 'src/components/views/MedicalCupView.tsx');

// Backup files first
fs.copyFileSync(medicalWordsPath, medicalWordsPath + '.bak');
fs.copyFileSync(hintsPath, hintsPath + '.bak');
fs.copyFileSync(flashcardsPath, flashcardsPath + '.bak');
console.log('Backups created.');

// 3. Update medicalWords.ts
let mwContent = fs.readFileSync(medicalWordsPath, 'utf8');

const mwRegex = /\r?\n\];\r?\n\r?\n\/\/ In-place dynamic enrichment/;
const mwMatch = mwContent.match(mwRegex);
if (!mwMatch || mwMatch.index === undefined) {
  throw new Error('Could not find closing of medicalWords array in medicalWords.ts');
}

const wordsCodeBlocks = allBatches.map(entry => {
  const w = entry.word;
  return `  {\n    id: ${JSON.stringify(w.id)},\n    word: { Arabic: ${JSON.stringify(w.word.Arabic)}, English: ${JSON.stringify(w.word.English)} },\n    level: ${JSON.stringify(w.level)},\n    difficulty: ${w.difficulty},\n    type: ${JSON.stringify(w.type)},\n    subjects: ${JSON.stringify(w.subjects)},\n    synonyms: ${JSON.stringify(w.synonyms || [])},\n    guessingDifficulty: ${w.guessingDifficulty || w.difficulty}\n  }`;
}).join(',\n');

mwContent = mwContent.slice(0, mwMatch.index) + ',\n' + wordsCodeBlocks + mwContent.slice(mwMatch.index);

// Add dynamic enrichment rules for Radiology & Immunology if needed
if (!mwContent.includes("sSet.add('Radiology');")) {
  const targetLoopMarker = "if (containsAny(['eye', 'ocular', 'retina',";
  const radiologyRule = `  if (containsAny(['x-ray', 'ct ', 'mri', 'ultrasound', 'radiolog', 'fluoroscop', 'mammogra', 'angiogra', 'contrast', 'pet scan', 'dexa', 'barium', 'أشعة', 'رنين', 'سونار', 'مقطعية', 'ماموجرام', 'دوبلر'])) {\n    sSet.add('Radiology');\n  }\n\n  `;
  mwContent = mwContent.replace(targetLoopMarker, radiologyRule + targetLoopMarker);
}

fs.writeFileSync(medicalWordsPath, mwContent, 'utf8');
console.log('Successfully updated medicalWords.ts with new words!');

// 4. Update hints.ts
let hintsContent = fs.readFileSync(hintsPath, 'utf8');

const hintsRegex = /\r?\n\};\r?\n\r?\nfunction makeArabicClueEgyptianAndClean/;
const hintsMatch = hintsContent.match(hintsRegex);
if (!hintsMatch || hintsMatch.index === undefined) {
  throw new Error('Could not find closing of HINTS_DICTIONARY in hints.ts');
}

const hintsCodeBlocks = allBatches.map(entry => {
  return `  ${JSON.stringify(entry.word.id)}: {\n    "Arabic": ${JSON.stringify(entry.hints.Arabic, null, 8).replace(/\n/g, '\n    ')},\n    "English": ${JSON.stringify(entry.hints.English, null, 8).replace(/\n/g, '\n    ')}\n  }`;
}).join(',\n');

hintsContent = hintsContent.slice(0, hintsMatch.index) + ',\n' + hintsCodeBlocks + hintsContent.slice(hintsMatch.index);
fs.writeFileSync(hintsPath, hintsContent, 'utf8');
console.log('Successfully updated hints.ts with new hints!');

// 5. Update soloFlashcards.ts
let fcContent = fs.readFileSync(flashcardsPath, 'utf8');
const fcRegex = /\r?\n\};\r?\n\r?\n\/\*\*\r?\n \* دالة استخراج بطاقة الفلاش كارد/;
const fcMatch = fcContent.match(fcRegex);
if (!fcMatch || fcMatch.index === undefined) {
  throw new Error('Could not find closing of SOLO_FLASHCARDS_DB in soloFlashcards.ts');
}

const flashcardsWithData = allBatches.filter(e => e.flashcard);
const fcCodeBlocks = flashcardsWithData.map(entry => {
  return `  ${JSON.stringify(entry.word.id)}: {\n    "Arabic": ${JSON.stringify(entry.flashcard!.Arabic, null, 6).replace(/\n/g, '\n    ')},\n    "English": ${JSON.stringify(entry.flashcard!.English, null, 6).replace(/\n/g, '\n    ')}\n  }`;
}).join(',\n');

fcContent = fcContent.slice(0, fcMatch.index) + ',\n' + fcCodeBlocks + fcContent.slice(fcMatch.index);
fs.writeFileSync(flashcardsPath, fcContent, 'utf8');
console.log(`Successfully updated soloFlashcards.ts with ${flashcardsWithData.length} new flashcards!`);

// 6. Update MedicalCupView.tsx to add Radiology if not present
let viewContent = fs.readFileSync(medicalCupViewPath, 'utf8');
if (!viewContent.includes("id:'Radiology'")) {
  const targetClinMarker = "{ id:'Internal Medicine', nameEn:'Internal Medicine', nameAr:'الباطنية العامة' },";
  const radItem = "{ id:'Radiology', nameEn:'Radiology', nameAr:'الأشعة والتصوير الطبي' },\n    ";
  viewContent = viewContent.replace(targetClinMarker, radItem + targetClinMarker);
  fs.writeFileSync(medicalCupViewPath, viewContent, 'utf8');
  console.log('Successfully added Radiology to MedicalCupView clinical specialties!');
}

console.log('All expansion batches applied successfully!');
