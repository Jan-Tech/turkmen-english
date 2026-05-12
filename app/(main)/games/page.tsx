import Link from "next/link";

export const metadata = { title: "Oýunlar | Iňlis Dili" };

const games = [
  {
    href: "/games/daily-word",
    emoji: "🌟",
    titleTk: "Gündelik Söz",
    titleEn: "Daily Word",
    desc: "Her gün täze söz. 3 synanyşyk. Ertire garaş!",
    color: "yellow",
    bg: "bg-yellow-50", border: "border-yellow-200", btn: "bg-yellow-500 hover:bg-yellow-600", tag: "bg-yellow-100 text-yellow-600",
    badge: "Gündelik",
  },
  {
    href: "/games/flashcards",
    emoji: "🃏",
    titleTk: "Söz Kartlary",
    titleEn: "Flashcards",
    desc: "Kartlary aýlap, iňlisçe sözleri öwren.",
    color: "blue",
    bg: "bg-blue-50", border: "border-blue-200", btn: "bg-blue-600 hover:bg-blue-700", tag: "bg-blue-100 text-blue-600",
    badge: null,
  },
  {
    href: "/games/wordle",
    emoji: "🟩",
    titleTk: "Wordle",
    titleEn: "Wordle",
    desc: "5 harply sözi 6 synanyşykda tap. Ýaşyl, sary, çal.",
    color: "gray",
    bg: "bg-gray-50", border: "border-gray-300", btn: "bg-gray-800 hover:bg-gray-900", tag: "bg-gray-200 text-gray-700",
    badge: null,
  },
  {
    href: "/games/hangman",
    emoji: "🪢",
    titleTk: "Hangman",
    titleEn: "Hangman",
    desc: "Harplar bilen sözi tap — 6 ýalňyşlygyň bar.",
    color: "red",
    bg: "bg-red-50", border: "border-red-200", btn: "bg-red-500 hover:bg-red-600", tag: "bg-red-100 text-red-600",
    badge: null,
  },
  {
    href: "/games/speed-quiz",
    emoji: "⚡",
    titleTk: "Çalt Synag",
    titleEn: "Speed Quiz",
    desc: "4 sekunt! Dogry sözi çalt saýla.",
    color: "orange",
    bg: "bg-orange-50", border: "border-orange-200", btn: "bg-orange-500 hover:bg-orange-600", tag: "bg-orange-100 text-orange-600",
    badge: "Çalt!",
  },
  {
    href: "/games/word-match",
    emoji: "🔗",
    titleTk: "Söz Gabatlaşdyrma",
    titleEn: "Word Match",
    desc: "Iňlisçe sözi türkmen terjimesi bilen gabatlaşdyr.",
    color: "purple",
    bg: "bg-purple-50", border: "border-purple-200", btn: "bg-purple-600 hover:bg-purple-700", tag: "bg-purple-100 text-purple-600",
    badge: null,
  },
  {
    href: "/games/fill-blank",
    emoji: "✍️",
    titleTk: "Boşlugy Doldur",
    titleEn: "Fill in the Blank",
    desc: "Sözlemi okap, dogry sözi 4 saýlawdan saýla.",
    color: "green",
    bg: "bg-green-50", border: "border-green-200", btn: "bg-green-600 hover:bg-green-700", tag: "bg-green-100 text-green-600",
    badge: null,
  },
  {
    href: "/games/true-false",
    emoji: "✅",
    titleTk: "Dogry ýa Ýalňyş?",
    titleEn: "True or False",
    desc: "Sözüň terjimesi dogrumy? Çalt karar ber!",
    color: "indigo",
    bg: "bg-indigo-50", border: "border-indigo-200", btn: "bg-indigo-600 hover:bg-indigo-700", tag: "bg-indigo-100 text-indigo-600",
    badge: null,
  },
  {
    href: "/games/word-scramble",
    emoji: "🧩",
    titleTk: "Söz Doldurma",
    titleEn: "Word Scramble",
    desc: "Bulaşyk harplary dogry tertibe syr.",
    color: "amber",
    bg: "bg-amber-50", border: "border-amber-200", btn: "bg-amber-500 hover:bg-amber-600", tag: "bg-amber-100 text-amber-600",
    badge: null,
  },
  {
    href: "/games/sentence-builder",
    emoji: "🏗️",
    titleTk: "Sözlem Duz",
    titleEn: "Sentence Builder",
    desc: "Bulaşyk sözleri dogry tertipde düz.",
    color: "teal",
    bg: "bg-teal-50", border: "border-teal-200", btn: "bg-teal-600 hover:bg-teal-700", tag: "bg-teal-100 text-teal-600",
    badge: null,
  },
];

export default function GamesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">🎮 Oýunlar</h1>
        <p className="text-gray-500 mt-1">Iňlis dilini oýnap öwren — 504 esasy söz esasynda</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <div key={game.href} className={`rounded-2xl border-2 ${game.border} ${game.bg} p-5 flex flex-col gap-3 relative`}>
            {game.badge && (
              <span className={`absolute top-3 right-3 text-xs font-bold px-2 py-0.5 rounded-full ${game.tag}`}>
                {game.badge}
              </span>
            )}
            <div className="text-4xl">{game.emoji}</div>
            <div>
              <h3 className="font-bold text-gray-900">{game.titleTk}</h3>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium inline-block mt-0.5 ${game.tag}`}>
                {game.titleEn}
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed flex-1">{game.desc}</p>
            <Link
              href={game.href}
              className={`block text-center py-2 ${game.btn} text-white text-sm font-semibold rounded-xl transition-colors`}
            >
              Oýna →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
