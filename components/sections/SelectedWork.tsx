"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";

type ArchiveItem = {
  code: string;
  eyebrow: string;
  title: string;
  description: string;
  stack: string[];
  url: string;
  status: "LIVE" | "PRIVATE" | "RESEARCH";
  screenshot?: string;
};

const archive: ArchiveItem[] = [
  {
    code: "ARC-01",
    eyebrow: "PropTech · Argentina",
    title: "Real Estate Intelligence",
    description:
      "Alpha Score per census tract for 4 Argentine cities. Integrates INDEC data, fiscal valuations, and market liquidity metrics.",
    stack: ["Next.js 15", "MapLibre", "PostGIS", "FastAPI"],
    url: "https://real-state-intelligence.vercel.app/",
    status: "LIVE",
    screenshot: "/screenshots/rsi.png",
  },
  {
    code: "ARC-02",
    eyebrow: "Civic Intelligence · GIS",
    title: "Electoral Analytics",
    description:
      "Geospatial electoral platform for Buenos Aires municipalities. Choropleth maps by census tract, volatility scoring, and operational zone segmentation.",
    stack: ["Python", "GeoPandas", "QGIS", "ReportLab"],
    url: "#",
    status: "PRIVATE",
  },
  {
    code: "ARC-03",
    eyebrow: "Pro-bono · Social Impact",
    title: "Fundación CIPE",
    description:
      "Institutional site for youth employment foundation. CMS integration, donation system, volunteer platform, accessible mobile-first design.",
    stack: ["Next.js", "Tailwind CSS", "Vercel", "CMS"],
    url: "https://www.fundacioncipe.com/",
    status: "LIVE",
  },
];

export function SelectedWork() {
  return (
    <section
      id="projects"
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
            ─── ARCHIVE / REF-04
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
            Research & civic tech.
          </h2>
          <p style={{ fontSize: "16px", color: "#8B95A8", lineHeight: 1.7 }}>
            Additional work spanning PropTech, electoral intelligence, and social impact.
          </p>
        </AnimatedSection>

        {/* 3-column grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {archive.map((item, i) => (
            <AnimatedSection key={item.code} delay={i * 0.06}>
              <div
                className="flex flex-col h-full transition-all duration-300 group"
                style={{
                  background: "#0A0B0F",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(74,139,255,0.30)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,255,255,0.06)";
                }}
              >
                {/* Screenshot area — 60% top */}
                <div
                  style={{
                    height: "200px",
                    background: "#06080D",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {item.screenshot ? (
                    <Image
                      src={item.screenshot}
                      alt={item.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, #0A0B0F 0%, rgba(74,139,255,0.06) 100%)",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "10px",
                          letterSpacing: "0.14em",
                          color: "#3A404F",
                        }}
                      >
                        {item.code}
                      </span>
                    </div>
                  )}
                  {/* Status badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "10px",
                        fontWeight: 500,
                        letterSpacing: "0.10em",
                        color: item.status === "LIVE" ? "#00C781" : "#5A6478",
                        background: "rgba(10,11,15,0.80)",
                        border: `1px solid ${item.status === "LIVE" ? "rgba(0,199,129,0.25)" : "rgba(255,255,255,0.08)"}`,
                        padding: "3px 8px",
                        borderRadius: "2px",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  {/* Eyebrow */}
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
                    {item.eyebrow}
                  </p>

                  {/* Title */}
                  <p
                    style={{
                      fontSize: "17px",
                      fontWeight: 500,
                      color: "#F0F4FB",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.3,
                      marginBottom: "10px",
                    }}
                  >
                    {item.title}
                  </p>

                  {/* Desc */}
                  <p
                    style={{
                      fontSize: "13px",
                      lineHeight: 1.7,
                      color: "#8B95A8",
                      marginBottom: "16px",
                      flex: 1,
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Stack mono */}
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      letterSpacing: "0.04em",
                      color: "#5A6478",
                      lineHeight: 1.6,
                      marginBottom: "20px",
                    }}
                  >
                    {item.stack.join(" · ")}
                  </p>

                  {/* CTA */}
                  {item.status === "LIVE" ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-200"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
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
                      VIEW →
                    </a>
                  ) : (
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        letterSpacing: "0.10em",
                        color: "#3A404F",
                      }}
                    >
                      CONFIDENTIAL
                    </span>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
