import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tomaž Cvitkovič s.p. — Popravila strojev & zaključna gradbena dela | Griblje / Bela Krajina",
  description:
    "Samostojni podjetnik iz Griblje (občina Metlika). Popravila strojev, kmetijske in gozdarske mehanizacije, kovinske konstrukcije ter zaključna gradbena dela. Hitra, zanesljiva in poštena obrt z večletnimi izkušnjami.",
  keywords: [
    "popravila strojev",
    "zaključna gradbena dela",
    "Tomaž Cvitkovič",
    "Griblje",
    "Metlika",
    "Bela Krajina",
    "kmetijska mehanizacija",
    "gozdarska mehanizacija",
    "kovinske konstrukcije",
    "varjenje",
    "obrt",
    "s.p.",
  ],
  authors: [{ name: "Tomaž Cvitkovič s.p." }],
  creator: "Tomaž Cvitkovič s.p.",
  metadataBase: new URL("https://tomazcvitkovic.si"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tomaž Cvitkovič s.p. — Popravila strojev & zaključna gradbena dela",
    description:
      "Samostojni podjetnik iz Griblje (Metlika). Popravila strojev, kovinske konstrukcije in zaključna gradbena dela. Hitra, zanesljiva obrt v Beli krajini.",
    siteName: "Tomaž Cvitkovič s.p.",
    locale: "sl_SI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomaž Cvitkovič s.p. — Popravila strojev & zaključna gradbena dela",
    description:
      "Samostojni podjetnik iz Griblje (Metlika). Popravila strojev, kovinske konstrukcije in zaključna gradbena dela.",
  },
  robots: { index: true, follow: true },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
