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
  "yerba-mate-ml": {
    title: "Yerba Mate Intelligence",
    accent: "#22c55e",
    subtitle: {
      es: "Inteligencia de mercado para un cliente del sector yerbatero: datos que no se estiman, se verifican",
      en: "Market intelligence for a yerba mate industry client: data that isn't estimated, it's verified",
    },
    chips: ["Data Science", "SARIMA", "PostGIS", "Freelance"],
  },
  "atlas-ypf": {
    title: "ATLAS-YPF",
    accent: "#38bdf8",
    subtitle: {
      es: "YPF publicó el mejor trimestre de su historia y el mercado lo vendió: por qué",
      en: "YPF posted its best-ever quarter and the market sold it: here's why",
    },
    chips: ["Python", "Power BI", "Excel", "Next.js"],
  },
  "atlas-sentinel": {
    title: "ATLAS SENTINEL",
    accent: "#3b82f6",
    subtitle: {
      es: "Riesgo delictivo de Buenos Aires: las mismas 75 patrullas, reubicadas, cubren 23,6 puntos más",
      en: "Crime risk in Buenos Aires: the same 75 patrols, relocated, cover 23.6 points more",
    },
    chips: ["LightGBM", "H3", "SHAP", "Optimización"],
  },
  "phantom-ai": {
    title: "Phantom AI",
    accent: "#6366f1",
    subtitle: {
      es: "Redes neuronales de grafos contra el lavado de activos (datos sintéticos)",
      en: "Graph neural networks against money laundering (synthetic data)",
    },
    chips: ["GraphSAGE", "PyTorch Geometric", "XGBoost", "Compliance"],
  },
  "atlas-analytics": {
    title: "Atlas Analytics",
    accent: "#8B2CF5",
    subtitle: {
      es: "Consultora de datos y un sistema de IA que no inventa fuentes",
      en: "A data consultancy and an AI system that can't make up sources",
    },
    chips: ["Agentes de IA", "Claude", "Next.js", "Datos públicos"],
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
