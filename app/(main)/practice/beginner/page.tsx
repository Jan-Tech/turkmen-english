"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import EnglishQuizContainer from "@/components/quiz/EnglishQuizContainer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Question {
  id: string;
  questionText: string;
  options: string[];
  correctIndex: number;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function BeginnerPracticePage() {
  const router = useRouter();
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [error, setError] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    fetch("/api/practice/beginner")
      .then((r) => r.json())
      .then((data) => {
        if (data.questions) {
          setQuestions(shuffle(data.questions).slice(0, 20));
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true));
  }, []);

  if (error)
    return (
      <div className="max-w-lg mx-auto text-center py-16 space-y-4">
        <p className="text-gray-500">Could not load questions. Please try again.</p>
        <Link href="/practice">
          <Button variant="outline">← Back to Practice</Button>
        </Link>
      </div>
    );

  if (!questions)
    return (
      <div className="max-w-lg mx-auto text-center py-16 text-gray-400 text-sm">
        Loading questions…
      </div>
    );

  if (!started) {
    return (
      <div className="max-w-lg mx-auto space-y-6 py-8">
        <Link href="/practice" className="text-sm text-gray-500 hover:text-gray-700">
          ← Practice
        </Link>
        <div className="bg-white rounded-2xl border p-8 text-center space-y-5">
          <div className="text-5xl">📝</div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Beginner Practice Test</h1>
            <p className="text-gray-500 mt-1">Grammar &amp; Vocabulary</p>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="text-xl font-bold text-gray-900">{questions.length}</div>
              <div className="text-xs text-gray-500 mt-0.5">Questions</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="text-xl font-bold text-gray-900">50%</div>
              <div className="text-xs text-gray-500 mt-0.5">Pass score</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="text-xl font-bold text-gray-900">~10</div>
              <div className="text-xs text-gray-500 mt-0.5">Minutes</div>
            </div>
          </div>
          <Button className="w-full" size="lg" onClick={() => setStarted(true)}>
            Start Test
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Link href="/practice" className="text-sm text-gray-500 hover:text-gray-700">
        ← Practice
      </Link>
      <EnglishQuizContainer
        questions={questions}
        title="Beginner Practice Test"
        backHref="/practice"
        onBack={() => router.push("/practice")}
      />
    </div>
  );
}
