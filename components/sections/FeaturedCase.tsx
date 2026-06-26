"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Layers, Users, MapPin, AlertTriangle, Package, BarChart3, Building2, Home, TrendingUp, Database, Globe } from "lucide-react";

type Metric = { icon: React.ElementType; value: string; label: string };

type Case = {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  accent: string;
  accentBg: string;
  stack: string[];
  metrics: Metric[];
  url: string;
  live: boolean;
};

const cases: Case[] = [
  {
    id: "agronova",
    title: "AgroNova",
    category: "AgriTech · GIS",
    subtitle: "Plataforma geoespacial para el agro argentino",
    description:
      "Sistema modular de 27 capas GIS que cubre las 24 provincias. Detecta conflictos de uso de suelo, modela redes de distribución de agroquímicos y genera alertas climáticas en tiempo real para más de 3.300 clientes activos.",
    accent: "#10b981",
    accentBg: "from-emerald-500/10 to-emerald-500/5",
    stack: ["Next.js 15", "PostGIS", "Neon", "FastAPI", "Leaflet", "Python", "QGIS"],
    metrics: [
      { icon: Users, value: "3.387", label: "Clientes activos" },
      { icon: MapPin, value: "24", label: "Provincias" },
      { icon: Layers, value: "27", label: "Módulos GIS" },
      { icon: AlertTriangle, value: "2.571", label: "Conflictos detectados" },
      { icon: Package, value: "200k", label: "Envíos/año modelados" },
    ],
    url: "https://agro-nova-plataforma.vercel.app/",
    live: true,
  },
  {
    id: "lapd",
    title: "LAPD Crime Analytics",
    category: "Research · Data Analytics",
    subtitle: "Dashboard interactivo de criminalidad en Los Ángeles",
    description:
      "Plataforma de análisis de más de 1 millón de registros policiales de LAPD. Incluye mapas de calor geoespaciales, análisis temporal por hora y día, módulo de Arrests con filtros avanzados y visualizaciones D3 para detectar patrones de criminalidad.",
    accent: "#8b5cf6",
    accentBg: "from-violet-500/10 to-violet-500/5",
    stack: ["Next.js", "Python", "Geospatial API", "D3.js", "Tailwind CSS", "Vercel"],
    metrics: [
      { icon: Database, value: "1M+", label: "Registros procesados" },
      { icon: BarChart3, value: "5", label: "Años de datos" },
      { icon: Layers, value: "10+", label: "Módulos de análisis" },
      { icon: MapPin, value: "Live", label: "Dashboard en producción" },
      { icon: Globe, value: "LAPD", label: "Fuente oficial" },
    ],
    url: "https://lapd-data-crime.vercel.app/dashboard",
    live: true,
  },
  {
    id: "rsi",
    title: "Real Estate Intelligence",
    category: "PropTech · Research",
    subtitle: "Alpha Score inmobiliario por radio censal en Argentina",
    description:
      "Plataforma PropTech que calcula un Alpha Score propietario por radio censal para 4 ciudades argentinas. Integra datos INDEC, valuaciones fiscales y métricas de liquidez para identificar zonas con mayor potencial de rentabilidad inmobiliaria.",
    accent: "#f59e0b",
    accentBg: "from-amber-500/10 to-amber-500/5",
    stack: ["Next.js 15", "MapLibre", "PostGIS", "FastAPI", "INDEC API", "Python"],
    metrics: [
      { icon: Home, value: "4", label: "Ciudades ARG" },
      { icon: MapPin, value: "320+", label: "Radios censales" },
      { icon: TrendingUp, value: "Alpha", label: "Score propietario" },
      { icon: Database, value: "INDEC", label: "Datos censales" },
      { icon: BarChart3, value: "Live", label: "Dashboard en prod." },
    ],
    url: "https://real-state-intelligence.vercel.app/",
    live: true,
  },
  {
    id: "atlas-erp",
    title: "Atlas One ERP",
    category: "Enterprise · SaaS B2B",
    subtitle: "ERP modular para PyMEs argentinas con BI integrado",
    description:
      "Solución ERP B2B con módulos de finanzas, inventario, CRM y reportes de Business Intelligence embebidos. Diseñado para equipos no técnicos con UX simplificada, automatización de workflows y dashboards ejecutivos en tiempo real.",
    accent: "#06b6d4",
    accentBg: "from-cyan-500/10 to-cyan-500/5",
    stack: ["React", "FastAPI", "PostgreSQL", "Power BI", "Tailwind CSS", "Vercel"],
    metrics: [
      { icon: Building2, value: "ERP", label: "Sistema modular" },
      { icon: Users, value: "CRM", label: "Gestión de clientes" },
      { icon: BarChart3, value: "BI", label: "Dashboards embebidos" },
      { icon: TrendingUp, value: "B2B", label: "PyMEs argentinas" },
      { icon: Globe, value: "Live", label: "En producción" },
    ],
    url: "https://www.atlaones-erp.com",
    live: true,
  },
];

export function FeaturedCase() {
  const [active, setActive] = useState(0);
  const current = cases[active];

  return (
    <section id="featured" className="py-24 bg-white dark:bg-[#0a2540]">
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-[#635bff]/10 text-[#635bff] text-xs font-semibold uppercase tracking-widest mb-4">
            Casos destacados
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a2540] dark:text-white tracking-tight">
            Proyectos en producción
          </h2>
        </AnimatedSection>

        {/* Tab selector */}
        <AnimatedSection delay={0.1} className="mb-6">
          <div className="flex flex-wrap gap-2">
            {cases.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  active === i
                    ? "text-white shadow-lg"
                    : "bg-[#f6f9fc] dark:bg-[#0d2d50] text-[#425466] dark:text-[#a8c0d8] hover:text-[#0a2540] dark:hover:text-white border border-[#e3e8ee] dark:border-[#1a3a5c]"
                }`}
                style={
                  active === i
                    ? { backgroundColor: c.accent, boxShadow: `0 4px 20px ${c.accent}40` }
                    : {}
                }
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: active === i ? "rgba(255,255,255,0.8)" : c.accent }}
                />
                {c.title}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Case card */}
        <AnimatedSection delay={0.15}>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a2540] via-[#0d2d50] to-[#0a2540] border border-[#1a3a5c] min-h-[460px]">
            {/* Animated blobs per case */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id + "-bg"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 pointer-events-none overflow-hidden"
              >
                <div
                  className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px]"
                  style={{ backgroundColor: current.accent + "20" }}
                />
                <div
                  className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-[80px]"
                  style={{ backgroundColor: current.accent + "10" }}
                />
                <div
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)",
                    backgroundSize: "28px 28px",
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative z-10 p-8 md:p-12 lg:p-16"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left: content */}
                  <div>
                    {/* Badges */}
                    <div className="flex items-center gap-3 mb-6">
                      {current.live && (
                        <span
                          className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border"
                          style={{
                            backgroundColor: current.accent + "20",
                            borderColor: current.accent + "40",
                            color: current.accent,
                          }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full animate-pulse"
                            style={{ backgroundColor: current.accent }}
                          />
                          Live en producción
                        </span>
                      )}
                      <span className="text-white/40 text-xs font-medium">{current.category}</span>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                      {current.title}
                    </h3>
                    <p className="font-medium mb-5" style={{ color: current.accent }}>
                      {current.subtitle}
                    </p>
                    <p className="text-[#a8c0d8] leading-relaxed mb-8 text-base">
                      {current.description}
                    </p>

                    {/* Stack */}
                    <div className="mb-8">
                      <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-3">
                        Stack técnico
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {current.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/80 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={current.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                      style={{
                        backgroundColor: current.accent,
                        boxShadow: `0 0 0 0 ${current.accent}40`,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${current.accent}50`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${current.accent}40`;
                      }}
                    >
                      Ver proyecto live
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Right: metrics grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                    {current.metrics.map((m, i) => {
                      const Icon = m.icon;
                      return (
                        <div
                          key={i}
                          className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                        >
                          <Icon className="w-5 h-5 mb-3" style={{ color: current.accent }} />
                          <div className="text-2xl font-bold text-white mb-1">{m.value}</div>
                          <div className="text-xs text-white/50 leading-tight">{m.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </AnimatedSection>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-5">
          {cases.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActive(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: active === i ? "24px" : "8px",
                height: "8px",
                backgroundColor: active === i ? c.accent : "#e3e8ee",
              }}
              aria-label={c.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
