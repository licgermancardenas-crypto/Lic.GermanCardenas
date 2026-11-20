"use client";

import { TrendingUp, BarChart3, BrainCircuit, Cpu, LineChart, Briefcase } from "lucide-react";
import { useLocale } from "next-intl";
import { AnimatedSection } from "@/components/AnimatedSection";
import RadialOrbitalTimeline, { type OrbitalNode } from "@/components/ui/radial-orbital-timeline";

type Lang = "es" | "en";
type ProfileSrc = Omit<OrbitalNode, "title" | "date" | "content" | "href" | "showcase"> & {
  title: Record<Lang, string>;
  date: Record<Lang, string>;
  content: Record<Lang, string>;
  path?: string;
  showcase: { title: string; slug: string; teaser: Record<Lang, string> };
};

const PROFILES: ProfileSrc[] = [
  {
    id: 1,
    title: { es: "Financial Planning & Analysis (FP&A) Specialist", en: "Financial Planning & Analysis (FP&A) Specialist" },
    date: { es: "Core Business", en: "Core Business" },
    content: {
      es: "Financial Planning & Analysis. Modelos de proyección financiera, valuación de proyectos de inversión (Private Equity), flujos de fondos y análisis de portafolios bursátiles.",
      en: "Financial Planning & Analysis. Financial forecasting models, investment project valuation (Private Equity), cash-flow models and equity portfolio analysis.",
    },
    category: "Finance",
    icon: TrendingUp,
    relatedIds: [2, 5],
    status: "completed",
    energy: 100,
    path: "perfiles/fpa",
    showcase: {
      title: "ATLAS-YPF",
      slug: "atlas-ypf",
      teaser: {
        es: "Por qué el mercado vendió el mejor trimestre de YPF: US$ 851M del aumento del EBITDA son precio del crudo.",
        en: "Why the market sold YPF's best quarter: US$ 851M of the EBITDA increase is crude price.",
      },
    },
  },
  {
    id: 2,
    title: { es: "Corporate BI & Data Analyst", en: "Corporate BI & Data Analyst" },
    date: { es: "Data Analytics", en: "Data Analytics" },
    content: {
      es: "Construcción de pipelines de datos integrales (ETL), modelado relacional y dashboards ejecutivos en Power BI para control operativo y optimización de márgenes.",
      en: "End-to-end data pipelines (ETL), relational modelling and executive Power BI dashboards for operational control and margin optimisation.",
    },
    category: "BI",
    icon: BarChart3,
    relatedIds: [1, 3],
    status: "completed",
    energy: 95,
    path: "perfiles/bi",
    showcase: {
      title: "Atlas One ERP",
      slug: "atlas-one-erp",
      teaser: {
        es: "Tableros ejecutivos, ventas por vendedor y por hora y contabilidad para comercios de cercanía.",
        en: "Executive dashboards, sales by seller and by hour, and accounting for neighbourhood stores.",
      },
    },
  },
  {
    id: 3,
    title: { es: "Data Scientist", en: "Data Scientist" },
    date: { es: "Machine Learning", en: "Machine Learning" },
    content: {
      es: "Desarrollo de modelos predictivos y estadísticos aplicados a problemas de negocio. Forecasting de demanda, series temporales y scoring automatizado de leads.",
      en: "Predictive and statistical models applied to business problems. Demand forecasting, time series and automated lead scoring.",
    },
    category: "Data Science",
    icon: BrainCircuit,
    relatedIds: [2, 4],
    status: "in-progress",
    energy: 85,
    path: "perfiles/data-science",
    showcase: {
      title: "ATLAS SENTINEL",
      slug: "atlas-sentinel",
      teaser: {
        es: "Con las mismas 75 patrullas, reubicadas según el riesgo, la cobertura sube 23,6 puntos.",
        en: "With the same 75 patrols, relocated by risk, coverage rises 23.6 points.",
      },
    },
  },
  {
    id: 4,
    title: { es: "AI Solutions Engineer", en: "AI Solutions Engineer" },
    date: { es: "Automation & Products", en: "Automation & Products" },
    content: {
      es: "Cofundador y CEO de Atlas One ERP, a cargo de producto, datos e IA. Integración práctica de LLMs, automatizaciones avanzadas en n8n y arquitecturas ágiles Low-Code/No-Code.",
      en: "Co-founder and CEO of Atlas One ERP, in charge of product, data and AI. Practical LLM integration, advanced n8n automations and agile Low-Code/No-Code architectures.",
    },
    category: "AI",
    icon: Cpu,
    relatedIds: [3, 5],
    status: "completed",
    energy: 90,
    showcase: {
      title: "Atlas Analytics",
      slug: "atlas-analytics",
      teaser: {
        es: "Seis agentes de IA que investigan con fuentes reales: 41 carruseles y ningún link escrito por el modelo.",
        en: "Six AI agents that research real sources: 41 carousels and not one link written by the model.",
      },
    },
  },
  {
    id: 5,
    title: { es: "Market Intelligence & Business Development", en: "Market Intelligence & Business Development" },
    date: { es: "Growth Strategy", en: "Growth Strategy" },
    content: {
      es: "Estrategias de crecimiento basadas en datos, análisis de competidores, funnels de conversión B2B/E-commerce y automatización de retargeting masivo.",
      en: "Data-driven growth strategies, competitor analysis, B2B/e-commerce conversion funnels and large-scale retargeting automation.",
    },
    category: "Business",
    icon: Briefcase,
    relatedIds: [1, 6],
    status: "in-progress",
    energy: 80,
    showcase: {
      title: "Atlas Nexus",
      slug: "atlas-nexus",
      teaser: {
        es: "Inteligencia comercial para comercios chicos, ganadora entre más de 200 equipos (Fiserv × Clover).",
        en: "Commercial intelligence for small stores, the winner among 200+ teams (Fiserv × Clover).",
      },
    },
  },
  {
    id: 6,
    title: { es: "Political Intelligence & Analytics", en: "Political Intelligence & Analytics" },
    date: { es: "Electoral Strategy", en: "Electoral Strategy" },
    content: {
      es: "Análisis estratégico y microsegmentación electoral a través de Atlas Analytics. Modelado de comportamiento de votantes mediante analítica geoespacial (GIS).",
      en: "Strategic analysis and electoral micro-targeting through Atlas Analytics. Voter-behaviour modelling with geospatial analytics (GIS).",
    },
    category: "Politics",
    icon: LineChart,
    relatedIds: [5, 2],
    status: "completed",
    energy: 95,
    path: "perfiles/politics",
    showcase: {
      title: "Atlas CABA",
      slug: "caba-jefatura",
      teaser: {
        es: "Treinta años del voto porteño: el derrumbe del PRO fue de marca, no de territorio.",
        en: "Thirty years of the Buenos Aires vote: PRO's collapse was about the brand, not the territory.",
      },
    },
  },
];

function profilesFor(lang: Lang): OrbitalNode[] {
  return PROFILES.map(({ title, date, content, path, showcase, ...rest }) => ({
    ...rest,
    title: title[lang],
    date: date[lang],
    content: content[lang],
    href: path ? `/${lang}/${path}` : undefined,
    showcase: { title: showcase.title, slug: showcase.slug, teaser: showcase.teaser[lang] },
  }));
}

const COPY = {
  es: { eyebrow: "─── Mis perfiles", h2a: "Seis dimensiones.", h2b: "Una visión.", hint: "Tocá un nodo para ver el perfil y un caso que lo muestra." },
  en: { eyebrow: "─── My profiles", h2a: "Six dimensions.", h2b: "One vision.", hint: "Tap a node to see the profile and a case that shows it." },
} as const;

export function MisPerfiles() {
  const lang: Lang = useLocale() === "en" ? "en" : "es";
  const c = COPY[lang];
  return (
    <section
      id="perfiles"
      style={{
        backgroundColor: "#06080D",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="container-custom">
        <AnimatedSection className="pt-20 sm:pt-32 lg:pt-40 pb-10">
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#8D9AB3",
              marginBottom: "32px",
            }}
          >
            {c.eyebrow}
          </p>
          <h2
            className="font-serif"
            style={{
              textTransform: "uppercase",
              fontSize: "clamp(40px, 5.5vw, 80px)",
              fontWeight: 600,
              color: "#F0F4FB",
              lineHeight: 1.05,
              letterSpacing: "0.02em",
            }}
          >
            {c.h2a}{" "}
            <span>{c.h2b}</span>
          </h2>
          <p
            style={{
              marginTop: "16px",
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              color: "#8D9AB3",
              letterSpacing: "0.04em",
            }}
          >
            {c.hint}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="pb-20 sm:pb-32">
          <RadialOrbitalTimeline timelineData={profilesFor(lang)} />
        </AnimatedSection>
      </div>
    </section>
  );
}
