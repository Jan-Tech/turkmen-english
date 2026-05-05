import type { SeedUnit } from "../../../types/content";

export const advancedUnits: SeedUnit[] = [
  // ─── UNIT 1: SUBJUNCTIVE & FORMAL CONDITIONALS ───────────────────────────
  {
    unitNumber: 1,
    slug: "adv-unit-01-subjunctive",
    titleEn: "Subjunctive & Formal Conditionals",
    titleTk: "Şertleýin Isleýiş Formy we Resmi Şertler",
    description: "Bu bölümde Iňlis diliniň subjunctive (şertleýin isleýiş) gurluşy we gaty resmi şert sözlemleri öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "adv-u01-l01-subjunctive-form",
        titleEn: "The Subjunctive Mood",
        titleTk: "Subjunctive Formy",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Subjunctive — isleg, teklip, talap, möhümlik aňlatýan sözlemlerden soň ulanylýan işligiň aýratyn görnüşi. Häzirki subjunctive: işligiň sada görnüşi ähli şahs üçin ulanylýar (he/she/it üçin hem -s goşulmaýar). 'It is essential that he be present.' 'I suggest that she take the test again.' Geçmiş subjunctive: 'were' ähli şahs üçin — 'If I were you...'" } },
            { type: "grammar_note", data: { titleTk: "Subjunctive düzümi we ulanylşy", explanationTk: "It is + [sypat: essential/vital/important/necessary/recommended] + that + şahs + işlik (sada görnüş). Suggest/recommend/insist/propose/demand/request + that + şahs + işlik. Resmi ýazuw we akademiki dilde köp ulanylýar.", pattern: "It is essential that he attend. / I suggest that she reconsider. / They demanded that it be returned.", examples: [{ en: "It is vital that every member be informed before the meeting.", tk: "Her agzanyň ýygnak başlamazdan öň habardar edilmegi möhümdir." }, { en: "The board recommended that the proposal be reviewed.", tk: "Dolandyryjylar teklibiň täzeden seredilmegini maslahat berdiler." }, { en: "She insisted that her concerns be heard.", tk: "Ol aladalarynyň diňlenilmegini talap etdi." }] } },
            { type: "vocabulary_list", data: { titleTk: "Subjunctive talap edýän sözler", words: [{ en: "essential / vital / crucial", tk: "möhüm / zerur / örän möhüm", partOfSpeech: "adjective", exampleEn: "It is crucial that all data be backed up.", exampleTk: "Ähli maglumatlaryň ätiýaçlandyrylmagy örän möhüm." }, { en: "recommend / suggest / propose", tk: "maslahat bermek / teklip etmek / öňe sürmek", partOfSpeech: "verb", exampleEn: "I recommend that he take additional training.", exampleTk: "Goşmaça okuw almagyny maslahat berýärin." }, { en: "insist / demand / require", tk: "ykrar etmek / talap etmek / gerek etmek", partOfSpeech: "verb", exampleEn: "The contract requires that payment be made within 30 days.", exampleTk: "Şertnama tölegi 30 günüň içinde geçirilmegini talap edýär." }] } },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "adv-u01-l02-formal-conditional-structures",
        titleEn: "Formal & Literary Conditional Structures",
        titleTk: "Resmi we Edebi Şert Gurluşlary",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Gaty resmi we edebi Iňlisçede şert sözlemleri 'if' bolmazdan aňladylýar. 'Were it not for your help...' (Kömek etmeseňiz...). 'But for the rain...' (Ýagyş bolmadyk bolsa...). 'Provided that / On condition that / As long as' — şert goşulyşlary. Bulary bilmek C1 derejeli Iňlisçäni görkezýär." } },
            { type: "grammar_note", data: { titleTk: "Resmi şert gurluşlary", explanationTk: "Were it not for + at sözi = If it were not for. But for + at sözi = If it were not for. Provided (that) = if and only if. On condition that = if. As long as = if (only while).", pattern: "Were it not for your support, this would have failed. / But for the delay, we would have arrived on time.", examples: [{ en: "Were it not for modern medicine, many of these diseases would be fatal.", tk: "Häzirki zaman lukmançylygy bolmadyk bolsa, bu keselleriň köpüsi ölüme getirerdik." }, { en: "But for the storm, we would have completed the journey.", tk: "Tupan bolmadyk bolsa, syýahaty tamamlardyk." }, { en: "You may proceed, provided that all documentation is complete.", tk: "Ähli resminamalar taýýar bolsa, dowam edip bilersiňiz." }] } },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "adv-u01-l03-mixed-conditionals-advanced",
        titleEn: "Advanced Mixed & Implied Conditionals",
        titleTk: "Ösen Garyşyk we Çaklama Şertler",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "C1 derejesinde şert manylary dürli gurluşlar arkaly aňladylýar. Işligiň -ing görnüşi şert hökmünde: 'Arriving earlier, you would have met her.' Geçmiş participle: 'Given more time, I could have done better.' 'Without' we 'with' şert hökmünde: 'Without your advice, I would have failed.'" } },
            { type: "example_set", data: { titleTk: "Ösen şert gurluşlary", examples: [{ en: "Given the chance, she would have chosen a different career.", tk: "Mümkinçilik bolsa, başga karýera saýlardý." }, { en: "Without your support, none of this would have been possible.", tk: "Goldawyňyz bolmadyk bolsa, bularyň hiç biri mümkin bolmazdy." }, { en: "With a little more preparation, the presentation would have been perfect.", tk: "Has köp taýýarlyk bilen, tanyşdyryş kämil bolardy." }, { en: "A lesser person would have given up long ago. (Implied: but this person didn't.)", tk: "Güýçsüzräk adam has öň el çekerdi. (Ýöne bu adam çekmedi.)" }] } },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "1-nji Bölüm Synagy: Subjunctive we Resmi Şertler",
      questions: [
        { order: 1, questionText: "It is essential that every employee _____ the training. (attend)", questionType: "multiple_choice_grammar", options: ["attends", "attended", "attend", "to attend"], correctIndex: 2 },
        { order: 2, questionText: "The committee recommended that the plan _____ revised.", questionType: "multiple_choice_grammar", options: ["is", "was", "be", "were"], correctIndex: 2 },
        { order: 3, questionText: "'Were it not for' nämä deňdir?", questionType: "translate_en_tk", options: ["If it is not for", "If it were not for", "Without being", "Unless there is"], correctIndex: 1 },
        { order: 4, questionText: "But _____ the delay, we would have arrived on time.", questionType: "multiple_choice_grammar", options: ["with", "for", "to", "at"], correctIndex: 1 },
        { order: 5, questionText: "She insisted that her concerns _____ heard.", questionType: "multiple_choice_grammar", options: ["are", "were", "be", "been"], correctIndex: 2 },
        { order: 6, questionText: "You may proceed, _____ that all documents are complete.", questionType: "multiple_choice_grammar", options: ["providing", "provided", "provide", "provision"], correctIndex: 1 },
        { order: 7, questionText: "_____ more time, I could have done a better job.", questionType: "multiple_choice_grammar", options: ["With given", "Given", "Giving", "To give"], correctIndex: 1 },
        { order: 8, questionText: "'I suggest that she _____ the test again.' (take — subjunctive)", questionType: "multiple_choice_grammar", options: ["takes", "took", "take", "to take"], correctIndex: 2 },
        { order: 9, questionText: "_____ your advice, I would have made a terrible mistake.", questionType: "multiple_choice_grammar", options: ["With", "For", "Without", "But"], correctIndex: 2 },
        { order: 10, questionText: "Subjunctive haýsy ýagdaýda ulanylýar?", questionType: "translate_en_tk", options: ["Geçmiş wakalar", "Isleg, teklip, möhümlik aňlatmak üçin 'that' sözlemlerinden soň", "Geljek çaklamalar", "Häzirki ýagdaý"], correctIndex: 1 },
      ],
    },
  },

  // ─── UNIT 2: NOMINALIZATION ──────────────────────────────────────────────
  {
    unitNumber: 2,
    slug: "adv-unit-02-nominalization",
    titleEn: "Nominalization",
    titleTk: "Işlikleri we Sypatlary At Sözüne Öwürmek",
    description: "Bu bölümde nominalization öwrenilýär — işlik we sypatlary at sözüne öwürmegiň usullary. Bu akademiki ýazuwda we resmi gepleşiklerde örän möhüm.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "adv-u02-l01-nominalization-form",
        titleEn: "Nominalization — Form & Patterns",
        titleTk: "Nominalizasiýa — Düzümi we Nusgalary",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Nominalizasiýa — işlik ýa-da sypatlary at sözüne öwürmek. Gündelik: 'We decided to expand.' Resmi/akademiki: 'The decision to expand was made.' At görnüşini ulanmak ýazuwyňyzy has resmi, nesnel we akademiki edýär. Köplenç -tion/-sion, -ment, -ance/-ence, -ity, -al, -ing goşulmalary bilen emele gelýär." } },
            { type: "grammar_note", data: { titleTk: "Nominalizasiýa goşulmalary", explanationTk: "-tion/-sion: decide→decision, investigate→investigation, expand→expansion. -ment: develop→development, achieve→achievement, manage→management. -ance/-ence: perform→performance, exist→existence. -ity: complex→complexity, possible→possibility. -al: approve→approval, refuse→refusal.", pattern: "investigate → investigation / develop → development / possible → possibility", examples: [{ en: "They investigated the cause. → An investigation into the cause was conducted.", tk: "Sebäbi derňediler. → Sebäbiň derňewi geçirildi." }, { en: "The company developed rapidly. → The rapid development of the company was notable.", tk: "Kompaniýa çalt ösdi. → Kompaniýanyň çalt ösüşi bellärliklidir." }, { en: "We achieved our goals. → The achievement of our goals was celebrated.", tk: "Maksat gazandyk. → Maksatlarymyzyň gazanylmagy bellenildi." }] } },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "adv-u02-l02-nominalization-academic",
        titleEn: "Nominalization in Academic Writing",
        titleTk: "Akademiki Ýazuwda Nominalizasiýa",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Akademiki ýazuwda nominalizasiýa üç möhüm maksady ýerine ýetirýär: 1) Dili has nesnel edýär (adam däl-de hereket/proses esasy bolýar). 2) Pikiri gysga aňlatmaga kömek edýär. 3) Formal, hünärmençilik ses berýär. Emma gaty köp nominalizasiýa ýazuwy agyr we düşnüksiz edip biler — deňagramlylyk möhüm." } },
            { type: "example_set", data: { titleTk: "Gündelik → Akademiki nominalizasiýa", examples: [{ en: "Everyday: We analysed how the students performed. Academic: An analysis of student performance was conducted.", tk: "Gündelik: Okuwçylaryň nähili netije görkezýändigini derňedik. Akademiki: Okuwçy netijeliligiň derňewi geçirildi." }, { en: "Everyday: The government failed to respond quickly. Academic: The government's failure to respond quickly had serious consequences.", tk: "Gündelik: Hökümet çalt jogap bermedi. Akademiki: Hökümetiň çalt jogap bermezligi çynlakaý netijelere getirdi." }, { en: "Everyday: They improved the system significantly. Academic: Significant improvements to the system were implemented.", tk: "Gündelik: Ulgamy düýpli gowulandyrdylar. Akademiki: Ulgama düýpli gowulandyrmalar girizildi." }] } },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "adv-u02-l03-abstract-nouns",
        titleEn: "Abstract Nouns & Complex Noun Phrases",
        titleTk: "Soyut At Sözleri we Çylşyrymly At Toplumlary",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "C1 derejeli ýazuwda soyut at sözleri we çylşyrymly at toplumlary ulanylýar. 'A cost-effective approach to waste management' — bir at toplumynda birnäçe sypat we at sözi birleşip bir düşünjäni aňladýar. Şeýle hem 'of' bilen at znjiri: 'the implementation of the new system of data collection'." } },
            { type: "vocabulary_list", data: { titleTk: "Ösen soyut at sözleri", words: [{ en: "implementation", tk: "durmuşa geçiriş / ulanylmaga goýberiş", partOfSpeech: "noun", exampleEn: "The implementation of the new policy took six months.", exampleTk: "Täze syýasatyň durmuşa geçirilmegi alty aý aldy." }, { en: "sustainability", tk: "dowamly ösüş / durnuklylyk", partOfSpeech: "noun", exampleEn: "Sustainability is a key concern for modern businesses.", exampleTk: "Durnuklylyk häzirki zaman işewürligi üçin esasy alada." }, { en: "transparency", tk: "aýdyňlyk / açyklyk", partOfSpeech: "noun", exampleEn: "Greater transparency in decision-making is required.", exampleTk: "Karar bermekde has köp aýdyňlyk gerek." }, { en: "accountability", tk: "jogapkärçilik / hasabat beriş", partOfSpeech: "noun", exampleEn: "There must be greater accountability for public funds.", exampleTk: "Jemgyýetçilik maliýesi üçin has köp jogapkärçilik bolmaly." }] } },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "2-nji Bölüm Synagy: Nominalizasiýa",
      questions: [
        { order: 1, questionText: "'Investigate' işliginiň at sözi görnüşi?", questionType: "multiple_choice_grammar", options: ["investigating", "investigative", "investigation", "investigated"], correctIndex: 2 },
        { order: 2, questionText: "'Develop' işliginiň at sözi görnüşi?", questionType: "multiple_choice_grammar", options: ["developer", "developing", "developable", "development"], correctIndex: 3 },
        { order: 3, questionText: "They achieved their goals. → _____their goals was celebrated.", questionType: "multiple_choice_grammar", options: ["Achieving", "To achieve", "The achievement of", "They achieved"], correctIndex: 2 },
        { order: 4, questionText: "'Sustainability' Türkmençede näme?", questionType: "translate_en_tk", options: ["Amatlylyk", "Durnuklylyk / dowamly ösüş", "Tizlik", "Ykdysadyýet"], correctIndex: 1 },
        { order: 5, questionText: "'Possible' sypat → at sözi görnüşi?", questionType: "multiple_choice_grammar", options: ["possibly", "possibleness", "possibility", "possiblity"], correctIndex: 2 },
        { order: 6, questionText: "Akademiki ýazuwda nominalizasiýa näme üçin ulanylýar?", questionType: "translate_en_tk", options: ["Gysgaça ýazmak üçin", "Dili nesnel, resmi we akademiki etmek üçin", "Köp söz ulanmak üçin", "Grammatika synag etmek üçin"], correctIndex: 1 },
        { order: 7, questionText: "'Approve' işliginiň at sözi görnüşi?", questionType: "multiple_choice_grammar", options: ["approval", "approvance", "approvment", "approvation"], correctIndex: 0 },
        { order: 8, questionText: "'Transparency' Türkmençede näme?", questionType: "translate_en_tk", options: ["Görünmezlik", "Aýdyňlyk / açyklyk", "Gizlinlik", "Ýapyklyk"], correctIndex: 1 },
        { order: 9, questionText: "'Refuse' işliginiň at sözi görnüşi?", questionType: "multiple_choice_grammar", options: ["refusal", "refusement", "refusation", "refusing"], correctIndex: 0 },
        { order: 10, questionText: "'Accountability' Türkmençede näme?", questionType: "translate_en_tk", options: ["Hasap", "Jogapkärçilik / hasabat beriş", "Maliýe", "Gözegçilik"], correctIndex: 1 },
      ],
    },
  },

  // ─── UNIT 3: ADVANCED PASSIVE ────────────────────────────────────────────
  {
    unitNumber: 3,
    slug: "adv-unit-03-advanced-passive",
    titleEn: "Advanced Passive Constructions",
    titleTk: "Ösen Passyw Gurluşlar",
    description: "Bu bölümde passyw görnüşiň ösen nusgalary öwrenilýär: double object passive, passive infinitives, passive with reporting verbs we get passive.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "adv-u03-l01-double-object-passive",
        titleEn: "Double Object Passive",
        titleTk: "Iki Obýektli Passyw",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Käbir işlikler iki obýekt alýar (göni we gytaklaýyn). Bu sözlemleri passyw görnüşe geçireniňde iki mümkinçilik bar. 'They gave him a prize.' → 'He was given a prize.' (köplenç) ýa-da 'A prize was given to him.' (has resmi). Şeýle işlikler: give, offer, show, tell, send, teach, award, lend." } },
            { type: "grammar_note", data: { titleTk: "Iki obýektli passyw düzümi", explanationTk: "Aktyw: They gave [Adam] [Zat]. Passyw 1: [Adam] was given [Zat]. Passyw 2: [Zat] was given to [Adam]. Ikinjisi has resmi we az ulanylýar.", pattern: "He was given an award. / An award was presented to him.", examples: [{ en: "She was offered the position of director.", tk: "Oňa direktor wezipesi teklip edildi." }, { en: "The students were shown how to use the equipment.", tk: "Okuwçylara enjamlaryň nähili ulanylýandygy görkezildi." }, { en: "They were told to report to the main office.", tk: "Olara baş ofise habar bermek buýruldy." }] } },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "adv-u03-l02-passive-infinitive-gerund",
        titleEn: "Passive Infinitive & Passive Gerund",
        titleTk: "Passyw Infinitive we Passyw Gerund",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Passyw infinitive: to be + PP. 'She wants to be promoted.' 'The report needs to be finished.' Passyw gerund: being + PP. 'She hates being criticised.' 'He enjoyed being praised by his manager.' Modal + passyw infinitive: 'The form must be signed.' 'The issue should be resolved.'." } },
            { type: "grammar_note", data: { titleTk: "Passyw infinitive we gerund", explanationTk: "Passyw infinitive: to be + PP. Passyw gerund: being + PP. Modal passyw: modal + be + PP.", pattern: "She wants to be promoted. / He hates being ignored. / It must be done now.", examples: [{ en: "The document needs to be approved before the deadline.", tk: "Resminama möhletden öň tassyklanmaly." }, { en: "Nobody likes being told what to do all the time.", tk: "Hiç kim hemişe näme etmelidigini aýdylmagy halamaýar." }, { en: "The proposal is expected to be reviewed next week.", tk: "Teklibiň gelýän hepde seredilmegi garaşylýar." }] } },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "adv-u03-l03-get-passive-advanced",
        titleEn: "Get Passive & Advanced Uses",
        titleTk: "Get Passyw we Ösen Ulanyşlar",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "'Get + PP' passyw görnüşi — has gündelik we hereketi öz içinden gelýän. 'She got promoted' (Ol wezipesi ýokarlandyryldy — öz tagallasy bilen). 'He got fired' (Işden çykaryldy). 'Get' passyw köplenç şowly ýa-da şowsuz netijeleri, duýdansyz hadysalary aňladýar. Resmi ýazuwda ulanylmaýar." } },
            { type: "example_set", data: { titleTk: "Get passyw mysallary", examples: [{ en: "She got promoted after just two years. (Active effort implied.)", tk: "Ol iki ýyldan soň wezipesi ýokarlandyryldy. (Özüniň tagallasy bilen)" }, { en: "My laptop got stolen at the café. (Unexpected negative event.)", tk: "Kafede noutbukymy ogurlap gitdiler. (Duýdansyz ýaramaz hadysa)" }, { en: "He got injured during the match. (Accident.)", tk: "Oýun wagtynda ýaralandy. (Hadysa)" }, { en: "They got selected for the national team. (Achievement.)", tk: "Olar milli topura saýlawyndan geçdiler. (Üstünlik)" }] } },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "3-nji Bölüm Synagy: Ösen Passyw",
      questions: [
        { order: 1, questionText: "She _____ offered the position of manager.", questionType: "multiple_choice_grammar", options: ["has", "was", "is being", "got"], correctIndex: 1 },
        { order: 2, questionText: "The document needs _____ before Monday. (sign)", questionType: "multiple_choice_grammar", options: ["signing", "to be signed", "signed", "be signing"], correctIndex: 1 },
        { order: 3, questionText: "Nobody likes _____ all the time. (criticise)", questionType: "multiple_choice_grammar", options: ["to criticise", "criticising", "being criticised", "to be criticising"], correctIndex: 2 },
        { order: 4, questionText: "She _____ promoted after two years of hard work.", questionType: "multiple_choice_grammar", options: ["was", "got", "has", "had"], correctIndex: 1 },
        { order: 5, questionText: "They _____ told to arrive early.", questionType: "multiple_choice_grammar", options: ["have been", "were", "got", "both were and got"], correctIndex: 3 },
        { order: 6, questionText: "'Get passive' we 'be passive' tapawudy näme?", questionType: "translate_en_tk", options: ["Tapawudy ýok", "Get has gündelik, köplenç öz tagallaly netije ýa-da hadysa", "Be has gündelik", "Get has resmi"], correctIndex: 1 },
        { order: 7, questionText: "The proposal is expected _____ reviewed next week.", questionType: "multiple_choice_grammar", options: ["to be", "being", "to have been", "be"], correctIndex: 0 },
        { order: 8, questionText: "My phone _____ stolen on the bus. (get passive)", questionType: "multiple_choice_grammar", options: ["was", "got", "is", "has been"], correctIndex: 1 },
        { order: 9, questionText: "The students _____ shown how to use the equipment.", questionType: "multiple_choice_grammar", options: ["got", "were", "had", "has"], correctIndex: 1 },
        { order: 10, questionText: "She hates _____ interrupted during meetings.", questionType: "multiple_choice_grammar", options: ["to be", "being", "be", "to being"], correctIndex: 1 },
      ],
    },
  },

  // ─── UNIT 4: ELLIPSIS & SUBSTITUTION ────────────────────────────────────
  {
    unitNumber: 4,
    slug: "adv-unit-04-ellipsis-substitution",
    titleEn: "Ellipsis & Substitution",
    titleTk: "Gaýtalamazlyk — Ellipsis we Çalşyrma",
    description: "Bu bölümde gepleşikde we ýazuwda gaýtalamany nädip azaltmagy öwrenersiňiz: ellipsis (söz düşürmek) we substitution (söz çalşyrmak).",
    lessons: [
      {
        lessonNumber: 1,
        slug: "adv-u04-l01-ellipsis",
        titleEn: "Ellipsis — Omitting Words",
        titleTk: "Ellipsis — Sözleri Düşürmek",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Ellipsis — eýýäm düşnükli bolan sözleri gaýtalamakdan saklanmak üçin düşürmek. 'She can play the guitar and [she can play] the piano too.' → 'She can play the guitar and piano too.' Gepleşikde hem köp ulanylýar: 'Can you help?' 'I'll try [to help].' Ellipisin dürli görnüşleri: verbal, clausal, noun phrase." } },
            { type: "grammar_note", data: { titleTk: "Ellipsis görnüşleri", explanationTk: "Noun phrase ellipsis: I'd like a large coffee and she'd like a small [coffee]. Verbal ellipsis: A: Can you swim? B: I can [swim]. Clausal: A: Will you come? B: If I can [come].", pattern: "A: Are you coming? B: I hope [to come] so.", examples: [{ en: "A: Have you finished? B: Not yet [finished].", tk: "A: Tamamladyňyzmy? B: Heniz [tamamlamadym]." }, { en: "She wanted to help and [she] tried [to help] her best.", tk: "Ol kömek etmek isledi we elinden gelenini etdi." }, { en: "A: Do you mind waiting? B: Not at all [do I mind].", tk: "A: Garaşmaga närazymy? B: Asla [räzi däl dälim]." }] } },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "adv-u04-l02-substitution",
        titleEn: "Substitution — Replacing Words",
        titleTk: "Substitution — Sözleri Çalşyrmak",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Substitution — öňki agzalan zady gaýtalamak ýerine başga söz ulanmak. 'So' işlik çalşyryşy hökmünde: 'I think so.' (= I think it is true). 'Do so': 'If you need to apply, please do so online.' 'One/ones' at sözi çalşyryşy: 'I'd like the red one.' 'Not' inkär üçin: 'Is she coming? I hope not.'" } },
            { type: "grammar_note", data: { titleTk: "So / Do so / One / Not — substitution", explanationTk: "so = that + sözlem (tassyklama çalşyrma). not = that + inkär sözlem. do so = bir hereketden soň beýleki şahs şol hereketI gaýtalaýar. one/ones = öňki at sözi.", pattern: "A: Will it work? B: I believe so. / If you need to register, please do so here. / I prefer the blue one.", examples: [{ en: "A: Is he guilty? B: I'm afraid so.", tk: "A: Ol günäkärmi? B: Gynansam-da, hawa." }, { en: "Passengers wishing to upgrade may do so at the desk.", tk: "Synpy ýokarlatmak isleýän ýolagçylar resmihana ýüz tutup edip bilerler." }, { en: "I've tried the red and the blue — I prefer the blue one.", tk: "Gyzylyny we gögüni synap gördüm — gögüni halaýaryn." }] } },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "adv-u04-l03-fronting-discourse",
        titleEn: "Fronting for Emphasis & Discourse",
        titleTk: "Güýçlendirmek üçin Öňe Çykarmak",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Öňe çykarmak (fronting) — adaty yerinden başga bir sözlem bölümini sözüň başyna almak. 'The food I liked, but the service was terrible.' (food-y öne çykarmak). 'Never have I been so embarrassed.' Şeýle hem 'What'-clause bilen: 'What surprised me most was his reaction.' Bu gurluş C1 derejeli ýazuwda we çykyşda ünsi çekmek üçin ulanylýar." } },
            { type: "example_set", data: { titleTk: "Öňe çykarmak mysallary", examples: [{ en: "The design I love, but the price is too high.", tk: "Dizaýny halaýaryn, ýöne bahasy gaty gymmat." }, { en: "What he said next truly shocked everyone.", tk: "Onuň indiki aýdan sözi hemmäni hakykatdan geňirgetdi." }, { en: "This approach, many experts have argued, is the most cost-effective.", tk: "Bu çemeleşme, köp hünärmenler öňe sürdüler, iň amatly çykdajy gurluşdyr." }, { en: "Hardly had we arrived when the problems started.", tk: "Ýetip barşymyza meseleler başlady." }] } },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "4-nji Bölüm Synagy: Ellipsis we Substitution",
      questions: [
        { order: 1, questionText: "A: Will he pass? B: I think _____.", questionType: "multiple_choice_grammar", options: ["it", "that", "so", "yes"], correctIndex: 2 },
        { order: 2, questionText: "I'd like the large coffee and she'd like the small _____.", questionType: "multiple_choice_grammar", options: ["coffee", "one", "it", "that"], correctIndex: 1 },
        { order: 3, questionText: "A: Is she coming? B: I hope _____.", questionType: "multiple_choice_grammar", options: ["so", "not", "she", "A or B"], correctIndex: 3 },
        { order: 4, questionText: "Passengers wishing to change seats may _____ at the desk.", questionType: "multiple_choice_grammar", options: ["do so", "so do", "do it", "make so"], correctIndex: 0 },
        { order: 5, questionText: "'Ellipsis' näme?", questionType: "translate_en_tk", options: ["Söz goşmak", "Düşnükli sözleri gaýtalamadan saklanmak", "Sözleri çalşyrmak", "Söz tertibini üýtgetmek"], correctIndex: 1 },
        { order: 6, questionText: "The design _____ love, but the price is too high. (fronting)", questionType: "multiple_choice_grammar", options: ["I", "which I", "what I", "that I"], correctIndex: 0 },
        { order: 7, questionText: "A: Do you mind waiting? B: Not _____.", questionType: "multiple_choice_grammar", options: ["at all", "really", "indeed", "so"], correctIndex: 0 },
        { order: 8, questionText: "'Do so' näme üçin ulanylýar?", questionType: "translate_en_tk", options: ["Güýçlendirmek üçin", "Öňki hereketI gaýtalamadan saklanmak üçin", "Sorag bermek üçin", "Inkär etmek üçin"], correctIndex: 1 },
        { order: 9, questionText: "A: Is it true? B: I'm afraid _____.", questionType: "multiple_choice_grammar", options: ["it is", "so", "not", "B or C"], correctIndex: 3 },
        { order: 10, questionText: "'Fronting' näme üçin ulanylýar?", questionType: "translate_en_tk", options: ["Gaýtalamany azaltmak üçin", "Bir bölümi güýçlendirmek ýa-da ünsi çekmek üçin", "Sorag bermek üçin", "Passyw etmek üçin"], correctIndex: 1 },
      ],
    },
  },

  // ─── UNIT 5: IDIOMATIC LANGUAGE ─────────────────────────────────────────
  {
    unitNumber: 5,
    slug: "adv-unit-05-idiomatic-language",
    titleEn: "Idiomatic Language & Fixed Expressions",
    titleTk: "Idiomatik Dil we Durnukly Sözlemler",
    description: "Bu bölümde C1 derejesinde zerur bolan idiomlar, proverbs (nakyllar) we durnukly sözlemler öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "adv-u05-l01-advanced-idioms",
        titleEn: "Advanced Idioms in Context",
        titleTk: "Kontekstde Ösen Idiomlar",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "C1 derejesinde idiomlar diňe aýratyn bilmek ýeterlik däl — olary dogry kontekstde ulanmak möhüm. Her idiomyň ulanylýan ýeri (resmi/gündelik), nuansa we sözüň düzümi bilmeli. 'To sit on the fence' — bir tarap tutmak. 'To burn bridges' — yza öwrülmezlik. 'To have a finger in every pie' — her ýerde eli bar." } },
            { type: "vocabulary_list", data: { titleTk: "Ösen idiomlar", words: [{ en: "sit on the fence", tk: "bir tarapy tutmamak / bitarap galmak", partOfSpeech: "verb", exampleEn: "Politicians often sit on the fence on controversial issues.", exampleTk: "Syýasatçylar köplenç jedelli meselelerde bitarap galýarlar." }, { en: "burn bridges", tk: "yza öwrülmezligi üçin köprüleri ýakmak", partOfSpeech: "verb", exampleEn: "Don't burn your bridges — you might need them later.", exampleTk: "Köprüleriňi ýakma — soňra gerek bolup biler." }, { en: "the tip of the iceberg", tk: "aýsberg ujy — diňe görünýän bölegi", partOfSpeech: "noun", exampleEn: "This scandal is just the tip of the iceberg.", exampleTk: "Bu skandal diňe aýsberg ujy." }, { en: "put all your eggs in one basket", tk: "ähli zady bir mümkinçilige garaşmak", partOfSpeech: "verb", exampleEn: "Don't put all your eggs in one basket — diversify.", exampleTk: "Ähli zady bir sepede goýma — dürçeşit et." }, { en: "a blessing in disguise", tk: "gizlin bagt — başda ýaramaz görünýän, ýöne soňra peýdaly", partOfSpeech: "noun", exampleEn: "Losing that job was a blessing in disguise.", exampleTk: "Şol işden çykmaklyk gizlin bagtdy." }, { en: "see eye to eye", tk: "bir pikirdä gelmek / ylalaşmak", partOfSpeech: "verb", exampleEn: "We don't always see eye to eye, but we respect each other.", exampleTk: "Hemişe bir pikirdä gelmäýäris, ýöne biri-birimizi sylaýarys." }] } },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "adv-u05-l02-proverbs-sayings",
        titleEn: "Proverbs & Sayings",
        titleTk: "Nakyllar we Aýtgylar",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Nakyllar — köp ýyllyk tejribeden gelip çykan dil jöwherler. Iňlisçede nakyllar çakyr gepleşiklerde, ýazuwda we çykyşlarda ulanylýar. Ýöne ähli nakyllar hemişe dogry däl — käte garşylykly nakyllar hem ulanylýar: 'Look before you leap' (Seresap bol) — ýöne 'He who hesitates is lost' (Ikilenç galmak zyýanly) hem bar." } },
            { type: "vocabulary_list", data: { titleTk: "Iň köp ulanylýan Iňlis nakyllary", words: [{ en: "Actions speak louder than words", tk: "Işler sözden güýçlidir", partOfSpeech: "noun", exampleEn: "Stop promising and start doing — actions speak louder than words.", exampleTk: "Wada bermegi bes et we işe başla — işler sözden güýçlidir." }, { en: "Every cloud has a silver lining", tk: "Her garaňky bulutda güneş nury gizlenýär", partOfSpeech: "noun", exampleEn: "The project failed, but every cloud has a silver lining — we learned a lot.", exampleTk: "Taslama şowsuz çykdy, ýöne her kynçylykda gowulyk bar — köp öwrendik." }, { en: "The early bird catches the worm", tk: "Ir turan Taňra ýakyn", partOfSpeech: "noun", exampleEn: "She always arrives first — the early bird catches the worm.", exampleTk: "Ol hemişe ilki gelýär — ir turan Taňra ýakyn." }, { en: "Don't judge a book by its cover", tk: "Ilkinji görünüşe baha berme", partOfSpeech: "noun", exampleEn: "He seemed quiet at first, but don't judge a book by its cover.", exampleTk: "Ilki sessiz göründi, ýöne görünüşe baha berme." }] } },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "adv-u05-l03-binomial-pairs",
        titleEn: "Binomial Pairs & Fixed Collocations",
        titleTk: "Jübüt Sözler we Durnukly Birleşmeler",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Binomial pairs — biri-biri bilen hemişe bile gidýän söz jübütleri. Tertibini üýtgedip bolmaýar: 'bread and butter' (çörek we mesge — çörek we mesge, mesge we çörek däl). 'Black and white', 'trial and error', 'dos and don'ts', 'pros and cons'." } },
            { type: "vocabulary_list", data: { titleTk: "Iňlis dilindäki jübüt sözler", words: [{ en: "pros and cons", tk: "artykmaçlyklar we kemçilikler", partOfSpeech: "noun", exampleEn: "We need to weigh up the pros and cons before deciding.", exampleTk: "Karar bermezden öň artykmaçlyklary we kemçilikleri deňeşdirmeli." }, { en: "trial and error", tk: "synap görmek arkaly öwrenmek", partOfSpeech: "noun", exampleEn: "We found the solution through trial and error.", exampleTk: "Çözgüdi synap görmek arkaly tapdyk." }, { en: "black and white", tk: "gara we ak / aýdyň we düşnükli", partOfSpeech: "adjective", exampleEn: "The rules are not always black and white.", exampleTk: "Düzgünler hemişe aýdyň we düşnükli däl." }, { en: "give and take", tk: "biri-birine ýol bermek / özara ylalaşmak", partOfSpeech: "noun", exampleEn: "A good relationship requires give and take.", exampleTk: "Gowy gatnaşyk özara ýol bermegi talap edýär." }] } },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "5-nji Bölüm Synagy: Idiomatik Dil",
      questions: [
        { order: 1, questionText: "'Sit on the fence' Türkmençede näme?", questionType: "translate_en_tk", options: ["Hatarda oturmak", "Bitarap galmak / bir tarapy tutmamak", "Dynç almak", "Garaşmak"], correctIndex: 1 },
        { order: 2, questionText: "'The tip of the iceberg' Türkmençede näme?", questionType: "translate_en_tk", options: ["Buzuň ujy (hakyky)", "Meseläniň diňe görünýän kiçi bölegi", "Iň möhüm zat", "Soňky netije"], correctIndex: 1 },
        { order: 3, questionText: "'A blessing in disguise' Türkmençede näme?", questionType: "translate_en_tk", options: ["Gizlin howp", "Başda ýaramaz görünýän, soňra peýdaly bolan zat", "Galp bagt", "Garaşylmadyk kynçylyk"], correctIndex: 1 },
        { order: 4, questionText: "'Actions speak louder than words' Türkmençede näme?", questionType: "translate_en_tk", options: ["Sözler güýçli", "Işler sözden güýçlidir", "Hereketsiz geple", "Işden öň geplemeli"], correctIndex: 1 },
        { order: 5, questionText: "Don't _____ all your eggs in one basket.", questionType: "multiple_choice_grammar", options: ["place", "put", "keep", "hold"], correctIndex: 1 },
        { order: 6, questionText: "'Every cloud has a silver lining' Türkmençede näme?", questionType: "translate_en_tk", options: ["Bulutlar ýagmyr getirýär", "Her kynçylykda gowulyk bar", "Howa üýtgeýär", "Bulutlar gümüş"], correctIndex: 1 },
        { order: 7, questionText: "'Pros and cons' Türkmençede näme?", questionType: "translate_en_tk", options: ["Gowy we ýaramaz adamlar", "Artykmaçlyklar we kemçilikler", "Meseleler we çözgütler", "Oňaýly we oňaýsyz"], correctIndex: 1 },
        { order: 8, questionText: "'Trial and error' Türkmençede näme?", questionType: "translate_en_tk", options: ["Sud we ýalňyşlyk", "Synap görmek arkaly öwrenmek", "Synag we çözgüt", "Ýalňyşsyz synag"], correctIndex: 1 },
        { order: 9, questionText: "Don't _____ bridges — you might need them in the future.", questionType: "multiple_choice_grammar", options: ["break", "cut", "burn", "destroy"], correctIndex: 2 },
        { order: 10, questionText: "'Give and take' Türkmençede näme?", questionType: "translate_en_tk", options: ["Bermek we almak (hakyky)", "Özara ýol bermek / ylalaşmak", "Satmak we satyn almak", "Kömek etmek"], correctIndex: 1 },
      ],
    },
  },

  // ─── UNIT 6: NUANCE IN MEANING ──────────────────────────────────────────
  {
    unitNumber: 6,
    slug: "adv-unit-06-nuance-meaning",
    titleEn: "Nuance in Meaning",
    titleTk: "Manynyň Inçelikleri",
    description: "Bu bölümde meňzeş sözleriň we gurluşlaryň inçe many tapawutlary öwrenilýär: almost/nearly/hardly, such/so, whatever/whoever, used to/would, still/yet/already.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "adv-u06-l01-near-synonyms",
        titleEn: "Near-Synonyms — Subtle Differences",
        titleTk: "Meňzeş Sözleriň Inçe Tapawutlary",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "C1 derejesinde sözleriň takyk manysyny we ulanylýan ýerini bilmek möhüm. 'Almost' we 'nearly' — meňzeş, ýöne 'almost' has köp ulanylýar negatiw kontekstlerde: 'almost never', 'almost no one'. 'Hardly' we 'scarcely' — 'almost not' manysyny berýär we negatiw söz: 'I hardly slept' = Az ýatdym. 'Such' we 'so' — güýçlendirme üçin, ýöne tapawutly gurluş bilen." } },
            { type: "grammar_note", data: { titleTk: "Almost/Nearly/Hardly we Such/So tapawudy", explanationTk: "Almost = nearly (ýöne almost never/almost no one — diňe almost). Hardly/scarcely = almost not (negatiw many). Such + a/an + sypat + at sözi. So + sypat (at sözi bolmasa). Such + köplük/sanagsyz at.", pattern: "I almost finished. / I hardly slept. / It was such a good film! / It was so good!", examples: [{ en: "I was so tired that I fell asleep immediately.", tk: "Gaty ýadaw bolupdym, derrew ýatdym." }, { en: "It was such a beautiful sunset that we all stopped to watch.", tk: "Günbatar şeýle owadandygy üçin, hemmämiz seredemek üçin durduk." }, { en: "I had hardly arrived when the meeting started.", tk: "Ýetip barşyma ýygnak başlady." }] } },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "adv-u06-l02-whatever-whoever-however",
        titleEn: "Whatever, Whoever, However & Compound Relatives",
        titleTk: "Whatever, Whoever, However we Düzme Anyklaýjylar",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "'Whatever/whoever/however/wherever/whenever/whichever' — hemme şertlerde, çäklendirme bolmazdan many berýär. 'Whatever happens, I will support you.' (Näme bolsa-da...). 'Whoever calls, tell them I'm busy.' (Kim jaň etse-de...). 'However hard she tries, she never seems satisfied.' (Näçe çalyşsa-da...)" } },
            { type: "grammar_note", data: { titleTk: "Düzme anyklaýjy sözler", explanationTk: "whatever = no matter what. whoever = no matter who. however + sypat/zarf = no matter how. wherever = no matter where. whenever = no matter when. whichever = no matter which.", pattern: "Whatever you decide, I'll respect it. / However tired you are, you must finish.", examples: [{ en: "Whatever the outcome, we must remain professional.", tk: "Netije näme bolsa-da, hünärmençiligimizi saklamalydyrys." }, { en: "Whoever is responsible must be held accountable.", tk: "Kim jogapkärdigine garamazdan, jogapkärçilik çekmelidir." }, { en: "However difficult the task, they never give up.", tk: "Iş näçe kyn bolsa-da, olar hiç wagt el çekmeýärler." }] } },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "adv-u06-l03-used-to-would-still-yet",
        titleEn: "Used to vs Would & Still/Yet/Already",
        titleTk: "Used to we Would tapawudy + Still/Yet/Already",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "'Used to' — geçmişdäki hemişelik ýagdaý ýa-da endik (häzir ýok). 'Would' — diňe geçmişdäki gaýtalanyp bolan herekete ulanylýar (ýagdaý üçin däl). 'Still' — garaşylandan has uzak dowam edýän. 'Yet' — tamamlanmadyk (inkär/sorag). 'Already' — garaşylandan ir bolan." } },
            { type: "grammar_note", data: { titleTk: "Used to we Would tapawudy", explanationTk: "Used to + işlik: ýagdaý (state) we endik ikisi üçin hem. Would + işlik: diňe geýtalanyp bolan hereket üçin (ýagdaý üçin däl — 'I would live there' nädogry 'I used to live there' dogry).", pattern: "I used to be shy. (ýagdaý — used to, would DÄLI) / I would walk to school every day. (gaýtalanan hereket — ikisi hem)", examples: [{ en: "I used to be afraid of the dark. (State — only used to)", tk: "Men garaňkydan gorkarydym. (Ýagdaý — diňe used to)" }, { en: "Every evening, she would read to her children. (Repeated action — would OK)", tk: "Her agşam çagalaryna okaberýärdi. (Gaýtalanan hereket — would hem bolýar)" }, { en: "Are you still waiting? / Haven't you finished yet? / She's already left.", tk: "Heniz garaşyp dursuňyzmy? / Heniz tamamlamadyňyzmy? / Ol eýýäm gitdi." }] } },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "6-njy Bölüm Synagy: Manylaryň Inçelikleri",
      questions: [
        { order: 1, questionText: "I _____ slept last night — I'm exhausted.", questionType: "multiple_choice_grammar", options: ["almost not", "nearly not", "hardly", "barely not"], correctIndex: 2 },
        { order: 2, questionText: "It was _____ an interesting book that I read it twice.", questionType: "multiple_choice_grammar", options: ["so", "such", "very", "too"], correctIndex: 1 },
        { order: 3, questionText: "The film was _____ good that we recommended it to everyone.", questionType: "multiple_choice_grammar", options: ["such", "such a", "so", "too"], correctIndex: 2 },
        { order: 4, questionText: "_____ happens, I will always support you.", questionType: "multiple_choice_grammar", options: ["Whenever", "However", "Whatever", "Whoever"], correctIndex: 2 },
        { order: 5, questionText: "_____ difficult the problem, they find a solution.", questionType: "multiple_choice_grammar", options: ["Whatever", "Whoever", "However", "Wherever"], correctIndex: 2 },
        { order: 6, questionText: "I _____ be very shy when I was a child. (ýagdaý)", questionType: "multiple_choice_grammar", options: ["would", "used to", "was used to", "had"], correctIndex: 1 },
        { order: 7, questionText: "Every morning, she _____ walk to work. (gaýtalanan hereket)", questionType: "multiple_choice_grammar", options: ["used to", "would", "both are correct", "was used to"], correctIndex: 2 },
        { order: 8, questionText: "Are you _____ waiting for the results?", questionType: "multiple_choice_grammar", options: ["yet", "already", "still", "just"], correctIndex: 2 },
        { order: 9, questionText: "'I used to live there' we 'I would live there' tapawudy?", questionType: "translate_en_tk", options: ["Tapawudy ýok", "Would ýagdaý üçin ulanylmaýar — diňe used to", "Used to hereket üçin ulanylmaýar", "Ikisi hem ýalňyş"], correctIndex: 1 },
        { order: 10, questionText: "'Whatever the outcome' Türkmençede näme?", questionType: "translate_en_tk", options: ["Netije nähili bolsa", "Netije näme bolsa-da", "Netijede", "Netijesiz"], correctIndex: 1 },
      ],
    },
  },

  // ─── UNIT 7: COMPLEX ARGUMENT ───────────────────────────────────────────
  {
    unitNumber: 7,
    slug: "adv-unit-07-complex-argument",
    titleEn: "Building Complex Arguments",
    titleTk: "Çylşyrymly Delil we Pikir Gurmak",
    description: "Bu bölümde formal ýazuwda we çykyşlarda güýçli we çylşyrymly delil gurmagy öwrenersiňiz: garşy pikiri kabul etmek, ony ret etmek we öz pozisiýaňy saklamak.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "adv-u07-l01-thesis-argument",
        titleEn: "Thesis, Argument & Counter-Argument",
        titleTk: "Tezis, Delil we Garşy Delil",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Akademiki ýazuwda we resmi çykyşlarda güýçli delil şu bölümlerden durýar: 1) Tezis (öz pikiriňi aýdyň beýan etmek). 2) Deliller we mysallar. 3) Garşy pikirleri kabul etmek (concession). 4) Garşy pikirleri ret etmek. 5) Netije. Bu gurluş 'PEEL' ýa-da 'TEEL' usuly bilen hem öwredilýär." } },
            { type: "vocabulary_list", data: { titleTk: "Delil gurýan sözlemler", words: [{ en: "it could be argued that", tk: "... diýip delil getirmek mümkin", partOfSpeech: "adverb", exampleEn: "It could be argued that remote work increases productivity.", exampleTk: "Uzakdan işlemegiň öndürijiligi artdyrýandygy barada delil getirmek mümkin." }, { en: "while it is true that... it is also the case that", tk: "... dogry bolsa-da, şeýle hem ... ýagdaý bar", partOfSpeech: "conjunction", exampleEn: "While it is true that technology creates jobs, it is also the case that it eliminates others.", exampleTk: "Tehnologiýanyň iş ýerleri döredýändigi dogry bolsa-da, beýlekileri hem ýok edýänligi hem hakykatdyr." }, { en: "the evidence suggests / points to", tk: "deliller görkezýär / ... tarapa ünüs çekýär", partOfSpeech: "verb", exampleEn: "The evidence points to a clear need for reform.", exampleTk: "Deliller özgertmäniň aýdyň zerurlygy barada ünüs çekýär." }, { en: "far from + -ing", tk: "... bolmakdan daşda / tersine", partOfSpeech: "adverb", exampleEn: "Far from solving the problem, this approach has made it worse.", exampleTk: "Bu çemeleşme meseläni çözmekden daşda, ony has erbetleşdirdi." }] } },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "adv-u07-l02-concession-rebuttal",
        titleEn: "Concession & Rebuttal",
        titleTk: "Garşy Pikiri Kabul etmek we Ret etmek",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Gowy delil garşy pikirleri hem kabul edip, soňra olary ret edýär. Bu 'düýpli düşünýärin' yz täsir galdyrýar. Kabul etmek: 'Admittedly...', 'It is true that...', 'One cannot deny that...'. Ret etmek: 'However, this overlooks...', 'Nevertheless, the fact remains that...', 'This argument fails to account for...'." } },
            { type: "example_set", data: { titleTk: "Kabul etmek we ret etmek mysallary", examples: [{ en: "Admittedly, nuclear energy carries risks. Nevertheless, compared to fossil fuels, its carbon footprint is significantly lower.", tk: "Dogrusy, ýadro energiýasy töwekgelçilikleri çekýär. Şeýle-de bolsa, çig ýangyçlar bilen deňeşdirilende, onuň uglerod yzy düýpli az." }, { en: "It is true that social media connects people. However, this argument fails to account for its negative effects on mental health.", tk: "Sosial medianyň adamlary birleşdirýändigi dogrudyr. Ýöne bu delil onuň akyl saglygy üçin ýaramaz täsirlerini göz öňünde tutmaýar." }, { en: "One cannot deny that economic growth brings benefits. That said, uncontrolled growth can also cause environmental damage.", tk: "Ykdysady ösüşiň peýda getirýändigini inkär etmek mümkin däl. Şeýle bolsa-da, gözegçiliksiz ösüş daşky gurşaw zyýanyna hem sebäp bolup biler." }] } },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "adv-u07-l03-academic-style",
        titleEn: "Academic Writing Style",
        titleTk: "Akademiki Ýazyş Stili",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Akademiki stilin özellikleri: 1) Şahsy dällik (passyw, 3-nji şahs). 2) Ätiýaçlylyk (hedging). 3) Takyklyk (anyk sözler). 4) Resmilik (gysaltmasyz). 5) Delillere esaslanma. 6) Birleşim (cohesion). Akademiki ýazuwda 'I think' ýerine 'The evidence suggests', 'good' ýerine 'significant/substantial/considerable' ulanylýar." } },
            { type: "vocabulary_list", data: { titleTk: "Akademiki ýazuwda ulanylýan sözler", words: [{ en: "substantial / considerable", tk: "uly / ep-esli / düýpli", partOfSpeech: "adjective", exampleEn: "There has been a substantial increase in applications.", exampleTk: "Arzalarda düýpli artma boldy." }, { en: "fundamental / pivotal", tk: "düýpli / esasy / örän möhüm", partOfSpeech: "adjective", exampleEn: "This is a pivotal moment in the country's history.", exampleTk: "Bu ýurduň taryhyndaky örän möhüm pursat." }, { en: "examine / investigate / explore", tk: "seredip çykmak / derňemek / öwrenmek", partOfSpeech: "verb", exampleEn: "This paper explores the relationship between education and income.", exampleTk: "Bu makala bilim bilen girdeji arasynda baglanyşygy öwrenýär." }, { en: "framework / paradigm", tk: "çerçewe / pikir ulgamy / nusgawy çemeleşme", partOfSpeech: "noun", exampleEn: "A new theoretical framework is needed.", exampleTk: "Täze teoriýa çerçewesi gerek." }] } },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "7-nji Bölüm Synagy: Çylşyrymly Delil",
      questions: [
        { order: 1, questionText: "'It could be argued that' Türkmençede näme?", questionType: "translate_en_tk", options: ["Hökman şeýledir", "... diýip delil getirmek mümkin", "Delil ýok", "Subut edildi"], correctIndex: 1 },
        { order: 2, questionText: "'Far from solving the problem, this made it worse.' 'Far from' nämäni aňladýar?", questionType: "translate_en_tk", options: ["Uzakda", "Tersine / ... bolmakdan daşda", "Ýakynda", "Häzir"], correctIndex: 1 },
        { order: 3, questionText: "Admittedly, it has risks. _____, the benefits outweigh them.", questionType: "multiple_choice_grammar", options: ["Furthermore", "Additionally", "Nevertheless", "Similarly"], correctIndex: 2 },
        { order: 4, questionText: "'Substantial' Türkmençede näme?", questionType: "translate_en_tk", options: ["Kiçi", "Düýpli / ep-esli", "Adaty", "Az"], correctIndex: 1 },
        { order: 5, questionText: "This argument fails to _____ for the social costs.", questionType: "multiple_choice_grammar", options: ["account", "consider", "include", "take"], correctIndex: 0 },
        { order: 6, questionText: "'One cannot deny that' Türkmençede näme?", questionType: "translate_en_tk", options: ["Inkär etmeli", "Inkär etmek mümkin däl", "Hemme inkär edýär", "Asla inkär ýok"], correctIndex: 1 },
        { order: 7, questionText: "'Pivotal' Türkmençede näme?", questionType: "translate_en_tk", options: ["Adaty", "Örän möhüm / merkezi", "Kiçijik", "Wagtlaýyn"], correctIndex: 1 },
        { order: 8, questionText: "The evidence _____ to a clear need for change.", questionType: "multiple_choice_grammar", options: ["suggests", "points", "shows", "all correct"], correctIndex: 3 },
        { order: 9, questionText: "'Paradigm' Türkmençede näme?", questionType: "translate_en_tk", options: ["Meseläniň çözgüdi", "Nusgawy çemeleşme / pikir ulgamy", "Synaghana", "Barlag usuly"], correctIndex: 1 },
        { order: 10, questionText: "Gowy akademiki deliliň tapgyrlary nähili?", questionType: "translate_en_tk", options: ["Diňe öz pikirini aýtmak", "Tezis + deliller + garşy pikiri kabul etmek + ret etmek + netije", "Diňe sorag bermek", "Diňe mysallar getirmek"], correctIndex: 1 },
      ],
    },
  },

  // ─── UNIT 8: REGISTER & STYLISTICS ─────────────────────────────────────
  {
    unitNumber: 8,
    slug: "adv-unit-08-register-stylistics",
    titleEn: "Register, Tone & Stylistics",
    titleTk: "Dil Derejesi, Äheň we Stilistika",
    description: "Bu bölümde dürli kontekstlerde dogry dil derejesini saýlamagy, äheňi düzmegi we stilistik gurallary ulanmagy öwrenersiňiz.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "adv-u08-l01-tone-voice",
        titleEn: "Tone & Voice in Writing",
        titleTk: "Ýazuwda Äheň we Ses",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Äheň (tone) — ýazyjynyň temä we okyjyya bolan gatnaşygy. Resmi çykyşda: nesnel, deň, resmi. Maslahat hatynda: ýyly, höweslendiriji. Tankyt ýazuwynda: analitik, takyk. Äheňi düzmek üçin söz saýlamak, sözlem uzynlygy we grammatika gurluşlary möhüm." } },
            { type: "vocabulary_list", data: { titleTk: "Äheň we ses aňladýan sözler", words: [{ en: "assertive", tk: "ynamly / berk / öňe çykyjy", partOfSpeech: "adjective", exampleEn: "An assertive tone conveys confidence.", exampleTk: "Ynamly äheň ynam bildirýär." }, { en: "tentative", tk: "ätiýaçly / çakdaş / nä belli", partOfSpeech: "adjective", exampleEn: "A tentative tone is appropriate in uncertain situations.", exampleTk: "Nä belli ýagdaýlarda ätiýaçly äheň laýykdyr." }, { en: "conciliatory", tk: "ýakynlaşyjy / ýumuşadyjy", partOfSpeech: "adjective", exampleEn: "A conciliatory tone helps resolve conflicts.", exampleTk: "Ýumuşadyjy äheň gapma-garşylyklary çözmäge kömek edýär." }, { en: "authoritative", tk: "ygtyýarly / berk / ygtybarly", partOfSpeech: "adjective", exampleEn: "An authoritative tone commands respect.", exampleTk: "Berk äheň hormat gazanýar." }] } },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "adv-u08-l02-rhetorical-devices",
        titleEn: "Rhetorical Devices",
        titleTk: "Gürrüň Gurallary — Retoriki Usullar",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Retoriki usullar çykyşyňyzy we ýazuwyňyzy has güýçli we täsirli edýär. Esasy usullar: 1) Trikolon — üç bölümden ybarat gurluş. 2) Anafora — sözüň başynda gaýtalama. 3) Rhetoriki sorag. 4) Meňzetme (simile/metaphor). 5) Kontrast." } },
            { type: "example_set", data: { titleTk: "Retoriki usullaryň mysallary", examples: [{ en: "Tricolon: We came, we saw, we conquered. / Education develops the mind, strengthens the character, and enriches the soul.", tk: "Trikolon: Geldik, gördük, ýeňdik. / Bilim pikri ösdürýär, häsiýeti berkidýär we ruhy baýlaşdyrýar." }, { en: "Anaphora: We will fight on the beaches, we will fight on the landing grounds, we will fight in the fields.", tk: "Anafora: Kenarlarda söweşeris, gonuş meýdanlarynda söweşeris, meýdanlarda söweşeris." }, { en: "Rhetorical question: If not us, then who? If not now, then when?", tk: "Rhetoriki sorag: Biz bolmasak, kim? Häzir bolmasa, haçan?" }] } },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "adv-u08-l03-creative-descriptive",
        titleEn: "Creative & Descriptive Language",
        titleTk: "Döredijilik we Beýan Ediji Dil",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Döredijilik ýazuwynda waka, ýer we duýgy beýan edilende dil janly bolmaly. Synyň deregine görkezme (show don't tell): 'She was angry' däl-de 'Her hands trembled as she slammed the door.' Duýgy sözi ýerine beýan; ýöne aşa çylşyrymly dil hem ýazmaz." } },
            { type: "vocabulary_list", data: { titleTk: "Beýan ediji dil üçin sözler", words: [{ en: "shimmer / gleam / glisten", tk: "lowurdamak / parlak / parlamak", partOfSpeech: "verb", exampleEn: "The lake shimmered in the early morning light.", exampleTk: "Köl irden şöhlesinde lowurdady." }, { en: "murmur / whisper / roar", tk: "pyşyrdamak / pyşyrdamak / güwlemek", partOfSpeech: "verb", exampleEn: "The crowd murmured with anticipation.", exampleTk: "Märeke beklentiden pyşyrdady." }, { en: "loom / tower / dominate", tk: "uly we gorkuzmak / belentlemek / agalyk etmek", partOfSpeech: "verb", exampleEn: "The mountains loomed in the distance.", tk: "Uzakda daglar uly göründi." }, { en: "tranquil / serene / desolate", tk: "asuda / rahat / boş we garaňky", partOfSpeech: "adjective", exampleEn: "The village was tranquil in the early morning.", exampleTk: "Obajyk irden asudady." }] } },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "8-nji Bölüm Synagy: Dil Derejesi we Stilistika",
      questions: [
        { order: 1, questionText: "'Assertive' Türkmençede näme?", questionType: "translate_en_tk", options: ["Çekinjeň", "Ynamly / berk / öňe çykyjy", "Ätiýaçly", "Ýumuşak"], correctIndex: 1 },
        { order: 2, questionText: "'Tentative' Türkmençede näme?", questionType: "translate_en_tk", options: ["Berk", "Ätiýaçly / nä belli", "Ynamly", "Jogapkär"], correctIndex: 1 },
        { order: 3, questionText: "Trikolon näme?", questionType: "translate_en_tk", options: ["Iki bölümli gurluş", "Üç bölümden ybarat güýçli gurluş", "Sorag bermek usuly", "Passyw görnüş"], correctIndex: 1 },
        { order: 4, questionText: "Anafora näme?", questionType: "translate_en_tk", options: ["Sözüň ahyrynda gaýtalama", "Sözüň başynda gaýtalama", "Sorag bermek", "Söz tertibini üýtgetmek"], correctIndex: 1 },
        { order: 5, questionText: "'If not us, who? If not now, when?' bu haýsy retoriki gurluş?", questionType: "translate_en_tk", options: ["Trikolon", "Anafora", "Rhetoriki sorag", "Meňzetme"], correctIndex: 2 },
        { order: 6, questionText: "'Conciliatory tone' Türkmençede näme?", questionType: "translate_en_tk", options: ["Berk äheň", "Tankytlaýjy äheň", "Ýumuşadyjy / ýakynlaşyjy äheň", "Gutardyjy äheň"], correctIndex: 2 },
        { order: 7, questionText: "'Show don't tell' ýazuw prinsipinde 'She was angry' ýerine nähili ýazmaly?", questionType: "translate_en_tk", options: ["She was very, very angry", "Her hands trembled as she slammed the door", "I think she was angry", "She felt angry feelings"], correctIndex: 1 },
        { order: 8, questionText: "'Shimmer' Türkmençede näme?", questionType: "translate_en_tk", options: ["Titremek", "Lowurdamak / parlamak", "Gymyldamak", "Gitmek"], correctIndex: 1 },
        { order: 9, questionText: "'Tranquil' Türkmençede näme?", questionType: "translate_en_tk", options: ["Gürültili", "Garaňky", "Asuda / rahat", "Uly"], correctIndex: 2 },
        { order: 10, questionText: "Retoriki usullar näme üçin ulanylýar?", questionType: "translate_en_tk", options: ["Grammatiki kadalara laýyk gelmek üçin", "Çykyşy we ýazuwy has güýçli we täsirli etmek üçin", "Gysgaça ýazmak üçin", "Ýalňyşlyk goýbermezlik üçin"], correctIndex: 1 },
      ],
    },
  },

  // ─── UNIT 9: ADVANCED VOCABULARY IN USE ─────────────────────────────────
  {
    unitNumber: 9,
    slug: "adv-unit-09-advanced-vocabulary",
    titleEn: "Advanced Vocabulary in Context",
    titleTk: "Kontekstde Ösen Sözlük",
    description: "Bu bölümde C1 derejesinde zerur bolan ösen sözlük — akademiki, professional we medeni kontekstlerde ulanylýan sözler öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "adv-u09-l01-abstract-concepts",
        titleEn: "Abstract Concepts & Intellectual Vocabulary",
        titleTk: "Soyut Düşünjeler we Intellektual Sözlük",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Akademiki we intellektual söhbetdeşliklerde soyut düşünjeleri aňladýan sözler möhüm. Bu sözleri bilmek düýpli tema boýunça pikirini aýtmaga kömek edýär. Her söziň nähili ulanylýandygyny mysallar bilen öwreniň." } },
            { type: "vocabulary_list", data: { titleTk: "Intellektual we filosofiki sözlük", words: [{ en: "paradox", tk: "paradoks — gapma-garşylykly, ýöne dogry ýagdaý", partOfSpeech: "noun", exampleEn: "It is a paradox that the more connected we are, the lonelier we feel.", exampleTk: "Has köp baglanyşykly boldugyňyzça has ýalňyz duýmak paradoks." }, { en: "dilemma", tk: "ikitaraplaýyn kynçylyk / seçim kynlygy", partOfSpeech: "noun", exampleEn: "The government faces a dilemma: growth or sustainability.", exampleTk: "Hökümet dilemma bilen ýüzleşýär: ösüş ýa-da durnuklylyk." }, { en: "implications", tk: "netijeler / düşündiriş / içindäki manylary", partOfSpeech: "noun", exampleEn: "What are the implications of this decision?", exampleTk: "Bu kararyň nähili netijeleri bar?" }, { en: "perception / misconception", tk: "garaýyş / nädogry düşüniş", partOfSpeech: "noun", exampleEn: "There is a widespread misconception that sharks attack humans frequently.", exampleTk: "Akulalaryň köp adamlara hüjüm edýändigi barada giň ýaýran nädogry düşüniş bar." }] } },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "adv-u09-l02-social-political-vocab",
        titleEn: "Social, Political & Economic Vocabulary",
        titleTk: "Sosial, Syýasy we Ykdysady Sözlük",
        content: {
          blocks: [
            { type: "vocabulary_list", data: { titleTk: "Sosial, syýasy we ykdysady sözlük", words: [{ en: "infrastructure", tk: "infrastruktura — ýollary, köprüleri, ulgamlary öz içine alýan esasy gurluşlar", partOfSpeech: "noun", exampleEn: "Investing in infrastructure is key to economic growth.", exampleTk: "Infrastruktura maýa goýmak ykdysady ösüşiň açary." }, { en: "inequality / disparity", tk: "deňsizlik / tapawut", partOfSpeech: "noun", exampleEn: "Income inequality continues to grow in many countries.", exampleTk: "Girdeji deňsizligi köp ýurtda ösüşini dowam edýär." }, { en: "reform / overhaul", tk: "özgertmek / düýpden üýtgetmek", partOfSpeech: "verb", exampleEn: "The education system needs a complete overhaul.", exampleTk: "Bilim ulgamy doly täzelenmäge mätäç." }, { en: "corruption / integrity", tk: "para-peşgeş / dogruçyllyk", partOfSpeech: "noun", exampleEn: "Corruption undermines public trust in institutions.", exampleTk: "Para-peşgeş edaralara jemgyýetiň ynamyny pese düşürýär." }, { en: "diplomatic / sanctions", tk: "diplomatik / çäklendirmeler", partOfSpeech: "adjective", exampleEn: "Diplomatic relations between the two countries improved.", exampleTk: "Iki ýurduň arasynda diplomatik gatnaşyklar gowulandy." }, { en: "stimulus / austerity", tk: "ykdysady höweslendiriş / tygşytlamak syýasaty", partOfSpeech: "noun", exampleEn: "Governments used economic stimulus to recover from the recession.", exampleTk: "Hökümetler durgunlykdan çykmak üçin ykdysady höweslendiriş ulandy." }] } },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "adv-u09-l03-scientific-technological",
        titleEn: "Scientific & Technological Vocabulary",
        titleTk: "Ylmy we Tehnologiki Sözlük",
        content: {
          blocks: [
            { type: "vocabulary_list", data: { titleTk: "Ylym we tehnologiýa sözlügi", words: [{ en: "algorithm", tk: "algoritm — mesele çözmegiň yzygiderli prosesi", partOfSpeech: "noun", exampleEn: "Social media algorithms determine what content users see.", exampleTk: "Sosial media algoritmleri ulanyjylaryň haýsy mazmuny görýändigini kesgitleýär." }, { en: "artificial intelligence (AI)", tk: "emeli aň", partOfSpeech: "noun", exampleEn: "AI is transforming industries from healthcare to finance.", exampleTk: "Emeli aň saglygy goraýyşdan maliýä çenli pudaklary üýtgedýär." }, { en: "carbon footprint", tk: "uglerod yzy — hereketleriňiziň daşky gurşawa zyýany", partOfSpeech: "noun", exampleEn: "Reducing your carbon footprint is everyone's responsibility.", exampleTk: "Uglerod yzyňyzy azaltmak hemmäniň jogapkärçiligidir." }, { en: "renewable / sustainable", tk: "dikeldilýän / durnukly", partOfSpeech: "adjective", exampleEn: "Renewable energy sources include solar, wind and hydro.", exampleTk: "Dikeldilýän energiýa çeşmeleri gün, ýel we suw güýjüni öz içine alýar." }] } },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "9-njy Bölüm Synagy: Ösen Sözlük",
      questions: [
        { order: 1, questionText: "'Paradox' Türkmençede näme?", questionType: "translate_en_tk", options: ["Çözgütsiz mesele", "Gapma-garşylykly, ýöne dogry ýagdaý", "Uly mesele", "Kynçylyk"], correctIndex: 1 },
        { order: 2, questionText: "'Implications' Türkmençede näme?", questionType: "translate_en_tk", options: ["Habar berme", "Netijeler / içindäki manylary", "Deliller", "Soraglar"], correctIndex: 1 },
        { order: 3, questionText: "'Infrastructure' Türkmençede näme?", questionType: "translate_en_tk", options: ["Gurluşyk", "Ýollary, köprüleri, ulgamlary öz içine alýan esasy gurluşlar", "Bina", "Ykdysadyýet"], correctIndex: 1 },
        { order: 4, questionText: "'Inequality' Türkmençede näme?", questionType: "translate_en_tk", options: ["Deňlik", "Deňsizlik / tapawut", "Adalat", "Düzgün"], correctIndex: 1 },
        { order: 5, questionText: "'Carbon footprint' Türkmençede näme?", questionType: "translate_en_tk", options: ["Uglerod ulgamy", "Uglerod yzy — daşky gurşawa zyýan", "Aýakgap yzy", "Uglerod derejesi"], correctIndex: 1 },
        { order: 6, questionText: "'Dilemma' Türkmençede näme?", questionType: "translate_en_tk", options: ["Aňsat mesele", "Ikitaraplaýyn kynçylyk / seçim kynlygy", "Netije", "Çözgüt"], correctIndex: 1 },
        { order: 7, questionText: "'Integrity' Türkmençede näme?", questionType: "translate_en_tk", options: ["Paralaşmak", "Dogruçyllyk / bitewülik", "Güýç", "Täsir"], correctIndex: 1 },
        { order: 8, questionText: "'Algorithm' Türkmençede näme?", questionType: "translate_en_tk", options: ["Hasap etmek", "Mesele çözmegiň yzygiderli prosesi", "Kompýuter programmasy", "Matematiki formul"], correctIndex: 1 },
        { order: 9, questionText: "'Misconception' Türkmençede näme?", questionType: "translate_en_tk", options: ["Dogry düşüniş", "Nädogry düşüniş", "Garaýyş", "Netije"], correctIndex: 1 },
        { order: 10, questionText: "'Renewable energy' Türkmençede näme?", questionType: "translate_en_tk", options: ["Tükenimsiz energiýa (hakyky)", "Dikeldilýän energiýa", "Ýadro energiýasy", "Güýçli energiýa"], correctIndex: 1 },
      ],
    },
  },

  // ─── UNIT 10: MODAL PERFECTS & SPECULATION ──────────────────────────────
  {
    unitNumber: 10,
    slug: "adv-unit-10-modal-perfects-speculation",
    titleEn: "Modal Perfects & Advanced Speculation",
    titleTk: "Ösen Modal Perfekt we Çaklama",
    description: "Bu bölümde modal + have + PP gurluşlarynyň ähli görnüşleri we olaryň yzygiderlilikde nähili ulanylýandygy öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "adv-u10-l01-all-modal-perfects",
        titleEn: "All Modal Perfect Forms",
        titleTk: "Ähli Modal Perfekt Görnüşleri",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Modal + have + PP gurluşlarynyň doly sanawy: must have (hökman şeýledi), can't have (mümkin däldi), might/could have (belki şeýledi), should have (edilmeli ekeni), would have (ýagdaý bolsa bolardý), needn't have (edildi, gereksiz). Her biriniň öz nuansa bar we takyk kontekstde ulanylmaly." } },
            { type: "example_set", data: { titleTk: "Ähli modal perfekt deňeşdirmesi", examples: [{ en: "Must have: He must have forgotten — he never misses meetings. (High certainty — past)", tk: "Must have: Ýatdan çykaran bolmaly — ol hiç ýygnak geçirmeýär. (Ýokary ynamlylyk — geçmiş)" }, { en: "Can't have: She can't have left already — I saw her five minutes ago. (Impossibility — past)", tk: "Can't have: Ol eýýäm gidip bilmedi — bäş minut öň gördüm. (Mümkinsizlik — geçmiş)" }, { en: "Should have: You should have called me — I would have helped. (Regret/criticism — past)", tk: "Should have: Jaň etmeli edin — kömek ederdim. (Öküniç/tankyt — geçmiş)" }, { en: "Could have: She could have been a doctor but chose law. (Unrealised ability — past)", tk: "Could have: Lukman bolup bilerdi, ýöne hukugy saýlady. (Mümkin, ýöne bolmady)" }, { en: "Would have: If it had rained, we would have stayed inside. (Hypothetical — 3rd conditional)", tk: "Would have: Ýagyş ýagan bolsa, içeride galardyk. (Hyýal — 3-nji şert)" }] } },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "adv-u10-l02-speculation-complex",
        titleEn: "Complex Speculation Structures",
        titleTk: "Çylşyrymly Çaklama Gurluşlary",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Çaklama dürli derejelerde aňladylýar: ýokary ynamlylyk (must), orta ynamlylyk (should/ought to), pes ynamlylyk (might/could/may), mümkin däl (can't/couldn't). Resmi dilde we akademiki ýazuwda bu derejeler ätiýaçlylyk dili bilen hem aňladylýar." } },
            { type: "example_set", data: { titleTk: "Çaklama derejesi — mysal toplumy", examples: [{ en: "High: The results must have been affected by the temperature change.", tk: "Ýokary: Netijeler temperatura üýtgemesinden täsirlenen bolmaly." }, { en: "Medium: The policy should have had some effect by now.", tk: "Orta: Syýasatyň häzire çenli bir täsiri bolmaly ekeni." }, { en: "Low: There might have been a misunderstanding between the two parties.", tk: "Pes: Iki tarap arasyndaky düşünişmezlik bolup biler." }, { en: "Impossible: The signal can't have travelled that far without a repeater.", tk: "Mümkin däl: Signal güýçlendiriji bolmazdan şol uzaklyga ýetip bilmez." }] } },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "adv-u10-l03-speculative-discourse",
        titleEn: "Speculative Discourse in Discussion",
        titleTk: "Söhbetdeşlikde Çaklama Dili",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Akademiki we intellektual söhbetdeşlikde çaklama dili möhüm: 'I would venture to suggest...', 'One might argue that...', 'It is not inconceivable that...', 'There are grounds for supposing that...'. Bu gurluşlar pikiriňi has ynamly we akademiki görünmäge kömek edýär." } },
            { type: "vocabulary_list", data: { titleTk: "Ýokary derejeli çaklama sözlemleri", words: [{ en: "venture to suggest", tk: "... diýmäge cesaratlansam", partOfSpeech: "verb", exampleEn: "I would venture to suggest that the data is incomplete.", exampleTk: "Maglumatlaryň doly däldigini aýtmäge cesaratlansam." }, { en: "it is not inconceivable", tk: "... mümkin däl däl / mümkin diýip pikir etmek bolýar", partOfSpeech: "adverb", exampleEn: "It is not inconceivable that attitudes will change.", exampleTk: "Garaýyşlaryň üýtgäp biljekdigini göz öňüne getirmek mümkin." }, { en: "grounds for supposing", tk: "... çaklamak üçin esas bar", partOfSpeech: "noun", exampleEn: "There are grounds for supposing the report was inaccurate.", exampleTk: "Hasabatyň takyk bolmandygyny çaklamak üçin esas bar." }] } },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "10-njy Bölüm Synagy: Modal Perfektler",
      questions: [
        { order: 1, questionText: "He _____ forgotten — he never misses meetings. (hökman)", questionType: "multiple_choice_grammar", options: ["must have", "might have", "could have", "should have"], correctIndex: 0 },
        { order: 2, questionText: "She _____ left already — I saw her 5 minutes ago. (mümkin däl)", questionType: "multiple_choice_grammar", options: ["must have", "might have", "can't have", "should have"], correctIndex: 2 },
        { order: 3, questionText: "You _____ called me — I would have helped. (öküniç)", questionType: "multiple_choice_grammar", options: ["must have", "might have", "could have", "should have"], correctIndex: 3 },
        { order: 4, questionText: "She _____ been a doctor but chose law instead. (mümkin bolan, ýöne bolmady)", questionType: "multiple_choice_grammar", options: ["must have", "could have", "should have", "would have"], correctIndex: 1 },
        { order: 5, questionText: "If it had rained, we _____ stayed inside. (3rd conditional)", questionType: "multiple_choice_grammar", options: ["must have", "could have", "should have", "would have"], correctIndex: 3 },
        { order: 6, questionText: "'I would venture to suggest' Türkmençede näme?", questionType: "translate_en_tk", options: ["Men hökman aýdýaryn", "... diýmäge cesaratlansam", "Men bilmeýärin", "Belki"], correctIndex: 1 },
        { order: 7, questionText: "There _____ have been a misunderstanding. (belki)", questionType: "multiple_choice_grammar", options: ["must", "can't", "might", "should"], correctIndex: 2 },
        { order: 8, questionText: "You _____ waited — I said I'd call you! (edildi, gereksiz)", questionType: "multiple_choice_grammar", options: ["shouldn't have", "needn't have", "mustn't have", "couldn't have"], correctIndex: 1 },
        { order: 9, questionText: "'It is not inconceivable that' Türkmençede näme?", questionType: "translate_en_tk", options: ["Mümkin däl", "Mümkin diýip pikir etmek bolýar", "Hökman", "Asla"], correctIndex: 1 },
        { order: 10, questionText: "Modal perfekt nähili düzülýär?", questionType: "translate_en_tk", options: ["modal + işlik", "modal + have + PP", "have + PP", "had + PP"], correctIndex: 1 },
      ],
    },
  },

  // ─── UNIT 11: COMPLEX GRAMMAR REVIEW ────────────────────────────────────
  {
    unitNumber: 11,
    slug: "adv-unit-11-complex-grammar-review",
    titleEn: "Complex Grammar Integration",
    titleTk: "Çylşyrymly Grammatikany Birleşdirmek",
    description: "Bu bölümde C1 derejesiniň ähli grammatikasy — inversion, subjunctive, nominalization, advanced passives we complex structures birleşdirilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "adv-u11-l01-grammar-in-context",
        titleEn: "Advanced Grammar in Context",
        titleTk: "Kontekstde Ösen Grammatika",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "C1 derejesinde grammatika aýratyn däl-de, birleşdirilip ulanylýar. Bir sözlemde inversion + passive + hedging bolup biler: 'Not only has the policy been implemented more effectively than anticipated, but it would also appear to have had a positive impact on productivity.' Bu derejede grammatikany tebigy ulanmak ünüsi çekýär." } },
            { type: "example_set", data: { titleTk: "Dürli grammatika gurluşlaryny birleşdirmek", examples: [{ en: "Had the company invested more in training earlier, not only would costs have been reduced, but staff morale would also have improved significantly.", tk: "Kompaniýa has öň okadyşa has köp maýa goýan bolsa, çykdajylar diňe azalmak bilen çäklenmezdi, işgäriň ruhy hem düýpli ýokarlanardy." }, { en: "It is essential that the findings be published, despite the fact that doing so may prove controversial to some stakeholders.", tk: "Käbir gyzyklanýan taraplaara jedelli bolup biljekdigine garamazdan, netijeleriň çap edilmegi zerurdyr." }, { en: "The results, which were far more promising than had been anticipated, suggest that the approach warrants further investigation.", tk: "Garaşylandan has umytly bolan netijeler, çemeleşmäniň has köp derňewi hak edýändigini görkezýär." }] } },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "adv-u11-l02-error-correction",
        titleEn: "Recognising & Correcting Errors",
        titleTk: "Ýalňyşlyklary Tanamak we Düzetmek",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "C1 derejesinde diňe öz grammatikaňyzy bilmek ýeterlik däl — başga adamlaryň ýalňyşlyklaryny tapyp düzetmek hem möhüm. Iň köp duş gelýän ýalňyşlyklar: dangling participles (gatnaşyk gurluşynda şahs nädogry), yalňyş inversion, subjunctive ýerine indicative ulanmak." } },
            { type: "example_set", data: { titleTk: "Ýalňyşlyklary tanamak we düzetmek", examples: [{ en: "WRONG: Walking down the street, the rain started to fall. (Who was walking — the rain?) RIGHT: Walking down the street, I got caught in the rain.", tk: "ÝALŇYŞ: Köçede ýöräp, ýagyş başlady. (Kim ýöredi — ýagyş?) DOGRY: Köçede ýöräp, ýagşa düşdüm." }, { en: "WRONG: It is important that she attends the meeting. RIGHT: It is important that she attend the meeting. (Subjunctive requires bare infinitive)", tk: "ÝALŇYŞ: Onuň ýygnaklara gitmegi möhüm. DOGRY: Onuň ýygnaklara gitmegi möhüm. (Subjunctive — -s goşulmaýar)" }, { en: "WRONG: Never I have seen such a thing. RIGHT: Never have I seen such a thing. (Inversion required after never)", tk: "ÝALŇYŞ: Hiç wagt beýle zady görmedim. DOGRY: Hiç wagt beýle zat görmedim. (Inversion gerek)" }] } },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "adv-u11-l03-style-transformation",
        titleEn: "Style Transformation",
        titleTk: "Stil Öwürmesi",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Bir manyy dürli stillerda beýan etmegi öwrenmek C1 derejesinde möhüm. Gündelik → Resmi. Passyw → Aktyw. Sözlem gurluşyny üýtgetmek. Bu başarnyk ýazuwda we terjimede gaty kömekli." } },
            { type: "example_set", data: { titleTk: "Stil öwürmesi mysallary", examples: [{ en: "Informal: We've found out that loads of people aren't happy with the new system. Formal: It has been established that a significant number of individuals express dissatisfaction with the new system.", tk: "Gündelik → Resmi: Köp adamyň täze ulgamdan razy däldigini bildik → Düýpli adam sanyny täze ulgamdan närazylygynyň subut edilendigi anyklandy." }, { en: "Active: The committee approved the proposal. Passive formal: The proposal was approved by the committee at its meeting on 15 March.", tk: "Aktyw → Passyw: Komitet teklibi tassyklady. → 15 mart duşuşygynda teklip komitet tarapyndan tassyklandy." }] } },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "11-nji Bölüm Synagy: Çylşyrymly Grammatika",
      questions: [
        { order: 1, questionText: "Not only _____ the policy been effective, but it has also saved money.", questionType: "multiple_choice_grammar", options: ["has", "have", "had", "was"], correctIndex: 0 },
        { order: 2, questionText: "It is vital that the report _____ submitted before the deadline.", questionType: "multiple_choice_grammar", options: ["is", "was", "be", "been"], correctIndex: 2 },
        { order: 3, questionText: "WRONG: 'Walking down the street, the rain started.' Näme ýalňyş?", questionType: "translate_en_tk", options: ["Zaman ýalňyş", "Kim ýöredi nädogry — ýagyş ýörüp bilmez", "Passyw gerek", "Söz tertibini ýalňyş"], correctIndex: 1 },
        { order: 4, questionText: "The results _____ to suggest that further research is needed.", questionType: "multiple_choice_grammar", options: ["would appear", "appear", "appeared", "appearing"], correctIndex: 0 },
        { order: 5, questionText: "Had they invested more, costs _____ have been lower.", questionType: "multiple_choice_grammar", options: ["must", "might", "would", "should"], correctIndex: 2 },
        { order: 6, questionText: "'Dangling participle' näme?", questionType: "translate_en_tk", options: ["Gatnaşyk gurluşynda şahs nädogry bolmasy", "Işlik nädogry ulanylmagy", "Passyw gurluş ýalňyşlygy", "Zaman ýalňyşlygy"], correctIndex: 0 },
        { order: 7, questionText: "Never _____ I witnessed such dedication.", questionType: "multiple_choice_grammar", options: ["I have", "have", "I had", "had"], correctIndex: 1 },
        { order: 8, questionText: "The proposal _____ approved at the March meeting. (resmi passyw)", questionType: "multiple_choice_grammar", options: ["was", "got", "has", "is"], correctIndex: 0 },
        { order: 9, questionText: "Stil öwürmesi näme üçin möhüm?", questionType: "translate_en_tk", options: ["Dili kynlaşdyrmak üçin", "Bir manyy dürli kontekstler üçin dogry görnüşde aňlatmak üçin", "Grammatika synagy üçin", "Söz goşmak üçin"], correctIndex: 1 },
        { order: 10, questionText: "It is essential that every member _____ notified. (subjunctive passyw)", questionType: "multiple_choice_grammar", options: ["is", "was", "be", "been"], correctIndex: 2 },
      ],
    },
  },

  // ─── UNIT 12: C1 MASTERY REVIEW ──────────────────────────────────────────
  {
    unitNumber: 12,
    slug: "adv-unit-12-c1-mastery",
    titleEn: "C1 Mastery — Language in Use",
    titleTk: "C1 Derejesini Özleşdirmek",
    description: "Soňky bölümde C1 derejesiniň ähli grammatikasy, sözlügi we stil birleşdirilýär. Dil ulanyşynyň iň ýokary derejesi.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "adv-u12-l01-c1-integrated-skills",
        titleEn: "C1 Integrated Skills",
        titleTk: "C1 Birleşdirilen Başarnyklar",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "C1 (Advanced) derejesi CEFR derejelemesinde gaty ýokary basgançakdyr. Bu derejede: Çylşyrymly we uzyn tekstleri düşünip okmak. Dürli temalar boýunça erkin gürrüňdeşlik. Takyk we birleşimli ýazuw. Öz pikiriňi delil we nuansa bilen aňlatmak. Akademiki we professional dilde işlemek." } },
            { type: "example_set", data: { titleTk: "C1 derejesinde birleşdirilen dil mysallary", examples: [{ en: "The implementation of renewable energy policies, while admittedly complex and costly in the short term, would appear to offer substantial long-term benefits — not only in terms of environmental sustainability, but also with regard to energy security.", tk: "Dikeldilýän energiýa syýasatynyň durmuşa geçirilmesi, dogrusy gysga möhletde çylşyrymly we çykdajyly bolsa-da, diňe daşky gurşaw durnuklylygy taýdan däl-de, energiýa howpsuzlygy babatynda hem düýpli uzak möhletli peýdalary hödürleýär." }, { en: "What is particularly striking about this situation is not simply the scale of the challenge, but rather the extent to which existing frameworks have failed to address it adequately.", tk: "Bu ýagdaýda aýratyn üns çekiji zat diňe kynçylygyň mukdary däl, eýsem bar bolan çerçeweleriň ony ýeterlik çözmekde nä derejede şowsuz bolandygydyr." }] } },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "adv-u12-l02-c1-vocabulary-depth",
        titleEn: "C1 Vocabulary Depth",
        titleTk: "C1 Derejesinde Sözlük Çuňlugy",
        content: {
          blocks: [
            { type: "vocabulary_list", data: { titleTk: "C1 derejesindäki möhüm sözlük", words: [{ en: "meticulous", tk: "jikme-jiklere ünsli / örän seresap", partOfSpeech: "adjective", exampleEn: "She is meticulous in her attention to detail.", exampleTk: "Ol jikme-jiklere üns bermekde örän seresap." }, { en: "inherent", tk: "tebigy / içde bar bolan", partOfSpeech: "adjective", exampleEn: "There are inherent risks in any new venture.", exampleTk: "Islendik täze başlangyçda tebigy töwekgelçilikler bar." }, { en: "proliferate", tk: "köpelmek / giňemek / çalt ýaýramak", partOfSpeech: "verb", exampleEn: "Mobile apps have proliferated in recent years.", exampleTk: "Soňky ýyllarda ykjam programmalar çalt ýaýrady." }, { en: "rhetoric", tk: "güýçli we täsirli gepleşme / retoriki dil", partOfSpeech: "noun", exampleEn: "The politician's rhetoric was compelling but lacked substance.", exampleTk: "Syýasatçynyň retoriki gürrüňi täsirli, ýöne çuňlukdan yksak." }, { en: "discrepancy", tk: "tapawut / gabat gelmezlik / ýalňyşlyk", partOfSpeech: "noun", exampleEn: "There is a discrepancy between the report and the data.", exampleTk: "Hasabat bilen maglumatlar arasyndaky tapawut bar." }, { en: "exacerbate", tk: "erbetleşdirmek / hasam kynlaşdyrmak", partOfSpeech: "verb", exampleEn: "The drought has exacerbated the food crisis.", exampleTk: "Gurakçylyk azyk krizisini hasam erbetleşdirdi." }] } },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "adv-u12-l03-mastery-synthesis",
        titleEn: "Synthesis — Bringing It All Together",
        titleTk: "Sintez — Hemmesini Birleşdirmek",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Bu soňky sapakda Beginner derejesinden Advanced derejä çenli öwrenen ähli Iňlisçäňizi birleşdirýärsiňiz. Dil öwrenmek — grammatika gurallaryny özleşdirmek däl, eýsem pikiri takyk, tebigy we täsirli aňlatmagy öwrenmek. Yzygiderli okaň, diňläň, ýazyň we gürläň — ösüş özbaşdak geler." } },
            { type: "example_set", data: { titleTk: "Başlangyçdan Ýokary Derejä çenli dil ösüşi", examples: [{ en: "Beginner: My name is Merdan. I am from Turkmenistan.", tk: "Başlangyç: Meniň adym Merdan. Men Türkmenistanly." }, { en: "Elementary: I have been studying English for two years and I enjoy learning new vocabulary.", tk: "Başlangyç+: Iki ýyldan bäri Iňlisçe öwrenip gelýärin we täze sözlük öwrenmegi halaýaryn." }, { en: "Pre-Intermediate: Since moving to this city, I have made significant progress in both my professional and personal life.", tk: "Orta Öňi: Bu şähere göçenimden bäri, hünär we şahsy durmuşymda ep-esli öňegidişlik gazandym." }, { en: "Advanced: Having dedicated several years to the systematic acquisition of English, I find myself increasingly capable of engaging with complex texts and articulating nuanced viewpoints with precision and confidence.", tk: "Advanced: Birnäçe ýyl yzygiderli Iňlisçäni öwrenmäge bagyşlansoň, çylşyrymly tekstleri düşünmekde we nuanslary takyk we ynamly aňlatmakda giderek has ýeterlik bolýandygymy aňýaryn." }] } },
            { type: "vocabulary_list", data: { titleTk: "Iňlisçe öwrenmegiň soňky sözleri", words: [{ en: "perseverance", tk: "ýadaman dowam etmek / sabyr bilen çalyşmak", partOfSpeech: "noun", exampleEn: "Language learning requires perseverance above all else.", exampleTk: "Dil öwrenmek hemme zatdan öň ýadaman dowam etmegi talap edýär." }, { en: "immerse yourself", tk: "özüňi doly dil gurşawyna salmak", partOfSpeech: "verb", exampleEn: "The best way to improve is to immerse yourself in the language.", exampleTk: "Gowulanmagyň iň gowy usuly özüňi dile doly salmakdyr." }, { en: "articulate", tk: "pikirini açyk we takyk aňlatmak", partOfSpeech: "verb", exampleEn: "She can articulate complex ideas simply and clearly.", exampleTk: "Ol çylşyrymly pikirleri ýönekeý we aýdyň aňladyp bilýär." }] } },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "12-nji Bölüm Synagy: C1 Derejesini Özleşdirmek",
      questions: [
        { order: 1, questionText: "'Meticulous' Türkmençede näme?", questionType: "translate_en_tk", options: ["Tiz", "Jikme-jiklere ünsli / örän seresap", "Giň", "Uly"], correctIndex: 1 },
        { order: 2, questionText: "'Exacerbate' Türkmençede näme?", questionType: "translate_en_tk", options: ["Gowulandyrmak", "Erbetleşdirmek / hasam kynlaşdyrmak", "Düzetmek", "Azaltmak"], correctIndex: 1 },
        { order: 3, questionText: "Not only _____ the policy improved efficiency, but it has also reduced costs.", questionType: "multiple_choice_grammar", options: ["has", "have", "had", "is"], correctIndex: 0 },
        { order: 4, questionText: "'Inherent' Türkmençede näme?", questionType: "translate_en_tk", options: ["Daşarky", "Tebigy / içde bar bolan", "Alnan", "Girizilen"], correctIndex: 1 },
        { order: 5, questionText: "It is essential that the plan _____ reviewed before implementation.", questionType: "multiple_choice_grammar", options: ["is", "was", "be", "been"], correctIndex: 2 },
        { order: 6, questionText: "'Discrepancy' Türkmençede näme?", questionType: "translate_en_tk", options: ["Ylalaşmak", "Tapawut / gabat gelmezlik", "Deňlik", "Gowy netije"], correctIndex: 1 },
        { order: 7, questionText: "Had they listened, the outcome _____ have been different.", questionType: "multiple_choice_grammar", options: ["must", "might", "would", "could"], correctIndex: 2 },
        { order: 8, questionText: "'Proliferate' Türkmençede näme?", questionType: "translate_en_tk", options: ["Azalmak", "Köpelmek / çalt ýaýramak", "Gizlemek", "Ýok etmek"], correctIndex: 1 },
        { order: 9, questionText: "'Rhetoric' Türkmençede näme?", questionType: "translate_en_tk", options: ["Matematika", "Güýçli we täsirli gepleşme / retoriki dil", "Logika", "Ylym"], correctIndex: 1 },
        { order: 10, questionText: "C1 derejesinde dil öwrenmekde iň möhüm zat näme?", questionType: "translate_en_tk", options: ["Grammatiki kadalary ýatda saklamak", "Yzygiderlilik, köp okamaklyk, ýadaman çalyşmak", "Köp sözlük ýatlamak", "Synag testlerini ýerine ýetirmek"], correctIndex: 1 },
      ],
    },
  },
];
