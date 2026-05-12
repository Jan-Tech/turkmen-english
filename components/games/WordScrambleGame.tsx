"use client";

import { useState } from "react";

type Word = { id: string; wordEn: string; wordTk: string; partOfSpeech: string; exampleEn: string };
type Section = { weekNumber: number; titleEn: string };

function scramble(word: string): string[] {
  const letters = word.toLowerCase().split("");
  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }
  return letters;
}

export default function WordScrambleGame({ sections }: { sections: Section[] }) {
  const [selectedWeek, setSelectedWeek] = useState("all");
  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState(false);
  const [phase, setPhase] = useState<"idle" | "playing" | "done">("idle");

  const [queue, setQueue] = useState<Word[]>([]);
  const [tiles, setTiles] = useState<string[]>([]);
  const [used, setUsed] = useState<boolean[]>([]);
  const [answer, setAnswer] = useState<{ letter: string; tileIdx: number }[]>([]);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);

  async function startGame(week: string) {
    setLoading(true);
    const url = week === "all" ? "/api/games/words" : `/api/games/words?week=${week}`;
    const res = await fetch(url);
    const data: Word[] = await res.json();
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    setWords(shuffled);
    setQueue(shuffled);
    setScore(0);
    setIndex(0);
    loadWord(shuffled[0]);
    setPhase("playing");
    setLoading(false);
  }

  function loadWord(w: Word) {
    let scrambled = scramble(w.wordEn);
    while (scrambled.join("") === w.wordEn.toLowerCase()) scrambled = scramble(w.wordEn);
    setTiles(scrambled);
    setUsed(new Array(scrambled.length).fill(false));
    setAnswer([]);
    setFeedback(null);
  }

  function handleTileClick(i: number) {
    if (used[i] || feedback) return;
    const letter = tiles[i];
    setUsed((u) => { const n = [...u]; n[i] = true; return n; });
    setAnswer((a) => [...a, { letter, tileIdx: i }]);
  }

  function handleAnswerClick(pos: number) {
    if (feedback) return;
    const removed = answer[pos];
    setUsed((u) => { const n = [...u]; n[removed.tileIdx] = false; return n; });
    setAnswer((a) => a.filter((_, i) => i !== pos));
  }

  function checkAnswer() {
    if (!queue[index]) return;
    const built = answer.map((a) => a.letter).join("");
    const correct = built === queue[index].wordEn.toLowerCase();
    setFeedback(correct ? "correct" : "wrong");
    if (correct) setScore((s) => s + 1);
    setTimeout(() => {
      const next = index + 1;
      if (next >= queue.length) { setPhase("done"); return; }
      setIndex(next);
      loadWord(queue[next]);
    }, 1000);
  }

  function restart() {
    const shuffled = [...words].sort(() => Math.random() - 0.5);
    setQueue(shuffled);
    setScore(0);
    setIndex(0);
    loadWord(shuffled[0]);
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
        <button onClick={() => startGame(selectedWeek)} disabled={loading} className="w-full py-3 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600 transition-colors disabled:opacity-50">
          {loading ? "Ýüklenýär..." : "Oýnuny başla →"}
        </button>
      </div>
    );
  }

  if (phase === "done") {
    return (
      <div className="text-center py-12 space-y-4">
        <div className="text-6xl">🧩</div>
        <h2 className="text-2xl font-bold text-gray-900">Tamamladyňyz!</h2>
        <p className="text-4xl font-bold text-amber-600">{score}/{words.length}</p>
        <div className="flex gap-3 justify-center mt-4">
          <button onClick={restart} className="px-6 py-2.5 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600">Gaýtadan</button>
          <button onClick={() => { setPhase("idle"); setWords([]); }} className="px-6 py-2.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">Başga hepde</button>
        </div>
      </div>
    );
  }

  const current = queue[index];

  return (
    <div className="space-y-5">
      <div className="flex justify-between text-sm text-gray-500">
        <span>{index + 1}/{queue.length}</span>
        <span className="text-amber-600 font-medium">{score} dogry</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2">
        <div className="bg-amber-400 h-2 rounded-full transition-all" style={{ width: `${(index / queue.length) * 100}%` }} />
      </div>

      {/* Hint */}
      <div className="bg-amber-50 rounded-2xl border-2 border-amber-200 p-5 text-center space-y-1">
        <p className="text-xs text-amber-500 font-medium uppercase tracking-wide">{current.partOfSpeech}</p>
        <p className="text-sm text-gray-600 italic">"{current.exampleEn.replace(new RegExp(`\\b${current.wordEn}\\w*\\b`, "gi"), "_____")}"</p>
        <p className="text-xs text-gray-400">{current.wordTk}</p>
      </div>

      {/* Answer slots */}
      <div className="flex justify-center flex-wrap gap-2 min-h-12">
        {answer.map((a, i) => (
          <button
            key={i}
            onClick={() => handleAnswerClick(i)}
            className={`w-10 h-10 rounded-lg text-base font-bold border-2 transition-all ${
              feedback === "correct" ? "bg-green-100 border-green-400 text-green-700" :
              feedback === "wrong" ? "bg-red-100 border-red-400 text-red-600" :
              "bg-white border-amber-400 text-gray-900 hover:bg-amber-50"
            }`}
          >
            {a.letter}
          </button>
        ))}
        {answer.length === 0 && <p className="text-sm text-gray-400 self-center">Harplara basyp söz duz</p>}
      </div>

      {/* Scrambled tiles */}
      <div className="flex justify-center flex-wrap gap-2">
        {tiles.map((letter, i) => (
          <button
            key={i}
            onClick={() => handleTileClick(i)}
            disabled={used[i]}
            className={`w-10 h-10 rounded-lg text-base font-bold border-2 transition-all ${
              used[i] ? "opacity-0 pointer-events-none" : "bg-white border-gray-300 hover:border-amber-500 hover:bg-amber-50 hover:text-amber-700"
            }`}
          >
            {letter}
          </button>
        ))}
      </div>

      <div className="flex gap-3">
        <button
          onClick={checkAnswer}
          disabled={answer.length !== current.wordEn.length || !!feedback}
          className="flex-1 py-3 bg-amber-500 text-white rounded-xl font-semibold hover:bg-amber-600 disabled:opacity-40 transition-colors"
        >
          Barla ✓
        </button>
        <button onClick={() => loadWord(current)} className="px-4 py-3 border border-gray-200 rounded-xl text-gray-500 hover:bg-gray-50 text-sm">
          ↺
        </button>
      </div>
    </div>
  );
}
