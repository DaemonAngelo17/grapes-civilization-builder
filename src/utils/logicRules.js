// Grade 7 Historical Logic Connection & Conflict Rules
// Exhaustive cross-category contradiction matrix that links geography, economy, politics, social structure, religion, achievements, ERA, and CIVILIZATION SCALE.
// Every single question features multiple logical contradictions to enforce realistic historical and environmental cause-and-effect.

export function checkOptionDisallowed(
  questionId, 
  optionText, 
  answers, 
  logicGuardEnabled = true,
  currentEra = 'early_bronze',
  currentScale = 'regional_kingdom'
) {
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
    const list = selectedList(id);
    const s = str.toLowerCase();
    return list.some((item) => {
      // When checking inside the same question being evaluated, ignore the option itself
      if (id === questionId && item.trim().toLowerCase() === optionText.trim().toLowerCase()) {
        return false;
      }
      return item.toLowerCase().includes(s);
    });
  };

  const optLower = optionText.toLowerCase();

  // =========================================================================
  // 0. CHRONOLOGICAL ERA CONSTRAINTS (What did not exist in earlier eras)
  // =========================================================================
  const isBronzeAge = currentEra === 'early_bronze' || currentEra === 'late_bronze';
  const isPreClassical = isBronzeAge || currentEra === 'early_iron';

  // Iron metallurgy (invented ~1200 BCE)
  if (isBronzeAge) {
    if (optLower.includes('high-grade iron ore')) {
      return {
        isDisallowed: true,
        reason: '🔒 Era-Locked (Bronze Age): You chose a Bronze Age civilization (before 1200 BCE)! Iron ore extraction and smelting did not exist yet; your civilization uses copper and bronze.'
      };
    }
    if (optLower.includes('heavy iron-tipped plows')) {
      return {
        isDisallowed: true,
        reason: '🔒 Era-Locked (Bronze Age): Iron-tipped plows belong to the Iron Age (after 1000 BCE). Bronze Age plows were made of wood, stone, or bronze!'
      };
    }
    if (optLower.includes('cast iron') || optLower.includes('quench-hardened steel')) {
      return {
        isDisallowed: true,
        reason: '🔒 Era-Locked (Bronze Age): Cast iron and steel metallurgy were developed in the Iron Age. Bronze Age blacksmiths worked exclusively with copper and bronze alloys.'
      };
    }
  }

  // Stamped Coinage (invented ~600 BCE in Lydia)
  if (isBronzeAge || currentEra === 'early_iron') {
    if (optLower.includes('standardized stamped coins')) {
      return {
        isDisallowed: true,
        reason: '🔒 Era-Locked (Pre-600 BCE): State-stamped coins were not invented until around 600 BCE in ancient Lydia! In earlier eras, trade relied on weighed silver bullion, grain rations, or commodity money.'
      };
    }
  }

  // Roman Underwater Concrete (invented ~200 BCE)
  if (currentEra !== 'imperial_era') {
    if (optLower.includes('concrete that can set underwater')) {
      return {
        isDisallowed: true,
        reason: '🔒 Era-Locked (Roman Era Invention): Underwater pozzolanic volcanic concrete was invented by Roman engineers in the late Republic (~200 BCE)! It was unknown in earlier eras.'
      };
    }
  }

  // Magnetic Compass (invented Han Dynasty ~200 BCE)
  if (currentEra === 'early_bronze' || currentEra === 'late_bronze' || currentEra === 'early_iron') {
    if (optLower.includes('magnetic compass lodestone')) {
      return {
        isDisallowed: true,
        reason: '🔒 Era-Locked: Magnetic lodestone compasses were invented in Han Dynasty China (~200 BCE). Bronze and early Iron Age sailors navigated solely by stars and coastlines!'
      };
    }
  }

  // Phonetic Alphabet (invented ~1100 BCE by Phoenicians)
  if (currentEra === 'early_bronze') {
    if (optLower.includes('phonetic alphabet (20-30 simple letters)')) {
      return {
        isDisallowed: true,
        reason: '🔒 Era-Locked (Early Bronze Age): The 22-letter phonetic alphabet was created by Phoenician sailors around 1100 BCE. In the Early Bronze Age (3000 BCE), people wrote in complex cuneiform or hieroglyphic glyphs!'
      };
    }
  }

  // Direct Democracy (developed 508 BCE in Athens)
  if (isBronzeAge) {
    if (optLower.includes('direct democracy (all free adult male citizens vote')) {
      return {
        isDisallowed: true,
        reason: '🔒 Era-Locked (Classical Era): Direct citizen democracy was developed in Classical Athens (508 BCE). Bronze Age civilizations were universally ruled by absolute god-kings, priest-rulers, or dynasts.'
      };
    }
    if (optLower.includes('jury trials & restorative justice')) {
      return {
        isDisallowed: true,
        reason: '🔒 Era-Locked (Classical Era): Large citizen jury trials were a Classical Greek invention. In the Bronze Age, justice was administered directly by royal judges or temple priests.'
      };
    }
  }

  // Mechanical Crossbows (invented ~400 BCE in Warring States China)
  if (isBronzeAge) {
    if (optLower.includes('mechanical triggered crossbows') || optLower.includes('disciplined crossbow phalanxes')) {
      return {
        isDisallowed: true,
        reason: '🔒 Era-Locked (Pre-400 BCE): Mechanical bronze-triggered crossbows were invented in Warring States China (~400 BCE). Bronze Age armies fought with hand-drawn recurve bows, bronze daggers, and spears!'
      };
    }
  }

  // Antikythera Astronomical Computer (~150 BCE Hellenistic)
  if (currentEra === 'early_bronze' || currentEra === 'late_bronze' || currentEra === 'early_iron') {
    if (optLower.includes('advanced antikythera-style geared astronomical')) {
      return {
        isDisallowed: true,
        reason: '🔒 Era-Locked (Hellenistic Era): Geared bronze differential mechanical calculators (like the Antikythera Mechanism) were invented around 150 BCE!'
      };
    }
  }

  // Deep Salt Drilling Derricks (~100 BCE Han Dynasty)
  if (currentEra !== 'imperial_era') {
    if (optLower.includes('deep underground salt-drilling derricks')) {
      return {
        isDisallowed: true,
        reason: '🔒 Era-Locked (Imperial Era): Deep bamboo percussion drilling for subterranean brine and natural gas was invented in Han Dynasty Sichuan (~100 BCE).'
      };
    }
  }

  // =========================================================================
  // 0.5. CIVILIZATION SCALE CONSTRAINTS (City-State vs Kingdom vs Empire)
  // =========================================================================
  if (currentScale === 'city_state') {
    // City-States are confined to 1 local geographic terrain
    if (questionId === 'g2_terrain') {
      const currentTerrains = selectedList('g2_terrain');
      if (currentTerrains.length >= 1 && !currentTerrains.includes(optionText)) {
        return {
          isDisallowed: true,
          reason: '🔒 Land Size Limit (City-State): A local City-State occupies 1 single river valley, bay, or oasis! Upgrade to Regional Kingdom or Continental Empire to span across multiple biomes.'
        };
      }
    }

    // City-States are situated on 1 primary freshwater source
    if (questionId === 'g1_freshwater') {
      const currentWaters = selectedList('g1_freshwater');
      if (currentWaters.length >= 1 && !currentWaters.includes(optionText)) {
        return {
          isDisallowed: true,
          reason: '🔒 Land Size Limit (City-State): A single city-state is situated on 1 primary freshwater source (e.g. one river, cenote, or spring). Upgrade land size to control multiple water basins.'
        };
      }
    }

    // City-States possess up to 4 abundant resources
    if (questionId === 'g4_resources') {
      const currentRes = selectedList('g4_resources');
      if (currentRes.length >= 4 && !currentRes.includes(optionText)) {
        return {
          isDisallowed: true,
          reason: '🔒 Land Size Limit (City-State): A single city-state territory cannot encompass more than 4 geological resource deposits simultaneously.'
        };
      }
    }

    // City-States cultivate up to 2 staple crops
    if (questionId === 'e1_crops') {
      const currentCrops = selectedList('e1_crops');
      if (currentCrops.length >= 2 && !currentCrops.includes(optionText)) {
        return {
          isDisallowed: true,
          reason: '🔒 Land Size Limit (City-State): A small city-state agricultural belt focuses on up to 2 staple crops.'
        };
      }
    }

    // City-States pasture up to 2 animal groups
    if (questionId === 'e2_animals') {
      const currentAnimals = selectedList('e2_animals');
      if (currentAnimals.length >= 2 && !currentAnimals.includes(optionText)) {
        return {
          isDisallowed: true,
          reason: '🔒 Land Size Limit (City-State): A local city-state pastureland supports up to 2 primary domesticated livestock types.'
        };
      }
    }

    // City-States can fund up to 2 monuments (and cannot build Great Walls)
    if (questionId === 'a3_monuments') {
      if (optLower.includes('thousands of miles of frontier defensive walls')) {
        return {
          isDisallowed: true,
          reason: '🔒 Land Size Lock (City-State): A single city-state does not have thousands of miles of borders or millions of laborers to build a Great Wall! This wonder requires a Grand Continental Empire.'
        };
      }
      const currentMons = selectedList('a3_monuments');
      if (currentMons.length >= 2 && !currentMons.includes(optionText)) {
        return {
          isDisallowed: true,
          reason: '🔒 Land Size Limit (City-State): A single city-state possesses the quarry stone and civic budget to erect up to 2 monumental marvels.'
        };
      }
    }

    // City-States military doctrine limit: up to 3 specialized branches
    if (questionId === 'p4_military') {
      const currentMils = selectedList('p4_military');
      if (currentMils.length >= 3 && !currentMils.includes(optionText)) {
        return {
          isDisallowed: true,
          reason: '🔒 Land Size Limit (City-State): A single city-state military budget can field up to 3 specialized military arms simultaneously.'
        };
      }
    }

    // City-States cannot run multi-province Feudal Bureaucracies
    if (questionId === 'p1_gov_system' && (optLower.includes('feudal bureaucracy') || optLower.includes('satrapy provincial administration'))) {
      return {
        isDisallowed: true,
        reason: '🔒 Land Size Lock: A single city-state has no far-off foreign provinces to appoint imperial governors or satraps over!'
      };
    }

    // City-States cannot mass deport entire populations
    if (questionId === 'p5_foreign_policy' && optLower.includes('mass deportation & assimilation')) {
      return {
        isDisallowed: true,
        reason: '🔒 Land Size Lock: Relocating hundreds of thousands of conquered people across an empire requires massive imperial armies and distant provinces!'
      };
    }

    // City-States cannot rely on tribute from conquered foreign provinces
    if ((questionId === 'p5_foreign_policy' || questionId === 'e4_taxation') && optLower.includes('tribute from conquered provinces')) {
      return {
        isDisallowed: true,
        reason: '🔒 Land Size Lock: A local city-state has no far-flung imperial provinces to extract foreign tribute from!'
      };
    }
  }

  if (currentScale === 'regional_kingdom') {
    // Regional Kingdoms can span up to 2 neighboring terrain zones
    if (questionId === 'g2_terrain') {
      const currentTerrains = selectedList('g2_terrain');
      if (currentTerrains.length >= 2 && !currentTerrains.includes(optionText)) {
        return {
          isDisallowed: true,
          reason: '🔒 Land Size Limit (Regional Kingdom): A regional kingdom spans up to 2 neighboring terrain zones (e.g. river valley + delta). Upgrade to Continental Empire to control unlimited biomes.'
        };
      }
    }

    // Regional Kingdoms can integrate up to 2 freshwater sources
    if (questionId === 'g1_freshwater') {
      const currentWaters = selectedList('g1_freshwater');
      if (currentWaters.length >= 2 && !currentWaters.includes(optionText)) {
        return {
          isDisallowed: true,
          reason: '🔒 Land Size Limit (Regional Kingdom): A regional kingdom can integrate up to 2 water sources (e.g. river + coastal aquifer). Upgrade to Continental Empire to encompass 3+ water systems.'
        };
      }
    }

    // Regional Kingdoms control up to 5 major resource zones
    if (questionId === 'g4_resources') {
      const currentRes = selectedList('g4_resources');
      if (currentRes.length >= 5 && !currentRes.includes(optionText)) {
        return {
          isDisallowed: true,
          reason: '🔒 Land Size Limit (Regional Kingdom): A regional kingdom controls up to 5 major resource deposits.'
        };
      }
    }

    // Regional Kingdoms cultivate up to 4 staple crops
    if (questionId === 'e1_crops') {
      const currentCrops = selectedList('e1_crops');
      if (currentCrops.length >= 4 && !currentCrops.includes(optionText)) {
        return {
          isDisallowed: true,
          reason: '🔒 Land Size Limit (Regional Kingdom): A regional kingdom territory cultivates up to 4 staple agricultural crops.'
        };
      }
    }

    // Regional Kingdoms sustain up to 4 livestock types
    if (questionId === 'e2_animals') {
      const currentAnimals = selectedList('e2_animals');
      if (currentAnimals.length >= 4 && !currentAnimals.includes(optionText)) {
        return {
          isDisallowed: true,
          reason: '🔒 Land Size Limit (Regional Kingdom): A regional kingdom sustains up to 4 major domesticated livestock types.'
        };
      }
    }

    // Regional Kingdoms cannot build thousands of miles of Great Walls
    if (questionId === 'a3_monuments') {
      if (optLower.includes('thousands of miles of frontier defensive walls')) {
        return {
          isDisallowed: true,
          reason: '🔒 Land Size Lock: Thousands of miles of frontier walls require a Grand Continental Empire with millions of workers and continental frontiers.'
        };
      }
      const currentMons = selectedList('a3_monuments');
      if (currentMons.length >= 4 && !currentMons.includes(optionText)) {
        return {
          isDisallowed: true,
          reason: '🔒 Land Size Limit (Regional Kingdom): A regional kingdom can fund up to 4 monumental architecture projects.'
        };
      }
    }

    // Direct Democracy cannot function across a whole regional kingdom
    if (questionId === 'p1_gov_system' && optLower.includes('direct democracy (all free adult male citizens vote directly')) {
      return {
        isDisallowed: true,
        reason: '🔒 Land Size Lock: Direct citizen democracy requires all voting citizens to assemble physically in one town square; a regional kingdom with hundreds of thousands of citizens spread over hundreds of miles cannot assemble in person.'
      };
    }
  }

  if (currentScale === 'continental_empire') {
    // Continental Empires CANNOT run Direct Democracy (people can't walk 3,000 miles to a town square vote)
    if (questionId === 'p1_gov_system' && optLower.includes('direct democracy (all free adult male citizens vote directly')) {
      return {
        isDisallowed: true,
        reason: '🔒 Land Size Lock (Empire Scale): In a continental empire spanning thousands of miles, millions of citizens cannot travel on foot to meet in one town square assembly! Continental empires require representative governors, satraps, or an emperor.'
      };
    }
    // Continental Empires are not decentralized warring city-states
    if (questionId === 'p1_gov_system' && optLower.includes('decentralized city-states')) {
      return {
        isDisallowed: true,
        reason: '🔒 Land Size Lock: A Grand Continental Empire is a unified superstate, not a fractured network of warring independent city-states!'
      };
    }
  }

  // =========================================================================
  // 1. GEOGRAPHY (G1 - G6) DEEP CONTRADICTIONS
  // =========================================================================

  // --- G1: FRESHWATER ---
  if (questionId === 'g1_freshwater') {
    if (optLower.includes('underground limestone sinkholes and aquifers')) {
      if (hasText('g2_terrain', 'flat, featureless alluvial floodplains') || hasText('g2_terrain', 'high-altitude flat plateau')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Cenotes are collapse sinkholes formed specifically in porous limestone coastal lowlands (like Yucatan), not alluvial silt plains or high volcanic steppes!'
        };
      }
      if (hasText('g3_barriers', 'cataracts')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Cataracts are shallow boulder rapids on flowing surface rivers! Underground cenotes have no surface rivers.'
        };
      }
      if (hasText('e5_trade', 'riverine network')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: A riverine barge network requires navigable surface rivers, but you have underground cenote sinkholes!'
        };
      }
      if (hasText('a4_hydraulic', 'basin irrigation, dikes, and shadufs')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Counterweight shadufs lift water from open riverbanks; you have deep subterranean sinkholes!'
        };
      }
      if (hasText('g6_disasters', 'catastrophic, unannounced river floods')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: You cannot suffer from river floods when your land has no surface rivers!'
        };
      }
    }

    if (optLower.includes('high-altitude glacial mountain meltwater')) {
      const terrain = selectedList('g2_terrain');
      const hasMountains = terrain.some((t) => t.toLowerCase().includes('mountain') || t.toLowerCase().includes('plateau'));
      if (terrain.length > 0 && !hasMountains) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Glacial meltwater requires snow-capped mountain peaks, but your terrain is flat lowlands!'
        };
      }
      if (hasText('p4_military', 'naval supremacy')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Rushing glacial mountain streams cannot harbor large wooden war galleys or naval fleets!'
        };
      }
    }

    if (optLower.includes('predictable annual flooding river')) {
      if (hasText('g6_disasters', 'catastrophic, unannounced river floods')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: You cannot have a predictable, gentle annual flood (like the Nile) and violent unannounced flash floods at the same time!'
        };
      }
      if (hasText('a4_hydraulic', 'qanats')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Qanats are underground desert tunnels built to avoid surface evaporation; they are unnecessary along major open flood rivers!'
        };
      }
    }

    if (optLower.includes('violent, unpredictable twin rivers')) {
      if (hasText('r2_demeanor', 'benevolent and predictable')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Unpredictable violent floods taught ancient peoples (like Mesopotamians) that the gods were moody and wrathful, not benevolent!'
        };
      }
    }

    if (optLower.includes('oasis springs scattered across an arid desert')) {
      if (hasText('e1_crops', 'wet-paddy rice')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Wet-paddy rice requires flooded valleys, which small desert oasis springs cannot support!'
        };
      }
      if (hasText('e5_trade', 'riverine network')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Desert oasis springs do not form connected navigable rivers for freight barge networks!'
        };
      }
    }
  }

  // --- G2: TERRAIN ---
  if (questionId === 'g2_terrain') {
    if (optLower.includes('flat, featureless alluvial floodplains')) {
      if (hasText('g2_terrain', 'steep, jagged mountain ranges') && currentScale !== 'continental_empire') {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: A local territory cannot be both flat alluvial plains and steep jagged mountain peaks at once! (Continental Empires can span both).'
        };
      }
      if (hasText('a4_hydraulic', 'mountain terrace farming')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Mountain terrace farming requires carving steps into steep cliffs; your terrain is flat plains!'
        };
      }
      if (hasText('g1_freshwater', 'high-altitude glacial mountain meltwater')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Glacial meltwater streams require mountain peaks, not flat alluvial plains!'
        };
      }
    }

    if (optLower.includes('steep, jagged mountain ranges')) {
      if (hasText('g2_terrain', 'flat, featureless alluvial floodplains') && currentScale !== 'continental_empire') {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: A local territory cannot be both flat alluvial plains and steep jagged cliffs at once! (Continental Empires can span both).'
        };
      }
      if (hasText('p4_military', 'elite war chariot corps')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Two-wheeled war chariots require flat plains; they flip and shatter on steep rocky mountain slopes!'
        };
      }
      if (hasText('a3_monuments', 'planned grid-layout cities')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Standardized rectangular grid cities require flat land; mountain settlements must follow winding elevation contours!'
        };
      }
    }

    if (optLower.includes('dense, humid tropical rainforest')) {
      if (hasText('g2_terrain', 'high-altitude flat plateau (steppe)') || hasText('g2_terrain', 'arid desert expanses')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Humid tropical rainforest canopies cannot grow in freezing windy steppes or hyper-arid deserts!'
        };
      }
      if (hasText('a2_medium', 'papyrus scrolls')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Papyrus is organic reed paper that rots and dissolves within months in humid tropical rainforest moisture!'
        };
      }
      if (hasText('p4_military', 'heavy infantry phalanx')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: An 18-foot pike phalanx requires open fields; dense jungle trees and vines break the formation instantly!'
        };
      }
    }

    if (optLower.includes('rocky peninsula with jagged coastlines')) {
      if (hasText('g3_barriers', 'vast, waterless deserts that starve')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: A rocky island peninsula surrounded by stormy seas is not an arid inland waterless desert!'
        };
      }
    }

    if (optLower.includes('high-altitude flat plateau (steppe)')) {
      if (hasText('e5_trade', 'maritime trade empire')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Landlocked high steppes have no ocean access to build a maritime merchant fleet!'
        };
      }
      if (hasText('a4_hydraulic', 'chinampas')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Floating chinampa gardens require warm lowland freshwater lakes, not freezing windswept steppes!'
        };
      }
    }
  }

  // --- G3: BARRIERS ---
  if (questionId === 'g3_barriers') {
    if (optLower.includes('none — completely open flat plains')) {
      if (hasText('g3_barriers', 'mountain ranges') || hasText('g3_barriers', 'deserts') || hasText('g3_barriers', 'rocky coastlines') || hasText('g3_barriers', 'dense, disease-ridden jungles') || hasText('g3_barriers', 'cataracts')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: "None — completely open flat plains" means zero natural barriers. You already selected natural barriers!'
        };
      }
    }
    if ((optLower.includes('mountain ranges') || optLower.includes('deserts') || optLower.includes('rocky coastlines') || optLower.includes('jungles') || optLower.includes('cataracts')) &&
        hasText('g3_barriers', 'none — completely open flat plains')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: You previously selected "None — completely open flat plains", meaning you have no natural barriers!'
      };
    }
    if (optLower.includes('cataracts') && (hasText('g1_freshwater', 'limestone sinkholes') || hasText('g1_freshwater', 'oasis springs'))) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: River cataracts are rocky rapids on flowing surface rivers! Your freshwater comes from sinkholes or springs.'
      };
    }
    if (optLower.includes('treacherous rocky coastlines') && hasText('g2_terrain', 'high-altitude flat plateau (steppe)') && !hasText('g2_terrain', 'peninsula')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: Landlocked mountain steppes do not have rocky marine coastlines!'
      };
    }
  }

  // --- G4: RESOURCES vs G5: SHORTAGES ---
  if (questionId === 'g4_resources') {
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

    if (optLower.includes('quarried limestone, granite, or marble')) {
      if (hasText('g5_shortages', 'lack of hard stone or metal ores')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: In Critical Shortages, you stated you lack hard stone! You cannot have abundant quarries.'
        };
      }
    }

    if (optLower.includes('vast rock salt domes') && hasText('g5_shortages', 'lack of salt')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: In Critical Shortages, you stated you lack salt. You cannot also possess vast rock salt domes!'
      };
    }

    if (optLower.includes('obsidian (volcanic glass)')) {
      const terrain = selectedList('g2_terrain');
      const hasVolcanic = terrain.some((t) => t.toLowerCase().includes('volcanic') || t.toLowerCase().includes('mountain'));
      if (terrain.length > 0 && !hasVolcanic && terrain.every((t) => t.toLowerCase().includes('alluvial') || t.toLowerCase().includes('marshland'))) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Obsidian is natural volcanic glass formed by cooling lava; it does not exist in flat mud alluvial plains!'
        };
      }
    }
  }

  // --- G5: SHORTAGES ---
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
    if (optLower.includes('lack of horses or pack animals') && (hasText('e2_animals', 'horses and camels') || hasText('e2_animals', 'oxen and water buffalo'))) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: In Domesticated Animals, you selected horses, camels, or oxen! You cannot lack pack animals.'
      };
    }
  }

  // --- G6: DISASTERS ---
  if (questionId === 'g6_disasters') {
    if (optLower.includes('catastrophic, unannounced river floods')) {
      if (hasText('g1_freshwater', 'limestone sinkholes') || hasText('g1_freshwater', 'oasis springs')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: You cannot have river floods when your water comes from underground cenotes or desert oasis springs!'
        };
      }
      if (hasText('g1_freshwater', 'predictable annual flooding river')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: You selected a gentle, predictable annual flood (like the Nile). It cannot be sudden, violent, and unannounced!'
        };
      }
      if (hasText('r2_demeanor', 'benevolent and predictable')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: If violent floods regularly drown whole villages, your priests would never view the gods as gentle, benevolent protectors!'
        };
      }
    }

    if (optLower.includes('monsoons, typhoons, or coastal tsunamis')) {
      const terrain = selectedList('g2_terrain');
      const isLandlocked = terrain.length > 0 && terrain.every((t) =>
        t.toLowerCase().includes('steppe') || t.toLowerCase().includes('plateau') || (t.toLowerCase().includes('desert') && !t.toLowerCase().includes('river'))
      ) && !hasText('g3_barriers', 'coastlines');
      if (isLandlocked) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Coastal typhoons and tsunamis cannot strike a landlocked desert plateau or interior continental steppe!'
        };
      }
    }

    if (optLower.includes('frequent tectonic earthquakes and volcanic eruptions')) {
      const terrain = selectedList('g2_terrain');
      if (terrain.length > 0 && terrain.every((t) => t.toLowerCase().includes('flat, featureless alluvial'))) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Flat alluvial river basins are geologically stable silt valleys, not active tectonic volcanic fault lines!'
        };
      }
    }

    if (optLower.includes('encroaching desert sand dunes')) {
      if (hasText('g2_terrain', 'dense, humid tropical rainforest')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Hyper-arid desert sand dunes do not advance into dense humid tropical rainforest canopies!'
        };
      }
    }
  }

  // =========================================================================
  // 2. ECONOMY (E1 - E5) DEEP CONTRADICTIONS
  // =========================================================================

  // --- E1: CROPS ---
  if (questionId === 'e1_crops') {
    if (optLower.includes('wet-paddy rice and millet')) {
      const terrain = selectedList('g2_terrain');
      const isPureDesert = terrain.length > 0 && terrain.every((t) => t.toLowerCase().includes('arid desert') || t.toLowerCase().includes('steppe'));
      if (isPureDesert && !hasText('g1_freshwater', 'flooding river')) {
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
      if (hasText('g2_terrain', 'dense, humid tropical rainforest')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Grapes and olive trees rot in waterlogged soil and dense humid tropical jungle humidity!'
        };
      }
    }

    if (optLower.includes('potatoes') || optLower.includes('quinoa')) {
      const terrain = selectedList('g2_terrain');
      const hasHighlands = terrain.some((t) => t.toLowerCase().includes('mountain') || t.toLowerCase().includes('plateau') || t.toLowerCase().includes('steppe'));
      if (terrain.length > 0 && !hasHighlands) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Chuño is made by exposing potatoes to freezing sub-zero mountain nights and stomping them on high Andean cliffs! It cannot be made in warm flat plains or rainforests.'
        };
      }
    }

    if (optLower.includes('date palms and figs')) {
      const terrain = selectedList('g2_terrain');
      if (terrain.length > 0 && terrain.every((t) => t.toLowerCase().includes('mountain'))) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Date palms are desert oasis trees that perish in cold alpine mountain freezes!'
        };
      }
    }
  }

  // --- E2: ANIMALS ---
  if (questionId === 'e2_animals') {
    if (optLower.includes('none — all goods are carried on the backs of human porters')) {
      if (hasText('e2_animals', 'oxen') || hasText('e2_animals', 'sheep') || hasText('e2_animals', 'horses') || hasText('e2_animals', 'llamas') || hasText('e2_animals', 'donkeys')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: "None" means you have NO domesticated pack or draft animals at all!'
        };
      }
      if (hasText('p4_military', 'elite war chariot corps') || hasText('p4_military', 'horse archer light cavalry')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: You selected horse cavalry or war chariots in your military, but here you say your people have no pack animals!'
        };
      }
      if (hasText('a4_hydraulic', 'heavy iron-tipped plows pulled by oxen')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: You selected heavy plows pulled by oxen, but here you say all goods are carried on human backs!'
        };
      }
    }

    if ((optLower.includes('oxen') || optLower.includes('sheep') || optLower.includes('horses') || optLower.includes('llamas') || optLower.includes('donkeys')) &&
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

    if (optLower.includes('llamas and alpacas')) {
      const terrain = selectedList('g2_terrain');
      if (terrain.length > 0 && terrain.every((t) => t.toLowerCase().includes('desert') || t.toLowerCase().includes('rainforest'))) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Llamas and alpacas are Andean high-altitude animals with thick wool; they overheat and die in humid tropical jungles or scorching desert lowlands!'
        };
      }
    }
  }

  // --- E3: CURRENCY ---
  if (questionId === 'e3_currency') {
    if (optLower.includes('pure barter & credit tallies')) {
      if (hasText('e3_currency', 'standardized stamped coins') || hasText('e3_currency', 'weighed metal bullion') || hasText('e3_currency', 'cast bronze tool money')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Pure barter means exchanging goods directly without coined money or metal bullion!'
        };
      }
      if (hasText('s3_mobility', 'wealth-based mobility')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Wealth-based class climbing requires liquid money/coins to buy rank, which cannot exist in a pure barter economy!'
        };
      }
    }

    if (optLower.includes('standardized stamped coins') || optLower.includes('weighed metal bullion') || optLower.includes('cast bronze tool money')) {
      if (hasText('e3_currency', 'pure barter')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Using minted coins or metal currency directly contradicts a pure non-monetary barter economy!'
        };
      }
    }

    if (optLower.includes('state grain redistribution')) {
      if (hasText('p1_gov_system', 'decentralized city-states') && hasText('e5_trade', 'maritime trade empire')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Centralized state grain rations require a royal palace command economy (like Old Kingdom Egypt or Inca), not decentralized merchant city-states!'
        };
      }
    }
  }

  // --- E4: TAXATION ---
  if (questionId === 'e4_taxation') {
    if (optLower.includes('tribute from conquered provinces')) {
      if (hasText('p5_foreign_policy', 'isolationist')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Isolationist kingdoms do not conquer foreign territory to extract imperial tribute!'
        };
      }
    }

    if (optLower.includes('corvée labor system')) {
      if (hasText('s5_unfree_labor', 'paid free laborers only')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: A corvée labor system forces peasants to perform unpaid mandatory construction labor, contradicting "Paid Free Laborers Only"!'
        };
      }
    }

    if (optLower.includes('customs duties & trade tariffs')) {
      if (hasText('e5_trade', 'self-sufficient command economy')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: In a self-sufficient command economy where foreign merchants are banned, you have no foreign trade to tax with customs tariffs!'
        };
      }
    }
  }

  // --- E5: TRADE ---
  if (questionId === 'e5_trade') {
    if (optLower.includes('maritime trade empire')) {
      const terrain = selectedList('g2_terrain');
      const isLandlocked = terrain.length > 0 && terrain.every((t) =>
        t.toLowerCase().includes('mountain') || t.toLowerCase().includes('steppe') || t.toLowerCase().includes('plateau')
      ) && !hasText('g3_barriers', 'coastlines');

      if (isLandlocked) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: A maritime trade empire requires open sea access. Your land is landlocked in high mountains and steppes!'
        };
      }
      if (hasText('g5_shortages', 'lack of tall timber')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Building merchant fleets requires thousands of tall timber logs (cedar/oak), which your land lacks!'
        };
      }
      if (hasText('p5_foreign_policy', 'isolationist')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: An isolationist state closes borders and bans foreign contact, contradicting an international maritime trade empire!'
        };
      }
    }

    if (optLower.includes('riverine network')) {
      if (hasText('g1_freshwater', 'limestone sinkholes') || hasText('g1_freshwater', 'oasis springs')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: You rely on underground cenotes or oasis springs and have no navigable surface rivers for freight barges!'
        };
      }
    }

    if (optLower.includes('overland silk/incense caravan routes')) {
      if (hasText('e2_animals', 'none — all goods are carried on the backs of human porters') || hasText('g5_shortages', 'lack of horses or pack animals')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Long-distance desert caravan routes require pack animals (camels, horses, or mules) to transport heavy bulk freight across waterless expanses!'
        };
      }
      if (optLower.includes('self-sufficient command economy')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Caravan routes trade with foreign nations, which is banned in a self-sufficient closed command economy!'
        };
      }
    }

    if (optLower.includes('self-sufficient command economy')) {
      if (hasText('s1_apex', 'merchant oligarchs')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: If private foreign trade is banned, merchant oligarchs cannot exist as the ruling class!'
        };
      }
    }
  }

  // =========================================================================
  // 3. POLITICS (P1 - P5) DEEP CONTRADICTIONS
  // =========================================================================

  // --- P1: GOV SYSTEM ---
  if (questionId === 'p1_gov_system') {
    if (optLower.includes('direct democracy')) {
      if (hasText('p1_gov_system', 'centralized absolute monarchy') || hasText('p1_gov_system', 'military junta')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Direct citizen democracy directly contradicts centralized absolute monarchy or military junta rule!'
        };
      }
    }
    if (optLower.includes('centralized absolute monarchy')) {
      if (hasText('p1_gov_system', 'direct democracy')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Centralized absolute monarchy contradicts direct citizen democracy!'
        };
      }
      if (hasText('p1_gov_system', 'decentralized city-states')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Centralized absolute monarchy contradicts fractured, independent warring city-states!'
        };
      }
    }
    if (optLower.includes('decentralized city-states')) {
      if (hasText('p1_gov_system', 'centralized absolute monarchy')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Independent warring city-states contradict a single centralized absolute monarchy!'
        };
      }
    }
    if (optLower.includes('direct democracy')) {
      if (hasText('p2_succession', 'hereditary primogeniture')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: In a Direct Democracy, citizens vote on all state affairs; power cannot pass automatically to an eldest royal son!'
        };
      }
      if (hasText('r1_structure', 'theocratic god-king worship') || hasText('s1_apex', 'god-king')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: A living absolute God-King commanding supreme divine authority directly contradicts citizen democracy!'
        };
      }
      if (hasText('r5_gov_relation', 'pure theocracy')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: In a Pure Theocracy, the High Priest rules by divine law, not the vote of ordinary citizens in a public assembly!'
        };
      }
    }

    if (optLower.includes('centralized absolute monarchy')) {
      if (hasText('p2_succession', 'election by citizen assembly')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Absolute monarchs rule by hereditary right and force, not popular election votes by ordinary citizens!'
        };
      }
    }

    if (optLower.includes('aristocratic oligarchy / republic')) {
      if (hasText('r1_structure', 'theocratic god-king worship')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: An aristocratic republic is governed by a council of noble peers, not an infallible living God-King!'
        };
      }
    }

    if (optLower.includes('maritime thalassocracy')) {
      const terrain = selectedList('g2_terrain');
      const isLandlocked = terrain.length > 0 && terrain.every((t) =>
        t.toLowerCase().includes('mountain') || t.toLowerCase().includes('steppe') || t.toLowerCase().includes('plateau')
      ) && !hasText('g3_barriers', 'coastlines');
      if (isLandlocked) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: A thalassocracy is a naval empire ruled by port cities; your land is completely landlocked!'
        };
      }
    }
  }

  // --- P2: SUCCESSION ---
  if (questionId === 'p2_succession') {
    if (optLower.includes('hereditary primogeniture')) {
      if (hasText('p2_succession', 'election by citizen assembly')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Hereditary primogeniture (passes strictly to eldest son) contradicts open election by citizen assembly!'
        };
      }
      if (hasText('p2_succession', 'trial by strength')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Strict primogeniture succession contradicts bloody trial by strength civil wars!'
        };
      }
    }
    if (optLower.includes('election by citizen assembly')) {
      if (hasText('p2_succession', 'hereditary primogeniture')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Citizen assembly elections contradict strict eldest-son hereditary primogeniture!'
        };
      }
    }
    if (optLower.includes('hereditary primogeniture')) {
      if (hasText('p1_gov_system', 'direct democracy')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Direct democracies elect officials or choose them by lottery sortition, not royal eldest-son inheritance!'
        };
      }
    }

    if (optLower.includes('election by citizen assembly')) {
      if (hasText('p1_gov_system', 'centralized absolute monarchy') || hasText('s1_apex', 'god-king')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Absolute kings and living god-kings do not submit their divine crown to citizen voting ballots!'
        };
      }
      if (hasText('p1_gov_system', 'military junta')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: In a military junta, generals take power through military force and martial rank, not citizen elections!'
        };
      }
    }

    if (optLower.includes('oracular or divine selection')) {
      if (hasText('r5_gov_relation', 'civic religion')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: In a civic religion where priests are secular elected officials, kings are not chosen through mystical oracle signs!'
        };
      }
    }

    if (optLower.includes('trial by combat')) {
      if (hasText('p1_gov_system', 'direct democracy')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: A democratic assembly uses speeches and ballots, not lethal gladiator duels to pick political leaders!'
        };
      }
    }
  }

  // --- P3: LAW SYSTEM ---
  if (questionId === 'p3_law_system') {
    if (optLower.includes('legalism')) {
      if (hasText('p3_law_system', 'jury trials & restorative justice')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Strict Legalism (collective punishment of whole families) directly opposes citizen jury trials and restorative justice!'
        };
      }
    }
    if (optLower.includes('jury trials & restorative justice')) {
      if (hasText('p3_law_system', 'legalism')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Citizen jury trials contradict authoritarian collective Legalism!'
        };
      }
    }
    if (optLower.includes('jury trials & restorative justice')) {
      if (hasText('p3_law_system', 'lex talionis ("eye for an eye")')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Restorative jury justice focuses on fines and reconciliation, whereas Lex Talionis demands literal bodily mutilation!'
        };
      }
      if (hasText('p1_gov_system', 'centralized absolute monarchy') && hasText('s1_apex', 'god-king')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: In a God-King autocracy, the king\'s word is supreme law; ordinary citizen juries do not overrule the king!'
        };
      }
    }

    if (optLower.includes('lex talionis ("eye for an eye")')) {
      if (hasText('p3_law_system', 'jury trials & restorative justice')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: You already selected jury trials and restorative justice!'
        };
      }
    }

    if (optLower.includes('written public law pillars')) {
      if (hasText('a1_writing', 'quipu / knotted cords')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Quipu has no written alphabet or script to carve onto public stone law pillars!'
        };
      }
    }
  }

  // --- P4: MILITARY ---
  if (questionId === 'p4_military') {
    const lacksHorses = hasText('g5_shortages', 'lack of horses or pack animals') ||
                        hasText('e2_animals', 'none — all goods are carried on the backs of human porters');
    const hasOnlyLlamas = hasText('e2_animals', 'llamas and alpacas') && !hasText('e2_animals', 'horses and camels');

    if (optLower.includes('elite war chariot corps')) {
      if (lacksHorses) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: War chariots require horses to pull them! You selected that your civilization lacks horses or pack animals.'
        };
      }
      if (hasOnlyLlamas) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Llamas have weak spines and cannot pull heavy wheeled war chariots into battle!'
        };
      }
      if (hasText('g2_terrain', 'steep, jagged mountain ranges')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Two-wheeled war chariots crash and shatter on steep rocky mountain slopes!'
        };
      }
      if (hasText('g2_terrain', 'dense, humid tropical rainforest')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Chariot wheels get tangled in thick jungle mud and tree roots!'
        };
      }
    }

    if (optLower.includes('horse archer light cavalry')) {
      if (lacksHorses) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Cavalry requires war horses! You selected that your civilization lacks horses.'
        };
      }
      if (hasOnlyLlamas) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Warriors cannot ride llamas into battle; llamas cannot bear an adult human warrior!'
        };
      }
      if (hasText('g2_terrain', 'dense, humid tropical rainforest')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Fast cavalry cannot gallop or shoot bows inside dense tropical rainforest canopies!'
        };
      }
    }

    if (optLower.includes('heavy infantry phalanx')) {
      if (hasText('g2_terrain', 'dense, humid tropical rainforest')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: An 18-foot pike phalanx requires open fields; dense jungle trees and vines break the formation instantly!'
        };
      }
      if (hasText('g5_shortages', 'lack of hard stone or metal ores')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: A heavy phalanx requires bronze or iron helmets, breastplates, shields, and spears!'
        };
      }
    }

    if (optLower.includes('naval supremacy')) {
      const terrain = selectedList('g2_terrain');
      const isLandlocked = terrain.length > 0 && terrain.every((t) =>
        t.toLowerCase().includes('mountain') || t.toLowerCase().includes('steppe') || t.toLowerCase().includes('plateau')
      ) && !hasText('g3_barriers', 'coastlines');

      if (isLandlocked) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Your territory is landlocked with no open sea access for war triremes!'
        };
      }
      if (hasText('g5_shortages', 'lack of tall timber')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Building a war fleet requires tall cedar or oak timber for hulls and oars, which your land lacks!'
        };
      }
    }

    if (optLower.includes('siege warfare specialists')) {
      if (hasText('g5_shortages', 'lack of tall timber')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Multi-story siege towers, battering ram frames, and catapults require vast amounts of heavy timber!'
        };
      }
    }
  }

  // --- P5: FOREIGN POLICY ---
  if (questionId === 'p5_foreign_policy') {
    if (optLower.includes('isolationism')) {
      if (hasText('p5_foreign_policy', 'cultural integration & citizenship') || hasText('e5_trade', 'maritime trade empire')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Strict isolationism (closed borders and banning foreigners) contradicts granting open citizenship or operating global maritime trade fleets!'
        };
      }
    }
    if (optLower.includes('cultural integration & citizenship')) {
      if (hasText('p5_foreign_policy', 'isolationism')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Open cultural integration and foreign citizenship directly contradict strict closed-border isolationism!'
        };
      }
    }
    if (optLower.includes('isolationist / non-interventionist')) {
      if (hasText('e5_trade', 'maritime trade empire')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Isolationism bans foreign interaction; you cannot run an international maritime trade empire!'
        };
      }
      if (hasText('p5_foreign_policy', 'tributary vassals') || hasText('p5_foreign_policy', 'mass deportation')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Isolationism means staying behind borders; it contradicts imperial foreign conquest and deportations!'
        };
      }
    }

    if (optLower.includes('cultural integration & citizenship')) {
      if (hasText('s3_mobility', 'rigid hereditary caste system')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: A rigid hereditary caste system treats outsiders as untouchables; it cannot offer them equal citizenship!'
        };
      }
    }

    if (optLower.includes('commercial colonies & trading posts')) {
      const terrain = selectedList('g2_terrain');
      const isLandlocked = terrain.length > 0 && terrain.every((t) =>
        t.toLowerCase().includes('mountain') || t.toLowerCase().includes('steppe') || t.toLowerCase().includes('plateau')
      ) && !hasText('g3_barriers', 'coastlines');
      if (isLandlocked) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Maritime trading colonies require open sea lanes and fleets; your land is completely landlocked!'
        };
      }
    }
  }

  // =========================================================================
  // 4. SOCIAL STRUCTURE (S1 - S5) DEEP CONTRADICTIONS
  // =========================================================================

  // --- S1: APEX ---
  if (questionId === 's1_apex') {
    if (optLower.includes('the god-king and royal dynasty')) {
      if (hasText('p1_gov_system', 'direct democracy')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Direct democracies are governed by citizen votes, not absolute hereditary God-Kings!'
        };
      }
      if (hasText('p1_gov_system', 'aristocratic oligarchy / republic')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: A republic is ruled by an aristocratic senate, not a divine god-king!'
        };
      }
      if (hasText('p2_succession', 'election by citizen assembly')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Divine god-kings do not put the crown up for popular citizen election votes!'
        };
      }
    }

    if (optLower.includes('merchant oligarchs & trade guild masters')) {
      if (hasText('e5_trade', 'self-sufficient command economy')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: If private merchant trade is banned by the state, merchant oligarchs cannot exist as the ruling class!'
        };
      }
    }

    if (optLower.includes('imperial bureaucratic literati')) {
      if (hasText('a1_writing', 'quipu / knotted cords')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: A scholar-bureaucrat elite requires written literature and exams, impossible with non-written knotted cords!'
        };
      }
      if (hasText('p1_gov_system', 'military junta')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: In a military junta, warrior-kings hold supreme power, not civilian scholar-bureaucrats!'
        };
      }
    }
  }

  // --- S2: MIDDLE ---
  if (questionId === 's2_middle') {
    if (optLower.includes('scribes and record-keepers')) {
      if (hasText('a1_writing', 'quipu / knotted cords')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Quipu has no written letters; you cannot have a literary scribal caste!'
        };
      }
    }

    if (optLower.includes('master craftsmen & metallurgists')) {
      if (hasText('g5_shortages', 'lack of hard stone or metal ores')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: You selected that your land lacks stone and metal ores; metallurgists cannot be your middle class!'
        };
      }
    }

    if (optLower.includes('free smallholder farmers')) {
      if (hasText('g5_shortages', 'lack of arable farmland')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: You selected that your land lacks arable farmland; family smallholders cannot be the backbone of your society!'
        };
      }
    }

    if (optLower.includes('caravan merchants & wholesale')) {
      if (hasText('e5_trade', 'self-sufficient command economy')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: In a closed command economy, private long-distance merchants are banned by the palace!'
        };
      }
    }
  }

  // --- S3: MOBILITY ---
  if (questionId === 's3_mobility') {
    if (optLower.includes('rigid hereditary caste system')) {
      if (hasText('s3_mobility', 'scribal / exam mobility') || hasText('s3_mobility', 'wealth-based mobility') || hasText('s3_mobility', 'military valor')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: A rigid caste system permits ZERO social mobility; you cannot change your social rank through exams, money, or bravery!'
        };
      }
    }
    if ((optLower.includes('scribal / exam mobility') || optLower.includes('wealth-based mobility') || optLower.includes('military valor')) &&
        hasText('s3_mobility', 'rigid hereditary caste system')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: Meritocratic or wealth-based social climbing contradicts a rigid zero-mobility hereditary caste system!'
      };
    }
    if (optLower.includes('rigid hereditary caste system')) {
      if (hasText('s3_mobility', 'wealth-based mobility') || hasText('s3_mobility', 'scribal / exam mobility') || hasText('s3_mobility', 'military meritocracy')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: A rigid hereditary caste system forbids social climbing; it cannot coexist with exam or wealth-based promotions!'
        };
      }
      if (hasText('p5_foreign_policy', 'cultural integration & citizenship')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: A rigid hereditary caste system cannot integrate conquered foreigners into equal citizenship!'
        };
      }
    }

    if (optLower.includes('wealth-based mobility')) {
      if (hasText('s3_mobility', 'rigid hereditary caste system')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: You already selected a rigid hereditary caste system where status is permanently locked at birth!'
        };
      }
      if (hasText('e3_currency', 'pure barter & credit tallies')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: In a barter economy without money, people cannot amass liquid fortunes to buy noble rank!'
        };
      }
    }

    if (optLower.includes('scribal / exam mobility')) {
      if (hasText('a1_writing', 'quipu / knotted cords')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Exam-based promotion requires written literacy, which does not exist in a quipu knotted-cord society!'
        };
      }
    }
  }

  // --- S4: GENDER ---
  if (questionId === 's4_gender') {
    if (optLower.includes('strict patriarchal seclusion')) {
      if (hasText('s4_gender', 'high legal autonomy') || hasText('s4_gender', 'militarized matriarchal autonomy')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Strict patriarchal seclusion (women locked indoors as legal property) is the exact opposite of high legal autonomy!'
        };
      }
    }
    if (optLower.includes('high legal autonomy') && hasText('s4_gender', 'strict patriarchal seclusion')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: High legal autonomy contradicts strict patriarchal seclusion!'
      };
    }
    if (optLower.includes('strict patriarchal seclusion')) {
      if (hasText('s4_gender', 'high legal autonomy') || hasText('s4_gender', 'matrilineal clan authority')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Patriarchal seclusion keeps women locked indoors as legal minors; it directly contradicts legal autonomy or clan rule!'
        };
      }
    }

    if (optLower.includes('high legal autonomy (like ancient egypt)')) {
      if (hasText('s4_gender', 'strict patriarchal seclusion')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: You already selected strict patriarchal seclusion!'
        };
      }
    }

    if (optLower.includes('matrilineal clan authority')) {
      if (hasText('p2_succession', 'hereditary primogeniture (passes strictly to the eldest son')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: In a matrilineal society, property and titles pass through mothers and daughters, not eldest royal sons!'
        };
      }
    }
  }

  // --- S5: UNFREE LABOR ---
  if (questionId === 's5_unfree_labor') {
    if (optLower.includes('paid free laborers only')) {
      if (hasText('s5_unfree_labor', 'prisoners of war & chattel slavery') || hasText('s5_unfree_labor', 'state serfs / helots')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Relying exclusively on paid, well-fed free workers directly contradicts holding enslaved chattel captives or state serfs!'
        };
      }
    }
    if ((optLower.includes('prisoners of war & chattel slavery') || optLower.includes('state serfs / helots')) &&
        hasText('s5_unfree_labor', 'paid free laborers only')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: Chattel slavery and state serfdom directly contradict relying exclusively on paid free laborers!'
      };
    }
    if (optLower.includes('paid free laborers only')) {
      if (hasText('s5_unfree_labor', 'prisoners of war & chattel slavery') || hasText('s5_unfree_labor', 'temporary debt bondage') || hasText('s5_unfree_labor', 'helot / serf') || hasText('s5_unfree_labor', 'corvée labor levy')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: "Paid Free Laborers Only" means your society has NO unfree, bonded, or slave labor!'
        };
      }
      if (hasText('e4_taxation', 'corvée labor system')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Corvée labor is unpaid mandatory forced state work, directly contradicting "Paid Free Laborers Only"!'
        };
      }
    }

    if (optLower.includes('prisoners of war & chattel slavery') && hasText('s5_unfree_labor', 'paid free laborers only')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: You previously selected "Paid Free Laborers Only"!'
      };
    }
  }

  // =========================================================================
  // 5. RELIGION (R1 - R5) DEEP CONTRADICTIONS
  // =========================================================================

  // --- R1: STRUCTURE ---
  if (questionId === 'r1_structure') {
    if (optLower.includes('monolatry / early monotheism')) {
      if (hasText('r1_structure', 'anthropomorphic polytheism')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Strict monotheism (worship of only ONE creator god) rejects worshipping a polytheistic pantheon of dozens of competing gods!'
        };
      }
    }
    if (optLower.includes('anthropomorphic polytheism') && hasText('r1_structure', 'monolatry / early monotheism')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: Polytheistic pantheons contradict strict monotheism!'
      };
    }
    if (optLower.includes('theocratic god-king worship')) {
      if (hasText('r2_demeanor', 'distant and indifferent')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: If your ruler is literally a living god walking the Earth, the gods cannot be distant and indifferent to human affairs!'
        };
      }
      if (hasText('p1_gov_system', 'direct democracy')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Absolute living god-king worship cannot coexist with a citizen direct democracy!'
        };
      }
      if (hasText('r5_gov_relation', 'civic religion')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: In a god-king cult, priests serve an infallible living deity, not secular city council committees!'
        };
      }
    }

    if (optLower.includes('cosmic dualism') && hasText('r1_structure', 'animism & nature spirits')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: Zoroastrian dualism pits two cosmic moral gods (Good vs Evil) in eternal war, contradicting animism where every tree and river has its own independent spirit!'
      };
    }

    if (optLower.includes('ancestor veneration & philosophical harmony')) {
      if (hasText('r3_rituals', 'bloodletting or human sacrifice')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Confucian and Taoist philosophical harmony strictly prohibits bloody human sacrifices in favor of filial piety and ancestral food offerings!'
        };
      }
    }

    if (optLower.includes('monolatry / early monotheism')) {
      if (hasText('r1_structure', 'anthropomorphic polytheism')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Monolatry/monotheism worships ONE supreme creator god, forbidding the worship of a polytheistic pantheon of dozens of squabbling deities!'
        };
      }
    }
  }

  // --- R2: DEMEANOR ---
  if (questionId === 'r2_demeanor') {
    if (optLower.includes('benevolent and predictable')) {
      if (hasText('r2_demeanor', 'cruel, capricious, and angry')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Benevolent loving gods directly contradict cruel, capricious gods who torment humans with unprovoked disasters!'
        };
      }
    }
    if (optLower.includes('cruel, capricious, and angry') && hasText('r2_demeanor', 'benevolent and predictable')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: Cruel, capricious gods contradict benevolent loving gods!'
      };
    }
    if (optLower.includes('benevolent and predictable')) {
      if (hasText('g1_freshwater', 'violent, unpredictable twin rivers') || hasText('g6_disasters', 'catastrophic, unannounced river floods')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: When unpredictable floods wash away whole cities, ancient priests view the gods as angry and capricious (like Mesopotamia), never benevolent!'
        };
      }
      if (hasText('r3_rituals', 'bloodletting or human sacrifice')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: If the gods are loving, benevolent protectors, why must you slice your flesh and sacrifice human hearts to keep the sun from dying?'
        };
      }
    }

    if (optLower.includes('cruel, capricious, and angry')) {
      if (hasText('g1_freshwater', 'predictable annual flooding river') && !hasText('g6_disasters', 'floods')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: When the environment is gentle, fertile, and predictable (like Egypt\'s Nile), priests view the gods as generous guardians, not cruel monsters!'
        };
      }
    }

    if (optLower.includes('distant and indifferent')) {
      if (hasText('r1_structure', 'theocratic god-king worship')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: The living god-king is right here on Earth governing your empire daily; the gods are not distant or indifferent!'
        };
      }
      if (hasText('r3_rituals', 'bloodletting or human sacrifice') || hasText('r3_rituals', 'oracle divination')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: If gods ignore human affairs, sacrificing captives or reading oracle bones to divine their will is completely pointless!'
        };
      }
    }
  }

  // --- R3: RITUALS ---
  if (questionId === 'r3_rituals') {
    if (optLower.includes('bloodletting or human sacrifice')) {
      if (hasText('r2_demeanor', 'benevolent and predictable')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Benevolent loving gods do not demand human blood sacrifices!'
        };
      }
      if (hasText('r1_structure', 'ancestor veneration & philosophical harmony')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Philosophical harmony and ancestor veneration focus on incense and filial piety, strictly shunning human blood sacrifice!'
        };
      }
      if (hasText('r2_demeanor', 'distant and indifferent')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Indifferent gods do not care about human blood or sacrifices!'
        };
      }
    }

    if (optLower.includes('oracle divination')) {
      if (hasText('r2_demeanor', 'distant and indifferent')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: If the gods ignore humanity, burning bones to read their will produces no answers!'
        };
      }
    }
  }

  // --- R4: AFTERLIFE ---
  if (questionId === 'r4_afterlife') {
    if (optLower.includes('mummification & tomb provisioning')) {
      if (hasText('r4_afterlife', 'cremation on funeral pyres')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Mummification requires preserving the physical body intact forever, directly contradicting burning the corpse to ashes on a funeral pyre!'
        };
      }
      if (hasText('r4_afterlife', 'sky burial or ossuary caves')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Mummification preserves the corpse with resins and bandages, directly opposing leaving the body out for vultures to devour in a sky burial!'
        };
      }
    }
    if (optLower.includes('cremation on funeral pyres') && hasText('r4_afterlife', 'mummification')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: Burning corpses to ashes directly contradicts physical mummification!'
      };
    }
    if (optLower.includes('sky burial or ossuary caves') && hasText('r4_afterlife', 'mummification')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: Sky burial contradicts physical mummification!'
      };
    }
    if (optLower.includes('grim underworld') && hasText('r4_afterlife', 'moral judgment & paradise')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: A bleak underworld where everyone eats dirt in shadows contradicts a moral paradise of fertile reed fields!'
      };
    }
    if (optLower.includes('moral judgment & paradise') && hasText('r4_afterlife', 'grim underworld')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: Moral paradise contradicts a bleak dust underworld for all souls!'
      };
    }
    if (optLower.includes('mummification & tomb provisioning')) {
      if (hasText('r4_afterlife', 'cremation on funeral pyres')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Cremation burns the body into ashes, destroying the physical vessel needed for mummification and tomb eternity!'
        };
      }
      if (hasText('r4_afterlife', 'sky burial or ossuary caves')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Sky burial exposes the body to vultures to strip the flesh, whereas mummification preserves the flesh forever!'
        };
      }
      if (hasText('r4_afterlife', 'reincarnation cycle')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Reincarnation teaches the soul is reborn into new bodies on Earth, making permanent bodily tomb preservation contradictory!'
        };
      }
    }

    if (optLower.includes('cremation on funeral pyres')) {
      if (hasText('r4_afterlife', 'mummification & tomb provisioning')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: You already selected mummification, which requires preserving the physical body, not burning it to ashes!'
        };
      }
    }

    if (optLower.includes('sky burial or ossuary caves')) {
      if (hasText('r4_afterlife', 'mummification & tomb provisioning')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Sky burial leaves the body to scavengers, directly contradicting mummification!'
        };
      }
    }
  }

  // --- R5: GOV RELATION ---
  if (questionId === 'r5_gov_relation') {
    if (optLower.includes('pure theocracy') && hasText('r5_gov_relation', 'civic religion')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: A pure theocracy (where the High Priest holds supreme absolute rule) contradicts a secular civic religion where priests are just minor elected city clerks!'
      };
    }
    if (optLower.includes('civic religion') && hasText('r5_gov_relation', 'pure theocracy')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: Civic religion contradicts pure theocracy!'
      };
    }
    if (optLower.includes('pure theocracy')) {
      if (hasText('p1_gov_system', 'direct democracy') || hasText('p1_gov_system', 'aristocratic oligarchy / republic')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: In a Pure Theocracy, the High Priest rules by divine law; you cannot have a secular citizen democracy or republic!'
        };
      }
      if (hasText('r5_gov_relation', 'civic religion') || hasText('r5_gov_relation', 'power struggle')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: In a pure theocracy, church and state are identical; the king and the priest are the same authority!'
        };
      }
    }

    if (optLower.includes('civic religion')) {
      if (hasText('r1_structure', 'theocratic god-king worship') || hasText('p1_gov_system', 'pure theocracy')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: In a God-King theocracy, priests are holy ministers to a living divine deity, not elected municipal festival coordinators!'
        };
      }
    }
  }

  // =========================================================================
  // 6. ACHIEVEMENTS (A1 - A5) DEEP CONTRADICTIONS
  // =========================================================================

  // --- A1: WRITING SYSTEM ---
  if (questionId === 'a1_writing') {
    if (optLower.includes('quipu / knotted cords')) {
      if (hasText('a2_medium', 'baked or sun-dried clay tablets') || hasText('a2_medium', 'papyrus scrolls') || hasText('a2_medium', 'bamboo or wooden slips')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Quipu uses spun and knotted colored alpaca strings, not ink on papyrus, clay tablets, or bamboo slips!'
        };
      }
      if (hasText('p3_law_system', 'written public law pillars')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Quipu has no written letters to carve into stone public law pillars (like Hammurabi\'s Code)!'
        };
      }
      if (hasText('s2_middle', 'scribes and record-keepers')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Quipu accountants (quipucamayocs) tied knots; they were not scribes writing text on tablets!'
        };
      }
    }

    if (optLower.includes('cuneiform')) {
      if (hasText('a2_medium', 'accordion-folded bark paper') || hasText('a2_medium', 'papyrus scrolls')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Cuneiform wedge marks are pressed into soft wet clay with a triangular reed stylus, not written with ink on bark paper or papyrus!'
        };
      }
    }
  }

  // --- A2: MEDIUM ---
  if (questionId === 'a2_medium') {
    if (hasText('a1_writing', 'quipu / knotted cords')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: You selected Quipu (knotted cords)! Quipu records data through colored string knots, not inscribed physical paper or clay!'
      };
    }

    if (optLower.includes('papyrus scrolls')) {
      if (hasText('g2_terrain', 'dense, humid tropical rainforest')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Papyrus is delicate pressed reed paper; in humid tropical rainforests, moisture and mold rot papyrus scrolls in weeks!'
        };
      }
      if (hasText('g1_freshwater', 'glacial mountain meltwater') && hasText('g2_terrain', 'mountain')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Papyrus reeds only grow in warm river deltas and swamps (like the Nile), not freezing alpine mountain glaciers!'
        };
      }
    }

    if (optLower.includes('bamboo or wooden slips')) {
      if (hasText('g5_shortages', 'lack of tall timber')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Bamboo and wooden slip books require forests or bamboo groves, but you have a critical timber shortage!'
        };
      }
    }

    if (optLower.includes('parchment or vellum')) {
      if (hasText('e2_animals', 'none — all goods are carried on the backs of human porters')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Parchment is made from scraped sheep, goat, or calf animal skins; you have no domesticated herd animals!'
        };
      }
    }

    if (optLower.includes('carved directly into limestone walls, obelisks')) {
      if (hasText('g5_shortages', 'lack of hard stone or metal ores')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: You selected that you lack hard stone; you cannot carve monumental limestone walls or obelisks!'
        };
      }
    }
  }

  // --- A3: MONUMENTS ---
  if (questionId === 'a3_monuments') {
    if (optLower.includes('cyclopean stone fortresses')) {
      if (hasText('g5_shortages', 'lack of hard stone or metal ores')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Cyclopean stone fortresses require massive quarried boulders fitted together without mortar; you have no hard stone!'
        };
      }
      const terrain = selectedList('g2_terrain');
      if (terrain.length > 0 && terrain.every((t) => t.toLowerCase().includes('flat, featureless alluvial'))) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Cyclopean stone citadels require bedrock mountain quarries; flat alluvial floodplains only have soft river mud!'
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

    if (optLower.includes('rock-cut cliffside temples')) {
      const terrain = selectedList('g2_terrain');
      if (terrain.length > 0 && terrain.every((t) => t.toLowerCase().includes('flat, featureless alluvial'))) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Rock-cut temples (like Petra) are carved directly into towering solid sandstone canyon cliffs, not flat mud floodplains!'
        };
      }
    }

    if (optLower.includes('thousands of miles of frontier defensive walls')) {
      if (currentScale !== 'continental_empire') {
        return {
          isDisallowed: true,
          reason: '🔒 Scale-Locked: Building thousands of miles of Great Walls requires millions of imperial laborers and immense borders only found in a Grand Continental Empire!'
        };
      }
    }
  }

  // --- A4: HYDRAULIC ---
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
      if (hasText('g1_freshwater', 'limestone sinkholes') || hasText('g1_freshwater', 'oasis springs')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Basin irrigation and counterweight shaduf buckets lift water from open riverbanks; your freshwater is from underground sinkholes or springs!'
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
      if (hasText('g2_terrain', 'steep, jagged mountain ranges') && !hasText('g2_terrain', 'caldera')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Floating chinampa rafts cannot be anchored on steep mountain cliffs without a broad, calm alpine crater lake!'
        };
      }
    }

    if (optLower.includes('qanats')) {
      if (hasText('g1_freshwater', 'predictable annual flooding river')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Qanats are underground desert tunnels designed to avoid extreme surface evaporation; open river basins use surface canal irrigation instead!'
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

  // --- A5: SCIENCE ---
  if (questionId === 'a5_science') {
    if (optLower.includes('concrete that can set underwater')) {
      if (currentEra !== 'imperial_era') {
        return {
          isDisallowed: true,
          reason: '🔒 Era-Locked: Volcanic pozzolanic underwater concrete was invented by Roman engineers (~200 BCE). It did not exist in earlier eras!'
        };
      }
    }

    if (optLower.includes('celestial navigation (sailing out of sight of land')) {
      const terrain = selectedList('g2_terrain');
      const isLandlocked = terrain.length > 0 && terrain.every((t) =>
        t.toLowerCase().includes('mountain') || t.toLowerCase().includes('steppe') || t.toLowerCase().includes('plateau')
      ) && !hasText('g3_barriers', 'coastlines');
      if (isLandlocked) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Your territory is landlocked in high mountains or steppes with no open ocean sailing!'
        };
      }
    }

    if (optLower.includes('magnetic compass lodestone')) {
      if (currentEra === 'early_bronze' || currentEra === 'late_bronze' || currentEra === 'early_iron') {
        return {
          isDisallowed: true,
          reason: '🔒 Era-Locked: Magnetic lodestone orientation was developed during the Han Dynasty in China (~200 BCE). It did not exist in earlier bronze/iron eras!'
        };
      }
    }

    if (optLower.includes('advanced metallurgy (smelting bronze alloys, cast iron')) {
      if (hasText('g5_shortages', 'lack of hard stone or metal ores')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Advanced metallurgy requires metal ores (copper, tin, iron), which your land lacks!'
        };
      }
      if (hasText('g5_shortages', 'lack of fuel firewood and charcoal')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: High-temperature smelting crucibles require vast amounts of dense charcoal fuel!'
        };
      }
    }

    if (optLower.includes('herbal medicine, cranial surgery (trepanation)')) {
      if (hasText('g5_shortages', 'lack of hard stone or metal ores') && !hasText('g4_resources', 'obsidian')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Performing delicate skull bone surgery requires either razor-sharp volcanic obsidian blades or bronze/iron surgical scalpels!'
        };
      }
    }
  }


    // --- RESEARCHED GEOGRAPHY & RESOURCE CONTRADICTIONS ---
    if (optLower.includes('marine murex sea snail beds')) {
      const terrain = selectedList('g2_terrain');
      const isLandlocked = terrain.length > 0 && terrain.every((t) =>
        t.toLowerCase().includes('mountain') || t.toLowerCase().includes('steppe') || t.toLowerCase().includes('plateau')
      ) && !hasText('g3_barriers', 'coastlines');
      if (isLandlocked) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Marine murex sea snails live exclusively on ocean shorelines; a landlocked mountainous interior realm has no marine snail beds!'
        };
      }
    }

    if (optLower.includes('wild silk cocoons and fine white mulberry groves')) {
      if (hasText('g2_terrain', 'arid desert expanses') && !hasText('g1_freshwater', 'river')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Delicate white mulberry trees require fertile soils and reliable rainfall; they wither in hyper-arid sand deserts!'
        };
      }
    }

    if (optLower.includes('lack of textile plant fibers or sheep wool')) {
      if (hasText('g4_resources', 'wild silk cocoons') || hasText('e1_crops', 'cotton and flax') || hasText('e2_animals', 'sheep and goats')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: You already possess abundant sheep, cotton/flax crops, or mulberry silk; you cannot lack textile fibers!'
        };
      }
    }

    if (optLower.includes('lack of domestic clay deposits for pottery')) {
      if (hasText('g4_resources', 'alluvial clay') || hasText('a2_medium', 'baked or sun-dried clay tablets') || hasText('a3_monuments', 'baked-brick houses')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: You selected rich alluvial clay, brick cities, or clay tablets, directly contradicting a lack of domestic clay!'
        };
      }
    }

    // --- RESEARCHED ANIMAL & CROP CONTRADICTIONS ---
    if (optLower.includes('cotton and flax / linseed')) {
      if (hasText('g2_terrain', 'high-altitude flat plateau') && !hasText('g1_freshwater', 'flooding river')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Cotton requires a 200-day frost-free growing season with intense summer heat; it freezes and dies on cold wind-swept plateaus!'
        };
      }
    }

    if (optLower.includes('domesticated dromedary & bactrian camels')) {
      if (hasText('g2_terrain', 'dense, humid tropical rainforest') || hasText('g3_barriers', 'mangrove flats')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Camels\' soft footpads rot and suffer fatal foot diseases in soggy, humid rainforest mud and tidal mangrove swamps!'
        };
      }
    }

    if (optLower.includes('asian war elephants & work elephants')) {
      if ((hasText('g2_terrain', 'arid desert expanses') && !hasText('g1_freshwater', 'river')) || hasText('g2_terrain', 'high-altitude flat plateau')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: War elephants consume 300+ lbs of fresh greenery and 50 gallons of water daily; waterless deserts starve them, and freezing alpine plateaus cause fatal hypothermia!'
        };
      }
    }

    // --- RESEARCHED ENGINEERING & ARCHITECTURE CONTRADICTIONS ---
    if (optLower.includes('suspension rope bridges and paved mountain stairways')) {
      const terrain = selectedList('g2_terrain');
      const isPurePlains = terrain.length > 0 && terrain.every((t) => t.toLowerCase().includes('flat, featureless alluvial floodplains'));
      if (isPurePlains && !hasText('g3_barriers', 'canyon gorges')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Suspension rope bridges require sheer, towering bedrock canyon cliffs on both sides to anchor the cables! You cannot string a suspension bridge across 50 miles of flat alluvial mud floodplains.'
        };
      }
    }

    if (optLower.includes('artificial enclosed naval harbors (cothons)')) {
      const terrain = selectedList('g2_terrain');
      const isLandlocked = terrain.length > 0 && terrain.every((t) =>
        t.toLowerCase().includes('mountain') || t.toLowerCase().includes('steppe') || t.toLowerCase().includes('plateau')
      ) && !hasText('g3_barriers', 'coastlines');
      if (isLandlocked) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: An artificial circular naval cothon with covered drydocks is designed for sea-going war triremes; it requires an ocean or sea coastline!'
        };
      }
    }

    // --- RESEARCHED GOVERNANCE & GENDER CONTRADICTIONS ---
    if (optLower.includes('egalitarian civic council of merchant-artisan guilds')) {
      if (hasText('r1_structure', 'theocratic god-king worship') || hasText('s1_apex', 'god-king')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: An egalitarian civic merchant council with no grand palaces contradicts absolute god-king autocracy!'
        };
      }
    }

    if (optLower.includes('matrilineal royal succession') || optLower.includes('matriarchal clan mothers')) {
      if (hasText('s4_gender', 'strict patriarchal seclusion')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Matrilineal succession and queen mothers directly contradict strict patriarchal seclusion where women are legal property locked indoors!'
        };
      }
    }

    if (optLower.includes('strict patriarchal seclusion')) {
      if (hasText('p2_succession', 'matrilineal') || hasText('s1_apex', 'matriarchal')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Strict patriarchal seclusion contradicts matrilineal royal succession and ruling clan mothers!'
        };
      }
    }

    if (optLower.includes('trans-saharan gold-salt trade')) {
      if (hasText('e2_animals', 'none — all goods are carried on the backs of human porters')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Crossing the vast Sahara sand sea requires pack camels; human porters cannot carry enough water across hundreds of miles of sand dunes to survive!'
        };
      }
    }


    // --- COMPREHENSIVE MUTUAL EXCLUSIVITY CHECKS ---
    // Shortage Timber vs Naval / Siege / Wood medium
    if (optLower.includes('naval supremacy (trireme warships') && hasText('g5_shortages', 'lack of tall timber')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: Building war triremes requires thousands of tall cedar or oak logs, which your land critically lacks!'
      };
    }

    if (optLower.includes('bamboo or wooden slips') && hasText('g5_shortages', 'lack of tall timber')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: Bamboo and wooden slip codices require abundant forest timber, which your land lacks!'
      };
    }

    if (optLower.includes('siege warfare specialists') && hasText('g5_shortages', 'lack of tall timber')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: Giant battering rams and multi-story siege towers require dense hardwood timber, which your land lacks!'
      };
    }

    // Shortage Stone/Metal vs Monumental Stone Architecture
    if ((optLower.includes('cyclopean stone fortresses') || optLower.includes('grand colonnaded temples with marble') || optLower.includes('rock-cut cliffside temples')) &&
        hasText('g5_shortages', 'lack of hard stone or metal ores')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: Monumental stone fortresses and marble temples require quarried stone, which your land critically lacks!'
      };
    }

    // Shortage Horses vs Chariots / Cavalry
    if ((optLower.includes('elite chariot corps') || optLower.includes('horse archer light cavalry')) &&
        (hasText('g5_shortages', 'lack of horses or pack animals') || hasText('e2_animals', 'none — all goods are carried on the backs of human porters'))) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: War chariots and cavalry require domesticated horses, which your land completely lacks!'
      };
    }

    if (optLower.includes('armored war elephant corps') && hasText('e2_animals', 'none — all goods are carried on the backs of human porters')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: War elephant corps require trained heavy beasts, contradicting a society that relies exclusively on human porters!'
      };
    }

    // Shortage Salt vs Salt Domes / Salt Trade / Salt Drilling
    if ((optLower.includes('vast rock salt domes') || optLower.includes('trans-saharan gold-salt trade') || optLower.includes('deep underground salt-drilling')) &&
        hasText('g5_shortages', 'lack of salt')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: In Critical Shortages, you stated your people lack salt; you cannot operate salt mines, salt drilling, or salt trade!'
      };
    }

    // Shortage Tin vs Bronze Casting & Tool Money
    if ((optLower.includes('cast bronze vessels with long ritual inscriptions') || optLower.includes('cast bronze tool money')) &&
        hasText('g5_shortages', 'lack of tin or alloy fluxes')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: Casting ritual bronze vessels and bronze tool money requires tin alloy fluxes, which your land lacks!'
      };
    }

    // Quipu vs Inscribed Stone Pillars and Clay Tablets
    if (optLower.includes('quipu / knotted cords')) {
      if (hasText('p3_law_system', 'written public law pillars') || hasText('a2_medium', 'baked or sun-dried clay tablets') || hasText('a2_medium', 'papyrus scrolls')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Andean Quipu records information entirely through colored knots without written words, contradicting written stone law pillars or clay cuneiform tablets!'
        };
      }
    }
    if ((optLower.includes('written public law pillars') || optLower.includes('baked or sun-dried clay tablets')) && hasText('a1_writing', 'quipu / knotted cords')) {
      return {
        isDisallowed: true,
        reason: '🔒 Contradiction: Carved stone law pillars and clay tablets require written symbols, contradicting an indigenous recording system based exclusively on knotted strings (Quipu)!'
      };
    }

    // Chinampas vs Violent Floods or Deserts
    if (optLower.includes('chinampas ("floating gardens")')) {
      if (hasText('g1_freshwater', 'violent, unpredictable twin rivers')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Violent river flash-floods wash away delicate woven floating gardens (Chinampas); they require calm, shallow crater lakes!'
        };
      }
      if (hasText('g2_terrain', 'arid desert expanses') && !hasText('g1_freshwater', 'lake') && !hasText('g1_freshwater', 'lagoon')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Floating chinampa gardens require shallow lake beds; they cannot float in waterless desert sand!'
        };
      }
    }

    // Qanats vs Waterlogged Rainforest
    if (optLower.includes('qanats (underground channels')) {
      if (hasText('g2_terrain', 'dense, humid tropical rainforest') || hasText('g3_barriers', 'swamps')) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Qanats are deep underground tunnels built to prevent water evaporation in hot arid deserts; they are useless in soggy, waterlogged rainforests!'
        };
      }
    }

    // Ship Burial vs Landlocked Desert / Mountain
    if (optLower.includes('ship burial and aquatic voyages')) {
      const terrain = selectedList('g2_terrain');
      const isLandlocked = terrain.length > 0 && terrain.every((t) =>
        t.toLowerCase().includes('mountain') || t.toLowerCase().includes('steppe') || t.toLowerCase().includes('plateau')
      ) && !hasText('g3_barriers', 'coastlines');
      if (isLandlocked) {
        return {
          isDisallowed: true,
          reason: '🔒 Contradiction: Ship burials require maritime naval longships and coastal traditions; landlocked mountain plateaus lack sea-going ships!'
        };
      }
    }

  return { isDisallowed: false, reason: null };
}
