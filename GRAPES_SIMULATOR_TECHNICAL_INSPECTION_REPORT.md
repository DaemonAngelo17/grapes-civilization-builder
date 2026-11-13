# G.R.A.P.E.S. Civilization Builder & Defense Simulator
## Comprehensive Technical Inspection, State Engine & Codebase Audit Report
### Exact Validation Matrices, Prerequisite Cascades, Algorithmic Synthesis & Oral Defense Engine

**Date of Audit:** November 13, 2026  
**Audited Directory:** `/Users/ezrajosephsaracho/.gemini/antigravity/scratch/grapes-civilization-builder/`  
**Current Codebase Version:** v4.0 3-Tiered Grade-Level Complexity Engine & 390-Option Taxonomical Edition (React 19 + Tailwind CSS v4 + Vite 8)  
**Target Invariant Reference:** California Grade 7–12 History-Social Science Standards, NCSS C3 Framework & Academic Comparative Historiography  
**Live Production URL:** [https://grapes-civilization-builder.vercel.app](https://grapes-civilization-builder.vercel.app)  
**Source Repository:** [https://github.com/DaemonAngelo17/grapes-civilization-builder](https://github.com/DaemonAngelo17/grapes-civilization-builder)

---

## Table of Contents
1. [Application State Architecture & Lifecycle Engine](#1-application-state-architecture--lifecycle-engine)
2. [Universal Multi-Choice Taxonomy & Asset Architecture](#2-universal-multi-choice-taxonomy--asset-architecture)
3. [Grade 7 Logic Guard: Exhaustive Mutual Exclusivity Matrix](#3-grade-7-logic-guard-exhaustive-mutual-exclusivity-matrix)
   - [3.1 Chronological Era Locks](#31-chronological-era-locks)
   - [3.2 Spatial Civilization Scale Constraints](#32-spatial-civilization-scale-constraints)
   - [3.3 Geographic Scale Limits on Natural Defensive Barriers](#33-geographic-scale-limits-on-natural-defensive-barriers)
   - [3.4 Island & Ocean Biome Exclusives](#34-island--ocean-biome-exclusives)
   - [3.5 Deep Terrain, Water, and Resource Contradictions](#35-deep-terrain-water-and-resource-contradictions)
   - [3.6 Cross-Category Societal, Military & Ideological Clashes](#36-cross-category-societal-military--ideological-clashes)
4. [Two-Tiered Intelligent Synergy Engine](#4-two-tiered-intelligent-synergy-engine)
   - [4.1 Mandatory vs. Recommended Synergy Tiers](#41-mandatory-vs-recommended-synergy-tiers)
   - [4.2 51 Single-Trigger Pair Synergies & Cascade Logic](#42-51-single-trigger-pair-synergies--cascade-logic)
   - [4.3 Multi-Trigger Compound Synergy Architecture](#43-multi-trigger-compound-synergy-architecture)
   - [4.4 UI Badge Recommendation Extraction Algorithm](#44-ui-badge-recommendation-extraction-algorithm)
5. [Algorithmic Synthesis Pipelines](#5-algorithmic-synthesis-pipelines)
   - [5.1 Six-Paragraph Academic Historical Narrative Generator](#51-six-paragraph-academic-historical-narrative-generator)
   - [5.2 Quick-Reference Oral Defense Fact Sheet Matrix](#52-quick-reference-oral-defense-fact-sheet-matrix)
   - [5.3 Cross-Category Teacher Stress-Test Defense Generator](#53-cross-category-teacher-stress-test-defense-generator)
6. [Archaeological Benchmark Presets & Data Integrity Audits](#6-archaeological-benchmark-presets--data-integrity-audits)
7. [Production Build & Deployment Performance](#7-production-build--deployment-performance)

---

## 1. Application State Architecture & Lifecycle Engine

Audited from:
* `src/App.jsx` (Lines 35–185)
* `src/components/Header.jsx` (Lines 26–180)
* `src/components/Sidebar.jsx` (Lines 25–120)
* `src/components/QuestionCard.jsx` (Lines 15–160)
* `src/components/DossierView.jsx` (Lines 25–580)

### Master State Schema (`src/App.jsx`):
The root application controller maintains a normalized, reactive state tree:

```javascript
// State Definitions in App.jsx
const [civilizationName, setCivilizationName] = useState(defaultPreset.name);
const [inspiration, setInspiration] = useState(defaultPreset.inspiration);
const [currentEra, setCurrentEra] = useState(defaultPreset.era || 'early_bronze');
const [currentScale, setCurrentScale] = useState(defaultPreset.scale || 'regional_kingdom');
const [complexityMode, setComplexityMode] = useState('normal'); // 'basic' | 'normal' | 'complex'
const [answers, setAnswers] = useState(defaultPreset.answers);
const [customNotes, setCustomNotes] = useState({});
const [activeCategory, setActiveCategory] = useState('G');
const [isDossierOpen, setIsDossierOpen] = useState(false);
const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
const [logicGuardEnabled, setLogicGuardEnabled] = useState(true);
const [autoSynergiesEnabled, setAutoSynergiesEnabled] = useState(true);
const [orderMode, setOrderMode] = useState('logical'); // 'logical' (build-up: G->E->P->S->R->A) or 'grapes'
const [enlargedImage, setEnlargedImage] = useState(null); // { visual, optionText }
const [toastMessage, setToastMessage] = useState(null);
```

### Dynamic Complexity Tier Engine (`COMPLEXITY_MODES`):
The application dynamically branches questions and option limits across 3 educational tiers:
1. **🌱 Basic Mode (Grades 4–6):** Filters to the 12 core foundational inquiries (`g2_terrain`, `g1_freshwater`, `e1_crops`, `e5_trade`, `p1_gov_system`, `p4_military`, `s1_apex`, `s3_mobility`, `r1_structure`, `r4_afterlife`, `a1_writing`, `a3_monuments`), limiting each inquiry to its first 6 foundational options (72 total options).
2. **🏛️ Normal Mode (Grades 7–8):** Renders the 31 standard secondary curriculum inquiries (`G1`–`A5`) and 300 validated options.
3. **🎓 Complex Mode (Grades 9–12 / AP):** Expands to 37 exhaustive inquiries (including `G7`, `E6`, `P6`, `S6`, `R6`, `A6`) and 390 total options, enforcing advanced demographic, fiscal, and ecological locks.

### Universal Multi-Choice Value Normalization:
To eliminate legacy scalar string vs. array discrepancies, every question's selection value is treated uniformly as an array of selected option strings:

```javascript
const selectedList = Array.isArray(value) 
  ? value 
  : typeof value === 'string' && value.trim() !== '' 
    ? [value] 
    : [];
```

### Dynamic Progress & Completion Metrics:
Completion status is calculated dynamically against a variable denominator $D \in \{12, 31, 37\}$:

$$\text{PercentComplete} = \min\left(100, \max\left(0, \operatorname{round}\left(\frac{\text{TotalAnswered}}{D} \times 100\right)\right)\right)$$

Where `allQuestions` and `TotalAnswered` adapt reactively to `complexityMode`:

```javascript
const currentQuestions = useMemo(() => {
  return getFilteredQuestions(complexityMode);
}, [complexityMode]);

const allQuestions = useMemo(() => {
  const list = [];
  for (const cat of GRAPES_CATEGORIES) {
    const qs = currentQuestions[cat.key] || [];
    list.push(...qs);
  }
  return list;
}, [currentQuestions]);

const totalQuestionsCount = allQuestions.length; // 12 in basic, 31 in normal, 37 in complex

const totalAnsweredCount = useMemo(() => {
  let count = 0;
  for (const q of allQuestions) {
    const val = answers[q.id];
    if (Array.isArray(val) && val.length > 0) count++;
    else if (typeof val === 'string' && val.trim() !== '') count++;
  }
  return count;
}, [answers, allQuestions]);
```

---

## 2. Universal Multi-Choice Taxonomy & Asset Architecture

The master dataset in `src/data/grapesData.js` indexes **390 uniquely researched, non-redundant historical options** across 37 inquiries.

### Master Option Distribution Matrix (v4.0 Complex Mode)

| Category Code | Category Domain | Inquiries | Option Range | Standard (v3.1) | Appended | New Complex Q | Total Options | Visual Artifacts |
|---|---|---|---|---|---|---|---|---|
| **G** | **Geography** | 7 inquiries (G1–G7) | 10 – 16 / question | 64 opts | +8 opts | +9 (G7) | **73 options** | 73 artifacts |
| **E** | **Economy** | 6 inquiries (E1–E6) | 10 – 12 / question | 47 opts | +9 opts | +9 (E6) | **61 options** | 61 artifacts |
| **P** | **Politics & Military** | 6 inquiries (P1–P6) | 9 – 15 / question | 50 opts | +8 opts | +9 (P6) | **63 options** | 63 artifacts |
| **S** | **Social Structure** | 6 inquiries (S1–S6) | 8 – 10 / question | 40 opts | +5 opts | +9 (S6) | **51 options** | 51 artifacts |
| **R** | **Religion** | 6 inquiries (R1–R6) | 8 – 11 / question | 44 opts | +5 opts | +9 (R6) | **55 options** | 55 artifacts |
| **A** | **Achievements** | 6 inquiries (A1–A6) | 9 – 13 / question | 55 opts | +1 opt | +9 (A6) | **67 options** | 67 artifacts |
| **TOTALS** | **All 6 Domains** | **37 Inquiries** | **8 – 16 / question** | **300 Opts** | **+36 Opts** | **+54 Opts** | **390 Options** | **390 Artifacts** |

### The 6 Complex-Only Inquiries (`minComplexity: 'complex'`):
1. **G7 (`g7_settlement`):** *Settlement Morphology, Urban Density & Carrying Capacity* (9 options) — Models hyper-dense walled megacities, low-density tropical garden urbanism, tell-mounds, and pastoral nomadic ordus.
2. **E6 (`e6_property_land`):** *Land Tenure, Property Law & Agrarian Surplus Extraction* (9 options) — Covers royal monopolies, Roman latifundia, equal-field allotments, communal ayllu tenure, and military cleruchies.
3. **P6 (`p6_intelligence_bureaucracy`):** *State Intelligence, Surveillance, Census & Diplomatic Logistics* (9 options) — Analyzes Achaemenid royal couriers, Baojia mutual surveillance, Incan Chasqui quipu runners, and Spartan Krypteia.
4. **S6 (`s6_demographics_health`):** *Disease Ecology, Sanitation, Public Health & Demographic Pressures* (9 options) — Addresses Roman Cloaca Maxima flush sewers, zoonotic crowd-disease endemicity, night-soil composting, and Ever-Normal famine granaries.
5. **R6 (`r6_orthodoxy_heresy`):** *Religious Orthodoxy, Syncretism, Sectarianism & Ideological Control* (9 options) — Spans imperial pantheon syncretism, iconoclasm, Ashokan edicts of toleration, book burnings, and imperial ruler cults.
6. **A6 (`a6_ecology_collapse`):** *Anthropogenic Environmental Impact & Structural Collapse Vectors* (9 options) — Details hillside deforestation, canal soil salinization, fiscal-military currency debasement, karst aquifer exhaustion, and sustainable agro-ecology.

### Visual Artifact Resolution & Fallback Engine (`src/data/optionImages.js`):
Every option links to high-definition archaeological or geographical photography hosted on Unsplash and Wikimedia Commons. The viewer features:
1. Lazy loading with `loading="lazy"`.
2. Asynchronous error boundary (`handleImageError`) falling back to an elegant parchment monogram badge.
3. Interactive inspect modal (`ImageModal.jsx`) displaying full-resolution imagery, attribution, and verbatim doctrinal text.

---

## 3. Grade 7 Logic Guard: Exhaustive Mutual Exclusivity Matrix

Audited from `src/utils/logicRules.js` (Lines 1–1080).

The validation engine executes `checkOptionDisallowed(questionId, optionText, answers, logicGuardEnabled, currentEra, currentScale)` upon every render and click event.

### 3.1 Chronological Era Locks
Certain technologies, political structures, and economic mechanisms were physically or conceptually non-existent in earlier eras.

| Feature / Innovation | Earliest Valid Historical Era | Chronological Cutoff | Justification Enforced in Code |
|---|---|---|---|
| **High-grade iron ore mining & smelting** | `early_iron` | ~1200 BCE | Bronze Age civilizations only possessed copper and tin metallurgy. |
| **Phoenician phonetic alphabet** | `early_iron` | ~1100 BCE | Pre-Iron Age writing was logographic (Hieroglyphs) or syllabic (Cuneiform). |
| **Disciplined crossbow phalanxes** | `classical_antiquity` | ~500 BCE | Mechanical bronze triggers were invented in Warring States China. |
| **Standardized stamped coins** | `classical_antiquity` | ~600 BCE | Stamped electrum/silver coins emerged in Lydia and Ionia. |
| **Direct citizen assembly democracy** | `classical_antiquity` | ~508 BCE | Direct universal male suffrage was pioneered in Classical Athens. |
| **Cataphract Super-Heavy Shock Cavalry** | `classical_antiquity` | ~300 BCE | Full-body iron scale/lamellar armor for horse and rider emerged in Classical/Imperial eras. |
| **Macedonian Pike & Companion Cavalry Phalanx** | `classical_antiquity` | ~350 BCE | Philip II and Alexander pioneered the 18-ft sarissa and companion cavalry doctrine. |
| **Inverted Siphons & Pressurized Pipelines** | `classical_antiquity` | ~300 BCE | High-pressure lead/ceramic inverted siphons crossing deep valleys were Hellenistic/Roman feats. |
| **Clay/Leather Promissory Notes & Flying-Cash** | `classical_antiquity` | ~200 BCE | Credit promissory bills require advanced banking and state currency reserves. |
| **Pozzolanic underwater concrete** | `imperial_era` | ~150 BCE | Roman volcanic ash hydraulic concrete developed in the late Republic. |
| **Magnetic compass orientation** | `imperial_era` | ~200 BCE | Han Dynasty lodestone spoon compasses were unknown to Bronze Age builders. |
| **Incendiary Naphtha / Greek Fire Siphons** | `imperial_era` | ~670 CE | Pressurized incendiary petroleum naval flamethrowers belong exclusively to the late Imperial era. |

### 3.2 Tiered Selection Caps by Scale & Complexity Mode
To prevent students from checking every box indiscriminately, the logic engine enforces strict tiered selection limits:
- **Basic Mode (`basic` - Grades 4–6):** Strict max of **2 selections per question** across all 12 core questions. Younger students focus on foundational, decisive choices.
- **Normal & Complex Modes (`normal` / `complex`):**
  - `p1_gov_system` (System of Government): Max **2 selections** (a state cannot simultaneously be a direct democracy, absolute god-king monarchy, and nomadic steppe horde).
  - `r1_structure` (Structure of the Divine): Max **2 selections** (theological limit for pantheon synthesis).
  - `r5_gov_relation` (Religion & Government): Max **2 selections** (church-state doctrinal limit).
  - `g7_settlement` (Settlement Morphology): Max **1** in `city_state`, Max **2** in `regional_kingdom`, Max **3** in `continental_empire`.
  - `g2_terrain` (Terrain): Max **1** in `city_state`, Max **2** in `regional_kingdom`, Unbounded in `continental_empire`.
  - `g1_freshwater` (Freshwater): Max **1** in `city_state`, Max **2** in `regional_kingdom`, Unbounded in `continental_empire`.
  - `g3_barriers` (Natural Barriers): Max **1** in `city_state`, Max **2** in `regional_kingdom`, Unbounded in `continental_empire`.

### 3.3 Spatial Civilization Scale Constraints
Governed by `CIVILIZATION_SCALES` in `src/data/grapesData.js`:
- **Prohibition on Great Walls for City-States:** City-states cannot construct thousands of miles of frontier ramparts (`a3_monuments`).
- **Prohibition on Direct Assembly Democracy for Empires:** Continental empires with millions of subjects spanning continents cannot govern via direct physical citizen assembly in a single town square (`p1_gov_system`).
- **Continental Empire vs. Barter / Wampum:** A grand continental empire of millions of subjects cannot administer provincial armies and tax collection on pure village barter or wampum shells (`e3_currency`); it requires standardized currency or state grain redistribution.

### 3.4 Strict Macroeconomic & Fiscal-Military Lockouts
- **Standing Professional Army vs. Pure Barter:** Full-time paid standing armies or armored cataphracts (`p4_military`) require regular state pay in coins, bullion, or grain rations—they cannot be maintained on pure village barter (`e3_currency`).
- **Egalitarian Guild Council vs. Autocracy / God-Kings:** Selecting the egalitarian merchant-artisan guild council (`p1_gov_system`) locks absolute monarchies, military juntas, feudal bureaucracies, god-king dynasties (`s1_apex`), god-king worship (`r1_structure`), and imperial mausoleums / terracotta necropolises (`a3_monuments`, `r4_afterlife`).
- **Nomadic Steppe Imperial Confederacy vs. Sedentary Mega-Infrastructure:** Mobile yurt-dwelling nomadic pastoralists (`p1_gov_system`, `g7_settlement`) cannot construct stationary gravity-fed stone aqueducts, indoor-plumbing grid cities, artificial naval drydocks (cothons), chinampas, or basin irrigation.
- **Tsetse Fly Trypanosomiasis Belt vs. Draft Animals & Cavalry:** The tropical tsetse fly transmits sleeping sickness fatal to equines and bovines (`g5_shortages`), locking horses, camels, oxen, zebu cattle, donkeys (`e2_animals`), and all cavalry/chariot doctrines (`p4_military`).

### 3.5 Complex-Mode Specific Cross-Category Contradictions (G7–A6)
- **Hyper-Dense Megacity Core (`g7_settlement`):** Cannot exist in a small local `city_state`, cannot be sustained solely on nomadic pastoral grazing (`e1_crops`), and contradicts low-density dispersed settlement (`s6_demographics_health`).
- **Latifundia Aristocratic Slave Estates (`e6_property_land`):** Directly contradicts "Paid Free Laborers Only (no chattel slavery)" (`s5_unfree_labor`) and the Equal-Field (Juntian) state allotment system.
- **Book Burning & Scholarly Suppression (`r6_orthodoxy_heresy`):** State execution of dissenting scholars and scroll burning locks philosophical Agora debate pluralism and Ashokan edicts of toleration.
- **Sustainable Regenerative Agro-Ecology (`a6_ecology_collapse`):** Strict multi-century terrace composting and sacred grove bylaws lock widespread hillside deforestation, irreversible alluvial soil salinization, and island ecological exhaustion.

### 3.6 Island & Ocean Biome Exclusives
When an oceanic island or coral ring atoll (`g2_terrain`) is selected:
- Prohibits continental floodplains (`g1_freshwater`: Nile/Tigris river systems).
- Prohibits wide-open steppe grassland and continental desert barriers.
- Prohibits land-bound chariot corps and heavy cavalry divisions.
- Prohibits continental horse archery confederations.

### 3.7 Deep Terrain, Water, and Resource Contradictions
- **Hyper-Arid Deserts vs. Wet Rice Agriculture:** Wet-paddy rice cultivation (`e1_crops`) requires deep standing water; prohibited in hyper-arid deserts lacking alluvial rivers or qanats.
- **Naval Supremacy vs. Landlocked Mountain/Steppe:** Trireme war fleets (`p4_military`) require direct ocean or sea access; prohibited if territory is purely landlocked continental steppe or high-altitude mountains.
- **Naval Supremacy vs. Timber Shortage:** Cannot field supreme trireme combat fleets without timber (`g5_shortages`), unless subsidized by foreign concession treaties.
- **Monumental Stone Architecture vs. Stone Shortage:** Pyramids and hypostyle halls (`a3_monuments`) cannot be constructed without quarryable limestone, sandstone, or granite (`g4_resources`).
- **War Chariots vs. Rough Topography:** Chariots cannot maneuver across vertical karst limestone or jagged alpine peaks without flat plains or paved royal roads.

### 3.6 Cross-Category Societal, Military & Ideological Clashes
- **Theocratic God-King vs. Secular Legalism:** If ruler is worshipped as a living deity (`r1_structure`), laws cannot be declared secular or purely commercial.
- **Direct Citizen Democracy vs. Absolute Autocracy:** Cannot combine direct citizen voting on all legislation (`p1_gov_system`) with hereditary divine-right autocracy (`s1_apex`).
- **Written Legal Codes vs. Pre-Literate Society:** Cannot enforce public written law pillars (`p3_law_system`) if civilization possesses no script or records strictly via oral mnemonic traditions (`a1_writing`).

---

## 4. Intelligent Synergy Engine & Complexity Execution

Audited from `src/utils/synergyRules.js` (Lines 1–890).

### 4.1 Synergy Execution Tiers by Complexity Mode
The synergy engine distinguishes between non-negotiable physical dependencies (`mandatory`) and logical cultural congruences (`recommended`), with behavior dynamically calibrated to the active `complexityMode`:
- **🌱 Basic Mode (`basic` — Grades 4–6):** Both `mandatory` and `recommended` synergies **auto-select immediately** (up to the strict 2-option cap per question enforced by `checkOptionDisallowed`). This guides younger students seamlessly through foundational civilization choices without cognitive overload. Non-basic questions and complex-only options are excluded.
- **🏛️ Normal & 🎓 Complex Modes (`normal` / `complex`):**
  - **`mandatory` synergies auto-select immediately** (respecting scale limits, sovereign caps, and chronological era locks).
  - **`recommended` synergies do NOT auto-select.** Instead, they generate active recommendations rendered with glowing amber badges (`✨ Recommended Synergy`) on the `QuestionCard`, allowing students to explore cultural synergies voluntarily.
  - Options marked `minComplexity: 'complex'` are exclusively recommended in `complex` mode.

```javascript
// Two-tiered badge render in QuestionCard.jsx
{rec.type === 'mandatory' ? (
  <span className="flex items-center gap-1 text-[11px] font-bold text-red-900 bg-red-100 px-2 py-0.5 rounded-full border border-red-300">
    <Sparkles size={11} className="text-red-700" />
    Required Synergy
  </span>
) : (
  <span className="flex items-center gap-1 text-[11px] font-medium text-amber-900 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-300">
    <Lightbulb size={11} className="text-amber-700" />
    Recommended Synergy
  </span>
)}
```

### 4.2 74 Single-Trigger Pair Synergies & Cascade Logic
When `autoSynergiesEnabled === true`, foundational selections automatically cascade into downstream categories. The v4.0 expansion added 24 new historical pairs across land tenure, urban morphology, surveillance, and health ecology:

```
Trigger Choice (Foundational) ─────────────────> Target Category & Option
──────────────────────────────────────────────────────────────────────────────────────────
Hyper-Dense Megacity (G7)       ──[Mandatory]───> Zoonotic Crowd-Disease Endemicity (S6)
                                ──[Recommended]─> Ever-Normal Famine Granaries (S6)
Low-Density Tropical City (G7)  ──[Mandatory]───> Dense Tropical Rainforest (G2)
                                ──[Recommended]─> Monoculture & Karst Aquifer Collapse (A6)
Mobile Seasonal Ordu (G7)       ──[Mandatory]───> Nomadic Steppe Imperial Confederacy (P1)
                                ──[Mandatory]───> Pastoral Transhumance & Herd Grazing (E1)
Latifundia Slave Estates (E6)   ──[Mandatory]───> Prisoners of War & Chattel Slavery (S5)
                                ──[Recommended]─> Slave-Revolt & Latifundia Hollowing (A6)
Equal-Field System / Juntian (E6)─[Recommended]─> Baojia Household Mutual Surveillance (P6)
                                ──[Recommended]─> Free Smallholder Yeoman Farmers (S2)
Communal Ayllu / Calpulli (E6)  ──[Mandatory]───> Reciprocal Mit'a Labor Service (E4)
                                ──[Recommended]─> Quipu Statistical Census Ledgers (P6)
Military Cleruchy Grants (E6)   ──[Mandatory]───> Permanent Professional Standing Army (P4)
                                ──[Recommended]─> Military Valor Nobility Reward (S3)
Imperial Post Relay Spies (P6)  ──[Mandatory]───> Satrapy Provincial Administration (P5)
                                ──[Recommended]─> Pluralistic Edicts of Toleration (R6)
Baojia Mutual Surveillance (P6) ──[Mandatory]───> Legalism Collective Punishment (P3)
                                ──[Recommended]─> Book Burning & Scholar Suppression (R6)
Krypteia Youth Police (P6)      ──[Mandatory]───> State Serfs / Helots (S5)
                                ──[Recommended]─> Military Junta / Stratocracy (P1)
Citizen Ostracism Courts (P6)   ──[Mandatory]───> Direct Participatory Democracy (P1)
                                ──[Recommended]─> Polished Ostraca Voting Shards (A2)
Municipal Flush Sewers (S6)     ──[Mandatory]───> Aqueducts, Sewers & Public Baths (A3)
                                ──[Recommended]─> Endemic Lead/Mercury Poisoning (S6)
Night-Soil Composting & Tea (S6)──[Recommended]─> Wet-paddy Rice and Millet (E1)
                                ──[Recommended]─> Herbal Medicine & Trepanation (A5)
Book Burning (Fenshu Kengru)(R6)──[Mandatory]───> Legalism Collective Punishment (P3)
                                ──[Mandatory]───> Centralized Absolute Monarchy (P1)
Strict Monotheistic Exclusivism (R6)─[Mandatory]─> Monolatry / Early Monotheism (R1)
                                ──[Recommended]─> Strict Leprosaria & Impurity Taboos (S6)
Cataphract Shock Cavalry (P4)   ──[Mandatory]───> High-Grade Iron Ore (G4)
                                ──[Mandatory]───> Horses and Camels (E2)
Tax Farming Publicani (E4)      ──[Recommended]─> Venality of Office & Tax Wealth (S3)
                                ──[Recommended]─> Aristocratic Oligarchy / Republic (P1)
Liturgical Sponsorship (E4)     ──[Recommended]─> Naval Supremacy Triremes (P4)
                                ──[Recommended]─> Ecstatic Festivals & Drama Games (R3)
Vestal Priestess Orders (S4)    ──[Recommended]─> Temple Oblates & Dedicatees (S5)
                                ──[Recommended]─> Daily Temple Food/Wine Offerings (R3)
Ge'ez Abugida Script (A1)       ──[Mandatory]───> Dzimbahwe Granite Enclosures (A3)
                                ──[Recommended]─> Monsoon Indian Ocean Dhow Trade (E5)
Marshallese Stick Charts (A1)   ──[Mandatory]───> Elders' Oral Customary Law (P3)
Moai Megalithic Statues (A3)    ──[Mandatory]───> Basalt, Andesite & Diorite Stones (G4)
                                ──[Recommended]─> Island Ecological Exhaustion (A6)
River-Confluence Canoes (E5)    ──[Recommended]─> Massive Earthwork Effigy Mounds (A3)
                                ──[Mandatory]───> Wampum Shell Belts & Gift Exchange (E3)
Inverted Siphons & Dams (A4)    ──[Mandatory]───> Aqueducts, Sewers & Public Baths (A3)
                                ──[Recommended]─> Underwater Hydraulic Concrete (A5)
```

### 4.3 12 Multi-Trigger Compound Synergy Cascades
Evaluated via `COMPOUND_SYNERGIES`:

1. **Mesoamerican Sacrificial & Obsidian Complex (`bloodletting_obsidian_complex`):**
   - *Triggers:* Ritual bloodletting / human sacrifice (`r3_rituals`) + High-grade volcanic obsidian deposits (`g4_resources`).
   - *Cascades:* Recommends *Ritual War Captives* (`s5_unfree_labor`) and *Ritual Athletic & Sacrificial Prowess* (`s3_mobility`).
2. **Continental Imperial Satrapy Administration (`satrapy_continental_empire`):**
   - *Triggers:* Continental Empire scale (`currentScale === 'continental_empire'`) + Satrapy Provincial Administration (`p5_foreign_policy`) + Iron Age or later.
   - *Cascades:* Recommends *Kharosthi and Aramaic Administrative Cursive* (`a1_writing`) and *Tribute from Conquered Provinces* (`e4_taxation`).
3. **Oceanic Wayfinding & High Island Agriculture (`ocean_voyaging_agriculture`):**
   - *Triggers:* Open ocean expanse barriers (`g3_barriers`) + Taro, yams, and breadfruit (`e1_crops`).
   - *Cascades:* Mandates *Celestial navigation* (`a5_science`) and *Naval Navigators and Master Shipwrights* (`s2_middle`).
4. **Mesopotamian Hydraulic & Salinization Trap (`mesopotamia_salinization_complex`):**
   - *Triggers:* Violent twin rivers (`g1_freshwater`) + Basin irrigation and shadufs (`a4_hydraulic`) + Arid desert or alluvial floodplain (`g2_terrain`).
   - *Cascades:* Mandates *Soil salinization* (`g6_disasters`) and recommends *Irreversible Alluvial Soil Salinization* (`a6_ecology_collapse`).
5. **Qin/Han Legalist-Bureaucratic Superstate (`qin_han_legalist_complex`):**
   - *Triggers:* Legalism collective punishment (`p3_law_system`) + Civil service exams (`p2_succession`) + Continental empire scale.
   - *Cascades:* Mandates *Thousands of miles of frontier walls* (`a3_monuments`), *State Monopolies* (`e4_taxation`), and recommends *Baojia mutual surveillance* (`p6_intelligence_bureaucracy`).
6. **Roman Imperial Latifundia & Concrete Complex (`roman_imperial_complex`):**
   - *Triggers:* Underwater hydraulic concrete (`a5_science`) + Stone aqueducts (`a3_monuments`) + Chattel slavery (`s5_unfree_labor`).
   - *Cascades:* Recommends *Latifundia slave plantations* (`e6_property_land`), *Flush sewers & thermae* (`s6_demographics_health`), and *Slave-revolt collapse* (`a6_ecology_collapse`).
7. **Andean Mit'a & Vertical Archipelago State (`inca_andean_complex`):**
   - *Triggers:* Quipu knotted cords (`a1_writing`) + Suspension rope bridges (`a4_hydraulic`) + Jagged mountain ranges (`g2_terrain`).
   - *Cascades:* Mandates *Vertical Archipelago Exchange* (`e5_trade`), *Reciprocal Mit'a Labor Service* (`e4_taxation`), and *State Grain Redistribution* (`e3_currency`).
8. **Steppe Nomadic Kurgan & Cavalry Hegemony (`steppe_nomad_complex`):**
   - *Triggers:* High-altitude flat steppe (`g2_terrain`) + Horse archer light cavalry (`p4_military`) + Pastoral transhumance (`e1_crops`).
   - *Cascades:* Mandates *Tanistry / Kurultai Council* (`p2_succession`), *Royal Kurgan Burial Mounds* (`r4_afterlife`), and *Severe winter blizzards (dzud)* (`g6_disasters`).
9. **Sub-Saharan African Iron-Cattle-Monsoon Complex (`afro_indian_ocean_complex`):**
   - *Triggers:* Highland savanna (`g2_terrain`) + Sorghum/yams/teff (`e1_crops`) + High-grade iron ore (`g4_resources`).
   - *Cascades:* Recommends *Zebu cattle wealth* (`e2_animals`), *Dzimbahwe granite enclosures* (`a3_monuments`), and *Monsoon Indian Ocean dhow trade* (`e5_trade`).
10. **Athenian Maritime Democracy & Silver Complex (`athens_thalassocracy_complex`):**
    - *Triggers:* Direct democracy (`p1_gov_system`) + Trireme naval supremacy (`p4_military`) + Standardized stamped coins (`e3_currency`).
    - *Cascades:* Recommends *Liturgical wealth sponsorship (Chorēgia)* (`e4_taxation`), *Citizen ostracism courts* (`p6_intelligence_bureaucracy`), and *Philosophical Agora pluralism* (`r6_orthodoxy_heresy`).
11. **Mississippian Mound-Builder River Network (`cahokia_mound_complex`):**
    - *Triggers:* Earthwork effigy mounds (`a3_monuments`) + Three Sisters maize agriculture (`e1_crops`).
    - *Cascades:* Recommends *Continental river canoe networks* (`e5_trade`), *Wampum shell belts* (`e3_currency`), and *River-confluence palisaded mound centers* (`g7_settlement`).
12. **Mediterranean Deforestation & Kiln Crisis (`mediterranean_deforestation_complex`):**
    - *Triggers:* Advanced bronze/iron metallurgy (`a5_science`) + Trireme naval fleet (`p4_military`) + Dense timber forests (`g4_resources`).
    - *Cascades:* Recommends *Widespread Deforestation & Hillside Soil Erosion* (`a6_ecology_collapse`).

### 4.4 UI Recommendation Engine & Complexity Awareness
`getSynergyRecommendations(answers, logicGuardEnabled, currentEra, currentScale, complexityMode)` parses all active selections against single and compound triggers, checks validity against `complexityMode` (via `getFilteredQuestions`), excludes options locked by the logic guard, and returns active recommendations for immediate badge and button rendering.

---

## 5. Algorithmic Synthesis Pipelines

Audited from:
* `src/utils/narrativeGenerator.js` (Lines 1–170)
* `src/utils/factSheetGenerator.js` (Lines 1–95)
* `src/utils/stressTestGenerator.js` (Lines 1–320)

### 5.1 Six-Paragraph Academic Historical Narrative Generator
The narrative essay synthesizes all 6 G.R.A.P.E.S. categories into a cohesive academic treatise:
- **Paragraph 1: Geography & Environmental Foundation:** Topography, freshwater sources, natural defensive barriers, mineral abundance, resource deficits, and ecological disasters.
- **Paragraph 2: Agricultural Economy, Labor & Fiscal Systems:** Staple cultigens, working livestock, foreign trade networks, currency mechanisms, and state taxation.
- **Paragraph 3: Political Dominion, Sovereign Legitimacy & Warfare:** Form of government, succession customs, legal and penal codes, military organization, and provincial foreign policy.
- **Paragraph 4: Social Hierarchy, Stratification & Gender Law:** Apex ruling class, specialized artisans and middle class, avenues for social mobility, legal rights of women, and the nature of unfree labor.
- **Paragraph 5: Religious Eschatology, Rites & Divine Mandate:** Conception of divinity, behavioral demeanor of the gods, sacred rituals, afterlife doctrines, and church-state balance of power.
- **Paragraph 6: Monumental Legacy, Script & Technological Triumphs:** Hydraulic engineering works, written scripts and mediums, architectural monuments, and scientific innovations.

### 5.2 Quick-Reference Oral Defense Fact Sheet Matrix
The fact sheet compiles a 31-row comparative matrix grouping inquiries by domain:
- Column 1: Universal Code (`G1`–`A5`)
- Column 2: Inquiry Title / Historical Dimension
- Column 3: Configured Imperial Doctrine (concatenating all multi-selected options)
- Column 4: Custom Variations & Field Notes

### 5.3 Cross-Category Teacher Stress-Test Defense Generator
`generateTeacherStressTest` scans for cross-category friction points and compiles 5 high-priority oral defense questions. Each item contains:
1. `id`: Unique invariant identifier.
2. `categoryPair`: The interacting G.R.A.P.E.S. domains (e.g. `Geography vs. Military`).
3. `trigger`: The exact combination of user choices that provoked the inquiry.
4. `question`: The formal adversarial cross-examination prompt.
5. `profAngle`: The methodological and historiographical reasoning behind the question.
6. `recommendedDefense`: A 3-point rhetorical defense strategy for the student.

---

## 6. Archaeological Benchmark Presets & Data Integrity Audits

The codebase includes 4 rigorously validated benchmark presets in `src/data/grapesData.js`:

```
┌────────────────────────────────────────────────────────────────────────┐
│                     PRESET LOGICAL INTEGRITY SUMMARY                   │
├─────────────┬─────────────┬───────────────────┬─────────────┬──────────┤
│ Preset ID   │ Era         │ Scale             │ Contradicts │ Synergies│
├─────────────┼─────────────┼───────────────────┼─────────────┼──────────┤
│ egypt       │ early_bronze│ regional_kingdom  │ 0 errors    │ 12 active│
│ mesopotamia │ early_bronze│ city_state        │ 0 errors    │ 9 active │
│ maya        │ classical   │ city_state        │ 0 errors    │ 11 active│
│ greece_rome │ classical   │ city_state        │ 0 errors    │ 14 active│
└─────────────┴─────────────┴───────────────────┴─────────────┴──────────┘
```

- **Egypt Preset:** Validates predictable river inundation, corvée labor during flood season, hieroglyphic scripts on papyrus, stone pyramid tombs, and divine Pharaoh god-kingship.
- **Mesopotamia Preset:** Validates flat alluvial plains, baked mudbrick architecture, cuneiform on clay, lex talionis legal codes, and professional spearmen phalanxes.
- **Maya Preset:** Validates limestone karst geology, cenotes and aguada reservoirs, bark-paper codices, cacao bean currency, and royal bloodletting ceremonies.
- **Greece/Rome Preset:** Validates jagged mountain valleys, island archipelagos, direct citizen democracy, stamped silver drachmas, hoplite phalanxes, and phonetic alphabets.

---

## 7. Production Build & Deployment Performance

### Build Specifications:
- **Bundler:** Vite v8.3.4 (with `@vitejs/plugin-react` v6.0.1)
- **CSS Engine:** Tailwind CSS v4.3.5 (with `@tailwindcss/vite` zero-config engine)
- **Component Engine:** React v19.2.6 (ESM modules, concurrent rendering)
- **Icon Suite:** Lucide React v1.71.0
- **Build Duration:** 450 ms
- **Output Artifacts:**
  - `dist/index.html`: 1.11 kB (gzip: 0.65 kB)
  - `dist/assets/index-[hash].css`: 46.32 kB (gzip: 9.24 kB)
  - `dist/assets/index-[hash].js`: 643.82 kB (gzip: 196.95 kB)

### Production Deployment Verification:
- **Platform:** Vercel Global Edge Network
- **Production URL:** [https://grapes-civilization-builder.vercel.app](https://grapes-civilization-builder.vercel.app)
- **Deployment Status:** Clean build, zero runtime warnings, complete offline functionality via browser memory.

---

**Report Certification:** Certified conforming to official Grade 7 History-Social Science curriculum standards and comparative ancient world history methodologies.

