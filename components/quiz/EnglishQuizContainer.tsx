"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface Question {
  id: string;
  questionText: string;
  options: string[];
  correctIndex: number;
}

interface EnglishQuizContainerProps {
  questions: Question[];
  title: string;
  backHref: string;
  onBack: () => void;
}

type State = "question" | "reviewing" | "done";

const PASS_THRESHOLD = 0.5;

export default function EnglishQuizContainer({
  questions,
  title,
  onBack,
}: EnglishQuizContainerProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [state, setState] = useState<State>("question");
  const [score, setScore] = useState(0);

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
      const s = newAnswers.filter((a, i) => a === questions[i].correctIndex).length;
      setScore(s);
      setAnswers(newAnswers);
      setState("done");
    } else {
      setAnswers(newAnswers);
      setCurrent((c) => c + 1);
      setSelected(null);
      setState("question");
    }
  }

  function restart() {
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setState("question");
    setScore(0);
  }

  if (state === "done") {
    const pct = Math.round((score / questions.length) * 100);
    const passed = pct >= PASS_THRESHOLD * 100;

    return (
      <div className="max-w-lg mx-auto text-center space-y-6 py-8">
        <div className="text-6xl">{passed ? "🎉" : "📚"}</div>
        <h2 className="text-2xl font-bold text-gray-900">
          {passed ? "You passed!" : "Keep practicing!"}
        </h2>
        <div className="bg-white rounded-2xl border p-6 space-y-3">
          <div className="text-4xl font-bold text-gray-900">
            {score}/{questions.length}
          </div>
          <div className="text-gray-600">{pct}% correct</div>
          <Progress value={pct} className="h-3" />
          {passed ? (
            <Badge className="bg-green-100 text-green-700">Passed ✓</Badge>
          ) : (
            <Badge variant="destructive">
              Not passed — {pct}% (need: {PASS_THRESHOLD * 100}%)
            </Badge>
          )}
        </div>

        <div className="text-left space-y-2">
          <h3 className="font-semibold text-gray-900 text-sm">Review</h3>
          {questions.map((q, i) => {
            const correct = answers[i] === q.correctIndex;
            return (
              <div
                key={q.id}
                className={`rounded-lg p-3 text-sm ${
                  correct
                    ? "bg-green-50 border border-green-200"
                    : "bg-red-50 border border-red-200"
                }`}
              >
                <p className="font-medium text-gray-900">
                  {i + 1}. {q.questionText}
                </p>
                <p className={`mt-1 ${correct ? "text-green-700" : "text-red-700"}`}>
                  Your answer: {q.options[answers[i]]} {correct ? "✓" : "✗"}
                </p>
                {!correct && (
                  <p className="text-green-700">
                    Correct answer: {q.options[q.correctIndex]}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex gap-3 justify-center flex-wrap">
          <Button variant="outline" onClick={onBack}>
            Back
          </Button>
          <Button onClick={restart}>Try Again</Button>
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
            {current + 1} / {questions.length}
          </span>
        </div>
        <Progress value={((current + 1) / questions.length) * 100} className="h-2" />
      </div>

      <div className="bg-white rounded-2xl border p-6 space-y-6">
        <p className="text-lg font-semibold text-gray-900 leading-relaxed">
          {q.questionText}
        </p>

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
      </div>

      <div className="flex justify-end">
        {state === "question" && (
          <Button onClick={handleConfirm} disabled={selected === null}>
            Check Answer
          </Button>
        )}
        {state === "reviewing" && (
          <Button onClick={handleNext}>
            {isLast ? "Finish" : "Next →"}
          </Button>
        )}
      </div>
    </div>
  );
}
