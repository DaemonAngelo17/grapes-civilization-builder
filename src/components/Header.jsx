import React from 'react';
import { 
  Crown, 
  Sparkles, 
  RotateCcw, 
  Scroll, 
  Menu, 
  Dices, 
  Landmark, 
  Compass, 
  CheckCircle2, 
  Brain, 
  Layers, 
  Hourglass, 
  Globe2,
  GraduationCap
} from 'lucide-react';
import { 
  INSPIRATIONS, 
  HISTORICAL_PRESETS, 
  HISTORICAL_ERAS, 
  CIVILIZATION_SCALES 
} from '../data/grapesData';

export default function Header({
  civilizationName,
  setCivilizationName,
  inspiration,
  setInspiration,
  currentEra,
  setCurrentEra,
  currentScale,
  setCurrentScale,
  complexityMode = 'normal',
  setComplexityMode,
  onLoadPreset,
  onRandomize,
  onReset,
  onGenerateDossier,
  totalAnswered,
  totalQuestions,
  onToggleMobileSidebar,
  logicGuardEnabled,
  setLogicGuardEnabled,
  autoSynergiesEnabled,
  setAutoSynergiesEnabled,
  orderMode,
  setOrderMode
}) {
  const dynamicDenominator = complexityMode === 'basic' ? 12 : complexityMode === 'complex' ? 37 : 31;
  const percentComplete = Math.min(100, Math.round((totalAnswered / dynamicDenominator) * 100));

  const selectedEraObj = HISTORICAL_ERAS.find((e) => e.id === currentEra) || HISTORICAL_ERAS[0];
  const selectedScaleObj = CIVILIZATION_SCALES.find((s) => s.id === currentScale) || CIVILIZATION_SCALES[1];

  return (
    <header className="parchment-card rounded-2xl p-5 md:p-6 mb-6 border border-[#cfc1a8] shadow-md relative overflow-hidden">
      {/* Decorative Antique Corner Embellishments */}
      <div className="absolute top-2 left-2 text-[#cbb89d] text-xs pointer-events-none select-none font-serif">❖</div>
      <div className="absolute top-2 right-2 text-[#cbb89d] text-xs pointer-events-none select-none font-serif">❖</div>
      <div className="absolute bottom-2 left-2 text-[#cbb89d] text-xs pointer-events-none select-none font-serif">❖</div>
      <div className="absolute bottom-2 right-2 text-[#cbb89d] text-xs pointer-events-none select-none font-serif">❖</div>

      {/* Top Banner & Title */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-[#ded3be]">
        <div>
          <div className="flex items-center gap-2.5">
            <button
              onClick={onToggleMobileSidebar}
              className="md:hidden p-2 rounded-lg bg-[#efe5d3] border border-[#d2c3aa] text-[#4a3a2d]"
              aria-label="Open Navigation"
            >
              <Menu size={18} />
            </button>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#935923] via-[#7d481b] to-[#512c0e] text-[#fcf9f2] flex items-center justify-center shadow-md border border-[#563110]">
              <Landmark size={22} />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold font-cinzel text-[#241a15] tracking-wide">
                  G.R.A.P.E.S. CIVILIZATION BUILDER &amp; DEFENSE SIMULATOR
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold font-sans-ui bg-[#e8dcce] text-[#6d5137] border border-[#cfbfae] uppercase tracking-wider">
                  {complexityMode === 'basic' ? '🌱 Basic (Grades 4–6)' : complexityMode === 'complex' ? '🎓 Complex (Grades 9–12 / AP)' : '🏛️ Normal (Grades 7–8)'}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold font-cinzel bg-[#efe0ca] text-[#8c531b] border border-[#d6c4a8]">
                  v6.0 ADVANCED GAMIFIED LAB
                </span>
              </div>
              <p className="text-xs md:text-sm text-[#665243] font-archaic italic">
                Build an ancient empire, test historical constraints, simulate crisis events & defend it in your oral defense!
              </p>
            </div>
          </div>
        </div>

        {/* Global Progress & Dossier Button */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-col text-right font-sans-ui min-w-[170px]">
            <div className="flex justify-between items-center text-xs mb-1">
              <span className="font-semibold text-[#483a30]">
                Readiness:
              </span>
              <span className="text-xs text-[#8c531b] font-bold">
                {totalAnswered} / {dynamicDenominator} ({percentComplete}%)
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#dfd2bd] overflow-hidden border border-[#cbbaa0]">
              <div
                className="h-full bg-gradient-to-r from-[#935923] via-[#b8762f] to-[#c59b27] transition-all duration-300"
                style={{ width: `${percentComplete}%` }}
              />
            </div>
          </div>

          <button
            onClick={onGenerateDossier}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#935923] via-[#a86529] to-[#7f4a18] text-[#fcfaf5] font-cinzel text-xs md:text-sm font-bold shadow-lg hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer border border-[#6b3e17]"
          >
            <Scroll size={16} />
            <span>Generate Civilization Dossier</span>
          </button>
        </div>
      </div>

      {/* Grade-Level Complexity Engine: 3-Pill Toggle Bar */}
      <div className="py-3 px-4 my-4 rounded-xl bg-[#eee3ce] border border-[#d6c5aa] shadow-2xs flex flex-col lg:flex-row items-center justify-between gap-3 text-xs font-sans-ui">
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-6 h-6 rounded-md bg-[#935923] text-white flex items-center justify-center shadow-xs">
            <GraduationCap size={15} />
          </div>
          <div>
            <span className="font-bold text-[#3d2e23] uppercase tracking-wider text-[11px] font-cinzel block">
              Complexity Tier
            </span>
            <span className="text-[10px] text-[#78614e] hidden sm:block">
              Choose your grade-level rigor & question depth
            </span>
          </div>
        </div>

        {/* 3-Pill Toggle Switch */}
        <div className="inline-flex p-1 rounded-xl bg-[#dfceb3] border border-[#cbbaa0] shadow-inner max-w-full overflow-x-auto">
          <button
            type="button"
            onClick={() => setComplexityMode('basic')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
              complexityMode === 'basic'
                ? 'bg-gradient-to-r from-[#2e7d32] to-[#388e3c] text-white shadow-sm ring-1 ring-[#1b5e20]'
                : 'text-[#564332] hover:text-[#1e140d] hover:bg-[#ebdcc4]'
            }`}
            title="Grades 4–6: 12 Core Questions, foundational options, guided auto-synergies"
          >
            <span>🌱</span>
            <span>Basic (Grades 4–6)</span>
            <span className="text-[10px] opacity-85 px-1.5 py-0.2 rounded bg-black/20 font-mono">12 Qs</span>
          </button>

          <button
            type="button"
            onClick={() => setComplexityMode('normal')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
              complexityMode === 'normal'
                ? 'bg-gradient-to-r from-[#935923] to-[#7f4a18] text-white shadow-sm ring-1 ring-[#5a3310]'
                : 'text-[#564332] hover:text-[#1e140d] hover:bg-[#ebdcc4]'
            }`}
            title="Grades 7–8: 31 Standard Questions, Standard Logic Guard & Two-Tiered Synergies"
          >
            <span>🏛️</span>
            <span>Normal (Grades 7–8)</span>
            <span className="text-[10px] opacity-85 px-1.5 py-0.2 rounded bg-black/20 font-mono">31 Qs</span>
          </button>

          <button
            type="button"
            onClick={() => setComplexityMode('complex')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
              complexityMode === 'complex'
                ? 'bg-gradient-to-r from-[#4a2e7a] to-[#5e3a9b] text-white shadow-sm ring-1 ring-[#321c56]'
                : 'text-[#564332] hover:text-[#1e140d] hover:bg-[#ebdcc4]'
            }`}
            title="Grades 9–12 / AP: 37 Exhaustive Questions, Fiscal, Demographic & Carrying-Capacity Locks"
          >
            <span>🎓</span>
            <span>Complex (Grades 9–12 / AP)</span>
            <span className="text-[10px] opacity-85 px-1.5 py-0.2 rounded bg-black/20 font-mono">37 Qs</span>
          </button>
        </div>

        {/* Live Tagline */}
        <div className="text-[11px] text-[#6d5543] font-medium italic text-center lg:text-right shrink-0">
          {complexityMode === 'basic' && '🌱 12 Core Inquiries | 72 Foundational Options | Simplified Auto-Pilot Synergies'}
          {complexityMode === 'normal' && '🏛️ 31 Standard Inquiries | 300 Options | Standard Logic Guard & Two-Tiered Synergies'}
          {complexityMode === 'complex' && '🎓 37 Exhaustive Inquiries | 390 Options | Macroeconomic & Carrying-Capacity Locks'}
        </div>
      </div>

      {/* Grade 7 Logic Guard & Ordering Control Bar */}
      <div className="py-3 px-4 my-4 rounded-xl bg-[#f0e4d2] border border-[#dfd0ba] flex flex-wrap items-center justify-between gap-3 text-xs font-sans-ui">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5">
            <Brain size={16} className="text-[#935923]" />
            <span className="font-bold text-[#3d2e23]">Grade 7 Logic Guard:</span>
            <button
              onClick={() => setLogicGuardEnabled(!logicGuardEnabled)}
              className={`px-3 py-1 rounded-full font-bold transition-all cursor-pointer border text-xs flex items-center gap-1 ${
                logicGuardEnabled
                  ? 'bg-emerald-700 text-white border-emerald-800 shadow-xs'
                  : 'bg-[#d8c7b0] text-[#5c4a3b] border-[#baaa94]'
              }`}
            >
              {logicGuardEnabled ? '✓ Active (Logical Contradictions Locked)' : '✕ Disabled (Fantasy Mode)'}
            </button>
          </div>

          <div className="flex items-center gap-1.5">
            <Sparkles size={16} className="text-[#b8860b]" />
            <span className="font-bold text-[#3d2e23]">Auto-Synergies:</span>
            <button
              onClick={() => setAutoSynergiesEnabled(!autoSynergiesEnabled)}
              className={`px-3 py-1 rounded-full font-bold transition-all cursor-pointer border text-xs flex items-center gap-1 ${
                autoSynergiesEnabled
                  ? 'bg-amber-700 text-white border-amber-800 shadow-xs'
                  : 'bg-[#d8c7b0] text-[#5c4a3b] border-[#baaa94]'
              }`}
            >
              {autoSynergiesEnabled ? '✨ Auto-Link Active' : '✕ Manual Only'}
            </button>
          </div>

          <span className="text-[#68491c] bg-[#faecd6] px-2.5 py-0.5 rounded-full border border-[#e6ceae] font-semibold text-[11px]">
            ⚡ No Choice Caps: Select as many as you want unless contradictory!
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Layers size={14} className="text-[#935923]" />
          <span className="font-semibold text-[#3d2e23]">Order By:</span>
          <button
            onClick={() => setOrderMode(orderMode === 'logical' ? 'grapes' : 'logical')}
            className="px-2.5 py-1 rounded-lg bg-[#faf6ee] hover:bg-[#fff] border border-[#cfc1a8] text-[#4d3b2f] font-medium transition-colors cursor-pointer"
          >
            {orderMode === 'logical'
              ? '🏗️ Build-Up Order (Land ➔ Food ➔ Army ➔ Society)'
              : '🔤 G.R.A.P.E.S. Acronym Order (G-R-A-P-E-S)'}
          </button>
        </div>
      </div>

      {/* Civilization Inputs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 pt-2 items-end">
        {/* Civilization Name Input */}
        <div className="lg:col-span-5">
          <label className="block text-xs font-bold font-cinzel text-[#48372b] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <Crown size={14} className="text-[#935923]" />
            Civilization Name
          </label>
          <input
            type="text"
            value={civilizationName}
            onChange={(e) => setCivilizationName(e.target.value)}
            placeholder="e.g. Kemet, Neo-Babylon, Teotihuacan, Sparta, Achaemenia..."
            className="w-full text-sm md:text-base font-cinzel font-semibold px-4 py-2.5 rounded-xl bg-[#faf6ee] border border-[#d2c4ad] text-[#241a15] placeholder-[#9c8976] focus:outline-none focus:ring-2 focus:ring-[#935923] focus:border-[#935923] transition-all shadow-inner"
          />
        </div>

        {/* Real-World Inspiration Dropdown */}
        <div className="lg:col-span-4">
          <label className="block text-xs font-bold font-cinzel text-[#48372b] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <Compass size={14} className="text-[#935923]" />
            Real-World Inspiration
          </label>
          <select
            value={inspiration}
            onChange={(e) => setInspiration(e.target.value)}
            className="w-full text-sm font-sans-ui font-medium px-3.5 py-2.5 rounded-xl bg-[#faf6ee] border border-[#d2c4ad] text-[#241a15] focus:outline-none focus:ring-2 focus:ring-[#935923] focus:border-[#935923] transition-all shadow-inner cursor-pointer"
          >
            <option value="">Select Inspiration Archetype...</option>
            {INSPIRATIONS.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name} ({item.region})
              </option>
            ))}
          </select>
        </div>

        {/* Preset Loader & Quick Controls */}
        <div className="lg:col-span-3 flex items-center gap-2">
          <div className="flex-1">
            <label className="block text-[11px] font-bold font-cinzel text-[#624e41] uppercase tracking-wider mb-1 flex items-center gap-1">
              <Sparkles size={12} className="text-[#b8860b]" />
              Historical Presets
            </label>
            <select
              onChange={(e) => {
                if (e.target.value) {
                  onLoadPreset(e.target.value);
                  e.target.value = '';
                }
              }}
              className="w-full text-xs font-sans-ui px-2.5 py-2 rounded-lg bg-[#f2e7d5] border border-[#cfbfa7] text-[#3d2f24] hover:bg-[#ebdfcc] transition-colors cursor-pointer"
            >
              <option value="">🏛️ Load Benchmark Preset...</option>
              <option value="egypt">🇪🇬 Ancient Egypt (Nile Kemet)</option>
              <option value="mesopotamia">🏺 Mesopotamia (Sumer & Babylon)</option>
              <option value="maya">🌿 Classic Maya (Lowland Pyramids & Cenotes)</option>
              <option value="greece_rome">🏛️ Classical Greece & Rome (Polis & Imperium)</option>
              <option value="aksum_kush">🦁 Kingdoms of Kush & Aksum (Nile Gold & Red Sea)</option>
              <option value="xiongnu_steppe">🏹 Steppe Nomadic Confederacy (Xiongnu Khaganate)</option>
              <option value="polynesia">🌊 Polynesian Wayfinders (Oceanic Thalassocracy)</option>
              <option value="qin_han">🐉 Imperial China (Qin & Han Dynasty)</option>
            </select>
          </div>

          <button
            onClick={onRandomize}
            title="Roll the Oracles (Randomize configuration)"
            className="p-2.5 rounded-lg bg-[#efe4d1] hover:bg-[#e6d8c0] border border-[#cfbfa7] text-[#4d3c2f] transition-all cursor-pointer mt-5"
          >
            <Dices size={16} />
          </button>

          <button
            onClick={onReset}
            title="Reset All Answers"
            className="p-2.5 rounded-lg bg-[#efe4d1] hover:bg-[#f3d9d6] border border-[#cfbfa7] text-[#7d3c34] transition-all cursor-pointer mt-5"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </div>

      {/* Historical Era & Civilization Scale Selectors (Step 0 Foundations) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 mt-4 border-t border-[#dfd3be]">
        {/* Historical Era (Time Period) */}
        <div className="p-3.5 rounded-xl bg-[#faf6ee] border border-[#d6c7b0] shadow-xs">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <label className="text-xs font-bold font-cinzel text-[#48372b] uppercase tracking-wider flex items-center gap-1.5">
              <Hourglass size={14} className="text-[#935923]" />
              Historical Era (Time Period)
            </label>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#f0e3ce] text-[#7a481c] border border-[#dfcbb0]">
              Technology & Politics Gate
            </span>
          </div>
          <select
            value={currentEra}
            onChange={(e) => setCurrentEra(e.target.value)}
            className="w-full text-xs sm:text-sm font-sans-ui font-semibold px-3 py-2 rounded-lg bg-[#ffffff] border border-[#d2c4ad] text-[#241a15] focus:outline-none focus:ring-2 focus:ring-[#935923] cursor-pointer"
          >
            {HISTORICAL_ERAS.map((era) => (
              <option key={era.id} value={era.id}>
                ⏳ {era.name}
              </option>
            ))}
          </select>
          {selectedEraObj && (
            <div className="mt-2 text-[11px] text-[#5c4a3b] font-sans-ui leading-tight bg-[#f5ede0] p-2.5 rounded-lg border border-[#e5d8c3]">
              <div className="font-semibold text-[#733f11] mb-0.5">{selectedEraObj.period}</div>
              <p className="text-[#695646] mb-1.5">{selectedEraObj.description}</p>
              <div className="flex flex-wrap gap-1.5">
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${selectedEraObj.ironAvailable ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                  {selectedEraObj.ironAvailable ? '✓ Iron Metallurgy' : '✕ Bronze Only (No Iron)'}
                </span>
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${selectedEraObj.coinsAvailable ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                  {selectedEraObj.coinsAvailable ? '✓ Stamped Coins' : '✕ Weighed Bullion / Grain'}
                </span>
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${selectedEraObj.alphabetAvailable ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                  {selectedEraObj.alphabetAvailable ? '✓ 22-Letter Alphabet' : '✕ Cuneiform / Glyphs'}
                </span>
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${selectedEraObj.concreteAvailable ? 'bg-emerald-100 text-emerald-800' : 'bg-stone-200 text-stone-700'}`}>
                  {selectedEraObj.concreteAvailable ? '✓ Underwater Concrete' : '✕ Cut Stone / Brick Only'}
                </span>
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${selectedEraObj.democracyAvailable ? 'bg-sky-100 text-sky-800' : 'bg-stone-200 text-stone-700'}`}>
                  {selectedEraObj.democracyAvailable ? '✓ Citizen Assemblies' : '✕ Monarchy / Theocracy Only'}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Civilization Scale (Size & Extent) */}
        <div className="p-3.5 rounded-xl bg-[#faf6ee] border border-[#d6c7b0] shadow-xs">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <label className="text-xs font-bold font-cinzel text-[#48372b] uppercase tracking-wider flex items-center gap-1.5">
              <Globe2 size={14} className="text-[#935923]" />
              Civilization Scale (Size & Extent)
            </label>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#f0e3ce] text-[#7a481c] border border-[#dfcbb0]">
              Geography & Government Gate
            </span>
          </div>
          <select
            value={currentScale}
            onChange={(e) => setCurrentScale(e.target.value)}
            className="w-full text-xs sm:text-sm font-sans-ui font-semibold px-3 py-2 rounded-lg bg-[#ffffff] border border-[#d2c4ad] text-[#241a15] focus:outline-none focus:ring-2 focus:ring-[#935923] cursor-pointer"
          >
            {CIVILIZATION_SCALES.map((scale) => (
              <option key={scale.id} value={scale.id}>
                🌍 {scale.name}
              </option>
            ))}
          </select>
          {selectedScaleObj && (
            <div className="mt-2 text-[11px] text-[#5c4a3b] font-sans-ui leading-tight bg-[#f5ede0] p-2.5 rounded-lg border border-[#e5d8c3]">
              <p className="text-[#695646] mb-1.5">{selectedScaleObj.description}</p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#e8dcce] text-[#58412e]">
                  {selectedScaleObj.maxTerrains === 1 ? '📍 Max 1 Local Terrain' : selectedScaleObj.maxTerrains === 2 ? '📍 Max 2 Neighboring Terrains' : '📍 Multi-Biome (Unlimited Terrains)'}
                </span>
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${selectedScaleObj.canBuildGreatWall ? 'bg-emerald-100 text-emerald-800' : 'bg-stone-200 text-stone-700'}`}>
                  {selectedScaleObj.canBuildGreatWall ? '✓ Frontier Great Walls' : '✕ Too Small for Great Wall'}
                </span>
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${selectedScaleObj.canRunDirectDemocracy ? 'bg-sky-100 text-sky-800' : 'bg-stone-200 text-stone-700'}`}>
                  {selectedScaleObj.canRunDirectDemocracy ? '✓ Direct Town Hall Assembly' : '✕ Too Vast for Direct Democracy'}
                </span>
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${selectedScaleObj.canRunMegaBureaucracy ? 'bg-amber-100 text-amber-800' : 'bg-stone-200 text-stone-700'}`}>
                  {selectedScaleObj.canRunMegaBureaucracy ? '✓ Imperial Provincial Governors' : '✕ Local City Magistrates'}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
