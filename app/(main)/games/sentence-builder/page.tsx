import { prisma } from "@/lib/db";
import SentenceBuilderGame from "@/components/games/SentenceBuilderGame";
import Link from "next/link";

export const metadata = { title: "Sentence Builder | Iňlis Dili" };

export default async function SentenceBuilderPage() {
  const sections = await prisma.vocabSection.findMany({
    select: { weekNumber: true, titleEn: true },
    orderBy: { order: "asc" },
  });
  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div>
        <Link href="/games" className="text-sm text-gray-500 hover:text-gray-700">← Oýunlar</Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">🏗️ Sözlem Duz</h1>
        <p className="text-gray-500 text-sm mt-1">Bulaşyk sözleri dogry tertipde düz</p>
      </div>
      <SentenceBuilderGame sections={sections} />
    </div>
  );
}
