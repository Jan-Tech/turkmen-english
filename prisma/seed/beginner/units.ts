import type { SeedUnit } from "../../../types/content";

export const beginnerUnits: SeedUnit[] = [
  // ─── UNIT 1: GREETINGS ──────────────────────────────────────────────────
  {
    unitNumber: 1,
    slug: "beginner-unit-01-greetings",
    titleEn: "Greetings & Introductions",
    titleTk: "Salam bermek we tanyşmak",
    description: "Bu bölümde Iňlis dilinde salam bermegiň we özüňi tanytmagyň esasy usullaryny öwrenersiňiz.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "beginner-u01-l01-hello-goodbye",
        titleEn: "Hello and Goodbye",
        titleTk: "Salamlaşmak we Hoşlaşmak",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Iňlis dilinde salam bermek günüň wagtyna görä tapawutlanýar. 'Hello' islendik wagt ulanylyp bilner, emma 'Good morning', 'Good afternoon' we 'Good evening' has resmi salam beriş usullarydyr. Biri-biriňizden aýrylanyňyzda 'Goodbye', 'Bye' ýa-da 'See you later' diýilýär." } },
            { type: "vocabulary_list", data: { titleTk: "Esasy Sözler", words: [
              { en: "Hello", tk: "Salam", partOfSpeech: "noun", exampleEn: "Hello! How are you?", exampleTk: "Salam! Nähili ýagdaýyňyz?" },
              { en: "Good morning", tk: "Ertiriniz haýyrly (irden sagat 12-e çenli)", partOfSpeech: "noun", exampleEn: "Good morning, teacher!", exampleTk: "Ertiriniz haýyrly, mugallym!" },
              { en: "Good afternoon", tk: "Günüňiz haýyrly (sagat 12-den 6-a çenli)", partOfSpeech: "noun", exampleEn: "Good afternoon! Come in.", exampleTk: "Günüňiz haýyrly! Içeri giriň." },
              { en: "Good evening", tk: "Agşamyňyz haýyrly (sagat 6-dan 9-10-a çenli)", partOfSpeech: "noun", exampleEn: "Good evening, everyone.", exampleTk: "Agşamyňyz haýyrly, hemmeler." },
              { en: "Goodbye", tk: "Hoş gal / Sag bol", partOfSpeech: "noun", exampleEn: "Goodbye! See you tomorrow.", exampleTk: "Hoş gal! Ertir görüşeris." },
              { en: "How are you?", tk: "Nähili ýagdaýyňyz?", partOfSpeech: "noun", exampleEn: "Hi! How are you today?", exampleTk: "Salam! Bu gün nähili?" },
              { en: "Fine, thank you", tk: "Gowy, sag boluň", partOfSpeech: "noun", exampleEn: "I'm fine, thank you!", exampleTk: "Men gowy, sag boluň!" },
              { en: "Nice to meet you", tk: "Tanşanymyza şat", partOfSpeech: "noun", exampleEn: "Nice to meet you, Merdan.", exampleTk: "Tanşanymyza şat, Merdan." },
            ]}},
            { type: "dialogue", data: { titleTk: "Söhbetdeşlik: Ilkinji duşuşyk", exchanges: [
              { speakerEn: "Aýgül", lineEn: "Good morning! My name is Aýgül.", lineTk: "Ertiriniz haýyrly! Meniň adym Aýgül." },
              { speakerEn: "Merdan", lineEn: "Good morning! I am Merdan. Nice to meet you.", lineTk: "Ertiriniz haýyrly! Men Merdan. Tanşanymyza şat." },
              { speakerEn: "Aýgül", lineEn: "Nice to meet you too. How are you?", lineTk: "Mende-de. Nähili ýagdaýyňyz?" },
              { speakerEn: "Merdan", lineEn: "I'm fine, thank you! And you?", lineTk: "Gowy, sag boluň! Siziň ýagdaýyňyz?" },
              { speakerEn: "Aýgül", lineEn: "I'm very well, thank you!", lineTk: "Gaty gowy, sag boluň!" },
            ]}},
            { type: "grammar_note", data: { titleTk: "Grammatika: 'I am' we 'My name is'", explanationTk: "Özüňizi tanytmak üçin iki sany esasy jümle bar: 'My name is...' — meniň adym... we 'I am...' — Men... Bu iki jümläniň manysy birdir, ikisini hem erkin ulanyp bilersiňiz.", pattern: "My name is [at]. / I am [at].", examples: [
              { en: "My name is Merdan.", tk: "Meniň adym Merdan." },
              { en: "I am Aýgül.", tk: "Men Aýgül." },
              { en: "His name is Kerim.", tk: "Onuň ady Kerim." },
            ]}},
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "beginner-u01-l02-introducing",
        titleEn: "Introducing Yourself",
        titleTk: "Özüňi tanatmak",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Özüňi tanatmak — Iňlis dilini öwrenmekde ilkinji we iň möhüm ädim. Bu sapakda adyňyzy, ýaşyňyzy, haýsy ýurtdan gelendygiňizi we nähili işledigiňizi nädip aýtmagy öwrenersiňiz." } },
            { type: "vocabulary_list", data: { titleTk: "Özüňi tanatmak üçin sözler", words: [
              { en: "name", tk: "at", partOfSpeech: "noun", exampleEn: "What is your name?", exampleTk: "Siziň adyňyz näme?" },
              { en: "age", tk: "ýaş", partOfSpeech: "noun", exampleEn: "My age is twenty.", exampleTk: "Meniň ýaşym ýigrimi." },
              { en: "country", tk: "ýurt / döwlet", partOfSpeech: "noun", exampleEn: "I am from Turkmenistan.", exampleTk: "Men Türkmenistandan." },
              { en: "city", tk: "şäher", partOfSpeech: "noun", exampleEn: "I live in Ashgabat.", exampleTk: "Men Aşgabatda ýaşaýaryn." },
              { en: "student", tk: "okuwçy / talypçy", partOfSpeech: "noun", exampleEn: "I am a student.", exampleTk: "Men okuwçy." },
              { en: "teacher", tk: "mugallym", partOfSpeech: "noun", exampleEn: "She is a teacher.", exampleTk: "Ol mugallym." },
            ]}},
            { type: "grammar_note", data: { titleTk: "Grammatika: 'To be' — am / is / are", explanationTk: "'To be' Iňlis diliniň iň möhüm işligidir. I am (Men...), He is (Ol — oglana degişli), She is (Ol — gyza degişli), We/You/They are (Biz/Siz/Olar...). Türkmençedäki '-dyr/-dir' goşulmasyna meňzeşdir.", pattern: "I am / He·She·It is / We·You·They are", examples: [
              { en: "I am from Turkmenistan.", tk: "Men Türkmenistanly." },
              { en: "She is a doctor.", tk: "Ol lukman." },
              { en: "We are students.", tk: "Biz okuwçylar." },
            ]}},
            { type: "example_set", data: { titleTk: "Özüňi tanatmak — mysallar", examples: [
              { en: "Hello! My name is Batyr. I am 22 years old.", tk: "Salam! Meniň adym Batyr. Men 22 ýaşynda." },
              { en: "I am from Turkmenistan. I live in Mary.", tk: "Men Türkmenistanly. Men Maryda ýaşaýaryn." },
              { en: "I am a student. I study English.", tk: "Men okuwçy. Men Iňlis dilini öwrenýärin." },
            ]}},
          ],
        },
      },
    ],
    quiz: {
      titleTk: "1-nji Bölüm Synagy: Salam bermek we tanyşmak",
      questions: [
        { order: 1, questionText: "'Ertiriniz haýyrly' iňlisçe näme?", questionType: "translate_tk_en", options: ["Good evening", "Good afternoon", "Good morning", "Good night"], correctIndex: 2 },
        { order: 2, questionText: "What does 'Nice to meet you' mean?", questionType: "translate_en_tk", options: ["Hoş gal", "Tanşanymyza şat", "Sag boluň", "Nähili ýagdaý?"], correctIndex: 1 },
        { order: 3, questionText: "_____ am a student.", questionType: "multiple_choice_grammar", options: ["He", "She", "I", "They"], correctIndex: 2 },
        { order: 4, questionText: "'Goodbye' Türkmençede näme?", questionType: "translate_en_tk", options: ["Salam", "Hoş irden", "Hoş gal / Sag bol", "Minnetdar"], correctIndex: 2 },
        { order: 5, questionText: "She _____ a teacher.", questionType: "multiple_choice_grammar", options: ["am", "are", "is", "be"], correctIndex: 2 },
        { order: 6, questionText: "My name _____ Merdan.", questionType: "multiple_choice_grammar", options: ["am", "are", "is", "be"], correctIndex: 2 },
        { order: 7, questionText: "'How are you?' Türkmençede näme?", questionType: "translate_en_tk", options: ["Adyňyz näme?", "Nähili ýagdaýyňyz?", "Nähili wagt?", "Nireliden?"], correctIndex: 1 },
        { order: 8, questionText: "We _____ friends.", questionType: "multiple_choice_grammar", options: ["am", "is", "are", "be"], correctIndex: 2 },
        { order: 9, questionText: "'Hoş agşam' iňlisçe näme?", questionType: "translate_tk_en", options: ["Good morning", "Good night", "Good afternoon", "Good evening"], correctIndex: 3 },
        { order: 10, questionText: "I _____ from Turkmenistan.", questionType: "multiple_choice_grammar", options: ["is", "are", "am", "be"], correctIndex: 2 },
      ],
    },
  },

  // ─── UNIT 2: MY FAMILY ──────────────────────────────────────────────────
  {
    unitNumber: 2,
    slug: "beginner-unit-02-family",
    titleEn: "My Family",
    titleTk: "Meniň Maşgalam",
    description: "Bu bölümde maşgala agzalarynyň atlary we eýeçilik çalyşmalary (my, your, his, her) öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "beginner-u02-l01-family-members",
        titleEn: "Family Members",
        titleTk: "Maşgala agzalary",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Maşgala — durmuşyň iň möhüm bölegidir. Bu sapakda ejeňiz, kakaňyz, doganyňyz we beýleki maşgala agzalary üçin ulanylýan Iňlis sözlerini öwrenersiňiz." } },
            { type: "vocabulary_list", data: { titleTk: "Maşgala agzalary", words: [
              { en: "mother / mom", tk: "eje / mama", partOfSpeech: "noun", exampleEn: "My mother is a doctor.", exampleTk: "Meniň ejem lukman." },
              { en: "father / dad", tk: "kaka / baba", partOfSpeech: "noun", exampleEn: "My father works in a bank.", exampleTk: "Meniň kakam bankda işleýär." },
              { en: "brother", tk: "dogan (erkek)", partOfSpeech: "noun", exampleEn: "I have one brother.", exampleTk: "Meniň bir doganym bar." },
              { en: "sister", tk: "uýa / gyz dogan", partOfSpeech: "noun", exampleEn: "My sister is fifteen.", exampleTk: "Meniň uýam on bäş ýaşynda." },
              { en: "grandmother", tk: "mama / ene", partOfSpeech: "noun", exampleEn: "My grandmother cooks very well.", exampleTk: "Meniň mamam gaty gowy nahar bişirýär." },
              { en: "grandfather", tk: "baba / ata", partOfSpeech: "noun", exampleEn: "My grandfather is seventy years old.", exampleTk: "Meniň babam ýetmiş ýaşynda." },
              { en: "son", tk: "ogul", partOfSpeech: "noun", exampleEn: "He has two sons.", exampleTk: "Onuň iki ogly bar." },
              { en: "daughter", tk: "gyz (çaga)", partOfSpeech: "noun", exampleEn: "Their daughter is very clever.", exampleTk: "Olaryň gyzlary gaty akyllydyr." },
            ]}},
            { type: "dialogue", data: { titleTk: "Söhbetdeşlik: Maşgala barada", exchanges: [
              { speakerEn: "Leýla", lineEn: "Merdan, do you have a big family?", lineTk: "Merdan, seniň maşgalaň ulamy?" },
              { speakerEn: "Merdan", lineEn: "Yes! I have a mother, a father, and two sisters.", lineTk: "Hawa! Meniň ejim, kakam we iki uýam bar." },
              { speakerEn: "Leýla", lineEn: "How old are your sisters?", lineTk: "Uýalaryňyz näçe ýaşynda?" },
              { speakerEn: "Merdan", lineEn: "One is fourteen and the other is twenty.", lineTk: "Biri on dört, beýlekisi ýigrimi ýaşynda." },
            ]}},
            { type: "grammar_note", data: { titleTk: "Grammatika: Köplük sany (Plural)", explanationTk: "Iňlis dilinde köplük san adyň soňuna '-s' ýa-da '-es' goşmak bilen emele gelýär. 'Child' düzgünsiz köplük — 'children'. 'Family' → 'families' (y → ies).", pattern: "brother → brothers | sister → sisters | child → children", examples: [
              { en: "one brother → two brothers", tk: "bir dogan → iki dogan" },
              { en: "one child → many children", tk: "bir çaga → köp çaga" },
            ]}},
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "beginner-u02-l02-possessives",
        titleEn: "Possessive Pronouns",
        titleTk: "Eýeçilik çalyşmalary",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Eýeçilik çalyşmalary bir zadyň kime degişlidigini görkezýär. 'Meniň' — my, 'Seniň' — your, 'Onuň (erkek)' — his, 'Onuň (aýal)' — her. Bu sözler hemişe atdan öň gelýär." } },
            { type: "grammar_note", data: { titleTk: "Grammatika: my / your / his / her / our / their", explanationTk: "Iňlis dilinde eýeçilik çalyşmalary hemişe atdan öň gelýär we üýtgemeýär. Türkmençedäki goşulma ulgamyndan tapawutlylykda, Iňlisçede aýry sözdür.", pattern: "my | your | his | her | our | their + [at]", examples: [
              { en: "my mother", tk: "meniň ejem" },
              { en: "his brother", tk: "onuň dogany (erkek)" },
              { en: "their family", tk: "olaryň maşgalasy" },
            ]}},
            { type: "example_set", data: { titleTk: "Mysallar", examples: [
              { en: "My name is Batyr and my sister's name is Maral.", tk: "Meniň adym Batyr we meniň uýamyň ady Maral." },
              { en: "Her mother is a teacher. His father is an engineer.", tk: "Onuň ejesi mugallym. Onuň kakasy inžener." },
              { en: "Our house is big. Their car is new.", tk: "Biziň öýümiz uly. Olaryň awtoulagy täze." },
            ]}},
          ],
        },
      },
    ],
    quiz: {
      titleTk: "2-nji Bölüm Synagy: Meniň Maşgalam",
      questions: [
        { order: 1, questionText: "'Gyz dogan' iňlisçe näme?", questionType: "translate_tk_en", options: ["brother", "daughter", "sister", "mother"], correctIndex: 2 },
        { order: 2, questionText: "_____ mother is a nurse. (Onuň — aýal)", questionType: "multiple_choice_grammar", options: ["My", "His", "Her", "Our"], correctIndex: 2 },
        { order: 3, questionText: "'Grandfather' Türkmençede näme?", questionType: "translate_en_tk", options: ["Eje", "Kaka", "Mama", "Baba / ata"], correctIndex: 3 },
        { order: 4, questionText: "I have two _____ (sister — köplük)", questionType: "multiple_choice_grammar", options: ["sister", "sisters", "sisteres", "sistern"], correctIndex: 1 },
        { order: 5, questionText: "_____ name is Merdan. (Men)", questionType: "multiple_choice_grammar", options: ["His", "Her", "My", "Your"], correctIndex: 2 },
        { order: 6, questionText: "'Ogul' iňlisçe näme?", questionType: "translate_tk_en", options: ["daughter", "son", "brother", "father"], correctIndex: 1 },
        { order: 7, questionText: "_____ family is big. (Olaryň)", questionType: "multiple_choice_grammar", options: ["My", "Our", "Their", "Her"], correctIndex: 2 },
        { order: 8, questionText: "one child → many _____", questionType: "multiple_choice_grammar", options: ["childs", "childes", "children", "child"], correctIndex: 2 },
        { order: 9, questionText: "_____ father is a doctor. (Biziň)", questionType: "multiple_choice_grammar", options: ["My", "Their", "Our", "His"], correctIndex: 2 },
        { order: 10, questionText: "'Eje' iňlisçe näme?", questionType: "translate_tk_en", options: ["sister", "grandmother", "mother", "daughter"], correctIndex: 2 },
      ],
    },
  },

  // ─── UNIT 3: NUMBERS & COLOURS ──────────────────────────────────────────
  {
    unitNumber: 3,
    slug: "beginner-unit-03-numbers",
    titleEn: "Numbers & Colours",
    titleTk: "Sanlar we Reňkler",
    description: "Bu bölümde 1-den 100-e çenli sanlar we reňkleriň Iňlis atlary öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "beginner-u03-l01-numbers",
        titleEn: "Numbers 1–100",
        titleTk: "Sanlar 1–100",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Sanlar Iňlis dilinde gündelik durmuşda hemişe ulanylýar — nyrhlary, telefon belgilerini, ýaşy aýtmakda. Bu sapakda 1-den 100-e çenli esasy sanlary öwrenersiňiz." } },
            { type: "vocabulary_list", data: { titleTk: "Esasy sanlar", words: [
              { en: "one, two, three", tk: "bir, iki, üç", partOfSpeech: "noun" },
              { en: "four, five, six", tk: "dört, bäş, alty", partOfSpeech: "noun" },
              { en: "seven, eight, nine, ten", tk: "ýedi, sekiz, dokuz, on", partOfSpeech: "noun", exampleEn: "I have ten fingers.", exampleTk: "Meniň on barmagym bar." },
              { en: "twenty", tk: "ýigrimi", partOfSpeech: "noun", exampleEn: "She is twenty years old.", exampleTk: "Ol ýigrimi ýaşynda." },
              { en: "thirty / forty / fifty", tk: "otuz / kyrk / elli", partOfSpeech: "noun" },
              { en: "one hundred", tk: "ýüz", partOfSpeech: "noun", exampleEn: "One hundred percent correct!", exampleTk: "Ýüz göterim dogry!" },
            ]}},
            { type: "grammar_note", data: { titleTk: "Grammatika: How old are you?", explanationTk: "Ýaş soramak üçin 'How old are you?' diýilýär. Jogabyňyz: 'I am [san] years old.' 13-den 19-a çenli sanlar '-teen' goşulmasy bilen: thirteen (13), fourteen (14), fifteen (15), sixteen (16), seventeen (17), eighteen (18), nineteen (19).", pattern: "How old are you? — I am [san] years old.", examples: [
              { en: "I am twenty-five years old.", tk: "Men ýigrimi bäş ýaşynda." },
              { en: "She is thirty-two.", tk: "Ol otuz iki ýaşynda." },
            ]}},
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "beginner-u03-l02-colours",
        titleEn: "Colours",
        titleTk: "Reňkler",
        content: {
          blocks: [
            { type: "vocabulary_list", data: { titleTk: "Reňkler", words: [
              { en: "red", tk: "gyzyl", partOfSpeech: "adjective", exampleEn: "The apple is red.", exampleTk: "Alma gyzyl." },
              { en: "blue", tk: "gök / mawy", partOfSpeech: "adjective", exampleEn: "The sky is blue.", exampleTk: "Asman gök." },
              { en: "green", tk: "ýaşyl", partOfSpeech: "adjective", exampleEn: "The grass is green.", exampleTk: "Ot ýaşyl." },
              { en: "yellow", tk: "sary", partOfSpeech: "adjective", exampleEn: "The sun is yellow.", exampleTk: "Gün sary." },
              { en: "white", tk: "ak", partOfSpeech: "adjective", exampleEn: "Snow is white.", exampleTk: "Gar ak." },
              { en: "black", tk: "gara", partOfSpeech: "adjective", exampleEn: "The night is black.", exampleTk: "Gije gara." },
              { en: "orange", tk: "mämişi / narynç", partOfSpeech: "adjective", exampleEn: "The orange is orange.", exampleTk: "Mämişi mämişi reňkde." },
              { en: "pink", tk: "gülgüne", partOfSpeech: "adjective", exampleEn: "Her dress is pink.", exampleTk: "Onuň köýnegi gülgüne." },
            ]}},
            { type: "grammar_note", data: { titleTk: "Grammatika: How many? / How much?", explanationTk: "'How many?' — sanap bolýan zatlar üçin (how many books). 'How much?' — sanap bolmaýan zatlar ýa-da nyrh soralanda (how much water, how much is it?).", pattern: "How many + [sanap bolýan at]? / How much + [sanap bolmaýan at]?", examples: [
              { en: "How many sisters do you have?", tk: "Seniň näçe uýaň bar?" },
              { en: "How much is this shirt?", tk: "Bu köýnek näçe?" },
            ]}},
            { type: "dialogue", data: { titleTk: "Söhbetdeşlik: Reňkler barada", exchanges: [
              { speakerEn: "Maral", lineEn: "What is your favourite colour?", lineTk: "Seniň söýgüli reňkiň näme?" },
              { speakerEn: "Kerim", lineEn: "My favourite colour is blue. What about you?", lineTk: "Meniň söýgüli reňkim gök. Seniňki?" },
              { speakerEn: "Maral", lineEn: "I love green! Green is the colour of nature.", lineTk: "Men ýaşyly halaýaryn! Ýaşyl — tebigatyň reňki." },
            ]}},
          ],
        },
      },
    ],
    quiz: {
      titleTk: "3-nji Bölüm Synagy: Sanlar we Reňkler",
      questions: [
        { order: 1, questionText: "'Ýigrimi bäş' iňlisçe näme?", questionType: "translate_tk_en", options: ["fifty-two", "twenty-five", "fifteen", "thirty-five"], correctIndex: 1 },
        { order: 2, questionText: "What colour is the sky?", questionType: "translate_en_tk", options: ["Gyzyl", "Sary", "Gök / Mawy", "Ýaşyl"], correctIndex: 2 },
        { order: 3, questionText: "How _____ books do you have?", questionType: "multiple_choice_grammar", options: ["much", "many", "old", "long"], correctIndex: 1 },
        { order: 4, questionText: "'Gyzyl' iňlisçe näme?", questionType: "translate_tk_en", options: ["green", "yellow", "blue", "red"], correctIndex: 3 },
        { order: 5, questionText: "How _____ is the ticket?", questionType: "multiple_choice_grammar", options: ["many", "old", "much", "long"], correctIndex: 2 },
        { order: 6, questionText: "'Forty' Türkmençede näme?", questionType: "translate_en_tk", options: ["Otuz", "Elli", "Altmyş", "Kyrk"], correctIndex: 3 },
        { order: 7, questionText: "'Ak' iňlisçe näme?", questionType: "translate_tk_en", options: ["black", "white", "grey", "brown"], correctIndex: 1 },
        { order: 8, questionText: "13 iňlisçe näme?", questionType: "translate_tk_en", options: ["thirty", "twelve", "thirteen", "fourteen"], correctIndex: 2 },
        { order: 9, questionText: "'Yellow' Türkmençede näme?", questionType: "translate_en_tk", options: ["Gök", "Gyzyl", "Sary", "Ýaşyl"], correctIndex: 2 },
        { order: 10, questionText: "'Ýüz' iňlisçe näme?", questionType: "translate_tk_en", options: ["ten", "a thousand", "one hundred", "fifty"], correctIndex: 2 },
      ],
    },
  },

  // ─── UNIT 4: DAILY LIFE ─────────────────────────────────────────────────
  {
    unitNumber: 4,
    slug: "beginner-unit-04-daily-life",
    titleEn: "A Typical Day",
    titleTk: "Adaty Gün",
    description: "Bu bölümde gündelik işleri Iňlisçe nädip aýtmaly we häzirki zaman ýönekeý kadasy öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "beginner-u04-l01-daily-routines",
        titleEn: "Daily Routines",
        titleTk: "Gündelik işler",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Gündelik işleri aýtmak üçin 'häzirki zaman ýönekeý' (simple present tense) ulanylýar. Bu zaman her gün bolýan işleri we endikleri beýan etmek üçin ulanylýar." } },
            { type: "vocabulary_list", data: { titleTk: "Gündelik işleriň işlikleri", words: [
              { en: "wake up", tk: "oýanmak", partOfSpeech: "verb", exampleEn: "I wake up at 7 o'clock.", exampleTk: "Men sagat 7-de oýanýaryn." },
              { en: "eat breakfast", tk: "ertirlik iýmek", partOfSpeech: "verb", exampleEn: "She eats breakfast at 8.", exampleTk: "Ol sagat 8-de ertirlik iýýär." },
              { en: "go to school", tk: "mekdebe gitmek", partOfSpeech: "verb", exampleEn: "He goes to school every day.", exampleTk: "Ol her gün mekdebe gidýär." },
              { en: "study", tk: "okamak / öwrenmek", partOfSpeech: "verb", exampleEn: "We study English together.", exampleTk: "Biz bile Iňlis dilini öwrenýäris." },
              { en: "come home", tk: "öýe gelmek", partOfSpeech: "verb", exampleEn: "She comes home at 5 pm.", exampleTk: "Ol öýüne sagat 5-de gelýär." },
              { en: "sleep", tk: "ýatmak", partOfSpeech: "verb", exampleEn: "I sleep at 10 pm.", exampleTk: "Men sagat 10-da ýatýaryn." },
            ]}},
            { type: "grammar_note", data: { titleTk: "Grammatika: Simple Present", explanationTk: "Simple Present zaman endik we yzygiderli hereketler üçin ulanylýar. He/She/It bilen işligiň soňuna '-s' ýa-da '-es' goşulýar. I/We/You/They bilen işlik özgermez.", pattern: "I/We/You/They + işlik | He/She/It + işlik + -s", examples: [
              { en: "I wake up early.", tk: "Men ir oýanýaryn." },
              { en: "She wakes up at 6.", tk: "Ol sagat 6-da oýanýar." },
            ]}},
            { type: "dialogue", data: { titleTk: "Söhbetdeşlik: Gündelik tertip", exchanges: [
              { speakerEn: "Gurban", lineEn: "Ogulgerek, what time do you wake up?", lineTk: "Ogulgerek, sen näçede oýanýarsyň?" },
              { speakerEn: "Ogulgerek", lineEn: "I wake up at six thirty. And you?", lineTk: "Men alty ýarymda oýanýaryn. Sen nähili?" },
              { speakerEn: "Gurban", lineEn: "I wake up at seven. I eat breakfast and go to work.", lineTk: "Men ýedide oýanýaryn. Ertirlik iýip, işe gidýärin." },
            ]}},
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "beginner-u04-l02-frequency",
        titleEn: "Adverbs of Frequency",
        titleTk: "Ýygylygy aňladýan sözler",
        content: {
          blocks: [
            { type: "vocabulary_list", data: { titleTk: "Ýygylygy aňladýan sözler", words: [
              { en: "always", tk: "hemişe", partOfSpeech: "adverb", exampleEn: "I always brush my teeth.", exampleTk: "Men hemişe dişlerimi arassalaýaryn." },
              { en: "usually", tk: "köplenç / adatça", partOfSpeech: "adverb", exampleEn: "She usually drinks tea.", exampleTk: "Ol köplenç çaý içýär." },
              { en: "sometimes", tk: "käwagt", partOfSpeech: "adverb", exampleEn: "I sometimes read books.", exampleTk: "Men käwagt kitap okäýaryn." },
              { en: "rarely", tk: "seýrek", partOfSpeech: "adverb", exampleEn: "He rarely eats fast food.", exampleTk: "Ol seýrek çalt nahar iýýär." },
              { en: "never", tk: "asla / hiç wagt", partOfSpeech: "adverb", exampleEn: "I never smoke.", exampleTk: "Men asla çilim çekmärin." },
              { en: "every day", tk: "her gün", partOfSpeech: "adverb", exampleEn: "I study every day.", exampleTk: "Men her gün okäýaryn." },
            ]}},
            { type: "grammar_note", data: { titleTk: "Grammatika: Ýygylygy aňladýan sözleriň ýeri", explanationTk: "Bu sözler adatça işlikden öň gelýär. 'To be' işligi bilen bolsa, işlikden soňra gelýär.", pattern: "I [always/usually/sometimes] + işlik", examples: [
              { en: "I always eat breakfast.", tk: "Men hemişe ertirlik iýýärin." },
              { en: "She is never late.", tk: "Ol asla giç galmaýar." },
            ]}},
          ],
        },
      },
    ],
    quiz: {
      titleTk: "4-nji Bölüm Synagy: Adaty Gün",
      questions: [
        { order: 1, questionText: "She _____ to school every day.", questionType: "multiple_choice_grammar", options: ["go", "gos", "goes", "going"], correctIndex: 2 },
        { order: 2, questionText: "'Hemişe' iňlisçe näme?", questionType: "translate_tk_en", options: ["never", "sometimes", "always", "rarely"], correctIndex: 2 },
        { order: 3, questionText: "I _____ breakfast at 7 am.", questionType: "multiple_choice_grammar", options: ["eats", "eating", "eat", "ate"], correctIndex: 2 },
        { order: 4, questionText: "'Oýanmak' iňlisçe näme?", questionType: "translate_tk_en", options: ["sleep", "wake up", "eat", "study"], correctIndex: 1 },
        { order: 5, questionText: "He _____ never late.", questionType: "multiple_choice_grammar", options: ["am", "are", "is", "be"], correctIndex: 2 },
        { order: 6, questionText: "'Sometimes' Türkmençede näme?", questionType: "translate_en_tk", options: ["Hemişe", "Seýrek", "Käwagt", "Hiç wagt"], correctIndex: 2 },
        { order: 7, questionText: "'Ýatmak' iňlisçe näme?", questionType: "translate_tk_en", options: ["study", "sleep", "eat", "run"], correctIndex: 1 },
        { order: 8, questionText: "She usually _____ tea in the morning.", questionType: "multiple_choice_grammar", options: ["drink", "drinks", "drinking", "drank"], correctIndex: 1 },
        { order: 9, questionText: "'Never' Türkmençede näme?", questionType: "translate_en_tk", options: ["Hemişe", "Käwagt", "Asla / hiç wagt", "Her gün"], correctIndex: 2 },
        { order: 10, questionText: "They _____ English every day.", questionType: "multiple_choice_grammar", options: ["studies", "studys", "study", "studying"], correctIndex: 2 },
      ],
    },
  },

  // ─── UNIT 5: FOOD & DRINK ──────────────────────────────────────────────
  {
    unitNumber: 5,
    slug: "beginner-unit-05-food",
    titleEn: "Food & Drink",
    titleTk: "Iýmit we Içgi",
    description: "Bu bölümde iýmit we içgi adlary, restoranda sargamak we 'would like' gurluşy öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "beginner-u05-l01-food-vocab",
        titleEn: "Food and Drinks",
        titleTk: "Iýmit we içgiler",
        content: {
          blocks: [
            { type: "vocabulary_list", data: { titleTk: "Iýmit we içgiler", words: [
              { en: "bread", tk: "çörek", partOfSpeech: "noun", exampleEn: "I eat bread every morning.", exampleTk: "Men her irden çörek iýýärin." },
              { en: "rice", tk: "tüwi / bürünç", partOfSpeech: "noun", exampleEn: "We eat rice for lunch.", exampleTk: "Biz günortanlyk tüwi iýýäris." },
              { en: "meat", tk: "et", partOfSpeech: "noun", exampleEn: "He likes chicken meat.", exampleTk: "Ol towuk etini halaýar." },
              { en: "water", tk: "suw", partOfSpeech: "noun", exampleEn: "Drink more water!", exampleTk: "Has köp suw iç!" },
              { en: "tea", tk: "çaý", partOfSpeech: "noun", exampleEn: "Would you like some tea?", exampleTk: "Çaý içmek isleýärsiňizmi?" },
              { en: "milk", tk: "süýt", partOfSpeech: "noun", exampleEn: "Children drink milk.", exampleTk: "Çagalar süýt içýärler." },
              { en: "fruit", tk: "miweler", partOfSpeech: "noun", exampleEn: "I love fresh fruit.", exampleTk: "Men täze miweleri halaýaryn." },
              { en: "vegetables", tk: "gök önümler", partOfSpeech: "noun", exampleEn: "Vegetables are healthy.", exampleTk: "Gök önümler sagdyn." },
            ]}},
            { type: "dialogue", data: { titleTk: "Söhbetdeşlik: Restoranda", exchanges: [
              { speakerEn: "Waiter", lineEn: "Good evening! What would you like?", lineTk: "Hoş agşam! Näme isleýärsiňiz?" },
              { speakerEn: "Aýgül", lineEn: "I would like rice and chicken, please.", lineTk: "Maňa tüwi we towuk beriň, haýyş." },
              { speakerEn: "Waiter", lineEn: "And to drink?", lineTk: "Näme içersiňiz?" },
              { speakerEn: "Aýgül", lineEn: "I would like a glass of water, please.", lineTk: "Bir bulgur suw beriň, haýyş." },
            ]}},
            { type: "grammar_note", data: { titleTk: "Grammatika: 'Would like'", explanationTk: "'Would like' — islemek (sypaýy görnüş). 'I'd like' — gysgaldylan görnüşi. 'Would like + at' ýa-da 'Would like to + işlik'.", pattern: "I'd like + [at] / + to + [işlik]", examples: [
              { en: "I'd like a coffee, please.", tk: "Maňa bir kofe beriň, haýyş." },
              { en: "Would you like some tea?", tk: "Siz çaý isleýärsiňizmi?" },
            ]}},
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "beginner-u05-l02-countable",
        titleEn: "Countable and Uncountable Nouns",
        titleTk: "Sanap bolýan we bolmaýan atlar",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Iňlis dilinde atlar iki topara bölünýär: sanap bolýanlar (apples, books) we sanap bolmaýanlar (water, sugar, milk). Bu tapawut 'some', 'any', 'a/an' ulanmakda möhümdir." } },
            { type: "grammar_note", data: { titleTk: "Grammatika: Some / Any / A / An", explanationTk: "'A/an' diňe sanap bolýan atlar bilen ulanylýar (a banana, an apple). 'Some' oňaý jümlelerde ulanylýar. 'Any' sorag we inkär jümlelerde ulanylýar.", pattern: "a/an + [sanap bolýan at] | some/any + [islendik at]", examples: [
              { en: "I want an apple.", tk: "Men bir alma isleýärin." },
              { en: "Do you have any sugar?", tk: "Sizde şeker barmy?" },
              { en: "I'd like some rice please.", tk: "Maňa biraz tüwi beriň, haýyş." },
            ]}},
          ],
        },
      },
    ],
    quiz: {
      titleTk: "5-nji Bölüm Synagy: Iýmit we Içgi",
      questions: [
        { order: 1, questionText: "'Çörek' iňlisçe näme?", questionType: "translate_tk_en", options: ["rice", "meat", "bread", "milk"], correctIndex: 2 },
        { order: 2, questionText: "I _____ like a cup of tea.", questionType: "multiple_choice_grammar", options: ["want", "would", "am", "do"], correctIndex: 1 },
        { order: 3, questionText: "'Would you like some tea?' Türkmençede näme?", questionType: "translate_en_tk", options: ["Çaýy halaýarsyňyzmy?", "Çaý içmek isleýärsiňizmi?", "Çaýy barmy?", "Çaý nähili?"], correctIndex: 1 },
        { order: 4, questionText: "Do you have _____ bread?", questionType: "multiple_choice_grammar", options: ["a", "an", "some", "any"], correctIndex: 3 },
        { order: 5, questionText: "'Miweler' iňlisçe näme?", questionType: "translate_tk_en", options: ["vegetables", "fruit", "meat", "rice"], correctIndex: 1 },
        { order: 6, questionText: "I'd like _____ apple, please.", questionType: "multiple_choice_grammar", options: ["some", "any", "an", "the"], correctIndex: 2 },
        { order: 7, questionText: "'Gök önümler' iňlisçe näme?", questionType: "translate_tk_en", options: ["meat", "vegetables", "fruit", "bread"], correctIndex: 1 },
        { order: 8, questionText: "She would like _____ milk.", questionType: "multiple_choice_grammar", options: ["a", "an", "any", "some"], correctIndex: 3 },
        { order: 9, questionText: "'Water' Türkmençede näme?", questionType: "translate_en_tk", options: ["Çaý", "Süýt", "Suw", "Nahar"], correctIndex: 2 },
        { order: 10, questionText: "'Süýt' iňlisçe näme?", questionType: "translate_tk_en", options: ["juice", "water", "tea", "milk"], correctIndex: 3 },
      ],
    },
  },

  // ─── UNIT 6: MY HOME ───────────────────────────────────────────────────
  {
    unitNumber: 6,
    slug: "beginner-unit-06-home",
    titleEn: "My Home",
    titleTk: "Meniň Öýüm",
    description: "Bu bölümde öýüň odalary, mebeller we ýer goşulgalary öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "beginner-u06-l01-rooms",
        titleEn: "Rooms and Furniture",
        titleTk: "Odalar we Mebel",
        content: {
          blocks: [
            { type: "vocabulary_list", data: { titleTk: "Öýüň odalary", words: [
              { en: "bedroom", tk: "ýatylýan otag", partOfSpeech: "noun", exampleEn: "My bedroom is upstairs.", exampleTk: "Meniň ýatylýan otagym ýokarda." },
              { en: "kitchen", tk: "aşhana", partOfSpeech: "noun", exampleEn: "My mother cooks in the kitchen.", exampleTk: "Meniň ejem aşhanada nahar bişirýär." },
              { en: "living room", tk: "myhmanhana", partOfSpeech: "noun", exampleEn: "We watch TV in the living room.", exampleTk: "Biz myhmanhanda telewizor görýäris." },
              { en: "bathroom", tk: "hammam", partOfSpeech: "noun", exampleEn: "There is one bathroom in our flat.", exampleTk: "Biziň öýümizde bir hammam bar." },
              { en: "table", tk: "stol / saçak", partOfSpeech: "noun", exampleEn: "The book is on the table.", exampleTk: "Kitap stolda." },
              { en: "chair", tk: "oturgyç / kürsü", partOfSpeech: "noun", exampleEn: "Sit on the chair please.", exampleTk: "Oturgyjda oturyň, haýyş." },
              { en: "bed", tk: "düşek / ýatak", partOfSpeech: "noun", exampleEn: "My bed is very comfortable.", exampleTk: "Meniň ýatagym gaty amatly." },
              { en: "window", tk: "penjire", partOfSpeech: "noun", exampleEn: "Open the window, please.", exampleTk: "Penjireni açyň, haýyş." },
            ]}},
            { type: "grammar_note", data: { titleTk: "Grammatika: There is / There are", explanationTk: "'There is' birlik san bilen, 'There are' köplük san bilen ulanylýar. Sorag: 'Is there...?' / 'Are there...?'. Inkär: 'There isn't' / 'There aren't'.", pattern: "There is a [at]. / There are [köplük at].", examples: [
              { en: "There is a big table in the kitchen.", tk: "Aşhanada uly bir stol bar." },
              { en: "There are three bedrooms.", tk: "Üç sany ýatylýan otag bar." },
              { en: "Is there a bathroom here?", tk: "Bu ýerde hammam barmy?" },
            ]}},
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "beginner-u06-l02-prepositions",
        titleEn: "Prepositions of Place",
        titleTk: "Ýer goşulgalary",
        content: {
          blocks: [
            { type: "vocabulary_list", data: { titleTk: "Ýer goşulgalary", words: [
              { en: "in", tk: "içinde", partOfSpeech: "preposition", exampleEn: "The cat is in the box.", exampleTk: "Pişik gutynyň içinde." },
              { en: "on", tk: "üstünde", partOfSpeech: "preposition", exampleEn: "The book is on the table.", exampleTk: "Kitap stolun üstünde." },
              { en: "under", tk: "aşagynda", partOfSpeech: "preposition", exampleEn: "The shoes are under the bed.", exampleTk: "Aýakgaplar düşegiň aşagynda." },
              { en: "next to", tk: "ýanynda / gapdalynda", partOfSpeech: "preposition", exampleEn: "The lamp is next to the bed.", exampleTk: "Çyra düşegiň ýanynda." },
              { en: "between", tk: "arasynda", partOfSpeech: "preposition", exampleEn: "The cat is between the chairs.", exampleTk: "Pişik oturgyçlaryň arasynda." },
              { en: "behind", tk: "arkasynda", partOfSpeech: "preposition", exampleEn: "The garden is behind the house.", exampleTk: "Bagçe öýüň arkasynda." },
            ]}},
            { type: "dialogue", data: { titleTk: "Söhbetdeşlik: Zat nira?", exchanges: [
              { speakerEn: "Maral", lineEn: "Kerim, where is my phone?", lineTk: "Kerim, meniň telefonim nirede?" },
              { speakerEn: "Kerim", lineEn: "Is it on the table?", lineTk: "Stolun üstündemi?" },
              { speakerEn: "Maral", lineEn: "No, it's not there.", lineTk: "Ýok, ol şol ýerde däl." },
              { speakerEn: "Kerim", lineEn: "Maybe it's under the chair?", lineTk: "Belki oturgyjyň aşagyndadyr?" },
              { speakerEn: "Maral", lineEn: "Yes! Thank you!", lineTk: "Hawa! Sag bol!" },
            ]}},
          ],
        },
      },
    ],
    quiz: {
      titleTk: "6-njy Bölüm Synagy: Meniň Öýüm",
      questions: [
        { order: 1, questionText: "'Aşhana' iňlisçe näme?", questionType: "translate_tk_en", options: ["bedroom", "bathroom", "kitchen", "living room"], correctIndex: 2 },
        { order: 2, questionText: "There _____ a table in the kitchen.", questionType: "multiple_choice_grammar", options: ["are", "am", "is", "be"], correctIndex: 2 },
        { order: 3, questionText: "The cat is _____ the box. (içinde)", questionType: "multiple_choice_grammar", options: ["on", "under", "in", "next to"], correctIndex: 2 },
        { order: 4, questionText: "'Penjire' iňlisçe näme?", questionType: "translate_tk_en", options: ["door", "floor", "ceiling", "window"], correctIndex: 3 },
        { order: 5, questionText: "There _____ three chairs here.", questionType: "multiple_choice_grammar", options: ["is", "am", "are", "be"], correctIndex: 2 },
        { order: 6, questionText: "'Under' Türkmençede näme?", questionType: "translate_en_tk", options: ["Üstünde", "İçinde", "Aşagynda", "Ýanynda"], correctIndex: 2 },
        { order: 7, questionText: "The book is _____ the table. (üstünde)", questionType: "multiple_choice_grammar", options: ["in", "on", "under", "behind"], correctIndex: 1 },
        { order: 8, questionText: "'Bedroom' Türkmençede näme?", questionType: "translate_en_tk", options: ["Aşhana", "Ýatylýan otag", "Hammam", "Myhmanhana"], correctIndex: 1 },
        { order: 9, questionText: "Is there _____ bathroom here?", questionType: "multiple_choice_grammar", options: ["some", "a", "an", "any"], correctIndex: 1 },
        { order: 10, questionText: "'Arasynda' iňlisçe näme?", questionType: "translate_tk_en", options: ["behind", "next to", "between", "under"], correctIndex: 2 },
      ],
    },
  },

  // ─── UNIT 7: TIME ──────────────────────────────────────────────────────
  {
    unitNumber: 7,
    slug: "beginner-unit-07-time",
    titleEn: "Telling the Time",
    titleTk: "Wagty aýtmak",
    description: "Bu bölümde sagadyň wagtyny Iňlisçe aýtmak öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "beginner-u07-l01-clock",
        titleEn: "What Time Is It?",
        titleTk: "Sagat näçe?",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Wagtlary Iňlisçe aýtmakda birnäçe usul bar. Iň ýönekeý usul: sagady göni aýtmak (it's six thirty). Has resmi usulda 'o'clock', 'half past', 'quarter to/past' ulanylýar." } },
            { type: "vocabulary_list", data: { titleTk: "Wagt sözlügi", words: [
              { en: "o'clock", tk: "sagat (doly)", partOfSpeech: "noun", exampleEn: "It's three o'clock.", exampleTk: "Sagat üç." },
              { en: "half past", tk: "ýarym geçen", partOfSpeech: "noun", exampleEn: "It's half past four. (4:30)", exampleTk: "Sagat dört ýarym." },
              { en: "quarter past", tk: "çärýek geçen", partOfSpeech: "noun", exampleEn: "It's quarter past two. (2:15)", exampleTk: "Sagat iki çärýek geçen." },
              { en: "quarter to", tk: "çärýek galanda", partOfSpeech: "noun", exampleEn: "It's quarter to five. (4:45)", exampleTk: "Sagat bäşe çärýek galanda." },
              { en: "noon / midnight", tk: "günorta / ýarygije", partOfSpeech: "noun", exampleEn: "We eat lunch at noon.", exampleTk: "Biz günortan nahar iýýäris." },
            ]}},
            { type: "example_set", data: { titleTk: "Sagady aýtmak — mysallar", examples: [
              { en: "It's seven o'clock. (7:00)", tk: "Sagat ýedi." },
              { en: "It's half past nine. (9:30)", tk: "Sagat dokuz ýarym." },
              { en: "It's quarter to three. (2:45)", tk: "Sagat üçe çärýek galanda." },
            ]}},
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "beginner-u07-l02-schedule",
        titleEn: "Daily Schedule",
        titleTk: "Gündelik Tertip",
        content: {
          blocks: [
            { type: "dialogue", data: { titleTk: "Söhbetdeşlik: Iş tertibi", exchanges: [
              { speakerEn: "Batyr", lineEn: "What time do you start work?", lineTk: "Sen işi haçan başlaýarsyň?" },
              { speakerEn: "Leýla", lineEn: "I start at nine o'clock in the morning.", lineTk: "Men işi irden sagat dokuzda başlaýaryn." },
              { speakerEn: "Batyr", lineEn: "And what time do you finish?", lineTk: "Haçan gutarýarsyň?" },
              { speakerEn: "Leýla", lineEn: "I finish at half past five.", lineTk: "Men bäş ýarymda gutarýaryn." },
            ]}},
            { type: "grammar_note", data: { titleTk: "Grammatika: 'at' we wagt", explanationTk: "Takyk wagty aýtmakda 'at' ulanylýar. Günüň bölekleri üçin: 'in the morning', 'in the afternoon', 'in the evening', 'at night'.", pattern: "at + [sagat] | in the morning / afternoon / evening", examples: [
              { en: "I wake up at 6 am.", tk: "Men sagat 6-da oýanýaryn." },
              { en: "She works in the morning.", tk: "Ol irden işleýär." },
            ]}},
          ],
        },
      },
    ],
    quiz: {
      titleTk: "7-nji Bölüm Synagy: Wagty aýtmak",
      questions: [
        { order: 1, questionText: "'Sagat dört ýarym' iňlisçe? (4:30)", questionType: "translate_tk_en", options: ["quarter past four", "half past four", "four o'clock", "quarter to four"], correctIndex: 1 },
        { order: 2, questionText: "It's 3:00 — this is...?", questionType: "multiple_choice_grammar", options: ["half past three", "quarter past three", "three o'clock", "quarter to three"], correctIndex: 2 },
        { order: 3, questionText: "The class starts _____ 8 am.", questionType: "multiple_choice_grammar", options: ["in", "on", "at", "to"], correctIndex: 2 },
        { order: 4, questionText: "'Quarter to five' (4:45) Türkmençede?", questionType: "translate_en_tk", options: ["Sagat bäş", "Sagat dört ýarym", "Sagat bäşe çärýek galanda", "Sagat bäş çärýek geçen"], correctIndex: 2 },
        { order: 5, questionText: "I drink tea _____ the morning.", questionType: "multiple_choice_grammar", options: ["at", "on", "in", "to"], correctIndex: 2 },
        { order: 6, questionText: "It's 9:30 — this is...?", questionType: "multiple_choice_grammar", options: ["quarter past nine", "nine o'clock", "half past nine", "quarter to nine"], correctIndex: 2 },
        { order: 7, questionText: "'Günorta' iňlisçe näme?", questionType: "translate_tk_en", options: ["midnight", "morning", "noon", "evening"], correctIndex: 2 },
        { order: 8, questionText: "'O'clock' Türkmençede näme?", questionType: "translate_en_tk", options: ["ýarym", "çärýek", "sagat (doly san)", "minut"], correctIndex: 2 },
        { order: 9, questionText: "She finishes work _____ half past five.", questionType: "multiple_choice_grammar", options: ["in", "on", "at", "by"], correctIndex: 2 },
        { order: 10, questionText: "It's 2:15 — this is...?", questionType: "multiple_choice_grammar", options: ["half past two", "quarter past two", "quarter to two", "two o'clock"], correctIndex: 1 },
      ],
    },
  },

  // ─── UNIT 8: WEATHER ───────────────────────────────────────────────────
  {
    unitNumber: 8,
    slug: "beginner-unit-08-weather",
    titleEn: "The Weather",
    titleTk: "Howa",
    description: "Bu bölümde howa ýagdaýyny beýan etmek we häzirki zaman dowamly (present continuous) öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "beginner-u08-l01-weather",
        titleEn: "Weather Expressions",
        titleTk: "Howa barada jümleler",
        content: {
          blocks: [
            { type: "vocabulary_list", data: { titleTk: "Howa sözlügi", words: [
              { en: "sunny", tk: "günli / güneşli", partOfSpeech: "adjective", exampleEn: "It's sunny today.", exampleTk: "Bu gün günli." },
              { en: "rainy", tk: "ýagmyrly", partOfSpeech: "adjective", exampleEn: "It's rainy and cold.", exampleTk: "Ýagmyrly we sowuk." },
              { en: "cloudy", tk: "bulutly", partOfSpeech: "adjective", exampleEn: "The sky is cloudy.", exampleTk: "Asman bulutly." },
              { en: "windy", tk: "ýelli", partOfSpeech: "adjective", exampleEn: "It's very windy outside.", exampleTk: "Daşarsy gaty ýelli." },
              { en: "hot", tk: "yssy / gyzgyn", partOfSpeech: "adjective", exampleEn: "It's very hot in summer.", exampleTk: "Tomusda gaty yssy bolýar." },
              { en: "cold", tk: "sowuk", partOfSpeech: "adjective", exampleEn: "It's cold in winter.", exampleTk: "Gyşda sowuk bolýar." },
              { en: "snow", tk: "gar", partOfSpeech: "noun", exampleEn: "It's snowing outside!", exampleTk: "Daşarsy gar ýagýar!" },
              { en: "rain", tk: "ýagmyr", partOfSpeech: "noun", exampleEn: "Is it going to rain today?", exampleTk: "Bu gün ýagmyr ýagarmy?" },
            ]}},
            { type: "grammar_note", data: { titleTk: "Grammatika: Present Continuous", explanationTk: "Present Continuous şu wagt bolup geçýän işleri beýan etmek üçin ulanylýar: 'to be (am/is/are) + işlik + -ing'. 'Look!' we 'Listen!' söz bilen köp ulanylýar.", pattern: "am/is/are + [işlik]-ing", examples: [
              { en: "It is raining now.", tk: "Şu wagt ýagmyr ýagýar." },
              { en: "Look! It is snowing!", tk: "Seret! Gar ýagýar!" },
            ]}},
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "beginner-u08-l02-seasons",
        titleEn: "Seasons",
        titleTk: "Pasyllar",
        content: {
          blocks: [
            { type: "vocabulary_list", data: { titleTk: "Pasyllar", words: [
              { en: "spring", tk: "ýaz", partOfSpeech: "noun", exampleEn: "Flowers bloom in spring.", exampleTk: "Ýazda güller açylýar." },
              { en: "summer", tk: "tomus", partOfSpeech: "noun", exampleEn: "It's very hot in summer.", exampleTk: "Tomusda gaty yssy." },
              { en: "autumn / fall", tk: "güýz", partOfSpeech: "noun", exampleEn: "Leaves fall in autumn.", exampleTk: "Güýzde ýapraklar dökülýär." },
              { en: "winter", tk: "gyş", partOfSpeech: "noun", exampleEn: "It snows in winter.", exampleTk: "Gyşda gar ýagýar." },
            ]}},
            { type: "dialogue", data: { titleTk: "Söhbetdeşlik: Howa barada", exchanges: [
              { speakerEn: "Kerim", lineEn: "What's the weather like today?", lineTk: "Bu gün howa nähili?" },
              { speakerEn: "Ogulgerek", lineEn: "It's sunny and warm. Perfect weather!", lineTk: "Günli we ýyly. Ajaýyp howa!" },
              { speakerEn: "Kerim", lineEn: "What is your favourite season?", lineTk: "Seniň iň söýgüli paslym haýsy?" },
              { speakerEn: "Ogulgerek", lineEn: "I love spring! The flowers are beautiful.", lineTk: "Men ýazy halaýaryn! Güller ajaýyp." },
            ]}},
          ],
        },
      },
    ],
    quiz: {
      titleTk: "8-nji Bölüm Synagy: Howa",
      questions: [
        { order: 1, questionText: "'Gar ýagýar' iňlisçe näme?", questionType: "translate_tk_en", options: ["It is raining", "It is windy", "It is snowing", "It is sunny"], correctIndex: 2 },
        { order: 2, questionText: "It _____ raining now.", questionType: "multiple_choice_grammar", options: ["rain", "rains", "is raining", "rained"], correctIndex: 2 },
        { order: 3, questionText: "'Ýaz' iňlisçe näme?", questionType: "translate_tk_en", options: ["winter", "autumn", "summer", "spring"], correctIndex: 3 },
        { order: 4, questionText: "The children _____ playing outside now.", questionType: "multiple_choice_grammar", options: ["is", "are", "am", "be"], correctIndex: 1 },
        { order: 5, questionText: "'Cloudy' Türkmençede näme?", questionType: "translate_en_tk", options: ["Günli", "Ýagmyrly", "Bulutly", "Ýelli"], correctIndex: 2 },
        { order: 6, questionText: "'Güýz' iňlisçe näme?", questionType: "translate_tk_en", options: ["spring", "summer", "winter", "autumn"], correctIndex: 3 },
        { order: 7, questionText: "Look! The sun _____ shining.", questionType: "multiple_choice_grammar", options: ["shine", "shines", "is shining", "shined"], correctIndex: 2 },
        { order: 8, questionText: "'Hot' Türkmençede näme?", questionType: "translate_en_tk", options: ["Sowuk", "Yssy / Gyzgyn", "Ýelli", "Bulutly"], correctIndex: 1 },
        { order: 9, questionText: "'Tomus' iňlisçe näme?", questionType: "translate_tk_en", options: ["spring", "autumn", "summer", "winter"], correctIndex: 2 },
        { order: 10, questionText: "What _____ the weather like today?", questionType: "multiple_choice_grammar", options: ["am", "are", "is", "be"], correctIndex: 2 },
      ],
    },
  },

  // ─── UNIT 9: SHOPPING ──────────────────────────────────────────────────
  {
    unitNumber: 9,
    slug: "beginner-unit-09-shopping",
    titleEn: "Shopping",
    titleTk: "Söwda etmek",
    description: "Bu bölümde dükanada söwda etmek we görkezme çalyşmalary öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "beginner-u09-l01-at-the-shop",
        titleEn: "At the Shop",
        titleTk: "Dükanada",
        content: {
          blocks: [
            { type: "vocabulary_list", data: { titleTk: "Dükanda ulanylýan sözler", words: [
              { en: "shop / store", tk: "dukan", partOfSpeech: "noun", exampleEn: "I go to the shop every day.", exampleTk: "Men her gün dukana gidýärin." },
              { en: "price", tk: "baha / nyrh", partOfSpeech: "noun", exampleEn: "What is the price of this?", exampleTk: "Munyň bahasy näçe?" },
              { en: "cheap", tk: "arzan", partOfSpeech: "adjective", exampleEn: "This shirt is very cheap.", exampleTk: "Bu köýnek gaty arzan." },
              { en: "expensive", tk: "gymmat / bahaly", partOfSpeech: "adjective", exampleEn: "This coat is expensive.", exampleTk: "Bu palto gymmat." },
              { en: "buy", tk: "satyn almak", partOfSpeech: "verb", exampleEn: "I want to buy a new phone.", exampleTk: "Men täze telefon satyn almak isleýärin." },
              { en: "sell", tk: "satmak", partOfSpeech: "verb", exampleEn: "They sell fruits here.", exampleTk: "Olar bu ýerde miweleri satýarlar." },
              { en: "size", tk: "ölçeg", partOfSpeech: "noun", exampleEn: "What size do you need?", exampleTk: "Siz haýsy ölçegi gereksiniz?" },
            ]}},
            { type: "dialogue", data: { titleTk: "Söhbetdeşlik: Eşik dükanynda", exchanges: [
              { speakerEn: "Aýgül", lineEn: "Excuse me, how much is this dress?", lineTk: "Bagyşlaň, bu köýnek näçe?" },
              { speakerEn: "Assistant", lineEn: "It's fifty manat.", lineTk: "Elli manat." },
              { speakerEn: "Aýgül", lineEn: "Can I try it on?", lineTk: "Men ony geýip görüp bilermi?" },
              { speakerEn: "Assistant", lineEn: "Of course! What size are you?", lineTk: "Hawa! Siziň ölçegiňiz näçe?" },
              { speakerEn: "Aýgül", lineEn: "Medium. I'll take it!", lineTk: "Orta. Men ony alaryn!" },
            ]}},
            { type: "grammar_note", data: { titleTk: "Grammatika: This / That / These / Those", explanationTk: "'This' (bu — ýakyn birlik), 'That' (şo — uzak birlik), 'These' (bular — ýakyn köplük), 'Those' (şolar — uzak köplük).", pattern: "this | that | these | those", examples: [
              { en: "This shirt is nice.", tk: "Bu köýnek owadan." },
              { en: "That bag is expensive.", tk: "Şo sumka gymmat." },
              { en: "These shoes are comfortable.", tk: "Bular (aýakgaplar) amatly." },
            ]}},
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "beginner-u09-l02-prices",
        titleEn: "Prices and Paying",
        titleTk: "Nyrh we töleg",
        content: {
          blocks: [
            { type: "example_set", data: { titleTk: "Nyrh soramak — mysallar", examples: [
              { en: "How much is this?", tk: "Bu näçe?", note: "Iň ýönekeý nyrh soragy" },
              { en: "How much does it cost?", tk: "Munyň bahasy näçe?" },
              { en: "That's too expensive. Do you have anything cheaper?", tk: "Ol gaty gymmat. Arzanrak zadyňyz barmy?" },
              { en: "I'll take it. Here you are.", tk: "Men ony alaryn. Ine puluňyz." },
              { en: "Can I pay by card?", tk: "Kartla töläp bilermi?" },
            ]}},
          ],
        },
      },
    ],
    quiz: {
      titleTk: "9-njy Bölüm Synagy: Söwda etmek",
      questions: [
        { order: 1, questionText: "'Arzan' iňlisçe näme?", questionType: "translate_tk_en", options: ["expensive", "free", "cheap", "big"], correctIndex: 2 },
        { order: 2, questionText: "How much _____ this shirt?", questionType: "multiple_choice_grammar", options: ["are", "am", "cost", "is"], correctIndex: 3 },
        { order: 3, questionText: "_____ shoes are very nice. (Bular — ýakyn köplük)", questionType: "multiple_choice_grammar", options: ["This", "That", "These", "Those"], correctIndex: 2 },
        { order: 4, questionText: "'Satyn almak' iňlisçe näme?", questionType: "translate_tk_en", options: ["sell", "buy", "pay", "find"], correctIndex: 1 },
        { order: 5, questionText: "_____ bag is expensive. (Şo uzak birlik)", questionType: "multiple_choice_grammar", options: ["This", "These", "Those", "That"], correctIndex: 3 },
        { order: 6, questionText: "'Price' Türkmençede näme?", questionType: "translate_en_tk", options: ["Dukan", "Töleg", "Baha / Nyrh", "Ölçeg"], correctIndex: 2 },
        { order: 7, questionText: "I want to buy _____ dress. (bu — ýakyn birlik)", questionType: "multiple_choice_grammar", options: ["that", "those", "these", "this"], correctIndex: 3 },
        { order: 8, questionText: "'Gymmat' iňlisçe näme?", questionType: "translate_tk_en", options: ["cheap", "free", "expensive", "new"], correctIndex: 2 },
        { order: 9, questionText: "Can I pay _____ card?", questionType: "multiple_choice_grammar", options: ["with", "at", "by", "in"], correctIndex: 2 },
        { order: 10, questionText: "'Size' Türkmençede näme?", questionType: "translate_en_tk", options: ["Baha", "Çek", "Ölçeg", "Dukan"], correctIndex: 2 },
      ],
    },
  },

  // ─── UNIT 10: HEALTH ───────────────────────────────────────────────────
  {
    unitNumber: 10,
    slug: "beginner-unit-10-health",
    titleEn: "The Body and Health",
    titleTk: "Beden we Saglyk",
    description: "Bu bölümde beden agzalarynyň atlary we keselden şikaýat etmek öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "beginner-u10-l01-body-parts",
        titleEn: "Body Parts",
        titleTk: "Beden agzalary",
        content: {
          blocks: [
            { type: "vocabulary_list", data: { titleTk: "Beden agzalary", words: [
              { en: "head", tk: "baş / kelle", partOfSpeech: "noun", exampleEn: "I have a headache.", exampleTk: "Meniň başym agyryýar." },
              { en: "eye", tk: "göz", partOfSpeech: "noun", exampleEn: "Her eyes are brown.", exampleTk: "Onuň gözleri goňur." },
              { en: "nose", tk: "burun", partOfSpeech: "noun", exampleEn: "My nose is cold.", exampleTk: "Meniň burunym sowuk." },
              { en: "throat", tk: "bokurdak / bogazym", partOfSpeech: "noun", exampleEn: "My throat hurts.", exampleTk: "Bogazym agyryýar." },
              { en: "stomach", tk: "garyn / aşgazan", partOfSpeech: "noun", exampleEn: "I have a stomachache.", exampleTk: "Garnym agyryýar." },
              { en: "hand", tk: "el", partOfSpeech: "noun", exampleEn: "Wash your hands!", exampleTk: "Eliňizi ýuň!" },
              { en: "leg", tk: "aýak", partOfSpeech: "noun", exampleEn: "My leg hurts after running.", exampleTk: "Ylganymdan soň aýagym agyryýar." },
              { en: "back", tk: "arka / bil", partOfSpeech: "noun", exampleEn: "I have back pain.", exampleTk: "Meniň bilim agyryýar." },
            ]}},
            { type: "grammar_note", data: { titleTk: "Grammatika: 'I have a...' — kesel aýtmak", explanationTk: "Kesel ýa-da agyry aýtmak üçin 'I have a + kesel' gurluşy ulanylýar. Lukmana baran wagtyňyz: 'What's wrong?' — Näme boldy? soragyny eşidersiňiz.", pattern: "I have a [headache/cold/fever]. / I feel [sick/tired/better].", examples: [
              { en: "I have a headache.", tk: "Meniň başym agyryýar." },
              { en: "She has a cold.", tk: "Onuň üşütmesi bar." },
              { en: "I feel very tired.", tk: "Men gaty ýadaw duýýaryn." },
            ]}},
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "beginner-u10-l02-at-the-doctor",
        titleEn: "At the Doctor's",
        titleTk: "Lukmanda",
        content: {
          blocks: [
            { type: "dialogue", data: { titleTk: "Söhbetdeşlik: Lukman bilen", exchanges: [
              { speakerEn: "Doctor", lineEn: "Good morning! What's wrong?", lineTk: "Hoş irden! Nämäňiz bar?" },
              { speakerEn: "Gurban", lineEn: "I have a headache and a sore throat.", lineTk: "Başym agyryýar we bogazym agyryýar." },
              { speakerEn: "Doctor", lineEn: "How long have you had these symptoms?", lineTk: "Bu alamatlar näçe wagtdan bäri bar?" },
              { speakerEn: "Gurban", lineEn: "Since yesterday morning.", lineTk: "Düýnden bäri." },
              { speakerEn: "Doctor", lineEn: "You have a cold. Rest and drink lots of water.", lineTk: "Siziňde üşütme bar. Dynç alyň we köp suw içiň." },
            ]}},
            { type: "vocabulary_list", data: { titleTk: "Saglyga degişli sözler", words: [
              { en: "sick / ill", tk: "näsag / agyry", partOfSpeech: "adjective", exampleEn: "I feel sick today.", exampleTk: "Bu gün özümi agyryly duýýaryn." },
              { en: "medicine", tk: "derman", partOfSpeech: "noun", exampleEn: "Take this medicine twice a day.", exampleTk: "Bu dermany günde iki gezek iç." },
              { en: "fever", tk: "gyzdyrma / temperatura", partOfSpeech: "noun", exampleEn: "She has a high fever.", exampleTk: "Onuň güýçli gyzdyrmasy bar." },
              { en: "better", tk: "gowulaşmak / gowy", partOfSpeech: "adjective", exampleEn: "I feel much better today.", exampleTk: "Bu gün özümi has gowy duýýaryn." },
            ]}},
          ],
        },
      },
    ],
    quiz: {
      titleTk: "10-njy Bölüm Synagy: Beden we Saglyk",
      questions: [
        { order: 1, questionText: "'Başym agyryýar' iňlisçe näme?", questionType: "translate_tk_en", options: ["I feel sick", "I have a stomachache", "I have a headache", "My leg hurts"], correctIndex: 2 },
        { order: 2, questionText: "'Throat' Türkmençede näme?", questionType: "translate_en_tk", options: ["Baş", "Garyn", "Bokurdak / Bogazym", "El"], correctIndex: 2 },
        { order: 3, questionText: "I _____ a cold.", questionType: "multiple_choice_grammar", options: ["am", "feel", "have", "get"], correctIndex: 2 },
        { order: 4, questionText: "'Medicine' Türkmençede näme?", questionType: "translate_en_tk", options: ["Kesel", "Derman", "Lukman", "Dynç"], correctIndex: 1 },
        { order: 5, questionText: "She _____ sick today.", questionType: "multiple_choice_grammar", options: ["have", "has", "feels", "feel"], correctIndex: 2 },
        { order: 6, questionText: "'El' iňlisçe näme?", questionType: "translate_tk_en", options: ["leg", "back", "hand", "nose"], correctIndex: 2 },
        { order: 7, questionText: "I feel much _____ today. (gowulaşdym)", questionType: "multiple_choice_grammar", options: ["good", "best", "better", "well"], correctIndex: 2 },
        { order: 8, questionText: "'Fever' Türkmençede näme?", questionType: "translate_en_tk", options: ["Üşütme", "Agyry", "Gyzdyrma", "Derman"], correctIndex: 2 },
        { order: 9, questionText: "'Garyn' iňlisçe näme?", questionType: "translate_tk_en", options: ["back", "head", "leg", "stomach"], correctIndex: 3 },
        { order: 10, questionText: "You need to _____. (dynç almak)", questionType: "multiple_choice_grammar", options: ["rest", "resting", "rested", "rests"], correctIndex: 0 },
      ],
    },
  },

  // ─── UNIT 11: TRANSPORT ────────────────────────────────────────────────
  {
    unitNumber: 11,
    slug: "beginner-unit-11-transport",
    titleEn: "Getting Around",
    titleTk: "Hereket etmek",
    description: "Bu bölümde ulag görnüşleri, ýol soramak we can/can't öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "beginner-u11-l01-transport",
        titleEn: "Types of Transport",
        titleTk: "Ulag görnüşleri",
        content: {
          blocks: [
            { type: "vocabulary_list", data: { titleTk: "Ulag görnüşleri", words: [
              { en: "bus", tk: "awtobus", partOfSpeech: "noun", exampleEn: "I take the bus to school.", exampleTk: "Men mekdebe awtobus bilen gidýärin." },
              { en: "car", tk: "awtoulag / maşyn", partOfSpeech: "noun", exampleEn: "My father has a new car.", exampleTk: "Meniň kakamda täze maşyn bar." },
              { en: "train", tk: "otly / poýezd", partOfSpeech: "noun", exampleEn: "The train goes to Mary.", exampleTk: "Otly Mara gidýär." },
              { en: "plane", tk: "uçar / samolýot", partOfSpeech: "noun", exampleEn: "We fly by plane.", exampleTk: "Biz uçar bilen uçýarys." },
              { en: "taxi", tk: "taksi", partOfSpeech: "noun", exampleEn: "Let's take a taxi!", exampleTk: "Geliň taksi alalyň!" },
              { en: "walk", tk: "pýada ýöremek", partOfSpeech: "verb", exampleEn: "I walk to the market.", exampleTk: "Men bazar pýada gidýärin." },
            ]}},
            { type: "grammar_note", data: { titleTk: "Grammatika: Can / Can't", explanationTk: "'Can' başarmaklygy aňladyp, ähli şahslar bilen üýtgemeýär. Inkär: 'can't' (cannot). 'Can' diýilenden soňra işligiň esasy görnüşi gelýär.", pattern: "[şahs] + can/can't + [işligiň esasy görnüşi]", examples: [
              { en: "I can drive a car.", tk: "Men maşyn sürüp bilýärin." },
              { en: "She can't swim.", tk: "Ol ýüzüp bilmeýär." },
              { en: "Can you speak English?", tk: "Siz Iňlisçe gepleşip bilýärsiňizmi?" },
            ]}},
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "beginner-u11-l02-directions",
        titleEn: "Asking for Directions",
        titleTk: "Ýol soramak",
        content: {
          blocks: [
            { type: "vocabulary_list", data: { titleTk: "Ugur görkezme sözlügi", words: [
              { en: "turn left", tk: "çepe öwrüliň", partOfSpeech: "verb", exampleEn: "Turn left at the traffic light.", exampleTk: "Ýol yşaratynda çepe öwrüliň." },
              { en: "turn right", tk: "saga öwrüliň", partOfSpeech: "verb", exampleEn: "Turn right after the school.", exampleTk: "Mekdepden soň saga öwrüliň." },
              { en: "go straight", tk: "göni gidiň", partOfSpeech: "verb", exampleEn: "Go straight for 500 metres.", exampleTk: "500 metr göni gidiň." },
              { en: "near", tk: "ýakyn", partOfSpeech: "adjective", exampleEn: "The pharmacy is near here.", exampleTk: "Dermanhana ýakyn ýerde." },
              { en: "far", tk: "uzak", partOfSpeech: "adjective", exampleEn: "The airport is far.", exampleTk: "Howa menzili uzakda." },
              { en: "opposite", tk: "garşy tarapda", partOfSpeech: "preposition", exampleEn: "The bank is opposite the park.", exampleTk: "Bank seýilgähiň garşy tarapynda." },
            ]}},
            { type: "dialogue", data: { titleTk: "Söhbetdeşlik: Ýol soramak", exchanges: [
              { speakerEn: "Batyr", lineEn: "Excuse me, where is the post office?", lineTk: "Bagyşlaň, poçta nirede?" },
              { speakerEn: "Leýla", lineEn: "Go straight and turn left at the traffic light.", lineTk: "Göni gidiň we ýol yşaratynda çepe öwrüliň." },
              { speakerEn: "Batyr", lineEn: "Is it far from here?", lineTk: "Buradan uzakmy?" },
              { speakerEn: "Leýla", lineEn: "No, it's very close — about five minutes on foot.", lineTk: "Ýok, gaty ýakyn — pýada bäş minut töweregi." },
            ]}},
          ],
        },
      },
    ],
    quiz: {
      titleTk: "11-nji Bölüm Synagy: Hereket etmek",
      questions: [
        { order: 1, questionText: "'Çepe öwrüliň' iňlisçe näme?", questionType: "translate_tk_en", options: ["go straight", "turn right", "turn left", "go back"], correctIndex: 2 },
        { order: 2, questionText: "I _____ drive a car. (başaryp bilmeýärin)", questionType: "multiple_choice_grammar", options: ["can't", "don't", "not", "cannot to"], correctIndex: 0 },
        { order: 3, questionText: "'Plane' Türkmençede näme?", questionType: "translate_en_tk", options: ["Awtobus", "Otly", "Uçar", "Taksi"], correctIndex: 2 },
        { order: 4, questionText: "Can you _____ English?", questionType: "multiple_choice_grammar", options: ["speaks", "speaking", "spoke", "speak"], correctIndex: 3 },
        { order: 5, questionText: "'Göni gidiň' iňlisçe näme?", questionType: "translate_tk_en", options: ["turn right", "go straight", "go back", "turn left"], correctIndex: 1 },
        { order: 6, questionText: "'Far' Türkmençede näme?", questionType: "translate_en_tk", options: ["Ýakyn", "Uzak", "Göni", "Garşy"], correctIndex: 1 },
        { order: 7, questionText: "She _____ swim very well.", questionType: "multiple_choice_grammar", options: ["cans", "can", "is can", "to can"], correctIndex: 1 },
        { order: 8, questionText: "'Otly' iňlisçe näme?", questionType: "translate_tk_en", options: ["bus", "plane", "taxi", "train"], correctIndex: 3 },
        { order: 9, questionText: "The bank is _____ the park. (garşy tarapynda)", questionType: "multiple_choice_grammar", options: ["next", "behind", "opposite", "near"], correctIndex: 2 },
        { order: 10, questionText: "'Ýakyn' iňlisçe näme?", questionType: "translate_tk_en", options: ["far", "near", "next", "straight"], correctIndex: 1 },
      ],
    },
  },

  // ─── UNIT 12: HOBBIES ──────────────────────────────────────────────────
  {
    unitNumber: 12,
    slug: "beginner-unit-12-hobbies",
    titleEn: "Hobbies & Free Time",
    titleTk: "Gyzyklanmalar we Boş wagt",
    description: "Bu bölümde gyzyklanmalar, sport we like/love/hate + -ing gurluşy öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "beginner-u12-l01-hobbies",
        titleEn: "Sports and Hobbies",
        titleTk: "Sport we gyzyklanmalar",
        content: {
          blocks: [
            { type: "vocabulary_list", data: { titleTk: "Gyzyklanmalar we sport", words: [
              { en: "reading", tk: "kitap okamak", partOfSpeech: "noun", exampleEn: "I love reading books.", exampleTk: "Men kitap okamaklygy söýýärin." },
              { en: "swimming", tk: "ýüzmek", partOfSpeech: "noun", exampleEn: "Swimming is good for your health.", exampleTk: "Ýüzmek saglyk üçin gowudyr." },
              { en: "cooking", tk: "nahar bişirmek", partOfSpeech: "noun", exampleEn: "She enjoys cooking.", exampleTk: "Ol nahar bişirmegi halaýar." },
              { en: "football", tk: "futbol", partOfSpeech: "noun", exampleEn: "He plays football every weekend.", exampleTk: "Ol her dynç günü futbol oýnaýar." },
              { en: "dancing", tk: "tans etmek", partOfSpeech: "noun", exampleEn: "I hate dancing!", exampleTk: "Men tans etmegi halamaýaryn!" },
              { en: "music", tk: "saz / aýdym-saz", partOfSpeech: "noun", exampleEn: "I listen to music every day.", exampleTk: "Men her gün saz diňleýärin." },
              { en: "travel", tk: "syýahat etmek", partOfSpeech: "noun", exampleEn: "We love travelling.", exampleTk: "Biz syýahat etmegi söýýäris." },
              { en: "drawing", tk: "surat çekmek", partOfSpeech: "noun", exampleEn: "My sister likes drawing.", exampleTk: "Meniň uýam surat çekmegi halaýar." },
            ]}},
            { type: "grammar_note", data: { titleTk: "Grammatika: Like / Love / Hate + -ing", explanationTk: "'Like', 'love', 'enjoy', 'hate' işliklerinden soňra işligiň '-ing' görnüşi gelýär. Bu gurluş gyzyklanmalary aýtmakda ulanylýar.", pattern: "[şahs] + like/love/hate/enjoy + [işlik]-ing", examples: [
              { en: "I love swimming.", tk: "Men ýüzmegi söýýärin." },
              { en: "She likes reading books.", tk: "Ol kitap okamaklygy halaýar." },
              { en: "He hates waking up early.", tk: "Ol ir oýanmaklygy halamaýar." },
            ]}},
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "beginner-u12-l02-how-often",
        titleEn: "How Often Do You...?",
        titleTk: "Näçe gezek edýärsiňiz?",
        content: {
          blocks: [
            { type: "dialogue", data: { titleTk: "Söhbetdeşlik: Gyzyklanmalar barada", exchanges: [
              { speakerEn: "Merdan", lineEn: "What do you like doing in your free time?", lineTk: "Boş wagtynda näme etmegi halaýarsyň?" },
              { speakerEn: "Maral", lineEn: "I love reading and listening to music. What about you?", lineTk: "Men kitap okamaklygy we saz diňlemeklygy söýýärin. Sen nähili?" },
              { speakerEn: "Merdan", lineEn: "I enjoy playing football. How often do you read?", lineTk: "Men futbol oýnamaklygy halaýaryn. Näçe gezek kitap okaýarsyň?" },
              { speakerEn: "Maral", lineEn: "I read every evening before sleeping.", lineTk: "Men her agşam ukudan öň okäýaryn." },
            ]}},
            { type: "example_set", data: { titleTk: "Gyzyklanmalar barada sorag-jogap", examples: [
              { en: "Do you like cooking? — Yes, I love it!", tk: "Nahar bişirmegi halaýarsyňyzmy? — Hawa, gaty halaýaryn!" },
              { en: "How often do you play football? — Twice a week.", tk: "Näçe gezek futbol oýnaýarsyňyz? — Hepde-de iki gezek." },
              { en: "I prefer reading to watching TV.", tk: "Men telewizor görmekden kitap okamaklygy has gowy görýärin." },
            ]}},
          ],
        },
      },
    ],
    quiz: {
      titleTk: "12-nji Bölüm Synagy: Gyzyklanmalar we Boş wagt",
      questions: [
        { order: 1, questionText: "I love _____ . (ýüzmek)", questionType: "multiple_choice_grammar", options: ["swim", "swims", "swimming", "to swam"], correctIndex: 2 },
        { order: 2, questionText: "'Kitap okamak' iňlisçe näme?", questionType: "translate_tk_en", options: ["writing", "drawing", "reading", "cooking"], correctIndex: 2 },
        { order: 3, questionText: "She enjoys _____ music. (diňlemek)", questionType: "multiple_choice_grammar", options: ["listen", "listens", "listened", "listening"], correctIndex: 3 },
        { order: 4, questionText: "'Football' Türkmençede näme?", questionType: "translate_en_tk", options: ["Tans", "Saz", "Surat çekmek", "Futbol"], correctIndex: 3 },
        { order: 5, questionText: "He hates _____ up early.", questionType: "multiple_choice_grammar", options: ["wake", "wakes", "waking", "woke"], correctIndex: 2 },
        { order: 6, questionText: "'Tans etmek' iňlisçe näme?", questionType: "translate_tk_en", options: ["singing", "dancing", "running", "cooking"], correctIndex: 1 },
        { order: 7, questionText: "Do you like _____ ? (nahar bişirmek)", questionType: "multiple_choice_grammar", options: ["cook", "cooks", "cooking", "to cooked"], correctIndex: 2 },
        { order: 8, questionText: "'Drawing' Türkmençede näme?", questionType: "translate_en_tk", options: ["Ýüzmek", "Saz", "Surat çekmek", "Kitap okamak"], correctIndex: 2 },
        { order: 9, questionText: "How often _____ you play football?", questionType: "multiple_choice_grammar", options: ["is", "are", "do", "does"], correctIndex: 2 },
        { order: 10, questionText: "I prefer reading _____ watching TV.", questionType: "multiple_choice_grammar", options: ["than", "from", "to", "and"], correctIndex: 2 },
      ],
    },
  },
];
