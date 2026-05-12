import { notFound } from "next/navigation";
import Link from "next/link";
import { VOCAB_TOPICS } from "@/lib/ielts-vocabulary";

export function generateStaticParams() {
  return VOCAB_TOPICS.map((t) => ({ topic: t.id }));
}

export default async function VocabTopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params;
  const data = VOCAB_TOPICS.find((t) => t.id === topic);
  if (!data) notFound();

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <Link href="/ielts/vocabulary" className="text-sm text-gray-500 hover:text-gray-700">← Academic Vocabulary</Link>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-3xl">{data.emoji}</span>
          <h1 className="text-2xl font-bold text-gray-900">{data.title}</h1>
        </div>
        <p className="text-gray-500 text-sm mt-1">{data.description}</p>
      </div>

      <div className="space-y-4">
        {data.words.map((word, i) => (
          <div key={word.word} className="bg-white rounded-2xl border-2 border-gray-100 p-5 space-y-3">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <span className="text-xs text-gray-400 font-medium mr-2">#{i + 1}</span>
                <span className="text-xl font-bold text-gray-900">{word.word}</span>
                <span className="ml-2 text-xs text-gray-400 italic">{word.partOfSpeech}</span>
              </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold text-gray-500">Definition: </span>{word.definition}
            </p>
            <div className="bg-gray-50 rounded-xl px-4 py-3">
              <p className="text-sm text-gray-700 italic">"{word.example}"</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Common collocations</p>
              <div className="flex flex-wrap gap-1.5">
                {word.collocations.map((c) => (
                  <span key={c} className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-1 rounded-full font-medium">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
