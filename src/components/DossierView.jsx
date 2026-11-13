import React, { useState } from 'react';
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
  Award
} from 'lucide-react';
import { generateNarrativeEssay } from '../utils/narrativeGenerator';
import { generateFactSheetData } from '../utils/factSheetGenerator';
import { generateTeacherStressTest } from '../utils/stressTestGenerator';
import { HISTORICAL_ERAS, CIVILIZATION_SCALES } from '../data/grapesData';

export default function DossierView({
  civilizationName,
  inspiration,
  currentEra = 'early_bronze',
  currentScale = 'regional_kingdom',
  complexityMode = 'normal',
  answers,
  customNotes,
  currentQuestions,
  onClose
}) {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'essay', 'factsheet', 'stresstest'
  const [copiedType, setCopiedType] = useState(null);
  const [studentDefenseNotes, setStudentDefenseNotes] = useState({});
  const [revealedModels, setRevealedModels] = useState({});

  const name = civilizationName?.trim() || 'The Sovereign Realm';
  const eraObj = HISTORICAL_ERAS.find((e) => e.id === currentEra) || HISTORICAL_ERAS[0];
  const scaleObj = CIVILIZATION_SCALES.find((s) => s.id === currentScale) || CIVILIZATION_SCALES[1];

  const narrativeParagraphs = generateNarrativeEssay(
    civilizationName, 
    inspiration, 
    answers, 
    customNotes,
    currentEra,
    currentScale
  );
  const factSheetData = generateFactSheetData(answers, customNotes, currentQuestions);
  const stressTestQuestions = generateTeacherStressTest(answers, customNotes);

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
    md += `*Complexity Tier: ${complexityMode === 'basic' ? 'Basic (Grades 4–6: 12 Core Questions)' : complexityMode === 'complex' ? 'Complex (Grades 9–12 / AP: 37 Exhaustive Questions)' : 'Normal (Grades 7–8: 31 Questions)'}*\n\n`;

    md += `## PART I: ENCYCLOPEDIA NARRATIVE ESSAY\n\n`;
    md += narrativeParagraphs.join('\n\n');
    md += `\n\n---\n\n`;

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
      md += `\n\n`;
    });

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
      timestamp: new Date().toISOString(),
      answers,
      customNotes,
      studentDefenseNotes
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
                {name} — Imperial Dossier
              </h2>
              <span className="text-[11px] text-[#715c4d] font-sans-ui hidden sm:inline">
                Oral Defense Portfolio & Analytical Treatise
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
              <span>{copiedType === 'markdown' ? 'Copied All!' : 'Copy Markdown'}</span>
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
            className={`px-4 py-2 font-cinzel text-xs font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'border-[#935923] text-[#935923] bg-[#fbf7ee] rounded-t-lg'
                : 'border-transparent text-[#6e594a] hover:text-[#241a15]'
            }`}
          >
            All Sections (Complete)
          </button>
          <button
            onClick={() => setActiveTab('essay')}
            className={`px-4 py-2 font-cinzel text-xs font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'essay'
                ? 'border-[#935923] text-[#935923] bg-[#fbf7ee] rounded-t-lg'
                : 'border-transparent text-[#6e594a] hover:text-[#241a15]'
            }`}
          >
            <BookOpen size={13} />
            1. Narrative Essay (6 Parts)
          </button>
          <button
            onClick={() => setActiveTab('factsheet')}
            className={`px-4 py-2 font-cinzel text-xs font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'factsheet'
                ? 'border-[#935923] text-[#935923] bg-[#fbf7ee] rounded-t-lg'
                : 'border-transparent text-[#6e594a] hover:text-[#241a15]'
            }`}
          >
            <Table size={13} />
            2. Quick-Reference Fact Sheet
          </button>
          <button
            onClick={() => setActiveTab('stresstest')}
            className={`px-4 py-2 font-cinzel text-xs font-bold border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'stresstest'
                ? 'border-[#935923] text-[#935923] bg-[#fbf7ee] rounded-t-lg'
                : 'border-transparent text-[#6e594a] hover:text-[#241a15]'
            }`}
          >
            <ShieldAlert size={13} />
            3. Teacher Stress-Test (5 Qs)
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-10 bg-[#fbf7ee]">
          {/* Imperial Dossier Title Header (Always Visible & In Print) */}
          <div className="text-center pb-6 border-b-2 border-[#d5c5ad] relative">
            <div className="inline-block px-3 py-1 rounded-full bg-[#f0e4d0] border border-[#d2c0a6] text-xs font-cinzel font-bold text-[#8c531b] uppercase tracking-widest mb-2">
              Official Imperial Archive
            </div>
            <h1 className="text-2xl md:text-4xl font-black font-cinzel text-[#241a15] tracking-wider mb-1">
              {name.toUpperCase()}
            </h1>
            <p className="text-sm md:text-base text-[#6d5747] font-archaic italic">
              {inspiration ? `In the Grand Tradition of ${inspiration}` : 'Ancient Civilization Comprehensive Charter'}
            </p>
            <div className="mt-2 text-xs text-[#8c7766] font-sans-ui">
              Exhaustive G.R.A.P.E.S. Synthesis & Oral Defense Simulation
            </div>

            {/* Historical Era & Scale Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-3.5 text-xs font-sans-ui">
              <span className="px-3 py-1 rounded-full bg-[#faecd6] text-[#784318] border border-[#e2ceb4] font-semibold flex items-center gap-1 shadow-xs">
                ⏳ Era: {eraObj.name}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#e8f1e6] text-[#2c5825] border border-[#cbdec7] font-semibold flex items-center gap-1 shadow-xs">
                🌍 Scale: {scaleObj.name}
              </span>
              {inspiration && (
                <span className="px-3 py-1 rounded-full bg-[#efe7db] text-[#554234] border border-[#d6c7b4] font-medium flex items-center gap-1">
                  🏛️ Archetype: {inspiration}
                </span>
              )}
            </div>

            {/* Antique Seal Stamp */}
            <div className="hidden sm:flex absolute right-4 top-2 wax-seal w-16 h-16 rounded-full text-white items-center justify-center font-cinzel text-[10px] font-bold text-center leading-tight shadow-md select-none transform rotate-12">
              SIGILLUM<br />CIVITATIS
            </div>
          </div>

          {/* ========================================================================= */}
          {/* SECTION 1: ENCYCLOPEDIA NARRATIVE ESSAY */}
          {/* ========================================================================= */}
          {(activeTab === 'all' || activeTab === 'essay') && (
            <section id="dossier-essay" className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#dfd4c0]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-[#935923] text-white flex items-center justify-center font-cinzel text-xs font-bold">
                    I-VI
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl font-bold font-cinzel text-[#241a15]">
                      The Imperial Narrative Essay
                    </h2>
                    <p className="text-xs text-[#715c4d] font-sans-ui">
                      6-Paragraph Academic Treatise synthesizing all G.R.A.P.E.S. categories
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEssay}
                  className="no-print flex items-center gap-1.5 text-xs text-[#8c531b] hover:text-[#5a320c] font-semibold"
                >
                  <Copy size={13} />
                  <span>Copy Essay</span>
                </button>
              </div>

              {/* 6 Rich Paragraphs */}
              <div className="space-y-6 text-[#241a15] text-[15px] md:text-[16px] leading-relaxed font-serif">
                {narrativeParagraphs.map((paragraph, idx) => {
                  const parts = paragraph.split('\n');
                  const heading = parts[0];
                  const body = parts.slice(1).join('\n');

                  return (
                    <article
                      key={idx}
                      className="parchment-panel rounded-xl p-5 md:p-6 border border-[#d8cbba] shadow-xs relative"
                    >
                      <h3 className="text-sm font-bold font-cinzel text-[#8c531b] uppercase tracking-wider mb-2.5 pb-1.5 border-b border-[#e2d6c3]">
                        {heading}
                      </h3>
                      <p className="whitespace-pre-line text-[#2c2018]">
                        {body}
                      </p>
                    </article>
                  );
                })}
              </div>
            </section>
          )}

          {/* ========================================================================= */}
          {/* SECTION 2: QUICK-REFERENCE FACT SHEET */}
          {/* ========================================================================= */}
          {(activeTab === 'all' || activeTab === 'factsheet') && (
            <section id="dossier-factsheet" className="space-y-6 page-break">
              <div className="flex items-center justify-between pb-3 border-b border-[#dfd4c0]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-[#2b6540] text-white flex items-center justify-center font-cinzel text-xs font-bold">
                    📊
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl font-bold font-cinzel text-[#241a15]">
                      Quick-Reference Fact Sheet
                    </h2>
                    <p className="text-xs text-[#715c4d] font-sans-ui">
                      Structured tabular matrix for oral defense flashcard study
                    </p>
                  </div>
                </div>
              </div>

              {/* Core Parameters Summary Card */}
              <div className="parchment-panel rounded-xl p-4 border border-[#cfbfa7] bg-[#f5ede0] grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-sans-ui">
                <div>
                  <span className="text-[#8c531b] font-bold block uppercase text-[10px] tracking-wider">Civilization Archetype</span>
                  <span className="font-semibold text-[#241a15] truncate block">{inspiration || 'Ancient Synthesis'}</span>
                </div>
                <div>
                  <span className="text-[#8c531b] font-bold block uppercase text-[10px] tracking-wider">Complexity Tier</span>
                  <span className="font-semibold text-[#241a15]">
                    {complexityMode === 'basic' ? '🌱 Basic (12 Qs)' : complexityMode === 'complex' ? '🎓 Complex (37 Qs)' : '🏛️ Normal (31 Qs)'}
                  </span>
                </div>
                <div>
                  <span className="text-[#8c531b] font-bold block uppercase text-[10px] tracking-wider">Historical Era</span>
                  <span className="font-semibold text-[#241a15] truncate block">⏳ {eraObj.name}</span>
                </div>
                <div>
                  <span className="text-[#8c531b] font-bold block uppercase text-[10px] tracking-wider">Civilization Scale</span>
                  <span className="font-semibold text-[#241a15] truncate block">🌍 {scaleObj.name}</span>
                </div>
              </div>

              <div className="space-y-6">
                {factSheetData.map((catGroup) => (
                  <div
                    key={catGroup.categoryKey}
                    className="parchment-panel rounded-xl overflow-hidden border border-[#d6c7b2] shadow-xs"
                  >
                    {/* Category Header */}
                    <div
                      className="px-4 py-2.5 flex items-center justify-between text-white font-cinzel text-xs md:text-sm font-bold"
                      style={{ backgroundColor: catGroup.color }}
                    >
                      <span>
                        {catGroup.categoryKey}. {catGroup.categoryName.toUpperCase()} — {catGroup.categorySubtitle}
                      </span>
                      <span className="text-[11px] opacity-90 font-sans-ui font-normal">
                        {catGroup.rows.filter((r) => r.hasSelection).length} / {catGroup.rows.length} configured
                      </span>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs md:text-sm">
                        <thead className="bg-[#ede2d0] text-[#4d3c2f] font-cinzel border-b border-[#d8cab7]">
                          <tr>
                            <th className="py-2.5 px-3 w-16 text-center">Code</th>
                            <th className="py-2.5 px-3 w-1/4">Inquiry / Dimension</th>
                            <th className="py-2.5 px-3">Configured Imperial Doctrine</th>
                            <th className="py-2.5 px-3 w-1/4">Custom Notes / Variations</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#e4d7c5]">
                          {catGroup.rows.map((row) => (
                            <tr
                              key={row.id}
                              className="hover:bg-[#f3eadc] transition-colors"
                            >
                              <td className="py-2.5 px-3 text-center font-bold font-cinzel text-[#7f4a18]">
                                {row.number}
                              </td>
                              <td className="py-2.5 px-3 font-semibold text-[#241a15]">
                                {row.title}
                              </td>
                              <td className="py-2.5 px-3 text-[#382b22] leading-snug">
                                {row.selection}
                              </td>
                              <td className="py-2.5 px-3 text-[#6f5b4d] italic">
                                {row.customNote ? (
                                  <span className="text-[#8c531b] font-medium">
                                    "{row.customNote}"
                                  </span>
                                ) : (
                                  <span className="text-gray-400">—</span>
                                )}
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
          {/* SECTION 3: TEACHER STRESS-TEST & DEFENSE SIMULATOR */}
          {/* ========================================================================= */}
          {(activeTab === 'all' || activeTab === 'stresstest') && (
            <section id="dossier-stresstest" className="space-y-6 page-break">
              <div className="flex items-center justify-between pb-3 border-b border-[#dfd4c0]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-[#983726] text-white flex items-center justify-center font-cinzel text-xs font-bold">
                    ⚔️
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl font-bold font-cinzel text-[#241a15]">
                      Teacher Stress-Test & Oral Defense Simulator
                    </h2>
                    <p className="text-xs text-[#715c4d] font-sans-ui">
                      5 Tricky cross-category examination questions with strategic defense talking points
                    </p>
                  </div>
                </div>

                <div className="hidden sm:inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[#f2e2df] text-[#8b2d1d] font-semibold border border-[#d9a89f]">
                  <Flame size={13} />
                  <span>Defense Simulation</span>
                </div>
              </div>

              {/* Stress-Test Questions List */}
              <div className="space-y-6">
                {stressTestQuestions.map((q, idx) => {
                  const isModelRevealed = revealedModels[q.id];
                  const currentNote = studentDefenseNotes[q.id] || '';

                  return (
                    <div
                      key={q.id}
                      className="parchment-panel rounded-xl p-5 md:p-6 border border-[#d9cbb8] shadow-xs space-y-4"
                    >
                      {/* Question Top Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-[#dfd4c0]">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded bg-[#983726] text-white text-xs font-bold font-cinzel">
                            DEFENSE Q{idx + 1}
                          </span>
                          <span className="text-xs font-bold font-cinzel text-[#6b281b]">
                            {q.categoryPair}
                          </span>
                        </div>
                        <span className="text-[11px] text-[#715c4d] font-sans-ui bg-[#e8dcce] px-2 py-0.5 rounded">
                          Trigger: {q.trigger}
                        </span>
                      </div>

                      {/* The Teacher's Inquiry */}
                      <div className="bg-[#f5ecdd] p-4 rounded-lg border-l-4 border-[#983726]">
                        <p className="text-sm md:text-base font-semibold text-[#241a15] italic leading-relaxed">
                          "{q.question}"
                        </p>
                      </div>

                      {/* Professor's Hidden Angle */}
                      <div className="text-xs text-[#6e5a4b] bg-[#faf5ec] p-3 rounded-lg border border-[#e2d5c1]">
                        <span className="font-bold text-[#4e3b2e] block mb-0.5 flex items-center gap-1">
                          <HelpCircle size={13} className="text-[#935923]" />
                          Professor's Evaluation Angle:
                        </span>
                        {q.profAngle}
                      </div>

                      {/* Recommended Defense Strategy & Talking Points */}
                      <div className="bg-[#f0f6f2] p-4 rounded-lg border border-[#c4decb]">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold font-cinzel text-[#205232] flex items-center gap-1.5">
                            <Award size={14} className="text-[#205232]" />
                            Recommended Defense Strategy & Talking Points:
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

                      {/* Interactive Student Rehearsal Box (No-Print for input, printed as notes) */}
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
                          className="w-full text-xs md:text-sm p-3 rounded-lg bg-[#faf6ee] border border-[#d2c3aa] text-[#241a15] placeholder-[#94816f] focus:outline-none focus:ring-1 focus:ring-[#935923] focus:border-[#935923] shadow-inner font-sans-ui"
                        />
                        {currentNote.trim() && (
                          <p className="text-[11px] text-emerald-800 font-medium mt-1">
                            ✓ Notes saved to your dossier export.
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Bottom Dossier Footer */}
          <div className="pt-6 border-t border-[#dfd4c0] text-center text-xs text-[#715c4d] font-sans-ui flex flex-col sm:flex-row items-center justify-between gap-3">
            <span>G.R.A.P.E.S. Civilization Builder & Defense Simulator</span>
            <span>Document Certified for Academic Defense Examination</span>
          </div>
        </div>
      </div>
    </div>
  );
}

