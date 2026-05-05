import type { SeedUnit } from "../../../types/content";

export const upperIntermediateUnits: SeedUnit[] = [
  // ─── UNIT 1: MIXED CONDITIONALS & WISH ──────────────────────────────────
  {
    unitNumber: 1,
    slug: "upper-int-unit-01-mixed-conditionals-wish",
    titleEn: "Mixed Conditionals & Wish Clauses",
    titleTk: "Garyşyk Şertler we Arzuw Sözlemleri",
    description: "Bu bölümde garyşyk şert sözlemleri (geçmiş şert + häzirki netije) we arzuw/öküniç üçin 'wish' gurluşlary öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "upper-int-u01-l01-mixed-conditionals",
        titleEn: "Mixed Conditionals",
        titleTk: "Garyşyk Şert Sözlemleri",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Garyşyk şertler — geçmişdäki şert bilen häzirki netijäni ýa-da häzirki şert bilen geçmişdäki netijäni birleşdirýär. Iň köp ulanylýan görnüş: 'If + Past Perfect (geçmiş), would + infinitive (häzirki netije)'. Mysal: 'If I had studied medicine, I would be a doctor now.' — Men lukmançylyk okan bolsam, häzir lukman bolardym." } },
            { type: "grammar_note", data: { titleTk: "Garyşyk şert — görnüşler", explanationTk: "Görnüş 1: If + Past Perfect, would + inf (geçmiş şert → häzirki netije). Görnüş 2: If + Past Simple, would have + PP (häzirki şert → geçmişdäki netije).", pattern: "If I had [PP], I would [inf] now. / If I [past simple], I would have [PP].", examples: [{ en: "If she had taken the job offer, she would be living in London now.", tk: "Iş teklifini kabul eden bolsa, häzir Londonda ýaşardy." }, { en: "If he were more confident, he would have applied for the promotion.", tk: "Özüne has ynamy bolsa, wezipe ýokarlanmasyna ýüz tutardý." }, { en: "If I had saved more money, I wouldn't be struggling now.", tk: "Has köp pul tygşytlan bolsam, häzir kynçylyk çekmezdim." }] } },
            { type: "example_set", data: { titleTk: "Garyşyk şert — goşmaça mysallar", examples: [{ en: "If he had emigrated, he would have a better career now. (Past decision → present result)", tk: "Göçen bolsa, häzir has gowy karýerasy bolardy. (Geçmiş karar → häzirki netije)" }, { en: "If she weren't so busy, she would have come to the party last night. (Present state → past result)", tk: "Bu gadar işli bolmasady, düýn agşam partiýa gelerdi. (Häzirki ýagdaý → geçmişdäki netije)" }] } },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "upper-int-u01-l02-wish-present-future",
        titleEn: "Wish — Present & Future",
        titleTk: "Wish — Häzir we Geljek Arzuwlar",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "'Wish' — häzirki ýagdaý barada öküniç ýa-da isleg aňlatmak üçin ulanylýar. 'I wish I knew the answer' — Jogabyny bilsedim. 'I wish' + Past Simple = häzirki ýagdaý barada isleg. 'I wish' + would = başga biriniň hereket etmegini islemek." } },
            { type: "grammar_note", data: { titleTk: "Wish + Past Simple / Would", explanationTk: "wish + Past Simple = häzirki däl ýagdaý üçin isleg. wish + would + inf = başga biriniň üýtgemesini islemek (köplenç nägilelik). wish + could = başarmak islemek.", pattern: "I wish I knew. / I wish you would listen. / I wish I could fly.", examples: [{ en: "I wish I spoke better English.", tk: "Iňlisçäm has gowy bolsa." }, { en: "I wish it would stop raining!", tk: "Ýagyş ýagmagy goýsa!" }, { en: "She wishes she could travel more.", tk: "Has köp syýahat edip bilse isleýär." }] } },
            { type: "dialogue", data: { titleTk: "Söhbetdeşlik: Arzuwlar", exchanges: [{ speakerEn: "Ogulşeker", lineEn: "I wish I had more free time.", lineTk: "Boş wagtym has köp bolsa." }, { speakerEn: "Resul", lineEn: "I know what you mean. I wish I didn't have to work weekends.", lineTk: "Düşünýärin. Hepde ahyrynda işlemeli bolmasam." }, { speakerEn: "Ogulşeker", lineEn: "I wish my boss would understand that we need breaks.", lineTk: "Ýolbaşçym biziň dynç almaga mätäçdigimize düşünse." }, { speakerEn: "Resul", lineEn: "I wish I could afford to take a long holiday.", lineTk: "Uzak dynç alyşa gidip bilsedim." }] } },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "upper-int-u01-l03-wish-past-if-only",
        titleEn: "Wish — Past Regrets & If Only",
        titleTk: "Wish — Geçmiş Öküniç we If Only",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "'Wish + Past Perfect' — geçmişdäki zat barada öküniç aňladýar. 'I wish I had studied harder' — Has gowy okadyk bolsam. 'If only' — 'wish' ýaly, ýöne has güýçli duýgy aňladýar. Formal we edebi dilde köp ulanylýar." } },
            { type: "grammar_note", data: { titleTk: "Wish + Past Perfect / If only", explanationTk: "wish + Past Perfect = geçmiş öküniç. If only + Past Perfect = has güýçli öküniç. Ikisi hem gaýtaryp bolmajak geçmişe gynanç aňladýar.", pattern: "I wish I had [PP]. / If only I had [PP].", examples: [{ en: "I wish I had taken that job — it was a great opportunity.", tk: "Şol işi alan bolsam — ajaýyp mümkinçilikdi." }, { en: "If only she had told me the truth earlier!", tk: "Haçan bolan bolsa, maňa has öň hakykat aýtsa!" }, { en: "He wishes he hadn't said those words.", tk: "Ol şol sözleri aýtmadyk bolsady isleýär." }] } },
            { type: "example_set", data: { titleTk: "Wish we If only — deňeşdirme", examples: [{ en: "I wish I were taller. (Present — not tall enough)", tk: "Boýum has uzyn bolsa. (Häzirki — ýeterlik uzyn däl)" }, { en: "I wish I had been taller as a teenager. (Past — was not tall enough then)", tk: "Ýetginjeklikde has uzyn bolan bolsam. (Geçmiş öküniç)" }, { en: "If only I had listened to my parents!", tk: "Ene-atamyň aýdanyna gulak asan bolsam!" }] } },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "1-nji Bölüm Synagy: Garyşyk Şertler we Wish",
      questions: [
        { order: 1, questionText: "If I had studied harder, I _____ a doctor now.", questionType: "multiple_choice_grammar", options: ["would be", "will be", "would have been", "had been"], correctIndex: 0 },
        { order: 2, questionText: "I wish I _____ the answer! (know — häzir bilmeýärin)", questionType: "multiple_choice_grammar", options: ["know", "knew", "had known", "would know"], correctIndex: 1 },
        { order: 3, questionText: "If she weren't so busy, she _____ to the party last night.", questionType: "multiple_choice_grammar", options: ["would come", "would have come", "came", "had come"], correctIndex: 1 },
        { order: 4, questionText: "I wish you _____ stop interrupting me! (nägilelik)", questionType: "multiple_choice_grammar", options: ["will", "would", "could", "should"], correctIndex: 1 },
        { order: 5, questionText: "If only I _____ that mistake! (make — geçmiş öküniç)", questionType: "multiple_choice_grammar", options: ["didn't make", "wouldn't make", "hadn't made", "haven't made"], correctIndex: 2 },
        { order: 6, questionText: "She wishes she _____ more time to travel.", questionType: "multiple_choice_grammar", options: ["has", "have", "had", "would have"], correctIndex: 2 },
        { order: 7, questionText: "'If only' nämäni aňladýar?", questionType: "translate_en_tk", options: ["Diňe bolsa", "Güýçli öküniç / Arzuw", "Belki", "Häzir"], correctIndex: 1 },
        { order: 8, questionText: "If he had taken the job, he _____ in Paris now.", questionType: "multiple_choice_grammar", options: ["would live", "would have lived", "will live", "lived"], correctIndex: 0 },
        { order: 9, questionText: "I wish I _____ to the party — it sounds amazing!", questionType: "multiple_choice_grammar", options: ["went", "go", "had gone", "would go"], correctIndex: 2 },
        { order: 10, questionText: "Garyşyk şertiň esasy tapawudy näme?", questionType: "translate_en_tk", options: ["Ikisi hem geçmiş", "Geçmiş şert + häzirki netije (ýa-da tersine)", "Ikisi hem häzirki", "Geljek üçin"], correctIndex: 1 },
      ],
    },
  },

  // ─── UNIT 2: ADVANCED MODALS ────────────────────────────────────────────
  {
    unitNumber: 2,
    slug: "upper-int-unit-02-advanced-modals",
    titleEn: "Advanced Modal Verbs",
    titleTk: "Ösen Modal Işlikler",
    description: "Bu bölümde 'should have done', 'could have done', 'needn't have done', 'ought to have done' ýaly geçmiş modal gurluşlary öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "upper-int-u02-l01-should-could-have",
        titleEn: "Should Have & Could Have",
        titleTk: "Should Have we Could Have",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "'Should have + PP' — geçmişde edilmeli, ýöne edilmedik zat üçin öküniç ýa-da tankyt. 'You should have called me!' (Jaň etmeli edin). 'Could have + PP' — geçmişde mümkin bolan, ýöne bolmadyk zat. 'I could have helped you.' (Kömek edip bilerdim)." } },
            { type: "grammar_note", data: { titleTk: "Should have / Could have / Ought to have", explanationTk: "should have + PP = edilmeli zat edilmedi (öküniç/tankyt). could have + PP = mümkin bolan zat bolmady. ought to have + PP = should have ýaly (has resmi). might have + PP = belki bolan zat.", pattern: "You should have [PP]. / I could have [PP]. / She might have [PP].", examples: [{ en: "You should have told me earlier — I could have helped.", tk: "Maňa has öň aýtmaly edin — kömek edip bilerdim." }, { en: "He could have become a great musician but he gave up.", tk: "Ajaýyp sazanda bolup bilerdi, ýöne el çekdi." }, { en: "She ought to have apologised — it was clearly her fault.", tk: "Ötünç soramaly ekendi — aýdyň onuň günäsidi." }] } },
            { type: "dialogue", data: { titleTk: "Söhbetdeşlik: Geçmiş kararlar barada", exchanges: [{ speakerEn: "Şamyrat", lineEn: "I failed the driving test again.", lineTk: "Men sürüjilik synagyndan ýene geçip bilmedim." }, { speakerEn: "Dürsoltan", lineEn: "You should have practised more. How many hours did you prepare?", lineTk: "Has köp türgenleşmeli edin. Näçe sagat taýýarlandyň?" }, { speakerEn: "Şamyrat", lineEn: "Only about five hours. I could have taken a proper course.", lineTk: "Bäş sagat töweregi. Dogry kurs alyp bilerdim." }, { speakerEn: "Dürsoltan", lineEn: "You ought to have done that from the beginning. Don't give up though.", lineTk: "Başdan şeýle etmeli ekin. Ýöne el çekme." }] } },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "upper-int-u02-l02-neednt-have-didnt-need",
        titleEn: "Needn't Have vs Didn't Need To",
        titleTk: "Needn't Have we Didn't Need To tapawudy",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Bu iki gurluş meňzeş görünýär, ýöne tapawudy bar. 'Needn't have + PP' — edildi, ýöne edilmegi hökman däldi (artyk tagalla). 'Didn't need to + inf' — edilmedi, sebäbi hökman däldi (ýa-da bilinmeýär). Mysal: 'You needn't have cooked — we ordered food.' (Bişirdiň, ýöne hökman däldi). 'I didn't need to cook — they had already eaten.' (Bişirmedim, sebäbi hökman däldi)." } },
            { type: "grammar_note", data: { titleTk: "Needn't have vs Didn't need to", explanationTk: "needn't have + PP = edildi, hökman däldi. didn't need to + inf = edilmedi, hökman däldi.", pattern: "You needn't have bought flowers — we already have some. (Satyn aldyň, hökman däldi.) / I didn't need to buy flowers — she brought some. (Satyn almadym, hökman däldi.)", examples: [{ en: "You needn't have waited — I took a taxi.", tk: "Garaşmaly däldiňiz — men taksi aldym." }, { en: "She didn't need to bring food — the company provided everything.", tk: "Nahar getirmeli däldi — kompaniýa hemme zady berdi." }, { en: "They needn't have rushed — the meeting was cancelled.", tk: "Howlukmaklary hökman däldi — ýygnak ýatyryldy." }] } },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "upper-int-u02-l03-modal-voice-register",
        titleEn: "Modals in Formal & Written English",
        titleTk: "Resmi Iňlisçede Modal Işlikler",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Resmi ýazuwda we gepleşiklerde modal işlikleriň ulanylşy tapawutlanýar. 'Would' could 'Can'-dan has resmi. 'Shall' resmi teklip üçin ulanylýar. 'May' — resmi rugsat we ähtimallyk. Kontraksiýalar (can't, won't) resmi ýazuwda ulanylmaýar." } },
            { type: "vocabulary_list", data: { titleTk: "Resmi modal gurluşlar", words: [{ en: "would you be so kind as to", tk: "...-y ýerine ýetirmek sizden haýyş etsek", partOfSpeech: "verb", exampleEn: "Would you be so kind as to send me the report?", exampleTk: "Hasabaty ugratmak sizden haýyş etsek?" }, { en: "I would be grateful if", tk: "...-y etseňiz mähirban bolardyňyz", partOfSpeech: "verb", exampleEn: "I would be grateful if you could reply by Friday.", exampleTk: "Anna gününe çenli jogap bersediňiz mähirban bolardyňyz." }, { en: "shall we proceed", tk: "dowam etsekmi / başlasak", partOfSpeech: "verb", exampleEn: "Shall we proceed to the next agenda item?", exampleTk: "Indiki meselä geçsekmi?" }, { en: "may I ask", tk: "sorasam bolarmy", partOfSpeech: "verb", exampleEn: "May I ask what your decision is?", exampleTk: "Kararyňyz näme diýip sorasam bolarmy?" }] } },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "2-nji Bölüm Synagy: Ösen Modal Işlikler",
      questions: [
        { order: 1, questionText: "You _____ told me — I was worried all night! (should)", questionType: "multiple_choice_grammar", options: ["should tell", "should have told", "should told", "should be telling"], correctIndex: 1 },
        { order: 2, questionText: "He _____ a doctor but he chose business instead. (could)", questionType: "multiple_choice_grammar", options: ["could be", "could have been", "could been", "can have been"], correctIndex: 1 },
        { order: 3, questionText: "You _____ waited — I said I would take a taxi!", questionType: "multiple_choice_grammar", options: ["needn't have", "didn't need to", "shouldn't", "mustn't have"], correctIndex: 0 },
        { order: 4, questionText: "She _____ bring food — they had already ordered.", questionType: "multiple_choice_grammar", options: ["needn't have", "didn't need to", "mustn't", "shouldn't"], correctIndex: 1 },
        { order: 5, questionText: "'Should have done' nämäni aňladýar?", questionType: "translate_en_tk", options: ["Edilmeli bolar", "Edilmeli ekeni, edilmedi (öküniç)", "Edilip biliner", "Edilmeli däl ekeni"], correctIndex: 1 },
        { order: 6, questionText: "He _____ apologised — it was clearly his fault.", questionType: "multiple_choice_grammar", options: ["ought to", "ought to have", "should", "must have"], correctIndex: 1 },
        { order: 7, questionText: "'Needn't have + PP' we 'didn't need to' tapawudy näme?", questionType: "translate_en_tk", options: ["Tapawudy ýok", "Needn't have = edildi, gereksiz; didn't need to = edilmedi", "Didn't need to = edildi, gereksiz", "Ikisi hem edilmedi"], correctIndex: 1 },
        { order: 8, questionText: "You _____ have bought so much food — we can't eat it all!", questionType: "multiple_choice_grammar", options: ["should", "needn't", "couldn't", "mustn't"], correctIndex: 1 },
        { order: 9, questionText: "'May I ask' nähili ulanylýar?", questionType: "translate_en_tk", options: ["Adaty sorag", "Resmi rugsat soramak", "Gadagan etmek", "Maslahat bermek"], correctIndex: 1 },
        { order: 10, questionText: "They _____ rushed — the train was delayed by an hour.", questionType: "multiple_choice_grammar", options: ["shouldn't have", "needn't have", "couldn't have", "mustn't have"], correctIndex: 1 },
      ],
    },
  },

  // ─── UNIT 3: CAUSATIVE HAVE & GET ────────────────────────────────────────
  {
    unitNumber: 3,
    slug: "upper-int-unit-03-causative",
    titleEn: "Causative Have & Get",
    titleTk: "Başga Birine Yaptyrma — Have & Get",
    content: {
      blocks: [],
    },
    description: "Bu bölümde başga biri tarapyndan bir zadyň edilmegini bildirýän 'have/get something done' gurluşy öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "upper-int-u03-l01-have-something-done",
        titleEn: "Have Something Done",
        titleTk: "Have Something Done — Başga Birine Yaptyrma",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "'Have something done' — bir işi özüň etmeýärsiň, başga biri seniň üçin edýär. Köplenç hyzmat almak ýa-da başga biriniň eden zadyny aňlatmak üçin ulanylýar. 'I had my hair cut' — Men saçymy kesdirdim (özüm kesmedim, ustaz kesti). 'She is having her car repaired' — Maşynyny düzedip dur (özüň däl, usta)." } },
            { type: "grammar_note", data: { titleTk: "Have something done — düzümi", explanationTk: "have + at sözi + Past Participle. Zaman üýtgedip bolýar: I had my hair cut (geçen). I'm having my car serviced (häzirki dowam). I will have my house painted (geljek). I have had my laptop repaired (tamamlanan).", pattern: "I have my [at sözi] [PP]. / She is having her [at sözi] [PP].", examples: [{ en: "I need to have my eyes tested.", tk: "Görejimi barlatmaly." }, { en: "They had the whole office repainted last month.", tk: "Geçen aý bütin ofisi täzeden boýatdylar." }, { en: "She is having a dress made for the wedding.", tk: "Toý üçin köýnek tikdirip dur." }] } },
            { type: "vocabulary_list", data: { titleTk: "Have something done bilen ulanylýan hyzmatlar", words: [{ en: "have your hair cut/dyed", tk: "saçyňy kestirmek/boýatmak", partOfSpeech: "verb", exampleEn: "I'm going to have my hair dyed next week.", exampleTk: "Gelýän hepde saçymy boýatjakdyryn." }, { en: "have your car serviced/repaired", tk: "maşynyňy hyzmat/düzetmek", partOfSpeech: "verb", exampleEn: "It's time to have the car serviced.", exampleTk: "Maşyny hyzmat etdirmegiň wagty geldi." }, { en: "have a photo taken", tk: "surat aldyrmak", partOfSpeech: "verb", exampleEn: "We had our photo taken at the ceremony.", exampleTk: "Dabarada suratymyzy aldyrdyk." }, { en: "have your blood tested", tk: "ganyny barlatmak", partOfSpeech: "verb", exampleEn: "The doctor asked me to have my blood tested.", exampleTk: "Lukman ganymy barlatmagy haýyş etdi." }] } },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "upper-int-u03-l02-get-something-done",
        titleEn: "Get Something Done",
        titleTk: "Get Something Done — Has Gündelik Görnüş",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "'Get something done' — 'have something done' ýaly many, ýöne has gündelik gepleşikde ulanylýar. 'I need to get my passport renewed.' Başga ulanylyş: 'get someone to do something' — birinden bir zat etmegini haýyş etmek ýa-da yryp etdirmek. 'I got my brother to help me move.' — Doganymy göçmäge kömek etdirdim." } },
            { type: "grammar_note", data: { titleTk: "Get something done vs Get someone to do", explanationTk: "get + at sözi + PP = have something done ýaly (gündelik). get + adam + to + işlik = birini bir zat etdirmek.", pattern: "I need to get my visa renewed. / I got him to fix the leak.", examples: [{ en: "I need to get my phone screen fixed.", tk: "Telefonumyň ekranyny düzetdirmeli." }, { en: "She finally got her landlord to repair the heating.", tk: "Ahyrsoňunda eýesini gyzdyryjy düzetmäge yrdyrdy." }, { en: "Can you get someone to deliver this?", tk: "Muny biriniň eltip bermegini sazlap bilersiňizmi?" }] } },
            { type: "dialogue", data: { titleTk: "Söhbetdeşlik: Hyzmatlar barada", exchanges: [{ speakerEn: "Merdan", lineEn: "You look different! Did you have your hair cut?", lineTk: "Başga görünýärsiň! Saçyňy kestirdimi?" }, { speakerEn: "Aýna", lineEn: "Yes, and I had it dyed too. I also need to get my glasses changed.", lineTk: "Hawa, boýatdym hem. Äýnegimi hem çalyşdyrmaly." }, { speakerEn: "Merdan", lineEn: "I need to get my apartment repainted. It's looking really old.", lineTk: "Men hem öýümi täzeden boýatdyrmaly. Gaty köne görünýär." }, { speakerEn: "Aýna", lineEn: "Can't you do it yourself?", lineTk: "Özüň edip bilmersiňmi?" }, { speakerEn: "Merdan", lineEn: "I tried! But I got my friend to help and it looked worse!", lineTk: "Synanşdym! Ýöne dostumdan kömek etdirdim, has erbet boldy!" }] } },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "upper-int-u03-l03-causative-passive-experience",
        titleEn: "Causative for Negative Experiences",
        titleTk: "Başga biriniň eden zyýanly hadysalar",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "'Have something done' käwagt özüňiziň islemediňiz, başga biriniň zyýanly etmegi barada hem ulanylýar. 'I had my bag stolen' — Sumkam ogurlanyp girildi (özüm saýlamadym). 'She had her house broken into' — Öýüne ogry girdi. Bu görnüşde 'by someone' goşulmaz, sebäbi kim edenini bilmeýän ýagdaýlar." } },
            { type: "example_set", data: { titleTk: "Zyýanly hadysalar — have something done", examples: [{ en: "He had his wallet stolen on the bus.", tk: "Awtobusdaky gapjygy ogurlanyp girildi." }, { en: "They had their website hacked last year.", tk: "Geçen ýyl web sahypalary hakerlendi." }, { en: "She had her car damaged in a car park.", tk: "Duralgada maşyny zaýalandy." }, { en: "I had my luggage lost by the airline.", tk: "Howa ýoly kompaniýasy goşumy ýitirdi." }] } },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "3-nji Bölüm Synagy: Causative Have & Get",
      questions: [
        { order: 1, questionText: "I need to _____ my hair cut before the wedding.", questionType: "multiple_choice_grammar", options: ["get", "have", "do", "make"], correctIndex: 1 },
        { order: 2, questionText: "She _____ her eyes tested every year.", questionType: "multiple_choice_grammar", options: ["makes", "does", "has", "gets"], correctIndex: 2 },
        { order: 3, questionText: "They are _____ their house painted next month.", questionType: "multiple_choice_grammar", options: ["doing", "making", "having", "getting"], correctIndex: 2 },
        { order: 4, questionText: "'Have something done' nämäni aňladýar?", questionType: "translate_en_tk", options: ["Özüň etmek", "Başga birini etdirmek / hyzmat almak", "Etmegi planlamak", "Etmek islemek"], correctIndex: 1 },
        { order: 5, questionText: "I got my brother _____ my computer. (fix)", questionType: "multiple_choice_grammar", options: ["fix", "fixed", "to fix", "fixing"], correctIndex: 2 },
        { order: 6, questionText: "He had his wallet _____ on the train. (steal)", questionType: "multiple_choice_grammar", options: ["steal", "stolen", "stole", "stealing"], correctIndex: 1 },
        { order: 7, questionText: "'Get someone to do' nämäni aňladýar?", questionType: "translate_en_tk", options: ["Bir zat almak", "Birinden bir zat etdirmek", "Bir zat etmek", "Bir ýere gitmek"], correctIndex: 1 },
        { order: 8, questionText: "Can you get someone _____ this package? (deliver)", questionType: "multiple_choice_grammar", options: ["deliver", "delivered", "to deliver", "delivering"], correctIndex: 2 },
        { order: 9, questionText: "She had her website _____ last year. (hack — zyýanly)", questionType: "multiple_choice_grammar", options: ["hack", "hacked", "hacking", "to hack"], correctIndex: 1 },
        { order: 10, questionText: "Have something done we get something done tapawudy näme?", questionType: "translate_en_tk", options: ["Tapawudy ýok", "Have has resmi, get has gündelik", "Get has resmi", "Düýbünden tapawutly manylary bar"], correctIndex: 1 },
      ],
    },
  },

  // ─── UNIT 4: PARTICIPLE CLAUSES ──────────────────────────────────────────
  {
    unitNumber: 4,
    slug: "upper-int-unit-04-participle-clauses",
    titleEn: "Participle Clauses",
    titleTk: "Gatnaşyk Sözlemleri",
    description: "Bu bölümde işlikiň -ing we -ed görnüşleri bilen düzülýän gysgaltma sözlemler öwrenilýär. Bu gurluş edebi we resmi Iňlisçede köp ulanylýar.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "upper-int-u04-l01-ing-participle",
        titleEn: "-ing Participle Clauses",
        titleTk: "-ing bilen Gatnaşyk Sözlemleri",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "-ing gatnaşyk sözlemleri iki sözlemi gysgaltmak üçin ulanylýar. 'As she walked down the street, she noticed a strange man' = 'Walking down the street, she noticed a strange man.' Iki hereket bir wagtda ýa-da biri ikincisinden öň bolýar. Iki sözlemiň hem mazmuny birmeňzeş şahsa degişli bolmaly." } },
            { type: "grammar_note", data: { titleTk: "-ing gatnaşyk sözlemleriniň görnüşleri", explanationTk: "Bir wagtda: 'Walking to work, I saw an accident.' (Işe ýöräp barýarkam...) Sebäp: 'Feeling tired, she went to bed early.' (Ýadaw duýany sebäpli...) Sözüň başynda ýa-da ortasynda gelip biler.", pattern: "[işlik + -ing], [esasy sözlem]. / [Esasy sözlem], [işlik + -ing].", examples: [{ en: "Opening the door, he saw a surprise party inside.", tk: "Gapyny açanda, içerde geň galdyrma baýramy gördi." }, { en: "Feeling nervous, she took a deep breath before speaking.", tk: "Hopugyp, gürlemezden öň çuň dem aldy." }, { en: "Not knowing the way, they stopped to ask for directions.", tk: "Ýoly bilmän, ugur soramak üçin durdular." }] } },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "upper-int-u04-l02-ed-participle",
        titleEn: "-ed & Having Done Participle Clauses",
        titleTk: "-ed we Having Done bilen Gatnaşyk Sözlemleri",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "-ed (Past Participle) gatnaşyk sözlemleri passyw many berýär ýa-da geçmiş wakalary gysgaldyp beýan edýär. 'Shocked by the news, she sat down.' (Habar bilen geňirgenip...). 'Having + PP' — esasy sözlemden öň bolan hereket üçin ulanylýar: 'Having finished her work, she went home.' (Işini tamamlansoň öýe gitdi)." } },
            { type: "grammar_note", data: { titleTk: "-ed we Having + PP gatnaşyk sözlemleri", explanationTk: "-ed gatnaşyk: Shocked by the news... / Known for his honesty... 'Having + PP': bir hereket ikincisinden öň boldy: Having eaten, I felt sleepy.", pattern: "[PP], [esasy sözlem]. / Having [PP], [esasy sözlem].", examples: [{ en: "Disappointed by the result, he decided to try again.", tk: "Netijeden göwni galmak bilen, täzeden synanşmak kararyna geldi." }, { en: "Having lived abroad for years, she speaks several languages.", tk: "Ýyllarca daşary ýurtda ýaşansoň, birnäçe dil bilýär." }, { en: "Written in 1950, the novel is still widely read today.", tk: "1950-nji ýylda ýazylan roman häzir hem giňden okalýar." }] } },
            { type: "dialogue", data: { titleTk: "Söhbetdeşlik: Edebi dil", exchanges: [{ speakerEn: "Dawut", lineEn: "I love how you write. Your sentences are very sophisticated.", lineTk: "Ýazuş uslubyňy gowy görýärin. Sözlemleriň gaty çylşyrymly." }, { speakerEn: "Güneş", lineEn: "Thank you. I try to use participle clauses to avoid repetition.", lineTk: "Sag boluň. Gaýtalamany azaltmak üçin gatnaşyk sözlemlerini ulanmaga çalyşýaryn." }, { speakerEn: "Dawut", lineEn: "For example?", lineTk: "Mysal üçin?" }, { speakerEn: "Güneş", lineEn: "Instead of 'After she had finished the report, she sent it', I write 'Having finished the report, she sent it'.", lineTk: "'Hasabaty tamamlanansoň, ugratdy' ýerine 'Hasabaty tamamlap, ugratdy' ýazýaryn." }] } },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "upper-int-u04-l03-participles-in-use",
        titleEn: "Participle Clauses in Writing & Speech",
        titleTk: "Gatnaşyk Sözlemlerini Ulanmak",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Gatnaşyk sözlemleri ýazuwyňyzy has akgynly we professional görünmäge kömek edýär. Olar: 1) Iki sözlemi birleşdirip, gaýtalamany azaldýar. 2) Wakalaryň tertibini we sebäbini aňladýar. 3) Resmi ýazuwda we edebiýatda giňden ulanylýar." } },
            { type: "example_set", data: { titleTk: "Gatnaşyk sözlemlerini ulanmak — deňeşdirme", examples: [{ en: "Ordinary: When she arrived at the office, she immediately called a meeting. → Participle: Arriving at the office, she immediately called a meeting.", tk: "Adaty: Ofise gelende, derrew ýygnak çagyrdy. → Gatnaşyk: Ofise gelip, derrew ýygnak çagyrdy." }, { en: "Ordinary: Because he was trained as an engineer, he solved the problem quickly. → Participle: Trained as an engineer, he solved the problem quickly.", tk: "Adaty: Inžener hökmünde taýýarlananlygy üçin, meseläni çalt çözdi. → Gatnaşyk: Inžener hökmünde taýýarlanyp, meseläni çalt çözdi." }, { en: "Ordinary: After he had finished the meeting, he flew to Ashgabat. → Participle: Having finished the meeting, he flew to Ashgabat.", tk: "Adaty: Ýygnagy tamamlansoň, Aşgabada uçdy. → Gatnaşyk: Ýygnagy tamamlap, Aşgabada uçdy." }] } },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "4-nji Bölüm Synagy: Gatnaşyk Sözlemleri",
      questions: [
        { order: 1, questionText: "_____ the door, he found a letter on the floor. (open)", questionType: "multiple_choice_grammar", options: ["He opened", "Opening", "Opened", "Having open"], correctIndex: 1 },
        { order: 2, questionText: "_____ by the news, she sat down immediately. (shock)", questionType: "multiple_choice_grammar", options: ["Shocking", "Shocks", "Shocked", "Having shocked"], correctIndex: 2 },
        { order: 3, questionText: "_____ her work, she went home early. (finish)", questionType: "multiple_choice_grammar", options: ["Finishing", "Finished", "Having finished", "Having finishing"], correctIndex: 2 },
        { order: 4, questionText: "Not _____ the answer, I asked for help. (know)", questionType: "multiple_choice_grammar", options: ["known", "knew", "knowing", "to know"], correctIndex: 2 },
        { order: 5, questionText: "'-ed gatnaşyk sözlemi' haýsy many berýär?", questionType: "translate_en_tk", options: ["Hereket edip", "Passyw ýa-da geçmiş ýagdaý", "Geljek hereket", "Sorag"], correctIndex: 1 },
        { order: 6, questionText: "_____ in 1889, the Eiffel Tower is still famous. (build)", questionType: "multiple_choice_grammar", options: ["Building", "Build", "Built", "Having built"], correctIndex: 2 },
        { order: 7, questionText: "_____ tired, she decided to take a break. (feel)", questionType: "multiple_choice_grammar", options: ["Felt", "Feeling", "Feels", "Having feel"], correctIndex: 1 },
        { order: 8, questionText: "Having + PP nämäni aňladýar?", questionType: "translate_en_tk", options: ["Şol wagt bolan hereket", "Esasy sözlemden öň bolan hereket", "Geljek hereket", "Şert"], correctIndex: 1 },
        { order: 9, questionText: "_____ abroad for years, she speaks three languages. (live)", questionType: "multiple_choice_grammar", options: ["Living", "Lived", "Having lived", "Live"], correctIndex: 2 },
        { order: 10, questionText: "Gatnaşyk sözlemlerini ulanmak näme üçin möhüm?", questionType: "translate_en_tk", options: ["Uzyn ýazmak üçin", "Gaýtalamany azaltmak we has professional görünmek üçin", "Sorag düzmek üçin", "Inkär etmek üçin"], correctIndex: 1 },
      ],
    },
  },

  // ─── UNIT 5: NON-DEFINING RELATIVE CLAUSES ──────────────────────────────
  {
    unitNumber: 5,
    slug: "upper-int-unit-05-non-defining-relative",
    titleEn: "Non-Defining Relative Clauses",
    titleTk: "Goşmaça Maglumat berýän Anyklaýjy Sözlemler",
    description: "Bu bölümde anyklaýjy sözlemleriň iki görnüşi öwrenilýär: hökman maglumat berýänler (defining) we goşmaça maglumat berýänler (non-defining), dinamlar bilen aýrylýar.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "upper-int-u05-l01-non-defining-form",
        titleEn: "Non-Defining Relative Clauses — Form",
        titleTk: "Non-Defining Anyklaýjy Sözlemler — Düzümi",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Defining (anyklaýjy) sözlemler — at sözüni anyklaýar, ol bolmasa sözlemiň manysy üýtgeýär: 'The man who called is my brother.' Non-defining (goşmaça) sözlemler — dyngy bilen aýrylýar, goşmaça maglumat berýär, bolmasa-da sözlem düşnükli: 'My brother, who is a doctor, called me.' Tapawut: non-defining sözlemde 'that' ulanylmaýar, ikitaraply dyngy bolmaly." } },
            { type: "grammar_note", data: { titleTk: "Non-defining sözlem düzümi", explanationTk: "[At sözi], + who/which/where/whose + [goşmaça maglumat], + [sözlemiň galan bölegi]. Dyngy hökmany. 'That' ulanylmaýar. Çykaryp bolan bolsaňyz — non-defining.", pattern: "My sister, who lives in London, is visiting us next week.", examples: [{ en: "The report, which was finished yesterday, has been sent to the client.", tk: "Düýn tamamlanan hasabat müşderä ugradyldy." }, { en: "My manager, whose opinion I value, suggested this approach.", tk: "Pikirini gymmatly görýän müdirim bu çemeleşmäni teklip etdi." }, { en: "We visited Nohur, where many ancient trees grow.", tk: "Köp gadymy agaçlaryň öýesi bolan Nohura bardyk." }] } },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "upper-int-u05-l02-reduced-relative",
        titleEn: "Reduced Relative Clauses",
        titleTk: "Gysgaldylan Anyklaýjy Sözlemler",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Anyklaýjy sözlemleri -ing ýa-da -ed görnüşi bilen gysgaldyp bolýar. 'The man who is standing there' → 'The man standing there'. 'The car which was stolen' → 'The stolen car' ýa-da 'The car stolen from the car park'. Bu gysgaltmalar ýazuwyňyzy has akgynly edýär." } },
            { type: "grammar_note", data: { titleTk: "Gysgaldylan anyklaýjy sözlem düzümi", explanationTk: "who/which + is/are + -ing → -ing. who/which + was/were + PP → PP. Diňe aktyw hereket üçin -ing, passyw ýa-da ýagdaý üçin PP.", pattern: "The woman talking to the director = The woman who is talking to the director.", examples: [{ en: "The students taking the exam must switch off their phones.", tk: "Synagda oturan okuwçylar telefonlaryny öçürmeli." }, { en: "The bridge built in 1902 is still standing.", tk: "1902-nji ýylda gurlan köpri häzir hem dur." }, { en: "Anyone wishing to apply should contact HR.", tk: "Ýüz tutmak isleýän her kim HR bilen habarlaşmaly." }] } },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "upper-int-u05-l03-relative-prepositions",
        titleEn: "Relative Clauses with Prepositions",
        titleTk: "Çeýeleme goşma bilen Anyklaýjy Sözlemler",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Resmi Iňlisçede çeýeleme goşmalar (prepositions) 'whom' ýa-da 'which'-den öňüne geçirilýär. 'The person to whom I spoke' (resmi) vs 'The person who I spoke to' (gündelik). 'The company for which I work' (resmi) vs 'The company that I work for' (gündelik)." } },
            { type: "example_set", data: { titleTk: "Resmi we gündelik deňeşdirmesi", examples: [{ en: "Formal: The colleague with whom I share an office is very helpful. Informal: The colleague who I share an office with is very helpful.", tk: "Resmi: Ofis paýlaşýan kärdeşim gaty kömekçi. Gündelik: Ofis paýlaşýan kärdeşim gaty kömekçi." }, { en: "Formal: The project on which we worked lasted two years. Informal: The project that we worked on lasted two years.", tk: "Resmi: Üstünde işlän taslamamy iki ýyl dowam etdi." }, { en: "Formal: The reason for which she resigned is unclear. Informal: The reason why she resigned is unclear.", tk: "Resmi/Gündelik: Işden çykmasynyň sebäbi belli däl." }] } },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "5-nji Bölüm Synagy: Non-Defining Anyklaýjy Sözlemler",
      questions: [
        { order: 1, questionText: "My sister, _____ lives in Istanbul, is visiting me this weekend.", questionType: "multiple_choice_grammar", options: ["that", "which", "who", "whose"], correctIndex: 2 },
        { order: 2, questionText: "Non-defining sözlemlerde haýsy söz ulanylmaýar?", questionType: "translate_en_tk", options: ["who", "which", "that", "whose"], correctIndex: 2 },
        { order: 3, questionText: "The report, _____ was finished yesterday, has been sent.", questionType: "multiple_choice_grammar", options: ["that", "who", "which", "whose"], correctIndex: 2 },
        { order: 4, questionText: "'The woman talking to him' — bu nämäni gysgaldýar?", questionType: "translate_en_tk", options: ["The woman who talked to him", "The woman who is talking to him", "The woman talked to him", "The woman to talk to him"], correctIndex: 1 },
        { order: 5, questionText: "The bridge _____ in 1902 is still standing. (build — gysgaldylan)", questionType: "multiple_choice_grammar", options: ["building", "to build", "built", "builds"], correctIndex: 2 },
        { order: 6, questionText: "My manager, _____ opinion I value, suggested this approach.", questionType: "multiple_choice_grammar", options: ["who", "which", "that", "whose"], correctIndex: 3 },
        { order: 7, questionText: "Defining we Non-defining sözlemleriň tapawudy näme?", questionType: "translate_en_tk", options: ["Tapawudy ýok", "Defining hökman, non-defining goşmaça (dyngy bilen)", "Non-defining hökman", "Defining dyngy bilen aýrylýar"], correctIndex: 1 },
        { order: 8, questionText: "The colleague _____ whom I work is very experienced. (resmi)", questionType: "multiple_choice_grammar", options: ["to", "for", "with", "at"], correctIndex: 2 },
        { order: 9, questionText: "We visited Merv, _____ was once a great city.", questionType: "multiple_choice_grammar", options: ["that", "who", "which", "whose"], correctIndex: 2 },
        { order: 10, questionText: "'Anyone wishing to apply' — bu nämäni aňladýar?", questionType: "translate_en_tk", options: ["Ýüz tutup bilýän biri", "Ýüz tutmak isleýän islendik adam", "Ýüz tutmak üçin biri", "Ýüz tutmak islemeýän biri"], correctIndex: 1 },
      ],
    },
  },

  // ─── UNIT 6: ADVANCED REPORTED SPEECH ───────────────────────────────────
  {
    unitNumber: 6,
    slug: "upper-int-unit-06-reporting-verbs",
    titleEn: "Advanced Reported Speech & Reporting Verbs",
    titleTk: "Ösen Habar Bermek we Habar Işlikleri",
    description: "Bu bölümde habar bermekde ulanylýan dürli işlikler öwrenilýär: suggest, warn, advise, promise, refuse, accuse, deny we olaryň gurluşlary.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "upper-int-u06-l01-reporting-verb-patterns",
        titleEn: "Reporting Verb Patterns",
        titleTk: "Habar Işlikleriniň Gurluşlary",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Başgalaryň sözlerini habar bereniňizde diňe 'said' we 'told' ulanmak ýeterlik däl. Has dürli işlikler: suggest (teklip etdi), warn (duýdurdy), advise (maslahat berdi), promise (wada berdi), refuse (ret etdi), admit (boýun aldy), deny (inkär etdi), complain (şikaýat etdi), insist (ýkrar etdi)." } },
            { type: "grammar_note", data: { titleTk: "Habar işlikleriniň gurluşlary", explanationTk: "+ that sözlemi: say, tell, admit, deny, explain, insist, suggest, complain. + to + infinitive: refuse, agree, offer, promise, threaten. + someone + to + inf: warn, advise, remind, encourage, persuade. + -ing: suggest, recommend, deny, admit.", pattern: "He suggested going to the cinema. / She warned me not to be late. / They promised to help.", examples: [{ en: "She suggested taking a different route.", tk: "Ol başga ýol almaklygy teklip etdi." }, { en: "He warned us not to swim in that area.", tk: "Ol bize şol ýerde ýüzmezligi duýdurdy." }, { en: "They promised to deliver it by Friday.", tk: "Olar anna gününe çenli eltip berjekliklerini wada berdiler." }] } },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "upper-int-u06-l02-say-claim-allege",
        titleEn: "Reporting in News & Academic Contexts",
        titleTk: "Habar we Akademiki Kontekstde Habar Bermek",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Habar-gazet dilinde we akademiki ýazuwda habar işlikleri has çylşyrymly ulanylýar. 'It is claimed that...', 'He is reported to have...', 'Experts argue that...', 'According to...', 'Research suggests that...' ýaly gurluşlar resmi ýazuwda hökmandyr." } },
            { type: "vocabulary_list", data: { titleTk: "Habar we akademiki işlikler", words: [{ en: "claim", tk: "öňe sürmek / talap etmek", partOfSpeech: "verb", exampleEn: "Scientists claim that the drug is effective.", exampleTk: "Alymlar derman netijelidir diýip öňe sürýärler." }, { en: "argue", tk: "jedel etmek / delil getirmek", partOfSpeech: "verb", exampleEn: "Some economists argue that inflation is temporary.", exampleTk: "Käbir ykdysatçylar inflasiýanyň wagtlaýyndygyny delil getirýärler." }, { en: "allege", tk: "doly subut edilmezden öňe sürmek", partOfSpeech: "verb", exampleEn: "He is alleged to have stolen the funds.", exampleTk: "Serişdeleri ogurlany öňe sürülýär." }, { en: "imply", tk: "öňünden aňlatmak / içinden many bermek", partOfSpeech: "verb", exampleEn: "Her comment implied she was unhappy.", exampleTk: "Onuň düşündirişi närazylygy aňladýardy." }] } },
            { type: "example_set", data: { titleTk: "Habar dili mysallary", examples: [{ en: "According to local residents, the noise is unbearable.", tk: "Ýerli ýaşaýjylara görä, şowur çydap bolmazdyr." }, { en: "It has been reported that three people were injured.", tk: "Üç adamyň ýaralananlygy habar berildi." }, { en: "Research suggests that sleep deprivation affects performance significantly.", tk: "Barlag ukusyzlygyň netijelilige düýpli täsir edýändigini görkezýär." }] } },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "upper-int-u06-l03-commands-exclamations-reported",
        titleEn: "Reported Commands & Exclamations",
        titleTk: "Habarly Buýruklar we Haýkyryklar",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Buýruklar habar berlende: tell/order/ask + adam + to + işlik. 'Stop talking!' → 'He told me to stop talking.' Inkär buýruklar: 'Don't touch that!' → 'She told him not to touch it.' Haýkyryklar: 'What a surprise!' → 'She exclaimed that it was a wonderful surprise.'" } },
            { type: "grammar_note", data: { titleTk: "Habarly buýruk düzümi", explanationTk: "tell/order + adam + to + işlik. tell/order + adam + not to + işlik (inkär). ask + adam + to + işlik (ýuwaş haýyş). warn + adam + not to + işlik.", pattern: "'Sit down!' → He told me to sit down. / 'Don't be late!' → She warned me not to be late.", examples: [{ en: "'Clean your room!' → She told him to clean his room.", tk: "'Otagyňy arassala!' → Ol oňa otagyný arassalamagy aýtdy." }, { en: "'Please don't leave.' → He asked her not to leave.", tk: "'Gitme, haýyş edýärin.' → Ol ondan gitmezligini haýyş etdi." }, { en: "'Submit the report immediately!' → The manager ordered the team to submit the report immediately.", tk: "'Hasabaty derrew tabşyryň!' → Müdür topara hasabaty derrew tabşyrmagy buýurdy." }] } },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "6-njy Bölüm Synagy: Ösen Habar Bermek",
      questions: [
        { order: 1, questionText: "She suggested _____ a different approach. (try)", questionType: "multiple_choice_grammar", options: ["to try", "try", "trying", "tried"], correctIndex: 2 },
        { order: 2, questionText: "He warned us _____ late. (not to be)", questionType: "multiple_choice_grammar", options: ["not be", "not being", "not to be", "to not be"], correctIndex: 2 },
        { order: 3, questionText: "They promised _____ by Friday. (deliver)", questionType: "multiple_choice_grammar", options: ["delivering", "delivered", "to deliver", "deliver"], correctIndex: 2 },
        { order: 4, questionText: "'Claim' Türkmençede näme?", questionType: "translate_en_tk", options: ["Kabul etmek", "Öňe sürmek / talap etmek", "Inkär etmek", "Boýun almak"], correctIndex: 1 },
        { order: 5, questionText: "'Don't touch it!' → She told him _____ it.", questionType: "multiple_choice_grammar", options: ["not touch", "not touching", "not to touch", "to not touch"], correctIndex: 2 },
        { order: 6, questionText: "He admitted _____ the money. (take)", questionType: "multiple_choice_grammar", options: ["to take", "take", "taking", "taken"], correctIndex: 2 },
        { order: 7, questionText: "Research _____ that exercise improves mental health.", questionType: "multiple_choice_grammar", options: ["says", "tells", "suggests", "reports"], correctIndex: 2 },
        { order: 8, questionText: "'Allege' Türkmençede näme?", questionType: "translate_en_tk", options: ["Subut etmek", "Doly subut edilmezden öňe sürmek", "Kabul etmek", "Inkär etmek"], correctIndex: 1 },
        { order: 9, questionText: "She denied _____ about the problem. (know)", questionType: "multiple_choice_grammar", options: ["to know", "know", "known", "knowing"], correctIndex: 3 },
        { order: 10, questionText: "The manager ordered the team _____ the report. (submit)", questionType: "multiple_choice_grammar", options: ["submitting", "submitted", "to submit", "submit"], correctIndex: 2 },
      ],
    },
  },

  // ─── UNIT 7: INVERSION ──────────────────────────────────────────────────
  {
    unitNumber: 7,
    slug: "upper-int-unit-07-inversion",
    titleEn: "Inversion for Emphasis",
    titleTk: "Güýçlendirme üçin Tersine Çewiriş",
    description: "Bu bölümde formal Iňlisçede güýçlendirme we dramatik täsir döretmek üçin ulanylýan inversion (söz tertibiniň tersine çewirilmegi) öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "upper-int-u07-l01-negative-adverbials",
        titleEn: "Inversion with Negative Adverbials",
        titleTk: "Negatiw Zaman Görkezijileri bilen Tersine Çewiriş",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Güýçlendirme üçin käbir negatiw sözler ýa-da çäklendiriji sözler sözüň başyna getirilende, kömekçi işlik we şahs tersine çewirilýär (sorag ýaly). 'Never have I seen...' 'Rarely does she...' 'Not only did he...' Bu gurluş formal çykyşlarda, ýazuwda we dramada köp ulanylýar." } },
            { type: "grammar_note", data: { titleTk: "Inversion düzümi", explanationTk: "Negatiw/çäklendiriji söz + kömekçi işlik + şahs + esasy işlik. Negatiw sözler: Never, Rarely, Seldom, Hardly ever, Not only, No sooner, Little, Under no circumstances.", pattern: "Never have I seen such a thing. / Rarely does she make mistakes. / Not only did he fail, but he also lied.", examples: [{ en: "Never before have we faced such a challenge.", tk: "Beýle kynçylykla hiç wagt öňde durmadyk." }, { en: "Rarely do you find such dedication in a young person.", tk: "Ýaş adamda şeýle yhlaslylyk seýrek duş gelýär." }, { en: "Not only did she win first place, but she also set a new record.", tk: "Ol diňe birinji ýer almak bilen çäklenmedi, eýsem täze rekord hem goýdy." }] } },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "upper-int-u07-l02-conditional-inversion",
        titleEn: "Conditional Inversion",
        titleTk: "Şert Sözlemlerinde Tersine Çewiriş",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Şert sözlemlerinde hem inversion mümkin — bu has resmi görnüş. 'If I had known' → 'Had I known'. 'If it were' → 'Were it'. 'If you should need' → 'Should you need'. Bu görnüş resmi hatlarda, şertnamalarda we resmi çykyşlarda ulanylýar." } },
            { type: "grammar_note", data: { titleTk: "Şert inversiony", explanationTk: "If + had = Had (3rd conditional formal). If + were = Were (2nd conditional formal). If + should = Should (1st conditional formal).", pattern: "Had I known = If I had known. Were I you = If I were you. Should you need help = If you should need help.", examples: [{ en: "Had I known about the problem, I would have helped immediately.", tk: "Mesele barada bilsedim, derrew kömek ederdim." }, { en: "Were this decision to fail, the consequences would be serious.", tk: "Bu karar şowsuz çykan bolsa, netijeleri çynlakaý bolardy." }, { en: "Should you require any assistance, please do not hesitate to contact us.", tk: "Islendik kömege mätäç bolsaňyz, biziň bilen habarlaşmakdan çekinmäň." }] } },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "upper-int-u07-l03-so-neither-inversion",
        titleEn: "So/Neither Do I — Short Inversion",
        titleTk: "So/Neither Do I — Gysgaça Tersine Çewiriş",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Biriniň sözüne ylalaşanyňda 'So do I / Neither do I' ulanylýar. Tassyklama: 'I like coffee.' → 'So do I.' / 'Me too.' Inkär: 'I don't like tea.' → 'Neither do I.' / 'Nor do I.' / 'Me neither.' Kömekçi işlik sözleme görä üýtgeýär." } },
            { type: "grammar_note", data: { titleTk: "So/Neither + kömekçi işlik + şahs", explanationTk: "So + kömekçi işlik + şahs = tassyklamada ylalaşmak. Neither/Nor + kömekçi işlik + şahs = inkärde ylalaşmak.", pattern: "'I love jazz.' 'So do I!' / 'I haven't seen it.' 'Neither have I.'", examples: [{ en: "A: I've never been to France. B: Neither have I!", tk: "A: Men Fransiýada hiç bolmadym. B: Men hem!" }, { en: "A: I'm exhausted. B: So am I!", tk: "A: Men gaty ýadaw. B: Men hem!" }, { en: "A: I can't swim. B: Nor can I.", tk: "A: Men ýüzüp bilemok. B: Men hem bilemok." }] } },
            { type: "dialogue", data: { titleTk: "Söhbetdeşlik: Ylalaşmak", exchanges: [{ speakerEn: "Läle", lineEn: "I really enjoyed that lecture.", lineTk: "Men şol leksiýany hakykatdan haladum." }, { speakerEn: "Begmyrat", lineEn: "So did I! The speaker was amazing.", lineTk: "Men hem! Çykyş eden adam ajaýypdy." }, { speakerEn: "Läle", lineEn: "I hadn't heard about this topic before.", lineTk: "Bu mowzuk barada öň eşitmändim." }, { speakerEn: "Begmyrat", lineEn: "Neither had I. We should attend more events like this.", lineTk: "Men hem. Şeýle çärelere has köp gatnaşmaly." }] } },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "7-nji Bölüm Synagy: Inversion",
      questions: [
        { order: 1, questionText: "Never _____ I seen such a beautiful sunset!", questionType: "multiple_choice_grammar", options: ["I have", "have", "I had", "had"], correctIndex: 1 },
        { order: 2, questionText: "Rarely _____ she make a mistake.", questionType: "multiple_choice_grammar", options: ["do", "is", "does", "has"], correctIndex: 2 },
        { order: 3, questionText: "'Had I known' nämä deňdir?", questionType: "translate_en_tk", options: ["If I know", "If I knew", "If I had known", "If I have known"], correctIndex: 2 },
        { order: 4, questionText: "Not only _____ he fail, but he also lied!", questionType: "multiple_choice_grammar", options: ["he did", "did", "does", "he does"], correctIndex: 1 },
        { order: 5, questionText: "'Should you need help' nämä deňdir?", questionType: "translate_en_tk", options: ["If you need help", "If you should need help", "If you needed help", "If you had needed help"], correctIndex: 1 },
        { order: 6, questionText: "A: I love jazz. B: _____ do I!", questionType: "multiple_choice_grammar", options: ["Neither", "Nor", "So", "Not"], correctIndex: 2 },
        { order: 7, questionText: "A: I haven't seen the film. B: _____ have I.", questionType: "multiple_choice_grammar", options: ["So", "Neither", "Also", "Too"], correctIndex: 1 },
        { order: 8, questionText: "'Were I you' nämä deňdir?", questionType: "translate_en_tk", options: ["If I were you", "If I am you", "If I was you", "If I had been you"], correctIndex: 0 },
        { order: 9, questionText: "Under no circumstances _____ you give out the password.", questionType: "multiple_choice_grammar", options: ["you should", "should you", "you must", "must"], correctIndex: 1 },
        { order: 10, questionText: "A: I'm exhausted. B: _____ am I.", questionType: "multiple_choice_grammar", options: ["So", "Neither", "Nor", "Not"], correctIndex: 0 },
      ],
    },
  },

  // ─── UNIT 8: COLLOCATION & WORD FAMILIES ────────────────────────────────
  {
    unitNumber: 8,
    slug: "upper-int-unit-08-collocation",
    titleEn: "Collocation & Word Families",
    titleTk: "Söz Birleşmeleri we Söz Maşgalalary",
    description: "Bu bölümde iňlisçede sözleriň biri-biri bilen nähili birleşýändigi (collocation) we söz maşgalalary (word families) öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "upper-int-u08-l01-verb-noun-collocation",
        titleEn: "Verb-Noun Collocations",
        titleTk: "Işlik-At sözi Birleşmeleri",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Collocation — biri-biri bilen tebigy ulanylýan söz jübütleri. Sözleri aýratyn bilmek ýeterlik däl — olaryň biri-biri bilen nähili birleşýändigini hem bilmeli. 'Do homework' (etmek) ýa-da 'make homework' däl. 'Make a decision' ýa-da 'do a decision' däl. Bu 'ýalňyş bolsa hem düşnükli, ýöne tebigy görünmez' meselesi." } },
            { type: "vocabulary_list", data: { titleTk: "Do we Make — esasy tapawut", words: [{ en: "make a decision / mistake / effort", tk: "karar bermek / ýalňyşmak / tagalla etmek", partOfSpeech: "verb", exampleEn: "She made the right decision under pressure.", exampleTk: "Ol basyş astynda dogry karar berdi." }, { en: "do homework / research / damage / business", tk: "öý işi / barlag / zyýan / iş etmek", partOfSpeech: "verb", exampleEn: "They are doing research on renewable energy.", exampleTk: "Gaýtadan dikeldilýän energiýa barada barlag geçirýärler." }, { en: "make a speech / progress / money / friends", tk: "çykyş / öňegidişlik / pul / dost etmek", partOfSpeech: "verb", exampleEn: "He made a powerful speech at the ceremony.", exampleTk: "Ol dabara güýçli çykyş etdi." }, { en: "do your best / a favour / harm", tk: "elinden gelenini etmek / ýagşylyk / zyýan etmek", partOfSpeech: "verb", exampleEn: "Please do me a favour and check this for me.", exampleTk: "Haýyş edýärin, maňa ýagşylyk et we muny barla." }] } },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "upper-int-u08-l02-adjective-noun-collocation",
        titleEn: "Adjective-Noun & Strong Collocations",
        titleTk: "Sypat-At sözi we Güýçli Birleşmeler",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Güçli collocations — diňe bir söz kabul edýän ýerler. 'Heavy traffic' (köp ulag — heavy sözüni ulanmaly, big traffic ýalňyş). 'Strong tea/coffee' (gämi çaý/kofe — strong, heavy tea däl). 'High temperature' (ýokary temperatura — big temperature däl). Bulary ýatda saklamak Iňlisçäňizi has tebigy edýär." } },
            { type: "vocabulary_list", data: { titleTk: "Güýçli birleşmeler", words: [{ en: "heavy traffic / rain / workload / smoker", tk: "ulag dyknyşygy / güýçli ýagyş / köp iş ýüki / köp çekýän", partOfSpeech: "adjective", exampleEn: "There was heavy traffic on the motorway this morning.", exampleTk: "Bu irden awtomagistralda ulag dyknyşygy bardy." }, { en: "strong opinion / evidence / coffee / accent", tk: "güýçli pikir / delil / gämi kofe / güýçli äheň", partOfSpeech: "adjective", exampleEn: "She has strong opinions on education reform.", exampleTk: "Onuň bilim özgertmesi barada güýçli pikirleri bar." }, { en: "high temperature / expectations / risk / standards", tk: "ýokary temperatura / garaşmalar / töwekgelçilik / standartlar", partOfSpeech: "adjective", exampleEn: "The project carries a high risk of failure.", exampleTk: "Taslamanyň şowsuz bolmak töwekgelçiligi ýokary." }, { en: "deep sleep / trouble / understanding / regret", tk: "çuň uky / kynçylyk / düşünmek / gynanç", partOfSpeech: "adjective", exampleEn: "He expressed deep regret for his actions.", exampleTk: "Ol hereketlerine çuň gynanç bildirdi." }] } },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "upper-int-u08-l03-word-families",
        titleEn: "Word Families",
        titleTk: "Söz Maşgalalary",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Söz maşgalalary — bir kökden dürli sözler: işlik, at sözi, sypat, zarf. 'Decide' (işlik) → 'decision' (at sözi) → 'decisive' (sypat) → 'decisively' (zarf). Söz maşgalalaryny bilmek sözlügiňizi çalt giňeltmäge kömek edýär." } },
            { type: "vocabulary_list", data: { titleTk: "Möhüm söz maşgalalary", words: [{ en: "analyse / analysis / analytical / analytically", tk: "derňemek / derňeme / derňeýji / derňeýji usulda", partOfSpeech: "verb", exampleEn: "Her analytical skills are impressive.", exampleTk: "Onuň derňeýji başarnygy täsir galdyryjy." }, { en: "succeed / success / successful / successfully", tk: "üstünlik gazanmak / üstünlik / üstünlikli / üstünlikli ýagdaýda", partOfSpeech: "verb", exampleEn: "She successfully completed the project.", exampleTk: "Ol taslamany üstünlikli tamamlady." }, { en: "innovate / innovation / innovative / innovatively", tk: "täzelik girizmek / täzelik / täzeçil / täzeçil usulda", partOfSpeech: "verb", exampleEn: "The company is known for its innovative products.", exampleTk: "Kompaniýa täzeçil önümleri bilen tanalýar." }, { en: "responsible / responsibility / responsibly / irresponsible", tk: "jogapkär / jogapkärçilik / jogapkärli / jogapkärsiz", partOfSpeech: "adjective", exampleEn: "Everyone must act responsibly during the crisis.", exampleTk: "Krizis wagtynda hemmeler jogapkärli hereket etmeli." }] } },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "8-nji Bölüm Synagy: Söz Birleşmeleri",
      questions: [
        { order: 1, questionText: "She _____ a very important decision yesterday.", questionType: "multiple_choice_grammar", options: ["did", "made", "took", "had"], correctIndex: 1 },
        { order: 2, questionText: "They are _____ research on climate change.", questionType: "multiple_choice_grammar", options: ["making", "taking", "doing", "having"], correctIndex: 2 },
        { order: 3, questionText: "'Heavy traffic' Türkmençede näme?", questionType: "translate_en_tk", options: ["Agyrlykly ulag", "Ulag dyknyşygy", "Giň ýol", "Ulag azlygy"], correctIndex: 1 },
        { order: 4, questionText: "He _____ a powerful speech at the ceremony.", questionType: "multiple_choice_grammar", options: ["did", "told", "made", "said"], correctIndex: 2 },
        { order: 5, questionText: "'Strong coffee' Türkmençede näme?", questionType: "translate_en_tk", options: ["Agyr kofe", "Gaty gowy kofe", "Gämi kofe", "Köp kofe"], correctIndex: 2 },
        { order: 6, questionText: "The project carries a _____ risk of failure.", questionType: "multiple_choice_grammar", options: ["big", "large", "high", "strong"], correctIndex: 2 },
        { order: 7, questionText: "Please _____ me a favour and help me with this.", questionType: "multiple_choice_grammar", options: ["make", "do", "give", "take"], correctIndex: 1 },
        { order: 8, questionText: "'Decide' işliginiň at sözi görnüşi?", questionType: "multiple_choice_grammar", options: ["decisive", "decision", "decidedly", "decided"], correctIndex: 1 },
        { order: 9, questionText: "She expressed _____ regret for her actions.", questionType: "multiple_choice_grammar", options: ["heavy", "strong", "deep", "big"], correctIndex: 2 },
        { order: 10, questionText: "'Succeed' işliginiň zarf görnüşi?", questionType: "multiple_choice_grammar", options: ["success", "successful", "successfulness", "successfully"], correctIndex: 3 },
      ],
    },
  },

  // ─── UNIT 9: HEDGING LANGUAGE ────────────────────────────────────────────
  {
    unitNumber: 9,
    slug: "upper-int-unit-09-hedging",
    titleEn: "Hedging & Tentative Language",
    titleTk: "Ätiýaçly we Seresap Dil",
    description: "Bu bölümde akademiki we professional ýazuwda hem gepleşiklerde ulanylýan ätiýaçly dil (hedging) öwrenilýär. Pikiri belli bir derejede aňlatmak, öňe sürmek we çäklendirmek.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "upper-int-u09-l01-hedging-verbs-modal",
        titleEn: "Hedging with Modals & Verbs",
        titleTk: "Modal we Işlikler bilen Ätiýaçly Dil",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Ätiýaçly dil (hedging) — bir pikiri 100% ynam bilen däl-de, belli bir ähtimallyk bilen aňlatmak. Bu akademiki ýazuwda, ylmy makalalarda we hünär gepleşiklerinde hökmandyr. 'The results show...' däl-de 'The results suggest...' ýa-da 'It appears that...' ulanmak has takyk." } },
            { type: "vocabulary_list", data: { titleTk: "Ätiýaçly dilde ulanylýan işlikler", words: [{ en: "suggest / indicate / appear", tk: "görkezmek (nä belli) / aňlatmak / görünmek", partOfSpeech: "verb", exampleEn: "The data suggests a link between the two factors.", exampleTk: "Maglumatlar iki faktoroň arasynda baglanyşygyň bardygyny görkezýär." }, { en: "seem / tend / appear to", tk: "görünmek / ýykgyn etmek / görünmek", partOfSpeech: "verb", exampleEn: "Students seem to perform better with regular feedback.", exampleTk: "Okuwçylar yzygiderli baha alanlarynda has gowy görünýärler." }, { en: "would appear / would suggest", tk: "görünşe görä / görkezmek ýaly", partOfSpeech: "verb", exampleEn: "It would appear that the problem is more complex.", exampleTk: "Görnüşe görä mesele has çylşyrymly." }] } },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "upper-int-u09-l02-hedging-adverbs-phrases",
        titleEn: "Hedging with Adverbs & Phrases",
        titleTk: "Zarf we Sözlemler bilen Ätiýaçly Dil",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Ätiýaçlylyk zarflary we sözlemleri: 'generally', 'typically', 'in many cases', 'to some extent', 'to a certain degree', 'it is possible that', 'there is evidence to suggest'. Bulary bilmek akademiki derejäňizi ýokarlandyrýar." } },
            { type: "vocabulary_list", data: { titleTk: "Ätiýaçlylyk zarflary we sözlemleri", words: [{ en: "to some extent / to a certain degree", tk: "belli bir derejede", partOfSpeech: "adverb", exampleEn: "To some extent, the policy has been successful.", exampleTk: "Belli bir derejede syýasat üstünlikli boldy." }, { en: "generally / typically / in most cases", tk: "adatça / köplenç / köp ýagdaýda", partOfSpeech: "adverb", exampleEn: "Generally speaking, exercise improves mood.", exampleTk: "Adatça aýdylanda, maşk keýpi gowulandyrýar." }, { en: "it is possible that / it seems likely that", tk: "...-yň mümkinligi bar / ...-yň ähtimaly ýokary", partOfSpeech: "adverb", exampleEn: "It is possible that temperatures will continue to rise.", exampleTk: "Temperaturalaryň ýokarlanmagyny dowam etdirmeginiň mümkinligi bar." }, { en: "there is evidence to suggest", tk: "...-ny görkezýän delil bar", partOfSpeech: "adverb", exampleEn: "There is evidence to suggest that diet affects mood.", exampleTk: "Iýmitiň keýpe täsir edýändigini görkezýän delil bar." }] } },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "upper-int-u09-l03-academic-hedging",
        titleEn: "Hedging in Academic & Professional Contexts",
        titleTk: "Akademiki we Hünär Ýazuwynda Ätiýaçlylyk",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Akademiki ýazuwda ätiýaçlylyk hökmandyr, sebäbi: 1) Ylmy netijeler her wagt 100% ynam bilen aýdylmaýar. 2) Başga pikire hormat goýmak üçin. 3) Öz pozisiýaňy has güýçlendirmek üçin. Iş hatlarda bolsa ätiýaçlylyk medeniýetli bolmaga kömek edýär." } },
            { type: "example_set", data: { titleTk: "Ätiýaçlylyk bilen ýazylan sözlemler", examples: [{ en: "Without hedging: Exercise cures depression. With hedging: There is evidence to suggest that regular exercise may help to alleviate symptoms of depression.", tk: "Ätiýaçsyz: Maşk depressiýany bejerdýär. Ätiýaçly: Yzygiderli maşkyň depressiýanyň alamatlaryny ýeňilleşdirmäge kömek edip biljekdigini görkezýän delil bar." }, { en: "Without hedging: The new policy will increase productivity. With hedging: The new policy would appear likely to have a positive impact on productivity.", tk: "Ätiýaçsyz: Täze syýasat öndürijiligi artdyrar. Ätiýaçly: Täze syýasatyň öndürijiligiň üstüne oňyn täsir etmeginiň ähtimaly ýokary görünýär." }] } },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "9-njy Bölüm Synagy: Ätiýaçly Dil",
      questions: [
        { order: 1, questionText: "The data _____ a link between the two factors.", questionType: "multiple_choice_grammar", options: ["proves", "shows clearly", "suggests", "confirms"], correctIndex: 2 },
        { order: 2, questionText: "'To some extent' Türkmençede näme?", questionType: "translate_en_tk", options: ["Doly", "Belli bir derejede", "Asla", "Gaty köp"], correctIndex: 1 },
        { order: 3, questionText: "It _____ that the problem is more complex than expected.", questionType: "multiple_choice_grammar", options: ["shows", "proves", "would appear", "is clear"], correctIndex: 2 },
        { order: 4, questionText: "Ätiýaçly dil (hedging) näme üçin ulanylýar?", questionType: "translate_en_tk", options: ["Ýalan aýtmak üçin", "100% ynamsyz pikiri has takyk we hormatly aňlatmak üçin", "Has gysga ýazmak üçin", "Resmi bolmak üçin"], correctIndex: 1 },
        { order: 5, questionText: "Students _____ to perform better with regular feedback.", questionType: "multiple_choice_grammar", options: ["are", "seem", "look", "show"], correctIndex: 1 },
        { order: 6, questionText: "'There is evidence to suggest' Türkmençede näme?", questionType: "translate_en_tk", options: ["Delil ýok", "...-ny görkezýän delil bar", "Deliller subut edýär", "Delilsiz"], correctIndex: 1 },
        { order: 7, questionText: "_____ speaking, exercise improves mood.", questionType: "multiple_choice_grammar", options: ["Typical", "Typically", "Generally", "Mostly"], correctIndex: 2 },
        { order: 8, questionText: "It is _____ that temperatures will continue to rise.", questionType: "multiple_choice_grammar", options: ["clear", "definite", "possible", "proven"], correctIndex: 2 },
        { order: 9, questionText: "'Would appear' nähili ulanylýar?", questionType: "translate_en_tk", options: ["Hökman şeýledir", "Görünşe görä / ähtimal şeýledir", "Mümkin däl", "Geçmişde boldy"], correctIndex: 1 },
        { order: 10, questionText: "In _____ cases, the treatment is effective.", questionType: "multiple_choice_grammar", options: ["some", "most", "all", "every"], correctIndex: 1 },
      ],
    },
  },

  // ─── UNIT 10: DISCOURSE MARKERS ─────────────────────────────────────────
  {
    unitNumber: 10,
    slug: "upper-int-unit-10-discourse-markers",
    titleEn: "Discourse Markers & Text Organisation",
    titleTk: "Tekst Düzümiş Gurallary",
    description: "Bu bölümde uzyn teksti we çykyşy gurnamak üçin ulanylýan diskurs markerleri öwrenilýär: ilkinji nobatda, geçiş, netije we gaýtalamazdan ýazuwy nähili akgynly etmek.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "upper-int-u10-l01-sequence-addition",
        titleEn: "Sequencing & Adding Information",
        titleTk: "Yzygiderlilik we Maglumat Goşmak",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Uzyn tekst ýa-da çykyş ýazanyňda pikirler arasyndaky geçiş möhüm. Yzygiderlilik üçin: 'first of all', 'to begin with', 'initially'; Goşmak üçin: 'furthermore', 'what is more', 'in addition to this'; Netije üçin: 'to conclude', 'in conclusion', 'to sum up'; Gaýtalamazdan: 'as mentioned earlier', 'turning to the next point'." } },
            { type: "vocabulary_list", data: { titleTk: "Tertip we geçiş markerler", words: [{ en: "to begin with / first of all", tk: "ilkinji nobatda / her şeyden öň", partOfSpeech: "adverb", exampleEn: "To begin with, let us examine the main problem.", exampleTk: "Ilkinji nobatda, esasy meseläni seredip çykalyň." }, { en: "moving on to / turning to", tk: "...-a geçsek / ...-a üns çeksek", partOfSpeech: "adverb", exampleEn: "Moving on to the next point, we should consider the cost.", exampleTk: "Indiki mesele geçsek, bahany göz öňünde tutmaly." }, { en: "to conclude / in summary", tk: "netijede / gysgaça", partOfSpeech: "adverb", exampleEn: "To conclude, the evidence strongly supports this view.", exampleTk: "Netijede, deliller bu pikirimizi güýçli goldaýar." }, { en: "as previously mentioned", tk: "öň bellenip geçilişi ýaly", partOfSpeech: "adverb", exampleEn: "As previously mentioned, the deadline is Friday.", exampleTk: "Öň bellenip geçilişi ýaly, möhlet anna günüdir." }] } },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "upper-int-u10-l02-contrast-concession-advanced",
        titleEn: "Advanced Contrast & Concession",
        titleTk: "Ösen Garşylyk we Razylyk",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Dürli garşylyk we razylyk markerlerini bilmek: 'While' we 'whereas' — deňeşdirme üçin. 'Admittedly' — garşy pikiri kabul edip, ýöne öz pikirimizi saklamak üçin. 'That said' / 'Having said that' — öňki pikirimizi çäklendirmek üçin. 'All the same' — ýöne şeýle-de bolsa." } },
            { type: "vocabulary_list", data: { titleTk: "Ösen garşylyk markerler", words: [{ en: "while / whereas", tk: "... bolsa-da / ...-e garşylykly", partOfSpeech: "conjunction", exampleEn: "While some see it as a problem, others view it as an opportunity.", exampleTk: "Käbirleri muny mesele hökmünde görseler, başgalary mümkinçilik hökmünde görýär." }, { en: "admittedly", tk: "boýun almak bilen / dogrusy", partOfSpeech: "adverb", exampleEn: "Admittedly, there are some flaws in this approach.", exampleTk: "Dogrusy, bu çemeleşmede käbir kemçilikler bar." }, { en: "that said / having said that", tk: "şeýle bolsa-da / muny aýtdym, emma", partOfSpeech: "adverb", exampleEn: "The plan is ambitious. That said, it might still succeed.", exampleTk: "Plan tutumly. Şeýle bolsa-da, üstünlik gazanyp biler." }, { en: "all the same / even so", tk: "şeýle-de bolsa / muňa garamazdan", partOfSpeech: "adverb", exampleEn: "It's risky. Even so, I think we should try.", exampleTk: "Howply. Şeýle-de bolsa, synanşmaly diýip pikir edýärin." }] } },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "upper-int-u10-l03-writing-cohesion",
        titleEn: "Cohesion & Reference",
        titleTk: "Tekstiň Birleşimi we Salgylanma",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Gowy ýazuwda tekstiň bölümleri biri-birine baglanyşykly bolmaly (cohesion). Salgylanma — öňki agzalan zada 'it', 'this', 'these', 'such', 'the former/the latter' ýaly sözler bilen salgylanmak. 'The former...the latter' — biri-birinden soň agzalan iki zadyň birinji we ikinjisine salgylanmak üçin." } },
            { type: "example_set", data: { titleTk: "Tekst birleşim mysallary", examples: [{ en: "Two options exist: leaving early or staying late. The former saves money; the latter allows more preparation time.", tk: "Iki görnüş bar: ir gitmek ýa-da giç galmak. Birinji pul tygşytlaýar; ikinjisi has köp taýýarlyk wagtyny berýär." }, { en: "The company has invested in new technology. This has resulted in a 30% increase in efficiency.", tk: "Kompaniýa täze tehnologiýa maýa goýdy. Bu netijeliligiň 30% ýokarlanmasyna getirdi." }, { en: "Several factors contribute to the problem. These include poor planning, lack of funding and weak management.", tk: "Birnäçe faktor meseläniň sebäbidir. Bulara gowşak meýilleşdirmek, maliýeleşdirmegiň ýoklugy we gowşak dolandyryş girýär." }] } },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "10-njy Bölüm Synagy: Diskurs Markerler",
      questions: [
        { order: 1, questionText: "_____ with, let us look at the main challenges.", questionType: "multiple_choice_grammar", options: ["Starting", "Beginning", "To begin", "First"], correctIndex: 2 },
        { order: 2, questionText: "_____ on to the next point, we should consider the cost.", questionType: "multiple_choice_grammar", options: ["Moving", "Turning", "Going", "Passing"], correctIndex: 0 },
        { order: 3, questionText: "'Admittedly' Türkmençede näme?", questionType: "translate_en_tk", options: ["Hökman", "Dogrusy / Boýun almak bilen", "Mundan başga-da", "Tersine"], correctIndex: 1 },
        { order: 4, questionText: "_____ , there are some flaws in this plan.", questionType: "multiple_choice_grammar", options: ["Admittedly", "Therefore", "Furthermore", "However"], correctIndex: 0 },
        { order: 5, questionText: "The plan is risky. _____ said, it might succeed.", questionType: "multiple_choice_grammar", options: ["That", "What", "So", "As"], correctIndex: 0 },
        { order: 6, questionText: "'The former...the latter' Türkmençede näme?", questionType: "translate_en_tk", options: ["Birinji...ikinjisi", "Öňki...soňky", "Has öňki...has soňky", "Biri...beýlekisi"], correctIndex: 0 },
        { order: 7, questionText: "_____ some see it as a threat, others see it as an opportunity.", questionType: "multiple_choice_grammar", options: ["Despite", "Although", "While", "However"], correctIndex: 2 },
        { order: 8, questionText: "_____ previously mentioned, the deadline is Friday.", questionType: "multiple_choice_grammar", options: ["As", "Like", "Such", "So"], correctIndex: 0 },
        { order: 9, questionText: "It's difficult. _____ so, we should not give up.", questionType: "multiple_choice_grammar", options: ["Even", "All", "That", "However"], correctIndex: 0 },
        { order: 10, questionText: "Tekst 'cohesion' näme?", questionType: "translate_en_tk", options: ["Gysgaça ýazmak", "Tekstiň bölümleriniň biri-birine baglanyşykly bolmagy", "Grammatiki dogrulyk", "Söz mukdary"], correctIndex: 1 },
      ],
    },
  },

  // ─── UNIT 11: REGISTER & FORMALITY ──────────────────────────────────────
  {
    unitNumber: 11,
    slug: "upper-int-unit-11-register-formality",
    titleEn: "Register & Formality",
    titleTk: "Dil Derejesi we Resmilik",
    description: "Bu bölümde resmi (formal) we gündelik (informal) Iňlisçäniň tapawudyny we haýsy ýerde haýsysyny ulanmagy öwrenersiňiz.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "upper-int-u11-l01-formal-informal-vocab",
        titleEn: "Formal vs Informal Vocabulary",
        titleTk: "Resmi we Gündelik Sözlük",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Iňlisçede bir pikiri aňlatmak üçin dürli derejede sözler bar. 'get' (gündelik) vs 'receive' (resmi). 'find out' (gündelik) vs 'ascertain' (gaty resmi). 'go up' (gündelik) vs 'increase' (resmi). Resmilik derejesi ýagdaýa, okyjyya we gatnaşyga bagly." } },
            { type: "vocabulary_list", data: { titleTk: "Gündelik → Resmi deňeşdirmesi", words: [{ en: "get → obtain / receive / acquire", tk: "almak (G) → almak / kabul etmek / eýe bolmak (R)", partOfSpeech: "verb", exampleEn: "We received confirmation of your booking. (formal)", exampleTk: "Broňyňyzyň tassyklamasyny aldyk. (resmi)" }, { en: "find out → discover / ascertain / establish", tk: "bilmek (G) → açmak / anyklamak / kesgitlemek (R)", partOfSpeech: "verb", exampleEn: "We were unable to ascertain the cause. (formal)", exampleTk: "Sebäbi anyklap bilmedik. (resmi)" }, { en: "ask for → request / apply for / solicit", tk: "soramak (G) → haýyş etmek / ýüz tutmak / talap etmek (R)", partOfSpeech: "verb", exampleEn: "I would like to request a meeting. (formal)", exampleTk: "Duşuşyk haýyş etmek isleýärin. (resmi)" }, { en: "go up → increase / rise / escalate", tk: "ýokarlamak (G) → artmak / ýokarlanmak / güýçlenmek (R)", partOfSpeech: "verb", exampleEn: "Prices have continued to escalate. (formal)", exampleTk: "Bahalar ýokarlanmagyny dowam etdirdi. (resmi)" }] } },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "upper-int-u11-l02-formal-writing-letters",
        titleEn: "Formal Writing — Emails & Letters",
        titleTk: "Resmi Ýazuwy — Elektron Hatlar we Hatlar",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Resmi hat ýazmakda berk düzgünler bar. Açylyş: 'Dear Mr/Ms [Familýa],' ýa-da 'To Whom It May Concern,' Ýapylyş: 'Yours sincerely,' (ady belli bolsa) ýa-da 'Yours faithfully,' (ady belli däl bolsa). Güneşlik: hatda kısaltmalar (can't, don't) we gündelik sözler ulanylmaýar." } },
            { type: "example_set", data: { titleTk: "Resmi hat bölümleri", examples: [{ en: "Opening: Dear Mr Johnson, / I am writing to enquire about...", tk: "Açylyş: Hormatly jenap Johnson, / Men ... barada soramak üçin ýazýaryn..." }, { en: "Requesting: I would be grateful if you could provide... / Could you please send me...", tk: "Haýyş: ...-ni berip bilseňiz mähirban bolardyňyz / Haýyş edip ... ugradyp bilersiňizmi" }, { en: "Closing: I look forward to hearing from you. / Yours sincerely,", tk: "Ýapylyş: Jogabyňyza garaşýaryn. / Sylagly degişme bilen," }] } },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "upper-int-u11-l03-spoken-formality",
        titleEn: "Formality in Spoken English",
        titleTk: "Gürrüňdeşlikde Resmilik Derejesi",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "Gürrüňdeşlikde hem resmilik derejesi möhüm. Iş interwýusynda: 'I'm really good at...' däl-de 'I have considerable experience in...'. Tanyş adamlar bilen: 'Hey, what's up?' Resmi duşuşyklarda: 'Good morning, how do you do?' Derejäni dogry saýlamak professional görünmäge kömek edýär." } },
            { type: "dialogue", data: { titleTk: "Söhbetdeşlik: Resmi iş duşuşygy", exchanges: [{ speakerEn: "Interviewer", lineEn: "Good morning. Please take a seat. Could you briefly introduce yourself?", lineTk: "Hoş ertiriniz. Oturyň haýyş edýärin. Özüňizi gysgaça tanşytsaňyz." }, { speakerEn: "Applicant", lineEn: "Good morning. Certainly. My name is Kakageldi Annayev and I have considerable experience in project management.", lineTk: "Hoş ertiriniz. Höwes bilen. Meniň adym Kakageldi Annayew, taslama dolandyrmasynda ep-esli tejribäm bar." }, { speakerEn: "Interviewer", lineEn: "Could you elaborate on your most recent position?", lineTk: "Iň soňky wezipäňiz barada has giňişleýin gürrüň berip bilersiňizmi?" }, { speakerEn: "Applicant", lineEn: "Certainly. I was responsible for overseeing a team of fifteen engineers on a major infrastructure project.", lineTk: "Höwes bilen. Men uly infrastruktura taslamasynda on bäş inženerden ybarat topara gözegçilik etmek üçin jogapkärdim." }] } },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "11-nji Bölüm Synagy: Resmilik Derejesi",
      questions: [
        { order: 1, questionText: "'Get' işliginiň resmi görnüşi?", questionType: "translate_en_tk", options: ["Take", "Obtain / Receive", "Grab", "Pick up"], correctIndex: 1 },
        { order: 2, questionText: "'Find out' işliginiň resmi görnüşi?", questionType: "translate_en_tk", options: ["Look for", "Discover / Ascertain", "Search", "Check"], correctIndex: 1 },
        { order: 3, questionText: "Resmi hatda ady belli bolsa ýapylyş nähili?", questionType: "translate_en_tk", options: ["Yours faithfully", "Best regards", "Yours sincerely", "Kind regards"], correctIndex: 2 },
        { order: 4, questionText: "'I would like to _____ a meeting.' (resmi)", questionType: "multiple_choice_grammar", options: ["ask for", "want", "request", "need"], correctIndex: 2 },
        { order: 5, questionText: "Prices have continued to _____. (resmi — ýokarlamak)", questionType: "multiple_choice_grammar", options: ["go up", "climb", "escalate", "increase more"], correctIndex: 2 },
        { order: 6, questionText: "Resmi hatda 'can't' ýerine näme ulanylýar?", questionType: "translate_en_tk", options: ["cannot", "can not", "unable", "not able"], correctIndex: 0 },
        { order: 7, questionText: "'I am writing to _____ about your services.' (resmi soramak)", questionType: "multiple_choice_grammar", options: ["ask", "find out", "enquire", "check"], correctIndex: 2 },
        { order: 8, questionText: "Resmi hatda ady belli däl bolsa ýapylyş nähili?", questionType: "translate_en_tk", options: ["Yours sincerely", "Yours faithfully", "Kind regards", "Best wishes"], correctIndex: 1 },
        { order: 9, questionText: "'I'm really good at' iş interwýusynda nähili aýdylýar?", questionType: "translate_en_tk", options: ["I'm amazing at", "I have considerable experience in", "I love doing", "I'm super good at"], correctIndex: 1 },
        { order: 10, questionText: "'Ask for' işliginiň resmi görnüşi?", questionType: "translate_en_tk", options: ["Request / Apply for", "Get", "Demand loudly", "Look for"], correctIndex: 0 },
      ],
    },
  },

  // ─── UNIT 12: REVIEW & COMPLEX STRUCTURES ───────────────────────────────
  {
    unitNumber: 12,
    slug: "upper-int-unit-12-review-complex",
    titleEn: "Upper-Intermediate Review & Complex Structures",
    titleTk: "Ýokary Orta Derejesini Gaýtalamak",
    description: "Bu soňky bölümde Ýokary Orta derejesiniň ähli mowzuklary birleşdirilýär we B2 derejesine degişli kyn gurluşlar öwrenilýär.",
    lessons: [
      {
        lessonNumber: 1,
        slug: "upper-int-u12-l01-complex-sentences",
        titleEn: "Complex Sentence Structures",
        titleTk: "Çylşyrymly Sözlem Gurluşlary",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "B2 derejeli Iňlisçede dürli grammatika gurluşlaryny bir sözlemde birleşdirip bilmek möhüm. Gatnaşyk sözlemleri + habar bermek + ätiýaçlylyk + inversion ýaly gurluşlary birleşdirmek ýazuwyňyzy has çuň we professional edýär." } },
            { type: "example_set", data: { titleTk: "Çylşyrymly sözlem mysallary", examples: [{ en: "Had the team not been so well-prepared, having worked on the project for months, they would never have achieved such remarkable results.", tk: "Topar aýlar bäri taslamada işläp, bu gadar gowy taýýarlanan bolmasady, beýle täsirli netijeleri asla gazanyp bilmezdiler." }, { en: "The policy, which was introduced despite considerable opposition, would appear to have had some positive effects, though admittedly the full impact remains unclear.", tk: "Ep-esli garşylyga garamazdan girizen syýasat, dogrusy doly täsiri belli bolmasa-da, oňyn netijeleri bar ýaly görünýär." }, { en: "Not only have standards improved, but there is also evidence to suggest that customer satisfaction has risen significantly.", tk: "Standartlaryň ýokarlanmagy bilen çäklenmän, müşderi kanagatlanmasynyň hem düýpli ýokarlanandygyny görkezýän delil hem bar." }] } },
          ],
        },
      },
      {
        lessonNumber: 2,
        slug: "upper-int-u12-l02-advanced-punctuation",
        titleEn: "Advanced Punctuation & Style",
        titleTk: "Ösen Dyngy Belgiler we Stil",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "B2 derejesinde dyngy belgileri dogry ulanmak möhüm. Nokat-çyzgy (—): goşmaça düşündiriş üçin. Noktalama çyzgyjy (:): düşündiriş ýa-da sanaw başlatmak üçin. Nokat-nokat (;): iki baglanyşykly sözlemi birleşdirmek üçin. Mysal içindäki dyngy belgiler sözüň manysyny düýpgöter üýtgedip biler." } },
            { type: "example_set", data: { titleTk: "Dyngy belgiler mysallary", examples: [{ en: "Colon: There is one thing I value above all else: honesty.", tk: "Noktalama çyzgyjy: Hemme zatdan ýokarda bir zady gymmatly görýärin: dogruçyllygy." }, { en: "Semicolon: The results were disappointing; however, the team remained optimistic.", tk: "Nokat-nokat: Netijeler göwün doldurmady; şeýle-de bolsa topar optimist galdy." }, { en: "Em dash: The manager — who had been with the company for twenty years — finally retired.", tk: "Nokat-çyzgy: Müdür — kompaniýada ýigrimi ýyl bolan — ahyrynda pensiýa çykdy." }] } },
          ],
        },
      },
      {
        lessonNumber: 3,
        slug: "upper-int-u12-l03-b2-exam-skills",
        titleEn: "B2 Level Skills & Exam Preparation",
        titleTk: "B2 Derejesine Taýýarlyk",
        content: {
          blocks: [
            { type: "explanation", data: { titleTk: "Giriş", bodyTk: "B2 (Ýokary Orta) derejesi CEFR derejelemesinde möhüm basgançakdyr. Bu derejede: 1) Türkmen dili barada gürrüňdeşlikde özüňi aňladyp bilmek. 2) Gazet we ylmy makaladaky esasy pikirini düşünmek. 3) Resmi hat we makala ýazyp bilmek. 4) Abstrakt we çylşyrymly mowzuklarynda gürrüňdeşligi alyp barmak." } },
            { type: "vocabulary_list", data: { titleTk: "B2 derejesinde bilmeli möhüm söz toplumlary", words: [{ en: "take into account / take into consideration", tk: "göz öňünde tutmak / hasaba almak", partOfSpeech: "verb", exampleEn: "We must take all factors into account before deciding.", exampleTk: "Karar bermezden öň ähli faktorlary göz öňünde tutmaly." }, { en: "draw a conclusion / come to a conclusion", tk: "netije çykarmak", partOfSpeech: "verb", exampleEn: "From the evidence, we can draw a clear conclusion.", exampleTk: "Delillerden açyk netije çykaryp bolýar." }, { en: "put forward an argument / a proposal", tk: "delil / teklip öňe sürmek", partOfSpeech: "verb", exampleEn: "She put forward a compelling argument for the change.", exampleTk: "Ol üýtgeşmäniň zerurlygyna ynandyryjy delil öňe sürdi." }, { en: "come to terms with", tk: "... bilen ýaraşmak / kabul etmek", partOfSpeech: "verb", exampleEn: "It took years to come to terms with the loss.", exampleTk: "Ýitgini kabul etmek ýyllara siňdi." }] } },
          ],
        },
      },
    ],
    quiz: {
      titleTk: "12-nji Bölüm Synagy: Ýokary Orta Gaýtalama",
      questions: [
        { order: 1, questionText: "Had she studied more, she _____ passed the exam.", questionType: "multiple_choice_grammar", options: ["would", "would have", "will have", "had"], correctIndex: 1 },
        { order: 2, questionText: "I wish I _____ more languages. (speak — häzirki isleg)", questionType: "multiple_choice_grammar", options: ["speak", "spoke", "had spoken", "would speak"], correctIndex: 1 },
        { order: 3, questionText: "You _____ waited — I said I'd call you!", questionType: "multiple_choice_grammar", options: ["shouldn't have", "needn't have", "couldn't have", "mustn't have"], correctIndex: 1 },
        { order: 4, questionText: "I need to have my car _____ before the trip. (service)", questionType: "multiple_choice_grammar", options: ["service", "serviced", "servicing", "to service"], correctIndex: 1 },
        { order: 5, questionText: "_____ the door, he found a letter. (open — gatnaşyk)", questionType: "multiple_choice_grammar", options: ["He opened", "Opening", "Opened", "Having open"], correctIndex: 1 },
        { order: 6, questionText: "Not only _____ he fail, but he also lied!", questionType: "multiple_choice_grammar", options: ["he did", "did", "does", "had"], correctIndex: 1 },
        { order: 7, questionText: "The data _____ a link between stress and illness.", questionType: "multiple_choice_grammar", options: ["proves", "clearly shows", "suggests", "confirms"], correctIndex: 2 },
        { order: 8, questionText: "'Take into account' Türkmençede näme?", questionType: "translate_en_tk", options: ["Almak", "Göz öňünde tutmak", "Hasaplamak", "Kabul etmek"], correctIndex: 1 },
        { order: 9, questionText: "My colleague, _____ works in the finance department, is very experienced.", questionType: "multiple_choice_grammar", options: ["that", "which", "who", "whose"], correctIndex: 2 },
        { order: 10, questionText: "B2 derejesinde näme başarylmaly?", questionType: "translate_en_tk", options: ["Diňe sözlük bilmek", "Abstrakt mowzuklarynda gürrüňdeşligi alyp barmak we resmi ýazmak", "Diňe grammatika bilmek", "Diňe okamak"], correctIndex: 1 },
      ],
    },
  },
];
