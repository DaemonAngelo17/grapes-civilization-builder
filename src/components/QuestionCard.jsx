import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  Edit3, 
  Lock, 
  Lightbulb, 
  ZoomIn
} from 'lucide-react';
import { checkOptionDisallowed } from '../utils/logicRules';
import { getOptionVisual } from '../data/optionImages';

export default function QuestionCard({
  question,
  categoryColor,
  value,
  customNote,
  onChange,
  onCustomChange,
  allAnswers,
  logicGuardEnabled = true,
  currentEra = 'early_bronze',
  currentScale = 'regional_kingdom',
  onEnlargeImage
}) {
  // All questions are multi-choice (limited only by contradiction, land size, and date)
  const selectedList = Array.isArray(value) ? value : value ? [value] : [];
  const selectedCount = selectedList.length;

  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (optIdx) => {
    setImageErrors((prev) => ({ ...prev, [optIdx]: true }));
  };

  const handleOptionClick = (option) => {
    // If already selected, clicking it always deselects it
    if (selectedList.includes(option)) {
      const next = selectedList.filter((item) => item !== option);
      onChange(question.id, next);
      return;
    }

    // Check if disallowed by contradictions, land size, or chronological date
    const { isDisallowed } = checkOptionDisallowed(
      question.id, 
      option, 
      allAnswers, 
      logicGuardEnabled,
      currentEra,
      currentScale
    );
    if (isDisallowed) {
      return; // Locked by historical logic
    }

    // Add option to multi-choice selection
    const next = [...selectedList, option];
    onChange(question.id, next);
  };

  const isSelected = (option) => selectedList.includes(option);

  // Multi-choice status badge
  const limitBadge = selectedCount === 0
    ? 'Multi-Choice: Select Any'
    : `Multi-Choice (${selectedCount} Selected)`;

  const isComplete = selectedCount > 0;

  return (
    <div
      id={`q-${question.id}`}
      className={`parchment-card rounded-xl p-5 md:p-6 transition-all duration-200 border ${
        isComplete ? 'border-[#c6b69b]' : 'border-[#dfd3be]'
      } hover:shadow-md`}
    >
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <span
            className="px-2.5 py-0.5 rounded text-xs font-bold font-cinzel text-white tracking-wider shadow-sm"
            style={{ backgroundColor: categoryColor }}
          >
            {question.number}
          </span>
          <h3 className="text-base md:text-lg font-bold font-cinzel text-[#241a15]">
            {question.title}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs px-2.5 py-1 rounded-full bg-[#ede4d2] text-[#5e4b3c] font-medium border border-[#dbccb5]">
            {limitBadge}
          </span>
          {isComplete && (
            <span className="flex items-center gap-1 text-xs text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded font-semibold border border-emerald-300">
              <CheckCircle2 size={13} />
              Answered
            </span>
          )}
        </div>
      </div>

      {/* Grade 7 History Tip Box */}
      {question.grade7Tip && (
        <div className="mb-3.5 p-3 rounded-lg bg-[#fbf3d9] border border-[#e8d29b] text-xs text-[#5e4419] flex items-start gap-2 leading-relaxed">
          <Lightbulb size={16} className="text-[#b8860b] shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold block mb-0.5 text-[#483310]">
              7th Grade History Connection:
            </strong>
            {question.grade7Tip}
          </div>
        </div>
      )}

      {/* Guidance */}
      {question.guidance && (
        <p className="text-xs md:text-sm text-[#635143] mb-4 border-l-2 border-[#bba488] pl-3 py-0.5 font-serif italic">
          {question.guidance}
        </p>
      )}

      {/* Options Grid / List with Visual Images & Click-to-Enlarge */}
      <div className="space-y-2.5 mb-4">
        {question.options.map((option, idx) => {
          const active = isSelected(option);
          const { isDisallowed, reason } = checkOptionDisallowed(
            question.id,
            option,
            allAnswers,
            logicGuardEnabled,
            currentEra,
            currentScale
          );
          const visual = getOptionVisual(option);
          const hasImage = visual && visual.url && !imageErrors[idx];

          return (
            <div
              key={idx}
              onClick={() => handleOptionClick(option)}
              className={`group flex flex-col p-3 rounded-xl border transition-all ${
                isDisallowed
                  ? 'bg-[#eae3d5]/70 border-[#d0c2ab] opacity-65 cursor-not-allowed'
                  : active
                  ? 'bg-[#f4ebe0] border-[#935923] shadow-sm text-[#1e1511] ring-1 ring-[#935923]/30 cursor-pointer'
                  : 'bg-[#faf6ee] hover:bg-[#f5ede0] border-[#ded3be] text-[#3e3229] cursor-pointer'
              }`}
            >
              <div className="flex items-start gap-3.5">
                {/* Multi-choice Checkbox Square */}
                <div className="mt-1 shrink-0">
                  {isDisallowed ? (
                    <div 
                      className="w-4 h-4 rounded border border-[#a89680] bg-[#e2d6c3] flex items-center justify-center text-[#7a644f]"
                      title="Locked by contradiction, land size, or era date"
                    >
                      <Lock size={10} />
                    </div>
                  ) : (
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                        active
                          ? 'bg-[#935923] border-[#935923] text-white shadow-xs'
                          : 'border-[#9e8b74] bg-[#f8f2e6] group-hover:border-[#7d481b]'
                      }`}
                    >
                      {active && <CheckCircle2 size={12} strokeWidth={3} />}
                    </div>
                  )}
                </div>

                {/* Option Historical Visual Image Thumbnail (Clickable to Enlarge) */}
                {hasImage && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onEnlargeImage) onEnlargeImage(visual, option);
                    }}
                    title="Click to enlarge image and read archaeological notes"
                    className="relative shrink-0 overflow-hidden rounded-lg border border-[#cfbfa8] bg-[#e9decb] shadow-xs cursor-zoom-in group/img"
                  >
                    <img
                      src={visual.url}
                      alt={visual.alt || option}
                      onError={() => handleImageError(idx)}
                      loading="lazy"
                      className={`w-16 h-16 sm:w-24 sm:h-16 object-cover transition-transform duration-300 group-hover/img:scale-110 ${
                        isDisallowed ? 'grayscale contrast-75' : ''
                      }`}
                    />
                    {/* Hover Enlarge Badge Overlay */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity text-white">
                      <ZoomIn size={16} />
                    </div>
                    {visual.caption && (
                      <span className="absolute bottom-0 inset-x-0 bg-black/65 text-white text-[9px] px-1 py-0.5 text-center truncate font-sans-ui">
                        {visual.caption}
                      </span>
                    )}
                  </div>
                )}

                {/* Text Content */}
                <div className="text-sm md:text-[14.5px] leading-snug flex-1">
                  <span className={`block font-medium ${isDisallowed ? 'line-through text-[#7f6c5b]' : ''}`}>
                    {option}
                  </span>
                </div>
              </div>

              {/* Show Logic Disallow Reason if locked */}
              {isDisallowed && reason && (
                <div className="mt-2 text-[11px] font-sans-ui text-[#8a3324] bg-[#f7e6e3] px-2.5 py-1.5 rounded-lg border border-[#e4b5ac] flex items-center gap-1.5 sm:ml-7">
                  <AlertCircle size={13} className="shrink-0 text-[#983726]" />
                  <span className="font-medium">{reason}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Custom 'Other / Write Your Own' Input */}
      <div className="pt-3 border-t border-[#dfd4c1] mt-3">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#5a4637] mb-1.5 uppercase tracking-wide">
          <Edit3 size={13} />
          <span>Other / Write Your Own Custom Historical Detail</span>
        </div>
        <input
          type="text"
          value={customNote || ''}
          onChange={(e) => onCustomChange(question.id, e.target.value)}
          placeholder="Add your own custom rule, sacred law, or unique local adaptation..."
          className="w-full text-sm px-3.5 py-2 rounded-md bg-[#faf5ec] border border-[#d2c3aa] text-[#241a15] placeholder-[#94816f] focus:outline-none focus:ring-1 focus:ring-[#935923] focus:border-[#935923] transition-colors"
        />
        {customNote && customNote.trim() !== '' && (
          <p className="text-xs text-[#7d481b] mt-1 italic">
            * Custom note will be woven into your Narrative Essay and Fact Sheet table.
          </p>
        )}
      </div>
    </div>
  );
}
