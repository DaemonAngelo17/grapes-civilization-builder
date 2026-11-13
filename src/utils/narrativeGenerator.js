// Rich Encyclopedia-Style Historical Narrative Essay Generator
// Synthesizes all 6 G.R.A.P.E.S. categories into a cohesive academic treatise, woven with Historical Era and Civilization Scale.

import { HISTORICAL_ERAS, CIVILIZATION_SCALES } from '../data/grapesData.js';

export function generateNarrativeEssay(
  civilizationName, 
  inspiration, 
  answers, 
  customNotes = {},
  currentEra = 'early_bronze',
  currentScale = 'regional_kingdom'
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

  return [geoParagraph, relParagraph, achParagraph, polParagraph, ecoParagraph, socParagraph];
}

