import type { SeedUnit } from "../../../types/content";

export const elementaryUnits: SeedUnit[] = [
  // ─── UNIT 1: WORK & JOBS ────────────────────────────────────────────────
  {
    unitNumber: 1,
    slug: "elementary-unit-01-work",
    titleEn: "Work & Jobs",
    titleTk: "Iş we Hünärler",
    description: "Bu bölümde hünärler, iş ýeri we gündelik iş tertibi barada Iňlisçe gürrüň etmek öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "elementary-u01-l01-jobs",
        titleEn: "Jobs and Professions",
        titleTk: "Hünärler we kärler",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Işiňiz we hünäriňiz barada gürrüň etmek gündelik durmuşda gaty möhümdir. Bu sapakda esasy hünär atlary, işiň ýeri we iş tertibi barada Iňlisçe öwrenersiňiz." } },
            { type: "vocabulary_list", data: { titleTk: "Hünärler", words: [
              { en: "doctor", tk: "lukman", partOfSpeech: "noun", exampleEn: "She is a doctor at the hospital.", exampleTk: "Ol hassahanada lukman." },
              { en: "engineer", tk: "inžener", partOfSpeech: "noun", exampleEn: "My father is an engineer.", exampleTk: "Meniň kakam inžener." },
              { en: "teacher", tk: "mugallym", partOfSpeech: "noun", exampleEn: "He teaches English at school.", exampleTk: "Ol mekdepde Iňlis dilini öwredýär." },
              { en: "nurse", tk: "meditsinaçy / şepagat uýasy", partOfSpeech: "noun", exampleEn: "The nurse takes care of patients.", exampleTk: "Şepagat uýasy näsaglara seredýär." },
              { en: "chef / cook", tk: "aşpez", partOfSpeech: "noun", exampleEn: "The chef prepares delicious food.", exampleTk: "Aşpez lezzetli nahar taýýarlaýar." },
              { en: "driver", tk: "sürüji", partOfSpeech: "noun", exampleEn: "He works as a taxi driver.", exampleTk: "Ol taksi sürüji bolup işleýär." },
              { en: "businessman", tk: "telekeçi / işewür adam", partOfSpeech: "noun", exampleEn: "She is a successful businesswoman.", exampleTk: "Ol üstünlikli telekeçi aýal." },
              { en: "police officer", tk: "polisiýa işgäri", partOfSpeech: "noun", exampleEn: "The police officer helps people.", exampleTk: "Polisiýa işgäri adamlara kömek edýär." },
            ]}},
            { type: "dialogue", data: { titleTk: "Söhbetdeşlik: Işiňiz näme?", exchanges: [
              { speakerEn: "Merdan", lineEn: "What do you do for work, Leýla?", lineTk: "Leýla, siz nähili işleýärsiňiz?" },
              { speakerEn: "Leýla", lineEn: "I'm a nurse at the central hospital. I work with patients every day.", lineTk: "Men merkezi hassahanada şepagat uýasy. Men her gün näsaglar bilen işleýärin." },
              { speakerEn: "Merdan", lineEn: "That's a very important job! Do you enjoy it?", lineTk: "Bu gaty möhüm iş! Siz muny halaýarsyňyzmy?" },
              { speakerEn: "Leýla", lineEn: "Yes, I love helping people. What about you?", lineTk: "Hawa, men adamlara kömek etmegi söýýärin. Siziň işiňiz näme?" },
              { speakerEn: "Merdan", lineEn: "I'm an engineer. I design buildings.", lineTk: "Men inžener. Men binalar taslamaýaryn." },
            ]}},
            { type: "grammar_note", data: { titleTk: "Grammatika: Simple Present — iş üçin", explanationTk: "Hünäriňiz ýa-da işiňiz barada gürrüň etkeniňizde, hemişe Simple Present ulanylýar. 'I work as a...' ýa-da 'I am a...' gurluşlary iň köp ulanylýan usullardyr.", pattern: "I work as a [hünär]. / I am a [hünär]. / She works at [iş ýeri].", examples: [
              { en: "I work as a teacher in a school.", tk: "Men mekdepde mugallym bolup işleýärin." },
              { en: "He works at a hospital.", tk: "Ol hassahanada işleýär." },
              { en: "She starts work at 8 am.", tk: "Ol işi sagat 8-de başlaýar." },
            ]}},
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "elementary-u01-l02-workplace",
        titleEn: "Workplace and Work Routines",
        titleTk: "Iş ýeri we iş tertibi",
        content: {
          blocks: [
            { type: "vocabulary_list", data: { titleTk: "Iş ýeri sözlügi", words: [
              { en: "office", tk: "ofis / edaraý", partOfSpeech: "noun", exampleEn: "I work in an office in the city centre.", exampleTk: "Men şäher merkezindäki ofisde işleýärin." },
              { en: "meeting", tk: "duşuşyk / maslahat", partOfSpeech: "noun", exampleEn: "We have a meeting every Monday.", exampleTk: "Biziň her duşenbe günü maslahatymyz bolýar." },
              { en: "colleague", tk: "kärdeş / iş ýoldaşy", partOfSpeech: "noun", exampleEn: "My colleagues are very friendly.", exampleTk: "Meniň kärdeşlerim gaty mylakatly." },
              { en: "salary", tk: "aýlyk / zähmet haky", partOfSpeech: "noun", exampleEn: "He earns a good salary.", exampleTk: "Ol gowy zähmet haky alýar." },
              { en: "boss / manager", tk: "ýolbaşçy / müdir", partOfSpeech: "noun", exampleEn: "My boss is very strict.", exampleTk: "Meniň ýolbaşçym gaty talap ediji." },
              { en: "overtime", tk: "artyk wagt / ygtyýardan daşary wagt", partOfSpeech: "noun", exampleEn: "I work overtime sometimes.", exampleTk: "Men käwagt artyk wagt işleýärin." },
            ]}},
            { type: "grammar_note", data: { titleTk: "Grammatika: How often...? — Ýygylygy soramak", explanationTk: "'How often' soragy ýygylyk aňladýan jogaplary çaklaýar: always, usually, sometimes, rarely, never, every day/week/month. Jogapda adatça ýygylygy aňladýan söz ulanylýar.", pattern: "How often do you [işlik]? — I [always/sometimes/...] + [işlik].", examples: [
              { en: "How often do you have meetings? — We have them every Monday.", tk: "Maslahatlar näçe gezek bolýar? — Her duşenbe günü." },
              { en: "Do you ever work overtime? — Yes, sometimes.", tk: "Artyk wagt işleýärsiňizmi? — Hawa, käwagt." },
            ]}},
          ],
        },
      },
    ],
    quiz: {
      titleTk: "1-nji Bölüm Synagy: Iş we Hünärler",
      questions: [
        { order: 1, questionText: "'Lukman' iňlisçe näme?", questionType: "translate_tk_en", options: ["nurse", "teacher", "doctor", "engineer"], correctIndex: 2 },
        { order: 2, questionText: "She _____ as a nurse at the hospital.", questionType: "multiple_choice_grammar", options: ["work", "working", "works", "worked"], correctIndex: 2 },
        { order: 3, questionText: "'Colleague' Türkmençede näme?", questionType: "translate_en_tk", options: ["Müdir", "Kärdeş", "Aýlyk", "Ofis"], correctIndex: 1 },
        { order: 4, questionText: "He _____ at a school in the city.", questionType: "multiple_choice_grammar", options: ["work", "works", "is work", "working"], correctIndex: 1 },
        { order: 5, questionText: "'Aşpez' iňlisçe näme?", questionType: "translate_tk_en", options: ["waiter", "chef", "driver", "farmer"], correctIndex: 1 },
        { order: 6, questionText: "How often _____ you have meetings?", questionType: "multiple_choice_grammar", options: ["is", "are", "do", "does"], correctIndex: 2 },
        { order: 7, questionText: "'Salary' Türkmençede näme?", questionType: "translate_en_tk", options: ["Iş", "Ofis", "Aýlyk / Zähmet haky", "Duşuşyk"], correctIndex: 2 },
        { order: 8, questionText: "My boss _____ very strict.", questionType: "multiple_choice_grammar", options: ["am", "are", "is", "be"], correctIndex: 2 },
        { order: 9, questionText: "'Inžener' iňlisçe näme?", questionType: "translate_tk_en", options: ["doctor", "teacher", "engineer", "driver"], correctIndex: 2 },
        { order: 10, questionText: "I work _____ an office.", questionType: "multiple_choice_grammar", options: ["at", "in", "on", "to"], correctIndex: 1 },
      ],
    },
  },

  // ─── UNIT 2: TRAVEL ─────────────────────────────────────────────────────
  {
    unitNumber: 2,
    slug: "elementary-unit-02-travel",
    titleEn: "Travelling & Places",
    titleTk: "Syýahat we Ýerler",
    description: "Bu bölümde syýahat, ýurtlar we geçen zaman (past simple — düzgünli işlikler) öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "elementary-u02-l01-travel-vocab",
        titleEn: "Travel Vocabulary",
        titleTk: "Syýahat sözlügi",
        content: {
          blocks: [
            { type: "vocabulary_list", data: { titleTk: "Syýahat sözlügi", words: [
              { en: "passport", tk: "pasport", partOfSpeech: "noun", exampleEn: "Don't forget your passport!", exampleTk: "Pasortyňyzy unutmaň!" },
              { en: "airport", tk: "howa menzili", partOfSpeech: "noun", exampleEn: "We arrived at the airport at noon.", exampleTk: "Biz howa menziline günortana geldik." },
              { en: "hotel", tk: "myhmanhana", partOfSpeech: "noun", exampleEn: "We stayed at a nice hotel.", exampleTk: "Biz owadan myhmanhanada galdyk." },
              { en: "ticket", tk: "bilet", partOfSpeech: "noun", exampleEn: "I booked my plane ticket online.", exampleTk: "Men uçar biletimi internetten aldym." },
              { en: "luggage / suitcase", tk: "goş / çemodan", partOfSpeech: "noun", exampleEn: "My suitcase is very heavy.", exampleTk: "Meniň çemodanym gaty agyr." },
              { en: "tourist", tk: "syýahatçy / turist", partOfSpeech: "noun", exampleEn: "Many tourists visit Ashgabat.", exampleTk: "Köp syýahatçy Aşgabada gelýär." },
              { en: "trip / journey", tk: "syýahat / ýol", partOfSpeech: "noun", exampleEn: "It was a wonderful trip.", exampleTk: "Bu ajaýyp syýahat boldy." },
            ]}},
            { type: "dialogue", data: { titleTk: "Söhbetdeşlik: Geçen syýahat", exchanges: [
              { speakerEn: "Aýgül", lineEn: "Did you travel anywhere last summer?", lineTk: "Geçen tomusda bir ýerlere syýahat etdiňizmi?" },
              { speakerEn: "Batyr", lineEn: "Yes! I visited Istanbul. It was amazing!", lineTk: "Hawa! Men Stambula gitdim. Ajaýypdy!" },
              { speakerEn: "Aýgül", lineEn: "How long did you stay there?", lineTk: "Näçe gün galdyňyz?" },
              { speakerEn: "Batyr", lineEn: "I stayed for five days. I visited many historical places.", lineTk: "Bäş gün galdym. Köp taryhy ýerlere gitdim." },
            ]}},
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "elementary-u02-l02-past-simple",
        titleEn: "Past Simple — Regular Verbs",
        titleTk: "Geçen zaman — düzgünli işlikler",
        content: {
          blocks: [
            { type: "grammar_note", data: { titleTk: "Grammatika: Past Simple (Geçen zaman ýönekeý)", explanationTk: "Geçen zaman geçmişde bolan we tamamlanan işleri beýan etmek üçin ulanylýar. Düzgünli işliklerde soňuna '-ed' goşulýar. Inkär: 'did not' (didn't) + işligiň esasy görnüşi. Sorag: 'Did + şahs + işlik?'", pattern: "işlik + -ed | did not + işlik | Did + şahs + işlik?", examples: [
              { en: "I visited Ashgabat last year.", tk: "Men geçen ýyl Aşgabada gitdim." },
              { en: "She didn't travel last summer.", tk: "Ol geçen tomusda syýahat etmedi." },
              { en: "Did you enjoy the trip?", tk: "Syýahatyňyz hoş boldumy?" },
            ]}},
            { type: "vocabulary_list", data: { titleTk: "Geçen zaman — düzgünli işlikler", words: [
              { en: "visited (visit)", tk: "gitdi / baryp gördi", partOfSpeech: "verb", exampleEn: "We visited the museum.", exampleTk: "Biz muzeýe gitdik." },
              { en: "stayed (stay)", tk: "galdy", partOfSpeech: "verb", exampleEn: "They stayed at a hotel.", exampleTk: "Olar myhmanhanada galdy." },
              { en: "enjoyed (enjoy)", tk: "hezil etdi / hoşal boldy", partOfSpeech: "verb", exampleEn: "I enjoyed the food very much.", exampleTk: "Men nahardan gaty hezil etdim." },
              { en: "arrived (arrive)", tk: "geldi / ýetdi", partOfSpeech: "verb", exampleEn: "We arrived late at night.", exampleTk: "Biz giç agşam geldik." },
              { en: "travelled (travel)", tk: "syýahat etdi", partOfSpeech: "verb", exampleEn: "She travelled by train.", exampleTk: "Ol otly bilen syýahat etdi." },
            ]}},
            { type: "example_set", data: { titleTk: "Geçen zaman — mysallar", examples: [
              { en: "Last year I travelled to Turkey.", tk: "Geçen ýyl men Türkiýä syýahat etdim." },
              { en: "We stayed in a small hotel near the beach.", tk: "Biz kenar ýakasyndaky kiçi myhmanhanada galdyk." },
              { en: "Did you visit the old city? — Yes, we did!", tk: "Köne şähere gitdiňizmi? — Hawa, gitdik!" },
            ]}},
          ],
        },
      },
    ],
    quiz: {
      titleTk: "2-nji Bölüm Synagy: Syýahat we Ýerler",
      questions: [
        { order: 1, questionText: "'Howa menzili' iňlisçe näme?", questionType: "translate_tk_en", options: ["station", "airport", "hotel", "port"], correctIndex: 1 },
        { order: 2, questionText: "I _____ Istanbul last month. (visit)", questionType: "multiple_choice_grammar", options: ["visit", "visits", "visited", "visiting"], correctIndex: 2 },
        { order: 3, questionText: "'Passport' Türkmençede näme?", questionType: "translate_en_tk", options: ["Bilet", "Goş", "Pasport", "Syýahat"], correctIndex: 2 },
        { order: 4, questionText: "She _____ stay at a hotel last night. (inkär)", questionType: "multiple_choice_grammar", options: ["don't", "doesn't", "didn't", "wasn't"], correctIndex: 2 },
        { order: 5, questionText: "'Luggage' Türkmençede näme?", questionType: "translate_en_tk", options: ["Bilet", "Goş / Çemodan", "Pasport", "Myhmanhana"], correctIndex: 1 },
        { order: 6, questionText: "Did you enjoy the trip? — Yes, I _____.", questionType: "multiple_choice_grammar", options: ["enjoy", "enjoyed", "did", "do"], correctIndex: 2 },
        { order: 7, questionText: "'Tourist' Türkmençede näme?", questionType: "translate_en_tk", options: ["Syýahatçy / Turist", "Sürüji", "Ýolbaşçy", "Işewür"], correctIndex: 0 },
        { order: 8, questionText: "We _____ at the hotel for three nights.", questionType: "multiple_choice_grammar", options: ["stay", "stays", "stayed", "staying"], correctIndex: 2 },
        { order: 9, questionText: "'Ticket' Türkmençede näme?", questionType: "translate_en_tk", options: ["Pasport", "Goş", "Myhmanhana", "Bilet"], correctIndex: 3 },
        { order: 10, questionText: "_____ you travel abroad last year?", questionType: "multiple_choice_grammar", options: ["Are", "Were", "Did", "Do"], correctIndex: 2 },
      ],
    },
  },

  // ─── UNIT 3: TECHNOLOGY ─────────────────────────────────────────────────
  {
    unitNumber: 3,
    slug: "elementary-unit-03-technology",
    titleEn: "Technology in Daily Life",
    titleTk: "Gündelik Durmuşda Tehnologiýa",
    description: "Bu bölümde häzirki zaman doly geçen (present perfect) we gündelik durmuşda ulanylýan enjamlar öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "elementary-u03-l01-tech-vocab",
        titleEn: "Technology Vocabulary",
        titleTk: "Tehnologiýa sözlügi",
        content: {
          blocks: [
            { type: "vocabulary_list", data: { titleTk: "Gündelik enjamlar", words: [
              { en: "smartphone", tk: "akylly telefon", partOfSpeech: "noun", exampleEn: "I use my smartphone every day.", exampleTk: "Men her gün akylly telefonumdan peýdalanýaryn." },
              { en: "laptop / computer", tk: "noutbuk / kompýuter", partOfSpeech: "noun", exampleEn: "She works on her laptop.", exampleTk: "Ol noutbugynda işleýär." },
              { en: "internet", tk: "internet", partOfSpeech: "noun", exampleEn: "We need a fast internet connection.", exampleTk: "Biziň çalt internet gerek." },
              { en: "application / app", tk: "programma / goşundy", partOfSpeech: "noun", exampleEn: "This app is very useful.", exampleTk: "Bu goşundy gaty peýdaly." },
              { en: "social media", tk: "sosial media", partOfSpeech: "noun", exampleEn: "She spends a lot of time on social media.", exampleTk: "Ol sosial mediada köp wagt geçirýär." },
              { en: "password", tk: "parol / açar söz", partOfSpeech: "noun", exampleEn: "Use a strong password.", exampleTk: "Güýçli parol ulan." },
              { en: "download", tk: "ýüklemek / göçürmek", partOfSpeech: "verb", exampleEn: "Have you downloaded the app?", exampleTk: "Goşundyny ýükläp aldyňyzmy?" },
            ]}},
            { type: "dialogue", data: { titleTk: "Söhbetdeşlik: Programmalar barada", exchanges: [
              { speakerEn: "Kerim", lineEn: "Have you tried this new language app?", lineTk: "Bu täze dil goşundysyny synap gördüňizmi?" },
              { speakerEn: "Ogulgerek", lineEn: "Yes! I've used it for two weeks. It's great!", lineTk: "Hawa! Men ony iki hepdedir ulanýaryn. Ajaýyp!" },
              { speakerEn: "Kerim", lineEn: "Have you improved your English?", lineTk: "Iňlisçäňiz gowulaşdymy?" },
              { speakerEn: "Ogulgerek", lineEn: "Definitely! I've learned more than 200 new words.", lineTk: "Hökman! Men 200-den gowrak täze söz öwrendim." },
            ]}},
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "elementary-u03-l02-present-perfect",
        titleEn: "Present Perfect",
        titleTk: "Häzirki zaman doly geçen",
        content: {
          blocks: [
            { type: "grammar_note", data: { titleTk: "Grammatika: Present Perfect (have/has + past participle)", explanationTk: "Present Perfect — geçmişde bolan, emma häzirki zaman bilen baglanyşygy bolan işler üçin ulanylýar. Gurluşy: 'have/has + past participle (işligiň 3-nji görnüşi)'. 'Have you ever...?' — Hiç wagt etdiňizmi? soragy köp ulanylýar.", pattern: "I/You/We/They have + V3 | He/She/It has + V3", examples: [
              { en: "I have used this app before.", tk: "Men bu goşundyny ozal ulanypdym." },
              { en: "She has never travelled by plane.", tk: "Ol hiç wagt uçar bilen syýahat etmändir." },
              { en: "Have you ever visited Turkey?", tk: "Hiç wagt Türkiýä baryp gördüňizmi?" },
            ]}},
            { type: "example_set", data: { titleTk: "Present Perfect — mysallar", examples: [
              { en: "I have downloaded the app. (Şu wagt gutardy, netijesi bar)", tk: "Men goşundyny ýükledim." },
              { en: "Have you finished your work? — Yes, I have.", tk: "Işiňizi gutardyňyzmy? — Hawa, gutardym." },
              { en: "She has never tried sushi.", tk: "Ol hiç wagt suşi iýip görmedik." },
            ]}},
          ],
        },
      },
    ],
    quiz: {
      titleTk: "3-nji Bölüm Synagy: Tehnologiýa",
      questions: [
        { order: 1, questionText: "'Akylly telefon' iňlisçe näme?", questionType: "translate_tk_en", options: ["tablet", "laptop", "smartphone", "camera"], correctIndex: 2 },
        { order: 2, questionText: "I _____ used this app before.", questionType: "multiple_choice_grammar", options: ["have", "has", "had", "am"], correctIndex: 0 },
        { order: 3, questionText: "'Internet' Türkmençede näme?", questionType: "translate_en_tk", options: ["Kompýuter", "Internet", "Telefon", "Programma"], correctIndex: 1 },
        { order: 4, questionText: "She _____ never tried this app.", questionType: "multiple_choice_grammar", options: ["have", "has", "had", "is"], correctIndex: 1 },
        { order: 5, questionText: "'Download' Türkmençede näme?", questionType: "translate_en_tk", options: ["Ugratmak", "Ýüklemek / Göçürmek", "Açmak", "Ýazmak"], correctIndex: 1 },
        { order: 6, questionText: "Have you ever _____ to London?", questionType: "multiple_choice_grammar", options: ["go", "gone", "went", "going"], correctIndex: 1 },
        { order: 7, questionText: "'Password' Türkmençede näme?", questionType: "translate_en_tk", options: ["Faýl", "Internet", "Parol / Açar söz", "Programma"], correctIndex: 2 },
        { order: 8, questionText: "They _____ finished the project.", questionType: "multiple_choice_grammar", options: ["have", "has", "had", "are"], correctIndex: 0 },
        { order: 9, questionText: "'App' Türkmençede näme?", questionType: "translate_en_tk", options: ["Enjam", "Goşundy / Programma", "Internet", "Faýl"], correctIndex: 1 },
        { order: 10, questionText: "_____ you ever visited another country?", questionType: "multiple_choice_grammar", options: ["Are", "Did", "Have", "Do"], correctIndex: 2 },
      ],
    },
  },

  // ─── UNIT 4: NATURE & ENVIRONMENT ──────────────────────────────────────
  {
    unitNumber: 4,
    slug: "elementary-unit-04-environment",
    titleEn: "Nature & Environment",
    titleTk: "Tebigat we Daşky Gurşaw",
    description: "Bu bölümde tebigatyň beýany, deňeşdirme derejesi we daşky gurşaw öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "elementary-u04-l01-nature",
        titleEn: "Nature and Landscape",
        titleTk: "Tebigat we gözel ýerler",
        content: {
          blocks: [
            { type: "vocabulary_list", data: { titleTk: "Tebigat sözlügi", words: [
              { en: "mountain", tk: "dag", partOfSpeech: "noun", exampleEn: "The Kopet Dag mountains are beautiful.", exampleTk: "Köpetdag daglary ajaýyp." },
              { en: "river", tk: "derýa / çaý", partOfSpeech: "noun", exampleEn: "The Amu Darya is a long river.", exampleTk: "Amyderýa uzyn derýadyr." },
              { en: "desert", tk: "çöl", partOfSpeech: "noun", exampleEn: "The Karakum desert is very hot.", exampleTk: "Garagum çöli gaty yssydyr." },
              { en: "forest", tk: "tokaý", partOfSpeech: "noun", exampleEn: "There are many animals in the forest.", exampleTk: "Tokaýda köp haýwan bar." },
              { en: "ocean / sea", tk: "okean / deňiz", partOfSpeech: "noun", exampleEn: "The Caspian Sea is not an ocean.", exampleTk: "Hazar deňzi okean däldir." },
              { en: "pollution", tk: "hapalama / azyk gurşawyň zaýalanmagy", partOfSpeech: "noun", exampleEn: "Air pollution is a serious problem.", exampleTk: "Howa hapalanmasy çynlakaý meseledir." },
              { en: "environment", tk: "daşky gurşaw / tebigat", partOfSpeech: "noun", exampleEn: "We must protect the environment.", exampleTk: "Biz daşky gurşawy goramaly." },
            ]}},
            { type: "grammar_note", data: { titleTk: "Grammatika: Deňeşdirme — Comparatives", explanationTk: "Iki zady deňeşdirmek üçin comparatives ulanylýar. Gysga sypatlara '-er' goşulýar (tall → taller). Uzyn sypatlara 'more' goşulýar (beautiful → more beautiful). 'Than' sözi deňeşdirme söz birikmesini doldurýar.", pattern: "[gysga sypat]-er than | more + [uzyn sypat] + than", examples: [
              { en: "The mountain is taller than the hill.", tk: "Dag depeden belentdir." },
              { en: "The Caspian Sea is bigger than I expected.", tk: "Hazar deňzi meniň garaşanymdan ulydyr." },
              { en: "This desert is hotter than the other one.", tk: "Bu çöl beýlekisinden has yssydyr." },
            ]}},
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "elementary-u04-l02-superlatives",
        titleEn: "Superlatives",
        titleTk: "Iň üstün dereje",
        content: {
          blocks: [
            { type: "grammar_note", data: { titleTk: "Grammatika: Superlatives — Iň üstün dereje", explanationTk: "Üç ýa-da has köp zady deňeşdirip, biriniň iň öňdedigini aýtmak üçin superlatives ulanylýar. Gysga sypatlara 'the + -est' goşulýar. Uzyn sypatlara 'the most + sypat' ulanylýar.", pattern: "the + [gysga sypat]-est | the most + [uzyn sypat]", examples: [
              { en: "The Everest is the highest mountain in the world.", tk: "Everest dünýäde iň belent dagdyr." },
              { en: "The Amazon is the longest river.", tk: "Amazon iň uzyn derýadyr." },
              { en: "This is the most beautiful place I have seen.", tk: "Bu men gören ýerleriň iň owadanydyr." },
            ]}},
            { type: "dialogue", data: { titleTk: "Söhbetdeşlik: Ýurtlar barada", exchanges: [
              { speakerEn: "Maral", lineEn: "Which country do you think is the most beautiful?", lineTk: "Siziňçe haýsy ýurt iň owadan?" },
              { speakerEn: "Batyr", lineEn: "I think Turkmenistan is one of the most beautiful! The Karakum desert is amazing.", lineTk: "Menimçe Türkmenistan iň owadanlarynyň biri! Garagum çöli ajaýyp." },
              { speakerEn: "Maral", lineEn: "I agree! And our mountains are the tallest in Central Asia.", lineTk: "Ylalaşýaryn! We daglarymyz Orta Aziýanyň iň belentleridir." },
            ]}},
          ],
        },
      },
    ],
    quiz: {
      titleTk: "4-nji Bölüm Synagy: Tebigat we Daşky Gurşaw",
      questions: [
        { order: 1, questionText: "'Dag' iňlisçe näme?", questionType: "translate_tk_en", options: ["valley", "hill", "mountain", "desert"], correctIndex: 2 },
        { order: 2, questionText: "The Nile is _____ than the Amu Darya. (long)", questionType: "multiple_choice_grammar", options: ["longest", "long", "more long", "longer"], correctIndex: 3 },
        { order: 3, questionText: "'Desert' Türkmençede näme?", questionType: "translate_en_tk", options: ["Derýa", "Dag", "Tokaý", "Çöl"], correctIndex: 3 },
        { order: 4, questionText: "This is the _____ mountain in the world. (high — iň üstün)", questionType: "multiple_choice_grammar", options: ["higher", "most high", "highest", "more high"], correctIndex: 2 },
        { order: 5, questionText: "'Pollution' Türkmençede näme?", questionType: "translate_en_tk", options: ["Tebigat", "Hapalama", "Derýa", "Howa"], correctIndex: 1 },
        { order: 6, questionText: "The Amazon is the _____ river. (long — iň uzyn)", questionType: "multiple_choice_grammar", options: ["longer", "most longest", "most long", "longest"], correctIndex: 3 },
        { order: 7, questionText: "'Forest' Türkmençede näme?", questionType: "translate_en_tk", options: ["Dag", "Çöl", "Tokaý", "Derýa"], correctIndex: 2 },
        { order: 8, questionText: "Mars is _____ than Earth. (cold)", questionType: "multiple_choice_grammar", options: ["coldest", "most cold", "colder", "more colder"], correctIndex: 2 },
        { order: 9, questionText: "'Environment' Türkmençede näme?", questionType: "translate_en_tk", options: ["Howa", "Daşky gurşaw", "Tebigat we daşky gurşaw", "Derýa"], correctIndex: 1 },
        { order: 10, questionText: "This is the _____ beautiful city I have seen. (most)", questionType: "multiple_choice_grammar", options: ["more", "most", "very", "quite"], correctIndex: 1 },
      ],
    },
  },

  // ─── UNIT 5: CULTURE ────────────────────────────────────────────────────
  {
    unitNumber: 5,
    slug: "elementary-unit-05-culture",
    titleEn: "Culture & Traditions",
    titleTk: "Medeniýet we Däp-dessurlar",
    description: "Bu bölümde Türkmen we dünýä medeniýeti barada gürrüňdeşlik we geçen zaman düzgünsiz işlikler öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "elementary-u05-l01-culture",
        titleEn: "Festivals and Traditions",
        titleTk: "Baýramlar we däp-dessurlar",
        content: {
          blocks: [
            { type: "vocabulary_list", data: { titleTk: "Medeniýet we däp-dessur sözlügi", words: [
              { en: "festival", tk: "baýram / festival", partOfSpeech: "noun", exampleEn: "Nowruz is a spring festival.", exampleTk: "Nowruz ýaz baýramydyr." },
              { en: "tradition", tk: "däp / dessur", partOfSpeech: "noun", exampleEn: "This is an old tradition in our culture.", exampleTk: "Bu biziň medeniýetimizdäki köne däpdir." },
              { en: "celebrate", tk: "baýramçylyk geçirmek / bellemek", partOfSpeech: "verb", exampleEn: "We celebrate Nowruz every March.", exampleTk: "Biz her mart aýynda Nowruzy belleýäris." },
              { en: "costume", tk: "milli egin-eşik / geýim", partOfSpeech: "noun", exampleEn: "She wore a traditional costume.", exampleTk: "Ol milli egin-eşik geýdi." },
              { en: "dance", tk: "tans / küştdepdi", partOfSpeech: "noun", exampleEn: "Traditional dances are beautiful.", exampleTk: "Milli tanslar ajaýypdyr." },
              { en: "music", tk: "saz / aýdym-saz", partOfSpeech: "noun", exampleEn: "Turkmen music is unique.", exampleTk: "Türkmen sazynyň özboluşly sesi bar." },
            ]}},
            { type: "grammar_note", data: { titleTk: "Grammatika: Past Simple — Düzgünsiz işlikler", explanationTk: "Käbir Iňlis işlikleri geçen zamanda '-ed' goşulmasy bilen üýtgemeýär — olar düzgünsiz işlikler. Olary ýat tutmaly! Iň köp ulanylýan düzgünsiz işlikler: go→went, eat→ate, see→saw, come→came, take→took, make→made.", pattern: "go → went | eat → ate | see → saw | come → came | take → took", examples: [
              { en: "We went to the Nowruz festival.", tk: "Biz Nowruz baýramyna gitdik." },
              { en: "I saw a wonderful traditional dance.", tk: "Men ajaýyp milli tans gördüm." },
              { en: "She wore a beautiful costume.", tk: "Ol owadan egin-eşik geýdi." },
            ]}},
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "elementary-u05-l02-past-irregular",
        titleEn: "More Irregular Verbs",
        titleTk: "Has köp düzgünsiz işlikler",
        content: {
          blocks: [
            { type: "vocabulary_list", data: { titleTk: "Düzgünsiz işlikler (past simple)", words: [
              { en: "gave (give)", tk: "berdi", partOfSpeech: "verb", exampleEn: "She gave me a gift.", exampleTk: "Ol maňa sowgat berdi." },
              { en: "bought (buy)", tk: "satyn aldy", partOfSpeech: "verb", exampleEn: "He bought a new car.", exampleTk: "Ol täze maşyn satyn aldy." },
              { en: "wrote (write)", tk: "ýazdy", partOfSpeech: "verb", exampleEn: "I wrote a letter.", exampleTk: "Men hat ýazdym." },
              { en: "spoke (speak)", tk: "gürledi / gepledi", partOfSpeech: "verb", exampleEn: "She spoke English well.", exampleTk: "Ol Iňlisçe gowy gürledi." },
              { en: "thought (think)", tk: "pikir etdi", partOfSpeech: "verb", exampleEn: "I thought about it all day.", exampleTk: "Men bütin gün bu barada pikir etdim." },
              { en: "knew (know)", tk: "bildi", partOfSpeech: "verb", exampleEn: "He knew the answer.", exampleTk: "Ol jogaby bildi." },
            ]}},
            { type: "dialogue", data: { titleTk: "Söhbetdeşlik: Nowruz baýramy", exchanges: [
              { speakerEn: "Gurban", lineEn: "How did you celebrate Nowruz this year?", lineTk: "Bu ýyl Nowruzy nähili belläňiz?" },
              { speakerEn: "Maral", lineEn: "We went to my grandmother's house. She made a big feast!", lineTk: "Biz mamanyň öýüne gitdik. Ol uly toý edip taýýarlady!" },
              { speakerEn: "Gurban", lineEn: "Did you wear traditional clothes?", lineTk: "Milli egin-eşik geýdiňizmi?" },
              { speakerEn: "Maral", lineEn: "Yes! I wore my mother's old dress. It was beautiful.", lineTk: "Hawa! Men ejemiň köne köýnegini geýdim. Owadandy." },
            ]}},
          ],
        },
      },
    ],
    quiz: {
      titleTk: "5-nji Bölüm Synagy: Medeniýet we Däp-dessurlar",
      questions: [
        { order: 1, questionText: "'Baýram' iňlisçe näme?", questionType: "translate_tk_en", options: ["tradition", "dance", "festival", "costume"], correctIndex: 2 },
        { order: 2, questionText: "We _____ to the festival last year. (go — geçen zaman)", questionType: "multiple_choice_grammar", options: ["go", "goed", "gone", "went"], correctIndex: 3 },
        { order: 3, questionText: "'Celebrate' Türkmençede näme?", questionType: "translate_en_tk", options: ["Tans etmek", "Bellemek / Baýramçylyk geçirmek", "Geýmek", "Ýygnamak"], correctIndex: 1 },
        { order: 4, questionText: "She _____ a beautiful costume. (wear — geçen zaman)", questionType: "multiple_choice_grammar", options: ["wear", "weared", "worn", "wore"], correctIndex: 3 },
        { order: 5, questionText: "'Tradition' Türkmençede näme?", questionType: "translate_en_tk", options: ["Baýram", "Saz", "Däp / Dessur", "Tans"], correctIndex: 2 },
        { order: 6, questionText: "He _____ me a gift. (give — geçen zaman)", questionType: "multiple_choice_grammar", options: ["give", "gived", "given", "gave"], correctIndex: 3 },
        { order: 7, questionText: "'Costume' Türkmençede näme?", questionType: "translate_en_tk", options: ["Tans", "Milli egin-eşik", "Baýram", "Aýdym"], correctIndex: 1 },
        { order: 8, questionText: "I _____ the answer immediately. (know — geçen zaman)", questionType: "multiple_choice_grammar", options: ["know", "knowed", "knewed", "knew"], correctIndex: 3 },
        { order: 9, questionText: "'Festival' Türkmençede näme?", questionType: "translate_en_tk", options: ["Däp", "Tans", "Baýram / Festival", "Saz"], correctIndex: 2 },
        { order: 10, questionText: "She _____ English very well at the meeting. (speak)", questionType: "multiple_choice_grammar", options: ["speak", "speaked", "spoke", "spoken"], correctIndex: 2 },
      ],
    },
  },

  // ─── UNIT 6: EDUCATION ──────────────────────────────────────────────────
  {
    unitNumber: 6,
    slug: "elementary-unit-06-education",
    titleEn: "Education & Learning",
    titleTk: "Bilim we Öwrenmek",
    description: "Bu bölümde bilim, okuw dersler we modallar (have to / must / should) öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "elementary-u06-l01-school",
        titleEn: "School and Subjects",
        titleTk: "Mekdep we dersler",
        content: {
          blocks: [
            { type: "vocabulary_list", data: { titleTk: "Mekdep dersleri", words: [
              { en: "mathematics / maths", tk: "matematika", partOfSpeech: "noun", exampleEn: "Maths is my favourite subject.", exampleTk: "Matematika meniň söýgüli dersim." },
              { en: "history", tk: "taryh", partOfSpeech: "noun", exampleEn: "We study history at school.", exampleTk: "Biz mekdepde taryh öwrenýäris." },
              { en: "science", tk: "ylym / tebigy ylymlar", partOfSpeech: "noun", exampleEn: "Science explains how nature works.", exampleTk: "Ylym tebigatyň nähili işleýändigini düşündirýär." },
              { en: "literature", tk: "edebiýat", partOfSpeech: "noun", exampleEn: "I love reading in literature class.", exampleTk: "Men edebiýat sapagynda kitap okamaklygy halaýaryn." },
              { en: "physical education", tk: "beden terbiýesi", partOfSpeech: "noun", exampleEn: "We have PE twice a week.", exampleTk: "Bizde hepde-de iki gezek beden terbiýesi bar." },
              { en: "exam / test", tk: "synag / imtihan", partOfSpeech: "noun", exampleEn: "I have an important exam tomorrow.", exampleTk: "Meniň ertir möhüm synagym bar." },
              { en: "homework", tk: "öý işi", partOfSpeech: "noun", exampleEn: "Do your homework first!", exampleTk: "Öňünce öý işiňi et!" },
              { en: "graduate", tk: "gutarmak / diplom almak", partOfSpeech: "verb", exampleEn: "She graduated from university last year.", exampleTk: "Ol geçen ýyl uniwersiteti gutardy." },
            ]}},
            { type: "grammar_note", data: { titleTk: "Grammatika: Have to / Must / Should", explanationTk: "'Have to' we 'must' borçnuklygy aňladýar. 'Should' maslahat bermegi aňladýar. 'Have to' gündelik borçlar üçin, 'must' güýçli hökmanlyk üçin, 'should' ýumşak maslahat üçin ulanylýar.", pattern: "I have to / must / should + [işlik]", examples: [
              { en: "You have to study for the exam.", tk: "Synag üçin okamalysyň." },
              { en: "Students must wear uniforms.", tk: "Okuwçylar forma geýmeli." },
              { en: "You should sleep early before an exam.", tk: "Synagdan öň ir ýatmalysyň." },
            ]}},
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "elementary-u06-l02-university",
        titleEn: "University and Higher Education",
        titleTk: "Ýokary bilim",
        content: {
          blocks: [
            { type: "dialogue", data: { titleTk: "Söhbetdeşlik: Okuw we geljek", exchanges: [
              { speakerEn: "Leýla", lineEn: "What do you want to study at university?", lineTk: "Siz uniwersitetde näme okamak isleýärsiňiz?" },
              { speakerEn: "Merdan", lineEn: "I want to study medicine. I have to get very good grades.", lineTk: "Men lukmançylyk okamak isleýärin. Meniň gowy baha almam gerek." },
              { speakerEn: "Leýla", lineEn: "You should prepare well for the entrance exams.", lineTk: "Giriş synaglaryna gowy taýýarlanmalysyň." },
              { speakerEn: "Merdan", lineEn: "I know. I must study every day.", lineTk: "Bilýärin. Men her gün okamaly." },
            ]}},
            { type: "example_set", data: { titleTk: "Have to / Must / Should — mysallar", examples: [
              { en: "I have to wake up early for school.", tk: "Mekdep üçin ir oýanmaly." },
              { en: "You must not cheat in exams!", tk: "Synagda aldamaly dälsiňiz!" },
              { en: "You should eat well and sleep enough.", tk: "Gowy iýip, ýeterlik uky almaly." },
            ]}},
          ],
        },
      },
    ],
    quiz: {
      titleTk: "6-njy Bölüm Synagy: Bilim we Öwrenmek",
      questions: [
        { order: 1, questionText: "'Taryh' iňlisçe näme?", questionType: "translate_tk_en", options: ["science", "maths", "history", "literature"], correctIndex: 2 },
        { order: 2, questionText: "You _____ study for the exam. (borçnuklyk)", questionType: "multiple_choice_grammar", options: ["should", "can", "have to", "might"], correctIndex: 2 },
        { order: 3, questionText: "'Homework' Türkmençede näme?", questionType: "translate_en_tk", options: ["Öý", "Öý işi", "Synag", "Okuw"], correctIndex: 1 },
        { order: 4, questionText: "Students _____ wear uniforms. (güýçli borçnuklyk)", questionType: "multiple_choice_grammar", options: ["should", "must", "can", "might"], correctIndex: 1 },
        { order: 5, questionText: "'Exam' Türkmençede näme?", questionType: "translate_en_tk", options: ["Öý işi", "Derslik", "Synag / Imtihan", "Öwrenmek"], correctIndex: 2 },
        { order: 6, questionText: "You _____ sleep early before the exam. (maslahat)", questionType: "multiple_choice_grammar", options: ["must", "have to", "should", "need"], correctIndex: 2 },
        { order: 7, questionText: "'Graduate' Türkmençede näme?", questionType: "translate_en_tk", options: ["Okamak", "Öwrenmek", "Gutarmak / Diplom almak", "Işlemek"], correctIndex: 2 },
        { order: 8, questionText: "I _____ get up early — my class starts at 7!", questionType: "multiple_choice_grammar", options: ["should", "might", "have to", "can"], correctIndex: 2 },
        { order: 9, questionText: "'Edebiýat' iňlisçe näme?", questionType: "translate_tk_en", options: ["history", "literature", "science", "maths"], correctIndex: 1 },
        { order: 10, questionText: "You _____ not cheat in the exam!", questionType: "multiple_choice_grammar", options: ["should", "must", "have", "can"], correctIndex: 1 },
      ],
    },
  },

  // ─── UNIT 7: RELATIONSHIPS ──────────────────────────────────────────────
  {
    unitNumber: 7,
    slug: "elementary-unit-07-relationships",
    titleEn: "Friends & Relationships",
    titleTk: "Dostlar we Gatnaşyklar",
    description: "Bu bölümde dostlar, häsiýet we 'used to' gurluşy geçen endikler barada öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "elementary-u07-l01-personality",
        titleEn: "Describing People",
        titleTk: "Adamlary beýan etmek",
        content: {
          blocks: [
            { type: "vocabulary_list", data: { titleTk: "Häsiýet sözlügi", words: [
              { en: "kind", tk: "mylakatly / mähirli", partOfSpeech: "adjective", exampleEn: "She is very kind to everyone.", exampleTk: "Ol hemmä gaty mähirli." },
              { en: "brave", tk: "mert / gaýduwsyz", partOfSpeech: "adjective", exampleEn: "He is a brave soldier.", exampleTk: "Ol mert esger." },
              { en: "funny", tk: "güldüriji / şadyýan", partOfSpeech: "adjective", exampleEn: "My best friend is very funny.", exampleTk: "Meniň iň gowy dosty gaty güldüriji." },
              { en: "honest", tk: "dogry sözli / halal", partOfSpeech: "adjective", exampleEn: "Always be honest.", exampleTk: "Hemişe dogry sözli bol." },
              { en: "lazy", tk: "ýaltamak / ýaltak", partOfSpeech: "adjective", exampleEn: "Don't be lazy!", exampleTk: "Ýaltak bolma!" },
              { en: "hardworking", tk: "zähmetsöýer / yhlaslы", partOfSpeech: "adjective", exampleEn: "She is the most hardworking student.", exampleTk: "Ol iň yhlaslы okuwçy." },
              { en: "shy", tk: "utanjaň / ýabany", partOfSpeech: "adjective", exampleEn: "He was very shy as a child.", exampleTk: "Ol çagalykda gaty utanjaňdy." },
              { en: "confident", tk: "özüne ynamly", partOfSpeech: "adjective", exampleEn: "Be confident in yourself!", exampleTk: "Özüňe ynamly bol!" },
            ]}},
            { type: "grammar_note", data: { titleTk: "Grammatika: 'Used to' — geçen endikler", explanationTk: "'Used to' geçmişde adaty bolup, indi bolmaýan endikleri aýtmak üçin ulanylýar. Häzirki zamanda ulanylyp bilinmeýär. Inkär: 'didn't use to'. Sorag: 'Did you use to...?'", pattern: "I used to + [işlik] (but now I don't)", examples: [
              { en: "I used to be very shy, but now I'm confident.", tk: "Men ozal gaty utanjaňdym, emma indi özüme ynamlydyryn." },
              { en: "She used to live in Mary.", tk: "Ol ozal Maryda ýaşardy." },
              { en: "Did you use to play football?", tk: "Sen futbol oýnarydyňmy?" },
            ]}},
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "elementary-u07-l02-friendship",
        titleEn: "Friendship",
        titleTk: "Dostluk",
        content: {
          blocks: [
            { type: "dialogue", data: { titleTk: "Söhbetdeşlik: Köne dost", exchanges: [
              { speakerEn: "Aýgül", lineEn: "Do you remember Kerim from school?", lineTk: "Mekdepden Kerimi ýatlaýarsyňmy?" },
              { speakerEn: "Batyr", lineEn: "Of course! He used to be very quiet.", lineTk: "Hawa! Ol ozal gaty sessizdi." },
              { speakerEn: "Aýgül", lineEn: "I know! He didn't use to talk much. But now he's very confident!", lineTk: "Bilýärin! Ol ozal köp gürlemezdi. Emma indi gaty özüne ynamlydyr!" },
              { speakerEn: "Batyr", lineEn: "People change! He used to be my best friend.", lineTk: "Adamlar üýtgeýär! Ol ozal meniň iň gowy dostumdyr." },
            ]}},
            { type: "vocabulary_list", data: { titleTk: "Dostluk sözlügi", words: [
              { en: "trust", tk: "ynamy / ynanmak", partOfSpeech: "noun", exampleEn: "Good friends trust each other.", exampleTk: "Gowy dostlar bir-birine ynanýarlar." },
              { en: "support", tk: "goldaw / kömek etmek", partOfSpeech: "verb", exampleEn: "True friends always support you.", exampleTk: "Hakyky dostlar hemişe goldaýarlar." },
              { en: "argument", tk: "dawalaşmak / çekişme", partOfSpeech: "noun", exampleEn: "We had an argument but we made up.", exampleTk: "Biz dawalaşdyk, emma ýaraşdyk." },
              { en: "loyal", tk: "wepaly / sadyk", partOfSpeech: "adjective", exampleEn: "A loyal friend never leaves you.", exampleTk: "Wepaly dost hiç wagt taşlamaýar." },
            ]}},
          ],
        },
      },
    ],
    quiz: {
      titleTk: "7-nji Bölüm Synagy: Dostlar we Gatnaşyklar",
      questions: [
        { order: 1, questionText: "'Mylakatly' iňlisçe näme?", questionType: "translate_tk_en", options: ["brave", "lazy", "kind", "shy"], correctIndex: 2 },
        { order: 2, questionText: "I used _____ be very shy.", questionType: "multiple_choice_grammar", options: ["to", "for", "at", "in"], correctIndex: 0 },
        { order: 3, questionText: "'Honest' Türkmençede näme?", questionType: "translate_en_tk", options: ["Ýaltamak", "Güldüriji", "Dogry sözli / Halal", "Utanjaň"], correctIndex: 2 },
        { order: 4, questionText: "She _____ to live here, but now she lives in Ashgabat.", questionType: "multiple_choice_grammar", options: ["uses", "used", "is used", "use"], correctIndex: 1 },
        { order: 5, questionText: "'Loyal' Türkmençede näme?", questionType: "translate_en_tk", options: ["Güýçli", "Wepaly / Sadyk", "Akylly", "Mert"], correctIndex: 1 },
        { order: 6, questionText: "Did you _____ play football at school?", questionType: "multiple_choice_grammar", options: ["used to", "use to", "using to", "uses to"], correctIndex: 1 },
        { order: 7, questionText: "'Hardworking' Türkmençede näme?", questionType: "translate_en_tk", options: ["Ýaltamak", "Utanjaň", "Zähmetsöýer / Yhlaslы", "Güldüriji"], correctIndex: 2 },
        { order: 8, questionText: "He _____ use to talk much.", questionType: "multiple_choice_grammar", options: ["don't", "doesn't", "didn't", "wasn't"], correctIndex: 2 },
        { order: 9, questionText: "'Shy' Türkmençede näme?", questionType: "translate_en_tk", options: ["Mert", "Dogry sözli", "Utanjaň / Ýabany", "Şadyýan"], correctIndex: 2 },
        { order: 10, questionText: "Good friends always _____ each other.", questionType: "multiple_choice_grammar", options: ["trust", "trusts", "trusting", "trusted"], correctIndex: 0 },
      ],
    },
  },

  // ─── UNIT 8: MONEY ──────────────────────────────────────────────────────
  {
    unitNumber: 8,
    slug: "elementary-unit-08-money",
    titleEn: "Money & Everyday Life",
    titleTk: "Pul we Gündelik Durmuş",
    description: "Bu bölümde bank işleri, maliýe we geljek planlary (going to / will) öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "elementary-u08-l01-banking",
        titleEn: "Banking and Finance",
        titleTk: "Bank we maliýe",
        content: {
          blocks: [
            { type: "vocabulary_list", data: { titleTk: "Bank we pul sözlügi", words: [
              { en: "bank account", tk: "bank hasaby", partOfSpeech: "noun", exampleEn: "I opened a bank account last month.", exampleTk: "Men geçen aý bank hasaby açdym." },
              { en: "save money", tk: "pul tygşytlamak", partOfSpeech: "verb", exampleEn: "I try to save money every month.", exampleTk: "Men her aý pul tygşytlamaga çalyşýaryn." },
              { en: "spend money", tk: "pul harçlamak", partOfSpeech: "verb", exampleEn: "Don't spend all your money!", exampleTk: "Ähli puluňy harçlama!" },
              { en: "budget", tk: "býujet / çykdajy meýilnamasy", partOfSpeech: "noun", exampleEn: "Make a monthly budget.", exampleTk: "Aýlyk býujet düz." },
              { en: "afford", tk: "mümkinçiligi bolmak / satyn alyp bilmek", partOfSpeech: "verb", exampleEn: "I can't afford a new car right now.", exampleTk: "Men häzir täze maşyn satyn alyp bilemok." },
              { en: "borrow", tk: "karz almak", partOfSpeech: "verb", exampleEn: "Can I borrow some money?", exampleTk: "Karz pul alyp bilermikäm?" },
              { en: "invest", tk: "maýa goýmak", partOfSpeech: "verb", exampleEn: "He invests in real estate.", exampleTk: "Ol gozgalmaýan emläge maýa goýýar." },
            ]}},
            { type: "grammar_note", data: { titleTk: "Grammatika: Going to — meýilnamalar", explanationTk: "'Going to' eýýäm karar berlen geljek meýilnamalar üçin ulanylýar. Gurluşy: 'am/is/are + going to + işlik'. Bu geljek bilen baglanyşykly alamatlara esaslanýan çaklamalar üçin hem ulanylýar.", pattern: "am/is/are + going to + [işlik]", examples: [
              { en: "I'm going to save more money this year.", tk: "Bu ýyl men has köp pul tygşytlamak isleýärin." },
              { en: "She is going to open a bank account.", tk: "Ol bank hasaby açmak isleýär." },
              { en: "Look at those clouds — it's going to rain.", tk: "Şol bulutlara seret — ýagmyr ýagar." },
            ]}},
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "elementary-u08-l02-will",
        titleEn: "'Will' for Decisions and Predictions",
        titleTk: "'Will' — çözgütler we çaklamalar",
        content: {
          blocks: [
            { type: "grammar_note", data: { titleTk: "Grammatika: Will — tötänden karar bermek we çaklamalar", explanationTk: "'Will' gürleşýän wagtda edilýän kararlar we geljek baradaky umumy çaklamalar üçin ulanylýar. 'Going to'-dan tapawudy: 'will' tötänleýin kararlar üçin, 'going to' öňden planlaşdyrylan kararlar üçin.", pattern: "will + [işlik] (short form: I'll, she'll, they'll)", examples: [
              { en: "I'll help you with that! (Just decided)", tk: "Men saňa şunda kömek ederin! (Ýaňy karar berdim)" },
              { en: "I think it will be expensive.", tk: "Menimçe bu gymmat bolar." },
              { en: "Will you lend me some money?", tk: "Maňa biraz pul karz berermisiň?" },
            ]}},
            { type: "dialogue", data: { titleTk: "Söhbetdeşlik: Geljek baradaky planlar", exchanges: [
              { speakerEn: "Kerim", lineEn: "What are you going to do with your salary this month?", lineTk: "Bu aý zähmet hakyňy näme etmek isleýärsiňiz?" },
              { speakerEn: "Ogulgerek", lineEn: "I'm going to save half and spend half. What about you?", lineTk: "Men ýarysyny tygşytlap, ýarysyny harçlamak isleýärin. Siziň meýliňiz?" },
              { speakerEn: "Kerim", lineEn: "I'll probably invest some in a business idea I have.", lineTk: "Men mende bolan iş pikiri üçin birazyny maýa goýaryn." },
              { speakerEn: "Ogulgerek", lineEn: "That sounds interesting! I think it will be successful.", lineTk: "Bu gyzykly eşidilýär! Menimçe ol üstünlikli bolar." },
            ]}},
          ],
        },
      },
    ],
    quiz: {
      titleTk: "8-nji Bölüm Synagy: Pul we Gündelik Durmuş",
      questions: [
        { order: 1, questionText: "'Pul tygşytlamak' iňlisçe näme?", questionType: "translate_tk_en", options: ["spend money", "borrow money", "save money", "invest money"], correctIndex: 2 },
        { order: 2, questionText: "I _____ going to open a bank account next week.", questionType: "multiple_choice_grammar", options: ["was", "am", "will", "have"], correctIndex: 1 },
        { order: 3, questionText: "'Budget' Türkmençede näme?", questionType: "translate_en_tk", options: ["Bank hasaby", "Býujet / Çykdajy meýilnamasy", "Karz", "Maýa"], correctIndex: 1 },
        { order: 4, questionText: "She _____ probably buy a new car. (will)", questionType: "multiple_choice_grammar", options: ["is", "am", "will", "going to"], correctIndex: 2 },
        { order: 5, questionText: "'Afford' Türkmençede näme?", questionType: "translate_en_tk", options: ["Karz almak", "Harçlamak", "Mümkinçiligi bolmak / Satyn alyp bilmek", "Tygşytlamak"], correctIndex: 2 },
        { order: 6, questionText: "Look at that! It _____ going to rain.", questionType: "multiple_choice_grammar", options: ["is", "am", "will", "was"], correctIndex: 0 },
        { order: 7, questionText: "'Invest' Türkmençede näme?", questionType: "translate_en_tk", options: ["Karz almak", "Harçlamak", "Tygşytlamak", "Maýa goýmak"], correctIndex: 3 },
        { order: 8, questionText: "I _____ help you! (Ýaňy karar berdim)", questionType: "multiple_choice_grammar", options: ["am going to", "will", "am", "have to"], correctIndex: 1 },
        { order: 9, questionText: "'Borrow' Türkmençede näme?", questionType: "translate_en_tk", options: ["Satmak", "Karz almak", "Maýa goýmak", "Tygşytlamak"], correctIndex: 1 },
        { order: 10, questionText: "They _____ going to invest in a new project.", questionType: "multiple_choice_grammar", options: ["am", "is", "are", "will"], correctIndex: 2 },
      ],
    },
  },

  // ─── UNIT 9: NEWS & MEDIA ──────────────────────────────────────────────
  {
    unitNumber: 9,
    slug: "elementary-unit-09-media",
    titleEn: "News & Media",
    titleTk: "Habarlar we Media",
    description: "Bu bölümde habarlar, media görnüşleri we passiv zaman öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "elementary-u09-l01-media",
        titleEn: "Types of Media",
        titleTk: "Media görnüşleri",
        content: {
          blocks: [
            { type: "vocabulary_list", data: { titleTk: "Media sözlügi", words: [
              { en: "newspaper", tk: "gazet", partOfSpeech: "noun", exampleEn: "My grandfather reads the newspaper every morning.", exampleTk: "Meniň babam her irden gazet okaýar." },
              { en: "television / TV", tk: "telewizor", partOfSpeech: "noun", exampleEn: "We watch the news on TV.", exampleTk: "Biz telewizorda habarlary görýäris." },
              { en: "radio", tk: "radio", partOfSpeech: "noun", exampleEn: "I listen to the radio in my car.", exampleTk: "Men maşynda radio diňleýärin." },
              { en: "online news", tk: "internet habarlary", partOfSpeech: "noun", exampleEn: "I read online news every evening.", exampleTk: "Men her agşam internet habarlaryny okäýaryn." },
              { en: "journalist", tk: "žurnalist", partOfSpeech: "noun", exampleEn: "She works as a journalist.", exampleTk: "Ol žurnalist bolup işleýär." },
              { en: "headline", tk: "sarlaw / başlyk", partOfSpeech: "noun", exampleEn: "Did you see the headline today?", exampleTk: "Bu günki sarlawa gördüňizmi?" },
              { en: "report", tk: "habar / hasabat bermek", partOfSpeech: "noun", exampleEn: "The journalist reported the news.", exampleTk: "Žurnalist habary habar berdi." },
            ]}},
            { type: "grammar_note", data: { titleTk: "Grammatika: Passiv zaman (Passive Voice)", explanationTk: "Passiv zaman işi eden adam däl-de, işiň nämä edilen zat ýa-da haýsy zat üçin edilendigi üçin ulanylýar. Gurluşy: 'to be + past participle (işligiň 3-nji görnüşi)'. Habarlarda we resmi tekstlerde köp ulanylýar.", pattern: "[at] + am/is/are + past participle (V3)", examples: [
              { en: "The news is reported every day.", tk: "Habarlar her gün berilýär." },
              { en: "The article was written by a journalist.", tk: "Makala žurnalist tarapyndan ýazyldy." },
              { en: "New laws are made by the government.", tk: "Täze kanunlar hökümet tarapyndan kabul edilýär." },
            ]}},
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "elementary-u09-l02-passive-practice",
        titleEn: "Using Passive Voice",
        titleTk: "Passiwi ulanmak",
        content: {
          blocks: [
            { type: "example_set", data: { titleTk: "Passiwi ulanmak — mysallar", examples: [
              { en: "The book was published in 2020. (Passiv — geçen zaman)", tk: "Kitap 2020-nji ýylda neşir edildi." },
              { en: "English is spoken all over the world. (Passiv — häzirki zaman)", tk: "Iňlis dili bütin dünýäde gepleşilýär." },
              { en: "The new school will be built next year.", tk: "Täze mekdep gelýän ýyl gurlar." },
            ]}},
            { type: "dialogue", data: { titleTk: "Söhbetdeşlik: Habarlary okamak", exchanges: [
              { speakerEn: "Batyr", lineEn: "Did you hear? A new library was opened in the city centre!", lineTk: "Eşitdiňizmi? Şäher merkezinde täze kitaphana açyldy!" },
              { speakerEn: "Aýgül", lineEn: "Really? When was it opened?", lineTk: "Hakykatdanmy? Ol haçan açyldy?" },
              { speakerEn: "Batyr", lineEn: "It was opened last Friday. It was designed by a famous architect.", lineTk: "Ol geçen anna güni açyldy. Ol meşhur arhitektor tarapyndan taslandy." },
            ]}},
          ],
        },
      },
    ],
    quiz: {
      titleTk: "9-njy Bölüm Synagy: Habarlar we Media",
      questions: [
        { order: 1, questionText: "'Gazet' iňlisçe näme?", questionType: "translate_tk_en", options: ["radio", "TV", "newspaper", "magazine"], correctIndex: 2 },
        { order: 2, questionText: "English _____ spoken all over the world. (passiv)", questionType: "multiple_choice_grammar", options: ["speaks", "is spoken", "speak", "was speak"], correctIndex: 1 },
        { order: 3, questionText: "'Journalist' Türkmençede näme?", questionType: "translate_en_tk", options: ["Okyjy", "Ýazyjy", "Žurnalist", "Aktýor"], correctIndex: 2 },
        { order: 4, questionText: "The news _____ reported every evening. (passiv, häzirki zaman)", questionType: "multiple_choice_grammar", options: ["reported", "is reported", "reports", "report"], correctIndex: 1 },
        { order: 5, questionText: "'Headline' Türkmençede näme?", questionType: "translate_en_tk", options: ["Žurnalist", "Sarlaw / Başlyk", "Habar", "Gazet"], correctIndex: 1 },
        { order: 6, questionText: "The book _____ written by Magtymguly. (passiv, geçen zaman)", questionType: "multiple_choice_grammar", options: ["is written", "was written", "written", "writes"], correctIndex: 1 },
        { order: 7, questionText: "'Radio' Türkmençede näme?", questionType: "translate_en_tk", options: ["Telewizor", "Gazet", "Radio", "Internet"], correctIndex: 2 },
        { order: 8, questionText: "The new school _____ built next year. (passiv, geljek)", questionType: "multiple_choice_grammar", options: ["is built", "was built", "will be built", "built"], correctIndex: 2 },
        { order: 9, questionText: "'Report' Türkmençede näme?", questionType: "translate_en_tk", options: ["Sarlaw", "Habar / Hasabat bermek", "Gazet", "Žurnalist"], correctIndex: 1 },
        { order: 10, questionText: "Many languages _____ spoken in India. (passiv)", questionType: "multiple_choice_grammar", options: ["speak", "is spoken", "are spoken", "spoken"], correctIndex: 2 },
      ],
    },
  },

  // ─── UNIT 10: SPORTS ────────────────────────────────────────────────────
  {
    unitNumber: 10,
    slug: "elementary-unit-10-sports",
    titleEn: "Sports & Competition",
    titleTk: "Sport we Bäsleşik",
    description: "Bu bölümde sport sözi we past continuous öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "elementary-u10-l01-sports",
        titleEn: "Sports Vocabulary",
        titleTk: "Sport sözlügi",
        content: {
          blocks: [
            { type: "vocabulary_list", data: { titleTk: "Sport görnüşleri", words: [
              { en: "football / soccer", tk: "futbol", partOfSpeech: "noun", exampleEn: "He plays football for the national team.", exampleTk: "Ol milli topar üçin futbol oýnaýar." },
              { en: "basketball", tk: "basketbol", partOfSpeech: "noun", exampleEn: "She is tall — she plays basketball.", exampleTk: "Ol uzyn — basketbol oýnaýar." },
              { en: "swimming", tk: "ýüzmek / ýüzüşik", partOfSpeech: "noun", exampleEn: "Swimming is good for all ages.", exampleTk: "Ýüzmek ähli ýaşlar üçin gowudyr." },
              { en: "athletics", tk: "ýeňil atletika", partOfSpeech: "noun", exampleEn: "She won a gold medal in athletics.", exampleTk: "Ol ýeňil atletikada altyn medal aldy." },
              { en: "champion", tk: "çempion", partOfSpeech: "noun", exampleEn: "He became the world champion.", exampleTk: "Ol dünýä çempiony boldy." },
              { en: "competition", tk: "bäsleşik", partOfSpeech: "noun", exampleEn: "There is a big competition next week.", exampleTk: "Gelýän hepde uly bäsleşik bar." },
              { en: "train", tk: "türgenleşmek / taýýarlanmak", partOfSpeech: "verb", exampleEn: "Athletes train every day.", exampleTk: "Türgenler her gün türgenleşýärler." },
            ]}},
            { type: "grammar_note", data: { titleTk: "Grammatika: Past Continuous — Bolan wagt geçen zaman dowamly", explanationTk: "Past Continuous geçmişde belli bir wagt bir harekediň dowam edýänligini beýan etmek üçin ulanylýar. Gurluşy: 'was/were + işlik-ing'. Köplenç 'when' ýa-da 'while' bilen ulanylýar.", pattern: "was/were + [işlik]-ing (when/while...)", examples: [
              { en: "I was training when it started to rain.", tk: "Ýagmyr başlanda men türgenleşýärdim." },
              { en: "She was watching the match while I was sleeping.", tk: "Ol oýny görýärkä, men ýatyrdym." },
              { en: "What were you doing at 5 pm yesterday?", tk: "Düýn sagat 5-de näme edýärdiňiz?" },
            ]}},
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "elementary-u10-l02-competition",
        titleEn: "Talking about Competitions",
        titleTk: "Bäsleşikler barada gürrüň etmek",
        content: {
          blocks: [
            { type: "dialogue", data: { titleTk: "Söhbetdeşlik: Sport bäsleşigi", exchanges: [
              { speakerEn: "Leýla", lineEn: "Did you watch the football match last night?", lineTk: "Düýn agşam futbol oýnuny gördüňizmi?" },
              { speakerEn: "Merdan", lineEn: "Yes! It was amazing. I was watching it with my family.", lineTk: "Hawa! Ajaýypdy. Men maşgalamy bilen görýärdim." },
              { speakerEn: "Leýla", lineEn: "When they scored the second goal, I was eating dinner!", lineTk: "Olar ikinji gol uraýanda, men agşam naharyny iýýärdim!" },
              { speakerEn: "Merdan", lineEn: "Ha! While you were eating, we were celebrating!", lineTk: "Ha! Sen iýip otyrkaň, biz dabaralandyrýardyk!" },
            ]}},
            { type: "example_set", data: { titleTk: "Past Continuous — mysallar", examples: [
              { en: "He was running when he fell.", tk: "Ol ylgaýarkä ýykyldy." },
              { en: "While she was training, it started to snow.", tk: "Ol türgenleşip otyrka, gar ýagmaga başlady." },
              { en: "What were you doing at 8 pm? — I was watching TV.", tk: "Sagat 8-de näme edýärdiňiz? — Telewizor görýärdim." },
            ]}},
          ],
        },
      },
    ],
    quiz: {
      titleTk: "10-njy Bölüm Synagy: Sport we Bäsleşik",
      questions: [
        { order: 1, questionText: "'Bäsleşik' iňlisçe näme?", questionType: "translate_tk_en", options: ["training", "champion", "competition", "match"], correctIndex: 2 },
        { order: 2, questionText: "I _____ training when it started to rain.", questionType: "multiple_choice_grammar", options: ["trained", "train", "was training", "am training"], correctIndex: 2 },
        { order: 3, questionText: "'Champion' Türkmençede näme?", questionType: "translate_en_tk", options: ["Türgen", "Topar", "Bäsleşik", "Çempion"], correctIndex: 3 },
        { order: 4, questionText: "She _____ watching the game while I was sleeping.", questionType: "multiple_choice_grammar", options: ["watched", "was watching", "is watching", "watch"], correctIndex: 1 },
        { order: 5, questionText: "'Train' (sport) Türkmençede näme?", questionType: "translate_en_tk", options: ["Otly", "Türgenleşmek", "Bäsleşmek", "Ýeňmek"], correctIndex: 1 },
        { order: 6, questionText: "What _____ you doing at 6 pm yesterday?", questionType: "multiple_choice_grammar", options: ["was", "are", "were", "did"], correctIndex: 2 },
        { order: 7, questionText: "'Basketball' Türkmençede näme?", questionType: "translate_en_tk", options: ["Futbol", "Ýüzmek", "Basketbol", "Atletika"], correctIndex: 2 },
        { order: 8, questionText: "He _____ running when he fell.", questionType: "multiple_choice_grammar", options: ["was running", "ran", "is running", "run"], correctIndex: 0 },
        { order: 9, questionText: "'Athletics' Türkmençede näme?", questionType: "translate_en_tk", options: ["Futbol", "Basketbol", "Ýeňil atletika", "Ýüzmek"], correctIndex: 2 },
        { order: 10, questionText: "While she _____ cooking, the phone rang.", questionType: "multiple_choice_grammar", options: ["cooked", "is cooking", "was cooking", "cooks"], correctIndex: 2 },
      ],
    },
  },

  // ─── UNIT 11: FUTURE PLANS ──────────────────────────────────────────────
  {
    unitNumber: 11,
    slug: "elementary-unit-11-future",
    titleEn: "Plans & Ambitions",
    titleTk: "Meýilnamalar we Maksatlar",
    description: "Bu bölümde geljek planlary, arzuwlar we birinji şert (first conditional) öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "elementary-u11-l01-ambitions",
        titleEn: "Dreams and Ambitions",
        titleTk: "Arzuwlar we maksatlar",
        content: {
          blocks: [
            { type: "vocabulary_list", data: { titleTk: "Arzuw we maksat sözlügi", words: [
              { en: "dream", tk: "arzuw / düýş", partOfSpeech: "noun", exampleEn: "My dream is to become a doctor.", exampleTk: "Meniň arzuwym lukman bolmak." },
              { en: "goal", tk: "maksat / wezipe", partOfSpeech: "noun", exampleEn: "Set a clear goal for yourself.", exampleTk: "Özüňiz üçin anyk maksat goýuň." },
              { en: "achieve", tk: "gazanmak / ýetmek", partOfSpeech: "verb", exampleEn: "You can achieve anything you want.", exampleTk: "Isleýän zatlaryňyza ýetip bilersiňiz." },
              { en: "career", tk: "karýera / kär", partOfSpeech: "noun", exampleEn: "I want a career in medicine.", exampleTk: "Men lukmançylykda karýera isleýärin." },
              { en: "succeed", tk: "üstünlik gazanmak", partOfSpeech: "verb", exampleEn: "Hard work helps you succeed.", exampleTk: "Zähmet çekmek üstünlik gazanmaga kömek edýär." },
              { en: "opportunity", tk: "mümkinçilik / pursat", partOfSpeech: "noun", exampleEn: "Don't miss this opportunity!", exampleTk: "Bu mümkinçiligi sypdyrma!" },
            ]}},
            { type: "grammar_note", data: { titleTk: "Grammatika: First Conditional — Birinji şert", explanationTk: "Birinji şert mümkin bolan geljek şertleri beýan etmek üçin ulanylýar. Gurluşy: 'If + Simple Present, will + işlik'. Şert ýerine ýetse, netijesiniň boljakdygyny aňladýar.", pattern: "If + [Simple Present], [will + işlik]", examples: [
              { en: "If I study hard, I will pass the exam.", tk: "Kyn okasamlar, synagy geçerin." },
              { en: "If you don't try, you won't succeed.", tk: "Synanyşmasaň, üstünlik gazanmarsyň." },
              { en: "If it rains, we will stay inside.", tk: "Ýagmyr ýagsa, içerde galarys." },
            ]}},
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "elementary-u11-l02-conditional-practice",
        titleEn: "Using First Conditional",
        titleTk: "Birinji şerti ulanmak",
        content: {
          blocks: [
            { type: "dialogue", data: { titleTk: "Söhbetdeşlik: Geljek barada", exchanges: [
              { speakerEn: "Kerim", lineEn: "What will you do if you pass the university exam?", lineTk: "Uniwersitet synagyndan geçseň, näme edersiňiz?" },
              { speakerEn: "Maral", lineEn: "If I pass, I'll study medicine. If I don't, I'll try again next year.", lineTk: "Geçsem, lukmançylyk okäryn. Geçmesem, gelýän ýyl gaýtadan synanyşaryn." },
              { speakerEn: "Kerim", lineEn: "I'm sure you'll pass! If you need help with studying, I'll help you.", lineTk: "Geçersiň diýip ynanýaryn! Okamagy öwrenmek üçin kömek gerek bolsa, kömek ederin." },
            ]}},
            { type: "example_set", data: { titleTk: "First Conditional — mysallar", examples: [
              { en: "If I get a good job, I will buy a new house.", tk: "Gowy iş tapsam, täze öý satyn alaryn." },
              { en: "If she doesn't sleep enough, she'll be tired.", tk: "Ol ýeterlik uklaman, ýadaw bolar." },
              { en: "Will you call me if you need help?", tk: "Kömek gerek bolsa, jaň edersiňizmi?" },
            ]}},
          ],
        },
      },
    ],
    quiz: {
      titleTk: "11-nji Bölüm Synagy: Meýilnamalar we Maksatlar",
      questions: [
        { order: 1, questionText: "'Arzuw' iňlisçe näme?", questionType: "translate_tk_en", options: ["goal", "dream", "career", "success"], correctIndex: 1 },
        { order: 2, questionText: "If I study hard, I _____ pass the exam.", questionType: "multiple_choice_grammar", options: ["would", "will", "am", "should"], correctIndex: 1 },
        { order: 3, questionText: "'Career' Türkmençede näme?", questionType: "translate_en_tk", options: ["Arzuw", "Mümkinçilik", "Karýera / Kär", "Maksat"], correctIndex: 2 },
        { order: 4, questionText: "If it _____ rain, we will stay at home.", questionType: "multiple_choice_grammar", options: ["will", "would", "rains", "rained"], correctIndex: 2 },
        { order: 5, questionText: "'Achieve' Türkmençede näme?", questionType: "translate_en_tk", options: ["Islemek", "Gazanmak / Ýetmek", "Synanyşmak", "Öwrenmek"], correctIndex: 1 },
        { order: 6, questionText: "If she doesn't sleep, she _____ be tired.", questionType: "multiple_choice_grammar", options: ["would", "is", "will", "was"], correctIndex: 2 },
        { order: 7, questionText: "'Opportunity' Türkmençede näme?", questionType: "translate_en_tk", options: ["Maksat", "Arzuw", "Mümkinçilik / Pursat", "Karýera"], correctIndex: 2 },
        { order: 8, questionText: "If you _____ try, you won't succeed.", questionType: "multiple_choice_grammar", options: ["didn't", "don't", "won't", "not"], correctIndex: 1 },
        { order: 9, questionText: "'Succeed' Türkmençede näme?", questionType: "translate_en_tk", options: ["Sypmak", "Üstünlik gazanmak", "Başarmazmak", "Islemek"], correctIndex: 1 },
        { order: 10, questionText: "_____ you call me if you need help?", questionType: "multiple_choice_grammar", options: ["Are", "Do", "Will", "Would"], correctIndex: 2 },
      ],
    },
  },

  // ─── UNIT 12: SOCIETY ───────────────────────────────────────────────────
  {
    unitNumber: 12,
    slug: "elementary-unit-12-society",
    titleEn: "Society & Community",
    titleTk: "Jemgyýet we Jemgyýetçilik",
    description: "Bu bölümde jemgyýet, ikinji şert (second conditional) we arzuw etmek öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "elementary-u12-l01-society",
        titleEn: "Society and Social Issues",
        titleTk: "Jemgyýet we sosial meseleler",
        content: {
          blocks: [
            { type: "vocabulary_list", data: { titleTk: "Jemgyýet sözlügi", words: [
              { en: "community", tk: "jemgyýet / toplum", partOfSpeech: "noun", exampleEn: "We should help our community.", exampleTk: "Biz jemgyýetimize kömek etmeli." },
              { en: "volunteer", tk: "meýletinçi / köneklikçi", partOfSpeech: "noun", exampleEn: "She works as a volunteer at the hospital.", exampleTk: "Ol hassahanada meýletinçi bolup işleýär." },
              { en: "charity", tk: "haýyr-sahawat", partOfSpeech: "noun", exampleEn: "Please donate to charity.", exampleTk: "Haýyr-sahawata goşant goşuň." },
              { en: "environment", tk: "daşky gurşaw", partOfSpeech: "noun", exampleEn: "We must protect our environment.", exampleTk: "Daşky gurşawymyzy goramaly." },
              { en: "poverty", tk: "garyplyk", partOfSpeech: "noun", exampleEn: "We should help people in poverty.", exampleTk: "Garyp adamlara kömek etmeli." },
              { en: "equality", tk: "deňlik / adalat", partOfSpeech: "noun", exampleEn: "Everyone deserves equality.", exampleTk: "Hemme adam deňlige mynasyp." },
              { en: "rights", tk: "hukuk / huquqlar", partOfSpeech: "noun", exampleEn: "Every person has rights.", exampleTk: "Her adamyň hukugy bar." },
            ]}},
            { type: "grammar_note", data: { titleTk: "Grammatika: Second Conditional — Ikinji şert", explanationTk: "Ikinji şert mümkin bolmadyk ýa-da ähtimally bolmadyk ýagdaýlar üçin ulanylýar. Gurluşy: 'If + Simple Past, would + işlik'. Häzirki hakykatdan tapawutly arzuw ýa-da hyýaly ýagdaýy beýan edýär.", pattern: "If + [Simple Past], [would + işlik]", examples: [
              { en: "If I had more money, I would help more people.", tk: "Has köp pulumy bolsady, has köp adamlara kömek ederdim." },
              { en: "If I were the president, I would build more schools.", tk: "Prezident bolsam, has köp mekdep gurardym." },
              { en: "What would you do if you won a million dollars?", tk: "Million dollar utansaňyz, näme ederdiňiz?" },
            ]}},
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "elementary-u12-l02-wishes",
        titleEn: "Wishes and Imaginary Situations",
        titleTk: "Arzuwlar we hyýaly ýagdaýlar",
        content: {
          blocks: [
            { type: "dialogue", data: { titleTk: "Söhbetdeşlik: Jemgyýet üçin arzuwlar", exchanges: [
              { speakerEn: "Gurban", lineEn: "If you could change one thing in society, what would it be?", lineTk: "Jemgyýetde bir zady üýtgedip bilseňiz, ol näme bolardy?" },
              { speakerEn: "Ogulgerek", lineEn: "If I had the power, I would make education free for everyone.", lineTk: "Güýjüm bolsady, hemmeler üçin bilimi mugt ederdim." },
              { speakerEn: "Gurban", lineEn: "That's wonderful! If I were a leader, I would fight poverty.", lineTk: "Ajaýyp! Ýolbaşçy bolsam, garyplykla göreşerdim." },
              { speakerEn: "Ogulgerek", lineEn: "The world would be a better place if everyone helped each other.", lineTk: "Hemmeler bir-birine kömek etsedi, dünýä has gowy ýer bolardy." },
            ]}},
            { type: "example_set", data: { titleTk: "Second Conditional — mysallar", examples: [
              { en: "If I were richer, I would donate to charity.", tk: "Has baý bolsam, haýyr-sahawata goşant goşardym." },
              { en: "What would you do if you found a wallet?", tk: "Gapjyk tapansyňyz, näme ederdiňiz?" },
              { en: "If everyone recycled, the world would be cleaner.", tk: "Hemmeler gaýtadan işletsedi, dünýä arassa bolardy." },
            ]}},
          ],
        },
      },
    ],
    quiz: {
      titleTk: "12-nji Bölüm Synagy: Jemgyýet we Jemgyýetçilik",
      questions: [
        { order: 1, questionText: "'Jemgyýet' iňlisçe näme?", questionType: "translate_tk_en", options: ["charity", "volunteer", "community", "equality"], correctIndex: 2 },
        { order: 2, questionText: "If I had more money, I _____ help more people.", questionType: "multiple_choice_grammar", options: ["will", "would", "should", "can"], correctIndex: 1 },
        { order: 3, questionText: "'Volunteer' Türkmençede näme?", questionType: "translate_en_tk", options: ["Lukmançy", "Meýletinçi", "Ýolbaşçy", "Mugallym"], correctIndex: 1 },
        { order: 4, questionText: "If I _____ the president, I would build more schools.", questionType: "multiple_choice_grammar", options: ["am", "was", "were", "be"], correctIndex: 2 },
        { order: 5, questionText: "'Charity' Türkmençede näme?", questionType: "translate_en_tk", options: ["Jemgyýet", "Haýyr-sahawat", "Hukuk", "Deňlik"], correctIndex: 1 },
        { order: 6, questionText: "What would you do if you _____ a million dollars?", questionType: "multiple_choice_grammar", options: ["win", "won", "will win", "wins"], correctIndex: 1 },
        { order: 7, questionText: "'Equality' Türkmençede näme?", questionType: "translate_en_tk", options: ["Garyplyk", "Ýolbaşçy", "Deňlik / Adalat", "Hukuk"], correctIndex: 2 },
        { order: 8, questionText: "The world _____ better if everyone helped each other.", questionType: "multiple_choice_grammar", options: ["is", "was", "would be", "will be"], correctIndex: 2 },
        { order: 9, questionText: "'Rights' Türkmençede näme?", questionType: "translate_en_tk", options: ["Deňlik", "Hukuk / Huquqlar", "Garyplyk", "Jemgyýet"], correctIndex: 1 },
        { order: 10, questionText: "If I _____ richer, I would donate to charity.", questionType: "multiple_choice_grammar", options: ["am", "was", "were", "will be"], correctIndex: 2 },
      ],
    },
  },
];
