export type PartOfSpeech =
  | "noun"
  | "verb"
  | "adjective"
  | "adverb"
  | "pronoun"
  | "preposition"
  | "conjunction";

export type QuestionType =
  | "translate_tk_en"
  | "translate_en_tk"
  | "fill_blank"
  | "multiple_choice_grammar";

// ─── LESSON CONTENT BLOCKS ─────────────────────────────────────────────────

export interface DialogueData {
  titleTk: string;
  exchanges: {
    speakerEn: string;
    lineEn: string;
    lineTk: string;
  }[];
}

export interface GrammarNoteData {
  titleTk: string;
  explanationTk: string;
  pattern: string;
  examples: { en: string; tk: string }[];
}

export interface VocabListData {
  titleTk: string;
  words: {
    en: string;
    tk: string;
    partOfSpeech: PartOfSpeech;
    exampleEn?: string;
    exampleTk?: string;
  }[];
}

export interface ExampleSetData {
  titleTk: string;
  examples: {
    en: string;
    tk: string;
    note?: string;
  }[];
}

export interface ExplanationData {
  titleTk: string;
  bodyTk: string;
}

export type ContentBlock =
  | { type: "dialogue"; data: DialogueData }
  | { type: "grammar_note"; data: GrammarNoteData }
  | { type: "vocabulary_list"; data: VocabListData }
  | { type: "example_set"; data: ExampleSetData }
  | { type: "explanation"; data: ExplanationData };

export interface LessonContentData {
  blocks: ContentBlock[];
}

// ─── SEED TYPES ────────────────────────────────────────────────────────────

export interface SeedQuizQuestion {
  order: number;
  questionText: string;
  questionType: QuestionType;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanationTk?: string;
}

export interface SeedLesson {
  lessonNumber: number;
  slug: string;
  titleEn: string;
  titleTk: string;
  content: LessonContentData;
}

export interface SeedUnit {
  unitNumber: number;
  slug: string;
  titleEn: string;
  titleTk: string;
  description: string;
  lessons: SeedLesson[];
  quiz: {
    titleTk: string;
    questions: SeedQuizQuestion[];
  };
}

export interface SeedVocabWord {
  wordEn: string;
  wordTk: string;
  partOfSpeech: PartOfSpeech;
  exampleEn: string;
  exampleTk: string;
  order: number;
}

export interface SeedVocabSection {
  weekNumber: number;
  titleEn: string;
  titleTk: string;
  words: SeedVocabWord[];
}
