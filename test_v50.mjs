import { getFilteredQuestions, HISTORICAL_ERAS, CIVILIZATION_SCALES } from './src/data/grapesData.js';
import { checkOptionDisallowed } from './src/utils/logicRules.js';
import { LOGICAL_SYNERGIES, COMPOUND_SYNERGIES, getSynergyRecommendations, applyLogicalSynergies } from './src/utils/synergyRules.js';
import { generateTeacherStressTest } from './src/utils/stressTestGenerator.js';
import { generateNarrativeEssay } from './src/utils/narrativeGenerator.js';

console.log('=== RUNNING G.R.A.P.E.S. v5.0 COMPREHENSIVE TEST SUITE ===');

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
assert(HISTORICAL_ERAS.length === 8, `8 Historical Eras (got ${HISTORICAL_ERAS.length})`);
assert(HISTORICAL_ERAS[0].id === 'neolithic_chalcolithic', `First era is neolithic_chalcolithic`);
assert(HISTORICAL_ERAS[6].id === 'early_medieval', `Era 7 is early_medieval`);
assert(HISTORICAL_ERAS[7].id === 'high_medieval', `Era 8 is high_medieval`);

assert(CIVILIZATION_SCALES.length === 6, `6 Civilization Scales (got ${CIVILIZATION_SCALES.length})`);
const scaleIds = CIVILIZATION_SCALES.map(s => s.id);
assert(scaleIds.includes('micro_polity'), `Scales include micro_polity`);
assert(scaleIds.includes('thalassocracy_network'), `Scales include thalassocracy_network`);
assert(scaleIds.includes('nomadic_confederacy'), `Scales include nomadic_confederacy`);

// 2. Question counts by mode
const basic = getFilteredQuestions('basic');
const normal = getFilteredQuestions('normal');
const complex = getFilteredQuestions('complex');

const countQs = (obj) => Object.values(obj).reduce((acc, list) => acc + list.length, 0);
const countOpts = (obj) => Object.values(obj).reduce((acc, list) => acc + list.reduce((oAcc, q) => oAcc + q.options.length, 0), 0);

assert(countQs(basic) === 13, `Basic mode has 13 questions (got ${countQs(basic)})`);
assert(countQs(normal) === 32, `Normal mode has 32 questions (got ${countQs(normal)})`);
assert(countQs(complex) === 38, `Complex mode has 38 questions (got ${countQs(complex)})`);

const p7Basic = basic.P.find(q => q.id === 'p7_neighbor_relations');
const p7Normal = normal.P.find(q => q.id === 'p7_neighbor_relations');
const p7Complex = complex.P.find(q => q.id === 'p7_neighbor_relations');

assert(p7Basic?.options.length === 5, `P7 has 5 options in basic mode (got ${p7Basic?.options.length})`);
assert(p7Normal?.options.length === 10, `P7 has 10 options in normal mode (got ${p7Normal?.options.length})`);
assert(p7Complex?.options.length === 12, `P7 has 12 options in complex mode (got ${p7Complex?.options.length})`);

// 3. Neolithic locks
const neolithicBronzeLock = checkOptionDisallowed(
  'g4_resources',
  'Copper and tin deposits (for smelting bronze weapons and armor)',
  {},
  true,
  'neolithic_chalcolithic',
  'micro_polity',
  'normal'
);
assert(neolithicBronzeLock.isDisallowed, `Bronze copper/tin locked in Neolithic (${neolithicBronzeLock.reason})`);

const neolithicScriptLock = checkOptionDisallowed(
  'a1_writing',
  'Phonetic Alphabet (20-30 simple letters representing sounds, easy for common people to learn)',
  {},
  true,
  'neolithic_chalcolithic',
  'micro_polity',
  'normal'
);
assert(neolithicScriptLock.isDisallowed, `Phonetic script locked in Neolithic (${neolithicScriptLock.reason})`);

const neolithicAllowedScript = checkOptionDisallowed(
  'a1_writing',
  'Undeciphered glyph seals stamped into steatite and terracotta (like the Indus Valley script)',
  {},
  true,
  'neolithic_chalcolithic',
  'micro_polity',
  'normal'
);
assert(!neolithicAllowedScript.isDisallowed, `Stamp seals allowed in Neolithic`);

const neolithicHorseLock = checkOptionDisallowed(
  'e2_animals',
  'Horses and Camels (speed, cavalry shock warfare, long-range desert trade)',
  {},
  true,
  'neolithic_chalcolithic',
  'micro_polity',
  'normal'
);
assert(neolithicHorseLock.isDisallowed, `Horses locked in Neolithic (${neolithicHorseLock.reason})`);

const neolithicCoinsLock = checkOptionDisallowed(
  'e3_currency',
  'Standardized Stamped Coins (electrum, gold, silver, or bronze coins guaranteed by the state)',
  {},
  true,
  'neolithic_chalcolithic',
  'micro_polity',
  'normal'
);
assert(neolithicCoinsLock.isDisallowed, `Coins locked in Neolithic (${neolithicCoinsLock.reason})`);

// 4. Medieval locks
const earlyWoodblockLock = checkOptionDisallowed(
  'a5_science',
  'Woodblock Printing, Paper-Making Mills, and Mechanical Water-Powered Escapement Clocks (Tang/Song dynasty breakthroughs)',
  {},
  true,
  'classical_antiquity',
  'regional_kingdom',
  'complex'
);
assert(earlyWoodblockLock.isDisallowed, `Woodblock printing locked before medieval (${earlyWoodblockLock.reason})`);

const earlyWoodblockUnlock = checkOptionDisallowed(
  'a5_science',
  'Woodblock Printing, Paper-Making Mills, and Mechanical Water-Powered Escapement Clocks (Tang/Song dynasty breakthroughs)',
  {},
  true,
  'early_medieval',
  'regional_kingdom',
  'complex'
);
assert(!earlyWoodblockUnlock.isDisallowed, `Woodblock printing unlocked in early_medieval`);

const gunpowderLock = checkOptionDisallowed(
  'a5_science',
  'Early Gunpowder Siege Bombs, Fire-Lances, and Counterweight Trebuchets (High Medieval siege engineering)',
  {},
  true,
  'early_medieval',
  'regional_kingdom',
  'complex'
);
assert(gunpowderLock.isDisallowed, `Gunpowder locked in early_medieval (${gunpowderLock.reason})`);

const gunpowderUnlock = checkOptionDisallowed(
  'a5_science',
  'Early Gunpowder Siege Bombs, Fire-Lances, and Counterweight Trebuchets (High Medieval siege engineering)',
  {},
  true,
  'high_medieval',
  'regional_kingdom',
  'complex'
);
assert(!gunpowderUnlock.isDisallowed, `Gunpowder unlocked in high_medieval`);

// 5. Scale Locks
const microPolityStandingArmy = checkOptionDisallowed(
  'p4_military',
  'Permanent Professional Standing Army (full-time paid soldiers who train year-round)',
  {},
  true,
  'early_bronze',
  'micro_polity',
  'normal'
);
assert(microPolityStandingArmy.isDisallowed, `Micro-polity standing army locked (${microPolityStandingArmy.reason})`);

const microPolityBufferState = checkOptionDisallowed(
  'p7_neighbor_relations',
  'Hegemonic Core & Tributary Buffer States (turning weaker bordering kingdoms into puppet shield-states that absorb barbarian attacks and pay annual tribute, like Rome or Han China)',
  {},
  true,
  'early_bronze',
  'micro_polity',
  'normal'
);
assert(microPolityBufferState.isDisallowed, `Micro-polity buffer states locked (${microPolityBufferState.reason})`);

const thalassocracyTradeBan = checkOptionDisallowed(
  'e5_trade',
  'Self-Sufficient Command Economy (foreign trade is banned or strictly controlled by royal agents; everything needed is produced internally)',
  {},
  true,
  'early_iron',
  'thalassocracy_network',
  'normal'
);
assert(thalassocracyTradeBan.isDisallowed, `Thalassocracy trade ban locked (${thalassocracyTradeBan.reason})`);

const nomadicStationaryHarbor = checkOptionDisallowed(
  'a3_monuments',
  'Artificial Enclosed Naval Harbors (Cothons) with covered drydocks and slipways for 200+ warships (like Carthage)',
  {},
  true,
  'classical_antiquity',
  'nomadic_confederacy',
  'normal'
);
assert(nomadicStationaryHarbor.isDisallowed, `Nomadic confederacy naval harbor locked (${nomadicStationaryHarbor.reason})`);

const continentalSanctuaryLock = checkOptionDisallowed(
  'p7_neighbor_relations',
  'Neutral Sacred Sanctuary & Oracle Arbitrator (neighbors refuse to invade your small territory because you host the shared holy oracle, pan-regional festival games, or neutral temple bank, like Delphi)',
  {},
  true,
  'imperial_era',
  'continental_empire',
  'normal'
);
assert(continentalSanctuaryLock.isDisallowed, `Continental empire neutral sanctuary locked (${continentalSanctuaryLock.reason})`);

// 6. Cross-Category Neighbor Locks
const sanctuaryVsTerror = checkOptionDisallowed(
  'p7_neighbor_relations',
  'Neutral Sacred Sanctuary & Oracle Arbitrator (neighbors refuse to invade your small territory because you host the shared holy oracle, pan-regional festival games, or neutral temple bank, like Delphi)',
  { p4_military: ['Psychological Terror (flaying rebel leaders and building pyramids of skulls so cities surrender without fighting)'] },
  true,
  'classical_antiquity',
  'city_state',
  'normal'
);
assert(sanctuaryVsTerror.isDisallowed, `Sanctuary vs Psychological Terror locked (${sanctuaryVsTerror.reason})`);

const steppeExtortionNoCav = checkOptionDisallowed(
  'p7_neighbor_relations',
  "Asymmetric 'Steppe vs. Sown' Extortion & Heqin Treaties (using mobile cavalry raids to force rich agricultural neighbors to pay annual silk, grain, and royal marriage bribes, like the Xiongnu)",
  { p4_military: ['Seasonal Peasant Levy (farmers are drafted after harvest season, given spears, and sent to fight)'] },
  true,
  'classical_antiquity',
  'nomadic_confederacy',
  'normal'
);
assert(steppeExtortionNoCav.isDisallowed, `Steppe extortion without cavalry locked (${steppeExtortionNoCav.reason})`);

const flowerWarsNoSacrifice = checkOptionDisallowed(
  'p7_neighbor_relations',
  "Captive-Taking 'Flower Wars' (Xochiyaoyotl — intentionally leaving neighboring pockets unconquered as a permanent military training ground and source of ritual war captives, like the Aztecs)",
  { r3_rituals: ['Daily food, wine, and incense offerings placed in front of temple statues'] },
  true,
  'classical_antiquity',
  'regional_kingdom',
  'normal'
);
assert(flowerWarsNoSacrifice.isDisallowed, `Flower wars without sacrifice locked (${flowerWarsNoSacrifice.reason})`);

const splendidIsolationOpenPlains = checkOptionDisallowed(
  'p7_neighbor_relations',
  'Splendid Geographic Isolation & Non-Intervention (relying on impassable oceans, deserts, or mountain walls to ignore foreign wars completely, trading only at a single regulated border port)',
  { g3_barriers: ['None — completely open flat plains requiring man-made walls and constant military vigilance'] },
  true,
  'classical_antiquity',
  'regional_kingdom',
  'normal'
);
assert(splendidIsolationOpenPlains.isDisallowed, `Splendid isolation on open plains without Great Wall locked (${splendidIsolationOpenPlains.reason})`);

// 7. Compound Synergies 18 & 19
const answers18 = {
  a3_monuments: ['Thousands of miles of frontier defensive walls and watchtowers (like the Great Wall)'],
  e5_trade: ['Overland Silk/Incense Caravan Routes (long-distance relay trade across deserts and mountains)']
};
const recs18 = getSynergyRecommendations(answers18, true, 'imperial_era', 'continental_empire', 'complex');
assert(recs18.has('Hegemonic Core & Tributary Buffer States (turning weaker bordering kingdoms into puppet shield-states that absorb barbarian attacks and pay annual tribute, like Rome or Han China)'), `Compound 18 recommends Tributary Buffer States`);

const answers19 = {
  a3_monuments: ['Megalithic Stone Circles, Dolmens, and Astronomical Passage Tombs (massive unmortared standing stones aligned with solstices, like Göbekli Tepe or Stonehenge)']
};
const recs19 = getSynergyRecommendations(answers19, true, 'neolithic_chalcolithic', 'micro_polity', 'complex');
assert(recs19.has('Cold-Hammered Native Copper, Polished Jade/Flint Axes, and Precision Obsidian Microblades (Chalcolithic toolmaking before bronze smelting)'), `Compound 19 mandates Native Copper tools`);

// 8. Teacher Stress Test
const stressDilemmas = generateTeacherStressTest(
  {
    p7_neighbor_relations: ['Hegemonic Core & Tributary Buffer States (turning weaker bordering kingdoms into puppet shield-states that absorb barbarian attacks and pay annual tribute, like Rome or Han China)'],
    p5_foreign_policy: ['Tributary Vassals (local kings keep their thrones and religions as long as they pay annual gold/grain tribute)']
  },
  {},
  'imperial_era',
  'continental_empire'
);
assert(stressDilemmas.some(d => d.id === 'buffer_state_trap'), `Generates buffer_state_trap dilemma`);

const thalassocracyDilemma = generateTeacherStressTest(
  { p7_neighbor_relations: ['Extraterritorial Merchant Enclaves & Thalassocratic Middlemen (avoiding land wars with giant empires by operating indispensable trading ports and merchant quarters inside their borders, like Phoenicia or Kilwa)'] },
  {},
  'early_iron',
  'thalassocracy_network'
);
assert(thalassocracyDilemma.some(d => d.id === 'thalassocracy_embargo'), `Generates thalassocracy_embargo dilemma`);

const softPowerDilemma = generateTeacherStressTest(
  { p7_neighbor_relations: ['Soft-Power Cultural & Script Radiation (neighboring nations voluntarily copy your writing system, architecture, religion, and court dress because of your prestige, like Tang China or Egypt)'] },
  {},
  'early_medieval',
  'regional_kingdom'
);
assert(softPowerDilemma.some(d => d.id === 'soft_power_boomerang'), `Generates soft_power_boomerang dilemma`);

// 9. Narrative Essay
const essayParagraphs = generateNarrativeEssay(
  'Aethelgard',
  'Anglo-Saxon Heptarchy & Tang China',
  {
    g1_freshwater: ['Predictable annual flooding river (like the Nile — leaves rich black silt, easy to plan around)'],
    p7_neighbor_relations: ['Hegemonic Core & Tributary Buffer States (turning weaker bordering kingdoms into puppet shield-states that absorb barbarian attacks and pay annual tribute, like Rome or Han China)']
  },
  {},
  'early_medieval',
  'regional_kingdom'
);
assert(essayParagraphs.length === 6, `Essay generates 6 paragraphs (got ${essayParagraphs.length})`);
assert(essayParagraphs[3].includes('geopolitical neighborhood') || essayParagraphs[3].includes('hegemonic core'), `Paragraph 4 contains neighbor relations`);

console.log(`\nRESULTS: ${passed} passed, ${failed} failed.`);
if (failed > 0) process.exit(1);
