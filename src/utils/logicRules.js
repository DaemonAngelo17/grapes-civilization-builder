// Grade 7 Historical Logic Connection & Conflict Rules
// Exhaustive cross-category contradiction matrix that links geography, economy, politics, social structure, religion, and achievements.

export function checkOptionDisallowed(questionId, optionText, answers, logicGuardEnabled = true) {
  if (!logicGuardEnabled) {
    return { isDisallowed: false, reason: null };
  }

  const selectedList = (id) => {
    const val = answers[id];
    if (Array.isArray(val)) return val;
    if (typeof val === 'string' && val.trim() !== '') return [val];
    return [];
  };

  const hasText = (id, str) => {
    const val = answers[id];
    const s = str.toLowerCase();
    if (Array.isArray(val)) return val.some((item) => item.toLowerCase().includes(s));
    if (typeof val === 'string') return val.toLowerCase().includes(s);
    return false;
  };

  const optLower = optionText.toLowerCase();

  // =========================================================================
  // 1. TERRAIN & WATER CONTRADICTIONS
  // =========================================================================
  if (questionId === 'g2_terrain') {
    if (optLower.includes('flat, featureless alluvial floodplains') && hasText('g2_terrain', 'steep, jagged mountain ranges')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: A territory cannot be both a completely flat alluvial floodplain and steep jagged mountain peaks at the same time!'
      };
    }
    if (optLower.includes('steep, jagged mountain ranges') && hasText('g2_terrain', 'flat, featureless alluvial floodplains')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: You already selected flat alluvial floodplains. A single terrain cannot be flat plains and steep cliffs simultaneously!'
      };
    }
    if (optLower.includes('dense, humid tropical rainforest') && hasText('g2_terrain', 'high-altitude flat plateau (steppe)')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: Freezing windy steppes cannot support thick, humid tropical rainforest canopies!'
      };
    }
  }

  if (questionId === 'g1_freshwater') {
    if (optLower.includes('high-altitude glacial mountain meltwater') &&
        hasText('g2_terrain', 'flat, featureless alluvial floodplains') &&
        !hasText('g2_terrain', 'mountain')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: Glacial meltwater requires snow-capped mountain ranges, but your terrain is flat featureless plains!'
      };
    }
    if (optLower.includes('underground limestone sinkholes') && hasText('g2_terrain', 'high-altitude flat plateau (steppe)')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: Cenotes are limestone sinkholes formed in tropical coastal lowlands (like the Yucatan), not high volcanic steppes!'
      };
    }
  }

  // =========================================================================
  // 2. RESOURCE ABUNDANCE vs. CRITICAL SHORTAGES (Mutual Exclusion)
  // =========================================================================
  if (questionId === 'g4_resources') {
    // Timber
    if (optLower.includes('dense cedar, oak, or mahogany forests')) {
      if (hasText('g5_shortages', 'lack of tall timber')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: In Critical Shortages, you stated your land lacks tall timber. You cannot also have abundant dense forests!'
        };
      }
      if (hasText('g5_shortages', 'lack of fuel firewood and charcoal')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: You cannot lack firewood and fuel if your land is covered in dense cedar and oak forests!'
        };
      }
      const terrain = selectedList('g2_terrain');
      const isPureDesert = terrain.length > 0 && terrain.every((t) => t.toLowerCase().includes('arid desert') || t.toLowerCase().includes('steppe'));
      if (isPureDesert) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Giant oak, cedar, or mahogany forests cannot naturally grow in dry arid desert sands or windy steppes!'
        };
      }
    }

    // Metal Ores & Stone
    if (optLower.includes('copper and tin deposits') || optLower.includes('high-grade iron ore')) {
      if (hasText('g5_shortages', 'lack of hard stone or metal ores')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: In Critical Shortages, you stated your land lacks metal ores and hard stone!'
        };
      }
      if (optLower.includes('copper and tin deposits') && hasText('g5_shortages', 'lack of tin or alloy fluxes')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: In Critical Shortages, you stated you lack tin! You cannot also have abundant tin deposits.'
        };
      }
    }

    // Salt
    if (optLower.includes('vast rock salt domes') && hasText('g5_shortages', 'lack of salt')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: In Critical Shortages, you stated you lack salt. You cannot also possess vast rock salt domes!'
      };
    }
  }

  if (questionId === 'g5_shortages') {
    if (optLower.includes('lack of tall timber') && hasText('g4_resources', 'dense cedar, oak, or mahogany forests')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: You already selected abundant dense cedar and oak forests in your natural resources!'
      };
    }
    if (optLower.includes('lack of hard stone or metal ores') &&
        (hasText('g4_resources', 'copper and tin') || hasText('g4_resources', 'high-grade iron') || hasText('g4_resources', 'limestone, granite'))) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: You already selected abundant metal ores or quarried stone in your natural resources!'
      };
    }
    if (optLower.includes('lack of tin or alloy fluxes') && hasText('g4_resources', 'copper and tin deposits')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: You already selected rich copper and tin deposits in your abundant resources!'
      };
    }
    if (optLower.includes('lack of salt') && hasText('g4_resources', 'salt domes')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: You already selected vast rock salt domes as an abundant resource!'
      };
    }
    if (optLower.includes('lack of fuel firewood and charcoal') && hasText('g4_resources', 'dense cedar, oak, or mahogany forests')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: You have dense forests! Firewood and charcoal are abundant in forested territories.'
      };
    }
  }

  // =========================================================================
  // 3. BARRIERS & DISASTERS CONTRADICTIONS
  // =========================================================================
  if (questionId === 'g3_barriers') {
    if (optLower.includes('none — completely open flat plains') &&
        (hasText('g3_barriers', 'mountain ranges') || hasText('g3_barriers', 'deserts') || hasText('g3_barriers', 'rocky coastlines'))) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: "None — completely open flat plains" means zero natural barriers. You already selected natural barriers!'
      };
    }
    if ((optLower.includes('mountain ranges') || optLower.includes('deserts') || optLower.includes('rocky coastlines')) &&
        hasText('g3_barriers', 'none — completely open flat plains')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: You previously selected "None — completely open flat plains", which means you have no natural barriers!'
      };
    }
    if (optLower.includes('cataracts') && hasText('g1_freshwater', 'limestone sinkholes')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: River cataracts are shallow rocky rapids on surface rivers. Your freshwater comes from underground sinkholes (cenotes)!'
      };
    }
  }

  // =========================================================================
  // 4. CROPS & AGRICULTURE vs TERRAIN & WATER
  // =========================================================================
  if (questionId === 'e1_crops') {
    if (optLower.includes('wet-paddy rice and millet')) {
      const terrain = selectedList('g2_terrain');
      const isPureDesert = terrain.length > 0 && terrain.every((t) => t.toLowerCase().includes('arid desert') || t.toLowerCase().includes('steppe'));
      if (isPureDesert) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Wet-paddy rice requires immense standing water and monsoon floods! It cannot be cultivated in arid deserts or dry steppes.'
        };
      }
    }

    if (optLower.includes('olives and grapes')) {
      const terrain = selectedList('g2_terrain');
      const isColdSteppe = terrain.length > 0 && terrain.every((t) => t.toLowerCase().includes('steppe') || t.toLowerCase().includes('plateau'));
      if (isColdSteppe) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Olive trees cannot survive freezing winter frosts on high wind-swept steppes!'
        };
      }
    }

    if (optLower.includes('freeze-dried potatoes (chuño) and quinoa')) {
      const terrain = selectedList('g2_terrain');
      const hasHighlands = terrain.some((t) => t.toLowerCase().includes('mountain') || t.toLowerCase().includes('plateau') || t.toLowerCase().includes('steppe'));
      if (terrain.length > 0 && !hasHighlands) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Chuño is made by exposing potatoes to freezing sub-zero mountain nights and stomping them on high Andean cliffs! It cannot be made in warm flat plains or rainforests.'
        };
      }
    }
  }

  // =========================================================================
  // 5. DOMESTICATED ANIMALS vs MILITARY, CARAVANS & PLOWS
  // =========================================================================
  if (questionId === 'e2_animals') {
    if (optLower.includes('none — all goods are carried on the backs of human porters') &&
        (hasText('e2_animals', 'oxen') || hasText('e2_animals', 'sheep') || hasText('e2_animals', 'horses') || hasText('e2_animals', 'llamas'))) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: "None" means you have NO domesticated pack or herd animals at all!'
      };
    }
    if ((optLower.includes('oxen') || optLower.includes('sheep') || optLower.includes('horses') || optLower.includes('llamas')) &&
        hasText('e2_animals', 'none — all goods are carried on the backs of human porters')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: You already selected "None — all goods carried by human porters", meaning your people have no domestic pack animals!'
      };
    }
    if ((optLower.includes('horses and camels') || optLower.includes('oxen and water buffalo')) &&
        hasText('g5_shortages', 'lack of horses or pack animals')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: In Geography Shortages, you stated your civilization lacks horses and pack animals!'
      };
    }
  }

  // Military vs Animals, Terrain & Resources
  if (questionId === 'p4_military') {
    const lacksHorses = hasText('g5_shortages', 'lack of horses or pack animals') ||
                        hasText('e2_animals', 'none — all goods are carried on the backs of human porters');
    const hasOnlyLlamas = hasText('e2_animals', 'llamas and alpacas') && !hasText('e2_animals', 'horses and camels');

    if (optLower.includes('elite chariot corps')) {
      if (lacksHorses) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: War chariots require swift horses to pull them! You previously selected that your civilization lacks horses or pack animals.'
        };
      }
      if (hasOnlyLlamas) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Llamas are small pack animals with fragile spines; they cannot pull heavy two-wheeled war chariots into battle!'
        };
      }
    }

    if (optLower.includes('horse archer light cavalry')) {
      if (lacksHorses) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Cavalry requires trained war horses! You selected that your civilization lacks horses.'
        };
      }
      if (hasOnlyLlamas) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Soldiers cannot ride llamas into combat; llamas cannot carry an adult human warrior!'
        };
      }
      if (hasText('g2_terrain', 'dense, humid tropical rainforest')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Fast cavalry cannot gallop or shoot bows inside dense tropical rainforest canopies full of tangled vines!'
        };
      }
    }

    // Heavy infantry phalanx cannot fight in dense jungle or jagged rocky cliffs
    if (optLower.includes('heavy infantry phalanx')) {
      if (hasText('g2_terrain', 'dense, humid tropical rainforest')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: An 18-foot pike phalanx requires wide, open, flat battlefields; thick jungle vines and dense tree trunks break the locked shield wall immediately!'
        };
      }
    }

    if (optLower.includes('armored war elephant') && (hasText('g2_terrain', 'steppe') || hasText('g1_freshwater', 'glacial mountain meltwater'))) {
      const terrain = selectedList('g2_terrain');
      if (terrain.every((t) => t.toLowerCase().includes('steppe') || t.toLowerCase().includes('mountain'))) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Elephants require thousands of gallons of daily water and massive tropical vegetation; they freeze to death in barren mountain steppes!'
        };
      }
    }

    // Naval supremacy requires sea / coast
    const terrain = selectedList('g2_terrain');
    const isLandlocked = terrain.length > 0 && terrain.every((t) =>
      t.toLowerCase().includes('mountain') || t.toLowerCase().includes('steppe') || t.toLowerCase().includes('plateau')
    ) && !hasText('g3_barriers', 'coastlines') && !hasText('g1_freshwater', 'flooding river');

    if (optLower.includes('naval supremacy') && isLandlocked) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: Your territory is landlocked in high mountains or steppes with no open seas or navigable coastlines for war fleets!'
      };
    }
  }

  // =========================================================================
  // 6. ACHIEVEMENTS & MONUMENTS vs RESOURCES
  // =========================================================================
  if (questionId === 'a3_monuments') {
    if (optLower.includes('cyclopean stone fortresses')) {
      if (hasText('g5_shortages', 'lack of hard stone or metal ores')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Cyclopean stone fortresses require massive quarried boulders fitted together without mortar; you have no hard stone!'
        };
      }
    }
    if (optLower.includes('grand colonnaded temples with marble statues')) {
      if (hasText('g5_shortages', 'lack of hard stone or metal ores')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Colonnaded temples and marble statues require quarried limestone and marble, which your land lacks!'
        };
      }
    }
    if (optLower.includes('gravity-fed stone aqueducts')) {
      if (hasText('g5_shortages', 'lack of hard stone or metal ores')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Stone gravity aqueducts require immense quarried ashlar masonry blocks!'
        };
      }
    }
  }

  // Hydraulic tech
  if (questionId === 'a4_hydraulic') {
    if (optLower.includes('mountain terrace farming')) {
      const terrain = selectedList('g2_terrain');
      const hasMountains = terrain.some((t) => t.toLowerCase().includes('mountain') || t.toLowerCase().includes('plateau'));
      if (terrain.length > 0 && !hasMountains) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Terrace farming is built by carving stone steps into steep cliffs! You chose flat plains or rainforests with no mountains.'
        };
      }
    }

    if (optLower.includes('basin irrigation, dikes, and shadufs')) {
      if (hasText('g1_freshwater', 'limestone sinkholes')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Basin irrigation and counterweight shaduf buckets lift water from surface riverbanks, but you rely on underground sinkholes (cenotes)!'
        };
      }
    }

    if (optLower.includes('chinampas ("floating gardens")')) {
      const terrain = selectedList('g2_terrain');
      const isPureDesert = terrain.length > 0 && terrain.every((t) => t.toLowerCase().includes('desert') || t.toLowerCase().includes('steppe'));
      if (isPureDesert) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Chinampas floating gardens must be built on shallow calm freshwater lakes, not dry deserts or steppes!'
        };
      }
    }

    if (optLower.includes('heavy iron-tipped plows pulled by oxen')) {
      if (hasText('e2_animals', 'none — all goods are carried on the backs of human porters') || hasText('g5_shortages', 'lack of horses or pack animals')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: You have no oxen or heavy draft animals to pull heavy iron plows!'
        };
      }
      if (hasText('g5_shortages', 'lack of hard stone or metal ores')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: You selected that you lack metal ores, so you cannot forge heavy iron plow tips!'
        };
      }
    }
  }

  // Writing medium vs Writing Script
  if (questionId === 'a2_medium') {
    if (hasText('a1_writing', 'quipu / knotted cords')) {
      if (optLower.includes('clay tablets') || optLower.includes('papyrus') || optLower.includes('bamboo') || optLower.includes('parchment') || optLower.includes('limestone walls')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: You chose Quipu (knotted cords) as your record-keeping system! Quipu uses colored, spun llama or cotton string cords, not ink or carved stone!'
        };
      }
    }
    if (optLower.includes('papyrus scrolls') && (hasText('g1_freshwater', 'glacial mountain') && hasText('g2_terrain', 'mountain'))) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: Papyrus is made from tall wetland reeds that only grow in warm river deltas and swamps (like the Nile), not cold mountain glaciers!'
      };
    }
    if (optLower.includes('bamboo or wooden slips') && hasText('g5_shortages', 'lack of tall timber')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: Bamboo or wooden slip books require forests or bamboo groves, but you have a critical timber shortage!'
      };
    }
  }

  // =========================================================================
  // 7. RELIGION & AFTERLIFE CONTRADICTIONS
  // =========================================================================
  if (questionId === 'r4_afterlife') {
    if (optLower.includes('cremation on funeral pyres') && hasText('r4_afterlife', 'mummification & tomb provisioning')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: Cremation burns the dead body into ash, which destroys the physical mummified vessel needed for eternal tomb provisioning!'
      };
    }
    if (optLower.includes('mummification & tomb provisioning') && hasText('r4_afterlife', 'cremation on funeral pyres')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: You cannot mummify a body if it is cremated into ashes on a funeral pyre!'
      };
    }
    if (optLower.includes('sky burial') && hasText('r4_afterlife', 'mummification & tomb provisioning')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: Sky burial exposes the body to birds and scavengers to strip the flesh, whereas mummification preserves the flesh forever!'
      };
    }
  }

  if (questionId === 'r2_demeanor') {
    if (optLower.includes('benevolent and predictable (loving protectors)') &&
        hasText('g6_disasters', 'catastrophic, unannounced river floods') &&
        hasText('g6_disasters', 'multi-year severe droughts')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: In ancient history (like Mesopotamia), when unannounced floods drown whole cities and droughts cause mass starvation, people never viewed the gods as predictable loving protectors!'
      };
    }
  }

  if (questionId === 'r5_gov_relation') {
    if (optLower.includes('civic religion (priests are just regular government officials)') &&
        (hasText('r1_structure', 'theocratic god-king worship') || hasText('p1_gov_system', 'pure theocracy'))) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: In a God-King theocracy, priests are not secular city clerks; they are sacred ministers to a living divine deity!'
      };
    }
  }

  // =========================================================================
  // 8. GOVERNMENT, LAW & SUCCESSION
  // =========================================================================
  if (questionId === 's1_apex') {
    if (hasText('p1_gov_system', 'direct democracy')) {
      if (optLower.includes('god-king and royal dynasty')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: In a Direct Democracy, free citizens vote on all laws and state actions. An absolute hereditary God-King at the top directly contradicts democracy!'
        };
      }
      if (optLower.includes('priest-kings and temple high priests')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: In a Direct Democracy, the citizen assembly holds supreme authority, not sovereign hereditary Priest-Kings.'
        };
      }
    }
    if (hasText('p1_gov_system', 'military junta') && optLower.includes('philosopher-bureaucrats')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: In a military junta / stratocracy, warrior-kings and generals hold absolute power, not civilian scholars or exam bureaucrats!'
      };
    }
  }

  if (questionId === 'p2_succession') {
    if (hasText('p1_gov_system', 'direct democracy') && optLower.includes('hereditary primogeniture')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: Direct democracies do not pass government power through eldest-son royal bloodlines; they use citizen elections or lottery sortition!'
      };
    }
    if ((hasText('p1_gov_system', 'centralized absolute monarchy') || hasText('s1_apex', 'god-king')) && optLower.includes('election by citizen assembly')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: Absolute monarchies and divine god-kings do not put the supreme crown up for a popular citizen election vote!'
      };
    }
  }

  if (questionId === 'p3_law_system') {
    if (optLower.includes('trial by ordeal') && optLower.includes('codified civil jurisprudence')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: Trial by ordeal leaves guilt to river magic and superstition, whereas Roman civil jurisprudence relies on written contracts, precedents, and evidence!'
      };
    }
    if (optLower.includes('legalism (strict, harsh collective punishment') && hasText('p3_law_system', 'jury trials & restorative justice')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: Legalism punishes entire families without mercy, directly contradicting restorative jury justice and debt forgiveness!'
      };
    }
  }

  // =========================================================================
  // 9. FOREIGN POLICY, TRADE & MOBILITY
  // =========================================================================
  if (questionId === 'p5_foreign_policy') {
    if (optLower.includes('isolationism (building walls and closing borders') && hasText('e5_trade', 'maritime trade empire')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: Isolationism closes all borders and bans foreign contact; you cannot simultaneously run an international maritime trade empire!'
      };
    }
    if (optLower.includes('cultural integration & citizenship') && hasText('p5_foreign_policy', 'total enslavement & extraction')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: Total enslavement razes cities and turns all people into slaves; you cannot also offer them equal citizenship!'
      };
    }
  }

  // Social mobility vs Caste
  if (questionId === 's3_mobility') {
    if (optLower.includes('rigid hereditary caste system') &&
        (hasText('s3_mobility', 'scribal / exam mobility') || hasText('s3_mobility', 'wealth-based mobility') || hasText('s3_mobility', 'military valor'))) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: A rigid caste system means zero mobility. It cannot coexist with exam or wealth-based social climbing!'
      };
    }
  }

  // Women's legal status
  if (questionId === 's4_gender') {
    if (optLower.includes('strict patriarchal seclusion') &&
        (hasText('s4_gender', 'high legal autonomy') || hasText('s4_gender', 'militarized matriarchal autonomy'))) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: Strict patriarchal seclusion treats women as legal minors with zero property rights; it cannot coexist with high legal autonomy!'
      };
    }
  }

  // Slavery vs Paid Labor
  if (questionId === 's5_unfree_labor') {
    if (optLower.includes('paid free laborers only') &&
        (hasText('s5_unfree_labor', 'chattel slavery') || hasText('s5_unfree_labor', 'state serfs') || hasText('s5_unfree_labor', 'debt bondage'))) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: "Paid Free Laborers Only" means your civilization has no forced, unfree, or slave labor!'
      };
    }
  }

  // Trade networks vs Geography & Animals
  if (questionId === 'e5_trade') {
    if (optLower.includes('maritime trade empire')) {
      const terrain = selectedList('g2_terrain');
      const isLandlocked = terrain.length > 0 && terrain.every((t) =>
        t.toLowerCase().includes('mountain') || t.toLowerCase().includes('steppe') || t.toLowerCase().includes('plateau')
      ) && !hasText('g3_barriers', 'coastlines');

      if (isLandlocked) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: A maritime trade empire requires open access to seas and ocean ports. Your land is landlocked in high mountains and steppes!'
        };
      }
    }
    if (optLower.includes('riverine network') && hasText('g1_freshwater', 'limestone sinkholes')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: You rely on underground limestone sinkholes (cenotes) and have no navigable surface rivers for freight barges!'
      };
    }
    if (optLower.includes('overland silk/incense caravan routes')) {
      if (hasText('e2_animals', 'none — all goods are carried on the backs of human porters') && hasText('g5_shortages', 'lack of horses or pack animals')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Long-distance desert caravan routes require pack animals (camels, horses, or mules) to survive desert journeys!'
        };
      }
    }
  }

  return { isDisallowed: false, reason: null };
}
