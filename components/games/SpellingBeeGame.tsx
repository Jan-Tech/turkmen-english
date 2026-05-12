"use client";

import { useState, useRef } from "react";

type Word = { id: string; wordEn: string; wordTk: string; partOfSpeech: string; exampleEn: string };
type Section = { weekNumber: number; titleEn: string };

function blanked(sentence: string, word: string) {
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const result = sentence.replace(new RegExp(`\\b${escaped}\\w*\\b`, "gi"), "_____");
  return result !== sentence ? result : sentence;
}

export default function SpellingBeeGame({ sections }: { sections: Section[] }) {
  const [selectedWeek, setSelectedWeek] = useState("all");
  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState(false);
  const [phase, setPhase] = useState<"idle" | "playing" | "done">("idle");

  const [queue, setQueue] = useState<Word[]>([]);
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [score, setScore] = useState(0);
  const [hintLevel, setHintLevel] = useState(0); // 0=none, 1=first letter, 2=example
  const [attempts, setAttempts] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  async function startGame(week: string) {
    setLoading(true);
    const url = week === "all" ? "/api/games/words" : `/api/games/words?week=${week}`;
    const res = await fetch(url);
    const data: Word[] = await res.json();
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    setWords(shuffled);
    setQueue(shuffled);
    setIndex(0);
    setInput("");
    setFeedback(null);
    setScore(0);
    setHintLevel(0);
    setAttempts(0);
    setPhase("playing");
    setLoading(false);
    setTimeout(() => inputRef.current?.focus(), 100);
  }

  function handleSubmit() {
    if (!input.trim() || feedback) return;
    const current = queue[index];
    const correct = input.trim().toLowerCase() === current.wordEn.toLowerCase();
    setAttempts((a) => a + 1);
    setFeedback(correct ? "correct" : "wrong");
    if (correct) setScore((s) => s + Math.max(1, 3 - hintLevel));

    setTimeout(() => {
      const next = index + 1;
      if (next >= queue.length) { setPhase("done"); return; }
      setIndex(next);
      setInput("");
      setFeedback(null);
      setHintLevel(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }, 1200);
  }

  function skipWord() {
    const next = index + 1;
    if (next >= queue.length) { setPhase("done"); return; }
    setIndex(next);
    setInput("");
    setFeedback(null);
    setHintLevel(0);
    setTimeout(() => inputRef.current?.focus(), 50);
  }

  function restart() {
    const shuffled = [...words].sort(() => Math.random() - 0.5);
    setQueue(shuffled);
    setIndex(0);
    setInput("");
    setFeedback(null);
    setScore(0);
    setHintLevel(0);
    setAttempts(0);
    setPhase("playing");
    setTimeout(() => inputRef.current?.focus(), 100);
  }

  if (phase === "idle") {
    return (
      <div className="bg-white rounded-xl border p-6 space-y-4">
        <p className="text-sm text-gray-500">Türkmen terjimesini görüp, iňlisçe sözi ýaz. Dogry ýazgyda üç bal — her maslahat 1 bal aýyrýar.</p>
        <label className="block text-sm font-medium text-gray-700">Hepde saýla:</label>
        <select value={selectedWeek} onChange={(e) => setSelectedWeek(e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400">
          <option value="all">Ähli sözler (tötänleýin 20)</option>
          {sections.map((s) => (
            <option key={s.weekNumber} value={String(s.weekNumber)}>Hepde {s.weekNumber}: {s.titleEn.replace(/^Week \d+: /, "")}</option>
          ))}
        </select>
        <button onClick={() => startGame(selectedWeek)} disabled={loading} className="w-full py-3 bg-yellow-400 text-gray-900 rounded-lg font-bold hover:bg-yellow-500 transition-colors disabled:opacity-50">
          {loading ? "Ýüklenýär..." : "🐝 Oýnuny başla →"}
        </button>
      </div>
    );
  }

  if (phase === "done") {
    const maxScore = queue.length * 3;
    const pct = Math.round((score / maxScore) * 100);
    return (
      <div className="text-center py-12 space-y-4">
        <div className="text-6xl">🐝</div>
        <h2 className="text-2xl font-bold text-gray-900">Tamamladyňyz!</h2>
        <p className="text-gray-500">{queue.length} sözden <span className="font-bold text-yellow-600">{score}</span> bal ({pct}%)</p>
        <div className="flex gap-3 justify-center mt-4">
          <button onClick={restart} className="px-6 py-2.5 bg-yellow-400 text-gray-900 rounded-lg font-bold hover:bg-yellow-500">Gaýtadan</button>
          <button onClick={() => { setPhase("idle"); setWords([]); }} className="px-6 py-2.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">Başga hepde</button>
        </div>
      </div>
    );
  }

  const current = queue[index];
  const letterHint = current.wordEn[0].toUpperCase() + " _ ".repeat(current.wordEn.length - 1);

  return (
    <div className="space-y-5">
      <div className="flex justify-between text-sm text-gray-500">
        <span>{index + 1}/{queue.length}</span>
        <span className="text-yellow-600 font-bold">🐝 {score} bal</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2">
        <div className="bg-yellow-400 h-2 rounded-full transition-all" style={{ width: `${(index / queue.length) * 100}%` }} />
      </div>

      {/* Word clue card */}
      <div className={`rounded-2xl border-2 p-6 text-center space-y-3 transition-colors ${
        feedback === "correct" ? "border-green-400 bg-green-50" :
        feedback === "wrong" ? "border-red-300 bg-red-50" :
        "border-yellow-200 bg-yellow-50"
      }`}>
        <p className="text-xs text-yellow-600 font-semibold uppercase tracking-wide">{current.partOfSpeech}</p>
        <p className="text-3xl font-bold text-gray-900">{current.wordTk}</p>

        {/* Hints */}
        {hintLevel >= 1 && (
          <div className="bg-white rounded-xl px-4 py-2 text-sm text-gray-600 font-mono tracking-widest">
            {letterHint}
          </div>
        )}
        {hintLevel >= 2 && (
          <p className="text-sm text-gray-500 italic">"{blanked(current.exampleEn, current.wordEn)}"</p>
        )}

        {feedback === "correct" && <p className="text-green-700 font-bold text-lg">✓ {current.wordEn}</p>}
        {feedback === "wrong" && <p className="text-red-600 text-sm">Dogry jogap: <strong>{current.wordEn}</strong></p>}
      </div>

      {/* Input */}
      {!feedback && (
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder="Iňlisçe sözi ýaz..."
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            className="flex-1 border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:border-yellow-400 font-medium"
          />
          <button onClick={handleSubmit} disabled={!input.trim()} className="px-5 py-3 bg-yellow-400 text-gray-900 rounded-xl font-bold hover:bg-yellow-500 disabled:opacity-40 transition-colors">
            →
          </button>
        </div>
      )}

      {/* Hint buttons */}
      {!feedback && (
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => setHintLevel(Math.max(hintLevel, 1))}
            disabled={hintLevel >= 1}
            className="text-xs px-3 py-1.5 border border-yellow-300 text-yellow-700 rounded-full hover:bg-yellow-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            💡 Ilkinji harp (−1 bal)
          </button>
          <button
            onClick={() => setHintLevel(Math.max(hintLevel, 2))}
            disabled={hintLevel >= 2}
            className="text-xs px-3 py-1.5 border border-yellow-300 text-yellow-700 rounded-full hover:bg-yellow-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            📖 Mysal (−1 bal)
          </button>
          <button onClick={skipWord} className="text-xs px-3 py-1.5 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-50 transition-colors">
            Geç →
          </button>
        </div>
      )}

      <button onClick={() => setPhase("idle")} className="text-xs text-gray-400 hover:text-gray-600 w-full text-center">← Yzyna dön</button>
    </div>
  );
}
