"use client";

import { useState } from "react";

type Word = { id: string; wordEn: string; wordTk: string; partOfSpeech: string; exampleEn: string };
type Section = { weekNumber: number; titleEn: string };

const MAX_WRONG = 6;
const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

function HangmanSVG({ wrong }: { wrong: number }) {
  return (
    <svg viewBox="0 0 200 220" className="w-40 h-44 mx-auto" strokeLinecap="round">
      {/* Gallows */}
      <line x1="20" y1="210" x2="100" y2="210" stroke="#6b7280" strokeWidth="3" />
      <line x1="60" y1="210" x2="60" y2="20" stroke="#6b7280" strokeWidth="3" />
      <line x1="60" y1="20" x2="140" y2="20" stroke="#6b7280" strokeWidth="3" />
      <line x1="140" y1="20" x2="140" y2="50" stroke="#6b7280" strokeWidth="3" />
      {/* Body parts — shown progressively */}
      {wrong > 0 && <circle cx="140" cy="66" r="16" stroke="#ef4444" strokeWidth="3" fill="none" />}
      {wrong > 1 && <line x1="140" y1="82" x2="140" y2="145" stroke="#ef4444" strokeWidth="3" />}
      {wrong > 2 && <line x1="140" y1="100" x2="115" y2="125" stroke="#ef4444" strokeWidth="3" />}
      {wrong > 3 && <line x1="140" y1="100" x2="165" y2="125" stroke="#ef4444" strokeWidth="3" />}
      {wrong > 4 && <line x1="140" y1="145" x2="115" y2="175" stroke="#ef4444" strokeWidth="3" />}
      {wrong > 5 && <line x1="140" y1="145" x2="165" y2="175" stroke="#ef4444" strokeWidth="3" />}
    </svg>
  );
}

export default function HangmanGame({ sections }: { sections: Section[] }) {
  const [selectedWeek, setSelectedWeek] = useState("all");
  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState(false);
  const [phase, setPhase] = useState<"idle" | "playing" | "won" | "lost">("idle");

  const [target, setTarget] = useState<Word | null>(null);
  const [guessed, setGuessed] = useState<Set<string>>(new Set());
  const [showHint, setShowHint] = useState(false);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  async function startGame(week: string) {
    setLoading(true);
    const url = week === "all" ? "/api/games/words" : `/api/games/words?week=${week}`;
    const res = await fetch(url);
    const data: Word[] = await res.json();
    setWords(data);
    pickWord(data);
    setLoading(false);
  }

  function pickWord(pool: Word[]) {
    const w = pool[Math.floor(Math.random() * pool.length)];
    setTarget(w);
    setGuessed(new Set());
    setShowHint(false);
    setPhase("playing");
  }

  function handleGuess(letter: string) {
    if (!target || guessed.has(letter)) return;
    const next = new Set([...guessed, letter]);
    setGuessed(next);

    const letters = target.wordEn.toLowerCase().replace(/[^a-z]/g, "").split("");
    const allRevealed = letters.every((l) => next.has(l));
    const wrongCount = [...next].filter((l) => !letters.includes(l)).length;

    if (allRevealed) { setWins((w) => w + 1); setPhase("won"); }
    else if (wrongCount >= MAX_WRONG) { setLosses((l) => l + 1); setPhase("lost"); }
  }

  if (phase === "idle") {
    return (
      <div className="bg-white rounded-xl border p-6 space-y-4">
        <label className="block text-sm font-medium text-gray-700">Hepde saýla:</label>
        <select
          value={selectedWeek}
          onChange={(e) => setSelectedWeek(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
        >
          <option value="all">Ähli sözler (tötänleýin)</option>
          {sections.map((s) => (
            <option key={s.weekNumber} value={String(s.weekNumber)}>
              Hepde {s.weekNumber}: {s.titleEn.replace(/^Week \d+: /, "")}
            </option>
          ))}
        </select>
        <button
          onClick={() => startGame(selectedWeek)}
          disabled={loading}
          className="w-full py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors disabled:opacity-50"
        >
          {loading ? "Ýüklenýär..." : "Oýnuny başla →"}
        </button>
      </div>
    );
  }

  if (!target) return null;

  const letters = target.wordEn.toLowerCase().replace(/[^a-z]/g, "").split("");
  const wrongLetters = [...guessed].filter((l) => !letters.includes(l));
  const wrongCount = wrongLetters.length;

  const wordDisplay = target.wordEn.split("").map((ch, i) => {
    const lower = ch.toLowerCase();
    if (!/[a-z]/i.test(ch)) return <span key={i} className="text-2xl font-bold text-gray-400 mx-0.5">{ch}</span>;
    const revealed = guessed.has(lower) || phase === "won" || phase === "lost";
    return (
      <span
        key={i}
        className={`inline-block w-8 text-center text-2xl font-bold border-b-2 mx-0.5 ${
          revealed
            ? phase === "lost" && !guessed.has(lower)
              ? "text-red-500 border-red-400"
              : "text-gray-900 border-gray-700"
            : "text-transparent border-gray-400"
        }`}
      >
        {revealed ? ch : "_"}
      </span>
    );
  });

  return (
    <div className="space-y-5">
      {/* Score */}
      <div className="flex justify-between text-sm font-medium">
        <span className="text-green-600">✅ {wins} ýeňiş</span>
        <span className="text-red-500">{wrongCount}/{MAX_WRONG} ýalňyşlyk</span>
        <span className="text-gray-500">❌ {losses} ýeňliş</span>
      </div>

      {/* Hangman drawing */}
      <div className="bg-gray-50 rounded-2xl py-2">
        <HangmanSVG wrong={wrongCount} />
      </div>

      {/* Word display */}
      <div className="flex justify-center flex-wrap gap-1 py-2">{wordDisplay}</div>

      {/* Part of speech + hint */}
      <div className="text-center space-y-1">
        <span className="text-xs text-gray-400 uppercase tracking-widest">{target.partOfSpeech}</span>
        <div>
          {!showHint ? (
            <button
              onClick={() => setShowHint(true)}
              className="text-xs text-blue-500 hover:text-blue-700 underline"
            >
              💡 Terjimesini görkez
            </button>
          ) : (
            <p className="text-sm text-blue-600 font-medium">{target.wordTk}</p>
          )}
        </div>
        <p className="text-xs text-gray-400 italic">"{target.exampleEn}"</p>
      </div>

      {/* Keyboard */}
      {(phase === "playing") && (
        <div className="flex flex-wrap justify-center gap-1.5">
          {ALPHABET.map((l) => {
            const isCorrect = guessed.has(l) && letters.includes(l);
            const isWrong = guessed.has(l) && !letters.includes(l);
            return (
              <button
                key={l}
                onClick={() => handleGuess(l)}
                disabled={guessed.has(l)}
                className={`w-9 h-9 rounded-lg text-sm font-bold transition-all ${
                  isCorrect
                    ? "bg-green-500 text-white"
                    : isWrong
                    ? "bg-gray-200 text-gray-400 line-through"
                    : "bg-white border border-gray-300 hover:border-red-400 hover:bg-red-50 hover:text-red-600"
                }`}
              >
                {l}
              </button>
            );
          })}
        </div>
      )}

      {/* Result overlay */}
      {(phase === "won" || phase === "lost") && (
        <div className={`rounded-2xl p-5 text-center space-y-3 ${phase === "won" ? "bg-green-50 border-2 border-green-200" : "bg-red-50 border-2 border-red-200"}`}>
          <p className="text-3xl">{phase === "won" ? "🎉" : "💀"}</p>
          <p className="font-bold text-lg text-gray-900">
            {phase === "won" ? "Dogry tapdyňyz!" : `Jogap: ${target.wordEn}`}
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => pickWord(words)}
              className={`px-5 py-2 text-white rounded-lg font-semibold text-sm ${phase === "won" ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"}`}
            >
              Indiki söz →
            </button>
            <button
              onClick={() => setPhase("idle")}
              className="px-5 py-2 border border-gray-200 rounded-lg text-gray-600 text-sm hover:bg-gray-50"
            >
              Başga hepde
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
