"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/dashboard", label: "Baş sahypa" },
  { href: "/levels", label: "Dil Derejesi" },
  { href: "/vocabulary", label: "504 Söz" },
  { href: "/practice", label: "Practice" },
  { href: "/games", label: "🎮 Oýunlar" },
];

export default function Navbar({ userName }: { userName: string }) {
  const pathname = usePathname();

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="px-2 py-1 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm tracking-wide">Oka</span>
            </div>
            <span className="font-bold text-gray-900 hidden sm:block">Iňlis Dili</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  pathname.startsWith(item.href)
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600 hidden sm:block">Salam, {userName}</span>
          <Button
            size="sm"
            onClick={() => signOut({ callbackUrl: "/" })}
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Çykmak
          </Button>
        </div>
      </div>
      {/* Mobile nav */}
      <nav className="md:hidden flex border-t">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex-1 text-center py-2 text-xs font-medium ${
              pathname.startsWith(item.href)
                ? "text-blue-700 border-b-2 border-blue-600"
                : "text-gray-600"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
