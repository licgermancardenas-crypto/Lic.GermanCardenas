"use client";

import { AnimatedSection } from "@/components/AnimatedSection";

const pillars = [
  {
    num: "01",
    title: "Data Analytics & BI",
    body: "Dashboards ejecutivos, KPIs estratégicos y pipelines ETL que habilitan decisiones operativas en tiempo real. Arquitecturas que consolidan múltiples fuentes de datos en una vista unificada.",
    stack: "Power BI · DAX · SQL · Python · Tableau · Excel",
    result: "−35% tiempo de análisis gerencial",
    colSpan: "lg:col-span-5",
  },
  {
    num: "02",
    title: "Financial Modeling & FP&A",
    body: "Modelos de forecasting, flujos de fondos y estructuras de capital que reducen el margen de error por debajo del 5%. Análisis de escenarios y sensibilidad para decisiones de inversión de alto impacto.",
    stack: "FP&A · Forecasting · Cash Flow · ROI/IRR/VAN · Excel",
    result: "Modelos con < 5% margen de error",
    colSpan: "lg:col-span-7",
  },
  {
    num: "03",
    title: "Data Science & ML",
    body: "Sistemas de scoring, segmentación de cohortes y modelos predictivos que transforman comportamiento histórico en ventaja competitiva. De la exploración al modelo en producción.",
    stack: "scikit-learn · Python · LangChain · OpenAI API · XGBoost",
    result: "+15% tasa de conversión con lead scoring",
    colSpan: "lg:col-span-7",
  },
  {
    num: "04",
    title: "AI Engineering & Strategy",
    body: "Integración de LLMs en flujos de trabajo reales: briefings automáticos, detección de anomalías y asistentes de decisión para equipos sin perfil técnico. AI que agrega valor medible.",
    stack: "Next.js · FastAPI · PostgreSQL · GIS · Framer Motion",
    result: "4 plataformas IA en producción",
    colSpan: "lg:col-span-5",
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="py-40 md:py-40" style={{ backgroundColor: "#0A0F1A" }}>
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="mb-20">
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#6B7A95",
              marginBottom: "24px",
            }}
          >
            ─── Áreas de dominio
          </p>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 400,
              color: "#F0F4FB",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Cuatro pilares.{" "}
            <span style={{ fontStyle: "italic" }}>Un sistema.</span>
          </h2>
        </AnimatedSection>

        {/* Asymmetric 2x2 grid */}
        <div className="grid lg:grid-cols-12 gap-5">
          {pillars.map((p, i) => (
            <AnimatedSection key={p.num} delay={i * 0.08} className={p.colSpan}>
              <div
                className="h-full group transition-all duration-[400ms] cursor-default"
                style={{
                  background: "#0F1623",
                  border: "1px solid rgba(255,255,255,0.04)",
                  borderRadius: "24px",
                  padding: "48px 40px",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "#131B2B";
                  el.style.borderColor = "rgba(74,139,255,0.15)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "#0F1623";
                  el.style.borderColor = "rgba(255,255,255,0.04)";
                }}
              >
                {/* Large display number */}
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "96px",
                    fontWeight: 400,
                    color: "rgba(240,244,251,0.08)",
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    marginBottom: "-8px",
                    userSelect: "none",
                  }}
                >
                  {p.num}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "32px",
                    fontWeight: 500,
                    color: "#F0F4FB",
                    letterSpacing: "-0.01em",
                    marginBottom: "16px",
                    lineHeight: 1.2,
                  }}
                >
                  {p.title}
                </h3>

                {/* Thin divider */}
                <div
                  style={{
                    height: "1px",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    marginBottom: "24px",
                  }}
                />

                {/* Body */}
                <p
                  style={{
                    fontSize: "17px",
                    lineHeight: 1.7,
                    color: "#C5CFE2",
                    marginBottom: "20px",
                  }}
                >
                  {p.body}
                </p>

                {/* Stack as meta text */}
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#6B7A95",
                    marginBottom: "24px",
                    lineHeight: 1.9,
                  }}
                >
                  {p.stack}
                </p>

                {/* Highlighted result */}
                <div
                  className="flex items-center gap-3"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "13px",
                    color: "#4A8BFF",
                  }}
                >
                  <span style={{ opacity: 0.5 }}>▶</span>
                  {p.result}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
