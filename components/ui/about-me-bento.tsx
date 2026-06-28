"use client";

import React from "react";
import { Terminal, Lightbulb } from "lucide-react";

const interests = [
  {
    color: "bg-blue-500",
    label: "Finanzas Cuantitativas",
    detail: "Modelos bursátiles y flujos dinámicos de caja.",
  },
  {
    color: "bg-purple-500",
    label: "Sistemas Modulares",
    detail: "Arquitecturas limpias de control tipo ERP/CRM.",
  },
  {
    color: "bg-emerald-500",
    label: "Viticultura Fina",
    detail: "Análisis de varietales como Cabernet Franc del Valle de Uco.",
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
          // IDENTITY &amp; TRACK RECORD
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Block 1: Full-width cinematic photo — 3 cols */}
        <div
          className="md:col-span-3 rounded-2xl overflow-hidden flex flex-col group transition-all duration-300"
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(9,9,11,0.5)",
            boxShadow: "0 24px 48px rgba(0,0,0,0.4)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.16)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
          }}
        >
          {/* Image — full color, no filters */}
          <div
            className="w-full relative overflow-hidden"
            style={{ aspectRatio: "16/9", maxHeight: "420px" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/lace-blockchain-lab.jpg"
              alt="Germán Cárdenas en LACE Blockchain Ecosystem"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
            />
            {/* Bottom fade to blend with the text section */}
            <div
              className="absolute inset-x-0 bottom-0 pointer-events-none"
              style={{
                height: "96px",
                background: "linear-gradient(to top, #09090b, transparent)",
              }}
            />
          </div>

          {/* Caption / editorial footer */}
          <div
            style={{
              padding: "32px",
              background: "#09090b",
              borderTop: "1px solid rgba(255,255,255,0.05)",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  className="animate-pulse"
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#2B6FE8",
                    flexShrink: 0,
                  }}
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
                  Ecosistema Web3 &amp; Blockchain
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
                LACE LABS · HACKATHON LIVE DEMO
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <h3
                className="font-serif"
                style={{
                  fontSize: "clamp(17px, 2vw, 22px)",
                  fontWeight: 400,
                  color: "#F0F4FB",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.25,
                }}
              >
                Construyendo Soluciones Tecnológicas de Alto Rendimiento en Tiempo Real
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "#6B7A95",
                  lineHeight: 1.75,
                  maxWidth: "860px",
                }}
              >
                Participación activa en el desarrollo, modelado de procesos analíticos y simulación
                de flujos financieros dentro del ecosistema descentralizado de LACE. Enfoque directo
                en testing bajo presión, diseño de arquitecturas de datos sólidas y despliegue ágil
                de MVPs corporativos listos para producción.
              </p>
            </div>
          </div>
        </div>

        {/* Block 2: Core profile — 2 cols */}
        <div
          className="md:col-span-2 rounded-2xl flex flex-col justify-between transition-all duration-300"
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
              SYSTEM_INIT // CORE PROFILE
            </div>
            <h3
              className="font-serif"
              style={{
                fontSize: "clamp(17px, 1.8vw, 20px)",
                fontWeight: 400,
                color: "#F0F4FB",
                letterSpacing: "-0.02em",
                lineHeight: 1.3,
              }}
            >
              Especialista en Dirección de Negocios,{" "}
              <span style={{ fontStyle: "italic" }}>Business Intelligence y Finanzas.</span>
            </h3>
            <p style={{ fontSize: "14px", color: "#6B7A95", lineHeight: 1.75 }}>
              Mi enfoque profesional equilibra la precisión contable de los modelos financieros
              cuantitativos con la potencia de la ciencia de datos moderna. Diseño pipelines
              estructurados de datos (ETL), lógicas dinámicas en Power BI/SQL, e integro
              automatizaciones nativas con Inteligencia Artificial aplicadas directamente a resolver
              ineficiencias del mercado corporativo y PyMEs.
            </p>
          </div>

          <div
            style={{
              marginTop: "24px",
              paddingTop: "16px",
              borderTop: "1px solid rgba(255,255,255,0.05)",
              display: "flex",
              flexWrap: "wrap",
              gap: "24px",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "#52525b",
            }}
          >
            <div>
              <span style={{ color: "#a1a1aa" }}>📍 UBICACIÓN: </span>Buenos Aires, AR
            </div>
            <div>
              <span style={{ color: "#a1a1aa" }}>🚀 CONECTOR: </span>BI &amp; Financial Modeler
            </div>
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
              FOCUS // INTERESES
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

      </div>
    </div>
  );
}

export default AboutMeBento;
