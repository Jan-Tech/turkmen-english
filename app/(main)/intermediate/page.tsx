import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { LevelSlug } from "@prisma/client";

export const metadata = { title: "Orta | Iňlis Dili" };

export default async function IntermediatePage() {
  const session = await auth();
  const userId = session!.user.id;

  const level = await prisma.courseLevel.findUnique({
    where: { level: LevelSlug.INTERMEDIATE },
    include: {
      units: {
        include: {
          lessons: { select: { id: true }, orderBy: { order: "asc" } },
          quiz: { select: { id: true } },
        },
        orderBy: { order: "asc" },
      },
      bigTest: { select: { id: true } },
    },
  });

  if (!level) return <div>Mazmun tapylmady</div>;

  const [lessonProgress, quizAttempts] = await Promise.all([
    prisma.lessonProgress.findMany({ where: { userId }, select: { lessonId: true } }),
    prisma.quizAttempt.findMany({ where: { userId }, select: { quizId: true } }),
  ]);

  const completedIds = new Set(lessonProgress.map((p) => p.lessonId));
  const attemptedQuizIds = new Set(quizAttempts.map((a) => a.quizId));

  const totalLessons = level.units.flatMap((u) => u.lessons).length;
  const completedLessons = level.units
    .flatMap((u) => u.lessons)
    .filter((l) => completedIds.has(l.id)).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{level.titleTk}</h1>
          <p className="text-gray-600 mt-1">{level.description}</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">{completedLessons}/{totalLessons} sapak</div>
          <Progress value={totalLessons ? (completedLessons / totalLessons) * 100 : 0} className="w-40 mt-1" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {level.units.map((unit, idx) => {
          const unitDone = unit.lessons.filter((l) => completedIds.has(l.id)).length;
          const unitTotal = unit.lessons.length;
          const allDone = unitDone === unitTotal;
          const quizDone = unit.quiz ? attemptedQuizIds.has(unit.quiz.id) : false;
          const prevUnit = idx > 0 ? level.units[idx - 1] : null;
          const prevAllDone = prevUnit
            ? prevUnit.lessons.every((l) => completedIds.has(l.id)) &&
              (prevUnit.quiz ? attemptedQuizIds.has(prevUnit.quiz.id) : true)
            : true;
          const locked = idx > 0 && !prevAllDone;

          return (
            <Card key={unit.id} className={`transition-shadow ${locked ? "opacity-60" : "hover:shadow-md"}`}>
              <CardContent className="pt-4">
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                    allDone ? "bg-green-100 text-green-700" : unitDone > 0 ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-500"
                  }`}>
                    {locked ? "🔒" : allDone ? "✓" : unit.unitNumber}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-gray-900 text-sm">{unit.titleTk}</h3>
                      {quizDone && <Badge variant="secondary" className="text-xs">Synag ✓</Badge>}
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">{unit.titleEn}</p>
                    <div className="mt-2 flex items-center gap-3">
                      <Progress value={unitTotal ? (unitDone / unitTotal) * 100 : 0} className="h-1 flex-1" />
                      <span className="text-xs text-gray-400 whitespace-nowrap">{unitDone}/{unitTotal}</span>
                    </div>
                    {!locked && (
                      <Link href={`/intermediate/units/${unit.slug}`} className="inline-block mt-3">
                        <Button size="sm" variant={allDone ? "outline" : "default"} className="text-xs">
                          {allDone ? "Gaýtala" : unitDone > 0 ? "Dowam et" : "Başla"}
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {level.bigTest && (
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <h3 className="font-semibold text-gray-900">Jemleýji Synag</h3>
                <p className="text-sm text-gray-600 mt-0.5">Ähli 12 bölümden soňra 30 soragly uly synag</p>
              </div>
              <Link href="/intermediate/test">
                <Button variant="default">Synagy başla</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
