import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return locale === "en"
    ? pageMetadata({
        locale,
        path: "/work",
        title: "Work — Germán Cárdenas",
        description:
          "Full case studies: Atlas One ERP, Atlas Nexus, AgroNova, LAPD Crime Analytics, Yerba Mate Intelligence, ATLAS-YPF, ATLAS SENTINEL, Phantom AI, Atlas Analytics, ZEUS, and Atlas CABA.",
      })
    : pageMetadata({
        locale,
        path: "/work",
        title: "Work — Germán Cárdenas",
        description:
          "Casos de estudio completos: Atlas One ERP, Atlas Nexus, AgroNova, LAPD Crime Analytics, Yerba Mate Intelligence, ATLAS-YPF, ATLAS SENTINEL, Phantom AI, Atlas Analytics, ZEUS y Atlas CABA.",
      });
}

type Locale = "es" | "en";

type CaseCard = {
  slug: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  accent: string;
  thumbnail: string;
};

const cases: Record<Locale, CaseCard[]> = {
  es: [
    {
      slug: "atlas-one-erp",
      number: "01",
      category: "SaaS B2B · Comercio de cercanía",
      title: "Atlas One ERP",
      subtitle: "Gestión para kioscos y minimarkets: ventas, stock, compras, facturación ARCA e IA predictiva.",
      accent: "#06b6d4",
      thumbnail: "/screenshots/atlas-erp/1766963976633.jpg",
    },
    {
      slug: "atlas-nexus",
      number: "02",
      category: "SaaS B2B · Hackathon Winner",
      title: "Atlas Nexus",
      subtitle: "Plataforma de inteligencia comercial para comercios independientes con POS nativo.",
      accent: "#F59E0B",
      thumbnail: "/screenshots/atlas-nexus.png",
    },
    {
      slug: "agronova",
      number: "03",
      category: "AgriTech · GIS · Enterprise",
      title: "AgroNova",
      subtitle: "Plataforma geoespacial de escala nacional para la agroindustria argentina.",
      accent: "#10b981",
      thumbnail: "/screenshots/agronova.png",
    },
    {
      slug: "lapd",
      number: "04",
      category: "Research · Data Analytics",
      title: "LAPD Crime Analytics",
      subtitle: "Análisis de 1 millón de registros policiales de Los Ángeles con rigor metodológico.",
      accent: "#976DF7",
      thumbnail: "/screenshots/lapd.png",
    },
    {
      slug: "yerba-mate-ml",
      number: "05",
      category: "Data Science · Agroindustria · Freelance",
      title: "Yerba Mate Intelligence",
      subtitle: "Inteligencia de mercado para un cliente del sector yerbatero, con 3 modelos de ML validados.",
      accent: "#22c55e",
      thumbnail: "/screenshots/yerba-mate/mapa-gis.jpg",
    },
    {
      slug: "atlas-ypf",
      number: "06",
      category: "Finanzas · Energía · Research",
      title: "ATLAS-YPF",
      subtitle: "Por qué el mercado castigó el mejor balance de la historia de YPF: web, Power BI y Excel sobre un mismo pipeline.",
      accent: "#38bdf8",
      thumbnail: "/screenshots/ypf/web-caso.jpg",
    },
    {
      slug: "atlas-sentinel",
      number: "07",
      category: "Data Science · Seguridad urbana · GovTech",
      title: "ATLAS SENTINEL",
      subtitle: "Riesgo delictivo de Buenos Aires por zona y turno: las mismas 75 patrullas, reubicadas, cubren 23,6 puntos más de riesgo.",
      accent: "#3b82f6",
      thumbnail: "/screenshots/sentinel/mapa.jpg",
    },
    {
      slug: "phantom-ai",
      number: "08",
      category: "Data Science · Finanzas · Prevención de lavado",
      title: "Phantom AI",
      subtitle: "Redes neuronales de grafos contra el lavado de activos: 90% del fraude detectado, sobre datos sintéticos.",
      accent: "#787BF3",
      thumbnail: "/screenshots/phantom/red.jpg",
    },
    {
      slug: "atlas-analytics",
      number: "09",
      category: "AI Engineering · Datos públicos · Consultora",
      title: "Atlas Analytics",
      subtitle: "Mi consultora de datos y el sistema de IA que investiga con fuentes reales: 41 carruseles, cero links inventados.",
      accent: "#AA64F8",
      thumbnail: "/screenshots/atlas-analytics/portadas.jpg",
    },
    {
      slug: "zeus",
      number: "10",
      category: "Ciberseguridad · DLP · Producto SaaS",
      title: "ZEUS · Atlas Control",
      subtitle: "Seguridad del endpoint y prevención de fuga de datos para financieras y brokers, sin leer lo que la gente escribe.",
      accent: "#8376F6",
      thumbnail: "/screenshots/zeus/resumen.jpg",
    },
    {
      slug: "caba-jefatura",
      number: "11",
      category: "Inteligencia electoral · Geoespacial · Cliente",
      title: "Atlas CABA · Jefatura de Gobierno",
      subtitle: "Treinta años del voto porteño para una candidatura 2027: el derrumbe del PRO fue de marca, no de territorio.",
      accent: "#00A3C4",
      thumbnail: "/screenshots/caba/mapa-2025.jpg",
    },
  ],
  en: [
    {
      slug: "atlas-one-erp",
      number: "01",
      category: "B2B SaaS · Neighbourhood retail",
      title: "Atlas One ERP",
      subtitle: "Management for kiosks and minimarkets: sales, stock, purchasing, ARCA invoicing and predictive AI.",
      accent: "#06b6d4",
      thumbnail: "/screenshots/atlas-erp/1766963976633.jpg",
    },
    {
      slug: "atlas-nexus",
      number: "02",
      category: "SaaS B2B · Hackathon Winner",
      title: "Atlas Nexus",
      subtitle: "Commercial intelligence platform for independent retailers with native POS integration.",
      accent: "#F59E0B",
      thumbnail: "/screenshots/atlas-nexus.png",
    },
    {
      slug: "agronova",
      number: "03",
      category: "AgriTech · GIS · Enterprise",
      title: "AgroNova",
      subtitle: "Nationwide geospatial platform for Argentina's agribusiness sector.",
      accent: "#10b981",
      thumbnail: "/screenshots/agronova.png",
    },
    {
      slug: "lapd",
      number: "04",
      category: "Research · Data Analytics",
      title: "LAPD Crime Analytics",
      subtitle: "Analysis of 1 million Los Angeles police records with methodological rigor.",
      accent: "#976DF7",
      thumbnail: "/screenshots/lapd.png",
    },
    {
      slug: "yerba-mate-ml",
      number: "05",
      category: "Data Science · Agribusiness · Freelance",
      title: "Yerba Mate Intelligence",
      subtitle: "Market intelligence for a yerba mate industry client, with 3 validated ML models.",
      accent: "#22c55e",
      thumbnail: "/screenshots/yerba-mate/mapa-gis.jpg",
    },
    {
      slug: "atlas-ypf",
      number: "06",
      category: "Finance · Energy · Research",
      title: "ATLAS-YPF",
      subtitle: "Why the market punished YPF's best-ever results: web, Power BI and Excel on a single pipeline.",
      accent: "#38bdf8",
      thumbnail: "/screenshots/ypf/web-caso.jpg",
    },
    {
      slug: "atlas-sentinel",
      number: "07",
      category: "Data Science · Urban safety · GovTech",
      title: "ATLAS SENTINEL",
      subtitle: "Crime risk in Buenos Aires by area and shift: the same 75 patrols, relocated, cover 23.6 points more risk.",
      accent: "#3b82f6",
      thumbnail: "/screenshots/sentinel/mapa.jpg",
    },
    {
      slug: "phantom-ai",
      number: "08",
      category: "Data Science · Finance · Anti-money laundering",
      title: "Phantom AI",
      subtitle: "Graph neural networks against money laundering: 90% of fraud detected, on synthetic data.",
      accent: "#787BF3",
      thumbnail: "/screenshots/phantom/red.jpg",
    },
    {
      slug: "atlas-analytics",
      number: "09",
      category: "AI Engineering · Public data · Consultancy",
      title: "Atlas Analytics",
      subtitle: "My data consultancy and the AI system that researches real sources: 41 carousels, zero made-up links.",
      accent: "#AA64F8",
      thumbnail: "/screenshots/atlas-analytics/portadas.jpg",
    },
    {
      slug: "zeus",
      number: "10",
      category: "Cybersecurity · DLP · SaaS product",
      title: "ZEUS · Atlas Control",
      subtitle: "Endpoint security and data-loss prevention for lenders and brokers, without reading what people type.",
      accent: "#8376F6",
      thumbnail: "/screenshots/zeus/resumen.jpg",
    },
    {
      slug: "caba-jefatura",
      number: "11",
      category: "Electoral intelligence · Geospatial · Client",
      title: "Atlas CABA · Mayoral race",
      subtitle: "Thirty years of the Buenos Aires vote for a 2027 campaign: PRO's collapse was about the brand, not the territory.",
      accent: "#00A3C4",
      thumbnail: "/screenshots/caba/mapa-2025.jpg",
    },
  ],
};

const headerText: Record<Locale, { eyebrow: string; title: string; titleItalic: string }> = {
  es: { eyebrow: "─── Trabajo", title: "Casos de estudio.", titleItalic: "De punta a punta." },
  en: { eyebrow: "─── Work", title: "Case studies.", titleItalic: "End to end." },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function WorkIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  setRequestLocale(rawLocale);
  const locale: Locale = rawLocale === "en" ? "en" : "es";
  const t = headerText[locale];

  return (
    <>
      <Navigation />
      <main id="contenido" tabIndex={-1} className="outline-none">
        <section
          style={{ backgroundColor: "#06080D", minHeight: "100svh" }}
          className="pt-36 pb-28"
        >
          <div className="container-custom">
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#8D9AB3",
                marginBottom: "24px",
              }}
            >
              {t.eyebrow}
            </p>
            <h1
              className="font-serif"
              style={{
                textTransform: "uppercase",
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 600,
                color: "#F0F4FB",
                lineHeight: 1.05,
                letterSpacing: "0.02em",
                marginBottom: "64px",
                maxWidth: "720px",
              }}
            >
              {t.title}{" "}
              <span>{t.titleItalic}</span>
            </h1>

            <div className="grid sm:grid-cols-2 gap-5">
              {cases[locale].map((c) => (
                <Link
                  key={c.slug}
                  href={`/${locale}/work/${c.slug}`}
                  className="group block overflow-hidden transition-all duration-[400ms] hover:border-white/20"
                  style={{
                    borderRadius: "20px",
                    border: "1px solid rgba(255,255,255,0.06)",
                    background: "#0F1623",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: "16/10", background: "#06080D" }}>
                    <Image
                      src={c.thumbnail}
                      alt={c.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(6,8,13,0.5) 0%, transparent 45%)" }}
                    />
                    <span
                      className="absolute top-4 left-4"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "12px",
                        letterSpacing: "0.14em",
                        color: c.accent,
                        background: "rgba(6,8,13,0.65)",
                        padding: "4px 10px",
                        borderRadius: "6px",
                        border: `1px solid ${c.accent}33`,
                      }}
                    >
                      {c.number}
                    </span>
                  </div>

                  <div style={{ padding: "28px 28px 32px" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "12px",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: c.accent,
                        marginBottom: "10px",
                      }}
                    >
                      {c.category}
                    </p>
                    <h3
                      className="flex items-center gap-2"
                      style={{
                        fontSize: "22px",
                        fontWeight: 500,
                        color: "#F0F4FB",
                        letterSpacing: "-0.01em",
                        marginBottom: "10px",
                      }}
                    >
                      {c.title}
                      <ArrowUpRight
                        className="w-4 h-4 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                        style={{ color: c.accent }}
                      />
                    </h3>
                    <p style={{ fontSize: "15px", lineHeight: 1.65, color: "#9AA5B8" }}>
                      {c.subtitle}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
