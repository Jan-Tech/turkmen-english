import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const week = searchParams.get("week");

  if (!week) {
    const allWords = await prisma.vocabWord.findMany({
      select: { id: true, wordEn: true, wordTk: true, partOfSpeech: true, exampleEn: true },
    });
    const shuffled = allWords.sort(() => Math.random() - 0.5).slice(0, 20);
    return NextResponse.json(shuffled);
  }

  const weekNum = parseInt(week, 10);
  const section = await prisma.vocabSection.findUnique({
    where: { weekNumber: weekNum },
    include: {
      words: {
        select: { id: true, wordEn: true, wordTk: true, partOfSpeech: true, exampleEn: true },
        orderBy: { order: "asc" },
      },
    },
  });

  if (!section) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(section.words);
}
