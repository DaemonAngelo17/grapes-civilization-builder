// Exhaustive G.R.A.P.E.S. Civilization Builder Data Structure
// Written in engaging Grade 7 History language with detailed historical explanations.

export const HISTORICAL_ERAS = [
  {
    id: 'early_bronze',
    name: 'Early Bronze Age (c. 3500 – 2000 BCE)',
    period: 'Dawn of Writing & First Cities (e.g. Sumer & Old Kingdom Egypt)',
    description: 'The dawn of human civilization. Copper and bronze tools are cutting-edge; iron does not exist yet. Money is weighed silver or grain rations; writing is on clay tablets or papyrus.',
    ironAvailable: false,
    coinsAvailable: false,
    alphabetAvailable: false,
    concreteAvailable: false,
    democracyAvailable: false,
    compassAvailable: false
  },
  {
    id: 'late_bronze',
    name: 'Middle to Late Bronze Age (c. 2000 – 1100 BCE)',
    period: 'Age of War Chariots & Diplomacy (e.g. New Kingdom Egypt & Babylon)',
    description: 'The golden age of horse chariots, massive temples, and royal diplomacy. Bronze swords dominate the battlefield. Early phonetic writing begins to emerge near the end.',
    ironAvailable: false,
    coinsAvailable: false,
    alphabetAvailable: false,
    concreteAvailable: false,
    democracyAvailable: false,
    compassAvailable: false
  },
  {
    id: 'early_iron',
    name: 'Early Iron Age (c. 1100 – 500 BCE)',
    period: 'Iron Swords & the Phoenician Alphabet (e.g. Assyria & Phoenicia)',
    description: 'Bronze gives way to cheaper, harder iron tools and weapons. Phoenician sailors spread a simple 22-letter phonetic alphabet across the sea. Stamped coins begin emerging near 600 BCE.',
    ironAvailable: true,
    coinsAvailable: false,
    alphabetAvailable: true,
    concreteAvailable: false,
    democracyAvailable: false,
    compassAvailable: false
  },
  {
    id: 'classical_antiquity',
    name: 'Classical Antiquity (c. 500 – 100 BCE)',
    period: 'Democracy, Phalanxes & Stamped Coins (e.g. Athens, Sparta & Persia)',
    description: 'The era of Classical Greece, the Persian Empire, and Warring States China. Stamped silver coins, citizen democracies, trireme war fleets, and Greek hoplite phalanxes flourish.',
    ironAvailable: true,
    coinsAvailable: true,
    alphabetAvailable: true,
    concreteAvailable: false,
    democracyAvailable: true,
    compassAvailable: false
  },
  {
    id: 'imperial_era',
    name: 'Imperial Classical Era (c. 100 BCE – 500 CE)',
    period: 'Mega-Empires & Great Walls (e.g. Roman Empire & Han Dynasty China)',
    description: 'Giant continental empires spanning thousands of miles. Roman underwater concrete, aqueducts, Han silk production, compass orientation, and stone frontier walls reach their peak.',
    ironAvailable: true,
    coinsAvailable: true,
    alphabetAvailable: true,
    concreteAvailable: true,
    democracyAvailable: true,
    compassAvailable: true
  }
];

export const CIVILIZATION_SCALES = [
  {
    id: 'city_state',
    name: 'Independent City-State (Local: ~10,000–50,000 citizens)',
    description: 'A single fortified city with surrounding farm fields (like early Ur, Athens, Sparta, or Tikal). Confined to ONE local geographic terrain and one water source. Citizens can assemble directly in person.',
    maxTerrains: 1,
    maxWaters: 1,
    canBuildGreatWall: false,
    canRunDirectDemocracy: true,
    canRunMegaBureaucracy: false
  },
  {
    id: 'regional_kingdom',
    name: 'Regional Kingdom or League (Medium: ~100,000–1,000,000 people)',
    description: 'A unified river valley, peninsula, or federation of allied cities (like Old Kingdom Egypt, the Delian League, or Shang China). Can span up to 2 neighboring terrain zones.',
    maxTerrains: 2,
    maxWaters: 2,
    canBuildGreatWall: false,
    canRunDirectDemocracy: false,
    canRunMegaBureaucracy: true
  },
  {
    id: 'continental_empire',
    name: 'Grand Continental Empire (Mega: Millions of subjects across biomes)',
    description: 'A colossal multi-ethnic superstate spanning multiple climates, mountain ranges, and seas (like the Roman Empire, Persian Empire, Han China, or Inca Empire). Requires provincial governors and royal roads.',
    maxTerrains: 99,
    maxWaters: 99,
    canBuildGreatWall: true,
    canRunDirectDemocracy: false,
    canRunMegaBureaucracy: true
  }
];

export const INSPIRATIONS = [
  { id: 'mesopotamia', name: 'Mesopotamia (Sumer, Akkad, Babylon, Assyria)', region: 'Fertile Crescent' },
  { id: 'egypt', name: 'Ancient Egypt (Old, Middle, New Kingdom)', region: 'Nile River Valley' },
  { id: 'indus', name: 'Indus Valley Civilization (Harappa & Mohenjo-Daro)', region: 'South Asia' },
  { id: 'china', name: 'Ancient China (Shang, Zhou, Qin, Han Dynasties)', region: 'Yellow & Yangtze Rivers' },
  { id: 'mesoamerica', name: 'Maya / Aztec / Inca (Mesoamerica & Andes)', region: 'The Americas' },
  { id: 'grecoroman', name: 'Classical Greece & Rome (Polis & Imperium)', region: 'Mediterranean Basin' },
  { id: 'persia', name: 'Persian Empire (Achaemenid & Sasanian)', region: 'Iranian Plateau & Near East' },
  { id: 'phoenicia', name: 'Phoenicia & Carthage (Maritime Thalassocracy)', region: 'Levant & Western Mediterranean' },
  { id: 'africa', name: 'Sub-Saharan African Kingdoms (Kush, Aksum, Nok & Great Zimbabwe)', region: 'Nile Cataracts, Savanna & Swahili Coast' },
  { id: 'steppe', name: 'Eurasian Steppe Confederations (Scythians, Xiongnu & Royal Nomads)', region: 'Central Asian Grasslands & Altai Mountains' },
  { id: 'oceania', name: 'Austronesian & Polynesian Voyagers (Lapita, Tonga & Rapa Nui)', region: 'Pacific Ocean Archipelagos' },
  { id: 'north_america', name: 'Pre-Columbian North America (Mississippian Cahokia & Ancestral Puebloans)', region: 'Mississippi Basin & Colorado Plateau' },
  { id: 'custom', name: 'Custom / Synthetic Historical Hybrid', region: 'Imagined Ancient World' }
];

export const GRAPES_CATEGORIES = [
  {
    key: 'G',
    name: 'Geography',
    subtitle: 'Environment, Resources & Natural Defenses',
    buildStep: 1,
    icon: 'Mountain',
    color: '#855827',
    badgeBg: '#f2e8d7',
    borderCol: '#c8ad8d',
    whyItMatters: 'Step 1: The Foundation! In 7th grade history, we learn that geography comes first because you cannot build a city until you find drinking water, good soil to grow food, and natural barriers to protect your people.',
    description: 'The physical land, rivers, rocks, trees, and weather that shape how your people survive and adapt.'
  },
  {
    key: 'E',
    name: 'Economy',
    subtitle: 'Food, Animals, Trade & Money',
    buildStep: 2,
    icon: 'Coins',
    color: '#2b6540',
    badgeBg: '#ddede2',
    borderCol: '#93c2a3',
    whyItMatters: 'Step 2: Feeding & Funding! Once you pick your land, your people need to eat! What crops grow in your soil? What animals pull your plows? How do merchants trade and pay taxes?',
    description: 'How your civilization feeds its people, produces goods, trades with foreign neighbors, and collects taxes.'
  },
  {
    key: 'P',
    name: 'Politics',
    subtitle: 'Leaders, Laws, War & Empire',
    buildStep: 3,
    icon: 'Shield',
    color: '#5a3d7a',
    badgeBg: '#ede4f5',
    borderCol: '#bfa7d6',
    whyItMatters: 'Step 3: Power & Law! When thousands of people live together in towns, who makes the rules? Who commands the army when enemies attack? How are thieves punished?',
    description: 'Who holds supreme power, how kings or councils govern, how laws are enforced, and how the military defends borders.'
  },
  {
    key: 'S',
    name: 'Social Structure',
    subtitle: 'The Social Pyramid & Daily Life',
    buildStep: 4,
    icon: 'Users',
    color: '#8a4b16',
    badgeBg: '#f5e8dc',
    borderCol: '#d1a88a',
    whyItMatters: 'Step 4: Who Is on Top? Ancient societies were shaped like a pyramid. The king or priest was at the top, scribes and merchants were in the middle, and farmers or enslaved people were at the bottom.',
    description: 'The social classes, who has the most respect, whether poor kids can move up, and the legal rights of women.'
  },
  {
    key: 'R',
    name: 'Religion',
    subtitle: 'Gods, Beliefs, Rituals & the Afterlife',
    buildStep: 5,
    icon: 'Flame',
    color: '#983726',
    badgeBg: '#f7e4df',
    borderCol: '#d99d91',
    whyItMatters: 'Step 5: Explaining the World! Ancient people did not have modern science. When rivers flooded or lightning struck, they believed the gods were speaking. Religion justified why kings had the right to rule.',
    description: 'How people understood the gods, what ceremonies they performed, what they believed happened after death, and how religion helped kings keep power.'
  },
  {
    key: 'A',
    name: 'Achievements',
    subtitle: 'Writing, Science, Monuments & Inventions',
    buildStep: 6,
    icon: 'Compass',
    color: '#21536b',
    badgeBg: '#dce8ef',
    borderCol: '#9bb8c7',
    whyItMatters: 'Step 6: Lasting Legacy! What will archaeologists dig up 3,000 years from now? Will they find massive stone pyramids, baked clay tablets with cuneiform, or giant aqueducts?',
    description: 'The greatest inventions, written scripts, building projects, and scientific breakthroughs left behind for history.'
  }
];


// =========================================================================
// 3-TIERED GRADE-LEVEL COMPLEXITY ENGINE (v4.0)
// =========================================================================

export const COMPLEXITY_MODES = [
  {
    id: 'basic',
    name: 'Basic',
    label: 'Grades 4–6',
    icon: '🌱',
    questionsCount: 12,
    optionsCount: 72,
    tagline: '12 Core Questions | Guided Auto-Synergies | Foundational Locks',
    description: 'Elementary Foundations: Focus on core geographic, economic, political, and cultural survival choices.'
  },
  {
    id: 'normal',
    name: 'Normal',
    label: 'Grades 7–8',
    icon: '🏛️',
    questionsCount: 31,
    optionsCount: 300,
    tagline: '31 Standard Questions | 300 Options | Standard Logic Guard',
    description: 'Standard Secondary Curriculum: Comprehensive coverage across all 6 G.R.A.P.E.S. domains.'
  },
  {
    id: 'complex',
    name: 'Complex',
    label: 'Grades 9–12 / AP',
    icon: '🎓',
    questionsCount: 37,
    optionsCount: 390,
    tagline: '37 Exhaustive Questions | 390 Options | Hardcore Fiscal, Demographic & Ecological Locks',
    description: 'Advanced Historiography: Deep institutional analysis including land tenure, intelligence networks, disease ecology, and environmental collapse.'
  }
];

export const BASIC_CORE_QUESTION_IDS = [
  'g2_terrain',
  'g1_freshwater',
  'e1_crops',
  'e5_trade',
  'p1_gov_system',
  'p4_military',
  's1_apex',
  's3_mobility',
  'r1_structure',
  'r4_afterlife',
  'a1_writing',
  'a3_monuments'
];

export const GRAPES_QUESTIONS = {
  G: [
    {
      id: "g2_terrain",
      number: "G1",
      title: "Dominant Terrain & Topography (Where do your people live?)",
      type: 'checkbox',
      category: "G",
      minComplexity: undefined,
      guidance: "Choose your land types. A City-State is confined to 1 local terrain, while a Grand Empire can span multiple biomes across continents!",
      grade7Tip: "Think about real history: Greece had rocky peninsulas and mountains (so they became sailors!), while Mesopotamia had flat river valleys (so they built huge mud-brick cities).",
      options: [
        "Flat, featureless alluvial floodplains (great for farming, terrible for defense)",
        "Steep, jagged mountain ranges (requires terrace farming, provides natural fortresses)",
        "Arid desert expanses surrounded by narrow fertile river strips",
        "Dense, humid tropical rainforest with thick canopy",
        "Rocky peninsula with jagged coastlines and hundreds of small islands (like Greece)",
        "High-altitude flat plateau (steppe) swept by strong winds",
        "Fertile volcanic caldera valleys with nutrient-rich soils and crater lakes (like the Valley of Mexico)",
        "Vast river delta marshlands and bayous intersected by tidal estuaries",
        "Elevated temperate highland savanna with fertile volcanic basalt plateaus and acacia woodlands (like the Ethiopian highlands / Kingdom of Aksum)",
        "Coastal fog oasis and hyper-arid desert scrub bordered by rich cold-water ocean upwelling currents (like the Peruvian coast / Caral & Paracas)",
        "Volcanic oceanic high islands and coral ring atolls surrounded by vast open ocean (like Polynesia / Tonga / Hawaii)",
        { text: "Sub-arctic boreal taiga and amber-rich Baltic coastline intersected by seasonal frozen rivers", minComplexity: 'complex' },
        { text: "Endorheic inland basin with terminal salt lakes and snow-fed piedmont alluvial fans (like the Tarim Basin / Sogdiana)", minComplexity: 'complex' }
      ]
    },
    {
      id: "g1_freshwater",
      number: "G2",
      title: "Primary Freshwater Source (How do your people get drinking & farm water?)",
      type: 'checkbox',
      category: "G",
      minComplexity: undefined,
      guidance: "Every ancient civilization needed fresh water. Without water, crops wither and everyone dies of thirst. How does your civilization get its water?",
      grade7Tip: "In Egypt, the Nile flooded gently at the exact same time every year, so farmers knew when to plant. In Mesopotamia, the Tigris and Euphrates flooded violently with no warning!",
      options: [
        "Predictable annual flooding river (like the Nile — leaves rich black silt, easy to plan around)",
        "Violent, unpredictable twin rivers (like the Tigris/Euphrates — requires heavy levee and canal work)",
        "Underground limestone sinkholes and aquifers (like Mayan cenotes — no surface rivers)",
        "High-altitude glacial mountain meltwater (like the Andes — cold, fast-flowing streams)",
        "Seasonal monsoon rains and rainwater harvesting reservoirs (like the Indus/Khmer)",
        "Oasis springs scattered across an arid desert plateau",
        "Braided loess river basin prone to massive silt accumulation and devastating course shifts (like the Yellow River / Huang He)",
        "Karst subterranean river systems and highland limestone springs (like southwest China and the Balkans)",
        "Tropical crater caldera lakes and seasonal interconnected marshland lagoons (like Lake Texcoco and the Valley of Oaxaca)",
        "Desert flash-flood wadis managed through dry-river canyon dams and terraced retention basins (like Nabataea / Petra)",
        "Basalt island freshwater lenses, volcanic crater springs, and coconut/breadfruit water storage (like Pacific atolls and high islands)",
        { text: "Fossil groundwater artesian springs and deep desert depression oases (like the Siwa/Kharga Oases or Garamantes Foggaras)", minComplexity: 'complex' }
      ]
    },
    {
      id: "g3_barriers",
      number: "G3",
      title: "Natural Defensive Barriers (What protects your borders from invaders?)",
      type: 'checkbox',
      category: "G",
      minComplexity: undefined,
      guidance: "Select the geographic features that protect your land. If nature doesn’t protect you, you must build giant walls and keep a huge army ready at all times.",
      grade7Tip: "Ancient Egypt was protected by giant deserts on both sides and waterfalls (cataracts) in the south, so they went hundreds of years without being invaded! Mesopotamia had flat open plains, so they were constantly attacked.",
      options: [
        "Impassable, freezing mountain ranges blocking the border",
        "Vast, waterless deserts that starve invading armies before they arrive",
        "Treacherous rocky coastlines, reefs, and stormy seas",
        "Dense, disease-ridden jungles (malaria/venomous wildlife)",
        "Cataracts (shallow, boulder-filled river rapids that stop enemy boats)",
        "None — completely open flat plains requiring man-made walls and constant military vigilance",
        "Deep river chasms and impassable canyon gorges crossed only by suspension bridges",
        "Expansive swamps and treacherous mangrove flats that swallow heavy supply wagons and cavalry",
        "Uncharted offshore open ocean expanses requiring advanced celestial wayfinding to cross (island sanctuary isolation)",
        "Towering vertical sandstone cliffs and slot canyon gorges with hidden bottleneck canyon entrances (the Siq of Petra)"
      ]
    },
    {
      id: "g4_resources",
      number: "G4",
      title: "Abundant Natural Resources (What useful materials does nature give you?)",
      type: 'checkbox',
      category: "G",
      minComplexity: undefined,
      guidance: "Select the raw materials abundant in your land. Note: High-grade iron ore was only discovered and smelted during the Iron Age (after 1200 BCE)!",
      grade7Tip: "The Sumerians had almost no stone or wood, so they made everything—even their school tablets and houses—out of river mud and clay! The Maya had sharp black volcanic glass (obsidian) for swords.",
      options: [
        "Rich alluvial clay and mud (for bricks, pottery, and writing tablets)",
        "Papyrus reeds, bamboo, or marsh plants (for paper, boats, and baskets)",
        "Quarried limestone, granite, or marble (for permanent monuments)",
        "Dense cedar, oak, or mahogany forests (for shipbuilding and palace roofs)",
        "Copper and tin deposits (for smelting bronze weapons and tools)",
        "High-grade iron ore (for superior armor and agricultural plows)",
        "Gold, silver, jade, or lapis lazuli (for luxury goods and religious idols)",
        "Obsidian (volcanic glass for razor-sharp blades and surgical tools)",
        "Natural bitumen and surface asphalt seeps (for caulking boats, water-sealing bricks, and embalming)",
        "Vast rock salt domes and coastal evaporation salterns (for meat/fish preservation and vital trade leverage)",
        "Wild silk cocoons and fine white mulberry groves (for imperial silk weaving and thread)",
        "Marine murex sea snail beds (for extracting prized royal Tyrian purple dye)",
        "Basalt, andesite, and diorite volcanic stones (for monumental carving and hard stone grinding tools)",
        { text: "Baltic amber, bog iron deposits, and dense sub-arctic fur pelts", minComplexity: 'complex' },
        { text: "Alluvial placer gold dust, ivory, and aromatic frankincense/myrrh resin groves (like Punt / Southern Arabia / Kush)", minComplexity: 'complex' },
        { text: "Cinnabar (mercury sulfide), kaolin porcelain clay, and lacquer-tree sap", minComplexity: 'complex' }
      ]
    },
    {
      id: "g5_shortages",
      number: "G5",
      title: "Critical Resource Shortages (What essential item are you MISSING?)",
      type: 'checkbox',
      category: "G",
      minComplexity: undefined,
      guidance: "No ancient civilization had everything. What crucial item did your people have to travel far away to trade for or conquer neighbors to get?",
      grade7Tip: "Egypt had plenty of gold and stone, but had almost no tall trees to build big cargo ships or palace roofs. They had to sail to Lebanon to buy giant cedar logs!",
      options: [
        "Lack of tall timber for shipbuilding and large roofs (like Egypt/Mesopotamia)",
        "Lack of hard stone or metal ores (only have mud and clay)",
        "Lack of arable farmland (too mountainous or rocky to grow enough grain)",
        "Lack of horses or pack animals for transport and cavalry",
        "Lack of salt for preserving meat and fish",
        "Lack of tin or alloy fluxes (crippling bronze tool and weapon manufacture unless sustained by maritime trade)",
        "Lack of fuel firewood and charcoal (forcing reliance on dried animal dung or severely limiting metal smelting)",
        "Lack of textile plant fibers or sheep wool (forcing reliance on animal skins, bark cloth, or expensive imports)",
        "Lack of domestic clay deposits for pottery (requiring carving wooden vessels, stone gourds, or importing ceramic ware)",
        { text: "Lack of draft-animal grazing pasture due to Tsetse fly trypanosomiasis belt (blocking horses and cattle in tropical woodland)", minComplexity: 'complex' }
      ]
    },
    {
      id: "g6_disasters",
      number: "G6",
      title: "Recurring Environmental Disasters (What natural danger threatens your people?)",
      type: 'checkbox',
      category: "G",
      minComplexity: undefined,
      guidance: "Select the environmental disasters that happen regularly. These disasters tested whether the king was doing his job and if the gods were angry!",
      grade7Tip: "In China, when giant floods broke the Yellow River dikes, people believed the gods had revoked the emperor’s \"Mandate of Heaven\" because he failed to protect the kingdom.",
      options: [
        "Catastrophic, unannounced river floods that wash away entire villages",
        "Multi-year severe droughts that dry up canals and cause famine",
        "Frequent tectonic earthquakes and volcanic eruptions",
        "Locust swarms and agricultural blights",
        "Monsoons, typhoons, or coastal tsunamis",
        "Soil salinization (over-irrigation making the soil too salty to grow crops)",
        "Encroaching desert sand dunes and hyper-arid dust storms suffocating frontier farmland",
        "Rapid silting of canal choke points and violent shifting of navigable river channels",
        "Sudden El Niño Southern Oscillation (ENSO) ocean temperature spikes triggering torrential desert deluge rains and collapsing marine fisheries",
        "Severe winter blizzards and permafrost frosts (dzud) freezing pasture grasslands and devastating herds of livestock",
        { text: "Zoonotic pandemic waves (bubonic/enteric plagues) arriving via international maritime and caravan trade hubs", minComplexity: 'complex' }
      ]
    },
    {
      id: "g7_settlement",
      number: "G7",
      title: "Settlement Morphology, Urban Density & Carrying Capacity",
      type: 'checkbox',
      category: "G",
      minComplexity: "complex",
      guidance: "How are human populations spatially distributed across your landscape, and what is your urban carrying capacity?",
      grade7Tip: "In ancient times, cities could not grow bigger than their water and food supply. Rome had 1 million people because of aqueducts and grain ships, while Maya cities were spread out into garden-cities!",
      options: [
        { text: "Hyper-Dense Walled Megacity Core (100,000–1,000,000+ inhabitants fed by radial canal and granary networks, like Rome, Chang'an, or Babylon)", minComplexity: 'complex' },
        { text: "Low-Density Tropical Urbanism (dispersed stone temple cores surrounded by sprawling forested garden-homesteads, like Classic Maya Tikal or Angkor)", minComplexity: 'complex' },
        { text: "Nucleated Tell-Mound Acropolis Towns (fortified high citadels overlooking tightly packed mud-brick residential quarters, like Sumerian Ur or Mycenae)", minComplexity: 'complex' },
        { text: "Mobile Seasonal Encampments / Ordu (portable felt yurts and wagon-cities shifting across summer alpine and winter steppe pastures)", minComplexity: 'complex' },
        { text: "Planned Orthogonal Grid-Cities with Zoned Artisan Quarters (standardized brick blocks, municipal drains, and no central palace, like Mohenjo-Daro)", minComplexity: 'complex' },
        { text: "Terraced Vertical Ridge-Citadels (high-altitude royal estates and administrative waystations perched on mountain saddles, like Machu Picchu)", minComplexity: 'complex' },
        { text: "Littoral Port Emporia & Island Thalassocracy Hubs (walled harbor promontories and artificial cothon islands focused on maritime warehousing, like Tyre or Carthage)", minComplexity: 'complex' },
        { text: "Oasis Ksar & Canyon Cliff-Cavern Settlements (defensible mud-brick fortresses or rock-cut canyon dwellings clustered around desert springs, like Petra or Mesa Verde)", minComplexity: 'complex' },
        { text: "River-Confluence Palisaded Mound Centers (ceremonial plaza earthworks surrounded by timber stockades and floodplain farm hamlets, like Cahokia)", minComplexity: 'complex' }
      ]
    }
  ],
  E: [
    {
      id: "e1_crops",
      number: "E1",
      title: "Staple Agricultural Crops (What food feeds your growing cities?)",
      type: 'checkbox',
      category: "E",
      minComplexity: undefined,
      guidance: "Pick your main crops. In ancient history, an empire is only as strong as its farmers. If crops fail, cities starve and empires collapse.",
      grade7Tip: "Mesopotamia and Egypt grew wheat and barley for bread and beer. Ancient China relied on rice and millet. In the Americas, indigenous farmers grew the \"Three Sisters\" (corn, beans, and squash together!).",
      options: [
        "Wheat and Barley (for bread, porridge, and brewing beer — standard in fertile crescents)",
        "Wet-paddy Rice and Millet (high-calorie crops supporting massive populations)",
        "Maize (Corn), Beans, and Squash (\"Three Sisters\" grown together symbiotically)",
        "Freeze-dried Potatoes (Chuño) and Quinoa (high-altitude mountain crops)",
        "Olives and Grapes (grown in rocky soil to press into high-value olive oil and wine for export)",
        "Date Palms and Figs (drought-resistant sweet staples producing timber, fibers, and wine in desert oases)",
        "Sorghum, Yams, and Teff (heat-tolerant grains cultivated along tropical and savannah river courses)",
        "Cotton and Flax / Linseed (fibers for high-volume textile industries, sails, and oil presses)",
        "Taro, Yams, and Breadfruit (starchy root and tree staples cultivated on volcanic terraces and wetland ponds)",
        "Pastoral Transhumance & Herd Grazing (minimal grain farming; diet of roasted meat, fermented mare's milk [kumis], cheese, and wild steppe grains)",
        { text: "Ensete ('False Banana'), Coffee, and Finger Millet (drought-resilient perennial highland staples)", minComplexity: 'complex' },
        { text: "Rye, Oats, and Hemp (cold-hardy northern grains and fiber crops suited to short frost-prone summers)", minComplexity: 'complex' }
      ]
    },
    {
      id: "e2_animals",
      number: "E2",
      title: "Domesticated Animals (Which animals help your people work, eat, or travel?)",
      type: 'checkbox',
      category: "E",
      minComplexity: undefined,
      guidance: "Domesticated animals gave ancient people meat, milk, wool, leather, and muscles to pull heavy wagons and plows.",
      grade7Tip: "In the Americas, the Maya and Aztecs had NO horses, oxen, or cows! Everything had to be carried on the backs of human porters or by canoe. In the Andes, the Inca used llamas.",
      options: [
        "Oxen and Water Buffalo (heavy draft animals for pulling plows and wagons)",
        "Sheep and Goats (for wool, milk, cheese, and leather in rocky terrain)",
        "Horses and Camels (for aristocratic cavalry, messengers, and desert caravan trade)",
        "Llamas and Alpacas (light pack animals and source of warm mountain wool; no heavy wheeled carts)",
        "None — all goods are carried on the backs of human porters and canoes (like the Maya/Aztec)",
        "Donkeys and Mules (sure-footed pack equines carrying bulky freight through mountain passes)",
        "War Hounds and Herding Dogs (bred for guarding storehouses, palace security, and battlefield support)",
        "Domesticated Dromedary & Bactrian Camels (enduring desert caravanners able to carry 400 lbs across waterless sand for a week)",
        "Asian War Elephants & Work Elephants (trained for heavy logging, clearing jungle tracks, and terrifying battlefield shock)",
        "Vast Herds of Sanga & Zebu Cattle (walking banks of wealth, milk, blood, leather, and royal bride-price prestige)",
        "Domesticated Pacific Pigs, Red Jungle Fowl (Chickens), and Poi Dogs (transported across oceans in voyaging canoes)",
        { text: "Reindeer and Cold-Weather Steppe Ponies (adapted for sub-arctic tundra and deep winter snow mobility)", minComplexity: 'complex' }
      ]
    },
    {
      id: "e5_trade",
      number: "E3",
      title: "Trade Networks & Exports (How do your merchants trade with foreign nations?)",
      type: 'checkbox',
      category: "E",
      minComplexity: undefined,
      guidance: "No ancient society could survive alone. How did your merchants move goods to trade for resources your land was missing?",
      grade7Tip: "The Phoenicians built famous merchant ships that sailed all across the Mediterranean Sea. The Chinese traveled the famous overland Silk Road across deserts and mountains.",
      options: [
        "Maritime Trade Empire (merchant fleets sailing across seas to establish trading colonies)",
        "Overland Silk/Incense Caravan Routes (long-distance relay trade across deserts and mountains)",
        "Riverine Network (barges floating downriver with stone/grain and sailing back upriver using wind)",
        "Self-Sufficient Command Economy (foreign trade is banned or strictly controlled by royal agents; everything needed is produced internally)",
        "Vertical Archipelago Exchange (highland and lowland ecological tiers swapping mountain tubers/wool for coastal fish and valley cotton)",
        "Monsoon Indian Ocean Coastal & Open-Sea Dhow Trade (navigating biannual monsoon winds between Africa, Arabia, and India)",
        "Trans-Saharan Gold-Salt Trade (caravans crossing vast sand seas connecting savannah goldfields with coastal salt domes)",
        "Continental River-Confluence Canoe Networks (trading copper plates, mica, lightning-whelk shells, and furs across thousands of miles of rivers)",
        { text: "Armed Sovereign Chartered Merchant Karums (autonomous foreign merchant colonies operating extraterritorial courts inside host kingdoms, like Assyrian Kanesh)", minComplexity: 'complex' },
        { text: "Amber & Fur Boreal River Portage Routes (linking northern forests to Mediterranean and Black Sea markets)", minComplexity: 'complex' }
      ]
    },
    {
      id: "e3_currency",
      number: "E4",
      title: "Medium of Exchange / Currency (How do people pay for goods?)",
      type: 'checkbox',
      category: "E",
      minComplexity: undefined,
      guidance: "Stamped coins were not invented until around 600 BCE in Lydia! In the Bronze Age, ancient people used barter, weighed silver bullion, or state grain rations.",
      grade7Tip: "In ancient Egypt, workers building the pyramids were paid in daily rations of bread, beer, and onions from the pharaoh’s royal granary! The Maya used cacao beans (chocolate!) like dollar bills.",
      options: [
        "Standardized Stamped Coins (electrum, gold, silver, or bronze coins guaranteed by the state)",
        "Weighed Metal Bullion (chopping silver rings or copper ingots and weighing them on scales for every purchase)",
        "Commodity Money (cacao beans, cowrie shells, salt blocks, or bolts of silk used as cash)",
        "State Grain Redistribution (no money; all farmers give crops to the temple/palace, which hands out daily rations of bread and beer)",
        "Pure Barter & Credit Tallies (trading goods directly or keeping tabs on clay tablets)",
        "Cast Bronze Tool Money (currency cast in the shape of miniature spade blades, knives, or rings)",
        "Bolts of Woven Silk and Standardized Spun Yarn Skeins (used alongside copper cash for official payments and international tribute)",
        "Steatite Inscribed Merchant Seals and Clay Envelope Bullae (merchant authentication counters certifying token transactions)",
        "Wampum Shell Belts, Hammered Copper Plates, and Ceremonial Gift Redistribution (Potlatch / Calumet diplomacy)",
        "Cattle & Livestock Wealth Standard (fines, taxes, royal tribute, and marriage alliances paid in live heads of cattle)",
        { text: "Clay/Leather Promissory Notes & State Flying-Cash Bills (early credit instruments and proto-paper deposit certificates)", minComplexity: 'complex' },
        { text: "Iron Spit Rods (Obols), Copper Cross Ingots (Katanga), and Manilla Bronze Bracelets", minComplexity: 'complex' }
      ]
    },
    {
      id: "e4_taxation",
      number: "E5",
      title: "Primary Method of Taxation (How does the government get funds & labor?)",
      type: 'checkbox',
      category: "E",
      minComplexity: undefined,
      guidance: "Kings and emperors needed wealth to pay for palaces, walls, and soldier food. How did the government extract wealth from regular people?",
      grade7Tip: "Ancient governments rarely collected cash. Under the \"Corvée\" labor system, regular farmers were forced to work for 2 months every year digging canals or hauling pyramid stones!",
      options: [
        "Agricultural Tithe (tax collectors measure field sizes after floods and take 10% to 30% of the harvest)",
        "Corvée Labor System (every peasant family owes 2 months of physical labor per year digging canals or building pyramids during the off-season)",
        "Customs Duties & Trade Tariffs (taxing merchant ships at harbors and caravans at city gates)",
        "State Monopolies (the government owns all salt, iron, and mines; citizens must buy from the state)",
        "Tribute from Conquered Provinces (citizens pay zero taxes because conquered neighbors fund the empire)",
        "Head Tax / Poll Tax (mandatory annual flat tax levied in silver or cloth upon every adult citizen)",
        "Reciprocal Mit'a Labor Service (rotational community work quotas on royal terraces and storehouses in exchange for state festival feasts)",
        "Transit Tolls and Mountain Pass / Bridge Fees (extracting silver and goods from foreign caravans traversing strategic choke points)",
        { text: "Tax Farming Syndicates (Publicani — private investor corporations bidding at auction for the right to collect provincial taxes for a profit)", minComplexity: 'complex' },
        { text: "Liturgical Wealth Sponsorship (Chorēgia / Trierarchy — the richest citizens are legally required to personally fund one warship or public festival per year)", minComplexity: 'complex' }
      ]
    },
    {
      id: "e6_property_land",
      number: "E6",
      title: "Land Tenure, Property Law & Agrarian Surplus Extraction",
      type: 'checkbox',
      category: "E",
      minComplexity: "complex",
      guidance: "Who legally owns the farmland, and how are agricultural surpluses extracted from the peasantry?",
      grade7Tip: "Who owns the dirt? In Egypt and Mesopotamia, the god or king owned the land. In Rome, rich senators bought giant slave estates called latifundia!",
      options: [
        { text: "Royal & Temple Domain Monopoly (all land belongs to the God-King or Temple; peasants are state tenants receiving seed and ration allowances)", minComplexity: 'complex' },
        { text: "Latifundia / Aristocratic Slave Estates (vast private plantations owned by senators/nobles and worked by chained chattel slaves, squeezing out small farmers)", minComplexity: 'complex' },
        { text: "Equal-Field State Allotment System (Juntian — state periodically redistributes farmland to peasant households based on family size to prevent noble land-grabs)", minComplexity: 'complex' },
        { text: "Communal Kinship Ayllu / Calpulli Landholding (land is owned collectively by ancestral clans and worked reciprocally; cannot be bought or sold privately)", minComplexity: 'complex' },
        { text: "Private Freehold Smallholder Yeomanry (independent citizen-farmers own private family plots alienable by written contract and mortgage)", minComplexity: 'complex' },
        { text: "Sacred Pastorate & Common Grazing Ranges (waterholes and seasonal pastures held in collective tribal trust, regulated by clan elders)", minComplexity: 'complex' },
        { text: "Military Cleruchy / Timar Land Grants (conquered arable land parcelled out to veteran soldiers and heavy cavalrymen in exchange for hereditary military service)", minComplexity: 'complex' },
        { text: "Debt-Bondage Sharecropping Estates (landless tenant farmers surrender 50–80% of their harvest to wealthy urban creditors)", minComplexity: 'complex' },
        { text: "Sacred Ecological Commons (reef lagoons, taro terraces, and forest groves managed by hereditary chiefs under seasonal ritual harvesting taboos)", minComplexity: 'complex' }
      ]
    }
  ],
  P: [
    {
      id: "p1_gov_system",
      number: "P1",
      title: "System of Government (Who holds supreme political power?)",
      type: 'checkbox',
      category: "P",
      minComplexity: undefined,
      guidance: "Who makes the ultimate decisions in your society? Note: Direct democracy only works on small city-state scales, while continental empires require provincial administration.",
      grade7Tip: "In Athens, free male citizens voted on every single law in a direct democracy. In Sparta, a military council and two kings ruled. In Egypt, the Pharaoh held total absolute power.",
      options: [
        "Centralized Absolute Monarchy (one King/Emperor holds total power over a unified empire)",
        "Decentralized City-States (dozens of independent cities with the same culture that constantly war with each other)",
        "Aristocratic Oligarchy / Republic (ruled by a Senate or Council of wealthy landowning families)",
        "Direct Democracy (all free adult male citizens vote directly on laws and wars in a public assembly)",
        "Military Junta / Stratocracy (ruled by warrior-kings and a council of top generals)",
        "Feudal Bureaucracy (Emperor rules through appointed governors or regional lords who collect taxes)",
        "Maritime Thalassocracy (naval confederation where autonomous coastal port cities contribute galleys and maritime tribute)",
        "Diarchy (two co-equal hereditary kings balancing civil domestic duties and active wartime command)",
        "Confederated Tribal League / Amphictyony (council of autonomous clans or regional delegates united around a shared religious sanctuary)",
        "Egalitarian Civic Council of Merchant-Artisan Guilds (collective urban governance with no grand royal palaces, like the Indus cities)",
        "Nomadic Steppe Imperial Confederacy (mobile royal court unifying dozens of horse-riding clans under a supreme Chanyu or Khagan)",
        { text: "Dual Sacred-Secular Khaganate (a sacral celestial ruler paired with an active executive war-leader governing left and right wings of the empire)", minComplexity: 'complex' }
      ]
    },
    {
      id: "p2_succession",
      number: "P2",
      title: "Succession & Transfer of Power (When the ruler dies, who takes over?)",
      type: 'checkbox',
      category: "P",
      minComplexity: undefined,
      guidance: "The most dangerous time in an ancient kingdom was when the king died! If rules were not clear, brothers and generals fought bloody civil wars.",
      grade7Tip: "China developed the \"Mandate of Heaven\": if an emperor became corrupt, the gods allowed people to rebel and start a new dynasty. Rome had adopted succession during its golden era.",
      options: [
        "Hereditary Primogeniture (passes strictly to the eldest son or royal bloodline)",
        "Mandate of Heaven / Dynastic Cycle (ruling family stays in power until floods/famines prove the gods revoked their right to rule, justifying rebellion)",
        "Election by Citizen Assembly or Noble Council (term limits or life appointments via vote)",
        "Meritocratic Civil Service Exams (officials are chosen by passing brutal written tests on law and philosophy)",
        "Trial by Strength / Palace Intrigue (when the king dies, royal brothers fight a civil war until one survives)",
        "Adoption of the Best Man (ruler selects and adopts the most competent commander or statesman as rightful imperial heir)",
        "Tanistry / Kurultai Council (hereditary noble tribal assembly choosing the most battle-tested prince from the royal clan)",
        "Matrilineal Royal Succession (throne passes to the son of the king's sister, or is shared by the queen mother / Kandake)",
        "Oracular Divination and Clerical Lot Casting (high priests consult temple lot urns or divine omens to confirm the god's chosen monarch)",
        { text: "Porphyrogeniture ('Born in the Purple' — succession restricted to children born after the reigning monarch ascended the sacred throne)", minComplexity: 'complex' },
        { text: "Co-Regency & Shared Imperial Collegium (Tetrarchy / Coregency — senior ruler crowns junior successor decades before death to prevent civil war)", minComplexity: 'complex' }
      ]
    },
    {
      id: "p3_law_system",
      number: "P3",
      title: "Legal Code & Justice System (How are laws enforced and crimes punished?)",
      type: 'checkbox',
      category: "P",
      minComplexity: undefined,
      guidance: "How does your society keep people from taking revenge into their own hands? Are punishments equal for everyone, or do nobles get treated better than peasants?",
      grade7Tip: "Hammurabi’s Code was carved onto an 8-foot black stone pillar so everyone could see it. It introduced \"an eye for an eye,\" but nobles paid smaller fines if they harmed a poor slave!",
      options: [
        "Written Public Law Pillars (like Hammurabi's Code — carved in stone in the town square so no judge can make up rules)",
        "Lex Talionis (\"Eye for an Eye\" — literal physical retaliation for crimes among equals)",
        "Social-Class Tiered Punishments (a noble who injures a peasant pays a small silver fine; a peasant who injures a noble is executed)",
        "Legalism (strict, harsh collective punishment — if one person breaks the law, their whole family or neighborhood is punished)",
        "Jury Trials & Restorative Justice (large citizen juries vote on guilt; focus on fines, debt forgiveness, or ostracism/exile)",
        "Trial by Ordeal (accused is thrown into a sacred river; if they sink, the river god rejects them as guilty)",
        "Codified Civil Jurisprudence with written contracts, professional advocates, and legal precedents (Roman civil law tradition)",
        "Elders' Oral Customary Law (unwritten ancestral precedents, kinship compensation wergild fines, and sacred taboo prohibitions)",
        "Sumptuary Regulations and Ritual Propriety (Confucian Li — enforcing social order through strict codes of clothing, ceremonial deference, and moral education)",
        "Sacred Kapu / Tapu Ecological & Social Taboo Code (strict spiritual laws regulating fishing seasons, resource conservation, and chief conduct)",
        { text: "Dual Ethnic Legal Pluralism (conquered subjects are judged by their own traditional local laws, while imperial citizens are judged by supreme state law)", minComplexity: 'complex' }
      ]
    },
    {
      id: "p4_military",
      number: "P4",
      title: "Military Organization & Doctrines (How does your army fight?)",
      type: 'checkbox',
      category: "P",
      minComplexity: undefined,
      guidance: "Select your military branches and fighting tactics. Note: War chariots require horses and open plains, while navies require coastlines!",
      grade7Tip: "Greek hoplites locked their shields together into an unbreakable human tank called a \"phalanx\". The Assyrians were masters of siege warfare with giant battering rams.",
      options: [
        "Seasonal Peasant Levy (farmers are drafted after harvest season, given spears, and sent to fight)",
        "Permanent Professional Standing Army (full-time paid soldiers who train year-round)",
        "Elite Chariot Corps (two-wheeled horse-drawn platforms with composite bow archers)",
        "Heavy Infantry Phalanx (wall of overlapping bronze shields and 18-foot pikes)",
        "Siege Warfare Specialists (battering rams, siege towers, sappers digging under walls, catapults)",
        "Naval Supremacy (trireme warships with bronze battering rams dominating sea lanes)",
        "Psychological Terror (flaying rebel leaders and building pyramids of skulls so cities surrender without fighting)",
        "Horse Archer Light Cavalry (highly mobile skirmishers employing the feigned retreat and Parthian shot)",
        "Armored War Elephant Corps (massive beasts bred for battlefield shock, breaking enemy infantry lines and terrifying cavalry)",
        "Disciplined Crossbow Phalanxes & Volley Formations (massed rank-and-file archers firing mechanical bronze-triggered crossbows)",
        "Guerilla Mountain Skirmishers & Slinger Corps (highly mobile highland troops using lead slingshots, darts, and ambush tactics)",
        "Outrigger War Canoes & Amphibious Shock Warriors (fast double-hulled vessels carrying warriors armed with shark-tooth clubs and hardwood spears)",
        { text: "Cataphract Super-Heavy Shock Cavalry (both rider and warhorse encased in full scale or lamellar iron armor charging with two-handed kontos lances)", minComplexity: 'complex' },
        { text: "Combined-Arms Macedonian Pike & Companion Cavalry Hammer-and-Anvil Doctrine", minComplexity: 'complex' },
        { text: "Incendiary Naphtha / Greek Fire Siphons and Fortified Riverine Monitor Fleets", minComplexity: 'complex' }
      ]
    },
    {
      id: "p5_foreign_policy",
      number: "P5",
      title: "Foreign Policy & How Conquered Peoples Are Treated (How do you rule subjects?)",
      type: 'checkbox',
      category: "P",
      minComplexity: undefined,
      guidance: "After you win a war, how do you treat the conquered people? Do you let them keep their religion, make them citizens, or enslave them all?",
      grade7Tip: "Persia’s Cyrus the Great let conquered people keep their own languages and religions. The Assyrians, on the other hand, forced entire conquered populations to march across the empire so they couldn’t revolt!",
      options: [
        "Mass Deportation & Assimilation (relocating conquered populations across the empire so they can't rebel)",
        "Tributary Vassals (local kings keep their thrones and religions as long as they pay annual gold/grain tribute)",
        "Cultural Integration & Citizenship (conquered elites are granted citizenship, roads, and trade benefits)",
        "Isolationism (building walls and closing borders; viewing all outsiders as uncivilized barbarians)",
        "Total Enslavement & Extraction (razing enemy cities and turning the entire population into state laborers)",
        "Satrapy Provincial Administration (regional autonomy, local religious tolerance, and royal governors connected by imperial post roads)",
        "Strategic Royal Marriage Alliances & Client Royal Hostages (exchanging princesses and raising conquered kings' sons in the imperial palace)",
        "Establishment of Armed Commercial Enclaves & Frontier Garrison Colonies (planting veteran soldier-colonists to guard borders and extract raw materials)",
        { text: "Divide-and-Rule Barbarian Foederati Subsidies (paying one frontier tribe in gold and titles to fight other frontier tribes)", minComplexity: 'complex' }
      ]
    },
    {
      id: "p6_intelligence_bureaucracy",
      number: "P6",
      title: "State Intelligence, Surveillance, Census & Diplomatic Logistics",
      type: 'checkbox',
      category: "P",
      minComplexity: "complex",
      guidance: "How does the central state monitor its population, prevent provincial rebellions, and project power across distance?",
      grade7Tip: "How did the Persian King know if a governor was plotting a rebellion? He created the 'King's Eyes and Ears'—royal inspectors with fast horse couriers!",
      options: [
        { text: "Imperial Courier Relay Highways & Secret Inspectors ('King's Eyes and Ears' — horse relay stations every 15 miles with royal spies auditing satraps)", minComplexity: 'complex' },
        { text: "Household Registration & Mutual Surveillance Groups (Baojia / Shang Yang system — families grouped into units of 5 or 10 sharing collective guilt for crimes)", minComplexity: 'complex' },
        { text: "Quipu Statistical Census & Royal Warehouse Audits (Chasqui foot-runners delivering knotted demographic and granary ledgers along mountain roads)", minComplexity: 'complex' },
        { text: "Temple Oracle Networks & Astrological Intelligence (priests across cities report omens, grain prices, and political gossip to the sacred capital)", minComplexity: 'complex' },
        { text: "Citizen Ostracism & Public Informer Courts (Sycos / Graphē — citizens vote to exile overly ambitious demagogues for 10 years to prevent tyranny)", minComplexity: 'complex' },
        { text: "Diplomatic Gift-Exchange & Cuneiform Archive Brotherhood (Amarna-style royal correspondence in diplomatic lingua franca accompanied by gold and chariot gifts)", minComplexity: 'complex' },
        { text: "Cryptographic Scytale Ciphers & Secret Military Police (Krypteia — covert youth squads surveilling subject serf populations and eliminating rebel leaders)", minComplexity: 'complex' },
        { text: "Decentralized Kinship Heralds & Oral Treaty Belts (clans coordinate war and peace via sacred wampum belts, calumet pipes, or bardic envoys)", minComplexity: 'complex' },
        { text: "Maritime Merchant Consul & Harbor Espionage Network (commercial guild agents in foreign ports reporting naval movements and grain market shifts)", minComplexity: 'complex' }
      ]
    }
  ],
  S: [
    {
      id: "s1_apex",
      number: "S1",
      title: "The Ruling Apex (Who sits at the very top of the social pyramid?)",
      type: 'checkbox',
      category: "S",
      minComplexity: undefined,
      guidance: "In 7th grade history social pyramids, one small group always stood at the very peak. Who wields the greatest wealth and power in your civilization?",
      grade7Tip: "In Egypt, the Pharaoh was seen as a living god. In Mesopotamia, Priest-Kings ruled from giant ziggurat temples. In Rome, wealthy patrician landowners controlled the Senate.",
      options: [
        "The God-King and Royal Dynasty (untouchable divine bloodline)",
        "Priest-Kings and Temple High Priests (mediators between gods and humans)",
        "Landowning Warrior Aristocracy / Patricians (noble families who control the cavalry and estates)",
        "Philosopher-Bureaucrats / Mandarins (scholars who passed the imperial exams)",
        "Plutocratic Merchant Oligarchy (hereditary merchant dynasties controlling shipping guilds and private banks)",
        "Dual Monarchs (co-ruling royal lineages balancing judicial administration and martial command)",
        "Matriarchal Clan Mothers & Queen Mothers (venerable matriarchs who control land titles, confirm monarch selection, and oversee ancestral rites)",
        "Sacred Shaman-Kings and Oracle Astrologers (rulers whose supreme authority derives from trance communication with supernatural cosmic realms)",
        { text: "Eunuch Chamberlains & Inner-Palace Consort Clans (court insiders controlling access to the secluded monarch and checking the power of noble literati)", minComplexity: 'complex' }
      ]
    },
    {
      id: "s2_middle",
      number: "S2",
      title: "The Middle Class & Specialized Artisans (Who is the most respected middle tier?)",
      type: 'checkbox',
      category: "S",
      minComplexity: undefined,
      guidance: "Civilizations need educated and skilled specialists between the rulers and the peasant farmers. Who is most respected in your society’s middle tier?",
      grade7Tip: "In ancient Egypt and Sumer, scribes were treated like celebrities because less than 2% of people could read or write! In China, hardworking peasant farmers were respected, while merchants were looked down on as greedy.",
      options: [
        "Scribes and Record-Keepers (highly respected because fewer than 2% of people can read/write)",
        "Master Craftsmen & Metallurgists (stonemasons, bronze-smiths, jewelers)",
        "Long-Distance Merchants (wealthy traders who risk their lives on caravans and ships)",
        "Free Smallholder Farmers (seen as the virtuous backbone of society and the military, while merchants are looked down on as greedy parasites)",
        "Astronomer-Physicians and Master Herbalists (keepers of sacred calendars, medicine, and temple engineering)",
        "Naval Navigators and Master Shipwrights (commanding extraordinary maritime prestige and guild privileges)",
        "Civil Engineers, Hydraulic Architects, and Quarry Masters (highly privileged master builders who design aqueducts, walls, and canals)",
        "Master Weavers, Silk Cultivators, and Textile Guild Masters (commanding high economic status by managing luxury cloth and dye workshops)",
        "Hereditary Griots, Praise-Singers, and Oral Genealogists (living libraries who memorize centuries of royal law, history, and music)",
        { text: "Tax-Exempt Monastic / Temple Estates and Scholar-Monks (autonomous religious orders controlling vast libraries, mills, and granaries)", minComplexity: 'complex' }
      ]
    },
    {
      id: "s3_mobility",
      number: "S3",
      title: "Social Mobility (Can a poor kid work hard and move up in class?)",
      type: 'checkbox',
      category: "S",
      minComplexity: undefined,
      guidance: "In some ancient lands, you were stuck in the exact job and caste your parents were born into. In others, you could climb the ladder through school or bravery.",
      grade7Tip: "Ancient India had a strict Caste System where you could not change your social class during your lifetime. In Imperial China, any boy who studied hard and passed the imperial exam could become a powerful government official!",
      options: [
        "Rigid Hereditary Caste System (zero mobility; you must marry and work in the exact caste your parents were born into)",
        "Scribal / Exam Mobility (anyone who manages to learn to read/write or pass state exams can become a rich official)",
        "Military Valor (a peasant who captures an enemy commander or shows bravery in battle is rewarded with land and noble status)",
        "Wealth-Based Mobility (class is determined purely by property/income; if a merchant gets rich enough, they move up a tier)",
        "Temple Priesthood Ordination (any free citizen initiated into the mystery rites or temple orders can elevate their family's rank)",
        "Imperial Manumission & Patronage (freed former slaves and devoted clients rising through imperial administrative favor)",
        "Ritual Athletic & Sacrificial Prowess (exceptional champions in sacred ballgames, wrestling games, or gladiator arenas granted noble honors)",
        "Craft Guild Mastery & Secret Technical Apprenticeship (initiates who master closely guarded metallurgical or architectural secrets)",
        { text: "Venality of Office & Equestrian Tax-Farming Wealth (buying noble titles or senatorial rank through state fiscal service)", minComplexity: 'complex' }
      ]
    },
    {
      id: "s4_gender",
      number: "S4",
      title: "Gender Roles & Legal Status of Women (What rights and jobs do women have?)",
      type: 'checkbox',
      category: "S",
      minComplexity: undefined,
      guidance: "How were women treated under the law? Could women own property, run businesses, become rulers, or were they legally controlled by male relatives?",
      grade7Tip: "Egyptian women enjoyed huge legal rights—they could buy land, run businesses, divorce bad husbands, and even rule as Pharaoh (like Hatshepsut and Cleopatra!). In Athens, women were kept indoors and could not own property.",
      options: [
        "Strict Patriarchal Seclusion (women are legally minors owned by fathers/husbands, kept indoors, cannot own land)",
        "High Legal Autonomy (like Ancient Egypt — women can own property, initiate divorce, sign contracts, run businesses, and even rule as Pharaoh)",
        "Militarized Matriarchal Autonomy (like Sparta — while men live in barracks, women manage all estates, inherit wealth, and train physically)",
        "Religious & Economic Influence (men hold political office, but women serve as powerful High Priestesses, healers, and market textile merchants)",
        "Gender Parallelism & Complementary Authority (distinct but equal civic, agricultural, and spiritual spheres of authority for women and men)",
        "Matrilineal Clan Inheritance & Economic Primacy (lineage, house ownership, and farmland pass through mothers; husbands move into wife's clan)",
        "Dual-Sex Governance with Female Co-Rulers (independent women's assemblies and warrior queens holding constitutional veto power alongside kings)",
        { text: "Sacred Virgin Priestess Orders (Vestals / God's Wives of Amun / Acllas — elite celibate women wielding immense financial, legal, and political immunity)", minComplexity: 'complex' }
      ]
    },
    {
      id: "s5_unfree_labor",
      number: "S5",
      title: "The Bottom Tier & Unfree Labor (Who does the hardest, unpaid labor?)",
      type: 'checkbox',
      category: "S",
      minComplexity: undefined,
      guidance: "At the bottom of ancient social pyramids were unfree workers. How did your civilization extract the dangerous labor needed for mines and heavy construction?",
      grade7Tip: "Popular movies show slaves building the Egyptian pyramids, but archaeologists discovered the builders were actually proud, well-fed free Egyptian workers who ate meat and drank beer! In Sparta, enslaved locals called \"Helots\" farmed for the Spartans.",
      options: [
        "Prisoners of War & Chattel Slavery (captured enemies become permanent property working in state silver mines, galleys, and estates)",
        "Temporary Debt Bondage (citizens who can't pay taxes work as servants for 3 to 7 years, then must legally be freed)",
        "State Serfs / Helots (conquered locals tied permanently to the land who farm for the ruling warrior class and frequently revolt)",
        "Paid Free Laborers Only (monuments are built by proud, well-fed peasant crews paid in meat, beer, grain, and tax exemptions)",
        "Imperial State Slaves & Palace Bureaucrats (unfree royal servants who nonetheless wield immense administrative power over free subjects)",
        "Ritual War Captives (captives reserved exclusively for temple construction, ritual ballgames, and seasonal blood sacrifices)",
        "Penal Convict Labor Crews (criminals and political dissidents sentenced to brutal hard labor in state iron mines and remote frontier wall construction)",
        "Temple Oblates and Sacred Dedicatees (families pledged to perpetual temple service as brewers, weavers, and agricultural tenders for the gods)",
        { text: "Mamluk / Janissary Elite Slave-Soldiers (foreign youths acquired as unfree dependents and trained as an elite, privileged military caste)", minComplexity: 'complex' }
      ]
    },
    {
      id: "s6_demographics_health",
      number: "S6",
      title: "Disease Ecology, Sanitation, Public Health & Demographic Pressures",
      type: 'checkbox',
      category: "S",
      minComplexity: "complex",
      guidance: "How does your civilization manage crowd diseases, urban waste, waterborne pathogens, and demographic shocks?",
      grade7Tip: "When ancient people crowded into cities, dirty water spread cholera and living with cattle created smallpox. Rome built sewers, while China built granaries for famine relief!",
      options: [
        { text: "Municipal Hydraulic Flush Sewers, Lead/Terracotta Piping & Public Thermae (Cloaca Maxima-style waste removal reducing waterborne cholera/dysentery)", minComplexity: 'complex' },
        { text: "High-Density Zoonotic Crowd-Disease Endemicity (living alongside cattle, pigs, and dense trade routes breeds smallpox/measles immunity—deadly to isolated neighbors)", minComplexity: 'complex' },
        { text: "Night-Soil Composting & Boiled Water / Herbal Tea Culture (systematic collection of urban human waste for farm fertilizer paired with boiled drinking water)", minComplexity: 'complex' },
        { text: "Karst/Desert Water Stagnation & Seasonal Vector Plagues (reliance on stagnant reservoirs or marshes triggers recurring malaria and schistosomiasis outbreaks)", minComplexity: 'complex' },
        { text: "Strict Leprosaria, Quarantine Gates & Ritual Impurity Taboos (religious laws mandating isolation of contagious skin diseases, corpses, and tainted meats)", minComplexity: 'complex' },
        { text: "Low-Density Dispersed Settlement & Clean Running Meltwater (avoiding epidemic crowd plagues through low urban density and glacial/spring water)", minComplexity: 'complex' },
        { text: "State Famine Relief Granaries (Ever-Normal Granaries — state buys grain in bumper years and sells cheap during plagues/famines to prevent mass starvation)", minComplexity: 'complex' },
        { text: "Endemic Lead/Mercury Metallurgical & Cosmetic Poisoning (elite and artisan life expectancy lowered by silver-smelting fumes, lead pipes, or cinnabar elixirs)", minComplexity: 'complex' },
        { text: "Herbal Pharmacopoeia, Antiseptic Honey/Wine Wound Care & Quarantine Hospitals (institutionalized medical wards attached to temples or military camps)", minComplexity: 'complex' }
      ]
    }
  ],
  R: [
    {
      id: "r1_structure",
      number: "R1",
      title: "Structure of the Divine (What kind of gods do your people worship?)",
      type: 'checkbox',
      category: "R",
      minComplexity: undefined,
      guidance: "Ancient people looked at the sky, the sun, and the mountains to imagine gods. Does your religion believe in many human-like gods, nature spirits, or one supreme creator?",
      grade7Tip: "Polytheism means believing in MANY gods (like Zeus, Poseidon, and Hades in Greece). Monotheism means worshipping ONE supreme creator (like the ancient Hebrews).",
      options: [
        "Anthropomorphic Polytheism (dozens of gods with human personalities, jealousy, and family drama)",
        "Animism & Nature Spirits (every river, mountain, tree, and thunderstorm has a living spirit)",
        "Theocratic God-King Worship (the living ruler is literally a god on Earth, like the Pharaoh)",
        "Cosmic Dualism (two equal opposing gods of Light/Order and Darkness/Chaos in eternal war)",
        "Ancestor Veneration & Philosophical Harmony (focus on honoring dead family members and cosmic balance, like Confucianism/Shang China)",
        "Monolatry / Early Monotheism (worship of one supreme creator god above all others)",
        "Henotheistic Celestial Pantheism (veneration of a supreme solar or sky sovereign while acknowledging regional planetary deities)",
        "Sacred Triads and Divine Families (trinities of Father/Creator, Mother/Protector, and Son/Sovereign governing celestial harmony)",
        "Zoomorphic Shamanic Pantheon (gods manifested as powerful predator beasts: jaguars, feathered serpents, raptor eagles, and horned vipers)",
        { text: "Transcendental Philosophical Monism / Apophatic Mysticism (Brahman / Dao / Logos — the ultimate divine is an impersonal cosmic principle beyond human form)", minComplexity: 'complex' }
      ]
    },
    {
      id: "r2_demeanor",
      number: "R2",
      title: "Demeanor of the Gods (How do the gods treat human beings?)",
      type: 'checkbox',
      category: "R",
      minComplexity: undefined,
      guidance: "Do your gods love people, or are they angry and mean? In ancient history, societies living with scary disasters believed the gods were angry!",
      grade7Tip: "Because Mesopotamian floods were violent and destroyed cities, their myths said gods created humans just to do their chores! In Egypt, the river was gentle, so gods were seen as loving and fair.",
      options: [
        "Benevolent and predictable (because the environment is stable, gods are seen as loving protectors)",
        "Cruel, capricious, and angry (because floods/disasters are random, gods must be constantly appeased)",
        "Transactional (\"Do ut des\" — \"I give so that you might give\"; strict business-like sacrifices for favors)",
        "Distant and indifferent (the gods created the world and now ignore human affairs)",
        "Demanding of moral righteousness and cosmic order (Ma'at / Dharma — rewarding cosmic justice, punishing hubris)",
        "Fatalistic and unyielding (human destinies are woven into immutable celestial tapestries)",
        "Vulnerable and Dependent on Human Energy (gods grow weak, hungry, or age without daily human prayers, blood offerings, and rituals)",
        "Playful, Enigmatic, and Testing (trickster deities who test mortal hospitality, humility, and cleverness through disguised visitations)",
        { text: "Karmic & Moral Self-Causation (the universe operates by automatic moral law; human suffering and prosperity result from ethical actions rather than divine moods)", minComplexity: 'complex' }
      ]
    },
    {
      id: "r3_rituals",
      number: "R3",
      title: "Primary Religious Rituals & Practices (How do people keep the gods happy?)",
      type: 'checkbox',
      category: "R",
      minComplexity: undefined,
      guidance: "What rituals must priests and citizens perform so the sun keeps rising, rain falls, and crops don’t rot?",
      grade7Tip: "In Shang Dynasty China, kings used heat on turtle shells (oracle bones) to read cracks and ask ancestors for advice. The Greeks held the original Olympic Games every 4 years in honor of Zeus!",
      options: [
        "Daily food, wine, and incense offerings placed in front of temple statues",
        "Animal sacrifices (bulls, goats, sheep) burned on outdoor altars",
        "Oracle divination (reading cracks in burned turtle shells/ox bones, or inspecting animal livers)",
        "Bloodletting or human sacrifice (captives or volunteers offered to keep the sun moving/rain falling)",
        "Ecstatic festivals, theatrical drama, and athletic games held in honor of patron deities",
        "Astrological tracking of stars and planets to predict the gods' moods",
        "Sacred ritual purification baths and communal ablutions in consecrated temple tanks or rivers",
        "Pilgrimages to sacred mountain peaks, oracle grottos, or ancestral burial sanctuaries",
        "Sacred Masked Dances and Trance Dramas (initiates embody spirits through elaborate costumes, drumming, and psychotropic herbs)",
        "Ritual Temple Prostitution and Sacred Marriage Rites (Hieros Gamos uniting the monarch with the fertility goddess to guarantee crop harvests)",
        { text: "State Scapegoat Expulsion & New Year Cosmic Renewal (Pharmakos / Akitu — ritually humbling the king or driving out a scapegoat to purge the city's annual sins)", minComplexity: 'complex' }
      ]
    },
    {
      id: "r4_afterlife",
      number: "R4",
      title: "Death, Burial, and the Afterlife (What happens after you die?)",
      type: 'checkbox',
      category: "R",
      minComplexity: undefined,
      guidance: "Where does the human soul go after physical death? Note: Cremation on funeral pyres directly contradicts physical mummification!",
      grade7Tip: "Egyptians believed the god Anubis weighed your heart against the feather of truth—if your heart was light, you entered a beautiful paradise of reed fields! The Mesopotamians believed everyone went to a dusty, dark underworld where souls ate dirt.",
      options: [
        "Moral Judgment & Paradise (heart/soul is weighed; good people go to a fertile paradise, bad are devoured)",
        "Grim Underworld (everyone — rich or poor, good or bad — goes to a dark, dusty land of shadows)",
        "Mummification & Tomb Provisioning (body must be preserved with food, furniture, and servants for the next life)",
        "Reincarnation Cycle (soul is reborn into a higher or lower social class based on karma/duty)",
        "Cremation on funeral pyres (releasing the spirit into the sky or sacred river)",
        "Sky Burial or Ossuary Caves (returning the physical body to nature/ancestral bone pits)",
        "Vast subterranean necropolises guarded by terracotta armies and sealed with celestial constellation vaults",
        "Ancestor Mountain Abodes (spirits become guardian ancestral spirits dwelling in high mountain peaks, watching over village crops)",
        "Ship Burial and Aquatic Voyages (deceased royalty are placed in sea-going ships with weapons and treasure, launched to sea or buried under earthen barrows)",
        "Royal Kurgan Burial Mounds (timber-lined underground tombs filled with sacrificed horses, gold animal-style art, and weapons under earthen hills)",
        { text: "Esoteric Book of the Dead / Orphic Gold Passports (souls must memorize secret passwords and magical formulas to bypass underworld gatekeepers)", minComplexity: 'complex' }
      ]
    },
    {
      id: "r5_gov_relation",
      number: "R5",
      title: "Relationship Between Religion and Government (Who is in charge: king or priest?)",
      type: 'checkbox',
      category: "R",
      minComplexity: undefined,
      guidance: "In the ancient world, church and state were almost never separate! Did the King listen to the High Priest, or was the King himself considered a god?",
      grade7Tip: "In ancient theocracies, breaking a religious rule was treated as breaking the law. If a ruler claimed divine favor, disobeying the king meant disobeying God itself!",
      options: [
        "Pure Theocracy (the High Priest IS the ruler; religious law and state law are identical)",
        "Divine Right Monarchy (the King rules, but claims the gods chose him — Mandate of Heaven)",
        "Power Struggle (the King and the Temple Priests constantly compete for wealth, land, and influence)",
        "Civic Religion (priests are just regular government officials elected to run public festivals)",
        "Imperial Pontificate (the secular Emperor acts as supreme high priest to subordinate the priesthood to imperial policy)",
        "Dual-Crown Diarchy of Sacred King and Secular War Chief (a ritual taboo monarch manages spiritual harmony while a secular commander runs warfare and taxes)",
        "Universal Messianic Imperialism (the Emperor acts as the cosmic axis and universal savior destined to bring all known nations under divine law)",
        { text: "Caesaro-Papism & State Ecumenical Councils (the Emperor convenes and presides over religious councils to enforce uniform theological creeds across the empire)", minComplexity: 'complex' }
      ]
    },
    {
      id: "r6_orthodoxy_heresy",
      number: "R6",
      title: "Religious Orthodoxy, Syncretism, Sectarianism & Ideological Control",
      type: 'checkbox',
      category: "R",
      minComplexity: "complex",
      guidance: "How does your state handle foreign gods, rival philosophies, and religious dissent?",
      grade7Tip: "The Romans allowed conquered people to worship their own gods, as long as they gave a sacrifice to the Emperor. Other kingdoms crushed any god except their own!",
      options: [
        { text: "Imperial Pantheon Syncretism (conquered peoples' gods are absorbed and equated with imperial deities—e.g., Zeus-Amun or Sulis-Minerva)", minComplexity: 'complex' },
        { text: "Strict Iconoclastic / Monotheistic Exclusivism (foreign idols and rival temples are smashed; only the single true covenant or state doctrine is tolerated)", minComplexity: 'complex' },
        { text: "Pluralistic Edicts of Toleration (Cyrus Cylinder / Ashoka's Rock Edicts — state funds diverse local temples and protects minority sects to ensure loyalty)", minComplexity: 'complex' },
        { text: "Book Burning & Suppression of Rival Schools (Fenshu Kengru — state bans dissenting philosophical scrolls and executes non-conformist scholars)", minComplexity: 'complex' },
        { text: "Esoteric Mystery Cults & Initiation Hierarchies (Eleusinian/Mithraic model — public civic worship paired with secret salvation rites for initiates)", minComplexity: 'complex' },
        { text: "Schismatic Priesthood Rivalry (violent ideological clashes between solar/sky priests and traditional chthonic/lunar temple factions, like Akhenaten's Amarna heresy)", minComplexity: 'complex' },
        { text: "Philosophical Academy Pluralism (Hundreds of Schools / Agora — competing rationalist, stoic, legalist, and naturalist schools debate freely in public)", minComplexity: 'complex' },
        { text: "Sacred Taboo Enforcement by Secret Societies (masked ritual fraternities enforcing spiritual orthodoxy and ecological compliance)", minComplexity: 'complex' },
        { text: "Mandatory Imperial Ruler Cult Loyalty Sacrifices (subjects may worship any god they please, provided they burn a pinch of incense to the divine Emperor's genius)", minComplexity: 'complex' }
      ]
    }
  ],
  A: [
    {
      id: "a4_hydraulic",
      number: "A1",
      title: "Agricultural & Hydraulic Engineering (How do engineers control water & farm tough land?)",
      type: 'checkbox',
      category: "A",
      minComplexity: undefined,
      guidance: "Ancient engineers built canals, dikes, and terraces to tame violent rivers and water desert crops.",
      grade7Tip: "In the Andes mountains, the Inca carved giant stone steps (terraces) into cliffs to grow potatoes! In ancient Persia, engineers dug deep underground tunnels (qanats) so water wouldn’t evaporate in the hot desert sun.",
      options: [
        "Basin irrigation, dikes, and shadufs (counterweight buckets to lift river water)",
        "Mountain terrace farming (carving flat steps into steep cliffs with retaining walls)",
        "Chinampas (\"floating gardens\" built on shallow lake beds using woven reeds and fertile mud)",
        "Qanats (underground channels that carry mountain groundwater across hot deserts without evaporating)",
        "Heavy iron-tipped plows pulled by oxen and crop rotation systems",
        "Intricate canal locks, sluice gates, and water-powered grain mills",
        "Check-dams and rock terracing designed to trap flash-flood desert runoff and fertile silt",
        "Suspension Rope Bridges and Paved Mountain Stairways (spanning sheer Andean canyons with braided ichu grass ropes to connect valleys)",
        "Stepwells and Massive Sunken Reservoirs (Vavs / Baolis / Kunds carved deep into bedrock to access deep aquifers and cool communal gathering)",
        { text: "Inverted Siphons, Pressurized Lead/Ceramic Pipelines, and Multiple-Arch Masonry Dams (crossing deep valleys under hydrostatic pressure)", minComplexity: 'complex' }
      ]
    },
    {
      id: "a1_writing",
      number: "A2",
      title: "Writing System & Script (How do your people write and keep records?)",
      type: 'checkbox',
      category: "A",
      minComplexity: undefined,
      guidance: "Writing was invented to count grain and record taxes! Note: Phonetic alphabets were not invented until around 1100 BCE by the Phoenicians.",
      grade7Tip: "The Sumerians pressed wedge-shaped sticks into wet clay (cuneiform). The Egyptians drew sacred pictures (hieroglyphs). The Phoenicians invented a simple 22-letter alphabet where each letter was a sound—the ancestor of our English alphabet today!",
      options: [
        "Cuneiform (wedge-shaped marks pressed into wet clay with a reed stylus)",
        "Hieroglyphs (elaborate carved and painted sacred symbols representing sounds and ideas)",
        "Phonetic Alphabet (20-30 simple letters representing spoken sounds — easy for merchants to learn)",
        "Logographic Script (thousands of complex characters where each symbol is a word/concept)",
        "Quipu / Knotted Cords (no written words; complex math, census, and history recorded via colored knots)",
        "Pictographs & Ideograms carved into stone stelae and folding bark-paper books (codices)",
        "Syllabary script where characters represent phonetic consonant-vowel combinations (like Linear B)",
        "Undeciphered glyph seals stamped into steatite and terracotta for merchant cargo attribution",
        "Monumental Boustrophedon Script ('as the ox plows' — alternating left-to-right and right-to-left lines carved on temple stone)",
        "Kharosthi and Aramaic Administrative Cursive (rapid ink-on-parchment script designed for imperial courier decrees across multi-lingual empires)",
        "Ge'ez / Meroitic Abugida Script & Royal Trilingual Stone Inscriptions (syllabic alphabets carved on towering granite obelisks)",
        "Marshallese Stick Charts, Wampum Memory Belts, and Oral Songlines (mapping ocean swell refraction and historical treaties without ink)"
      ]
    },
    {
      id: "a2_medium",
      number: "A3",
      title: "Primary Writing Medium (What physical material do you write on?)",
      type: 'checkbox',
      category: "A",
      minComplexity: undefined,
      guidance: "Paper was not invented until Han Dynasty China! Before modern paper, what physical material carried your books and tax records?",
      grade7Tip: "Clay tablets were heavy, but when a library burned down, the clay tablets were baked like ceramic bricks and survived 4,000 years for archaeologists to read!",
      options: [
        "Baked or sun-dried clay tablets (heavy, but fireproof and lasts thousands of years)",
        "Papyrus scrolls made from pressed river reeds (lightweight, but rots in humid climates)",
        "Bamboo or wooden slips tied together with silk or leather cords",
        "Parchment or vellum made from scraped, dried animal skins",
        "Carved directly into limestone walls, obelisks, and wax-covered wooden tablets",
        "Accordion-folded bark paper (amatl) coated with fine lime plaster and painted in mineral pigments",
        "Dried and smoothed palm-leaf manuscripts etched with iron styluses and rubbed with soot ink",
        "Cast Bronze Vessels with Long Ritual Inscriptions (Shang/Zhou bronze bells and cauldrons cast with legal deeds and ancestral prayers)",
        "Polished Ostraca (recycled smooth pottery shards used by scribes and commoners for receipts, letters, and voting ballots)"
      ]
    },
    {
      id: "a3_monuments",
      number: "A4",
      title: "Monumental Architecture (What giant structures will your people be remembered for?)",
      type: 'checkbox',
      category: "A",
      minComplexity: undefined,
      guidance: "Select your construction projects. Note: Building thousands of miles of frontier walls requires a massive continental empire with millions of workers!",
      grade7Tip: "The Great Pyramid of Giza was the tallest man-made structure on Earth for over 3,800 years! Roman aqueducts carried millions of gallons of mountain water into cities using gravity alone.",
      options: [
        "Massive stepped Ziggurats or Pyramids towering over the flat landscape",
        "Gravity-fed stone aqueducts, subterranean sewers, and public bathhouses",
        "Cyclopean stone fortresses (massive boulders fitted together without mortar so tightly a knife blade can't fit)",
        "Grand colonnaded temples with marble statues and open-air amphitheaters",
        "Thousands of miles of frontier defensive walls and watchtowers (like the Great Wall)",
        "Planned grid-layout cities with standardized baked-brick houses and indoor drainage (like Indus Valley)",
        "Rock-cut cliffside temples and royal mausoleums carved directly into towering sandstone canyons",
        "Vast hypostyle reception halls with soaring stone column forests and glazed ceramic brick friezes",
        "Artificial Enclosed Naval Harbors (Cothons) with covered drydocks and slipways for 200+ warships (like Carthage)",
        "Massive Earthwork Effigy Mounds and Platform Citadels (engineered earthen pyramid mounds towering over river confluences, like Cahokia)",
        "Mortarless Granite Enclosures (Dzimbahwe) & Towering Carved Stelae Obelisks (like Great Zimbabwe and Aksum)",
        "Megalithic Volcanic Tuff Statues (Moai) & Open-Air Stone Temple Platforms (Marae / Heiau) facing the ocean"
      ]
    },
    {
      id: "a5_science",
      number: "A5",
      title: "Scientific, Mathematical & Technological Breakthroughs (What inventions change history?)",
      type: 'checkbox',
      category: "A",
      minComplexity: undefined,
      guidance: "Select your breakthroughs. Note: Underwater concrete was Roman (200 BCE), iron metallurgy was 1200 BCE, while base-60 math was Sumerian (3000 BCE).",
      grade7Tip: "The Babylonians used a base-60 math system, which is the reason we have 60 seconds in a minute and 360 degrees in a circle! The Maya independently invented the concept of \"Zero\" long before Europeans used it.",
      options: [
        "Base-60 math system (giving us 60-minute hours and 360-degree circles)",
        "Invention of the concept of \"Zero\" and a remarkably accurate 365.24-day solar calendar",
        "Advanced metallurgy (smelting bronze alloys, cast iron, or quench-hardened steel)",
        "Celestial navigation (sailing out of sight of land at night using the North Star)",
        "Concrete that can set underwater (for building massive harbors and domes)",
        "Herbal medicine, cranial surgery (trepanation), and setting broken bones",
        "Silk cultivation, glassblowing, or rare purple dye extracted from sea snails",
        "Magnetic compass lodestone orientation and early earthquake seismoscopes",
        "Distillation of essential oils, chemical mordants, and medicinal antiseptic extracts",
        "Mechanical Triggered Crossbows and Standardized Interchangeable Bronze Parts (Warring States / Qin China)",
        "Advanced Antikythera-Style Geared Astronomical Calculators (bronze differential gear trains tracking planetary orbits and eclipse cycles)",
        "Deep Underground Salt-Drilling Derricks using bamboo percussion drills and natural gas pipelines (Han Dynasty)",
        "Double-Hulled Outrigger Catamaran Engineering, Crab-Claw Sails, and Wave-Piloting Swell Navigation"
      ]
    },
    {
      id: "a6_ecology_collapse",
      number: "A6",
      title: "Anthropogenic Environmental Impact & Structural Collapse Vectors",
      type: 'checkbox',
      category: "A",
      minComplexity: "complex",
      guidance: "Every great achievement carries an environmental price tag. What long-term ecological or structural time-bomb does your civilization's lifestyle create?",
      grade7Tip: "Ancient Mesopotamia watered their wheat so much that salt poisoned their soil! The Maya cleared so many trees for plaster that their hills washed away. What is your civilization's ecological footprint?",
      options: [
        { text: "Widespread Deforestation & Hillside Soil Erosion (clear-cutting forests for lime plaster kilns, charcoal smelting, and trireme fleets strips topsoil into rivers)", minComplexity: 'complex' },
        { text: "Irreversible Alluvial Soil Salinization (centuries of intensive desert canal irrigation without drainage raises groundwater salt, turning wheat fields into white salt flats)", minComplexity: 'complex' },
        { text: "Imperial Fiscal-Military Overstretch & Debasement (maintaining massive frontier walls and mercenary armies forces coin silver debasement and hyperinflation)", minComplexity: 'complex' },
        { text: "Monoculture Vulnerability & Aquifer Depletion (over-reliance on a single staple crop and dropping karst water tables leads to catastrophic collapse during megadroughts)", minComplexity: 'complex' },
        { text: "Praetorian / Warlord Provincial Fragmentation (empowering frontier generals and satraps with private armies leads to endless civil war and imperial breakup)", minComplexity: 'complex' },
        { text: "Slave-Revolt & Latifundia Hollowing (replacing free citizen-farmers with massive slave plantations hollows out the military recruiting pool and sparks servile wars)", minComplexity: 'complex' },
        { text: "Steppe Overgrazing & Climatic Pasture Shift (herd expansion beyond grassland carrying capacity triggers tribal wars and forced migration into settled empires)", minComplexity: 'complex' },
        { text: "Island Ecological Exhaustion & Palm Deforestation (exhausting slow-growing island timber and seabird guano colonies traps populations without ocean-going timber)", minComplexity: 'complex' },
        { text: "Sustainable Regenerative Agro-Ecology (combining nitrogen-fixing chinampas/three-sisters or seasonal flood silt with strict forest conservation to endure for millennia)", minComplexity: 'complex' }
      ]
    }
  ]
};

// Dynamically filter questions and options according to Grade-Level Complexity Mode
export function getFilteredQuestions(complexityMode = 'normal') {
  const result = {};
  for (const [catKey, qList] of Object.entries(GRAPES_QUESTIONS)) {
    const filteredList = [];
    for (const q of qList) {
      if (complexityMode === 'basic') {
        if (!BASIC_CORE_QUESTION_IDS.includes(q.id)) continue;
        // Limit each core question to its first 6 foundational options (normalized to strings)
        const opts = q.options
          .filter(opt => typeof opt === 'string' || opt.minComplexity !== 'complex')
          .slice(0, 6)
          .map(opt => (typeof opt === 'string' ? opt : opt.text));
        filteredList.push({
          ...q,
          options: opts
        });
      } else if (complexityMode === 'normal') {
        if (q.minComplexity === 'complex') continue;
        // Standard 31 questions and 300 options (exclude complex options)
        const opts = q.options
          .filter(opt => typeof opt === 'string' || opt.minComplexity !== 'complex')
          .map(opt => (typeof opt === 'string' ? opt : opt.text));
        filteredList.push({
          ...q,
          options: opts
        });
      } else {
        // Complex mode: all 37 questions and 390 options
        const opts = q.options.map(opt => (typeof opt === 'string' ? opt : opt.text));
        filteredList.push({
          ...q,
          options: opts
        });
      }
    }
    result[catKey] = filteredList;
  }
  return result;
}

export function isComplexOptionText(text) {
  if (!text || typeof text !== 'string') return false;
  const t = text.trim();
  for (const qList of Object.values(GRAPES_QUESTIONS)) {
    for (const q of qList) {
      for (const opt of q.options) {
        if (typeof opt === 'object' && opt.minComplexity === 'complex' && opt.text.trim() === t) {
          return true;
        }
      }
    }
  }
  return false;
}

// Historical Presets for Instant Loading
export const HISTORICAL_PRESETS = {
  egypt: {
    name: 'Kemet (The Black Land of the Nile)',
    era: 'early_bronze',
    scale: 'regional_kingdom',
    inspiration: 'Ancient Egypt (Old, Middle, New Kingdom)',
    answers: {
      g2_terrain: [
        'Arid desert expanses surrounded by narrow fertile river strips',
        'Vast river delta marshlands and bayous intersected by tidal estuaries'
      ],
      g1_freshwater: [
        'Predictable annual flooding river (like the Nile — leaves rich black silt, easy to plan around)'
      ],
      g3_barriers: [
        'Vast, waterless deserts that starve invading armies before they arrive',
        'Cataracts (shallow, boulder-filled river rapids that stop enemy boats)'
      ],
      g4_resources: [
        'Rich alluvial clay and mud (for bricks, pottery, and writing tablets)',
        'Papyrus reeds, bamboo, or marsh plants (for paper, boats, and baskets)',
        'Quarried limestone, granite, or marble (for permanent monuments)',
        'Gold, silver, jade, or lapis lazuli (for luxury goods and religious idols)'
      ],
      g5_shortages: [
        'Lack of tall timber for shipbuilding and large roofs (like Egypt/Mesopotamia)',
        'Lack of tin or alloy fluxes (crippling bronze tool and weapon manufacture unless sustained by maritime trade)'
      ],
      g6_disasters: [
        'Multi-year severe droughts that dry up canals and cause famine',
        'Encroaching desert sand dunes and hyper-arid dust storms suffocating frontier farmland'
      ],
      e1_crops: [
        'Wheat and Barley (for bread, porridge, and brewing beer — standard in fertile crescents)',
        'Date Palms and Figs (drought-resistant sweet staples producing timber, fibers, and wine in desert oases)'
      ],
      e2_animals: [
        'Oxen and Water Buffalo (heavy draft animals for pulling plows and wagons)',
        'Sheep and Goats (for wool, milk, cheese, and leather in rocky terrain)'
      ],
      e5_trade: [
        'Riverine Network (barges floating downriver with stone/grain and sailing back upriver using wind)'
      ],
      e3_currency: [
        'State Grain Redistribution (no money; all farmers give crops to the temple/palace, which hands out daily rations of bread and beer)'
      ],
      e4_taxation: [
        'Agricultural Tithe (tax collectors measure field sizes after floods and take 10% to 30% of the harvest)',
        'Customs Duties & Trade Tariffs (taxing merchant ships at harbors and caravans at city gates)'
      ],
      p1_gov_system: [
        'Centralized Absolute Monarchy (one King/Emperor holds total power over a unified empire)'
      ],
      p2_succession: [
        'Hereditary Primogeniture (passes strictly to the eldest son or royal bloodline)'
      ],
      p3_law_system: [
        'Social-Class Tiered Punishments (a noble who injures a peasant pays a small silver fine; a peasant who injures a noble is executed)'
      ],
      p4_military: [
        'Seasonal Peasant Levy (farmers are drafted after harvest season, given spears, and sent to fight)'
      ],
      p5_foreign_policy: [
        'Tributary Vassals (local kings keep their thrones and religions as long as they pay annual gold/grain tribute)'
      ],
      s1_apex: [
        'The God-King and Royal Dynasty (untouchable divine bloodline)'
      ],
      s2_middle: [
        'Scribes and Record-Keepers (highly respected because fewer than 2% of people can read/write)'
      ],
      s3_mobility: [
        'Scribal / Exam Mobility (anyone who manages to learn to read/write or pass state exams can become a rich official)'
      ],
      s4_gender: [
        'High Legal Autonomy (like Ancient Egypt — women can own property, initiate divorce, sign contracts, run businesses, and even rule as Pharaoh)'
      ],
      s5_unfree_labor: [
        'Paid Free Laborers Only (monuments are built by proud, well-fed peasant crews paid in meat, beer, grain, and tax exemptions)'
      ],
      r1_structure: [
        'Theocratic God-King Worship (the living ruler is literally a god on Earth, like the Pharaoh)'
      ],
      r2_demeanor: [
        'Benevolent and predictable (because the environment is stable, gods are seen as loving protectors)'
      ],
      r3_rituals: [
        'Daily food, wine, and incense offerings placed in front of temple statues',
        'Astrological tracking of stars and planets to predict the gods\' moods'
      ],
      r4_afterlife: [
        'Moral Judgment & Paradise (heart/soul is weighed; good people go to a fertile paradise, bad are devoured)'
      ],
      r5_gov_relation: [
        'Divine Right Monarchy (the King rules, but claims the gods chose him — Mandate of Heaven)'
      ],
      a4_hydraulic: [
        'Basin irrigation, dikes, and shadufs (counterweight buckets to lift river water)'
      ],
      a1_writing: [
        'Hieroglyphs (elaborate carved and painted sacred symbols representing sounds and ideas)'
      ],
      a2_medium: [
        'Papyrus scrolls made from pressed river reeds (lightweight, but rots in humid climates)'
      ],
      a3_monuments: [
        'Massive stepped Ziggurats or Pyramids towering over the flat landscape',
        'Rock-cut cliffside temples and royal mausoleums carved directly into towering sandstone canyons'
      ],
      a5_science: [
        'Invention of the concept of "Zero" and a remarkably accurate 365.24-day solar calendar',
        'Herbal medicine, cranial surgery (trepanation), and setting broken bones'
      ]
    }
  },
  mesopotamia: {
    name: 'Sumer & Babylon (The Land Between the Rivers)',
    era: 'early_bronze',
    scale: 'city_state',
    inspiration: 'Mesopotamia (Sumer, Akkad, Babylon, Assyria)',
    answers: {
      g2_terrain: [
        'Flat, featureless alluvial floodplains (great for farming, terrible for defense)'
      ],
      g1_freshwater: [
        'Violent, unpredictable twin rivers (like the Tigris/Euphrates — requires heavy levee and canal work)'
      ],
      g3_barriers: [
        'None — completely open flat plains requiring man-made walls and constant military vigilance'
      ],
      g4_resources: [
        'Rich alluvial clay and mud (for bricks, pottery, and writing tablets)',
        'Papyrus reeds, bamboo, or marsh plants (for paper, boats, and baskets)',
        'Natural bitumen and surface asphalt seeps (for caulking boats, water-sealing bricks, and embalming)'
      ],
      g5_shortages: [
        'Lack of tall timber for shipbuilding and large roofs (like Egypt/Mesopotamia)',
        'Lack of hard stone or metal ores (only have mud and clay)'
      ],
      g6_disasters: [
        'Catastrophic, unannounced river floods that wash away entire villages',
        'Soil salinization (over-irrigation making the soil too salty to grow crops)'
      ],
      e1_crops: [
        'Wheat and Barley (for bread, porridge, and brewing beer — standard in fertile crescents)',
        'Date Palms and Figs (drought-resistant sweet staples producing timber, fibers, and wine in desert oases)'
      ],
      e2_animals: [
        'Oxen and Water Buffalo (heavy draft animals for pulling plows and wagons)',
        'Sheep and Goats (for wool, milk, cheese, and leather in rocky terrain)'
      ],
      e5_trade: [
        'Riverine Network (barges floating downriver with stone/grain and sailing back upriver using wind)'
      ],
      e3_currency: [
        'Weighed Metal Bullion (chopping silver rings or copper ingots and weighing them on scales for every purchase)'
      ],
      e4_taxation: [
        'Agricultural Tithe (tax collectors measure field sizes after floods and take 10% to 30% of the harvest)',
        'Customs Duties & Trade Tariffs (taxing merchant ships at harbors and caravans at city gates)'
      ],
      p1_gov_system: [
        'Decentralized City-States (dozens of independent cities with the same culture that constantly war with each other)'
      ],
      p2_succession: [
        'Hereditary Primogeniture (passes strictly to the eldest son or royal bloodline)'
      ],
      p3_law_system: [
        'Written Public Law Pillars (like Hammurabi\'s Code — carved in stone in the town square so no judge can make up rules)'
      ],
      p4_military: [
        'Permanent Professional Standing Army (full-time paid soldiers who train year-round)',
        'Seasonal Peasant Levy (farmers are drafted after harvest season, given spears, and sent to fight)'
      ],
      p5_foreign_policy: [
        'Commercial Colonies & Trading Posts (founding fortified coastal or frontier harbor factories to monopolize resources)'
      ],
      s1_apex: [
        'Priest-Kings and Temple High Priests (mediators between gods and humans)'
      ],
      s2_middle: [
        'Scribes and Record-Keepers (highly respected because fewer than 2% of people can read/write)'
      ],
      s3_mobility: [
        'Wealth-Based Mobility (class is determined purely by property/income; if a merchant gets rich enough, they move up a tier)'
      ],
      s4_gender: [
        'Strict Patriarchal Seclusion (women are legally minors owned by fathers/husbands, kept indoors, cannot own land)'
      ],
      s5_unfree_labor: [
        'Temporary Debt Bondage (citizens who can\'t pay taxes work as servants for 3 to 7 years, then must legally be freed)'
      ],
      r1_structure: [
        'Anthropomorphic Polytheism (dozens of gods with human personalities, jealousy, and family drama)'
      ],
      r2_demeanor: [
        'Cruel, capricious, and angry (because floods/disasters are random, gods must be constantly appeased)'
      ],
      r3_rituals: [
        'Daily food, wine, and incense offerings placed in front of temple statues',
        'Oracle divination (reading cracks in burned turtle shells/ox bones, or inspecting animal livers)',
        'Astrological tracking of stars and planets to predict the gods\' moods'
      ],
      r4_afterlife: [
        'Grim Underworld (everyone — rich or poor, good or bad — goes to a dark, dusty land of shadows)'
      ],
      r5_gov_relation: [
        'Power Struggle (the King and the Temple Priests constantly compete for wealth, land, and influence)'
      ],
      a4_hydraulic: [
        'Basin irrigation, dikes, and shadufs (counterweight buckets to lift river water)'
      ],
      a1_writing: [
        'Cuneiform (wedge-shaped marks pressed into wet clay with a reed stylus)'
      ],
      a2_medium: [
        'Baked or sun-dried clay tablets (heavy, but fireproof and lasts thousands of years)'
      ],
      a3_monuments: [
        'Massive stepped Ziggurats or Pyramids towering over the flat landscape'
      ],
      a5_science: [
        'Base-60 math system (giving us 60-minute hours and 360-degree circles)'
      ]
    }
  },
  maya: {
    name: 'Tikal & Copan (The Jade Jaguar Realm)',
    era: 'classical_antiquity',
    scale: 'city_state',
    inspiration: 'Maya / Aztec / Inca (Mesoamerica & Andes)',
    answers: {
      g2_terrain: [
        'Dense, humid tropical rainforest with thick canopy'
      ],
      g1_freshwater: [
        'Underground limestone sinkholes and aquifers (like Mayan cenotes — no surface rivers)'
      ],
      g3_barriers: [
        'Dense, disease-ridden jungles (malaria/venomous wildlife)'
      ],
      g4_resources: [
        'Quarried limestone, granite, or marble (for permanent monuments)',
        'Obsidian (volcanic glass for razor-sharp blades and surgical tools)',
        'Gold, silver, jade, or lapis lazuli (for luxury goods and religious idols)'
      ],
      g5_shortages: [
        'Lack of horses or pack animals for transport and cavalry',
        'Lack of tin or alloy fluxes (crippling bronze tool and weapon manufacture unless sustained by maritime trade)'
      ],
      g6_disasters: [
        'Multi-year severe droughts that dry up canals and cause famine',
        'Locust swarms and agricultural blights'
      ],
      e1_crops: [
        'Maize (Corn), Beans, and Squash ("Three Sisters" grown together symbiotically)'
      ],
      e2_animals: [
        'None — all goods are carried on the backs of human porters and canoes (like the Maya/Aztec)'
      ],
      e5_trade: [
        'Vertical Archipelago Exchange (highland and lowland ecological tiers swapping mountain tubers/wool for coastal fish and valley cotton)'
      ],
      e3_currency: [
        'Commodity Money (cacao beans, cowrie shells, salt blocks, or bolts of silk used as cash)'
      ],
      e4_taxation: [
        'Agricultural Tithe (tax collectors measure field sizes after floods and take 10% to 30% of the harvest)'
      ],
      p1_gov_system: [
        'Decentralized City-States (dozens of independent cities with the same culture that constantly war with each other)'
      ],
      p2_succession: [
        'Hereditary Primogeniture (passes strictly to the eldest son or royal bloodline)'
      ],
      p3_law_system: [
        'Lex Talionis ("Eye for an Eye" — literal physical retaliation for crimes among equals)'
      ],
      p4_military: [
        'Seasonal Peasant Levy (farmers are drafted after harvest season, given spears, and sent to fight)',
        'Psychological Terror (flaying rebel leaders and building pyramids of skulls so cities surrender without fighting)'
      ],
      p5_foreign_policy: [
        'Commercial Colonies & Trading Posts (founding fortified coastal or frontier harbor factories to monopolize resources)'
      ],
      s1_apex: [
        'The God-King and Royal Dynasty (untouchable divine bloodline)'
      ],
      s2_middle: [
        'Scribes and Record-Keepers (highly respected because fewer than 2% of people can read/write)'
      ],
      s3_mobility: [
        'Rigid Hereditary Caste System (zero mobility; you must marry and work in the exact caste your parents were born into)'
      ],
      s4_gender: [
        'Religious & Economic Influence (men hold political office, but women serve as powerful High Priestesses, healers, and market textile merchants)'
      ],
      s5_unfree_labor: [
        'Prisoners of War & Chattel Slavery (captured enemies become permanent property working in state silver mines, galleys, and estates)'
      ],
      r1_structure: [
        'Animism & Nature Spirits (every river, mountain, tree, and thunderstorm has a living spirit)'
      ],
      r2_demeanor: [
        'Transactional ("Do ut des" — "I give so that you might give"; strict business-like sacrifices for favors)'
      ],
      r3_rituals: [
        'Bloodletting or human sacrifice (captives or volunteers offered to keep the sun moving/rain falling)',
        'Astrological tracking of stars and planets to predict the gods\' moods'
      ],
      r4_afterlife: [
        'Grim Underworld (everyone — rich or poor, good or bad — goes to a dark, dusty land of shadows)'
      ],
      r5_gov_relation: [
        'Pure Theocracy (the High Priest IS the ruler; religious law and state law are identical)'
      ],
      a4_hydraulic: [
        'Stepwells and Massive Sunken Reservoirs (Vavs / Baolis / Kunds carved deep into bedrock to access deep aquifers and cool communal gathering)'
      ],
      a1_writing: [
        'Pictographs & Ideograms carved into stone stelae and folding bark-paper books (codices)'
      ],
      a2_medium: [
        'Accordion-folded bark paper (amatl) coated with fine lime plaster and painted in mineral pigments'
      ],
      a3_monuments: [
        'Massive stepped Ziggurats or Pyramids towering over the flat landscape'
      ],
      a5_science: [
        'Invention of the concept of "Zero" and a remarkably accurate 365.24-day solar calendar',
        'Herbal medicine, cranial surgery (trepanation), and setting broken bones'
      ]
    }
  },
  greece_rome: {
    name: 'The Classical Polis League',
    era: 'imperial_era',
    scale: 'continental_empire',
    inspiration: 'Classical Greece & Rome (Polis & Imperium)',
    answers: {
      g2_terrain: [
        'Rocky peninsula with jagged coastlines and hundreds of small islands (like Greece)',
        'Steep, jagged mountain ranges (requires terrace farming, provides natural fortresses)'
      ],
      g1_freshwater: [
        'Karst subterranean river systems and highland limestone springs (like southwest China and the Balkans)'
      ],
      g3_barriers: [
        'Treacherous rocky coastlines, reefs, and stormy seas',
        'Impassable, freezing mountain ranges blocking the border'
      ],
      g4_resources: [
        'Quarried limestone, granite, or marble (for permanent monuments)',
        'Dense cedar, oak, or mahogany forests (for shipbuilding and palace roofs)',
        'High-grade iron ore (for superior armor and agricultural plows)'
      ],
      g5_shortages: [
        'Lack of arable farmland (too mountainous or rocky to grow enough grain)'
      ],
      g6_disasters: [
        'Frequent tectonic earthquakes and volcanic eruptions'
      ],
      e1_crops: [
        'Olives and Grapes (grown in rocky soil to press into high-value olive oil and wine for export)',
        'Wheat and Barley (for bread, porridge, and brewing beer — standard in fertile crescents)'
      ],
      e2_animals: [
        'Sheep and Goats (for wool, milk, cheese, and leather in rocky terrain)',
        'Horses and Camels (for aristocratic cavalry, messengers, and desert caravan trade)'
      ],
      e5_trade: [
        'Maritime Trade Empire (merchant fleets sailing across seas to establish trading colonies)'
      ],
      e3_currency: [
        'Standardized Stamped Coins (electrum, gold, silver, or bronze coins guaranteed by the state)'
      ],
      e4_taxation: [
        'Customs Duties & Trade Tariffs (taxing merchant ships at harbors and caravans at city gates)'
      ],
      p1_gov_system: [
        'Aristocratic Oligarchy / Republic (ruled by a Senate or Council of wealthy landowning families)'
      ],
      p2_succession: [
        'Election by Citizen Assembly or Noble Council (term limits or life appointments via vote)'
      ],
      p3_law_system: [
        'Jury Trials & Restorative Justice (large citizen juries vote on guilt; focus on fines, debt forgiveness, or ostracism/exile)'
      ],
      p4_military: [
        'Heavy Infantry Phalanx (wall of overlapping bronze shields and 18-foot pikes)',
        'Naval Supremacy (trireme warships with bronze battering rams dominating sea lanes)'
      ],
      p5_foreign_policy: [
        'Cultural Integration & Citizenship (conquered elites are granted citizenship, roads, and trade benefits)'
      ],
      s1_apex: [
        'Landowning Warrior Aristocracy / Patricians (noble families who control the cavalry and estates)'
      ],
      s2_middle: [
        'Master Craftsmen & Metallurgists (stonemasons, bronze-smiths, jewelers)'
      ],
      s3_mobility: [
        'Wealth-Based Mobility (class is determined purely by property/income; if a merchant gets rich enough, they move up a tier)'
      ],
      s4_gender: [
        'Strict Patriarchal Seclusion (women are legally minors owned by fathers/husbands, kept indoors, cannot own land)'
      ],
      s5_unfree_labor: [
        'Prisoners of War & Chattel Slavery (captured enemies become permanent property working in state silver mines, galleys, and estates)'
      ],
      r1_structure: [
        'Anthropomorphic Polytheism (dozens of gods with human personalities, jealousy, and family drama)'
      ],
      r2_demeanor: [
        'Transactional ("Do ut des" — "I give so that you might give"; strict business-like sacrifices for favors)'
      ],
      r3_rituals: [
        'Ecstatic festivals, theatrical drama, and athletic games held in honor of patron deities',
        'Animal sacrifices (bulls, goats, sheep) burned on outdoor altars'
      ],
      r4_afterlife: [
        'Grim Underworld (everyone — rich or poor, good or bad — goes to a dark, dusty land of shadows)'
      ],
      r5_gov_relation: [
        'Civic Religion (priests are just regular government officials elected to run public festivals)'
      ],
      a4_hydraulic: [
        'Mountain terrace farming (carving flat steps into steep cliffs with retaining walls)'
      ],
      a1_writing: [
        'Phonetic Alphabet (20-30 simple letters representing spoken sounds — easy for merchants to learn)'
      ],
      a2_medium: [
        'Carved directly into limestone walls, obelisks, and wax-covered wooden tablets'
      ],
      a3_monuments: [
        'Grand colonnaded temples with marble statues and open-air amphitheaters',
        'Gravity-fed stone aqueducts, subterranean sewers, and public bathhouses'
      ],
      a5_science: [
        'Concrete that can set underwater (for building massive harbors and domes)',
        'Celestial navigation (sailing out of sight of land at night using the North Star)'
      ]
    }
  }
};
