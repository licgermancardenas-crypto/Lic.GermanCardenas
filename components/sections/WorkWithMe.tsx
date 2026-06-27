"use client";

import { AnimatedSection } from "@/components/AnimatedSection";

const modes = [
  {
    code: "MODE-A",
    type: "FULL-TIME",
    desc: "Senior IC roles in BI, FP&A, and Data Science for multinationals and growing tech companies.",
    availability: "JAN 2026",
    cta: { label: "VIEW CV →", href: "/cv.pdf", download: true },
  },
  {
    code: "MODE-B",
    type: "CONSULTING",
    desc: "Project-based engagements for dashboards, financial models, GIS platforms and AI pipelines.",
    availability: "NOW",
    cta: { label: "AGENDAR →", href: "https://calendly.com/lic-germancardenas", external: true },
  },
  {
    code: "MODE-C",
    type: "ADVISORY",
    desc: "Fractional data leadership for founders and teams that need a senior analytics perspective.",
    availability: "NOW · LIMITED",
    cta: { label: "EMAIL →", href: "mailto:lic.germancardenas@gmail.com" },
  },
];

const channels = [
  { label: "EMAIL",    value: "lic.germancardenas@gmail.com",   href: "mailto:lic.germancardenas@gmail.com" },
  { label: "WHATSAPP", value: "+54 11 5856-2766",               href: "https://wa.me/5491158562766" },
  { label: "CALENDLY", value: "calendly.com/lic-germancardenas", href: "https://calendly.com/lic-germancardenas" },
  { label: "LINKEDIN", value: "/in/german-cardenas-070118175",  href: "https://www.linkedin.com/in/german-cardenas-070118175/" },
];

export function WorkWithMe() {
  return (
    <section
      id="contact"
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
            ─── ENGAGEMENT / REF-08
          </p>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(56px, 7vw, 96px)",
              fontWeight: 400,
              color: "#F0F4FB",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              marginBottom: "20px",
            }}
          >
            Hablemos.
          </h2>
          <p style={{ fontSize: "16px", color: "#8B95A8", lineHeight: 1.7 }}>
            Three ways we can work together.
          </p>
        </AnimatedSection>

        {/* 3 mode cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-20">
          {modes.map((m, i) => (
            <AnimatedSection key={m.code} delay={i * 0.06}>
              <div
                className="h-full flex flex-col transition-all duration-300"
                style={{
                  background: "#0A0B0F",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "8px",
                  padding: "32px",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(74,139,255,0.40)";
                  el.style.background = "#14171F";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,255,255,0.06)";
                  el.style.background = "#0A0B0F";
                }}
              >
                {/* Code */}
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    color: "#4A8BFF",
                    marginBottom: "12px",
                  }}
                >
                  {m.code}
                </p>
                <div
                  style={{
                    height: "1px",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    marginBottom: "20px",
                  }}
                />

                {/* Type */}
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#F0F4FB",
                    letterSpacing: "-0.01em",
                    marginBottom: "16px",
                    lineHeight: 1.2,
                  }}
                >
                  {m.type}
                </p>

                {/* Desc */}
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.7,
                    color: "#8B95A8",
                    marginBottom: "20px",
                    flex: 1,
                  }}
                >
                  {m.desc}
                </p>

                {/* Availability */}
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    letterSpacing: "0.08em",
                    color: "#00C781",
                    marginBottom: "20px",
                  }}
                >
                  Available: {m.availability}
                </p>

                {/* CTA */}
                <a
                  href={m.cta.href}
                  {...(m.cta.download ? { download: true } : {})}
                  {...(m.cta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="inline-flex items-center gap-1 transition-colors duration-200 focus-ring"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    fontWeight: 500,
                    letterSpacing: "0.10em",
                    color: "#4A8BFF",
                    textDecoration: "none",
                    alignSelf: "flex-start",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#F0F4FB";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#4A8BFF";
                  }}
                >
                  {m.cta.label}
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Direct channels */}
        <AnimatedSection delay={0.2}>
          <div
            style={{
              paddingTop: "48px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.14em",
                color: "#5A6478",
                marginBottom: "24px",
              }}
            >
              ─── DIRECT CHANNELS
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {channels.map((c) => (
                <div key={c.label}>
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
                    {c.label}
                  </p>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="transition-colors duration-200 focus-ring"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "13px",
                      letterSpacing: "0.04em",
                      color: "#4A8BFF",
                      textDecoration: "none",
                      wordBreak: "break-all",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#F0F4FB";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#4A8BFF";
                    }}
                  >
                    {c.value}
                  </a>
                </div>
              ))}
            </div>

            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.08em",
                color: "#3A404F",
              }}
            >
              Response time: under 24h. No bots. No filters.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
