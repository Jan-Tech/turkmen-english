import { prisma } from "@/lib/db";
import FillBlankGame from "@/components/games/FillBlankGame";
import Link from "next/link";

export const metadata = { title: "Boşlugy Doldur | Iňlis Dili" };

export default async function FillBlankPage() {
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
        <h1 className="text-2xl font-bold text-gray-900 mt-2">✍️ Boşlugy Doldur</h1>
        <p className="text-gray-500 text-sm mt-1">Sözlemi okap, dogry sözi saýla</p>
      </div>
      <FillBlankGame sections={sections} />
    </div>
  );
}
