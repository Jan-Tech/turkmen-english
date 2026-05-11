"use client";
import { useParams } from "next/navigation";
import LevelQuizPage from "@/components/quiz/LevelQuizPage";
import { ADVANCED_QUIZZES } from "@/lib/headway-advanced-questions";

export default function AdvancedQuizPage() {
  const { quiz } = useParams<{ quiz: string }>();
  const quizId = parseInt(quiz, 10);
  return (
    <LevelQuizPage
      quizMeta={ADVANCED_QUIZZES.find((q) => q.id === quizId)}
      apiPath={`/api/practice/advanced/${quizId}`}
    />
  );
}
