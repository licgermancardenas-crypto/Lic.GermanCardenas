"use client";

import React from "react";
import { Terminal, Lightbulb, Trophy } from "lucide-react";

const interests = [
  {
    color: "bg-blue-500",
    label: "Finanzas Cuantitativas",
    detail:
      "Modelado predictivo de activos, valuación corporativa avanzada y estrategias bursátiles.",
  },
  {
    color: "bg-purple-500",
    label: "Inteligencia Artificial",
    detail:
      "Despliegue práctico de agentes y pipelines de automatización operativa profunda (n8n/Python).",
  },
  {
    color: "bg-emerald-500",
    label: "Viticultura de Nicho",
    detail:
      "Estudio y apreciación de varietales selectos como Cabernet Franc y micro-vinificaciones del Valle de Uco.",
  },
];

export function AboutMeBento() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16 relative"
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
          // IDENTITY &amp; BACKGROUND
        </span>
        <h2
          className="font-serif"
          style={{
            fontSize: "clamp(28px, 3.5vw, 42px)",
            fontWeight: 400,
            color: "#F0F4FB",
            letterSpacing: "-0.025em",
            marginTop: "6px",
            lineHeight: 1.1,
          }}
        >
          Sobre Mí
        </h2>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {/* Block 1: Who I am — 2 cols */}
        <div
          className="md:col-span-2 rounded-2xl flex flex-col justify-between group transition-all duration-300"
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(9,9,11,0.5)",
            backdropFilter: "blur(12px)",
            padding: "32px",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.16)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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
              SYSTEM_INIT // QUIÉN SOY
            </div>

            <h3
              className="font-serif"
              style={{
                fontSize: "clamp(18px, 2vw, 22px)",
                fontWeight: 400,
                color: "#F0F4FB",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
              }}
            >
              Transformando datos densos en decisiones estratégicas de negocio.
            </h3>

            <p style={{ fontSize: "14px", color: "#6B7A95", lineHeight: 1.75 }}>
              Soy Licenciado en Dirección de Negocios especializado en Business Intelligence,
              Financial Planning &amp; Analysis (FP&amp;A) y Data Science. Mi enfoque combina la
              rigidez analítica de los modelos financieros con la agilidad técnica de la ingeniería
              de datos y la automatización inteligente.
            </p>
            <p style={{ fontSize: "14px", color: "#6B7A95", lineHeight: 1.75 }}>
              Como fundador, me apasiona conceptualizar arquitecturas de software escalables
              (ERP/CRM) e integrar modelos predictivos y de Inteligencia Artificial para resolver
              ineficiencias críticas del mercado real.
            </p>
          </div>

          <div
            style={{
              marginTop: "24px",
              paddingTop: "16px",
              borderTop: "1px solid rgba(255,255,255,0.05)",
              display: "flex",
              gap: "32px",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "#52525b",
              flexWrap: "wrap",
            }}
          >
            <div>
              <span style={{ color: "#a1a1aa", fontWeight: 600 }}>📍 UBICACIÓN: </span>
              Buenos Aires, AR
            </div>
            <div>
              <span style={{ color: "#a1a1aa", fontWeight: 600 }}>🚀 ROL: </span>
              Founder &amp; Analytics Lead
            </div>
          </div>
        </div>

        {/* Block 2: Action photo — 1 col */}
        <div
          className="relative overflow-hidden rounded-2xl group"
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            background: "#09090b",
            minHeight: "320px",
          }}
        >
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(9,9,11,0.95) 0%, rgba(9,9,11,0.3) 50%, rgba(9,9,11,0.25) 100%)",
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/lace-blockchain-lab.jpg"
            alt="Germán Cárdenas en LACE Blockchain Lab"
            className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700"
            style={{
              filter: "grayscale(100%) contrast(1.15)",
              opacity: 0.55,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLImageElement).style.filter = "grayscale(0%) contrast(1.05)";
              (e.currentTarget as HTMLImageElement).style.opacity = "0.85";
              (e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLImageElement).style.filter = "grayscale(100%) contrast(1.15)";
              (e.currentTarget as HTMLImageElement).style.opacity = "0.55";
              (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
            }}
          />
          <div className="absolute bottom-0 inset-x-0 z-20" style={{ padding: "24px" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#2B6FE8",
                background: "rgba(43,111,232,0.1)",
                border: "1px solid rgba(43,111,232,0.2)",
                padding: "3px 10px",
                borderRadius: "100px",
              }}
            >
              Ecosistema Web3 &amp; Blockchain
            </span>
            <h4
              className="font-serif"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                color: "#F0F4FB",
                marginTop: "10px",
                letterSpacing: "-0.01em",
              }}
            >
              LACE Technology Lab
            </h4>
            <p style={{ fontSize: "11px", color: "#6B7A95", marginTop: "4px", lineHeight: 1.6 }}>
              Modelado de procesos distribuidos y control analítico bajo entornos competitivos de
              alto rendimiento.
            </p>
          </div>
        </div>

        {/* Block 3: Interests — 1 col */}
        <div
          className="rounded-2xl flex flex-col justify-between transition-all duration-300"
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(9,9,11,0.5)",
            backdropFilter: "blur(12px)",
            padding: "24px",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.16)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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
              <Lightbulb style={{ width: "14px", height: "14px", color: "#f59e0b", flexShrink: 0 }} />
              CORE_INTERESTS // INTERESES
            </div>

            <ul style={{ display: "flex", flexDirection: "column", gap: "14px", paddingTop: "4px" }}>
              {interests.map((item) => (
                <li key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <span
                    className={item.color}
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      flexShrink: 0,
                      marginTop: "5px",
                    }}
                  />
                  <span style={{ fontSize: "12px", color: "#6B7A95", lineHeight: 1.65 }}>
                    <strong style={{ color: "#a1a1aa", fontWeight: 600 }}>{item.label}:</strong>{" "}
                    {item.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Block 4: Next milestone — 2 cols */}
        <div
          className="md:col-span-2 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 group"
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(9,9,11,0.5)",
            backdropFilter: "blur(12px)",
            padding: "24px",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.16)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "560px" }}>
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
              <Trophy style={{ width: "14px", height: "14px", color: "#10b981", flexShrink: 0 }} />
              UPCOMING_MILESTONES // TRACCIÓN
            </div>
            <h4
              className="font-serif"
              style={{
                fontSize: "clamp(15px, 1.5vw, 18px)",
                fontWeight: 400,
                color: "#F0F4FB",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              Próximo Desafío: Kaszek Hackathon{" "}
              <span style={{ fontStyle: "italic" }}>(Open Track)</span>
            </h4>
            <p style={{ fontSize: "13px", color: "#6B7A95", lineHeight: 1.7 }}>
              Preparando el despliegue de MVPs analíticos integrales y arquitecturas de datos de
              alto impacto para competir y pitchear frente a los principales líderes de Venture
              Capital de América Latina.
            </p>
          </div>

          <div
            style={{
              flexShrink: 0,
              minWidth: "130px",
              padding: "20px 24px",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(255,255,255,0.02)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "32px",
                fontWeight: 700,
                color: "#F0F4FB",
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              2026
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                color: "#52525b",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                marginTop: "6px",
              }}
            >
              Active Builder
            </span>
          </div>
        </div>
      </div>

      {/* Gallery placeholder */}
      <div style={{ marginTop: "24px", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            color: "#3f3f46",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          // Galería en desarrollo: listo para inyectar registros de pitches, charlas y conferencias corporativas
        </p>
      </div>
    </div>
  );
}

export default AboutMeBento;
