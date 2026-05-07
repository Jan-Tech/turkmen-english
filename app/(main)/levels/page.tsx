import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export const metadata = { title: "Dil Derejesi | Iňlis Dili" };

const levelColors: Record<string, { border: string; header: string; title: string; progress: string; btn: string }> = {
  BEGINNER:           { border: "border-green-200",  header: "bg-green-50",  title: "text-green-800", progress: "[&>div]:bg-green-500",  btn: "bg-green-600 hover:bg-green-700 text-white" },
  ELEMENTARY:         { border: "border-blue-200",   header: "bg-blue-50",   title: "text-blue-800",  progress: "[&>div]:bg-blue-500",   btn: "bg-blue-600 hover:bg-blue-700 text-white" },
  PRE_INTERMEDIATE:   { border: "border-yellow-200", header: "bg-yellow-50", title: "text-yellow-800",progress: "[&>div]:bg-yellow-500", btn: "bg-yellow-500 hover:bg-yellow-600 text-white" },
  INTERMEDIATE:       { border: "border-orange-200", header: "bg-orange-50", title: "text-orange-800",progress: "[&>div]:bg-orange-500", btn: "bg-orange-500 hover:bg-orange-600 text-white" },
  UPPER_INTERMEDIATE: { border: "border-purple-200", header: "bg-purple-50", title: "text-purple-800",progress: "[&>div]:bg-purple-500", btn: "bg-purple-600 hover:bg-purple-700 text-white" },
  ADVANCED:           { border: "border-red-200",    header: "bg-red-50",    title: "text-red-800",   progress: "[&>div]:bg-red-500",    btn: "bg-red-600 hover:bg-red-700 text-white" },
};

export default async function LevelsPage() {
  const session = await auth();
  const userId = session!.user.id;

  const levels = await prisma.courseLevel.findMany({
    include: { units: { include: { lessons: { select: { id: true } } } } },
    orderBy: { order: "asc" },
  });
  const progress = await prisma.lessonProgress.findMany({
    where: { userId },
    select: { lessonId: true },
  });
  const completedIds = new Set(progress.map((p) => p.lessonId));

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dil Derejesi</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {levels.map((level) => {
          const total = level.units.flatMap((u) => u.lessons).length;
          const done = level.units.flatMap((u) => u.lessons).filter((l) => completedIds.has(l.id)).length;
          const pct = total > 0 ? Math.round((done / total) * 100) : 0;
          const slug = level.level.toLowerCase().replace(/_/g, "-");
          const colors = levelColors[level.level] ?? levelColors.BEGINNER;

          return (
            <Card key={level.id} className={`hover:shadow-lg transition-all border-2 ${colors.border} overflow-hidden`}>
              <CardHeader className={`${colors.header} pb-3`}>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className={`text-lg ${colors.title}`}>{level.titleTk}</CardTitle>
                    <p className="text-sm text-gray-500 mt-0.5">{level.titleEn}</p>
                  </div>
                  <span className={`text-sm font-semibold px-2 py-0.5 rounded-full ${colors.header} ${colors.title} border ${colors.border}`}>
                    {pct}%
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <p className="text-sm text-gray-600">{level.description}</p>
                <Progress value={pct} className={`h-2 bg-gray-100 ${colors.progress}`} />
                <div className="text-xs text-gray-500">
                  {done}/{total} sapak · {level.units.length} bölüm
                </div>
                <Link href={`/${slug}`}>
                  <Button className={`w-full ${colors.btn}`}>
                    {pct > 0 ? "Dowam et" : "Başla"}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
