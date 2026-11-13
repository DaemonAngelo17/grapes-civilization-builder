// Rich Encyclopedia-Style Historical Narrative Essay Generator
// Synthesizes all 6 G.R.A.P.E.S. categories into a cohesive academic treatise, woven with Historical Era and Civilization Scale.

import { HISTORICAL_ERAS, CIVILIZATION_SCALES } from '../data/grapesData.js';

export function generateNarrativeEssay(
  civilizationName, 
  inspiration, 
  answers, 
  customNotes = {},
  currentEra = 'early_bronze',
  currentScale = 'regional_kingdom',
  complexityMode = 'normal'
) {
  const name = civilizationName?.trim() || 'The Sovereign Realm';
  const inspText = inspiration ? `drawing deep institutional parallels with ${inspiration}` : 'forged as a unique synthesis of ancient civilizations';

  const eraObj = HISTORICAL_ERAS.find((e) => e.id === currentEra) || HISTORICAL_ERAS[0];
  const scaleObj = CIVILIZATION_SCALES.find((s) => s.id === currentScale) || CIVILIZATION_SCALES[1];

  // Helper to extract clean answer list or string, appending custom notes if present
  const getVal = (id, fallback = 'custom local adaptations') => {
    const val = answers[id];
    const custom = customNotes[id]?.trim();
    if (Array.isArray(val)) {
      const items = [...val];
      if (custom) items.push(`custom adaptation: "${custom}"`);
      return items.length > 0 ? items : [fallback];
    }
    if (val) {
      return custom ? `${val} (supplemented by local convention: "${custom}")` : val;
    }
    return custom ? `Custom local tradition: "${custom}"` : fallback;
  };

  const formatList = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return 'indigenous elements';
    if (arr.length === 1) return arr[0];
    if (arr.length === 2) return `${arr[0]} alongside ${arr[1]}`;
    return `${arr.slice(0, -1).join(', ')}, and ${arr[arr.length - 1]}`;
  };

  // --- PARAGRAPH 1: GEOGRAPHY (G) ---
  const water = formatList(getVal('g1_freshwater', ['an essential freshwater artery']));
  const terrain = formatList(getVal('g2_terrain', ['fertile borderlands']));
  const barriers = formatList(getVal('g3_barriers', ['natural geographic buffers']));
  const resources = formatList(getVal('g4_resources', ['valuable stone and river clay']));
  const shortages = formatList(getVal('g5_shortages', ['indispensable strategic alloys']));
  const disasters = formatList(getVal('g6_disasters', ['seasonal ecological shocks']));

  const geoParagraph = `I. GEOGRAPHIC CRADLE & ECOLOGICAL ADAPTATION:
Flourishing during the ${eraObj.name} (${eraObj.period}), ${name} organized its territory as a ${scaleObj.name.toLowerCase()}, ${inspText}. The physical foundations of the society were inextricably bound to its territorial topography and hydrological reality. Settlement coalesced primarily around ${water.toLowerCase()}, which served as both the physical lifeblood of urban density and the primary axis of agrarian canalization. The sovereign terrain was dominated by ${terrain.toLowerCase()}, dictating both settlement patterns and transport corridors across the realm. For territorial defense, the state enjoyed natural shields in the form of ${barriers.toLowerCase()}, though frontier outposts remained vigilant against irregular incursions. The physical territory was naturally blessed with an abundance of ${resources.toLowerCase()}, which supplied raw materials for monumental civic programs, metallurgy, and domestic handicrafts. Nevertheless, autarky proved elusive; the society faced perennial domestic shortages of ${shortages.toLowerCase()}, necessitating expansive commercial routes or aggressive external tribute collection. Survival demanded continual vigilance against recurrent ecological cataclysms, particularly ${disasters.toLowerCase()}, which periodically tested the hydraulic engineering and administrative cohesion of the territorial core.`;

  // --- PARAGRAPH 2: RELIGION (R) ---
  const divineStructure = formatList(getVal('r1_structure', ['veneration of ancestral cosmic forces']));
  const demeanor = formatList(getVal('r2_demeanor', ['intertwined with natural cosmic cycles']));
  const rituals = formatList(getVal('r3_rituals', ['perpetual altar offerings']));
  const afterlife = formatList(getVal('r4_afterlife', ['a mysterious passage into the shadow realm']));
  const relGov = formatList(getVal('r5_gov_relation', ['a sacred covenant between monarch and priesthood']));

  const relParagraph = `II. SACRED COSMOLOGY & DIVINE LEGITIMATION:
The metaphysical worldview of ${name} was anchored in a profound theology centered upon ${divineStructure.toLowerCase()}. Within this spiritual matrix, mortals perceived their gods as ${demeanor.toLowerCase()}, creating an existential mandate for ritual precision and cosmic equilibrium. Communal anxiety and state piety manifested through rigorous ceremonial duties, notably ${rituals.toLowerCase()}, conducted in consecrated sanctums to maintain cosmic order and ward off divine disfavor. Eschatological doctrines provided spiritual certainty, as the civilization anticipated ${afterlife.toLowerCase()}, an afterlife conviction that directly influenced monumental mortuary customs and familial funerary expenses. Crucially, religion functioned as the supreme pillar of political legitimacy, characterized by ${relGov.toLowerCase()}. State decisions were seldom divorced from celestial interpretation, and the administrative hierarchy derived both authority and judicial compliance from divine mandates.`;

  // --- PARAGRAPH 3: ACHIEVEMENTS (A) ---
  const writing = formatList(getVal('a1_writing', ['a complex recording script']));
  const medium = formatList(getVal('a2_medium', ['durable physical materials']));
  const monuments = formatList(getVal('a3_monuments', ['imposing civic and sacred monuments']));
  const hydraulic = formatList(getVal('a4_hydraulic', ['sophisticated hydraulic canal systems']));
  const breakthroughs = formatList(getVal('a5_science', ['pioneering mathematical and metallurgical breakthroughs']));

  const achParagraph = `III. INTELLECTUAL ACHIEVEMENTS & MATERIAL CULTURE:
Reflecting the cutting-edge innovations of the ${eraObj.name}, the intellectual and technological corpus of ${name} demonstrated remarkable ingenuity, immortalized through its mastery of ${writing.toLowerCase()}. Scribes and state archivists recorded legal decrees, census tallies, and sacred poetry upon ${medium.toLowerCase()}, bequeathing an enduring epigraphic legacy to posterity. The skyline of the metropolitan centers was commanded by colossal engineering feats, including ${monuments.toLowerCase()}, which served simultaneously as civic focal points, astronomical alignments, and physical manifestations of state authority. Agrarian security was magnified through sophisticated works of hydraulic engineering, specifically ${hydraulic.toLowerCase()}, which harnessed seasonal waters to sustain urban food reserves. Furthermore, the intellectual elite distinguished themselves through seminal breakthroughs such as ${breakthroughs.toLowerCase()}, innovations that accelerated craftsmanship, navigation, and administrative standardization across the realm.`;

  // --- PARAGRAPH 4: POLITICS (P) ---
  const govSystem = formatList(getVal('p1_gov_system', ['a structured sovereign authority']));
  const succession = formatList(getVal('p2_succession', ['established dynastic protocols']));
  const lawSystem = formatList(getVal('p3_law_system', ['a codified canon of municipal justice']));
  const military = formatList(getVal('p4_military', ['organized territorial defense forces']));
  const foreignPolicy = formatList(getVal('p5_foreign_policy', ['strategic tributary arrangements']));
  const neighborRelations = formatList(getVal('p7_neighbor_relations', ['measured frontier diplomacy']));

  const polParagraph = `IV. STATECRAFT, JURISPRUDENCE & GEOPOLITICAL NEIGHBORHOOD:
Operating across the geopolitical dimensions of a ${scaleObj.name.toLowerCase()}, sovereign governance in ${name} was institutionalized through ${govSystem.toLowerCase()}, consolidating legislative, judicial, and executive authority within recognized constitutional bodies. Dynastic continuity and administrative stability were governed by ${succession.toLowerCase()}, minimizing the destabilizing perils of interregnum succession disputes. Social order and civil behavior were maintained by ${lawSystem.toLowerCase()}, which provided clear judicial expectations and curbed private blood feuds through institutional state sanctions. To protect borders and project force across its territorial footprint, the high command fielded a martial apparatus relying upon ${military.toLowerCase()}, deployed with tactical discipline to neutralize regional rivals and secure trade corridors. In external diplomacy, territorial relations were steered through ${foreignPolicy.toLowerCase()}, while cross-border interactions and frontier buffer zones were fundamentally calibrated around ${neighborRelations.toLowerCase()}, managing external pressures and diplomatic prestige in an interconnected ancient neighborhood.`;

  // --- PARAGRAPH 5: ECONOMY (E) ---
  const crops = formatList(getVal('e1_crops', ['staple cereal grains']));
  const animals = formatList(getVal('e2_animals', ['hardy draft animals']));
  const currency = formatList(getVal('e3_currency', ['standardized trade valuations']));
  const taxation = formatList(getVal('e4_taxation', ['regular agricultural levies']));
  const trade = formatList(getVal('e5_trade', ['far-reaching overland and coastal routes']));

  const ecoParagraph = `V. ECONOMIC FOUNDATIONS & MERCANTILE NETWORKS:
The wealth of ${name} was rooted fundamentally in the soil, sustained by the intensive cultivation of ${crops.toLowerCase()}. Agrarian labor and logistical transport were bolstered by domestic herds of ${animals.toLowerCase()}, which provided essential draft power, animal protein, and strategic mobility. Commercial transactions and administrative accounting were facilitated through ${currency.toLowerCase()}, creating an integrated fiscal system that permitted market exchange alongside state redistribution. The state treasury sustained its standing armies and public infrastructure through an extractive fiscal apparatus relying on ${taxation.toLowerCase()}. Beyond domestic production, mercantile wealth flowed into the great cities via ${trade.toLowerCase()}, linking remote provincial outposts with distant foreign markets and securing luxury prestige goods that signaled aristocratic rank.`;

  // --- PARAGRAPH 6: SOCIAL STRUCTURE (S) ---
  const apex = formatList(getVal('s1_apex', ['an exalted ruling aristocracy']));
  const middle = formatList(getVal('s2_middle', ['skilled artisans and civic record-keepers']));
  const mobility = formatList(getVal('s3_mobility', ['structured paths of social standing']));
  const gender = formatList(getVal('s4_gender', ['traditional domestic and public division of authority']));
  const unfree = formatList(getVal('s5_unfree_labor', ['subordinated labor classes']));

  const socParagraph = `VI. SOCIAL STRATIFICATION, MOBILITY & CIVIC LIFE:
The social pyramid of ${name} was crowned by ${apex.toLowerCase()}, whose absolute prestige and symbolic supremacy commanded universal deference across the civic body. Beneath this ruling echelon flourished an indispensable middle strata comprised of ${middle.toLowerCase()}, who maintained the literacy, mercantile capital, and technical crafts upon which civilization depended. The permeability of class boundaries was dictated by ${mobility.toLowerCase()}, establishing whether humble subjects could aspire to imperial promotion or remained bound to ancestral vocations. The domestic and public standing of women was defined by ${gender.toLowerCase()}, setting the precise legal parameters for property ownership, marriage covenants, and religious priesthoods. At the base of the societal pyramid labored ${unfree.toLowerCase()}, whose compulsory toil beneath mines, fields, or monumental quarries underwrote the leisure, cultural triumphs, and imperial dominance of the governing elite.`;

  if (complexityMode === 'basic') {
    const basicP1 = `I. OUR HOMELAND & WAYS OF LIFE:
Flourishing in the ${eraObj.name}, our civilization known as ${name} settled around ${water} surrounded by ${terrain}. To feed our people, our farmers grew bountiful harvests of ${crops}, while our herders cared for ${animals}. For defense against invaders, our borders were shielded by ${barriers}. We bartered and traded with foreign travelers using ${currency}, bringing luxury goods home across ${trade}.`;

    const basicP2 = `II. SACRED GODS & GREAT WONDERS:
The people of ${name} believed deeply in ${divineStructure}, offering prayers and gifts through ${rituals}. When great kings and citizens passed away, they traveled toward ${afterlife}. To honor our deities and showcase our greatness, our builders constructed magnificent ${monuments}. Our scholars and scribes wrote laws, stories, and records using ${writing} inscribed on ${medium}, and created clever inventions like ${breakthroughs}.`;

    const basicP3 = `III. RULERS, WARRIORS & COMMUNITY:
Our realm was guided by ${govSystem}, with wise leadership passed down through ${succession}. When danger threatened our frontiers, ${military} marched out with courage to defend our lands. At the top of our society stood ${apex}, supported by hardworking ${middle}. Laws and customs ensured order across our homeland, giving ${name} a proud legacy that would be remembered for thousands of years.`;

    return [basicP1, basicP2, basicP3];
  }

  return [geoParagraph, relParagraph, achParagraph, polParagraph, ecoParagraph, socParagraph];
}

/**
 * Calculates the 4-Vector Imperial Stability & Collapse Scorecard for Complex Mode
 */
export function calculateStabilityScorecard(answers = {}, currentEra = 'early_bronze', currentScale = 'regional_kingdom') {
  const has = (qid, kw) => {
    const val = answers[qid];
    if (Array.isArray(val)) return val.some(item => item.toLowerCase().includes(kw.toLowerCase()));
    if (typeof val === 'string') return val.toLowerCase().includes(kw.toLowerCase());
    return false;
  };

  let agrarian = 50;
  if (has('a4_hydraulic', 'irrigation') || has('a4_hydraulic', 'terrace') || has('a4_hydraulic', 'stepwells') || has('a4_hydraulic', 'qanats')) agrarian += 25;
  if (has('e1_crops', 'wheat') || has('e1_crops', 'rice') || has('e1_crops', 'maize') || has('e1_crops', 'sorghum')) agrarian += 15;
  if (has('g6_disasters', 'drought') || has('g6_disasters', 'locust')) agrarian -= 20;
  if (has('g5_shortages', 'farmland') || has('g5_shortages', 'timber')) agrarian -= 15;
  agrarian = Math.min(100, Math.max(15, agrarian));

  let fiscal = 45;
  if (has('e3_currency', 'stamped coins') || has('e3_currency', 'weighed metal') || has('e3_currency', 'banknotes')) fiscal += 30;
  if (has('e4_taxation', 'monopolies') || has('e4_taxation', 'customs') || has('e4_taxation', 'land tax')) fiscal += 20;
  if (has('e3_currency', 'pure barter') && currentScale === 'continental_empire') fiscal -= 35;
  if (has('p4_military', 'standing army') && has('e3_currency', 'pure barter')) fiscal -= 25;
  fiscal = Math.min(100, Math.max(10, fiscal));

  let cohesion = 50;
  if (has('p3_law_crime', 'codified') || has('p3_law_crime', 'jury') || has('p3_law_crime', 'restorative')) cohesion += 25;
  if (has('r5_gov_relation', 'mandate') || has('r5_gov_relation', 'civic') || has('r6_orthodoxy_heresy', 'pluralistic')) cohesion += 20;
  if (has('s5_unfree_labor', 'chattel slavery') || has('s5_unfree_labor', 'helots')) cohesion -= 20;
  if (has('p3_law_crime', 'draconian') && has('s3_mobility', 'caste')) cohesion -= 15;
  cohesion = Math.min(100, Math.max(15, cohesion));

  let ecological = 55;
  if (has('a4_hydraulic', 'check-dams') || has('e6_property_land', 'communal') || has('e6_property_land', 'infield')) ecological += 25;
  if (has('g6_disasters', 'salinization') || has('a6_ecology_collapse', 'salinization') || has('a6_ecology_collapse', 'monoculture')) ecological -= 25;
  if (has('g6_disasters', 'deforestation') || has('a6_ecology_collapse', 'deforestation')) ecological -= 20;
  if (has('g6_disasters', 'volcanic') || has('g6_disasters', 'earthquake')) ecological -= 10;
  ecological = Math.min(100, Math.max(10, ecological));

  const overall = Math.round((agrarian + fiscal + cohesion + ecological) / 4);

  return {
    agrarianCapacity: { score: agrarian, label: agrarian > 70 ? 'Resilient Food Surplus' : agrarian > 45 ? 'Adequate Subsistence' : 'Vulnerable to Crop Failure' },
    fiscalLegibility: { score: fiscal, label: fiscal > 70 ? 'Liquid State Treasury' : fiscal > 45 ? 'Solvent Regional Accounts' : 'Fiscal Deficit & Liquidity Trap' },
    socialCohesion: { score: cohesion, label: cohesion > 70 ? 'High Institutional Trust' : cohesion > 45 ? 'Moderate Factional Friction' : 'Severe Rebellion Risk' },
    ecologicalSustainability: { score: ecological, label: ecological > 70 ? 'Harmonious Soil Equilibrium' : ecological > 45 ? 'Stressed Carrying Capacity' : 'Imminent Ecological Depletion' },
    overallStabilityIndex: overall
  };
}

