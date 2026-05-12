import type { Metadata } from "next";
import { Rajdhani, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HPS Concord Ltd",
    template: "%s | HPS Concord Ltd",
  },
  description:
    "HPS Concord Ltd — Global aftermarket aircraft parts supplier. Serving airlines, MROs, and fleet operators since 2015.",
  keywords: ["aircraft parts", "aviation supplier", "MRO", "Airbus", "Boeing", "HPS Concord"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`scroll-smooth ${rajdhani.variable} ${inter.variable}`}>
      <body className="bg-white text-brand-navy font-body antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}