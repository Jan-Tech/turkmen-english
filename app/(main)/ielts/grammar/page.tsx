import Link from "next/link";
import { IELTS_GRAMMAR_SETS } from "@/lib/ielts-grammar";

export const metadata = { title: "IELTS Grammar | Iňlis Dili" };

export default function IeltsGrammarPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <Link href="/ielts" className="text-sm text-gray-500 hover:text-gray-700">← IELTS Prep</Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">🔧 Grammar for IELTS</h1>
        <p className="text-gray-500 text-sm mt-1">
          4 targeted grammar sets focusing on the most common IELTS writing errors. 10 questions each.
        </p>
      </div>

      <div className="rounded-xl bg-purple-50 border border-purple-200 p-4 text-sm text-purple-800">
        <strong>Grammar & Vocabulary</strong> counts for 25% of your IELTS Writing band score.
        Correct article use, passive voice and cohesive devices are the most commonly tested areas.
      </div>

      <div className="space-y-4">
        {IELTS_GRAMMAR_SETS.map((set) => (
          <Link key={set.id} href={`/ielts/grammar/${set.id}`}>
            <div className="rounded-xl border-2 border-gray-100 bg-white p-5 hover:shadow-md hover:border-purple-200 transition-all flex items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-purple-100 text-purple-700 font-semibold px-2 py-0.5 rounded-full">{set.focus}</span>
                  <span className="text-xs text-gray-400">{set.questions.length} questions</span>
                </div>
                <h3 className="font-semibold text-gray-900">Set {set.id}: {set.title}</h3>
                <p className="text-xs text-gray-500">{set.description}</p>
              </div>
              <span className="shrink-0 px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-lg hover:bg-purple-700 transition-colors">
                Start →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
