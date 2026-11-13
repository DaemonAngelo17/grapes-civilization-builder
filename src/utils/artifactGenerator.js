// "3,000 Years Later" Archaeological Museum Exhibit Generator
// Generates 4 museum artifact cards with scientific taphonomic preservation notes.

export function generateArtifacts(civilizationName, answers = {}, currentEra = 'early_bronze', currentScale = 'regional_kingdom') {
  const name = civilizationName?.trim() || 'The Ancient Sovereign Realm';

  const getFirst = (qid, fallback) => {
    const val = answers[qid];
    if (Array.isArray(val) && val.length > 0) return val[0];
    if (typeof val === 'string' && val.trim()) return val;
    return fallback;
  };

  const terrain = getFirst('g2_terrain', 'river floodplain');
  const script = getFirst('a1_writing', 'inscribed characters');
  const medium = getFirst('a2_medium', 'limestone stelae');
  const military = getFirst('p4_military', 'bronze spearheads');
  const currency = getFirst('e3_currency', 'standardized coinage');
  const ritual = getFirst('r3_rituals', 'votive offerings');
  const afterlife = getFirst('r4_afterlife', 'sacred burial vessels');

  // Scientific taphonomy analysis based on climate/terrain
  let taphonomyNote = 'The artifact survived due to anaerobic soil burial and protective sealed subterranean tomb conditions.';
  const tLower = terrain.toLowerCase();
  if (tLower.includes('desert') || tLower.includes('arid')) {
    taphonomyNote = 'Extreme aridity and zero humidity in hyper-arid desert sands halted microbial decomposition, naturally desiccat-preserving organic fibers and pigment coatings for millennia.';
  } else if (tLower.includes('mountain') || tLower.includes('glacial')) {
    taphonomyNote = 'Sub-zero high-altitude freezing temperatures created natural permafrost refrigeration, preserving delicate organic bone, wood, and textile bindings without bacterial rot.';
  } else if (tLower.includes('marsh') || tLower.includes('bog') || tLower.includes('delta')) {
    taphonomyNote = 'Waterlogged, oxygen-depleted peat bog silt created an anaerobic, acidic chemical micro-environment that prevented fungal decay and preserved organic matter.';
  } else if (tLower.includes('volcanic') || tLower.includes('island')) {
    taphonomyNote = 'Rapid burial beneath volcanic tephra and basalt tuff ash layers sealed the relic in an airtight matrix, shielding it from weathering and oxygen exposure.';
  }

  return [
    {
      catalogId: 'ARCH-01-STELE',
      title: 'The Foundation Inscription Stele',
      category: 'Epigraphy & Law',
      icon: '📜',
      excavationContext: `Discovered in Trench 4B near the central forum of ${name}.`,
      materialComposition: `Carved upon ${medium.toLowerCase()}, inscribed with ${script.toLowerCase()}.`,
      dimensions: '185 cm x 62 cm x 34 cm | Weight: ~480 kg',
      scholarlyDescription: `This monumental inscribed slab preserves royal proclamations, civil tax statutes, and dynastic genealogies. Decipherment of the script reveals complex administrative bookkeeping and state legal codes.`,
      taphonomyAnalysis: taphonomyNote
    },
    {
      catalogId: 'ARCH-02-VOTIVE',
      title: 'The Sacred Cosmological Votive Urn',
      category: 'Religion & Mortuary Archaeology',
      icon: '🏺',
      excavationContext: `Recovered from an intact sealed royal tomb chamber beneath ${afterlife.toLowerCase()}.`,
      materialComposition: 'High-fire ceramic with glazed mineral slips and trace gold-leaf inlay.',
      dimensions: '42 cm height x 28 cm diameter | Weight: ~6.2 kg',
      scholarlyDescription: `Bearing incised ritual motifs illustrating ${ritual.toLowerCase()}, this sacred vessel held consecrated resin, libation oils, and ancestral offerings placed to accompany the deceased into the afterlife.`,
      taphonomyAnalysis: `Sealed ceramic stoneware resists groundwater leaching; the airtight mortar of the tomb chamber protected fragile residue traces from oxidation.`
    },
    {
      catalogId: 'ARCH-03-WEAPON',
      title: 'Ceremonial Officer\'s Blade & Armor Fitting',
      category: 'Martial Technology & Metallurgy',
      icon: '⚔️',
      excavationContext: `Uncovered in a burned garrison destruction layer associated with ${military.toLowerCase()}.`,
      materialComposition: 'Cold-worked and quench-tempered metallic alloy with bone hilt rivets.',
      dimensions: 'Blade Length: 64 cm | Hilt: 14 cm | Weight: ~1.1 kg',
      scholarlyDescription: `Exhibiting advanced metallurgical work-hardening and micro-serration along the fuller edge, this sidearm was carried by elite vanguard shock commanders to breach enemy battle lines.`,
      taphonomyAnalysis: `A dense passivating patina layer of malachite and cuprite formed rapidly over the alloy surface, arresting further subsurface corrosion over 3,000 years.`
    },
    {
      catalogId: 'ARCH-04-COMMERCE',
      title: 'State Treasury Weight & Currency Matrix',
      category: 'Macroeconomics & Fiscal Standardization',
      icon: '🪙',
      excavationContext: `Found inside a sunken merchant ship hull or subterranean market vault.`,
      materialComposition: `Standardized state specimen representing ${currency.toLowerCase()}.`,
      dimensions: 'Diameter: 3.2 cm | Mass: Exactly 8.4 grams',
      scholarlyDescription: `Authenticated with state insignia and counter-punches, this currency artifact proves centralized municipal control over trade valuations, weights, and inter-provincial tariff collections.`,
      taphonomyAnalysis: `Precious noble metals (electrum, silver, high-tin bronze) exhibit minimal oxidation potential, surviving submerged in marine silt with crystal-clear epigraphic stamps.`
    }
  ];
}

