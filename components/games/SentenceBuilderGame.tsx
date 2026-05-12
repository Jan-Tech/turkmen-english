"use client";

import { useState } from "react";

type Word = { id: string; wordEn: string; wordTk: string; partOfSpeech: string; exampleEn: string };
type Section = { weekNumber: number; titleEn: string };

function tokenize(sentence: string): string[] {
  return sentence.match(/[\w']+|[.,!?;:]/g) || [];
}

export default function SentenceBuilderGame({ sections }: { sections: Section[] }) {
  const [selectedWeek, setSelectedWeek] = useState("all");
  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState(false);
  const [phase, setPhase] = useState<"idle" | "playing" | "done">("idle");

  const [queue, setQueue] = useState<Word[]>([]);
  const [index, setIndex] = useState(0);
  const [tokens, setTokens] = useState<string[]>([]); // shuffled pool
  const [used, setUsed] = useState<boolean[]>([]);
  const [built, setBuilt] = useState<{ word: string; srcIdx: number }[]>([]);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [score, setScore] = useState(0);

  async function startGame(week: string) {
    setLoading(true);
    const url = week === "all" ? "/api/games/words" : `/api/games/words?week=${week}`;
    const res = await fetch(url);
    const data: Word[] = await res.json();
    const qs = [...data].filter((w) => w.exampleEn && w.exampleEn.split(" ").length >= 4).sort(() => Math.random() - 0.5);
    setWords(qs);
    setQueue(qs);
    setScore(0);
    setIndex(0);
    loadQuestion(qs[0]);
    setPhase("playing");
    setLoading(false);
  }

  function loadQuestion(w: Word) {
    const toks = tokenize(w.exampleEn);
    let shuffled = [...toks].sort(() => Math.random() - 0.5);
    while (shuffled.join(" ") === toks.join(" ")) shuffled = [...toks].sort(() => Math.random() - 0.5);
    setTokens(shuffled);
    setUsed(new Array(shuffled.length).fill(false));
    setBuilt([]);
    setFeedback(null);
  }

  function handleTokenClick(i: number) {
    if (used[i] || feedback) return;
    setUsed((u) => { const n = [...u]; n[i] = true; return n; });
    setBuilt((b) => [...b, { word: tokens[i], srcIdx: i }]);
  }

  function handleBuiltClick(pos: number) {
    if (feedback) return;
    const removed = built[pos];
    setUsed((u) => { const n = [...u]; n[removed.srcIdx] = false; return n; });
    setBuilt((b) => b.filter((_, i) => i !== pos));
  }

  function checkAnswer() {
    const current = queue[index];
    const correct = tokenize(current.exampleEn);
    const attempt = built.map((b) => b.word);
    const isCorrect = attempt.join(" ") === correct.join(" ");
    setFeedback(isCorrect ? "correct" : "wrong");
    if (isCorrect) setScore((s) => s + 1);
    setTimeout(() => {
      const next = index + 1;
      if (next >= queue.length) { setPhase("done"); return; }
      setIndex(next);
      loadQuestion(queue[next]);
    }, 1200);
  }

  function restart() {
    const qs = [...words].sort(() => Math.random() - 0.5);
    setQueue(qs);
    setScore(0);
    setIndex(0);
    loadQuestion(qs[0]);
    setPhase("playing");
  }

  if (phase === "idle") {
    return (
      <div className="bg-white rounded-xl border p-6 space-y-4">
        <label className="block text-sm font-medium text-gray-700">Hepde saýla:</label>
        <select value={selectedWeek} onChange={(e) => setSelectedWeek(e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm">
          <option value="all">Ähli sözler (tötänleýin 20)</option>
          {sections.map((s) => (
            <option key={s.weekNumber} value={String(s.weekNumber)}>Hepde {s.weekNumber}: {s.titleEn.replace(/^Week \d+: /, "")}</option>
          ))}
        </select>
        <button onClick={() => startGame(selectedWeek)} disabled={loading} className="w-full py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors disabled:opacity-50">
          {loading ? "Ýüklenýär..." : "Oýnuny başla →"}
        </button>
      </div>
    );
  }

  if (phase === "done") {
    return (
      <div className="text-center py-12 space-y-4">
        <div className="text-6xl">🏗️</div>
        <h2 className="text-2xl font-bold">{score}/{queue.length} dogry</h2>
        <p className="text-4xl font-bold text-teal-600">{Math.round((score / queue.length) * 100)}%</p>
        <div className="flex gap-3 justify-center mt-4">
          <button onClick={restart} className="px-6 py-2.5 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700">Gaýtadan</button>
          <button onClick={() => { setPhase("idle"); setWords([]); }} className="px-6 py-2.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">Başga hepde</button>
        </div>
      </div>
    );
  }

  const current = queue[index];

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm text-gray-500">
        <span>{index + 1}/{queue.length}</span>
        <span className="text-teal-600 font-medium">{score} dogry</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2">
        <div className="bg-teal-500 h-2 rounded-full transition-all" style={{ width: `${(index / queue.length) * 100}%` }} />
      </div>

      {/* Context hint */}
      <div className="bg-teal-50 rounded-xl border border-teal-200 p-4 text-center space-y-1">
        <p className="text-xs text-teal-500 font-medium uppercase tracking-wide">Sözlemi duz</p>
        <p className="text-sm font-semibold text-gray-800">{current.wordEn} <span className="text-gray-400 font-normal">— {current.wordTk}</span></p>
      </div>

      {/* Built sentence */}
      <div className={`min-h-14 rounded-xl border-2 p-3 flex flex-wrap gap-2 transition-colors ${
        feedback === "correct" ? "border-green-400 bg-green-50" :
        feedback === "wrong" ? "border-red-400 bg-red-50" :
        "border-gray-200 bg-gray-50"
      }`}>
        {built.length === 0 && <p className="text-sm text-gray-400 self-center">Aşakdaky sözlere basyp sözlem duz...</p>}
        {built.map((b, i) => (
          <button
            key={i}
            onClick={() => handleBuiltClick(i)}
            className="px-2.5 py-1.5 bg-white border border-teal-300 rounded-lg text-sm font-medium text-teal-700 hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-colors"
          >
            {b.word}
          </button>
        ))}
      </div>

      {/* Token pool */}
      <div className="flex flex-wrap gap-2">
        {tokens.map((tok, i) => (
          <button
            key={i}
            onClick={() => handleTokenClick(i)}
            disabled={used[i]}
            className={`px-3 py-2 rounded-lg border text-sm font-medium transition-all ${
              used[i] ? "opacity-0 pointer-events-none" : "bg-white border-gray-300 hover:border-teal-400 hover:bg-teal-50 hover:text-teal-700"
            }`}
          >
            {tok}
          </button>
        ))}
      </div>

      <div className="flex gap-3">
        <button
          onClick={checkAnswer}
          disabled={built.length !== tokens.length || !!feedback}
          className="flex-1 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 disabled:opacity-40 transition-colors"
        >
          Barla ✓
        </button>
        <button onClick={() => loadQuestion(current)} className="px-4 py-3 border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-50 text-sm">
          ↺
        </button>
      </div>

      {feedback === "wrong" && (
        <p className="text-sm text-center text-red-500">
          Dogry: {current.exampleEn}
        </p>
      )}
    </div>
  );
}
