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
    image: "/Captura de pantalla 2026-06-28 003817.png",
    imageLabel: "Modelado de Estructura de Balance de Situación (Horizontes 2020-2027)",
  },
  {
    title: "Advanced Excel & VBA",
    subtitle: "Automatización & Motores de Cálculo",
    description:
      "Dominio avanzado de hojas de cálculo complejas, funciones lógicas anidadas, macros complejas y optimización de flujos mediante código para eliminar tareas manuales repetitivas.",
    icon: FileSpreadsheet,
    badge: "Expert Level",
    image: "/Captura de pantalla 2026-06-28 005639.png",
    imageLabel: "Control de Gestión Avanzado, Mapas de Calor Estadísticos y Sparklines Integrados",
  },
  {
    title: "Valuación de Empresas (DCF)",
    subtitle: "Corporate Finance",
    description:
      "Evaluación técnica de unidades de negocio y proyectos mediante Flujos de Fondos Descontados (DCF), costo de capital (WACC) y múltiplos de mercado para la toma de decisiones.",
    icon: Building2,
    badge: "Advanced Valuation",
    image: "/Captura de pantalla 2026-06-28 004053.png",
    imageLabel: "Valuación Corporativa mediante Free Cash Flow Yield — Caso Analítico Coca-Cola Co.",
  },
  {
    title: "Three-Statement Forecasting",
    subtitle: "Proyección Integrada",
    description:
      "Vinculación dinámica de los tres estados contables fundamentales: Income Statement (P&L), Balance Sheet y Cash Flow. Sincronización perfecta de lógica financiera corporativa.",
    icon: Layers,
    badge: "Industry Standard",
    image: "/Captura de pantalla 2026-06-28 005159.png",
    imageLabel: "Integración Dinámica de Estados Contables Fundamentales (Sincronización P&L y Balance)",
  },
  {
    title: "Reporting Ejecutivo & BI",
    subtitle: "Visualización & Analytics",
    description:
      "Traducción de métricas financieras densas en dashboards ejecutivos de alta fidelidad, uniendo la precisión de los números contables con la agilidad de la inteligencia de datos.",
    icon: BarChart3,
    badge: "Data Driven",
    image: "/Captura de pantalla 2026-06-28 005541.png",
    imageLabel: "Predictive Analytics — Modelo de Pronóstico Lineal Algorítmico de Demanda",
  },
  {
    title: "Análisis de Sensibilidad",
    subtitle: "Gestión de Riesgo & Escenarios",
    description:
      "Modelado de escenarios estresados (Bull/Bear cases) mediante tablas de datos y herramientas de simulación para evaluar el impacto instantáneo de variables macro en el flujo libre de caja.",
    icon: AlertTriangle,
    badge: "Stress Testing",
    image: "/Captura de pantalla 2026-06-28 005817.png",
    imageLabel: "Simulación de Escenarios Mensuales Estresados (Optimista/Base) e Impacto Fiscal Local",
  },
];

interface ActiveImage {
  url: string;
  label: string;
}

export function FinancialStackCards() {
  const [activeImage, setActiveImage] = useState<ActiveImage | null>(null);

  // Close on Escape key
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
      {/* Card grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {financialStack.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              onClick={() => setActiveImage({ url: item.image, label: item.imageLabel })}
              className="group relative rounded-xl border border-white/10 bg-zinc-950/40 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-zinc-950/80 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] cursor-pointer flex flex-col justify-between min-h-[260px]"
            >
              {/* Top glow line on hover */}
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent transition-all duration-500 group-hover:via-blue-400/50" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-zinc-900 border border-white/5 text-zinc-400 group-hover:text-blue-400 group-hover:border-blue-500/20 transition-colors duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-500 bg-zinc-900/50 px-2 py-0.5 rounded border border-white/5 group-hover:border-blue-500/10 group-hover:text-blue-300 transition-colors">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-base font-semibold text-zinc-100 group-hover:text-white transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[10px] font-medium text-blue-400/80 tracking-wide uppercase font-mono">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card footer */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-zinc-500 group-hover:text-blue-400 transition-colors duration-300">
                <span className="text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5">
                  <Maximize2 className="w-3 h-3" />
                  Ver Modelo Real
                </span>
                <span className="text-[9px] font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  [Excel.xlsx]
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)" }}
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-xl overflow-hidden shadow-2xl"
            style={{
              backgroundColor: "#09090b",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div
              className="flex items-center justify-between px-6 py-4"
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                backgroundColor: "rgba(255,255,255,0.02)",
              }}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse flex-shrink-0" />
                <h3
                  className="text-sm font-mono font-medium truncate"
                  style={{ color: "#d4d4d8", letterSpacing: "0.02em" }}
                >
                  {activeImage.label}
                </h3>
              </div>
              <button
                onClick={() => setActiveImage(null)}
                className="ml-4 flex-shrink-0 p-1.5 rounded-lg transition-colors"
                style={{ color: "#71717a" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#71717a";
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
                padding: "12px",
                backgroundColor: "rgba(255,255,255,0.01)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeImage.url}
                alt={activeImage.label}
                className="w-full h-auto object-contain rounded-lg"
                style={{ border: "1px solid rgba(255,255,255,0.05)" }}
              />
            </div>

            {/* Modal footer */}
            <div
              className="px-6 py-3 flex items-center justify-between"
              style={{
                borderTop: "1px solid rgba(255,255,255,0.05)",
                backgroundColor: "#09090b",
              }}
            >
              <span
                className="font-mono"
                style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#52525b" }}
              >
                PROYECTO AUDITADO · ATLAS ANALYTICS CORE
              </span>
              <span
                className="font-mono"
                style={{ fontSize: "10px", color: "#3f3f46" }}
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
