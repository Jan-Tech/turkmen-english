import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Iňlis Dili | English for Turkmen Speakers",
  description: "Türkmen dilinde Iňlis dilini öwreniň. Learn English explained in Turkmen.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tk" className={geist.variable}>
      <body className="font-sans antialiased bg-background text-foreground">{children}</body>
    </html>
  );
}
