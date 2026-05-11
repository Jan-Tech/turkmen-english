import { writeFileSync, mkdirSync } from "fs";
import { beginnerUnits } from "../prisma/seed/beginner/units";
import { elementaryUnits } from "../prisma/seed/elementary/units";
import type { SeedUnit } from "../types/content";

function generateDoc(levelName: string, levelTk: string, units: SeedUnit[], bigTestQuestions: any[]): string {
  const lines: string[] = [];

  lines.push(`# ${levelName} — ${levelTk}`);
  lines.push(`Ähli sapaklar, sözler, grammatika düzgünleri we synag soraglary`);
  lines.push(`\n---\n`);

  for (const unit of units) {
    lines.push(`\n## BÖLÜM ${unit.unitNumber}: ${unit.titleTk.toUpperCase()}`);
    lines.push(`*${unit.titleEn}*`);
    lines.push(`\n${unit.description}\n`);

    for (const lesson of unit.lessons) {
      lines.push(`\n### Sapak ${unit.unitNumber}.${lesson.lessonNumber}: ${lesson.titleTk}`);
      lines.push(`*(${lesson.titleEn})*\n`);

      for (const block of lesson.content.blocks) {
        if (block.type === "explanation") {
          const d = block.data as any;
          lines.push(`**${d.titleTk}**`);
          lines.push(`${d.bodyTk}\n`);
        }

        if (block.type === "vocabulary_list") {
          const d = block.data as any;
          lines.push(`**${d.titleTk}**\n`);
          lines.push(`| Iňlisçe | Türkmençe | Dil bölegi |`);
          lines.push(`|---------|-----------|-----------|`);
          for (const w of d.words) {
            lines.push(`| ${w.en} | ${w.tk} | ${w.partOfSpeech} |`);
          }
          lines.push(``);
          lines.push(`*Mysallar:*`);
          for (const w of d.words) {
            if (w.exampleEn) {
              lines.push(`- ${w.exampleEn} → ${w.exampleTk}`);
            }
          }
          lines.push(``);
        }

        if (block.type === "dialogue") {
          const d = block.data as any;
          lines.push(`**${d.titleTk}**\n`);
          for (const ex of d.exchanges) {
            lines.push(`> **${ex.speakerEn}:** ${ex.lineEn}`);
            lines.push(`> *(${ex.lineTk})*`);
          }
          lines.push(``);
        }

        if (block.type === "grammar_note") {
          const d = block.data as any;
          lines.push(`**📖 ${d.titleTk}**`);
          lines.push(`${d.explanationTk}\n`);
          if (d.pattern) lines.push(`Gurluşy: \`${d.pattern}\`\n`);
          lines.push(`Mysallar:`);
          for (const ex of d.examples) {
            lines.push(`- ${ex.en} → *${ex.tk}*`);
          }
          lines.push(``);
        }

        if (block.type === "example_set") {
          const d = block.data as any;
          lines.push(`**${d.titleTk}**\n`);
          for (const ex of d.examples) {
            lines.push(`- ${ex.en}`);
            lines.push(`  *(${ex.tk})*`);
          }
          lines.push(``);
        }
      }
    }

    // Unit quiz
    lines.push(`\n---`);
    lines.push(`### 🧪 ${unit.quiz.titleTk}\n`);
    let qNum = 0;
    for (const q of unit.quiz.questions) {
      qNum++;
      lines.push(`**${qNum}. ${q.questionText}**`);
      q.options.forEach((opt: string, i: number) => {
        const marker = i === q.correctIndex ? "✅" : "   ";
        lines.push(`   ${marker} ${String.fromCharCode(65 + i)}) ${opt}`);
      });
      lines.push(``);
    }
    lines.push(`\n---\n`);
  }

  // Big test
  lines.push(`\n## 🏆 JEMLEÝJI SYNAG (${levelTk})\n`);
  let bNum = 0;
  for (const q of bigTestQuestions) {
    bNum++;
    lines.push(`**${bNum}. ${q.questionText}**`);
    q.options.forEach((opt: string, i: number) => {
      const marker = i === q.correctIndex ? "✅" : "   ";
      lines.push(`   ${marker} ${String.fromCharCode(65 + i)}) ${opt}`);
    });
    lines.push(``);
  }

  return lines.join("\n");
}

// Big test questions (copied from seed/index.ts)
const beginnerBigTest = [
  { questionText: "'Hoş irden' iňlisçe näme?", options: ["Good evening", "Good afternoon", "Good morning", "Good night"], correctIndex: 2 },
  { questionText: "She _____ a teacher. (is/are/am)", options: ["am", "are", "is", "be"], correctIndex: 2 },
  { questionText: "'My sister' — 'sister' ikilik san?", options: ["sisters", "sisteres", "sistersen", "sister"], correctIndex: 0 },
  { questionText: "'Kyrk bäş' iňlisçe näme?", options: ["fifty-four", "forty-five", "thirty-five", "twenty-five"], correctIndex: 1 },
  { questionText: "'Gyzyl' iňlisçe näme?", options: ["green", "blue", "yellow", "red"], correctIndex: 3 },
  { questionText: "She _____ to school every day. (go)", options: ["go", "gos", "goes", "going"], correctIndex: 2 },
  { questionText: "'Sometimes' Türkmençede näme?", options: ["Hemişe", "Asla", "Käwagt", "Seýrek"], correctIndex: 2 },
  { questionText: "I'd like _____ apple, please.", options: ["some", "any", "an", "a"], correctIndex: 2 },
  { questionText: "'Would you like some tea?' Türkmençede näme?", options: ["Çaý içmek isleýärsiňizmi?", "Çaýy halaýarsyňyzmy?", "Çaý barmy?", "Çaý nähili?"], correctIndex: 0 },
  { questionText: "There _____ three chairs here.", options: ["is", "am", "are", "be"], correctIndex: 2 },
  { questionText: "The book is _____ the table. (üstünde)", options: ["in", "on", "under", "behind"], correctIndex: 1 },
  { questionText: "'Aşhana' iňlisçe näme?", options: ["bedroom", "bathroom", "kitchen", "living room"], correctIndex: 2 },
  { questionText: "'Sagat dört ýarym' iňlisçe? (4:30)", options: ["half past three", "quarter past four", "half past four", "four o'clock"], correctIndex: 2 },
  { questionText: "I drink tea _____ the morning.", options: ["at", "on", "in", "to"], correctIndex: 2 },
  { questionText: "Look! It _____ snowing!", options: ["snows", "is snowing", "snowed", "snow"], correctIndex: 1 },
  { questionText: "'Güýz' iňlisçe näme?", options: ["spring", "summer", "winter", "autumn"], correctIndex: 3 },
  { questionText: "'Gymmat' iňlisçe näme?", options: ["cheap", "free", "expensive", "big"], correctIndex: 2 },
  { questionText: "_____ shoes are nice. (Bular — ýakyn köplük)", options: ["This", "That", "These", "Those"], correctIndex: 2 },
  { questionText: "'Başym agyryýar' iňlisçe näme?", options: ["I feel sick", "I have a stomachache", "I have a headache", "My leg hurts"], correctIndex: 2 },
  { questionText: "I _____ a cold.", options: ["am", "feel", "have", "get"], correctIndex: 2 },
  { questionText: "'Çepe öwrüliň' iňlisçe näme?", options: ["go straight", "turn right", "turn left", "go back"], correctIndex: 2 },
  { questionText: "She _____ swim very well.", options: ["cans", "can", "is can", "to can"], correctIndex: 1 },
  { questionText: "'Otly' iňlisçe näme?", options: ["bus", "plane", "taxi", "train"], correctIndex: 3 },
  { questionText: "I love _____ books.", options: ["read", "reads", "reading", "to read"], correctIndex: 2 },
  { questionText: "'Tans etmek' iňlisçe näme?", options: ["singing", "dancing", "running", "cooking"], correctIndex: 1 },
  { questionText: "How often _____ you play football?", options: ["is", "are", "do", "does"], correctIndex: 2 },
  { questionText: "'Never' Türkmençede näme?", options: ["Hemişe", "Käwagt", "Asla / hiç wagt", "Her gün"], correctIndex: 2 },
  { questionText: "'El' iňlisçe näme?", options: ["leg", "back", "hand", "nose"], correctIndex: 2 },
  { questionText: "_____ name is Merdan. (Men)", options: ["His", "Her", "My", "Your"], correctIndex: 2 },
  { questionText: "We _____ friends.", options: ["am", "is", "are", "be"], correctIndex: 2 },
];

const elementaryBigTest = [
  { questionText: "'Lukman' iňlisçe näme?", options: ["nurse", "teacher", "doctor", "engineer"], correctIndex: 2 },
  { questionText: "She _____ as a nurse.", options: ["work", "working", "works", "worked"], correctIndex: 2 },
  { questionText: "I _____ Istanbul last month.", options: ["visit", "visits", "visited", "visiting"], correctIndex: 2 },
  { questionText: "'Have you ever been to London?' — Yes, I _____ there.", options: ["go", "went", "have gone", "has gone"], correctIndex: 2 },
  { questionText: "Mount Everest is _____ mountain in the world.", options: ["high", "higher", "the highest", "highest"], correctIndex: 2 },
  { questionText: "You _____ wear a seatbelt. It's the law.", options: ["should", "can", "must", "might"], correctIndex: 2 },
  { questionText: "'She used to live in Ashgabat' — bu näme diýmek?", options: ["Ol häzir Aşgabatda ýaşaýar", "Ol Aşgabatda ýaşajakdyr", "Ol öňler Aşgabatda ýaşaýardy", "Ol Aşgabatda ýaşap bilmeýär"], correctIndex: 2 },
  { questionText: "We _____ going to visit our grandparents.", options: ["is", "am", "are", "be"], correctIndex: 2 },
  { questionText: "The letter _____ written by Aýna.", options: ["is", "was", "were", "be"], correctIndex: 1 },
  { questionText: "While I _____ TV, the phone rang.", options: ["watched", "watch", "was watching", "am watching"], correctIndex: 2 },
  { questionText: "If it rains, we _____ stay home.", options: ["will", "would", "should", "can"], correctIndex: 0 },
  { questionText: "If I _____ rich, I would travel the world.", options: ["am", "was", "were", "be"], correctIndex: 2 },
  { questionText: "'Habar beriş serişdesi' iňlisçe näme?", options: ["science", "media", "culture", "technology"], correctIndex: 1 },
  { questionText: "He _____ play football when he was young.", options: ["used to", "use to", "is used to", "was used"], correctIndex: 0 },
  { questionText: "'Ykdysadyýet' iňlisçe näme?", options: ["society", "politics", "economy", "culture"], correctIndex: 2 },
  { questionText: "I wish I _____ fly like a bird.", options: ["can", "will", "could", "should"], correctIndex: 2 },
  { questionText: "The project _____ by the team next week.", options: ["will finish", "will be finishing", "will be finished", "finish"], correctIndex: 2 },
  { questionText: "She is _____ experienced than her colleague.", options: ["more", "most", "much", "very"], correctIndex: 0 },
  { questionText: "'Ertekilerde' diýilişi ýaly 'gülümsiremek' iňlisçe näme?", options: ["laugh", "smile", "cry", "frown"], correctIndex: 1 },
  { questionText: "'Ikisi hem däl' iňlisçe näme?", options: ["both", "either", "neither", "none"], correctIndex: 2 },
  { questionText: "A: You don't care! B: I _____ care about it!", options: ["am", "does", "do", "did"], correctIndex: 2 },
  { questionText: "It was Sarah _____ told me the news.", options: ["which", "where", "who", "whose"], correctIndex: 2 },
  { questionText: "'Under the weather' Türkmençede näme?", options: ["Ýagşyň astynda", "Ýarawsyz duýmak", "Buzy döwmek", "Dişini gysyp çydamak"], correctIndex: 1 },
  { questionText: "'Break the ice' Türkmençede näme?", options: ["Buzy döwmek (hakyky)", "Tanşyny ýeňilleşdirmek", "Kyn zady kabul etmek", "Nokat goýmak"], correctIndex: 1 },
  { questionText: "Remember _____ the door when you leave!", options: ["locking", "lock", "locked", "to lock"], correctIndex: 3 },
  { questionText: "He _____ be the manager — he looks 20 years old!", options: ["must", "can't", "might", "should"], correctIndex: 1 },
  { questionText: "Never _____ I seen such a thing!", options: ["I have", "have", "I had", "had"], correctIndex: 1 },
  { questionText: "'Significant' Türkmençede näme?", options: ["Kiçi", "Möhüm / Düýpli", "Adaty", "Ýeterlik"], correctIndex: 1 },
  { questionText: "Despite _____ hard, he didn't pass.", options: ["work", "to work", "worked", "working"], correctIndex: 3 },
  { questionText: "I _____ here for three years.", options: ["live", "am living", "have lived", "lived"], correctIndex: 2 },
];

mkdirSync("materials", { recursive: true });

const beginnerDoc = generateDoc("Beginner (Başlangyç)", "A1 — Başlangyç Derejesi", beginnerUnits, beginnerBigTest);
writeFileSync("materials/01-beginner.md", beginnerDoc, "utf-8");
console.log("✅ materials/01-beginner.md döredildi");

const elementaryDoc = generateDoc("Elementary (Başlangyç+)", "A2 — Başlangyç+ Derejesi", elementaryUnits, elementaryBigTest);
writeFileSync("materials/02-elementary.md", elementaryDoc, "utf-8");
console.log("✅ materials/02-elementary.md döredildi");

console.log("\nDokumentler 'materials/' papkasyna ýazyldy.");
