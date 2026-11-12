import React from 'react';
import { 
  Mountain, 
  Flame, 
  Compass, 
  Shield, 
  Coins, 
  Users, 
  CheckCircle2, 
  Scroll,
  ChevronRight
} from 'lucide-react';
import { GRAPES_CATEGORIES, GRAPES_QUESTIONS } from '../data/grapesData';

const ICONS = {
  Mountain,
  Flame,
  Compass,
  Shield,
  Coins,
  Users
};

export default function Sidebar({
  categories,
  activeCategory,
  onSelectCategory,
  answers,
  hasGeneratedDossier,
  onOpenDossier,
  isMobileOpen,
  setIsMobileOpen,
  orderMode
}) {
  // Compute completion counts
  const categoryStats = categories.map((cat, idx) => {
    const questions = GRAPES_QUESTIONS[cat.key] || [];
    const total = questions.length;
    let completed = 0;
    for (const q of questions) {
      const val = answers[q.id];
      if (Array.isArray(val) && val.length > 0) completed++;
      else if (typeof val === 'string' && val.trim() !== '') completed++;
    }
    return {
      ...cat,
      stepNumber: idx + 1,
      total,
      completed,
      isFullyAnswered: completed === total
    };
  });

  const totalQuestions = categoryStats.reduce((sum, c) => sum + c.total, 0);
  const totalCompleted = categoryStats.reduce((sum, c) => sum + c.completed, 0);
  const overallPct = Math.round((totalCompleted / totalQuestions) * 100);

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden backdrop-blur-xs"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed md:sticky top-0 md:top-6 z-40 h-[100dvh] md:h-[calc(100vh-3rem)] w-72 shrink-0 transition-transform duration-300 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="h-full flex flex-col parchment-panel rounded-r-2xl md:rounded-2xl shadow-lg border border-[#cfc1a8] p-4 overflow-hidden">
          {/* Sidebar Top Title */}
          <div className="pb-3 border-b border-[#dfd4c0] flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-[#935923] text-white flex items-center justify-center font-cinzel text-xs font-bold">
                  VI
                </span>
                <h2 className="font-cinzel text-base font-bold text-[#241a15]">
                  {orderMode === 'logical' ? 'BUILD-UP STEPS' : 'G.R.A.P.E.S. INDEX'}
                </h2>
              </div>
              <p className="text-[11px] text-[#6d594a] mt-0.5 font-sans-ui">
                {orderMode === 'logical' ? 'Step-by-step civilization design' : 'Six Pillars of Civilization'}
              </p>
            </div>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="md:hidden text-[#6d594a] hover:text-[#241a15] p-1 cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Overall Progress Gauge */}
          <div className="py-3 border-b border-[#dfd4c0]">
            <div className="flex justify-between items-center text-xs mb-1 font-sans-ui">
              <span className="font-semibold text-[#44352b]">Civilization Progress</span>
              <span className="font-bold text-[#8c531b]">
                {totalCompleted}/{totalQuestions} ({overallPct}%)
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#e3d7c3] overflow-hidden border border-[#d2c3aa]">
              <div
                className="h-full bg-gradient-to-r from-[#935923] to-[#c59b27] transition-all duration-300"
                style={{ width: `${overallPct}%` }}
              />
            </div>
          </div>

          {/* Navigation Category Items */}
          <nav className="flex-1 overflow-y-auto py-2 space-y-1.5 pr-1">
            {categoryStats.map((cat) => {
              const IconComp = ICONS[cat.icon] || Mountain;
              const isActive = activeCategory === cat.key;
              const progressPct = Math.round((cat.completed / cat.total) * 100);

              return (
                <button
                  key={cat.key}
                  onClick={() => {
                    onSelectCategory(cat.key);
                    setIsMobileOpen(false);
                    const el = document.getElementById(`sec-${cat.key}`);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className={`w-full text-left p-2.5 rounded-lg border transition-all flex flex-col gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-[#f0e4d2] border-[#935923] shadow-xs'
                      : 'bg-[#faf6ee] hover:bg-[#f3eadc] border-[#dfd3be]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-7 h-7 rounded-md flex items-center justify-center text-white shrink-0 shadow-xs"
                        style={{ backgroundColor: cat.color }}
                      >
                        <IconComp size={15} />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-cinzel font-bold text-xs text-[#241a15]">
                            {orderMode === 'logical' ? `Step ${cat.stepNumber}: ` : `${cat.key}. `}
                            {cat.name}
                          </span>
                        </div>
                        <span className="text-[10px] text-[#786454] block leading-tight font-sans-ui">
                          {cat.subtitle.split('&')[0]}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      {cat.isFullyAnswered ? (
                        <CheckCircle2 size={16} className="text-emerald-700" />
                      ) : (
                        <span className="text-[11px] font-semibold text-[#665243] font-sans-ui bg-[#e9ddcb] px-1.5 py-0.5 rounded">
                          {cat.completed}/{cat.total}
                        </span>
                      )}
                      <ChevronRight size={13} className="text-[#a4917f]" />
                    </div>
                  </div>

                  {/* Mini Progress Bar */}
                  <div className="w-full h-1 rounded-full bg-[#e2d5c0] overflow-hidden">
                    <div
                      className="h-full transition-all duration-300"
                      style={{
                        width: `${progressPct}%`,
                        backgroundColor: cat.color
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </nav>

          {/* Dossier Quick Access Button in Sidebar */}
          <div className="pt-3 border-t border-[#dfd4c0] space-y-2">
            <button
              onClick={() => {
                onOpenDossier();
                setIsMobileOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-gradient-to-r from-[#935923] via-[#a86529] to-[#7f4a18] text-[#fbf8f2] font-cinzel text-xs font-bold shadow-md hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer border border-[#6d3e14]"
            >
              <Scroll size={15} />
              <span>{hasGeneratedDossier ? 'Open Dossier' : 'Generate Dossier'}</span>
            </button>
            <p className="text-[10px] text-center text-[#7a6757] font-sans-ui">
              6-Part Essay, Fact Sheet & Defense Simulator
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
