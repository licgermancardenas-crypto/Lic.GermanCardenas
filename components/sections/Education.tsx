"use client";

import { AnimatedSection } from "@/components/AnimatedSection";

const education = [
  {
    code: "EDU-01",
    degree: "Lic. en Dirección de Negocios",
    institution: "Universidad UCES",
    period: "2019 – 2024",
    status: "GRADUATED",
  },
  {
    code: "EDU-02",
    degree: "Asesor Global de Inversiones",
    institution: "Instituto de Capacitación Bursátil",
    period: "2021 – 2022",
    status: "CERTIFIED",
  },
];

const certifications = [
  {
    code: "CERT-01",
    name: "Financial Forecasting with Analytics",
    issuer: "LinkedIn Learning",
    year: "2024",
  },
  {
    code: "CERT-02",
    name: "Building KPIs for Data-Driven Strategy",
    issuer: "LinkedIn Learning",
    year: "2024",
  },
  {
    code: "CERT-03",
    name: "Excel and ChatGPT: Data Analysis Power Tips",
    issuer: "LinkedIn Learning",
    year: "2024",
  },
  {
    code: "CERT-04",
    name: "Non-Technical Skills of Effective Data Scientists",
    issuer: "LinkedIn Learning",
    year: "2024",
  },
  {
    code: "CERT-05",
    name: "Asesor Global de Inversiones",
    issuer: "ICB Argentina",
    year: "2022",
  },
];

const languages = [
  { code: "ES", name: "Español",  level: "NATIVE",        filled: 12, total: 12 },
  { code: "EN", name: "English",  level: "PROFESSIONAL",  filled: 10, total: 12 },
  { code: "FR", name: "Français", level: "INTERMEDIATE",  filled: 7,  total: 12 },
  { code: "IT", name: "Italiano", level: "BASIC",         filled: 4,  total: 12 },
];

export function Education() {
  return (
    <section
      id="education"
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
            ─── CREDENTIALS / REF-07
          </p>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 400,
              color: "#F0F4FB",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Formation & credentials.
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Education */}
          <AnimatedSection>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.14em",
                color: "#5A6478",
                marginBottom: "20px",
              }}
            >
              ─── EDUCATION
            </p>
            <div className="space-y-8">
              {education.map((e) => (
                <div
                  key={e.code}
                  style={{
                    paddingBottom: "24px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      color: "#4A8BFF",
                      marginBottom: "10px",
                    }}
                  >
                    ─── {e.code}
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "#F0F4FB",
                      marginBottom: "6px",
                      lineHeight: 1.4,
                    }}
                  >
                    {e.degree}
                  </p>
                  <p style={{ fontSize: "13px", color: "#8B95A8", marginBottom: "6px" }}>
                    {e.institution}
                  </p>
                  <div className="flex items-center gap-3">
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        letterSpacing: "0.06em",
                        color: "#5A6478",
                      }}
                    >
                      {e.period}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "10px",
                        letterSpacing: "0.10em",
                        color: "#00C781",
                        border: "1px solid rgba(0,199,129,0.25)",
                        padding: "2px 8px",
                        borderRadius: "2px",
                      }}
                    >
                      {e.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Certifications */}
          <AnimatedSection delay={0.07}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.14em",
                color: "#5A6478",
                marginBottom: "20px",
              }}
            >
              ─── CERTIFICATIONS
            </p>
            <div className="space-y-5">
              {certifications.map((c) => (
                <div
                  key={c.code}
                  style={{
                    paddingBottom: "16px",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      letterSpacing: "0.10em",
                      color: "#5A6478",
                      marginBottom: "6px",
                    }}
                  >
                    {c.code}
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "#C5CFE2",
                      lineHeight: 1.4,
                      marginBottom: "4px",
                    }}
                  >
                    {c.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      letterSpacing: "0.04em",
                      color: "#5A6478",
                    }}
                  >
                    {c.issuer} · {c.year}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Languages */}
          <AnimatedSection delay={0.14}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.14em",
                color: "#5A6478",
                marginBottom: "20px",
              }}
            >
              ─── LANGUAGES
            </p>
            <div className="space-y-8">
              {languages.map((l) => (
                <div key={l.code}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "#4A8BFF",
                          letterSpacing: "0.08em",
                        }}
                      >
                        {l.code}
                      </span>
                      <span style={{ fontSize: "14px", color: "#C5CFE2" }}>
                        {l.name}
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "10px",
                        fontWeight: 500,
                        letterSpacing: "0.10em",
                        color: "#5A6478",
                      }}
                    >
                      {l.level}
                    </span>
                  </div>
                  {/* Fluency bar — mono blocks */}
                  <div className="flex gap-1">
                    {Array.from({ length: l.total }).map((_, j) => (
                      <div
                        key={j}
                        style={{
                          flex: 1,
                          height: "6px",
                          borderRadius: "1px",
                          backgroundColor:
                            j < l.filled ? "#4A8BFF" : "rgba(255,255,255,0.06)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
