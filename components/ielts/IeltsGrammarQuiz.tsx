"use client";

import { useState } from "react";
import Link from "next/link";
import type { IeltsGrammarSet } from "@/lib/ielts-grammar";

export default function IeltsGrammarQuiz({ set, nextHref }: { set: IeltsGrammarSet; nextHref: string }) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  function pick(qId: string, idx: number) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qId]: idx }));
  }

  const total = set.questions.length;
  const answered = Object.keys(answers).length;
  const score = submitted
    ? set.questions.filter((q) => answers[q.id] === q.correctIndex).length
    : 0;
  const pct = submitted ? Math.round((score / total) * 100) : 0;

  return (
    <div className="space-y-5">
      {/* Progress */}
      <div className="flex justify-between text-sm text-gray-500">
        <span>{answered}/{total} answered</span>
        {submitted && <span className={`font-semibold ${pct >= 70 ? "text-green-600" : "text-orange-500"}`}>{score}/{total} correct ({pct}%)</span>}
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2">
        <div className="bg-purple-500 h-2 rounded-full transition-all" style={{ width: `${(answered / total) * 100}%` }} />
      </div>

      {/* Result banner */}
      {submitted && (
        <div className={`rounded-xl p-4 text-center border-2 ${pct >= 80 ? "bg-green-50 border-green-300" : pct >= 60 ? "bg-yellow-50 border-yellow-300" : "bg-red-50 border-red-300"}`}>
          <p className="text-3xl font-bold text-gray-900">{score}/{total}</p>
          <p className={`font-semibold mt-1 ${pct >= 80 ? "text-green-700" : pct >= 60 ? "text-yellow-700" : "text-red-600"}`}>
            {pct >= 80 ? "Excellent! Band 7+ level" : pct >= 60 ? "Good — keep practising" : "Review the explanations below"}
          </p>
        </div>
      )}

      {/* Questions */}
      {set.questions.map((q, i) => {
        const userAnswer = answers[q.id];
        const isCorrect = submitted && userAnswer === q.correctIndex;
        const isWrong = submitted && userAnswer !== undefined && userAnswer !== q.correctIndex;
        return (
          <div
            key={q.id}
            className={`rounded-2xl border-2 p-5 space-y-3 ${isCorrect ? "border-green-300 bg-green-50" : isWrong ? "border-red-300 bg-red-50" : "border-gray-200 bg-white"}`}
          >
            <p className="text-sm font-medium text-gray-800">
              <span className="text-gray-400 mr-1.5">{i + 1}.</span>
              {q.questionText}
            </p>
            <div className="grid grid-cols-2 gap-2">
              {q.options.map((opt, j) => {
                const isThisCorrect = submitted && j === q.correctIndex;
                const isThisSelected = userAnswer === j;
                return (
                  <button
                    key={j}
                    onClick={() => pick(q.id, j)}
                    className={`px-3 py-2.5 rounded-xl border-2 text-sm font-medium text-left transition-all ${
                      isThisCorrect && submitted
                        ? "bg-green-500 border-green-500 text-white"
                        : isThisSelected && !isThisCorrect && submitted
                        ? "bg-red-400 border-red-400 text-white"
                        : isThisSelected
                        ? "bg-purple-600 border-purple-600 text-white"
                        : "bg-white border-gray-200 text-gray-700 hover:border-purple-400"
                    }`}
                  >
                    <span className="font-bold mr-1">{["A","B","C","D"][j]}.</span> {opt}
                  </button>
                );
              })}
            </div>
            {submitted && (
              <div className={`text-xs rounded-lg px-3 py-2 ${isCorrect ? "bg-green-100 text-green-800" : "bg-red-50 text-red-700"}`}>
                {isCorrect ? "✓ Correct — " : `✗ Correct answer: ${["A","B","C","D"][q.correctIndex]} — `}
                {q.explanation}
              </div>
            )}
          </div>
        );
      })}

      {/* Actions */}
      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          disabled={answered < total}
          className="w-full py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 disabled:opacity-40 transition-colors"
        >
          {answered < total ? `Answer all questions (${answered}/${total})` : "Submit answers →"}
        </button>
      ) : (
        <div className="flex gap-3">
          <button
            onClick={() => { setAnswers({}); setSubmitted(false); }}
            className="flex-1 py-3 border-2 border-gray-200 text-gray-600 rounded-xl font-medium hover:bg-gray-50"
          >
            ↺ Try again
          </button>
          <Link href={nextHref} className="flex-1 py-3 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 text-center">
            Next set →
          </Link>
        </div>
      )}
    </div>
  );
}
