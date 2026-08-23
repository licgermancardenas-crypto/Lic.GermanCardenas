import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt = "Case study — Germán Cárdenas";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

const CASES: Record<
  string,
  { title: string; accent: string; subtitle: { es: string; en: string }; chips: string[] }
> = {
  "atlas-one-erp": {
    title: "Atlas One ERP",
    accent: "#06b6d4",
    subtitle: {
      es: "ERP modular para PyMEs argentinas con inteligencia de negocio integrada",
      en: "Modular ERP for Argentine SMBs with built-in business intelligence",
    },
    chips: ["Next.js", "FastAPI", "PostgreSQL", "BI"],
  },
  "atlas-nexus": {
    title: "Atlas Nexus",
    accent: "#F59E0B",
    subtitle: {
      es: "Inteligencia comercial para comercios independientes con POS nativo",
      en: "Commercial intelligence for independent retailers with native POS",
    },
    chips: ["Clover POS", "React", "FastAPI", "Hackathon Winner"],
  },
  agronova: {
    title: "AgroNova",
    accent: "#10b981",
    subtitle: {
      es: "Plataforma geoespacial de escala nacional para la agroindustria argentina",
      en: "National-scale geospatial platform for Argentine agribusiness",
    },
    chips: ["Next.js", "Leaflet", "PostGIS", "GIS"],
  },
  lapd: {
    title: "LAPD Crime Analytics",
    accent: "#8B5CF6",
    subtitle: {
      es: "Análisis de 1 millón de registros policiales de Los Ángeles con rigor metodológico",
      en: "One million Los Angeles police records analysed with methodological rigour",
    },
    chips: ["Python", "Machine Learning", "MapLibre", "Next.js"],
  },
};

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const c = CASES[slug];
  const lang = locale === "en" ? "en" : "es";

  if (!c) {
    return renderOg({
      eyebrow: "Case study",
      title: "Germán Cárdenas",
      subtitle: "Financial Analyst · Data Scientist · AI Engineer",
    });
  }

  return renderOg({
    eyebrow: lang === "en" ? "Case study" : "Caso de estudio",
    title: c.title,
    subtitle: c.subtitle[lang],
    chips: c.chips,
    accent: c.accent,
  });
}
