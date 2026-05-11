export interface PracticeQuestion {
  id: string;
  questionText: string;
  options: string[];
  correctIndex: number;
  unit: number;
}

const questions: PracticeQuestion[] = [
  // Unit 1 – Greetings, am/is/are
  {
    id: "u1q1",
    unit: 1,
    questionText: 'Hello, ___ name\'s Anna. What\'s your name?',
    options: ["Your", "My", "You", "I"],
    correctIndex: 1,
  },
  {
    id: "u1q2",
    unit: 1,
    questionText: "Hi, how ___ you?",
    options: ["is", "am", "are", "be"],
    correctIndex: 2,
  },
  {
    id: "u1q3",
    unit: 1,
    questionText: "This ___ a book.",
    options: ["am", "are", "is", "be"],
    correctIndex: 2,
  },
  {
    id: "u1q4",
    unit: 1,
    questionText: 'Pierre, this is Yukio. Yukio, ___ Pierre.',
    options: ["is this", "this is", "this", "is"],
    correctIndex: 1,
  },

  // Unit 2 – Countries, where are you from
  {
    id: "u2q1",
    unit: 2,
    questionText: "Where are you ___?",
    options: ["at", "from", "in", "of"],
    correctIndex: 1,
  },
  {
    id: "u2q2",
    unit: 2,
    questionText: "Tokyo is ___ Japan.",
    options: ["from", "at", "on", "in"],
    correctIndex: 3,
  },
  {
    id: "u2q3",
    unit: 2,
    questionText: "His name's Massimo. ___ from Italy.",
    options: ["She's", "They're", "He's", "I'm"],
    correctIndex: 2,
  },
  {
    id: "u2q4",
    unit: 2,
    questionText: "Where's London? ___ in England.",
    options: ["He's", "She's", "They're", "It's"],
    correctIndex: 3,
  },

  // Unit 3 – Negatives, short answers, jobs
  {
    id: "u3q1",
    unit: 3,
    questionText: "He's from France. He ___ from France.",
    options: ["aren't", "isn't", "not", "am not"],
    correctIndex: 1,
  },
  {
    id: "u3q2",
    unit: 3,
    questionText: "Is she a nurse? No, ___ isn't.",
    options: ["he", "I", "she", "they"],
    correctIndex: 2,
  },
  {
    id: "u3q3",
    unit: 3,
    questionText: "Are you from England? Yes, I ___.",
    options: ["is", "be", "am", "are"],
    correctIndex: 2,
  },
  {
    id: "u3q4",
    unit: 3,
    questionText: "How old ___? I'm 31.",
    options: ["is you", "are you", "you are", "you is"],
    correctIndex: 1,
  },

  // Unit 4 – Possessives, family, have/has
  {
    id: "u4q1",
    unit: 4,
    questionText: "She's from Spain. ___ house is in Malaga.",
    options: ["My", "His", "Their", "Her"],
    correctIndex: 3,
  },
  {
    id: "u4q2",
    unit: 4,
    questionText: "We ___ a dog.",
    options: ["has", "is", "are", "have"],
    correctIndex: 3,
  },
  {
    id: "u4q3",
    unit: 4,
    questionText: "Andy ___ a lot of CDs.",
    options: ["have", "are", "has", "is"],
    correctIndex: 2,
  },
  {
    id: "u4q4",
    unit: 4,
    questionText: "Ruth and Peter are students. ___ school is in London.",
    options: ["His", "Her", "Their", "My"],
    correctIndex: 2,
  },

  // Unit 5 – Present simple do/does, nationalities
  {
    id: "u5q1",
    unit: 5,
    questionText: "Do you like pizza? Yes, I ___.",
    options: ["does", "am", "like", "do"],
    correctIndex: 3,
  },
  {
    id: "u5q2",
    unit: 5,
    questionText: "They ___ live in Canada now.",
    options: ["doesn't", "isn't", "aren't", "don't"],
    correctIndex: 3,
  },
  {
    id: "u5q3",
    unit: 5,
    questionText: "What nationality is someone from Brazil?",
    options: ["Brasilian", "Brazilian", "Brazilish", "Brazilean"],
    correctIndex: 1,
  },
  {
    id: "u5q4",
    unit: 5,
    questionText: "___ sports do you like?",
    options: ["Where", "How", "What", "Who"],
    correctIndex: 2,
  },

  // Unit 6 – Adverbs of frequency, daily routines, time
  {
    id: "u6q1",
    unit: 6,
    questionText: "She ___ work at 6.30 in the evening.",
    options: ["leave", "leaving", "leaved", "leaves"],
    correctIndex: 3,
  },
  {
    id: "u6q2",
    unit: 6,
    questionText: "Does he have a shower? Yes, he ___.",
    options: ["do", "is", "have", "does"],
    correctIndex: 3,
  },
  {
    id: "u6q3",
    unit: 6,
    questionText: "Peter gets up at five. He ___ get up at five.",
    options: ["isn't", "not", "don't", "doesn't"],
    correctIndex: 3,
  },
  {
    id: "u6q4",
    unit: 6,
    questionText: "Mary ___ watches TV in the morning.",
    options: ["always", "usually", "never", "often"],
    correctIndex: 2,
  },

  // Unit 7 – Object pronouns, question words, adjectives
  {
    id: "u7q1",
    unit: 7,
    questionText: "Do you like apples? No, I hate ___.",
    options: ["it", "they", "their", "them"],
    correctIndex: 3,
  },
  {
    id: "u7q2",
    unit: 7,
    questionText: "My brother Barry is a doctor. This is a photo of ___.",
    options: ["he", "his", "they", "him"],
    correctIndex: 3,
  },
  {
    id: "u7q3",
    unit: 7,
    questionText: "___ does the film start?",
    options: ["Who", "What", "When", "Where"],
    correctIndex: 2,
  },
  {
    id: "u7q4",
    unit: 7,
    questionText: "Can I ___ on this T-shirt, please?",
    options: ["go", "buy", "get", "try"],
    correctIndex: 3,
  },

  // Unit 8 – There is/are, prepositions, furniture
  {
    id: "u8q1",
    unit: 8,
    questionText: "___ a sofa in the living room.",
    options: ["There are", "There aren't", "There isn't", "There's"],
    correctIndex: 3,
  },
  {
    id: "u8q2",
    unit: 8,
    questionText: "The keys are ___ the floor.",
    options: ["next to", "in", "at", "on"],
    correctIndex: 3,
  },
  {
    id: "u8q3",
    unit: 8,
    questionText: "___ any chairs in the room? No, there aren't.",
    options: ["Is there", "There is", "There are", "Are there"],
    correctIndex: 3,
  },
  {
    id: "u8q4",
    unit: 8,
    questionText: "The mobile phone is ___ the drawer.",
    options: ["on", "under", "in", "next to"],
    correctIndex: 2,
  },

  // Unit 9 – Was/were, past tense of be, years, dates
  {
    id: "u9q1",
    unit: 9,
    questionText: "When ___ your father born?",
    options: ["is", "are", "were", "was"],
    correctIndex: 3,
  },
  {
    id: "u9q2",
    unit: 9,
    questionText: "Gandhi ___ a politician.",
    options: ["is", "were", "are", "was"],
    correctIndex: 3,
  },
  {
    id: "u9q3",
    unit: 9,
    questionText: "They ___ American. They were from England.",
    options: ["wasn't", "aren't", "isn't", "weren't"],
    correctIndex: 3,
  },
  {
    id: "u9q4",
    unit: 9,
    questionText: "Was Pete at home yesterday? No, he ___.",
    options: ["wasn't", "weren't", "isn't", "aren't"],
    correctIndex: 0,
  },

  // Unit 10 – Past simple regular & irregular
  {
    id: "u10q1",
    unit: 10,
    questionText: "Last week I ___ shopping in London.",
    options: ["go", "goes", "were", "went"],
    correctIndex: 3,
  },
  {
    id: "u10q2",
    unit: 10,
    questionText: "Pamela ___ a film yesterday evening.",
    options: ["see", "sees", "saws", "saw"],
    correctIndex: 3,
  },
  {
    id: "u10q3",
    unit: 10,
    questionText: "Did Tony buy some food? Yes, he ___.",
    options: ["does", "do", "was", "did"],
    correctIndex: 3,
  },
  {
    id: "u10q4",
    unit: 10,
    questionText: "Mike painted the picture. Mike ___ paint the picture.",
    options: ["wasn't", "didn't", "don't", "doesn't"],
    correctIndex: 1,
  },

  // Unit 11 – Can/can't, everyday expressions
  {
    id: "u11q1",
    unit: 11,
    questionText: "Can John read music? Yes, he ___.",
    options: ["do", "is", "has", "can"],
    correctIndex: 3,
  },
  {
    id: "u11q2",
    unit: 11,
    questionText: "___ Katarina play the guitar? No, she can't.",
    options: ["Does", "Is", "Has", "Can"],
    correctIndex: 3,
  },
  {
    id: "u11q3",
    unit: 11,
    questionText: "Colin ___ cook, but Samantha can.",
    options: ["isn't", "hasn't", "doesn't", "can't"],
    correctIndex: 3,
  },
  {
    id: "u11q4",
    unit: 11,
    questionText: "Excuse ___. Can you help me?",
    options: ["I", "my", "me", "mine"],
    correctIndex: 2,
  },

  // Unit 12 – Would like, food, restaurant
  {
    id: "u12q1",
    unit: 12,
    questionText: "Would you like a cup of coffee? Yes, ___.",
    options: ["I do", "I like", "please", "I'd love to"],
    correctIndex: 3,
  },
  {
    id: "u12q2",
    unit: 12,
    questionText: "___ a stamp for this postcard, please.",
    options: ["Would I", "Do I", "Can I", "I'd like"],
    correctIndex: 3,
  },
  {
    id: "u12q3",
    unit: 12,
    questionText: "Are you ready to order? Yes, ___ the chicken soup.",
    options: ["I like", "I want", "would I", "I'd like"],
    correctIndex: 3,
  },
  {
    id: "u12q4",
    unit: 12,
    questionText: "How ___ is that book? It's £9.99.",
    options: ["much", "many", "old", "big"],
    correctIndex: 0,
  },

  // Unit 13 – Present continuous, colours, clothes
  {
    id: "u13q1",
    unit: 13,
    questionText: "He ___ a book at the moment.",
    options: ["read", "reads", "are reading", "is reading"],
    correctIndex: 3,
  },
  {
    id: "u13q2",
    unit: 13,
    questionText: "We usually play tennis but today we ___ football.",
    options: ["play", "played", "playing", "are playing"],
    correctIndex: 3,
  },
  {
    id: "u13q3",
    unit: 13,
    questionText: "___ Frances cooking dinner? No, she isn't.",
    options: ["Does", "Do", "Has", "Is"],
    correctIndex: 3,
  },
  {
    id: "u13q4",
    unit: 13,
    questionText: "Look! Armando ___ green trousers.",
    options: ["wear", "wears", "wore", "is wearing"],
    correctIndex: 3,
  },

  // Unit 14 – Present continuous for future, travel
  {
    id: "u14q1",
    unit: 14,
    questionText: "How are you ___ to London tomorrow?",
    options: ["go", "went", "goes", "going"],
    correctIndex: 3,
  },
  {
    id: "u14q2",
    unit: 14,
    questionText: "We ___ to Oxford next Thursday.",
    options: ["go", "went", "goes", "are going"],
    correctIndex: 3,
  },
  {
    id: "u14q3",
    unit: 14,
    questionText: "Mustafa ___ his grandparents on Saturday.",
    options: ["visit", "visited", "visits", "is visiting"],
    correctIndex: 3,
  },
  {
    id: "u14q4",
    unit: 14,
    questionText: "When ___ you leaving?",
    options: ["do", "does", "are", "is"],
    correctIndex: 2,
  },
];

export default questions;
