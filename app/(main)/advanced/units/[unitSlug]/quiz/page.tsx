import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import QuizContainer from "@/components/quiz/QuizContainer";
import Link from "next/link";

export default async function AdvancedQuizPage({ params }: { params: Promise<{ unitSlug: string }> }) {
  const { unitSlug } = await params;
  const unit = await prisma.unit.findUnique({ where: { slug: unitSlug }, include: { quiz: { include: { questions: { orderBy: { order: "asc" } } } } } });
  if (!unit?.quiz) notFound();
  const questions = unit.quiz.questions.map((q) => ({ id: q.id, questionText: q.questionText, questionType: q.questionType, options: q.options as string[], correctIndex: q.correctIndex, explanationTk: q.explanationTk }));
  return (
    <div className="space-y-4">
      <Link href={`/advanced/units/${unitSlug}`} className="text-sm text-gray-500 hover:text-gray-700">← {unit.titleTk}</Link>
      <QuizContainer questions={questions} quizId={unit.quiz.id} title={unit.quiz.titleTk} backHref={`/advanced/units/${unitSlug}`} />
    </div>
  );
}
