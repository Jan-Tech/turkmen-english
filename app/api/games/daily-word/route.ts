import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const allWords = await prisma.vocabWord.findMany({
    select: { id: true, wordEn: true, wordTk: true, partOfSpeech: true, exampleEn: true },
    orderBy: { order: "asc" },
  });

  const dayIndex = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
  const word = allWords[dayIndex % allWords.length];

  return NextResponse.json({ word, date: new Date().toISOString().split("T")[0] });
}
