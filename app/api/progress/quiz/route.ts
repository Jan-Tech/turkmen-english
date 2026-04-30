import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { quizId, score, total, answers } = await req.json();
  if (!quizId || score == null || !total || !answers) {
    return NextResponse.json({ error: "quizId, score, total, answers required" }, { status: 400 });
  }

  const attempt = await prisma.quizAttempt.create({
    data: { userId: session.user.id, quizId, score, total, answers },
  });

  return NextResponse.json({ ok: true, attemptId: attempt.id, score, total });
}
