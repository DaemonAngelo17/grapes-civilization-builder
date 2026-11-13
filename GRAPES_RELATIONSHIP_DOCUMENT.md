# G.R.A.P.E.S. Civilization Builder: Master Relationship & Interdependency Document (v5.0)

**Document Version:** 5.0.0  
**Target Architecture:** Multi-Variable Historical Logic Guard, Intelligent Synergy Engine, 8 Historical Eras, 6 Civilization Scales, and Geopolitical Neighborhood Subsystem (`P7`)  
**Repository Location:** `grapes-civilization-builder`  
**Live Production URL:** [https://grapes-civilization-builder.vercel.app](https://grapes-civilization-builder.vercel.app)

---

## 1. Executive Summary & Relational Philosophy

The **G.R.A.P.E.S. Civilization Builder (v5.0)** models human societies not as isolated lists of traits, but as **dynamically coupled socio-ecological and geopolitical systems**. Every choice a student makes in one category reverberates across all five other pillars, bounded by their historical era, spatial territorial footprint, and cross-border interactions:

```
                  ┌───────────────────────┐
                  │     GEOGRAPHY (G)     │
                  │   Terrain, Water,     │
                  │   Resources, Hazards  │
                  └───────────┬───────────┘
                             ╱ ╲
                            ╱   ╲
                           ╱     ╲
     ┌────────────────────▼─┐   ┌─▼────────────────────┐
     │     ECONOMY (E)      │   │     POLITICS (P)     │
     │ Crops, Animals,      │◄─►│ Government, Law,     │
     │ Trade, Currency, Tax │   │ Military, Neighbors  │
     └──────────┬───────────┘   └──────────┬───────────┘
                │                          │
                │                          │
     ┌──────────▼───────────┐   ┌──────────▼───────────┐
     │ SOCIAL STRUCTURE (S) │   │     RELIGION (R)     │
     │ Apex, Middle, Mobility│◄─►│ Divine Structure,   │
     │ Gender, Labor Systems│   │ Rituals, Afterlife   │
     └──────────┬───────────┘   └──────────┬───────────┘
                 ╲                        ╱
                  ╲                      ╱
                   ╲                    ╱
                  ┌─▼──────────────────▼──┐
                  │    ACHIEVEMENTS (A)   │
                  │  Writing, Engineering,│
                  │  Monuments, Science   │
                  └───────────────────────┘
```

The relationship engine operates on three complementary mathematical and pedagogical planes:
1. **The Logic Guard (`src/utils/logicRules.js`):** A **negative constraint matrix** enforcing historical realism, physical impossibility cutoffs, ecological carrying-capacity ceilings, chronological era locks (across 8 eras), and spatial scale limits (across 6 scales).
2. **The Synergy Engine (`src/utils/synergyRules.js`):** A **positive dependency network** that auto-links necessary material prerequisites (`mandatory`) and surfaces authentic cultural congruences (`recommended`) across 104 single-trigger keys and 19 multi-variable compound cascades.
3. **The Geopolitical Neighborhood Subsystem (`P7`):** Models how a civilization's territorial footprint and military doctrine project power outward onto bordering societies and trigger cross-border consequences.

---

## 2. Chronological Eras (8 Epochs)

| Era ID | Historical Era & Date Range | Technological & Institutional Matrix | Hard Locks Enforced |
|---|---|---|---|
| `neolithic_chalcolithic` | **Neolithic & Chalcolithic Dawn** (c. 8000 – 3500 BCE) | First farming villages, cold-hammered native copper, polished stone/obsidian tools, stamp seals, oral traditions. | Smelted bronze/iron locked; phonetic/cuneiform writing locked; cavalry/chariots locked; stamped coins/bullion locked; imperial bureaucracies locked. |
| `early_bronze` | **Early Bronze Age** (c. 3500 – 2000 BCE) | First walled cities (Uruk, Memphis), cuneiform & hieroglyphs, bronze casting, weighed silver hacksilber. | Iron weapons locked; alphabet locked; coins locked; horse riding locked. |
| `late_bronze` | **Middle to Late Bronze Age** (c. 2000 – 1100 BCE) | Chariot warfare, international Amarna diplomacy, palace redistribution economies. | Iron tools locked; stamped coins locked; democracy locked. |
| `early_iron` | **Early Iron Age** (c. 1100 – 500 BCE) | Smelted iron weapons, Phoenician phonetic alphabet, early siege rams. | Stamped coinage locked until ~600 BCE; Macedonian companion cavalry locked. |
| `classical_antiquity` | **Classical Antiquity** (c. 500 – 100 BCE) | Stamped coinage markets, direct democracy (Athens), hoplite phalanxes, triremes. | Stirrup shock cavalry locked; woodblock printing locked; gunpowder locked. |
| `imperial_era` | **Imperial Classical Era** (c. 100 BCE – 500 CE) | Sprawling multi-biome empires (Rome, Han), aqueducts, pozzolanic concrete, Silk Road caravans. | Stirrups locked; woodblock printing locked; gunpowder locked. |
| `early_medieval` | **Post-Classical & Golden Age Networks** (c. 500 – 1000 CE) | Woodblock printing, paper-making mills, stirrup-stabilized heavy cavalry, maritime caliphates. | Gunpowder siege bombs locked; paper banknotes locked (pre-Song dynasty). |
| `high_medieval` | **High Imperial & Trans-Hemispheric Era** (c. 1000 – 1500 CE) | Gunpowder artillery, trebuchets, state-printed paper banknotes (Jiaozi/Chao), magnetic compass navigation. | Unlocks all medieval high technologies. |

---

## 3. Spatial Civilization Scales (6 Footprints)

| Scale ID | Scale Label & Population Scope | Geographic & Resource Limits | Structural Invariants |
|---|---|---|---|
| `micro_polity` | **Autonomous Chiefdom / Sanctuary Village** (~1,000–10,000) | Max 1 Terrain \| Max 1 Water \| Max 1 Barrier \| Max 2 Crops \| Max 2 Animals \| Max 1 Monument | Cannot field standing armies; cannot maintain buffer states or satrapies; survives via isolation or sacred sanctuary. |
| `city_state` | **Independent City-State / Polis** (~10,000–100,000) | Max 1 Terrain \| Max 1 Water \| Max 1 Barrier \| Max 2 Crops \| Max 2 Animals \| Max 2 Monuments | Can run direct democracy; cannot build Great Walls or megacities. |
| `thalassocracy_network` | **Coastal / Archipelagic Maritime Network** (~50,000–500,000) | Max 2 Terrains (must include coastal/island) \| Max 2 Waters \| Max 2 Barriers \| Max 3 Monuments | Requires coastal terrain; cannot ban foreign trade or practice complete isolation; relies on merchant enclaves. |
| `regional_kingdom` | **Regional Kingdom / Federation** (~250,000–3,000,000) | Max 2 Terrains \| Max 2 Waters \| Max 2 Barriers \| Max 4 Crops \| Max 4 Animals \| Max 4 Monuments | Requires regional governors; cannot run direct citizen assembly democracy. |
| `nomadic_confederacy` | **Trans-Biome Nomadic Pastoral Confederacy** (~100,000–2,000,000) | Max 3 Terrains \| Max 2 Waters \| Max 2 Barriers \| Max 2 Monuments | Requires herd/pack animals; cannot build stationary aqueducts, cothon naval drydocks, or grid-cities. |
| `continental_empire` | **Grand Continental Super-Empire** (5,000,000–60,000,000+) | Unlimited Terrains, Waters, Barriers, Monuments (Max 99) | Cannot use village barter; cannot run direct democracy; cannot act as small neutral sanctuary. |

---

## 4. Geopolitical Neighborhood Subsystem (`P7`)

The dedicated inquiry `p7_neighbor_relations` introduces 12 distinct geopolitical interaction doctrines:

1. **Peer-Polity Rivalry & Shifting Alliances:** Competing sister city-states (Greece/Sumer).
2. **Hegemonic Core & Tributary Buffer States:** Puppet shield-states absorbing invasions (Rome/Han).
3. **Soft-Power Cultural & Script Radiation:** Prestige script and cultural export (Tang/Egypt).
4. **Asymmetric 'Steppe vs. Sown' Extortion & Heqin Treaties:** Cavalry raids extracting tribute (Xiongnu/Mongols).
5. **Neutral Sacred Sanctuary & Oracle Arbitrator:** Sacred inviolability and oracle banking (Delphi/Olympia).
6. **Symmetric 'Brotherhood of Great Kings' Diplomacy:** Equal royal peer diplomacy (Amarna Letters).
7. **Captive-Taking 'Flower Wars' (Xochiyaoyotl):** Ritual war captive extraction for human sacrifice (Aztecs).
8. **Extraterritorial Merchant Enclaves & Thalassocratic Middlemen:** Trading quarters inside foreign capitals (Phoenicia/Venice).
9. **Predatory Slave-Raiding & Resource Hinterland Extraction:** Treating borderlands as hunting grounds for chattel slaves.
10. **Splendid Geographic Isolation & Non-Intervention:** Natural barriers screening off foreign conflicts (Tokugawa/Old Kingdom).
11. **Domino-Effect Demographic & Ecological Displacement (`complex`):** Population pressure pushing frontier tribes into cascading invasions.
12. **Universal Missionary & Legal Proselytization (`complex`):** Active cross-border religious and legal conversion missions.

---

## 5. Master Contradiction Matrix (`src/utils/logicRules.js`)

The engine enforces strict mutual exclusivities:

### A. Scale vs. Geopolitical Relations
- `micro_polity` locks Hegemonic Buffer States, Brotherhood of Great Kings, Steppe Extortion, Slave-Raiding Hinterlands, and Mass Deportations.
- `continental_empire` locks Peer-Polity Rivalry and Neutral Sacred Sanctuary.
- `thalassocracy_network` locks trade bans, splendid isolation, and steppe extortion.
- `nomadic_confederacy` locks stationary grid-cities, aqueducts, and cothon naval harbors.

### B. Cross-Category Neighbor Contradictions
- **Neutral Sanctuary (`p7` #5)** locks Psychological Terror military doctrine, Total Enslavement, and Mass Deportation.
- **Steppe Extortion (`p7` #4)** requires cavalry or chariots in `p4_military`.
- **Flower Wars (`p7` #7)** requires human sacrifice in `r3_rituals` or ritual war captives in `s5_unfree_labor`.
- **Splendid Isolation (`p7` #10)** is disallowed on open plains (`g3_barriers`) unless thousands of miles of Great Walls are constructed.

---

## 6. Synergy Cascades (`src/utils/synergyRules.js`)

### A. New Single-Trigger Pair Synergies (10)
1. **Peer-Polity Rivalry** ➔ `p1_gov_system` (Decentralized City-States) [`mandatory`] + `r3_rituals` (Athletic Games) [`recommended`].
2. **Hegemonic Core & Buffer States** ➔ `p5_foreign_policy` (Tributary Vassals) [`mandatory`] + `e4_taxation` (Provincial Tribute) [`recommended`].
3. **Soft-Power Radiation** ➔ `p5_foreign_policy` (Cultural Integration) [`recommended`] + `s2_middle` (Scribes & Record-Keepers) [`recommended`].
4. **Steppe vs. Sown Extortion** ➔ `p4_military` (Horse Archers) [`mandatory`] + `p5_foreign_policy` (Royal Marriage Treaties) [`mandatory`].
5. **Neutral Sacred Sanctuary** ➔ `p1_gov_system` (Amphictyonic League) [`mandatory`] + `r3_rituals` (Sacred Pilgrimages) [`mandatory`].
6. **Brotherhood of Great Kings** ➔ `p5_foreign_policy` (Royal Marriage Treaties) [`mandatory`] + `p6_intelligence_bureaucracy` (Cuneiform Archive) [`recommended`].
7. **Flower Wars** ➔ `r3_rituals` (Human Sacrifice) [`mandatory`] + `s5_unfree_labor` (Ritual War Captives) [`mandatory`].
8. **Extraterritorial Merchant Enclaves** ➔ `e5_trade` (Armed Merchant Karums) [`recommended`] + `p5_foreign_policy` (Armed Enclaves & Garrison Colonies) [`mandatory`].
9. **Megalithic Stone Circles** ➔ `g4_resources` (Quarried Limestone/Granite) [`mandatory`] + `r3_rituals` (Astrological Tracking) [`recommended`].
10. **Woodblock Printing** ➔ `p2_succession` (Civil Service Exams) [`recommended`] + `p7_neighbor_relations` (Soft-Power Radiation) [`recommended`].

### B. Multi-Trigger Compound Cascades (Compounds 18 & 19)
- **Compound 18: Steppe-Sown Frontier Wall & Heqin Dynamic (`steppe_sown_frontier_complex`):**
  - *Trigger:* `continental_empire` + Great Wall (`a3_monuments`) + Overland Silk Road (`e5_trade`).
  - *Cascades:* Recommends Tributary Buffer States (`p7_neighbor_relations`) and Royal Salt/Iron Monopolies (`e4_taxation`).
- **Compound 19: Neolithic Megalithic Sanctuary Chiefdom (`neolithic_megalith_complex`):**
  - *Trigger:* `neolithic_chalcolithic` + Megalithic Stone Circles (`a3_monuments`).
  - *Cascades:* Mandates Cold-Hammered Native Copper (`a5_science`) and recommends Neutral Sacred Sanctuary (`p7_neighbor_relations`).

---

## 7. Grade-Level Complexity Tier Topology

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 🌱 BASIC MODE (Grades 4–6)                                                  │
│ • 13 Core Inquiries | 77 Foundational Options                               │
│ • Hard 2-Selection Cap per Question (Prevents Cognitive Overload)           │
│ • Full Auto-Synergy Cascading (Mandatory AND Recommended Auto-Select)       │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ 🏛️ NORMAL MODE (Grades 7–8)                                                 │
│ • 32 Standard Inquiries | 313 Standard Options                              │
│ • Standard Scale Caps & Era Gates Active                                    │
│ • Mandatory Synergies Auto-Select; Recommended Synergies Show Glowing Badges│
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│ 🎓 COMPLEX MODE (Grades 9–12 / AP)                                          │
│ • 38 Exhaustive Inquiries | 408 Total Options                               │
│ • Includes G7 (Settlement Morphology), E6 (Property & Land Tenure),         │
│   P6 (Intelligence Bureaucracy), P7 (Geopolitical Neighborhood),            │
│   S6 (Demographics & Epidemics), R6 (Orthodoxy & Heresy),                   │
│   A6 (Ecological Collapse Vectors)                                          │
│ • Advanced Fiscal Monopolies, Banknote Reserves & Cross-Border Feedback     │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 8. Teacher Stress-Test Oral Defense Dilemmas

The oral defense generator in `src/utils/stressTestGenerator.js` features 3 dedicated cross-border geopolitical dilemmas:

1. **The Buffer-State Rebellion Trap (`buffer_state_trap`):**
   - *Trigger:* Hegemonic Buffer States (`P7`) + Tributary Vassals (`P5`).
   - *Core Friction:* Your primary client king allies with your rival and halts tribute. Marching out leaves other borders exposed; doing nothing sparks chain rebellions.
2. **The Thalassocratic Host-Empire Embargo (`thalassocracy_embargo`):**
   - *Trigger:* Thalassocracy Network scale OR Extraterritorial Merchant Enclaves (`P7`).
   - *Core Friction:* A landlocked continental superpower seizes merchant quarters and bans your ships. How does a naval city force an agrarian giant to reopen trade without losing a land war?
3. **The Soft-Power Boomerang (`soft_power_boomerang`):**
   - *Trigger:* Soft-Power Radiation (`P7`) OR Universal Missionary Proselytization (`P7`).
   - *Core Friction:* Frontier neighbors adopted your weapons, writing, and siegecraft, and now use your own technologies to launch an invasion claiming divine right to your throne.

---

*Authored by the Google Antigravity Engineering Team for the G.R.A.P.E.S. Ancient Civilization Builder v5.0.*
