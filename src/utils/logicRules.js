// Grade 7 Historical Logic Connection & Conflict Rules
// Prevents students from making logically impossible historical choices based on earlier answers.

export function checkOptionDisallowed(questionId, optionText, answers, logicGuardEnabled = true) {
  if (!logicGuardEnabled) {
    return { isDisallowed: false, reason: null };
  }

  const selected = (id) => answers[id] || '';
  const selectedList = (id) => (Array.isArray(answers[id]) ? answers[id] : answers[id] ? [answers[id]] : []);
  const hasText = (id, str) => {
    const val = answers[id];
    if (Array.isArray(val)) return val.some((item) => item.toLowerCase().includes(str.toLowerCase()));
    if (typeof val === 'string') return val.toLowerCase().includes(str.toLowerCase());
    return false;
  };

  const optLower = optionText.toLowerCase();

  // =========================================================================
  // 1. GEOGRAPHY & ENVIRONMENT CONFLICTS
  // =========================================================================

  // If Terrain (g2_terrain) is Desert only with no rivers/marshes, you cannot have dense forests as an abundant resource
  if (questionId === 'g4_resources') {
    if (optLower.includes('dense cedar, oak, or mahogany forests')) {
      const terrain = selectedList('g2_terrain');
      const isOnlyDesert = terrain.some((t) => t.toLowerCase().includes('arid desert')) &&
                           !terrain.some((t) => t.toLowerCase().includes('rainforest') || t.toLowerCase().includes('delta'));
      if (isOnlyDesert) {
        return {
          isDisallowed: true,
          reason: '🔒 Locked by Logic: In your Terrain choices, you picked an arid desert. Huge oak and cedar forests cannot grow in dry desert sand!'
        };
      }
    }

    // If you already picked "Lack of tall timber" in shortages (g5_shortages)
    if (optLower.includes('dense cedar, oak, or mahogany forests') && hasText('g5_shortages', 'lack of tall timber')) {
      return {
        isDisallowed: true,
        reason: '🔒 Locked by Logic: In Critical Shortages, you said your civilization desperately lacks tall timber. You cannot also have abundant dense forests!'
      };
    }

    // If you already picked "Lack of hard stone or metal ores" in shortages
    if ((optLower.includes('copper and tin deposits') || optLower.includes('high-grade iron ore')) &&
        hasText('g5_shortages', 'lack of hard stone or metal ores')) {
      return {
        isDisallowed: true,
        reason: '🔒 Locked by Logic: In Critical Shortages, you said your land has no metal ores. You cannot also claim abundant copper, tin, or iron mines!'
      };
    }

    // If you already picked "Lack of salt" in shortages
    if (optLower.includes('vast rock salt domes') && hasText('g5_shortages', 'lack of salt')) {
      return {
        isDisallowed: true,
        reason: '🔒 Locked by Logic: You chose "Lack of salt" as a critical shortage. You cannot also have abundant rock salt domes!'
      };
    }
  }

  // Shortages (g5_shortages) conflicts with already selected Abundant Resources (g4_resources)
  if (questionId === 'g5_shortages') {
    if (optLower.includes('lack of tall timber') && hasText('g4_resources', 'dense cedar, oak, or mahogany forests')) {
      return {
        isDisallowed: true,
        reason: '🔒 Locked by Logic: In Abundant Resources, you selected dense cedar/oak forests! You cannot claim you lack timber.'
      };
    }
    if (optLower.includes('lack of hard stone or metal ores') &&
        (hasText('g4_resources', 'copper and tin') || hasText('g4_resources', 'high-grade iron') || hasText('g4_resources', 'limestone, granite'))) {
      return {
        isDisallowed: true,
        reason: '🔒 Locked by Logic: You already selected abundant metal ores or quarried stone in your resources!'
      };
    }
    if (optLower.includes('lack of tin or alloy fluxes') && hasText('g4_resources', 'copper and tin deposits')) {
      return {
        isDisallowed: true,
        reason: '🔒 Locked by Logic: You already selected rich copper and tin deposits in your abundant resources!'
      };
    }
    if (optLower.includes('lack of salt') && hasText('g4_resources', 'salt domes')) {
      return {
        isDisallowed: true,
        reason: '🔒 Locked by Logic: You already selected vast rock salt domes as an abundant resource!'
      };
    }
  }

  // Barriers (g3_barriers) vs Freshwater Source (g1_freshwater)
  if (questionId === 'g3_barriers') {
    if (optLower.includes('cataracts') && hasText('g1_freshwater', 'limestone sinkholes')) {
      return {
        isDisallowed: true,
        reason: '🔒 Locked by Logic: River cataracts are rocky rapids on surface rivers (like the Nile). Your land relies on underground sinkholes (cenotes) with no surface rivers!'
      };
    }
  }

  // =========================================================================
  // 2. ANIMALS & GEOGRAPHY vs MILITARY DOCTRINE
  // =========================================================================
  if (questionId === 'p4_military') {
    const lacksHorses = hasText('g5_shortages', 'lack of horses or pack animals') ||
                        hasText('e2_animals', 'none — all goods are carried on the backs of human porters');

    if (optLower.includes('elite chariot corps') && lacksHorses) {
      return {
        isDisallowed: true,
        reason: '🔒 Locked by Logic: War chariots require fast horses to pull them! You previously selected that your civilization lacks horses or pack animals.'
      };
    }

    if (optLower.includes('horse archer light cavalry') && lacksHorses) {
      return {
        isDisallowed: true,
        reason: '🔒 Locked by Logic: Cavalry units must have trained horses, but your civilization has no horses or pack animals!'
      };
    }

    if (optLower.includes('armored war elephant') && lacksHorses && hasText('g2_terrain', 'steppe')) {
      return {
        isDisallowed: true,
        reason: '🔒 Locked by Logic: Elephants cannot survive in cold windy steppes or places without tropical/subtropical vegetation and water!'
      };
    }

    // Naval Supremacy requires a coastline, islands, or large river delta
    const terrain = selectedList('g2_terrain');
    const isLandlockedMountainSteppe = terrain.length > 0 && terrain.every((t) =>
      t.toLowerCase().includes('mountain') || t.toLowerCase().includes('steppe') || t.toLowerCase().includes('plateau')
    );
    const hasNoSeas = !hasText('g3_barriers', 'coastlines') && !hasText('g1_freshwater', 'flooding river');

    if (optLower.includes('naval supremacy') && isLandlockedMountainSteppe && hasNoSeas) {
      return {
        isDisallowed: true,
        reason: '🔒 Locked by Logic: Your civilization is landlocked in high mountains or steppes with no coastlines or navigable seas for warships!'
      };
    }
  }

  // =========================================================================
  // 3. HYDRAULIC & AGRICULTURAL TECH vs TERRAIN & WATER
  // =========================================================================
  if (questionId === 'a4_hydraulic') {
    // Mountain terrace farming requires mountains
    if (optLower.includes('mountain terrace farming')) {
      const terrain = selectedList('g2_terrain');
      const hasMountains = terrain.some((t) => t.toLowerCase().includes('mountain') || t.toLowerCase().includes('plateau'));
      if (terrain.length > 0 && !hasMountains) {
        return {
          isDisallowed: true,
          reason: '🔒 Locked by Logic: Terrace farming requires steep mountains or hills to carve steps into! You chose flat plains or rainforests with no mountains.'
        };
      }
    }

    // Basin irrigation & shadufs require surface river
    if (optLower.includes('basin irrigation, dikes, and shadufs')) {
      if (hasText('g1_freshwater', 'limestone sinkholes')) {
        return {
          isDisallowed: true,
          reason: '🔒 Locked by Logic: Basin irrigation and shaduf buckets lift river water from surface riverbanks, but you selected underground sinkholes (cenotes) with no surface rivers!'
        };
      }
    }

    // Chinampas require lakes/marsh shallow water
    if (optLower.includes('chinampas ("floating gardens")')) {
      const terrain = selectedList('g2_terrain');
      const hasWaterBed = terrain.some((t) => t.toLowerCase().includes('caldera') || t.toLowerCase().includes('marsh') || t.toLowerCase().includes('delta'));
      const isPureDesert = terrain.every((t) => t.toLowerCase().includes('desert') || t.toLowerCase().includes('steppe'));
      if (terrain.length > 0 && isPureDesert) {
        return {
          isDisallowed: true,
          reason: '🔒 Locked by Logic: Floating chinampas gardens must be built on shallow freshwater lakes or calm wetlands, not in dry deserts or steppes!'
        };
      }
    }
  }

  // =========================================================================
  // 4. WRITING SCRIPT vs WRITING MEDIUM
  // =========================================================================
  if (questionId === 'a2_medium') {
    // Quipu (knotted cords) does not write on clay tablets or scrolls
    if (hasText('a1_writing', 'quipu / knotted cords')) {
      if (optLower.includes('baked or sun-dried clay tablets') ||
          optLower.includes('papyrus scrolls') ||
          optLower.includes('bamboo or wooden slips')) {
        return {
          isDisallowed: true,
          reason: '🔒 Locked by Logic: You chose Quipu (knotted cords) as your record-keeping system! Quipu uses colored, spun llama or cotton string cords, not ink on clay or paper!'
        };
      }
    }

    // Papyrus requires marsh/river reeds
    if (optLower.includes('papyrus scrolls')) {
      if (hasText('g1_freshwater', 'glacial mountain meltwater') && hasText('g2_terrain', 'mountain')) {
        return {
          isDisallowed: true,
          reason: '🔒 Locked by Logic: Papyrus is made from tall wetland reeds that only grow in warm river deltas and swamps (like the Nile), not cold mountain peaks!'
        };
      }
    }
  }

  // =========================================================================
  // 5. GOVERNMENT vs SOCIAL APEX & LAW
  // =========================================================================
  if (questionId === 's1_apex') {
    // Direct Democracy cannot have an absolute God-King
    if (hasText('p1_gov_system', 'direct democracy')) {
      if (optLower.includes('god-king and royal dynasty')) {
        return {
          isDisallowed: true,
          reason: '🔒 Locked by Logic: You chose Direct Democracy, where free adult citizens vote on laws and leaders. You cannot have an absolute hereditary God-King at the top!'
        };
      }
      if (optLower.includes('priest-kings and temple high priests')) {
        return {
          isDisallowed: true,
          reason: '🔒 Locked by Logic: In a Direct Democracy, citizen assemblies hold sovereign government power rather than hereditary Priest-Kings.'
        };
      }
    }
  }

  // =========================================================================
  // 6. ECONOMY: TRADE NETWORKS vs GEOGRAPHY
  // =========================================================================
  if (questionId === 'e5_trade') {
    if (optLower.includes('maritime trade empire')) {
      const terrain = selectedList('g2_terrain');
      const isLandlocked = terrain.length > 0 && terrain.every((t) =>
        t.toLowerCase().includes('mountain') || t.toLowerCase().includes('steppe') || t.toLowerCase().includes('plateau')
      ) && !hasText('g3_barriers', 'coastlines');

      if (isLandlocked) {
        return {
          isDisallowed: true,
          reason: '🔒 Locked by Logic: A maritime empire requires open access to oceans and harbors. Your land is landlocked in high mountains and steppes!'
        };
      }
    }

    if (optLower.includes('riverine network')) {
      if (hasText('g1_freshwater', 'limestone sinkholes')) {
        return {
          isDisallowed: true,
          reason: '🔒 Locked by Logic: You rely on underground sinkholes (cenotes) and have no navigable surface rivers for cargo barges to sail on!'
        };
      }
    }
  }

  return { isDisallowed: false, reason: null };
}
