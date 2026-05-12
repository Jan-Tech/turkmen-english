import { notFound } from "next/navigation";
import Link from "next/link";
import { IELTS_GRAMMAR_SETS } from "@/lib/ielts-grammar";
import IeltsGrammarQuiz from "@/components/ielts/IeltsGrammarQuiz";

export function generateStaticParams() {
  return IELTS_GRAMMAR_SETS.map((s) => ({ id: String(s.id) }));
}

export default async function GrammarSetPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const set = IELTS_GRAMMAR_SETS.find((s) => s.id === parseInt(id, 10));
  if (!set) notFound();

  const next = IELTS_GRAMMAR_SETS.find((s) => s.id === set.id + 1);

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <Link href="/ielts/grammar" className="text-sm text-gray-500 hover:text-gray-700">← Grammar for IELTS</Link>
        <h1 className="text-xl font-bold text-gray-900 mt-2">Set {set.id}: {set.title}</h1>
        <p className="text-gray-500 text-sm mt-1">{set.description}</p>
      </div>
      <IeltsGrammarQuiz set={set} nextHref={next ? `/ielts/grammar/${next.id}` : "/ielts/grammar"} />
    </div>
  );
}
