const fs = require('fs');
const path = require('path');

const mwPath = path.join(__dirname, '..', 'src', 'data', 'medicalWords.ts');
let mw = fs.readFileSync(mwPath, 'utf-8');

// 1. Remove residual after w649
const target1 = `  },
    level: "Clinical",
    difficulty: 2,
    type: "Syndrome",
    subjects: ["Pulmonology","Nephrology","Internal Medicine","Rheumatology"],
    synonyms: ["متلازمة غودباستشر","متلازمة غودباستشر الرئوية الكلوية","Goodpasture Syndrome","Anti-GBM Disease"],
    guessingDifficulty: 2
  },`;
mw = mw.replace(target1, '  },');

// 2. Remove residual after w658
const target2 = `  },
    level: "Clinical",
    difficulty: 1,
    type: "Disease",
    subjects: ["Clinical Toxicology","Emergency Medicine","Pharmacology","Critical Care"],
    synonyms: ["جرعة زائدة من الأفيونات","تسمم الأفيونات","تسمم المورفين","Opioid Overdose","Opioid Toxicity","Narcotic Overdose"],
    guessingDifficulty: 1
  },`;
mw = mw.replace(target2, '  },');

fs.writeFileSync(mwPath, mw, 'utf-8');
console.log('Cleaned residuals in medicalWords.ts');
