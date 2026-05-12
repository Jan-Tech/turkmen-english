import Link from "next/link";
import { PASSAGES } from "@/lib/ielts-reading";

export const metadata = { title: "IELTS Reading | Iňlis Dili" };

export default function IeltsReadingPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <Link href="/ielts" className="text-sm text-gray-500 hover:text-gray-700">← IELTS Prep</Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">📄 Reading Practice</h1>
        <p className="text-gray-500 text-sm mt-1">
          Academic reading passages with True/False/Not Given and Multiple Choice questions.
        </p>
      </div>

      <div className="rounded-xl bg-blue-50 border border-blue-200 p-4 text-sm text-blue-800">
        <strong>IELTS Academic Reading:</strong> 3 passages · 40 questions · 60 minutes.
        Practice answering questions without re-reading — scan and skim efficiently.
      </div>

      <div className="space-y-4">
        {PASSAGES.map((p) => (
          <Link key={p.id} href={`/ielts/reading/${p.id}`}>
            <div className="rounded-xl border-2 border-gray-100 bg-white p-5 hover:shadow-md hover:border-blue-200 transition-all flex items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs bg-blue-100 text-blue-700 font-semibold px-2 py-0.5 rounded-full">{p.topic}</span>
                  <span className="text-xs bg-gray-100 text-gray-600 font-medium px-2 py-0.5 rounded-full">{p.band}</span>
                </div>
                <h3 className="font-semibold text-gray-900">Passage {p.id}: {p.title}</h3>
                <p className="text-xs text-gray-500">
                  {p.tfn.length} True/False/Not Given + {p.mcq.length} Multiple Choice · ⏱ {p.estimatedTime}
                </p>
              </div>
              <span className="shrink-0 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Start →
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="rounded-xl border border-dashed border-gray-200 p-5 space-y-3">
        <h3 className="font-semibold text-gray-700 text-sm">True / False / Not Given — Tips</h3>
        <ul className="text-sm text-gray-500 space-y-1.5 list-disc list-inside">
          <li><strong>TRUE</strong> — the statement agrees with the information in the passage</li>
          <li><strong>FALSE</strong> — the statement contradicts the information in the passage</li>
          <li><strong>NOT GIVEN</strong> — the information is not mentioned anywhere in the passage</li>
          <li>Always base your answer on what the passage says, not on your general knowledge</li>
          <li>If you are unsure between FALSE and NOT GIVEN — check if the passage explicitly contradicts the statement</li>
        </ul>
      </div>
    </div>
  );
}
