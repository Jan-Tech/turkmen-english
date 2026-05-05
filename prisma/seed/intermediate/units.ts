import type { SeedUnit } from "../../../types/content";

export const intermediateUnits: SeedUnit[] = [
  // ─── UNIT 1: PRESENT PERFECT CONTINUOUS ─────────────────────────────────
  {
    unitNumber: 1,
    slug: "int-unit-01-present-perfect-continuous",
    titleEn: "Present Perfect Continuous",
    titleTk: "Dowam Edip Gelen Häzirki Zaman",
    description: "Bu bölümde Present Perfect Continuous (have/has been + -ing) öwrenilýär. Häzire çenli dowam edip gelen hereketleri we olaryň netijelerini aňlatmagy öwrenersiňiz.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "int-u01-l01-ppc-form",
        titleEn: "Present Perfect Continuous — Form",
        titleTk: "PPC — Düzümi",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Present Perfect Continuous — bir hereketiň geçmişde başlap häzire çenli dowam etýändigini ýa-da ýaňy gutarandygyny (häzirki netijesi görünýändigini) aňladýar. 'I have been studying for three hours' — üç sagat bäri okap gelýärin (häzir hem okýaryn ýa-da ýaňy gutardym). 'Have been' + işlik + -ing.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: PPC düzümi",
                explanationTk: "have/has + been + işlik + -ing. I/You/We/They → have been + -ing. He/She/It → has been + -ing. For/since bilen köp ulanylýar. Sorag: How long have you been + işlik + -ing?",
                pattern: "I have been working. / She has been studying. / How long have you been waiting?",
                examples: [
                  { en: "I have been learning English for two years.", tk: "Men iki ýyldan bäri Iňlisçe öwrenip gelýärin." },
                  { en: "She has been working at that company since 2021.", tk: "Ol 2021-nji ýyldan bäri şol kompaniýada işläp gelýär." },
                  { en: "How long have you been waiting here?", tk: "Siz bu ýerde näçe wagtdan bäri garaşýarsyňyz?" },
                ],
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "PPC bilen ulanylýan işlikler",
                words: [
                  { en: "practise", tk: "türgenleşmek / maşk etmek", partOfSpeech: "verb", exampleEn: "He has been practising the piano since childhood.", exampleTk: "Ol çagalykdan bäri pianino çalyp gelýär." },
                  { en: "negotiate", tk: "gepleşik geçirmek / ylalaşmak", partOfSpeech: "verb", exampleEn: "They have been negotiating for three weeks.", exampleTk: "Olar üç hepdeden bäri gepleşik geçirip gelýärler." },
                  { en: "renovate", tk: "düzetmek / täzelemek", partOfSpeech: "verb", exampleEn: "We have been renovating our house all month.", exampleTk: "Biz bütin aý öýümizi täzeleýäris." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "int-u01-l02-ppc-vs-pp",
        titleEn: "PPC vs Present Perfect Simple",
        titleTk: "PPC we PP Simple tapawudy",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Present Perfect Simple — tamamlanyp gutaran hereket, netijä ünsi çekýär ('I have written three emails'). Present Perfect Continuous — dowam edip gelýän hereket, prosese ünsi çekýär ('I have been writing emails all morning'). Käbir işlikler (know, like, believe, have, want) adatça Continuous görnüşde ulanylmaýar.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "PP Simple vs PPC: haçan haýsysyny ulanmaly",
                explanationTk: "PP Simple: netije möhüm, ýa-da hereket tamamlandy. PPC: proses möhüm, hereket uzaga çekdi ýa-da häzir hem dowam edýär. Ikisi hem for/since bilen ulanylýar.",
                pattern: "I have read the book. (Tamamlandý) / I have been reading all day. (Proses dowam edýär)",
                examples: [
                  { en: "I have written the report. (It's finished — finished.)", tk: "Men hasabaty ýazdym. (Tamamlandý.)" },
                  { en: "I have been writing the report all day. (Still working on it.)", tk: "Men bütin gün hasabaty ýazyp otyryn. (Heniz dowam edýär.)" },
                  { en: "She has read five books this month. (How many — result.)", tk: "Ol bu aý bäş kitap okady. (Näçe — netije.)" },
                ],
              },
            },
            {
              type: "dialogue",
              data: {
                titleTk: "Söhbetdeşlik: Näçe wagtdan bäri?",
                exchanges: [
                  { speakerEn: "Yusup", lineEn: "You look tired. Have you been working all night?", lineTk: "Ýadaw görünýärsiň. Bütin gije işlediňizmi?" },
                  { speakerEn: "Ogulgerek", lineEn: "Yes! I have been preparing the presentation since yesterday morning.", lineTk: "Hawa! Men düýn irden bäri tanyşdyryş taýýarlaýaryn." },
                  { speakerEn: "Yusup", lineEn: "Have you finished it yet?", lineTk: "Tamamladyňyzmy?" },
                  { speakerEn: "Ogulgerek", lineEn: "Almost! I have already done the design — I have just been writing the content.", lineTk: "Az galdy! Dizaýny eýýäm taýýarladym — häzir mazmun ýazyp otyryn." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "int-u01-l03-ppc-results-visible",
        titleEn: "Visible Results of Actions",
        titleTk: "Hereketleriň Görünýän Netijeleri",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "PPC bir hereketdäki uzak tagallanyň häzirki netijelerini görkezmek üçin hem ulanylýar. 'You look wet — have you been running in the rain?' Bu ýerde häzirki wagt (ýaş/öl bolmak) geçmişdäki hereketden (ýagyşda ylgamak) gelýän netijedir.",
              },
            },
            {
              type: "example_set",
              data: {
                titleTk: "Görünýän netijeli PPC mysallary",
                examples: [
                  { en: "Your hands are dirty — have you been gardening?", tk: "Elleriňiz kirli — bag işi bilen meşgullandyňyzmy?" },
                  { en: "He looks exhausted — he has been working overtime all week.", tk: "Ol gaty ýadaw — ol bütin hepde artyk wagt işläp geldi." },
                  { en: "The kitchen smells great — what have you been cooking?", tk: "Aşhana ajaýyp ys gelýär — näme bişirip oturdyňyz?" },
                  { en: "She has been crying — her eyes are red.", tk: "Ol aglaýardy — gözleri gyzardy." },
                ],
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "Uzak tagallany aňladýan sözler",
                words: [
                  { en: "exhausted", tk: "gaty ýadaw / tükedilen", partOfSpeech: "adjective", exampleEn: "I am exhausted after working all day.", exampleTk: "Bütin gün işlänimden soň gaty ýadaw." },
                  { en: "achievement", tk: "üstünlik / gazanylan zat", partOfSpeech: "noun", exampleEn: "This is the result of years of hard work.", exampleTk: "Bu ýyllaryň tagallasynyň netijesi." },
                  { en: "dedicated", tk: "wepalyk / berlen", partOfSpeech: "adjective", exampleEn: "She is a very dedicated student.", exampleTk: "Ol gaty yhlaslý okuwçy." },
                ],
              },
            },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "1-nji Bölüm Synagy: Present Perfect Continuous",
      questions: [
        { order: 1, questionText: "She _____ English for three years. (learn — PPC)", questionType: "multiple_choice_grammar", options: ["learns", "has learnt", "has been learning", "is learning"], correctIndex: 2 },
        { order: 2, questionText: "How long _____ you been waiting?", questionType: "multiple_choice_grammar", options: ["do", "did", "have", "are"], correctIndex: 2 },
        { order: 3, questionText: "I have been _____ all day. (work)", questionType: "multiple_choice_grammar", options: ["work", "worked", "works", "working"], correctIndex: 3 },
        { order: 4, questionText: "'Gaty ýadaw' iňlisçe näme?", questionType: "translate_tk_en", options: ["dedicated", "exhausted", "achievement", "renovate"], correctIndex: 1 },
        { order: 5, questionText: "He _____ that company since 2020. (work for — PPC)", questionType: "multiple_choice_grammar", options: ["worked for", "works for", "has been working for", "had worked for"], correctIndex: 2 },
        { order: 6, questionText: "You look wet. _____ you been running?", questionType: "multiple_choice_grammar", options: ["Did", "Were", "Have", "Are"], correctIndex: 2 },
        { order: 7, questionText: "PPC we PP Simple tapawudy: 'I have been writing' (PPC) manysyny saýla", questionType: "translate_en_tk", options: ["Men bir hat ýazdym", "Men hat ýazyp gutardym", "Men hat ýazyp otyryn/ýazdym", "Men hat ýazjakdym"], correctIndex: 2 },
        { order: 8, questionText: "They have been _____ for over an hour. (argue)", questionType: "multiple_choice_grammar", options: ["argue", "argued", "arguing", "argues"], correctIndex: 2 },
        { order: 9, questionText: "'Maşk etmek' iňlisçe näme?", questionType: "translate_tk_en", options: ["negotiate", "renovate", "practise", "achieve"], correctIndex: 2 },
        { order: 10, questionText: "She _____ been cooking — the kitchen smells amazing.", questionType: "multiple_choice_grammar", options: ["is", "was", "has", "had"], correctIndex: 2 },
      ],
    },
  },

  // ─── UNIT 2: PAST PERFECT ────────────────────────────────────────────────
  {
    unitNumber: 2,
    slug: "int-unit-02-past-perfect",
    titleEn: "Past Perfect",
    titleTk: "Geçmişden Öňki Zaman",
    description: "Bu bölümde Past Perfect (had + past participle) öwrenilýär. Geçmişde bolan iki wakadan has öň bolanynyň nädip beýan edilýändigini öwrenersiňiz.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "int-u02-l01-past-perfect-form",
        titleEn: "Past Perfect — Form & Use",
        titleTk: "Past Perfect — Düzümi we Ulanylyşy",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Past Perfect — geçmişde bolan iki wakadan has öň bolany aňlatmak üçin ulanylýar. 'When I arrived, she had already left' — men geldim (Past Simple) ýöne ol menden öň gitdi (Past Perfect). had + past participle.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: Past Perfect düzümi",
                explanationTk: "had + işligiň Past Participle görnüşi (ähli şahs üçin). Sorag: Had + şahs + PP? Inkär: hadn't + PP. 'Already', 'just', 'never', 'before' bilen köp ulanylýar.",
                pattern: "I had (I'd) finished. / Had you seen it before? / She hadn't met him.",
                examples: [
                  { en: "When I got to the station, the train had already left.", tk: "Stansiýa ýetip baranyma, otly eýýäm gitdi." },
                  { en: "She had never seen snow before she moved to Russia.", tk: "Russiýa göçmezden öň ol hiç wagt gar görmändi." },
                  { en: "I was nervous because I had never given a speech before.", tk: "Men gelänekirdi sebäbi hiç wagt çykyş etmändim." },
                ],
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "Past Perfect bilen ulanylýan sözler",
                words: [
                  { en: "by the time", tk: "...wagty geliç / ...wagtynda eýýäm", partOfSpeech: "conjunction", exampleEn: "By the time we arrived, they had finished eating.", exampleTk: "Biz ýetip barynyňçak, olar iýip gutarypdylar." },
                  { en: "as soon as", tk: "...bolansoň derrew / ...bolan dessine", partOfSpeech: "conjunction", exampleEn: "As soon as I had finished, I called her.", exampleTk: "Tamamlanyma dessine oňa jaň etdim." },
                  { en: "previously", tk: "öňräk / mundan öň", partOfSpeech: "adverb", exampleEn: "I had previously worked in marketing.", exampleTk: "Men öňräk marketingde işledipdim." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "int-u02-l02-past-perfect-narrative",
        titleEn: "Past Perfect in Stories",
        titleTk: "Gürrüňlerde Past Perfect",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Gürrüňlerde we taryh aýdylanda Past Perfect okyjylara/diňleýjilere wakalar arasynda haýsysy öň bolandygyny düşündirmäge kömek edýär. Past Simple — esasy wakalar yzygiderli. Past Perfect — olaryň öňünde bolan zatlar.",
              },
            },
            {
              type: "example_set",
              data: {
                titleTk: "Gürrüňde Past Perfect mysallary",
                examples: [
                  { en: "She felt confident at the interview because she had prepared very carefully.", tk: "Ol söhbetdeşlikde özüne ynamy bardy sebäbi gowy taýýarlanypdy." },
                  { en: "When they opened the box, they realised someone had already taken the money.", tk: "Gutuny açanlarynda biriniň eýýäm puly alýandygyny bildiler." },
                  { en: "I was surprised to see him — I had thought he was abroad.", tk: "Ony görüp geň galdym — daşary ýurtdadyr öýdüpdim." },
                  { en: "By the time the doctor arrived, the patient had recovered slightly.", tk: "Lukman gelýänçä, näsag biraz dikeldi." },
                ],
              },
            },
            {
              type: "dialogue",
              data: {
                titleTk: "Söhbetdeşlik: Gürrüňde Past Perfect",
                exchanges: [
                  { speakerEn: "Oraz", lineEn: "Did you enjoy the concert last night?", lineTk: "Düýn agşam konserti halaýarmydyňyz?" },
                  { speakerEn: "Bägül", lineEn: "We missed most of it! When we arrived, the main singer had already performed.", lineTk: "Köpüsini geçirdik! Biz ýetip baranyňyzda, baş aýdymçy eýýäm çykyş etdi." },
                  { speakerEn: "Oraz", lineEn: "Oh no! Had you booked the tickets in advance?", lineTk: "Ýok! Petekleri öňünden aldyňyzmy?" },
                  { speakerEn: "Bägül", lineEn: "Yes, but we had forgotten about the road works — the traffic was terrible.", lineTk: "Hawa, ýöne ýol işleri barada ýatdan çykarypdyk — ulag gaty köpdi." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "int-u02-l03-third-conditional-intro",
        titleEn: "Third Conditional — Regrets",
        titleTk: "Üçünji Şert — Öküniç",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Üçünji şert — geçmişde bolan bir zat bolmadyk bolsa näme bolardydy? — diýip hyýal etmek üçin ulanylýar. Köplenç öküniç aňladýar. If + Past Perfect, would have + PP. 'If I had studied harder, I would have passed the exam.'",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: Üçünji Şert",
                explanationTk: "If + Past Perfect (had + PP), would have + PP. Inkär: If + hadn't + PP, wouldn't have + PP. Ikinji şert bilen deňeşdirme: 2nd = häzirki hyýal, 3rd = geçmişdäki öküniç.",
                pattern: "If I had [PP], I would have [PP].",
                examples: [
                  { en: "If I had arrived earlier, I would have met her.", tk: "Ir gelen bolsam, ony görer ýalymdym." },
                  { en: "She wouldn't have got lost if she had used the map.", tk: "Kartadan peýdalanan bolsa, ýoldan azaşmazdy." },
                  { en: "If they had invested earlier, they would have made more money.", tk: "Ir maýa goýan bolsalar, has köp pul gazanar ýalydylar." },
                ],
              },
            },
            {
              type: "example_set",
              data: {
                titleTk: "Ikinji we üçünji şert deňeşdirmesi",
                examples: [
                  { en: "2nd: If I were taller, I would play basketball. (Unreal now)", tk: "2-nji: Boým uzyn bolsa, basketbol oýnardym. (Häzir hyýal)" },
                  { en: "3rd: If I had been taller, I would have played basketball. (Past regret)", tk: "3-nji: Boým uzyn bolan bolsady, basketbol oýnardym. (Geçmiş öküniç)" },
                  { en: "3rd: If she had studied medicine, she would have become a doctor.", tk: "3-nji: Lukmançylyk okadyk bolsa, lukman bolardý." },
                ],
              },
            },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "2-nji Bölüm Synagy: Past Perfect",
      questions: [
        { order: 1, questionText: "When I arrived, she _____ already left. (Past Perfect)", questionType: "multiple_choice_grammar", options: ["has", "have", "had", "was"], correctIndex: 2 },
        { order: 2, questionText: "I was tired because I _____ all day. (work — past perfect)", questionType: "multiple_choice_grammar", options: ["work", "worked", "had worked", "has worked"], correctIndex: 2 },
        { order: 3, questionText: "'...wagty geliç / ...wagtynda eýýäm' iňlisçe näme?", questionType: "translate_tk_en", options: ["as soon as", "by the time", "previously", "meanwhile"], correctIndex: 1 },
        { order: 4, questionText: "If I _____ earlier, I would have met her. (arrive — 3rd conditional)", questionType: "multiple_choice_grammar", options: ["arrived", "had arrived", "have arrived", "arrive"], correctIndex: 1 },
        { order: 5, questionText: "She _____ never seen the ocean before that trip.", questionType: "multiple_choice_grammar", options: ["has", "have", "had", "was"], correctIndex: 2 },
        { order: 6, questionText: "If they had worked harder, they _____ succeeded.", questionType: "multiple_choice_grammar", options: ["would", "will have", "would have", "had"], correctIndex: 2 },
        { order: 7, questionText: "'Öňräk / Mundan öň' iňlisçe näme?", questionType: "translate_tk_en", options: ["eventually", "recently", "previously", "meanwhile"], correctIndex: 2 },
        { order: 8, questionText: "By the time we got there, the film _____ already started.", questionType: "multiple_choice_grammar", options: ["has", "have", "had", "was"], correctIndex: 2 },
        { order: 9, questionText: "She wouldn't have failed if she _____ more carefully. (read)", questionType: "multiple_choice_grammar", options: ["read", "reads", "has read", "had read"], correctIndex: 3 },
        { order: 10, questionText: "Üçünji şert haýsy ýagdaý üçin ulanylýar?", questionType: "translate_en_tk", options: ["Häzirki hyýaly ýagdaý", "Geçmiş öküniç", "Hemişe dogry fakt", "Geljek ähtimallyk"], correctIndex: 1 },
      ],
    },
  },

  // ─── UNIT 3: MODAL VERBS FOR DEDUCTION ──────────────────────────────────
  {
    unitNumber: 3,
    slug: "int-unit-03-modals-deduction",
    titleEn: "Modal Verbs for Deduction",
    titleTk: "Çaklama we Pikir Aňlatmak üçin Modallar",
    description: "Bu bölümde modal işlikleriň çaklama manysy öwrenilýär: must be (hökman şeýledir), can't be (bolup bilmez), might be (bolup biler). Häzirki we geçmiş çaklamalar öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "int-u03-l01-deduction-present",
        titleEn: "Deduction about Present — Must, Can't, Might",
        titleTk: "Häzirki Çaklama — Must, Can't, Might",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Biziň bilýän zadymyza esaslanyp çaklama ýasaýarys: 'must be' — hökman şeýledir (95% ynamly); 'can't be' — mümkin däl (95% garşy); 'might/could be' — belki şeýledir (50% töweregi). Bu 'borç' manysynyň modal işlikleri däl, 'çaklama' manysyndadyr.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: Häzirki çaklama",
                explanationTk: "must + işlik = hökman şeýledir. can't + işlik = mümkin däl. might/could + işlik = belki. Hemmesi şu anda bolup durýan ýa-da şu wagtky ýagdaý barada.",
                pattern: "He must be tired. / She can't be at home. / They might be on holiday.",
                examples: [
                  { en: "She knows everything — she must be very intelligent.", tk: "Ol hemme zady bilýär — hökman gaty akylly." },
                  { en: "He can't be the manager — he looks too young.", tk: "Ol müdür bolup bilmez — gaty ýaş görünýär." },
                  { en: "They're not answering — they might be busy.", tk: "Jogap bermäýärler — belki işleri bar." },
                ],
              },
            },
            {
              type: "dialogue",
              data: {
                titleTk: "Söhbetdeşlik: Kim ol bolup biler?",
                exchanges: [
                  { speakerEn: "Merjen", lineEn: "Look at that car — it must cost a fortune!", lineTk: "Şol maşyna seret — hökman gaty gymmat!" },
                  { speakerEn: "Orazmuhammet", lineEn: "Yes, and the man driving it — he must be very wealthy.", lineTk: "Hawa, sürýän adam hem hökman gaty baý." },
                  { speakerEn: "Merjen", lineEn: "He might be a businessman or a celebrity.", lineTk: "Belki telekeçi ýa-da meşhur adam." },
                  { speakerEn: "Orazmuhammet", lineEn: "He can't be a local — I've never seen him here before.", lineTk: "Ol ýerli bolup bilmez — ony bu ýerde hiç wagt görmedim." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "int-u03-l02-deduction-past",
        titleEn: "Deduction about the Past",
        titleTk: "Geçmiş Barada Çaklama",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Geçmiş barada çaklama ýasanymyzda modal işlik + have + PP ulanylýar. 'must have been' — hökman şeýledi; 'can't have been' — mümkin däldi; 'might have been' — belki şeýledi. Bu gurluş detective gürrüňlerinde we taryhy wakalar barada gürleşeniňde köp ulanylýar.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: Geçmiş çaklama",
                explanationTk: "must have + PP = hökman şeýledi. can't have + PP = mümkin däldi. might/could have + PP = belki şeýledi. Häzirki çaklamadan tapawudy: 'have + PP' goşulýar.",
                pattern: "He must have forgotten. / She can't have heard. / They might have got lost.",
                examples: [
                  { en: "He looks so happy — he must have got the job!", tk: "Ol gaty şat görünýär — hökman işe alyndy!" },
                  { en: "She can't have read the email — she would have replied.", tk: "Ol elektron haty okap bilmedi — jogap bererdi." },
                  { en: "They might have missed the bus — they're very late.", tk: "Olar belki awtobusy gaçyrdylar — gaty giç." },
                ],
              },
            },
            {
              type: "example_set",
              data: {
                titleTk: "Häzirki we geçmiş çaklama deňeşdirmesi",
                examples: [
                  { en: "Now: She must be ill — she looks pale.", tk: "Häzir: Ol hökman keselli — ýüzi solgun." },
                  { en: "Past: She must have been ill yesterday — she looked pale.", tk: "Geçmiş: Ol düýn hökman kesellidi — ýüzi solgundy." },
                  { en: "Now: He can't be the thief — he was here all night.", tk: "Häzir: Ol ogry bolup bilmez — bütin gije bu ýerdedi." },
                  { en: "Past: He can't have stolen it — he wasn't there.", tk: "Geçmiş: Ol ony ogurläp bilmez — ol ýerde däldi." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "int-u03-l03-speculation-language",
        titleEn: "Language for Speculation",
        titleTk: "Çaklama Dili",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Modal işlikleriň çaklama manysynyň ýanynda başga-da çaklama sözleri we sözlemleri bar. 'I imagine...', 'I suppose...', 'It seems...', 'apparently', 'I wonder if...' ýaly sözlemler. Bu sözlemler resmi we gündelik gepleşiklerde köp ulanylýar.",
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "Çaklama aňladýan sözler",
                words: [
                  { en: "apparently", tk: "göründigine görä / habar görä", partOfSpeech: "adverb", exampleEn: "Apparently, he resigned yesterday.", exampleTk: "Habar görä, ol düýn işden çykdy." },
                  { en: "presumably", tk: "çak edilýänçe / garaşylýan ýaly", partOfSpeech: "adverb", exampleEn: "She is late — presumably stuck in traffic.", exampleTk: "Ol giç — çak edilýänçe ulagda gysyldy." },
                  { en: "I imagine", tk: "pikir edýärin / göz önüme getirýärin", partOfSpeech: "verb", exampleEn: "I imagine it must be very cold there in winter.", exampleTk: "Ol ýerde gyşy gaty sowuk bolsa gerek diýip pikir edýärin." },
                  { en: "I wonder", tk: "Geň galýaryn / Bilmek isleýärin", partOfSpeech: "verb", exampleEn: "I wonder if she knows about the meeting.", exampleTk: "Onuň ýygnak barada bilýändigini bilmek isleýärin." },
                ],
              },
            },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "3-nji Bölüm Synagy: Çaklama Modallar",
      questions: [
        { order: 1, questionText: "She knows everything — she _____ be very intelligent.", questionType: "multiple_choice_grammar", options: ["can't", "might", "must", "should"], correctIndex: 2 },
        { order: 2, questionText: "He _____ be the manager — he looks 20 years old!", questionType: "multiple_choice_grammar", options: ["must", "can't", "might", "should"], correctIndex: 1 },
        { order: 3, questionText: "They're not answering — they _____ be busy.", questionType: "multiple_choice_grammar", options: ["must", "can't", "might", "shall"], correctIndex: 2 },
        { order: 4, questionText: "'Göründigine görä / Habar görä' iňlisçe näme?", questionType: "translate_tk_en", options: ["presumably", "apparently", "I wonder", "I imagine"], correctIndex: 1 },
        { order: 5, questionText: "He looks happy — he _____ have got the job!", questionType: "multiple_choice_grammar", options: ["must", "can't", "should", "would"], correctIndex: 0 },
        { order: 6, questionText: "She _____ have read the email — she would have replied.", questionType: "multiple_choice_grammar", options: ["must", "might", "can't", "should"], correctIndex: 2 },
        { order: 7, questionText: "They _____ have missed the bus — they are very late.", questionType: "multiple_choice_grammar", options: ["must", "might", "can't", "should"], correctIndex: 1 },
        { order: 8, questionText: "'Bilmek isleýärin' iňlisçe näme?", questionType: "translate_tk_en", options: ["I imagine", "apparently", "I wonder", "presumably"], correctIndex: 2 },
        { order: 9, questionText: "This bag is so heavy — it _____ have a lot inside it.", questionType: "multiple_choice_grammar", options: ["can't", "might not", "must", "would"], correctIndex: 2 },
        { order: 10, questionText: "Geçmiş çaklama düzümi nähili?", questionType: "translate_en_tk", options: ["modal + işlik", "modal + have + PP", "had + PP", "would + PP"], correctIndex: 1 },
      ],
    },
  },

  // ─── UNIT 4: GERUNDS & INFINITIVES ──────────────────────────────────────
  {
    unitNumber: 4,
    slug: "int-unit-04-gerunds-infinitives",
    titleEn: "Gerunds & Infinitives",
    titleTk: "Gerundlar we Infinitivler",
    description: "Bu bölümde işligiň -ing görnüşi (gerund) we to + işlik (infinitive) yzyna gelýän işlikler öwrenilýär. Stop doing vs stop to do ýaly kyn tapawutlar düşündirilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "int-u04-l01-verb-gerund",
        titleEn: "Verbs Followed by Gerund",
        titleTk: "-ing (Gerund) yzyna gelýän işlikler",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Käbir işlikler yzyna -ing görnüşini (gerund) alýar. Bu işlikleri ýatda saklamaly: enjoy, finish, mind, avoid, consider, keep, suggest, practise, imagine, deny, admit, miss, risk. 'I enjoy swimming.' — 'swimming' işligiň gerund görnüşi.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Gerund alýan işlikler",
                explanationTk: "enjoy, finish, mind, avoid, consider, keep, suggest, imagine, deny, admit, miss, risk, postpone, involve — yzlaryna -ing gelýär. Işlik hem hem at sözi hökmünde ulanylyp bilýär: 'Swimming is good for you.'",
                pattern: "I enjoy + işlik + -ing. She finished + işlik + -ing.",
                examples: [
                  { en: "I enjoy meeting new people.", tk: "Täze adamlar bilen tanşmagy halaýaryn." },
                  { en: "Have you considered moving abroad?", tk: "Daşary ýurda göçmegi pikir etdiňizmi?" },
                  { en: "She admitted taking the money.", tk: "Ol puly alýandygyny boýun aldy." },
                ],
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "-ing alýan möhüm işlikler",
                words: [
                  { en: "avoid", tk: "gaça durmak / saklanmak", partOfSpeech: "verb", exampleEn: "Try to avoid making mistakes.", exampleTk: "Ýalňyşlyk goýbermekden gaça duruň." },
                  { en: "consider", tk: "pikir etmek / göz öňünde tutmak", partOfSpeech: "verb", exampleEn: "I am considering changing jobs.", exampleTk: "Iş çalyşmagy pikir edýärin." },
                  { en: "postpone", tk: "yza süýşürmek / soňa goýmak", partOfSpeech: "verb", exampleEn: "We had to postpone launching the product.", exampleTk: "Önümi çykarmaky yza süýşürmeli bolduk." },
                  { en: "deny", tk: "inkär etmek / boýun almajak bolmak", partOfSpeech: "verb", exampleEn: "He denied stealing the documents.", exampleTk: "Ol resminamalary ogurlaýandygyny inkär etdi." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "int-u04-l02-verb-infinitive",
        titleEn: "Verbs Followed by Infinitive",
        titleTk: "To + Infinitive alýan işlikler",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Beýleki işlikler yzyna 'to + işlik' (infinitive) alýar: want, decide, hope, plan, promise, refuse, agree, manage, fail, learn, choose, need, seem, appear. 'I want to go' — 'to go' infinitive. Bu işlikleri hem ýatda saklamaly.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Infinitive alýan işlikler",
                explanationTk: "want, decide, hope, plan, promise, refuse, agree, manage, fail, learn, choose, need, seem, appear, offer, expect, afford — yzlaryna to + işlik gelýär.",
                pattern: "I want to + işlik. She decided to + işlik.",
                examples: [
                  { en: "She decided to study abroad.", tk: "Ol daşary ýurtda okamak kararyna geldi." },
                  { en: "He refused to sign the contract.", tk: "Ol şertnama gol çekmegi ret etdi." },
                  { en: "They managed to finish on time.", tk: "Olar wagtynda tamamlamaly boldular." },
                ],
              },
            },
            {
              type: "dialogue",
              data: {
                titleTk: "Söhbetdeşlik: Planlar we kararlar",
                exchanges: [
                  { speakerEn: "Öwez", lineEn: "Have you decided what to do after university?", lineTk: "Uniwersitetden soň näme etjekdigiňizi karara geldimi?" },
                  { speakerEn: "Zöhre", lineEn: "I've been considering going into business, but I'm also hoping to work for an international company.", lineTk: "Iş açmagy oýlanyp gelýärin, ýöne halkara kompaniýada işlemegi hem umyt edýärin." },
                  { speakerEn: "Öwez", lineEn: "Have you managed to get any work experience yet?", lineTk: "Iş tejribesi gazanmak başardyňyzmy?" },
                  { speakerEn: "Zöhre", lineEn: "Yes! I've agreed to do an internship this summer. I can't afford to miss such opportunities.", lineTk: "Hawa! Bu tomus tejribelik etmäge ylalaşdym. Şeýle mümkinçilikleri geçirmegi göterip bilemok." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "int-u04-l03-both-different-meaning",
        titleEn: "Verbs with Both Forms — Different Meanings",
        titleTk: "Iki Görnüşi hem alýan işlikler — tapawutly manylar",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Käbir işlikler hem -ing, hem de to + işlik alýar, ýöne manysy tapawutlanýar. Stop, remember, forget, try, regret — bu işlikleriň iki görnüşi tapawutly many berýär. 'I stopped smoking' (taşladym) vs 'I stopped to smoke' (saklandym, çekmek üçin).",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Stop, Remember, Forget, Try — manylaryň tapawudy",
                explanationTk: "Stop + -ing = bir zadı taşlamak. Stop + to inf = bir zat etmek üçin durmak. Remember + -ing = geçmişi ýatlamak. Remember + to inf = bir zadı etmagy ýatlamak (geljek). Try + -ing = synap görmek. Try + to inf = başarmaga çalyşmak.",
                pattern: "I stopped smoking. (taşladym) / I stopped to smoke. (çekmek üçin saklandym)",
                examples: [
                  { en: "I remember meeting her at the conference. (I recall the memory.)", tk: "Ony maslahatda görenim ýadymda. (Ýatlama)" },
                  { en: "Remember to call me tomorrow! (Don't forget to do it.)", tk: "Ertir maňa jaň etmeği ýatdan çykarma! (Geljekde et)" },
                  { en: "Have you tried using a different browser? (Synap gör.)", tk: "Başga brauzer ulanmagy synap gördüňizmi? (Deňeşdir)" },
                  { en: "I tried to open the door, but it was locked. (Başarjak boldym.)", tk: "Gapyny açmaga çalyşdym, ýöne gulplydy." },
                ],
              },
            },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "4-nji Bölüm Synagy: Gerund we Infinitive",
      questions: [
        { order: 1, questionText: "I enjoy _____ to new places. (travel)", questionType: "multiple_choice_grammar", options: ["travel", "to travel", "travelled", "travelling"], correctIndex: 3 },
        { order: 2, questionText: "She decided _____ abroad. (study)", questionType: "multiple_choice_grammar", options: ["studying", "study", "to study", "studied"], correctIndex: 2 },
        { order: 3, questionText: "'Gaça durmak' iňlisçe näme?", questionType: "translate_tk_en", options: ["deny", "consider", "avoid", "postpone"], correctIndex: 2 },
        { order: 4, questionText: "He stopped _____ when the doctor advised him. (smoke)", questionType: "multiple_choice_grammar", options: ["smoke", "to smoke", "smoking", "smoked"], correctIndex: 2 },
        { order: 5, questionText: "I stopped _____ buy some water. (to/for)", questionType: "multiple_choice_grammar", options: ["smoking", "to buy", "buy", "buying"], correctIndex: 1 },
        { order: 6, questionText: "Remember _____ the door when you leave! (lock)", questionType: "multiple_choice_grammar", options: ["locking", "lock", "locked", "to lock"], correctIndex: 3 },
        { order: 7, questionText: "I remember _____ him at school. (meet)", questionType: "multiple_choice_grammar", options: ["to meet", "meet", "meeting", "met"], correctIndex: 2 },
        { order: 8, questionText: "They managed _____ the project on time. (finish)", questionType: "multiple_choice_grammar", options: ["finishing", "finish", "to finish", "finished"], correctIndex: 2 },
        { order: 9, questionText: "'Inkär etmek' iňlisçe näme?", questionType: "translate_tk_en", options: ["admit", "avoid", "deny", "postpone"], correctIndex: 2 },
        { order: 10, questionText: "Have you considered _____ to a new city? (move)", questionType: "multiple_choice_grammar", options: ["move", "to move", "moved", "moving"], correctIndex: 3 },
      ],
    },
  },

  // ─── UNIT 5: LINKING WORDS ───────────────────────────────────────────────
  {
    unitNumber: 5,
    slug: "int-unit-05-linking-words",
    titleEn: "Linking Words & Discourse Markers",
    titleTk: "Baglanyşdyryjy Sözler",
    description: "Bu bölümde sözlemleri we pikirleri bir-birine baglanyşdyrýan sözler öwrenilýär: although, despite, however, therefore, on the other hand, as a result we başgalar.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "int-u05-l01-contrast-concession",
        titleEn: "Contrast & Concession",
        titleTk: "Garşylyk we Razylyk",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Garşylyk baglanyşdyryjy sözleri iki garşylykly pikri birleşdirýär. 'Although/Even though' — sözlem içinde ulanylýar. 'However/Nevertheless' — täze sözlemleri baglanyşdyrýar. 'Despite/In spite of' — yzyna sözlem däl-de at sözi ýa-da gerund gelýär.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Garşylyk sözleriniň tapawudy",
                explanationTk: "Although + sözlem. Despite/In spite of + at sözi/-ing. However/Nevertheless — sözlem başynda ýa-da ortasynda, iki tarapynda hem dyngy belgisi. Yet = ýöne (resmi däl).",
                pattern: "Although it was cold, we went out. / Despite the cold, we went out. / It was cold. However, we went out.",
                examples: [
                  { en: "Although she was tired, she continued working.", tk: "Ýadaw bolsa-da, işlemeği dowam etdirdi." },
                  { en: "Despite the rain, we had a great time.", tk: "Ýagşa garamazdan, gowy wagt geçirdik." },
                  { en: "The food was expensive. However, it was worth it.", tk: "Nahar gymmatdy. Ýöne oňa mynasyp çykdy." },
                ],
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "Garşylyk baglanyşdyryjy sözler",
                words: [
                  { en: "although / even though", tk: "bolsa-da / garamazdan", partOfSpeech: "conjunction", exampleEn: "Even though he studied hard, he failed.", exampleTk: "Gaty okan bolsa-da, synagdan geçip bilmedi." },
                  { en: "despite / in spite of", tk: "... garamazdan", partOfSpeech: "preposition", exampleEn: "In spite of the noise, I fell asleep.", exampleTk: " Şowurlyga garamazdan, uklaýardym." },
                  { en: "however / nevertheless", tk: "ýöne / şeýle-de bolsa", partOfSpeech: "adverb", exampleEn: "It was risky. Nevertheless, we continued.", exampleTk: "Howply wagt. Şeýle-de bolsa, dowam etdik." },
                  { en: "on the other hand", tk: "beýleki tarapdan", partOfSpeech: "adverb", exampleEn: "City life is exciting. On the other hand, it is very expensive.", exampleTk: "Şäher durmuşy gyzykly. Beýleki tarapdan, gaty gymmat." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "int-u05-l02-cause-result",
        titleEn: "Cause & Result",
        titleTk: "Sebäp we Netije",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Sebäp-netije baglanyşdyryjylary bir zady beýlekiniň sebäbi ýa-da netijesi hökmünde görkezýär. 'Because/Since/As' — sebäp sözlemleri. 'Therefore/As a result/Consequently' — netije sözlemleri. 'So' — gündelik gepleşikde ulanylýar.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Sebäp we netije sözleri",
                explanationTk: "Because/Since/As + sebäp sözlemi. Therefore/As a result/Consequently — netije, täze sözlem başynda. So — sözlem içinde (baglanyşdyryjy). Due to/Because of + at sözi.",
                pattern: "She left early because she was tired. / She was tired, so she left early. / She was tired. Therefore, she left early.",
                examples: [
                  { en: "Since the project was delayed, we had to renegotiate the deadline.", tk: "Taslama gijä galansoň, möhleti täzeden ylalaşmaly bolduk." },
                  { en: "As a result of the bad weather, the match was cancelled.", tk: "Erbet hawa sebäpli, oýun ýatyryldy." },
                  { en: "He worked very hard; consequently, he was promoted.", tk: "Ol gaty köp işledi; netijede, wezipesi ýokarlandyryldy." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "int-u05-l03-addition-purpose",
        titleEn: "Addition & Purpose",
        titleTk: "Goşmak we Maksat",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Goşmak baglanyşdyryjylary: 'In addition', 'Furthermore', 'Moreover', 'What is more', 'Besides'. Maksat üçin: 'in order to', 'so as to', 'so that', 'to'. Bulary bilmek resmi ýazuwyňyzy we çykyşyňyzy gowulandyrýar.",
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "Goşmak we maksat sözleri",
                words: [
                  { en: "furthermore / moreover", tk: "mundan başga-da / şeýle hem", partOfSpeech: "adverb", exampleEn: "The product is affordable. Furthermore, it is high quality.", exampleTk: "Önüm arzan. Mundan başga-da, ýokary hilli." },
                  { en: "in addition to", tk: "... goşmaça / ... bilelikde", partOfSpeech: "preposition", exampleEn: "In addition to his salary, he gets a bonus.", exampleTk: "Aýlygyna goşmaça bonus alýar." },
                  { en: "in order to / so as to", tk: "...etmek üçin (resmi)", partOfSpeech: "conjunction", exampleEn: "She studied hard in order to pass the exam.", exampleTk: "Synagdan geçmek üçin gaty okady." },
                  { en: "so that", tk: "...bolsun diýip / ...üçin (sözlem bilen)", partOfSpeech: "conjunction", exampleEn: "He left early so that he could catch the train.", exampleTk: "Otlyya ýetişsin diýip ir gitdi." },
                ],
              },
            },
            {
              type: "example_set",
              data: {
                titleTk: "Baglanyşdyryjy sözleriň ähli görnüşleri",
                examples: [
                  { en: "The new system is faster. Moreover, it is easier to use.", tk: "Täze ulgam çaltrak. Mundan başga-da, ulanmasy aňsat." },
                  { en: "Despite the high cost, the project was approved.", tk: "Ýokary çykdajylara garamazdan, taslama tassyklandy." },
                  { en: "She rehearsed many times so that she would feel confident.", tk: "Özüne ynamy bolsun diýip köp gezek türgenleşdi." },
                  { en: "He failed. However, he didn't give up.", tk: "Ol şowsuz çykdy. Şeýle-de bolsa, el çekmedi." },
                ],
              },
            },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "5-nji Bölüm Synagy: Baglanyşdyryjy Sözler",
      questions: [
        { order: 1, questionText: "_____ it was raining, we continued the match.", questionType: "multiple_choice_grammar", options: ["Despite", "However", "Although", "Therefore"], correctIndex: 2 },
        { order: 2, questionText: "The food was good. _____, the service was terrible.", questionType: "multiple_choice_grammar", options: ["Although", "Despite", "However", "Because"], correctIndex: 2 },
        { order: 3, questionText: "She studied hard. _____, she passed the exam.", questionType: "multiple_choice_grammar", options: ["Although", "Despite", "However", "As a result"], correctIndex: 3 },
        { order: 4, questionText: "'Mundan başga-da' iňlisçe näme?", questionType: "translate_tk_en", options: ["however", "although", "furthermore", "therefore"], correctIndex: 2 },
        { order: 5, questionText: "_____ the bad weather, the event was a success.", questionType: "multiple_choice_grammar", options: ["Although", "Despite", "However", "Therefore"], correctIndex: 1 },
        { order: 6, questionText: "He left early _____ he could catch the last bus.", questionType: "multiple_choice_grammar", options: ["despite", "although", "so that", "however"], correctIndex: 2 },
        { order: 7, questionText: "'Netijede / Şonuň üçin' iňlisçe näme?", questionType: "translate_tk_en", options: ["although", "despite", "however", "therefore"], correctIndex: 3 },
        { order: 8, questionText: "_____ the high price, many people bought it.", questionType: "multiple_choice_grammar", options: ["Although", "In spite of", "However", "Therefore"], correctIndex: 1 },
        { order: 9, questionText: "She practised every day _____ she could improve her skills.", questionType: "multiple_choice_grammar", options: ["although", "in order to", "despite", "however"], correctIndex: 1 },
        { order: 10, questionText: "'Beýleki tarapdan' iňlisçe näme?", questionType: "translate_tk_en", options: ["furthermore", "therefore", "on the other hand", "in addition"], correctIndex: 2 },
      ],
    },
  },

  // ─── UNIT 6: QUESTION TAGS ──────────────────────────────────────────────
  {
    unitNumber: 6,
    slug: "int-unit-06-question-tags",
    titleEn: "Question Tags",
    titleTk: "Sorag Guýruklary",
    description: "Bu bölümde sorag guýruklary (question tags) öwrenilýär: 'You're coming, aren't you?', 'She doesn't know, does she?' Bu gurluş Iňlisçede gürleşeniňde gaty köp ulanylýar.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "int-u06-l01-question-tags-form",
        titleEn: "Question Tags — Form",
        titleTk: "Sorag Guýruklary — Düzümi",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Sorag guýruklary — sözlemler dogrymydyr diýip tassyklamak ýa-da ylalaşmak üçin sözüň ahyryna goşulýan kiçi soraglar. Esasy kural: tassyklama sözlemi → inkär guýruk; inkär sözlem → tassyklama guýruk. Sözlemdäki kömekçi işlik guýrukda ulanylýar.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: Sorag guýrugy düzümi",
                explanationTk: "Tassyklama + inkär guýruk: 'She is clever, isn't she?' Inkär + tassyklama guýruk: 'He isn't here, is he?' Kömekçi işlik: be, do/does/did, have/has, will, would, can, should...",
                pattern: "She is [sypat], isn't she? / They can swim, can't they? / He didn't call, did he?",
                examples: [
                  { en: "You're coming to the party, aren't you?", tk: "Partiýa gelýärsiňiz, gelemizokmy?" },
                  { en: "She hasn't called yet, has she?", tk: "Ol heniz jaň etmedi, etdimi?" },
                  { en: "They won't be late, will they?", tk: "Olar giç gelmez, gelermi?" },
                ],
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "Sorag guýrugynda ulanylýan kömekçi işlikler",
                words: [
                  { en: "be (am/is/are)", tk: "boluş kömekçi işligi", partOfSpeech: "verb", exampleEn: "It's cold today, isn't it?", exampleTk: "Bu gün sowuk, sowuk däl boldy?" },
                  { en: "do/does/did", tk: "güýçlendiriji kömekçi işlik", partOfSpeech: "verb", exampleEn: "You like coffee, don't you?", exampleTk: "Kofe halaýarsyňyz, halamaýarmysyňyz?" },
                  { en: "have/has", tk: "PP kömekçi işligi", partOfSpeech: "verb", exampleEn: "She has finished, hasn't she?", exampleTk: "Ol tamamlady, tamamlamadymy?" },
                  { en: "will/would", tk: "geljek/şert kömekçi işligi", partOfSpeech: "verb", exampleEn: "You'll help me, won't you?", exampleTk: "Kömek edersiňiz, etmersiňizmi?" },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "int-u06-l02-question-tags-use",
        titleEn: "Question Tags in Conversation",
        titleTk: "Söhbetdeşlikde Sorag Guýruklary",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Sorag guýruklary iki meýil bilen aýdylýar. 1) Aşak inýän ses = ylalaşmak üçin tassyklama: 'Beautiful day, isn't it?' (Hawa diýip garaşýar). 2) Ýokary çykýan ses = hakyky sorag: 'You locked the door, didn't you?' (Hakykatan bilmek isleýär). Iňlisçe gepleşende bu tapawuty bilmek möhüm.",
              },
            },
            {
              type: "dialogue",
              data: {
                titleTk: "Söhbetdeşlik: Sorag guýruklaryny ulanmak",
                exchanges: [
                  { speakerEn: "Nurbibi", lineEn: "This café has a great atmosphere, doesn't it?", lineTk: "Bu kafeniň atmosferasy ajaýyp, şeýle dälmi?" },
                  { speakerEn: "Halit", lineEn: "Yes, it does! You've been here before, haven't you?", lineTk: "Hawa! Siz bu ýerde öň bolduňyz, bolduňyzmy?" },
                  { speakerEn: "Nurbibi", lineEn: "A few times, yes. You don't come here often, do you?", lineTk: "Birnäçe gezek, hawa. Siz bu ýere köp gelmeýärsiňiz, gelemizokmy?" },
                  { speakerEn: "Halit", lineEn: "Not really — it's a bit expensive. But the coffee is excellent, isn't it?", lineTk: "Köp däl — biraz gymmat. Ýöne kofesi ajaýyp, şeýle dälmi?" },
                ],
              },
            },
            {
              type: "example_set",
              data: {
                titleTk: "Dürli sorag guýrugy mysallary",
                examples: [
                  { en: "The exam was difficult, wasn't it?", tk: "Synag kyndy, kyn dälmidi?" },
                  { en: "She can speak three languages, can't she?", tk: "Ol üç dil bilýär, bilemizokmy?" },
                  { en: "We should leave soon, shouldn't we?", tk: "Biz tiz gitmeli, gitmeli dälmi?" },
                  { en: "Nobody told you, did they?", tk: "Hiç kim saňa aýtmady, aýtdymy?" },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "int-u06-l03-negative-tags-special",
        titleEn: "Special Cases in Question Tags",
        titleTk: "Aýratyn Ýagdaýlar",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Käbir aýratyn ýagdaýlar bar: 'I am' → 'aren't I?'. 'Let's' → 'shall we?'. Buýruk sözlemleri → 'will you?'. 'Nothing/nobody/never' (inkär manysy bar) → tassyklama guýruk. 'Everyone/somebody/nobody' → they.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Aýratyn sorag guýruk ýagdaýlary",
                explanationTk: "I am clever, aren't I? (am → aren't). Let's go, shall we? (Let's → shall). Open the door, will you? (buýruk → will). Nothing happened, did it? (nothing = inkär → tassyklama). Everyone knows, don't they? (everyone → they).",
                pattern: "I am early, aren't I? / Let's start, shall we? / Close the door, will you?",
                examples: [
                  { en: "I'm the last one, aren't I?", tk: "Men soňkusy, şeýle dälmi?" },
                  { en: "Let's take a break, shall we?", tk: "Arakesme alalyň, alalyňmy?" },
                  { en: "Nobody called, did they?", tk: "Hiç kim jaň etmedi, etdimi?" },
                ],
              },
            },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "6-njy Bölüm Synagy: Sorag Guýruklary",
      questions: [
        { order: 1, questionText: "She's coming tomorrow, _____ she?", questionType: "multiple_choice_grammar", options: ["is", "isn't", "was", "wasn't"], correctIndex: 1 },
        { order: 2, questionText: "They don't like coffee, _____ they?", questionType: "multiple_choice_grammar", options: ["don't", "didn't", "do", "did"], correctIndex: 2 },
        { order: 3, questionText: "You've met him before, _____ you?", questionType: "multiple_choice_grammar", options: ["have", "haven't", "had", "hadn't"], correctIndex: 1 },
        { order: 4, questionText: "It was a great film, _____ it?", questionType: "multiple_choice_grammar", options: ["was", "wasn't", "is", "isn't"], correctIndex: 1 },
        { order: 5, questionText: "Let's go now, _____ we?", questionType: "multiple_choice_grammar", options: ["will", "won't", "shall", "should"], correctIndex: 2 },
        { order: 6, questionText: "He can't drive, _____ he?", questionType: "multiple_choice_grammar", options: ["can", "can't", "could", "couldn't"], correctIndex: 0 },
        { order: 7, questionText: "Nobody called, _____ they?", questionType: "multiple_choice_grammar", options: ["didn't", "don't", "did", "does"], correctIndex: 2 },
        { order: 8, questionText: "I am right, _____ I?", questionType: "multiple_choice_grammar", options: ["am not", "amn't", "aren't", "isn't"], correctIndex: 2 },
        { order: 9, questionText: "Close the door, _____ you?", questionType: "multiple_choice_grammar", options: ["shall", "won't", "will", "would"], correctIndex: 2 },
        { order: 10, questionText: "She hasn't replied yet, _____ she?", questionType: "multiple_choice_grammar", options: ["has", "hasn't", "have", "haven't"], correctIndex: 0 },
      ],
    },
  },

  // ─── UNIT 7: ARTICLES ────────────────────────────────────────────────────
  {
    unitNumber: 7,
    slug: "int-unit-07-articles",
    titleEn: "Articles — A, An, The & Zero",
    titleTk: "Artikllar — A, An, The we Artikl ýok",
    description: "Bu bölümde Iňlis diliniň artikl ulgamy — a/an (belli däl), the (belli) we artikl ulanylmaýan ýagdaýlar çuňňur öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "int-u07-l01-a-an-indefinite",
        titleEn: "A & An — Indefinite Article",
        titleTk: "A we An — Belli däl artikl",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "'A/an' — belli däl artikl. Ilkinji gezek agzalan, belli däl, ýeke sanly at sözleri bilen ulanylýar. Ses bilen başlanýan sözleriň öňünde 'a', çekimli ses bilen başlanýan sözleriň öňünde 'an' ulanylýar. Hünär, din, milliýet aýdylanda hem ulanylýar.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "'A' we 'an' tapawudy",
                explanationTk: "'A' — çekimsiz ses bilen başlanýan sözleriň öňünde: a book, a car, a university (ýu ses). 'An' — çekimli ses bilen başlanýan sözleriň öňünde: an apple, an hour (h sessiz), an MBA.",
                pattern: "a + çekimsiz ses: a car, a book. an + çekimli ses: an apple, an hour.",
                examples: [
                  { en: "She is a doctor at a big hospital.", tk: "Ol uly hassahanada lukman." },
                  { en: "I bought an umbrella because it was raining.", tk: "Ýagyş ýagyp duransoň el tutaç satyn aldym." },
                  { en: "He is an honest man — I trust him completely.", tk: "Ol dogruçyl adam — oňa doly ynanyaryn." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "int-u07-l02-the-definite",
        titleEn: "The — Definite Article",
        titleTk: "The — Belli artikl",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "'The' — belli artikl. Ikimiz hem bilýän, öň agzalan, ýeke bolan ýa-da haýsy oldugy düşnükli at sözleriň öňünde ulanylýar. Ýerler bilen: 'the Caspian Sea', 'the Sahara', 'the Eiffel Tower'. Superlative bilen: 'the best', 'the most famous'.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "'The' ulanylýan esasy ýagdaýlar",
                explanationTk: "1) Öň agzalan: 'I saw a dog. The dog was huge.' 2) Ýeke bolan: the sun, the moon, the internet. 3) Derýalar, deňizler, daglar, ýurtlar toplumy: the Nile, the Alps, the USA. 4) Superlative bilen: the best. 5) Milli toparlar: the British.",
                pattern: "I have a laptop. The laptop is very fast.",
                examples: [
                  { en: "The sun rises in the east.", tk: "Gün gündogardan dogýar." },
                  { en: "She is the best student in the class.", tk: "Ol synypda iň gowy okuwçy." },
                  { en: "Have you been to the USA?", tk: "ABŞ-da bolduňyzmy?" },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "int-u07-l03-zero-article",
        titleEn: "Zero Article",
        titleTk: "Artikl ulanylmaýan ýagdaýlar",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Käbir ýagdaýlarda artikl ulanylmaýar: köplük at sözler umumy manyda ('Dogs are friendly'), madde atlar umumy manyda ('Water is important'), ýurtlar (Turkey, France), şäherleriň ady (Paris, Ashgabat), diller (English, Turkmen), ders atlary (History, Maths).",
              },
            },
            {
              type: "example_set",
              data: {
                titleTk: "Artikl ulanylmaýan ýagdaýlar — mysallar",
                examples: [
                  { en: "Life is full of surprises. (Abstract noun, general)", tk: "Durmuş geň-taňlyklardan doly. (Umumy manyda)" },
                  { en: "I love music, especially jazz. (General, not specific)", tk: "Sazy, esasanam jazz söýýärin. (Umumy manyda)" },
                  { en: "She studied medicine at university. (Subject + institution, general)", tk: "Ol uniwersitetde lukmançylyk okady. (Umumy manydaky ders we ýer)" },
                  { en: "Turkey is famous for its food. (Country name)", tk: "Türkiýe nähary bilen meşhur. (Ýurt ady)" },
                ],
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "Artikl seçiminde kyn sözler",
                words: [
                  { en: "school/the school", tk: "mekdep (manysy) / şol mekdep", partOfSpeech: "noun", exampleEn: "She is still at school. (studying) / The school is near my house.", exampleTk: "Ol heniz mekdepde. / Şol mekdep öýümiň golaýynda." },
                  { en: "hospital/the hospital", tk: "hassahana (ýatmak) / şol hassahana", partOfSpeech: "noun", exampleEn: "He is in hospital. (as patient) / The hospital opened in 2010.", exampleTk: "Ol hassahanada. (näsag) / Şol hassahana 2010-da açyldy." },
                ],
              },
            },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "7-nji Bölüm Synagy: Artikllar",
      questions: [
        { order: 1, questionText: "She is _____ engineer at _____ big company.", questionType: "multiple_choice_grammar", options: ["a / a", "an / a", "the / a", "an / the"], correctIndex: 1 },
        { order: 2, questionText: "I saw _____ dog in the park. _____ dog was very friendly.", questionType: "multiple_choice_grammar", options: ["a / A", "the / The", "a / The", "the / A"], correctIndex: 2 },
        { order: 3, questionText: "_____ sun is very hot today.", questionType: "multiple_choice_grammar", options: ["A", "An", "The", "(artikl ýok)"], correctIndex: 2 },
        { order: 4, questionText: "She studies _____ medicine at _____ university.", questionType: "multiple_choice_grammar", options: ["the / the", "a / a", "(ýok) / (ýok)", "the / a"], correctIndex: 2 },
        { order: 5, questionText: "Have you been to _____ United States?", questionType: "multiple_choice_grammar", options: ["a", "an", "the", "(artikl ýok)"], correctIndex: 2 },
        { order: 6, questionText: "_____ life is full of surprises. (umumy many)", questionType: "multiple_choice_grammar", options: ["A", "The", "An", "(artikl ýok)"], correctIndex: 3 },
        { order: 7, questionText: "He is _____ honest man.", questionType: "multiple_choice_grammar", options: ["a", "an", "the", "(artikl ýok)"], correctIndex: 1 },
        { order: 8, questionText: "She is _____ best student in the class.", questionType: "multiple_choice_grammar", options: ["a", "an", "the", "(artikl ýok)"], correctIndex: 2 },
        { order: 9, questionText: "I love _____ music, especially classical.", questionType: "multiple_choice_grammar", options: ["a", "the", "(artikl ýok)", "an"], correctIndex: 2 },
        { order: 10, questionText: "He went to _____ hospital after the accident. (näsag hökmünde)", questionType: "multiple_choice_grammar", options: ["a", "an", "the", "(artikl ýok)"], correctIndex: 3 },
      ],
    },
  },

  // ─── UNIT 8: PHRASAL VERBS ───────────────────────────────────────────────
  {
    unitNumber: 8,
    slug: "int-unit-08-phrasal-verbs",
    titleEn: "Phrasal Verbs",
    titleTk: "Goşundyly Işlikler",
    description: "Bu bölümde Iňlis dilindäki iň möhüm goşundyly işlikler (phrasal verbs) öwrenilýär. Aýrylýan we aýrylmaýan görnüşleri, manysynyň üýtgemesi barada öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "int-u08-l01-common-phrasal-verbs",
        titleEn: "Common Phrasal Verbs",
        titleTk: "Iň Köp Ulanylýan Goşundyly Işlikler",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Goşundyly işlikler — işlik + bölejik (up, down, out, in, on, off...) birikmesinden emele gelýär we köplenç düzüm sözleriň manysyna gabat gelmeýär. 'Give up' = taşlamak (give + up = ýokarky bermek däl). Bulary ýatda saklamak Iňlisçäni has tebigy görünmäge kömek edýär.",
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "Iň möhüm goşundyly işlikler",
                words: [
                  { en: "give up", tk: "taşlamak / el çekmek", partOfSpeech: "verb", exampleEn: "Don't give up — keep trying!", exampleTk: "El çekme — çalyşmagy dowam et!" },
                  { en: "look after", tk: "seretmek / ideg etmek", partOfSpeech: "verb", exampleEn: "She looks after her elderly parents.", exampleTk: "Ol garry ene-atasyna ideg edýär." },
                  { en: "find out", tk: "bilmek / anyklamak", partOfSpeech: "verb", exampleEn: "Did you find out what happened?", exampleTk: "Näme bolandygyny bildimi?" },
                  { en: "set up", tk: "döretmek / gurmak", partOfSpeech: "verb", exampleEn: "He set up his own business at 25.", exampleTk: "Ol 25 ýaşynda öz işini gurdy." },
                  { en: "carry out", tk: "ýerine ýetirmek / amala aşyrmak", partOfSpeech: "verb", exampleEn: "The scientists carried out a number of experiments.", exampleTk: "Alymlar birnäçe tejribe geçirdiler." },
                  { en: "put off", tk: "yza süýşürmek / soňa goýmak", partOfSpeech: "verb", exampleEn: "Don't put off until tomorrow what you can do today.", exampleTk: "Bu gün edip biljek zadyňy ertire goýma." },
                  { en: "turn down", tk: "ret etmek / kabul etmemek", partOfSpeech: "verb", exampleEn: "She turned down the job offer.", exampleTk: "Ol iş teklifini ret etdi." },
                  { en: "come up with", tk: "oýlap tapmak / pikir öňe sürmek", partOfSpeech: "verb", exampleEn: "Can you come up with a better solution?", exampleTk: "Has gowy çözgüt oýlap tapyp bilersiňizmi?" },
                ],
              },
            },
            {
              type: "dialogue",
              data: {
                titleTk: "Söhbetdeşlik: Goşundyly işlikleri ulanmak",
                exchanges: [
                  { speakerEn: "Myradow", lineEn: "I found out that they're setting up a new department.", lineTk: "Täze bölüm gurýandyklaryny bildim." },
                  { speakerEn: "Annagül", lineEn: "Really? Who came up with that idea?", lineTk: "Hakykatanmy? Bu pikiri kim öňe sürdi?" },
                  { speakerEn: "Myradow", lineEn: "The director. They're going to carry out a review first though.", lineTk: "Direktor. Ýöne ozaly baha beriş geçirjekler." },
                  { speakerEn: "Annagül", lineEn: "I hope they don't put off the decision too long.", lineTk: "Umyt edýärin kararyň alynmagy gaty uzaga çekmez." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "int-u08-l02-separable-inseparable",
        titleEn: "Separable & Inseparable Phrasal Verbs",
        titleTk: "Aýrylýan we Aýrylmaýan Goşundyly Işlikler",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Käbir goşundyly işliklerde at sözi işlik bilen bölejik arasynda ýa-da soňundan goýup bolýar (aýrylýan). 'Turn off the light' ýa-da 'Turn the light off'. Emma at sözi çalyşma (pronoun) bolsa, hökman arasynda bolmaly: 'Turn it off' (off it däl). Aýrylmaýanlar: 'look after' — ikä bölünip bilmeýär.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Aýrylýan we aýrylmaýan düzgün",
                explanationTk: "Aýrylýan: işlik + at sözi + bölejik ýa-da işlik + bölejik + at sözi. Emma çalyşma bilen: işlik + çalyşma + bölejik hökman. Aýrylmaýan: işlik + bölejik + at sözi (arasynda goýmak bolmaýar).",
                pattern: "Turn off the TV. / Turn the TV off. / Turn it off. (NOT: turn off it) / Look after the children. (NOT: look the children after)",
                examples: [
                  { en: "Can you turn down the music? / Can you turn it down?", tk: "Sazy kiçeltmek bolarmydyňyz? / Ony kiçeldip bilersiňizmi?" },
                  { en: "She looks after her grandmother. (NOT: looks her grandmother after)", tk: "Ol enesine seretýär. (bölemek bolmaýar)" },
                  { en: "I'll think over the offer. / I'll think it over.", tk: "Teklibi oýlanyşjakdyryn. / Muny oýlanyşjakdyryn." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "int-u08-l03-phrasal-verbs-topics",
        titleEn: "Phrasal Verbs by Topic",
        titleTk: "Mowzuga görä Goşundyly Işlikler",
        content: {
          blocks: [
            {
              type: "vocabulary_list",
              data: {
                titleTk: "Gündelik durmuş — goşundyly işlikler",
                words: [
                  { en: "wake up / get up", tk: "oýanmak / turýmak", partOfSpeech: "verb", exampleEn: "I wake up at 7 but I don't get up until 7:30.", exampleTk: "Men sagat 7-de oýanýaryn, ýöne 7:30-a çenli turmaýaryn." },
                  { en: "pick up / drop off", tk: "almak / düşürmek (ulag bilen)", partOfSpeech: "verb", exampleEn: "Can you pick me up from the station?", exampleTk: "Meni stansiýadan alyp bilersiňizmi?" },
                  { en: "run out of", tk: "gutarmak / tükenmek", partOfSpeech: "verb", exampleEn: "We've run out of coffee — I'll buy some.", exampleTk: "Kofe gutarydy — biraz alaryn." },
                  { en: "deal with", tk: "çözmek / iş salyşmak", partOfSpeech: "verb", exampleEn: "How do you deal with stressful situations?", exampleTk: "Stresli ýagdaýlara nähili çözgüt tapýarsyňyz?" },
                  { en: "look forward to", tk: "sabyrsyzlyk bilen garaşmak", partOfSpeech: "verb", exampleEn: "I'm looking forward to the holiday.", exampleTk: "Dynç alşa sabyrsyzlyk bilen garaşýaryn." },
                  { en: "go through", tk: "başdan geçirmek / içinden geçmek", partOfSpeech: "verb", exampleEn: "She went through a difficult period last year.", exampleTk: "Ol geçen ýyl kyn döwri başdan geçirdi." },
                ],
              },
            },
            {
              type: "example_set",
              data: {
                titleTk: "Goşundyly işlikler — jümle mysallary",
                examples: [
                  { en: "I'm really looking forward to seeing you next week.", tk: "Gelýän hepde sizi görmäge sabyrsyzlyk bilen garaşýaryn." },
                  { en: "We ran out of time before we could finish everything.", tk: "Hemme zady gutarmazyňdan öň wagt gutyrydy." },
                  { en: "She had to deal with many challenges when she moved abroad.", tk: "Daşary ýurda göçeninde köp kynçylyklar bilen ýüzleşmeli boldy." },
                ],
              },
            },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "8-nji Bölüm Synagy: Goşundyly Işlikler",
      questions: [
        { order: 1, questionText: "'Give up' Türkmençede näme?", questionType: "translate_en_tk", options: ["Seretmek", "Taşlamak / el çekmek", "Anyklamak", "Döretmek"], correctIndex: 1 },
        { order: 2, questionText: "She _____ her job offer because the salary was too low. (reject)", questionType: "multiple_choice_grammar", options: ["turned up", "turned down", "set up", "put off"], correctIndex: 1 },
        { order: 3, questionText: "Can you turn _____ the music — it's too loud?", questionType: "multiple_choice_grammar", options: ["up", "on", "down", "in"], correctIndex: 2 },
        { order: 4, questionText: "'Sabyrsyzlyk bilen garaşmak' iňlisçe näme?", questionType: "translate_tk_en", options: ["deal with", "go through", "look forward to", "run out of"], correctIndex: 2 },
        { order: 5, questionText: "We've _____ milk — can you get some from the shop?", questionType: "multiple_choice_grammar", options: ["run out of", "give up", "find out", "look after"], correctIndex: 0 },
        { order: 6, questionText: "Can you pick _____ from the airport? (me)", questionType: "multiple_choice_grammar", options: ["up me", "me up", "me out", "out me"], correctIndex: 1 },
        { order: 7, questionText: "'Anyklamak / Bilmek' iňlisçe näme?", questionType: "translate_tk_en", options: ["set up", "give up", "find out", "look after"], correctIndex: 2 },
        { order: 8, questionText: "She _____ her elderly parents every weekend.", questionType: "multiple_choice_grammar", options: ["looks after", "looks after of", "looks the after", "is looking after of"], correctIndex: 0 },
        { order: 9, questionText: "'Carry out' Türkmençede näme?", questionType: "translate_en_tk", options: ["Taşlamak", "Ýerine ýetirmek", "Döretmek", "Ret etmek"], correctIndex: 1 },
        { order: 10, questionText: "Don't _____ your homework — do it now! (put off)", questionType: "multiple_choice_grammar", options: ["put off it", "off put it", "put it off", "put up it"], correctIndex: 2 },
      ],
    },
  },

  // ─── UNIT 9: ADVANCED PASSIVE ────────────────────────────────────────────
  {
    unitNumber: 9,
    slug: "int-unit-09-advanced-passive",
    titleEn: "Advanced Passive Voice",
    titleTk: "Ösen Passyw Görnüş",
    description: "Bu bölümde passyw görnüşiň ösen görnüşleri öwrenilýär: dowam edýän passyw (is being done), tamamlanan passyw (has been done), modal passyw (should be done) we habar sözlemlerde passyw.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "int-u09-l01-continuous-perfect-passive",
        titleEn: "Continuous & Perfect Passive",
        titleTk: "Dowam Edýän we Tamamlanan Passyw",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Passyw görnüşiň dürli zaman görnüşleri bar. Häzirki dowam edýän passyw: 'is/are being + PP' ('The road is being repaired'). Tamamlanan passyw: 'has/have been + PP' ('The report has been sent'). Geçen tamamlanan passyw: 'had been + PP'.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Passyw zaman tablisasy",
                explanationTk: "Häzirki: is/are + PP. Geçen: was/were + PP. Häzirki dowam: is/are being + PP. Geçen dowam: was/were being + PP. Tamamlanan: has/have been + PP. Geçen tamamlanan: had been + PP.",
                pattern: "The road is being repaired. / The report has been sent. / The house had been sold.",
                examples: [
                  { en: "The new hospital is being built in the north of the city.", tk: "Täze hassahana şäheriň demirgazygynda gurulýar." },
                  { en: "All the invitations have been sent.", tk: "Ähli çakylyklar ugradyldy." },
                  { en: "By the time I arrived, the meeting had already been cancelled.", tk: "Men ýetip baranyma, ýygnak eýýäm ýatyrylypdyr." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "int-u09-l02-modal-passive",
        titleEn: "Modal Passive & Reporting Verbs",
        titleTk: "Modal Passyw we Habar Işlikleri bilen Passyw",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Modal işlikler bilen hem passyw görnüş ulanylýar: 'should be done', 'must be checked', 'can be improved'. Habar işlikleri bilen hem köplenç passyw ulanylýar: 'It is said that...', 'It is believed that...', 'He is thought to be...'",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Modal Passyw we Habar Passyw",
                explanationTk: "Modal passyw: modal + be + PP. Habar passyw iki görnüş: 'It is said that + sözlem' ýa-da '[Adam/Zat] is said to + işlik'.",
                pattern: "This should be done immediately. / It is believed that he is abroad. / He is believed to be abroad.",
                examples: [
                  { en: "This form must be signed by both parties.", tk: "Bu resminama iki tarap tarapyndan gol çekilmeli." },
                  { en: "It is reported that hundreds of people attended.", tk: "Ýüzlerçe adamyň gatnaşandygy habar berilýär." },
                  { en: "The treasure is said to be hidden somewhere in the mountains.", tk: "Hazynanyň daglaryň bir ýerinde gizlendigi aýdylýar." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "int-u09-l03-passive-in-writing",
        titleEn: "Passive in Formal Writing",
        titleTk: "Resmi Ýazuwda Passyw",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Resmi we akademiki ýazuwda passyw görnüş köp ulanylýar sebäbi: 1) Kim etdi belli däl ýa-da möhüm däl. 2) Nesnel (obýektif) ses bermek üçin. 3) Ylmy ýazuwda proses möhüm, adam däl. Türkmen dilinde hem köp ulanylýar: 'Synag geçirildi', 'Netije yglan edildi'.",
              },
            },
            {
              type: "example_set",
              data: {
                titleTk: "Resmi ýazuwda passyw mysallary",
                examples: [
                  { en: "The data was collected over a period of six months.", tk: "Maglumatlar alty aý dowamynda ýyglandy." },
                  { en: "Participants were asked to complete a questionnaire.", tk: "Gatnaşyjylardan anketa doldurmak haýyş edildi." },
                  { en: "The results will be published next month.", tk: "Netijeler geljek aý çap ediler." },
                  { en: "It has been suggested that further research is needed.", tk: "Goşmaça barlag zerurlygy teklip edildi." },
                ],
              },
            },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "9-njy Bölüm Synagy: Ösen Passyw",
      questions: [
        { order: 1, questionText: "The road _____ repaired at the moment. (häzir dowam edýär)", questionType: "multiple_choice_grammar", options: ["is repaired", "is being repaired", "has been repaired", "was repaired"], correctIndex: 1 },
        { order: 2, questionText: "All the emails _____ sent. (tamamlandy)", questionType: "multiple_choice_grammar", options: ["are sent", "were sent", "have been sent", "had been sent"], correctIndex: 2 },
        { order: 3, questionText: "This form _____ signed by the manager. (borç)", questionType: "multiple_choice_grammar", options: ["must sign", "must be signed", "should sign", "will sign"], correctIndex: 1 },
        { order: 4, questionText: "It _____ that prices will rise next year.", questionType: "multiple_choice_grammar", options: ["says", "is said", "said", "has said"], correctIndex: 1 },
        { order: 5, questionText: "By 2pm, the report _____ finished. (geçen tamamlanan passyw)", questionType: "multiple_choice_grammar", options: ["was finished", "had been finished", "has been finished", "is finished"], correctIndex: 1 },
        { order: 6, questionText: "The new school _____ built next year. (geljek passyw)", questionType: "multiple_choice_grammar", options: ["is built", "was built", "will be built", "has been built"], correctIndex: 2 },
        { order: 7, questionText: "He _____ to be one of the best doctors in the country.", questionType: "multiple_choice_grammar", options: ["says", "said", "is said", "has said"], correctIndex: 2 },
        { order: 8, questionText: "The results _____ published in the newspaper.", questionType: "multiple_choice_grammar", options: ["should publish", "should be published", "should published", "will publish"], correctIndex: 1 },
        { order: 9, questionText: "The bridge _____ when the earthquake struck.", questionType: "multiple_choice_grammar", options: ["was being built", "is being built", "has been built", "had built"], correctIndex: 0 },
        { order: 10, questionText: "Resmi ýazuwda passyw näme üçin köp ulanylýar?", questionType: "translate_en_tk", options: ["Çalt ýazmak üçin", "Nesnel ses bermek we ähmiýetli zady öňe çykarmak üçin", "Grammatikany ýatda saklamak üçin", "Passyw has gysgadyr"], correctIndex: 1 },
      ],
    },
  },

  // ─── UNIT 10: QUANTIFIERS ────────────────────────────────────────────────
  {
    unitNumber: 10,
    slug: "int-unit-10-quantifiers",
    titleEn: "Quantifiers & Determiners",
    titleTk: "Mukdar Görkezijileri",
    description: "Bu bölümde much/many/a lot of, few/little/a few/a little, both/either/neither, all/none/every/each, enough/too much ýaly mukdar görkezijiler öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "int-u10-l01-much-many-lot",
        titleEn: "Much, Many, A lot of, Plenty of",
        titleTk: "Much, Many, A lot of, Plenty of",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "'Much' we 'many' — köp many. 'Much' + sanagsyz at (much water, much time). 'Many' + sanawly at (many people, many books). 'A lot of' we 'lots of' — ikisi bilen hem ulanylýar. 'Much' we 'many' köplenç inkär we soragyda ulanylýar; 'a lot of' tassyklamada.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Much / Many / A lot of tapawudy",
                explanationTk: "Much + sanagsyz at (inkär/sorag): I don't have much time. Many + sanawly at (inkär/sorag): There aren't many options. A lot of + ikisi hem (tassyklama): I have a lot of work.",
                pattern: "Much + sanagsyz at. Many + sanawly at. A lot of + ikisi hem.",
                examples: [
                  { en: "How much money do you have?", tk: "Siziň näçe puluňyz bar?" },
                  { en: "There aren't many good restaurants in this area.", tk: "Bu etrapda gowy restoranlar az." },
                  { en: "She has a lot of experience in this field.", tk: "Onuň bu ugurda tejribesi köp." },
                ],
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "Goşmaça mukdar görkezijileri",
                words: [
                  { en: "plenty of", tk: "ýeterlik / köp", partOfSpeech: "adjective", exampleEn: "Don't rush — there is plenty of time.", exampleTk: "Howlukmäň — wagt ýeterlik." },
                  { en: "a great deal of", tk: "gaty köp (resmi)", partOfSpeech: "adjective", exampleEn: "A great deal of effort went into this project.", exampleTk: "Bu taslamaga gaty köp tagalla goýuldy." },
                  { en: "too much / too many", tk: "gaty köp (artyk)", partOfSpeech: "adjective", exampleEn: "There is too much sugar in this. / There are too many people here.", exampleTk: "Munuň içinde gaty köp şeker bar. / Bu ýerde gaty köp adam bar." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "int-u10-l02-few-little-enough",
        titleEn: "Few, Little, Enough, Too",
        titleTk: "Few, Little, Enough, Too",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "'Few' (sanawly) we 'little' (sanagsyz) — az many, ýetmezçilik bar. 'A few' we 'a little' — biraz, ýeterlik. 'Enough' — ýeterlik (at sözüniň öňünde ýa-da işlik soňunda). 'Too' — artyk, problem döredýär. 'Too much/many' + at sözi. 'Too' + sypat/işlik.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Few vs A Few / Little vs A Little",
                explanationTk: "Few (sanagsyz) = az, ýeterlik däl. A few (sanawly) = biraz, ýeterlik. Little (sanagsyz) = az, ýeterlik däl. A little (sanagsyz) = biraz, ýeterlik. Enough + at/işlik = ýeterlik.",
                pattern: "Few friends = az dost (problem). A few friends = biraz dost (gowy). Little time = az wagt. A little time = biraz wagt.",
                examples: [
                  { en: "There are few buses at night — it's hard to travel.", tk: "Gijelerine awtobus az — syýahat etmek kyn." },
                  { en: "I have a few minutes — let me explain.", tk: "Biraz wagt bar — düşündireýin." },
                  { en: "There is enough food for everyone.", tk: "Hemmeler üçin ýeterlik nahar bar." },
                  { en: "The bag is too heavy — I can't carry it.", tk: "Çanta gaty agyr — göterip bilemok." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "int-u10-l03-both-either-neither",
        titleEn: "Both, Either, Neither, All, None",
        titleTk: "Both, Either, Neither, All, None",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "'Both' — ikisi hem (tassyklama). 'Either' — ikisinden biri (saýlaw) ýa-da inkärde her ikisi hem däl. 'Neither' — ikisi hem däl. 'All' — hemmesi. 'None' — hiç biri. 'Every' + ýeke sanly at = each; umumy manyda. 'Each' = aýratyn-aýratyn her biri.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Both / Either / Neither",
                explanationTk: "Both + köplük at: Both films are good. Either + ýeke at: Either day is fine. Neither + ýeke at: Neither option is perfect. Both of / either of / neither of + the + at.",
                pattern: "Both films are great. / I don't like either option. / Neither answer is correct.",
                examples: [
                  { en: "Both candidates were excellent.", tk: "Dalaşgärleriň ikisi hem ajaýypdy." },
                  { en: "I can meet on either Tuesday or Wednesday.", tk: "Sişenbe ýa-da çarşenbe güni duşuşyp bilerin." },
                  { en: "Neither of the solutions worked.", tk: "Çözgütleriň ikisi hem işlemedi." },
                  { en: "All the students passed the exam.", tk: "Ähli okuwçylar synagdan geçdi." },
                ],
              },
            },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "10-njy Bölüm Synagy: Mukdar Görkezijileri",
      questions: [
        { order: 1, questionText: "How _____ time do we have?", questionType: "multiple_choice_grammar", options: ["many", "few", "much", "little"], correctIndex: 2 },
        { order: 2, questionText: "There aren't _____ good cafes in this area.", questionType: "multiple_choice_grammar", options: ["much", "a lot", "many", "few"], correctIndex: 2 },
        { order: 3, questionText: "She has _____ experience — she started last week.", questionType: "multiple_choice_grammar", options: ["a few", "many", "a lot of", "little"], correctIndex: 3 },
        { order: 4, questionText: "I have _____ minutes — I can help you quickly.", questionType: "multiple_choice_grammar", options: ["few", "a few", "little", "a little"], correctIndex: 1 },
        { order: 5, questionText: "The bag is _____ heavy — I can't carry it.", questionType: "multiple_choice_grammar", options: ["enough", "too", "very", "much"], correctIndex: 1 },
        { order: 6, questionText: "'Ikisi hem däl' iňlisçe näme?", questionType: "translate_tk_en", options: ["both", "either", "neither", "none"], correctIndex: 2 },
        { order: 7, questionText: "_____ students passed the exam — the teacher was very happy.", questionType: "multiple_choice_grammar", options: ["All", "None", "Neither", "Both"], correctIndex: 0 },
        { order: 8, questionText: "I don't have _____ money to buy that.", questionType: "multiple_choice_grammar", options: ["enough", "too", "much", "many"], correctIndex: 0 },
        { order: 9, questionText: "'Ýeterlik / Köp' iňlisçe näme?", questionType: "translate_tk_en", options: ["too much", "plenty of", "few", "little"], correctIndex: 1 },
        { order: 10, questionText: "_____ of the answers were correct — he got zero.", questionType: "multiple_choice_grammar", options: ["All", "Both", "Neither", "None"], correctIndex: 3 },
      ],
    },
  },

  // ─── UNIT 11: EMPHASIS & CLEFT SENTENCES ────────────────────────────────
  {
    unitNumber: 11,
    slug: "int-unit-11-emphasis-cleft",
    titleEn: "Emphasis & Cleft Sentences",
    titleTk: "Güýçlendirme we Bölünen Sözlemler",
    description: "Bu bölümde güýçlendirme usullary öwrenilýär: do/does/did bilen güýçlendirme, cleft sözlemler (It was John who..., What I need is...) we söz tertibi bilen güýçlendirme.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "int-u11-l01-do-does-did-emphasis",
        titleEn: "Do/Does/Did for Emphasis",
        titleTk: "Do/Does/Did bilen Güýçlendirme",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Adaty tassyklama sözlemlerinde do/does/did ulanylmaýar. Ýöne bir zady güýçlendirmek isleseň, do/does/did goşulýar. 'I do understand your problem' — Men seniň meseläňi HAKYKATDAN düşünýärin. Sözleşeniňde do/does/did güýçli aýdylýar.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Güýçlendirme üçin do/does/did",
                explanationTk: "I do understand. She does care. He did try. Bu gurluş başga birini düzetmek, şübhä garşy çykmak ýa-da birine rugsat bermek üçin ulanylýar.",
                pattern: "I do + işlik. She does + işlik. He did + işlik.",
                examples: [
                  { en: "A: You never listen! B: I do listen — I just disagree.", tk: "A: Sen hiç diňlemeýärsiň! B: Men diňleýärin hakykatdan — ýöne ylalaşamok." },
                  { en: "She does work hard — she just doesn't show it.", tk: "Ol hakykatdan gaty işleýär — diňe görkezmeýär." },
                  { en: "He did try his best, but it wasn't enough.", tk: "Ol hakykatdan elinden gelenini etdi, ýöne ýetmedi." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "int-u11-l02-cleft-sentences",
        titleEn: "Cleft Sentences",
        titleTk: "Bölünen Sözlemler",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Cleft sözlemler sözlemdäki bir bölegiň ünsüni güýçlendirýär. Iki esasy görnüş: 1) 'It was + [güýçlendirilen bölek] + who/that + [galan sözlem]'. 2) 'What + [sözlem] + is/was + [güýçlendirilen bölek]'.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "'It' we 'What' bölünen sözlemler",
                explanationTk: "'It' cleft: It was John who called. (John-y güýçlendirýär). 'What' cleft: What I need is more time. (more time-y güýçlendirýär). Ikisi hem has formal gepleşiklerde we ýazuwda ulanylýar.",
                pattern: "It was [güýçlendirilen] who/that + işlik. / What I [işlik] is/was [güýçlendirilen].",
                examples: [
                  { en: "It was the manager who made the final decision. (Not me — the manager.)", tk: "Soňky karary müdür berdi. (Men däl — müdür.)" },
                  { en: "What surprised me most was his calmness.", tk: "Meni iň köp geň galdyran onuň sowuk ganlylygydy." },
                  { en: "It was in 1991 that Turkmenistan became independent.", tk: "Türkmenistanyň garaşsyz bolandygy 1991-nji ýylda boldy." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "int-u11-l03-inversion-fronting",
        titleEn: "Fronting & Inversion",
        titleTk: "Öňe çykarmak we Tersine çevirmek",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Resmi we edebi Iňlisçede käte söz tertibi tersine çewirilýär ýa-da bir zat sözüň başyna alnyp gelýär. 'Never have I seen such a thing.' 'Rarely does she complain.' Bu inversion (tersine çewiriş) negatiw sözler bilen we at sözi sözüň başyna gelirsöz tertibini üýtgedýär.",
              },
            },
            {
              type: "example_set",
              data: {
                titleTk: "Tersine çewiriş we öňe çykarmak",
                examples: [
                  { en: "Never have I seen such a beautiful sunset. (emphatic, formal)", tk: "Beýle owadan günbatary hiç wagt görmedim. (güýçlendirilen, resmi)" },
                  { en: "Rarely does she make a mistake.", tk: "Ol seýrek ýalňyşlyk goýberýär." },
                  { en: "Not only did he apologise, but he also offered to pay.", tk: "Ol diňe ötünç soramak bilen çäklenmedi, tölemegi hem teklip etdi." },
                  { en: "The food I liked, but the service was terrible. (fronting)", tk: "Nahary haladym, ýöne hyzmat erbet boldy. (öňe çykarmak)" },
                ],
              },
            },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "11-nji Bölüm Synagy: Güýçlendirme",
      questions: [
        { order: 1, questionText: "A: You don't care! B: I _____ care about it!", questionType: "multiple_choice_grammar", options: ["am", "does", "do", "did"], correctIndex: 2 },
        { order: 2, questionText: "It was Sarah _____ told me the news.", questionType: "multiple_choice_grammar", options: ["which", "where", "who", "whose"], correctIndex: 2 },
        { order: 3, questionText: "What I really _____ is a holiday.", questionType: "multiple_choice_grammar", options: ["needs", "need", "needed", "needing"], correctIndex: 1 },
        { order: 4, questionText: "She _____ try — she gave up immediately.", questionType: "multiple_choice_grammar", options: ["does", "do", "didn't", "did"], correctIndex: 2 },
        { order: 5, questionText: "It was in 2019 _____ everything changed.", questionType: "multiple_choice_grammar", options: ["who", "where", "that", "which"], correctIndex: 2 },
        { order: 6, questionText: "Never _____ I seen such a thing!", questionType: "multiple_choice_grammar", options: ["I have", "have", "I had", "had"], correctIndex: 1 },
        { order: 7, questionText: "What surprised me _____ was his reaction.", questionType: "multiple_choice_grammar", options: ["much", "most", "more", "mostly"], correctIndex: 1 },
        { order: 8, questionText: "He _____ try his best — I saw it myself.", questionType: "multiple_choice_grammar", options: ["does", "do", "did", "is"], correctIndex: 2 },
        { order: 9, questionText: "'Bölünen sözlemde' 'It was Sarah who...' nämäni güýçlendirýär?", questionType: "translate_en_tk", options: ["Hereketleri", "Adam (Sarah)", "Wagty", "Ýeri"], correctIndex: 1 },
        { order: 10, questionText: "Rarely _____ she make a mistake.", questionType: "multiple_choice_grammar", options: ["do", "is", "does", "has"], correctIndex: 2 },
      ],
    },
  },

  // ─── UNIT 12: REVIEW & COMPLEX LANGUAGE ─────────────────────────────────
  {
    unitNumber: 12,
    slug: "int-unit-12-review-complex",
    titleEn: "Advanced Vocabulary & Complex Sentences",
    titleTk: "Ösen Sözlük we Çylşyrymly Sözlemler",
    description: "Bu soňky bölümde Orta derejäniň ähli grammatikasy we ösen sözlük birleşdirilýär. Idiomlar, akademiki sözlük, gürrüň bermek we ýazuw endikleri öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "int-u12-l01-idioms-fixed-expressions",
        titleEn: "Common Idioms & Fixed Expressions",
        titleTk: "Idiomlar we Düzme Sözlemler",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Idiomlar — manysy ayrym söz manylarynyň jemiňden tapawutly bolan durnukly sözlemler. 'It's raining cats and dogs' — gaty ýagyş ýagýar (pişik we it düşüp barmaýar). Iňlisçäni tebigy etmek üçin idiomlar örän möhüm.",
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "Iň möhüm idiomlar",
                words: [
                  { en: "bite the bullet", tk: "dişini gysyp çydamak / kyn zady kabul etmek", partOfSpeech: "verb", exampleEn: "Just bite the bullet and go to the dentist!", exampleTk: "Dişini gys we diş lukmanyna bar!" },
                  { en: "break the ice", tk: "buzy döwmek / tanşyny ýeňilleşdirmek", partOfSpeech: "verb", exampleEn: "He told a joke to break the ice.", exampleTk: "Atmospherasy ýeňilleşdirmek üçin degişme aýtdy." },
                  { en: "hit the nail on the head", tk: "dogry aňlamak / nokat goýmak", partOfSpeech: "verb", exampleEn: "You've hit the nail on the head — that's exactly the problem.", exampleTk: "Dogry aýtdyňyz — bu hut şol mesele." },
                  { en: "under the weather", tk: "ýarawsyz duýmak / özüni gowy duýmamak", partOfSpeech: "adjective", exampleEn: "I'm feeling a bit under the weather today.", exampleTk: "Bu gün özümi biraz ýaramaz duýýaryn." },
                  { en: "see eye to eye", tk: "ylalaşmak / bir pikirdä gelmek", partOfSpeech: "verb", exampleEn: "We don't always see eye to eye, but we respect each other.", exampleTk: "Hemişe ylalaşamyzok, ýöne biri-birimizi sylaýarys." },
                  { en: "the ball is in your court", tk: "karar seniň, indi seniň gezegi", partOfSpeech: "noun", exampleEn: "I've made my offer — the ball is in your court now.", exampleTk: "Teklibi aýtdym — indi karar siziň." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "int-u12-l02-academic-vocabulary",
        titleEn: "Academic & Professional Vocabulary",
        titleTk: "Akademiki we Hünär Sözi",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Akademiki we hünär sözi gündelik dil bilen deňeşdirilende has resmi, takyk we many berişli bolýar. Bu sözleri bilmek iş ýerlerde, ýazuwda we resmi çykyşlarda gaty peýdaly. Her bir söziň ornuny we ulanyş çygryny bilmek möhüm.",
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "Möhüm akademiki/hünär sözlügi",
                words: [
                  { en: "analyse / analysis", tk: "derňemek / derňeme", partOfSpeech: "verb", exampleEn: "We need to analyse the data carefully.", exampleTk: "Maglumatlary ünsli derňemeli." },
                  { en: "evaluate / evaluation", tk: "baha bermek / baha beriş", partOfSpeech: "verb", exampleEn: "The committee will evaluate all applications.", exampleTk: "Komitet ähli arzalara baha berer." },
                  { en: "implement / implementation", tk: "durmuşa geçirmek", partOfSpeech: "verb", exampleEn: "It is difficult to implement change quickly.", exampleTk: "Üýtgeşmäni çalt durmuşa geçirmek kyn." },
                  { en: "significant / significantly", tk: "möhüm / düýpli", partOfSpeech: "adjective", exampleEn: "There has been a significant improvement.", exampleTk: "Düýpli gowulanma boldy." },
                  { en: "demonstrate", tk: "görkezmek / subut etmek", partOfSpeech: "verb", exampleEn: "The results demonstrate the effectiveness of the approach.", exampleTk: "Netijeler çemeleşmäniň netijeliligini subut edýär." },
                  { en: "hypothesis", tk: "çaklama / nämäniň takylygyny bilmän edilýän çaklama", partOfSpeech: "noun", exampleEn: "We need to test this hypothesis.", exampleTk: "Bu çaklamany synap görmeli." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "int-u12-l03-mixed-grammar-review",
        titleEn: "Mixed Grammar Review",
        titleTk: "Grammatikany Gaýtalamak",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Bu soňky sapakda Orta derejäniň ähli esasy mowzuklary gaýtalanýar: Present Perfect Continuous, Past Perfect, modal deduction, gerunds/infinitives, linking words, question tags, articles, phrasal verbs, passive voice, emphasis. Bu bilimler sizi B2 (Upper-Intermediate) derejesine geçmäge taýýar eder.",
              },
            },
            {
              type: "example_set",
              data: {
                titleTk: "Dürli grammatika gurluşlaryny birleşdirmek",
                examples: [
                  { en: "Although she has been working here for years, she has never asked for a pay rise. (although + PP Cont)", tk: "Ol ýyllaryň dowamynda bu ýerde işlese-de, hiç wagt aýlyk ýokarlanmasyny soramady." },
                  { en: "It was the new manager who suggested implementing the changes — and they have been working well ever since.", tk: "Üýtgeşmeleri durmuşa geçirmegi teklip eden täze müdirdi — we şondan bäri gowy işläp gelýärler." },
                  { en: "If they had carried out proper research, the problems might have been avoided.", tk: "Dogry derňeme geçiren bolsalar, meseleler öňüni alyp bolardy." },
                  { en: "I'm looking forward to seeing the results — I've been working on this project for months!", tk: "Netijeleri görmäge sabyrsyzlyk bilen garaşýaryn — aýlar bäri bu taslamada işläp gelýärin!" },
                ],
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "Soňky gaýtalama üçin sözlük",
                words: [
                  { en: "persevere", tk: "ýadaman çalyşmak / takýazlylyk bilen dowam etmek", partOfSpeech: "verb", exampleEn: "You must persevere if you want to succeed.", exampleTk: "Üstünlige ýetmek isleseň, ýadaman çalyşmaly." },
                  { en: "accomplishment", tk: "üstünlik / amala aşyrlan iş", partOfSpeech: "noun", exampleEn: "Learning a foreign language is a great accomplishment.", exampleTk: "Daşary dili öwrenmek uly üstünlik." },
                  { en: "proficient", tk: "ökde / başarnykly", partOfSpeech: "adjective", exampleEn: "After two years, she became proficient in English.", exampleTk: "Iki ýyldan soň ol Iňlisçede ökde boldy." },
                ],
              },
            },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "12-nji Bölüm Synagy: Ösen Dil",
      questions: [
        { order: 1, questionText: "'Under the weather' Türkmençede näme?", questionType: "translate_en_tk", options: ["Ýagşyň astynda", "Ýarawsyz duýmak", "Buzy döwmek", "Dişini gysyp çydamak"], correctIndex: 1 },
        { order: 2, questionText: "She has been _____ here for five years. (work — PPC)", questionType: "multiple_choice_grammar", options: ["work", "worked", "working", "works"], correctIndex: 2 },
        { order: 3, questionText: "If they had studied more, they _____ passed. (3rd conditional)", questionType: "multiple_choice_grammar", options: ["would pass", "will have passed", "would have passed", "had passed"], correctIndex: 2 },
        { order: 4, questionText: "'Persevere' Türkmençede näme?", questionType: "translate_en_tk", options: ["Ýitirmek", "Gizlemek", "Ýadaman çalyşmak", "Üstünlik gazanmak"], correctIndex: 2 },
        { order: 5, questionText: "It was the manager _____ made the final decision.", questionType: "multiple_choice_grammar", options: ["which", "where", "who", "whose"], correctIndex: 2 },
        { order: 6, questionText: "The results _____ being analysed at the moment. (passyw)", questionType: "multiple_choice_grammar", options: ["are", "were", "have", "had"], correctIndex: 0 },
        { order: 7, questionText: "Despite _____ hard, he didn't pass. (work)", questionType: "multiple_choice_grammar", options: ["work", "to work", "worked", "working"], correctIndex: 3 },
        { order: 8, questionText: "'Break the ice' Türkmençede näme?", questionType: "translate_en_tk", options: ["Buzy döwmek (tüsse)", "Tanşyny ýeňilleşdirmek", "Kyn zady kabul etmek", "Nokat goýmak"], correctIndex: 1 },
        { order: 9, questionText: "She _____ remember to call me — I'm still waiting.", questionType: "multiple_choice_grammar", options: ["must", "can't", "might", "should"], correctIndex: 1 },
        { order: 10, questionText: "'Accomplish' Türkmençede näme?", questionType: "translate_en_tk", options: ["Başlamak", "Amala aşyrmak / gazanmak", "Ýadamak", "Gizlemek"], correctIndex: 1 },
      ],
    },
  },
];
