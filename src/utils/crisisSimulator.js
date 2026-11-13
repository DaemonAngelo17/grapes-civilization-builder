// Crisis Event Minigame: "Survive 500 Years"
// Simulates 3 historical crises testing whether the student's infrastructure withstands collapse.

export function generateCrisisScenario(answers = {}, currentEra = 'early_bronze', currentScale = 'regional_kingdom') {
  const has = (qid, kw) => {
    const val = answers[qid];
    if (Array.isArray(val)) return val.some(item => item.toLowerCase().includes(kw.toLowerCase()));
    if (typeof val === 'string') return val.toLowerCase().includes(kw.toLowerCase());
    return false;
  };

  // 1. Crisis 1: Environmental / Hydraulic Shock (Year 120)
  const isDesertOrRiver = has('g2_terrain', 'desert') || has('g1_freshwater', 'flooding river') || has('g1_freshwater', 'loess');
  const isRainforestOrIsland = has('g2_terrain', 'rainforest') || has('g2_terrain', 'volcanic oceanic');
  
  let crisis1;
  if (isDesertOrRiver) {
    crisis1 = {
      year: 'Year 120 (Agrarian Shock)',
      title: 'The Great Decennial Drought & River Silt Catastrophe',
      description: 'A 7-year failure of the annual rains causes the main river channels to dwindle into stagnant pools. Upriver canal mouths are choked with silt, and suburban fields begin baking into cracked clay dust. City granaries only have 60 days of grain left.',
      options: [
        {
          id: 'granary_ration',
          title: 'Open the State Emergency Granaries & Ration Grain by Census',
          description: 'Deploy royal auditors to measure out daily grain rations to every registered household while mobilizing labor to dig silt out of canals.',
          requiredChecks: ['granary', 'terrace', 'state grain', 'quipu', 'census', 'basin irrigation', 'monopolies'],
          successText: 'Your state redistribution network and irrigation maintenance held! Peasant families received survival rations and repaired the feeder canals without bread riots.',
          failureText: 'Your government lacked public grain reserves or census records. Desperate starving mobs stormed the temples and burnt elite villas.'
        },
        {
          id: 'temple_sacrifices',
          title: 'Order Grand Temple Sacrifices & Planetary Rituals',
          description: 'Appeal to the cosmic pantheon with lavish daily offerings, fasting, and ceremonial processions to restore the celestial rains.',
          requiredChecks: ['sacrifice', 'oracle', 'bloodletting', 'animism', 'monotheism', 'temple', 'astrological'],
          successText: 'The population was united by profound sacred fervor. Shared ritual fasting curbed civil unrest until seasonal rains finally returned.',
          failureText: 'Prayers alone could not fill empty bellies. Disillusioned subjects concluded the gods had abandoned the royal dynasty.'
        },
        {
          id: 'tribute_raid',
          title: 'Launch a Frontier Foraging Raid Against Weaker Neighbors',
          description: 'March military forces across the border to seize harvest stocks, cattle herds, and food stores from nearby foreign villages.',
          requiredChecks: ['horse archer', 'cavalry', 'standing army', 'chariot', 'slave-raiding', 'phalanx'],
          successText: 'Your elite cavalry forces outmaneuvered frontier tribes and returned with thousands of sheep and grain carts, saving the capital.',
          failureText: 'Your drafted peasant militia was too weak from hunger to fight effectively; frontier warriors ambushed and slaughtered your supply train.'
        }
      ]
    };
  } else {
    crisis1 = {
      year: 'Year 120 (Agrarian Shock)',
      title: 'Tropical Blight & Aquifer Depletion Crisis',
      description: 'Unseasonal torrential storms rot the primary root staples in the soil, while volcanic ash falls poison the shallow water reservoirs. City markets are empty and disease begins spreading in waterlogged neighborhoods.',
      options: [
        {
          id: 'granary_ration',
          title: 'Deploy Hydraulic Canals & Distribute Emergency Dried Rations',
          description: 'Rely on elevated chinampa ridges, terrace stone channels, and royal emergency storehouses to feed the urban center.',
          requiredChecks: ['terrace', 'basin irrigation', 'stepwells', 'reservoirs', 'storage', 'granary'],
          successText: 'Your sophisticated hydraulic engineering drained stagnant floodwaters and provided clean spring water from deep aquifers.',
          failureText: 'Lacking engineered drainage, stagnant water bred virulent plagues that decimated over a third of your urban workforce.'
        },
        {
          id: 'trade_fleet',
          title: 'Dispatch High-Sea Merchant Fleets for Foreign Food Imports',
          description: 'Load gold, silver, and precious obsidian onto maritime merchant vessels to buy foreign grain from distant coastal allies.',
          requiredChecks: ['maritime', 'dhow', 'catamaran', 'coins', 'bullion', 'karums'],
          successText: 'Your double-hulled voyaging ships navigated ocean currents swiftly, docking with tons of dried fish, breadfruit, and foreign tubers.',
          failureText: 'Without a seaworthy merchant fleet or standardized currency, your merchants were unable to procure foreign emergency shipments in time.'
        },
        {
          id: 'clan_dispersion',
          title: 'Disperse the Urban Population into Mountain Foraging Enclaves',
          description: 'Temporarily evacuate the capital and order clans to forage wild mountain tubers and game until agricultural beds regenerate.',
          requiredChecks: ['egalitarian', 'kinship', 'amphictyony', 'confederacy', 'ayllu', 'customary'],
          successText: 'Your flexible clan social structure adapted smoothly, dispersing into smaller subsistence groups and avoiding urban famine.',
          failureText: 'Your rigid, centralized state was incapable of graceful decentralization; the forced exodus collapsed imperial authority permanently.'
        }
      ]
    };
  }

  // 2. Crisis 2: Internal Social Upheaval (Year 280)
  const crisis2 = {
    year: 'Year 280 (Societal Upheaval)',
    title: 'The Great Debt Revolt & Provincial Succession Schism',
    description: 'Generations of economic inequality have left hundreds of thousands of smallholder farmers hopelessly indebted to aristocratic patricians. A charismatic rebel claiming divine prophetic revelation has united the lower classes, demanding total debt cancellation and the execution of corrupt tax collectors.',
    options: [
      {
        id: 'legal_reform',
        title: 'Proclaim Royal Jubilee (Seisachtheia) & Codify Debt Relief',
        description: 'Announce a universal cancellation of agrarian debts, free citizens from bondage, and publish a revised public law code.',
        requiredChecks: ['codified', 'jury', 'seisachtheia', 'debt bondage', 'restorative', 'merit', 'mandate of heaven', 'bureaucracy'],
        successText: 'Your Solonian debt jubilee defused the revolt immediately! Grateful commoners pledged unshakeable loyalty to the sovereign throne.',
        failureText: 'Lacking institutional law courts or royal enforcement power, wealthy landowners ignored the royal decree and hired private mercenaries to crush farmers.'
      },
      {
        id: 'military_iron',
        title: 'Unleash the Professional Imperial Army & Impose Martial Law',
        description: 'Declare the rebels heretical traitors; deploy heavy cavalry, armored infantry, and secret police to execute ringleaders.',
        requiredChecks: ['standing army', 'cataphract', 'crossbow', 'phalanx', 'secret inspectors', 'krypteia', 'psychological terror', 'draconian'],
        successText: 'Disciplined professional legions quickly dispersed the disorganized mob, executing the rebel commanders and restoring iron order.',
        failureText: 'Your seasonal peasant levies refused to fire upon their own kinfolk; half your army mutinied and joined the rebel camp!'
      },
      {
        id: 'religious_syncretism',
        title: 'Co-opt the Prophetic Movement into State Sacred Orthodoxy',
        description: 'Incorporate the rebels\' popular deities into the official pantheon, grant priesthood estates to their leaders, and hold grand festival games.',
        requiredChecks: ['pluralistic', 'syncretism', 'pantheon', 'ecstatic festivals', 'oracle', 'civic religion', 'edicts of toleration'],
        successText: 'Masterful ideological diplomacy turned potential rebels into loyal temple dignitaries, absorbing the movement into the state.',
        failureText: 'Your rigid religious orthodoxy could not tolerate new sects; theological stubbornness provoked a 30-year sectarian civil war.'
      }
    ]
  };

  // 3. Crisis 3: Geopolitical Frontier Invasion (Year 450)
  const crisis3 = {
    year: 'Year 450 (Existential Geopolitical War)',
    title: 'The Grand Coalition Siege & Nomadic Horde Blitzkrieg',
    description: 'A terrifying united confederacy of 100,000 frontier horse archers and siege engineers has crossed your borders, burning provincial outposts. Your richest frontier client kingdom has defected to the invaders, and their combined army now sits outside your capital\'s outer walls.',
    options: [
      {
        id: 'frontier_walls',
        title: 'Man the Colossal Stone Frontier Walls & Outlast the Siege',
        description: 'Withdraw all civilian populations inside fortified cyclopean walls and rely on gravity-fed aqueducts and granaries to outlast the invaders.',
        requiredChecks: ['frontier defensive walls', 'cyclopean', 'granite', 'aqueducts', 'sewers', 'battering rams', 'cothons'],
        successText: 'Your monumental stone defenses held firm! The invaders possessed no siege engines capable of cracking your ramparts and starved in the scorched countryside.',
        failureText: 'Your cities lacked stone fortifications; barbarian cavalry rode straight through open earthen fields and sacked your capital.'
      },
      {
        id: 'diplomatic_heqin',
        title: 'Divide the Enemy Coalition with Gold Subsidies & Marriage Treaties',
        description: 'Send imperial envoys with cartloads of woven silk, stamped coins, and royal marriage proposals to bribe enemy sub-chiefs into turning on their supreme Khagan.',
        requiredChecks: ['tributary buffer', 'brotherhood of great kings', 'foederati', 'strategic royal marriage', 'silk', 'stamped coins', 'meritocratic civil service'],
        successText: 'Brilliant imperial statecraft shattered the coalition from within! Sub-commanders accepted your gold bribes and slaughtered the invading Khagan in his tent.',
        failureText: 'Your state lacked monetary silver reserves and diplomatic corps; the fierce invaders executed your envoys and pressed the assault.'
      },
      {
        id: 'combined_arms',
        title: 'Sortie Forth in Full Combined-Arms Decisive Battle',
        description: 'Lead a coordinated counter-attack using heavy companion shock cavalry, massed crossbow volleys, and specialized siege siphons.',
        requiredChecks: ['combined-arms', 'cataphract', 'crossbow phalanxes', 'stirrup-stabilized', 'hammer-and-anvil', 'heavy infantry phalanx', 'greek fire'],
        successText: 'Your disciplined tactical formations executed a devastating hammer-and-anvil strike, crushing the enemy flanks and routing the horde!',
        failureText: 'Your army lacked tactical coordination and heavy cavalry; horse archers feigned retreat, encircled your infantry, and annihilated your legions.'
      }
    ]
  };

  return [crisis1, crisis2, crisis3];
}

export function evaluateCrisisChoice(crisisOrChoice, optionIdOrOption, answers = {}) {
  let selectedOption = null;
  let userAnswers = answers;

  if (crisisOrChoice && crisisOrChoice.options && typeof optionIdOrOption === 'string') {
    // Called as: evaluateCrisisChoice(crisis, optionId, answers)
    selectedOption = crisisOrChoice.options.find(o => o.id === optionIdOrOption) || crisisOrChoice.options[0];
  } else if (optionIdOrOption && optionIdOrOption.requiredChecks) {
    // Called as: evaluateCrisisChoice(choiceId, selectedOption, answers)
    selectedOption = optionIdOrOption;
  } else if (crisisOrChoice && crisisOrChoice.requiredChecks) {
    // Called as: evaluateCrisisChoice(selectedOption, answers)
    selectedOption = crisisOrChoice;
    userAnswers = optionIdOrOption || {};
  }

  if (!selectedOption) {
    return {
      isSuccess: false,
      points: 50,
      matches: [],
      feedback: 'No doctrine option was selected to counter this crisis.'
    };
  }

  // Check if student answers contain any of the required checks
  const allAnswersText = Object.values(userAnswers).flat().join(' ').toLowerCase();
  
  const matches = (selectedOption.requiredChecks || []).filter(check => 
    allAnswersText.includes(check.toLowerCase())
  );

  const isSuccess = matches.length >= 1;
  const points = isSuccess ? 300 + matches.length * 50 : 50;

  return {
    isSuccess,
    points,
    matches,
    feedback: isSuccess ? selectedOption.successText : selectedOption.failureText
  };
}
