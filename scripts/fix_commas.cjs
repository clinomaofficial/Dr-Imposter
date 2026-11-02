const fs = require('fs');
const path = require('path');

// 1. medicalWords.ts
const mwPath = path.join(__dirname, '..', 'src', 'data', 'medicalWords.ts');
let mw = fs.readFileSync(mwPath, 'utf-8');
mw = mw.replace(/("id":\s*"w637"[\s\S]*?guessingDifficulty:\s*2\r?\n\s*\})(\r?\n\s*\{\r?\n\s*id:\s*"w638")/g, '$1,$2');
// Also if format was synonyms ... guessingDifficulty: 2 \n } \n {
mw = mw.replace(/(id:\s*"w637"[\s\S]*?guessingDifficulty:\s*2\r?\n\s*\})(\r?\n\s*\{\r?\n\s*id:\s*"w638")/g, '$1,$2');
fs.writeFileSync(mwPath, mw, 'utf-8');
console.log('Fixed medicalWords.ts');

// 2. hints.ts
const hPath = path.join(__dirname, '..', 'src', 'data', 'hints.ts');
let h = fs.readFileSync(hPath, 'utf-8');
h = h.replace(/("w637":\s*\{[\s\S]*?\}\r?\n\s*\})(\r?\n\s*"w638":\s*\{)/g, '$1,$2');
fs.writeFileSync(hPath, h, 'utf-8');
console.log('Fixed hints.ts');

// 3. soloFlashcards.ts
const sfPath = path.join(__dirname, '..', 'src', 'data', 'soloFlashcards.ts');
let sf = fs.readFileSync(sfPath, 'utf-8');
sf = sf.replace(/("w637":\s*\{[\s\S]*?\}\r?\n\s*\})(\r?\n\s*"w638":\s*\{)/g, '$1,$2');
fs.writeFileSync(sfPath, sf, 'utf-8');
console.log('Fixed soloFlashcards.ts');

// 4. soloHints.ts
const shPath = path.join(__dirname, '..', 'src', 'data', 'soloHints.ts');
let sh = fs.readFileSync(shPath, 'utf-8');
sh = sh.replace(/("w637":\s*\{[\s\S]*?\}\r?\n\s*\})(\r?\n\s*"w638":\s*\{)/g, '$1,$2');
fs.writeFileSync(shPath, sh, 'utf-8');
console.log('Fixed soloHints.ts');
