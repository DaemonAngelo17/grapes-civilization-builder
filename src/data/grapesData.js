// Exhaustive G.R.A.P.E.S. Civilization Builder Data Structure
// Includes ALL 31 original questions and options verbatim, plus historical expansions.

export const INSPIRATIONS = [
  { id: 'mesopotamia', name: 'Mesopotamia (Sumer, Akkad, Babylon, Assyria)', region: 'Fertile Crescent' },
  { id: 'egypt', name: 'Ancient Egypt (Old, Middle, New Kingdom)', region: 'Nile River Valley' },
  { id: 'indus', name: 'Indus Valley Civilization (Harappa & Mohenjo-Daro)', region: 'South Asia' },
  { id: 'china', name: 'Ancient China (Shang, Zhou, Qin, Han Dynasties)', region: 'Yellow & Yangtze Rivers' },
  { id: 'mesoamerica', name: 'Maya / Aztec / Inca (Mesoamerica & Andes)', region: 'The Americas' },
  { id: 'grecoroman', name: 'Classical Greece & Rome (Polis & Imperium)', region: 'Mediterranean Basin' },
  { id: 'persia', name: 'Persian Empire (Achaemenid & Sasanian)', region: 'Iranian Plateau & Near East' },
  { id: 'phoenicia', name: 'Phoenicia & Carthage (Maritime Thalassocracy)', region: 'Levant & Western Mediterranean' },
  { id: 'custom', name: 'Custom / Synthetic Historical Hybrid', region: 'Imagined Ancient World' }
];

export const GRAPES_CATEGORIES = [
  {
    key: 'G',
    name: 'Geography',
    subtitle: 'Environment, Resources & Adaptation',
    icon: 'Mountain',
    color: '#855827',
    badgeBg: '#f2e8d7',
    borderCol: '#c8ad8d',
    description: 'Physical terrain, waterways, natural defense barriers, resource endowments, and environmental hazards that mold survival and strategy.'
  },
  {
    key: 'R',
    name: 'Religion',
    subtitle: 'Beliefs, Rituals & Cosmic Order',
    icon: 'Flame',
    color: '#983726',
    badgeBg: '#f7e4df',
    borderCol: '#d99d91',
    description: 'Theology, relationship with nature, rituals, moral codes, afterlife concepts, and the spiritual legitimation of power.'
  },
  {
    key: 'A',
    name: 'Achievements',
    subtitle: 'Science, Art, Architecture & Innovation',
    icon: 'Compass',
    color: '#21536b',
    badgeBg: '#dce8ef',
    borderCol: '#9bb8c7',
    description: 'Writing systems, monumental works, hydraulic engineering, astronomical knowledge, and technological breakthroughs.'
  },
  {
    key: 'P',
    name: 'Politics',
    subtitle: 'Government, Law, War & Diplomacy',
    icon: 'Shield',
    color: '#5a3d7a',
    badgeBg: '#ede4f5',
    borderCol: '#bfa7d6',
    description: 'Systems of governance, succession mechanics, legal codes, military doctrine, and treatment of conquered subjects.'
  },
  {
    key: 'E',
    name: 'Economy',
    subtitle: 'Trade, Currency, Labor & Taxation',
    icon: 'Coins',
    color: '#2b6540',
    badgeBg: '#ddede2',
    borderCol: '#93c2a3',
    description: 'Agrarian staple crops, domesticated animals, monetary systems, fiscal extraction, and domestic/international trade routes.'
  },
  {
    key: 'S',
    name: 'Social Structure',
    subtitle: 'Hierarchy, Mobility, Gender & Daily Life',
    icon: 'Users',
    color: '#8a4b16',
    badgeBg: '#f5e8dc',
    borderCol: '#d1a88a',
    description: 'The apex ruler, respected artisan middle tier, social mobility mechanisms, legal status of women, and the structure of unfree labor.'
  }
];

export const GRAPES_QUESTIONS = {
  G: [
    {
      id: 'g1_freshwater',
      number: 'G1',
      title: 'Primary Freshwater Source',
      type: 'radio',
      category: 'G',
      guidance: 'The lifeline that dictates urban density, irrigation complexity, and agricultural security.',
      options: [
        'Predictable annual flooding river (like the Nile — leaves rich black silt, easy to plan around)',
        'Violent, unpredictable twin rivers (like the Tigris/Euphrates — requires heavy levee and canal work)',
        'Underground limestone sinkholes and aquifers (like Mayan cenotes — no surface rivers)',
        'High-altitude glacial mountain meltwater (like the Andes — cold, fast-flowing streams)',
        'Seasonal monsoon rains and rainwater harvesting reservoirs (like the Indus/Khmer)',
        'Oasis springs scattered across an arid desert plateau',
        'Braided loess river basin prone to massive silt accumulation and devastating course shifts (like the Yellow River / Huang He)',
        'Karst subterranean river systems and highland limestone springs (like southwest China and the Balkans)'
      ]
    },
    {
      id: 'g2_terrain',
      number: 'G2',
      title: 'Dominant Terrain & Topography',
      type: 'checkbox',
      maxSelect: 2,
      category: 'G',
      guidance: 'Select up to 2 dominant landforms shaping settlement patterns, transportation, and agricultural methods.',
      options: [
        'Flat, featureless alluvial floodplains (great for farming, terrible for defense)',
        'Steep, jagged mountain ranges (requires terrace farming, provides natural fortresses)',
        'Arid desert expanses surrounded by narrow fertile river strips',
        'Dense, humid tropical rainforest with thick canopy',
        'Rocky peninsula with jagged coastlines and hundreds of small islands (like Greece)',
        'High-altitude flat plateau (steppe) swept by strong winds',
        'Fertile volcanic caldera valleys with nutrient-rich soils and crater lakes (like the Valley of Mexico)',
        'Vast river delta marshlands and bayous intersected by tidal estuaries'
      ]
    },
    {
      id: 'g3_barriers',
      number: 'G3',
      title: 'Natural Defensive Barriers',
      type: 'checkbox',
      category: 'G',
      guidance: 'Geographic barriers that shield borders from foreign armies or expose them to perpetual raids.',
      options: [
        'Impassable, freezing mountain ranges blocking the border',
        'Vast, waterless deserts that starve invading armies before they arrive',
        'Treacherous rocky coastlines, reefs, and stormy seas',
        'Dense, disease-ridden jungles (malaria/venomous wildlife)',
        'Cataracts (shallow, boulder-filled river rapids that stop enemy boats)',
        'None — completely open flat plains requiring man-made walls and constant military vigilance',
        'Deep river chasms and impassable canyon gorges crossed only by suspension bridges',
        'Expansive swamps and treacherous mangrove flats that swallow heavy supply wagons and cavalry'
      ]
    },
    {
      id: 'g4_resources',
      number: 'G4',
      title: 'Abundant Natural Resources',
      type: 'checkbox',
      minSelect: 2,
      maxSelect: 4,
      category: 'G',
      guidance: 'Select 2 to 4 raw materials that fuel your technology, crafts, monumental architecture, and trade surpluses.',
      options: [
        'Rich alluvial clay and mud (for bricks, pottery, and writing tablets)',
        'Papyrus reeds, bamboo, or marsh plants (for paper, boats, and baskets)',
        'Quarried limestone, granite, or marble (for permanent monuments)',
        'Dense cedar, oak, or mahogany forests (for shipbuilding and palace roofs)',
        'Copper and tin deposits (for smelting bronze weapons and tools)',
        'High-grade iron ore (for superior armor and agricultural plows)',
        'Gold, silver, jade, or lapis lazuli (for luxury goods and religious idols)',
        'Obsidian (volcanic glass for razor-sharp blades and surgical tools)',
        'Natural bitumen and surface asphalt seeps (for caulking boats, water-sealing bricks, and embalming)',
        'Vast rock salt domes and coastal evaporation salterns (for meat/fish preservation and vital trade leverage)'
      ]
    },
    {
      id: 'g5_shortages',
      number: 'G5',
      title: 'Critical Resource Shortages (What you MUST import)',
      type: 'checkbox',
      category: 'G',
      guidance: 'Resource deficits that drive military campaigns, foreign diplomatic concessions, or merchant exploration.',
      options: [
        'Lack of tall timber for shipbuilding and large roofs (like Egypt/Mesopotamia)',
        'Lack of hard stone or metal ores (only have mud and clay)',
        'Lack of arable farmland (too mountainous or rocky to grow enough grain)',
        'Lack of horses or pack animals for transport and cavalry',
        'Lack of salt for preserving meat and fish',
        'Lack of tin or alloy fluxes (crippling bronze tool and weapon manufacture unless sustained by maritime trade)',
        'Lack of fuel firewood and charcoal (forcing reliance on dried animal dung or severely limiting metal smelting)'
      ]
    },
    {
      id: 'g6_disasters',
      number: 'G6',
      title: 'Recurring Environmental Disasters',
      type: 'checkbox',
      category: 'G',
      guidance: 'Ecological cataclysms that test imperial engineering resilience and citizen faith in divine protection.',
      options: [
        'Catastrophic, unannounced river floods that wash away entire villages',
        'Multi-year severe droughts that dry up canals and cause famine',
        'Frequent tectonic earthquakes and volcanic eruptions',
        'Locust swarms and agricultural blights',
        'Monsoons, typhoons, or coastal tsunamis',
        'Soil salinization (over-irrigation making the soil too salty to grow crops)',
        'Encroaching desert sand dunes and hyper-arid dust storms suffocating frontier farmland',
        'Rapid silting of canal choke points and violent shifting of navigable river channels'
      ]
    }
  ],
  R: [
    {
      id: 'r1_structure',
      number: 'R1',
      title: 'Structure of the Divine',
      type: 'radio',
      category: 'R',
      guidance: 'The metaphysical architecture framing your civilization\'s understanding of supreme cosmic power.',
      options: [
        'Anthropomorphic Polytheism (dozens of gods with human personalities, jealousy, and family drama)',
        'Animism & Nature Spirits (every river, mountain, tree, and thunderstorm has a living spirit)',
        'Theocratic God-King Worship (the living ruler is literally a god on Earth, like the Pharaoh)',
        'Cosmic Dualism (two equal opposing gods of Light/Order and Darkness/Chaos in eternal war)',
        'Ancestor Veneration & Philosophical Harmony (focus on honoring dead family members and cosmic balance, like Confucianism/Shang China)',
        'Monolatry / Early Monotheism (worship of one supreme creator god above all others)',
        'Henotheistic Celestial Pantheism (veneration of a supreme solar or sky sovereign while acknowledging regional planetary deities)'
      ]
    },
    {
      id: 'r2_demeanor',
      number: 'R2',
      title: 'Demeanor of the Gods (How do they treat humans?)',
      type: 'radio',
      category: 'R',
      guidance: 'How mortals interpret heavenly intent—reflecting environmental stability or environmental trauma.',
      options: [
        'Benevolent and predictable (because the environment is stable, gods are seen as loving protectors)',
        'Cruel, capricious, and angry (because floods/disasters are random, gods must be constantly appeased)',
        'Transactional ("Do ut des" — "I give so that you might give"; strict business-like sacrifices for favors)',
        'Distant and indifferent (the gods created the world and now ignore human affairs)',
        'Demanding of moral righteousness and cosmic order (Ma\'at / Dharma — rewarding cosmic justice, punishing hubris)',
        'Fatalistic and unyielding (human destinies are woven into immutable celestial tapestries)'
      ]
    },
    {
      id: 'r3_rituals',
      number: 'R3',
      title: 'Primary Religious Rituals & Practices',
      type: 'checkbox',
      category: 'R',
      guidance: 'The daily, seasonal, and ceremonial obligations binding mortals to divine goodwill.',
      options: [
        'Daily food, wine, and incense offerings placed in front of temple statues',
        'Animal sacrifices (bulls, goats, sheep) burned on outdoor altars',
        'Oracle divination (reading cracks in burned turtle shells/ox bones, or inspecting animal livers)',
        'Bloodletting or human sacrifice (captives or volunteers offered to keep the sun moving/rain falling)',
        'Ecstatic festivals, theatrical drama, and athletic games held in honor of patron deities',
        'Astrological tracking of stars and planets to predict the gods\' moods',
        'Sacred ritual purification baths and communal ablutions in consecrated temple tanks or rivers',
        'Pilgrimages to sacred mountain peaks, oracle grottos, or ancestral burial sanctuaries'
      ]
    },
    {
      id: 'r4_afterlife',
      number: 'R4',
      title: 'Death, Burial, and the Afterlife',
      type: 'radio',
      category: 'R',
      guidance: 'What awaits the mortal soul, and how the living honor and preserve the deceased.',
      options: [
        'Moral Judgment & Paradise (heart/soul is weighed; good people go to a fertile paradise, bad are devoured)',
        'Grim Underworld (everyone — rich or poor, good or bad — goes to a dark, dusty land of shadows)',
        'Mummification & Tomb Provisioning (body must be preserved with food, furniture, and servants for the next life)',
        'Reincarnation Cycle (soul is reborn into a higher or lower social class based on karma/duty)',
        'Cremation on funeral pyres (releasing the spirit into the sky or sacred river)',
        'Sky Burial or Ossuary Caves (returning the physical body to nature/ancestral bone pits)',
        'Vast subterranean necropolises guarded by terracotta armies and sealed with celestial constellation vaults'
      ]
    },
    {
      id: 'r5_gov_relation',
      number: 'R5',
      title: 'Relationship Between Religion and Government',
      type: 'radio',
      category: 'R',
      guidance: 'The institutional balance of power between altar and throne.',
      options: [
        'Pure Theocracy (the High Priest IS the ruler; religious law and state law are identical)',
        'Divine Right Monarchy (the King rules, but claims the gods chose him — Mandate of Heaven)',
        'Power Struggle (the King and the Temple Priests constantly compete for wealth, land, and influence)',
        'Civic Religion (priests are just regular government officials elected to run public festivals)',
        'Imperial Pontificate (the secular Emperor acts as supreme high priest to subordinate the priesthood to imperial policy)'
      ]
    }
  ],
  A: [
    {
      id: 'a1_writing',
      number: 'A1',
      title: 'Writing System & Script',
      type: 'radio',
      category: 'A',
      guidance: 'The symbolic medium through which laws, mercantile transactions, literature, and imperial decrees are recorded.',
      options: [
        'Cuneiform (wedge-shaped marks pressed into wet clay with a reed stylus)',
        'Hieroglyphs (elaborate carved and painted sacred symbols representing sounds and ideas)',
        'Phonetic Alphabet (20-30 simple letters representing spoken sounds — easy for merchants to learn)',
        'Logographic Script (thousands of complex characters where each symbol is a word/concept)',
        'Quipu / Knotted Cords (no written words; complex math, census, and history recorded via colored knots)',
        'Pictographs & Ideograms carved into stone stelae and folding bark-paper books (codices)',
        'Syllabary script where characters represent phonetic consonant-vowel combinations (like Linear B)',
        'Undeciphered glyph seals stamped into steatite and terracotta for merchant cargo attribution'
      ]
    },
    {
      id: 'a2_medium',
      number: 'A2',
      title: 'Primary Writing Medium',
      type: 'radio',
      category: 'A',
      guidance: 'The physical substrate that carries recorded knowledge across generations.',
      options: [
        'Baked or sun-dried clay tablets (heavy, but fireproof and lasts thousands of years)',
        'Papyrus scrolls made from pressed river reeds (lightweight, but rots in humid climates)',
        'Bamboo or wooden slips tied together with silk or leather cords',
        'Parchment or vellum made from scraped, dried animal skins',
        'Carved directly into limestone walls, obelisks, and wax-covered wooden tablets',
        'Accordion-folded bark paper (amatl) coated with fine lime plaster and painted in mineral pigments',
        'Dried and smoothed palm-leaf manuscripts etched with iron styluses and rubbed with soot ink'
      ]
    },
    {
      id: 'a3_monuments',
      number: 'A3',
      title: 'Monumental Architecture',
      type: 'checkbox',
      maxSelect: 3,
      category: 'A',
      guidance: 'Select up to 3 colossal engineering works that demonstrate imperial authority and spiritual grandeur.',
      options: [
        'Massive stepped Ziggurats or Pyramids towering over the flat landscape',
        'Gravity-fed stone aqueducts, subterranean sewers, and public bathhouses',
        'Cyclopean stone fortresses (massive boulders fitted together without mortar so tightly a knife blade can\'t fit)',
        'Grand colonnaded temples with marble statues and open-air amphitheaters',
        'Thousands of miles of frontier defensive walls and watchtowers (like the Great Wall)',
        'Planned grid-layout cities with standardized baked-brick houses and indoor drainage (like Indus Valley)',
        'Rock-cut cliffside temples and royal mausoleums carved directly into towering sandstone canyons',
        'Vast hypostyle reception halls with soaring stone column forests and glazed ceramic brick friezes'
      ]
    },
    {
      id: 'a4_hydraulic',
      number: 'A4',
      title: 'Agricultural & Hydraulic Engineering',
      type: 'checkbox',
      category: 'A',
      guidance: 'Infrastructural feats that bend water and geography to feed swelling urban populations.',
      options: [
        'Basin irrigation, dikes, and shadufs (counterweight buckets to lift river water)',
        'Mountain terrace farming (carving flat steps into steep cliffs with retaining walls)',
        'Chinampas ("floating gardens" built on shallow lake beds using woven reeds and fertile mud)',
        'Qanats (underground channels that carry mountain groundwater across hot deserts without evaporating)',
        'Heavy iron-tipped plows pulled by oxen and crop rotation systems',
        'Intricate canal locks, sluice gates, and water-powered grain mills',
        'Check-dams and rock terracing designed to trap flash-flood desert runoff and fertile silt'
      ]
    },
    {
      id: 'a5_science',
      number: 'A5',
      title: 'Scientific, Mathematical & Technological Breakthroughs',
      type: 'checkbox',
      category: 'A',
      guidance: 'Pioneering breakthroughs in natural science, calculation, medicine, and manufacturing.',
      options: [
        'Base-60 math system (giving us 60-minute hours and 360-degree circles)',
        'Invention of the concept of "Zero" and a remarkably accurate 365.24-day solar calendar',
        'Advanced metallurgy (smelting bronze alloys, cast iron, or quench-hardened steel)',
        'Celestial navigation (sailing out of sight of land at night using the North Star)',
        'Concrete that can set underwater (for building massive harbors and domes)',
        'Herbal medicine, cranial surgery (trepanation), and setting broken bones',
        'Silk cultivation, glassblowing, or rare purple dye extracted from sea snails',
        'Magnetic compass lodestone orientation and early earthquake seismoscopes',
        'Distillation of essential oils, chemical mordants, and medicinal antiseptic extracts'
      ]
    }
  ],
  P: [
    {
      id: 'p1_gov_system',
      number: 'P1',
      title: 'System of Government',
      type: 'radio',
      category: 'P',
      guidance: 'The institutional locus of state sovereignty and decision-making power.',
      options: [
        'Centralized Absolute Monarchy (one King/Emperor holds total power over a unified empire)',
        'Decentralized City-States (dozens of independent cities with the same culture that constantly war with each other)',
        'Aristocratic Oligarchy / Republic (ruled by a Senate or Council of wealthy landowning families)',
        'Direct Democracy (all free adult male citizens vote directly on laws and wars in a public assembly)',
        'Military Junta / Stratocracy (ruled by warrior-kings and a council of top generals)',
        'Feudal Bureaucracy (Emperor rules through appointed governors or regional lords who collect taxes)',
        'Maritime Thalassocracy (naval confederation where autonomous coastal port cities contribute galleys and maritime tribute)',
        'Diarchy (two co-equal hereditary kings balancing civil domestic duties and active wartime command)'
      ]
    },
    {
      id: 'p2_succession',
      number: 'P2',
      title: 'Succession & Transfer of Power',
      type: 'radio',
      category: 'P',
      guidance: 'How political authority transitions across generations without descending into anarchy.',
      options: [
        'Hereditary Primogeniture (passes strictly to the eldest son or royal bloodline)',
        'Mandate of Heaven / Dynastic Cycle (ruling family stays in power until floods/famines prove the gods revoked their right to rule, justifying rebellion)',
        'Election by Citizen Assembly or Noble Council (term limits or life appointments via vote)',
        'Meritocratic Civil Service Exams (officials are chosen by passing brutal written tests on law and philosophy)',
        'Trial by Strength / Palace Intrigue (when the king dies, royal brothers fight a civil war until one survives)',
        'Adoption of the Best Man (ruler selects and adopts the most competent commander or statesman as rightful imperial heir)',
        'Tanistry / Kurultai Council (hereditary noble tribal assembly choosing the most battle-tested prince from the royal clan)'
      ]
    },
    {
      id: 'p3_law_system',
      number: 'P3',
      title: 'Legal Code & Justice System',
      type: 'radio',
      category: 'P',
      guidance: 'How social norms, property disputes, and violent crimes are adjudicated.',
      options: [
        'Written Public Law Pillars (like Hammurabi\'s Code — carved in stone in the town square so no judge can make up rules)',
        'Lex Talionis ("Eye for an Eye" — literal physical retaliation for crimes among equals)',
        'Social-Class Tiered Punishments (a noble who injures a peasant pays a small silver fine; a peasant who injures a noble is executed)',
        'Legalism (strict, harsh collective punishment — if one person breaks the law, their whole family or neighborhood is punished)',
        'Jury Trials & Restorative Justice (large citizen juries vote on guilt; focus on fines, debt forgiveness, or ostracism/exile)',
        'Trial by Ordeal (accused is thrown into a sacred river; if they sink, the river god rejects them as guilty)',
        'Codified Civil Jurisprudence with written contracts, professional advocates, and legal precedents (Roman civil law tradition)'
      ]
    },
    {
      id: 'p4_military',
      number: 'P4',
      title: 'Military Organization & Doctrines',
      type: 'checkbox',
      maxSelect: 3,
      category: 'P',
      guidance: 'Select up to 3 core military branches and strategic doctrines that defend the borders or conquer neighbors.',
      options: [
        'Seasonal Peasant Levy (farmers are drafted after harvest season, given spears, and sent to fight)',
        'Permanent Professional Standing Army (full-time paid soldiers who train year-round)',
        'Elite Chariot Corps (two-wheeled horse-drawn platforms with composite bow archers)',
        'Heavy Infantry Phalanx (wall of overlapping bronze shields and 18-foot pikes)',
        'Siege Warfare Specialists (battering rams, siege towers, sappers digging under walls, catapults)',
        'Naval Supremacy (trireme warships with bronze battering rams dominating sea lanes)',
        'Psychological Terror (flaying rebel leaders and building pyramids of skulls so cities surrender without fighting)',
        'Horse Archer Light Cavalry (highly mobile skirmishers employing the feigned retreat and Parthian shot)',
        'Armored War Elephant Corps (massive beasts bred for battlefield shock, breaking enemy infantry lines and terrifying cavalry)'
      ]
    },
    {
      id: 'p5_foreign_policy',
      number: 'P5',
      title: 'Foreign Policy & How Conquered Peoples Are Treated',
      type: 'radio',
      category: 'P',
      guidance: 'Imperial integration strategy: brutal extraction, administrative tolerance, or cultural assimilation.',
      options: [
        'Mass Deportation & Assimilation (relocating conquered populations across the empire so they can\'t rebel)',
        'Tributary Vassals (local kings keep their thrones and religions as long as they pay annual gold/grain tribute)',
        'Cultural Integration & Citizenship (conquered elites are granted citizenship, roads, and trade benefits)',
        'Isolationism (building walls and closing borders; viewing all outsiders as uncivilized barbarians)',
        'Total Enslavement & Extraction (razing enemy cities and turning the entire population into state laborers)',
        'Satrapy Provincial Administration (regional autonomy, local religious tolerance, and royal governors connected by imperial post roads)'
      ]
    }
  ],
  E: [
    {
      id: 'e1_crops',
      number: 'E1',
      title: 'Staple Agricultural Crops',
      type: 'checkbox',
      minSelect: 2,
      maxSelect: 3,
      category: 'E',
      guidance: 'Select 2 to 3 foundational caloric crops that feed urban centers and support specialization.',
      options: [
        'Wheat and Barley (for bread, porridge, and brewing beer — standard in fertile crescents)',
        'Wet-paddy Rice and Millet (high-calorie crops supporting massive populations)',
        'Maize (Corn), Beans, and Squash ("Three Sisters" grown together symbiotically)',
        'Freeze-dried Potatoes (Chuño) and Quinoa (high-altitude mountain crops)',
        'Olives and Grapes (grown in rocky soil to press into high-value olive oil and wine for export)',
        'Date Palms and Figs (drought-resistant sweet staples producing timber, fibers, and wine in desert oases)',
        'Sorghum, Yams, and Teff (heat-tolerant grains cultivated along tropical and savannah river courses)'
      ]
    },
    {
      id: 'e2_animals',
      number: 'E2',
      title: 'Domesticated Animals',
      type: 'checkbox',
      category: 'E',
      guidance: 'Beasts of burden, food sources, and cavalry mounts available to your society.',
      options: [
        'Oxen and Water Buffalo (heavy draft animals for pulling plows and wagons)',
        'Sheep and Goats (for wool, milk, cheese, and leather in rocky terrain)',
        'Horses and Camels (for aristocratic cavalry, messengers, and desert caravan trade)',
        'Llamas and Alpacas (light pack animals and source of warm mountain wool; no heavy wheeled carts)',
        'None — all goods are carried on the backs of human porters and canoes (like the Maya/Aztec)',
        'Donkeys and Mules (sure-footed pack equines carrying bulky freight through mountain passes)',
        'War Hounds and Herding Dogs (bred for guarding storehouses, palace security, and battlefield support)'
      ]
    },
    {
      id: 'e3_currency',
      number: 'E3',
      title: 'Medium of Exchange / Currency',
      type: 'radio',
      category: 'E',
      guidance: 'The mechanism for valuation, trade settlement, and fiscal accounting.',
      options: [
        'Standardized Stamped Coins (electrum, gold, silver, or bronze coins guaranteed by the state)',
        'Weighed Metal Bullion (chopping silver rings or copper ingots and weighing them on scales for every purchase)',
        'Commodity Money (cacao beans, cowrie shells, salt blocks, or bolts of silk used as cash)',
        'State Grain Redistribution (no money; all farmers give crops to the temple/palace, which hands out daily rations of bread and beer)',
        'Pure Barter & Credit Tallies (trading goods directly or keeping tabs on clay tablets)',
        'Cast Bronze Tool Money (currency cast in the shape of miniature spade blades, knives, or rings)'
      ]
    },
    {
      id: 'e4_taxation',
      number: 'E4',
      title: 'Primary Method of Taxation',
      type: 'checkbox',
      category: 'E',
      guidance: 'How the state extracts surplus to fund monuments, armies, and administrative bureaucracies.',
      options: [
        'Agricultural Tithe (tax collectors measure field sizes after floods and take 10% to 30% of the harvest)',
        'Corvée Labor System (every peasant family owes 2 months of physical labor per year digging canals or building pyramids during the off-season)',
        'Customs Duties & Trade Tariffs (taxing merchant ships at harbors and caravans at city gates)',
        'State Monopolies (the government owns all salt, iron, and mines; citizens must buy from the state)',
        'Tribute from Conquered Provinces (citizens pay zero taxes because conquered neighbors fund the empire)',
        'Head Tax / Poll Tax (mandatory annual flat tax levied in silver or cloth upon every adult citizen)'
      ]
    },
    {
      id: 'e5_trade',
      number: 'E5',
      title: 'Trade Networks & Exports',
      type: 'radio',
      category: 'E',
      guidance: 'The geographical range and character of commercial exchange.',
      options: [
        'Maritime Trade Empire (merchant fleets sailing across seas to establish trading colonies)',
        'Overland Silk/Incense Caravan Routes (long-distance relay trade across deserts and mountains)',
        'Riverine Network (barges floating downriver with stone/grain and sailing back upriver using wind)',
        'Self-Sufficient Command Economy (foreign trade is banned or strictly controlled by royal agents; everything needed is produced internally)',
        'Vertical Archipelago Exchange (highland and lowland ecological tiers swapping mountain tubers/wool for coastal fish and valley cotton)'
      ]
    }
  ],
  S: [
    {
      id: 's1_apex',
      number: 'S1',
      title: 'The Ruling Apex (Who sits at the very top of the pyramid?)',
      type: 'radio',
      category: 'S',
      guidance: 'The supreme social tier wielding absolute prestige, moral authority, and wealth.',
      options: [
        'The God-King and Royal Dynasty (untouchable divine bloodline)',
        'Priest-Kings and Temple High Priests (mediators between gods and humans)',
        'Landowning Warrior Aristocracy / Patricians (noble families who control the cavalry and estates)',
        'Philosopher-Bureaucrats / Mandarins (scholars who passed the imperial exams)',
        'Plutocratic Merchant Oligarchy (hereditary merchant dynasties controlling shipping guilds and private banks)',
        'Dual Monarchs (co-ruling royal lineages balancing judicial administration and martial command)'
      ]
    },
    {
      id: 's2_middle',
      number: 'S2',
      title: 'The Middle Class & Specialized Artisans (Who is the most respected middle tier?)',
      type: 'radio',
      category: 'S',
      guidance: 'The functional core keeping the administrative, productive, or commercial engines running.',
      options: [
        'Scribes and Record-Keepers (highly respected because fewer than 2% of people can read/write)',
        'Master Craftsmen & Metallurgists (stonemasons, bronze-smiths, jewelers)',
        'Long-Distance Merchants (wealthy traders who risk their lives on caravans and ships)',
        'Free Smallholder Farmers (seen as the virtuous backbone of society and the military, while merchants are looked down on as greedy parasites)',
        'Astronomer-Physicians and Master Herbalists (keepers of sacred calendars, medicine, and temple engineering)',
        'Naval Navigators and Master Shipwrights (commanding extraordinary maritime prestige and guild privileges)'
      ]
    },
    {
      id: 's3_mobility',
      number: 'S3',
      title: 'Social Mobility (Can someone move up the social pyramid?)',
      type: 'radio',
      category: 'S',
      guidance: 'The permeability of class barriers between the common laborer and the elite.',
      options: [
        'Rigid Hereditary Caste System (zero mobility; you must marry and work in the exact caste your parents were born into)',
        'Scribal / Exam Mobility (anyone who manages to learn to read/write or pass state exams can become a rich official)',
        'Military Valor (a peasant who captures an enemy commander or shows bravery in battle is rewarded with land and noble status)',
        'Wealth-Based Mobility (class is determined purely by property/income; if a merchant gets rich enough, they move up a tier)',
        'Temple Priesthood Ordination (any free citizen initiated into the mystery rites or temple orders can elevate their family\'s rank)',
        'Imperial Manumission & Patronage (freed former slaves and devoted clients rising through imperial administrative favor)'
      ]
    },
    {
      id: 's4_gender',
      number: 'S4',
      title: 'Gender Roles & Legal Status of Women',
      type: 'radio',
      category: 'S',
      guidance: 'The legal autonomy, property rights, and public influence granted to women.',
      options: [
        'Strict Patriarchal Seclusion (women are legally minors owned by fathers/husbands, kept indoors, cannot own land)',
        'High Legal Autonomy (like Ancient Egypt — women can own property, initiate divorce, sign contracts, run businesses, and even rule as Pharaoh)',
        'Militarized Matriarchal Autonomy (like Sparta — while men live in barracks, women manage all estates, inherit wealth, and train physically)',
        'Religious & Economic Influence (men hold political office, but women serve as powerful High Priestesses, healers, and market textile merchants)',
        'Gender Parallelism & Complementary Authority (distinct but equal civic, agricultural, and spiritual spheres of authority for women and men)'
      ]
    },
    {
      id: 's5_unfree_labor',
      number: 'S5',
      title: 'The Bottom Tier & Unfree Labor (Slavery)',
      type: 'radio',
      category: 'S',
      guidance: 'The foundation of the labor pyramid—how forced or subordinate labor is extracted.',
      options: [
        'Prisoners of War & Chattel Slavery (captured enemies become permanent property working in state silver mines, galleys, and estates)',
        'Temporary Debt Bondage (citizens who can\'t pay taxes work as servants for 3 to 7 years, then must legally be freed)',
        'State Serfs / Helots (conquered locals tied permanently to the land who farm for the ruling warrior class and frequently revolt)',
        'Paid Free Laborers Only (monuments are built by proud, well-fed peasant crews paid in meat, beer, grain, and tax exemptions)',
        'Imperial State Slaves & Palace Bureaucrats (unfree royal servants who nonetheless wield immense administrative power over free subjects)',
        'Ritual War Captives (captives reserved exclusively for temple construction, ritual ballgames, and seasonal blood sacrifices)'
      ]
    }
  ]
};

// Historical Presets for Instant Loading
export const HISTORICAL_PRESETS = {
  egypt: {
    name: 'Kemet (The Black Land of the Nile)',
    inspiration: 'Ancient Egypt (Old, Middle, New Kingdom)',
    answers: {
      g1_freshwater: 'Predictable annual flooding river (like the Nile — leaves rich black silt, easy to plan around)',
      g2_terrain: [
        'Arid desert expanses surrounded by narrow fertile river strips',
        'Vast river delta marshlands and bayous intersected by tidal estuaries'
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
        'Lack of horses or pack animals for transport and cavalry'
      ],
      g6_disasters: [
        'Multi-year severe droughts that dry up canals and cause famine',
        'Encroaching desert sand dunes and hyper-arid dust storms suffocating frontier farmland'
      ],
      r1_structure: 'Theocratic God-King Worship (the living ruler is literally a god on Earth, like the Pharaoh)',
      r2_demeanor: 'Benevolent and predictable (because the environment is stable, gods are seen as loving protectors)',
      r3_rituals: [
        'Daily food, wine, and incense offerings placed in front of temple statues',
        'Astrological tracking of stars and planets to predict the gods\' moods'
      ],
      r4_afterlife: 'Moral Judgment & Paradise (heart/soul is weighed; good people go to a fertile paradise, bad are devoured)',
      r5_gov_relation: 'Divine Right Monarchy (the King rules, but claims the gods chose him — Mandate of Heaven)',
      a1_writing: 'Hieroglyphs (elaborate carved and painted sacred symbols representing sounds and ideas)',
      a2_medium: 'Papyrus scrolls made from pressed river reeds (lightweight, but rots in humid climates)',
      a3_monuments: [
        'Massive stepped Ziggurats or Pyramids towering over the flat landscape',
        'Rock-cut cliffside temples and royal mausoleums carved directly into towering sandstone canyons'
      ],
      a4_hydraulic: [
        'Basin irrigation, dikes, and shadufs (counterweight buckets to lift river water)'
      ],
      a5_science: [
        'Invention of the concept of "Zero" and a remarkably accurate 365.24-day solar calendar',
        'Herbal medicine, cranial surgery (trepanation), and setting broken bones'
      ],
      p1_gov_system: 'Centralized Absolute Monarchy (one King/Emperor holds total power over a unified empire)',
      p2_succession: 'Hereditary Primogeniture (passes strictly to the eldest son or royal bloodline)',
      p3_law_system: 'Social-Class Tiered Punishments (a noble who injures a peasant pays a small silver fine; a peasant who injures a noble is executed)',
      p4_military: [
        'Seasonal Peasant Levy (farmers are drafted after harvest season, given spears, and sent to fight)',
        'Elite Chariot Corps (two-wheeled horse-drawn platforms with composite bow archers)'
      ],
      p5_foreign_policy: 'Tributary Vassals (local kings keep their thrones and religions as long as they pay annual gold/grain tribute)',
      e1_crops: [
        'Wheat and Barley (for bread, porridge, and brewing beer — standard in fertile crescents)',
        'Date Palms and Figs (drought-resistant sweet staples producing timber, fibers, and wine in desert oases)'
      ],
      e2_animals: [
        'Oxen and Water Buffalo (heavy draft animals for pulling plows and wagons)',
        'Sheep and Goats (for wool, milk, cheese, and leather in rocky terrain)'
      ],
      e3_currency: 'State Grain Redistribution (no money; all farmers give crops to the temple/palace, which hands out daily rations of bread and beer)',
      e4_taxation: [
        'Agricultural Tithe (tax collectors measure field sizes after floods and take 10% to 30% of the harvest)',
        'Corvée Labor System (every peasant family owes 2 months of physical labor per year digging canals or building pyramids during the off-season)'
      ],
      e5_trade: 'Riverine Network (barges floating downriver with stone/grain and sailing back upriver using wind)',
      s1_apex: 'The God-King and Royal Dynasty (untouchable divine bloodline)',
      s2_middle: 'Scribes and Record-Keepers (highly respected because fewer than 2% of people can read/write)',
      s3_mobility: 'Scribal / Exam Mobility (anyone who manages to learn to read/write or pass state exams can become a rich official)',
      s4_gender: 'High Legal Autonomy (like Ancient Egypt — women can own property, initiate divorce, sign contracts, run businesses, and even rule as Pharaoh)',
      s5_unfree_labor: 'Paid Free Laborers Only (monuments are built by proud, well-fed peasant crews paid in meat, beer, grain, and tax exemptions)'
    }
  },
  mesopotamia: {
    name: 'Sumer & Babylon (The Land Between the Rivers)',
    inspiration: 'Mesopotamia (Sumer, Akkad, Babylon, Assyria)',
    answers: {
      g1_freshwater: 'Violent, unpredictable twin rivers (like the Tigris/Euphrates — requires heavy levee and canal work)',
      g2_terrain: [
        'Flat, featureless alluvial floodplains (great for farming, terrible for defense)'
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
      r1_structure: 'Anthropomorphic Polytheism (dozens of gods with human personalities, jealousy, and family drama)',
      r2_demeanor: 'Cruel, capricious, and angry (because floods/disasters are random, gods must be constantly appeased)',
      r3_rituals: [
        'Daily food, wine, and incense offerings placed in front of temple statues',
        'Oracle divination (reading cracks in burned turtle shells/ox bones, or inspecting animal livers)',
        'Astrological tracking of stars and planets to predict the gods\' moods'
      ],
      r4_afterlife: 'Grim Underworld (everyone — rich or poor, good or bad — goes to a dark, dusty land of shadows)',
      r5_gov_relation: 'Power Struggle (the King and the Temple Priests constantly compete for wealth, land, and influence)',
      a1_writing: 'Cuneiform (wedge-shaped marks pressed into wet clay with a reed stylus)',
      a2_medium: 'Baked or sun-dried clay tablets (heavy, but fireproof and lasts thousands of years)',
      a3_monuments: [
        'Massive stepped Ziggurats or Pyramids towering over the flat landscape'
      ],
      a4_hydraulic: [
        'Basin irrigation, dikes, and shadufs (counterweight buckets to lift river water)'
      ],
      a5_science: [
        'Base-60 math system (giving us 60-minute hours and 360-degree circles)',
        'Advanced metallurgy (smelting bronze alloys, cast iron, or quench-hardened steel)'
      ],
      p1_gov_system: 'Decentralized City-States (dozens of independent cities with the same culture that constantly war with each other)',
      p2_succession: 'Hereditary Primogeniture (passes strictly to the eldest son or royal bloodline)',
      p3_law_system: 'Written Public Law Pillars (like Hammurabi\'s Code — carved in stone in the town square so no judge can make up rules)',
      p4_military: [
        'Permanent Professional Standing Army (full-time paid soldiers who train year-round)',
        'Siege Warfare Specialists (battering rams, siege towers, sappers digging under walls, catapults)'
      ],
      p5_foreign_policy: 'Mass Deportation & Assimilation (relocating conquered populations across the empire so they can\'t rebel)',
      e1_crops: [
        'Wheat and Barley (for bread, porridge, and brewing beer — standard in fertile crescents)',
        'Date Palms and Figs (drought-resistant sweet staples producing timber, fibers, and wine in desert oases)'
      ],
      e2_animals: [
        'Oxen and Water Buffalo (heavy draft animals for pulling plows and wagons)',
        'Sheep and Goats (for wool, milk, cheese, and leather in rocky terrain)'
      ],
      e3_currency: 'Weighed Metal Bullion (chopping silver rings or copper ingots and weighing them on scales for every purchase)',
      e4_taxation: [
        'Agricultural Tithe (tax collectors measure field sizes after floods and take 10% to 30% of the harvest)',
        'Customs Duties & Trade Tariffs (taxing merchant ships at harbors and caravans at city gates)'
      ],
      e5_trade: 'Riverine Network (barges floating downriver with stone/grain and sailing back upriver using wind)',
      s1_apex: 'Priest-Kings and Temple High Priests (mediators between gods and humans)',
      s2_middle: 'Scribes and Record-Keepers (highly respected because fewer than 2% of people can read/write)',
      s3_mobility: 'Wealth-Based Mobility (class is determined purely by property/income; if a merchant gets rich enough, they move up a tier)',
      s4_gender: 'Strict Patriarchal Seclusion (women are legally minors owned by fathers/husbands, kept indoors, cannot own land)',
      s5_unfree_labor: 'Temporary Debt Bondage (citizens who can\'t pay taxes work as servants for 3 to 7 years, then must legally be freed)'
    }
  },
  maya: {
    name: 'Tikal & Copan (The Jade Jaguar Realm)',
    inspiration: 'Maya / Aztec / Inca (Mesoamerica & Andes)',
    answers: {
      g1_freshwater: 'Underground limestone sinkholes and aquifers (like Mayan cenotes — no surface rivers)',
      g2_terrain: [
        'Dense, humid tropical rainforest with thick canopy'
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
        'Lack of hard stone or metal ores (only have mud and clay)',
        'Lack of horses or pack animals for transport and cavalry'
      ],
      g6_disasters: [
        'Multi-year severe droughts that dry up canals and cause famine',
        'Locust swarms and agricultural blights'
      ],
      r1_structure: 'Animism & Nature Spirits (every river, mountain, tree, and thunderstorm has a living spirit)',
      r2_demeanor: 'Transactional ("Do ut des" — "I give so that you might give"; strict business-like sacrifices for favors)',
      r3_rituals: [
        'Bloodletting or human sacrifice (captives or volunteers offered to keep the sun moving/rain falling)',
        'Astrological tracking of stars and planets to predict the gods\' moods'
      ],
      r4_afterlife: 'Grim Underworld (everyone — rich or poor, good or bad — goes to a dark, dusty land of shadows)',
      r5_gov_relation: 'Pure Theocracy (the High Priest IS the ruler; religious law and state law are identical)',
      a1_writing: 'Pictographs & Ideograms carved into stone stelae and folding bark-paper books (codices)',
      a2_medium: 'Carved directly into limestone walls, obelisks, and wax-covered wooden tablets',
      a3_monuments: [
        'Massive stepped Ziggurats or Pyramids towering over the flat landscape'
      ],
      a4_hydraulic: [
        'Chinampas ("floating gardens" built on shallow lake beds using woven reeds and fertile mud)'
      ],
      a5_science: [
        'Invention of the concept of "Zero" and a remarkably accurate 365.24-day solar calendar',
        'Herbal medicine, cranial surgery (trepanation), and setting broken bones'
      ],
      p1_gov_system: 'Decentralized City-States (dozens of independent cities with the same culture that constantly war with each other)',
      p2_succession: 'Hereditary Primogeniture (passes strictly to the eldest son or royal bloodline)',
      p3_law_system: 'Lex Talionis ("Eye for an Eye" — literal physical retaliation for crimes among equals)',
      p4_military: [
        'Seasonal Peasant Levy (farmers are drafted after harvest season, given spears, and sent to fight)',
        'Psychological Terror (flaying rebel leaders and building pyramids of skulls so cities surrender without fighting)'
      ],
      p5_foreign_policy: 'Tributary Vassals (local kings keep their thrones and religions as long as they pay annual gold/grain tribute)',
      e1_crops: [
        'Maize (Corn), Beans, and Squash ("Three Sisters" grown together symbiotically)'
      ],
      e2_animals: [
        'None — all goods are carried on the backs of human porters and canoes (like the Maya/Aztec)'
      ],
      e3_currency: 'Commodity Money (cacao beans, cowrie shells, salt blocks, or bolts of silk used as cash)',
      e4_taxation: [
        'Tribute from Conquered Provinces (citizens pay zero taxes because conquered neighbors fund the empire)',
        'Corvée Labor System (every peasant family owes 2 months of physical labor per year digging canals or building pyramids during the off-season)'
      ],
      e5_trade: 'Overland Silk/Incense Caravan Routes (long-distance relay trade across deserts and mountains)',
      s1_apex: 'The God-King and Royal Dynasty (untouchable divine bloodline)',
      s2_middle: 'Master Craftsmen & Metallurgists (stonemasons, bronze-smiths, jewelers)',
      s3_mobility: 'Rigid Hereditary Caste System (zero mobility; you must marry and work in the exact caste your parents were born into)',
      s4_gender: 'Religious & Economic Influence (men hold political office, but women serve as powerful High Priestesses, healers, and market textile merchants)',
      s5_unfree_labor: 'Prisoners of War & Chattel Slavery (captured enemies become permanent property working in state silver mines, galleys, and estates)'
    }
  },
  greece_rome: {
    name: 'The Classical Polis League',
    inspiration: 'Classical Greece & Rome (Polis & Imperium)',
    answers: {
      g1_freshwater: 'High-altitude glacial mountain meltwater (like the Andes — cold, fast-flowing streams)',
      g2_terrain: [
        'Rocky peninsula with jagged coastlines and hundreds of small islands (like Greece)',
        'Steep, jagged mountain ranges (requires terrace farming, provides natural fortresses)'
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
      r1_structure: 'Anthropomorphic Polytheism (dozens of gods with human personalities, jealousy, and family drama)',
      r2_demeanor: 'Transactional ("Do ut des" — "I give so that you might give"; strict business-like sacrifices for favors)',
      r3_rituals: [
        'Ecstatic festivals, theatrical drama, and athletic games held in honor of patron deities',
        'Animal sacrifices (bulls, goats, sheep) burned on outdoor altars'
      ],
      r4_afterlife: 'Grim Underworld (everyone — rich or poor, good or bad — goes to a dark, dusty land of shadows)',
      r5_gov_relation: 'Civic Religion (priests are just regular government officials elected to run public festivals)',
      a1_writing: 'Phonetic Alphabet (20-30 simple letters representing spoken sounds — easy for merchants to learn)',
      a2_medium: 'Carved directly into limestone walls, obelisks, and wax-covered wooden tablets',
      a3_monuments: [
        'Grand colonnaded temples with marble statues and open-air amphitheaters',
        'Gravity-fed stone aqueducts, subterranean sewers, and public bathhouses'
      ],
      a4_hydraulic: [
        'Mountain terrace farming (carving flat steps into steep cliffs with retaining walls)'
      ],
      a5_science: [
        'Concrete that can set underwater (for building massive harbors and domes)',
        'Celestial navigation (sailing out of sight of land at night using the North Star)'
      ],
      p1_gov_system: 'Direct Democracy (all free adult male citizens vote directly on laws and wars in a public assembly)',
      p2_succession: 'Election by Citizen Assembly or Noble Council (term limits or life appointments via vote)',
      p3_law_system: 'Jury Trials & Restorative Justice (large citizen juries vote on guilt; focus on fines, debt forgiveness, or ostracism/exile)',
      p4_military: [
        'Heavy Infantry Phalanx (wall of overlapping bronze shields and 18-foot pikes)',
        'Naval Supremacy (trireme warships with bronze battering rams dominating sea lanes)'
      ],
      p5_foreign_policy: 'Cultural Integration & Citizenship (conquered elites are granted citizenship, roads, and trade benefits)',
      e1_crops: [
        'Olives and Grapes (grown in rocky soil to press into high-value olive oil and wine for export)',
        'Wheat and Barley (for bread, porridge, and brewing beer — standard in fertile crescents)'
      ],
      e2_animals: [
        'Sheep and Goats (for wool, milk, cheese, and leather in rocky terrain)',
        'Horses and Camels (for aristocratic cavalry, messengers, and desert caravan trade)'
      ],
      e3_currency: 'Standardized Stamped Coins (electrum, gold, silver, or bronze coins guaranteed by the state)',
      e4_taxation: [
        'Customs Duties & Trade Tariffs (taxing merchant ships at harbors and caravans at city gates)'
      ],
      e5_trade: 'Maritime Trade Empire (merchant fleets sailing across seas to establish trading colonies)',
      s1_apex: 'Landowning Warrior Aristocracy / Patricians (noble families who control the cavalry and estates)',
      s2_middle: 'Free Smallholder Farmers (seen as the virtuous backbone of society and the military, while merchants are looked down on as greedy parasites)',
      s3_mobility: 'Wealth-Based Mobility (class is determined purely by property/income; if a merchant gets rich enough, they move up a tier)',
      s4_gender: 'Strict Patriarchal Seclusion (women are legally minors owned by fathers/husbands, kept indoors, cannot own land)',
      s5_unfree_labor: 'Prisoners of War & Chattel Slavery (captured enemies become permanent property working in state silver mines, galleys, and estates)'
    }
  }
};

