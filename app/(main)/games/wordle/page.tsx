import { prisma } from "@/lib/db";
import WordleGame from "@/components/games/WordleGame";
import Link from "next/link";

export const metadata = { title: "Wordle | Iňlis Dili" };

export default async function WordlePage() {
  const sections = await prisma.vocabSection.findMany({
    select: { weekNumber: true, titleEn: true },
    orderBy: { order: "asc" },
  });
  return (
    <div className="max-w-md mx-auto space-y-6">
      <div>
        <Link href="/games" className="text-sm text-gray-500 hover:text-gray-700">← Oýunlar</Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">🟩 Wordle</h1>
        <p className="text-gray-500 text-sm mt-1">5 harply sözi 6 synanyşykda tap</p>
      </div>
      <WordleGame sections={sections} />
    </div>
  );
}
