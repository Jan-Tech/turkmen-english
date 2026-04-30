import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default async function ElementaryUnitPage({
  params,
}: {
  params: Promise<{ unitSlug: string }>;
}) {
  const { unitSlug } = await params;
  const session = await auth();
  const userId = session!.user.id;

  const unit = await prisma.unit.findUnique({
    where: { slug: unitSlug },
    include: {
      lessons: { orderBy: { order: "asc" } },
      quiz: { include: { attempts: { where: { userId }, orderBy: { completedAt: "desc" }, take: 1 } } },
      level: { select: { level: true, titleTk: true } },
    },
  });

  if (!unit || unit.level.level !== "ELEMENTARY") notFound();

  const progress = await prisma.lessonProgress.findMany({
    where: { userId, unitId: unit.id },
    select: { lessonId: true },
  });
  const completedIds = new Set(progress.map((p) => p.lessonId));
  const bestAttempt = unit.quiz?.attempts[0];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <Link href="/elementary" className="text-sm text-gray-500 hover:text-gray-700">
          ← Başlangyç+
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">{unit.titleTk}</h1>
        <p className="text-gray-600 mt-1">{unit.titleEn}</p>
        <p className="text-sm text-gray-500 mt-2">{unit.description}</p>
      </div>

      <div className="space-y-3">
        <h2 className="font-semibold text-gray-900">Sapaklar</h2>
        {unit.lessons.map((lesson, idx) => {
          const done = completedIds.has(lesson.id);
          const prevDone = idx === 0 || completedIds.has(unit.lessons[idx - 1].id);
          return (
            <Card key={lesson.id} className={`transition-shadow ${!prevDone ? "opacity-60" : "hover:shadow-md"}`}>
              <CardContent className="pt-3 pb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${done ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                    {done ? "✓" : idx + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm text-gray-900">{lesson.titleTk}</div>
                    <div className="text-xs text-gray-500">{lesson.titleEn}</div>
                  </div>
                  {prevDone && (
                    <Link href={`/elementary/units/${unit.slug}/lessons/${lesson.slug}`}>
                      <Button size="sm" variant={done ? "outline" : "default"} className="text-xs">
                        {done ? "Gaýtala" : "Başla"}
                      </Button>
                    </Link>
                  )}
                  {!prevDone && <Badge variant="secondary" className="text-xs">🔒</Badge>}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {unit.quiz && (
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <h3 className="font-semibold text-gray-900">{unit.quiz.titleTk}</h3>
                {bestAttempt ? (
                  <p className="text-sm text-gray-600 mt-0.5">
                    Iň gowy netije: {bestAttempt.score}/{bestAttempt.total}
                  </p>
                ) : (
                  <p className="text-sm text-gray-600 mt-0.5">10 sorag</p>
                )}
              </div>
              <Link href={`/elementary/units/${unit.slug}/quiz`}>
                <Button variant={bestAttempt ? "outline" : "default"}>
                  {bestAttempt ? "Gaýtala" : "Synagy geç"}
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
