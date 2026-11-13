// "Voices of the People" First-Person Historical Diary Generator
// Generates 4 rich first-person accounts based on the student's actual G.R.A.P.E.S. configuration.

export function generatePerspectives(civilizationName, answers = {}, currentEra = 'early_bronze', currentScale = 'regional_kingdom') {
  const name = civilizationName?.trim() || 'Our Realm';

  const getFirst = (qid, fallback) => {
    const val = answers[qid];
    if (Array.isArray(val) && val.length > 0) return val[0];
    if (typeof val === 'string' && val.trim()) return val;
    return fallback;
  };

  const gov = getFirst('p1_gov_system', 'sovereign monarchical rule');
  const military = getFirst('p4_military', 'the royal guard');
  const crop = getFirst('e1_crops', 'barley and grain');
  const currency = getFirst('e3_currency', 'standard measures of grain');
  const script = getFirst('a1_writing', 'sacred clay inscriptions');
  const medium = getFirst('a2_medium', 'baked clay tablets');
  const ritual = getFirst('r3_rituals', 'altar libations');
  const god = getFirst('r1_structure', 'the immortal celestial lords');
  const gender = getFirst('s4_gender', 'traditional household customs');
  const labor = getFirst('s5_unfree_labor', 'compulsory state laborers');
  const monument = getFirst('a3_monuments', 'the great ancestral temples');
  const neighbor = getFirst('p7_neighbor_relations', 'watchful border defense');

  return [
    {
      casteId: 'sovereign',
      casteTitle: 'The Apex Sovereign',
      casteRole: 'High Monarch & Supreme Commander',
      icon: '👑',
      quote: `"Power is not merely held; it is performed each sunrise before the gods and the legions."`,
      diaryEntry: `From the dawn hour, when the temple priests completed their ${ritual.toLowerCase()}, the weight of ${name} has rested entirely upon my shoulders. Reports from our borders arrive constantly concerning our neighbors and ${neighbor.toLowerCase()}. Through ${gov.toLowerCase()}, my ministers ensure provincial tributes arrive in ${currency.toLowerCase()} to provision ${military.toLowerCase()}. Yet I know that emperors bleed like commoners; if the canals breach or the harvests of ${crop.toLowerCase()} fail, even the most exalted crown cannot silence the rumbling of empty bellies. Today I sanctioned new quarry stone for ${monument.toLowerCase()}, ensuring that long after my flesh returns to the dust, our glory will stand unyielding under the open sky.`
    },
    {
      casteId: 'scribe',
      casteTitle: 'The Imperial Archivist',
      casteRole: 'Master Scribe & Temple Mathematician',
      icon: '📜',
      quote: `"Kings may conquer kingdoms with spears, but only we who wield the stylus preserve them from oblivion."`,
      diaryEntry: `My fingers ache from pressing my stylus into ${medium.toLowerCase()} from morning until dusk. Today I audited thirty-four wagonloads of ${crop.toLowerCase()} hauled into the central storehouses, stamping each register with our ${script.toLowerCase()}. The unlettered soldiers believe state power lies in their bronze spears, but without our tallies, their grain rations would vanish within a fortnight and their armies would disperse into mutinous bandit clans. Tonight, beneath the oil lamp, I must transcribe the sacred astrological charts tracking ${god.toLowerCase()} to advise the royal court before tomorrow's council.`
    },
    {
      casteId: 'citizen_woman',
      casteTitle: 'The Matron of the Market',
      casteRole: 'Weaver, Merchant & Household Custodian',
      icon: '🌾',
      quote: `"While men parade with shields, it is our spinning needles and market scales that keep the hearth warm."`,
      diaryEntry: `In our bustling marketplace, life is governed by ${gender.toLowerCase()}. Before noon, I bartered three bolts of dyed woven cloth for two measures of ${crop.toLowerCase()}, settling the merchant tally using ${currency.toLowerCase()}. Rumors in the bazaar whisper of troop mobilizations by ${military.toLowerCase()}, causing grain prices to fluctuate wildly. Back in our family courtyard, I led my daughters in offering flatbread and sweet oil to our household ancestral shrine, praying for protection. The rulers build colossal structures like ${monument.toLowerCase()}, but the true heart of our society beats in the quiet laughter around our cooking pots.`
    },
    {
      casteId: 'laborer',
      casteTitle: 'The Foundation Worker',
      casteRole: 'Quarry Stonecutter & Corvée Digger',
      icon: '⛏️',
      quote: `"Our blood and sweat are the invisible mortar holding up every palace wall."`,
      diaryEntry: `The sun had not yet risen when the overseer's whistle broke our sleep in the labor barracks. Bound by ${labor.toLowerCase()}, my crew spent twelve hours hauling multi-ton limestone blocks to erect ${monument.toLowerCase()}. My palms are blistered and my back throbs with exhaustion, but the task is merciless. At midday, we were handed our meager meal of dried ${crop.toLowerCase()} and watered beer. In our shared quarters at night, we whisper ancient songs of our ancestors and dream of a world where our children will be free from the lash of the overseer and the chains of state servitude.`
    }
  ];
}

