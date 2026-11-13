// Historical Synergies & Logical Auto-Selection Engine
// Grounded in real ancient history: selecting a technology, weapon, or custom automatically
// links its necessary geographical, agricultural, or institutional prerequisites.
// Architectural Split: 'mandatory' (Hard Prerequisite Cascade) vs 'recommended' (Soft Historical Synergy)

import { checkOptionDisallowed } from './logicRules.js';
import { getFilteredQuestions } from '../data/grapesData.js';

export const LOGICAL_SYNERGIES = {
  // --- FRESHWATER & HYDROLOGICAL PREREQUISITES ---
  "Predictable annual flooding river (like the Nile — leaves rich black silt, easy to plan around)": [
    { targetQ: "a4_hydraulic", option: "Basin irrigation, dikes, and shadufs (counterweight buckets to lift river water)", type: "mandatory" },
    { targetQ: "g4_resources", option: "Rich alluvial clay and mud (for bricks, pottery, and writing tablets)", type: "mandatory" }
  ],
  "Underground limestone sinkholes and aquifers (like Mayan cenotes — no surface rivers)": [
    { targetQ: "g4_resources", option: "Quarried limestone, granite, or marble (for permanent monuments)", type: "mandatory" }
  ],
  "High-altitude glacial mountain meltwater (like the Andes — cold, fast-flowing streams)": [
    { targetQ: "g2_terrain", option: "Steep, jagged mountain ranges (requires terrace farming, provides natural fortresses)", type: "mandatory" },
    { targetQ: "a4_hydraulic", option: "Mountain terrace farming (carving flat steps into steep cliffs with retaining walls)", type: "mandatory" }
  ],
  "Seasonal monsoon rains and rainwater harvesting reservoirs (like the Indus/Khmer)": [
    { targetQ: "a4_hydraulic", option: "Stepwells and Massive Sunken Reservoirs (Vavs / Baolis / Kunds carved deep into bedrock to access deep aquifers and cool communal gathering)", type: "mandatory" }
  ],
  "Desert flash-flood wadis managed through dry-river canyon dams and terraced retention basins (like Nabataea / Petra)": [
    { targetQ: "a4_hydraulic", option: "Check-dams and rock terracing designed to trap flash-flood desert runoff and fertile silt", type: "mandatory" },
    { targetQ: "g3_barriers", option: "Towering vertical sandstone cliffs and slot canyon gorges with hidden bottleneck canyon entrances (the Siq of Petra)", type: "recommended" },
    { targetQ: "a3_monuments", option: "Rock-cut cliffside temples and royal mausoleums carved directly into towering sandstone canyons", type: "recommended" },
    { targetQ: "g7_settlement", option: "Oasis Ksar & Canyon Cliff-Cavern Settlements (defensible mud-brick fortresses or rock-cut canyon dwellings clustered around desert springs, like Petra or Mesa Verde)", type: "recommended" }
  ],
  "Braided loess river basin prone to massive silt accumulation and devastating course shifts (like the Yellow River / Huang He)": [
    { targetQ: "g6_disasters", option: "Rapid silting of canal choke points and violent shifting of navigable river channels", type: "recommended" },
    { targetQ: "p2_succession", option: "Mandate of Heaven / Dynastic Cycle (ruling family stays in power until floods/famines prove the gods revoked their right to rule, justifying rebellion)", type: "recommended" }
  ],

  // --- TERRAIN PREREQUISITES ---
  "Steep, jagged mountain ranges (requires terrace farming, provides natural fortresses)": [
    { targetQ: "a4_hydraulic", option: "Mountain terrace farming (carving flat steps into steep cliffs with retaining walls)", type: "mandatory" },
    { targetQ: "g3_barriers", option: "Impassable, freezing mountain ranges blocking the border", type: "mandatory" }
  ],
  "Rocky peninsula with jagged coastlines and hundreds of small islands (like Greece)": [
    { targetQ: "e5_trade", option: "Maritime Trade Empire (merchant fleets sailing across seas to establish trading colonies)", type: "mandatory" },
    { targetQ: "g3_barriers", option: "Treacherous rocky coastlines, reefs, and stormy seas", type: "mandatory" }
  ],
  "Coastal fog oasis and hyper-arid desert scrub bordered by rich cold-water ocean upwelling currents (like the Peruvian coast / Caral & Paracas)": [
    { targetQ: "g6_disasters", option: "Sudden El Niño Southern Oscillation (ENSO) ocean temperature spikes triggering torrential desert deluge rains and collapsing marine fisheries", type: "recommended" },
    { targetQ: "e1_crops", option: "Cotton and Flax / Linseed (fibers for high-volume textile industries, sails, and oil presses)", type: "recommended" }
  ],
  "Volcanic oceanic high islands and coral ring atolls surrounded by vast open ocean (like Polynesia / Tonga / Hawaii)": [
    { targetQ: "g1_freshwater", option: "Basalt island freshwater lenses, volcanic crater springs, and coconut/breadfruit water storage (like Pacific atolls and high islands)", type: "mandatory" }
  ],

  // --- WRITING SCRIPT & MEDIUM SYNERGIES ---
  "Cuneiform (wedge-shaped marks pressed into wet clay with a reed stylus)": [
    { targetQ: "a2_medium", option: "Baked or sun-dried clay tablets (heavy, but fireproof and lasts thousands of years)", type: "mandatory" },
    { targetQ: "g4_resources", option: "Rich alluvial clay and mud (for bricks, pottery, and writing tablets)", type: "mandatory" },
    { targetQ: "s2_middle", option: "Scribes and Record-Keepers (highly respected because fewer than 2% of people can read/write)", type: "mandatory" }
  ],
  "Hieroglyphs (elaborate carved and painted sacred symbols representing sounds and ideas)": [
    { targetQ: "a2_medium", option: "Papyrus scrolls made from pressed river reeds (lightweight, but rots in humid climates)", type: "recommended" },
    { targetQ: "g4_resources", option: "Papyrus reeds, bamboo, or marsh plants (for paper, boats, and baskets)", type: "recommended" },
    { targetQ: "s2_middle", option: "Scribes and Record-Keepers (highly respected because fewer than 2% of people can read/write)", type: "mandatory" }
  ],
  "Quipu / Knotted Cords (no written words; complex math, census, and history recorded via colored knots)": [
    { targetQ: "e2_animals", option: "Llamas and Alpacas (light pack animals and source of warm mountain wool; no heavy wheeled carts)", type: "mandatory" },
    { targetQ: "e1_crops", option: "Freeze-dried Potatoes (Chuño) and Quinoa (high-altitude mountain crops)", type: "mandatory" }
  ],
  "Pictographs & Ideograms carved into stone stelae and folding bark-paper books (codices)": [
    { targetQ: "a2_medium", option: "Accordion-folded bark paper (amatl) coated with fine lime plaster and painted in mineral pigments", type: "mandatory" }
  ],
  "Cast Bronze Vessels with Long Ritual Inscriptions (Shang/Zhou bronze bells and cauldrons cast with legal deeds and ancestral prayers)": [
    { targetQ: "g4_resources", option: "Copper and tin deposits (for smelting bronze weapons and tools)", type: "mandatory" },
    { targetQ: "r1_structure", option: "Ancestor Veneration & Philosophical Harmony (focus on honoring dead family members and cosmic balance, like Confucianism/Shang China)", type: "recommended" }
  ],

  // --- MILITARY DOCTRINES -> DOMESTICATED ANIMALS & RESOURCES ---
  "Elite Chariot Corps (two-wheeled horse-drawn platforms with composite bow archers)": [
    { targetQ: "e2_animals", option: "Horses and Camels (for aristocratic cavalry, messengers, and desert caravan trade)", type: "mandatory" }
  ],
  "Horse Archer Light Cavalry (highly mobile skirmishers employing the feigned retreat and Parthian shot)": [
    { targetQ: "e2_animals", option: "Horses and Camels (for aristocratic cavalry, messengers, and desert caravan trade)", type: "mandatory" }
  ],
  "Armored War Elephant Corps (massive beasts bred for battlefield shock, breaking enemy infantry lines and terrifying cavalry)": [
    { targetQ: "e2_animals", option: "Asian War Elephants & Work Elephants (trained for heavy logging, clearing jungle tracks, and terrifying battlefield shock)", type: "mandatory" }
  ],
  "Naval Supremacy (trireme warships with bronze battering rams dominating sea lanes)": [
    { targetQ: "g4_resources", option: "Dense cedar, oak, or mahogany forests (for shipbuilding and palace roofs)", type: "mandatory" },
    { targetQ: "e5_trade", option: "Maritime Trade Empire (merchant fleets sailing across seas to establish trading colonies)", type: "mandatory" }
  ],
  "Disciplined Crossbow Phalanxes & Volley Formations (massed rank-and-file archers firing mechanical bronze-triggered crossbows)": [
    { targetQ: "a5_science", option: "Mechanical Triggered Crossbows and Standardized Interchangeable Bronze Parts (Warring States / Qin China)", type: "mandatory" }
  ],
  "Siege Warfare Specialists (battering rams, siege towers, sappers digging under walls, catapults)": [
    { targetQ: "g4_resources", option: "Dense cedar, oak, or mahogany forests (for shipbuilding and palace roofs)", type: "mandatory" }
  ],
  "Outrigger War Canoes & Amphibious Shock Warriors (fast double-hulled vessels carrying warriors armed with shark-tooth clubs and hardwood spears)": [
    { targetQ: "a5_science", option: "Double-Hulled Outrigger Catamaran Engineering, Crab-Claw Sails, and Wave-Piloting Swell Navigation", type: "mandatory" },
    { targetQ: "p3_law_system", option: "Sacred Kapu / Tapu Ecological & Social Taboo Code (strict spiritual laws regulating fishing seasons, resource conservation, and chief conduct)", type: "recommended" }
  ],

  // --- ENGINEERING & ARCHITECTURE FOUNDATIONS ---
  "Chinampas (\"floating gardens\" built on shallow lake beds using woven reeds and fertile mud)": [
    { targetQ: "g1_freshwater", option: "Tropical crater caldera lakes and seasonal interconnected marshland lagoons (like Lake Texcoco and the Valley of Oaxaca)", type: "mandatory" },
    { targetQ: "e1_crops", option: "Maize (Corn), Beans, and Squash (\"Three Sisters\" grown together symbiotically)", type: "mandatory" }
  ],
  "Qanats (underground channels that carry mountain groundwater across hot deserts without evaporating)": [
    { targetQ: "g2_terrain", option: "Arid desert expanses surrounded by narrow fertile river strips", type: "mandatory" }
  ],
  "Heavy iron-tipped plows pulled by oxen and crop rotation systems": [
    { targetQ: "g4_resources", option: "High-grade iron ore (for superior armor and agricultural plows)", type: "mandatory" },
    { targetQ: "e2_animals", option: "Oxen and Water Buffalo (heavy draft animals for pulling plows and wagons)", type: "mandatory" }
  ],
  "Suspension Rope Bridges and Paved Mountain Stairways (spanning sheer Andean canyons with braided ichu grass ropes to connect valleys)": [
    { targetQ: "g3_barriers", option: "Deep river chasms and impassable canyon gorges crossed only by suspension bridges", type: "mandatory" },
    { targetQ: "g2_terrain", option: "Steep, jagged mountain ranges (requires terrace farming, provides natural fortresses)", type: "mandatory" }
  ],
  "Artificial Enclosed Naval Harbors (Cothons) with covered drydocks and slipways for 200+ warships (like Carthage)": [
    { targetQ: "p4_military", option: "Naval Supremacy (trireme warships with bronze battering rams dominating sea lanes)", type: "mandatory" },
    { targetQ: "g2_terrain", option: "Rocky peninsula with jagged coastlines and hundreds of small islands (like Greece)", type: "mandatory" }
  ],
  "Thousands of miles of frontier defensive walls and watchtowers (like the Great Wall)": [
    { targetQ: "s5_unfree_labor", option: "Penal Convict Labor Crews (criminals and political dissidents sentenced to brutal hard labor in state iron mines and remote frontier wall construction)", type: "recommended" },
    { targetQ: "e4_taxation", option: "Corvée Labor System (every peasant family owes 2 months of physical labor per year digging canals or building pyramids during the off-season)", type: "mandatory" }
  ],
  "Gravity-fed stone aqueducts, subterranean sewers, and public bathhouses": [
    { targetQ: "s2_middle", option: "Civil Engineers, Hydraulic Architects, and Quarry Masters (highly privileged master builders who design aqueducts, walls, and canals)", type: "mandatory" },
    { targetQ: "g4_resources", option: "Quarried limestone, granite, or marble (for permanent monuments)", type: "mandatory" }
  ],
  "Mortarless Granite Enclosures (Dzimbahwe) & Towering Carved Stelae Obelisks (like Great Zimbabwe and Aksum)": [
    { targetQ: "g4_resources", option: "Quarried limestone, granite, or marble (for permanent monuments)", type: "mandatory" },
    { targetQ: "e2_animals", option: "Vast Herds of Sanga & Zebu Cattle (walking banks of wealth, milk, blood, leather, and royal bride-price prestige)", type: "recommended" }
  ],
  "Megalithic Volcanic Tuff Statues (Moai) & Open-Air Stone Temple Platforms (Marae / Heiau) facing the ocean": [
    { targetQ: "g4_resources", option: "Basalt, andesite, and diorite volcanic stones (for monumental carving and hard stone grinding tools)", type: "mandatory" },
    { targetQ: "a6_ecology_collapse", option: "Island Ecological Exhaustion & Palm Deforestation (exhausting slow-growing island timber and seabird guano colonies traps populations without ocean-going timber)", type: "recommended" }
  ],

  // --- TRADE, ECONOMY & CURRENCY SYNERGIES ---
  "Trans-Saharan Gold-Salt Trade (caravans crossing vast sand seas connecting savannah goldfields with coastal salt domes)": [
    { targetQ: "e2_animals", option: "Domesticated Dromedary & Bactrian Camels (enduring desert caravanners able to carry 400 lbs across waterless sand for a week)", type: "mandatory" },
    { targetQ: "g4_resources", option: "Vast rock salt domes and coastal evaporation salterns (for meat/fish preservation and vital trade leverage)", type: "mandatory" }
  ],
  "Vertical Archipelago Exchange (highland and lowland ecological tiers swapping mountain tubers/wool for coastal fish and valley cotton)": [
    { targetQ: "g2_terrain", option: "Steep, jagged mountain ranges (requires terrace farming, provides natural fortresses)", type: "mandatory" },
    { targetQ: "e4_taxation", option: "Reciprocal Mit'a Labor Service (rotational community work quotas on royal terraces and storehouses in exchange for state festival feasts)", type: "recommended" }
  ],
  "Cattle & Livestock Wealth Standard (fines, taxes, royal tribute, and marriage alliances paid in live heads of cattle)": [
    { targetQ: "e2_animals", option: "Vast Herds of Sanga & Zebu Cattle (walking banks of wealth, milk, blood, leather, and royal bride-price prestige)", type: "mandatory" }
  ],
  "Standardized Stamped Coins (electrum, gold, silver, or bronze coins guaranteed by the state)": [
    { targetQ: "g4_resources", option: "Gold, silver, jade, or lapis lazuli (for luxury goods and religious idols)", type: "mandatory" }
  ],
  "Marine murex sea snail beds (for extracting prized royal Tyrian purple dye)": [
    { targetQ: "a5_science", option: "Silk cultivation, glassblowing, or rare purple dye extracted from sea snails", type: "mandatory" }
  ],
  "Wild silk cocoons and fine white mulberry groves (for imperial silk weaving and thread)": [
    { targetQ: "s2_middle", option: "Master Weavers, Silk Cultivators, and Textile Guild Masters (commanding high economic status by managing luxury cloth and dye workshops)", type: "mandatory" },
    { targetQ: "e3_currency", option: "Bolts of Woven Silk and Standardized Spun Yarn Skeins (used alongside copper cash for official payments and international tribute)", type: "mandatory" }
  ],
  "Deep Underground Salt-Drilling Derricks using bamboo percussion drills and natural gas pipelines (Han Dynasty)": [
    { targetQ: "g4_resources", option: "Vast rock salt domes and coastal evaporation salterns (for meat/fish preservation and vital trade leverage)", type: "mandatory" },
    { targetQ: "e4_taxation", option: "State Monopolies (the government owns all salt, iron, and mines; citizens must buy from the state)", type: "recommended" }
  ],

  // --- LAW, POLITICS, SOCIETY & RELIGION SYNERGIES ---
  "Written Public Law Pillars (like Hammurabi's Code — carved in stone in the town square so no judge can make up rules)": [
    { targetQ: "p3_law_system", option: "Lex Talionis (\"Eye for an Eye\" — literal physical retaliation for crimes among equals)", type: "mandatory" },
    { targetQ: "g4_resources", option: "Quarried limestone, granite, or marble (for permanent monuments)", type: "mandatory" }
  ],
  "Direct Democracy (all free adult male citizens vote directly on laws and wars in a public assembly)": [
    { targetQ: "p2_succession", option: "Election by Citizen Assembly or Noble Council (term limits or life appointments via vote)", type: "mandatory" },
    { targetQ: "p3_law_system", option: "Jury Trials & Restorative Justice (large citizen juries vote on guilt; focus on fines, debt forgiveness, or ostracism/exile)", type: "mandatory" }
  ],
  "Meritocratic Civil Service Exams (officials are chosen by passing brutal written tests on law and philosophy)": [
    { targetQ: "s3_mobility", option: "Scribal / Exam Mobility (anyone who manages to learn to read/write or pass state exams can become a rich official)", type: "mandatory" },
    { targetQ: "s1_apex", option: "Philosopher-Bureaucrats / Mandarins (scholars who passed the imperial exams)", type: "mandatory" }
  ],
  "Theocratic God-King Worship (the living ruler is literally a god on Earth, like the Pharaoh)": [
    { targetQ: "s1_apex", option: "The God-King and Royal Dynasty (untouchable divine bloodline)", type: "mandatory" },
    { targetQ: "r5_gov_relation", option: "Divine Right Monarchy (the King rules, but claims the gods chose him — Mandate of Heaven)", type: "mandatory" }
  ],
  "Mummification & Tomb Provisioning (body must be preserved with food, furniture, and servants for the next life)": [
    { targetQ: "g4_resources", option: "Natural bitumen and surface asphalt seeps (for caulking boats, water-sealing bricks, and embalming)", type: "recommended" },
    { targetQ: "g4_resources", option: "Quarried limestone, granite, or marble (for permanent monuments)", type: "recommended" }
  ],
  "Militarized Matriarchal Autonomy (like Sparta — while men live in barracks, women manage all estates, inherit wealth, and train physically)": [
    { targetQ: "s5_unfree_labor", option: "State Serfs / Helots (conquered locals tied permanently to the land who farm for the ruling warrior class and frequently revolt)", type: "recommended" },
    { targetQ: "p1_gov_system", option: "Diarchy (two co-equal hereditary kings balancing civil domestic duties and active wartime command)", type: "recommended" }
  ],
  "Maritime Thalassocracy (naval confederation where autonomous coastal port cities contribute galleys and maritime tribute)": [
    { targetQ: "p4_military", option: "Naval Supremacy (trireme warships with bronze battering rams dominating sea lanes)", type: "mandatory" },
    { targetQ: "s2_middle", option: "Naval Navigators and Master Shipwrights (commanding extraordinary maritime prestige and guild privileges)", type: "mandatory" }
  ],
  "Egalitarian Civic Council of Merchant-Artisan Guilds (collective urban governance with no grand royal palaces, like the Indus cities)": [
    { targetQ: "a3_monuments", option: "Planned grid-layout cities with standardized baked-brick houses and indoor drainage (like Indus Valley)", type: "recommended" },
    { targetQ: "e3_currency", option: "Steatite Inscribed Merchant Seals and Clay Envelope Bullae (merchant authentication counters certifying token transactions)", type: "recommended" }
  ],
  "Vast subterranean necropolises guarded by terracotta armies and sealed with celestial constellation vaults": [
    { targetQ: "g4_resources", option: "Rich alluvial clay and mud (for bricks, pottery, and writing tablets)", type: "mandatory" },
    { targetQ: "p1_gov_system", option: "Centralized Absolute Monarchy (one King/Emperor holds total power over a unified empire)", type: "recommended" }
  ],
  "Oracle divination (reading cracks in burned turtle shells/ox bones, or inspecting animal livers)": [
    { targetQ: "a1_writing", option: "Logographic Script (thousands of complex characters where each symbol is a word/concept)", type: "recommended" },
    { targetQ: "s1_apex", option: "Sacred Shaman-Kings and Oracle Astrologers (rulers whose supreme authority derives from trance communication with supernatural cosmic realms)", type: "recommended" }
  ],
  "Matrilineal Royal Succession (throne passes to the son of the king's sister, or is shared by the queen mother / Kandake)": [
    { targetQ: "s4_gender", option: "Dual-Sex Governance with Female Co-Rulers (independent women's assemblies and warrior queens holding constitutional veto power alongside kings)", type: "recommended" },
    { targetQ: "s1_apex", option: "Matriarchal Clan Mothers & Queen Mothers (venerable matriarchs who control land titles, confirm monarch selection, and oversee ancestral rites)", type: "recommended" }
  ],
  "Nomadic Steppe Imperial Confederacy (mobile royal court unifying dozens of horse-riding clans under a supreme Chanyu or Khagan)": [
    { targetQ: "e1_crops", option: "Pastoral Transhumance & Herd Grazing (minimal grain farming; diet of roasted meat, fermented mare's milk [kumis], cheese, and wild steppe grains)", type: "mandatory" },
    { targetQ: "p4_military", option: "Horse Archer Light Cavalry (highly mobile skirmishers employing the feigned retreat and Parthian shot)", type: "mandatory" },
    { targetQ: "r4_afterlife", option: "Royal Kurgan Burial Mounds (timber-lined underground tombs filled with sacrificed horses, gold animal-style art, and weapons under earthen hills)", type: "recommended" }
  ],
  "Double-Hulled Outrigger Catamaran Engineering, Crab-Claw Sails, and Wave-Piloting Swell Navigation": [
    { targetQ: "a1_writing", option: "Marshallese Stick Charts, Wampum Memory Belts, and Oral Songlines (mapping ocean swell refraction and historical treaties without ink)", type: "mandatory" }
  ],

  // --- COMPLEX & HISTORICAL PAIR SYNERGIES (v4.0) ---
  // 1. Hyper-Dense Megacity
  "Hyper-Dense Walled Megacity Core (100,000–1,000,000+ inhabitants fed by radial canal and granary networks, like Rome, Chang'an, or Babylon)": [
    { targetQ: "s6_demographics_health", option: "High-Density Zoonotic Crowd-Disease Endemicity (living alongside cattle, pigs, and dense trade routes breeds smallpox/measles immunity—deadly to isolated neighbors)", type: "mandatory" },
    { targetQ: "s6_demographics_health", option: "State Famine Relief Granaries (Ever-Normal Granaries — state buys grain in bumper years and sells cheap during plagues/famines to prevent mass starvation)", type: "recommended" }
  ],
  // 2. Low-Density Tropical Urbanism
  "Low-Density Tropical Urbanism (dispersed stone temple cores surrounded by sprawling forested garden-homesteads, like Classic Maya Tikal or Angkor)": [
    { targetQ: "g2_terrain", option: "Dense, humid tropical rainforest with thick canopy", type: "mandatory" },
    { targetQ: "a6_ecology_collapse", option: "Monoculture Vulnerability & Aquifer Depletion (over-reliance on a single staple crop and dropping karst water tables leads to catastrophic collapse during megadroughts)", type: "recommended" }
  ],
  // 3. Mobile Seasonal Encampments / Ordu
  "Mobile Seasonal Encampments / Ordu (portable felt yurts and wagon-cities shifting across summer alpine and winter steppe pastures)": [
    { targetQ: "p1_gov_system", option: "Nomadic Steppe Imperial Confederacy (mobile royal court unifying dozens of horse-riding clans under a supreme Chanyu or Khagan)", type: "mandatory" },
    { targetQ: "e1_crops", option: "Pastoral Transhumance & Herd Grazing (minimal grain farming; diet of roasted meat, fermented mare's milk [kumis], cheese, and wild steppe grains)", type: "mandatory" }
  ],
  // 4. Latifundia Slave Estates
  "Latifundia / Aristocratic Slave Estates (vast private plantations owned by senators/nobles and worked by chained chattel slaves, squeezing out small farmers)": [
    { targetQ: "s5_unfree_labor", option: "Prisoners of War & Chattel Slavery (captured enemies become permanent property working in state silver mines, galleys, and estates)", type: "mandatory" },
    { targetQ: "a6_ecology_collapse", option: "Slave-Revolt & Latifundia Hollowing (replacing free citizen-farmers with massive slave plantations hollows out the military recruiting pool and sparks servile wars)", type: "recommended" }
  ],
  // 5. Equal-Field System (Juntian)
  "Equal-Field State Allotment System (Juntian — state periodically redistributes farmland to peasant households based on family size to prevent noble land-grabs)": [
    { targetQ: "p6_intelligence_bureaucracy", option: "Household Registration & Mutual Surveillance Groups (Baojia / Shang Yang system — families grouped into units of 5 or 10 sharing collective guilt for crimes)", type: "recommended" },
    { targetQ: "s2_middle", option: "Free Smallholder Farmers (seen as the virtuous backbone of society and the military, while merchants are looked down on as greedy parasites)", type: "recommended" }
  ],
  // 6. Communal Kinship Ayllu / Calpulli
  "Communal Kinship Ayllu / Calpulli Landholding (land is owned collectively by ancestral clans and worked reciprocally; cannot be bought or sold privately)": [
    { targetQ: "e4_taxation", option: "Reciprocal Mit'a Labor Service (rotational community work quotas on royal terraces and storehouses in exchange for state festival feasts)", type: "mandatory" },
    { targetQ: "p6_intelligence_bureaucracy", option: "Quipu Statistical Census & Royal Warehouse Audits (Chasqui foot-runners delivering knotted demographic and granary ledgers along mountain roads)", type: "recommended" }
  ],
  // 7. Military Cleruchy / Timar
  "Military Cleruchy / Timar Land Grants (conquered arable land parcelled out to veteran soldiers and heavy cavalrymen in exchange for hereditary military service)": [
    { targetQ: "p4_military", option: "Permanent Professional Standing Army (full-time paid soldiers who train year-round)", type: "mandatory" },
    { targetQ: "s3_mobility", option: "Military Valor (a peasant who captures an enemy commander or shows bravery in battle is rewarded with land and noble status)", type: "recommended" }
  ],
  // 8. Imperial Courier Relay & Inspectors
  "Imperial Courier Relay Highways & Secret Inspectors ('King's Eyes and Ears' — horse relay stations every 15 miles with royal spies auditing satraps)": [
    { targetQ: "p5_foreign_policy", option: "Satrapy Provincial Administration (regional autonomy, local religious tolerance, and royal governors connected by imperial post roads)", type: "mandatory" },
    { targetQ: "r6_orthodoxy_heresy", option: "Pluralistic Edicts of Toleration (Cyrus Cylinder / Ashoka's Rock Edicts — state funds diverse local temples and protects minority sects to ensure loyalty)", type: "recommended" }
  ],
  // 9. Household Registration & Mutual Surveillance (Baojia)
  "Household Registration & Mutual Surveillance Groups (Baojia / Shang Yang system — families grouped into units of 5 or 10 sharing collective guilt for crimes)": [
    { targetQ: "p3_law_system", option: "Legalism (strict, harsh collective punishment — if one person breaks the law, their whole family or neighborhood is punished)", type: "mandatory" },
    { targetQ: "r6_orthodoxy_heresy", option: "Book Burning & Suppression of Rival Schools (Fenshu Kengru — state bans dissenting philosophical scrolls and executes non-conformist scholars)", type: "recommended" }
  ],
  // 10. Cryptographic Scytale & Krypteia
  "Cryptographic Scytale Ciphers & Secret Military Police (Krypteia — covert youth squads surveilling subject serf populations and eliminating rebel leaders)": [
    { targetQ: "s5_unfree_labor", option: "State Serfs / Helots (conquered locals tied permanently to the land who farm for the ruling warrior class and frequently revolt)", type: "mandatory" },
    { targetQ: "p1_gov_system", option: "Military Junta / Stratocracy (ruled by warrior-kings and a council of top generals)", type: "recommended" }
  ],
  // 11. Citizen Ostracism & Informer Courts
  "Citizen Ostracism & Public Informer Courts (Sycos / Graphē — citizens vote to exile overly ambitious demagogues for 10 years to prevent tyranny)": [
    { targetQ: "p1_gov_system", option: "Direct Democracy (all free adult male citizens vote directly on laws and wars in a public assembly)", type: "mandatory" },
    { targetQ: "a2_medium", option: "Polished Ostraca (recycled smooth pottery shards used by scribes and commoners for receipts, letters, and voting ballots)", type: "recommended" }
  ],
  // 12. Hydraulic Flush Sewers & Thermae
  "Municipal Hydraulic Flush Sewers, Lead/Terracotta Piping & Public Thermae (Cloaca Maxima-style waste removal reducing waterborne cholera/dysentery)": [
    { targetQ: "a3_monuments", option: "Gravity-fed stone aqueducts, subterranean sewers, and public bathhouses", type: "mandatory" },
    { targetQ: "s6_demographics_health", option: "Endemic Lead/Mercury Metallurgical & Cosmetic Poisoning (elite and artisan life expectancy lowered by silver-smelting fumes, lead pipes, or cinnabar elixirs)", type: "recommended" }
  ],
  // 13. Night-Soil Composting & Boiled Tea Culture
  "Night-Soil Composting & Boiled Water / Herbal Tea Culture (systematic collection of urban human waste for farm fertilizer paired with boiled drinking water)": [
    { targetQ: "e1_crops", option: "Wet-paddy Rice and Millet (high-calorie crops supporting massive populations)", type: "recommended" },
    { targetQ: "a5_science", option: "Herbal medicine, cranial surgery (trepanation), and setting broken bones", type: "recommended" }
  ],
  // 14. Book Burning & Suppression (Fenshu Kengru)
  "Book Burning & Suppression of Rival Schools (Fenshu Kengru — state bans dissenting philosophical scrolls and executes non-conformist scholars)": [
    { targetQ: "p3_law_system", option: "Legalism (strict, harsh collective punishment — if one person breaks the law, their whole family or neighborhood is punished)", type: "mandatory" },
    { targetQ: "p1_gov_system", option: "Centralized Absolute Monarchy (one King/Emperor holds total power over a unified empire)", type: "mandatory" }
  ],
  // 15. Strict Iconoclastic Exclusivism
  "Strict Iconoclastic / Monotheistic Exclusivism (foreign idols and rival temples are smashed; only the single true covenant or state doctrine is tolerated)": [
    { targetQ: "r1_structure", option: "Monolatry / Early Monotheism (worship of one supreme creator god above all others)", type: "mandatory" },
    { targetQ: "s6_demographics_health", option: "Strict Leprosaria, Quarantine Gates & Ritual Impurity Taboos (religious laws mandating isolation of contagious skin diseases, corpses, and tainted meats)", type: "recommended" }
  ],
  // 16. Cataphract Shock Cavalry
  "Cataphract Super-Heavy Shock Cavalry (both rider and warhorse encased in full scale or lamellar iron armor charging with two-handed kontos lances)": [
    { targetQ: "g4_resources", option: "High-grade iron ore (for superior armor and agricultural plows)", type: "mandatory" },
    { targetQ: "e2_animals", option: "Horses and Camels (for aristocratic cavalry, messengers, and desert caravan trade)", type: "mandatory" }
  ],
  // 17. Tax Farming Syndicates (Publicani)
  "Tax Farming Syndicates (Publicani — private investor corporations bidding at auction for the right to collect provincial taxes for a profit)": [
    { targetQ: "s3_mobility", option: "Venality of Office & Equestrian Tax-Farming Wealth (buying noble titles or senatorial rank through state fiscal service)", type: "recommended" },
    { targetQ: "p1_gov_system", option: "Aristocratic Oligarchy / Republic (ruled by a Senate or Council of wealthy landowning families)", type: "recommended" }
  ],
  // 18. Liturgical Wealth Sponsorship (Chorēgia / Trierarchy)
  "Liturgical Wealth Sponsorship (Chorēgia / Trierarchy — the richest citizens are legally required to personally fund one warship or public festival per year)": [
    { targetQ: "p4_military", option: "Naval Supremacy (trireme warships with bronze battering rams dominating sea lanes)", type: "recommended" },
    { targetQ: "r3_rituals", option: "Ecstatic festivals, theatrical drama, and athletic games held in honor of patron deities", type: "recommended" }
  ],
  // 19. Sacred Virgin Priestess Orders
  "Sacred Virgin Priestess Orders (Vestals / God's Wives of Amun / Acllas — elite celibate women wielding immense financial, legal, and political immunity)": [
    { targetQ: "s5_unfree_labor", option: "Temple Oblates and Sacred Dedicatees (families pledged to perpetual temple service as brewers, weavers, and agricultural tenders for the gods)", type: "recommended" },
    { targetQ: "r3_rituals", option: "Daily food, wine, and incense offerings placed in front of temple statues", type: "recommended" }
  ],
  // 20. Ge'ez / Meroitic Abugida Script
  "Ge'ez / Meroitic Abugida Script & Royal Trilingual Stone Inscriptions (syllabic alphabets carved on towering granite obelisks)": [
    { targetQ: "a3_monuments", option: "Mortarless Granite Enclosures (Dzimbahwe) & Towering Carved Stelae Obelisks (like Great Zimbabwe and Aksum)", type: "mandatory" },
    { targetQ: "e5_trade", option: "Monsoon Indian Ocean Coastal & Open-Sea Dhow Trade (navigating biannual monsoon winds between Africa, Arabia, and India)", type: "recommended" }
  ],
  // 21. Marshallese Stick Charts & Oral Songlines
  "Marshallese Stick Charts, Wampum Memory Belts, and Oral Songlines (mapping ocean swell refraction and historical treaties without ink)": [
    { targetQ: "p3_law_system", option: "Elders' Oral Customary Law (unwritten ancestral precedents, kinship compensation wergild fines, and sacred taboo prohibitions)", type: "mandatory" }
  ],
  // 23. Continental River-Confluence Canoe Networks
  "Continental River-Confluence Canoe Networks (trading copper plates, mica, lightning-whelk shells, and furs across thousands of miles of rivers)": [
    { targetQ: "a3_monuments", option: "Massive Earthwork Effigy Mounds and Platform Citadels (engineered earthen pyramid mounds towering over river confluences, like Cahokia)", type: "recommended" },
    { targetQ: "e3_currency", option: "Wampum Shell Belts, Hammered Copper Plates, and Ceremonial Gift Redistribution (Potlatch / Calumet diplomacy)", type: "mandatory" }
  ],
  // 24. Inverted Siphons & Hydraulic Pipelines
  "Inverted Siphons, Pressurized Lead/Ceramic Pipelines, and Multiple-Arch Masonry Dams (crossing deep valleys under hydrostatic pressure)": [
    { targetQ: "a3_monuments", option: "Gravity-fed stone aqueducts, subterranean sewers, and public bathhouses", type: "mandatory" },
    { targetQ: "a5_science", option: "Concrete that can set underwater (for building massive harbors and domes)", type: "recommended" }
  ],
  // 25. Sub-Arctic Boreal Taiga & Baltic Amber
  "Sub-arctic boreal taiga and amber-rich Baltic coastline intersected by seasonal frozen rivers": [
    { targetQ: "g4_resources", option: "Baltic amber, bog iron deposits, and dense sub-arctic fur pelts", type: "mandatory" },
    { targetQ: "e1_crops", option: "Rye, Oats, and Hemp (cold-hardy northern grains and fiber crops suited to short frost-prone summers)", type: "mandatory" },
    { targetQ: "e2_animals", option: "Reindeer and Cold-Weather Steppe Ponies (adapted for sub-arctic tundra and deep winter snow mobility)", type: "recommended" },
    { targetQ: "e5_trade", option: "Amber & Fur Boreal River Portage Routes (linking northern forests to Mediterranean and Black Sea markets)", type: "recommended" }
  ],
  // 26. Endorheic Inland Basin & Silk Caravans
  "Endorheic inland basin with terminal salt lakes and snow-fed piedmont alluvial fans (like the Tarim Basin / Sogdiana)": [
    { targetQ: "a4_hydraulic", option: "Qanats (underground channels that carry mountain groundwater across hot deserts without evaporating)", type: "mandatory" },
    { targetQ: "e5_trade", option: "Overland Silk/Incense Caravan Routes (long-distance relay trade across deserts and mountains)", type: "recommended" }
  ],
  // 27. Fossil Groundwater Artesian Springs & Desert Date Palms
  "Fossil groundwater artesian springs and deep desert depression oases (like the Siwa/Kharga Oases or Garamantes Foggaras)": [
    { targetQ: "a4_hydraulic", option: "Qanats (underground channels that carry mountain groundwater across hot deserts without evaporating)", type: "mandatory" },
    { targetQ: "e1_crops", option: "Date Palms and Figs (drought-resistant sweet staples producing timber, fibers, and wine in desert oases)", type: "mandatory" }
  ],
  // 28. Fertile Volcanic Caldera Valleys & Obsidian
  "Fertile volcanic caldera valleys with nutrient-rich soils and crater lakes (like the Valley of Mexico)": [
    { targetQ: "g1_freshwater", option: "Tropical crater caldera lakes and seasonal interconnected marshland lagoons (like Lake Texcoco and the Valley of Oaxaca)", type: "mandatory" },
    { targetQ: "g4_resources", option: "Obsidian (volcanic glass for razor-sharp blades and surgical tools)", type: "recommended" }
  ],
  // 29. Alluvial Placer Gold Dust & Frankincense Resins
  "Alluvial placer gold dust, ivory, and aromatic frankincense/myrrh resin groves (like Punt / Southern Arabia / Kush)": [
    { targetQ: "r3_rituals", option: "Daily food, wine, and incense offerings placed in front of temple statues", type: "recommended" },
    { targetQ: "e5_trade", option: "Monsoon Indian Ocean Coastal & Open-Sea Dhow Trade (navigating biannual monsoon winds between Africa, Arabia, and India)", type: "recommended" }
  ],
  // 30. Cinnabar & Porcelain Clay (Metallurgical Poisoning)
  "Cinnabar (mercury sulfide), kaolin porcelain clay, and lacquer-tree sap": [
    { targetQ: "s6_demographics_health", option: "Endemic Lead/Mercury Metallurgical & Cosmetic Poisoning (elite and artisan life expectancy lowered by silver-smelting fumes, lead pipes, or cinnabar elixirs)", type: "recommended" }
  ],
  // 31. Armed Sovereign Chartered Merchant Karums & Bullion Currency
  "Armed Sovereign Chartered Merchant Karums (autonomous foreign merchant colonies operating extraterritorial courts inside host kingdoms, like Assyrian Kanesh)": [
    { targetQ: "a1_writing", option: "Cuneiform (wedge-shaped marks pressed into wet clay with a reed stylus)", type: "recommended" },
    { targetQ: "e3_currency", option: "Weighed Metal Bullion (chopping silver rings or copper ingots and weighing them on scales for every purchase)", type: "mandatory" }
  ],
  // 32. Mamluk / Janissary Elite Slave-Soldiers
  "Mamluk / Janissary Elite Slave-Soldiers (foreign youths acquired as unfree dependents and trained as an elite, privileged military caste)": [
    { targetQ: "p4_military", option: "Permanent Professional Standing Army (full-time paid soldiers who train year-round)", type: "mandatory" },
    { targetQ: "a6_ecology_collapse", option: "Praetorian / Warlord Provincial Fragmentation (empowering frontier generals and satraps with private armies leads to endless civil war and imperial breakup)", type: "recommended" }
  ]
};

// Multi-Trigger (Compound) Synergies: when 2 active selections together trigger companion options
export const COMPOUND_SYNERGIES = [
  {
    id: "bloodletting_obsidian_complex",
    title: "Mesoamerican Sacrificial & Obsidian Complex",
    condition: (answers) => {
      const rituals = answers.r3_rituals || [];
      const resources = answers.g4_resources || [];
      const rList = Array.isArray(rituals) ? rituals : [rituals];
      const resList = Array.isArray(resources) ? resources : [resources];
      const hasBloodletting = rList.some(r => r.toLowerCase().includes('bloodletting or human sacrifice'));
      const hasObsidian = resList.some(res => res.toLowerCase().includes('obsidian (volcanic glass'));
      return hasBloodletting && hasObsidian;
    },
    targets: [
      {
        targetQ: "s5_unfree_labor",
        option: "Ritual War Captives (captives reserved exclusively for temple construction, ritual ballgames, and seasonal blood sacrifices)",
        type: "recommended"
      },
      {
        targetQ: "s3_mobility",
        option: "Ritual Athletic & Sacrificial Prowess (exceptional champions in sacred ballgames, wrestling games, or gladiator arenas granted noble honors)",
        type: "recommended"
      }
    ]
  },
  {
    id: "satrapy_continental_empire",
    title: "Continental Imperial Satrapy Administration",
    condition: (answers, currentEra, currentScale) => {
      const foreign = answers.p5_foreign_policy || [];
      const fList = Array.isArray(foreign) ? foreign : [foreign];
      const hasSatrapy = fList.some(f => f.toLowerCase().includes('satrapy provincial administration'));
      const isContinental = currentScale === 'continental_empire';
      const isIronAgeOrLater = currentEra !== 'early_bronze' && currentEra !== 'late_bronze';
      return hasSatrapy && isContinental && isIronAgeOrLater;
    },
    targets: [
      {
        targetQ: "a1_writing",
        option: "Kharosthi and Aramaic Administrative Cursive (rapid ink-on-parchment script designed for imperial courier decrees across multi-lingual empires)",
        type: "recommended"
      },
      {
        targetQ: "e4_taxation",
        option: "Tribute from Conquered Provinces (citizens pay zero taxes because conquered neighbors fund the empire)",
        type: "recommended"
      }
    ]
  },
  {
    id: "ocean_voyaging_agriculture",
    title: "Oceanic Wayfinding & High Island Agriculture",
    condition: (answers) => {
      const barriers = answers.g3_barriers || [];
      const crops = answers.e1_crops || [];
      const bList = Array.isArray(barriers) ? barriers : [barriers];
      const cList = Array.isArray(crops) ? crops : [crops];
      const hasOcean = bList.some(b => b.toLowerCase().includes('uncharted offshore open ocean expanses'));
      const hasTaro = cList.some(c => c.toLowerCase().includes('taro, yams, and breadfruit'));
      return hasOcean && hasTaro;
    },
    targets: [
      {
        targetQ: "a5_science",
        option: "Celestial navigation (sailing out of sight of land at night using the North Star)",
        type: "mandatory"
      },
      {
        targetQ: "s2_middle",
        option: "Naval Navigators and Master Shipwrights (commanding extraordinary maritime prestige and guild privileges)",
        type: "mandatory"
      }
    ]
  },
  {
    id: "mesopotamia_salinization_complex",
    title: "Mesopotamian Hydraulic & Salinization Trap",
    condition: (answers) => {
      const g1 = answers.g1_freshwater || [];
      const g1List = Array.isArray(g1) ? g1 : [g1];
      const hasTwinRivers = g1List.some(r => r.toLowerCase().includes('violent, unpredictable twin rivers'));

      const a4 = answers.a4_hydraulic || [];
      const a4List = Array.isArray(a4) ? a4 : [a4];
      const hasBasinIrrigation = a4List.some(h => h.toLowerCase().includes('basin irrigation, dikes, and shadufs'));

      const g2 = answers.g2_terrain || [];
      const g2List = Array.isArray(g2) ? g2 : [g2];
      const hasAridOrFloodplain = g2List.some(t => 
        t.toLowerCase().includes('arid desert expanses') || 
        t.toLowerCase().includes('flat, featureless alluvial floodplains')
      );

      return hasTwinRivers && hasBasinIrrigation && hasAridOrFloodplain;
    },
    targets: [
      {
        targetQ: "g6_disasters",
        option: "Soil salinization (over-irrigation making the soil too salty to grow crops)",
        type: "mandatory"
      },
      {
        targetQ: "a6_ecology_collapse",
        option: "Irreversible Alluvial Soil Salinization (centuries of intensive desert canal irrigation without drainage raises groundwater salt, turning wheat fields into white salt flats)",
        type: "recommended"
      }
    ]
  },
  {
    id: "qin_han_legalist_complex",
    title: "Qin/Han Legalist-Bureaucratic Superstate",
    condition: (answers, currentEra, currentScale) => {
      const p3 = answers.p3_law_system || [];
      const p3List = Array.isArray(p3) ? p3 : [p3];
      const hasLegalism = p3List.some(l => l.toLowerCase().includes('legalism (strict, harsh collective punishment'));

      const p2 = answers.p2_succession || [];
      const p2List = Array.isArray(p2) ? p2 : [p2];
      const hasExams = p2List.some(s => s.toLowerCase().includes('meritocratic civil service exams'));

      const isEmpire = currentScale === 'continental_empire';
      return hasLegalism && hasExams && isEmpire;
    },
    targets: [
      {
        targetQ: "a3_monuments",
        option: "Thousands of miles of frontier defensive walls and watchtowers (like the Great Wall)",
        type: "mandatory"
      },
      {
        targetQ: "e4_taxation",
        option: "State Monopolies (the government owns all salt, iron, and mines; citizens must buy from the state)",
        type: "mandatory"
      },
      {
        targetQ: "p6_intelligence_bureaucracy",
        option: "Household Registration & Mutual Surveillance Groups (Baojia / Shang Yang system — families grouped into units of 5 or 10 sharing collective guilt for crimes)",
        type: "recommended"
      }
    ]
  },
  {
    id: "roman_imperial_complex",
    title: "Roman Imperial Latifundia & Concrete Complex",
    condition: (answers) => {
      const a5 = answers.a5_science || [];
      const a5List = Array.isArray(a5) ? a5 : [a5];
      const hasConcrete = a5List.some(s => s.toLowerCase().includes('concrete that can set underwater'));

      const a3 = answers.a3_monuments || [];
      const a3List = Array.isArray(a3) ? a3 : [a3];
      const hasAqueducts = a3List.some(m => m.toLowerCase().includes('gravity-fed stone aqueducts'));

      const s5 = answers.s5_unfree_labor || [];
      const s5List = Array.isArray(s5) ? s5 : [s5];
      const hasChattel = s5List.some(u => u.toLowerCase().includes('prisoners of war & chattel slavery'));

      return hasConcrete && hasAqueducts && hasChattel;
    },
    targets: [
      {
        targetQ: "e6_property_land",
        option: "Latifundia / Aristocratic Slave Estates (vast private plantations owned by senators/nobles and worked by chained chattel slaves, squeezing out small farmers)",
        type: "recommended"
      },
      {
        targetQ: "s6_demographics_health",
        option: "Municipal Hydraulic Flush Sewers, Lead/Terracotta Piping & Public Thermae (Cloaca Maxima-style waste removal reducing waterborne cholera/dysentery)",
        type: "recommended"
      },
      {
        targetQ: "a6_ecology_collapse",
        option: "Slave-Revolt & Latifundia Hollowing (replacing free citizen-farmers with massive slave plantations hollows out the military recruiting pool and sparks servile wars)",
        type: "recommended"
      }
    ]
  },
  {
    id: "inca_andean_complex",
    title: "Andean Mit'a & Vertical Archipelago State",
    condition: (answers) => {
      const a1 = answers.a1_writing || [];
      const a1List = Array.isArray(a1) ? a1 : [a1];
      const hasQuipu = a1List.some(w => w.toLowerCase().includes('quipu / knotted cords'));

      const a4 = answers.a4_hydraulic || [];
      const a4List = Array.isArray(a4) ? a4 : [a4];
      const hasBridges = a4List.some(h => h.toLowerCase().includes('suspension rope bridges'));

      const g2 = answers.g2_terrain || [];
      const g2List = Array.isArray(g2) ? g2 : [g2];
      const hasMountains = g2List.some(t => t.toLowerCase().includes('steep, jagged mountain ranges'));

      return hasQuipu && hasBridges && hasMountains;
    },
    targets: [
      {
        targetQ: "e5_trade",
        option: "Vertical Archipelago Exchange (highland and lowland ecological tiers swapping mountain tubers/wool for coastal fish and valley cotton)",
        type: "mandatory"
      },
      {
        targetQ: "e4_taxation",
        option: "Reciprocal Mit'a Labor Service (rotational community work quotas on royal terraces and storehouses in exchange for state festival feasts)",
        type: "mandatory"
      },
      {
        targetQ: "e3_currency",
        option: "State Grain Redistribution (no money; all farmers give crops to the temple/palace, which hands out daily rations of bread and beer)",
        type: "mandatory"
      }
    ]
  },
  {
    id: "steppe_nomad_complex",
    title: "Steppe Nomadic Kurgan & Cavalry Hegemony",
    condition: (answers) => {
      const g2 = answers.g2_terrain || [];
      const g2List = Array.isArray(g2) ? g2 : [g2];
      const hasSteppe = g2List.some(t => t.toLowerCase().includes('high-altitude flat plateau (steppe)'));

      const p4 = answers.p4_military || [];
      const p4List = Array.isArray(p4) ? p4 : [p4];
      const hasHorseArchers = p4List.some(m => m.toLowerCase().includes('horse archer light cavalry'));

      const e1 = answers.e1_crops || [];
      const e1List = Array.isArray(e1) ? e1 : [e1];
      const hasPastoral = e1List.some(c => c.toLowerCase().includes('pastoral transhumance & herd grazing'));

      return hasSteppe && hasHorseArchers && hasPastoral;
    },
    targets: [
      {
        targetQ: "p2_succession",
        option: "Tanistry / Kurultai Council (hereditary noble tribal assembly choosing the most battle-tested prince from the royal clan)",
        type: "mandatory"
      },
      {
        targetQ: "r4_afterlife",
        option: "Royal Kurgan Burial Mounds (timber-lined underground tombs filled with sacrificed horses, gold animal-style art, and weapons under earthen hills)",
        type: "mandatory"
      },
      {
        targetQ: "g6_disasters",
        option: "Severe winter blizzards and permafrost frosts (dzud) freezing pasture grasslands and devastating herds of livestock",
        type: "mandatory"
      }
    ]
  },
  {
    id: "afro_indian_ocean_complex",
    title: "Sub-Saharan African Iron-Cattle-Monsoon Complex",
    condition: (answers) => {
      const g2 = answers.g2_terrain || [];
      const g2List = Array.isArray(g2) ? g2 : [g2];
      const hasSavanna = g2List.some(t => t.toLowerCase().includes('elevated temperate highland savanna'));

      const e1 = answers.e1_crops || [];
      const e1List = Array.isArray(e1) ? e1 : [e1];
      const hasSorghum = e1List.some(c => c.toLowerCase().includes('sorghum, yams, and teff'));

      const g4 = answers.g4_resources || [];
      const g4List = Array.isArray(g4) ? g4 : [g4];
      const hasIron = g4List.some(r => r.toLowerCase().includes('high-grade iron ore'));

      return hasSavanna && hasSorghum && hasIron;
    },
    targets: [
      {
        targetQ: "e2_animals",
        option: "Vast Herds of Sanga & Zebu Cattle (walking banks of wealth, milk, blood, leather, and royal bride-price prestige)",
        type: "recommended"
      },
      {
        targetQ: "a3_monuments",
        option: "Mortarless Granite Enclosures (Dzimbahwe) & Towering Carved Stelae Obelisks (like Great Zimbabwe and Aksum)",
        type: "recommended"
      },
      {
        targetQ: "e5_trade",
        option: "Monsoon Indian Ocean Coastal & Open-Sea Dhow Trade (navigating biannual monsoon winds between Africa, Arabia, and India)",
        type: "recommended"
      }
    ]
  },
  {
    id: "athens_thalassocracy_complex",
    title: "Athenian Maritime Democracy & Silver Complex",
    condition: (answers) => {
      const p1 = answers.p1_gov_system || [];
      const p1List = Array.isArray(p1) ? p1 : [p1];
      const hasDemocracy = p1List.some(g => g.toLowerCase().includes('direct democracy'));

      const p4 = answers.p4_military || [];
      const p4List = Array.isArray(p4) ? p4 : [p4];
      const hasNaval = p4List.some(m => m.toLowerCase().includes('naval supremacy (trireme warships'));

      const e3 = answers.e3_currency || [];
      const e3List = Array.isArray(e3) ? e3 : [e3];
      const hasCoins = e3List.some(c => c.toLowerCase().includes('standardized stamped coins'));

      return hasDemocracy && hasNaval && hasCoins;
    },
    targets: [
      {
        targetQ: "e4_taxation",
        option: "Liturgical Wealth Sponsorship (Chorēgia / Trierarchy — the richest citizens are legally required to personally fund one warship or public festival per year)",
        type: "recommended"
      },
      {
        targetQ: "p6_intelligence_bureaucracy",
        option: "Citizen Ostracism & Public Informer Courts (Sycos / Graphē — citizens vote to exile overly ambitious demagogues for 10 years to prevent tyranny)",
        type: "recommended"
      },
      {
        targetQ: "r6_orthodoxy_heresy",
        option: "Philosophical Academy Pluralism (Hundreds of Schools / Agora — competing rationalist, stoic, legalist, and naturalist schools debate freely in public)",
        type: "recommended"
      }
    ]
  },
  {
    id: "cahokia_mound_complex",
    title: "Mississippian Mound-Builder River Network",
    condition: (answers) => {
      const a3 = answers.a3_monuments || [];
      const a3List = Array.isArray(a3) ? a3 : [a3];
      const hasMounds = a3List.some(m => m.toLowerCase().includes('massive earthwork effigy mounds'));

      const e1 = answers.e1_crops || [];
      const e1List = Array.isArray(e1) ? e1 : [e1];
      const hasThreeSisters = e1List.some(c => c.toLowerCase().includes('maize (corn), beans, and squash'));

      return hasMounds && hasThreeSisters;
    },
    targets: [
      {
        targetQ: "e5_trade",
        option: "Continental River-Confluence Canoe Networks (trading copper plates, mica, lightning-whelk shells, and furs across thousands of miles of rivers)",
        type: "recommended"
      },
      {
        targetQ: "e3_currency",
        option: "Wampum Shell Belts, Hammered Copper Plates, and Ceremonial Gift Redistribution (Potlatch / Calumet diplomacy)",
        type: "recommended"
      },
      {
        targetQ: "g7_settlement",
        option: "River-Confluence Palisaded Mound Centers (ceremonial plaza earthworks surrounded by timber stockades and floodplain farm hamlets, like Cahokia)",
        type: "recommended"
      }
    ]
  },
  {
    id: "mediterranean_deforestation_complex",
    title: "Mediterranean Deforestation & Kiln Crisis",
    condition: (answers) => {
      const a5 = answers.a5_science || [];
      const a5List = Array.isArray(a5) ? a5 : [a5];
      const hasMetallurgy = a5List.some(s => s.toLowerCase().includes('advanced metallurgy'));

      const p4 = answers.p4_military || [];
      const p4List = Array.isArray(p4) ? p4 : [p4];
      const hasNaval = p4List.some(m => m.toLowerCase().includes('naval supremacy (trireme warships'));

      const g4 = answers.g4_resources || [];
      const g4List = Array.isArray(g4) ? g4 : [g4];
      const hasForests = g4List.some(r => r.toLowerCase().includes('dense cedar, oak, or mahogany forests'));

      return hasMetallurgy && hasNaval && hasForests;
    },
    targets: [
      {
        targetQ: "a6_ecology_collapse",
        option: "Widespread Deforestation & Hillside Soil Erosion (clear-cutting forests for lime plaster kilns, charcoal smelting, and trireme fleets strips topsoil into rivers)",
        type: "recommended"
      }
    ]
  },
  {
    id: "nabataea_petra_canyon_complex",
    title: "Nabataean Incense & Canyon Hydraulic State",
    condition: (answers) => {
      const g1 = answers.g1_freshwater || [];
      const g1List = Array.isArray(g1) ? g1 : [g1];
      const hasWadis = g1List.some(w => w.toLowerCase().includes('desert flash-flood wadis'));

      const e5 = answers.e5_trade || [];
      const e5List = Array.isArray(e5) ? e5 : [e5];
      const hasCaravan = e5List.some(t => t.toLowerCase().includes('overland silk/incense caravan routes'));

      return hasWadis && hasCaravan;
    },
    targets: [
      {
        targetQ: "e4_taxation",
        option: "Transit Tolls and Mountain Pass / Bridge Fees (extracting silver and goods from foreign caravans traversing strategic choke points)",
        type: "mandatory"
      },
      {
        targetQ: "a3_monuments",
        option: "Rock-cut cliffside temples and royal mausoleums carved directly into towering sandstone canyons",
        type: "recommended"
      },
      {
        targetQ: "g7_settlement",
        option: "Oasis Ksar & Canyon Cliff-Cavern Settlements (defensible mud-brick fortresses or rock-cut canyon dwellings clustered around desert springs, like Petra or Mesa Verde)",
        type: "recommended"
      }
    ]
  }
];

function getValidOptionsMap(complexityMode) {
  const filtered = getFilteredQuestions(complexityMode);
  const map = new Map();
  for (const qList of Object.values(filtered)) {
    for (const q of qList) {
      map.set(q.id, new Set(q.options));
    }
  }
  return map;
}

/**
 * Evaluates newly added options and returns updated answers with logical companion options auto-selected.
 * - In 'basic' mode: Both 'mandatory' and 'recommended' synergies auto-select (up to the 2-option cap per question)
 *   to help younger students build a coherent society effortlessly.
 * - In 'normal' and 'complex' modes: 'mandatory' synergies auto-select (respecting scale caps and logic locks),
 *   while 'recommended' synergies show the glowing "Recommended Synergy" badge on the QuestionCard.
 */
export function applyLogicalSynergies(
  questionId,
  selectedList,
  allAnswers,
  logicGuardEnabled = true,
  currentEra = 'early_bronze',
  currentScale = 'regional_kingdom',
  complexityMode = 'normal'
) {
  let updatedAnswers = { ...allAnswers, [questionId]: selectedList };
  const autoSelectedMessages = [];
  const validOptionsMap = getValidOptionsMap(complexityMode);

  const tryAutoSelect = (sourceDesc, targetQ, targetOpt, type) => {
    // Verify target question and option exist within the active complexity mode
    const validSet = validOptionsMap.get(targetQ);
    if (!validSet || !validSet.has(targetOpt)) return false;

    const currentSelected = updatedAnswers[targetQ] || [];
    const currentList = Array.isArray(currentSelected) ? currentSelected : [currentSelected];

    // If already selected, nothing to do
    if (currentList.includes(targetOpt)) return false;

    // Synergy auto-selection behavior by complexity mode:
    if (type === 'recommended') {
      // In normal and complex modes, recommended synergies do NOT auto-select.
      // They are rendered as glowing badges on the QuestionCard via getSynergyRecommendations.
      if (complexityMode !== 'basic') {
        return false;
      }
      // In basic mode: both mandatory and recommended auto-select (up to 2-option cap per question).
    }

    // Verify that the companion is not disallowed by era, scale caps, or contradiction
    const { isDisallowed } = checkOptionDisallowed(
      targetQ,
      targetOpt,
      updatedAnswers,
      logicGuardEnabled,
      currentEra,
      currentScale,
      complexityMode
    );

    if (!isDisallowed) {
      updatedAnswers[targetQ] = [...currentList, targetOpt];
      autoSelectedMessages.push({
        sourceOption: sourceDesc,
        targetOption: targetOpt,
        targetQ,
        type
      });
      return true;
    }
    return false;
  };

  // Iterative cascade resolution (up to 5 passes)
  let changed = true;
  let iterations = 0;
  while (changed && iterations < 5) {
    changed = false;
    const prevCount = autoSelectedMessages.length;

    // 1. Single Option Triggers
    for (const qKey in updatedAnswers) {
      const answersForQ = updatedAnswers[qKey] || [];
      const opts = Array.isArray(answersForQ) ? answersForQ : [answersForQ];
      for (const opt of opts) {
        const companions = LOGICAL_SYNERGIES[opt];
        if (!companions) continue;
        for (const comp of companions) {
          tryAutoSelect(opt, comp.targetQ, comp.option, comp.type || 'mandatory');
        }
      }
    }

    // 2. Compound Multi-Option Triggers
    for (const compound of COMPOUND_SYNERGIES) {
      if (compound.condition(updatedAnswers, currentEra, currentScale)) {
        for (const target of compound.targets) {
          tryAutoSelect(compound.title, target.targetQ, target.option, target.type || 'recommended');
        }
      }
    }

    if (autoSelectedMessages.length > prevCount) {
      changed = true;
    }
    iterations++;
  }

  return {
    answers: updatedAnswers,
    autoSelected: autoSelectedMessages
  };
}

/**
 * Computes all active synergy recommendations across single and compound triggers.
 * Returns a Map of targetOption -> { sourceOption, targetQ, type, title }
 * Used by UI to render glowing badges and one-click recommendation pills.
 */
export function getSynergyRecommendations(
  allAnswers,
  logicGuardEnabled = true,
  currentEra = 'early_bronze',
  currentScale = 'regional_kingdom',
  complexityMode = 'normal'
) {
  const recommendations = new Map();
  const validOptionsMap = getValidOptionsMap(complexityMode);

  const addRec = (sourceDesc, targetQ, targetOpt, type, title) => {
    // Only recommend options that exist in the active complexityMode
    const validSet = validOptionsMap.get(targetQ);
    if (!validSet || !validSet.has(targetOpt)) return;

    const currentSelected = allAnswers[targetQ] || [];
    const currentList = Array.isArray(currentSelected) ? currentSelected : [currentSelected];

    // Already selected - no recommendation badge needed
    if (currentList.includes(targetOpt)) return;

    // Check if disallowed by contradictions or scale
    const { isDisallowed } = checkOptionDisallowed(
      targetQ,
      targetOpt,
      allAnswers,
      logicGuardEnabled,
      currentEra,
      currentScale,
      complexityMode
    );
    if (isDisallowed) return;

    recommendations.set(targetOpt, {
      sourceOption: sourceDesc,
      targetQ,
      type,
      title: title || sourceDesc
    });
  };

  // 1. Single triggers
  for (const qKey in allAnswers) {
    const answersForQ = allAnswers[qKey] || [];
    const opts = Array.isArray(answersForQ) ? answersForQ : [answersForQ];
    for (const opt of opts) {
      const companions = LOGICAL_SYNERGIES[opt];
      if (!companions) continue;
      for (const comp of companions) {
        addRec(opt, comp.targetQ, comp.option, comp.type || 'mandatory');
      }
    }
  }

  // 2. Compound triggers
  for (const compound of COMPOUND_SYNERGIES) {
    if (compound.condition(allAnswers, currentEra, currentScale)) {
      for (const target of compound.targets) {
        addRec(compound.title, target.targetQ, target.option, target.type || 'recommended', compound.title);
      }
    }
  }

  return recommendations;
}
