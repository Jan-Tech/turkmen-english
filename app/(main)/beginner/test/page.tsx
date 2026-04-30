import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { LevelSlug } from "@/app/generated/prisma";
import QuizContainer from "@/components/quiz/QuizContainer";
import Link from "next/link";

export default async function BeginnerTestPage() {
  const level = await prisma.courseLevel.findUnique({
    where: { level: LevelSlug.BEGINNER },
    include: { bigTest: { include: { questions: { orderBy: { order: "asc" } } } } },
  });

  if (!level?.bigTest) notFound();

  const questions = level.bigTest.questions.map((q) => ({
    id: q.id,
    questionText: q.questionText,
    questionType: q.questionType,
    options: q.options as string[],
    correctIndex: q.correctIndex,
    explanationTk: q.explanationTk,
  }));

  return (
    <div className="space-y-4">
      <Link href="/beginner" className="text-sm text-gray-500 hover:text-gray-700">
        ← Başlangyç
      </Link>
      <QuizContainer
        questions={questions}
        bigTestId={level.bigTest.id}
        title={level.bigTest.titleTk}
        backHref="/beginner"
      />
    </div>
  );
}
