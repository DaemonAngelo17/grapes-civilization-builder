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
  Layers
} from 'lucide-react';
import { INSPIRATIONS, HISTORICAL_PRESETS } from '../data/grapesData';

export default function Header({
  civilizationName,
  setCivilizationName,
  inspiration,
  setInspiration,
  onLoadPreset,
  onRandomize,
  onReset,
  onGenerateDossier,
  totalAnswered,
  totalQuestions,
  onToggleMobileSidebar,
  logicGuardEnabled,
  setLogicGuardEnabled,
  orderMode,
  setOrderMode
}) {
  const percentComplete = Math.round((totalAnswered / totalQuestions) * 100);

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
                  G.R.A.P.E.S. CIVILIZATION BUILDER
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold font-sans-ui bg-[#e8dcce] text-[#6d5137] border border-[#cfbfae] uppercase tracking-wider">
                  Grade 7 Edition
                </span>
              </div>
              <p className="text-xs md:text-sm text-[#665243] font-archaic italic">
                Build an ancient empire step-by-step from the ground up & defend it in your oral defense!
              </p>
            </div>
          </div>
        </div>

        {/* Global Progress & Dossier Button */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="hidden sm:flex flex-col text-right font-sans-ui">
            <span className="text-xs font-semibold text-[#483a30]">
              Civilization Readiness
            </span>
            <span className="text-xs text-[#8c531b] font-bold">
              {totalAnswered} / {totalQuestions} answered ({percentComplete}%)
            </span>
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

      {/* Grade 7 Logic Guard & Ordering Control Bar */}
      <div className="py-3 px-4 my-4 rounded-xl bg-[#f0e4d2] border border-[#dfd0ba] flex flex-wrap items-center justify-between gap-3 text-xs font-sans-ui">
        <div className="flex items-center gap-2">
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
            {logicGuardEnabled ? '✓ Active (No Illogical Contradictions)' : '✕ Disabled (Fantasy Mode)'}
          </button>
          <span className="text-[#705e4f] text-[11px] hidden md:inline italic">
            {logicGuardEnabled
              ? 'Locks choices that make no historical sense (e.g. no horse chariots without horses!)'
              : 'Warning: Choices may contradict each other! Your teacher will grill you on them!'}
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
              <option value="">🏛️ Load Preset...</option>
              <option value="egypt">Ancient Egypt (Nile Kemet)</option>
              <option value="mesopotamia">Mesopotamia (Sumer & Babylon)</option>
              <option value="maya">Classic Maya (Cenotes & Jade)</option>
              <option value="greece_rome">Classical Polis League (Greece/Rome)</option>
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
    </header>
  );
}
