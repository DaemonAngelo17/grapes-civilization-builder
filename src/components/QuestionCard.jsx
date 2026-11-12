import React from 'react';
import { CheckCircle2, Circle, AlertCircle, Edit3 } from 'lucide-react';

export default function QuestionCard({
  question,
  categoryColor,
  value,
  customNote,
  onChange,
  onCustomChange
}) {
  const isCheckbox = question.type === 'checkbox';
  const selectedList = Array.isArray(value) ? value : value ? [value] : [];
  const selectedCount = selectedList.length;

  const handleOptionClick = (option) => {
    if (isCheckbox) {
      if (selectedList.includes(option)) {
        // Deselect
        const next = selectedList.filter((item) => item !== option);
        onChange(question.id, next);
      } else {
        // Check max selection
        if (question.maxSelect && selectedCount >= question.maxSelect) {
          return; // Max reached
        }
        const next = [...selectedList, option];
        onChange(question.id, next);
      }
    } else {
      // Radio
      onChange(question.id, option);
    }
  };

  const isSelected = (option) => selectedList.includes(option);

  // Check selection limit alerts
  let limitBadge = null;
  if (isCheckbox) {
    if (question.minSelect && question.maxSelect) {
      limitBadge = `Select ${question.minSelect} to ${question.maxSelect} (Selected: ${selectedCount})`;
    } else if (question.maxSelect) {
      limitBadge = `Select up to ${question.maxSelect} (Selected: ${selectedCount}/${question.maxSelect})`;
    } else {
      limitBadge = `Select all that apply (Selected: ${selectedCount})`;
    }
  } else {
    limitBadge = selectedCount > 0 ? 'Single Choice (Answered)' : 'Single Choice';
  }

  const isComplete = isCheckbox ? selectedCount > 0 : Boolean(value);

  return (
    <div
      id={`q-${question.id}`}
      className={`parchment-card rounded-xl p-5 md:p-6 transition-all duration-200 border ${
        isComplete ? 'border-[#c6b69b]' : 'border-[#dfd3be]'
      } hover:shadow-md`}
    >
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span
            className="px-2.5 py-0.5 rounded text-xs font-bold font-cinzel text-white tracking-wider shadow-sm"
            style={{ backgroundColor: categoryColor }}
          >
            {question.number}
          </span>
          <h3 className="text-lg md:text-xl font-bold font-cinzel text-[#241a15]">
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

      {/* Guidance */}
      {question.guidance && (
        <p className="text-sm italic text-[#635143] mb-4 border-l-2 border-[#bba488] pl-3 py-0.5">
          {question.guidance}
        </p>
      )}

      {/* Options List */}
      <div className="space-y-2 mb-4">
        {question.options.map((option, idx) => {
          const active = isSelected(option);
          return (
            <div
              key={idx}
              onClick={() => handleOptionClick(option)}
              className={`group flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                active
                  ? 'bg-[#f4ebe0] border-[#935923] shadow-sm text-[#1e1511]'
                  : 'bg-[#faf6ee] hover:bg-[#f5ede0] border-[#ded3be] text-[#3e3229]'
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {isCheckbox ? (
                  <div
                    className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                      active
                        ? 'bg-[#935923] border-[#935923] text-white'
                        : 'border-[#9e8b74] bg-[#f8f2e6] group-hover:border-[#7d481b]'
                    }`}
                  >
                    {active && <CheckCircle2 size={12} strokeWidth={3} />}
                  </div>
                ) : (
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                      active
                        ? 'border-[#935923] bg-white'
                        : 'border-[#9e8b74] bg-[#f8f2e6] group-hover:border-[#7d481b]'
                    }`}
                  >
                    {active && <div className="w-2 h-2 rounded-full bg-[#935923]" />}
                  </div>
                )}
              </div>
              <div className="text-sm md:text-[14.5px] leading-snug flex-1">
                {option}
              </div>
            </div>
          );
        })}
      </div>

      {/* Custom 'Other / Write Your Own' Input */}
      <div className="pt-3 border-t border-[#dfd4c1] mt-3">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#5a4637] mb-1.5 uppercase tracking-wide">
          <Edit3 size={13} />
          <span>Other / Custom Historical Variation & Specifics</span>
        </div>
        <input
          type="text"
          value={customNote || ''}
          onChange={(e) => onCustomChange(question.id, e.target.value)}
          placeholder="Write your own custom historical variation, sacred rule, or unique regional doctrine..."
          className="w-full text-sm px-3.5 py-2 rounded-md bg-[#faf5ec] border border-[#d2c3aa] text-[#241a15] placeholder-[#94816f] focus:outline-none focus:ring-1 focus:ring-[#935923] focus:border-[#935923] transition-colors"
        />
        {customNote && customNote.trim() !== '' && (
          <p className="text-xs text-[#7d481b] mt-1 italic">
            * Custom note will be woven into the Narrative Essay and Fact Sheet table.
          </p>
        )}
      </div>
    </div>
  );
}

