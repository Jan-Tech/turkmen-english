import Link from "next/link";
import { BEGINNER_QUIZZES } from "@/lib/headway-beginner-questions";
import { ELEMENTARY_QUIZZES } from "@/lib/headway-elementary-questions";
import { PRE_INTERMEDIATE_QUIZZES } from "@/lib/headway-preintermediate-questions";
import { INTERMEDIATE_QUIZZES } from "@/lib/headway-intermediate-questions";
import { UPPER_INTERMEDIATE_QUIZZES } from "@/lib/headway-upper-intermediate-questions";
import { ADVANCED_QUIZZES } from "@/lib/headway-advanced-questions";

export const metadata = { title: "Practice | Iňlis Dili" };

const SECTIONS = [
  { label: "Başlangyç",   subtitle: "New Headway Beginner",           emoji: "🌱", color: "green",  quizzes: BEGINNER_QUIZZES,          basePath: "/practice/beginner" },
  { label: "Başlangyç+",  subtitle: "New Headway Elementary",         emoji: "📗", color: "teal",   quizzes: ELEMENTARY_QUIZZES,         basePath: "/practice/elementary" },
  { label: "Orta öňi",   subtitle: "New Headway Pre-Intermediate",    emoji: "📘", color: "blue",   quizzes: PRE_INTERMEDIATE_QUIZZES,   basePath: "/practice/pre-intermediate" },
  { label: "Orta",        subtitle: "New Headway Intermediate",       emoji: "🟡", color: "yellow", quizzes: INTERMEDIATE_QUIZZES,       basePath: "/practice/intermediate" },
  { label: "Ýokary orta", subtitle: "New Headway Upper-Intermediate", emoji: "🟠", color: "orange", quizzes: UPPER_INTERMEDIATE_QUIZZES, basePath: "/practice/upper-intermediate" },
  { label: "Ösen",        subtitle: "New Headway Advanced",           emoji: "🔴", color: "red",    quizzes: ADVANCED_QUIZZES,           basePath: "/practice/advanced" },
];

const colors: Record<string, { header: string; border: string; tag: string; btn: string; dot: string }> = {
  green:  { header: "bg-green-50 border-green-200",   border: "border-green-200",  tag: "bg-green-100 text-green-700",   btn: "bg-green-600 hover:bg-green-700",   dot: "bg-green-500" },
  teal:   { header: "bg-teal-50 border-teal-200",     border: "border-teal-200",   tag: "bg-teal-100 text-teal-700",     btn: "bg-teal-600 hover:bg-teal-700",     dot: "bg-teal-500" },
  blue:   { header: "bg-blue-50 border-blue-200",     border: "border-blue-200",   tag: "bg-blue-100 text-blue-700",     btn: "bg-blue-600 hover:bg-blue-700",     dot: "bg-blue-500" },
  yellow: { header: "bg-yellow-50 border-yellow-200", border: "border-yellow-200", tag: "bg-yellow-100 text-yellow-700", btn: "bg-yellow-500 hover:bg-yellow-600", dot: "bg-yellow-400" },
  orange: { header: "bg-orange-50 border-orange-200", border: "border-orange-200", tag: "bg-orange-100 text-orange-700", btn: "bg-orange-500 hover:bg-orange-600", dot: "bg-orange-500" },
  red:    { header: "bg-red-50 border-red-200",       border: "border-red-200",    tag: "bg-red-100 text-red-700",       btn: "bg-red-600 hover:bg-red-700",       dot: "bg-red-500" },
};

export default function PracticePage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Practice Tests</h1>
        <p className="text-gray-500 mt-1">
          20 questions per test — grammar &amp; vocabulary. Pass score: 50%.
        </p>
      </div>

      {SECTIONS.map((section) => {
        const c = colors[section.color];
        return (
          <div key={section.label}>
            {/* Section header */}
            <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border mb-3 ${c.header}`}>
              <span className="text-2xl">{section.emoji}</span>
              <div>
                <h2 className="font-bold text-gray-900">{section.label}</h2>
                <p className="text-xs text-gray-500">{section.subtitle} · {section.quizzes.length} quiz</p>
              </div>
            </div>

            {/* Quiz cards */}
            <div className="space-y-2 pl-2">
              {section.quizzes.map((quiz) => (
                <div
                  key={quiz.id}
                  className={`rounded-xl border-2 bg-white p-4 flex items-center justify-between gap-4 hover:shadow-sm transition-all ${c.border}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-1.5 h-12 rounded-full shrink-0 ${c.dot}`} />
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-gray-900">{quiz.title}</h3>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${c.tag}`}>
                          {quiz.label}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">{quiz.subtitle}</p>
                      <p className="text-xs text-gray-400">20 questions · ~10 min · Pass: 50%</p>
                    </div>
                  </div>
                  <Link
                    href={`${section.basePath}/${quiz.id}`}
                    className={`shrink-0 px-5 py-2 text-white text-sm font-semibold rounded-lg transition-colors ${c.btn}`}
                  >
                    Start →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
