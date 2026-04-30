import { PrismaClient } from "../../app/generated/prisma";
import { beginnerUnits } from "./beginner/units";
import { elementaryUnits } from "./elementary/units";
import { weeks1to26 } from "./vocabulary/weeks1to26";
import { weeks27to52 } from "./vocabulary/weeks27to52";
import type { SeedUnit } from "../../types/content";

const prisma = new PrismaClient();

const beginnerBigTestQuestions = [
  { order: 1, questionText: "'Hoş irden' iňlisçe näme?", questionType: "translate_tk_en", options: ["Good evening", "Good afternoon", "Good morning", "Good night"], correctIndex: 2 },
  { order: 2, questionText: "She _____ a teacher. (is/are/am)", questionType: "multiple_choice_grammar", options: ["am", "are", "is", "be"], correctIndex: 2 },
  { order: 3, questionText: "'My sister' — 'sister' ikilik san?", questionType: "multiple_choice_grammar", options: ["sisters", "sisteres", "sistersen", "sister"], correctIndex: 0 },
  { order: 4, questionText: "'Kyrk bäş' iňlisçe näme?", questionType: "translate_tk_en", options: ["fifty-four", "forty-five", "thirty-five", "twenty-five"], correctIndex: 1 },
  { order: 5, questionText: "'Gyzyl' iňlisçe näme?", questionType: "translate_tk_en", options: ["green", "blue", "yellow", "red"], correctIndex: 3 },
  { order: 6, questionText: "She _____ to school every day. (go)", questionType: "multiple_choice_grammar", options: ["go", "gos", "goes", "going"], correctIndex: 2 },
  { order: 7, questionText: "'Sometimes' Türkmençede näme?", questionType: "translate_en_tk", options: ["Hemişe", "Asla", "Käwagt", "Seýrek"], correctIndex: 2 },
  { order: 8, questionText: "I'd like _____ apple, please.", questionType: "multiple_choice_grammar", options: ["some", "any", "an", "a"], correctIndex: 2 },
  { order: 9, questionText: "'Would you like some tea?' Türkmençede näme?", questionType: "translate_en_tk", options: ["Çaý içmek isleýärsiňizmi?", "Çaýy halaýarsyňyzmy?", "Çaý barmy?", "Çaý nähili?"], correctIndex: 0 },
  { order: 10, questionText: "There _____ three chairs here.", questionType: "multiple_choice_grammar", options: ["is", "am", "are", "be"], correctIndex: 2 },
  { order: 11, questionText: "The book is _____ the table. (üstünde)", questionType: "multiple_choice_grammar", options: ["in", "on", "under", "behind"], correctIndex: 1 },
  { order: 12, questionText: "'Aşhana' iňlisçe näme?", questionType: "translate_tk_en", options: ["bedroom", "bathroom", "kitchen", "living room"], correctIndex: 2 },
  { order: 13, questionText: "'Sagat dört ýarym' iňlisçe? (4:30)", questionType: "translate_tk_en", options: ["half past three", "quarter past four", "half past four", "four o'clock"], correctIndex: 2 },
  { order: 14, questionText: "I drink tea _____ the morning.", questionType: "multiple_choice_grammar", options: ["at", "on", "in", "to"], correctIndex: 2 },
  { order: 15, questionText: "Look! It _____ snowing!", questionType: "multiple_choice_grammar", options: ["snows", "is snowing", "snowed", "snow"], correctIndex: 1 },
  { order: 16, questionText: "'Güýz' iňlisçe näme?", questionType: "translate_tk_en", options: ["spring", "summer", "winter", "autumn"], correctIndex: 3 },
  { order: 17, questionText: "'Gymmat' iňlisçe näme?", questionType: "translate_tk_en", options: ["cheap", "free", "expensive", "big"], correctIndex: 2 },
  { order: 18, questionText: "_____ shoes are nice. (Bular — ýakyn köplük)", questionType: "multiple_choice_grammar", options: ["This", "That", "These", "Those"], correctIndex: 2 },
  { order: 19, questionText: "'Başym agyryýar' iňlisçe näme?", questionType: "translate_tk_en", options: ["I feel sick", "I have a stomachache", "I have a headache", "My leg hurts"], correctIndex: 2 },
  { order: 20, questionText: "I _____ a cold. (cold — üşütme)", questionType: "multiple_choice_grammar", options: ["am", "feel", "have", "get"], correctIndex: 2 },
  { order: 21, questionText: "'Çepe öwrüliň' iňlisçe näme?", questionType: "translate_tk_en", options: ["go straight", "turn right", "turn left", "go back"], correctIndex: 2 },
  { order: 22, questionText: "She _____ swim very well. (başarýar)", questionType: "multiple_choice_grammar", options: ["cans", "can", "is can", "to can"], correctIndex: 1 },
  { order: 23, questionText: "'Otly' iňlisçe näme?", questionType: "translate_tk_en", options: ["bus", "plane", "taxi", "train"], correctIndex: 3 },
  { order: 24, questionText: "I love _____ books. (okamak)", questionType: "multiple_choice_grammar", options: ["read", "reads", "reading", "to read"], correctIndex: 2 },
  { order: 25, questionText: "'Tans etmek' iňlisçe näme?", questionType: "translate_tk_en", options: ["singing", "dancing", "running", "cooking"], correctIndex: 1 },
  { order: 26, questionText: "How often _____ you play football?", questionType: "multiple_choice_grammar", options: ["is", "are", "do", "does"], correctIndex: 2 },
  { order: 27, questionText: "'Never' Türkmençede näme?", questionType: "translate_en_tk", options: ["Hemişe", "Käwagt", "Asla / hiç wagt", "Her gün"], correctIndex: 2 },
  { order: 28, questionText: "'El' iňlisçe näme?", questionType: "translate_tk_en", options: ["leg", "back", "hand", "nose"], correctIndex: 2 },
  { order: 29, questionText: "_____ name is Merdan. (Men)", questionType: "multiple_choice_grammar", options: ["His", "Her", "My", "Your"], correctIndex: 2 },
  { order: 30, questionText: "We _____ friends.", questionType: "multiple_choice_grammar", options: ["am", "is", "are", "be"], correctIndex: 2 },
];

const elementaryBigTestQuestions = [
  { order: 1, questionText: "'Lukman' iňlisçe näme?", questionType: "translate_tk_en", options: ["nurse", "teacher", "doctor", "engineer"], correctIndex: 2 },
  { order: 2, questionText: "She _____ as a nurse.", questionType: "multiple_choice_grammar", options: ["work", "working", "works", "worked"], correctIndex: 2 },
  { order: 3, questionText: "I _____ Istanbul last month. (visit)", questionType: "multiple_choice_grammar", options: ["visit", "visits", "visited", "visiting"], correctIndex: 2 },
  { order: 4, questionText: "'Passport' Türkmençede näme?", questionType: "translate_en_tk", options: ["Bilet", "Goş", "Pasport", "Syýahat"], correctIndex: 2 },
  { order: 5, questionText: "I _____ used this app before.", questionType: "multiple_choice_grammar", options: ["have", "has", "had", "am"], correctIndex: 0 },
  { order: 6, questionText: "'Download' Türkmençede näme?", questionType: "translate_en_tk", options: ["Ugratmak", "Ýüklemek", "Açmak", "Ýazmak"], correctIndex: 1 },
  { order: 7, questionText: "The Nile is _____ than the Amu Darya. (long)", questionType: "multiple_choice_grammar", options: ["longest", "long", "more long", "longer"], correctIndex: 3 },
  { order: 8, questionText: "'Desert' Türkmençede näme?", questionType: "translate_en_tk", options: ["Derýa", "Dag", "Tokaý", "Çöl"], correctIndex: 3 },
  { order: 9, questionText: "We _____ to the festival last year. (go)", questionType: "multiple_choice_grammar", options: ["go", "goed", "gone", "went"], correctIndex: 3 },
  { order: 10, questionText: "She _____ a beautiful costume. (wear)", questionType: "multiple_choice_grammar", options: ["wear", "weared", "worn", "wore"], correctIndex: 3 },
  { order: 11, questionText: "'Taryh' iňlisçe näme?", questionType: "translate_tk_en", options: ["science", "maths", "history", "literature"], correctIndex: 2 },
  { order: 12, questionText: "You _____ study for the exam. (borçnuklyk)", questionType: "multiple_choice_grammar", options: ["should", "can", "have to", "might"], correctIndex: 2 },
  { order: 13, questionText: "'Mylakatly' iňlisçe näme?", questionType: "translate_tk_en", options: ["brave", "lazy", "kind", "shy"], correctIndex: 2 },
  { order: 14, questionText: "She _____ to live here, but now she lives in Ashgabat.", questionType: "multiple_choice_grammar", options: ["uses", "used", "is used", "use"], correctIndex: 1 },
  { order: 15, questionText: "'Pul tygşytlamak' iňlisçe näme?", questionType: "translate_tk_en", options: ["spend money", "borrow money", "save money", "invest money"], correctIndex: 2 },
  { order: 16, questionText: "I _____ going to open a bank account next week.", questionType: "multiple_choice_grammar", options: ["was", "am", "will", "have"], correctIndex: 1 },
  { order: 17, questionText: "English _____ spoken all over the world.", questionType: "multiple_choice_grammar", options: ["speaks", "is spoken", "speak", "was speak"], correctIndex: 1 },
  { order: 18, questionText: "'Journalist' Türkmençede näme?", questionType: "translate_en_tk", options: ["Okyjy", "Ýazyjy", "Žurnalist", "Aktýor"], correctIndex: 2 },
  { order: 19, questionText: "I _____ training when it started to rain.", questionType: "multiple_choice_grammar", options: ["trained", "train", "was training", "am training"], correctIndex: 2 },
  { order: 20, questionText: "'Champion' Türkmençede näme?", questionType: "translate_en_tk", options: ["Türgen", "Topar", "Bäsleşik", "Çempion"], correctIndex: 3 },
  { order: 21, questionText: "If I study hard, I _____ pass the exam.", questionType: "multiple_choice_grammar", options: ["would", "will", "am", "should"], correctIndex: 1 },
  { order: 22, questionText: "'Opportunity' Türkmençede näme?", questionType: "translate_en_tk", options: ["Maksat", "Arzuw", "Mümkinçilik / Pursat", "Karýera"], correctIndex: 2 },
  { order: 23, questionText: "If I _____ the president, I would build more schools.", questionType: "multiple_choice_grammar", options: ["am", "was", "were", "be"], correctIndex: 2 },
  { order: 24, questionText: "'Volunteer' Türkmençede näme?", questionType: "translate_en_tk", options: ["Lukmançy", "Meýletinçi", "Ýolbaşçy", "Mugallym"], correctIndex: 1 },
  { order: 25, questionText: "Have you ever _____ to London?", questionType: "multiple_choice_grammar", options: ["go", "gone", "went", "going"], correctIndex: 1 },
  { order: 26, questionText: "The book _____ written by Magtymguly.", questionType: "multiple_choice_grammar", options: ["is written", "was written", "written", "writes"], correctIndex: 1 },
  { order: 27, questionText: "This is the _____ mountain in the world. (high)", questionType: "multiple_choice_grammar", options: ["higher", "most high", "highest", "more high"], correctIndex: 2 },
  { order: 28, questionText: "'Howa menzili' iňlisçe näme?", questionType: "translate_tk_en", options: ["station", "airport", "hotel", "port"], correctIndex: 1 },
  { order: 29, questionText: "She _____ never tried this app.", questionType: "multiple_choice_grammar", options: ["have", "has", "had", "is"], correctIndex: 1 },
  { order: 30, questionText: "If it _____ rain, we will stay at home.", questionType: "multiple_choice_grammar", options: ["will", "would", "rains", "rained"], correctIndex: 2 },
];

async function seedLevel(
  levelSlug: "BEGINNER" | "ELEMENTARY",
  titleEn: string,
  titleTk: string,
  description: string,
  order: number,
  units: SeedUnit[],
  bigTestTitleTk: string,
  bigTestQuestions: typeof beginnerBigTestQuestions
) {
  const level = await prisma.courseLevel.upsert({
    where: { level: levelSlug },
    update: {},
    create: { level: levelSlug, titleEn, titleTk, description, order },
  });

  for (const unit of units) {
    const dbUnit = await prisma.unit.upsert({
      where: { slug: unit.slug },
      update: {},
      create: {
        levelId: level.id,
        unitNumber: unit.unitNumber,
        slug: unit.slug,
        titleEn: unit.titleEn,
        titleTk: unit.titleTk,
        description: unit.description,
        order: unit.unitNumber,
      },
    });

    for (const lesson of unit.lessons) {
      await prisma.lesson.upsert({
        where: { slug: lesson.slug },
        update: {},
        create: {
          unitId: dbUnit.id,
          lessonNumber: lesson.lessonNumber,
          slug: lesson.slug,
          titleEn: lesson.titleEn,
          titleTk: lesson.titleTk,
          content: lesson.content as object,
          order: lesson.lessonNumber,
        },
      });
    }

    const quiz = await prisma.quiz.upsert({
      where: { unitId: dbUnit.id },
      update: {},
      create: { unitId: dbUnit.id, titleTk: unit.quiz.titleTk },
    });

    for (const q of unit.quiz.questions) {
      const existing = await prisma.quizQuestion.findFirst({
        where: { quizId: quiz.id, order: q.order },
      });
      if (!existing) {
        await prisma.quizQuestion.create({
          data: {
            quizId: quiz.id,
            order: q.order,
            questionText: q.questionText,
            questionType: q.questionType,
            options: q.options,
            correctIndex: q.correctIndex,
            explanationTk: q.explanationTk ?? null,
          },
        });
      }
    }
  }

  const bigTest = await prisma.bigTest.upsert({
    where: { levelId: level.id },
    update: {},
    create: { levelId: level.id, titleTk: bigTestTitleTk },
  });

  for (const q of bigTestQuestions) {
    const existing = await prisma.quizQuestion.findFirst({
      where: { bigTestId: bigTest.id, order: q.order },
    });
    if (!existing) {
      await prisma.quizQuestion.create({
        data: {
          bigTestId: bigTest.id,
          order: q.order,
          questionText: q.questionText,
          questionType: q.questionType,
          options: q.options as string[],
          correctIndex: q.correctIndex,
        },
      });
    }
  }
}

async function seedVocabulary() {
  const allSections = [...weeks1to26, ...weeks27to52];
  for (const section of allSections) {
    const dbSection = await prisma.vocabSection.upsert({
      where: { weekNumber: section.weekNumber },
      update: {},
      create: {
        weekNumber: section.weekNumber,
        titleEn: section.titleEn,
        titleTk: section.titleTk,
        order: section.weekNumber,
      },
    });

    for (const word of section.words) {
      const existing = await prisma.vocabWord.findFirst({
        where: { sectionId: dbSection.id, wordEn: word.wordEn },
      });
      if (!existing) {
        await prisma.vocabWord.create({
          data: {
            sectionId: dbSection.id,
            wordEn: word.wordEn,
            wordTk: word.wordTk,
            partOfSpeech: word.partOfSpeech,
            exampleEn: word.exampleEn,
            exampleTk: word.exampleTk,
            order: word.order,
          },
        });
      }
    }
  }
}

async function main() {
  console.log("Seeding Beginner level...");
  await seedLevel(
    "BEGINNER",
    "Beginner",
    "Başlangyç",
    "Iňlis dilini noldan başlaň. Gündelik gepleşiklerde ulanylýan esasy sözler we grammatika.",
    1,
    beginnerUnits,
    "Başlangyç Derejesi — Jemleýji Synag",
    beginnerBigTestQuestions
  );

  console.log("Seeding Elementary level...");
  await seedLevel(
    "ELEMENTARY",
    "Elementary",
    "Başlangyç+",
    "Başlangyç derejesinden soň. Gürrüňdeşligiňizi giňeldiň we has çylşyrymly grammatikany öwreniň.",
    2,
    elementaryUnits,
    "Başlangyç+ Derejesi — Jemleýji Synag",
    elementaryBigTestQuestions
  );

  console.log("Seeding 504 vocabulary...");
  await seedVocabulary();

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
