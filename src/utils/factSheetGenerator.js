// Quick-Reference Fact Sheet Generator for Oral Defense Preparation

import { GRAPES_CATEGORIES, GRAPES_QUESTIONS } from '../data/grapesData';

export function generateFactSheetData(answers, customNotes = {}) {
  const result = [];

  for (const cat of GRAPES_CATEGORIES) {
    const questions = GRAPES_QUESTIONS[cat.key] || [];
    const rows = [];

    for (const q of questions) {
      const selected = answers[q.id];
      const custom = customNotes[q.id]?.trim();

      let displayValue = 'Not specified';
      if (Array.isArray(selected) && selected.length > 0) {
        displayValue = selected.join('; ');
      } else if (typeof selected === 'string' && selected.trim() !== '') {
        displayValue = selected;
      }

      rows.push({
        id: q.id,
        number: q.number,
        title: q.title,
        selection: displayValue,
        hasSelection: Array.isArray(selected) ? selected.length > 0 : Boolean(selected),
        customNote: custom || null
      });
    }

    result.push({
      categoryKey: cat.key,
      categoryName: cat.name,
      categorySubtitle: cat.subtitle,
      color: cat.color,
      badgeBg: cat.badgeBg,
      borderCol: cat.borderCol,
      rows
    });
  }

  return result;
}

