"use client";

import React from "react";
import {
  TrendingUp,
  FileSpreadsheet,
  Building2,
  Layers,
  BarChart3,
  AlertTriangle,
} from "lucide-react";

const financialStack = [
  {
    title: "Modelos Financieros Dinámicos",
    subtitle: "Ingeniería y Simulación",
    description:
      "Arquitectura de modelos de proyección financiera flexibles y escalables a medida de la estructura del negocio, permitiendo simular múltiples horizontes operativos con solidez matemática.",
    icon: TrendingUp,
    badge: "Core Mastery",
  },
  {
    title: "Advanced Excel & VBA",
    subtitle: "Automatización & Motores de Cálculo",
    description:
      "Dominio avanzado de hojas de cálculo complejas, funciones lógicas anidadas, macros complejas y optimización de flujos mediante código para eliminar tareas manuales repetitivas.",
    icon: FileSpreadsheet,
    badge: "Expert Level",
  },
  {
    title: "Valuación de Empresas (DCF)",
    subtitle: "Corporate Finance",
    description:
      "Evaluación técnica de unidades de negocio y proyectos mediante Flujos de Fondos Descontados (DCF), costo de capital (WACC) y múltiplos de mercado para la toma de decisiones.",
    icon: Building2,
    badge: "Advanced Valuation",
  },
  {
    title: "Three-Statement Forecasting",
    subtitle: "Proyección Integrada",
    description:
      "Vinculación dinámica de los tres estados contables fundamentales: Income Statement (P&L), Balance Sheet y Cash Flow. Sincronización perfecta de lógica financiera corporativa.",
    icon: Layers,
    badge: "Industry Standard",
  },
  {
    title: "Reporting Ejecutivo & BI",
    subtitle: "Visualización & Analytics",
    description:
      "Traducción de métricas financieras densas en dashboards ejecutivos de alta fidelidad, uniendo la precisión de los números contables con la agilidad de la inteligencia de datos.",
    icon: BarChart3,
    badge: "Data Driven",
  },
  {
    title: "Análisis de Sensibilidad",
    subtitle: "Gestión de Riesgo & Escenarios",
    description:
      "Modelado de escenarios estresados (Bull/Bear cases) mediante tablas de datos y herramientas de simulación para evaluar el impacto instantáneo de variables macro en el flujo libre de caja.",
    icon: AlertTriangle,
    badge: "Stress Testing",
  },
];

export function FinancialStackCards() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {financialStack.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="group relative rounded-xl border border-white/10 bg-zinc-950/40 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-zinc-950/80 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]"
            >
              {/* Top glow line on hover */}
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent transition-all duration-500 group-hover:via-blue-400/50" />

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
                <p className="text-xs font-medium text-blue-400/80 tracking-wide uppercase font-mono text-[10px]">
                  {item.subtitle}
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed pt-1 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Skill indicator bottom-right on hover */}
              <div className="absolute bottom-3 right-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[9px] font-mono text-zinc-500 uppercase">
                  Verified Master
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FinancialStackCards;
