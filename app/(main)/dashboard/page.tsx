import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import StreakWidget from "@/components/StreakWidget";

const levelColors: Record<string, { border: string; header: string; title: string; progress: string; btn: string }> = {
  BEGINNER:           { border: "border-green-200",  header: "bg-green-50",  title: "text-green-800", progress: "[&>div]:bg-green-500",  btn: "bg-green-600 hover:bg-green-700 text-white" },
  ELEMENTARY:         { border: "border-blue-200",   header: "bg-blue-50",   title: "text-blue-800",  progress: "[&>div]:bg-blue-500",   btn: "bg-blue-600 hover:bg-blue-700 text-white" },
  PRE_INTERMEDIATE:   { border: "border-yellow-200", header: "bg-yellow-50", title: "text-yellow-800",progress: "[&>div]:bg-yellow-500", btn: "bg-yellow-500 hover:bg-yellow-600 text-white" },
  INTERMEDIATE:       { border: "border-orange-200", header: "bg-orange-50", title: "text-orange-800",progress: "[&>div]:bg-orange-500", btn: "bg-orange-500 hover:bg-orange-600 text-white" },
  UPPER_INTERMEDIATE: { border: "border-purple-200", header: "bg-purple-50", title: "text-purple-800",progress: "[&>div]:bg-purple-500", btn: "bg-purple-600 hover:bg-purple-700 text-white" },
  ADVANCED:           { border: "border-red-200",    header: "bg-red-50",    title: "text-red-800",   progress: "[&>div]:bg-red-500",    btn: "bg-red-600 hover:bg-red-700 text-white" },
};

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

      {/* Streak */}
      <StreakWidget />

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
            const completed = level.units.flatMap((u) => u.lessons).filter((l) => completedLessonIds.has(l.id)).length;
            const pct = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;
            const levelSlug = level.level.toLowerCase().replace(/_/g, "-");
            const colors = levelColors[level.level] ?? levelColors.BEGINNER;

            return (
              <Card key={level.id} className={`hover:shadow-md transition-all border-2 ${colors.border} overflow-hidden`}>
                <CardHeader className={`${colors.header} pb-3`}>
                  <div className="flex items-center justify-between">
                    <CardTitle className={`text-base ${colors.title}`}>{level.titleTk}</CardTitle>
                    <Badge variant="secondary" className={`text-xs ${colors.title}`}>{pct}%</Badge>
                  </div>
                  <p className="text-sm text-gray-600">{level.description}</p>
                </CardHeader>
                <CardContent className="space-y-3 pt-3">
                  <Progress value={pct} className={`h-1.5 bg-gray-100 ${colors.progress}`} />
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{completed}/{totalLessons} sapak</span>
                    <span>{level.units.length} bölüm</span>
                  </div>
                  <Link href={`/${levelSlug}`}>
                    <Button className={`w-full h-11 text-sm font-semibold ${colors.btn}`}>
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
