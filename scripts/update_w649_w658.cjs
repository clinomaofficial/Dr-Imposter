const fs = require('fs');
const path = require('path');

const STAGING_FILE = path.join(__dirname, 'dahl_generated_25.json');
const staging = JSON.parse(fs.readFileSync(STAGING_FILE, 'utf-8'));

function cleanText(str) {
  if (!str) return '';
  return str
    .replace(/\*\*/g, '')
    .replace(/^\[(Rx|Dx|Sx|Etiology|Anatomy|Classification|Pearl)\]\s*/i, '')
    .trim();
}

const targetIds = ['w649', 'w658'];

// 1. medicalWords.ts
const mwPath = path.join(__dirname, '..', 'src', 'data', 'medicalWords.ts');
let mw = fs.readFileSync(mwPath, 'utf-8');
for (const id of targetIds) {
  const item = staging[id].word;
  const regex = new RegExp(`\\{\\s*id:\\s*"${id}"[\\s\\S]*?\\},`, 'g');
  const replacement = `{\n    id: "${item.id}",\n    word: { Arabic: ${JSON.stringify(item.word.Arabic)}, English: ${JSON.stringify(item.word.English)} },\n    level: "${item.level}",\n    difficulty: ${item.difficulty},\n    type: "${item.type}",\n    subjects: ${JSON.stringify(item.subjects)},\n    synonyms: ${JSON.stringify(item.synonyms)},\n    guessingDifficulty: ${item.guessingDifficulty || item.difficulty}\n  },`;
  mw = mw.replace(regex, replacement);
}
fs.writeFileSync(mwPath, mw, 'utf-8');
console.log('Updated medicalWords.ts for w649 and w658');

// 2. hints.ts
const hPath = path.join(__dirname, '..', 'src', 'data', 'hints.ts');
let h = fs.readFileSync(hPath, 'utf-8');
for (const id of targetIds) {
  const item = staging[id].hints;
  const arClean = item.Arabic.map(cleanText);
  const enClean = item.English.map(cleanText);
  const regex = new RegExp(`"${id}":\\s*\\{[\\s\\S]*?\\},`, 'g');
  const replacement = `"${id}": {\n    "Arabic": ${JSON.stringify(arClean, null, 6).replace(/\n/g, '\n  ')},\n    "English": ${JSON.stringify(enClean, null, 6).replace(/\n/g, '\n  ')}\n  },`;
  h = h.replace(regex, replacement);
}
fs.writeFileSync(hPath, h, 'utf-8');
console.log('Updated hints.ts for w649 and w658');

// 3. soloFlashcards.ts
const sfPath = path.join(__dirname, '..', 'src', 'data', 'soloFlashcards.ts');
let sf = fs.readFileSync(sfPath, 'utf-8');
for (const id of targetIds) {
  const item = staging[id].flashcard;
  const cleanFC = {
    Arabic: {
      etiology: cleanText(item.Arabic.etiology),
      goldStandard: cleanText(item.Arabic.goldStandard),
      firstLineRx: cleanText(item.Arabic.firstLineRx),
      keyDifferentiator: cleanText(item.Arabic.keyDifferentiator)
    },
    English: {
      etiology: cleanText(item.English.etiology),
      goldStandard: cleanText(item.English.goldStandard),
      firstLineRx: cleanText(item.English.firstLineRx),
      keyDifferentiator: cleanText(item.English.keyDifferentiator)
    }
  };
  const regex = new RegExp(`"${id}":\\s*\\{[\\s\\S]*?\\},`, 'g');
  const replacement = `"${id}": ${JSON.stringify(cleanFC, null, 4).replace(/\n/g, '\n  ')},`;
  sf = sf.replace(regex, replacement);
}
fs.writeFileSync(sfPath, sf, 'utf-8');
console.log('Updated soloFlashcards.ts for w649 and w658');

// 4. soloHints.ts
const shPath = path.join(__dirname, '..', 'src', 'data', 'soloHints.ts');
let sh = fs.readFileSync(shPath, 'utf-8');
for (const id of targetIds) {
  const item = staging[id].soloHint;
  const cleanSH = {
    Arabic: {
      hint1: cleanText(item.Arabic.hint1),
      hint2: cleanText(item.Arabic.hint2),
      hint3: cleanText(item.Arabic.hint3),
      pearl: cleanText(item.Arabic.pearl)
    },
    English: {
      hint1: cleanText(item.English.hint1),
      hint2: cleanText(item.English.hint2),
      hint3: cleanText(item.English.hint3),
      pearl: cleanText(item.English.pearl)
    }
  };
  const regex = new RegExp(`"${id}":\\s*\\{[\\s\\S]*?\\},`, 'g');
  const replacement = `"${id}": ${JSON.stringify(cleanSH, null, 4).replace(/\n/g, '\n  ')},`;
  sh = sh.replace(regex, replacement);
}
fs.writeFileSync(shPath, sh, 'utf-8');
console.log('Updated soloHints.ts for w649 and w658');
