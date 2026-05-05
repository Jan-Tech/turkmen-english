"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import LessonContent from "@/components/learning/LessonContent";
import { LessonContentData } from "@/types/content";
import Breadcrumb from "@/components/layout/Breadcrumb";

interface LessonData { id: string; titleEn: string; titleTk: string; content: LessonContentData; unitSlug: string; nextLessonSlug: string | null; unitTitle: string; completed: boolean; }

export default function UpperIntLessonPage() {
  const params = useParams();
  const router = useRouter();
  const { unitSlug, lessonSlug } = params as { unitSlug: string; lessonSlug: string };
  const [lesson, setLesson] = useState<LessonData | null>(null);
  const [loading, setLoading] = useState(true);
  const [marking, setMarking] = useState(false);

  useEffect(() => {
    fetch(`/api/lessons/${lessonSlug}`).then((r) => r.json()).then((data) => { setLesson(data); setLoading(false); });
  }, [lessonSlug]);

  async function markComplete() {
    if (!lesson || lesson.completed) return;
    setMarking(true);
    await fetch("/api/progress/lesson", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ lessonId: lesson.id }) });
    setMarking(false);
    if (lesson.nextLessonSlug) { router.push(`/upper-intermediate/units/${unitSlug}/lessons/${lesson.nextLessonSlug}`); }
    else { router.push(`/upper-intermediate/units/${unitSlug}`); }
  }

  if (loading) return <div className="max-w-2xl mx-auto"><div className="animate-pulse space-y-4"><div className="h-6 bg-gray-200 rounded w-1/3" /><div className="h-4 bg-gray-200 rounded w-1/2" /><div className="h-48 bg-gray-200 rounded" /></div></div>;
  if (!lesson) return <div>Sapak tapylmady</div>;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <Breadcrumb items={[{ label: "Derejeler", href: "/levels" }, { label: "Ýokary Orta", href: "/upper-intermediate" }, { label: lesson.unitTitle, href: `/upper-intermediate/units/${unitSlug}` }, { label: lesson.titleTk }]} />
        <h1 className="text-2xl font-bold text-gray-900 mt-3">{lesson.titleTk}</h1>
        <p className="text-gray-500">{lesson.titleEn}</p>
      </div>
      <LessonContent content={lesson.content} />
      <div className="pt-4 flex justify-end">
        <Button onClick={markComplete} disabled={marking || lesson.completed} size="lg" className="min-w-40">
          {lesson.completed ? "Tamamlandy ✓" : marking ? "Ýazylýar..." : lesson.nextLessonSlug ? "Indiki sapak →" : "Tamamla"}
        </Button>
      </div>
    </div>
  );
}
