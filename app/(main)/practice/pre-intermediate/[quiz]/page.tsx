"use client";
import { useParams } from "next/navigation";
import LevelQuizPage from "@/components/quiz/LevelQuizPage";
import { PRE_INTERMEDIATE_QUIZZES } from "@/lib/headway-preintermediate-questions";

export default function PreIntermediateQuizPage() {
  const { quiz } = useParams<{ quiz: string }>();
  const quizId = parseInt(quiz, 10);
  return (
    <LevelQuizPage
      quizMeta={PRE_INTERMEDIATE_QUIZZES.find((q) => q.id === quizId)}
      apiPath={`/api/practice/pre-intermediate/${quizId}`}
    />
  );
}
