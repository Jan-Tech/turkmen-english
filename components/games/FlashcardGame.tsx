"use client";

import { useState } from "react";

type Word = { id: string; wordEn: string; wordTk: string; partOfSpeech: string; exampleEn: string };
type Section = { weekNumber: number; titleEn: string };

export default function FlashcardGame({ sections }: { sections: Section[] }) {
  const [selectedWeek, setSelectedWeek] = useState("all");
  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState(false);
  const [phase, setPhase] = useState<"idle" | "playing" | "done">("idle");
  const [deck, setDeck] = useState<Word[]>([]);
  const [knownCount, setKnownCount] = useState(0);
  const [flipped, setFlipped] = useState(false);

  async function startGame(week: string) {
    setLoading(true);
    const url = week === "all" ? "/api/games/words" : `/api/games/words?week=${week}`;
    const res = await fetch(url);
    const data: Word[] = await res.json();
    setWords(data);
    setDeck([...data].sort(() => Math.random() - 0.5));
    setKnownCount(0);
    setFlipped(false);
    setPhase("playing");
    setLoading(false);
  }

  function handleGotIt() {
    const nextDeck = deck.slice(1);
    setKnownCount((k) => k + 1);
    setFlipped(false);
    if (nextDeck.length === 0) setPhase("done");
    else setDeck(nextDeck);
  }

  function handleStillLearning() {
    setDeck((d) => [...d.slice(1), d[0]]);
    setFlipped(false);
  }

  function restart() {
    setDeck([...words].sort(() => Math.random() - 0.5));
    setKnownCount(0);
    setFlipped(false);
    setPhase("playing");
  }

  if (phase === "idle") {
    return (
      <div className="bg-white rounded-xl border p-6 space-y-4">
        <label className="block text-sm font-medium text-gray-700">Hepde saýla:</label>
        <select
          value={selectedWeek}
          onChange={(e) => setSelectedWeek(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {loading ? "Ýüklenýär..." : "Oýnuny başla →"}
        </button>
      </div>
    );
  }

  if (phase === "done") {
    return (
      <div className="text-center py-12 space-y-4">
        <div className="text-6xl">🎉</div>
        <h2 className="text-2xl font-bold text-gray-900">Gutlaýarys!</h2>
        <p className="text-gray-500">{knownCount} sözi öwrendiňiz!</p>
        <div className="flex gap-3 justify-center mt-4">
          <button
            onClick={restart}
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Gaýtadan başla
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

  const current = deck[0];
  const total = words.length;
  const progress = knownCount / total;

  return (
    <div className="space-y-5">
      {/* Progress */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{knownCount}/{total} öwrenildi</span>
        <span>{deck.length} kart galdy</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Flip card */}
      <div
        className="[perspective:1000px] cursor-pointer select-none"
        onClick={() => !flipped && setFlipped(true)}
      >
        <div
          className={`relative h-56 [transform-style:preserve-3d] transition-transform duration-500 ${
            flipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* Front */}
          <div className="absolute inset-0 [backface-visibility:hidden] bg-white rounded-2xl border-2 border-gray-200 flex flex-col items-center justify-center p-8 shadow-sm">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">
              {current.partOfSpeech}
            </p>
            <p className="text-4xl font-bold text-gray-900">{current.wordEn}</p>
            <p className="text-sm text-gray-400 mt-5">↓ Terjimesini görmek üçin basyň</p>
          </div>
          {/* Back */}
          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-blue-50 rounded-2xl border-2 border-blue-200 flex flex-col items-center justify-center p-8 shadow-sm">
            <p className="text-4xl font-bold text-blue-700">{current.wordTk}</p>
            <p className="text-sm text-gray-500 mt-4 text-center italic leading-relaxed">
              "{current.exampleEn}"
            </p>
          </div>
        </div>
      </div>

      {/* Answer buttons — only visible after flip */}
      <div
        className={`grid grid-cols-2 gap-3 transition-opacity duration-200 ${
          flipped ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={handleStillLearning}
          className="py-3 rounded-xl border-2 border-orange-200 bg-orange-50 text-orange-700 font-semibold hover:bg-orange-100 transition-colors"
        >
          😓 Heniz öwrenmedim
        </button>
        <button
          onClick={handleGotIt}
          className="py-3 rounded-xl border-2 border-green-200 bg-green-50 text-green-700 font-semibold hover:bg-green-100 transition-colors"
        >
          ✅ Bildim!
        </button>
      </div>

      <button
        onClick={() => { setPhase("idle"); setWords([]); }}
        className="text-xs text-gray-400 hover:text-gray-600 w-full text-center transition-colors"
      >
        ← Yzyna dön
      </button>
    </div>
  );
}
