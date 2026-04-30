import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ lessonSlug: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { lessonSlug } = await params;
  const lesson = await prisma.lesson.findUnique({
    where: { slug: lessonSlug },
    include: { unit: { include: { lessons: { orderBy: { order: "asc" } } } } },
  });

  if (!lesson) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const lessonIndex = lesson.unit.lessons.findIndex((l) => l.id === lesson.id);
  const nextLesson = lesson.unit.lessons[lessonIndex + 1] ?? null;

  const progress = await prisma.lessonProgress.findUnique({
    where: { userId_lessonId: { userId: session.user.id, lessonId: lesson.id } },
  });

  return NextResponse.json({
    id: lesson.id,
    titleEn: lesson.titleEn,
    titleTk: lesson.titleTk,
    content: lesson.content,
    unitSlug: lesson.unit.slug,
    unitTitle: lesson.unit.titleTk,
    nextLessonSlug: nextLesson?.slug ?? null,
    completed: !!progress,
  });
}
