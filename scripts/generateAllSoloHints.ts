import fs from 'fs';
import path from 'path';
import { medicalWords, MedicalWord } from '../src/data/medicalWords';
import { HINTS_DICTIONARY } from '../src/data/hints';
import { SOLO_DISEASE_HINTS, SoloDiseaseData } from '../src/data/soloHints';

const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/[أإآ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .replace(/[\u064B-\u065F]/g, '')
    .trim();

function removeAnswerLeak(clue: string, word: MedicalWord, lang: 'Arabic' | 'English'): string {
  let cleaned = clue.replace(/^\[.*?\]\s*/, '').trim();

  const nameAr = norm(word.word.Arabic);
  const nameEn = norm(word.word.English);

  // Replace exact name leaks
  if (lang === 'Arabic') {
    const regAr = new RegExp(word.word.Arabic.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    cleaned = cleaned.replace(regAr, 'هذا المرض');

    // Also replace without 'ال'
    const noAl = word.word.Arabic.replace(/^ال/, '');
    if (noAl.length >= 3) {
      const regNoAl = new RegExp(noAl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
      cleaned = cleaned.replace(regNoAl, 'هذه الحالة');
    }
  } else {
    const regEn = new RegExp(word.word.English.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    cleaned = cleaned.replace(regEn, 'this condition');
  }

  return cleaned;
}

function buildSoloDataForWord(word: MedicalWord): SoloDiseaseData {
  const dictEntry = HINTS_DICTIONARY[word.id];
  const arList = dictEntry?.Arabic || [];
  const enList = dictEntry?.English || [];

  const nameAr = word.word.Arabic;
  const nameEn = word.word.English;
  const subjectsStrAr = word.subjects.slice(0, 3).join(' و ');
  const subjectsStrEn = word.subjects.slice(0, 3).join(' & ');

  // Arabic Clues Extraction
  let arHint1 = '';
  let arHint2 = '';
  let arHint3 = '';

  if (arList.length >= 3) {
    // Hint 1: subtle clue from later in the list (epidemiology, risk factor, or subtle presentation)
    arHint1 = removeAnswerLeak(arList[arList.length - 1], word, 'Arabic');
    if (arHint1.length < 20 && arList.length > 3) {
      arHint1 = removeAnswerLeak(arList[arList.length - 2], word, 'Arabic');
    }

    // Hint 2: clinical presentation (middle of list)
    arHint2 = removeAnswerLeak(arList[Math.floor(arList.length / 2)], word, 'Arabic');

    // Hint 3: diagnostic/hallmark (earlier, more definitive)
    arHint3 = removeAnswerLeak(arList[0], word, 'Arabic');
  } else {
    arHint1 = `حالة مرضية هامة تدرس بعناية ضمن تخصصات (${subjectsStrAr})، وترتبط بآليات فسيولوجية وإمراضية محددة.`;
    arHint2 = `المظاهر السريرية الأساسية تتضمن أعراضاً وعلامات موجهة ترتبط بـ (${word.subjects[0] || 'الطب السريري'}).`;
    arHint3 = `المصطلح الطبي المعني يبدأ بحرف (${nameAr.replace(/^ال/, '').charAt(0)}) ويعد من أهم موضوعات التشخيص التفريقي.`;
  }

  // English Clues Extraction
  let enHint1 = '';
  let enHint2 = '';
  let enHint3 = '';

  if (enList.length >= 3) {
    enHint1 = removeAnswerLeak(enList[enList.length - 1], word, 'English');
    if (enHint1.length < 20 && enList.length > 3) {
      enHint1 = removeAnswerLeak(enList[enList.length - 2], word, 'English');
    }

    enHint2 = removeAnswerLeak(enList[Math.floor(enList.length / 2)], word, 'English');
    enHint3 = removeAnswerLeak(enList[0], word, 'English');
  } else {
    enHint1 = `A clinically significant condition studied thoroughly within ${subjectsStrEn}, exhibiting characteristic pathophysiologic mechanisms.`;
    enHint2 = `Key clinical features and presentation are intrinsically related to ${word.subjects[0] || 'Clinical Medicine'}.`;
    enHint3 = `The medical terminology starts with "${nameEn.charAt(0)}" and forms an essential component of clinical differential diagnosis.`;
  }

  const pearlAr = `التشخيص النهائي: ${nameAr} (${nameEn}) - من أساسيات ${word.subjects[0] || 'الطب'}.`;
  const pearlEn = `Definitive diagnosis: ${nameEn} (${nameAr}) - Core ${word.subjects[0] || 'Medicine'}.`;

  return {
    Arabic: {
      hint1: arHint1,
      hint2: arHint2,
      hint3: arHint3,
      pearl: pearlAr
    },
    English: {
      hint1: enHint1,
      hint2: enHint2,
      hint3: enHint3,
      pearl: pearlEn
    }
  };
}

async function run() {
  const allDiseases = medicalWords.filter(w => w.type === 'Disease' || w.type === 'Syndrome');
  console.log(`Total diseases and syndromes: ${allDiseases.length}`);

  const combinedDictionary: Record<string, SoloDiseaseData> = { ...SOLO_DISEASE_HINTS };

  let newlyAdded = 0;
  for (const disease of allDiseases) {
    if (!combinedDictionary[disease.id]) {
      combinedDictionary[disease.id] = buildSoloDataForWord(disease);
      newlyAdded++;
    }
  }

  console.log(`Existing curated: ${Object.keys(SOLO_DISEASE_HINTS).length}`);
  console.log(`Newly generated & added: ${newlyAdded}`);
  console.log(`Total in complete dictionary: ${Object.keys(combinedDictionary).length}`);

  // Construct source file content
  const fileContent = `import { MedicalWord } from './medicalWords';
import { HINTS_DICTIONARY } from './hints';

export interface SoloProgressiveHint {
  hint1: string; // التلميح الاستكشافي الذكي (يميز الحالة من بين الخيارات الخمسة)
  hint2: string; // التلميح السريري التوضيحي (أعراض وفحوصات تضيق الاحتمالات)
  hint3: string; // العلامة الفارقة الحاسمة (علامة مميزة، ثالوث كلاسيكي، أو فحص ذهبي)
  pearl?: string; // درة سريرية مختصرة تظهر بعد انتهاء التخمين
}

export interface SoloDiseaseData {
  Arabic: SoloProgressiveHint;
  English: SoloProgressiveHint;
}

/**
 * قاعدة بيانات التلميحات التدريجية لنمط اللعب الفردي (Solo Mode)
 * تغطي جميع أمراض ومتلازمات اللعبة بنظام الـ 3 تلميحات التدريجية
 * (التلميح 1: استكشافي ذكي | التلميح 2: سريري تفصيلي | التلميح 3: علامة فارقة حاسمة)
 */
export const SOLO_DISEASE_HINTS: Record<string, SoloDiseaseData> = ${JSON.stringify(
    combinedDictionary,
    null,
    2
  )};

/**
 * دالة استخراج التلميحات التدريجية الثلاثة لأي مصطلح أو مرض
 */
export function getSoloProgressiveHints(
  word: MedicalWord,
  lang: 'Arabic' | 'English'
): SoloProgressiveHint {
  const custom = SOLO_DISEASE_HINTS[word.id];
  if (custom && custom[lang]) {
    return custom[lang];
  }

  // محرك الاستخلاص الذكي الاحتياطي لأي مصطلح إضافي
  const rawDict = HINTS_DICTIONARY[word.id];
  const cluesList = rawDict && rawDict[lang] ? rawDict[lang] : [];
  const nameEn = word.word.English;
  const nameAr = word.word.Arabic;
  const subjects = word.subjects.slice(0, 3).join(lang === 'Arabic' ? ' و ' : ' & ');

  if (lang === 'Arabic') {
    const cleanClues = cluesList.map(c => c.replace(/^\\[.*?\\]\\s*/, ''));

    const hint1 = cleanClues.length > 2
      ? cleanClues[cleanClues.length - 1]
      : \`حالة طبية سريرية ذات ارتباط وثيق بمقررات (\${subjects})، وتتطلب فحصاً تفريقياً دقيقاً بين الحالات المشابهة.\`;

    const hint2 = cleanClues.length > 1
      ? cleanClues[Math.floor(cleanClues.length / 2)]
      : \`تشمل المظاهر السريرية الشائعة لهذه الحالة أعراضاً وعلامات ترتبط بصورة مباشرة بـ (\${word.subjects[0] || 'الطب الباطني'}).\`;

    const hint3 = cleanClues.length > 0
      ? cleanClues[0]
      : \`المصطلح الطبي يبدأ بحرف (\${nameAr.replace(/^ال/, '').charAt(0)}) ويتألف اسمه من (\${nameAr.replace(/\\s+/g, '').length}) أحرف.\`;

    return {
      hint1,
      hint2,
      hint3,
      pearl: \`التشخيص النهائي: \${nameAr} (\${nameEn}).\`
    };
  } else {
    const cleanClues = cluesList.map(c => c.replace(/^\\[.*?\\]\\s*/, ''));

    const hint1 = cleanClues.length > 2
      ? cleanClues[cleanClues.length - 1]
      : \`A critical clinical condition studied within \${subjects}, exhibiting notable differential diagnostic overlap.\`;

    const hint2 = cleanClues.length > 1
      ? cleanClues[Math.floor(cleanClues.length / 2)]
      : \`Clinical presentation features findings intrinsically associated with \${word.subjects[0] || 'Internal Medicine'}.\`;

    const hint3 = cleanClues.length > 0
      ? cleanClues[0]
      : \`The clinical term begins with "\${nameEn.charAt(0)}" and comprises \${nameEn.replace(/\\s+/g, '').length} letters.\`;

    return {
      hint1,
      hint2,
      hint3,
      pearl: \`Definitive diagnosis: \${nameEn} (\${nameAr}).\`
    };
  }
}

/**
 * توليد 5 خيارات سريرية ذكية (الهدف + 4 مموهات تشخيص تفريقي متوافقة)
 */
export function generateSoloOptions(
  targetWord: MedicalWord,
  allWords: MedicalWord[]
): MedicalWord[] {
  const others = allWords.filter(w => w.id !== targetWord.id);

  const scored = others.map(w => {
    let score = 0;
    if (w.type === targetWord.type) score += 20;
    else if (
      (w.type === 'Disease' || w.type === 'Syndrome') &&
      (targetWord.type === 'Disease' || targetWord.type === 'Syndrome')
    ) {
      score += 15;
    }

    const sharedSubjects = w.subjects.filter(s => targetWord.subjects.includes(s));
    score += sharedSubjects.length * 10;

    if (w.difficulty === targetWord.difficulty) score += 5;
    if (SOLO_DISEASE_HINTS[w.id]) score += 8;

    score += Math.random() * 8;
    return { word: w, score };
  });

  scored.sort((a, b) => b.score - a.score);

  const topCandidates = scored.slice(0, Math.min(16, scored.length)).map(item => item.word);
  const shuffledCandidates = [...topCandidates].sort(() => Math.random() - 0.5);
  const selectedDistractors = shuffledCandidates.slice(0, 4);

  while (selectedDistractors.length < 4 && others.length > selectedDistractors.length) {
    const fallback = others[Math.floor(Math.random() * others.length)];
    if (!selectedDistractors.some(d => d.id === fallback.id)) {
      selectedDistractors.push(fallback);
    }
  }

  return [targetWord, ...selectedDistractors].sort(() => Math.random() - 0.5);
}
`;

  const targetPath = path.resolve('./src/data/soloHints.ts');
  fs.writeFileSync(targetPath, fileContent, 'utf-8');
  console.log(`Successfully written complete solo hints to ${targetPath}`);
}

run();
