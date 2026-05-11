import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getQuestionsForUpperIntermediateQuiz, UPPER_INTERMEDIATE_QUIZZES } from "@/lib/headway-upper-intermediate-questions";

export async function GET(_req: Request, { params }: { params: Promise<{ quiz: string }> }) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { quiz } = await params;
  const quizId = parseInt(quiz, 10);
  if (!UPPER_INTERMEDIATE_QUIZZES.find((q) => q.id === quizId))
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ questions: getQuestionsForUpperIntermediateQuiz(quizId) });
}
