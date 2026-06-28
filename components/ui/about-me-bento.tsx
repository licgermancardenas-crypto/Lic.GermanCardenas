"use client";

import React from "react";
import { Terminal, Eye } from "lucide-react";

const visionItems = [
  {
    color: "#2B6FE8",
    label: "No sigo tendencias",
    detail:
      "Construyo sistemas que convierten datos en conocimiento, conocimiento en decisiones y decisiones en impacto real.",
  },
  {
    color: "#8b5cf6",
    label: "Propósito",
    detail:
      "Contribuir al desarrollo de una nueva generación de plataformas donde la IA, los datos y la tecnología potencien la toma de decisiones en empresas, gobiernos y organizaciones.",
  },
  {
    color: "#10b981",
    label: "Impulso",
    detail:
      "Curiosidad analítica constante, experimentación con tecnologías de vanguardia y pensamiento estratégico aplicado.",
  },
];

export function AboutMeBento() {
  return (
    <div
      className="w-full max-w-6xl mx-auto px-4 py-16 relative"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      {/* Section header */}
      <div className="flex flex-col mb-12">
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#2B6FE8",
          }}
        >
          // IDENTITY &amp; SYSTEM PROFILE
        </span>
        <h2
          className="font-serif"
          style={{
            fontSize: "clamp(28px, 4vw, 52px)",
            fontWeight: 400,
            color: "#F0F4FB",
            letterSpacing: "-0.03em",
            marginTop: "8px",
            lineHeight: 1.08,
          }}
        >
          Building the future of{" "}
          <span style={{ fontStyle: "italic" }}>Decision Intelligence.</span>
        </h2>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Block 1: Full-width photo — 3 cols */}
        <div
          className="md:col-span-3 rounded-2xl overflow-hidden flex flex-col group transition-all duration-300"
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            background: "#09090b",
            boxShadow: "0 24px 48px rgba(0,0,0,0.5)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.16)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
          }}
        >
          {/* Image — full color, portrait photo with smart crop */}
          <div
            className="w-full relative overflow-hidden"
            style={{ height: "clamp(320px, 45vw, 520px)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/german-skyline-night.jpg"
              alt="Germán Cárdenas — Chicago skyline at night"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              style={{ objectPosition: "center 20%" }}
            />
            {/* Bottom fade */}
            <div
              className="absolute inset-x-0 bottom-0 pointer-events-none"
              style={{
                height: "120px",
                background: "linear-gradient(to top, #09090b, transparent)",
              }}
            />
          </div>

          {/* Editorial footer */}
          <div
            style={{
              padding: "32px",
              background: "#09090b",
              borderTop: "1px solid rgba(255,255,255,0.05)",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  className="animate-pulse"
                  style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2B6FE8", flexShrink: 0 }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#2B6FE8",
                  }}
                >
                  Decision Intelligence · Builder
                </span>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "#52525b",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  letterSpacing: "0.08em",
                }}
              >
                GERMÁN CÁRDENAS · BUENOS AIRES
              </span>
            </div>
            <p
              style={{
                fontSize: "14px",
                color: "#6B7A95",
                lineHeight: 1.7,
                maxWidth: "760px",
              }}
            >
              Diseño plataformas inteligentes donde convergen inteligencia artificial, datos y
              análisis geoespacial para transformar información en decisiones.
            </p>
          </div>
        </div>

        {/* Block 2: Manifesto — 2 cols */}
        <div
          className="md:col-span-2 rounded-2xl flex flex-col justify-between transition-all duration-300"
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(9,9,11,0.5)",
            backdropFilter: "blur(12px)",
            padding: "36px",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.16)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#6B7A95",
              }}
            >
              <Terminal style={{ width: "14px", height: "14px", color: "#2B6FE8", flexShrink: 0 }} />
              SYSTEM_INIT // MANIFIESTO
            </div>

            <h3
              className="font-serif"
              style={{
                fontSize: "clamp(16px, 1.8vw, 21px)",
                fontWeight: 400,
                color: "#F0F4FB",
                letterSpacing: "-0.02em",
                lineHeight: 1.35,
              }}
            >
              No construyo software únicamente para resolver problemas técnicos. Construyo
              plataformas que ayudan a personas y organizaciones a{" "}
              <span style={{ fontStyle: "italic", color: "#7BA8F5" }}>tomar mejores decisiones.</span>
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{ fontSize: "13.5px", color: "#6B7A95", lineHeight: 1.78 }}>
                Mi trabajo se encuentra en la intersección de la inteligencia artificial, la
                ingeniería de datos, el análisis geoespacial y el desarrollo de software. Me
                apasiona diseñar productos que transforman datos complejos en información clara,
                útil y accionable.
              </p>
              <p style={{ fontSize: "13.5px", color: "#6B7A95", lineHeight: 1.78 }}>
                Creo que los datos adquieren verdadero valor cuando generan contexto, reducen la
                incertidumbre y permiten comprender mejor la realidad. Por eso desarrollo
                soluciones que integran procesamiento de datos, modelos de IA, sistemas
                geoespaciales y visualizaciones interactivas en experiencias intuitivas y
                escalables.
              </p>
              <p style={{ fontSize: "13.5px", color: "#6B7A95", lineHeight: 1.78 }}>
                Disfruto crear productos de punta a punta: desde la arquitectura y el backend
                hasta la experiencia de usuario, la analítica y la infraestructura necesaria
                para llevar una idea a producción.
              </p>
            </div>
          </div>
        </div>

        {/* Block 3: Vision / Philosophy — 1 col */}
        <div
          className="rounded-2xl flex flex-col justify-between transition-all duration-300"
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(9,9,11,0.5)",
            backdropFilter: "blur(12px)",
            padding: "28px",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.16)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#6B7A95",
              }}
            >
              <Eye style={{ width: "14px", height: "14px", color: "#8b5cf6", flexShrink: 0 }} />
              VISION // FILOSOFÍA
            </div>

            <ul style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {visionItems.map((item) => (
                <li key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: item.color,
                      flexShrink: 0,
                      marginTop: "6px",
                    }}
                  />
                  <span style={{ fontSize: "12px", color: "#6B7A95", lineHeight: 1.72 }}>
                    <strong style={{ color: "#C5CFE2", fontWeight: 600, display: "block", marginBottom: "2px" }}>
                      {item.label}
                    </strong>
                    {item.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutMeBento;
