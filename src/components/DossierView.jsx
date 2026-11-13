import React, { useState, useMemo } from 'react';
import { 
  Scroll, 
  Table, 
  ShieldAlert, 
  Copy, 
  Check, 
  Printer, 
  Download, 
  X, 
  BookOpen, 
  Sparkles, 
  HelpCircle, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Edit,
  Flame,
  Award,
  Swords,
  Users,
  Compass,
  Landmark,
  Shield,
  Activity,
  Layers,
  RotateCcw,
  GraduationCap,
  Dices,
  Eye,
  CheckSquare,
  AlertTriangle,
  Building,
  Coins
} from 'lucide-react';
import { generateNarrativeEssay, calculateStabilityScorecard } from '../utils/narrativeGenerator';
import { generateFactSheetData } from '../utils/factSheetGenerator';
import { generateTeacherStressTest } from '../utils/stressTestGenerator';
import { generateCrisisScenario, evaluateCrisisChoice } from '../utils/crisisSimulator';
import { generatePerspectives } from '../utils/perspectiveGenerator';
import { generateArtifacts } from '../utils/artifactGenerator';
import { simulateNeighborClash } from '../utils/neighborClashSimulator';
import { HISTORICAL_ERAS, CIVILIZATION_SCALES, HISTORICAL_PRESETS } from '../data/grapesData';

export default function DossierView({
  civilizationName,
  inspiration,
  currentEra = 'early_bronze',
  currentScale = 'regional_kingdom',
  complexityMode = 'normal',
  answers = {},
  customNotes = {},
  currentQuestions,
  onClose
}) {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'essay', 'factsheet', 'stresstest', 'crisis', 'perspective', 'artifacts', 'clash'
  const [copiedType, setCopiedType] = useState(null);
  const [studentDefenseNotes, setStudentDefenseNotes] = useState({});
  const [revealedModels, setRevealedModels] = useState({});

  // Part III: Flashcard Mode State
  const [isFlashcardMode, setIsFlashcardMode] = useState(false);
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [defenseRatings, setDefenseRatings] = useState({}); // { [qId]: 'needs_practice' | 'proficient' | 'mastered' }

  // Part IV: Crisis Minigame State
  const [crisisDecisions, setCrisisDecisions] = useState({}); // { [crisisIdx]: { optionId, result } }

  // Part V: Caste Perspective State
  const [selectedCaste, setSelectedCaste] = useState('sovereign'); // 'sovereign', 'scribe', 'woman', 'laborer'

  // Part VII: Neighbor Clash State
  const [selectedRival, setSelectedRival] = useState('qin_han');

  const name = civilizationName?.trim() || 'The Sovereign Realm';
  const eraObj = HISTORICAL_ERAS.find((e) => e.id === currentEra) || HISTORICAL_ERAS[0];
  const scaleObj = CIVILIZATION_SCALES.find((s) => s.id === currentScale) || CIVILIZATION_SCALES[1];

  // Core generated outputs
  const narrativeParagraphs = useMemo(() => {
    return generateNarrativeEssay(
      civilizationName, 
      inspiration, 
      answers, 
      customNotes,
      currentEra,
      currentScale,
      complexityMode
    );
  }, [civilizationName, inspiration, answers, customNotes, currentEra, currentScale, complexityMode]);

  const stabilityScorecard = useMemo(() => {
    return calculateStabilityScorecard(answers, currentEra, currentScale);
  }, [answers, currentEra, currentScale]);

  const factSheetData = useMemo(() => {
    return generateFactSheetData(answers, customNotes, currentQuestions);
  }, [answers, customNotes, currentQuestions]);

  const stressTestQuestions = useMemo(() => {
    return generateTeacherStressTest(answers, customNotes, currentEra, currentScale);
  }, [answers, customNotes, currentEra, currentScale]);

  const crisisScenarios = useMemo(() => {
    return generateCrisisScenario(answers, currentEra, currentScale);
  }, [answers, currentEra, currentScale]);

  const castePerspectives = useMemo(() => {
    return generatePerspectives(civilizationName, answers, currentEra, currentScale);
  }, [civilizationName, answers, currentEra, currentScale]);

  const museumArtifacts = useMemo(() => {
    return generateArtifacts(civilizationName, answers, currentEra, currentScale);
  }, [civilizationName, answers, currentEra, currentScale]);

  const neighborClash = useMemo(() => {
    return simulateNeighborClash(answers, selectedRival);
  }, [answers, selectedRival]);

  // Crisis minigame actions
  const handleCrisisChoice = (crisisIdx, option) => {
    const crisis = crisisScenarios[crisisIdx];
    const result = evaluateCrisisChoice(crisis, option.id, answers);
    setCrisisDecisions((prev) => ({
      ...prev,
      [crisisIdx]: {
        optionId: option.id,
        optionTitle: option.title,
        result
      }
    }));
  };

  const handleResetCrisis = () => {
    setCrisisDecisions({});
  };

  const totalCrisisPoints = Object.values(crisisDecisions).reduce((acc, curr) => acc + (curr.result?.points || 0), 0);
  const answeredCrisisCount = Object.keys(crisisDecisions).length;

  // Flashcard self-grading
  const handleSetRating = (qId, rating) => {
    setDefenseRatings((prev) => ({
      ...prev,
      [qId]: rating
    }));
  };

  const currentFlashcard = stressTestQuestions[flashcardIndex] || stressTestQuestions[0];

  const handleCopyEssay = () => {
    const text = narrativeParagraphs.join('\n\n');
    navigator.clipboard.writeText(text);
    setCopiedType('essay');
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleCopyFullMarkdown = () => {
    let md = `# CIVILIZATION DOSSIER: ${name.toUpperCase()}\n`;
    if (inspiration) md += `*Real-World Inspiration: ${inspiration}*\n`;
    md += `*Historical Era: ${eraObj.name} (${eraObj.period})*\n`;
    md += `*Civilization Scale: ${scaleObj.name}*\n`;
    md += `*Complexity Tier: ${complexityMode === 'basic' ? 'Basic (Grades 4–6: 12 Core Inquiries)' : complexityMode === 'complex' ? 'Complex (Grades 9–12 / AP: 37 Exhaustive Inquiries)' : 'Normal (Grades 7–8: 31 Inquiries)'}*\n\n`;

    md += `## PART I: ENCYCLOPEDIA NARRATIVE ESSAY\n\n`;
    md += narrativeParagraphs.join('\n\n');
    md += `\n\n`;

    if (complexityMode === 'complex') {
      md += `### Stability & Collapse Risk Scorecard\n`;
      md += `- Agrarian Capacity: ${stabilityScorecard.agrarianCapacity.score}/100 (${stabilityScorecard.agrarianCapacity.label})\n`;
      md += `- Fiscal Legibility: ${stabilityScorecard.fiscalLegibility.score}/100 (${stabilityScorecard.fiscalLegibility.label})\n`;
      md += `- Social Cohesion: ${stabilityScorecard.socialCohesion.score}/100 (${stabilityScorecard.socialCohesion.label})\n`;
      md += `- Ecological Sustainability: ${stabilityScorecard.ecologicalSustainability.score}/100 (${stabilityScorecard.ecologicalSustainability.label})\n`;
      md += `- Overall Imperial Stability Index: ${stabilityScorecard.overallStabilityIndex}%\n\n`;
    }

    md += `---\n\n`;
    md += `## PART II: QUICK-REFERENCE FACT SHEET\n\n`;
    for (const cat of factSheetData) {
      md += `### ${cat.categoryKey}. ${cat.categoryName.toUpperCase()} (${cat.categorySubtitle})\n`;
      md += `| Code | Inquiry | Configured Imperial Doctrine | Custom Variation |\n`;
      md += `|---|---|---|---|\n`;
      for (const row of cat.rows) {
        md += `| ${row.number} | ${row.title} | ${row.selection} | ${row.customNote || '—'} |\n`;
      }
      md += `\n`;
    }

    md += `---\n\n`;
    md += `## PART III: TEACHER STRESS-TEST & ORAL DEFENSE SIMULATION\n\n`;
    stressTestQuestions.forEach((q, idx) => {
      md += `### Question ${idx + 1}: ${q.categoryPair}\n`;
      md += `**Trigger:** ${q.trigger}\n\n`;
      md += `> "${q.question}"\n\n`;
      md += `**Professor's Angle:** ${q.profAngle}\n\n`;
      md += `**Recommended Defense Strategy:**\n`;
      q.recommendedDefense.forEach((pt) => {
        md += `- ${pt}\n`;
      });
      if (studentDefenseNotes[q.id]) {
        md += `\n**Student Rehearsal Notes:**\n*${studentDefenseNotes[q.id]}*\n`;
      }
      if (defenseRatings[q.id]) {
        md += `\n**Self-Evaluation Readiness:** ${defenseRatings[q.id].toUpperCase()}\n`;
      }
      md += `\n\n`;
    });

    md += `---\n\n`;
    md += `## PART IV: "SURVIVE 500 YEARS" CRISIS SIMULATION\n\n`;
    md += `Total Dynasty Score: ${totalCrisisPoints} Points\n\n`;
    crisisScenarios.forEach((c, idx) => {
      const dec = crisisDecisions[idx];
      md += `### ${c.year}: ${c.title}\n`;
      md += `*Scenario:* ${c.description}\n`;
      if (dec) {
        md += `*Doctrine Selected:* ${dec.optionTitle}\n`;
        md += `*Outcome:* ${dec.result?.isSuccess ? 'SUCCESS' : 'CATASTROPHE'} (+${dec.result?.points} Pts)\n`;
        md += `*Aftermath:* ${dec.result?.feedback}\n\n`;
      } else {
        md += `*Status:* Unresolved\n\n`;
      }
    });

    md += `---\n\n`;
    md += `## PART V: VOICES OF THE PEOPLE (HISTORICAL DIARIES)\n\n`;
    castePerspectives.forEach((p) => {
      md += `### ${p.icon} ${p.casteTitle} (${p.casteRole})\n`;
      md += `> ${p.quote}\n\n`;
      md += `${p.diaryEntry}\n\n`;
    });

    md += `---\n\n`;
    md += `## PART VI: 3,000 YEARS LATER: ARCHAEOLOGICAL MUSEUM EXHIBIT\n\n`;
    museumArtifacts.forEach((art) => {
      md += `### [${art.catalogId}] ${art.title} (${art.category})\n`;
      md += `- Context: ${art.excavationContext}\n`;
      md += `- Materials: ${art.materialComposition}\n`;
      md += `- Dimensions: ${art.dimensions}\n`;
      md += `- Description: ${art.scholarlyDescription}\n`;
      md += `- Scientific Taphonomy: ${art.taphonomyAnalysis}\n\n`;
    });

    md += `---\n\n`;
    md += `## PART VII: NEIGHBOR CLASH SIMULATION\n\n`;
    md += `**Rival Power:** ${neighborClash.rival.name}\n`;
    md += `**Overall Dominance Ratio:** ${neighborClash.overallDominancePct}% for ${name}\n\n`;
    md += `1. **Border War:** ${neighborClash.warOutcome.title} (${neighborClash.warOutcome.winner.toUpperCase()})\n   ${neighborClash.warOutcome.summary}\n`;
    md += `2. **Trade Leverage:** ${neighborClash.tradeOutcome.title} (${neighborClash.tradeOutcome.winner.toUpperCase()})\n   ${neighborClash.tradeOutcome.summary}\n`;
    md += `3. **Cultural Assimilation:** ${neighborClash.cultureOutcome.title} (${neighborClash.cultureOutcome.winner.toUpperCase()})\n   ${neighborClash.cultureOutcome.summary}\n\n`;

    navigator.clipboard.writeText(md);
    setCopiedType('markdown');
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadJson = () => {
    const payload = {
      civilizationName: name,
      inspiration,
      era: currentEra,
      eraName: eraObj.name,
      scale: currentScale,
      scaleName: scaleObj.name,
      complexityMode,
      timestamp: new Date().toISOString(),
      answers,
      customNotes,
      studentDefenseNotes,
      defenseRatings,
      crisisDecisions,
      stabilityScorecard
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${name.toLowerCase().replace(/[^a-z0-9]/g, '_')}_grapes_dossier.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const toggleModel = (id) => {
    setRevealedModels((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#211812]/80 backdrop-blur-sm overflow-y-auto p-2 sm:p-4 md:p-6 flex justify-center items-start">
      <div className="parchment-card w-full max-w-5xl rounded-2xl shadow-2xl border border-[#cfc1a8] my-4 overflow-hidden dossier-print-container">
        
        {/* Sticky Action Toolbar */}
        <div className="sticky top-0 z-20 bg-[#f4ebe0] border-b border-[#dfd4c0] px-4 md:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 shadow-xs no-print">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#935923] text-white flex items-center justify-center font-cinzel text-xs font-bold">
              🏛️
            </span>
            <div>
              <h2 className="font-cinzel text-sm md:text-base font-bold text-[#241a15] truncate max-w-xs md:max-w-md">
                {name} — Imperial Dossier Studio
              </h2>
              <span className="text-[11px] text-[#715c4d] font-sans-ui hidden sm:inline">
                Academic Defense Portfolio, Crisis Engine &amp; Taphonomic Museum
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleCopyEssay}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#efe5d5] hover:bg-[#e6d8c3] border border-[#cfbfa7] text-xs font-semibold font-sans-ui text-[#443326] transition-colors cursor-pointer"
            >
              {copiedType === 'essay' ? <Check size={14} className="text-emerald-700" /> : <Copy size={14} />}
              <span>{copiedType === 'essay' ? 'Copied Essay!' : 'Copy Essay'}</span>
            </button>

            <button
              onClick={handleCopyFullMarkdown}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#efe5d5] hover:bg-[#e6d8c3] border border-[#cfbfa7] text-xs font-semibold font-sans-ui text-[#443326] transition-colors cursor-pointer"
            >
              {copiedType === 'markdown' ? <Check size={14} className="text-emerald-700" /> : <Scroll size={14} />}
              <span>{copiedType === 'markdown' ? 'Copied All 7 Parts!' : 'Copy Markdown'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#935923] hover:bg-[#7b4618] text-white text-xs font-semibold font-sans-ui transition-colors shadow-xs cursor-pointer"
            >
              <Printer size={14} />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={handleDownloadJson}
              title="Download backup JSON"
              className="p-1.5 rounded-lg bg-[#efe5d5] hover:bg-[#e6d8c3] border border-[#cfbfa7] text-[#443326] transition-colors cursor-pointer"
            >
              <Download size={15} />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#e8ded0] hover:bg-[#e0d0bf] text-[#241a15] transition-colors cursor-pointer ml-1"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* View Tabs (No-Print) */}
        <div className="bg-[#ede2d0] px-4 md:px-6 pt-2 border-b border-[#ded2bd] flex gap-1 overflow-x-auto no-print">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-2 font-cinzel text-xs font-bold border-b-2 transition-all cursor-pointer shrink-0 ${
              activeTab === 'all'
                ? 'border-[#935923] text-[#935923] bg-[#fbf7ee] rounded-t-lg'
                : 'border-transparent text-[#6e594a] hover:text-[#241a15]'
            }`}
          >
            All 7 Parts
          </button>
          <button
            onClick={() => setActiveTab('essay')}
            className={`px-3 py-2 font-cinzel text-xs font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
              activeTab === 'essay'
                ? 'border-[#935923] text-[#935923] bg-[#fbf7ee] rounded-t-lg'
                : 'border-transparent text-[#6e594a] hover:text-[#241a15]'
            }`}
          >
            <BookOpen size={13} />
            I. Narrative Essay
          </button>
          <button
            onClick={() => setActiveTab('factsheet')}
            className={`px-3 py-2 font-cinzel text-xs font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
              activeTab === 'factsheet'
                ? 'border-[#935923] text-[#935923] bg-[#fbf7ee] rounded-t-lg'
                : 'border-transparent text-[#6e594a] hover:text-[#241a15]'
            }`}
          >
            <Table size={13} />
            II. Fact Sheet
          </button>
          <button
            onClick={() => setActiveTab('stresstest')}
            className={`px-3 py-2 font-cinzel text-xs font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
              activeTab === 'stresstest'
                ? 'border-[#935923] text-[#935923] bg-[#fbf7ee] rounded-t-lg'
                : 'border-transparent text-[#6e594a] hover:text-[#241a15]'
            }`}
          >
            <ShieldAlert size={13} />
            III. Oral Defense Flashcards
          </button>
          <button
            onClick={() => setActiveTab('crisis')}
            className={`px-3 py-2 font-cinzel text-xs font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
              activeTab === 'crisis'
                ? 'border-[#935923] text-[#935923] bg-[#fbf7ee] rounded-t-lg'
                : 'border-transparent text-[#6e594a] hover:text-[#241a15]'
            }`}
          >
            <Dices size={13} className="text-[#935923]" />
            IV. 🎲 Crisis Minigame
          </button>
          <button
            onClick={() => setActiveTab('perspectives')}
            className={`px-3 py-2 font-cinzel text-xs font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
              activeTab === 'perspectives'
                ? 'border-[#935923] text-[#935923] bg-[#fbf7ee] rounded-t-lg'
                : 'border-transparent text-[#6e594a] hover:text-[#241a15]'
            }`}
          >
            <Users size={13} />
            V. 👤 Voices of the People
          </button>
          <button
            onClick={() => setActiveTab('artifacts')}
            className={`px-3 py-2 font-cinzel text-xs font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
              activeTab === 'artifacts'
                ? 'border-[#935923] text-[#935923] bg-[#fbf7ee] rounded-t-lg'
                : 'border-transparent text-[#6e594a] hover:text-[#241a15]'
            }`}
          >
            <Landmark size={13} />
            VI. 🏺 3,000 Years Museum
          </button>
          <button
            onClick={() => setActiveTab('clash')}
            className={`px-3 py-2 font-cinzel text-xs font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
              activeTab === 'clash'
                ? 'border-[#935923] text-[#935923] bg-[#fbf7ee] rounded-t-lg'
                : 'border-transparent text-[#6e594a] hover:text-[#241a15]'
            }`}
          >
            <Swords size={13} />
            VII. ⚔️ Neighbor Clash
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-12 bg-[#fbf7ee]">
          
          {/* Imperial Dossier Title Header (Always Visible & In Print) */}
          <div className="text-center pb-6 border-b-2 border-[#d5c5ad] relative">
            <div className="inline-block px-3 py-1 rounded-full bg-[#f0e4d0] border border-[#d2c0a6] text-xs font-cinzel font-bold text-[#8c531b] uppercase tracking-widest mb-2">
              Official Imperial Archive • Grade-Validated Synthesis
            </div>
            <h1 className="text-2xl md:text-4xl font-black font-cinzel text-[#241a15] tracking-wider mb-1">
              {name.toUpperCase()}
            </h1>
            <p className="text-sm md:text-base text-[#6d5747] font-archaic italic">
              {inspiration ? `In the Grand Tradition of ${inspiration}` : 'Ancient Civilization Comprehensive Charter'}
            </p>
            <div className="mt-2 text-xs text-[#8c7766] font-sans-ui">
              Executive Multi-Part Imperial Dossier &amp; Interactive Defense Laboratory
            </div>

            {/* Historical Era & Scale Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-3.5 text-xs font-sans-ui">
              <span className="px-3 py-1 rounded-full bg-[#faecd6] text-[#784318] border border-[#e2ceb4] font-semibold flex items-center gap-1 shadow-xs">
                ⏳ Era: {eraObj.name}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#e8f1e6] text-[#2c5825] border border-[#cbdec7] font-semibold flex items-center gap-1 shadow-xs">
                🌍 Scale: {scaleObj.name}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#ede5f7] text-[#492b77] border border-[#d2c3e8] font-bold flex items-center gap-1 shadow-xs">
                🎓 Tier: {complexityMode === 'basic' ? 'Basic (Grades 4–6)' : complexityMode === 'complex' ? 'Complex (Grades 9–12 / AP)' : 'Normal (Grades 7–8)'}
              </span>
              {inspiration && (
                <span className="px-3 py-1 rounded-full bg-[#efe7db] text-[#554234] border border-[#d6c7b4] font-medium flex items-center gap-1">
                  🏛️ Archetype: {inspiration}
                </span>
              )}
            </div>

            {/* Antique Seal Stamp */}
            <div className="hidden sm:flex absolute right-4 top-2 wax-seal w-16 h-16 rounded-full text-white items-center justify-center font-cinzel text-[10px] font-bold text-center leading-tight shadow-md select-none transform rotate-12">
              SIGILLUM<br />IMPERII
            </div>
          </div>

          {/* ========================================================================= */}
          {/* PART I: ENCYCLOPEDIA NARRATIVE ESSAY */}
          {/* ========================================================================= */}
          {(activeTab === 'all' || activeTab === 'essay') && (
            <section id="dossier-essay" className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#dfd4c0]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-[#935923] text-white flex items-center justify-center font-cinzel text-xs font-bold">
                    I
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl font-bold font-cinzel text-[#241a15]">
                      Part I: Encyclopedia Narrative Essay
                    </h2>
                    <p className="text-xs text-[#715c4d] font-sans-ui">
                      {complexityMode === 'basic' ? '3-Paragraph Student Story' : '6-Paragraph Academic Treatise synthesizing all G.R.A.P.E.S. pillars'}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEssay}
                  className="no-print text-xs font-semibold text-[#8c531b] hover:text-[#5e340c] flex items-center gap-1 bg-[#efe3d0] px-3 py-1.5 rounded-lg border border-[#d8c7ad] cursor-pointer"
                >
                  {copiedType === 'essay' ? <Check size={13} className="text-emerald-700" /> : <Copy size={13} />}
                  <span>{copiedType === 'essay' ? 'Copied' : 'Copy Essay Text'}</span>
                </button>
              </div>

              {/* Complex Mode Stability Scorecard */}
              {complexityMode === 'complex' && (
                <div className="p-4 md:p-5 rounded-xl bg-[#f5ede0] border border-[#d9c9b1] shadow-xs space-y-3 font-sans-ui">
                  <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-[#dfd2bd]">
                    <div className="flex items-center gap-2">
                      <Activity size={18} className="text-[#935923]" />
                      <span className="font-cinzel text-xs md:text-sm font-bold text-[#2b1f17]">
                        Imperial Stability &amp; Collapse Risk Scorecard (AP Rigor)
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs text-[#6e594a]">Overall Equilibrium:</span>
                      <span className="px-2 py-0.5 rounded-full text-xs font-extrabold bg-[#e5d2b7] text-[#693910] border border-[#cfb896] font-mono">
                        {stabilityScorecard.overallStabilityIndex}%
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs pt-1">
                    <div className="p-2.5 rounded-lg bg-[#faf5ec] border border-[#e2d5c1]">
                      <div className="flex justify-between font-semibold mb-1">
                        <span className="text-[#49382b]">🌾 Agrarian Surplus</span>
                        <span className="font-mono text-[#8c531b]">{stabilityScorecard.agrarianCapacity.score}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#e4d7c2] rounded-full overflow-hidden mb-1">
                        <div className="h-full bg-emerald-700" style={{ width: `${stabilityScorecard.agrarianCapacity.score}%` }} />
                      </div>
                      <span className="text-[11px] text-[#6b584a] block">{stabilityScorecard.agrarianCapacity.label}</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#faf5ec] border border-[#e2d5c1]">
                      <div className="flex justify-between font-semibold mb-1">
                        <span className="text-[#49382b]">🪙 Fiscal Legibility</span>
                        <span className="font-mono text-[#8c531b]">{stabilityScorecard.fiscalLegibility.score}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#e4d7c2] rounded-full overflow-hidden mb-1">
                        <div className="h-full bg-amber-700" style={{ width: `${stabilityScorecard.fiscalLegibility.score}%` }} />
                      </div>
                      <span className="text-[11px] text-[#6b584a] block">{stabilityScorecard.fiscalLegibility.label}</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#faf5ec] border border-[#e2d5c1]">
                      <div className="flex justify-between font-semibold mb-1">
                        <span className="text-[#49382b]">⚖️ Social Cohesion</span>
                        <span className="font-mono text-[#8c531b]">{stabilityScorecard.socialCohesion.score}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#e4d7c2] rounded-full overflow-hidden mb-1">
                        <div className="h-full bg-blue-700" style={{ width: `${stabilityScorecard.socialCohesion.score}%` }} />
                      </div>
                      <span className="text-[11px] text-[#6b584a] block">{stabilityScorecard.socialCohesion.label}</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#faf5ec] border border-[#e2d5c1]">
                      <div className="flex justify-between font-semibold mb-1">
                        <span className="text-[#49382b]">🌲 Ecological Margin</span>
                        <span className="font-mono text-[#8c531b]">{stabilityScorecard.ecologicalSustainability.score}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#e4d7c2] rounded-full overflow-hidden mb-1">
                        <div className="h-full bg-teal-700" style={{ width: `${stabilityScorecard.ecologicalSustainability.score}%` }} />
                      </div>
                      <span className="text-[11px] text-[#6b584a] block">{stabilityScorecard.ecologicalSustainability.label}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Essay Text Body */}
              <div className="space-y-4 font-serif text-[#2b2018] text-sm md:text-base leading-relaxed bg-[#faf5ec] p-5 md:p-7 rounded-xl border border-[#ded1bd] shadow-xs">
                {narrativeParagraphs.map((para, idx) => (
                  <p key={idx} className="text-justify first-letter:text-2xl first-letter:font-bold first-letter:font-cinzel first-letter:mr-1">
                    {para}
                  </p>
                ))}
              </div>
            </section>
          )}

          {/* ========================================================================= */}
          {/* PART II: QUICK-REFERENCE FACT SHEET MATRIX */}
          {/* ========================================================================= */}
          {(activeTab === 'all' || activeTab === 'factsheet') && (
            <section id="dossier-factsheet" className="space-y-6 page-break">
              <div className="flex items-center justify-between pb-3 border-b border-[#dfd4c0]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-[#2b6540] text-white flex items-center justify-center font-cinzel text-xs font-bold">
                    II
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl font-bold font-cinzel text-[#241a15]">
                      Part II: Quick-Reference Fact Sheet Matrix
                    </h2>
                    <p className="text-xs text-[#715c4d] font-sans-ui">
                      Tabular summary of all configured doctrines grouped by G.R.A.P.E.S. pillar
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {factSheetData.map((cat) => (
                  <div key={cat.categoryKey} className="overflow-hidden rounded-xl border border-[#d6c7b0] shadow-xs">
                    <div
                      className="px-4 py-2.5 text-white flex items-center justify-between"
                      style={{ backgroundColor: cat.color }}
                    >
                      <span className="font-cinzel text-xs md:text-sm font-bold tracking-wider">
                        {cat.categoryKey}. {cat.categoryName.toUpperCase()} — {cat.categorySubtitle}
                      </span>
                      <span className="text-xs font-sans-ui opacity-90">
                        {cat.rows.length} Inquiries
                      </span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs md:text-[13px] font-sans-ui">
                        <thead className="bg-[#ede2d0] text-[#4d3c2f] border-b border-[#ded2bd] uppercase tracking-wider text-[11px]">
                          <tr>
                            <th className="py-2.5 px-3 w-16">Code</th>
                            <th className="py-2.5 px-3 w-1/3">Inquiry Domain</th>
                            <th className="py-2.5 px-3">Configured Imperial Doctrine</th>
                            <th className="py-2.5 px-3 w-1/4">Custom Local Detail</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#e7dbca] bg-[#faf6ee]">
                          {cat.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-[#f3eadc] transition-colors">
                              <td className="py-2.5 px-3 font-cinzel font-bold text-[#8c531b]">
                                {row.number}
                              </td>
                              <td className="py-2.5 px-3 font-semibold text-[#291f17]">
                                {row.title}
                              </td>
                              <td className="py-2.5 px-3 text-[#3d2e24] font-medium">
                                {row.selection}
                              </td>
                              <td className="py-2.5 px-3 text-[#6c594c] italic">
                                {row.customNote || '—'}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ========================================================================= */}
          {/* PART III: TEACHER STRESS-TEST ORAL DEFENSE SIMULATOR */}
          {/* ========================================================================= */}
          {(activeTab === 'all' || activeTab === 'stresstest') && (
            <section id="dossier-stresstest" className="space-y-6 page-break">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#dfd4c0]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-[#983726] text-white flex items-center justify-center font-cinzel text-xs font-bold">
                    III
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl font-bold font-cinzel text-[#241a15]">
                      Part III: Teacher Stress-Test Oral Defense Simulator
                    </h2>
                    <p className="text-xs text-[#715c4d] font-sans-ui">
                      Practice answering adversarial cross-examination questions with rubric answers
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 no-print">
                  <button
                    onClick={() => setIsFlashcardMode(!isFlashcardMode)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#efe3d0] hover:bg-[#e4d5be] text-xs font-bold font-cinzel text-[#633913] border border-[#d0c0a8] cursor-pointer shadow-xs"
                  >
                    {isFlashcardMode ? <Scroll size={14} /> : <Eye size={14} />}
                    <span>{isFlashcardMode ? 'View Document List' : '🎓 Interactive Flashcard Mode'}</span>
                  </button>
                </div>
              </div>

              {/* FLASHCARD MODE */}
              {isFlashcardMode ? (
                <div className="p-6 rounded-2xl bg-[#f7efe1] border-2 border-[#935923] shadow-md space-y-5 font-sans-ui">
                  <div className="flex items-center justify-between text-xs border-b border-[#dfd3be] pb-2">
                    <span className="font-bold text-[#8c531b] font-cinzel">
                      FLASHCARD {flashcardIndex + 1} OF {stressTestQuestions.length}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#faecd6] text-[#7a481c] font-semibold border border-[#e2ceb4]">
                      {currentFlashcard.categoryPair}
                    </span>
                  </div>

                  <div className="bg-[#faf5ec] p-5 rounded-xl border border-[#ded1bd] space-y-3">
                    <div className="text-[11px] text-[#755f4f] font-mono">
                      Contradiction Trigger: {currentFlashcard.trigger}
                    </div>
                    <blockquote className="text-base md:text-lg font-serif italic text-[#241a15] font-semibold leading-relaxed pl-3 border-l-4 border-[#983726]">
                      "{currentFlashcard.question}"
                    </blockquote>
                  </div>

                  {/* Flip / Reveal Button */}
                  <div className="text-center pt-1">
                    <button
                      onClick={() => setIsCardFlipped(!isCardFlipped)}
                      className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#935923] to-[#7f4a18] text-white text-xs font-cinzel font-bold shadow-sm hover:brightness-110 cursor-pointer"
                    >
                      {isCardFlipped ? 'Hide Professor Rubric' : 'Reveal Rubric & 3-Point Defense Strategy'}
                    </button>
                  </div>

                  {/* Revealed Content */}
                  {isCardFlipped && (
                    <div className="space-y-4 pt-2 border-t border-[#ded1be] animate-fadeIn">
                      <div className="text-xs text-[#5e493b] bg-[#faf6ee] p-3 rounded-lg border border-[#e2d5c1]">
                        <span className="font-bold text-[#4e3b2e] block mb-0.5 flex items-center gap-1">
                          <HelpCircle size={13} className="text-[#935923]" />
                          Professor's Evaluation Angle:
                        </span>
                        {currentFlashcard.profAngle}
                      </div>

                      <div className="bg-[#f0f6f2] p-4 rounded-xl border border-[#c4decb]">
                        <span className="text-xs font-bold font-cinzel text-[#205232] block mb-2 flex items-center gap-1.5">
                          <Award size={14} className="text-[#205232]" />
                          Recommended 3-Point Defense Strategy:
                        </span>
                        <ul className="space-y-1.5 text-xs text-[#243d2c] list-disc list-inside">
                          {currentFlashcard.recommendedDefense.map((pt, pIdx) => (
                            <li key={pIdx} className="leading-snug">{pt}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Student Rehearsal Notes */}
                      <div>
                        <label className="block text-xs font-bold font-cinzel text-[#4e3b2e] mb-1">
                          Your Spoken Argument Draft:
                        </label>
                        <textarea
                          rows={3}
                          value={studentDefenseNotes[currentFlashcard.id] || ''}
                          onChange={(e) => setStudentDefenseNotes({
                            ...studentDefenseNotes,
                            [currentFlashcard.id]: e.target.value
                          })}
                          placeholder="Rehearse what you would say out loud to your teacher..."
                          className="w-full text-xs p-3 rounded-lg bg-[#faf6ee] border border-[#d2c3aa] text-[#241a15] focus:outline-none focus:ring-1 focus:ring-[#935923]"
                        />
                      </div>

                      {/* Self-Grading Readiness Buttons */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#ded1be]">
                        <span className="text-xs font-bold text-[#443326]">
                          Rate your oral defense readiness:
                        </span>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleSetRating(currentFlashcard.id, 'needs_practice')}
                            className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer border ${
                              defenseRatings[currentFlashcard.id] === 'needs_practice'
                                ? 'bg-rose-700 text-white border-rose-800'
                                : 'bg-[#f4e4e2] text-rose-900 border-[#debab6]'
                            }`}
                          >
                            🔴 Needs Practice
                          </button>
                          <button
                            onClick={() => handleSetRating(currentFlashcard.id, 'proficient')}
                            className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer border ${
                              defenseRatings[currentFlashcard.id] === 'proficient'
                                ? 'bg-amber-700 text-white border-amber-800'
                                : 'bg-[#faebd7] text-amber-900 border-[#dfc6a6]'
                            }`}
                          >
                            🟡 Proficient
                          </button>
                          <button
                            onClick={() => handleSetRating(currentFlashcard.id, 'mastered')}
                            className={`px-3 py-1 rounded-lg text-xs font-semibold cursor-pointer border ${
                              defenseRatings[currentFlashcard.id] === 'mastered'
                                ? 'bg-emerald-700 text-white border-emerald-800'
                                : 'bg-[#e4f3e7] text-emerald-900 border-[#b5dbbe]'
                            }`}
                          >
                            🟢 Mastered
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Flashcard Next/Prev Controls */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#dfd3be]">
                    <button
                      disabled={flashcardIndex === 0}
                      onClick={() => {
                        setFlashcardIndex(Math.max(0, flashcardIndex - 1));
                        setIsCardFlipped(false);
                      }}
                      className="px-4 py-1.5 rounded-lg bg-[#efe4d1] hover:bg-[#e6d8c0] text-xs font-bold text-[#4d3c2f] disabled:opacity-40 cursor-pointer"
                    >
                      ← Previous Card
                    </button>
                    <span className="text-xs text-[#715c4d]">
                      Card {flashcardIndex + 1} of {stressTestQuestions.length}
                    </span>
                    <button
                      disabled={flashcardIndex === stressTestQuestions.length - 1}
                      onClick={() => {
                        setFlashcardIndex(Math.min(stressTestQuestions.length - 1, flashcardIndex + 1));
                        setIsCardFlipped(false);
                      }}
                      className="px-4 py-1.5 rounded-lg bg-[#efe4d1] hover:bg-[#e6d8c0] text-xs font-bold text-[#4d3c2f] disabled:opacity-40 cursor-pointer"
                    >
                      Next Card →
                    </button>
                  </div>
                </div>
              ) : (
                /* DOCUMENT LIST VIEW */
                <div className="space-y-6">
                  {stressTestQuestions.map((q, idx) => {
                    const isModelRevealed = revealedModels[q.id];
                    const currentNote = studentDefenseNotes[q.id] || '';
                    const rating = defenseRatings[q.id];

                    return (
                      <div
                        key={q.id}
                        className="p-5 md:p-6 rounded-xl border border-[#d8c8b3] bg-[#faf6ee] shadow-xs space-y-4 font-sans-ui"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#dfd3bd] pb-2">
                          <span className="text-xs font-bold font-cinzel text-[#8c531b] flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-full bg-[#8c531b] text-white flex items-center justify-center text-[10px]">
                              {idx + 1}
                            </span>
                            {q.categoryPair}
                          </span>
                          <div className="flex items-center gap-2">
                            {rating && (
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                rating === 'mastered' ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' :
                                rating === 'proficient' ? 'bg-amber-100 text-amber-800 border border-amber-300' :
                                'bg-rose-100 text-rose-800 border border-rose-300'
                              }`}>
                                {rating.toUpperCase()}
                              </span>
                            )}
                            <span className="text-[11px] text-[#78614e] bg-[#f0e4d0] px-2 py-0.5 rounded font-mono">
                              Trigger: {q.trigger}
                            </span>
                          </div>
                        </div>

                        <div className="bg-[#f5ecdd] p-4 rounded-lg border-l-4 border-[#983726]">
                          <p className="text-sm md:text-base font-semibold text-[#241a15] italic leading-relaxed">
                            "{q.question}"
                          </p>
                        </div>

                        <div className="text-xs text-[#6e5a4b] bg-[#faf5ec] p-3 rounded-lg border border-[#e2d5c1]">
                          <span className="font-bold text-[#4e3b2e] block mb-0.5 flex items-center gap-1">
                            <HelpCircle size={13} className="text-[#935923]" />
                            Professor's Evaluation Angle:
                          </span>
                          {q.profAngle}
                        </div>

                        <div className="bg-[#f0f6f2] p-4 rounded-lg border border-[#c4decb]">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold font-cinzel text-[#205232] flex items-center gap-1.5">
                              <Award size={14} className="text-[#205232]" />
                              Recommended Defense Strategy &amp; Talking Points:
                            </span>
                            <button
                              onClick={() => toggleModel(q.id)}
                              className="no-print text-[11px] font-semibold text-[#205232] hover:underline flex items-center gap-1 cursor-pointer"
                            >
                              <span>{isModelRevealed ? 'Hide Details' : 'Show Details'}</span>
                              {isModelRevealed ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                            </button>
                          </div>

                          <ul className="space-y-1.5 text-xs md:text-[13px] text-[#243d2c] list-disc list-inside">
                            {q.recommendedDefense.map((pt, pIdx) => (
                              <li key={pIdx} className="leading-snug">
                                {pt}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-2">
                          <label className="block text-xs font-bold font-cinzel text-[#4e3b2e] mb-1.5 flex items-center gap-1.5">
                            <Edit size={13} className="text-[#935923]" />
                            Student Defense Rehearsal Note (Type your spoken argument):
                          </label>
                          <textarea
                            rows={3}
                            value={currentNote}
                            onChange={(e) =>
                              setStudentDefenseNotes({
                                ...studentDefenseNotes,
                                [q.id]: e.target.value
                              })
                            }
                            placeholder="Draft how you will verbally defend your civilization's statecraft choices during the oral defense..."
                            className="w-full text-xs md:text-sm p-3 rounded-lg bg-[#faf6ee] border border-[#d2c3aa] text-[#241a15] placeholder-[#94816f] focus:outline-none focus:ring-1 focus:ring-[#935923] shadow-inner font-sans-ui"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          )}

          {/* ========================================================================= */}
          {/* PART IV: 🎲 "SURVIVE 500 YEARS" CRISIS EVENT MINIGAME */}
          {/* ========================================================================= */}
          {(activeTab === 'all' || activeTab === 'crisis') && (
            <section id="dossier-crisis" className="space-y-6 page-break">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#dfd4c0]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-[#c5792b] text-white flex items-center justify-center font-cinzel text-xs font-bold">
                    IV
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl font-bold font-cinzel text-[#241a15]">
                      Part IV: 🎲 "Survive 500 Years" Crisis Event Minigame
                    </h2>
                    <p className="text-xs text-[#715c4d] font-sans-ui">
                      Turn-based survival simulation testing your infrastructure choices against historical crises
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 no-print">
                  <div className="px-3 py-1 rounded-full bg-[#f0e4d0] border border-[#d6c4a8] text-xs font-bold text-[#8c531b] font-mono">
                    Dynasty Score: {totalCrisisPoints} / 1000 Pts
                  </div>
                  <button
                    onClick={handleResetCrisis}
                    className="flex items-center gap-1 text-xs text-[#6e5949] hover:text-[#241a15] p-1 cursor-pointer"
                    title="Reset simulation"
                  >
                    <RotateCcw size={14} />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              {/* Crisis Cards Stack */}
              <div className="space-y-6 font-sans-ui">
                {crisisScenarios.map((crisis, cIdx) => {
                  const decision = crisisDecisions[cIdx];
                  const isResolved = !!decision;

                  return (
                    <div
                      key={cIdx}
                      className={`p-5 md:p-6 rounded-2xl border transition-all ${
                        isResolved
                          ? decision.result?.isSuccess
                            ? 'bg-[#f0f7f2] border-[#a5d1b1] shadow-xs'
                            : 'bg-[#faf0ee] border-[#e8b5ac] shadow-xs'
                          : 'bg-[#faf6ee] border-[#cfc1a8] shadow-md'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#ded3be] pb-2 mb-3">
                        <span className="font-cinzel text-xs font-bold text-[#8c531b] flex items-center gap-1.5">
                          <Flame size={14} className="text-[#935923]" />
                          {crisis.year}
                        </span>
                        <h3 className="text-sm md:text-base font-bold font-cinzel text-[#2b1f17]">
                          {crisis.title}
                        </h3>
                      </div>

                      <p className="text-xs md:text-sm text-[#4d3c30] mb-4 font-serif leading-relaxed">
                        {crisis.description}
                      </p>

                      {/* Options to Choose */}
                      {!isResolved ? (
                        <div className="space-y-2.5">
                          <span className="text-[11px] font-bold text-[#6d5747] uppercase tracking-wider block">
                            Select Imperial Emergency Decree:
                          </span>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {crisis.options.map((opt) => (
                              <button
                                key={opt.id}
                                onClick={() => handleCrisisChoice(cIdx, opt)}
                                className="p-3.5 rounded-xl border border-[#d6c7b0] bg-[#faf6ee] hover:bg-[#f3eadc] text-left transition-all hover:shadow-xs cursor-pointer flex flex-col justify-between"
                              >
                                <div>
                                  <strong className="text-xs font-cinzel text-[#2b1f17] block mb-1">
                                    {opt.title}
                                  </strong>
                                  <p className="text-[11px] text-[#635043] font-sans-ui leading-tight">
                                    {opt.description}
                                  </p>
                                </div>
                                <span className="mt-3 text-[10px] font-bold text-[#935923] font-cinzel">
                                  Enact Decree →
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        /* Outcome Banner */
                        <div className={`p-4 rounded-xl border ${
                          decision.result?.isSuccess
                            ? 'bg-[#e7f3ea] border-[#9fd3ad] text-[#1c4d29]'
                            : 'bg-[#f7e8e5] border-[#dfaba2] text-[#69241b]'
                        }`}>
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <span className="font-cinzel text-xs font-bold flex items-center gap-1.5">
                              {decision.result?.isSuccess ? (
                                <>
                                  <CheckCircle2 size={16} className="text-emerald-700" />
                                  <span>DECISIVE SURVIVAL VICTORY</span>
                                </>
                              ) : (
                                <>
                                  <AlertTriangle size={16} className="text-rose-700" />
                                  <span>DYNASTIC CATASTROPHE</span>
                                </>
                              )}
                            </span>
                            <span className="font-mono text-xs font-extrabold">
                              +{decision.result?.points} Pts
                            </span>
                          </div>
                          <p className="text-xs leading-relaxed mb-2">
                            {decision.result?.feedback}
                          </p>
                          {decision.result?.matches?.length > 0 && (
                            <div className="text-[11px] opacity-90 border-t border-black/10 pt-1.5">
                              <strong>Validated Infrastructure Assets:</strong> {decision.result.matches.join(', ')}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Final Crisis Evaluation Banner */}
              {answeredCrisisCount === 3 && (
                <div className="p-5 rounded-2xl bg-[#f5ede0] border-2 border-[#935923] text-center space-y-2">
                  <span className="text-xs font-bold font-cinzel text-[#8c531b] uppercase tracking-wider block">
                    500-Year Dynastic Verdict
                  </span>
                  <h3 className="text-lg md:text-xl font-bold font-cinzel text-[#241a15]">
                    {totalCrisisPoints >= 900
                      ? '🏆 ETERNAL GOLDEN IMPERIUM (Dynasty Stands 1,000+ Years)'
                      : totalCrisisPoints >= 600
                      ? '🏛️ RESILIENT REGIONAL POWER (Survives with Scars & Reform)'
                      : '🏺 FALLEN RUIN OF HISTORY (Collapsed into Archaeological Strata)'}
                  </h3>
                  <p className="text-xs md:text-sm text-[#614e41] max-w-xl mx-auto font-serif">
                    {totalCrisisPoints >= 900
                      ? 'Your integrated irrigation works, civic law codes, and frontier defensive doctrines shielded your people against climate shocks and foreign invasions!'
                      : totalCrisisPoints >= 600
                      ? 'Your empire suffered painful territorial losses and civil strife, but your core cultural institutions weathered the half-millennium storm!'
                      : 'Lacking emergency grain storage, standing defense, and social safety valves, cascading crises fractured your realm into rival warlord fiefdoms.'}
                  </p>
                </div>
              )}
            </section>
          )}

          {/* ========================================================================= */}
          {/* PART V: 👤 VOICES OF THE PEOPLE (4-CASTE HISTORICAL DIARY) */}
          {/* ========================================================================= */}
          {(activeTab === 'all' || activeTab === 'perspectives') && (
            <section id="dossier-perspectives" className="space-y-6 page-break">
              <div className="flex items-center justify-between pb-3 border-b border-[#dfd4c0]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-[#4a3875] text-white flex items-center justify-center font-cinzel text-xs font-bold">
                    V
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl font-bold font-cinzel text-[#241a15]">
                      Part V: 👤 "Voices of the People" First-Person Diary
                    </h2>
                    <p className="text-xs text-[#715c4d] font-sans-ui">
                      4-caste personal perspectives reflecting your actual laws, crops, rituals, and writing script
                    </p>
                  </div>
                </div>
              </div>

              {/* 4-Pill Caste Switcher */}
              <div className="flex gap-2 overflow-x-auto pb-1 no-print">
                {castePerspectives.map((c) => (
                  <button
                    key={c.casteId}
                    onClick={() => setSelectedCaste(c.casteId)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold font-cinzel transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                      selectedCaste === c.casteId
                        ? 'bg-[#935923] text-white shadow-xs'
                        : 'bg-[#efe5d5] text-[#594537] hover:bg-[#e4d7c3]'
                    }`}
                  >
                    <span>{c.icon}</span>
                    <span>{c.casteTitle}</span>
                  </button>
                ))}
              </div>

              {/* Caste Content Cards */}
              <div className="space-y-4 font-sans-ui">
                {castePerspectives
                  .filter((c) => activeTab === 'all' || selectedCaste === c.casteId)
                  .map((caste) => (
                    <div
                      key={caste.casteId}
                      className="p-5 md:p-6 rounded-2xl border border-[#d6c7b0] bg-[#faf6ee] shadow-xs space-y-3"
                    >
                      <div className="flex items-center justify-between border-b border-[#dfd2bd] pb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{caste.icon}</span>
                          <div>
                            <h3 className="font-cinzel text-base font-bold text-[#241a15]">
                              {caste.casteTitle}
                            </h3>
                            <span className="text-xs text-[#786354] font-medium">
                              Role: {caste.casteRole}
                            </span>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-[#ebdcc6] text-[#714a1a]">
                          CASTE RECORD
                        </span>
                      </div>

                      <blockquote className="text-xs md:text-sm font-serif italic text-[#8c531b] font-semibold border-l-2 border-[#935923] pl-3 py-0.5">
                        {caste.quote}
                      </blockquote>

                      <div className="font-serif text-xs md:text-[14px] text-[#291f17] leading-relaxed text-justify bg-[#f5ecdd]/60 p-4 rounded-xl border border-[#e2d5c2]">
                        {caste.diaryEntry}
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          )}

          {/* ========================================================================= */}
          {/* PART VI: 🏺 "3,000 YEARS LATER" ARCHAEOLOGICAL MUSEUM EXHIBIT */}
          {/* ========================================================================= */}
          {(activeTab === 'all' || activeTab === 'artifacts') && (
            <section id="dossier-artifacts" className="space-y-6 page-break">
              <div className="flex items-center justify-between pb-3 border-b border-[#dfd4c0]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-[#254f6e] text-white flex items-center justify-center font-cinzel text-xs font-bold">
                    VI
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl font-bold font-cinzel text-[#241a15]">
                      Part VI: 🏺 "3,000 Years Later" Archaeological Museum Exhibit
                    </h2>
                    <p className="text-xs text-[#715c4d] font-sans-ui">
                      4 excavated museum relics with scientific taphonomy preservation notes for your specific climate
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans-ui">
                {museumArtifacts.map((art) => (
                  <div
                    key={art.catalogId}
                    className="p-5 rounded-2xl border border-[#d6c7b0] bg-[#faf6ee] shadow-xs flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <div className="flex items-center justify-between border-b border-[#ded1be] pb-2 mb-2">
                        <span className="text-[11px] font-mono font-bold text-[#8c531b] bg-[#f0e4d0] px-2 py-0.5 rounded">
                          {art.catalogId}
                        </span>
                        <span className="text-xs font-semibold text-[#5c4a3d]">
                          {art.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl">{art.icon}</span>
                        <h3 className="font-cinzel text-sm md:text-base font-bold text-[#241a15]">
                          {art.title}
                        </h3>
                      </div>

                      <p className="text-xs text-[#413125] font-serif leading-relaxed mb-3">
                        {art.scholarlyDescription}
                      </p>

                      <div className="space-y-1 text-[11px] text-[#6b5749] bg-[#f5ede0] p-2.5 rounded-lg border border-[#e5d8c3]">
                        <div><strong>Excavation Context:</strong> {art.excavationContext}</div>
                        <div><strong>Composition:</strong> {art.materialComposition}</div>
                        <div><strong>Dimensions:</strong> {art.dimensions}</div>
                      </div>
                    </div>

                    <div className="text-[11px] text-[#2d4734] bg-[#edf5ef] p-2.5 rounded-lg border border-[#c1deca]">
                      <strong className="text-[#1e5828] block mb-0.5">🔬 Scientific Taphonomy Analysis:</strong>
                      {art.taphonomyAnalysis}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ========================================================================= */}
          {/* PART VII: ⚔️ NEIGHBOR CLASH SIMULATOR */}
          {/* ========================================================================= */}
          {(activeTab === 'all' || activeTab === 'clash') && (
            <section id="dossier-clash" className="space-y-6 page-break">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#dfd4c0]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-[#7c2522] text-white flex items-center justify-center font-cinzel text-xs font-bold">
                    VII
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl font-bold font-cinzel text-[#241a15]">
                      Part VII: ⚔️ Neighbor Clash Simulator
                    </h2>
                    <p className="text-xs text-[#715c4d] font-sans-ui">
                      Simulate border war outcomes, trade leverage, and cultural assimilation against historical benchmarks
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-sans-ui no-print">
                  <span className="text-xs font-semibold text-[#48372b]">Select Neighboring Rival:</span>
                  <select
                    value={selectedRival}
                    onChange={(e) => setSelectedRival(e.target.value)}
                    className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-[#faf5ec] border border-[#d2c2aa] text-[#2b1f17] cursor-pointer"
                  >
                    <option value="qin_han">🐉 Imperial China (Qin & Han)</option>
                    <option value="egypt">🇪🇬 Ancient Egypt (Nile Kemet)</option>
                    <option value="mesopotamia">🏺 Mesopotamia (Sumer & Babylon)</option>
                    <option value="maya">🌿 Classic Maya (Lowland Pyramids)</option>
                    <option value="greece_rome">🏛️ Classical Greece & Rome</option>
                    <option value="aksum_kush">🦁 Kush & Aksum (Nile Gold)</option>
                    <option value="xiongnu_steppe">🏹 Steppe Nomadic Confederacy</option>
                    <option value="polynesia">🌊 Polynesian Wayfinders</option>
                  </select>
                </div>
              </div>

              {/* Clash Score Gauge */}
              <div className="p-4 md:p-5 rounded-2xl bg-[#faf5ec] border border-[#d8c8b2] shadow-xs space-y-4 font-sans-ui">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#dfd2bc] pb-2">
                  <div>
                    <span className="text-xs font-bold font-cinzel text-[#8c531b] block">
                      Geopolitical Face-off: {name} vs. {neighborClash.rival.name}
                    </span>
                    <span className="text-[11px] text-[#6d5747]">
                      Comparing military, commercial, and cultural attributes
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#241a15]">Your Dominance:</span>
                    <span className="font-mono text-sm font-extrabold text-[#935923]">
                      {neighborClash.overallDominancePct}%
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full h-3 rounded-full bg-[#dfd0bd] overflow-hidden flex border border-[#cfbfa8]">
                  <div
                    className="h-full bg-gradient-to-r from-[#935923] to-[#c59b27] transition-all duration-500"
                    style={{ width: `${neighborClash.overallDominancePct}%` }}
                    title={`${name}: ${neighborClash.overallDominancePct}%`}
                  />
                  <div
                    className="h-full bg-[#7a2e2a] transition-all duration-500"
                    style={{ width: `${100 - neighborClash.overallDominancePct}%` }}
                    title={`${neighborClash.rival.name}: ${100 - neighborClash.overallDominancePct}%`}
                  />
                </div>

                {/* 3 Clash Vectors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                  
                  {/* Vector 1: Military War */}
                  <div className="p-3.5 rounded-xl bg-[#faf6ee] border border-[#ded1be] space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold font-cinzel text-[#241a15] flex items-center gap-1">
                        <Swords size={13} className="text-[#983726]" />
                        1. Frontier War
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        neighborClash.warOutcome.winner === 'player'
                          ? 'bg-emerald-100 text-emerald-800'
                          : neighborClash.warOutcome.winner === 'rival'
                          ? 'bg-rose-100 text-rose-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {neighborClash.warOutcome.winner === 'player' ? 'VICTORY' : neighborClash.warOutcome.winner === 'rival' ? 'DEFEAT' : 'STALEMATE'}
                      </span>
                    </div>
                    <strong className="text-xs font-cinzel text-[#73351d] block">
                      {neighborClash.warOutcome.title}
                    </strong>
                    <p className="text-[11px] text-[#4f3d31] leading-relaxed font-serif">
                      {neighborClash.warOutcome.summary}
                    </p>
                  </div>

                  {/* Vector 2: Trade Leverage */}
                  <div className="p-3.5 rounded-xl bg-[#faf6ee] border border-[#ded1be] space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold font-cinzel text-[#241a15] flex items-center gap-1">
                        <Coins size={13} className="text-[#8c531b]" />
                        2. Trade Monopoly
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        neighborClash.tradeOutcome.winner === 'player'
                          ? 'bg-emerald-100 text-emerald-800'
                          : neighborClash.tradeOutcome.winner === 'rival'
                          ? 'bg-rose-100 text-rose-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {neighborClash.tradeOutcome.winner === 'player' ? 'ADVANTAGE' : neighborClash.tradeOutcome.winner === 'rival' ? 'DEFICIT' : 'BALANCED'}
                      </span>
                    </div>
                    <strong className="text-xs font-cinzel text-[#73351d] block">
                      {neighborClash.tradeOutcome.title}
                    </strong>
                    <p className="text-[11px] text-[#4f3d31] leading-relaxed font-serif">
                      {neighborClash.tradeOutcome.summary}
                    </p>
                  </div>

                  {/* Vector 3: Cultural Soft-Power */}
                  <div className="p-3.5 rounded-xl bg-[#faf6ee] border border-[#ded1be] space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold font-cinzel text-[#241a15] flex items-center gap-1">
                        <Scroll size={13} className="text-[#3c5682]" />
                        3. Cultural Assimilation
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        neighborClash.cultureOutcome.winner === 'player'
                          ? 'bg-emerald-100 text-emerald-800'
                          : neighborClash.cultureOutcome.winner === 'rival'
                          ? 'bg-rose-100 text-rose-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {neighborClash.cultureOutcome.winner === 'player' ? 'RADIANCE' : neighborClash.cultureOutcome.winner === 'rival' ? 'ECLIPSED' : 'HYBRID'}
                      </span>
                    </div>
                    <strong className="text-xs font-cinzel text-[#73351d] block">
                      {neighborClash.cultureOutcome.title}
                    </strong>
                    <p className="text-[11px] text-[#4f3d31] leading-relaxed font-serif">
                      {neighborClash.cultureOutcome.summary}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Bottom Dossier Footer */}
          <div className="pt-6 border-t border-[#dfd4c0] text-center text-xs text-[#715c4d] font-sans-ui flex flex-col sm:flex-row items-center justify-between gap-3">
            <span>G.R.A.P.E.S. Civilization Builder &amp; Defense Simulator • v6.0 Advanced Gamified Edition</span>
            <span>Certified Academic Digital Humanities Examination Dossier</span>
          </div>
        </div>
      </div>
    </div>
  );
}
