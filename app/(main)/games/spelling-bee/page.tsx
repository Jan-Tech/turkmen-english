import { prisma } from "@/lib/db";
import SpellingBeeGame from "@/components/games/SpellingBeeGame";
import Link from "next/link";

export const metadata = { title: "Spelling Bee | Iňlis Dili" };

export default async function SpellingBeePage() {
  const sections = await prisma.vocabSection.findMany({
    select: { weekNumber: true, titleEn: true },
    orderBy: { order: "asc" },
  });
  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div>
        <Link href="/games" className="text-sm text-gray-500 hover:text-gray-700">← Oýunlar</Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">🐝 Spelling Bee</h1>
        <p className="text-gray-500 text-sm mt-1">Terjimesini görüp, iňlisçe sözi dogry ýaz</p>
      </div>
      <SpellingBeeGame sections={sections} />
    </div>
  );
}
