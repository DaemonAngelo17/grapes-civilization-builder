// Automatic Teacher Stress-Test Generator for G.R.A.P.E.S. Oral Defense
// Analyzes cross-category friction points and creates rigorous, challenging defense questions.

export function generateTeacherStressTest(answers, customNotes = {}) {
  const selected = (id) => answers[id] || '';
  const selectedList = (id) => (Array.isArray(answers[id]) ? answers[id] : answers[id] ? [answers[id]] : []);
  const hasText = (id, str) => {
    const val = answers[id];
    if (Array.isArray(val)) return val.some(item => item.toLowerCase().includes(str.toLowerCase()));
    if (typeof val === 'string') return val.toLowerCase().includes(str.toLowerCase());
    return false;
  };

  const potentialQuestions = [];

  // 1. Geography vs Military / Labor
  if (hasText('g3_barriers', 'none') || hasText('g2_terrain', 'flat')) {
    if (hasText('p4_military', 'seasonal peasant levy')) {
      potentialQuestions.push({
        id: 'stress_geo_open_peasant_levy',
        categoryPair: 'Geography (G) vs. Politics & Military (P)',
        question: 'Your territory consists of wide-open, flat alluvial plains with zero natural defensive barriers, yet your military relies upon a seasonal peasant levy that only mobilizes after harvest. If a hostile neighbor launches a surprise cavalry raid in mid-summer while your crops are still in the ground, how do you prevent your entire agrarian economy and undefended cities from being razed before your peasant army can even be mustered?',
        trigger: 'Flat open plains (G2/G3) + Seasonal Peasant Levy (P4)',
        profAngle: 'Testing vulnerability to pre-harvest blitzkrieg and the strategic contradiction between agrarian labor cycles and border defense.',
        recommendedDefense: [
          'Argue that open plains permit rapid relay warning networks (fire beacons, dispatch runners) giving early tactical alert.',
          'Emphasize reliance on fortified municipal granaries, earthen walled citadels, and canal barriers where rural populations retreat during initial skirmishes.',
          'Note that local militia garrisons and village watch units absorb initial harassment until the grand levy gathers.'
        ]
      });
    }
  }

  // 2. Resource Shortage vs Warfare / Engineering
  if (hasText('g5_shortages', 'timber') && (hasText('p4_military', 'naval supremacy') || hasText('a3_monuments', 'amphitheaters') || hasText('e5_trade', 'maritime'))) {
    potentialQuestions.push({
      id: 'stress_timber_naval',
      categoryPair: 'Geography (G) vs. Politics (P) & Achievements (A)',
      question: 'Your civilization champions naval supremacy with trireme combat fleets and grand architecture, yet your geography suffers from a critical shortage of tall timber. How do you maintain, repair, and expand a state navy when every beam of cedar or oak must be purchased abroad? What prevents an opposing maritime power from implementing a naval blockade on your timber supply lines and starving your shipyards?',
      trigger: 'Critical timber shortage (G5) + Naval supremacy (P4) / Maritime trade (E5)',
      profAngle: 'Testing whether the student understands supply chain vulnerabilities and how resource deficits can be leveraged by hostile rival powers.',
      recommendedDefense: [
        'Point to strategic bilateral treaties and exclusive concession treaties with mountain/forest vassal states (like Phoenician cedar trade with Egypt).',
        'Highlight stockpiling of seasoned naval timber in state arsenals and strict royal reclamation laws recycling timbers from retired merchant vessels.',
        'Argue that naval dominance is specifically utilized as an offensive tool to protect and guarantee those exact import shipping corridors.'
      ]
    });
  }

  // 3. Religion vs Disasters & Political Succession
  if ((hasText('r1_structure', 'theocratic god-king') || hasText('p2_succession', 'mandate of heaven')) && 
      (hasText('g6_disasters', 'unannounced river floods') || hasText('g6_disasters', 'droughts') || hasText('g6_disasters', 'salinization') || hasText('g6_disasters', 'earthquakes'))) {
    potentialQuestions.push({
      id: 'stress_godking_disaster',
      categoryPair: 'Religion (R) vs. Geography (G) & Politics (P)',
      question: 'Your political legitimacy hinges on a Theocratic God-King or the celestial Mandate of Heaven, yet your land is repeatedly afflicted by catastrophic droughts, unpredictable flash floods, or soil salinization. When the rivers fail or wash away whole districts and thousands of citizens face famine, how does the royal court prevent the priesthood and restless subjects from claiming the ruler has lost divine favor and staging a holy coup d\'état?',
      trigger: 'God-King / Mandate of Heaven (R1/P2) + Severe Floods / Droughts (G6)',
      profAngle: 'Testing ideological stability when nature directly contradicts royal propaganda and religious claims of cosmic harmony.',
      recommendedDefense: [
        'Explain that imperial dogma attributes ecological catastrophes not to the monarch\'s failings, but to celestial tests or communal moral impurities requiring state-led purification rituals.',
        'Describe vast state emergency granaries and centralized famine relief designed specifically to keep urban masses fed during divine displeasure.',
        'Emphasize that the King personally leads public expiation ceremonies and temple donations, reaffirming his role as the necessary mediator between humans and heavens.'
      ]
    });
  }

  // 4. Labor Extraction vs Monumental Architecture & Social Stability
  if ((hasText('a3_monuments', 'pyramids') || hasText('a3_monuments', 'aqueducts') || hasText('a3_monuments', 'frontier defensive walls')) &&
      (hasText('e4_taxation', 'corvée') || hasText('s5_unfree_labor', 'chattel slavery') || hasText('s5_unfree_labor', 'state serfs'))) {
    potentialQuestions.push({
      id: 'stress_monuments_corvee_revolt',
      categoryPair: 'Achievements (A) vs. Economy (E) & Social Structure (S)',
      question: 'You have chosen monumental architecture (colossal pyramids, extensive frontier walls, or stone aqueducts) alongside a mandatory corvée labor tax and unfree laborers or serfs. In historical societies like Qin Dynasty China or the Old Kingdom of Egypt, excessive forced labor demands triggered widespread peasant flight, localized mutinies, and dynastic collapse. What concrete socio-economic incentives or enforcement structures prevent your labor force from revolting en masse?',
      trigger: 'Monumental architecture (A3) + Corvée labor (E4) / Unfree labor (S5)',
      profAngle: 'Testing whether the student balances imperial vanity against the real economic friction and domestic instability of coercive labor.',
      recommendedDefense: [
        'Clarify that corvée labor is scheduled strictly during the agrarian off-season (inundation or winter fallow) when fields lie idle, preventing crop neglect.',
        'Highlight that workers are provided with high-calorie rations (bread, beer, salted meat), medical care for fractures, and religious prestige for participating in cosmic state projects.',
        'Emphasize rotating regional labor quotas with municipal tax exemptions granted to compliant villages to deter unified cross-regional rebellion.'
      ]
    });
  }

  // 5. Currency vs Trade & Fiscal Extravagance
  if ((hasText('e3_currency', 'grain redistribution') || hasText('e3_currency', 'barter') || hasText('e3_currency', 'weighed metal bullion')) &&
      (hasText('e5_trade', 'maritime') || hasText('e5_trade', 'silk') || hasText('p5_foreign_policy', 'cultural integration'))) {
    potentialQuestions.push({
      id: 'stress_currency_trade_friction',
      categoryPair: 'Economy (E) vs. Politics (P)',
      question: 'Your civilization operates on state grain redistribution, barter, or unstandardized weighed metal bullion, yet you engage in long-distance maritime or overland caravan trade. How do your merchants settle high-value foreign contracts with overseas trading partners who demand universally accepted, standardized coinage? How does the imperial treasury prevent customs officials from shaving silver bullions or skimming grain tallies at distant border posts?',
      trigger: 'Non-coinage currency (E3) + International trade network (E5)',
      profAngle: 'Testing economic realism regarding transaction costs, liquidity, and fiscal oversight before the widespread adoption of standardized coins.',
      recommendedDefense: [
        'Explain that foreign trade is conducted through state-supervised enclaves or merchant guilds using sealed clay bullae and official royal counter-weights.',
        'Clarify that bulk goods (wine, cedar, bronze ingots) are bartered against fixed equivalence tables recorded on baked clay or papyrus ledgers.',
        'Detail the role of imperial weights-and-measures inspectors (equipped with certified royal balance scales) stationed at all entry ports and toll gates.'
      ]
    });
  }

  // 6. Social Mobility vs Rigid Hierarchy & Legal Codes
  if ((hasText('s3_mobility', 'rigid hereditary caste system') || hasText('p3_law_system', 'social-class tiered punishments')) &&
      (hasText('s2_middle', 'long-distance merchants') || hasText('s3_mobility', 'wealth-based') || hasText('s3_mobility', 'military valor'))) {
    potentialQuestions.push({
      id: 'stress_caste_vs_merit',
      categoryPair: 'Social Structure (S) vs. Politics & Law (P)',
      question: 'Your judicial system features strict social-class tiered punishments and a rigid hierarchy, yet you permit upward mobility through military valor or wealth accumulation by long-distance merchants. What happens when a newly enriched merchant or a battle-hardened commoner acquires more land and liquid wealth than an impoverished noble? How does your legal system prevent civil war between an entrenched aristocracy and rising, ambitious non-nobles?',
      trigger: 'Class-tiered law / Hereditary hierarchy (P3/S1) + Mobility via wealth / military (S3)',
      profAngle: 'Testing sociological dynamics: the friction between hereditary aristocracy and emerging commercial/military parvenus.',
      recommendedDefense: [
        'Argue that new wealth or battlefield glory can only purchase honorary municipal titles or clientage beneath established patrician patrons, preserving the hereditary core.',
        'Point to sumptuary laws that strictly regulate who can wear purple dye, ride chariots, or construct multi-story dwellings regardless of personal wealth.',
        'Demonstrate that the crown actively uses newly elevated soldiers and rich merchants as counterweights to curb the ambition of rebellious old nobles.'
      ]
    });
  }

  // 7. Gender Autonomy vs Dynastic Primogeniture
  if ((hasText('s4_gender', 'high legal autonomy') || hasText('s4_gender', 'militarized matriarchal')) &&
      (hasText('p2_succession', 'hereditary primogeniture') || hasText('p1_gov_system', 'centralized absolute monarchy') || hasText('s1_apex', 'warrior aristocracy'))) {
    potentialQuestions.push({
      id: 'stress_gender_dynasty_succession',
      categoryPair: 'Social Structure (S) vs. Politics (P)',
      question: 'Women in your society enjoy remarkable legal autonomy (owning estates, managing businesses, and signing contracts), yet political succession is governed by strict hereditary primogeniture or a warrior aristocracy. How does the realm handle situations where the supreme heiress to massive frontier estates refuses to marry the king\'s designated military heir, or uses her independent economic assets to finance a rival political faction?',
      trigger: 'High female legal autonomy (S4) + Primogeniture / Monarchy (P1/P2)',
      profAngle: 'Testing the intersection of civil private property rights with autocratic dynastic control.',
      recommendedDefense: [
        'Point to contractual marriage covenants and dual-signature property agreements recognized by public law courts that separate personal estate ownership from crown sovereignty.',
        'Explain that noble women leverage their economic autonomy to serve as influential diplomatic liaisons and regents, stabilizing dynastic continuity rather than fracturing it.',
        'Cite historical precedents like New Kingdom Egypt or Hellenistic Ptolemaic queens, where female property rights coexisted with royal dynastic preservation.'
      ]
    });
  }

  // 8. Legal Code vs Religious Power
  if ((hasText('r5_gov_relation', 'power struggle') || hasText('r5_gov_relation', 'pure theocracy')) &&
      (hasText('p3_law_system', 'written public law') || hasText('p3_law_system', 'jury trials'))) {
    potentialQuestions.push({
      id: 'stress_temple_vs_secular_law',
      categoryPair: 'Religion (R) vs. Politics & Law (P)',
      question: 'Your society features written public law pillars in the town square and citizen juries, yet the temple priests hold vast independent estates and engage in a continual power struggle with the crown. If the High Priest is accused of financial corruption or blasphemous treason, whose court tries him? Can secular magistrates judge an anointed servant of the gods without risking popular religious riots?',
      trigger: 'Temple-State power struggle (R5) + Written public law / citizen courts (P3)',
      profAngle: 'Testing institutional jurisdiction boundaries between religious canon law and secular imperial justice.',
      recommendedDefense: [
        'Establish that the stone law pillars explicitly declare the laws were dictated to the King directly by the supreme deity, thus giving royal judges divine jurisdiction over the priests.',
        'Argue that a mixed tribunal consisting of royal magistrates and elder temple custodians adjudicates high clerical transgressions in secret to avoid public scandal.',
        'Show how the monarch controls temple food rations and sacrificial wine supplies, ensuring the priesthood cannot break completely away from state sovereignty.'
      ]
    });
  }

  // Fallback questions to guarantee at least 5 rich questions if few conditionals were met
  const defaultFallbackPool = [
    {
      id: 'fallback_agro_collapse',
      categoryPair: 'Geography (G) & Economy (E) vs. Social Structure (S)',
      question: 'Ancient agricultural systems were extremely vulnerable to single-point ecological failures. Given your staple crops and primary freshwater source, what contingency protocols exist if an unseasonal climatic shock ruins two consecutive harvests? Does the state feed the impoverished masses, or does famine trigger the disintegration of your social pyramid?',
      trigger: 'Fundamental Agro-Climatic Resilience (G1/E1/S5)',
      profAngle: 'Assessing state capacity for crisis management and whether the civilization has realistic famine reserves.',
      recommendedDefense: [
        'Describe multi-year grain storage silos constructed in stone and sealed with lime plaster located in every provincial capital.',
        'Explain crop diversification: pairing deep-rooted drought-resistant legumes with primary cereal grains to soften single-crop failures.',
        'Detail temporary royal tax forgiveness decrees and public grain doles to prevent peasant starvation and social chaos.'
      ]
    },
    {
      id: 'fallback_writing_illiteracy',
      categoryPair: 'Achievements (A) vs. Politics (P) & Social Structure (S)',
      question: 'Your civilization developed an advanced script and recorded laws on durable media, yet in nearly all ancient civilizations fewer than 2% of citizens were literate. How can a system of written public laws be considered just or transparent if 98% of your population cannot read the stone pillars upon which their lives depend?',
      trigger: 'Literacy Monopoly vs Legal Enforcement (A1/P3/S2)',
      profAngle: 'Challenging assumptions about the democratic reach of ancient literacy and legal codification.',
      recommendedDefense: [
        'Explain that public town-criers, heralds, and junior temple scribes were mandated by law to read statutes aloud during market days and new moon festivals.',
        'Point to pictorial glyphs, bas-relief carvings, and public iconography that visually communicated the consequences of criminal acts to illiterate commoners.',
        'Emphasize that the primary function of the written pillars was restricting arbitrary judicial corruption by elite magistrates rather than direct peasant reading.'
      ]
    },
    {
      id: 'fallback_foreign_assimilation',
      categoryPair: 'Politics (P) & Religion (R) vs. Social Structure (S)',
      question: 'When your civilization conquers a culturally distinct neighboring region, how do you handle religious syncretism? If your gods demand specific sacrifices while the conquered people worship completely different deities, does the empire force conversions, execute dissenters, or assimilate foreign gods into the state pantheon?',
      trigger: 'Imperial Hegemony vs Cultural-Religious Pluralism (P5/R1/S1)',
      profAngle: 'Probing imperial tolerance, assimilation friction, and the mechanics of multi-ethnic rule.',
      recommendedDefense: [
        'Adopt the polytheistic syncretism model (like Rome or Cyrus the Great): identifying conquered gods as regional aspects of the empire\'s own deities.',
        'Offer local religious leaders honorary seats in the provincial council and state subsidies for their temples in return for prayers for the Emperor\'s health.',
        'Distinguish between religious liberty and fiscal compliance: conquered subjects may worship freely so long as taxes are paid and imperial supremacy acknowledged.'
      ]
    },
    {
      id: 'fallback_military_logistics',
      categoryPair: 'Politics & Military (P) vs. Economy & Geography (G/E)',
      question: 'Ancient military campaigns were governed primarily by logistics rather than battlefield tactics. Given your terrain, pack animals, and military organization, how far can your primary strike force march before exhausting its baggage train, and how do you feed soldiers during a siege deep inside hostile foreign territory?',
      trigger: 'Martial Range & Logistical Depots (G2/E2/P4)',
      profAngle: 'Evaluating whether the student understands that an army marches on its stomach, and how transport limits empire size.',
      recommendedDefense: [
        'Explain the establishment of fortified supply depots and granary chains stationed one day\'s march (15-20 miles) apart along royal trunk roads.',
        'Detail the dual use of riverine barges or coastal supply fleets accompanying the army whenever terrain permits.',
        'Clarify the standard practice of foraging, regulated requisitioning from allied vassals, and requiring conquered cities to provide immediate grain rations.'
      ]
    },
    {
      id: 'fallback_unfree_labor_security',
      categoryPair: 'Social Structure (S) vs. Politics & Military (P)',
      question: 'If your lower tier includes unfree war captives, state serfs, or debt slaves, how do you manage internal security during major foreign wars? When your best troops are deployed hundreds of miles away at the imperial borders, what prevents an enslaved workforce from rising up and taking over the homeland?',
      trigger: 'Internal Class Coercion vs Frontier Military Commitments (S5/P4)',
      profAngle: 'Examining the domestic price of an unfree labor system and the perennial fear of servile insurrection.',
      recommendedDefense: [
        'Highlight the deployment of a permanent domestic gendarmerie or royal palace guard that never leaves the capital district.',
        'Point to social atomization: separating slaves by language, dialect, and ethnic origin so organized conspiracies cannot easily form.',
        'Provide the legal incentive of conditional manumission or freedom for faithful service, preventing the desperation that fuels suicidal slave rebellions.'
      ]
    }
  ];

  // Combine and deduplicate to ensure exactly 5 distinct, high-impact stress test questions
  const finalQuestions = [...potentialQuestions];
  for (const fallback of defaultFallbackPool) {
    if (finalQuestions.length >= 5) break;
    if (!finalQuestions.some(q => q.id === fallback.id)) {
      finalQuestions.push(fallback);
    }
  }

  return finalQuestions.slice(0, 5);
}

