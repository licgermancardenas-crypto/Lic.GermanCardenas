"use client";

import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  FileSpreadsheet,
  Building2,
  Layers,
  BarChart3,
  AlertTriangle,
  Maximize2,
  X,
} from "lucide-react";

const financialStack = [
  {
    title: "Modelos Financieros Dinámicos",
    subtitle: "Ingeniería y Simulación",
    description:
      "Arquitectura de modelos de proyección financiera flexibles y escalables a medida de la estructura del negocio, permitiendo simular múltiples horizontes operativos con solidez matemática.",
    icon: TrendingUp,
    badge: "Core Mastery",
    image: "/fpa-balance-situacion.png",
    imageLabel: "Modelado de Estructura de Balance de Situación (Horizontes 2020-2027)",
  },
  {
    title: "Advanced Excel & VBA",
    subtitle: "Automatización & Motores de Cálculo",
    description:
      "Dominio avanzado de hojas de cálculo complejas, funciones lógicas anidadas, macros complejas y optimización de flujos mediante código para eliminar tareas manuales repetitivas.",
    icon: FileSpreadsheet,
    badge: "Expert Level",
    image: "/fpa-excel-vba-heatmap.png",
    imageLabel: "Control de Gestión Avanzado, Mapas de Calor Estadísticos y Sparklines Integrados",
  },
  {
    title: "Valuación de Empresas (DCF)",
    subtitle: "Corporate Finance",
    description:
      "Evaluación técnica de unidades de negocio y proyectos mediante Flujos de Fondos Descontados (DCF), costo de capital (WACC) y múltiplos de mercado para la toma de decisiones.",
    icon: Building2,
    badge: "Advanced Valuation",
    image: "/fpa-dcf-cocacola.png",
    imageLabel: "Valuación Corporativa mediante Free Cash Flow Yield — Caso Analítico Coca-Cola Co.",
  },
  {
    title: "Three-Statement Forecasting",
    subtitle: "Proyección Integrada",
    description:
      "Vinculación dinámica de los tres estados contables fundamentales: Income Statement (P&L), Balance Sheet y Cash Flow. Sincronización perfecta de lógica financiera corporativa.",
    icon: Layers,
    badge: "Industry Standard",
    image: "/fpa-three-statement.png",
    imageLabel: "Integración Dinámica de Estados Contables Fundamentales (Sincronización P&L y Balance)",
  },
  {
    title: "Reporting Ejecutivo & BI",
    subtitle: "Visualización & Analytics",
    description:
      "Traducción de métricas financieras densas en dashboards ejecutivos de alta fidelidad, uniendo la precisión de los números contables con la agilidad de la inteligencia de datos.",
    icon: BarChart3,
    badge: "Data Driven",
    image: "/fpa-reporting-bi.png",
    imageLabel: "Predictive Analytics — Modelo de Pronóstico Lineal Algorítmico de Demanda",
  },
  {
    title: "Análisis de Sensibilidad",
    subtitle: "Gestión de Riesgo & Escenarios",
    description:
      "Modelado de escenarios estresados (Bull/Bear cases) mediante tablas de datos y herramientas de simulación para evaluar el impacto instantáneo de variables macro en el flujo libre de caja.",
    icon: AlertTriangle,
    badge: "Stress Testing",
    image: "/fpa-sensibilidad-escenarios.png",
    imageLabel: "Simulación de Escenarios Mensuales Estresados (Optimista/Base) e Impacto Fiscal Local",
  },
];

interface ActiveImage {
  url: string;
  label: string;
}

function GlassCard({
  item,
  onOpen,
}: {
  item: (typeof financialStack)[number];
  onOpen: () => void;
}) {
  const IconComponent = item.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden rounded-3xl cursor-pointer flex flex-col justify-between min-h-[280px] p-6"
      style={{
        background: "rgba(6, 14, 52, 0.58)",
        backdropFilter: "blur(22px) saturate(170%)",
        border: hovered
          ? "1px solid rgba(59, 130, 246, 0.45)"
          : "1px solid rgba(255, 255, 255, 0.09)",
        boxShadow: hovered
          ? "0 0 32px rgba(0, 82, 255, 0.30), 0 0 72px rgba(0, 82, 255, 0.14), inset 0 1px 0 rgba(147, 197, 253, 0.14)"
          : "inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Passive internal glow — top-left refraction */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 8% 0%, rgba(59,130,246,0.13) 0%, transparent 65%)",
          opacity: hovered ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Active internal glow — brighter on hover */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 15% 0%, rgba(99,160,255,0.22) 0%, rgba(59,130,246,0.06) 45%, transparent 70%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Top shimmer line */}
      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{
          background: hovered
            ? "linear-gradient(to right, transparent 5%, rgba(147,197,253,0.55) 40%, rgba(147,197,253,0.55) 60%, transparent 95%)"
            : "linear-gradient(to right, transparent 10%, rgba(255,255,255,0.12) 50%, transparent 90%)",
          transition: "background 0.3s ease",
        }}
      />

      {/* ── CONTENT ── */}
      <div className="relative z-10">
        {/* Top row: icon + badge */}
        <div className="flex items-center justify-between mb-5">
          {/* Icon container */}
          <div
            style={{
              padding: "10px",
              borderRadius: "12px",
              background: hovered
                ? "rgba(59, 130, 246, 0.18)"
                : "rgba(255, 255, 255, 0.05)",
              border: hovered
                ? "1px solid rgba(59, 130, 246, 0.35)"
                : "1px solid rgba(255, 255, 255, 0.07)",
              color: hovered ? "rgba(147, 197, 253, 1)" : "rgba(148, 163, 184, 0.8)",
              transition: "all 0.3s ease",
            }}
          >
            <IconComponent style={{ width: "18px", height: "18px" }} />
          </div>

          {/* Badge — micro glass */}
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "4px 10px",
              borderRadius: "999px",
              background: hovered
                ? "rgba(59, 130, 246, 0.14)"
                : "rgba(255, 255, 255, 0.04)",
              border: hovered
                ? "1px solid rgba(59, 130, 246, 0.32)"
                : "1px solid rgba(255, 255, 255, 0.08)",
              color: hovered ? "rgba(147, 197, 253, 0.95)" : "rgba(148, 163, 184, 0.6)",
              backdropFilter: "blur(8px)",
              transition: "all 0.3s ease",
            }}
          >
            {item.badge}
          </span>
        </div>

        {/* Text hierarchy */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <h4
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: hovered ? "#ffffff" : "#f1f5f9",
              lineHeight: 1.3,
              transition: "color 0.3s ease",
            }}
          >
            {item.title}
          </h4>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: hovered ? "rgba(147, 197, 253, 0.9)" : "rgba(96, 165, 250, 0.7)",
              transition: "color 0.3s ease",
            }}
          >
            {item.subtitle}
          </p>
          <p
            style={{
              fontSize: "12px",
              lineHeight: 1.65,
              color: "rgba(203, 213, 225, 0.65)",
              paddingTop: "4px",
            }}
          >
            {item.description}
          </p>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <div
        className="relative z-10 mt-5 pt-4 flex items-center justify-between"
        style={{
          borderTop: hovered
            ? "1px solid rgba(59, 130, 246, 0.18)"
            : "1px solid rgba(255, 255, 255, 0.05)",
          transition: "border-color 0.3s ease",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            color: hovered ? "rgba(147, 197, 253, 0.95)" : "rgba(100, 116, 139, 0.8)",
            transition: "color 0.3s ease",
          }}
        >
          <Maximize2 style={{ width: "11px", height: "11px" }} />
          Ver Modelo Real
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9px",
            color: hovered ? "rgba(100, 116, 139, 0.8)" : "rgba(71, 85, 105, 0.6)",
            transition: "color 0.3s ease",
          }}
        >
          [Excel.xlsx]
        </span>
      </div>
    </div>
  );
}

export function FinancialStackCards() {
  const [activeImage, setActiveImage] = useState<ActiveImage | null>(null);

  useEffect(() => {
    if (!activeImage) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [activeImage]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 relative">
      {/* Bento grid — gap exposes dark background between cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {financialStack.map((item, index) => (
          <GlassCard
            key={index}
            item={item}
            onOpen={() => setActiveImage({ url: item.image, label: item.imageLabel })}
          />
        ))}
      </div>

      {/* ── LIGHTBOX ── */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)" }}
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl overflow-hidden"
            style={{
              background: "rgba(6, 14, 52, 0.95)",
              border: "1px solid rgba(59, 130, 246, 0.2)",
              boxShadow: "0 0 80px rgba(0, 82, 255, 0.2)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div
              className="flex items-center justify-between px-6 py-4"
              style={{ borderBottom: "1px solid rgba(59, 130, 246, 0.12)" }}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse"
                  style={{ backgroundColor: "rgba(96, 165, 250, 1)" }}
                />
                <h3
                  className="text-sm truncate"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "#cbd5e1",
                    letterSpacing: "0.02em",
                  }}
                >
                  {activeImage.label}
                </h3>
              </div>
              <button
                onClick={() => setActiveImage(null)}
                className="ml-4 flex-shrink-0 p-1.5 rounded-lg transition-all duration-200"
                style={{ color: "rgba(100, 116, 139, 0.8)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                  (e.currentTarget as HTMLElement).style.background = "rgba(59,130,246,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(100, 116, 139, 0.8)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
                aria-label="Cerrar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Image */}
            <div
              className="flex items-center justify-center overflow-y-auto"
              style={{
                maxHeight: "72vh",
                padding: "16px",
                background: "rgba(3, 8, 30, 0.6)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeImage.url}
                alt={activeImage.label}
                className="w-full h-auto object-contain rounded-xl"
                style={{ border: "1px solid rgba(59, 130, 246, 0.1)" }}
              />
            </div>

            {/* Modal footer */}
            <div
              className="px-6 py-3 flex items-center justify-between"
              style={{ borderTop: "1px solid rgba(59, 130, 246, 0.08)" }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(59, 130, 246, 0.45)",
                }}
              >
                PROYECTO AUDITADO · ATLAS ANALYTICS CORE
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "rgba(71, 85, 105, 0.6)",
                }}
              >
                Enterprise Grade Architecture
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FinancialStackCards;
