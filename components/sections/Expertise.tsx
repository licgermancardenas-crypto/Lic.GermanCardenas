"use client";

import { AnimatedSection } from "@/components/AnimatedSection";

const pillars = [
  {
    code: "01 / DATA ANALYTICS",
    title: "Data Analytics & BI",
    body: "Dashboards ejecutivos, KPIs estratégicos y pipelines ETL que habilitan decisiones operativas en tiempo real. Arquitecturas que consolidan múltiples fuentes de datos en una vista unificada.",
    stack: "Power BI · DAX · SQL · Python · Tableau · ETL",
    result: "−35% TIME ON ANALYSIS",
  },
  {
    code: "02 / FINANCIAL MODELING",
    title: "FP&A & Financial Modeling",
    body: "Modelos de forecasting, flujos de fondos y estructuras de capital con margen de error por debajo del 5%. Análisis de escenarios y sensibilidad para decisiones de inversión de alto impacto.",
    stack: "FP&A · Forecasting · Cash Flow · ROI/IRR/VAN · Excel",
    result: "< 5% MARGIN OF ERROR",
  },
  {
    code: "03 / DATA SCIENCE",
    title: "Data Science & ML",
    body: "Sistemas de scoring, segmentación de cohortes y modelos predictivos que transforman comportamiento histórico en ventaja competitiva. De la exploración al modelo en producción.",
    stack: "scikit-learn · Python · LangChain · OpenAI API · XGBoost",
    result: "+15% CONVERSION RATE",
  },
  {
    code: "04 / AI ENGINEERING",
    title: "AI Engineering & Strategy",
    body: "Integración de LLMs en flujos de trabajo reales: briefings automáticos, detección de anomalías y asistentes de decisión para equipos sin perfil técnico. AI que agrega valor medible.",
    stack: "Next.js · FastAPI · PostgreSQL · GIS · Framer Motion",
    result: "04 PLATFORMS IN PROD",
  },
];

export function Expertise() {
  return (
    <section
      id="expertise"
      style={{
        backgroundColor: "#0A0B0F",
        paddingTop: "160px",
        paddingBottom: "160px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container-custom">
        {/* Section header */}
        <AnimatedSection className="mb-20">
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.14em",
              color: "#4A8BFF",
              marginBottom: "20px",
            }}
          >
            ─── DOMAIN EXPERTISE / REF-02
          </p>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 400,
              color: "#F0F4FB",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: "12px",
            }}
          >
            Four disciplines. One operating system.
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#8B95A8",
              lineHeight: 1.7,
            }}
          >
            How my background compounds across functions.
          </p>
        </AnimatedSection>

        {/* 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {pillars.map((p, i) => (
            <AnimatedSection key={p.code} delay={i * 0.07}>
              <div
                className="h-full transition-all duration-300 cursor-default"
                style={{
                  background: "#0E1015",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "8px",
                  padding: "40px",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "#14171F";
                  el.style.borderColor = "rgba(74,139,255,0.40)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "#0E1015";
                  el.style.borderColor = "rgba(255,255,255,0.06)";
                }}
              >
                {/* Code */}
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    color: "#4A8BFF",
                    marginBottom: "12px",
                  }}
                >
                  {p.code}
                </p>

                {/* Divider */}
                <div
                  style={{
                    height: "1px",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    marginBottom: "20px",
                  }}
                />

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "#F0F4FB",
                    letterSpacing: "-0.01em",
                    marginBottom: "16px",
                    lineHeight: 1.3,
                  }}
                >
                  {p.title}
                </h3>

                {/* Body */}
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "#C5CFE2",
                    marginBottom: "20px",
                  }}
                >
                  {p.body}
                </p>

                {/* Stack label */}
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#5A6478",
                    marginBottom: "8px",
                  }}
                >
                  STACK
                </p>

                {/* Stack items */}
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    letterSpacing: "0.04em",
                    color: "#8B95A8",
                    marginBottom: "24px",
                    lineHeight: 1.6,
                  }}
                >
                  {p.stack}
                </p>

                {/* Result */}
                <div
                  style={{
                    paddingTop: "20px",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      color: "#5A6478",
                      marginBottom: "6px",
                    }}
                  >
                    ▼ RESULT
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "16px",
                      fontWeight: 500,
                      letterSpacing: "0.04em",
                      color: "#00C781",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {p.result}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
