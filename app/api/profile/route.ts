import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function GET() {
  const session = await auth();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const userId = session.user.id;

  const [user, lessonProgress, quizAttempts, vocabProgress] = await Promise.all([
    prisma.user.findUnique({ where: { id: userId }, select: { name: true, email: true, phone: true, createdAt: true } }),
    prisma.lessonProgress.findMany({ where: { userId }, select: { lessonId: true } }),
    prisma.quizAttempt.findMany({ where: { userId }, select: { score: true, total: true } }),
    prisma.vocabWordProgress.findMany({ where: { userId }, select: { wordId: true } }),
  ]);

  const passedQuizzes = quizAttempts.filter((a) => a.score / a.total >= 0.5).length;
  const avgScore = quizAttempts.length > 0
    ? Math.round(quizAttempts.reduce((sum, a) => sum + (a.score / a.total) * 100, 0) / quizAttempts.length)
    : 0;

  return NextResponse.json({
    user,
    stats: {
      lessonsCompleted: lessonProgress.length,
      quizzesCompleted: quizAttempts.length,
      quizzesPassed: passedQuizzes,
      wordsLearned: vocabProgress.length,
      avgQuizScore: avgScore,
    },
  });
}
