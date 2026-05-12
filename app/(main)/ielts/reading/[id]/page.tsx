import { notFound } from "next/navigation";
import Link from "next/link";
import { PASSAGES } from "@/lib/ielts-reading";
import ReadingExercise from "@/components/ielts/ReadingExercise";

export function generateStaticParams() {
  return PASSAGES.map((p) => ({ id: String(p.id) }));
}

export default async function PassagePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const passage = PASSAGES.find((p) => p.id === parseInt(id, 10));
  if (!passage) notFound();

  const next = PASSAGES.find((p) => p.id === passage.id + 1);
  const prev = PASSAGES.find((p) => p.id === passage.id - 1);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <Link href="/ielts/reading" className="text-sm text-gray-500 hover:text-gray-700">
            ← Reading Practice
          </Link>
          <h1 className="text-xl font-bold text-gray-900 mt-1">
            Passage {passage.id}: {passage.title}
          </h1>
        </div>
        <div className="flex gap-2">
          {prev && (
            <Link href={`/ielts/reading/${prev.id}`} className="text-sm px-3 py-1.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
              ← Prev
            </Link>
          )}
          {next && (
            <Link href={`/ielts/reading/${next.id}`} className="text-sm px-3 py-1.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
              Next →
            </Link>
          )}
        </div>
      </div>

      <ReadingExercise passage={passage} />
    </div>
  );
}
