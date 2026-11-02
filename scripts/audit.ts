/* Data quality audit for medicalWords + hints */
import { medicalWords } from '../src/data/medicalWords';
import { HINTS_DICTIONARY } from '../src/data/hints';

const norm = (s: string) => s.toLowerCase().replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي').replace(/\s+/g, ' ').trim();

let noHints = 0, fewHints = 0, dupWithin = 0, crossDup = 0, leakSelf = 0, symbolIssues = 0, emptyClues = 0;
const crossDupSamples: string[] = [];
const leakSamples: string[] = [];
const symbolSamples: string[] = [];
const noHintsList: string[] = [];
const seenHint = new Map<string, string>(); // hint -> wordId

const badPatterns: [RegExp, string][] = [
  [/\*\*/, 'markdown **'],
  [/<hl/, '<hl tag'],
  [/undefined|NaN|TODO|FIXME|XXX/i, 'placeholder'],
  [/\[Rx|\[Dx|\[Sx|\[Etiology|\[Anatomy|\[Classification|\[Pearl|\[علاجي|\[تشخيصي|\[سريري/, 'pre-formed badge in source'],
  [/[\uFFFD]/, 'mojibake'],
];

for (const w of medicalWords) {
  const set = HINTS_DICTIONARY[w.id];
  const all = set ? [...(set.Arabic || []), ...(set.English || [])] : [];
  if (!set || all.length === 0) { noHints++; noHintsList.push(`${w.id} ${w.word.English}`); continue; }
  if (all.length < 8) fewHints++;

  // duplicates within same word+lang
  for (const lang of ['Arabic', 'English'] as const) {
    const arr = set[lang] || [];
    const s = new Set(arr.map(norm));
    if (s.size !== arr.length) dupWithin++;
    for (const c of arr) {
      if (!c.trim()) emptyClues++;
      for (const [re, label] of badPatterns) {
        if (re.test(c)) { symbolIssues++; if (symbolSamples.length < 12) symbolSamples.push(`${w.id} [${label}] ${c.slice(0, 90)}`); break; }
      }
      // answer leak inside its own hint
      const nHint = norm(c);
      if (nHint.includes(norm(w.word.English)) || nHint.includes(norm(w.word.Arabic))) {
        leakSelf++;
        if (leakSamples.length < 10) leakSamples.push(`${w.id} "${w.word.English}" → ${c.slice(0, 90)}`);
      }
      // cross-word duplicates
      const key = lang + '|' + norm(c);
      const owner = seenHint.get(key);
      if (owner && owner !== w.id) {
        crossDup++;
        if (crossDupSamples.length < 10) crossDupSamples.push(`"${c.slice(0, 70)}" on ${owner} AND ${w.id}`);
      } else seenHint.set(key, w.id);
    }
  }
}

// duplicate word ids / names
const ids = new Set<string>(); let dupIds = 0;
const names = new Map<string, string>(); let dupNames = 0; const dupNameSamples: string[] = [];
for (const w of medicalWords) {
  if (ids.has(w.id)) dupIds++; ids.add(w.id);
  const en = norm(w.word.English);
  if (names.has(en)) { dupNames++; if (dupNameSamples.length < 8) dupNameSamples.push(`${w.id} & ${names.get(en)} → ${w.word.English}`); }
  else names.set(en, w.id);
}

// clue coverage vs words
const hinted = new Set(Object.keys(HINTS_DICTIONARY));
const orphans = [...hinted].filter(id => !medicalWords.find(w => w.id === id));

console.log('=== MEDICAL WORDS ===');
console.log('total words:', medicalWords.length);
console.log('duplicate ids:', dupIds, '| duplicate English names:', dupNames);
if (dupNameSamples.length) console.log('dup name samples:', dupNameSamples);
console.log('');
console.log('=== HINTS COVERAGE ===');
console.log('words with NO handwritten hints:', noHints, noHintsList.slice(0, 15));
console.log('words with <8 handwritten hints:', fewHints);
console.log('orphan hint-sets (id not in words):', orphans.length, orphans.slice(0, 10));
console.log('');
console.log('=== QUALITY ===');
console.log('duplicate clues within same word:', dupWithin);
console.log('clues duplicated ACROSS words:', crossDup);
crossDupSamples.forEach(s => console.log('  ', s));
console.log('clues revealing their own answer:', leakSelf);
leakSamples.forEach(s => console.log('  ', s));
console.log('clues with symbols/placeholders:', symbolIssues);
symbolSamples.forEach(s => console.log('  ', s));
console.log('empty clue strings:', emptyClues);
