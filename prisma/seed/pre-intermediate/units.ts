import type { SeedUnit } from "../../../types/content";

export const preIntermediateUnits: SeedUnit[] = [
  // ─── UNIT 1: JOBS & WORK LIFE ────────────────────────────────────────────
  {
    unitNumber: 1,
    slug: "pre-int-unit-01-jobs-work",
    titleEn: "Jobs & Work Life",
    titleTk: "Kärler we Iş Durmuşy",
    description: "Bu bölümde dürli hünärler, iş ýerleri we gündelik iş endiklerini öwrenersiňiz. Present Simple grammatikasyny iş durmuşynda ulanmagy öwrenersiňiz.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "pre-int-u01-l01-jobs-vocabulary",
        titleEn: "Jobs & Professions",
        titleTk: "Hünärler we Kärler",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Iňlis dilinde hünär soralanda 'What do you do?' ýa-da 'What is your job?' diýilýär. Jogap bereniňde 'I am a ...' däl-de, köplenç 'I work as a ...' ýa-da 'I am a ...' ulanylýar. Hünäriň öňünde 'a' ýa-da 'an' goýulýar.",
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "Hünärler",
                words: [
                  { en: "engineer", tk: "inžener", partOfSpeech: "noun", exampleEn: "She works as an engineer at a tech company.", exampleTk: "Ol tehnologiýa kompaniýasynda inžener bolup işleýär." },
                  { en: "accountant", tk: "buhgalter / hasapçy", partOfSpeech: "noun", exampleEn: "My brother is an accountant.", exampleTk: "Meniň doganym buhgalter." },
                  { en: "pharmacist", tk: "eczaçy / dermançy", partOfSpeech: "noun", exampleEn: "The pharmacist gave me some medicine.", exampleTk: "Eczaçy maňa derman berdi." },
                  { en: "architect", tk: "arhitektor", partOfSpeech: "noun", exampleEn: "He designed the new building as an architect.", exampleTk: "Ol arhitektor hökmünde täze binany tasaplaýar." },
                  { en: "lawyer", tk: "ýurist / hukukçy", partOfSpeech: "noun", exampleEn: "She studies law and wants to be a lawyer.", exampleTk: "Ol hukuk öwrenýär we ýurist bolmak isleýär." },
                  { en: "journalist", tk: "žurnalist", partOfSpeech: "noun", exampleEn: "The journalist wrote an article about education.", exampleTk: "Žurnalist bilim barada makala ýazdy." },
                  { en: "chef", tk: "aşpez / ussaçy", partOfSpeech: "noun", exampleEn: "The chef prepares delicious meals every day.", exampleTk: "Aşpez her gün tagamly naharlar taýýarlaýar." },
                  { en: "mechanic", tk: "mehanik / abatlaýjy", partOfSpeech: "noun", exampleEn: "The mechanic fixed my car quickly.", exampleTk: "Mehanik maşynymy çalt düzetdi." },
                ],
              },
            },
            {
              type: "dialogue",
              data: {
                titleTk: "Söhbetdeşlik: Iş barada gürrüň",
                exchanges: [
                  { speakerEn: "Serdar", lineEn: "Hi Maral! What do you do?", lineTk: "Salam Maral! Sen näme iş edýärsiň?" },
                  { speakerEn: "Maral", lineEn: "I work as a graphic designer at a media company. What about you?", lineTk: "Men media kompaniýasynda grafik dizaýner bolup işleýärin. Sen näme?" },
                  { speakerEn: "Serdar", lineEn: "I'm an engineer. I design bridges and roads.", lineTk: "Men inžener. Köprüleri we ýollary taslaýaryn." },
                  { speakerEn: "Maral", lineEn: "That sounds interesting! Do you enjoy your job?", lineTk: "Gyzykly bolsa gerek! Işiňi halaýarsyňmy?" },
                  { speakerEn: "Serdar", lineEn: "Yes, very much. I love solving problems.", lineTk: "Hawa, gaty. Meselä çözgüt tapmak halaýaryn." },
                ],
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: Hünär barada aýtmak",
                explanationTk: "Hünäriňizi aýdanyňyzda 'I am a/an + hünär' ýa-da 'I work as a/an + hünär' diýiň. Sessiň bilen başlanýan sözleriň öňünde 'an' ulanylýar (an engineer, an accountant, an architect).",
                pattern: "I am a/an [hünär]. / I work as a/an [hünär].",
                examples: [
                  { en: "I am a teacher.", tk: "Men mugallym." },
                  { en: "She works as an engineer.", tk: "Ol inžener bolup işleýär." },
                  { en: "He is an accountant at a bank.", tk: "Ol bankda buhgalter." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "pre-int-u01-l02-present-simple-work",
        titleEn: "Present Simple at Work",
        titleTk: "Iş Ýerinde Present Simple",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Present Simple — gündelik, yzygiderli ýa-da hemişe dogry bolan zatlary aňlatmak üçin ulanylýar. Iş durmuşynda 'I start work at 9', 'She always checks emails first' ýaly jümleler köp ulanylýar. 3-nji şahsda (he/she/it) işligiň soňuna -s ýa-da -es goşulýar.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: Present Simple düzgünleri",
                explanationTk: "He/She/It bilen işligiň soňuna -s goşulýar. -ch, -sh, -x, -o bilen gutarýan işliklere -es goşulýar. -y bilen gutarýan işliklerde y→ies bolýar. Sorag we inkär üçin do/does ulanylýar.",
                pattern: "I/You/We/They + işlik. He/She/It + işlik + -s/-es.",
                examples: [
                  { en: "He starts work at eight o'clock.", tk: "Ol sagat sekizde işe başlaýar." },
                  { en: "She doesn't work on Sundays.", tk: "Ol ýekşenbe günleri işlemeýär." },
                  { en: "Do they have a meeting today?", tk: "Olaryň bu gün ýygnagy barmy?" },
                ],
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "Iş ýerinde ulanylýan sözler",
                words: [
                  { en: "colleague", tk: "kärdeş / iş ýoldaşy", partOfSpeech: "noun", exampleEn: "My colleagues are very helpful.", exampleTk: "Meniň kärdeşlerim gaty kömekçi." },
                  { en: "meeting", tk: "ýygnak / duşuşyk", partOfSpeech: "noun", exampleEn: "We have a meeting every Monday morning.", exampleTk: "Biziň her duşenbe irden ýygnamyz bar." },
                  { en: "deadline", tk: "möhlet / soňky gün", partOfSpeech: "noun", exampleEn: "The deadline for this project is Friday.", exampleTk: "Bu taslamanyň möhleti anna güni." },
                  { en: "salary", tk: "aýlyk / zähmet haky", partOfSpeech: "noun", exampleEn: "Her salary is quite good.", exampleTk: "Onuň aýlygy gaty gowy." },
                  { en: "overtime", tk: "artyk wagt / goşmaça iş", partOfSpeech: "noun", exampleEn: "He works overtime three days a week.", exampleTk: "Ol hepde-de üç gün artyk wagt işleýär." },
                  { en: "resign", tk: "işden çykmak", partOfSpeech: "verb", exampleEn: "She resigned from her job last month.", exampleTk: "Ol geçen aý işinden çykdy." },
                ],
              },
            },
            {
              type: "example_set",
              data: {
                titleTk: "Gündelik iş — mysallar",
                examples: [
                  { en: "I usually arrive at work at 8:30.", tk: "Men köplenç işe sagat 8:30-da gelýärin." },
                  { en: "She checks her emails first thing in the morning.", tk: "Ol irden ilki bilen elektron poçtasyny barlaýar." },
                  { en: "They hold a team meeting every Friday afternoon.", tk: "Olar her anna günüň öýlesi topar ýygnagy geçirýärler." },
                  { en: "He doesn't take a lunch break — he eats at his desk.", tk: "Ol günortanlyk arakesmesi almaýar — stolunyň başynda iýýär." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "pre-int-u01-l03-job-interview",
        titleEn: "Job Interview",
        titleTk: "Iş Söhbetdeşligi",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Iş söhbetdeşliginde özüňi tanyşdyrmak, tejribäňi we ukyplaryny aýtmak möhümdir. Bu sapakda iş söhbetdeşliginde ulanylýan esasy sorag we jogap gurluşlaryny öwrenersiňiz.",
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "Iş söhbetdeşliginde ulanylýan sözler",
                words: [
                  { en: "experience", tk: "tejribe", partOfSpeech: "noun", exampleEn: "I have three years of experience in marketing.", exampleTk: "Meniň marketingde üç ýyllyk tejribäm bar." },
                  { en: "qualification", tk: "hünär derejesi / bilim", partOfSpeech: "noun", exampleEn: "What qualifications do you have?", exampleTk: "Siziň hünär derejeleriňiz näme?" },
                  { en: "skill", tk: "başarnyk / ukyp", partOfSpeech: "noun", exampleEn: "Communication skills are very important.", exampleTk: "Aragatnaşyk başarnygy gaty möhüm." },
                  { en: "responsible for", tk: "jogapkär / ...üçin jogap berýän", partOfSpeech: "adjective", exampleEn: "I am responsible for training new staff.", exampleTk: "Men täze işgärleri taýýarlamak üçin jogapkär." },
                  { en: "strength", tk: "güýçli tarap", partOfSpeech: "noun", exampleEn: "My greatest strength is attention to detail.", exampleTk: "Meniň iň güýçli tarapym jikme-jiklere üns bermekdir." },
                ],
              },
            },
            {
              type: "dialogue",
              data: {
                titleTk: "Söhbetdeşlik: Iş söhbetdeşligi",
                exchanges: [
                  { speakerEn: "Interviewer", lineEn: "Tell me about yourself.", lineTk: "Özüňiz barada aýdyň." },
                  { speakerEn: "Candidate", lineEn: "I'm Kerim. I studied computer science and I currently work as a software developer.", lineTk: "Men Kerim. Men kompýuter ylmyny okadym we häzirki wagtda programma üpjünçisi bolup işleýärin." },
                  { speakerEn: "Interviewer", lineEn: "How many years of experience do you have?", lineTk: "Siziň näçe ýyl tejribäňiz bar?" },
                  { speakerEn: "Candidate", lineEn: "I have four years of experience in web development.", lineTk: "Meniň web ösüşde dört ýyllyk tejribäm bar." },
                  { speakerEn: "Interviewer", lineEn: "What are your main strengths?", lineTk: "Siziň esasy güýçli taraplyaryňyz näme?" },
                  { speakerEn: "Candidate", lineEn: "I am very organised and I work well in a team.", lineTk: "Men gaty tertipli we topar bilen gowy işleýärin." },
                ],
              },
            },
            {
              type: "example_set",
              data: {
                titleTk: "Iş söhbetdeşliginde jogap mysallary",
                examples: [
                  { en: "I have experience working with international teams.", tk: "Halkara toparlary bilen işlemekde tejribäm bar." },
                  { en: "My weakness is that I sometimes work too hard.", tk: "Meniň gowşak tarapym käwagtlar gaty köp işlemekdir." },
                  { en: "I am looking for a challenging position where I can grow.", tk: "Ösüp biljek kyn bir wezipe gözleýärin." },
                ],
              },
            },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "1-nji Bölüm Synagy: Kärler we Iş Durmuşy",
      questions: [
        { order: 1, questionText: "'Buhgalter' iňlisçe näme?", questionType: "translate_tk_en", options: ["architect", "accountant", "engineer", "lawyer"], correctIndex: 1 },
        { order: 2, questionText: "She _____ work at 9 every morning.", questionType: "multiple_choice_grammar", options: ["start", "starts", "starting", "started"], correctIndex: 1 },
        { order: 3, questionText: "'Deadline' Türkmençede näme?", questionType: "translate_en_tk", options: ["Aýlyk", "Möhlet / Soňky gün", "Ýygnak", "Tejribe"], correctIndex: 1 },
        { order: 4, questionText: "I _____ work overtime this week.", questionType: "multiple_choice_grammar", options: ["doesn't", "don't", "not", "isn't"], correctIndex: 1 },
        { order: 5, questionText: "'Hünär derejesi' iňlisçe näme?", questionType: "translate_tk_en", options: ["experience", "skill", "qualification", "strength"], correctIndex: 2 },
        { order: 6, questionText: "He _____ responsible for training new staff.", questionType: "multiple_choice_grammar", options: ["am", "are", "is", "be"], correctIndex: 2 },
        { order: 7, questionText: "'What do you do?' Türkmençede näme?", questionType: "translate_en_tk", options: ["Sen nirede?", "Sen näme iş edýärsiň?", "Sen nähili?", "Näme bolýar?"], correctIndex: 1 },
        { order: 8, questionText: "Do they _____ a meeting on Mondays?", questionType: "multiple_choice_grammar", options: ["has", "have", "having", "had"], correctIndex: 1 },
        { order: 9, questionText: "'Kärdeş' iňlisçe näme?", questionType: "translate_tk_en", options: ["customer", "colleague", "client", "manager"], correctIndex: 1 },
        { order: 10, questionText: "She _____ work on weekends.", questionType: "multiple_choice_grammar", options: ["don't", "isn't", "doesn't", "not"], correctIndex: 2 },
      ],
    },
  },

  // ─── UNIT 2: TRAVEL & HOLIDAYS ──────────────────────────────────────────
  {
    unitNumber: 2,
    slug: "pre-int-unit-02-travel-holidays",
    titleEn: "Travel & Holidays",
    titleTk: "Syýahat we Dynç Alyş",
    description: "Bu bölümde geçmişdäki syýahatlaryňyz we dynç alyş tejribeleriňiz barada gürrüň bermegi öwrenersiňiz. Past Simple (düzgünli we düzgünsiz işlikler) öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "pre-int-u02-l01-past-simple-regular",
        titleEn: "Past Simple — Regular Verbs",
        titleTk: "Geçen Zaman — Düzgünli Işlikler",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Past Simple (Geçen Zaman) geçmişde bolan we tamamlanan hereketleri aňlatmak üçin ulanylýar. Düzgünli işliklerde işligiň soňuna -ed goşulýar. 'Yesterday', 'last week', 'in 2020', 'ago' ýaly wagt görkezijileri bilen ulanylýar.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: Past Simple düzgünli işlikler",
                explanationTk: "Düzgünli işliklere -ed goşulýar: work → worked, visit → visited. -e bilen gutaranlara diňe -d goşulýar: arrive → arrived, live → lived. Sorag: Did + işlik (sada görnüş). Inkär: didn't + işlik (sada görnüş).",
                pattern: "Işlik + -ed. Did + sen + işlik? Sen + didn't + işlik.",
                examples: [
                  { en: "We visited Istanbul last summer.", tk: "Biz geçen tomus Stambuly gezdik." },
                  { en: "Did you enjoy the trip?", tk: "Syýahaty halaýarmydyňyz?" },
                  { en: "She didn't stay at a hotel — she rented an apartment.", tk: "Ol myhmanhana galmaýar — ol kwartira kireýine aldy." },
                ],
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "Syýahat sözi — Düzgünli işlikler",
                words: [
                  { en: "travel", tk: "syýahat etmek", partOfSpeech: "verb", exampleEn: "They travelled to three countries last year.", exampleTk: "Olar geçen ýyl üç ýurda syýahat etdi." },
                  { en: "book", tk: "bronlamak / öňünden almak", partOfSpeech: "verb", exampleEn: "I booked the hotel two months ago.", exampleTk: "Men myhmanhana iki aý öň bronladym." },
                  { en: "visit", tk: "baryp görmek", partOfSpeech: "verb", exampleEn: "We visited the old market in the city centre.", exampleTk: "Biz şäher merkezindäki köne bazara bardyk." },
                  { en: "pack", tk: "goşuny ýygnamak / çemodany doldurmak", partOfSpeech: "verb", exampleEn: "She packed her suitcase the night before.", exampleTk: "Ol öňki gijesi çemadanyny ýygnaýar." },
                  { en: "arrive", tk: "gelmek / ýetip gelmek", partOfSpeech: "verb", exampleEn: "We arrived at the airport three hours early.", exampleTk: "Biz howa menziline üç sagat ir geldik." },
                  { en: "enjoy", tk: "lezzet almak / hoşlanmak", partOfSpeech: "verb", exampleEn: "I really enjoyed the food there.", exampleTk: "Men ol ýerdäki nahary gaty gowy gördüm." },
                ],
              },
            },
            {
              type: "example_set",
              data: {
                titleTk: "Mysallar",
                examples: [
                  { en: "Last year I travelled to Turkey and stayed there for ten days.", tk: "Geçen ýyl Türkiýä syýahat etdim we on gün galdym." },
                  { en: "We visited a lot of historical places.", tk: "Biz köp taryhy ýerleri gezdik." },
                  { en: "I didn't want to come home!", tk: "Men öýe gelmek isledim!" },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "pre-int-u02-l02-past-simple-irregular",
        titleEn: "Past Simple — Irregular Verbs",
        titleTk: "Geçen Zaman — Düzgünsiz Işlikler",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Iňlis dilinde köp sanly 'düzgünsiz' işlikler bar. Bu işlikleriň geçen zaman görnüşleri ýadda saklanmaly — olara -ed goşulmaýar. Mysal: go → went, see → saw, buy → bought. Inkär we sorag üçin bolsa düzgünli işlikler ýaly did/didn't ulanylýar.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Iň möhüm düzgünsiz işlikler",
                explanationTk: "Aşakdaky işlikleriň geçen zaman görnüşleri ýadda saklamaly. Inkär we soragyda işligiň sada görnüşi ulanylýar: didn't go (went däl), did you see (saw däl).",
                pattern: "go → went / see → saw / buy → bought / take → took / eat → ate",
                examples: [
                  { en: "We went to the beach every morning.", tk: "Biz her irden kenara gitdik." },
                  { en: "I saw a beautiful mosque in the old city.", tk: "Men köne şäherde owadan metjit gördüm." },
                  { en: "She bought lots of souvenirs for her family.", tk: "Ol maşgalasy üçin köp ýadygärlik satyn aldy." },
                ],
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "Düzgünsiz işlikler — Syýahat",
                words: [
                  { en: "go → went", tk: "gitmek → gitdi", partOfSpeech: "verb", exampleEn: "We went to Georgia by plane.", exampleTk: "Biz Gürzüstana uçar bilen gitdik." },
                  { en: "see → saw", tk: "görmek → gördi", partOfSpeech: "verb", exampleEn: "I saw the Black Sea for the first time.", exampleTk: "Men Gara deňizi ilkinji gezek gördüm." },
                  { en: "eat → ate", tk: "iýmek → iýdi", partOfSpeech: "verb", exampleEn: "We ate amazing seafood every night.", exampleTk: "Biz her agşam haýranlyk galdyryjy deňiz önümlerini iýdik." },
                  { en: "take → took", tk: "almak / gitdirmek → aldy", partOfSpeech: "verb", exampleEn: "She took hundreds of photos.", exampleTk: "Ol ýüzlerçe surat aldy." },
                  { en: "meet → met", tk: "duşmak → duşdy", partOfSpeech: "verb", exampleEn: "I met some interesting people on the trip.", exampleTk: "Men syýahatda birnäçe gyzykly adam bilen duşdum." },
                  { en: "spend → spent", tk: "sarp etmek → sarp etdi", partOfSpeech: "verb", exampleEn: "We spent a week in Cappadocia.", exampleTk: "Biz Kapadokiýada bir hepde geçirdik." },
                ],
              },
            },
            {
              type: "dialogue",
              data: {
                titleTk: "Söhbetdeşlik: Geçen dynç alşy barada",
                exchanges: [
                  { speakerEn: "Azat", lineEn: "Where did you go for the holiday?", lineTk: "Dynç alşa nirelere gitdiňiz?" },
                  { speakerEn: "Gülälek", lineEn: "We went to Antalya. It was amazing!", lineTk: "Biz Antalýa gitdik. Ajaýypdy!" },
                  { speakerEn: "Azat", lineEn: "How long did you stay there?", lineTk: "Näçe wagt galdyňyz?" },
                  { speakerEn: "Gülälek", lineEn: "We stayed for eight days. We saw ancient ruins and swam in the sea every day.", lineTk: "Sekiz gün galdyk. Gadymy harabalary gördük we her gün deňizde ýüzdük." },
                  { speakerEn: "Azat", lineEn: "Did you eat good food there?", lineTk: "Ol ýerde gowy nahar iýdiňizmi?" },
                  { speakerEn: "Gülälek", lineEn: "The food was incredible. I ate grilled fish every single day!", lineTk: "Nahar ajaýypdy. Men her gün grill balyk iýdim!" },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "pre-int-u02-l03-holiday-story",
        titleEn: "Telling a Holiday Story",
        titleTk: "Dynç Alyş Gürrüňini Bermek",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Geçmiş wakalary gürrüň bereniňde wagtlaryňyzy biri-biri bilen baglanyşdyrmak möhümdir. 'First... then... after that... finally...' ýaly sözleri ulanyň. Bu sapagy tamamlansoň siz geçen dynç alyşyňyz barada doly gürrüň berip bilersiňiz.",
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "Wagt baglanyşdyryjy sözler",
                words: [
                  { en: "first", tk: "ilki / birinjiden", partOfSpeech: "adverb", exampleEn: "First, we checked into the hotel.", exampleTk: "Ilki myhmanhanada ýerleşdik." },
                  { en: "then", tk: "soňra / onsoň", partOfSpeech: "adverb", exampleEn: "Then we went to the city centre.", exampleTk: "Soňra şäher merkezine gitdik." },
                  { en: "after that", tk: "ondan soň", partOfSpeech: "adverb", exampleEn: "After that, we had dinner at a rooftop restaurant.", exampleTk: "Ondan soň üçek restoranynda agşamlyk iýdik." },
                  { en: "finally", tk: "ahyrynda / iň soňunda", partOfSpeech: "adverb", exampleEn: "Finally, we watched the sunset from the beach.", exampleTk: "Ahyrynda kenarda günbataryny synladyk." },
                  { en: "unfortunately", tk: "gynansak-da / gynançly", partOfSpeech: "adverb", exampleEn: "Unfortunately, it rained on the last day.", exampleTk: "Gynansak-da, soňky gün ýagyş ýagdy." },
                ],
              },
            },
            {
              type: "example_set",
              data: {
                titleTk: "Doly dynç alyş gürrüňi",
                examples: [
                  { en: "Last summer, my family and I travelled to Turkey.", tk: "Geçen tomus maşgalam we men Türkiýä syýahat etdik." },
                  { en: "First, we flew to Istanbul and spent two days there.", tk: "Ilki Stambula uçduk we iki gün geçirdik." },
                  { en: "Then we took a bus to Cappadocia and saw the famous hot air balloons.", tk: "Soňra Kapadokiýa awtobus bilen gitdik we meşhur howa balonlaryny gördük." },
                  { en: "Finally, we drove to the coast and swam in the Mediterranean Sea.", tk: "Ahyrynda kenara gitdik we Ortaýer deňizinde ýüzdük." },
                  { en: "Unfortunately, I lost my camera on the last day!", tk: "Gynansak-da, men soňky gün kameramy ýitirdim!" },
                ],
              },
            },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "2-nji Bölüm Synagy: Syýahat we Dynç Alyş",
      questions: [
        { order: 1, questionText: "'Visit' işliginiň geçen zamany?", questionType: "multiple_choice_grammar", options: ["visitd", "visited", "visitied", "visiting"], correctIndex: 1 },
        { order: 2, questionText: "'Go' işliginiň geçen zamany?", questionType: "multiple_choice_grammar", options: ["goed", "goned", "went", "goes"], correctIndex: 2 },
        { order: 3, questionText: "She _____ to Paris last year. (go)", questionType: "multiple_choice_grammar", options: ["go", "goes", "going", "went"], correctIndex: 3 },
        { order: 4, questionText: "'Bronlamak' iňlisçe näme?", questionType: "translate_tk_en", options: ["travel", "arrive", "book", "pack"], correctIndex: 2 },
        { order: 5, questionText: "Did you _____ the food? (enjoy)", questionType: "multiple_choice_grammar", options: ["enjoyed", "enjoys", "enjoy", "enjoying"], correctIndex: 2 },
        { order: 6, questionText: "We _____ at the hotel at midnight. (arrive)", questionType: "multiple_choice_grammar", options: ["arrive", "arrives", "arrived", "arriving"], correctIndex: 2 },
        { order: 7, questionText: "'Ondan soň' iňlisçe näme?", questionType: "translate_tk_en", options: ["finally", "first", "after that", "unfortunately"], correctIndex: 2 },
        { order: 8, questionText: "They _____ stay in a hotel — they camped.", questionType: "multiple_choice_grammar", options: ["didn't", "don't", "wasn't", "weren't"], correctIndex: 0 },
        { order: 9, questionText: "'See' işliginiň geçen zamany?", questionType: "multiple_choice_grammar", options: ["seed", "sawed", "seen", "saw"], correctIndex: 3 },
        { order: 10, questionText: "'Ýadygärlik' iňlisçe näme?", questionType: "translate_tk_en", options: ["luggage", "souvenir", "passport", "ticket"], correctIndex: 1 },
      ],
    },
  },

  // ─── UNIT 3: HAVE YOU EVER...? ──────────────────────────────────────────
  {
    unitNumber: 3,
    slug: "pre-int-unit-03-present-perfect",
    titleEn: "Have You Ever...?",
    titleTk: "Hiç Wagt... etdiňizmi?",
    description: "Bu bölümde Present Perfect (Şu wagta çenli bolan tejribeler) öwrenilýär. 'Ever', 'never', 'just', 'already', 'yet' ýaly sözleriň ulanylyşy öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "pre-int-u03-l01-present-perfect-form",
        titleEn: "Present Perfect — Form & Meaning",
        titleTk: "Present Perfect — Düzümi we Manysy",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Present Perfect (have/has + Past Participle) üç esasy manyda ulanylýar: 1) Durmuşda bolan tejribeleri aýtmak üçin ('Men Türkiýede boldum'); 2) Ýaňy bolan hereketler üçin ('Men ýaňy öýe geldim'); 3) Geçmişde başlanyp häzire çenli dowam edýän hereketler üçin. Wagt görkezilende (yesterday, last year...) Past Simple ulanylýar.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: Present Perfect düzümi",
                explanationTk: "have/has + işligiň 3-nji görnüşi (Past Participle). Düzgünli işliklerde PP = -ed görnüşi. Düzgünsiz işliklerde PP üçünji sütünden öwrenilmeli: go → gone, see → seen, eat → eaten, write → written.",
                pattern: "I/You/We/They + have + PP. He/She/It + has + PP.",
                examples: [
                  { en: "I have visited ten countries.", tk: "Men on ýurda baryp gördüm." },
                  { en: "She has never eaten sushi.", tk: "Ol hiç wagt suşi iýmedi." },
                  { en: "Have you ever been to London?", tk: "Siz hiç Londonda bolduňyzmy?" },
                ],
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "Past Participle sözlügi (düzgünsiz)",
                words: [
                  { en: "go → gone / been", tk: "gitmek → giden", partOfSpeech: "verb", exampleEn: "She has gone to Ashgabat. / Have you been there?", exampleTk: "Ol Aşgabada gitdi. / Siz ol ýerde bolduňyzmy?" },
                  { en: "see → seen", tk: "görmek → görlen", partOfSpeech: "verb", exampleEn: "I have seen that film three times.", exampleTk: "Men ol filmi üç gezek gördüm." },
                  { en: "eat → eaten", tk: "iýmek → iýilen", partOfSpeech: "verb", exampleEn: "Have you eaten yet?", exampleTk: "Siz eýýäm iýdiňizmi?" },
                  { en: "write → written", tk: "ýazmak → ýazylan", partOfSpeech: "verb", exampleEn: "She has written two novels.", exampleTk: "Ol iki roman ýazdy." },
                  { en: "meet → met", tk: "duşmak → duşulan", partOfSpeech: "verb", exampleEn: "Have you ever met a famous person?", exampleTk: "Siz hiç meşhur adam bilen duşduňyzmy?" },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "pre-int-u03-l02-ever-never-just-already",
        titleEn: "Ever, Never, Just, Already",
        titleTk: "Ever, Never, Just, Already",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "'Ever' — hiç wagt? (soragyda ulanylýar). 'Never' — hiç wagt (inkär manysy berýär, have/has bilen ulanylýar). 'Just' — ýaňy, şu wagt (häzir bolan hereket). 'Already' — eýýäm (garaşylandan ir bolan hereket). Bu sözleri dogry ýerde ulanmagy öwrenmek gaty möhüm.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: Ever, Never, Just, Already",
                explanationTk: "'Ever' we 'never' — have/has bilen PP arasynda ýerleşýär. 'Just' — have/has bilen PP arasynda. 'Already' — have/has bilen PP arasynda (tassyklamada) ýa-da sözüň ahyrynda.",
                pattern: "Have you ever + PP? / I have never + PP. / I have just + PP. / I have already + PP.",
                examples: [
                  { en: "Have you ever tried horse riding?", tk: "Siz hiç wagt at münüp gördüňizmi?" },
                  { en: "I have never been to the USA.", tk: "Men hiç ABŞ-da bolmadym." },
                  { en: "She has just finished her homework.", tk: "Ol öý işini ýaňy tamamlady." },
                  { en: "I have already eaten — I'm not hungry.", tk: "Men eýýäm iýdim — doýdum." },
                ],
              },
            },
            {
              type: "dialogue",
              data: {
                titleTk: "Söhbetdeşlik: Tejribeler barada",
                exchanges: [
                  { speakerEn: "Aman", lineEn: "Have you ever travelled alone?", lineTk: "Siz hiç wagt ýeke syýahat etdiňizmi?" },
                  { speakerEn: "Nurgül", lineEn: "Yes! I have just returned from a solo trip to Georgia.", lineTk: "Hawa! Men Gürzüstana ýeke syýahatdan ýaňy gaýtdym." },
                  { speakerEn: "Aman", lineEn: "Wow! Have you ever been there before?", lineTk: "Waý! Siz ol ýerde öň bolduňyzmy?" },
                  { speakerEn: "Nurgül", lineEn: "Never! It was my first time. The food was amazing.", lineTk: "Hiç wagt! Birinji gezekdi. Nahar ajaýypdy." },
                  { speakerEn: "Aman", lineEn: "I have already booked a trip to Georgia for next month!", lineTk: "Men Gürzüstana geljek aý syýahaty eýýäm bronladym!" },
                ],
              },
            },
            {
              type: "example_set",
              data: {
                titleTk: "Ever / Never / Just / Already — goşmaça mysallar",
                examples: [
                  { en: "Have you ever cooked for more than 20 people?", tk: "Siz hiç 20-den köp adam üçin nahar bişirdiňizmi?" },
                  { en: "He has never failed an exam in his life.", tk: "Ol ömründe hiç wagt synagda şowsuz bolmady." },
                  { en: "Don't call her now — she has just gone to sleep.", tk: "Oňa indi jaň etme — ol ýaňy ýatdy." },
                  { en: "I have already seen this movie, let's watch something else.", tk: "Men bu filmi eýýäm gördüm, başga bir zat göreliň." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "pre-int-u03-l03-yet-questions",
        titleEn: "Yet & Present Perfect Questions",
        titleTk: "Yet we Present Perfect Soraglary",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "'Yet' — 'heniz' manysyny berýär. Inkärde we soragyda ulanylýar, köplenç sözüň ahyrynda. 'Have you finished yet?' — Siz heniz tamamladyňyzmy? 'I haven't finished yet' — Men heniz tamamlamadym. 'Yet' bilen Present Perfect soraglary gündelik durmuşda gaty köp ulanylýar.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: Yet ulanylyşy",
                explanationTk: "'Yet' — inkär jümlelerde we soragyda, sözüň ahyrynda ýerleşýär. 'Already' bilen deňeşdirme: already = garaşylandan ir boldy; yet = heniz bolmady (inkär) ýa-da bolupmydybol? (sorag).",
                pattern: "Have you + PP + yet? / I haven't + PP + yet.",
                examples: [
                  { en: "Have you called your mother yet?", tk: "Ejeňize heniz jaň etdiňizmi?" },
                  { en: "I haven't bought the tickets yet.", tk: "Men petekleri heniz satyn almadym." },
                  { en: "She hasn't arrived yet — let's wait.", tk: "Ol heniz gelmedi — garaşalyň." },
                ],
              },
            },
            {
              type: "example_set",
              data: {
                titleTk: "Already vs Yet — deňeşdirme",
                examples: [
                  { en: "A: Have you packed yet? B: Yes, I have already packed!", tk: "A: Goşuňyzy ýygnadyňyzmy? B: Hawa, men eýýäm ýygnadym!" },
                  { en: "A: Have you booked the hotel yet? B: No, I haven't done it yet.", tk: "A: Myhmanhana bronladyňyzmy? B: Ýok, heniz etmedim." },
                  { en: "They have already left — you missed them.", tk: "Olar eýýäm gitdi — siz olary geçiriňiz." },
                  { en: "Haven't you eaten yet? You must be hungry!", tk: "Siz heniz iýmediňizmi? Aç bolsaňyz gerek!" },
                ],
              },
            },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "3-nji Bölüm Synagy: Present Perfect",
      questions: [
        { order: 1, questionText: "Have you ever _____ to Japan? (be)", questionType: "multiple_choice_grammar", options: ["go", "gone", "been", "went"], correctIndex: 2 },
        { order: 2, questionText: "She has _____ finished the report. (ýaňy)", questionType: "multiple_choice_grammar", options: ["yet", "ever", "just", "never"], correctIndex: 2 },
        { order: 3, questionText: "I have _____ eaten sushi — I don't like it.", questionType: "multiple_choice_grammar", options: ["ever", "already", "just", "never"], correctIndex: 3 },
        { order: 4, questionText: "'Heniz' iňlisçe näme? (inkärde we soragyda)", questionType: "translate_tk_en", options: ["already", "just", "yet", "never"], correctIndex: 2 },
        { order: 5, questionText: "Have you called her _____?", questionType: "multiple_choice_grammar", options: ["already", "just", "yet", "never"], correctIndex: 2 },
        { order: 6, questionText: "He _____ never been to Europe.", questionType: "multiple_choice_grammar", options: ["have", "has", "had", "is"], correctIndex: 1 },
        { order: 7, questionText: "'See' işliginiň Past Participle görnüşi?", questionType: "multiple_choice_grammar", options: ["saw", "seed", "seen", "seing"], correctIndex: 2 },
        { order: 8, questionText: "I have _____ booked the tickets — don't worry.", questionType: "multiple_choice_grammar", options: ["yet", "never", "already", "ever"], correctIndex: 2 },
        { order: 9, questionText: "Have they arrived _____?", questionType: "multiple_choice_grammar", options: ["already", "just", "yet", "never"], correctIndex: 2 },
        { order: 10, questionText: "'Eat' işliginiň Past Participle görnüşi?", questionType: "multiple_choice_grammar", options: ["eated", "ate", "eating", "eaten"], correctIndex: 3 },
      ],
    },
  },

  // ─── UNIT 4: FOR HOW LONG? ───────────────────────────────────────────────
  {
    unitNumber: 4,
    slug: "pre-int-unit-04-for-since-pp-vs-ps",
    titleEn: "For How Long? — For, Since & Perfect vs Past",
    titleTk: "Näçe Wagtdan Bäri? — For, Since we Zaman Tapawudy",
    description: "Bu bölümde 'for' we 'since' bilen Present Perfect-i öwrenersiňiz. Şeýle hem Present Perfect bilen Past Simple-iň tapawutlaryny öwrenersiňiz.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "pre-int-u04-l01-for-since",
        titleEn: "For and Since",
        titleTk: "For we Since",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Present Perfect bilen wagt görkezeniňde 'for' ýa-da 'since' ulanylýar. 'For' — wagtyň uzynlygyny görkezýär (for three years, for a week). 'Since' — başlanan wagty görkezýär (since 2020, since Monday). Sorag: 'How long have you...?'",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: For we Since",
                explanationTk: "'For' + wagt uzynlygy: for two hours, for a long time, for six months. 'Since' + başlanan wagt: since yesterday, since 2019, since I was a child. How long? soragyna 'for' ýa-da 'since' bilen jogap berilýär.",
                pattern: "I have lived here for [wagt]. / I have lived here since [başlan wagt].",
                examples: [
                  { en: "I have worked here for five years.", tk: "Men bu ýerde bäş ýyldan bäri işleýärin." },
                  { en: "She has known him since university.", tk: "Ol ony uniwersitetden bäri tanaýar." },
                  { en: "How long have you been married?", tk: "Siz näçe ýyldan bäri öýleniňiz?" },
                ],
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "For we Since bilen ulanylýan wagt sözleri",
                words: [
                  { en: "for ages", tk: "gaty uzak wagtdan bäri", partOfSpeech: "adverb", exampleEn: "I haven't seen him for ages!", exampleTk: "Men ony gaty uzak wagtdan bäri görmedim!" },
                  { en: "since childhood", tk: "çagalykdan bäri", partOfSpeech: "adverb", exampleEn: "She has played the piano since childhood.", exampleTk: "Ol çagalykdan bäri pianino çalýar." },
                  { en: "for a while", tk: "biraz wagt", partOfSpeech: "adverb", exampleEn: "We have been waiting here for a while.", exampleTk: "Biz bu ýerde biraz wagtdan bäri garaşýarys." },
                  { en: "recently", tk: "ýakynda / soňky wagtda", partOfSpeech: "adverb", exampleEn: "Have you seen her recently?", exampleTk: "Siz ony ýakynda gördüňizmi?" },
                ],
              },
            },
            {
              type: "dialogue",
              data: {
                titleTk: "Söhbetdeşlik: Näçe wagtdan bäri?",
                exchanges: [
                  { speakerEn: "Ogulnur", lineEn: "How long have you lived in this city?", lineTk: "Siz bu şäherde näçe ýyldan bäri ýaşaýarsyňyz?" },
                  { speakerEn: "Döwran", lineEn: "I have lived here since 2018. What about you?", lineTk: "Men bu ýerde 2018-den bäri ýaşaýaryn. Siz nähili?" },
                  { speakerEn: "Ogulnur", lineEn: "Only for two years. I moved here for work.", lineTk: "Diňe iki ýyldan bäri. Men iş üçin göçüp geldim." },
                  { speakerEn: "Döwran", lineEn: "Do you like it here?", lineTk: "Bu ýeri halaýarsyňyzmy?" },
                  { speakerEn: "Ogulnur", lineEn: "Yes, very much. I have made many friends since I arrived.", lineTk: "Hawa, gaty. Men gelenim bäri köp dost gazandym." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "pre-int-u04-l02-pp-vs-past-simple",
        titleEn: "Present Perfect vs Past Simple",
        titleTk: "Present Perfect we Past Simple Tapawudy",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Bu Iňlis dilinde iň kyn mowzuklarynyň biri. Esasy düzgün şudur: Past Simple — hususy wagt bilen bolan geçmiş waka (yesterday, last year, in 2010). Present Perfect — anyk wagt görkezilmeýän, häzirki wagta baglanyşy bolan geçmiş waka. 'When' soragy bolsa Past Simple ulanylýar.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "PP vs PS: Tapawudy nähili bilmeli?",
                explanationTk: "Past Simple bilen ulanylýan wagt sözleri: yesterday, last week, in 2015, ago, when I was young. Present Perfect bilen ulanylýan: today, this week, since, for, ever, never, just, already, yet, recently.",
                pattern: "PP: I have seen it. (Haçan görenim belli däl) / PS: I saw it yesterday. (Haçan görenim belli)",
                examples: [
                  { en: "I have been to London. (I don't say when.)", tk: "Men Londonda boldum. (Haçan bolanymy aýtmaýaryn.)" },
                  { en: "I went to London in 2022. (Specific time given.)", tk: "Men 2022-nji ýylda Londona gitdim. (Anyk wagt bar.)" },
                  { en: "Have you had lunch? / Yes, I had lunch an hour ago.", tk: "Günortanlyk iýdiňizmi? / Hawa, bir sagat öň iýdim." },
                ],
              },
            },
            {
              type: "example_set",
              data: {
                titleTk: "PP we PS deňeşdirme mysallary",
                examples: [
                  { en: "I have lost my keys! (= I can't find them now)", tk: "Men açarymy ýitirdim! (= häzir tapyp bilemok)" },
                  { en: "I lost my keys last Monday. (= specific past time)", tk: "Men açarymy geçen duşenbe ýitirdim. (= anyk wagt)" },
                  { en: "She has written three books.", tk: "Ol üç kitap ýazdy." },
                  { en: "She wrote her first book in 2019.", tk: "Ol ilkinji kitabyny 2019-njy ýylda ýazdy." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "pre-int-u04-l03-life-changes",
        titleEn: "Life Changes & Achievements",
        titleTk: "Durmuş Üýtgeşmeleri we Üstünlikler",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Present Perfect durmuşdaky üstünlikleri, üýtgeşmeleri we möhüm wakalary aňlatmak üçin köp ulanylýar. 'My life has changed a lot', 'I have learned so much', 'She has achieved great things' ýaly jümleler gürrüňdeşlikde we iş beýannamasynda ulanylýar.",
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "Üstünlik we üýtgeşme sözleri",
                words: [
                  { en: "achieve", tk: "gazanmak / ýetişmek", partOfSpeech: "verb", exampleEn: "She has achieved all her goals.", exampleTk: "Ol ähli maksatlaryna ýetdi." },
                  { en: "improve", tk: "gowulandyrmak / ösmek", partOfSpeech: "verb", exampleEn: "My English has improved a lot this year.", exampleTk: "Meniň Iňlisçäm bu ýyl gaty gowulandy." },
                  { en: "graduate", tk: "okuwy tamamlamak", partOfSpeech: "verb", exampleEn: "He has just graduated from university.", exampleTk: "Ol ýaňy uniwersiteti tamamlady." },
                  { en: "promotion", tk: "wezipe ýokarlanmasy", partOfSpeech: "noun", exampleEn: "She has just received a promotion.", exampleTk: "Ol ýaňy wezipe ýokarlanmasyny aldy." },
                  { en: "move", tk: "göçmek", partOfSpeech: "verb", exampleEn: "They have moved to a new city.", exampleTk: "Olar täze şähere göçdi." },
                ],
              },
            },
            {
              type: "example_set",
              data: {
                titleTk: "Durmuş üstünlikleri — mysallar",
                examples: [
                  { en: "I have learned to drive since last year.", tk: "Men geçen ýyldan bäri awtomobil sürmeği öwrendim." },
                  { en: "She has started her own business.", tk: "Ol öz işini açdy." },
                  { en: "We have bought our first house.", tk: "Biz ilkinji öýümizi satyn aldyk." },
                  { en: "He has been promoted three times in five years.", tk: "Ol bäş ýylyň içinde üç gezek wezipesini ýokarlandyrdy." },
                ],
              },
            },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "4-nji Bölüm Synagy: For, Since we Zaman Tapawudy",
      questions: [
        { order: 1, questionText: "I have lived here _____ 2019.", questionType: "multiple_choice_grammar", options: ["for", "since", "ago", "during"], correctIndex: 1 },
        { order: 2, questionText: "She has worked there _____ three years.", questionType: "multiple_choice_grammar", options: ["since", "ago", "for", "from"], correctIndex: 2 },
        { order: 3, questionText: "I _____ London in 2021. (go)", questionType: "multiple_choice_grammar", options: ["have gone", "has gone", "went", "go"], correctIndex: 2 },
        { order: 4, questionText: "'Wezipe ýokarlanmasy' iňlisçe näme?", questionType: "translate_tk_en", options: ["salary", "graduation", "promotion", "achievement"], correctIndex: 2 },
        { order: 5, questionText: "How long _____ you known her?", questionType: "multiple_choice_grammar", options: ["do", "did", "have", "are"], correctIndex: 2 },
        { order: 6, questionText: "She _____ her homework yet. (finish — inkär)", questionType: "multiple_choice_grammar", options: ["has finished", "didn't finish", "hasn't finished", "don't finish"], correctIndex: 2 },
        { order: 7, questionText: "'For ages' Türkmençede näme?", questionType: "translate_en_tk", options: ["Bir sagat", "Gaty uzak wagtdan bäri", "Ýaňy", "Soňky günlerde"], correctIndex: 1 },
        { order: 8, questionText: "When did you _____ school? (finish)", questionType: "multiple_choice_grammar", options: ["finished", "have finished", "finish", "finishing"], correctIndex: 2 },
        { order: 9, questionText: "I _____ her since we were children.", questionType: "multiple_choice_grammar", options: ["knew", "know", "have known", "am knowing"], correctIndex: 2 },
        { order: 10, questionText: "'Gowulandyrmak' iňlisçe näme?", questionType: "translate_tk_en", options: ["achieve", "improve", "graduate", "resign"], correctIndex: 1 },
      ],
    },
  },

  // ─── UNIT 5: FUTURE PLANS & PREDICTIONS ─────────────────────────────────
  {
    unitNumber: 5,
    slug: "pre-int-unit-05-future",
    titleEn: "Future Plans & Predictions",
    titleTk: "Geljek Planlar we Çaklamalar",
    description: "Bu bölümde geljek hakda gürrüň etmek üçin üç esasy usul öwrenilýär: will (çaklama we özbaşdak karar), going to (öňünden meýilleşdirilen plan) we present continuous (anyk wagt bellenen plan).",
    lessons: [
      {
        lessonNumber: 1,
        slug: "pre-int-u05-l01-will-predictions",
        titleEn: "Will — Predictions & Decisions",
        titleTk: "Will — Çaklamalar we Karar bermek",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "'Will' geljek zaman üçin iki esasy ýagdaýda ulanylýar: 1) Çaklamalar — biziň şu wagtky pikirlerimize esaslanyp aýdýan pikirimiz ('I think it will rain tomorrow'). 2) Spontan karar — häzir sözleşýän wagtyňda berlen karar ('I'll help you with that!'). 'Will not' gysgaltmasy 'won't' bolýar.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: Will düzümi",
                explanationTk: "Will ähli şahs üçin birmeňzeş: I/you/he/she/we/they will + işlik. Sorag: Will + şahs + işlik? Inkär: won't (will not) + işlik. 'I think', 'I believe', 'probably', 'maybe' bilen köp ulanylýar.",
                pattern: "I will (I'll) + işlik. Will you + işlik? I won't + işlik.",
                examples: [
                  { en: "I think it will be cold tomorrow.", tk: "Meniň pikirimçe ertir sowuk bolar." },
                  { en: "Don't worry, I'll help you!", tk: "Alada etme, men saňa kömek ederin!" },
                  { en: "She probably won't come to the party.", tk: "Ol ähtimal partiýa gelmez." },
                ],
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "Çaklama sözi",
                words: [
                  { en: "probably", tk: "ähtimal / galyberse-de", partOfSpeech: "adverb", exampleEn: "He will probably be late again.", exampleTk: "Ol ähtimal ýene giç geler." },
                  { en: "definitely", tk: "hökman / şübhesiz", partOfSpeech: "adverb", exampleEn: "She will definitely pass the exam.", exampleTk: "Ol şübhesiz synagdan geçer." },
                  { en: "perhaps", tk: "belki / ähtimal", partOfSpeech: "adverb", exampleEn: "Perhaps we'll find a solution.", exampleTk: "Belki çözgüt taparys." },
                  { en: "predict", tk: "çaklamak / öňünden aýtmak", partOfSpeech: "verb", exampleEn: "It is hard to predict the future.", exampleTk: "Geljegi çaklamak kyn." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "pre-int-u05-l02-going-to",
        titleEn: "Going To — Plans & Intentions",
        titleTk: "Going To — Meýilnamalar we Niýetler",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "'Going to' — eýýäm meýilleşdirilen planlary we niýetleri aňlatmak üçin ulanylýar. Şeýle hem häzirki wagtda görünýän delile esaslanýan çaklamalar üçin ulanylýar ('Look at those clouds — it's going to rain!'). Will bilen tapawudy: going to — karar öň berlipdi; will — häzir berlip barýar.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: Going to düzümi",
                explanationTk: "am/is/are + going to + işlik. Sorag: Am/Is/Are + şahs + going to + işlik? Inkär: am/is/are + not + going to + işlik.",
                pattern: "I am going to + işlik. She is going to + işlik. Are you going to + işlik?",
                examples: [
                  { en: "I'm going to study medicine at university.", tk: "Men uniwersitetde lukmançylyk okamaga gidýärin." },
                  { en: "Look at that car — it's going to crash!", tk: "Şol maşyna seret — ol çaknyşar!" },
                  { en: "Are you going to apply for that job?", tk: "Siz şol işe ýüz tutmakçymysyňyz?" },
                ],
              },
            },
            {
              type: "dialogue",
              data: {
                titleTk: "Söhbetdeşlik: Ýaz planlar",
                exchanges: [
                  { speakerEn: "Maksat", lineEn: "What are you going to do this summer?", lineTk: "Bu tomus näme etmekçi?" },
                  { speakerEn: "Leýla", lineEn: "I'm going to travel to Europe with my friend.", lineTk: "Men dostumy bilen Ýewropa syýahat etmekçi." },
                  { speakerEn: "Maksat", lineEn: "Wow! Which countries are you going to visit?", lineTk: "Waý! Haýsy ýurtlara barmakçysyňyz?" },
                  { speakerEn: "Leýla", lineEn: "We're going to visit Italy, France and Spain.", lineTk: "Biz Italiýa, Fransiýa we Ispaniýa barmakçy." },
                  { speakerEn: "Maksat", lineEn: "That sounds amazing. I think I'll visit my family.", lineTk: "Ajaýyp bolsa gerek. Meniň pikirimçe maşgalamy görmäge barjak." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "pre-int-u05-l03-present-continuous-future",
        titleEn: "Present Continuous for Fixed Future Plans",
        titleTk: "Present Continuous bilen Berk Meýilnamalar",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Present Continuous — anyk wagt we ýer bellenen geljek planlar üçin ulanylýar. 'I'm meeting the doctor at 3pm tomorrow' — ertir sagat 3-de lukman bilen duşuşygymy bar (wagt bellenen). Bu görnüş going to bilen köplenç çalşyrylp ulanylýar, ýöne has berk meýilleşdirilen wakalarda ulanylýar.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Üç geljek zaman deňeşdirmesi",
                explanationTk: "Will: spontan karar ýa-da umuman çaklama. Going to: öňünden meýilleşdirilen niýet. Present Continuous: anyk wagt/ýer bellenen plan (köplenç bilet alnan, bron edilen).",
                pattern: "Will: 'I'll call you back.' / Going to: 'I'm going to learn Spanish.' / Pres.Cont.: 'I'm flying to Dubai on Friday.'",
                examples: [
                  { en: "I'm having lunch with a client tomorrow at noon.", tk: "Men ertir günortanlyk müşderi bilen iýjek — sagat 12-de." },
                  { en: "They're getting married in June.", tk: "Olar iýunda toý edýär." },
                  { en: "Are you doing anything this weekend?", tk: "Bu hepde ahyrynda bir işiňiz barmy?" },
                ],
              },
            },
            {
              type: "example_set",
              data: {
                titleTk: "Üç geljek zaman — kybaplaşdyrma",
                examples: [
                  { en: "A: The phone is ringing! B: I'll answer it.", tk: "A: Telefon jyrlaýar! B: Men jogap bereýin. (spontan)" },
                  { en: "I'm going to lose weight — I've joined a gym.", tk: "Men aryklamakçy — sport zalyna ýazyldym. (niýet)" },
                  { en: "I'm flying to London next Monday — I've booked my ticket.", tk: "Men indiki duşenbe Londona uçýaryn — petegi aldym. (berk plan)" },
                ],
              },
            },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "5-nji Bölüm Synagy: Geljek Zaman",
      questions: [
        { order: 1, questionText: "I think it _____ rain tomorrow.", questionType: "multiple_choice_grammar", options: ["going to", "is going to", "will", "would"], correctIndex: 2 },
        { order: 2, questionText: "She _____ study medicine — she has already applied.", questionType: "multiple_choice_grammar", options: ["will", "is going to", "would", "shall"], correctIndex: 1 },
        { order: 3, questionText: "'Ähtimal' iňlisçe näme?", questionType: "translate_tk_en", options: ["definitely", "perhaps", "probably", "already"], correctIndex: 2 },
        { order: 4, questionText: "Look at those clouds! It _____ snow.", questionType: "multiple_choice_grammar", options: ["will", "won't", "is going to", "shall"], correctIndex: 2 },
        { order: 5, questionText: "Are you _____ anything tonight?", questionType: "multiple_choice_grammar", options: ["do", "doing", "did", "done"], correctIndex: 1 },
        { order: 6, questionText: "Don't worry, I _____ help you.", questionType: "multiple_choice_grammar", options: ["am going", "going to", "'ll", "shall"], correctIndex: 2 },
        { order: 7, questionText: "'Hökman / Şübhesiz' iňlisçe näme?", questionType: "translate_tk_en", options: ["probably", "perhaps", "maybe", "definitely"], correctIndex: 3 },
        { order: 8, questionText: "I _____ meeting the client at 2pm tomorrow. (plan berk)", questionType: "multiple_choice_grammar", options: ["will", "am", "going to", "shall"], correctIndex: 1 },
        { order: 9, questionText: "She probably _____ come — she is busy.", questionType: "multiple_choice_grammar", options: ["will", "won't", "isn't", "doesn't"], correctIndex: 1 },
        { order: 10, questionText: "'Çaklamak' iňlisçe näme?", questionType: "translate_tk_en", options: ["achieve", "improve", "predict", "decide"], correctIndex: 2 },
      ],
    },
  },

  // ─── UNIT 6: COMPARING THINGS ────────────────────────────────────────────
  {
    unitNumber: 6,
    slug: "pre-int-unit-06-comparatives-superlatives",
    titleEn: "Comparing Things",
    titleTk: "Deňeşdirmek",
    description: "Bu bölümde deňeşdirme (bigger than, more interesting than) we iň ýokary derejeli sypat düzümlerini (the biggest, the most interesting) öwrenersiňiz. Şeýle hem 'as...as' gurluşy öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "pre-int-u06-l01-comparatives",
        titleEn: "Comparatives",
        titleTk: "Deňeşdirme Sypatlar",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Iki zady deňeşdireniňde deňeşdirme sypat ulanylýar. Gysga sypatlara (bir ýa-da iki bogunda) -er goşulýar: tall → taller, big → bigger. Uzyn sypatlaryň (iki we köp bogunda) öňüne 'more' goýulýar: interesting → more interesting, expensive → more expensive.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: Deňeşdirme düzümi",
                explanationTk: "Gysga sypat + -er + than. More + uzyn sypat + than. Düzgünsiz görnüşler: good → better, bad → worse, far → farther/further, little → less.",
                pattern: "Shorter adjective + -er + than. More + longer adjective + than.",
                examples: [
                  { en: "Ashgabat is bigger than Mary.", tk: "Aşgabat Marydan ulydyr." },
                  { en: "This book is more interesting than that one.", tk: "Bu kitap ol kitapdan gyzyklyragydyr." },
                  { en: "The new phone is better than the old one.", tk: "Täze telefon köneden gowudyr." },
                ],
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "Deňeşdirmede ulanylýan sypatlar",
                words: [
                  { en: "expensive / cheap", tk: "gymmat / arzan", partOfSpeech: "adjective", exampleEn: "This restaurant is more expensive than the other one.", exampleTk: "Bu restoran beýlekiden gymmatrakdyr." },
                  { en: "crowded / quiet", tk: "adam köp / asuda", partOfSpeech: "adjective", exampleEn: "The city centre is more crowded than the suburbs.", exampleTk: "Şäher merkezi eteklerden has köp adamly." },
                  { en: "modern / traditional", tk: "häzirki zaman / däp-dessur", partOfSpeech: "adjective", exampleEn: "The new mall is more modern than the old market.", exampleTk: "Täze söwda merkezi köne bazardan häzirkizamanlydyr." },
                  { en: "convenient", tk: "amatly / oňaýly", partOfSpeech: "adjective", exampleEn: "Public transport is more convenient in big cities.", exampleTk: "Uly şäherlerde jemgyýetçilik ulagy has amatlydyr." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "pre-int-u06-l02-superlatives",
        titleEn: "Superlatives",
        titleTk: "Iň Ýokary Dereje",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Superlative (iň ýokary dereje) üç ýa-da has köp zat arasynda birini tapawutlandyranda ulanylýar. Gysga sypatlara 'the' + -est goşulýar: the tallest, the biggest. Uzyn sypatlaryň öňüne 'the most' goşulýar: the most expensive, the most beautiful.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: Superlative düzümi",
                explanationTk: "The + gysga sypat + -est. The most + uzyn sypat. Düzgünsiz: the best (good), the worst (bad), the furthest/farthest (far), the least (little).",
                pattern: "The + shorter adjective + -est. The most + longer adjective.",
                examples: [
                  { en: "The Caspian Sea is the largest lake in the world.", tk: "Hazar deňzi dünýädäki iň uly köldir." },
                  { en: "That was the most delicious meal I have ever eaten.", tk: "Bu meniň iýen iň tagamly naharymdy." },
                  { en: "Who is the best student in the class?", tk: "Synypda iň gowy okuwçy kim?" },
                ],
              },
            },
            {
              type: "dialogue",
              data: {
                titleTk: "Söhbetdeşlik: Şäherleri deňeşdirmek",
                exchanges: [
                  { speakerEn: "Aida", lineEn: "Which city do you prefer — Ashgabat or Turkmenabat?", lineTk: "Haýsy şäheri has gowy görýärsiňiz — Aşgabat ýa-da Türkmenabat?" },
                  { speakerEn: "Myrat", lineEn: "Ashgabat is bigger and more modern. But Turkmenabat is quieter and cheaper.", lineTk: "Aşgabat uly we häzirkizaman. Emma Türkmenabat asuda we arzan." },
                  { speakerEn: "Aida", lineEn: "Which city has the best restaurants in your opinion?", lineTk: "Siziň pikirimçe haýsy şäherde iň gowy restoranlar bar?" },
                  { speakerEn: "Myrat", lineEn: "Definitely Ashgabat. It has the widest choice of food.", lineTk: "Şübhesiz Aşgabat. Iň giň nahar saýlawy bar." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "pre-int-u06-l03-as-as-comparisons",
        titleEn: "As...as Comparisons",
        titleTk: "As...as bilen Deňeşdirme",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "'As...as' — iki zat biri-birine deň bolanda ulanylýar: 'She is as tall as her brother'. 'Not as...as' — biriniň beýlekiden az ýa-da gowşak bolandygyny görkezýär: 'This film is not as good as the book'. Bu gurluş deňeşdirmede gaty ýygy ulanylýar.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: As...as gurluşy",
                explanationTk: "as + sypat + as = deň. not as + sypat + as = az. Sorag: Is A as + sypat + as B?",
                pattern: "A is as [sypat] as B. / A is not as [sypat] as B.",
                examples: [
                  { en: "The new app is as easy to use as the old one.", tk: "Täze programma könesi ýaly ulanmasy aňsat." },
                  { en: "This hotel is not as expensive as I thought.", tk: "Bu myhmanhana meniň pikir edişimden gymmat däl." },
                  { en: "Is your city as big as Ashgabat?", tk: "Siziň şäheriňiz Aşgabat ýaly ulumydyr?" },
                ],
              },
            },
            {
              type: "example_set",
              data: {
                titleTk: "Deňeşdirme usullarynyň jemi",
                examples: [
                  { en: "Trains are faster than buses but not as fast as planes.", tk: "Otlylar awtobustan çalt, ýöne uçardan çalt däl." },
                  { en: "The north is colder than the south.", tk: "Demirgazyk günortadan has sowuk." },
                  { en: "This is the most difficult exam I have ever taken.", tk: "Bu meniň girişen iň kyn synagym." },
                  { en: "Learning Turkish is not as hard as learning Chinese.", tk: "Türk dilini öwrenmek Hytaý dilinden kyn däl." },
                ],
              },
            },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "6-njy Bölüm Synagy: Deňeşdirme",
      questions: [
        { order: 1, questionText: "Ashgabat is _____ than Mary. (big)", questionType: "multiple_choice_grammar", options: ["more big", "biggest", "bigger", "most big"], correctIndex: 2 },
        { order: 2, questionText: "This is _____ restaurant in the city. (expensive)", questionType: "multiple_choice_grammar", options: ["more expensive", "expensivest", "the most expensive", "the expensiver"], correctIndex: 2 },
        { order: 3, questionText: "'Good' işliginiň deňeşdirme görnüşi?", questionType: "multiple_choice_grammar", options: ["gooder", "more good", "best", "better"], correctIndex: 3 },
        { order: 4, questionText: "She is as _____ as her sister. (tall)", questionType: "multiple_choice_grammar", options: ["taller", "tallest", "tall", "more tall"], correctIndex: 2 },
        { order: 5, questionText: "'Amatly / Oňaýly' iňlisçe näme?", questionType: "translate_tk_en", options: ["crowded", "modern", "traditional", "convenient"], correctIndex: 3 },
        { order: 6, questionText: "This book is not as _____ as the film. (interesting)", questionType: "multiple_choice_grammar", options: ["more interesting", "interesting", "interestinger", "most interesting"], correctIndex: 1 },
        { order: 7, questionText: "'Bad' işliginiň iň ýokary derejesi?", questionType: "multiple_choice_grammar", options: ["baddest", "most bad", "the worst", "the badder"], correctIndex: 2 },
        { order: 8, questionText: "Public transport is _____ convenient in big cities.", questionType: "multiple_choice_grammar", options: ["more", "most", "as", "than"], correctIndex: 0 },
        { order: 9, questionText: "'Asuda' iňlisçe näme?", questionType: "translate_tk_en", options: ["crowded", "noisy", "modern", "quiet"], correctIndex: 3 },
        { order: 10, questionText: "The Amazon is the _____ river in the world. (long)", questionType: "multiple_choice_grammar", options: ["longer", "more long", "longest", "most long"], correctIndex: 2 },
      ],
    },
  },

  // ─── UNIT 7: RULES & ADVICE ──────────────────────────────────────────────
  {
    unitNumber: 7,
    slug: "pre-int-unit-07-modals",
    titleEn: "Rules, Obligation & Advice",
    titleTk: "Düzgünler, Borçlar we Maslahatlar",
    description: "Bu bölümde modal işlikler — must, have to, should, might we could — öwrenilýär. Borç, gadagan, maslahat we ähtimallygy aňlatmagyň usullary öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "pre-int-u07-l01-must-have-to",
        titleEn: "Must & Have To — Obligation",
        titleTk: "Must we Have To — Borç we Hökmanlyk",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "'Must' we 'have to' ikisi hem borçlulygy (bir zadyň edilmeginiň hökmanlydygyny) aňladýar, ýöne kiçi tapawut bar. 'Must' — gürrüňdeşiň öz içinden gelýän borç ('I must lose weight'). 'Have to' — daşardan gelýän borç, düzgün, kanun ('I have to wear a uniform at work'). 'Mustn't' — gadagan ('You mustn't smoke here'). 'Don't have to' — hökmany däl ('You don't have to come if you don't want to').",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: Must we Have to",
                explanationTk: "Must + işlik (sada görnüş). Have to: I/you/we/they have to + işlik. He/she/it has to + işlik. Inkär: mustn't (gadagan) we don't/doesn't have to (hökmany däl — tapawut!)",
                pattern: "I must + işlik. / I have to + işlik. / You mustn't + işlik. / You don't have to + işlik.",
                examples: [
                  { en: "You must show your passport at the border.", tk: "Serhetde pasportyňyzy görkezmelisiňiz." },
                  { en: "She has to finish the report by Friday.", tk: "Ol hasabaty anna gününe çenli tamamlamaly." },
                  { en: "You don't have to wear a tie — it's casual Friday.", tk: " Galstuk dakmaly däl — bu eşik erkin anna güni." },
                ],
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "Düzgün we borç sözi",
                words: [
                  { en: "regulation", tk: "düzgün / kanunamzak", partOfSpeech: "noun", exampleEn: "There are strict regulations about food safety.", exampleTk: "Azyk howpsuzlygy barada berk düzgünler bar." },
                  { en: "compulsory", tk: "hökmany / borçly", partOfSpeech: "adjective", exampleEn: "Wearing a seatbelt is compulsory.", exampleTk: "Howpsuzlyk guşagyny dakmak hökmany." },
                  { en: "prohibited", tk: "gadagan", partOfSpeech: "adjective", exampleEn: "Smoking is prohibited in public places.", exampleTk: "Köpçülik ýerlerinde temmäki çekmek gadagan." },
                  { en: "optional", tk: "islege bagly / hökmany däl", partOfSpeech: "adjective", exampleEn: "The extra class is optional.", exampleTk: "Goşmaça sapagy islege bagly." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "pre-int-u07-l02-should-advice",
        titleEn: "Should & Shouldn't — Giving Advice",
        titleTk: "Should we Shouldn't — Maslahat Bermek",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "'Should' — maslahat, teklip ýa-da görä, dogry diýilýän zady aýtmak üçin ulanylýar. Must/have to-dan has ýumşak. 'You should see a doctor' (maslahat) vs 'You must see a doctor' (hökmany). 'Shouldn't' — ýerine ýetirmeli däl diýilýän zat. 'I think you should...' ýaly başlangyç bilen maslahat bereniňde has medeniýetli bolýar.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: Should",
                explanationTk: "Should ähli şahs üçin birmeňzeş: I/you/he/she/we/they should + işlik. Inkär: shouldn't + işlik. Sorag: Should + şahs + işlik?",
                pattern: "You should + işlik. / You shouldn't + işlik. / Should I + işlik?",
                examples: [
                  { en: "You should drink more water — it's good for your health.", tk: "Has köp suw içmeli — saglyk üçin peýdaly." },
                  { en: "She shouldn't work so late every night.", tk: "Ol her gije bu gadar giç işlemeli däl." },
                  { en: "Should I call him or send an email?", tk: "Oňa jaň etmelimi ýa-da elektron hat ugratmalymi?" },
                ],
              },
            },
            {
              type: "dialogue",
              data: {
                titleTk: "Söhbetdeşlik: Maslahat soramak",
                exchanges: [
                  { speakerEn: "Ayna", lineEn: "I feel tired all the time. What should I do?", lineTk: "Men hemişe ýadaw duýýaryn. Näme etmeli?" },
                  { speakerEn: "Serdar", lineEn: "You should go to bed earlier. How many hours do you sleep?", lineTk: "Has ir ýatmaly. Näçe sagat ýatýarsyň?" },
                  { speakerEn: "Ayna", lineEn: "Only about five hours.", lineTk: "Bäş sagat töweregi." },
                  { speakerEn: "Serdar", lineEn: "That's not enough. You should sleep at least seven hours. And you shouldn't use your phone before bed.", lineTk: "Bu ýeterlik däl. Iň az ýedi sagat ýatmaly. Ýatmazdan öň telefon ulanmaly däl." },
                  { speakerEn: "Ayna", lineEn: "Maybe I should also exercise more?", lineTk: "Belki has köp maşk etmeli?" },
                  { speakerEn: "Serdar", lineEn: "Yes! Even a 30-minute walk every day helps a lot.", lineTk: "Hawa! Her gün 30 minutlyk ýöriş hem gaty kömek edýär." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "pre-int-u07-l03-might-could-possibility",
        titleEn: "Might, May & Could — Possibility",
        titleTk: "Might, May we Could — Ähtimallyk",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "'Might', 'may' we 'could' ähtimallygy (mümkinçiligi) aňlatmak üçin ulanylýar. 'Might' = 50%-den az ähtimal. 'May' = 50% töweregi ähtimal. 'Could' = mümkin. Bu üçüsi köplenç bir-biriniň ýerine ulanylýar, ýöne 'might' iň az ynamly, 'may' biraz has ynamly.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: Might / May / Could",
                explanationTk: "might/may/could + işlik (sada görnüş). Üçüsi hem ähli şahs üçin birmeňzeş. Inkär: might not, may not, couldn't. Soragyda might ýa-da could ulanylýar.",
                pattern: "I might + işlik. / She may + işlik. / He could + işlik.",
                examples: [
                  { en: "I might go to the gym tonight — I'm not sure yet.", tk: "Bu agşam sport zalyna gitjek bolsam gerek — heniz belli däl." },
                  { en: "She may be late — there is a lot of traffic.", tk: "Ol giç geljek bolsa gerek — ulag köp." },
                  { en: "Could you be right? I hadn't thought of that.", tk: "Siz dogry bolup bilersiňiz — muny pikir etmändim." },
                ],
              },
            },
            {
              type: "example_set",
              data: {
                titleTk: "Modal işlikleriň jemi",
                examples: [
                  { en: "You must wear a helmet on a motorbike. (Law — borç)", tk: "Motosiklde kaska dakmaly. (Kanun — borç)" },
                  { en: "You should eat less sugar. (Advice — maslahat)", tk: "Az şeker iýmeli. (Maslahat)" },
                  { en: "I might visit my grandparents this weekend. (Possibility — ähtimal)", tk: "Bu hepde ahyrynda ata-mamamy görüp gitsem gerek. (Ähtimal)" },
                  { en: "You don't have to come — it's optional. (Not necessary — hökmany däl)", tk: "Gelmeli däl — islege bagly. (Hökmany däl)" },
                ],
              },
            },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "7-nji Bölüm Synagy: Modal Işlikler",
      questions: [
        { order: 1, questionText: "You _____ show your passport at the border. (borç)", questionType: "multiple_choice_grammar", options: ["should", "might", "must", "could"], correctIndex: 2 },
        { order: 2, questionText: "You _____ come if you don't want to. (hökmany däl)", questionType: "multiple_choice_grammar", options: ["mustn't", "shouldn't", "don't have to", "might not"], correctIndex: 2 },
        { order: 3, questionText: "'Gadagan' iňlisçe näme?", questionType: "translate_tk_en", options: ["compulsory", "optional", "prohibited", "regulated"], correctIndex: 2 },
        { order: 4, questionText: "She _____ see a doctor — she looks very ill. (maslahat)", questionType: "multiple_choice_grammar", options: ["must", "should", "might", "could"], correctIndex: 1 },
        { order: 5, questionText: "I _____ go to the party tonight — I'm not sure. (ähtimal)", questionType: "multiple_choice_grammar", options: ["must", "should", "have to", "might"], correctIndex: 3 },
        { order: 6, questionText: "You _____ smoke in the hospital. (gadagan)", questionType: "multiple_choice_grammar", options: ["don't have to", "shouldn't", "mustn't", "might not"], correctIndex: 2 },
        { order: 7, questionText: "'Islege bagly' iňlisçe näme?", questionType: "translate_tk_en", options: ["compulsory", "optional", "prohibited", "essential"], correctIndex: 1 },
        { order: 8, questionText: "He has to + işlik — 'has to' nähili ulanylýar? (he/she/it üçin)", questionType: "multiple_choice_grammar", options: ["have to", "has to", "must to", "should to"], correctIndex: 1 },
        { order: 9, questionText: "Should I _____ him or email him?", questionType: "multiple_choice_grammar", options: ["calling", "to call", "call", "called"], correctIndex: 2 },
        { order: 10, questionText: "She _____ work so late every day — it's bad for her health.", questionType: "multiple_choice_grammar", options: ["mustn't", "shouldn't", "doesn't have to", "might not"], correctIndex: 1 },
      ],
    },
  },

  // ─── UNIT 8: RELATIVE CLAUSES ────────────────────────────────────────────
  {
    unitNumber: 8,
    slug: "pre-int-unit-08-relative-clauses",
    titleEn: "Relative Clauses",
    titleTk: "Anyklaýjy Sözlemler",
    description: "Bu bölümde who (adamlar üçin), which/that (zatlar üçin) we where (ýerler üçin) bilen anyklaýjy sözlemleri düzmegi öwrenersiňiz. Bu gurluş has çylşyrymly Iňlisçe üçin örän möhümdir.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "pre-int-u08-l01-who-which",
        titleEn: "Who & Which — People and Things",
        titleTk: "Who we Which — Adamlar we Zatlar",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Anyklaýjy sözlem — bir zady ýa-da adamy has düýpli düşündirmek üçin ulanylýar. 'Who' — adamlar we haýwanlar üçin; 'which' — zatlar we pikirler üçin; 'that' — ikisi üçin hem ulanylýar (gündelik gepleşikde). Bu sözlemler at sözüniň yzyna goşulýar we hasam köp maglumat berýär.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: Anyklaýjy sözlem düzümi",
                explanationTk: "[At sözi] + who/which/that + [sözlem]. 'Who' = adam/haýwan; 'which' = zat/pikir; 'that' = ikisi üçin hem. Sözlemde at sözüni who/which bilen çalşyrylýar.",
                pattern: "The man who lives next door is a doctor. / The book which/that I bought is great.",
                examples: [
                  { en: "The teacher who taught me English was very patient.", tk: "Maňa Iňlisçe öwreden mugallym gaty sabyrlydy." },
                  { en: "This is the film which won five awards.", tk: "Bu bäş baýrak alan film." },
                  { en: "The app that I use every day is very helpful.", tk: "Meniň her gün ulanýan programmam gaty peýdaly." },
                ],
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "Adamlary we zatlary düşündirýän sözler",
                words: [
                  { en: "innovative", tk: "täzeçillik / nowatorçylyk", partOfSpeech: "adjective", exampleEn: "She is a designer who creates innovative products.", exampleTk: "Ol täzeçil önümler döredýän dizaýner." },
                  { en: "reliable", tk: "ygtybarly / ynanyp boljak", partOfSpeech: "adjective", exampleEn: "I need a colleague who is reliable.", exampleTk: "Maňa ynanyp boljak kärdeş gerek." },
                  { en: "efficient", tk: "netijelilik bilen işleýän", partOfSpeech: "adjective", exampleEn: "We need a system which is more efficient.", exampleTk: "Has netijelilik bilen işleýän ulgam gerek." },
                ],
              },
            },
            {
              type: "example_set",
              data: {
                titleTk: "Who we Which — goşmaça mysallar",
                examples: [
                  { en: "I have a friend who speaks seven languages.", tk: "Meniň ýedi dil bilýän dosty bar." },
                  { en: "Can I borrow the pen which is on your desk?", tk: "Stoluňyzdaky galam alarynmy?" },
                  { en: "She works for a company that makes electric cars.", tk: "Ol elektrik awtomobil öndürýän kompaniýada işleýär." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "pre-int-u08-l02-where-whose",
        titleEn: "Where & Whose",
        titleTk: "Where we Whose — Ýerler we Eýeçilik",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "'Where' — bir ýer barada goşmaça maglumat bermek üçin ulanylýar: 'The city where I grew up is small'. 'Whose' — bir zat ýa-da adam kime degişlidigini görkezýär: 'The woman whose son is a doctor lives nearby'. Bu iki gurluş has ösen Iňlisçede köp ulanylýar.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: Where we Whose",
                explanationTk: "'Where' = ýerde/ýerde bolan. 'Whose' = kime degişli (eýeçilik). At sözi + where/whose + sözlem.",
                pattern: "The place where I study is quiet. / The student whose grades are best got a prize.",
                examples: [
                  { en: "That is the restaurant where we had our first date.", tk: "Ol biz birinji gezek nahar iýen restoran." },
                  { en: "She is the artist whose paintings are in the gallery.", tk: "Ol suretkär galereýada suratlary bar bolan ussatdyr." },
                  { en: "Do you remember the town where you were born?", tk: "Doglanyňyz şäheri ýadyňyzdamy?" },
                ],
              },
            },
            {
              type: "dialogue",
              data: {
                titleTk: "Söhbetdeşlik: Kim ol?",
                exchanges: [
                  { speakerEn: "Güler", lineEn: "Who is that man talking to the director?", lineTk: "Direktor bilen gürleşýän ol adam kim?" },
                  { speakerEn: "Berdi", lineEn: "That's the consultant whose company designed our website.", lineTk: "Ol biziň web sahypamyzy taslan kompaniýanyň maslahatçysy." },
                  { speakerEn: "Güler", lineEn: "Ah, I see. And who is the woman who is writing notes?", lineTk: "Düşündim. Bellik ýazýan zenan kim?" },
                  { speakerEn: "Berdi", lineEn: "She works in the department where they handle finance.", lineTk: "Ol maliýe bölüminde işleýär." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "pre-int-u08-l03-defining-clauses-practice",
        titleEn: "Relative Clauses in Use",
        titleTk: "Anyklaýjy Sözlemleri Ulanmak",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Anyklaýjy sözlemler bizi has takyk we gyzykly gürrüň bermäge mümkinçilik berýär. Iki sözlemi birleşdirip bir sözlem edip bilersiňiz: 'I know a man' + 'He speaks Japanese' = 'I know a man who speaks Japanese'. Bu sapagy gutarandan soň has çylşyrymly we professional Iňlisçe jümleler düzip bilersiňiz.",
              },
            },
            {
              type: "example_set",
              data: {
                titleTk: "Iki sözlemi birleşdirme",
                examples: [
                  { en: "That is the building. It was designed by a famous architect. → That is the building which was designed by a famous architect.", tk: "Ol meşhur arhitektor taslan bina." },
                  { en: "She is the teacher. Her classes are always interesting. → She is the teacher whose classes are always interesting.", tk: "Ol sapaklary hemişe gyzykly bolan mugallym." },
                  { en: "Paris is the city. I want to live there. → Paris is the city where I want to live.", tk: "Pariž ýaşamak isleýän şäherim." },
                  { en: "He is the person. He helped me most. → He is the person who helped me most.", tk: "Ol maňa iň köp kömek eden adam." },
                ],
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "Anyklaýjy sözlemlerde ulanylýan sözler",
                words: [
                  { en: "fluent", tk: "akgynly / erkin", partOfSpeech: "adjective", exampleEn: "I need a colleague who is fluent in English.", exampleTk: "Maňa Iňlisçeni erkin bilýän kärdeş gerek." },
                  { en: "inspire", tk: "ylham bermek / höweslendirmek", partOfSpeech: "verb", exampleEn: "She is a person who inspires everyone around her.", exampleTk: "Ol daşyndakylaryna ylham berýän adam." },
                  { en: "historic", tk: "taryhy / gadymy", partOfSpeech: "adjective", exampleEn: "Let's visit the street where the historic market used to be.", exampleTk: "Köne bazaryň bolan taryhy köçä bararlyň." },
                ],
              },
            },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "8-nji Bölüm Synagy: Anyklaýjy Sözlemler",
      questions: [
        { order: 1, questionText: "She is the woman _____ helped me yesterday.", questionType: "multiple_choice_grammar", options: ["which", "where", "who", "whose"], correctIndex: 2 },
        { order: 2, questionText: "That is the book _____ I told you about.", questionType: "multiple_choice_grammar", options: ["who", "whose", "where", "which"], correctIndex: 3 },
        { order: 3, questionText: "This is the town _____ I was born.", questionType: "multiple_choice_grammar", options: ["who", "which", "where", "whose"], correctIndex: 2 },
        { order: 4, questionText: "'Ygtybarly' iňlisçe näme?", questionType: "translate_tk_en", options: ["innovative", "efficient", "reliable", "fluent"], correctIndex: 2 },
        { order: 5, questionText: "He is the student _____ sister won the competition.", questionType: "multiple_choice_grammar", options: ["who", "which", "that", "whose"], correctIndex: 3 },
        { order: 6, questionText: "The company _____ makes the best phones is in South Korea.", questionType: "multiple_choice_grammar", options: ["who", "whose", "where", "which"], correctIndex: 3 },
        { order: 7, questionText: "'Akgynly / Erkin' iňlisçe näme?", questionType: "translate_tk_en", options: ["fluent", "reliable", "innovative", "efficient"], correctIndex: 0 },
        { order: 8, questionText: "The hotel _____ we stayed was very comfortable.", questionType: "multiple_choice_grammar", options: ["that", "who", "where", "which"], correctIndex: 2 },
        { order: 9, questionText: "Is this the pen _____ you borrowed from me?", questionType: "multiple_choice_grammar", options: ["who", "where", "whose", "that"], correctIndex: 3 },
        { order: 10, questionText: "I know a man _____ can fix your computer.", questionType: "multiple_choice_grammar", options: ["which", "where", "whose", "who"], correctIndex: 3 },
      ],
    },
  },

  // ─── UNIT 9: CONDITIONALS ───────────────────────────────────────────────
  {
    unitNumber: 9,
    slug: "pre-int-unit-09-conditionals",
    titleEn: "Real & Unreal Conditions",
    titleTk: "Hakyky we Hyýaly Şertler",
    description: "Bu bölümde şert sözlemleri öwrenilýär: nol şert (hemişe dogry faktlar), birinji şert (hakyky mümkin ýagdaýlar) we ikinji şert (hyýaly ýagdaýlar).",
    lessons: [
      {
        lessonNumber: 1,
        slug: "pre-int-u09-l01-zero-conditional",
        titleEn: "Zero Conditional — Facts & Habits",
        titleTk: "Nol Şert — Faktlar we Endikler",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Nol şert (Zero Conditional) hemişe dogry bolan faktlary we umumy hakykatları aňlatmak üçin ulanylýar. Ikisi hem Present Simple ulanylýar: 'If you heat water to 100°C, it boils.' Bu ylmy hakykatlary, tebigy düzgünleri we endikleri beýan edeniňde ulanylýar.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: Nol Şert",
                explanationTk: "If + Present Simple, Present Simple. 'When' hem 'if' ýerine ulanylyp bilner. Şert we netije ikisi hem hemişe hakykat.",
                pattern: "If + Present Simple, + Present Simple.",
                examples: [
                  { en: "If you mix red and blue, you get purple.", tk: "Gyzyl bilen gögi garyşdyrsaň, melewşe alarsyň." },
                  { en: "When I eat too much sugar, I feel sick.", tk: "Köp şeker iýsem, ýarawsyz duýýaryn." },
                  { en: "If plants don't get sunlight, they die.", tk: "Ösümlikler gün şöhlesini almasalar, ölýärler." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "pre-int-u09-l02-first-conditional",
        titleEn: "First Conditional — Real Possibilities",
        titleTk: "Birinji Şert — Hakyky Mümkinçilikler",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Birinji şert — geljekde hakyky mümkin bolan ýagdaýlar üçin ulanylýar. Şert bölüminde Present Simple, netije bölüminde will ulanylýar. 'If it rains tomorrow, I won't go out.' — Bu ýagyş ýagmagy mümkin, hakyky ähtimallyk.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: Birinji Şert",
                explanationTk: "If + Present Simple, will + işlik. If + Present Simple, won't + işlik. Şert we netije bölümini çalşyrip hem ulanyp bilersiňiz: I'll stay home if it rains. 'Unless' = 'if...not': Unless you study, you'll fail = If you don't study, you'll fail.",
                pattern: "If + Present Simple, will + işlik. / işlik + if + Present Simple.",
                examples: [
                  { en: "If you study hard, you will pass the exam.", tk: "Gaty okasaň, synagdan geçersiň." },
                  { en: "I won't go to the party if I feel tired.", tk: "Ýadaw duýsam, partiýa gitmerin." },
                  { en: "Unless we leave now, we'll miss the train.", tk: "Häzir gitmesek, otlydan galarys." },
                ],
              },
            },
            {
              type: "dialogue",
              data: {
                titleTk: "Söhbetdeşlik: Şert we netije",
                exchanges: [
                  { speakerEn: "Selbi", lineEn: "What will you do if you don't get the job?", lineTk: "Işe almasalar näme edersiň?" },
                  { speakerEn: "Kerim", lineEn: "If I don't get it, I'll apply for other positions.", lineTk: "Almasalar, başga wezipelere ýüz tutaryn." },
                  { speakerEn: "Selbi", lineEn: "And if you get it, will you move to Ashgabat?", lineTk: "Alsalar, Aşgabada göçermiň?" },
                  { speakerEn: "Kerim", lineEn: "Yes! If they offer me the job, I'll definitely move.", lineTk: "Hawa! Teklip berseler, hökman göçerin." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "pre-int-u09-l03-second-conditional",
        titleEn: "Second Conditional — Unreal Situations",
        titleTk: "Ikinji Şert — Hyýaly Ýagdaýlar",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Ikinji şert — häzirki wagtda hakyky bolmadyk ýa-da gaty az ähtimal ýagdaýlary hyýal etmek üçin ulanylýar. Şert bölümünde Past Simple, netije bölümünde would ulanylýar. 'If I were rich, I would travel the world' — Men baý däl, ýöne baý bolsam näme ederdigimi aýdýaryn.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: Ikinji Şert",
                explanationTk: "If + Past Simple, would + işlik. 'If I were...' (I am / he is / she is däl-de, were ulanylýar — resmi Iňlisçede). Would + işlik = netije. Inkär: wouldn't + işlik.",
                pattern: "If + Past Simple, would + işlik.",
                examples: [
                  { en: "If I won the lottery, I would buy a house.", tk: "Lotereýa utsam, öý satyn alardym." },
                  { en: "If I were the president, I would build more hospitals.", tk: "Prezident bolsam, köp hassahana gurardym." },
                  { en: "She would travel the world if she had more time.", tk: "Wagty köp bolsa, dünýäni gezdirdi." },
                ],
              },
            },
            {
              type: "example_set",
              data: {
                titleTk: "Üç şert sözleminiň deňeşdirmesi",
                examples: [
                  { en: "Zero: If you heat ice, it melts. (Always true)", tk: "Nol: Buzý gyzgyn etseg, eräýär. (Hemişe dogry)" },
                  { en: "First: If it rains tomorrow, I'll stay home. (Real future possibility)", tk: "Birinji: Ertir ýagyş ýagsa, öýde galjakla. (Hakyky ähtimallyk)" },
                  { en: "Second: If I were a bird, I would fly to Turkey. (Unreal/imaginary)", tk: "Ikinji: Guş bolsam, Türkiýä uçardym. (Hyýal)" },
                ],
              },
            },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "9-njy Bölüm Synagy: Şert Sözlemleri",
      questions: [
        { order: 1, questionText: "If you heat water to 100°C, it _____.", questionType: "multiple_choice_grammar", options: ["boiled", "will boil", "boils", "would boil"], correctIndex: 2 },
        { order: 2, questionText: "If I _____ harder, I will pass. (study)", questionType: "multiple_choice_grammar", options: ["studied", "will study", "study", "studying"], correctIndex: 2 },
        { order: 3, questionText: "If I were rich, I _____ travel the world.", questionType: "multiple_choice_grammar", options: ["will", "would", "am", "should"], correctIndex: 1 },
        { order: 4, questionText: "'Unless' nämäni aňladýar?", questionType: "translate_en_tk", options: ["Eger", "Eger bolmasa", "Haçan", "Heniz"], correctIndex: 1 },
        { order: 5, questionText: "She _____ come if she feels better. (will/would)", questionType: "multiple_choice_grammar", options: ["would", "will", "should", "might"], correctIndex: 1 },
        { order: 6, questionText: "If I _____ the president, I would change many things.", questionType: "multiple_choice_grammar", options: ["am", "be", "were", "was being"], correctIndex: 2 },
        { order: 7, questionText: "Unless you _____, you'll miss the train.", questionType: "multiple_choice_grammar", options: ["hurry", "will hurry", "hurried", "hurrying"], correctIndex: 0 },
        { order: 8, questionText: "If it _____ tomorrow, we'll cancel the picnic. (rain)", questionType: "multiple_choice_grammar", options: ["rained", "will rain", "rains", "raining"], correctIndex: 2 },
        { order: 9, questionText: "What _____ you do if you lost your job?", questionType: "multiple_choice_grammar", options: ["will", "would", "should", "do"], correctIndex: 1 },
        { order: 10, questionText: "If you mix yellow and blue, you _____ green.", questionType: "multiple_choice_grammar", options: ["got", "get", "will get", "would get"], correctIndex: 1 },
      ],
    },
  },

  // ─── UNIT 10: PAST CONTINUOUS ────────────────────────────────────────────
  {
    unitNumber: 10,
    slug: "pre-int-unit-10-past-continuous",
    titleEn: "What Were You Doing?",
    titleTk: "Näme edýärdiňiz?",
    description: "Bu bölümde Past Continuous (was/were + -ing) öwrenilýär. Geçmişde bir wagtda bolup geçen hereketleri, bölünen hereketleri we gürrüň berishdäki fon sahnalary düşündirmegi öwrenersiňiz.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "pre-int-u10-l01-past-continuous-form",
        titleEn: "Past Continuous — Form & Use",
        titleTk: "Past Continuous — Düzümi we Ulanylyşy",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Past Continuous — geçmişde belli bir wagtda dowam edip duran hereketi aňladýar. 'At 8pm yesterday, I was watching TV' — düýn agşam sagat 8-de telewizora tomaşa edip oturdym (o wagt dowam edip durandy). Gürrüňde fon sahnalary döretmek üçin hem ulanylýar.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: Past Continuous düzümi",
                explanationTk: "was/were + işlik + -ing. I/he/she/it → was. You/we/they → were. Sorag: Was/Were + şahs + işlik + -ing? Inkär: wasn't/weren't + işlik + -ing.",
                pattern: "I was working. / She was studying. / They were playing. / Were you sleeping?",
                examples: [
                  { en: "At midnight, I was still working on my project.", tk: "Ýarygijede men heniz taslamam bilen işleşip oturdym." },
                  { en: "Were you listening when she explained it?", tk: "Ol düşündirip duran wagty siz diňleýärdiňizmi?" },
                  { en: "They weren't sleeping — they were watching a film.", tk: "Olar ýatanokdy — film tomaşa edip oturdylar." },
                ],
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "Past Continuous bilen ulanylýan wagt sözleri",
                words: [
                  { en: "at that moment", tk: "şol wagt", partOfSpeech: "adverb", exampleEn: "At that moment, I was thinking about her.", exampleTk: "Şol wagt men onuň barada pikirlenyardim." },
                  { en: "all morning", tk: "bütin irden", partOfSpeech: "adverb", exampleEn: "She was cooking all morning.", exampleTk: "Ol bütin irden nahar bişirip oturdy." },
                  { en: "this time yesterday", tk: "düýn şu wagtlar", partOfSpeech: "adverb", exampleEn: "This time yesterday, we were swimming in the sea.", exampleTk: "Düýn şu wagtlar denizde ýüzüp yorduk." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "pre-int-u10-l02-when-while",
        titleEn: "When & While — Interrupted Actions",
        titleTk: "When we While — Bölünen Hereketler",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "'When' we 'while' bilen Past Continuous we Past Simple bir arada ulanylýar. Uzyn dowam edip duran hereket üçin Past Continuous, ony bölen gysga hereket üçin Past Simple ulanylýar. 'While' — uzyn hereketiň başlangyjy, 'when' — gysga hereketiň başlanmagy.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: When we While bilen bölünen hereketler",
                explanationTk: "'While + Past Continuous' — uzyn hereket dowam edip duran wagt. 'When + Past Simple' — gysga hereket boldy. Bu ikisi bir jümlede bolar ýaly biri-biri bilen baglanyşdyrylýar.",
                pattern: "I was [uzyn hereket] when [gysga hereket] happened. / While I was [hereket], someone [başga hereket].",
                examples: [
                  { en: "I was walking home when it started to rain.", tk: "Men öýe ýöräp barýarkam ýagyş başlady." },
                  { en: "While she was cooking, the phone rang.", tk: "Ol nahar bişirip duran wagty telefon jyryldy." },
                  { en: "He was driving when he saw the accident.", tk: "Ol maşyn sürüp barýarka heläkçiligi gördi." },
                ],
              },
            },
            {
              type: "dialogue",
              data: {
                titleTk: "Söhbetdeşlik: Näme bolupdy?",
                exchanges: [
                  { speakerEn: "Selim", lineEn: "Did you hear the news? There was an accident near the market.", lineTk: "Habary eşitdiňizmi? Bazaryň golaýynda heläkçilik boldy." },
                  { speakerEn: "Mähri", lineEn: "Yes! Were you there? What were you doing?", lineTk: "Hawa! Siz ol ýerdemiňiz? Näme edýärdiňiz?" },
                  { speakerEn: "Selim", lineEn: "I was walking past the market when I heard a loud crash.", tk: "Men bazaryň ýanyndan ötüp barýarkam güýçli täsir sesini eşitdim.", lineTk: "Men bazaryň ýanyndan ötüp barýarkam güýçli sesi eşitdim." },
                  { speakerEn: "Mähri", lineEn: "That sounds scary! Were many people watching?", lineTk: "Gorkunç bolsa gerek! Köp adam seredip durdumy?" },
                  { speakerEn: "Selim", lineEn: "Yes, everyone was stopping to look.", lineTk: "Hawa, hemmeler seredip durdy." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "pre-int-u10-l03-storytelling-past",
        titleEn: "Storytelling with Past Tenses",
        titleTk: "Geçmiş Zamanlar bilen Gürrüň Bermek",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Gowy gürrüň bermek üçin Past Simple we Past Continuous bir arada ulanylýar. Past Simple — esasy wakalar we hereketler. Past Continuous — fon, atmosfera we şol wagtda dowam edip duran hereketler. Bu ikisini bilelikde ulanmak gürrüňiňize janly we çekimli görünmäge kömek edýär.",
              },
            },
            {
              type: "example_set",
              data: {
                titleTk: "Past Simple + Past Continuous bilen gürrüň",
                examples: [
                  { en: "It was a cold winter evening. The snow was falling and the wind was blowing hard.", tk: "Sowuk gyş agşamydy. Gar ýagýardy we güýçli ýel öwüsýärdi." },
                  { en: "I was sitting by the fire and reading a book when suddenly the lights went out.", tk: "Men oduň ýanynda oturyp kitap okap oturdym, birden ýagty öçdi." },
                  { en: "Everyone was sleeping when the earthquake struck.", tk: "Ýer titrände hemmeler ýatyrdy." },
                  { en: "I was having breakfast when I heard the terrible news on the radio.", tk: "Ertirlik naharyny iýip oturdym, şol wagt radioda gorkunç habar eşitdim." },
                ],
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "Gürrüň bermekde ulanylýan sözler",
                words: [
                  { en: "suddenly", tk: "birden / duýdansyz", partOfSpeech: "adverb", exampleEn: "Suddenly, everything went quiet.", exampleTk: "Birden hemmeler dymyp gitdi." },
                  { en: "eventually", tk: "ahyrsoňunda / netijede", partOfSpeech: "adverb", exampleEn: "Eventually, we found the right road.", exampleTk: "Ahyrsoňunda dogry ýoly tapdyk." },
                  { en: "luckily", tk: "Bagtyýarlykda / şükür", partOfSpeech: "adverb", exampleEn: "Luckily, nobody was hurt.", exampleTk: "Bagtyýarlykda, hiç kim ýaralanmady." },
                  { en: "meanwhile", tk: "şol bir wagtda / aralykda", partOfSpeech: "adverb", exampleEn: "Meanwhile, the others were waiting outside.", exampleTk: "Şol bir wagtda beýlekiler daşarda garaşýardy." },
                ],
              },
            },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "10-njy Bölüm Synagy: Past Continuous",
      questions: [
        { order: 1, questionText: "She _____ TV when I arrived. (watch)", questionType: "multiple_choice_grammar", options: ["watched", "was watching", "is watching", "watches"], correctIndex: 1 },
        { order: 2, questionText: "They _____ football at 6pm yesterday.", questionType: "multiple_choice_grammar", options: ["were playing", "played", "are playing", "play"], correctIndex: 0 },
        { order: 3, questionText: "I was reading when the phone _____. (ring)", questionType: "multiple_choice_grammar", options: ["was ringing", "ringed", "rang", "rung"], correctIndex: 2 },
        { order: 4, questionText: "'Birden' iňlisçe näme?", questionType: "translate_tk_en", options: ["eventually", "meanwhile", "luckily", "suddenly"], correctIndex: 3 },
        { order: 5, questionText: "While she _____ cooking, he set the table.", questionType: "multiple_choice_grammar", options: ["cooked", "cooks", "was cooking", "is cooking"], correctIndex: 2 },
        { order: 6, questionText: "Were you _____at 10pm last night? (sleep)", questionType: "multiple_choice_grammar", options: ["sleep", "slept", "sleeping", "sleeped"], correctIndex: 2 },
        { order: 7, questionText: "'Ahyrsoňunda' iňlisçe näme?", questionType: "translate_tk_en", options: ["suddenly", "meanwhile", "luckily", "eventually"], correctIndex: 3 },
        { order: 8, questionText: "He _____ his homework when his friends came.", questionType: "multiple_choice_grammar", options: ["did", "was doing", "is doing", "does"], correctIndex: 1 },
        { order: 9, questionText: "What were you doing _____ I called? (when/while)", questionType: "multiple_choice_grammar", options: ["during", "while", "when", "since"], correctIndex: 2 },
        { order: 10, questionText: "They weren't sleeping — they _____ a film.", questionType: "multiple_choice_grammar", options: ["watched", "were watching", "are watching", "watch"], correctIndex: 1 },
      ],
    },
  },

  // ─── UNIT 11: PASSIVE VOICE ──────────────────────────────────────────────
  {
    unitNumber: 11,
    slug: "pre-int-unit-11-passive-voice",
    titleEn: "The Passive Voice",
    titleTk: "Passywy Görnüş",
    description: "Bu bölümde passyw görnüş öwrenilýär — hereketden has köp zada ähmiýet berilende ulanylýar. Häzirki zaman passywy (is/are made) we geçen zaman passywy (was/were built) öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "pre-int-u11-l01-present-passive",
        titleEn: "Present Simple Passive",
        titleTk: "Häzirki Zaman Passywy",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Passyw görnüş — hereketden has köp zada (kim etdi däl-de, näme edildi) ähmiýet berilende ulanylýar. 'English is spoken in many countries' — bu ýerde dil däl-de, ulanylýan dil möhüm. Häzirki zaman passywy: am/is/are + past participle.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: Häzirki Zaman Passywy",
                explanationTk: "am/is/are + işligiň Past Participle görnüşi. Aktyw: 'They make cars in Germany.' Passyw: 'Cars are made in Germany.' Kim etdi bilmek islesek 'by' goşulýar: 'Cars are made by workers.' Inkär: am/is/are + not + PP.",
                pattern: "is/are + Past Participle. / is/are + not + Past Participle. / Is/Are + [zat] + Past Participle?",
                examples: [
                  { en: "This magazine is published every week.", tk: "Bu žurnal her hepde çap edilýär." },
                  { en: "Mobile phones are made in several countries.", tk: "Ykjam telefonlar birnäçe ýurtda öndürilýär." },
                  { en: "Is this building used as a school?", tk: "Bu bina mekdep hökmünde ulanylýarmy?" },
                ],
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "Passyw bilen köp ulanylýan işlikler",
                words: [
                  { en: "produce / manufacture", tk: "öndürmek / ýasamak", partOfSpeech: "verb", exampleEn: "Carpets are produced in this region.", exampleTk: "Halylar bu sebitde öndürilýär." },
                  { en: "export / import", tk: "eksport etmek / import etmek", partOfSpeech: "verb", exampleEn: "Gas is exported to neighbouring countries.", exampleTk: "Gaz goňşy ýurtlara eksport edilýär." },
                  { en: "translate", tk: "terjime etmek", partOfSpeech: "verb", exampleEn: "This book has been translated into 20 languages.", exampleTk: "Bu kitap 20 dile terjime edildi." },
                  { en: "recycle", tk: "gaýtadan işlemek", partOfSpeech: "verb", exampleEn: "Glass and paper are recycled in this city.", exampleTk: "Bu şäherde aýna we kagyz gaýtadan işlenýär." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "pre-int-u11-l02-past-passive",
        titleEn: "Past Simple Passive",
        titleTk: "Geçen Zaman Passywy",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Geçen zaman passywy — geçmişde bolan hereketleri passyw görnüşde aňlatmak üçin ulanylýar. was/were + past participle. 'The Eiffel Tower was built in 1889.' — kim gurdy däl-de, haçan gurlandygy möhüm.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: Geçen Zaman Passywy",
                explanationTk: "was/were + Past Participle. I/He/She/It → was. You/We/They → were. Aktyw: 'They built the mosque in 1900.' Passyw: 'The mosque was built in 1900.' Kim gurdy bilmek islesek: 'by + adam' goşulýar.",
                pattern: "was/were + Past Participle. / was/were + not + Past Participle.",
                examples: [
                  { en: "The first aeroplane was invented by the Wright Brothers.", tk: "Ilkinji uçar Raýt doganlar tarapyndan oýlanyp tapyldy." },
                  { en: "Many ancient buildings were destroyed in the earthquake.", tk: "Köp gadymy binalar ýer titremesinde ýykyldy." },
                  { en: "Was the report written by you or your colleague?", tk: "Hasabat siz tarapyndan ýa-da kärdeşiňiz tarapyndan ýazyldy?" },
                ],
              },
            },
            {
              type: "dialogue",
              data: {
                titleTk: "Söhbetdeşlik: Taryhy ýer barada",
                exchanges: [
                  { speakerEn: "Tour Guide", lineEn: "This palace was built in the 18th century.", lineTk: "Bu köşk 18-nji asyrda guruldy." },
                  { speakerEn: "Tourist", lineEn: "Who was it built by?", lineTk: "Kim tarapyndan guruldy?" },
                  { speakerEn: "Tour Guide", lineEn: "It was commissioned by the regional governor at that time.", lineTk: "Şol döwürdäki welaýat häkimi buýurdy." },
                  { speakerEn: "Tourist", lineEn: "Is it still used as a palace?", lineTk: "Häzir hem köşk hökmünde ulanylýarmy?" },
                  { speakerEn: "Tour Guide", lineEn: "No, it was converted into a museum in the 1970s.", lineTk: "Ýok, 1970-nji ýyllarda museum boldy." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "pre-int-u11-l03-passive-in-use",
        titleEn: "When to Use the Passive",
        titleTk: "Passywy Haçan Ulanmaly",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Passyw görnüş şu ýagdaýlarda ulanylýar: 1) Kim etdi belli däl ýa-da möhüm däl ('My bike was stolen'); 2) Hünärmen dil we ylmy ýazuw ('The results were analysed'); 3) Hereketden has köp zada üns çekmek ('Turkmenistan was established in 1991').",
              },
            },
            {
              type: "example_set",
              data: {
                titleTk: "Passywyň ulanylyşy — mysallar",
                examples: [
                  { en: "My wallet was stolen on the bus. (Don't know who.)", tk: "Awtobusdaky gapjygym ogurlandy. (Kim ogurlany bilemok.)" },
                  { en: "The new road will be opened next year. (Focus on road, not who opens it.)", tk: "Täze ýol gelýän ýyl açylar. (Ýol möhüm, kim açjaky däl.)" },
                  { en: "Coffee is grown in Brazil. (General fact.)", tk: "Kofeni Braziliýada ösdürip ýetişdirilýär. (Umumy fakt.)" },
                  { en: "Three people were arrested after the incident. (Formal / news style.)", tk: "Wakadan soň üç adam tutuldy. (Resmi / habar stili.)" },
                ],
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "Passyw bilen ulanylýan goşmaça sözler",
                words: [
                  { en: "establish", tk: "döretmek / esaslandyrmak", partOfSpeech: "verb", exampleEn: "This university was established in 1950.", exampleTk: "Bu uniwersitet 1950-nji ýylda döredildi." },
                  { en: "discover", tk: "açmak / tapmak", partOfSpeech: "verb", exampleEn: "Penicillin was discovered by Alexander Fleming.", exampleTk: "Penisilin Aleksandr Fleming tarapyndan açyldy." },
                  { en: "announce", tk: "yglan etmek / habar bermek", partOfSpeech: "verb", exampleEn: "The winner was announced at the ceremony.", exampleTk: "Ýeňiji dabarada yglan edildi." },
                ],
              },
            },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "11-nji Bölüm Synagy: Passyw Görnüş",
      questions: [
        { order: 1, questionText: "English _____ all over the world. (speak — passyw)", questionType: "multiple_choice_grammar", options: ["speaks", "spoke", "is spoken", "was spoken"], correctIndex: 2 },
        { order: 2, questionText: "The Eiffel Tower _____ in 1889. (build — passyw)", questionType: "multiple_choice_grammar", options: ["builds", "built", "is built", "was built"], correctIndex: 3 },
        { order: 3, questionText: "'Terjime etmek' iňlisçe näme?", questionType: "translate_tk_en", options: ["export", "produce", "translate", "recycle"], correctIndex: 2 },
        { order: 4, questionText: "My phone _____ yesterday. (steal — passyw)", questionType: "multiple_choice_grammar", options: ["stolen", "is stolen", "was stolen", "stole"], correctIndex: 2 },
        { order: 5, questionText: "Cars _____ in this factory. (make — passyw, häzirki)", questionType: "multiple_choice_grammar", options: ["made", "are made", "were made", "make"], correctIndex: 1 },
        { order: 6, questionText: "'Açmak / Tapmak' iňlisçe näme?", questionType: "translate_tk_en", options: ["announce", "establish", "produce", "discover"], correctIndex: 3 },
        { order: 7, questionText: "The report _____ by the manager. (write — geçen)", questionType: "multiple_choice_grammar", options: ["wrote", "is written", "writes", "was written"], correctIndex: 3 },
        { order: 8, questionText: "This hospital _____ in 1980. (open — passyw)", questionType: "multiple_choice_grammar", options: ["opens", "is opened", "was opened", "opened"], correctIndex: 2 },
        { order: 9, questionText: "'Esaslandyrmak' iňlisçe näme?", questionType: "translate_tk_en", options: ["discover", "announce", "establish", "recycle"], correctIndex: 2 },
        { order: 10, questionText: "Are these products _____ locally?", questionType: "multiple_choice_grammar", options: ["make", "made", "making", "makes"], correctIndex: 1 },
      ],
    },
  },

  // ─── UNIT 12: REPORTED SPEECH ────────────────────────────────────────────
  {
    unitNumber: 12,
    slug: "pre-int-unit-12-reported-speech",
    titleEn: "Reported Speech",
    titleTk: "Başgalaryň Sözlerini Habar Bermek",
    description: "Bu bölümde başgalaryň aýdan zatlarynyň nädip habar berilýändigini öwrenersiňiz. Say/tell bilen zaman süýşmesi we habar sözlemlerini düzmek öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "pre-int-u12-l01-reported-statements",
        titleEn: "Reported Statements",
        titleTk: "Habarly Sözlemler",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Başga biriniň aýdan sözlerini habar bereniňde 'said' ýa-da 'told' ulanylýar. 'He said: I am tired' → 'He said he was tired' — zaman üýtgeýär: am → was. Bu zaman üýtgemesi 'backshift' diýilýär. 'Say' + that / 'tell' + adam + that.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: Zaman süýşmesi (backshift)",
                explanationTk: "Gönüden aýdylan söz → Habarly söz. Present Simple → Past Simple. Present Continuous → Past Continuous. Past Simple → Past Perfect. Will → Would. Can → Could. Must → Had to.",
                pattern: "Direct: 'I am tired.' → Reported: He said he was tired.",
                examples: [
                  { en: "'I work in Ashgabat.' → She said she worked in Ashgabat.", tk: "'Men Aşgabatda işleýärin.' → Ol Aşgabatda işleýändigini aýtdy." },
                  { en: "'We are leaving tomorrow.' → They said they were leaving the next day.", tk: "'Biz ertir gidýäris.' → Olar ertesi gün gidýändiklerini aýtdylar." },
                  { en: "'I can't come.' → She said she couldn't come.", tk: "'Gelip bilmerin.' → Ol gelip bilmejegini aýtdy." },
                ],
              },
            },
            {
              type: "vocabulary_list",
              data: {
                titleTk: "Wagt görkezijileriniň üýtgemesi",
                words: [
                  { en: "now → then / at that moment", tk: "häzir → şol wagt", partOfSpeech: "adverb", exampleEn: "'I am busy now.' → She said she was busy then.", exampleTk: "'Häzir işli.' → Ol şol wagt işlidigini aýtdy." },
                  { en: "today → that day", tk: "bu gün → şol gün", partOfSpeech: "adverb", exampleEn: "'I'll call today.' → He said he would call that day.", exampleTk: "'Bu gün jaň ederin.' → Ol şol gün jaň etjegini aýtdy." },
                  { en: "tomorrow → the next day", tk: "ertir → ertesi güni", partOfSpeech: "adverb", exampleEn: "'I'm coming tomorrow.' → She said she was coming the next day.", exampleTk: "'Ertir gelýärin.' → Ol ertesi güni geljegini aýtdy." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "pre-int-u12-l02-say-vs-tell",
        titleEn: "Say vs Tell",
        titleTk: "Say we Tell tapawudy",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "'Say' we 'tell' ikisi hem habar bermek üçin ulanylýar, ýöne tapawut bar: 'say' — kime aýdylany bellemek hökman däl ('She said she was tired'). 'Tell' — kime aýdylany bellemek hökmany ('She told me she was tired', 'He told us the news'). Tell + adam + that.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: Say we Tell tapawudy",
                explanationTk: "say + (that) + sözlem. say + to + adam + that. tell + adam + (that) + sözlem. Tell soňra adam (me, him, her, us, them) hökman gelýär. Say soňra adam gelmezden hem ulanylyp bilner.",
                pattern: "She said (that) she was tired. / She told me (that) she was tired.",
                examples: [
                  { en: "He said he would be late.", tk: "Ol giç galjagyny aýtdy." },
                  { en: "She told me she had already eaten.", tk: "Ol maňa eýýäm iýendigini aýtdy." },
                  { en: "They told us the meeting was cancelled.", tk: "Olar bize ýygnakyň ýatyrylýandygyny aýtdylar." },
                ],
              },
            },
            {
              type: "dialogue",
              data: {
                titleTk: "Söhbetdeşlik: Kim näme aýtdy?",
                exchanges: [
                  { speakerEn: "Akjagül", lineEn: "Did you speak to the manager?", lineTk: "Müdür bilen gürleşdiňizmi?" },
                  { speakerEn: "Döwlet", lineEn: "Yes! He told me the interview was on Wednesday.", lineTk: "Hawa! Ol maňa söhbetdeşligiň çarşenbe güni boljakdygyny aýtdy." },
                  { speakerEn: "Akjagül", lineEn: "And what did he say about the salary?", lineTk: "Aýlyk barada näme aýtdy?" },
                  { speakerEn: "Döwlet", lineEn: "He said they were offering a very good package.", lineTk: "Ol gaty gowy tölegiň bardygyny aýtdy." },
                  { speakerEn: "Akjagül", lineEn: "That's great! Did he tell you when they would make a decision?", lineTk: "Ajaýyp! Kararyň haçan beriljekdigini aýtdymy?" },
                  { speakerEn: "Döwlet", lineEn: "He said they would call me by Friday.", lineTk: "Ol anna gününe çenli jaň etjekdigini aýtdy." },
                ],
              },
            },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "pre-int-u12-l03-reported-questions",
        titleEn: "Reported Questions",
        titleTk: "Habarly Soraglar",
        content: {
          blocks: [
            {
              type: "explanation",
              data: {
                titleTk: "Giriş",
                bodyTk: "Başgasyndan soragy habar bereniňde sorag görnüşi üýtgeýär. Sorag sözi (what, where, when...) ulanylsa: Sorag sözi + şahs + işlik. Hawa/Ýok soragy: 'asked if/whether + şahs + işlik. Sorag belgisi ulanylanok.",
              },
            },
            {
              type: "grammar_note",
              data: {
                titleTk: "Grammatika: Habarly Soraglar",
                explanationTk: "Göni sorag: 'Where do you live?' → Habarly: She asked me where I lived. Hawa/Ýok sorag: 'Are you married?' → He asked if/whether I was married. Sorag görnüşi → Adaty sözlem görnüşi bolýar (işlik öňe geçmeýär).",
                pattern: "She asked (me) where/what/when + [şahs + işlik]. / He asked if/whether + [şahs + işlik].",
                examples: [
                  { en: "'Where do you work?' → She asked me where I worked.", tk: "'Nirede işleýärsiň?' → Ol menden nirede işleýändigimi sorady." },
                  { en: "'Are you free tonight?' → He asked if I was free that evening.", tk: "'Bu agşam boş bolarsyňmy?' → Ol şol agşam boş boljakdygymy sorady." },
                  { en: "'What time does the train leave?' → She asked what time the train left.", tk: "'Otly haçan çykýar?' → Ol otlynyň haçan çykýandygyny sorady." },
                ],
              },
            },
            {
              type: "example_set",
              data: {
                titleTk: "Habar sözlemleriniň jemi",
                examples: [
                  { en: "Direct: 'I will finish it tomorrow.' → Reported: He said he would finish it the next day.", tk: "Göni: 'Ertir tamamlaryn.' → Habar: Ol ertesi tamamlajagyny aýtdy." },
                  { en: "Direct: 'Do you speak English?' → Reported: She asked if I spoke English.", tk: "Göni: 'Iňlisçe bilýärmiň?' → Habar: Ol Iňlisçe bilýändigimi sorady." },
                  { en: "Direct: 'We can't attend the meeting.' → Reported: They told us they couldn't attend.", tk: "Göni: 'Ýygnaklara gatnaşyp bilmeýäris.' → Habar: Olar gatnaşyp bilmeýändiklerini aýtdylar." },
                ],
              },
            },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "12-nji Bölüm Synagy: Habarly Söz",
      questions: [
        { order: 1, questionText: "He said he _____ tired. (present → past)", questionType: "multiple_choice_grammar", options: ["is", "are", "was", "were"], correctIndex: 2 },
        { order: 2, questionText: "She told _____ she would be late.", questionType: "multiple_choice_grammar", options: ["that", "me", "to me", "say"], correctIndex: 1 },
        { order: 3, questionText: "'I can swim.' → She said she _____ swim.", questionType: "multiple_choice_grammar", options: ["can", "could", "cans", "will"], correctIndex: 1 },
        { order: 4, questionText: "He asked me _____ I was married.", questionType: "multiple_choice_grammar", options: ["that", "what", "if", "who"], correctIndex: 2 },
        { order: 5, questionText: "'We are leaving.' → They said they _____ leaving.", questionType: "multiple_choice_grammar", options: ["are", "is", "were", "was"], correctIndex: 2 },
        { order: 6, questionText: "She _____ me the meeting was cancelled. (tell)", questionType: "multiple_choice_grammar", options: ["said", "spoke", "told", "tell"], correctIndex: 2 },
        { order: 7, questionText: "He asked where I _____. (work → past)", questionType: "multiple_choice_grammar", options: ["work", "works", "worked", "working"], correctIndex: 2 },
        { order: 8, questionText: "'Tomorrow' habarly sözlemde nähili üýtgeýär?", questionType: "translate_en_tk", options: ["O gün", "Şol günden bäri", "Ertesi güni", "Öňki gün"], correctIndex: 2 },
        { order: 9, questionText: "She said she _____ finished the report. (have → had)", questionType: "multiple_choice_grammar", options: ["have", "has", "had", "having"], correctIndex: 2 },
        { order: 10, questionText: "They asked _____ the shop was open.", questionType: "multiple_choice_grammar", options: ["that", "what", "if", "who"], correctIndex: 2 },
      ],
    },
  },
];
