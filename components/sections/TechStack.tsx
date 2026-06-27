"use client";

import { AnimatedSection } from "@/components/AnimatedSection";

const tiers = [
  {
    code: "CORE / DAILY MASTERY",
    items: [
      "Power BI", "DAX", "SQL", "Python (Pandas)", "Excel",
      "FP&A", "Forecasting", "Cash Flow Modeling", "ROI/IRR/VAN",
    ],
  },
  {
    code: "STRONG / PRODUCTIVE",
    items: [
      "Next.js", "TypeScript", "FastAPI", "PostgreSQL",
      "Tableau", "scikit-learn", "Leaflet", "GIS", "Power Query",
    ],
  },
  {
    code: "GROWING / ACTIVE EXPLORATION",
    items: [
      "LangChain", "OpenAI API", "PostGIS Advanced",
      "TensorFlow", "Three.js", "n8n", "LangGraph",
    ],
  },
  {
    code: "METHODOLOGIES",
    items: [
      "Storytelling with data", "Decision intelligence",
      "Executive KPIs", "ETL design", "Quantitative forecasting",
      "Geospatial analysis", "Scoring & segmentation",
    ],
  },
];

export function TechStack() {
  return (
    <section
      id="stack"
      style={{
        backgroundColor: "#0E1015",
        paddingTop: "160px",
        paddingBottom: "160px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container-custom">
        {/* Header */}
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
            ─── TECHNICAL STACK / REF-06
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
            What I use, daily.
          </h2>
          <p style={{ fontSize: "16px", color: "#8B95A8", lineHeight: 1.7 }}>
            Tiered by mastery, honestly.
          </p>
        </AnimatedSection>

        {/* Matrix */}
        <div className="space-y-16 max-w-3xl">
          {tiers.map((tier, i) => (
            <AnimatedSection key={tier.code} delay={i * 0.06}>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                {/* Tier label */}
                <div className="sm:w-44 flex-shrink-0 pt-0.5">
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      fontWeight: 500,
                      letterSpacing: "0.14em",
                      color: "#4A8BFF",
                      lineHeight: 1.5,
                    }}
                  >
                    {tier.code}
                  </p>
                </div>

                {/* Items — prose style */}
                <div
                  style={{
                    flex: 1,
                    fontSize: "16px",
                    lineHeight: 1.9,
                    color: "#C5CFE2",
                  }}
                >
                  {tier.items.map((item, j) => (
                    <span key={item}>
                      <span
                        className="cursor-default transition-all duration-150"
                        style={{ display: "inline" }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.color = "#F0F4FB";
                          el.style.borderBottom = "1px solid #4A8BFF";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.color = "#C5CFE2";
                          el.style.borderBottom = "1px solid transparent";
                        }}
                      >
                        {item}
                      </span>
                      {j < tier.items.length - 1 && (
                        <span style={{ color: "#3A404F", margin: "0 6px" }}>·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
