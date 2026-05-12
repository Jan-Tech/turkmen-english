import Link from "next/link";
import { TASK1_PROMPTS, TASK2_PROMPTS, BAND_DESCRIPTORS } from "@/lib/ielts-writing";

export const metadata = { title: "IELTS Writing | Iňlis Dili" };

const taskTypeColors: Record<string, string> = {
  "Opinion": "bg-blue-100 text-blue-700",
  "Discussion": "bg-purple-100 text-purple-700",
  "Problem-Solution": "bg-red-100 text-red-700",
  "Advantages-Disadvantages": "bg-amber-100 text-amber-700",
  "Direct Question": "bg-green-100 text-green-700",
};

export default function IeltsWritingPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-10">
      <div>
        <Link href="/ielts" className="text-sm text-gray-500 hover:text-gray-700">← IELTS Prep</Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">✍️ Writing Tasks</h1>
        <p className="text-gray-500 text-sm mt-1">Task 1 and Task 2 prompts with essay outlines, useful vocabulary and band score tips.</p>
      </div>

      {/* Task 1 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold text-gray-900">Task 1 — Data Description</h2>
          <span className="text-xs bg-amber-100 text-amber-700 font-semibold px-2 py-0.5 rounded-full">150 words min · 20 min</span>
        </div>
        <p className="text-sm text-gray-500">Describe a chart, graph, table or process diagram. Select key features, make comparisons, and summarise overall trends.</p>

        <div className="space-y-4">
          {TASK1_PROMPTS.map((t) => (
            <details key={t.id} className="rounded-2xl border-2 border-amber-200 bg-amber-50 overflow-hidden group">
              <summary className="px-5 py-4 cursor-pointer flex items-center justify-between gap-3 list-none">
                <div className="flex items-center gap-3">
                  <span className="text-xs bg-amber-200 text-amber-800 font-bold px-2 py-0.5 rounded-full">{t.chartType}</span>
                  <span className="font-semibold text-gray-900">{t.topic}</span>
                </div>
                <span className="text-gray-400 text-sm group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-5 pb-5 space-y-4 border-t border-amber-200 bg-white">
                <div className="pt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-1">Prompt:</p>
                  <p className="text-sm text-gray-700 bg-gray-50 rounded-xl p-4 italic">{t.description}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Key features to include:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {t.keyFeatures.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                </div>
                <div className="bg-amber-50 rounded-xl p-4">
                  <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">Model introduction</p>
                  <p className="text-sm text-gray-700 italic">"{t.modelIntro}"</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Writing tips:</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {t.tips.map((tip, i) => <li key={i}>{tip}</li>)}
                  </ul>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Task 2 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold text-gray-900">Task 2 — Essay Writing</h2>
          <span className="text-xs bg-blue-100 text-blue-700 font-semibold px-2 py-0.5 rounded-full">250 words min · 40 min</span>
        </div>
        <p className="text-sm text-gray-500">Write an academic essay responding to the question. Structure your answer clearly with an introduction, body paragraphs and a conclusion.</p>

        <div className="space-y-4">
          {TASK2_PROMPTS.map((t) => (
            <details key={t.id} className="rounded-2xl border-2 border-blue-200 bg-blue-50 overflow-hidden group">
              <summary className="px-5 py-4 cursor-pointer flex items-center justify-between gap-3 list-none">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-xs bg-gray-200 text-gray-700 font-medium px-2 py-0.5 rounded-full">{t.category}</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${taskTypeColors[t.taskType]}`}>{t.taskType}</span>
                  <span className="text-sm text-gray-700 font-medium line-clamp-1">{t.question.slice(0, 60)}...</span>
                </div>
                <span className="text-gray-400 text-sm shrink-0 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-5 pb-5 space-y-4 border-t border-blue-200 bg-white">
                <div className="pt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Question:</p>
                  <p className="text-sm text-gray-800 bg-blue-50 rounded-xl p-4 leading-relaxed font-medium">{t.question}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Suggested outline:</p>
                  <ol className="text-sm text-gray-600 space-y-1.5">
                    {t.outline.map((step, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-blue-500 font-bold shrink-0">{i + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Useful vocabulary:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {t.usefulVocab.map((v) => (
                      <span key={v} className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-1 rounded-full">{v}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                  <p className="text-xs font-semibold text-yellow-700 uppercase tracking-wide mb-1">💡 Band score tip</p>
                  <p className="text-sm text-gray-700">{t.bandTips}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Band descriptors */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">Task Achievement — Band Descriptors</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wide">Task 1</h3>
            {BAND_DESCRIPTORS.task1.map((d) => (
              <div key={d.band} className="rounded-xl border border-gray-200 bg-white p-3">
                <span className="text-sm font-bold text-blue-700">{d.band}</span>
                <p className="text-xs text-gray-500 mt-0.5">{d.description}</p>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wide">Task 2</h3>
            {BAND_DESCRIPTORS.task2.map((d) => (
              <div key={d.band} className="rounded-xl border border-gray-200 bg-white p-3">
                <span className="text-sm font-bold text-blue-700">{d.band}</span>
                <p className="text-xs text-gray-500 mt-0.5">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
