"use client";

import { AnimatedSection } from "@/components/AnimatedSection";

const metrics = [
  { value: "05+",  label: "YEARS",    sub: "▲ ACTIVE",        color: "#00C781" },
  { value: "04",   label: "PLAT.",    sub: "▲ 100% LIVE",     color: "#00C781" },
  { value: "01",   label: "AWARD",    sub: "🏆 1Q 2025",      color: "#F5B544" },
  { value: "1.0M", label: "RECORDS",  sub: "▲ ETL PIPELINE",  color: "#00C781" },
  { value: "24",   label: "REGIONS",  sub: "▲ GIS COVERAGE",  color: "#00C781" },
  { value: "04",   label: "LANG.",    sub: "▲ EN · FR · IT",  color: "#4A8BFF" },
];

export function MetricsBar() {
  return (
    <section
      style={{
        backgroundColor: "#0E1015",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div className="container-custom">
        {/* Header row */}
        <AnimatedSection className="flex items-center justify-between mb-10">
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.14em",
              color: "#5A6478",
            }}
          >
            ─── KEY METRICS
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.10em",
              color: "#5A6478",
            }}
          >
            AS OF JUN 2026
          </p>
        </AnimatedSection>

        {/* 6-column grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {metrics.map((m, i) => (
            <AnimatedSection
              key={m.label}
              delay={i * 0.04}
              className="relative"
            >
              <div
                className="flex flex-col gap-2 py-6 px-4"
                style={{
                  borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}
              >
                {/* Value */}
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "clamp(28px, 3vw, 42px)",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    color: "#F0F4FB",
                    fontVariantNumeric: "tabular-nums",
                    lineHeight: 1,
                  }}
                >
                  {m.value}
                </span>

                {/* Divider */}
                <div
                  style={{
                    height: "1px",
                    width: "32px",
                    backgroundColor: "#4A8BFF",
                  }}
                />

                {/* Label */}
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    color: "#5A6478",
                  }}
                >
                  {m.label}
                </span>

                {/* Sub indicator */}
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.08em",
                    color: m.color,
                  }}
                >
                  {m.sub}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
