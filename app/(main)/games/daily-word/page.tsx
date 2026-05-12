import DailyWordGame from "@/components/games/DailyWordGame";
import Link from "next/link";

export const metadata = { title: "Gündelik Söz | Iňlis Dili" };

export default function DailyWordPage() {
  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div>
        <Link href="/games" className="text-sm text-gray-500 hover:text-gray-700">← Oýunlar</Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">🌟 Gündelik Söz</h1>
        <p className="text-gray-500 text-sm mt-1">Her gün täze söz — 3 synanyşygyň bar</p>
      </div>
      <DailyWordGame />
    </div>
  );
}
