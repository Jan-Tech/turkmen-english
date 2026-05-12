import { prisma } from "@/lib/db";
import FlashcardGame from "@/components/games/FlashcardGame";
import Link from "next/link";

export const metadata = { title: "Söz Kartlary | Iňlis Dili" };

export default async function FlashcardsPage() {
  const sections = await prisma.vocabSection.findMany({
    select: { weekNumber: true, titleEn: true },
    orderBy: { order: "asc" },
  });

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div>
        <Link href="/games" className="text-sm text-gray-500 hover:text-gray-700">
          ← Oýunlar
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">🃏 Söz Kartlary</h1>
        <p className="text-gray-500 text-sm mt-1">Kartlary aýlap, sözleri öwren</p>
      </div>
      <FlashcardGame sections={sections} />
    </div>
  );
}
