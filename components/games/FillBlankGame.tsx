"use client";

import { useState } from "react";

type Word = { id: string; wordEn: string; wordTk: string; partOfSpeech: string; exampleEn: string };
type Section = { weekNumber: number; titleEn: string };

function blankedSentence(sentence: string, word: string): string {
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`\\b${escaped}\\w*\\b`, "gi");
  const result = sentence.replace(regex, "_____");
  return result !== sentence ? result : sentence;
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function buildOptions(correct: Word, all: Word[]): Word[] {
  const pool = all.filter((w) => w.id !== correct.id);
  const distractors = shuffle(pool).slice(0, 3);
  return shuffle([correct, ...distractors]);
}

export default function FillBlankGame({ sections }: { sections: Section[] }) {
  const [selectedWeek, setSelectedWeek] = useState("all");
  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState(false);
  const [phase, setPhase] = useState<"idle" | "playing" | "done">("idle");

  const [questions, setQuestions] = useState<Word[]>([]);
  const [index, setIndex] = useState(0);
  const [options, setOptions] = useState<Word[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [score, setScore] = useState(0);

  async function startGame(week: string) {
    setLoading(true);
    const url = week === "all" ? "/api/games/words" : `/api/games/words?week=${week}`;
    const res = await fetch(url);
    const data: Word[] = await res.json();
    setWords(data);
    const qs = shuffle(data);
    setQuestions(qs);
    setIndex(0);
    setOptions(buildOptions(qs[0], data));
    setSelected(null);
    setFeedback(null);
    setScore(0);
    setPhase("playing");
    setLoading(false);
  }

  function handleAnswer(optionId: string) {
    if (feedback) return;
    const correct = questions[index];
    setSelected(optionId);
    const isCorrect = optionId === correct.id;
    setFeedback(isCorrect ? "correct" : "wrong");
    if (isCorrect) setScore((s) => s + 1);

    setTimeout(() => {
      const next = index + 1;
      if (next >= questions.length) {
        setPhase("done");
      } else {
        setIndex(next);
        setOptions(buildOptions(questions[next], words));
        setSelected(null);
        setFeedback(null);
      }
    }, 1200);
  }

  function restart() {
    const qs = shuffle(words);
    setQuestions(qs);
    setIndex(0);
    setOptions(buildOptions(qs[0], words));
    setSelected(null);
    setFeedback(null);
    setScore(0);
    setPhase("playing");
  }

  if (phase === "idle") {
    return (
      <div className="bg-white rounded-xl border p-6 space-y-4">
        <label className="block text-sm font-medium text-gray-700">Hepde saýla:</label>
        <select
          value={selectedWeek}
          onChange={(e) => setSelectedWeek(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="all">Ähli sözler (tötänleýin 20)</option>
          {sections.map((s) => (
            <option key={s.weekNumber} value={String(s.weekNumber)}>
              Hepde {s.weekNumber}: {s.titleEn.replace(/^Week \d+: /, "")}
            </option>
          ))}
        </select>
        <button
          onClick={() => startGame(selectedWeek)}
          disabled={loading}
          className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50"
        >
          {loading ? "Ýüklenýär..." : "Oýnuny başla →"}
        </button>
      </div>
    );
  }

  if (phase === "done") {
    const pct = Math.round((score / questions.length) * 100);
    const emoji = pct >= 80 ? "🏆" : pct >= 50 ? "👍" : "📚";
    return (
      <div className="text-center py-12 space-y-4">
        <div className="text-6xl">{emoji}</div>
        <h2 className="text-2xl font-bold text-gray-900">Tamamladyňyz!</h2>
        <p className="text-gray-500">
          {questions.length} soragdan <span className="font-bold text-green-600">{score}</span> dogry
        </p>
        <p className="text-4xl font-bold text-green-600">{pct}%</p>
        <div className="flex gap-3 justify-center mt-4">
          <button
            onClick={restart}
            className="px-6 py-2.5 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Gaýtadan
          </button>
          <button
            onClick={() => { setPhase("idle"); setWords([]); }}
            className="px-6 py-2.5 border border-gray-200 rounded-lg font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Başga hepde
          </button>
        </div>
      </div>
    );
  }

  const current = questions[index];
  const sentence = blankedSentence(current.exampleEn, current.wordEn);

  return (
    <div className="space-y-5">
      {/* Progress */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{index + 1}/{questions.length}</span>
        <span className="text-green-600 font-medium">{score} dogry</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2">
        <div
          className="bg-green-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((index) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question card */}
      <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 space-y-4">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">
          Boşlugy doldur
        </p>
        <p className="text-lg font-medium text-gray-800 leading-relaxed">
          {sentence}
        </p>
        <p className="text-xs text-gray-400 italic">
          Türkmençe: {current.wordTk} ({current.partOfSpeech})
        </p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-3">
        {options.map((opt) => {
          const isCorrect = opt.id === current.id;
          const isSelected = opt.id === selected;
          let cls =
            "py-3 px-4 rounded-xl border-2 text-sm font-semibold transition-all duration-200 ";

          if (!feedback) {
            cls += "bg-white border-gray-200 text-gray-800 hover:border-green-400 hover:bg-green-50 cursor-pointer";
          } else if (isCorrect) {
            cls += "bg-green-50 border-green-500 text-green-700";
          } else if (isSelected && !isCorrect) {
            cls += "bg-red-50 border-red-400 text-red-600";
          } else {
            cls += "bg-white border-gray-200 text-gray-400 opacity-60";
          }

          return (
            <button key={opt.id} onClick={() => handleAnswer(opt.id)} className={cls}>
              {feedback && isCorrect && "✓ "}
              {feedback && isSelected && !isCorrect && "✗ "}
              {opt.wordEn}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => setPhase("idle")}
        className="text-xs text-gray-400 hover:text-gray-600 w-full text-center transition-colors"
      >
        ← Yzyna dön
      </button>
    </div>
  );
}
