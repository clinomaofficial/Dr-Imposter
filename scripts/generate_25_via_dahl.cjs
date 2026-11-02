const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = 'dahl_KRQBNUjA3BASxLdkFxzEY7JSJKrSGSJSe';
const BASE_URL = 'https://inference.dahl.global/v1/chat/completions';
const MODEL = 'deepseek-ai/DeepSeek-V4-Flash-0731';
const STAGING_FILE = path.join(__dirname, 'dahl_generated_25.json');

const TERMS_CONFIG = [
  {
    id: "w638",
    english: "Aortic Regurgitation",
    arabic: "قلس الأبهر",
    level: "Clinical",
    difficulty: 2,
    type: "Disease",
    subjects: ["Cardiology", "Internal Medicine"],
    synonyms: ["قلس الأبهر", "ارتجاع الصمام الأبهري", "قصور الصمام الأبهري", "Aortic Regurgitation", "Aortic Insufficiency"],
    primarySpecialty: "Cardiology"
  },
  {
    id: "w639",
    english: "Wolff-Parkinson-White Syndrome",
    arabic: "متلازمة وولف-باركنسون-وايت",
    level: "Clinical",
    difficulty: 2,
    type: "Syndrome",
    subjects: ["Cardiology", "Internal Medicine", "Emergency Medicine"],
    synonyms: ["متلازمة وولف-باركنسون-وايت", "وولف باركنسون وايت", "WPW Syndrome", "Wolff-Parkinson-White Syndrome"],
    primarySpecialty: "Cardiology"
  },
  {
    id: "w640",
    english: "Cardiogenic Shock",
    arabic: "الصدمة قلبية المنشأ",
    level: "Clinical",
    difficulty: 2,
    type: "Disease",
    subjects: ["Cardiology", "Emergency Medicine", "Internal Medicine", "Critical Care"],
    synonyms: ["الصدمة قلبية المنشأ", "صدمة قلبية", "Cardiogenic Shock"],
    primarySpecialty: "Cardiology"
  },
  {
    id: "w641",
    english: "Takotsubo Cardiomyopathy",
    arabic: "اعتلال تاكوتسوبو لعضلة القلب",
    level: "Clinical",
    difficulty: 2,
    type: "Disease",
    subjects: ["Cardiology", "Internal Medicine", "Emergency Medicine"],
    synonyms: ["اعتلال تاكوتسوبو لعضلة القلب", "متلازمة القلب المنكسر", "اعتلال تاكوتسوبو", "Takotsubo Cardiomyopathy", "Broken Heart Syndrome", "Stress Cardiomyopathy"],
    primarySpecialty: "Cardiology"
  },
  {
    id: "w642",
    english: "Giant Cell Arteritis",
    arabic: "التهاب الشرايين الخلوية العملاقة",
    level: "Clinical",
    difficulty: 2,
    type: "Disease",
    subjects: ["Neurology", "Rheumatology", "Internal Medicine", "Ophthalmology"],
    synonyms: ["التهاب الشرايين الخلوية العملاقة", "التهاب الشريان الصدغي", "Giant Cell Arteritis", "Temporal Arteritis", "Horton Disease"],
    primarySpecialty: "Neurology"
  },
  {
    id: "w643",
    english: "Cauda Equina Syndrome",
    arabic: "متلازمة ذيل الفرس",
    level: "Clinical",
    difficulty: 2,
    type: "Syndrome",
    subjects: ["Neurology", "Emergency Medicine", "Neurosurgery", "Orthopedics"],
    synonyms: ["متلازمة ذيل الفرس", "انضغاط ذيل الفرس", "Cauda Equina Syndrome"],
    primarySpecialty: "Neurology"
  },
  {
    id: "w644",
    english: "Syringomyelia",
    arabic: "تكهف النخاع",
    level: "Clinical",
    difficulty: 2,
    type: "Disease",
    subjects: ["Neurology", "Neurosurgery", "Internal Medicine"],
    synonyms: ["تكهف النخاع", "تكهف النخاع الشوكي", "استسقاء النخاع", "Syringomyelia", "Syrinx"],
    primarySpecialty: "Neurology"
  },
  {
    id: "w645",
    english: "Primary Sclerosing Cholangitis",
    arabic: "التهاب الأقنية الصفراوية المصلب البدئي",
    level: "Clinical",
    difficulty: 3,
    type: "Disease",
    subjects: ["Gastroenterology", "Internal Medicine", "Hepatology"],
    synonyms: ["التهاب الأقنية الصفراوية المصلب البدئي", "التهاب القنوات الصفراوية المصلب", "Primary Sclerosing Cholangitis", "PSC"],
    primarySpecialty: "Gastroenterology"
  },
  {
    id: "w646",
    english: "Boerhaave Syndrome",
    arabic: "متلازمة بورهاف",
    level: "Clinical",
    difficulty: 2,
    type: "Syndrome",
    subjects: ["Gastroenterology", "Emergency Medicine", "General Surgery", "Cardiothoracic Surgery"],
    synonyms: ["متلازمة بورهاف", "تمزق المريء التلقائي", "Boerhaave Syndrome", "Esophageal Rupture"],
    primarySpecialty: "Gastroenterology"
  },
  {
    id: "w647",
    english: "Clostridioides difficile Colitis",
    arabic: "التهاب القولون بالمطثية العسيرة",
    level: "Clinical",
    difficulty: 2,
    type: "Disease",
    subjects: ["Gastroenterology", "Infectious Diseases", "Internal Medicine"],
    synonyms: ["التهاب القولون بالمطثية العسيرة", "التهاب القولون الغشائي الكاذب", "عدوى المطثية العسيرة", "Clostridioides difficile Colitis", "C. difficile Infection", "Pseudomembranous Colitis"],
    primarySpecialty: "Gastroenterology"
  },
  {
    id: "w648",
    english: "Pneumocystis Jirovecii Pneumonia",
    arabic: "ذات الرئة بالمتكيسة الرئوية الجيروفيسية",
    level: "Clinical",
    difficulty: 2,
    type: "Disease",
    subjects: ["Pulmonology", "Infectious Diseases", "Internal Medicine"],
    synonyms: ["ذات الرئة بالمتكيسة الرئوية الجيروفيسية", "التهاب رئوي بالمتكيسة الجيروفيسية", "PCP Pneumonia", "Pneumocystis Jirovecii Pneumonia", "Pneumocystis Carinii Pneumonia"],
    primarySpecialty: "Pulmonology"
  },
  {
    id: "w649",
    english: "Goodpasture Syndrome",
    arabic: "متلازمة غودباستشر",
    level: "Clinical",
    difficulty: 2,
    type: "Syndrome",
    subjects: ["Pulmonology", "Nephrology", "Internal Medicine", "Rheumatology"],
    synonyms: ["متلازمة غودباستشر", "متلازمة غودباستشر الرئوية الكلوية", "Goodpasture Syndrome", "Anti-GBM Disease"],
    primarySpecialty: "Pulmonology"
  },
  {
    id: "w650",
    english: "Mesothelioma",
    arabic: "ورم الظهارة المتوسطة",
    level: "Clinical",
    difficulty: 2,
    type: "Disease",
    subjects: ["Pulmonology", "Oncology", "Pathology", "Internal Medicine"],
    synonyms: ["ورم الظهارة المتوسطة", "ميزوثليوما", "ورم غشاء الجنب الخبيث", "Mesothelioma", "Malignant Pleural Mesothelioma"],
    primarySpecialty: "Pulmonology"
  },
  {
    id: "w651",
    english: "Hyperosmolar Hyperglycemic State",
    arabic: "متلازمة فرط سكر الدم وفرط الأسمولية",
    level: "Clinical",
    difficulty: 2,
    type: "Disease",
    subjects: ["Endocrinology", "Emergency Medicine", "Internal Medicine", "Critical Care"],
    synonyms: ["متلازمة فرط سكر الدم وفرط الأسمولية", "غيبوبة السكر التناضحية", "فرط الأسمولية السكري", "Hyperosmolar Hyperglycemic State", "HHS", "HONK"],
    primarySpecialty: "Endocrinology"
  },
  {
    id: "w652",
    english: "Thyroid Storm",
    arabic: "العاصفة الدرقية",
    level: "Clinical",
    difficulty: 2,
    type: "Disease",
    subjects: ["Endocrinology", "Emergency Medicine", "Internal Medicine", "Critical Care"],
    synonyms: ["العاصفة الدرقية", "نوبة التسمم الدرقي", "عاصفة الغدة الدرقية", "Thyroid Storm", "Thyrotoxic Crisis"],
    primarySpecialty: "Endocrinology"
  },
  {
    id: "w653",
    english: "Multiple Endocrine Neoplasia",
    arabic: "تعدد الأورام الصماوية الصمائية",
    level: "Clinical",
    difficulty: 3,
    type: "Syndrome",
    subjects: ["Endocrinology", "Oncology", "Genetics", "Internal Medicine"],
    synonyms: ["تعدد الأورام الصماوية الصمائية", "متلازمة الأورام الصماء المتعددة", "Multiple Endocrine Neoplasia", "MEN Syndrome", "MEN1", "MEN2"],
    primarySpecialty: "Endocrinology"
  },
  {
    id: "w654",
    english: "Post-Streptococcal Glomerulonephritis",
    arabic: "التهاب كبيبات الكلى بعد العقديات",
    level: "Clinical",
    difficulty: 2,
    type: "Disease",
    subjects: ["Nephrology", "Pediatrics", "Internal Medicine", "Pathology"],
    synonyms: ["التهاب كبيبات الكلى بعد العقديات", "التهاب الكبيبات بعد عدوى العقدية", "Post-Streptococcal Glomerulonephritis", "PSGN"],
    primarySpecialty: "Nephrology"
  },
  {
    id: "w655",
    english: "Testicular Torsion",
    arabic: "انفتال الخصية",
    level: "Clinical",
    difficulty: 1,
    type: "Disease",
    subjects: ["Nephrology and Urology", "Emergency Medicine", "Pediatrics", "General Surgery"],
    synonyms: ["انفتال الخصية", "التواء الخصية", "انفتال الحبل المنوي", "Testicular Torsion", "Torsion of the Testis"],
    primarySpecialty: "Nephrology and Urology"
  },
  {
    id: "w656",
    english: "Minimal Change Disease",
    arabic: "مرض التغير الأدنى",
    level: "Clinical",
    difficulty: 2,
    type: "Disease",
    subjects: ["Nephrology", "Pediatrics", "Pathology", "Internal Medicine"],
    synonyms: ["مرض التغير الأدنى", "داء الآفات الصغرى", "الاعتلال الكلوي بالأدنى تغير", "Minimal Change Disease", "Nil Lesion", "MCD"],
    primarySpecialty: "Nephrology"
  },
  {
    id: "w657",
    english: "Acetaminophen Toxicity",
    arabic: "تسمم الباراسيتامول",
    level: "Clinical",
    difficulty: 1,
    type: "Disease",
    subjects: ["Clinical Toxicology", "Emergency Medicine", "Pharmacology", "Internal Medicine"],
    synonyms: ["تسمم الباراسيتامول", "تسمم الأسيتامينوفين", "جرعة زائدة من الباراسيتامول", "Acetaminophen Toxicity", "Paracetamol Poisoning", "APAP Toxicity"],
    primarySpecialty: "Clinical Toxicology"
  },
  {
    id: "w658",
    english: "Opioid Overdose",
    arabic: "جرعة زائدة من الأفيونات",
    level: "Clinical",
    difficulty: 1,
    type: "Disease",
    subjects: ["Clinical Toxicology", "Emergency Medicine", "Pharmacology", "Critical Care"],
    synonyms: ["جرعة زائدة من الأفيونات", "تسمم الأفيونات", "تسمم المورفين", "Opioid Overdose", "Opioid Toxicity", "Narcotic Overdose"],
    primarySpecialty: "Clinical Toxicology"
  },
  {
    id: "w659",
    english: "Malignant Hyperthermia",
    arabic: "فرط الحرارة الخبيث",
    level: "Clinical",
    difficulty: 2,
    type: "Syndrome",
    subjects: ["Clinical Toxicology", "Emergency Medicine", "Pharmacology", "Anesthesia"],
    synonyms: ["فرط الحرارة الخبيث", "متلازمة فرط الحرارة الخبيث", "Malignant Hyperthermia", "MH"],
    primarySpecialty: "Clinical Toxicology"
  },
  {
    id: "w660",
    english: "FAST Ultrasound",
    arabic: "السونار السريع لرضوض البطن",
    level: "Clinical",
    difficulty: 2,
    type: "Technique",
    subjects: ["Radiology", "Emergency Medicine", "General Surgery", "Trauma"],
    synonyms: ["السونار السريع لرضوض البطن", "سونار الطوارئ للإصابات", "فحص فاست", "FAST Ultrasound", "Focused Assessment with Sonography for Trauma", "E-FAST"],
    primarySpecialty: "Radiology"
  },
  {
    id: "w661",
    english: "Air Bronchogram",
    arabic: "مخطط القصبات الهوائي الظليل",
    level: "Clinical",
    difficulty: 2,
    type: "Other",
    subjects: ["Radiology", "Pulmonology", "Internal Medicine"],
    synonyms: ["مخطط القصبات الهوائي الظليل", "علامة القصبة الهوائية الظليلة", "القصبات الهوائية الشعاعية", "Air Bronchogram", "Air Bronchogram Sign"],
    primarySpecialty: "Radiology"
  },
  {
    id: "w662",
    english: "Apple Core Sign",
    arabic: "علامة لب التفاحة",
    level: "Clinical",
    difficulty: 2,
    type: "Other",
    subjects: ["Radiology", "Gastroenterology", "General Surgery", "Oncology"],
    synonyms: ["علامة لب التفاحة", "مظهر لب التفاحة بالأشعة", "علامة قمع التفاحة", "Apple Core Sign", "Napkin Ring Sign"],
    primarySpecialty: "Radiology"
  }
];

function buildPrompt(cfg) {
  return `You are an expert clinical medical educator authoring content for the medical game Dr Imposter.
Author the complete dataset for this medical term:
ID: ${cfg.id}
English Name: ${cfg.english}
Arabic Name: ${cfg.arabic}
Level: ${cfg.level}
Difficulty: ${cfg.difficulty}
Type: ${cfg.type}
Subjects: ${JSON.stringify(cfg.subjects)}
Synonyms: ${JSON.stringify(cfg.synonyms)}
Primary Specialty: ${cfg.primarySpecialty}

CRITICAL RULES:
1. Hints MUST NOT mention or leak the exact English name ("${cfg.english}") or Arabic name ("${cfg.arabic}") or synonyms. Describe presentation, pathophysiology, auscultation/signs, labs/imaging, and management.
2. Hints MUST NOT include pre-formed badge tags like [Rx] or [Dx] or markdown bold.
3. Provide exactly 5 Arabic hints and 5 English hints.
4. Solo Flashcard must have 4 clinical pillars: etiology, goldStandard, firstLineRx, keyDifferentiator (bilingual).
5. Solo Hints must contain hint1 (smart exploratory), hint2 (clinical symptoms/signs), hint3 (definitive hallmark), and pearl (bilingual).
6. Pearl in soloHint MUST follow this exact pattern:
   Arabic: "التشخيص النهائي: ${cfg.arabic} (${cfg.english}) - من أساسيات ${cfg.primarySpecialty}."
   English: "Definitive diagnosis: ${cfg.english} (${cfg.arabic}) - Core ${cfg.primarySpecialty}."

Respond ONLY with valid JSON:
{
  "id": "${cfg.id}",
  "word": {
    "id": "${cfg.id}",
    "word": { "Arabic": "${cfg.arabic}", "English": "${cfg.english}" },
    "level": "${cfg.level}",
    "difficulty": ${cfg.difficulty},
    "type": "${cfg.type}",
    "subjects": ${JSON.stringify(cfg.subjects)},
    "synonyms": ${JSON.stringify(cfg.synonyms)},
    "guessingDifficulty": ${cfg.difficulty}
  },
  "hints": {
    "Arabic": [ "...", "...", "...", "...", "..." ],
    "English": [ "...", "...", "...", "...", "..." ]
  },
  "flashcard": {
    "Arabic": { "etiology": "...", "goldStandard": "...", "firstLineRx": "...", "keyDifferentiator": "..." },
    "English": { "etiology": "...", "goldStandard": "...", "firstLineRx": "...", "keyDifferentiator": "..." }
  },
  "soloHint": {
    "Arabic": { "hint1": "...", "hint2": "...", "hint3": "...", "pearl": "..." },
    "English": { "hint1": "...", "hint2": "...", "hint3": "...", "pearl": "..." }
  }
}`;
}

function callDahl(prompt) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      model: MODEL,
      messages: [
        { role: 'system', content: 'You are a direct JSON generation engine. Keep internal thinking strictly under 100 words, then output ONLY the JSON.' },
        { role: 'user', content: prompt }
      ],
      max_tokens: 3500
    });

    const req = https.request(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        if (res.statusCode !== 200) {
          return reject(new Error(`HTTP ${res.statusCode}: ${body.slice(0, 300)}`));
        }
        try {
          const parsed = JSON.parse(body);
          const rawContent = parsed.choices[0].message.content.trim();
          // Extract JSON if wrapped in markdown fence
          const jsonMatch = rawContent.match(/\{[\s\S]*\}/);
          if (!jsonMatch) {
            return reject(new Error('No JSON object found in response: ' + rawContent.slice(0, 200)));
          }
          const data = JSON.parse(jsonMatch[0]);
          resolve(data);
        } catch (e) {
          reject(new Error('JSON parse error: ' + e.message + '\nRaw body: ' + body.slice(0, 300)));
        }
      });
    });

    req.setTimeout(40000, () => {
      req.destroy(new Error('Request timed out after 40 seconds'));
    });
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function run() {
  let staging = {};
  if (fs.existsSync(STAGING_FILE)) {
    try {
      staging = JSON.parse(fs.readFileSync(STAGING_FILE, 'utf-8'));
    } catch (e) {
      staging = {};
    }
  }

  console.log(`Starting generation for 25 high-yield terms using Dahl model (${MODEL})...`);
  console.log(`Already completed: ${Object.keys(staging).length} / ${TERMS_CONFIG.length}`);

  for (let i = 0; i < TERMS_CONFIG.length; i++) {
    const cfg = TERMS_CONFIG[i];
    if (staging[cfg.id]) {
      console.log(`[${i + 1}/${TERMS_CONFIG.length}] Skipping ${cfg.id} (${cfg.english}) - already cached.`);
      continue;
    }

    console.log(`[${i + 1}/${TERMS_CONFIG.length}] Generating ${cfg.id}: ${cfg.english} (${cfg.arabic})...`);
    let attempts = 0;
    let success = false;
    while (!success && attempts < 3) {
      attempts++;
      try {
        const prompt = buildPrompt(cfg);
        const result = await callDahl(prompt);
        // Basic validation
        if (!result.hints || !result.hints.Arabic || result.hints.Arabic.length < 5 || !result.hints.English || result.hints.English.length < 5) {
          throw new Error('Incomplete hints array');
        }
        staging[cfg.id] = result;
        fs.writeFileSync(STAGING_FILE, JSON.stringify(staging, null, 2), 'utf-8');
        console.log(`  ✓ Success! Saved ${cfg.id}`);
        success = true;
      } catch (err) {
        console.error(`  ✗ Attempt ${attempts} failed: ${err.message}`);
        if (attempts < 3) {
          console.log(`  Retrying in 2s...`);
          await new Promise(r => setTimeout(r, 2000));
        }
      }
    }

    if (!success) {
      console.error(`FAILED to generate ${cfg.id} after 3 attempts. Stopping.`);
      process.exit(1);
    }

    // Brief polite pause between requests
    await new Promise(r => setTimeout(r, 1000));
  }

  console.log(`\nALL 25 TERMS SUCCESSFULLY GENERATED BY DAHL! Saved to ${STAGING_FILE}`);
}

run().catch(err => {
  console.error('Fatal error in run():', err);
  process.exit(1);
});
