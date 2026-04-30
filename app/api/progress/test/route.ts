import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { bigTestId, score, total, answers } = await req.json();
  if (!bigTestId || score == null || !total || !answers) {
    return NextResponse.json({ error: "bigTestId, score, total, answers required" }, { status: 400 });
  }

  const passed = score / total >= 0.7;

  const attempt = await prisma.testAttempt.create({
    data: { userId: session.user.id, bigTestId, score, total, answers, passed },
  });

  return NextResponse.json({ ok: true, attemptId: attempt.id, score, total, passed });
}
