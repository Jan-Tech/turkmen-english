"use client";
import { useParams } from "next/navigation";
import LevelQuizPage from "@/components/quiz/LevelQuizPage";
import { ELEMENTARY_QUIZZES } from "@/lib/headway-elementary-questions";

export default function ElementaryQuizPage() {
  const { quiz } = useParams<{ quiz: string }>();
  const quizId = parseInt(quiz, 10);
  return (
    <LevelQuizPage
      quizMeta={ELEMENTARY_QUIZZES.find((q) => q.id === quizId)}
      apiPath={`/api/practice/elementary/${quizId}`}
    />
  );
}
