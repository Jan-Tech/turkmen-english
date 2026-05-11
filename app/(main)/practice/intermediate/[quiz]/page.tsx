"use client";
import { useParams } from "next/navigation";
import LevelQuizPage from "@/components/quiz/LevelQuizPage";
import { INTERMEDIATE_QUIZZES } from "@/lib/headway-intermediate-questions";

export default function IntermediateQuizPage() {
  const { quiz } = useParams<{ quiz: string }>();
  const quizId = parseInt(quiz, 10);
  return (
    <LevelQuizPage
      quizMeta={INTERMEDIATE_QUIZZES.find((q) => q.id === quizId)}
      apiPath={`/api/practice/intermediate/${quizId}`}
    />
  );
}
