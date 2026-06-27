"use client";

import { AnimatedSection } from "@/components/AnimatedSection";

const ledger = [
  {
    period: "OCT 2025 — NOW",
    role: "BI & FP&A Analyst",
    company: "AgroJuntos",
    industry: "Agroindustria · Remote",
    outcomes: [
      "▲ −35% processing time via Python ETL",
      "▲ +18% forecast precision",
      "▲ AI-assisted CRM B2B built",
    ],
    active: true,
  },
  {
    period: "AUG 2025 — OCT 2025",
    role: "Commercial BI Analyst",
    company: "Atomik",
    industry: "Retail · 18 stores",
    outcomes: [
      "▲ −30% analysis time via Power BI",
      "▲ +15% product rotation",
      "▲ +10% margin per category",
    ],
    active: false,
  },
  {
    period: "APR 2025 — AUG 2025",
    role: "Commercial Analyst",
    company: "CyE (4 Nortes)",
    industry: "Retail · 12 stores",
    outcomes: [
      "▲ +15% sales via CRM + WhatsApp API",
      "▲ −30% report generation time",
      "▲ Daily cash flow automation",
    ],
    active: false,
  },
  {
    period: "SEP 2024 — MAR 2025",
    role: "Commercial Analyst",
    company: "Grupo Dietrich",
    industry: "Automotive · 20K leads/month",
    outcomes: [
      "▲ +15% lead conversion (scoring model)",
      "▲ −25% reporting time for management",
      "▲ Historical lead recovery campaign",
    ],
    active: false,
  },
  {
    period: "JUN 2023 — JUL 2024",
    role: "Administrative-Financial Analyst",
    company: "Wall Street Group",
    industry: "Real Estate · 10+ projects",
    outcomes: [
      "▲ ROI/IRR models < 5% error margin",
      "▲ +8% financial efficiency",
      "▲ −12% total cost via vendor negotiation",
    ],
    active: false,
  },
  {
    period: "JAN 2021 — APR 2023",
    role: "Sales & Finance Analyst",
    company: "Florida Trading Co.",
    industry: "Medical imports · B2B/B2C",
    outcomes: [
      "▲ +15% forecast precision (cash flow)",
      "▲ +10% margin by channel",
      "▲ −8% annual cost via intl. sourcing",
    ],
    active: false,
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      style={{
        backgroundColor: "#0A0B0F",
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
            ─── PROFESSIONAL LEDGER / REF-05
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
            Six years. Six industries.
          </h2>
          <p style={{ fontSize: "16px", color: "#8B95A8", lineHeight: 1.7 }}>
            A track record of compounding impact.
          </p>
        </AnimatedSection>

        {/* Ledger table */}
        <div>
          {/* Table header */}
          <AnimatedSection>
            <div
              className="hidden md:grid md:grid-cols-[200px_1fr_1fr]"
              style={{
                paddingBottom: "12px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                marginBottom: "0",
              }}
            >
              {["PERIOD", "ROLE / COMPANY", "KEY OUTCOMES"].map((h) => (
                <p
                  key={h}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    color: "#5A6478",
                    paddingRight: "24px",
                  }}
                >
                  {h}
                </p>
              ))}
            </div>
          </AnimatedSection>

          {/* Rows */}
          {ledger.map((e, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div
                className="grid md:grid-cols-[200px_1fr_1fr] py-8 transition-colors duration-200 cursor-default"
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  gap: "0",
                }}
                onMouseEnter={(el) => {
                  (el.currentTarget as HTMLElement).style.backgroundColor = "#0E1015";
                }}
                onMouseLeave={(el) => {
                  (el.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                }}
              >
                {/* Period */}
                <div style={{ paddingRight: "24px", paddingBottom: "12px" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      letterSpacing: "0.06em",
                      color: e.active ? "#4A8BFF" : "#5A6478",
                      fontVariantNumeric: "tabular-nums",
                      lineHeight: 1.5,
                    }}
                  >
                    {e.period}
                  </p>
                  {e.active && (
                    <div className="flex items-center gap-1.5 mt-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{
                          backgroundColor: "#00C781",
                          animation: "pulse-live 2s ease-in-out infinite",
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "10px",
                          letterSpacing: "0.10em",
                          color: "#00C781",
                        }}
                      >
                        ACTIVE
                      </span>
                    </div>
                  )}
                </div>

                {/* Role + Company */}
                <div style={{ paddingRight: "24px", paddingBottom: "12px" }}>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#F0F4FB",
                      marginBottom: "4px",
                      lineHeight: 1.3,
                    }}
                  >
                    {e.role}
                  </p>
                  <p style={{ fontSize: "14px", color: "#4A8BFF", marginBottom: "4px" }}>
                    {e.company}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      letterSpacing: "0.06em",
                      color: "#5A6478",
                    }}
                  >
                    {e.industry}
                  </p>
                </div>

                {/* Outcomes */}
                <div>
                  {e.outcomes.map((o, j) => (
                    <p
                      key={j}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "12px",
                        letterSpacing: "0.04em",
                        color: "#8B95A8",
                        lineHeight: 1.6,
                        marginBottom: "4px",
                      }}
                    >
                      <span style={{ color: "#00C781" }}>{o.slice(0, 1)}</span>
                      {o.slice(1)}
                    </p>
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
