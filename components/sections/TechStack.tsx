"use client";

import { AnimatedSection } from "@/components/AnimatedSection";

const levels = [
  {
    label: "CORE",
    sublabel: "uso diario · dominio profundo",
    items: [
      "Power BI", "DAX", "SQL", "Python", "Pandas", "Excel",
      "FP&A", "Forecasting", "Cash Flow Modeling",
    ],
  },
  {
    label: "STRONG",
    sublabel: "uso frecuente · productivo",
    items: [
      "Next.js", "TypeScript", "FastAPI", "PostgreSQL",
      "Tableau", "scikit-learn", "Leaflet", "GIS", "React",
    ],
  },
  {
    label: "GROWING",
    sublabel: "exploración activa con resultados",
    items: [
      "LangChain", "OpenAI API", "PostGIS", "TensorFlow",
      "Three.js", "n8n workflows", "MapLibre", "D3.js",
    ],
  },
  {
    label: "METODOLOGÍAS",
    sublabel: "frameworks de pensamiento",
    items: [
      "Storytelling con datos", "Decision intelligence",
      "KPIs ejecutivos", "ETL design", "Forecasting cuantitativo",
      "Análisis geoespacial", "Scoring & segmentación",
    ],
  },
];

export function TechStack() {
  return (
    <section
      id="stack"
      className="py-40"
      style={{ backgroundColor: "#06080D", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="container-custom">
        <div className="max-w-4xl">
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
              ─── Stack técnico
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
              Las herramientas del trabajo.
            </h2>
          </AnimatedSection>

          <div className="space-y-14">
            {levels.map((level, i) => (
              <AnimatedSection key={level.label} delay={i * 0.07}>
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                  {/* Level label */}
                  <div className="sm:w-36 flex-shrink-0 pt-1">
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "#4A8BFF",
                        marginBottom: "4px",
                      }}
                    >
                      {level.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "10px",
                        letterSpacing: "0.06em",
                        color: "#3F4A5F",
                        lineHeight: 1.5,
                      }}
                    >
                      {level.sublabel}
                    </p>
                  </div>

                  {/* Items as editorial text */}
                  <div
                    style={{
                      flex: 1,
                      fontSize: "17px",
                      lineHeight: 1.9,
                      color: "#C5CFE2",
                    }}
                  >
                    {level.items.map((item, j) => (
                      <span key={item}>
                        <span
                          className="group cursor-default transition-colors duration-200"
                          style={{ display: "inline" }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.color = "#F0F4FB";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.color = "#C5CFE2";
                          }}
                        >
                          {item}
                        </span>
                        {j < level.items.length - 1 && (
                          <span style={{ color: "#3F4A5F", margin: "0 8px" }}>·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
