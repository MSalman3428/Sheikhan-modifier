import type { Metadata, Viewport } from "next";
import { Outfit, Space_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Sheikhan Modifier | Elite Restomods",
  description: "Hand-fabricated American muscle legends and tactical restomods.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceMono.variable}`}>
      <body className="min-h-screen flex flex-col selection:bg-[var(--theme-accent)] selection:text-black overflow-x-hidden">
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}