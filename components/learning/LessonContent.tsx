import {
  ContentBlock,
  DialogueData,
  ExampleSetData,
  ExplanationData,
  GrammarNoteData,
  LessonContentData,
  VocabListData,
} from "@/types/content";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

function DialogueBlock({ data }: { data: DialogueData }) {
  return (
    <div className="bg-blue-50 rounded-xl p-5 space-y-4">
      <h3 className="font-semibold text-blue-800 text-sm">{data.titleTk}</h3>
      <div className="space-y-3">
        {data.exchanges.map((ex, i) => (
          <div key={i} className="space-y-1">
            <div className="flex gap-2 items-start">
              <span className="text-xs font-bold text-blue-600 w-16 flex-shrink-0 pt-0.5">
                {ex.speakerEn}:
              </span>
              <div>
                <p className="text-sm font-medium text-gray-900">{ex.lineEn}</p>
                <p className="text-sm text-gray-500 italic">{ex.lineTk}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GrammarNoteBlock({ data }: { data: GrammarNoteData }) {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 space-y-4">
      <h3 className="font-semibold text-amber-800">{data.titleTk}</h3>
      <p className="text-sm text-gray-700 leading-relaxed">{data.explanationTk}</p>
      <div className="bg-white rounded-lg p-3 border border-amber-200">
        <p className="text-sm font-mono text-amber-800 font-semibold">{data.pattern}</p>
      </div>
      <div className="space-y-2">
        {data.examples.map((ex, i) => (
          <div key={i} className="flex gap-3 text-sm">
            <span className="text-amber-400 font-bold flex-shrink-0">→</span>
            <div>
              <span className="font-medium text-gray-900">{ex.en}</span>
              <span className="text-gray-400 mx-2">|</span>
              <span className="text-gray-600 italic">{ex.tk}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VocabListBlock({ data }: { data: VocabListData }) {
  const posColors: Record<string, string> = {
    noun: "bg-blue-100 text-blue-700",
    verb: "bg-green-100 text-green-700",
    adjective: "bg-purple-100 text-purple-700",
    adverb: "bg-orange-100 text-orange-700",
    pronoun: "bg-pink-100 text-pink-700",
    preposition: "bg-gray-100 text-gray-700",
    conjunction: "bg-indigo-100 text-indigo-700",
  };
  const posLabels: Record<string, string> = {
    noun: "at",
    verb: "işlik",
    adjective: "sypat",
    adverb: "hal",
    pronoun: "çalyşma",
    preposition: "goşulga",
    conjunction: "baglanyşdyryjy",
  };

  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-gray-900">{data.titleTk}</h3>
      <div className="grid grid-cols-1 gap-2">
        {data.words.map((w, i) => (
          <div
            key={i}
            className="flex items-start gap-3 bg-white border border-gray-100 rounded-lg p-3"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold text-gray-900">{w.en}</span>
                <Badge className={`text-xs ${posColors[w.partOfSpeech] ?? "bg-gray-100 text-gray-700"}`}>
                  {posLabels[w.partOfSpeech] ?? w.partOfSpeech}
                </Badge>
                <span className="text-gray-600">— {w.tk}</span>
              </div>
              {w.exampleEn && (
                <div className="mt-1 text-sm">
                  <span className="text-gray-600 italic">{w.exampleEn}</span>
                  {w.exampleTk && (
                    <span className="text-gray-400"> / {w.exampleTk}</span>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExampleSetBlock({ data }: { data: ExampleSetData }) {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-gray-900">{data.titleTk}</h3>
      <div className="space-y-2">
        {data.examples.map((ex, i) => (
          <div key={i} className="bg-gray-50 rounded-lg p-3">
            <p className="text-sm font-medium text-gray-900">{ex.en}</p>
            <p className="text-sm text-gray-600 italic mt-0.5">{ex.tk}</p>
            {ex.note && <p className="text-xs text-blue-600 mt-1">{ex.note}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

function ExplanationBlock({ data }: { data: ExplanationData }) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-gray-900">{data.titleTk}</h3>
      <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{data.bodyTk}</p>
    </div>
  );
}

export default function LessonContent({ content }: { content: LessonContentData }) {
  return (
    <div className="space-y-6">
      {content.blocks.map((block: ContentBlock, i: number) => (
        <div key={i}>
          {i > 0 && <Separator className="mb-6" />}
          {block.type === "dialogue" && <DialogueBlock data={block.data as DialogueData} />}
          {block.type === "grammar_note" && <GrammarNoteBlock data={block.data as GrammarNoteData} />}
          {block.type === "vocabulary_list" && <VocabListBlock data={block.data as VocabListData} />}
          {block.type === "example_set" && <ExampleSetBlock data={block.data as ExampleSetData} />}
          {block.type === "explanation" && <ExplanationBlock data={block.data as ExplanationData} />}
        </div>
      ))}
    </div>
  );
}
