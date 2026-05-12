"use client";

import { useState, useEffect, useRef } from "react";

type Word = { id: string; wordEn: string; wordTk: string; partOfSpeech: string; exampleEn: string };
type Section = { weekNumber: number; titleEn: string };
type Selection = { side: "en" | "tk"; id: string };

export default function WordMatchGame({ sections }: { sections: Section[] }) {
  const [selectedWeek, setSelectedWeek] = useState("all");
  const [allWords, setAllWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState(false);
  const [phase, setPhase] = useState<"idle" | "playing" | "done">("idle");

  const [pairs, setPairs] = useState<Word[]>([]);
  const [enOrder, setEnOrder] = useState<Word[]>([]);
  const [tkOrder, setTkOrder] = useState<Word[]>([]);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [selected, setSelected] = useState<Selection | null>(null);
  const [wrong, setWrong] = useState<Selection[]>([]);
  const [errors, setErrors] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [finalScore, setFinalScore] = useState(0);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (phase !== "playing") return;
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTimeRef.current) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [phase]);

  async function startGame(week: string) {
    setLoading(true);
    const url = week === "all" ? "/api/games/words" : `/api/games/words?week=${week}`;
    const res = await fetch(url);
    const data: Word[] = await res.json();
    setAllWords(data);
    initRound(data);
    setLoading(false);
  }

  function initRound(words: Word[]) {
    const take = words.slice(0, 8);
    setPairs(take);
    setEnOrder([...take].sort(() => Math.random() - 0.5));
    setTkOrder([...take].sort(() => Math.random() - 0.5));
    setMatched(new Set());
    setSelected(null);
    setWrong([]);
    setErrors(0);
    setElapsed(0);
    startTimeRef.current = Date.now();
    setPhase("playing");
  }

  function handleClick(side: "en" | "tk", id: string) {
    if (matched.has(id)) return;
    if (wrong.some((w) => w.side === side && w.id === id)) return;

    if (!selected) {
      setSelected({ side, id });
      return;
    }
    if (selected.side === side && selected.id === id) {
      setSelected(null);
      return;
    }
    if (selected.side === side) {
      setSelected({ side, id });
      return;
    }

    const enId = side === "en" ? id : selected.id;
    const tkId = side === "tk" ? id : selected.id;

    if (enId === tkId) {
      const newMatched = new Set([...matched, enId]);
      setMatched(newMatched);
      setSelected(null);
      if (newMatched.size === pairs.length) {
        const totalTime = Math.floor((Date.now() - startTimeRef.current) / 1000);
        const timeBonus = Math.max(0, 60 - totalTime);
        setFinalScore(Math.max(0, 100 + timeBonus - errors * 5));
        setElapsed(totalTime);
        setTimeout(() => setPhase("done"), 400);
      }
    } else {
      setErrors((e) => e + 1);
      setWrong([{ side: "en", id: enId }, { side: "tk", id: tkId }]);
      setSelected(null);
      setTimeout(() => setWrong([]), 600);
    }
  }

  function getClass(side: "en" | "tk", id: string) {
    const base = "w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all duration-150";
    if (matched.has(id)) return `${base} opacity-0 pointer-events-none`;
    if (wrong.some((w) => w.side === side && w.id === id))
      return `${base} bg-red-50 border-red-400 text-red-700`;
    if (selected?.side === side && selected?.id === id)
      return `${base} bg-purple-50 border-purple-500 text-purple-700 scale-[1.02]`;
    return `${base} bg-white border-gray-200 text-gray-800 hover:border-purple-300 hover:bg-purple-50 cursor-pointer`;
  }

  if (phase === "idle") {
    return (
      <div className="bg-white rounded-xl border p-6 space-y-4">
        <label className="block text-sm font-medium text-gray-700">Hepde saýla:</label>
        <select
          value={selectedWeek}
          onChange={(e) => setSelectedWeek(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="all">Ähli sözler (tötänleýin 8 jübt)</option>
          {sections.map((s) => (
            <option key={s.weekNumber} value={String(s.weekNumber)}>
              Hepde {s.weekNumber}: {s.titleEn.replace(/^Week \d+: /, "")}
            </option>
          ))}
        </select>
        <button
          onClick={() => startGame(selectedWeek)}
          disabled={loading}
          className="w-full py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50"
        >
          {loading ? "Ýüklenýär..." : "Oýnuny başla →"}
        </button>
      </div>
    );
  }

  if (phase === "done") {
    return (
      <div className="text-center py-12 space-y-4">
        <div className="text-6xl">🎊</div>
        <h2 className="text-2xl font-bold text-gray-900">Tamamladyňyz!</h2>
        <div className="flex gap-6 justify-center text-sm text-gray-500">
          <span>⏱ {elapsed} sekunt</span>
          <span>❌ {errors} ýalňyşlyk</span>
        </div>
        <p className="text-4xl font-bold text-purple-600">{finalScore} bal</p>
        <div className="flex gap-3 justify-center mt-4">
          <button
            onClick={() => initRound(allWords)}
            className="px-6 py-2.5 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Gaýtadan
          </button>
          <button
            onClick={() => setPhase("idle")}
            className="px-6 py-2.5 border border-gray-200 rounded-lg font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Başga hepde
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Stats bar */}
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-500">⏱ {elapsed}s</span>
        <span className="font-medium text-gray-700">
          {matched.size}/{pairs.length} gabatlaşdy
        </span>
        <span className="text-red-400">❌ {errors}</span>
      </div>

      {/* Progress */}
      <div className="w-full bg-gray-100 rounded-full h-2">
        <div
          className="bg-purple-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(matched.size / pairs.length) * 100}%` }}
        />
      </div>

      <div className="flex gap-2 text-xs text-gray-400 justify-center">
        <span className="px-2 py-0.5 bg-gray-100 rounded">🇬🇧 Iňlisçe</span>
        <span>↔</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">🇹🇲 Türkmençe</span>
      </div>

      {/* Match grid */}
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-2">
          {enOrder.map((w) => (
            <button key={w.id} onClick={() => handleClick("en", w.id)} className={getClass("en", w.id)}>
              {w.wordEn}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          {tkOrder.map((w) => (
            <button key={w.id} onClick={() => handleClick("tk", w.id)} className={getClass("tk", w.id)}>
              {w.wordTk}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={() => setPhase("idle")}
        className="text-xs text-gray-400 hover:text-gray-600 w-full text-center mt-2 transition-colors"
      >
        ← Yzyna dön
      </button>
    </div>
  );
}
