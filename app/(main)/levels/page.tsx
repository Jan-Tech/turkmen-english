import { prisma } from "@/lib/db";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export const metadata = { title: "Dil Derejesi | Iňlis Dili" };

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
          const done = level.units
            .flatMap((u) => u.lessons)
            .filter((l) => completedIds.has(l.id)).length;
          const pct = total > 0 ? Math.round((done / total) * 100) : 0;
          const slug = level.level.toLowerCase();

          return (
            <Card key={level.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{level.titleTk}</CardTitle>
                    <p className="text-sm text-gray-500 mt-0.5">{level.titleEn}</p>
                  </div>
                  <Badge variant={pct === 100 ? "default" : "secondary"}>{pct}% tamamlandy</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">{level.description}</p>
                <Progress value={pct} className="h-2" />
                <div className="text-xs text-gray-500">
                  {done}/{total} sapak · {level.units.length} bölüm
                </div>
                <Link href={`/${slug}`}>
                  <Button className="w-full">{pct > 0 ? "Dowam et" : "Başla"}</Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
