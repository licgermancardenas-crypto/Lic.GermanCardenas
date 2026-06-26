import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
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

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://german-cardenas-portfolio.vercel.app"),
  title: {
    default: "Germán Cárdenas — Financial Analyst, Data Scientist & AI Engineer",
    template: "%s | Germán Cárdenas",
  },
  description:
    "6+ años construyendo sistemas de inteligencia para decisiones de negocio en agroindustria, retail, real estate y fintech.",
  authors: [{ name: "Germán Cárdenas" }],
  keywords: [
    "financial analyst",
    "data scientist",
    "AI engineer",
    "Buenos Aires",
    "portfolio",
    "AgroNova",
    "hackathon winner",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    alternateLocale: "en_US",
    siteName: "Germán Cárdenas",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} dark`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
