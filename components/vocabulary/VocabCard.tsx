"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface VocabCardProps {
  word: {
    id: string;
    wordEn: string;
    wordTk: string;
    partOfSpeech: string;
    exampleEn: string;
    exampleTk: string;
  };
  initialLearned: boolean;
  onLearned: (wordId: string) => void;
}

const posLabels: Record<string, string> = {
  noun: "at",
  verb: "işlik",
  adjective: "sypat",
  adverb: "hal",
  pronoun: "çalyşma",
  preposition: "goşulga",
  conjunction: "baglanyşdyryjy",
};

const posColors: Record<string, string> = {
  noun: "bg-blue-100 text-blue-700",
  verb: "bg-green-100 text-green-700",
  adjective: "bg-purple-100 text-purple-700",
  adverb: "bg-orange-100 text-orange-700",
  pronoun: "bg-pink-100 text-pink-700",
  preposition: "bg-gray-100 text-gray-700",
  conjunction: "bg-indigo-100 text-indigo-700",
};

export default function VocabCard({ word, initialLearned, onLearned }: VocabCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [learned, setLearned] = useState(initialLearned);
  const [saving, setSaving] = useState(false);

  async function markLearned() {
    if (learned) return;
    setSaving(true);
    await fetch("/api/vocabulary/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ wordId: word.id }),
    });
    setLearned(true);
    setSaving(false);
    onLearned(word.id);
  }

  return (
    <div className="relative" style={{ perspective: "1000px" }}>
      <div
        className="relative transition-transform duration-500 cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          minHeight: "180px",
        }}
        onClick={() => setFlipped((f) => !f)}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 rounded-xl border-2 p-4 flex flex-col justify-between ${
            learned ? "border-green-400 bg-green-50" : "border-gray-200 bg-white"
          }`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div>
            <Badge className={`text-xs mb-2 ${posColors[word.partOfSpeech] ?? "bg-gray-100 text-gray-700"}`}>
              {posLabels[word.partOfSpeech] ?? word.partOfSpeech}
            </Badge>
            <h3 className="text-xl font-bold text-gray-900">{word.wordEn}</h3>
            <p className="text-xs text-gray-400 mt-1">Türkmençesini görmek üçin basyň</p>
          </div>
          {learned && (
            <Badge className="w-fit bg-green-100 text-green-700 text-xs">Öwrenildi ✓</Badge>
          )}
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 rounded-xl border-2 p-4 flex flex-col justify-between ${
            learned ? "border-green-400 bg-green-50" : "border-blue-100 bg-blue-50"
          }`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div>
            <p className="text-xs text-blue-500 mb-1">{word.wordEn}</p>
            <h3 className="text-xl font-bold text-gray-900">{word.wordTk}</h3>
            {word.exampleEn && (
              <div className="mt-3 text-xs text-gray-600 space-y-0.5">
                <p className="italic">{word.exampleEn}</p>
                <p className="text-gray-400">{word.exampleTk}</p>
              </div>
            )}
          </div>
          {!learned && (
            <Button
              size="sm"
              className="w-full mt-2 text-xs"
              disabled={saving}
              onClick={(e) => {
                e.stopPropagation();
                markLearned();
              }}
            >
              {saving ? "Ýazylýar..." : "Öwrendim ✓"}
            </Button>
          )}
          {learned && (
            <Badge className="w-fit bg-green-100 text-green-700 text-xs">Öwrenildi ✓</Badge>
          )}
        </div>
      </div>
    </div>
  );
}
