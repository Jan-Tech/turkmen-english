"use client";

import { useState } from "react";

type Word = { id: string; wordEn: string; wordTk: string; partOfSpeech: string; exampleEn: string };
type Section = { weekNumber: number; titleEn: string };
type Question = { word: Word; definition: string; isTrue: boolean };

function buildQuestions(words: Word[]): Question[] {
  const pool = [...words].sort(() => Math.random() - 0.5);
  return pool.map((w) => {
    const isTrue = Math.random() > 0.4;
    let definition: string;
    if (isTrue) {
      definition = w.wordTk;
    } else {
      const wrong = words.filter((x) => x.id !== w.id && x.partOfSpeech === w.partOfSpeech);
      const fallback = words.filter((x) => x.id !== w.id);
      const pick = (wrong.length > 0 ? wrong : fallback)[Math.floor(Math.random() * (wrong.length > 0 ? wrong.length : fallback.length))];
      definition = pick.wordTk;
    }
    return { word: w, definition, isTrue };
  });
}

export default function TrueFalseGame({ sections }: { sections: Section[] }) {
  const [selectedWeek, setSelectedWeek] = useState("all");
  const [loading, setLoading] = useState(false);
  const [phase, setPhase] = useState<"idle" | "playing" | "done">("idle");

  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);
  const [score, setScore] = useState(0);

  async function startGame(week: string) {
    setLoading(true);
    const url = week === "all" ? "/api/games/words" : `/api/games/words?week=${week}`;
    const res = await fetch(url);
    const data: Word[] = await res.json();
    const qs = buildQuestions(data);
    setQuestions(qs);
    setIndex(0);
    setFeedback(null);
    setScore(0);
    setPhase("playing");
    setLoading(false);
  }

  function handleAnswer(answer: boolean) {
    if (feedback) return;
    const correct = answer === questions[index].isTrue;
    setFeedback(correct ? "correct" : "wrong");
    if (correct) setScore((s) => s + 1);
    setTimeout(() => {
      const next = index + 1;
      if (next >= questions.length) { setPhase("done"); return; }
      setIndex(next);
      setFeedback(null);
    }, 1000);
  }

  if (phase === "idle") {
    return (
      <div className="bg-white rounded-xl border p-6 space-y-4">
        <p className="text-sm text-gray-500">Sözüň terjimesi dogrymy? ✓ ýa-da ✗ basyň.</p>
        <label className="block text-sm font-medium text-gray-700">Hepde saýla:</label>
        <select value={selectedWeek} onChange={(e) => setSelectedWeek(e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm">
          <option value="all">Ähli sözler (tötänleýin 20)</option>
          {sections.map((s) => (
            <option key={s.weekNumber} value={String(s.weekNumber)}>Hepde {s.weekNumber}: {s.titleEn.replace(/^Week \d+: /, "")}</option>
          ))}
        </select>
        <button onClick={() => startGame(selectedWeek)} disabled={loading} className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-50">
          {loading ? "Ýüklenýär..." : "Oýnuny başla →"}
        </button>
      </div>
    );
  }

  if (phase === "done") {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="text-center py-12 space-y-4">
        <div className="text-6xl">{pct >= 80 ? "🏆" : pct >= 50 ? "👍" : "📖"}</div>
        <h2 className="text-2xl font-bold">{score}/{questions.length} dogry</h2>
        <p className="text-4xl font-bold text-indigo-600">{pct}%</p>
        <div className="flex gap-3 justify-center mt-4">
          <button onClick={() => startGame(selectedWeek)} className="px-6 py-2.5 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700">Gaýtadan</button>
          <button onClick={() => setPhase("idle")} className="px-6 py-2.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">Başga hepde</button>
        </div>
      </div>
    );
  }

  const q = questions[index];
  const bgClass = feedback === "correct" ? "border-green-400 bg-green-50" : feedback === "wrong" ? "border-red-400 bg-red-50" : "border-gray-200 bg-white";

  return (
    <div className="space-y-5">
      <div className="flex justify-between text-sm text-gray-500">
        <span>{index + 1}/{questions.length}</span>
        <span className="text-indigo-600 font-medium">{score} dogry</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2">
        <div className="bg-indigo-500 h-2 rounded-full transition-all" style={{ width: `${(index / questions.length) * 100}%` }} />
      </div>

      {/* Question card */}
      <div className={`rounded-2xl border-2 p-8 text-center space-y-4 transition-colors ${bgClass}`}>
        <p className="text-xs text-gray-400 uppercase tracking-widest">{q.word.partOfSpeech}</p>
        <p className="text-3xl font-bold text-gray-900">{q.word.wordEn}</p>
        <div className="flex items-center justify-center gap-3">
          <span className="text-gray-400 text-sm">=</span>
          <span className="text-xl font-semibold text-indigo-700">{q.definition}</span>
        </div>
        {feedback && (
          <div className="pt-2">
            {feedback === "wrong" && (
              <p className="text-sm text-red-600">Dogry terjime: <strong>{q.word.wordTk}</strong></p>
            )}
            {feedback === "correct" && (
              <p className="text-sm text-green-600">
                {q.isTrue ? "Hawa, dogry!" : "Dogry tapdyňyz — bu ýalňyş terjimedi!"}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className={`grid grid-cols-2 gap-4 transition-opacity ${feedback ? "opacity-40 pointer-events-none" : ""}`}>
        <button
          onClick={() => handleAnswer(true)}
          className="py-5 rounded-2xl bg-green-500 text-white text-2xl font-bold hover:bg-green-600 transition-colors"
        >
          ✓ Dogry
        </button>
        <button
          onClick={() => handleAnswer(false)}
          className="py-5 rounded-2xl bg-red-500 text-white text-2xl font-bold hover:bg-red-600 transition-colors"
        >
          ✗ Ýalňyş
        </button>
      </div>

      <button onClick={() => setPhase("idle")} className="text-xs text-gray-400 hover:text-gray-600 w-full text-center">← Yzyna dön</button>
    </div>
  );
}
