import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getQuestionsForPreIntermediateQuiz, PRE_INTERMEDIATE_QUIZZES } from "@/lib/headway-preintermediate-questions";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ quiz: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { quiz } = await params;
  const quizId = parseInt(quiz, 10);
  const quizMeta = PRE_INTERMEDIATE_QUIZZES.find((q) => q.id === quizId);

  if (!quizMeta) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const questions = getQuestionsForPreIntermediateQuiz(quizId);
  return NextResponse.json({ questions });
}
