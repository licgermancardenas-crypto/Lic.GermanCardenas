"use client";

import { TrendingUp, BarChart3, BrainCircuit, Cpu, LineChart, Briefcase } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import RadialOrbitalTimeline, { type OrbitalNode } from "@/components/ui/radial-orbital-timeline";

const profileData: OrbitalNode[] = [
  {
    id: 1,
    title: "FP&A Specialist",
    date: "Core Business",
    content:
      "Financial Planning & Analysis. Modelos de proyección financiera, valuación de proyectos de inversión (Private Equity), flujos de fondos y análisis de portafolios bursátiles.",
    category: "Finance",
    icon: TrendingUp,
    relatedIds: [2, 5],
    status: "completed",
    energy: 100,
  },
  {
    id: 2,
    title: "Corporate BI & Data Analyst",
    date: "Data Analytics",
    content:
      "Construcción de pipelines de datos integrales (ETL), modelado relacional y dashboards ejecutivos en Power BI para control operativo y optimización de márgenes.",
    category: "BI",
    icon: BarChart3,
    relatedIds: [1, 3],
    status: "completed",
    energy: 95,
  },
  {
    id: 3,
    title: "Data Scientist",
    date: "Machine Learning",
    content:
      "Desarrollo de modelos predictivos y estadísticos aplicados a problemas de negocio. Forecasting de demanda, series temporales y scoring automatizado de leads.",
    category: "Data Science",
    icon: BrainCircuit,
    relatedIds: [2, 4],
    status: "in-progress",
    energy: 85,
  },
  {
    id: 4,
    title: "AI Solutions Engineer",
    date: "Automation & Products",
    content:
      "Líder de desarrollo del ecosistema modular Atlas One ERP. Integración práctica de LLMs, automatizaciones avanzadas en n8n y arquitecturas ágiles Low-Code/No-Code.",
    category: "AI",
    icon: Cpu,
    relatedIds: [3, 5],
    status: "completed",
    energy: 90,
  },
  {
    id: 5,
    title: "Market Intelligence & BizDev",
    date: "Growth Strategy",
    content:
      "Estrategias de crecimiento basadas en datos, análisis de competidores, funnels de conversión B2B/E-commerce y automatización de retargeting masivo.",
    category: "Business",
    icon: Briefcase,
    relatedIds: [1, 6],
    status: "in-progress",
    energy: 80,
  },
  {
    id: 6,
    title: "Political Intelligence & Analytics",
    date: "Electoral Strategy",
    content:
      "Análisis estratégico y microsegmentación electoral a través de Atlas Analytics. Modelado de comportamiento de votantes mediante analítica geoespacial (GIS).",
    category: "Politics",
    icon: LineChart,
    relatedIds: [5, 2],
    status: "completed",
    energy: 95,
  },
];

export function MisPerfiles() {
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
              color: "#6B7A95",
              marginBottom: "32px",
            }}
          >
            ─── Mis perfiles
          </p>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(40px, 5.5vw, 80px)",
              fontWeight: 400,
              color: "#F0F4FB",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Seis dimensiones.{" "}
            <span style={{ fontStyle: "italic" }}>Una visión.</span>
          </h2>
          <p
            style={{
              marginTop: "16px",
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              color: "#6B7A95",
              letterSpacing: "0.04em",
            }}
          >
            Hacé clic en cualquier nodo para explorar mis especialidades.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="pb-20 sm:pb-32">
          <RadialOrbitalTimeline timelineData={profileData} />
        </AnimatedSection>
      </div>
    </section>
  );
}
