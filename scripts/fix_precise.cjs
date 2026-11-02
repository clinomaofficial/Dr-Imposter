const fs = require('fs');
const path = require('path');

const files = [
  path.join(__dirname, '..', 'src', 'data', 'hints.ts'),
  path.join(__dirname, '..', 'src', 'data', 'soloFlashcards.ts'),
  path.join(__dirname, '..', 'src', 'data', 'soloHints.ts')
];

for (const f of files) {
  let content = fs.readFileSync(f, 'utf-8');
  // Look for "w637" section ending with } followed by "w638"
  const idx = content.indexOf('  "w638": {');
  if (idx !== -1) {
    const before = content.slice(0, idx);
    const lastBrace = before.lastIndexOf('}');
    if (lastBrace !== -1 && before.slice(lastBrace).indexOf(',') === -1) {
      content = content.slice(0, lastBrace + 1) + ',' + content.slice(lastBrace + 1);
      fs.writeFileSync(f, content, 'utf-8');
      console.log('Fixed comma in', path.basename(f));
    }
  }
}
