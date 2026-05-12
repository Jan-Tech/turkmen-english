"use client";

import { useState, useEffect, useRef, useCallback } from "react";

type Word = { id: string; wordEn: string; wordTk: string; partOfSpeech: string; exampleEn: string };
type Section = { weekNumber: number; titleEn: string };

const TIME_PER_Q = 4;

function blanked(sentence: string, word: string) {
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const result = sentence.replace(new RegExp(`\\b${escaped}\\w*\\b`, "gi"), "_____");
  return result !== sentence ? result : sentence;
}

function buildOptions(correct: Word, all: Word[]): Word[] {
  const pool = all.filter((w) => w.id !== correct.id);
  return [...[...pool].sort(() => Math.random() - 0.5).slice(0, 3), correct].sort(() => Math.random() - 0.5);
}

export default function SpeedQuizGame({ sections }: { sections: Section[] }) {
  const [selectedWeek, setSelectedWeek] = useState("all");
  const [allWords, setAllWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState(false);
  const [phase, setPhase] = useState<"idle" | "playing" | "done">("idle");

  const [questions, setQuestions] = useState<Word[]>([]);
  const [index, setIndex] = useState(0);
  const [options, setOptions] = useState<Word[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_Q);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advance = useCallback((words: Word[], qs: Word[], idx: number) => {
    const next = idx + 1;
    if (next >= qs.length) { setPhase("done"); return; }
    setIndex(next);
    setOptions(buildOptions(qs[next], words));
    setSelected(null);
    setFeedback(null);
    setTimeLeft(TIME_PER_Q);
  }, []);

  useEffect(() => {
    if (phase !== "playing" || feedback) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          setFeedback("wrong");
          setTimeout(() => advance(allWords, questions, index), 800);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current!);
  }, [phase, feedback, index, advance, allWords, questions]);

  async function startGame(week: string) {
    setLoading(true);
    const url = week === "all" ? "/api/games/words" : `/api/games/words?week=${week}`;
    const res = await fetch(url);
    const data: Word[] = await res.json();
    const qs = [...data].sort(() => Math.random() - 0.5);
    setAllWords(data);
    setQuestions(qs);
    setIndex(0);
    setOptions(buildOptions(qs[0], data));
    setSelected(null);
    setFeedback(null);
    setScore(0);
    setTimeLeft(TIME_PER_Q);
    setPhase("playing");
    setLoading(false);
  }

  function handleAnswer(id: string) {
    if (feedback) return;
    clearInterval(timerRef.current!);
    const correct = questions[index];
    const isCorrect = id === correct.id;
    setSelected(id);
    setFeedback(isCorrect ? "correct" : "wrong");
    if (isCorrect) setScore((s) => s + 1);
    setTimeout(() => advance(allWords, questions, index), 900);
  }

  if (phase === "idle") {
    return (
      <div className="bg-white rounded-xl border p-6 space-y-4">
        <p className="text-sm text-gray-500">Her soragyň {TIME_PER_Q} sekunt wagty bar! Çalt oýna. ⚡</p>
        <label className="block text-sm font-medium text-gray-700">Hepde saýla:</label>
        <select value={selectedWeek} onChange={(e) => setSelectedWeek(e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm">
          <option value="all">Ähli sözler (tötänleýin 20)</option>
          {sections.map((s) => (
            <option key={s.weekNumber} value={String(s.weekNumber)}>Hepde {s.weekNumber}: {s.titleEn.replace(/^Week \d+: /, "")}</option>
          ))}
        </select>
        <button onClick={() => startGame(selectedWeek)} disabled={loading} className="w-full py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:opacity-50">
          {loading ? "Ýüklenýär..." : "⚡ Çalt başla!"}
        </button>
      </div>
    );
  }

  if (phase === "done") {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="text-center py-12 space-y-4">
        <div className="text-6xl">⚡</div>
        <h2 className="text-2xl font-bold">{score}/{questions.length} dogry</h2>
        <p className="text-4xl font-bold text-orange-500">{pct}%</p>
        <div className="flex gap-3 justify-center mt-4">
          <button onClick={() => startGame(selectedWeek)} className="px-6 py-2.5 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600">Gaýtadan</button>
          <button onClick={() => { setPhase("idle"); setAllWords([]); }} className="px-6 py-2.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">Başga hepde</button>
        </div>
      </div>
    );
  }

  const current = questions[index];
  const timerPct = (timeLeft / TIME_PER_Q) * 100;

  return (
    <div className="space-y-4">
      {/* Stats */}
      <div className="flex justify-between text-sm">
        <span className="text-gray-500">{index + 1}/{questions.length}</span>
        <span className="text-orange-600 font-bold">{score} dogry</span>
      </div>

      {/* Timer bar */}
      <div className="w-full bg-gray-100 rounded-full h-3">
        <div
          className={`h-3 rounded-full transition-all duration-1000 ${timerPct > 50 ? "bg-green-400" : timerPct > 25 ? "bg-yellow-400" : "bg-red-500"}`}
          style={{ width: `${timerPct}%` }}
        />
      </div>
      <div className="text-center text-2xl font-bold tabular-nums text-gray-700">{timeLeft}s</div>

      {/* Question */}
      <div className={`rounded-2xl border-2 p-5 text-center transition-colors ${
        feedback === "correct" ? "border-green-400 bg-green-50" :
        feedback === "wrong" ? "border-red-400 bg-red-50" :
        "border-gray-200 bg-white"
      }`}>
        <p className="text-xs text-gray-400 uppercase mb-2">{current.partOfSpeech}</p>
        <p className="text-base font-medium text-gray-800 leading-relaxed">
          {blanked(current.exampleEn, current.wordEn)}
        </p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-2.5">
        {options.map((opt) => {
          const isCorrect = opt.id === current.id;
          const isSelected = opt.id === selected;
          let cls = "py-3 px-3 rounded-xl border-2 text-sm font-semibold transition-all ";
          if (!feedback) cls += "bg-white border-gray-200 hover:border-orange-400 hover:bg-orange-50 cursor-pointer";
          else if (isCorrect) cls += "bg-green-50 border-green-500 text-green-700";
          else if (isSelected) cls += "bg-red-50 border-red-400 text-red-600";
          else cls += "bg-white border-gray-200 text-gray-400 opacity-50";
          return (
            <button key={opt.id} onClick={() => handleAnswer(opt.id)} className={cls}>
              {opt.wordEn}
            </button>
          );
        })}
      </div>
    </div>
  );
}
