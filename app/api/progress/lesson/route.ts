import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { lessonId } = await req.json();
  if (!lessonId) return NextResponse.json({ error: "lessonId required" }, { status: 400 });

  const lesson = await prisma.lesson.findUnique({
    where: { id: lessonId },
    select: { id: true, unitId: true },
  });
  if (!lesson) return NextResponse.json({ error: "Lesson not found" }, { status: 404 });

  await prisma.lessonProgress.upsert({
    where: { userId_lessonId: { userId: session.user.id, lessonId } },
    create: { userId: session.user.id, lessonId, unitId: lesson.unitId },
    update: {},
  });

  return NextResponse.json({ ok: true });
}
