// Historical Synergies & Logical Auto-Selection Engine
// Grounded in real ancient history: selecting a technology, weapon, or custom automatically
// links its necessary geographical, agricultural, or institutional prerequisites.

import { checkOptionDisallowed } from './logicRules.js';

export const LOGICAL_SYNERGIES = {
  // --- FRESHWATER & HYDROLOGICAL PREREQUISITES ---
  "Predictable annual flooding river (like the Nile — leaves rich black silt, easy to plan around)": [
    { targetQ: "a4_hydraulic", option: "Basin irrigation, dikes, and shadufs (counterweight buckets to lift river water)" },
    { targetQ: "g4_resources", option: "Rich alluvial clay and mud (for bricks, pottery, and writing tablets)" }
  ],
  "Underground limestone sinkholes and aquifers (like Mayan cenotes — no surface rivers)": [
    { targetQ: "g4_resources", option: "Quarried limestone, granite, or marble (for permanent monuments)" }
  ],
  "High-altitude glacial mountain meltwater (like the Andes — cold, fast-flowing streams)": [
    { targetQ: "g2_terrain", option: "Steep, jagged mountain ranges (requires terrace farming, provides natural fortresses)" },
    { targetQ: "a4_hydraulic", option: "Mountain terrace farming (carving flat steps into steep cliffs with retaining walls)" }
  ],
  "Seasonal monsoon rains and rainwater harvesting reservoirs (like the Indus/Khmer)": [
    { targetQ: "a4_hydraulic", option: "Stepwells and Massive Sunken Reservoirs (Vavs / Baolis / Kunds carved deep into bedrock to access deep aquifers and cool communal gathering)" }
  ],
  "Desert flash-flood wadis managed through dry-river canyon dams and terraced retention basins (like Nabataea / Petra)": [
    { targetQ: "a4_hydraulic", option: "Check-dams and rock terracing designed to trap flash-flood desert runoff and fertile silt" }
  ],

  // --- TERRAIN PREREQUISITES ---
  "Steep, jagged mountain ranges (requires terrace farming, provides natural fortresses)": [
    { targetQ: "a4_hydraulic", option: "Mountain terrace farming (carving flat steps into steep cliffs with retaining walls)" },
    { targetQ: "g3_barriers", option: "Impassable, freezing mountain ranges blocking the border" }
  ],
  "Rocky peninsula with jagged coastlines and hundreds of small islands (like Greece)": [
    { targetQ: "e5_trade", option: "Maritime Trade Empire (merchant fleets sailing across seas to establish trading colonies)" },
    { targetQ: "g3_barriers", option: "Treacherous rocky coastlines, reefs, and stormy seas" }
  ],

  // --- WRITING SCRIPT & MEDIUM SYNERGIES ---
  "Cuneiform (wedge-shaped marks pressed into wet clay with a reed stylus)": [
    { targetQ: "a2_medium", option: "Baked or sun-dried clay tablets (heavy, but fireproof and lasts thousands of years)" },
    { targetQ: "g4_resources", option: "Rich alluvial clay and mud (for bricks, pottery, and writing tablets)" },
    { targetQ: "s2_middle", option: "Scribes and Record-Keepers (highly respected because fewer than 2% of people can read/write)" }
  ],
  "Hieroglyphs (elaborate carved and painted sacred symbols representing sounds and ideas)": [
    { targetQ: "a2_medium", option: "Papyrus scrolls made from pressed river reeds (lightweight, but rots in humid climates)" },
    { targetQ: "g4_resources", option: "Papyrus reeds, bamboo, or marsh plants (for paper, boats, and baskets)" },
    { targetQ: "s2_middle", option: "Scribes and Record-Keepers (highly respected because fewer than 2% of people can read/write)" }
  ],
  "Quipu / Knotted Cords (no written words; complex math, census, and history recorded via colored knots)": [
    { targetQ: "e2_animals", option: "Llamas and Alpacas (light pack animals and source of warm mountain wool; no heavy wheeled carts)" },
    { targetQ: "e1_crops", option: "Freeze-dried Potatoes (Chuño) and Quinoa (high-altitude mountain crops)" }
  ],
  "Pictographs & Ideograms carved into stone stelae and folding bark-paper books (codices)": [
    { targetQ: "a2_medium", option: "Accordion-folded bark paper (amatl) coated with fine lime plaster and painted in mineral pigments" }
  ],

  // --- MILITARY DOCTRINES -> DOMESTICATED ANIMALS & RESOURCES ---
  "Elite Chariot Corps (two-wheeled horse-drawn platforms with composite bow archers)": [
    { targetQ: "e2_animals", option: "Horses and Camels (for aristocratic cavalry, messengers, and desert caravan trade)" }
  ],
  "Horse Archer Light Cavalry (highly mobile skirmishers employing the feigned retreat and Parthian shot)": [
    { targetQ: "e2_animals", option: "Horses and Camels (for aristocratic cavalry, messengers, and desert caravan trade)" }
  ],
  "Armored War Elephant Corps (massive beasts bred for battlefield shock, breaking enemy infantry lines and terrifying cavalry)": [
    { targetQ: "e2_animals", option: "Asian War Elephants & Work Elephants (trained for heavy logging, clearing jungle tracks, and terrifying battlefield shock)" }
  ],
  "Naval Supremacy (trireme warships with bronze battering rams dominating sea lanes)": [
    { targetQ: "g4_resources", option: "Dense cedar, oak, or mahogany forests (for shipbuilding and palace roofs)" },
    { targetQ: "e5_trade", option: "Maritime Trade Empire (merchant fleets sailing across seas to establish trading colonies)" }
  ],
  "Disciplined Crossbow Phalanxes & Volley Formations (massed rank-and-file archers firing mechanical bronze-triggered crossbows)": [
    { targetQ: "a5_science", option: "Mechanical Triggered Crossbows and Standardized Interchangeable Bronze Parts (Warring States / Qin China)" }
  ],
  "Siege Warfare Specialists (battering rams, siege towers, sappers digging under walls, catapults)": [
    { targetQ: "g4_resources", option: "Dense cedar, oak, or mahogany forests (for shipbuilding and palace roofs)" }
  ],

  // --- ENGINEERING & ARCHITECTURE FOUNDATIONS ---
  "Chinampas (\"floating gardens\" built on shallow lake beds using woven reeds and fertile mud)": [
    { targetQ: "g1_freshwater", option: "Tropical crater caldera lakes and seasonal interconnected marshland lagoons (like Lake Texcoco and the Valley of Oaxaca)" },
    { targetQ: "e1_crops", option: "Maize (Corn), Beans, and Squash (\"Three Sisters\" grown together symbiotically)" }
  ],
  "Qanats (underground channels that carry mountain groundwater across hot deserts without evaporating)": [
    { targetQ: "g2_terrain", option: "Arid desert expanses surrounded by narrow fertile river strips" }
  ],
  "Suspension Rope Bridges and Paved Mountain Stairways (spanning sheer Andean canyons with braided ichu grass ropes to connect valleys)": [
    { targetQ: "g3_barriers", option: "Deep river chasms and impassable canyon gorges crossed only by suspension bridges" },
    { targetQ: "g2_terrain", option: "Steep, jagged mountain ranges (requires terrace farming, provides natural fortresses)" }
  ],
  "Artificial Enclosed Naval Harbors (Cothons) with covered drydocks and slipways for 200+ warships (like Carthage)": [
    { targetQ: "p4_military", option: "Naval Supremacy (trireme warships with bronze battering rams dominating sea lanes)" },
    { targetQ: "g2_terrain", option: "Rocky peninsula with jagged coastlines and hundreds of small islands (like Greece)" }
  ],

  // --- LAW, POLITICS & PHILOSOPHY SYNERGIES ---
  "Written Public Law Pillars (like Hammurabi's Code — carved in stone in the town square so no judge can make up rules)": [
    { targetQ: "p3_law_system", option: "Lex Talionis (\"Eye for an Eye\" — literal physical retaliation for crimes among equals)" },
    { targetQ: "g4_resources", option: "Quarried limestone, granite, or marble (for permanent monuments)" }
  ],
  "Direct Democracy (all free adult male citizens vote directly on laws and wars in a public assembly)": [
    { targetQ: "p2_succession", option: "Election by Citizen Assembly or Noble Council (term limits or life appointments via vote)" },
    { targetQ: "p3_law_system", option: "Jury Trials & Restorative Justice (large citizen juries vote on guilt; focus on fines, debt forgiveness, or ostracism/exile)" }
  ],
  "Meritocratic Civil Service Exams (officials are chosen by passing brutal written tests on law and philosophy)": [
    { targetQ: "s3_mobility", option: "Scribal / Exam Mobility (anyone who manages to learn to read/write or pass state exams can become a rich official)" },
    { targetQ: "s1_apex", option: "Philosopher-Bureaucrats / Mandarins (scholars who passed the imperial exams)" }
  ],
  "Theocratic God-King Worship (the living ruler is literally a god on Earth, like the Pharaoh)": [
    { targetQ: "s1_apex", option: "The God-King and Royal Dynasty (untouchable divine bloodline)" },
    { targetQ: "r5_gov_relation", option: "Divine Right Monarchy (the King rules, but claims the gods chose him — Mandate of Heaven)" }
  ],
  "Mummification & Tomb Provisioning (body must be preserved with food, furniture, and servants for the next life)": [
    { targetQ: "g4_resources", option: "Natural bitumen and surface asphalt seeps (for caulking boats, water-sealing bricks, and embalming)" },
    { targetQ: "g4_resources", option: "Quarried limestone, granite, or marble (for permanent monuments)" }
  ],
  "Standardized Stamped Coins (electrum, gold, silver, or bronze coins guaranteed by the state)": [
    { targetQ: "g4_resources", option: "Gold, silver, jade, or lapis lazuli (for luxury goods and religious idols)" }
  ],
  "Marine murex sea snail beds (for extracting prized royal Tyrian purple dye)": [
    { targetQ: "a5_science", option: "Silk cultivation, glassblowing, or rare purple dye extracted from sea snails" }
  ],
  "Wild silk cocoons and fine white mulberry groves (for imperial silk weaving and thread)": [
    { targetQ: "s2_middle", option: "Master Weavers, Silk Cultivators, and Textile Guild Masters (commanding high economic status by managing luxury cloth and dye workshops)" },
    { targetQ: "e3_currency", option: "Bolts of Woven Silk and Standardized Spun Yarn Skeins (used alongside copper cash for official payments and international tribute)" }
  ]
};

/**
 * Evaluates newly added options and returns updated answers with logical companion options auto-selected.
 */
export function applyLogicalSynergies(
  questionId,
  selectedList,
  allAnswers,
  logicGuardEnabled = true,
  currentEra = 'early_bronze',
  currentScale = 'regional_kingdom'
) {
  let updatedAnswers = { ...allAnswers, [questionId]: selectedList };
  const autoSelectedMessages = [];

  for (const option of selectedList) {
    const companions = LOGICAL_SYNERGIES[option];
    if (!companions) continue;

    for (const comp of companions) {
      const targetQ = comp.targetQ;
      const targetOpt = comp.option;
      const currentSelected = updatedAnswers[targetQ] || [];
      const currentList = Array.isArray(currentSelected) ? currentSelected : [currentSelected];

      // If already selected, nothing to do
      if (currentList.includes(targetOpt)) continue;

      // Verify that the companion is not disallowed by era, scale, or contradiction
      const { isDisallowed } = checkOptionDisallowed(
        targetQ,
        targetOpt,
        updatedAnswers,
        logicGuardEnabled,
        currentEra,
        currentScale
      );

      if (!isDisallowed) {
        // Auto-select companion
        updatedAnswers[targetQ] = [...currentList, targetOpt];
        autoSelectedMessages.push({
          sourceOption: option,
          targetOption: targetOpt,
          targetQ
        });
      }
    }
  }

  return {
    answers: updatedAnswers,
    autoSelected: autoSelectedMessages
  };
}
