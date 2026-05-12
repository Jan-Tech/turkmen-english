import { prisma } from "@/lib/db";
import WordScrambleGame from "@/components/games/WordScrambleGame";
import Link from "next/link";

export const metadata = { title: "Word Scramble | Iňlis Dili" };

export default async function WordScramblePage() {
  const sections = await prisma.vocabSection.findMany({
    select: { weekNumber: true, titleEn: true },
    orderBy: { order: "asc" },
  });
  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div>
        <Link href="/games" className="text-sm text-gray-500 hover:text-gray-700">← Oýunlar</Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">🧩 Söz Doldurma</h1>
        <p className="text-gray-500 text-sm mt-1">Bulaşyk harplary dogry tertibe syr</p>
      </div>
      <WordScrambleGame sections={sections} />
    </div>
  );
}
