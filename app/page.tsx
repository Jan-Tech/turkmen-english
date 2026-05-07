import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">IE</span>
          </div>
          <span className="font-bold text-gray-900">Iňlis Dili</span>
        </div>
        <div className="flex gap-3">
          <Link href="/login">
            <Button variant="ghost">Giriş</Button>
          </Link>
          <Link href="/register">
            <Button>Başla</Button>
          </Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-20 pb-32 text-center">
        <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100">
          Türkmen dilinde düşündirilýär
        </Badge>
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          <span className="text-blue-600">Türkmen dilinde</span>
          <br />
          Iňlis dilini öwreniň
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Başlangyçdan Ýokary Derejä çenli ähli sapaklary Türkmen dilinde düşündiriş bilen öwreniň.
          Her bölümde synaglar hem bar.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/register">
            <Button size="lg" className="text-base px-8">
              Mugt başla
            </Button>
          </Link>
          <Link href="/vocabulary">
            <Button size="lg" variant="outline" className="text-base px-8">
              504 Esasy Söz
            </Button>
          </Link>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
            {
              icon: "📚",
              title: "6 Dil Derejesi",
              desc: "Başlangyçdan Ýokary Derejä çenli yzygiderli öwreniň",
            },
            {
              icon: "🧪",
              title: "Synaglar we Oýunlar",
              desc: "Her bölümden soňra synag, her derejäniň ahyrynda uly synag",
            },
            {
              icon: "📖",
              title: "504 Esasy Söz",
              desc: "Iň zerur 504 sözi Türkmen terjimesi bilen öwreniň",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Öwrenip boljak derejeler</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { tk: "Başlangyç", en: "Beginner", color: "bg-green-100 text-green-700" },
              { tk: "Başlangyç+", en: "Elementary", color: "bg-blue-100 text-blue-700" },
              { tk: "Orta öňi", en: "Pre-Intermediate", color: "bg-yellow-100 text-yellow-700" },
              { tk: "Orta", en: "Intermediate", color: "bg-orange-100 text-orange-700" },
              { tk: "Ýokary Orta", en: "Upper-Intermediate", color: "bg-purple-100 text-purple-700" },
              { tk: "Ýokary", en: "Advanced", color: "bg-red-100 text-red-700" },
            ].map((l) => (
              <div
                key={l.en}
                className={`rounded-xl p-4 text-center ${l.color}`}
              >
                <div className="font-semibold">{l.tk}</div>
                <div className="text-xs mt-1 opacity-70">{l.en}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
