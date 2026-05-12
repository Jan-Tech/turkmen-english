"use client";

import { useState } from "react";
import type { ReadingPassage, TFNAnswer } from "@/lib/ielts-reading";

type UserAnswers = Record<string, string>;

export default function ReadingExercise({ passage }: { passage: ReadingPassage }) {
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<"passage" | "questions">("passage");

  function setAnswer(id: string, value: string) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  const totalQuestions = passage.tfn.length + passage.mcq.length;
  const answeredCount = Object.keys(answers).length;

  function getScore() {
    let correct = 0;
    passage.tfn.forEach((q) => { if (answers[q.id] === q.answer) correct++; });
    passage.mcq.forEach((q) => { if (answers[q.id] === String(q.answerIndex)) correct++; });
    return correct;
  }

  const score = submitted ? getScore() : 0;
  const pct = submitted ? Math.round((score / totalQuestions) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Mobile tab switcher */}
      <div className="flex rounded-lg border border-gray-200 overflow-hidden lg:hidden">
        {(["passage", "questions"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 text-sm font-medium transition-colors ${
              activeTab === tab ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            {tab === "passage" ? "📄 Passage" : "❓ Questions"}
          </button>
        ))}
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-6">
        {/* Passage */}
        <div className={`${activeTab !== "passage" ? "hidden lg:block" : ""}`}>
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-5 lg:sticky lg:top-20 lg:max-h-[80vh] lg:overflow-y-auto">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs bg-blue-100 text-blue-700 font-semibold px-2 py-0.5 rounded-full">{passage.topic}</span>
              <span className="text-xs bg-gray-200 text-gray-600 font-medium px-2 py-0.5 rounded-full">{passage.band}</span>
              <span className="text-xs text-gray-400">⏱ {passage.estimatedTime}</span>
            </div>
            <h2 className="text-lg font-bold text-gray-900 mb-4">{passage.title}</h2>
            <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-4">
              {passage.text.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Questions */}
        <div className={`space-y-6 ${activeTab !== "questions" ? "hidden lg:block" : ""}`}>
          {/* Score banner */}
          {submitted && (
            <div className={`rounded-xl p-4 text-center border-2 ${pct >= 70 ? "bg-green-50 border-green-300" : pct >= 50 ? "bg-yellow-50 border-yellow-300" : "bg-red-50 border-red-300"}`}>
              <p className="text-2xl font-bold text-gray-900">{score}/{totalQuestions}</p>
              <p className={`text-lg font-semibold ${pct >= 70 ? "text-green-700" : pct >= 50 ? "text-yellow-700" : "text-red-600"}`}>{pct}% — {pct >= 70 ? "Excellent!" : pct >= 50 ? "Good effort" : "Keep practising"}</p>
            </div>
          )}

          {/* Section 1: True/False/Not Given */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-base">Section 1: True / False / Not Given</h3>
            <p className="text-xs text-gray-500">Read each statement and decide if it is TRUE, FALSE, or NOT GIVEN based on the passage.</p>
            {passage.tfn.map((q, i) => {
              const userAns = answers[q.id];
              const isCorrect = submitted && userAns === q.answer;
              const isWrong = submitted && userAns !== q.answer;
              return (
                <div key={q.id} className={`rounded-xl border-2 p-4 space-y-3 ${isCorrect ? "border-green-300 bg-green-50" : isWrong ? "border-red-300 bg-red-50" : "border-gray-200 bg-white"}`}>
                  <p className="text-sm font-medium text-gray-800"><span className="text-gray-400 mr-1">{i + 1}.</span>{q.statement}</p>
                  <div className="flex gap-2">
                    {(["TRUE", "FALSE", "NOT GIVEN"] as TFNAnswer[]).map((opt) => {
                      const isSelected = userAns === opt;
                      const isThisCorrect = submitted && opt === q.answer;
                      return (
                        <button
                          key={opt}
                          onClick={() => setAnswer(q.id, opt)}
                          className={`flex-1 py-2 rounded-lg text-xs font-bold border-2 transition-all ${
                            isThisCorrect && submitted
                              ? "bg-green-500 border-green-500 text-white"
                              : isSelected && !isThisCorrect && submitted
                              ? "bg-red-400 border-red-400 text-white"
                              : isSelected
                              ? "bg-blue-600 border-blue-600 text-white"
                              : "bg-white border-gray-200 text-gray-600 hover:border-blue-400"
                          }`}
                        >
                          {opt === "NOT GIVEN" ? "N/G" : opt}
                        </button>
                      );
                    })}
                  </div>
                  {submitted && (
                    <p className={`text-xs ${isCorrect ? "text-green-700" : "text-red-600"}`}>
                      {isCorrect ? "✓ Correct" : `✗ Answer: ${q.answer}`} — {q.explanation}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Section 2: Multiple Choice */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900 text-base">Section 2: Multiple Choice</h3>
            <p className="text-xs text-gray-500">Choose the best answer (A, B, C or D) based on information in the passage.</p>
            {passage.mcq.map((q, i) => {
              const userAns = answers[q.id];
              const isCorrect = submitted && userAns === String(q.answerIndex);
              return (
                <div key={q.id} className={`rounded-xl border-2 p-4 space-y-3 ${isCorrect ? "border-green-300 bg-green-50" : (submitted && !isCorrect) ? "border-red-300 bg-red-50" : "border-gray-200 bg-white"}`}>
                  <p className="text-sm font-medium text-gray-800"><span className="text-gray-400 mr-1">{passage.tfn.length + i + 1}.</span>{q.question}</p>
                  <div className="space-y-2">
                    {q.options.map((opt, j) => {
                      const isSelected = userAns === String(j);
                      const isThisCorrect = submitted && j === q.answerIndex;
                      const labels = ["A", "B", "C", "D"];
                      return (
                        <button
                          key={j}
                          onClick={() => setAnswer(q.id, String(j))}
                          className={`w-full text-left px-4 py-2.5 rounded-lg border-2 text-sm transition-all flex items-start gap-2 ${
                            isThisCorrect && submitted
                              ? "bg-green-500 border-green-500 text-white"
                              : isSelected && !isThisCorrect && submitted
                              ? "bg-red-400 border-red-400 text-white"
                              : isSelected
                              ? "bg-blue-600 border-blue-600 text-white"
                              : "bg-white border-gray-200 text-gray-700 hover:border-blue-400"
                          }`}
                        >
                          <span className="font-bold shrink-0">{labels[j]}.</span>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                  {submitted && (
                    <p className={`text-xs ${isCorrect ? "text-green-700" : "text-red-600"}`}>
                      {isCorrect ? "✓ Correct" : `✗ Answer: ${["A","B","C","D"][q.answerIndex]}`} — {q.explanation}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Submit / Reset */}
          {!submitted ? (
            <button
              onClick={() => setSubmitted(true)}
              disabled={answeredCount < totalQuestions}
              className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 disabled:opacity-40 transition-colors"
            >
              {answeredCount < totalQuestions ? `Answer all questions (${answeredCount}/${totalQuestions})` : "Submit answers →"}
            </button>
          ) : (
            <button
              onClick={() => { setAnswers({}); setSubmitted(false); }}
              className="w-full py-3 border-2 border-gray-200 text-gray-600 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              ↺ Try again
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
