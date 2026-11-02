import fs from 'fs';
import path from 'path';
import { medicalWords, MedicalWord } from '../src/data/medicalWords';
import { HINTS_DICTIONARY } from '../src/data/hints';
import { SOLO_DISEASE_HINTS } from '../src/data/soloHints';
import { SOLO_FLASHCARDS_DB } from '../src/data/soloFlashcards';
import { WORD_IMAGES } from '../src/data/wordImages';

const norm = (s: string) => (s || '').toLowerCase().replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي').replace(/[-_\s]+/g, ' ').trim();

console.log('====================================================');
console.log('       COMPREHENSIVE MEDICAL WORDS & PLATFORM AUDIT ');
console.log('====================================================\n');

// 1. BASIC STATS
console.log(`[1] BASIC STATS:`);
console.log(`- Total medicalWords: ${medicalWords.length}`);
console.log(`- Total entries in HINTS_DICTIONARY: ${Object.keys(HINTS_DICTIONARY).length}`);
console.log(`- Total entries in SOLO_DISEASE_HINTS: ${Object.keys(SOLO_DISEASE_HINTS).length}`);
console.log(`- Total entries in SOLO_FLASHCARDS_DB: ${Object.keys(SOLO_FLASHCARDS_DB).length}`);
console.log(`- Total entries in WORD_IMAGES: ${Object.keys(WORD_IMAGES).length}\n`);

// 2. CHECK DUPLICATE IDS AND NAMES
console.log(`[2] DUPLICATES IN medicalWords:`);
const idMap = new Map<string, number>();
const enMap = new Map<string, MedicalWord[]>();
const arMap = new Map<string, MedicalWord[]>();

for (const w of medicalWords) {
  idMap.set(w.id, (idMap.get(w.id) || 0) + 1);
  const nEn = norm(w.word?.English);
  const nAr = norm(w.word?.Arabic);
  if (!enMap.has(nEn)) enMap.set(nEn, []);
  enMap.get(nEn)!.push(w);
  if (!arMap.has(nAr)) arMap.set(nAr, []);
  arMap.get(nAr)!.push(w);
}

const dupIds = [...idMap.entries()].filter(([id, count]) => count > 1);
console.log(`- Duplicate IDs: ${dupIds.length}`);
if (dupIds.length > 0) console.log('  ', dupIds);

const dupEn = [...enMap.entries()].filter(([name, list]) => list.length > 1);
console.log(`- Duplicate English names: ${dupEn.length}`);
for (const [name, list] of dupEn) {
  console.log(`   * "${name}": [${list.map(w => `${w.id} (${w.word.English} / ${w.word.Arabic})`).join(', ')}]`);
}

const dupAr = [...arMap.entries()].filter(([name, list]) => list.length > 1 && !dupEn.some(([en]) => list.every(w => norm(w.word.English) === en)));
console.log(`- Duplicate Arabic names (where English differed): ${dupAr.length}`);
for (const [name, list] of dupAr) {
  console.log(`   * "${name}": [${list.map(w => `${w.id} (${w.word.English} / ${w.word.Arabic})`).join(', ')}]`);
}
console.log('');

// 3. SCHEMA & FIELD INTEGRITY
console.log(`[3] SCHEMA & INTEGRITY CHECKS:`);
const validLevels = new Set(['Academic', 'Clinical', 'Both']);
const validDifficulties = new Set([1, 2, 3]);
const validTypes = new Set([
  'Organ', 'Component', 'Disease', 'Equipment', 'Syndrome', 'Pharma',
  'Muscle', 'Nerve', 'Other', 'Parasite', 'Technique', 'Cell', 'Tissue'
]);

let missingFields = 0;
let invalidLevels: any[] = [];
let invalidDiffs: any[] = [];
let invalidTypes: any[] = [];
let emptySubjects: string[] = [];
let emptySynonyms: string[] = [];

for (const w of medicalWords) {
  if (!w.id || !w.word || !w.word.Arabic || !w.word.English) {
    missingFields++;
    console.log(`   - Word missing core fields:`, w);
  }
  if (!validLevels.has(w.level)) invalidLevels.push({ id: w.id, level: w.level });
  if (!validDifficulties.has(w.difficulty)) invalidDiffs.push({ id: w.id, diff: w.difficulty });
  if (!validTypes.has(w.type)) invalidTypes.push({ id: w.id, type: w.type });
  if (!w.subjects || w.subjects.length === 0) emptySubjects.push(w.id);
  if (w.synonyms && w.synonyms.some(s => !s || !s.trim())) emptySynonyms.push(w.id);
}

console.log(`- Missing core fields: ${missingFields}`);
console.log(`- Invalid levels: ${invalidLevels.length}`, invalidLevels);
console.log(`- Invalid difficulties: ${invalidDiffs.length}`, invalidDiffs);
console.log(`- Invalid types: ${invalidTypes.length}`, invalidTypes);
console.log(`- Empty subjects: ${emptySubjects.length}`, emptySubjects);
console.log(`- Malformed synonyms: ${emptySynonyms.length}`, emptySynonyms);
console.log('');

// 4. DISTRIBUTION OF TYPES, LEVELS, DIFFICULTIES
console.log(`[4] DISTRIBUTIONS:`);
const typeDist: Record<string, number> = {};
const levelDist: Record<string, number> = {};
const diffDist: Record<string, number> = {};
for (const w of medicalWords) {
  typeDist[w.type] = (typeDist[w.type] || 0) + 1;
  levelDist[w.level] = (levelDist[w.level] || 0) + 1;
  diffDist[w.difficulty] = (diffDist[w.difficulty] || 0) + 1;
}
console.log('- Types:', typeDist);
console.log('- Levels:', levelDist);
console.log('- Difficulties:', diffDist);
console.log('');

// 5. SUBJECTS ANALYSIS
console.log(`[5] SUBJECTS ANALYSIS:`);
const subjectCounts: Record<string, number> = {};
for (const w of medicalWords) {
  for (const s of (w.subjects || [])) {
    subjectCounts[s] = (subjectCounts[s] || 0) + 1;
  }
}
const sortedSubjects = Object.entries(subjectCounts).sort((a, b) => b[1] - a[1]);
console.log(`- Total unique subjects: ${sortedSubjects.length}`);
console.log('- Subject word counts:');
for (const [sub, cnt] of sortedSubjects) {
  console.log(`   * ${sub.padEnd(25)}: ${cnt} words`);
}
const smallSubjects = sortedSubjects.filter(([_, cnt]) => cnt < 5);
if (smallSubjects.length > 0) {
  console.log(`- WARNING: Subjects with < 5 words:`, smallSubjects);
}
console.log('');

// 6. HINTS COVERAGE & QUALITY
console.log(`[6] HINTS COVERAGE & QUALITY:`);
const wordIdSet = new Set(medicalWords.map(w => w.id));
const hintKeySet = new Set(Object.keys(HINTS_DICTIONARY));

const wordsWithoutHints = medicalWords.filter(w => !HINTS_DICTIONARY[w.id]);
console.log(`- Words in medicalWords missing from HINTS_DICTIONARY: ${wordsWithoutHints.length}`);
if (wordsWithoutHints.length > 0) console.log(wordsWithoutHints.map(w => `${w.id}: ${w.word.English}`));

const orphanHints = Object.keys(HINTS_DICTIONARY).filter(id => !wordIdSet.has(id));
console.log(`- Orphan entries in HINTS_DICTIONARY (not in medicalWords): ${orphanHints.length}`);
if (orphanHints.length > 0) console.log(orphanHints);

let lowClueWords: any[] = [];
let internalDups = 0;
let crossWordClueMap = new Map<string, string[]>(); // clue -> [wordIds]
let emptyCluesList: any[] = [];
let placeholderClues: any[] = [];
let directLeakClues: any[] = [];

const placeholderRegex = /\b(undefined|null|NaN|TODO|FIXME|XXX)\b/i;
const mojibakeRegex = /[\uFFFD]/;

for (const w of medicalWords) {
  const hints = HINTS_DICTIONARY[w.id];
  if (!hints) continue;

  const arHints = hints.Arabic || [];
  const enHints = hints.English || [];
  const totalClues = arHints.length + enHints.length;

  if (arHints.length < 5 || enHints.length < 5) {
    lowClueWords.push({ id: w.id, name: w.word.English, ar: arHints.length, en: enHints.length });
  }

  // Check internal duplicates
  const seenAr = new Set<string>();
  for (const c of arHints) {
    const nc = norm(c);
    if (!nc) emptyCluesList.push({ id: w.id, lang: 'Ar' });
    if (seenAr.has(nc)) internalDups++;
    seenAr.add(nc);
    
    // Cross map
    const k = 'AR:' + nc;
    if (!crossWordClueMap.has(k)) crossWordClueMap.set(k, []);
    crossWordClueMap.get(k)!.push(w.id);

    // Placeholders
    if (placeholderRegex.test(c) || mojibakeRegex.test(c)) {
      placeholderClues.push({ id: w.id, clue: c });
    }

    // Direct leak: word itself in the clue!
    const arWordNorm = norm(w.word.Arabic);
    if (arWordNorm.length > 2 && nc.includes(arWordNorm)) {
      directLeakClues.push({ id: w.id, word: w.word.Arabic, clue: c });
    }
  }

  const seenEn = new Set<string>();
  for (const c of enHints) {
    const nc = norm(c);
    if (!nc) emptyCluesList.push({ id: w.id, lang: 'En' });
    if (seenEn.has(nc)) internalDups++;
    seenEn.add(nc);

    // Cross map
    const k = 'EN:' + nc;
    if (!crossWordClueMap.has(k)) crossWordClueMap.set(k, []);
    crossWordClueMap.get(k)!.push(w.id);

    // Placeholders
    if (placeholderRegex.test(c) || mojibakeRegex.test(c)) {
      placeholderClues.push({ id: w.id, clue: c });
    }

    // Direct leak: word itself in the clue!
    const enWordNorm = norm(w.word.English);
    if (enWordNorm.length > 2) {
      // Use regex with word boundary for english to avoid partial match (like 'heart' in 'heartbeat' or 'cell' in 'cellular')
      const enRegex = new RegExp(`\\b${enWordNorm}\\b`, 'i');
      if (enRegex.test(c)) {
        directLeakClues.push({ id: w.id, word: w.word.English, clue: c });
      }
    }
  }
}

console.log(`- Words with < 5 clues in either Arabic or English: ${lowClueWords.length}`);
if (lowClueWords.length > 0) console.log(lowClueWords.slice(0, 10));
console.log(`- Internal duplicate clues within same word: ${internalDups}`);
console.log(`- Empty clues: ${emptyCluesList.length}`);
console.log(`- Real placeholder / mojibake clues: ${placeholderClues.length}`);
if (placeholderClues.length > 0) console.log(placeholderClues.slice(0, 10));
console.log(`- Direct answer leaks (clue contains exact answer word): ${directLeakClues.length}`);
console.log(`  (Sample leaks: ${directLeakClues.length > 0 ? JSON.stringify(directLeakClues.slice(0, 5), null, 2) : 'none'})`);

// Cross duplicates
const crossDups = [...crossWordClueMap.entries()].filter(([_, ids]) => {
  const uniqueIds = new Set(ids);
  return uniqueIds.size > 1;
});
console.log(`- Distinct clues shared across multiple words: ${crossDups.length}`);
console.log('');

// 7. SOLO HINTS & FLASHCARDS COVERAGE
console.log(`[7] SOLO MODE COVERAGE:`);
const diseasesAndSyndromes = medicalWords.filter(w => w.type === 'Disease' || w.type === 'Syndrome');
console.log(`- Total Diseases & Syndromes: ${diseasesAndSyndromes.length}`);

const soloHintKeys = new Set(Object.keys(SOLO_DISEASE_HINTS));
const missingSoloHints = diseasesAndSyndromes.filter(w => !soloHintKeys.has(w.id));
console.log(`- Diseases/Syndromes missing SOLO hints: ${missingSoloHints.length}`);
if (missingSoloHints.length > 0) {
  console.log(`  Missing:`, missingSoloHints.map(w => `${w.id}: ${w.word.English}`));
}

const soloFlashcardKeys = new Set(Object.keys(SOLO_FLASHCARDS_DB));
const missingFlashcards = diseasesAndSyndromes.filter(w => !soloFlashcardKeys.has(w.id));
console.log(`- Diseases/Syndromes missing SOLO flashcards: ${missingFlashcards.length}`);
if (missingFlashcards.length > 0) {
  console.log(`  Missing:`, missingFlashcards.map(w => `${w.id}: ${w.word.English}`));
}

// Check non-diseases in solo
const nonDiseaseSoloHints = Object.keys(SOLO_DISEASE_HINTS).filter(id => {
  const w = medicalWords.find(mw => mw.id === id);
  return w && w.type !== 'Disease' && w.type !== 'Syndrome';
});
console.log(`- Non-Disease/Syndrome words present in SOLO hints: ${nonDiseaseSoloHints.length}`);

// Check empty fields in solo hints
let malformedSoloHints = 0;
for (const [id, data] of Object.entries(SOLO_DISEASE_HINTS)) {
  if (!data.Arabic?.hint1 || !data.Arabic?.hint2 || !data.Arabic?.hint3 ||
      !data.English?.hint1 || !data.English?.hint2 || !data.English?.hint3) {
    malformedSoloHints++;
  }
}
console.log(`- Malformed Solo hints (missing hint1/2/3): ${malformedSoloHints}`);

// Check empty fields in solo flashcards
let malformedFlashcards = 0;
for (const [id, data] of Object.entries(SOLO_FLASHCARDS_DB)) {
  if (!data.Arabic?.etiology || !data.Arabic?.goldStandard || !data.Arabic?.firstLineRx || !data.Arabic?.keyDifferentiator ||
      !data.English?.etiology || !data.English?.goldStandard || !data.English?.firstLineRx || !data.English?.keyDifferentiator) {
    malformedFlashcards++;
  }
}
console.log(`- Malformed Solo flashcards: ${malformedFlashcards}`);
console.log('');

// 8. WORD IMAGES AUDIT
console.log(`[8] WORD IMAGES & ASSETS AUDIT:`);
const publicImagesDir = path.resolve(process.cwd(), 'public/images/words');
let fsImages: string[] = [];
if (fs.existsSync(publicImagesDir)) {
  fsImages = fs.readdirSync(publicImagesDir);
}
console.log(`- Total image files in public/images/words/: ${fsImages.length}`);
console.log(`- Total mappings in WORD_IMAGES: ${Object.keys(WORD_IMAGES).length}`);

let missingImageFiles: string[] = [];
for (const [id, imgPath] of Object.entries(WORD_IMAGES)) {
  const filename = path.basename(imgPath);
  const fullPath = path.join(publicImagesDir, filename);
  if (!fs.existsSync(fullPath)) {
    missingImageFiles.push(`${id}: ${imgPath}`);
  }
}
console.log(`- Images declared in WORD_IMAGES but missing on disk: ${missingImageFiles.length}`);
if (missingImageFiles.length > 0) console.log(missingImageFiles);

const mappedFiles = new Set(Object.values(WORD_IMAGES).map(p => path.basename(p)));
const unmappedFiles = fsImages.filter(f => !mappedFiles.has(f));
console.log(`- Image files on disk NOT declared in WORD_IMAGES: ${unmappedFiles.length}`);
if (unmappedFiles.length > 0) console.log(unmappedFiles);

const invalidWordImageKeys = Object.keys(WORD_IMAGES).filter(id => !wordIdSet.has(id));
console.log(`- WORD_IMAGES keys that do not exist in medicalWords: ${invalidWordImageKeys.length}`);
if (invalidWordImageKeys.length > 0) console.log(invalidWordImageKeys);

console.log('\n================ AUDIT SCRIPT FINISHED ================');
