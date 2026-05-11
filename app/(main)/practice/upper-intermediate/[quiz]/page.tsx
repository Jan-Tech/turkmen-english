"use client";
import { useParams } from "next/navigation";
import LevelQuizPage from "@/components/quiz/LevelQuizPage";
import { UPPER_INTERMEDIATE_QUIZZES } from "@/lib/headway-upper-intermediate-questions";

export default function UpperIntermediateQuizPage() {
  const { quiz } = useParams<{ quiz: string }>();
  const quizId = parseInt(quiz, 10);
  return (
    <LevelQuizPage
      quizMeta={UPPER_INTERMEDIATE_QUIZZES.find((q) => q.id === quizId)}
      apiPath={`/api/practice/upper-intermediate/${quizId}`}
    />
  );
}
