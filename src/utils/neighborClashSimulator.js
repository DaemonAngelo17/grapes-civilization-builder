// Neighbor Clash Simulator
// Pits the student's civilization against any of the 8 historical presets in a multi-vector geopolitical clash.

import { HISTORICAL_PRESETS } from '../data/grapesData.js';
import { calculateCivilizationStats } from './civilizationStats.js';

export function simulateNeighborClash(userAnswers = {}, rivalPresetId = 'qin_han') {
  const rivalPreset = HISTORICAL_PRESETS[rivalPresetId] || HISTORICAL_PRESETS.qin_han;
  const userStatsObj = calculateCivilizationStats(userAnswers);
  const rivalStatsObj = calculateCivilizationStats(rivalPreset.answers);

  const uStats = userStatsObj.stats;
  const rStats = rivalStatsObj.stats;

  // 1. Border War Calculation (Military Might vs. Rival Military Might + Defense bonuses)
  const userMilScore = uStats.militaryMight * 1.2 + uStats.engineeringTech * 0.4;
  const rivalMilScore = rStats.militaryMight * 1.2 + rStats.engineeringTech * 0.4;
  const milDiff = Math.round(userMilScore - rivalMilScore);

  let warOutcome;
  if (milDiff > 15) {
    warOutcome = {
      winner: 'player',
      title: 'Decisive Frontier Victory',
      summary: `Your superior military tactical doctrine and fortification engineering crushed the border garrisons of ${rivalPreset.name}, forcing them into a humiliating tributary retreat.`
    };
  } else if (milDiff < -15) {
    warOutcome = {
      winner: 'rival',
      title: 'Frontier Penetration & Fortress Sacked',
      summary: `The martial armaments and logistical coordination of ${rivalPreset.name} overwhelmed your forward legions, seizing fertile frontier provinces and demanding immediate indemnity.`
    };
  } else {
    warOutcome = {
      winner: 'stalemate',
      title: 'Bloody Border Stalemate (Pyrrhic Attrition)',
      summary: `Neither army can breach the other\'s defensive redoubts; both empires exhaust their state treasuries in a seasonal war of attrition, leading to an uneasy status quo ante bellum treaty.`
    };
  }

  // 2. Commercial Trade Leverage (Mercantile Wealth vs. Rival Mercantile Wealth)
  const userEconScore = uStats.mercantileWealth * 1.3 + uStats.centralAuthority * 0.3;
  const rivalEconScore = rStats.mercantileWealth * 1.3 + rStats.centralAuthority * 0.3;
  const econDiff = Math.round(userEconScore - rivalEconScore);

  let tradeOutcome;
  if (econDiff > 10) {
    tradeOutcome = {
      winner: 'player',
      title: 'Mercantile Trade Dominance & Tariff Monopoly',
      summary: `Your merchant fleets and standardized currency flood their frontier markets, extracting valuable raw bullion while draining their domestic coin reserves.`
    };
  } else if (econDiff < -10) {
    tradeOutcome = {
      winner: 'rival',
      title: 'Commercial Asphyxiation & Trade Deficit',
      summary: `${rivalPreset.name} closes its border markets and establishes armed merchant karums inside your cities, monopolizing key strategic metals and luxury goods.`
    };
  } else {
    tradeOutcome = {
      winner: 'stalemate',
      title: 'Balanced Bilateral Caravan Exchange',
      summary: `Both realms enjoy mutually beneficial frontier trade fairs, exchanging surplus grain, wine, and textiles under strict reciprocal royal tariffs.`
    };
  }

  // 3. Cultural & Soft-Power Radiance (Civic Liberty + Theocratic Piety + Engineering Tech)
  const userCultureScore = uStats.civicLiberty * 0.5 + uStats.theocraticPiety * 0.8 + uStats.engineeringTech * 0.5;
  const rivalCultureScore = rStats.civicLiberty * 0.5 + rStats.theocraticPiety * 0.8 + rStats.engineeringTech * 0.5;
  const cultureDiff = Math.round(userCultureScore - rivalCultureScore);

  let cultureOutcome;
  if (cultureDiff > 10) {
    cultureOutcome = {
      winner: 'player',
      title: 'Prestige Script & Architectural Assimilation',
      summary: `Border lords and merchants in ${rivalPreset.name} voluntarily adopt your writing system, wear your courtly robes, and erect monuments imitating your architectural marvels.`
    };
  } else if (cultureDiff < -10) {
    cultureOutcome = {
      winner: 'rival',
      title: 'Cultural Eclipse by Imperial Orthodoxy',
      summary: `The overwhelming prestige and religious missionary zeal of ${rivalPreset.name} radiate across the frontier, tempting your provincial elites to convert to their sacred canon.`
    };
  } else {
    cultureOutcome = {
      winner: 'stalemate',
      title: 'Borderland Syncretism & Hybrid Arts',
      summary: `Frontier artists and scribes fuse both cultures together, producing magnificent hybrid bilingual inscriptions and syncretic deities.`
    };
  }

  // Overall Score
  const totalUser = userMilScore + userEconScore + userCultureScore;
  const totalRival = rivalMilScore + rivalEconScore + rivalCultureScore;
  const overallDominancePct = Math.round((totalUser / (totalUser + totalRival)) * 100);

  return {
    rival: rivalPreset,
    overallDominancePct,
    warOutcome,
    tradeOutcome,
    cultureOutcome,
    uStats,
    rStats
  };
}

