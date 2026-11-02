const https = require('https');

const prompt = `You are an expert clinical medical educator authoring data for the medical educational game Dr Imposter.
Generate the full data set for this medical term:
ID: w638
English Name: Aortic Regurgitation
Arabic Name: قلس الأبهر
Type: Disease
Difficulty: 2
Subjects: ["Cardiology", "Internal Medicine"]
Synonyms: ["قلس الأبهر", "ارتجاع الصمام الأبهري", "قصور الصمام الأبهري", "Aortic Regurgitation", "Aortic Insufficiency"]

CRITICAL RULES:
1. Hints must NOT leak or explicitly state the exact disease name (neither 'Aortic Regurgitation' nor 'قلس الأبهر' nor 'ارتجاع الصمام الأبهري'). Describe pathophysiology, auscultation, physical signs (e.g., water-hammer pulse, wide pulse pressure, Austin Flint murmur), gold standard diagnostic imaging, and management.
2. Hints must NOT have pre-formed prefix tags like [Rx] or [Dx] or [Sx] or **markdown**.
3. Provide exactly 5 Arabic hints and 5 English hints.
4. Solo Flashcard must contain the 4 clinical pillars: etiology, goldStandard, firstLineRx, keyDifferentiator (in both Arabic and English).
5. Solo Hints must contain hint1 (smart exploratory), hint2 (clinical symptoms/signs), hint3 (definitive hallmark), and pearl (in both Arabic and English).
6. Pearl in soloHint MUST follow this format:
   Arabic: "التشخيص النهائي: قلس الأبهر (Aortic Regurgitation) - من أساسيات Cardiology."
   English: "Definitive diagnosis: Aortic Regurgitation (قلس الأبهر) - Core Cardiology."

Respond ONLY with valid JSON (no markdown formatting, no code fencing):
{
  "id": "w638",
  "word": {
    "id": "w638",
    "word": { "Arabic": "قلس الأبهر", "English": "Aortic Regurgitation" },
    "level": "Clinical",
    "difficulty": 2,
    "type": "Disease",
    "subjects": ["Cardiology", "Internal Medicine"],
    "synonyms": ["قلس الأبهر", "ارتجاع الصمام الأبهري", "قصور الصمام الأبهري", "Aortic Regurgitation", "Aortic Insufficiency"],
    "guessingDifficulty": 2
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

const data = JSON.stringify({
  model: 'deepseek-ai/DeepSeek-V4-Flash-0731',
  messages: [
    { role: 'system', content: 'You are a direct JSON generation engine. Keep internal thinking strictly under 100 words, then output ONLY the JSON.' },
    { role: 'user', content: prompt }
  ],
  max_tokens: 3500
});

const req = https.request('https://inference.dahl.global/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer dahl_KRQBNUjA3BASxLdkFxzEY7JSJKrSGSJSe'
  }
}, (res) => {
  console.log('HTTP Status:', res.statusCode);
  let body = '';
  res.on('data', chunk => {
    body += chunk;
    process.stdout.write('.');
  });
  res.on('end', () => {
    console.log('\nResponse received, length:', body.length);
    try {
      const resp = JSON.parse(body);
      if (resp.choices && resp.choices[0]) {
        console.log('FINISH REASON:', resp.choices[0].finish_reason);
        console.log('CONTENT:\n', resp.choices[0].message.content);
      } else {
        console.log('RESP:', JSON.stringify(resp).slice(0, 500));
      }
    } catch(e) {
      console.log('RAW:\n', body.slice(0, 500));
    }
  });
});
req.on('error', (e) => console.error('Error:', e));
req.write(data);
req.end();
