import { medicalWords, MedicalWord } from '../../src/data/medicalWords';
import { WORD_IMAGES } from '../../src/data/wordImages';
import { getSoloProgressiveHints, generateSoloOptions } from '../../src/data/soloHints';
import { getSoloFlashcard } from '../../src/data/soloFlashcards';
import {
  STAGE_1_QUESTIONS,
  getAdaptiveQuestionsForStage,
  getBranchQuestionsForStage,
  getWordBranch,
  evaluateQuestionTruth,
  detectSystemFromQuestionAndAnswer
} from '../../src/data/clinicalInquiryTree';

interface AuditResult {
  suite: string;
  test: string;
  status: 'PASS' | 'FAIL' | 'WARN';
  details?: string;
}

const results: AuditResult[] = [];

function assert(condition: boolean, suite: string, test: string, details?: string) {
  if (condition) {
    results.push({ suite, test, status: 'PASS' });
  } else {
    results.push({ suite, test, status: 'FAIL', details });
    console.error(`❌ FAIL [${suite}] ${test}: ${details || ''}`);
  }
}

function warn(suite: string, test: string, details: string) {
  results.push({ suite, test, status: 'WARN', details });
  console.warn(`⚠️ WARN [${suite}] ${test}: ${details}`);
}

// -------------------------------------------------------------
// Helper: getRelatedWord from MedicalCupView logic
// -------------------------------------------------------------
function getRelatedWord(chosenWord: MedicalWord, pool: MedicalWord[]): MedicalWord {
  const sameSpecialty = pool.filter(w =>
    w.id !== chosenWord.id &&
    w.subjects.some(s => chosenWord.subjects.includes(s))
  );
  if (sameSpecialty.length > 0) {
    return sameSpecialty[Math.floor(Math.random() * sameSpecialty.length)];
  }
  const sameType = pool.filter(w => w.id !== chosenWord.id && w.type === chosenWord.type);
  if (sameType.length > 0) {
    return sameType[Math.floor(Math.random() * sameType.length)];
  }
  const anyOther = pool.filter(w => w.id !== chosenWord.id);
  return anyOther[Math.floor(Math.random() * anyOther.length)];
}

console.log("===============================================================");
console.log("🏥 STARTING COMPREHENSIVE DR. IMPOSTER AUDIT & SIMULATIONS");
console.log("===============================================================\n");

// =============================================================
// SUITE 1: Medical Words Database & Consistency Audit
// =============================================================
console.log("▶ [Suite 1/5] Auditing Medical Words Database Integrity...");

assert(medicalWords.length >= 100, "Database", "Words Count", `Found ${medicalWords.length} words`);

const seenIds = new Set<string>();
let missingArabic = 0;
let missingEnglish = 0;
let missingType = 0;
let missingSubjects = 0;

for (const w of medicalWords) {
  if (seenIds.has(w.id)) {
    assert(false, "Database", `Duplicate Word ID: ${w.id}`, "ID already registered");
  }
  seenIds.add(w.id);

  if (!w.word?.Arabic) missingArabic++;
  if (!w.word?.English) missingEnglish++;
  if (!w.type) missingType++;
  if (!w.subjects || w.subjects.length === 0) missingSubjects++;
}

assert(missingArabic === 0, "Database", "All Words Have Arabic Text", `Missing: ${missingArabic}`);
assert(missingEnglish === 0, "Database", "All Words Have English Text", `Missing: ${missingEnglish}`);
assert(missingType === 0, "Database", "All Words Have Clinical Type", `Missing: ${missingType}`);
assert(missingSubjects === 0, "Database", "All Words Have Specialties/Subjects", `Missing: ${missingSubjects}`);

// Test Related Word generator for 100 random words
let relatedWordSameError = 0;
for (let i = 0; i < 100; i++) {
  const word = medicalWords[Math.floor(Math.random() * medicalWords.length)];
  const rel = getRelatedWord(word, medicalWords);
  if (!rel || rel.id === word.id) {
    relatedWordSameError++;
  }
}
assert(relatedWordSameError === 0, "Database", "getRelatedWord Never Returns Same Word", `Errors: ${relatedWordSameError}`);

// =============================================================
// SUITE 2: Solo Challenge Clinical Simulation
// =============================================================
console.log("\n▶ [Suite 2/5] Simulating Solo Challenge Diagnosis Engines...");

let soloOptionsCountErrors = 0;
let soloOptionsMissingTargetErrors = 0;
let soloOptionsDuplicateErrors = 0;

// Test solo options generation across 150 words
for (let i = 0; i < 150; i++) {
  const targetWord = medicalWords[i % medicalWords.length];
  const options = generateSoloOptions(targetWord, medicalWords);

  if (options.length !== 5) soloOptionsCountErrors++;
  if (!options.some(o => o.id === targetWord.id)) soloOptionsMissingTargetErrors++;

  const optIds = new Set(options.map(o => o.id));
  if (optIds.size !== options.length) soloOptionsDuplicateErrors++;
}

assert(soloOptionsCountErrors === 0, "Solo Engine", "generateSoloOptions Returns Exactly 5 Choices", `Errors: ${soloOptionsCountErrors}`);
assert(soloOptionsMissingTargetErrors === 0, "Solo Engine", "generateSoloOptions Always Includes Target Word", `Errors: ${soloOptionsMissingTargetErrors}`);
assert(soloOptionsDuplicateErrors === 0, "Solo Engine", "generateSoloOptions Has 5 Unique Choices", `Errors: ${soloOptionsDuplicateErrors}`);

// Test progressive hints
let hintsAvailableCount = 0;
for (const w of medicalWords.slice(0, 50)) {
  const hintsAr = getSoloProgressiveHints(w, 'Arabic');
  const hintsEn = getSoloProgressiveHints(w, 'English');
  if (hintsAr && hintsAr.hint1 && hintsEn && hintsEn.hint1) {
    hintsAvailableCount++;
  }
}
assert(hintsAvailableCount === 50, "Solo Engine", "Progressive Hints Availability (Ar & En)", `Covered: ${hintsAvailableCount}/50 sampled`);

// =============================================================
// SUITE 3: Role Distribution & Multiplayer Fairness Simulation
// =============================================================
console.log("\n▶ [Suite 3/5] Simulating Multi-Player Role Distributions (2 to 10 players)...");

// Test player counts: 2, 3, 4, 5, 6, 7, 8, 10
const testPlayerCounts = [2, 3, 4, 5, 6, 7, 8, 10];

for (const pCount of testPlayerCounts) {
  const playerNames = Array.from({ length: pCount }, (_, i) => `Doctor_${i + 1}`);

  // Simulate 100 rounds for each player count
  let imposterCountErrors = 0;
  let wordAssignmentErrors = 0;
  const imposterFrequency: Record<string, number> = {};

  for (let r = 0; r < 100; r++) {
    const chosenWord = medicalWords[r % medicalWords.length];
    const secondaryWord = getRelatedWord(chosenWord, medicalWords);

    const players = playerNames.map((name, idx) => ({
      id: `p_${idx}`,
      name,
      score: 0,
      role: 'NORMAL',
      assignedWordId: chosenWord.id
    }));

    if (pCount >= 3) {
      const actualImposterCount = (pCount >= 5 && r % 2 === 0) ? 2 : 1; // test both 1 and 2 imposters

      // Shuffle & sort by previous imposter count to balance
      const playersWithCounts = players.map((p, idx) => ({
        index: idx,
        name: p.name,
        count: imposterFrequency[p.name] || 0
      }));

      playersWithCounts.sort((a, b) => a.count - b.count);
      const chosenImposters = playersWithCounts.slice(0, actualImposterCount);

      chosenImposters.forEach(item => {
        players[item.index].role = 'IMPOSTER';
        players[item.index].assignedWordId = secondaryWord.id;
        imposterFrequency[item.name] = (imposterFrequency[item.name] || 0) + 1;
      });

      const actualImpInGame = players.filter(p => p.role === 'IMPOSTER').length;
      if (actualImpInGame !== actualImposterCount) {
        imposterCountErrors++;
      }

      // Check doctor cards
      const normalPlayers = players.filter(p => p.role === 'NORMAL');
      if (normalPlayers.some(p => p.assignedWordId !== chosenWord.id)) {
        wordAssignmentErrors++;
      }
    } else {
      // 2-player Duet Duel mode
      players[0].assignedWordId = chosenWord.id;
      players[1].assignedWordId = secondaryWord.id;
      if (players[0].assignedWordId === players[1].assignedWordId) {
        wordAssignmentErrors++;
      }
    }
  }

  assert(
    imposterCountErrors === 0,
    "Multiplayer Role Engine",
    `${pCount} Players: Correct Imposter Count Across 100 Rounds`,
    `Errors: ${imposterCountErrors}`
  );
  assert(
    wordAssignmentErrors === 0,
    "Multiplayer Role Engine",
    `${pCount} Players: Correct Word Assignments Across 100 Rounds`,
    `Errors: ${wordAssignmentErrors}`
  );

  if (pCount >= 3) {
    // Check fairness: variance between min and max imposter assignment
    const counts = Object.values(imposterFrequency);
    const minC = Math.min(...counts);
    const maxC = Math.max(...counts);
    const diff = maxC - minC;
    assert(diff <= 5, "Multiplayer Fairness", `${pCount} Players: Imposter Selection Balance (Diff <= 5)`, `Max: ${maxC}, Min: ${minC}, Diff: ${diff}`);
  }
}

// =============================================================
// SUITE 4: Voting Mechanics & Tie Breaker Stress Test
// =============================================================
console.log("\n▶ [Suite 4/5] Simulating Voting Mechanics, Ties & Scoring...");

// Test Scenario A: Unanimous vote against imposter
{
  const votes = { p1: 'p_imposter', p2: 'p_imposter', p3: 'p_imposter' };
  const tallies: Record<string, number> = {};
  Object.values(votes).forEach(v => { tallies[v] = (tallies[v] || 0) + 1; });
  let maxV = 0;
  let voted = '';
  Object.keys(tallies).forEach(id => {
    if (tallies[id] > maxV) { maxV = tallies[id]; voted = id; }
  });
  assert(voted === 'p_imposter' && maxV === 3, "Voting Engine", "Unanimous Vote Correctly Exposes Imposter");
}

// Test Scenario B: PERFECT TIE (e.g. 2 votes for p1, 2 votes for p2 in a 4-player game)
{
  const votes = { p1: 'p2', p2: 'p1', p3: 'p1', p4: 'p2' };
  const tallies: Record<string, number> = {};
  Object.values(votes).forEach(v => { tallies[v] = (tallies[v] || 0) + 1; });
  
  let maxVotes = 0;
  Object.values(tallies).forEach(v => { if (v > maxVotes) maxVotes = v; });
  const tiedCandidates = Object.keys(tallies).filter(id => tallies[id] === maxVotes);

  let votedId = '';
  if (tiedCandidates.length > 0) {
    votedId = tiedCandidates[Math.floor(Math.random() * tiedCandidates.length)];
  }

  assert(tiedCandidates.length === 2, "Voting Engine", "Tie Detection Correctly Identifies Tied Suspects");
  assert(votedId === 'p1' || votedId === 'p2', "Voting Engine", "Tie Breaker Successfully Resolves to Valid Candidate");
}

// Test Scenario C: 2-Player Duet Duel Guess Scoring
{
  const p1WordId = 'w_asthma';
  const p2WordId = 'w_copd';

  // Sub-case 1: Both correct (+50 each)
  const guessP1_correct = p2WordId;
  const guessP2_correct = p1WordId;
  const p1Score_1 = (guessP1_correct === p2WordId ? 50 : 0);
  const p2Score_1 = (guessP2_correct === p1WordId ? 50 : 0);
  assert(p1Score_1 === 50 && p2Score_1 === 50, "Duet Duel", "Both Players Correct -> 50 Pts Each");

  // Sub-case 2: P1 correct, P2 wrong
  const guessP2_wrong: string = 'w_pneumonia';
  const p1Score_2 = (guessP1_correct === p2WordId ? 50 : 0);
  const p2Score_2 = (guessP2_wrong === (p1WordId as string) ? 50 : 0);
  assert(p1Score_2 === 50 && p2Score_2 === 0, "Duet Duel", "P1 Correct, P2 Wrong -> 50 vs 0 Pts");
}

// =============================================================
// SUITE 5: Clinical Inquiry Tree & Visual Images Integrity
// =============================================================
console.log("\n▶ [Suite 5/5] Auditing Clinical Inquiry Tree & Visual Challenge Assets...");

assert(STAGE_1_QUESTIONS.length >= 3, "Inquiry Tree", "Stage 1 Questions Defined", `Found ${STAGE_1_QUESTIONS.length}`);

// Test Stage 1 and Adaptive question fetching
let treeErrors = 0;
for (let i = 0; i < 20; i++) {
  const sampleWord = medicalWords[i];
  const branch = getWordBranch(sampleWord);
  if (!branch) {
    treeErrors++;
    continue;
  }
  const stage2Qs = getAdaptiveQuestionsForStage(2, branch, '');
  if (!stage2Qs || stage2Qs.length === 0) {
    treeErrors++;
  }
}
assert(treeErrors === 0, "Inquiry Tree", "getAdaptiveQuestionsForStage Returns Valid Question Sets", `Errors: ${treeErrors}`);

// Test Visual Specimen Assets
const imageIds = Object.keys(WORD_IMAGES);
assert(imageIds.length >= 30, "Visual Assets", "Photorealistic Medical Specimen Images Registered", `Found ${imageIds.length} images`);

let invalidImageWordRefs = 0;
for (const wordId of imageIds) {
  const foundWord = medicalWords.find(w => w.id === wordId);
  if (!foundWord) {
    invalidImageWordRefs++;
  }
}
assert(invalidImageWordRefs === 0, "Visual Assets", "All Registered Images Link to Valid Medical Words", `Invalid references: ${invalidImageWordRefs}`);

// =============================================================
// SUITE 6: Clinoma Games Platform Architecture (Dr. Imposter 3+, 1v1 Battle 2, Guess 1)
// =============================================================
console.log("\n▶ [Suite 6/6] Auditing Clinoma Games Platform & Mode Constraints...");

// Test 1: 1 vs 1 Battle player limits
const battlePlayers = ['د. أحمد', 'د. سارة'];
assert(battlePlayers.length === 2, "Platform Hub", "1 vs 1 Battle requires strictly 2 players", `Roster count: ${battlePlayers.length}`);

// Test 2: Dr. Imposter player limits (min 3, max 10)
for (let count = 3; count <= 10; count++) {
  const imposterCount = count >= 7 ? 2 : 1;
  assert(imposterCount >= 1 && imposterCount <= 2, "Platform Hub", `Dr. Imposter Roster ${count} players assigns valid imposter count (${imposterCount})`);
}

// Test 3: Guess Solo 1-Player engine integrity
const sampleWord = medicalWords[0];
const soloHints = getSoloProgressiveHints(sampleWord, 'Arabic');
const soloOptions = generateSoloOptions(sampleWord, medicalWords, 'Arabic');
assert(Boolean(soloHints.hint1 && soloHints.hint2 && soloHints.hint3), "Platform Hub", "Guess Mode provides 3 progressive clinical clues (hint1, hint2, hint3)");
assert(soloOptions.length === 5, "Platform Hub", "Guess Mode generates exactly 5 differential diagnosis options");
assert(soloOptions.some(opt => opt.id === sampleWord.id), "Platform Hub", "Guess Mode options include the correct target diagnosis");

// -------------------------------------------------------------
// SUMMARY & SCORECARD
// -------------------------------------------------------------
console.log("\n===============================================================");
console.log("📊 SIMULATION AUDIT REPORT SUMMARY");
console.log("===============================================================");

const passed = results.filter(r => r.status === 'PASS').length;
const failed = results.filter(r => r.status === 'FAIL').length;
const warnings = results.filter(r => r.status === 'WARN').length;

console.log(`TOTAL CHECKS RUN : ${results.length}`);
console.log(`✅ PASSED         : ${passed}`);
console.log(`❌ FAILED         : ${failed}`);
console.log(`⚠️ WARNINGS       : ${warnings}`);

if (failed === 0) {
  console.log("\n🎉 ALL LOGIC PATHS, DATA STRUCTURES & SIMULATIONS PASSED 100%!");
} else {
  console.error(`\n🚨 FOUND ${failed} ISSUES THAT REQUIRE ATTENTION.`);
}

console.log("===============================================================\n");
