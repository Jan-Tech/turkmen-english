import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const metadata = { title: "504 Esasy Söz | Iňlis Dili" };

export default async function VocabularyPage() {
  const session = await auth();
  const userId = session!.user.id;

  const sections = await prisma.vocabSection.findMany({
    include: { words: { select: { id: true } } },
    orderBy: { order: "asc" },
  });

  const learned = await prisma.vocabWordProgress.findMany({
    where: { userId },
    select: { wordId: true },
  });
  const learnedIds = new Set(learned.map((l) => l.wordId));

  const totalLearned = learnedIds.size;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">504 Esasy Söz</h1>
          <p className="text-gray-600 mt-1">
            Iňlis dilinde iň köp ulanylýan 504 sözi öwreniň
          </p>
        </div>
        <Badge className="text-sm px-3 py-1">
          {totalLearned}/504 öwrenildi
        </Badge>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {sections.map((section) => {
          const total = section.words.length;
          const sectionLearned = section.words.filter((w) => learnedIds.has(w.id)).length;
          const allDone = sectionLearned === total;
          const partial = sectionLearned > 0 && !allDone;

          return (
            <Link key={section.id} href={`/vocabulary/${section.weekNumber}`}>
              <div
                className={`rounded-xl p-4 border-2 transition-all hover:shadow-md cursor-pointer ${
                  allDone
                    ? "border-green-400 bg-green-50"
                    : partial
                    ? "border-blue-300 bg-blue-50"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className="text-xs font-bold text-gray-400 mb-1">
                  {section.weekNumber}-nji hepde
                </div>
                <div className="font-semibold text-gray-900 text-sm leading-tight">
                  {section.titleEn.replace(/^Week \d+: /, "")}
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  {sectionLearned}/{total}
                  {allDone && " ✓"}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
