import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import Link from "next/link";
import VocabWeekGrid from "@/components/vocabulary/VocabWeekGrid";

export default async function VocabWeekPage({
  params,
}: {
  params: Promise<{ week: string }>;
}) {
  const { week } = await params;
  const weekNumber = parseInt(week, 10);
  if (isNaN(weekNumber) || weekNumber < 1 || weekNumber > 52) notFound();

  const session = await auth();
  const userId = session!.user.id;

  const section = await prisma.vocabSection.findUnique({
    where: { weekNumber },
    include: { words: { orderBy: { order: "asc" } } },
  });

  if (!section) notFound();

  const progress = await prisma.vocabWordProgress.findMany({
    where: { userId, wordId: { in: section.words.map((w) => w.id) } },
    select: { wordId: true },
  });
  const learnedIds = progress.map((p) => p.wordId);

  const prevWeek = weekNumber > 1 ? weekNumber - 1 : null;
  const nextWeek = weekNumber < 52 ? weekNumber + 1 : null;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <Link href="/vocabulary" className="text-sm text-gray-500 hover:text-gray-700">
            ← 504 Esasy Söz
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mt-2">{section.titleTk}</h1>
          <p className="text-gray-500 text-sm">{section.titleEn}</p>
        </div>
        <div className="flex gap-2">
          {prevWeek && (
            <Link href={`/vocabulary/${prevWeek}`}>
              <button className="text-sm text-gray-500 hover:text-gray-900 px-3 py-1 border rounded-lg">
                ← Öňki
              </button>
            </Link>
          )}
          {nextWeek && (
            <Link href={`/vocabulary/${nextWeek}`}>
              <button className="text-sm text-gray-500 hover:text-gray-900 px-3 py-1 border rounded-lg">
                Indiki →
              </button>
            </Link>
          )}
        </div>
      </div>

      <VocabWeekGrid
        words={section.words.map((w) => ({
          id: w.id,
          wordEn: w.wordEn,
          wordTk: w.wordTk,
          partOfSpeech: w.partOfSpeech,
          exampleEn: w.exampleEn,
          exampleTk: w.exampleTk,
        }))}
        initialLearnedIds={learnedIds}
      />
    </div>
  );
}
