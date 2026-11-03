const fs = require('fs');
const path = require('path');

const file = fs.readFileSync(path.join(__dirname, '../src/data/medicalWords.ts'), 'utf8');

const wordRegex = /\{\s*id:\s*['"](w\d+)['"],\s*word:\s*\{\s*Arabic:\s*"([^"]+)",\s*English:\s*"([^"]+)"\s*\},[\s\S]*?level:\s*['"]([^'"]+)['"],\s*difficulty:\s*([123]),\s*type:\s*['"]([^'"]+)['"],\s*subjects:\s*\[([\s\S]*?)\],[\s\S]*?(?:synonyms:\s*\[([\s\S]*?)\],[\s\S]*?)?(?:guessingDifficulty:\s*([123]))?\s*\}/g;

let match;
const words = [];
while ((match = wordRegex.exec(file)) !== null) {
  const subjects = match[7].split(',').map(s => s.trim().replace(/['"]/g, '')).filter(Boolean);
  const synonyms = match[8] ? match[8].split(',').map(s => s.trim().replace(/['"]/g, '')).filter(Boolean) : [];
  words.push({
    id: match[1],
    arabic: match[2],
    english: match[3],
    level: match[4],
    difficulty: parseInt(match[5]),
    type: match[6],
    subjects,
    synonyms,
    guessingDifficulty: match[9] ? parseInt(match[9]) : parseInt(match[5])
  });
}

console.log('Total extracted words:', words.length);
fs.writeFileSync(path.join(__dirname, 'all_words_clean.json'), JSON.stringify(words, null, 2), 'utf8');
console.log('Saved scripts/all_words_clean.json');
