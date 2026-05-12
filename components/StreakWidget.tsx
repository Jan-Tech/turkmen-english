"use client";

import { useEffect, useState } from "react";

const KEY = "inlis_streak";

function getStreak(): { count: number; lastDate: string } {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { count: 0, lastDate: "" };
    return JSON.parse(raw);
  } catch {
    return { count: 0, lastDate: "" };
  }
}

function updateStreak(): number {
  const today = new Date().toISOString().split("T")[0];
  const stored = getStreak();

  if (stored.lastDate === today) return stored.count;

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yStr = yesterday.toISOString().split("T")[0];

  const newCount = stored.lastDate === yStr ? stored.count + 1 : 1;
  localStorage.setItem(KEY, JSON.stringify({ count: newCount, lastDate: today }));
  return newCount;
}

export function useStreak() {
  const [streak, setStreak] = useState(0);
  useEffect(() => {
    setStreak(updateStreak());
  }, []);
  return streak;
}

export default function StreakWidget() {
  const streak = useStreak();

  if (streak === 0) return null;

  const emoji = streak >= 30 ? "⚡" : streak >= 7 ? "💪" : "🔥";

  return (
    <div className="flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-xl px-4 py-3">
      <span className="text-2xl">{emoji}</span>
      <div>
        <p className="text-lg font-bold text-orange-600 leading-none">{streak} gün</p>
        <p className="text-xs text-orange-400">öwreniş yzygiderliligi</p>
      </div>
    </div>
  );
}
