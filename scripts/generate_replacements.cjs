const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = 'dahl_KRQBNUjA3BASxLdkFxzEY7JSJKrSGSJSe';
const BASE_URL = 'https://inference.dahl.global/v1/chat/completions';
const MODEL = 'deepseek-ai/DeepSeek-V4-Flash-0731';

const REPLACEMENTS = [
  {
    id: "w649",
    english: "Acute Respiratory Distress Syndrome",
    arabic: "متلازمة الضائقة التنفسية الحادة",
    level: "Clinical",
    difficulty: 2,
    type: "Syndrome",
    subjects: ["Pulmonology", "Critical Care", "Internal Medicine", "Emergency Medicine"],
    synonyms: ["متلازمة الضائقة التنفسية الحادة", "ARDS", "متلازمة العوز التنفسي الحاد", "Acute Respiratory Distress Syndrome"],
    primarySpecialty: "Pulmonology"
  },
  {
    id: "w658",
    english: "Serotonin Syndrome",
    arabic: "متلازمة السيروتونين",
    level: "Clinical",
    difficulty: 2,
    type: "Syndrome",
    subjects: ["Clinical Toxicology", "Emergency Medicine", "Psychiatry", "Pharmacology"],
    synonyms: ["متلازمة السيروتونين", "سمية السيروتونين", "تسمم السيروتونين", "Serotonin Syndrome", "Serotonin Toxicity"],
    primarySpecialty: "Clinical Toxicology"
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
          const jsonMatch = rawContent.match(/\{[\s\S]*\}/);
          if (!jsonMatch) {
            return reject(new Error('No JSON object found'));
          }
          resolve(JSON.parse(jsonMatch[0]));
        } catch (e) {
          reject(e);
        }
      });
    });

    req.setTimeout(40000, () => req.destroy(new Error('Timeout')));
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function main() {
  const stagingPath = path.join(__dirname, 'dahl_generated_25.json');
  const staging = JSON.parse(fs.readFileSync(stagingPath, 'utf-8'));

  for (const cfg of REPLACEMENTS) {
    let success = false;
    let attempts = 0;
    while (!success && attempts < 3) {
      attempts++;
      try {
        console.log(`Generating replacement for ${cfg.id}: ${cfg.english} (attempt ${attempts})...`);
        const res = await callDahl(buildPrompt(cfg));
        staging[cfg.id] = res;
        console.log(`  ✓ Successfully generated ${cfg.id}: ${cfg.english}`);
        success = true;
      } catch (err) {
        console.error(`  ✗ Attempt ${attempts} failed: ${err.message}`);
        if (attempts < 3) await new Promise(r => setTimeout(r, 2000));
      }
    }
  }

  fs.writeFileSync(stagingPath, JSON.stringify(staging, null, 2), 'utf-8');
  console.log('Updated dahl_generated_25.json with 100% unique terms!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
