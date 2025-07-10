import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Exklusive Unternehmensberatung & Strategieberatung in Linz | Wachstum & Innovation für Unternehmen",
  description: "Maßgeschneiderte Beratung und innovative Strategien für nachhaltigen Unternehmenserfolg. Wir begleiten visionäre Unternehmer:innen in Linz und ganz Österreich auf dem Weg zu Wachstum, Innovation und langfristigem Erfolg. Jetzt exklusive Beratung buchen!",
  keywords: [
    "Unternehmensberatung Linz",
    "Strategieberatung",
    "Business Consulting Austria",
    "Wachstum Unternehmen",
    "Innovation Beratung",
    "maßgeschneiderte Lösungen",
    "Unternehmer Coaching",
    "Geschäftsentwicklung",
    "nachhaltiges Wachstum",
    "kreative Strategien",
    "Beratung KMU",
    "Startup Beratung",
    "digitale Transformation",
    "Strategieentwicklung Linz"
  ].join(", ")
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
