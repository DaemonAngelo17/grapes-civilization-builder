import React, { useState, useMemo } from 'react';
import { 
  Mountain, 
  Flame, 
  Compass, 
  Shield, 
  Coins, 
  Users, 
  Scroll, 
  Sparkles, 
  CheckCircle2, 
  ArrowUp,
  AlertCircle,
  Lightbulb,
  Check
} from 'lucide-react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import QuestionCard from './components/QuestionCard';
import DossierView from './components/DossierView';
import ImageModal from './components/ImageModal';
import { 
  GRAPES_CATEGORIES, 
  GRAPES_QUESTIONS, 
  HISTORICAL_PRESETS,
  HISTORICAL_ERAS,
  CIVILIZATION_SCALES
} from './data/grapesData';

const ICONS = {
  Mountain,
  Flame,
  Compass,
  Shield,
  Coins,
  Users
};

export default function App() {
  // Default to Ancient Egypt preset so the app opens with rich, valid selections
  const defaultPreset = HISTORICAL_PRESETS.egypt;

  const [civilizationName, setCivilizationName] = useState(defaultPreset.name);
  const [inspiration, setInspiration] = useState(defaultPreset.inspiration);
  const [currentEra, setCurrentEra] = useState(defaultPreset.era || 'early_bronze');
  const [currentScale, setCurrentScale] = useState(defaultPreset.scale || 'regional_kingdom');
  const [answers, setAnswers] = useState(defaultPreset.answers);
  const [customNotes, setCustomNotes] = useState({});
  const [activeCategory, setActiveCategory] = useState('G');
  const [isDossierOpen, setIsDossierOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [logicGuardEnabled, setLogicGuardEnabled] = useState(true);
  const [orderMode, setOrderMode] = useState('logical'); // 'logical' (build-up) or 'grapes'
  const [enlargedImage, setEnlargedImage] = useState(null); // { visual, optionText }
  const [toastMessage, setToastMessage] = useState(null);

  // Show temporary toast message
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Reorder categories based on chosen mode
  const orderedCategories = useMemo(() => {
    if (orderMode === 'logical') {
      // Build-Up Sequence: 1. Geography, 2. Economy, 3. Politics, 4. Social Structure, 5. Religion, 6. Achievements
      const desiredKeys = ['G', 'E', 'P', 'S', 'R', 'A'];
      return desiredKeys.map((key) => GRAPES_CATEGORIES.find((c) => c.key === key));
    }
    // G.R.A.P.E.S. Acronym Sequence
    const grapesKeys = ['G', 'R', 'A', 'P', 'E', 'S'];
    return grapesKeys.map((key) => GRAPES_CATEGORIES.find((c) => c.key === key));
  }, [orderMode]);

  // Handle question answer change
  const handleAnswerChange = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value
    }));
  };

  // Handle custom "Other / Write Your Own" note change
  const handleCustomChange = (questionId, note) => {
    setCustomNotes((prev) => ({
      ...prev,
      [questionId]: note
    }));
  };

  // Load a Historical Preset
  const handleLoadPreset = (presetKey) => {
    const preset = HISTORICAL_PRESETS[presetKey];
    if (preset) {
      setCivilizationName(preset.name);
      setInspiration(preset.inspiration);
      if (preset.era) setCurrentEra(preset.era);
      if (preset.scale) setCurrentScale(preset.scale);
      setAnswers(preset.answers);
      setCustomNotes({});
      showToast(`Loaded Preset: ${preset.name}`);
    }
  };

  // Oracle Roll (Randomizer)
  const handleRandomize = () => {
    const randomArchetypes = [
      'The Sun-Dagger Empire',
      'The Obsidian Federation',
      'The Riverine Thalassocracy',
      'The Bronze Citadel of the Highlands',
      'The Jade Serpent Dynasty',
      'The Golden Crescent Realm'
    ];
    const randomName = randomArchetypes[Math.floor(Math.random() * randomArchetypes.length)];
    const inspirationsList = [
      'Mesopotamia (Sumer, Akkad, Babylon, Assyria)',
      'Ancient Egypt (Old, Middle, New Kingdom)',
      'Indus Valley Civilization (Harappa & Mohenjo-Daro)',
      'Ancient China (Shang, Zhou, Qin, Han Dynasties)',
      'Maya / Aztec / Inca (Mesoamerica & Andes)',
      'Classical Greece & Rome (Polis & Imperium)',
      'Persian Empire (Achaemenid & Sasanian)',
      'Phoenicia & Carthage (Maritime Thalassocracy)'
    ];
    const randomInspiration = inspirationsList[Math.floor(Math.random() * inspirationsList.length)];
    const randomEra = HISTORICAL_ERAS[Math.floor(Math.random() * HISTORICAL_ERAS.length)].id;
    const randomScale = CIVILIZATION_SCALES[Math.floor(Math.random() * CIVILIZATION_SCALES.length)].id;

    const newAnswers = {};
    for (const cat of GRAPES_CATEGORIES) {
      const qList = GRAPES_QUESTIONS[cat.key] || [];
      for (const q of qList) {
        if (q.type === 'radio') {
          const randOption = q.options[Math.floor(Math.random() * q.options.length)];
          newAnswers[q.id] = randOption;
        } else {
          // Checkbox: pick 1 or 2 options
          const numPicks = Math.floor(Math.random() * 2) + 1;
          const shuffled = [...q.options].sort(() => 0.5 - Math.random());
          newAnswers[q.id] = shuffled.slice(0, numPicks);
        }
      }
    }

    setCivilizationName(randomName);
    setInspiration(randomInspiration);
    setCurrentEra(randomEra);
    setCurrentScale(randomScale);
    setAnswers(newAnswers);
    setCustomNotes({});
    showToast('The Oracles have cast their lot! New Civilization generated.');
  };

  // Reset all
  const handleReset = () => {
    if (window.confirm('Are you sure you want to clear all selections and start fresh?')) {
      setCivilizationName('');
      setInspiration('');
      setCurrentEra('early_bronze');
      setCurrentScale('regional_kingdom');
      setAnswers({});
      setCustomNotes({});
      showToast('All answers cleared.');
    }
  };

  // Compute total questions and total answered
  let totalQuestionsCount = 0;
  let totalAnsweredCount = 0;

  for (const cat of GRAPES_CATEGORIES) {
    const qList = GRAPES_QUESTIONS[cat.key] || [];
    totalQuestionsCount += qList.length;
    for (const q of qList) {
      const val = answers[q.id];
      if (Array.isArray(val) && val.length > 0) totalAnsweredCount++;
      else if (typeof val === 'string' && val.trim() !== '') totalAnsweredCount++;
    }
  }

  // Scroll to top helper
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-[#241a15] pb-16">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#241a15] text-[#f7f2e7] px-4 py-2.5 rounded-xl shadow-xl font-cinzel text-xs flex items-center gap-2 border border-[#935923] animate-bounce">
          <Sparkles size={14} className="text-[#c59b27]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-4 md:pt-6">
        {/* Header */}
        <Header
          civilizationName={civilizationName}
          setCivilizationName={setCivilizationName}
          inspiration={inspiration}
          setInspiration={setInspiration}
          currentEra={currentEra}
          setCurrentEra={setCurrentEra}
          currentScale={currentScale}
          setCurrentScale={setCurrentScale}
          onLoadPreset={handleLoadPreset}
          onRandomize={handleRandomize}
          onReset={handleReset}
          onGenerateDossier={() => setIsDossierOpen(true)}
          totalAnswered={totalAnsweredCount}
          totalQuestions={totalQuestionsCount}
          onToggleMobileSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          logicGuardEnabled={logicGuardEnabled}
          setLogicGuardEnabled={setLogicGuardEnabled}
          orderMode={orderMode}
          setOrderMode={setOrderMode}
        />

        {/* Content Layout with Sticky Sidebar */}
        <div className="flex gap-6 items-start">
          {/* Sidebar Navigation */}
          <Sidebar
            categories={orderedCategories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            answers={answers}
            hasGeneratedDossier={true}
            onOpenDossier={() => setIsDossierOpen(true)}
            isMobileOpen={isMobileSidebarOpen}
            setIsMobileOpen={setIsMobileSidebarOpen}
            orderMode={orderMode}
          />

          {/* Main Question Feed */}
          <main className="flex-1 space-y-12 min-w-0">
            {orderedCategories.map((cat, catIdx) => {
              const IconComp = ICONS[cat.icon] || Mountain;
              const questions = GRAPES_QUESTIONS[cat.key] || [];

              // Category completion
              let catAnswered = 0;
              for (const q of questions) {
                const val = answers[q.id];
                if (Array.isArray(val) && val.length > 0) catAnswered++;
                else if (typeof val === 'string' && val.trim() !== '') catAnswered++;
              }
              const isCatComplete = catAnswered === questions.length;

              return (
                <section
                  key={cat.key}
                  id={`sec-${cat.key}`}
                  className="scroll-mt-6 space-y-6"
                >
                  {/* Category Banner Card */}
                  <div
                    className="parchment-panel rounded-2xl p-5 md:p-6 border shadow-sm relative overflow-hidden"
                    style={{ borderColor: cat.borderCol }}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-sm"
                          style={{ backgroundColor: cat.color }}
                        >
                          <IconComp size={22} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span
                              className="font-cinzel text-xs font-bold px-2 py-0.5 rounded text-white"
                              style={{ backgroundColor: cat.color }}
                            >
                              {orderMode === 'logical' ? `STEP ${catIdx + 1}` : `PILLAR ${cat.key}`}
                            </span>
                            <h2 className="text-xl md:text-2xl font-bold font-cinzel text-[#241a15]">
                              {cat.name.toUpperCase()}
                            </h2>
                          </div>
                          <p className="text-xs md:text-sm font-archaic text-[#675446] italic">
                            {cat.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs px-3 py-1 rounded-full bg-[#f1e6d4] text-[#5b483a] font-semibold border border-[#d6c5ae] font-sans-ui">
                          {catAnswered} / {questions.length} Answered
                        </span>
                        {isCatComplete && (
                          <span className="text-xs text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full font-bold flex items-center gap-1 border border-emerald-300">
                            <CheckCircle2 size={13} /> Pillar Complete
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Grade 7 "Why it Matters" Big Callout Box */}
                    {cat.whyItMatters && (
                      <div className="mt-3 p-3.5 rounded-xl bg-[#f8f0de] border border-[#e2d2ba] text-xs md:text-sm text-[#4d3a2b] flex items-start gap-2.5 leading-relaxed font-sans-ui">
                        <Lightbulb size={18} className="text-[#935923] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#64390f] block mb-0.5">
                            Why this pillar comes here in your civilization:
                          </strong>
                          {cat.whyItMatters}
                        </div>
                      </div>
                    )}

                    <p className="text-xs md:text-sm text-[#544336] mt-2 font-serif border-t border-[#ded1be] pt-2 italic">
                      {cat.description}
                    </p>
                  </div>

                  {/* Questions Grid / Stack */}
                  <div className="space-y-5">
                    {questions.map((question) => (
                      <QuestionCard
                        key={question.id}
                        question={question}
                        categoryColor={cat.color}
                        value={answers[question.id]}
                        customNote={customNotes[question.id]}
                        onChange={handleAnswerChange}
                        onCustomChange={handleCustomChange}
                        allAnswers={answers}
                        logicGuardEnabled={logicGuardEnabled}
                        currentEra={currentEra}
                        currentScale={currentScale}
                        onEnlargeImage={(visual, opt) => setEnlargedImage({ visual, optionText: opt })}
                      />
                    ))}
                  </div>
                </section>
              );
            })}

            {/* Bottom Generate Dossier Banner */}
            <div className="parchment-card rounded-2xl p-6 md:p-8 text-center border-2 border-[#935923] shadow-xl space-y-4">
              <div className="inline-block p-3 rounded-full bg-[#f4ebe0] border border-[#d8c8b3] text-[#935923]">
                <Scroll size={32} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-cinzel text-[#241a15]">
                Ready to Defend Your Civilization in Front of Your Teacher?
              </h3>
              <p className="text-xs md:text-sm text-[#665243] max-w-xl mx-auto font-serif">
                Compile your choices into a 6-paragraph historical narrative essay, a quick-reference study table, and 5 tricky cross-category teacher stress-test questions with practice talking points!
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setIsDossierOpen(true)}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#935923] via-[#a86529] to-[#7f4a18] text-[#fcfaf5] font-cinzel text-sm md:text-base font-bold shadow-xl hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer border border-[#6b3e17]"
                >
                  Generate Civilization Dossier & Defense Simulator
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        title="Scroll to Top"
        className="fixed bottom-6 left-6 z-30 p-3 rounded-full bg-[#f4ebe0] border border-[#cfc1a8] text-[#5e4b3c] hover:bg-[#eae0d0] shadow-md transition-all cursor-pointer no-print"
      >
        <ArrowUp size={16} />
      </button>

      {/* Image Enlargement Modal / Lightbox */}
      {enlargedImage && (
        <ImageModal
          visual={enlargedImage.visual}
          optionText={enlargedImage.optionText}
          onClose={() => setEnlargedImage(null)}
        />
      )}

      {/* Dossier Output Modal */}
      {isDossierOpen && (
        <DossierView
          civilizationName={civilizationName}
          inspiration={inspiration}
          currentEra={currentEra}
          currentScale={currentScale}
          answers={answers}
          customNotes={customNotes}
          onClose={() => setIsDossierOpen(false)}
        />
      )}
    </div>
  );
}
