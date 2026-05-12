"use client";

import { useState, useEffect, useCallback } from "react";

type Word = { id: string; wordEn: string; wordTk: string; partOfSpeech: string; exampleEn: string };
type Section = { weekNumber: number; titleEn: string };
type LetterStatus = "correct" | "present" | "absent" | "empty" | "tbd";

const MAX_GUESSES = 6;

function getStatuses(guess: string, target: string): LetterStatus[] {
  const result: LetterStatus[] = Array(5).fill("absent");
  const t = target.split("");
  const g = guess.split("");
  for (let i = 0; i < 5; i++) {
    if (g[i] === t[i]) { result[i] = "correct"; t[i] = "#"; g[i] = "*"; }
  }
  for (let i = 0; i < 5; i++) {
    if (g[i] === "*") continue;
    const idx = t.indexOf(g[i]);
    if (idx !== -1) { result[i] = "present"; t[idx] = "#"; }
  }
  return result;
}

function tileClass(status: LetterStatus) {
  const base = "w-12 h-12 border-2 flex items-center justify-center text-xl font-bold uppercase rounded-md transition-all";
  switch (status) {
    case "correct": return `${base} bg-green-500 border-green-500 text-white`;
    case "present": return `${base} bg-yellow-400 border-yellow-400 text-white`;
    case "absent": return `${base} bg-gray-500 border-gray-500 text-white`;
    case "tbd": return `${base} bg-white border-gray-500 text-gray-900`;
    default: return `${base} bg-white border-gray-300 text-gray-900`;
  }
}

function keyClass(status?: LetterStatus) {
  const base = "h-14 rounded-lg font-bold text-sm transition-all flex items-center justify-center";
  switch (status) {
    case "correct": return `${base} bg-green-500 text-white`;
    case "present": return `${base} bg-yellow-400 text-white`;
    case "absent": return `${base} bg-gray-400 text-white`;
    default: return `${base} bg-gray-200 text-gray-900 hover:bg-gray-300`;
  }
}

const ROWS = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

export default function WordleGame({ sections }: { sections: Section[] }) {
  const [selectedWeek, setSelectedWeek] = useState("all");
  const [loading, setLoading] = useState(false);
  const [phase, setPhase] = useState<"idle" | "playing" | "won" | "lost">("idle");

  const [target, setTarget] = useState("");
  const [targetWord, setTargetWord] = useState<Word | null>(null);
  const [guesses, setGuesses] = useState<string[]>([]);
  const [current, setCurrent] = useState("");
  const [allWords, setAllWords] = useState<string[]>([]);

  const submit = useCallback(() => {
    if (current.length !== 5 || phase !== "playing") return;
    const newGuesses = [...guesses, current];
    setGuesses(newGuesses);
    setCurrent("");
    if (current === target) setPhase("won");
    else if (newGuesses.length >= MAX_GUESSES) setPhase("lost");
  }, [current, guesses, target, phase]);

  const addLetter = useCallback((l: string) => {
    if (phase !== "playing" || current.length >= 5) return;
    setCurrent((c) => c + l);
  }, [current, phase]);

  const removeLetter = useCallback(() => {
    setCurrent((c) => c.slice(0, -1));
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Enter") submit();
      else if (e.key === "Backspace") removeLetter();
      else if (/^[a-zA-Z]$/.test(e.key)) addLetter(e.key.toLowerCase());
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [submit, addLetter, removeLetter]);

  async function startGame(week: string) {
    setLoading(true);
    const url = week === "all" ? "/api/games/words" : `/api/games/words?week=${week}`;
    const res = await fetch(url);
    const data: Word[] = await res.json();
    const fiveLetterWords = data.filter((w) => w.wordEn.length === 5 && /^[a-zA-Z]+$/.test(w.wordEn));
    const pool = fiveLetterWords.length >= 3 ? fiveLetterWords : data.filter((_, __, arr) => arr.find((w) => w.wordEn.length === 5));
    const wordPool = fiveLetterWords.length > 0 ? fiveLetterWords : data;
    const chosen = wordPool[Math.floor(Math.random() * wordPool.length)];
    setTarget(chosen.wordEn.toLowerCase());
    setTargetWord(chosen);
    setAllWords(data.map((w) => w.wordEn.toLowerCase()));
    setGuesses([]);
    setCurrent("");
    setPhase("playing");
    setLoading(false);
  }

  const keyStatuses: Record<string, LetterStatus> = {};
  for (const g of guesses) {
    const statuses = getStatuses(g, target);
    g.split("").forEach((letter, i) => {
      const prev = keyStatuses[letter];
      const next = statuses[i];
      if (prev === "correct") return;
      if (prev === "present" && next !== "correct") return;
      keyStatuses[letter] = next;
    });
  }

  if (phase === "idle") {
    return (
      <div className="bg-white rounded-xl border p-6 space-y-4">
        <p className="text-sm text-gray-500">Diňe 5 harply sözler ulanylýar.</p>
        <label className="block text-sm font-medium text-gray-700">Hepde saýla:</label>
        <select value={selectedWeek} onChange={(e) => setSelectedWeek(e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm">
          <option value="all">Ähli sözler (tötänleýin)</option>
          {sections.map((s) => (
            <option key={s.weekNumber} value={String(s.weekNumber)}>Hepde {s.weekNumber}: {s.titleEn.replace(/^Week \d+: /, "")}</option>
          ))}
        </select>
        <button onClick={() => startGame(selectedWeek)} disabled={loading} className="w-full py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50">
          {loading ? "Ýüklenýär..." : "Oýnuny başla →"}
        </button>
      </div>
    );
  }

  if (!targetWord) return null;

  return (
    <div className="space-y-4">
      <p className="text-center text-sm text-gray-500">5 harply sözi 6 synanyşykda tap</p>

      {/* Grid */}
      <div className="flex flex-col items-center gap-1.5">
        {Array.from({ length: MAX_GUESSES }).map((_, row) => {
          const guess = guesses[row];
          const isCurrentRow = row === guesses.length;
          return (
            <div key={row} className="flex gap-1.5">
              {Array.from({ length: 5 }).map((_, col) => {
                let letter = "";
                let status: LetterStatus = "empty";
                if (guess) {
                  letter = guess[col] || "";
                  status = getStatuses(guess, target)[col];
                } else if (isCurrentRow) {
                  letter = current[col] || "";
                  status = letter ? "tbd" : "empty";
                }
                return (
                  <div key={col} className={tileClass(status)}>
                    {letter.toUpperCase()}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Result */}
      {(phase === "won" || phase === "lost") && (
        <div className={`rounded-xl p-4 text-center space-y-2 ${phase === "won" ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
          <p className="text-2xl">{phase === "won" ? "🎉" : "😞"}</p>
          <p className="font-bold text-gray-900">
            {phase === "won" ? `${guesses.length} synanyşykda tapdyňyz!` : `Jogap: ${target.toUpperCase()}`}
          </p>
          <p className="text-sm text-gray-500">{targetWord.wordTk} • {targetWord.partOfSpeech}</p>
          <div className="flex gap-2 justify-center mt-2">
            <button onClick={() => startGame(selectedWeek)} className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800">Täze söz</button>
            <button onClick={() => setPhase("idle")} className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 text-sm hover:bg-gray-50">Başga hepde</button>
          </div>
        </div>
      )}

      {/* Keyboard */}
      {phase === "playing" && (
        <div className="space-y-1.5 max-w-xs mx-auto">
          {ROWS.map((row, ri) => (
            <div key={ri} className="flex justify-center gap-1">
              {ri === 2 && (
                <button onClick={submit} className="flex-1 h-14 bg-gray-200 rounded-lg text-xs font-bold hover:bg-gray-300 px-1">
                  ENTER
                </button>
              )}
              {row.split("").map((l) => (
                <button key={l} onClick={() => addLetter(l)} className={`flex-1 ${keyClass(keyStatuses[l])}`}>
                  {l.toUpperCase()}
                </button>
              ))}
              {ri === 2 && (
                <button onClick={removeLetter} className="flex-1 h-14 bg-gray-200 rounded-lg text-xs font-bold hover:bg-gray-300">
                  ⌫
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
