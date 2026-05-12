"use client";

import { useEffect, useState } from "react";
import { useStreak } from "@/components/StreakWidget";

interface Stats {
  lessonsCompleted: number;
  quizzesCompleted: number;
  quizzesPassed: number;
  wordsLearned: number;
  avgQuizScore: number;
}

interface ProfileData {
  user: { name: string; email: string | null; phone: string | null; createdAt: string };
  stats: Stats;
}

const BADGES = [
  { id: "first_lesson",  emoji: "🌱", title: "First Steps",       desc: "Complete your first lesson",    check: (s: Stats) => s.lessonsCompleted >= 1 },
  { id: "ten_lessons",   emoji: "📚", title: "Dedicated Learner",  desc: "Complete 10 lessons",           check: (s: Stats) => s.lessonsCompleted >= 10 },
  { id: "fifty_lessons", emoji: "🎓", title: "Scholar",            desc: "Complete 50 lessons",           check: (s: Stats) => s.lessonsCompleted >= 50 },
  { id: "first_quiz",    emoji: "✅", title: "Quiz Starter",       desc: "Complete your first quiz",      check: (s: Stats) => s.quizzesCompleted >= 1 },
  { id: "ten_quizzes",   emoji: "🏆", title: "Quiz Champion",      desc: "Pass 10 quizzes",               check: (s: Stats) => s.quizzesPassed >= 10 },
  { id: "perfect_quiz",  emoji: "💯", title: "Perfect Score",      desc: "Get 100% on any quiz",          check: (s: Stats) => s.avgQuizScore >= 95 },
  { id: "vocab_50",      emoji: "📝", title: "Word Explorer",      desc: "Learn 50 vocabulary words",     check: (s: Stats) => s.wordsLearned >= 50 },
  { id: "vocab_200",     emoji: "🔤", title: "Word Builder",       desc: "Learn 200 vocabulary words",    check: (s: Stats) => s.wordsLearned >= 200 },
  { id: "vocab_504",     emoji: "👑", title: "Vocabulary Master",  desc: "Learn all 504 words",           check: (s: Stats) => s.wordsLearned >= 504 },
  { id: "streak_3",      emoji: "🔥", title: "On Fire",            desc: "Maintain a 3-day streak",       check: (_: Stats, streak: number) => streak >= 3 },
  { id: "streak_7",      emoji: "💪", title: "Week Warrior",       desc: "Maintain a 7-day streak",       check: (_: Stats, streak: number) => streak >= 7 },
  { id: "streak_30",     emoji: "⚡", title: "Unstoppable",        desc: "Maintain a 30-day streak",      check: (_: Stats, streak: number) => streak >= 30 },
];

export default function ProfileClient() {
  const [data, setData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const streak = useStreak();

  useEffect(() => {
    fetch("/api/profile").then((r) => r.json()).then((d) => { setData(d); setLoading(false); });
  }, []);

  if (loading) return <div className="text-center py-12 text-gray-400">Ýüklenýär...</div>;
  if (!data) return null;

  const { user, stats } = data;
  const earned = BADGES.filter((b) => b.check(stats, streak));
  const notEarned = BADGES.filter((b) => !b.check(stats, streak));
  const joinDate = new Date(user.createdAt).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" });
  const streakEmoji = streak >= 30 ? "⚡" : streak >= 7 ? "💪" : "🔥";

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      {/* Profile header */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-3xl font-bold">
            {user.name[0].toUpperCase()}
          </div>
          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-blue-200 text-sm">{user.email || user.phone}</p>
            <p className="text-blue-300 text-xs mt-0.5">Agza bolnan: {joinDate}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-5">
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold">{streak > 0 ? `${streakEmoji} ${streak}` : "—"}</p>
            <p className="text-xs text-blue-200">gün yzygiderlilik</p>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold">{earned.length}</p>
            <p className="text-xs text-blue-200">gazanylan medal</p>
          </div>
          <div className="bg-white/10 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold">{stats.avgQuizScore}%</p>
            <p className="text-xs text-blue-200">ortaça synag baly</p>
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3">Statistika</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Tamamlanan sapaklar", value: stats.lessonsCompleted, emoji: "📖" },
            { label: "Tamamlanan synaglar", value: stats.quizzesCompleted, emoji: "📝" },
            { label: "Geçilen synaglar", value: stats.quizzesPassed, emoji: "✅" },
            { label: "Öwrenilen sözler", value: `${stats.wordsLearned}/504`, emoji: "📚" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl border-2 border-gray-100 p-4 text-center">
              <div className="text-2xl mb-1">{s.emoji}</div>
              <div className="text-xl font-bold text-gray-900">{s.value}</div>
              <div className="text-xs text-gray-500 mt-0.5 leading-tight">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Badges earned */}
      <div>
        <h3 className="font-bold text-gray-900 mb-3">Medallar ({earned.length}/{BADGES.length})</h3>
        {earned.length === 0 ? (
          <p className="text-sm text-gray-400 bg-gray-50 rounded-xl p-4 text-center">Heniz medal gazanylmady. Öwrenmäge dowam ediň!</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
            {earned.map((b) => (
              <div key={b.id} className="bg-white rounded-xl border-2 border-yellow-200 bg-yellow-50 p-4 flex items-center gap-3">
                <span className="text-3xl">{b.emoji}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{b.title}</p>
                  <p className="text-xs text-gray-500">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Locked badges */}
        {notEarned.length > 0 && (
          <details className="group">
            <summary className="text-sm text-gray-400 cursor-pointer hover:text-gray-600 list-none flex items-center gap-1">
              <span className="group-open:rotate-90 transition-transform inline-block">▶</span>
              {notEarned.length} medal heniz gazanylmady
            </summary>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
              {notEarned.map((b) => (
                <div key={b.id} className="bg-gray-50 rounded-xl border-2 border-gray-200 p-4 flex items-center gap-3 opacity-50">
                  <span className="text-3xl grayscale">{b.emoji}</span>
                  <div>
                    <p className="font-semibold text-gray-500 text-sm">{b.title}</p>
                    <p className="text-xs text-gray-400">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </details>
        )}
      </div>
    </div>
  );
}
