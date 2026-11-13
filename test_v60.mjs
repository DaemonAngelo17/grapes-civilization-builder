import { getFilteredQuestions, HISTORICAL_ERAS, CIVILIZATION_SCALES, HISTORICAL_PRESETS } from './src/data/grapesData.js';
import { checkOptionDisallowed } from './src/utils/logicRules.js';
import { LOGICAL_SYNERGIES, COMPOUND_SYNERGIES, getSynergyRecommendations, applyLogicalSynergies } from './src/utils/synergyRules.js';
import { generateTeacherStressTest } from './src/utils/stressTestGenerator.js';
import { generateNarrativeEssay, calculateStabilityScorecard } from './src/utils/narrativeGenerator.js';
import { calculateCivilizationStats } from './src/utils/civilizationStats.js';
import { generateCrisisScenario, evaluateCrisisChoice } from './src/utils/crisisSimulator.js';
import { generatePerspectives } from './src/utils/perspectiveGenerator.js';
import { generateArtifacts } from './src/utils/artifactGenerator.js';
import { simulateNeighborClash } from './src/utils/neighborClashSimulator.js';

console.log('=== RUNNING G.R.A.P.E.S. v6.0 ADVANCED GAMIFIED LAB TEST SUITE ===\n');

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
    console.log(`  ✅ PASS: ${message}`);
  } else {
    failed++;
    console.error(`  ❌ FAIL: ${message}`);
  }
}

// 1. Eras & Scales
console.log('--- 1. Chronological Eras & Spatial Scales ---');
assert(HISTORICAL_ERAS.length === 8, `8 Historical Eras configured (got ${HISTORICAL_ERAS.length})`);
assert(HISTORICAL_ERAS[0].id === 'neolithic_chalcolithic', `First era is neolithic_chalcolithic`);
assert(HISTORICAL_ERAS[6].id === 'early_medieval', `Era 7 is early_medieval`);
assert(HISTORICAL_ERAS[7].id === 'high_medieval', `Era 8 is high_medieval`);

assert(CIVILIZATION_SCALES.length === 6, `6 Civilization Scales configured (got ${CIVILIZATION_SCALES.length})`);
const scaleIds = CIVILIZATION_SCALES.map(s => s.id);
assert(scaleIds.includes('micro_polity'), `Scales include micro_polity`);
assert(scaleIds.includes('city_state'), `Scales include city_state`);
assert(scaleIds.includes('thalassocracy_network'), `Scales include thalassocracy_network`);
assert(scaleIds.includes('regional_kingdom'), `Scales include regional_kingdom`);
assert(scaleIds.includes('nomadic_confederacy'), `Scales include nomadic_confederacy`);
assert(scaleIds.includes('continental_empire'), `Scales include continental_empire`);

// 2. Historical Presets (All 8 Benchmarks)
console.log('\n--- 2. Historical Benchmarks (8 Presets) ---');
const presetKeys = Object.keys(HISTORICAL_PRESETS);
assert(presetKeys.length >= 8, `At least 8 presets present (got ${presetKeys.length})`);
const expectedPresets = ['egypt', 'mesopotamia', 'maya', 'greece_rome', 'aksum_kush', 'xiongnu_steppe', 'polynesia', 'qin_han'];
for (const pKey of expectedPresets) {
  assert(HISTORICAL_PRESETS[pKey] !== undefined, `Preset '${pKey}' exists (${HISTORICAL_PRESETS[pKey]?.name})`);
}

// 3. Question & Option Filtering Across Tiers
console.log('\n--- 3. Complexity Tiers & Inquiry Inquiry Counts ---');
const basic = getFilteredQuestions('basic');
const normal = getFilteredQuestions('normal');
const complex = getFilteredQuestions('complex');

const countQs = (obj) => Object.values(obj).reduce((acc, list) => acc + list.length, 0);

assert(countQs(basic) >= 12, `Basic mode questions count >= 12 (got ${countQs(basic)})`);
assert(countQs(normal) >= 31, `Normal mode questions count >= 31 (got ${countQs(normal)})`);
assert(countQs(complex) >= 37, `Complex mode questions count >= 37 (got ${countQs(complex)})`);

// P7 neighbor relations
const p7Complex = complex.P.find(q => q.id === 'p7_neighbor_relations');
assert(p7Complex !== undefined, `Inquiry P7 (p7_neighbor_relations) exists`);
assert(p7Complex?.options.length === 12, `P7 has 12 options in complex mode (got ${p7Complex?.options.length})`);

// 4. Logic Guard Historical & Environmental Lockouts
console.log('\n--- 4. Logic Guard Validation Rules ---');

// Neolithic locks
const neolithicBronzeLock = checkOptionDisallowed('g4_resources', 'Copper and tin deposits (for smelting bronze weapons and armor)', {}, true, 'neolithic_chalcolithic', 'micro_polity', 'normal');
assert(neolithicBronzeLock.isDisallowed, `Neolithic Bronze lock active`);

const neolithicScriptLock = checkOptionDisallowed('a1_writing', 'Phonetic Alphabet (20-30 simple letters representing sounds, easy for common people to learn)', {}, true, 'neolithic_chalcolithic', 'micro_polity', 'normal');
assert(neolithicScriptLock.isDisallowed, `Neolithic Phonetic script lock active`);

// Early medieval stirrups / woodblock printing
const woodblockLock = checkOptionDisallowed(
  'a5_science',
  'Woodblock Printing, Paper-Making Mills, and Mechanical Water-Powered Escapement Clocks (Tang/Song dynasty breakthroughs)',
  {},
  true,
  'classical_antiquity',
  'regional_kingdom',
  'complex'
);
assert(woodblockLock.isDisallowed, `Woodblock printing locked before 500 CE`);

const woodblockAllowed = checkOptionDisallowed(
  'a5_science',
  'Woodblock Printing, Paper-Making Mills, and Mechanical Water-Powered Escapement Clocks (Tang/Song dynasty breakthroughs)',
  {},
  true,
  'early_medieval',
  'regional_kingdom',
  'complex'
);
assert(!woodblockAllowed.isDisallowed, `Woodblock printing unlocked in Early Medieval`);

// High medieval gunpowder / banknotes
const gunpowderLock = checkOptionDisallowed(
  'a5_science',
  'Early Gunpowder Siege Bombs, Fire-Lances, and Counterweight Trebuchets (High Medieval siege engineering)',
  {},
  true,
  'early_medieval',
  'regional_kingdom',
  'complex'
);
assert(gunpowderLock.isDisallowed, `Gunpowder locked before 1000 CE`);

const gunpowderAllowed = checkOptionDisallowed(
  'a5_science',
  'Early Gunpowder Siege Bombs, Fire-Lances, and Counterweight Trebuchets (High Medieval siege engineering)',
  {},
  true,
  'high_medieval',
  'regional_kingdom',
  'complex'
);
assert(!gunpowderAllowed.isDisallowed, `Gunpowder unlocked in High Medieval`);

// Climatic contradiction: tropical vs dzud
const dzudLock = checkOptionDisallowed(
  'g6_disasters',
  'Severe winter blizzards and permafrost frosts (dzud) freezing pasture grasslands and devastating herds of livestock',
  { g2_terrain: ['Dense, humid tropical rainforest with thick canopy'] },
  true,
  'classical_antiquity',
  'regional_kingdom',
  'normal'
);
assert(dzudLock.isDisallowed, `Tropical rainforest cannot suffer sub-zero permafrost dzud`);

// Topographical contradiction: landlocked vs naval harbor
const navalLock = checkOptionDisallowed(
  'a3_monuments',
  'Artificial enclosed naval harbors (cothons) with circular inner military drydocks and outer commercial ports (like Carthage)',
  { g2_terrain: ['High-altitude flat plateau (steppe) swept by strong winds'] },
  true,
  'classical_antiquity',
  'nomadic_confederacy',
  'normal'
);
assert(navalLock.isDisallowed, `Landlocked steppe cannot build naval cothon harbors`);

// Biological contradiction: taiga vs tropical yams
const yamsLock = checkOptionDisallowed(
  'e1_crops',
  'Tropical root tubers (taro, yams, cassava, and sweet potatoes)',
  { g2_terrain: ['Sub-arctic boreal taiga and amber-rich Baltic coastline intersected by seasonal frozen rivers'] },
  true,
  'classical_antiquity',
  'regional_kingdom',
  'complex'
);
assert(yamsLock.isDisallowed, `Sub-arctic taiga cannot grow tropical yams`);

// Script writing medium: parchment requires livestock
const parchmentLock = checkOptionDisallowed(
  'a2_medium',
  'Parchment or vellum made from scraped, dried animal skins',
  { e2_animals: ['None — all goods are carried on the backs of human porters and canoes (like Mesoamerica)'] },
  true,
  'classical_antiquity',
  'regional_kingdom',
  'normal'
);
assert(parchmentLock.isDisallowed, `Parchment requires domesticated livestock`);

// 5. 6-Axis Civilization Stats & DNA Matching
console.log('\n--- 5. Civilization Radar & Historical DNA Matching ---');
const egyptAnswers = HISTORICAL_PRESETS.egypt.answers;
const egyptStats = calculateCivilizationStats(egyptAnswers);
assert(egyptStats.stats.theocraticPiety > 50, `Egypt has high theocratic piety (${egyptStats.stats.theocraticPiety})`);
assert(egyptStats.stats.mercantileWealth > 50, `Egypt has high mercantile wealth (${egyptStats.stats.mercantileWealth})`);
assert(egyptStats.topMatch.id === 'egypt', `Egypt preset matches Egypt benchmark as top match (${egyptStats.topMatch.matchPct}%)`);

const steppeAnswers = HISTORICAL_PRESETS.xiongnu_steppe.answers;
const steppeStats = calculateCivilizationStats(steppeAnswers);
assert(steppeStats.stats.militaryMight > 60, `Steppe nomads have high military might (${steppeStats.stats.militaryMight})`);
assert(steppeStats.topMatch.id === 'xiongnu_steppe', `Steppe preset matches Xiongnu benchmark (${steppeStats.topMatch.matchPct}%)`);

// 6. Narrative Generator & Stability Scorecard
console.log('\n--- 6. Narrative Generator & Stability Scorecard ---');
const basicEssay = generateNarrativeEssay('Kemet', 'Ancient Egypt', egyptAnswers, {}, 'early_bronze', 'regional_kingdom', 'basic');
assert(basicEssay.length === 3, `Basic mode generates 3-paragraph narrative (got ${basicEssay.length})`);

const complexEssay = generateNarrativeEssay('Kemet', 'Ancient Egypt', egyptAnswers, {}, 'early_bronze', 'regional_kingdom', 'complex');
assert(complexEssay.length === 6, `Complex mode generates 6-paragraph treatise (got ${complexEssay.length})`);

const scorecard = calculateStabilityScorecard(egyptAnswers, 'early_bronze', 'regional_kingdom');
assert(scorecard.agrarianCapacity.score >= 50, `Egypt has resilient agrarian surplus (${scorecard.agrarianCapacity.score}%)`);
assert(scorecard.overallStabilityIndex >= 50, `Egypt overall stability is positive (${scorecard.overallStabilityIndex}%)`);

// 7. Crisis Event Minigame
console.log('\n--- 7. "Survive 500 Years" Crisis Minigame ---');
const crises = generateCrisisScenario(egyptAnswers, 'early_bronze', 'regional_kingdom');
assert(crises.length === 3, `Generates 3 sequential crisis scenarios (got ${crises.length})`);
assert(crises[0].options.length === 3, `Crisis 1 has 3 crisis options`);

// Test crisis resolution with Egypt's actual infrastructure (has basin irrigation and storehouses)
const evalRes = evaluateCrisisChoice(crises[0], 'granary_ration', egyptAnswers);
assert(evalRes.isSuccess === true, `Egypt answers successfully weather Crisis 1 via granaries/irrigation`);
assert(evalRes.points >= 300, `Earns full survival points for Crisis 1 (${evalRes.points} pts)`);

// 8. 4-Caste First-Person Historical Diaries
console.log('\n--- 8. "Voices of the People" Perspective Generator ---');
const perspectives = generatePerspectives('Kemet', egyptAnswers, 'early_bronze', 'regional_kingdom');
assert(perspectives.length === 4, `Generates 4 caste perspectives (got ${perspectives.length})`);
const casteIds = perspectives.map(p => p.casteId);
assert(casteIds.includes('sovereign'), `Includes Apex Sovereign`);
assert(casteIds.includes('scribe'), `Includes Specialist Scribe`);
assert(casteIds.includes('citizen_woman'), `Includes Everyday Citizen Woman`);
assert(casteIds.includes('laborer'), `Includes Bottom-Tier Laborer`);
assert(perspectives[0].diaryEntry.length > 200, `Sovereign diary entry is richly populated`);

// 9. Archaeological Museum Exhibit
console.log('\n--- 9. Archaeological Museum & Scientific Taphonomy ---');
const artifacts = generateArtifacts('Kemet', egyptAnswers, 'early_bronze', 'regional_kingdom');
assert(artifacts.length === 4, `Generates 4 museum artifact cards (got ${artifacts.length})`);
assert(artifacts[0].taphonomyAnalysis.toLowerCase().includes('arid') || artifacts[0].taphonomyAnalysis.toLowerCase().includes('desiccat'), `Taphonomy note correctly recognizes desert aridity`);

// 10. Neighbor Clash Simulator
console.log('\n--- 10. Neighbor Clash Geopolitical Simulator ---');
const clashVsChina = simulateNeighborClash(egyptAnswers, 'qin_han');
assert(clashVsChina.warOutcome !== undefined, `Generates Border War outcome`);
assert(clashVsChina.tradeOutcome !== undefined, `Generates Trade Monopoly outcome`);
assert(clashVsChina.cultureOutcome !== undefined, `Generates Cultural Assimilation outcome`);
assert(clashVsChina.overallDominancePct >= 1 && clashVsChina.overallDominancePct <= 99, `Overall dominance ratio computed (${clashVsChina.overallDominancePct}%)`);

console.log(`\n========================================`);
console.log(`RESULTS: ${passed} passed, ${failed} failed.`);
console.log(`========================================\n`);

if (failed > 0) {
  process.exit(1);
}
