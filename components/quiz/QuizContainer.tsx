"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface Question {
  id: string;
  questionText: string;
  questionType: string;
  options: string[];
  correctIndex: number;
  explanationTk?: string | null;
}

interface QuizContainerProps {
  questions: Question[];
  quizId?: string;
  bigTestId?: string;
  title: string;
  backHref: string;
}

type State = "question" | "reviewing" | "done";

export default function QuizContainer({
  questions,
  quizId,
  bigTestId,
  title,
  backHref,
}: QuizContainerProps) {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [state, setState] = useState<State>("question");
  const [score, setScore] = useState(0);
  const [passed, setPassed] = useState<boolean | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const q = questions[current];
  const isLast = current === questions.length - 1;

  function handleSelect(idx: number) {
    if (state !== "question") return;
    setSelected(idx);
  }

  function handleConfirm() {
    if (selected === null) return;
    setState("reviewing");
  }

  function handleNext() {
    const newAnswers = [...answers, selected!];
    if (isLast) {
      submitQuiz(newAnswers);
    } else {
      setAnswers(newAnswers);
      setCurrent((c) => c + 1);
      setSelected(null);
      setState("question");
    }
  }

  async function submitQuiz(finalAnswers: number[]) {
    setSubmitting(true);
    const s = finalAnswers.filter((a, i) => a === questions[i].correctIndex).length;
    setScore(s);

    const endpoint = quizId ? "/api/progress/quiz" : "/api/progress/test";
    const body = quizId
      ? { quizId, score: s, total: questions.length, answers: finalAnswers }
      : { bigTestId, score: s, total: questions.length, answers: finalAnswers };

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    setPassed(data.passed ?? s / questions.length >= 0.7);
    setAnswers(finalAnswers);
    setState("done");
    setSubmitting(false);
  }

  if (state === "done") {
    const pct = Math.round((score / questions.length) * 100);
    const passedTest = passed ?? pct >= 70;

    return (
      <div className="max-w-lg mx-auto text-center space-y-6 py-8">
        <div className="text-6xl">{passedTest ? "🎉" : "📚"}</div>
        <h2 className="text-2xl font-bold text-gray-900">
          {passedTest ? "Gutlaýarys!" : "Gaýtadan synanyşyň"}
        </h2>
        <div className="bg-white rounded-2xl border p-6 space-y-3">
          <div className="text-4xl font-bold text-gray-900">
            {score}/{questions.length}
          </div>
          <div className="text-gray-600">{pct}% dogry jogap</div>
          <Progress value={pct} className="h-3" />
          {passedTest ? (
            <Badge className="bg-green-100 text-green-700">Geçdi ✓</Badge>
          ) : (
            <Badge variant="destructive">Geçmedi — {pct}% (gerek: 70%)</Badge>
          )}
        </div>

        {/* Per-question review */}
        <div className="text-left space-y-2">
          <h3 className="font-semibold text-gray-900 text-sm">Soragyň derňewi</h3>
          {questions.map((q, i) => {
            const correct = answers[i] === q.correctIndex;
            return (
              <div
                key={q.id}
                className={`rounded-lg p-3 text-sm ${correct ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
              >
                <p className="font-medium text-gray-900">
                  {i + 1}. {q.questionText}
                </p>
                <p className={`mt-1 ${correct ? "text-green-700" : "text-red-700"}`}>
                  Siziň jogabyňyz: {q.options[answers[i]]} {correct ? "✓" : "✗"}
                </p>
                {!correct && (
                  <p className="text-green-700">
                    Dogry jogap: {q.options[q.correctIndex]}
                  </p>
                )}
                {q.explanationTk && (
                  <p className="text-gray-500 mt-1 italic">{q.explanationTk}</p>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex gap-3 justify-center flex-wrap">
          <Button variant="outline" onClick={() => router.push(backHref)}>
            Yzyna dön
          </Button>
          <Button
            onClick={() => {
              setCurrent(0);
              setSelected(null);
              setAnswers([]);
              setState("question");
              setScore(0);
              setPassed(null);
            }}
          >
            Gaýtadan synanyş
          </Button>
        </div>
      </div>
    );
  }

  const optionClasses = (idx: number) => {
    if (state === "question") {
      return selected === idx
        ? "border-blue-500 bg-blue-50 text-blue-700"
        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50";
    }
    if (idx === q.correctIndex) return "border-green-500 bg-green-50 text-green-700";
    if (idx === selected) return "border-red-400 bg-red-50 text-red-700";
    return "border-gray-200 text-gray-400";
  };

  return (
    <div className="max-w-lg mx-auto space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{title}</span>
          <span>
            {current + 1}/{questions.length}
          </span>
        </div>
        <Progress value={((current + 1) / questions.length) * 100} className="h-2" />
      </div>

      <div className="bg-white rounded-2xl border p-6 space-y-6">
        <p className="text-lg font-semibold text-gray-900 leading-relaxed">{q.questionText}</p>

        <div className="space-y-3">
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={state === "reviewing"}
              className={`w-full text-left p-3 rounded-xl border-2 transition-all text-sm font-medium ${optionClasses(idx)}`}
            >
              <span className="mr-2 font-bold text-gray-400">
                {["A", "B", "C", "D"][idx]}.
              </span>
              {opt}
            </button>
          ))}
        </div>

        {state === "reviewing" && q.explanationTk && (
          <div className="bg-blue-50 rounded-lg p-3 text-sm text-blue-700">
            {q.explanationTk}
          </div>
        )}
      </div>

      <div className="flex justify-end">
        {state === "question" && (
          <Button onClick={handleConfirm} disabled={selected === null}>
            Tassykla
          </Button>
        )}
        {state === "reviewing" && (
          <Button onClick={handleNext} disabled={submitting}>
            {submitting ? "Ýazylýar..." : isLast ? "Gutara" : "Indiki →"}
          </Button>
        )}
      </div>
    </div>
  );
}
