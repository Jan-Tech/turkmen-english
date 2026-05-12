import Link from "next/link";

export const metadata = { title: "IELTS Preparation | Iňlis Dili" };

const sections = [
  {
    href: "/ielts/reading",
    emoji: "📄",
    title: "Reading Practice",
    desc: "4 full academic passages with True/False/Not Given and Multiple Choice questions. Band 6–8.",
    tag: "4 passages",
    color: "blue",
    bg: "bg-blue-50", border: "border-blue-200", btn: "bg-blue-600 hover:bg-blue-700", tag2: "bg-blue-100 text-blue-700",
  },
  {
    href: "/ielts/vocabulary",
    emoji: "📚",
    title: "Academic Vocabulary",
    desc: "72 essential academic words across 6 topics: Environment, Technology, Education, Society, Health, Economics.",
    tag: "6 topics · 72 words",
    color: "green",
    bg: "bg-green-50", border: "border-green-200", btn: "bg-green-600 hover:bg-green-700", tag2: "bg-green-100 text-green-700",
  },
  {
    href: "/ielts/writing",
    emoji: "✍️",
    title: "Writing Tasks",
    desc: "5 Task 1 prompts and 8 Task 2 essay questions with essay outlines, useful vocabulary and band score tips.",
    tag: "13 tasks",
    color: "amber",
    bg: "bg-amber-50", border: "border-amber-200", btn: "bg-amber-500 hover:bg-amber-600", tag2: "bg-amber-100 text-amber-700",
  },
  {
    href: "/ielts/grammar",
    emoji: "🔧",
    title: "Grammar for IELTS",
    desc: "4 focused grammar sets: Articles, Passive Voice, Cohesive Devices, and Complex Sentences. 40 practice questions.",
    tag: "4 sets · 40 questions",
    color: "purple",
    bg: "bg-purple-50", border: "border-purple-200", btn: "bg-purple-600 hover:bg-purple-700", tag2: "bg-purple-100 text-purple-700",
  },
];

const bandInfo = [
  { band: "5.0", level: "Modest User", desc: "Partial command. Coping with overall meaning in most situations." },
  { band: "6.0", level: "Competent User", desc: "Effective command despite some inaccuracies. Generally handles complex language." },
  { band: "7.0", level: "Good User", desc: "Operational command with occasional inaccuracies. Handles complex detailed reasoning." },
  { band: "8.0", level: "Very Good User", desc: "Fully operational command with only occasional unsystematic inaccuracies." },
  { band: "9.0", level: "Expert User", desc: "Full operational command. Complete, accurate and fluent with complete understanding." },
];

export default function IeltsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
        <h1 className="text-3xl font-bold">IELTS Preparation</h1>
        <p className="mt-2 text-blue-100 text-base">
          Academic module · Reading, Vocabulary, Writing & Grammar · All content in English
        </p>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold">4</p>
            <p className="text-xs text-blue-200">Passages</p>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold">72</p>
            <p className="text-xs text-blue-200">Vocab words</p>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold">13</p>
            <p className="text-xs text-blue-200">Writing tasks</p>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold">40</p>
            <p className="text-xs text-blue-200">Grammar Qs</p>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="grid gap-4 sm:grid-cols-2">
        {sections.map((s) => (
          <div key={s.href} className={`rounded-2xl border-2 ${s.border} ${s.bg} p-6 flex flex-col gap-4`}>
            <div className="flex items-start justify-between">
              <div className="text-4xl">{s.emoji}</div>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${s.tag2}`}>{s.tag}</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">{s.title}</h3>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">{s.desc}</p>
            </div>
            <Link href={s.href} className={`block text-center py-2.5 ${s.btn} text-white text-sm font-semibold rounded-xl transition-colors mt-auto`}>
              Start →
            </Link>
          </div>
        ))}
      </div>

      {/* Band score guide */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-4">IELTS Band Score Guide</h2>
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Band</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700">Level</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden sm:table-cell">Description</th>
              </tr>
            </thead>
            <tbody>
              {bandInfo.map((b, i) => (
                <tr key={b.band} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 font-bold text-blue-700">{b.band}</td>
                  <td className="px-4 py-3 font-medium text-gray-800">{b.level}</td>
                  <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">{b.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
