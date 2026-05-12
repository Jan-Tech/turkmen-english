import Link from "next/link";
import { VOCAB_TOPICS } from "@/lib/ielts-vocabulary";

export const metadata = { title: "IELTS Vocabulary | Iňlis Dili" };

const colorMap: Record<string, string> = {
  green: "bg-green-50 border-green-200 hover:border-green-400",
  blue: "bg-blue-50 border-blue-200 hover:border-blue-400",
  purple: "bg-purple-50 border-purple-200 hover:border-purple-400",
  indigo: "bg-indigo-50 border-indigo-200 hover:border-indigo-400",
  red: "bg-red-50 border-red-200 hover:border-red-400",
  amber: "bg-amber-50 border-amber-200 hover:border-amber-400",
};

const tagMap: Record<string, string> = {
  green: "bg-green-100 text-green-700",
  blue: "bg-blue-100 text-blue-700",
  purple: "bg-purple-100 text-purple-700",
  indigo: "bg-indigo-100 text-indigo-700",
  red: "bg-red-100 text-red-700",
  amber: "bg-amber-100 text-amber-700",
};

export default function IeltsVocabPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <Link href="/ielts" className="text-sm text-gray-500 hover:text-gray-700">← IELTS Prep</Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">📚 Academic Vocabulary</h1>
        <p className="text-gray-500 text-sm mt-1">
          72 essential words across 6 IELTS topics. Each word includes definition, example and collocations.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {VOCAB_TOPICS.map((topic) => (
          <Link key={topic.id} href={`/ielts/vocabulary/${topic.id}`}>
            <div className={`rounded-2xl border-2 p-5 transition-all hover:shadow-md cursor-pointer ${colorMap[topic.color]}`}>
              <div className="flex items-start justify-between gap-3">
                <div className="text-3xl">{topic.emoji}</div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagMap[topic.color]}`}>
                  {topic.words.length} words
                </span>
              </div>
              <h3 className="font-bold text-gray-900 mt-3">{topic.title}</h3>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">{topic.description}</p>
              <div className="mt-3 flex flex-wrap gap-1">
                {topic.words.slice(0, 4).map((w) => (
                  <span key={w.word} className="text-xs bg-white border border-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                    {w.word}
                  </span>
                ))}
                <span className="text-xs text-gray-400 self-center">+{topic.words.length - 4} more</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
