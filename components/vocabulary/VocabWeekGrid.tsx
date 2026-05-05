"use client";

import { useState } from "react";
import VocabCard from "./VocabCard";

interface Word {
  id: string;
  wordEn: string;
  wordTk: string;
  partOfSpeech: string;
  exampleEn: string;
  exampleTk: string;
}

interface VocabWeekGridProps {
  words: Word[];
  initialLearnedIds: string[];
}

export default function VocabWeekGrid({ words, initialLearnedIds }: VocabWeekGridProps) {
  const [learnedIds, setLearnedIds] = useState(new Set(initialLearnedIds));

  function handleLearned(wordId: string) {
    setLearnedIds((prev) => new Set(Array.from(prev).concat(wordId)));
  }

  return (
    <div>
      <p className="text-sm text-gray-500 mb-4">
        {learnedIds.size}/{words.length} söz öwrenildi • Her karta basyp, aýlaň
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {words.map((word) => (
          <VocabCard
            key={word.id}
            word={word}
            initialLearned={learnedIds.has(word.id)}
            onLearned={handleLearned}
          />
        ))}
      </div>
    </div>
  );
}
