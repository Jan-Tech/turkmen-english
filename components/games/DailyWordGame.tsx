"use client";

import { useState, useEffect } from "react";

type DailyData = {
  word: { id: string; wordEn: string; wordTk: string; partOfSpeech: string; exampleEn: string };
  date: string;
};

const STORAGE_KEY = "daily_word_result";

export default function DailyWordGame() {
  const [data, setData] = useState<DailyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  const [phase, setPhase] = useState<"playing" | "won" | "lost" | "already_played">("playing");
  const [attempts, setAttempts] = useState<{ value: string; correct: boolean }[]>([]);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/games/daily-word");
      const d: DailyData = await res.json();
      setData(d);

      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const { date, won } = JSON.parse(saved);
        if (date === d.date) {
          setPhase(won ? "won" : "lost");
        }
      }
      setLoading(false);
    })();
  }, []);

  function handleSubmit() {
    if (!data || !input.trim()) return;
    const guess = input.trim().toLowerCase();
    const correct = guess === data.word.wordEn.toLowerCase();
    const newAttempts = [...attempts, { value: input.trim(), correct }];
    setAttempts(newAttempts);
    setInput("");

    if (correct) {
      setPhase("won");
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ date: data.date, won: true }));
    } else if (newAttempts.length >= 3) {
      setPhase("lost");
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ date: data.date, won: false }));
    }
  }

  if (loading) return <div className="text-center py-12 text-gray-400">Ýüklenýär...</div>;
  if (!data) return null;

  const today = new Date().toLocaleDateString("tk-TM", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  return (
    <div className="space-y-5">
      {/* Date */}
      <div className="text-center">
        <p className="text-xs text-gray-400 uppercase tracking-widest">{today}</p>
        <p className="text-sm text-gray-500 mt-0.5">Gündelik söz • Her gün täzelenýär</p>
      </div>

      {/* Clues */}
      <div className="bg-yellow-50 rounded-2xl border-2 border-yellow-200 p-6 space-y-3">
        <p className="text-xs text-yellow-600 font-semibold uppercase tracking-wide">Sözüň alamatlary</p>
        <div className="space-y-2 text-sm text-gray-700">
          <p>📝 <strong>Dil bölegi:</strong> {data.word.partOfSpeech}</p>
          <p>📖 <strong>Mysal:</strong> <em>"{data.word.exampleEn.replace(new RegExp(`\\b${data.word.wordEn}\\w*\\b`, "gi"), "_____")}"</em></p>
          <p>🔢 <strong>Harp sany:</strong> {data.word.wordEn.length} harp</p>
        </div>
        {!showHint && phase === "playing" && (
          <button onClick={() => setShowHint(true)} className="text-xs text-yellow-600 underline hover:text-yellow-700">
            💡 Türkmen terjimesini görkez
          </button>
        )}
        {showHint && <p className="text-sm font-semibold text-yellow-700">🇹🇲 {data.word.wordTk}</p>}
      </div>

      {/* Attempts */}
      {attempts.length > 0 && (
        <div className="space-y-2">
          {attempts.map((a, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-sm font-medium ${
                a.correct ? "border-green-400 bg-green-50 text-green-700" : "border-red-300 bg-red-50 text-red-600"
              }`}
            >
              <span>{a.correct ? "✅" : "❌"}</span>
              <span>{a.value}</span>
              {!a.correct && <span className="text-xs text-gray-400 ml-auto">{i + 1}/3 synanyşyk</span>}
            </div>
          ))}
        </div>
      )}

      {/* Result */}
      {(phase === "won" || phase === "lost") && (
        <div className={`rounded-2xl p-6 text-center space-y-3 border-2 ${phase === "won" ? "bg-green-50 border-green-300" : "bg-red-50 border-red-300"}`}>
          <p className="text-4xl">{phase === "won" ? "🌟" : "😔"}</p>
          <p className="font-bold text-lg text-gray-900">
            {phase === "won" ? "Dogry tapdyňyz!" : `Jogap: ${data.word.wordEn}`}
          </p>
          <p className="text-sm text-gray-500">{data.word.wordTk} — {data.word.partOfSpeech}</p>
          <p className="text-xs text-gray-400 mt-2">Täze söz ertir gelýär 🌅</p>
        </div>
      )}

      {/* Input */}
      {phase === "playing" && (
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder="Iňlisçe sözi ýaz..."
            className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            autoComplete="off"
          />
          <button
            onClick={handleSubmit}
            disabled={!input.trim()}
            className="px-5 py-3 bg-yellow-500 text-white rounded-xl font-semibold hover:bg-yellow-600 disabled:opacity-40 transition-colors"
          >
            →
          </button>
        </div>
      )}

      {phase === "playing" && (
        <p className="text-center text-xs text-gray-400">{3 - attempts.length} synanyşyk galdy</p>
      )}
    </div>
  );
}
