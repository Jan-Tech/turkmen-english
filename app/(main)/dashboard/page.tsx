import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Baş sahypa | Iňlis Dili" };

export default async function DashboardPage() {
  const session = await auth();
  const userId = session!.user.id;

  const [levels, lessonProgress, quizAttempts, vocabProgress] = await Promise.all([
    prisma.courseLevel.findMany({
      include: {
        units: { include: { lessons: { select: { id: true } }, quiz: { select: { id: true } } } },
      },
      orderBy: { order: "asc" },
    }),
    prisma.lessonProgress.findMany({ where: { userId }, select: { lessonId: true } }),
    prisma.quizAttempt.findMany({ where: { userId }, select: { quizId: true, score: true, total: true } }),
    prisma.vocabWordProgress.findMany({ where: { userId }, select: { wordId: true } }),
  ]);

  const completedLessonIds = new Set(lessonProgress.map((p) => p.lessonId));
  const attemptedQuizIds = new Set(quizAttempts.map((a) => a.quizId));
  const learnedWordCount = vocabProgress.length;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Hoş geldiňiz, {session!.user.name}!
        </h1>
        <p className="text-gray-600 mt-1">Öwrenmäge dowam ediň</p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Tamamlanan sapaklar", value: completedLessonIds.size, icon: "📖" },
          { label: "Synaglar", value: attemptedQuizIds.size, icon: "✅" },
          { label: "Öwrenilen sözler", value: learnedWordCount, icon: "📝" },
          { label: "Dil derejesi", value: levels.length, icon: "🎯" },
        ].map((s) => (
          <Card key={s.label}>
            <CardContent className="pt-4">
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="text-2xl font-bold text-gray-900">{s.value}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Levels */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Dil derejäňiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {levels.map((level) => {
            const totalLessons = level.units.flatMap((u) => u.lessons).length;
            const completed = level.units
              .flatMap((u) => u.lessons)
              .filter((l) => completedLessonIds.has(l.id)).length;
            const pct = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;
            const levelSlug = level.level.toLowerCase().replace(/_/g, "-");

            return (
              <Card key={level.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{level.titleTk}</CardTitle>
                    <Badge variant={pct === 100 ? "default" : "secondary"}>{pct}%</Badge>
                  </div>
                  <p className="text-sm text-gray-600">{level.description}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Progress value={pct} className="h-2" />
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>
                      {completed}/{totalLessons} sapak
                    </span>
                    <span>{level.units.length} bölüm</span>
                  </div>
                  <Link href={`/${levelSlug}`}>
                    <Button size="sm" className="w-full" variant={pct > 0 ? "default" : "outline"}>
                      {pct > 0 ? "Dowam et" : "Başla"}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Vocabulary teaser */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-semibold text-gray-900">504 Esasy Söz</h3>
              <p className="text-sm text-gray-600 mt-1">
                {learnedWordCount} / 504 söz öwrenildi
              </p>
              <Progress value={(learnedWordCount / 504) * 100} className="mt-2 h-1.5 w-48" />
            </div>
            <Link href="/vocabulary">
              <Button variant="outline">Söz öwren</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
