import Link from "next/link";
import { prisma } from "@/lib/db";
import { LevelSlug } from "@prisma/client";
import { Badge } from "@/components/ui/badge";

export const metadata = { title: "Practice | Iňlis Dili" };

const LEVELS = [
  {
    slug: LevelSlug.BEGINNER,
    href: "/practice/beginner",
    label: "Beginner",
    description: "Basic grammar & vocabulary — articles, present tense, common words",
    questions: 20,
    available: true,
  },
  {
    slug: LevelSlug.ELEMENTARY,
    href: "/practice/elementary",
    label: "Elementary",
    description: "Past tense, adjectives, simple conversations",
    questions: 20,
    available: false,
  },
  {
    slug: LevelSlug.PRE_INTERMEDIATE,
    href: "/practice/pre-intermediate",
    label: "Pre-Intermediate",
    description: "Present perfect, modal verbs, reading comprehension",
    questions: 20,
    available: false,
  },
  {
    slug: LevelSlug.INTERMEDIATE,
    href: "/practice/intermediate",
    label: "Intermediate",
    description: "Conditionals, passive voice, complex sentences",
    questions: 20,
    available: false,
  },
];

export default async function PracticePage() {
  const beginnerTest = await prisma.bigTest.findFirst({
    where: { level: { level: LevelSlug.BEGINNER } },
    select: { _count: { select: { questions: true } } },
  });

  const questionCount = beginnerTest?._count.questions ?? 0;

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Practice Tests</h1>
        <p className="text-gray-600 mt-1">
          20–25 questions per test — grammar &amp; vocabulary. Pass score: 50%.
        </p>
      </div>

      <div className="grid gap-4">
        {LEVELS.map((level) => (
          <div
            key={level.slug}
            className={`rounded-xl border-2 p-5 flex items-center justify-between gap-4 ${
              level.available
                ? "border-blue-200 bg-white hover:shadow-md transition-shadow"
                : "border-gray-100 bg-gray-50 opacity-60"
            }`}
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h2 className="font-semibold text-gray-900">{level.label}</h2>
                {level.available ? (
                  <Badge className="bg-green-100 text-green-700 text-xs">Available</Badge>
                ) : (
                  <Badge variant="secondary" className="text-xs">
                    🔒 Coming soon
                  </Badge>
                )}
              </div>
              <p className="text-sm text-gray-500">{level.description}</p>
              <p className="text-xs text-gray-400">
                {level.slug === LevelSlug.BEGINNER && questionCount > 0
                  ? `${Math.min(20, questionCount)} questions`
                  : `${level.questions} questions`}{" "}
                · ~10 min · Pass: 50%
              </p>
            </div>

            {level.available ? (
              <Link
                href={level.href}
                className="shrink-0 px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start →
              </Link>
            ) : (
              <span className="shrink-0 px-5 py-2 bg-gray-200 text-gray-400 text-sm font-medium rounded-lg cursor-not-allowed">
                Locked
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
