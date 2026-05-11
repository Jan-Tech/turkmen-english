"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Word {
  id: string;
  wordEn: string;
  wordTk: string;
  partOfSpeech: string;
  exampleEn: string;
  exampleTk: string;
}

interface PracticeSectionProps {
  words: Word[];
}

type ExerciseType = "match" | "fill" | "truefalse" | "circle";

// ── helpers ───────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function blankOut(sentence: string, word: string) {
  const lc = sentence.toLowerCase();
  const idx = lc.indexOf(word.toLowerCase());
  if (idx === -1) return null;
  return { before: sentence.slice(0, idx), after: sentence.slice(idx + word.length) };
}

function scoreMessage(score: number, total: number) {
  if (score === total) return " — Perfect!";
  if (score >= total * 0.7) return " — Great job!";
  return " — Keep practicing!";
}

// ── Match A ↔ B ───────────────────────────────────────────────────────────────

interface MatchItem {
  wordEn: string;
  sentence: string; // exampleEn with the word blanked out
}

function buildMatchItems(words: Word[]): MatchItem[] {
  const usable = words.filter((w) => blankOut(w.exampleEn, w.wordEn) !== null);
  return shuffle(usable)
    .slice(0, 8)
    .map((w) => {
      const parts = blankOut(w.exampleEn, w.wordEn)!;
      return { wordEn: w.wordEn, sentence: `${parts.before}___${parts.after}` };
    });
}

function MatchExercise({ words }: { words: Word[] }) {
  const [items] = useState(() => buildMatchItems(words));
  const [rightCol] = useState(() => shuffle(items.map((i) => i.sentence)));
  const [selected, setSelected] = useState<string | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set()); // wordEn values
  const [wrong, setWrong] = useState<string | null>(null);

  const matchedSentences = new Set(
    items.filter((i) => matched.has(i.wordEn)).map((i) => i.sentence)
  );
  const allDone = matched.size === items.length;

  function clickLeft(wordEn: string) {
    if (matched.has(wordEn)) return;
    setSelected(selected === wordEn ? null : wordEn);
  }

  function clickRight(sentence: string) {
    if (!selected || matchedSentences.has(sentence)) return;
    const correctSentence = items.find((i) => i.wordEn === selected)?.sentence;
    if (sentence === correctSentence) {
      setMatched((prev) => new Set([...prev, selected]));
      setSelected(null);
    } else {
      setWrong(sentence);
      setTimeout(() => setWrong(null), 700);
    }
  }

  if (items.length === 0)
    return <p className="text-sm text-gray-500">Not enough example sentences for this week.</p>;

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">
        Click a word on the left, then click the sentence it belongs to on the right.
      </p>
      {allDone && (
        <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-medium">
          All matched correctly! 🎉
        </div>
      )}
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          {items.map((item) => (
            <button
              key={item.wordEn}
              onClick={() => clickLeft(item.wordEn)}
              disabled={matched.has(item.wordEn)}
              className={`w-full text-left px-3 py-2 rounded-lg border text-sm font-medium transition-all ${
                matched.has(item.wordEn)
                  ? "border-green-300 bg-green-50 text-green-700"
                  : selected === item.wordEn
                  ? "border-blue-400 bg-blue-50 text-blue-700"
                  : "border-gray-200 bg-white hover:border-gray-400 cursor-pointer"
              }`}
            >
              {matched.has(item.wordEn) ? `✓ ${item.wordEn}` : item.wordEn}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          {rightCol.map((sentence) => (
            <button
              key={sentence}
              onClick={() => clickRight(sentence)}
              disabled={matchedSentences.has(sentence)}
              className={`w-full text-left px-3 py-2 rounded-lg border text-sm transition-all ${
                matchedSentences.has(sentence)
                  ? "border-green-300 bg-green-50 text-green-700"
                  : wrong === sentence
                  ? "border-red-400 bg-red-50 text-red-600"
                  : selected
                  ? "border-gray-200 bg-white hover:border-blue-300 cursor-pointer"
                  : "border-gray-200 bg-white"
              }`}
            >
              {sentence}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Fill in the blank ─────────────────────────────────────────────────────────

interface FillQ {
  before: string;
  after: string;
  options: string[];
  correctIdx: number;
}

function buildFillQuestions(words: Word[]): FillQ[] {
  const usable = words.filter((w) => blankOut(w.exampleEn, w.wordEn) !== null);
  const pool = shuffle(usable).slice(0, 6);
  return pool.map((w) => {
    const parts = blankOut(w.exampleEn, w.wordEn)!;
    const distractors = shuffle(words.filter((o) => o.wordEn !== w.wordEn))
      .slice(0, 3)
      .map((o) => o.wordEn);
    const options = shuffle([w.wordEn, ...distractors]);
    return { ...parts, options, correctIdx: options.indexOf(w.wordEn) };
  });
}

function FillExercise({ words }: { words: Word[] }) {
  const [questions] = useState(() => buildFillQuestions(words));
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    Array(questions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);

  if (questions.length === 0)
    return (
      <p className="text-sm text-gray-500">Not enough example sentences for this week.</p>
    );

  const score = answers.filter((a, i) => a === questions[i].correctIdx).length;

  function select(qi: number, oi: number) {
    if (submitted) return;
    setAnswers((prev) => prev.map((a, i) => (i === qi ? oi : a)));
  }

  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-500">Choose the correct word to complete each sentence.</p>
      {questions.map((q, qi) => (
        <div key={qi} className="space-y-2">
          <p className="text-sm text-gray-800 font-medium">
            {qi + 1}.{" "}
            <span className="text-gray-600">{q.before}</span>
            <span className="inline-block px-2 py-0.5 mx-1 rounded bg-gray-100 text-gray-400 text-xs font-mono">
              ___
            </span>
            <span className="text-gray-600">{q.after}</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {q.options.map((opt, oi) => {
              const sel = answers[qi] === oi;
              const correct = oi === q.correctIdx;
              let cls = "px-3 py-1 rounded-full border text-sm transition-all cursor-pointer ";
              if (!submitted) {
                cls += sel
                  ? "border-blue-400 bg-blue-50 text-blue-700 font-medium"
                  : "border-gray-200 hover:border-gray-400";
              } else {
                if (correct) cls += "border-green-400 bg-green-50 text-green-700 font-medium";
                else if (sel) cls += "border-red-400 bg-red-50 text-red-600 line-through";
                else cls += "border-gray-100 text-gray-300";
              }
              return (
                <button key={oi} className={cls} onClick={() => select(qi, oi)}>
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      ))}
      {!submitted ? (
        <Button onClick={() => setSubmitted(true)} disabled={answers.some((a) => a === null)}>
          Submit Answers
        </Button>
      ) : (
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-700 text-sm font-medium">
          Score: {score} / {questions.length}
          {scoreMessage(score, questions.length)}
        </div>
      )}
    </div>
  );
}

// ── True / False ──────────────────────────────────────────────────────────────

const POS_LABEL: Record<string, string> = {
  noun: "a noun",
  verb: "a verb",
  adjective: "an adjective",
  adverb: "an adverb",
  pronoun: "a pronoun",
  preposition: "a preposition",
  conjunction: "a conjunction",
};
const ALL_POS = Object.keys(POS_LABEL);

interface TFQ {
  statement: string;
  answer: boolean;
}

function buildTFQuestions(words: Word[]): TFQ[] {
  const pool = shuffle(words).slice(0, 8);
  const half = Math.ceil(pool.length / 2);
  const questions = pool.map((w, i) => {
    const isTrue = i < half;
    const pos = isTrue
      ? w.partOfSpeech
      : shuffle(ALL_POS.filter((p) => p !== w.partOfSpeech))[0] ?? "verb";
    return {
      statement: `The word "${w.wordEn}" is ${POS_LABEL[pos] ?? pos}.`,
      answer: isTrue,
    };
  });
  return shuffle(questions);
}

function TrueFalseExercise({ words }: { words: Word[] }) {
  const [questions] = useState(() => buildTFQuestions(words));
  const [answers, setAnswers] = useState<(boolean | null)[]>(() =>
    Array(questions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);

  const score = answers.filter((a, i) => a === questions[i].answer).length;

  function select(qi: number, val: boolean) {
    if (submitted) return;
    setAnswers((prev) => prev.map((a, i) => (i === qi ? val : a)));
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">Mark each statement as True or False.</p>
      <div className="space-y-2">
        {questions.map((q, qi) => (
          <div
            key={qi}
            className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 bg-white"
          >
            <span className="text-sm text-gray-800 flex-1">
              {qi + 1}. {q.statement}
            </span>
            <div className="flex gap-2 shrink-0">
              {([true, false] as const).map((val) => {
                const sel = answers[qi] === val;
                const correct = q.answer === val;
                let cls = "px-3 py-1 rounded-lg border text-xs font-semibold transition-all cursor-pointer ";
                if (!submitted) {
                  cls += sel
                    ? val
                      ? "border-green-400 bg-green-50 text-green-700"
                      : "border-red-400 bg-red-50 text-red-600"
                    : "border-gray-200 hover:border-gray-400";
                } else {
                  if (correct && sel)
                    cls += val
                      ? "border-green-400 bg-green-100 text-green-700"
                      : "border-red-400 bg-red-100 text-red-600";
                  else if (correct && !sel)
                    cls += val
                      ? "border-green-300 bg-green-50 text-green-500"
                      : "border-red-300 bg-red-50 text-red-400";
                  else if (!correct && sel)
                    cls += "border-gray-300 bg-gray-50 text-gray-400 line-through";
                  else cls += "border-gray-100 text-gray-300";
                }
                return (
                  <button key={String(val)} className={cls} onClick={() => select(qi, val)}>
                    {val ? "True" : "False"}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {!submitted ? (
        <Button onClick={() => setSubmitted(true)} disabled={answers.some((a) => a === null)}>
          Submit Answers
        </Button>
      ) : (
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-700 text-sm font-medium">
          Score: {score} / {questions.length}
          {scoreMessage(score, questions.length)}
        </div>
      )}
    </div>
  );
}

// ── Circle the correct word ───────────────────────────────────────────────────

interface CircleQ {
  before: string;
  after: string;
  options: [string, string];
  correctIdx: 0 | 1;
}

function buildCircleQuestions(words: Word[]): CircleQ[] {
  const usable = words.filter((w) => blankOut(w.exampleEn, w.wordEn) !== null);
  const pool = shuffle(usable).slice(0, 6);
  return pool.map((w) => {
    const { before, after } = blankOut(w.exampleEn, w.wordEn)!;
    const other =
      shuffle(words.filter((o) => o.wordEn !== w.wordEn))[0]?.wordEn ?? "something";
    const correctIdx = (Math.random() < 0.5 ? 0 : 1) as 0 | 1;
    const options: [string, string] =
      correctIdx === 0 ? [w.wordEn, other] : [other, w.wordEn];
    return { before, after, options, correctIdx };
  });
}

function CircleExercise({ words }: { words: Word[] }) {
  const [questions] = useState(() => buildCircleQuestions(words));
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    Array(questions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);

  if (questions.length === 0)
    return (
      <p className="text-sm text-gray-500">Not enough example sentences for this week.</p>
    );

  const score = answers.filter((a, i) => a === questions[i].correctIdx).length;

  function select(qi: number, oi: number) {
    if (submitted) return;
    setAnswers((prev) => prev.map((a, i) => (i === qi ? oi : a)));
  }

  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-500">
        Click the word that correctly completes the sentence.
      </p>
      <div className="space-y-5">
        {questions.map((q, qi) => (
          <p key={qi} className="text-sm text-gray-800 leading-loose">
            {qi + 1}. {q.before}
            {q.options.map((opt, oi) => {
              const sel = answers[qi] === oi;
              const correct = oi === q.correctIdx;
              let cls =
                "inline-block mx-1 px-2 py-0.5 rounded-md border text-sm cursor-pointer transition-all ";
              if (!submitted) {
                cls += sel
                  ? "border-blue-400 bg-blue-50 text-blue-700 font-semibold"
                  : "border-gray-300 hover:border-gray-500";
              } else {
                if (correct)
                  cls += "border-green-400 bg-green-50 text-green-700 font-semibold";
                else if (sel) cls += "border-red-400 bg-red-50 text-red-600 line-through";
                else cls += "border-gray-200 text-gray-400";
              }
              return (
                <button key={oi} className={cls} onClick={() => select(qi, oi)}>
                  {opt}
                </button>
              );
            })}
            {q.after}
          </p>
        ))}
      </div>
      {!submitted ? (
        <Button onClick={() => setSubmitted(true)} disabled={answers.some((a) => a === null)}>
          Submit Answers
        </Button>
      ) : (
        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-700 text-sm font-medium">
          Score: {score} / {questions.length}
          {scoreMessage(score, questions.length)}
        </div>
      )}
    </div>
  );
}

// ── Container ─────────────────────────────────────────────────────────────────

const EXERCISE_TABS: { key: ExerciseType; label: string }[] = [
  { key: "match", label: "Match" },
  { key: "fill", label: "Fill in the Blank" },
  { key: "truefalse", label: "True / False" },
  { key: "circle", label: "Circle the Word" },
];

export default function PracticeSection({ words }: PracticeSectionProps) {
  const [active, setActive] = useState<ExerciseType>("match");
  const [seed, setSeed] = useState(0);

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 flex-wrap">
        {EXERCISE_TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
              active === t.key
                ? "border-blue-400 bg-blue-50 text-blue-700"
                : "border-gray-200 text-gray-600 hover:border-gray-400"
            }`}
          >
            {t.label}
          </button>
        ))}
        <button
          onClick={() => setSeed((s) => s + 1)}
          className="ml-auto text-sm text-gray-400 hover:text-gray-600 px-3 py-1.5 border border-dashed border-gray-300 rounded-full hover:border-gray-400 transition-all"
          title="Get a new set of questions"
        >
          ↺ New questions
        </button>
      </div>

      <div key={`${active}-${seed}`}>
        {active === "match" && <MatchExercise words={words} />}
        {active === "fill" && <FillExercise words={words} />}
        {active === "truefalse" && <TrueFalseExercise words={words} />}
        {active === "circle" && <CircleExercise words={words} />}
      </div>
    </div>
  );
}
