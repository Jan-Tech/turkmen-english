import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getQuestionsForIntermediateQuiz, INTERMEDIATE_QUIZZES } from "@/lib/headway-intermediate-questions";

export async function GET(_req: Request, { params }: { params: Promise<{ quiz: string }> }) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { quiz } = await params;
  const quizId = parseInt(quiz, 10);
  if (!INTERMEDIATE_QUIZZES.find((q) => q.id === quizId))
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ questions: getQuestionsForIntermediateQuiz(quizId) });
}
