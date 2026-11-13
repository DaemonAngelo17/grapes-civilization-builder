// Civilization DNA & 6-Axis Stat Radar Calculator
// Maps student G.R.A.P.E.S. answers to real-time stats and benchmarks against 8 historical presets.

import { HISTORICAL_PRESETS } from '../data/grapesData.js';

const STAT_KEYWORDS = {
  militaryMight: [
    'standing army', 'chariot', 'phalanx', 'cavalry', 'cataphract', 'crossbow', 'warrior', 
    'battering ram', 'siege', 'weapons', 'armor', 'kontos', 'lances', 'naphtha', 'flower wars', 
    'slave-raiding', 'war canoes', 'iron ore', 'copper and tin'
  ],
  mercantileWealth: [
    'coins', 'bullion', 'trade empire', 'silk road', 'caravan', 'merchant', 'karum', 
    'harbor', 'customs', 'tariffs', 'cacao', 'cowrie', 'flying-cash', 'dhow', 'gold', 'silver', 
    'silver mines', 'market', 'emporia', 'potlatch'
  ],
  engineeringTech: [
    'aqueduct', 'concrete', 'math', 'zero', 'metallurgy', 'navigation', 'compass', 'astronomy', 
    'antikythera', 'salt-drilling', 'catamaran', 'woodblock', 'gunpowder', 'trebuchet', 
    'terrace farming', 'canals', 'qanats', 'stepwells', 'cisterns', 'hydraulic', 'sewers'
  ],
  theocraticPiety: [
    'divine', 'monotheism', 'polytheism', 'animism', 'shamanism', 'sacrifice', 'oracle', 
    'bloodletting', 'afterlife', 'mummification', 'priest', 'temple', 'sanctuary', 'ziggurat', 
    'pyramid', 'pantheon', 'theocracy', 'kapu', 'taboo', 'mandate of heaven'
  ],
  centralAuthority: [
    'absolute monarchy', 'bureaucracy', 'satrapy', 'imperial', 'monopolies', 'legalism', 
    'exams', 'post roads', 'courier', 'great wall', 'deportation', 'draconian', 'baojia', 
    'surveillance', 'hegemonic', 'buffer states', 'corvée', 'census'
  ],
  civicLiberty: [
    'direct democracy', 'republic', 'senate', 'council', 'jury trials', 'ostracism', 
    'citizen', 'restorative', 'wergild', 'potlatch', 'egalitarian', 'partnership', 'matrilineal', 
    'free laborers', 'merit-based', 'amphictyony', 'confederacy'
  ]
};

export function calculateCivilizationStats(answers = {}) {
  // Flatten all selected text options to lowercase
  const allSelections = [];
  for (const list of Object.values(answers)) {
    if (Array.isArray(list)) {
      list.forEach(item => {
        if (typeof item === 'string') allSelections.push(item.toLowerCase());
      });
    } else if (typeof list === 'string' && list.trim()) {
      allSelections.push(list.toLowerCase());
    }
  }

  // Baseline stats start at 20 (base human community)
  const rawScores = {
    militaryMight: 20,
    mercantileWealth: 20,
    engineeringTech: 20,
    theocraticPiety: 20,
    centralAuthority: 20,
    civicLiberty: 20
  };

  for (const text of allSelections) {
    for (const [stat, keywords] of Object.entries(STAT_KEYWORDS)) {
      for (const kw of keywords) {
        if (text.includes(kw)) {
          rawScores[stat] += 6;
        }
      }
    }
  }

  // Normalize stats to 10-100 scale
  const stats = {
    militaryMight: Math.min(100, Math.max(10, Math.round(rawScores.militaryMight))),
    mercantileWealth: Math.min(100, Math.max(10, Math.round(rawScores.mercantileWealth))),
    engineeringTech: Math.min(100, Math.max(10, Math.round(rawScores.engineeringTech))),
    theocraticPiety: Math.min(100, Math.max(10, Math.round(rawScores.theocraticPiety))),
    centralAuthority: Math.min(100, Math.max(10, Math.round(rawScores.centralAuthority))),
    civicLiberty: Math.min(100, Math.max(10, Math.round(rawScores.civicLiberty)))
  };

  // Benchmark DNA matching against all 8 presets
  const presetMeta = {
    egypt: { flag: '🇪🇬', shortName: 'Ancient Egypt' },
    mesopotamia: { flag: '🏺', shortName: 'Mesopotamia' },
    maya: { flag: '🌿', shortName: 'Classic Maya' },
    greece_rome: { flag: '🏛️', shortName: 'Classical Greece/Rome' },
    aksum_kush: { flag: '🦁', shortName: 'Kush & Aksum' },
    xiongnu_steppe: { flag: '🏹', shortName: 'Steppe Xiongnu' },
    polynesia: { flag: '🌊', shortName: 'Polynesia Wayfinders' },
    qin_han: { flag: '🐉', shortName: 'Imperial China (Qin/Han)' }
  };

  const dnaMatches = Object.entries(HISTORICAL_PRESETS).map(([key, preset]) => {
    let matches = 0;
    let totalTarget = 0;

    for (const [qId, targetList] of Object.entries(preset.answers)) {
      if (!Array.isArray(targetList) || targetList.length === 0) continue;
      totalTarget += targetList.length;
      const userList = answers[qId];
      if (!Array.isArray(userList)) continue;

      for (const targetOpt of targetList) {
        if (userList.some(u => u.toLowerCase() === targetOpt.toLowerCase())) {
          matches += 1;
        }
      }
    }

    const pct = totalTarget > 0 ? Math.round((matches / totalTarget) * 100) : 0;
    const meta = presetMeta[key] || { flag: '🏛️', shortName: preset.name };

    return {
      id: key,
      fullName: preset.name,
      shortName: meta.shortName,
      flag: meta.flag,
      inspiration: preset.inspiration,
      matchPct: Math.min(100, Math.max(0, pct))
    };
  });

  dnaMatches.sort((a, b) => b.matchPct - a.matchPct);
  const topMatch = dnaMatches[0] || { matchPct: 0, shortName: 'Uncharted Civilization', flag: '❖' };

  return {
    stats,
    dnaMatches,
    topMatch
  };
}

