import Link from "next/link";
import { BEGINNER_QUIZZES } from "@/lib/headway-beginner-questions";

export const metadata = { title: "Practice | Iňlis Dili" };

export default function PracticePage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Practice Tests</h1>
        <p className="text-gray-600 mt-1">
          20 questions per test — grammar &amp; vocabulary. Pass score: 50%.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
          Beginner — New Headway
        </h2>
        {BEGINNER_QUIZZES.map((quiz) => (
          <div
            key={quiz.id}
            className="rounded-xl border-2 border-gray-100 bg-white p-5 flex items-center justify-between gap-4 hover:shadow-md transition-shadow"
          >
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-gray-900">{quiz.title}</h3>
                <span className="text-xs text-gray-400 border border-gray-200 rounded px-1.5 py-0.5">
                  {quiz.label}
                </span>
              </div>
              <p className="text-sm text-gray-500">{quiz.subtitle}</p>
              <p className="text-xs text-gray-400">20 questions · ~10 min · Pass: 50%</p>
            </div>
            <Link
              href={`/practice/beginner/${quiz.id}`}
              className="shrink-0 px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
