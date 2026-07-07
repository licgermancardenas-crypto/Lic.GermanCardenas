"use client";

import React from "react";
import { Eye } from "lucide-react";

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
        <h2
          className="font-serif"
          style={{
            fontSize: "clamp(34px, 4.5vw, 64px)",
            fontWeight: 400,
            color: "#F0F4FB",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          Sobre mí
        </h2>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Block 1: Manifesto — 2 cols */}
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

        {/* Block 2: Photo — 1 col, full image no crop */}
        <div
          className="rounded-2xl overflow-hidden flex flex-col group transition-all duration-300"
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            background: "#09090b",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.18)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/german-skyline-night.jpg"
            alt="Germán Cárdenas — Chicago skyline at night"
            className="w-full transition-transform duration-700 group-hover:scale-[1.02]"
            style={{ display: "block", height: "auto" }}
          />
          <div
            style={{
              padding: "16px 20px",
              borderTop: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#52525b",
              }}
            >
              Chicago · 360° NORTH
            </span>
          </div>
        </div>

        {/* Block 3: Vision / Philosophy — full width */}
        <div
          className="md:col-span-3 rounded-2xl transition-all duration-300"
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(9,9,11,0.5)",
            backdropFilter: "blur(12px)",
            padding: "28px 36px",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.16)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
          }}
        >
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
              marginBottom: "20px",
            }}
          >
            <Eye style={{ width: "14px", height: "14px", color: "#8b5cf6", flexShrink: 0 }} />
            VISION // FILOSOFÍA
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visionItems.map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: item.color,
                    flexShrink: 0,
                    marginTop: "7px",
                  }}
                />
                <span style={{ fontSize: "13px", color: "#6B7A95", lineHeight: 1.72 }}>
                  <strong style={{ color: "#C5CFE2", fontWeight: 600, display: "block", marginBottom: "4px" }}>
                    {item.label}
                  </strong>
                  {item.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Block 4: Beyond software — manifesto + Forbes Summit photo */}
        <div
          className="md:col-span-3 rounded-2xl transition-all duration-300"
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
          <h3
            className="font-serif"
            style={{
              fontSize: "clamp(16px, 1.8vw, 21px)",
              fontWeight: 400,
              color: "#F0F4FB",
              letterSpacing: "-0.02em",
              lineHeight: 1.35,
              marginBottom: "20px",
            }}
          >
            <span style={{ fontStyle: "italic", color: "#7BA8F5" }}>Más allá</span> de desarrollar software
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
            <p style={{ fontSize: "13.5px", color: "#6B7A95", lineHeight: 1.78 }}>
              Creo que el aprendizaje no termina cuando cierro el editor de código.
            </p>
            <p style={{ fontSize: "13.5px", color: "#6B7A95", lineHeight: 1.78 }}>
              Disfruto participar en conferencias, hackatones, comunidades tecnológicas y espacios
              donde se reúnen emprendedores, investigadores, empresas y profesionales para
              compartir ideas, debatir tendencias y explorar el futuro de la tecnología.
            </p>
            <p style={{ fontSize: "13.5px", color: "#6B7A95", lineHeight: 1.78 }}>
              Cada evento representa una oportunidad para descubrir nuevas perspectivas, conocer
              personas que están construyendo soluciones innovadoras y desafiar mi propia forma de
              pensar.
            </p>
            <p style={{ fontSize: "13.5px", color: "#6B7A95", lineHeight: 1.78 }}>
              Busco rodearme de personas curiosas, con ganas de crear, aprender y generar impacto.
              Estoy convencido de que las mejores oportunidades nacen de una conversación, una
              colaboración o una idea compartida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div
              className="rounded-2xl overflow-hidden group"
              style={{ border: "1px solid rgba(255,255,255,0.08)", background: "#09090b" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/forbes-sostenibilidad-summit.jpg"
                alt="Germán Cárdenas en el Forbes Sostenibilidad Summit"
                className="w-full transition-transform duration-700 group-hover:scale-[1.02]"
                style={{ display: "block", height: "auto" }}
              />
            </div>

            <div>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#7BA8F5",
                  display: "block",
                  marginBottom: "10px",
                }}
              >
                Forbes Sostenibilidad Summit
              </span>
              <p style={{ fontSize: "13.5px", color: "#6B7A95", lineHeight: 1.78 }}>
                Participé en el Forbes Sostenibilidad Summit, un espacio donde líderes de
                empresas, organizaciones y especialistas compartieron cómo la innovación y la
                tecnología están transformando el desarrollo sostenible. Asistir a este tipo de
                encuentros me permite comprender hacia dónde evolucionan las industrias y cómo la
                inteligencia artificial puede convertirse en una herramienta para generar impacto
                real.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutMeBento;
