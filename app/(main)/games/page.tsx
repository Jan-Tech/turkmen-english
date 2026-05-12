import Link from "next/link";

export const metadata = { title: "Oýunlar | Iňlis Dili" };

const games = [
  {
    href: "/games/flashcards",
    emoji: "🃏",
    titleTk: "Söz Kartlary",
    titleEn: "Flashcards",
    desc: "Kartlary aýlap, iňlisçe sözleri türkmen terjimesi bilen öwren. Bilýän sözleriňi bel.",
    color: "blue",
    bg: "bg-blue-50",
    border: "border-blue-200",
    btn: "bg-blue-600 hover:bg-blue-700",
    tag: "bg-blue-100 text-blue-600",
  },
  {
    href: "/games/word-match",
    emoji: "🔗",
    titleTk: "Söz Gabatlaşdyrma",
    titleEn: "Word Match",
    desc: "Iňlisçe sözi türkmen terjimesi bilen gabatlaşdyr. Näçe çalt tamamlasaň, şonça ýokary bal!",
    color: "purple",
    bg: "bg-purple-50",
    border: "border-purple-200",
    btn: "bg-purple-600 hover:bg-purple-700",
    tag: "bg-purple-100 text-purple-600",
  },
  {
    href: "/games/fill-blank",
    emoji: "✍️",
    titleTk: "Boşlugy Doldur",
    titleEn: "Fill in the Blank",
    desc: "Sözlemi okap, boş ýeri dogry söz bilen doldur. Her sorag üçin 4 saýlaw beriler.",
    color: "green",
    bg: "bg-green-50",
    border: "border-green-200",
    btn: "bg-green-600 hover:bg-green-700",
    tag: "bg-green-100 text-green-600",
  },
];

export default function GamesPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">🎮 Oýunlar</h1>
        <p className="text-gray-500 mt-1">Iňlis dilini oýnap öwren — 504 esasy söz</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        {games.map((game) => (
          <div
            key={game.href}
            className={`rounded-2xl border-2 ${game.border} ${game.bg} p-6 flex flex-col items-center text-center gap-4`}
          >
            <div className="text-5xl">{game.emoji}</div>
            <div>
              <h3 className="font-bold text-gray-900 text-base">{game.titleTk}</h3>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium mt-1 inline-block ${game.tag}`}>
                {game.titleEn}
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed flex-1">{game.desc}</p>
            <Link
              href={game.href}
              className={`w-full py-2.5 ${game.btn} text-white text-sm font-semibold rounded-xl transition-colors`}
            >
              Oýna →
            </Link>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-dashed border-gray-200 p-5 text-center text-sm text-gray-400">
        🚧 Ýakynda has köp oýun goşular: Hangman, Spelling Bee, Crossword...
      </div>
    </div>
  );
}
