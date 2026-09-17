import type { Metadata } from "next";
import { Fredoka, Inter } from "next/font/google";
import "./globals.css";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
});

const display = Fredoka({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Radiobilsglassar — exempel på lokal glasskiosk",
  description:
    "Ett varmt exempelprojekt för en tänkt glasskiosk. Ingen riktig kiosk, inga öppettider, ingen mejl.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={`${sans.variable} ${display.variable} h-full`}>
      <body className="min-h-full bg-[var(--cream)] text-[var(--ink)]">{children}</body>
    </html>
  );
}
