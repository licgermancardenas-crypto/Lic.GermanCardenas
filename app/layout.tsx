import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Germán Cárdenas | Financial Analyst & Data Scientist",
  description:
    "Portfolio de Germán Cárdenas — Financial Analyst, Data Scientist & AI Engineer en Buenos Aires.",
  authors: [{ name: "Germán Cárdenas" }],
  keywords: [
    "financial analyst",
    "data scientist",
    "AI engineer",
    "Buenos Aires",
    "portfolio",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    alternateLocale: "en_US",
    title: "Germán Cárdenas | Financial Analyst & Data Scientist",
    description: "Transformo datos en decisiones que mueven negocios.",
    siteName: "Germán Cárdenas Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Germán Cárdenas | Financial Analyst & Data Scientist",
    description: "Transformo datos en decisiones que mueven negocios.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
