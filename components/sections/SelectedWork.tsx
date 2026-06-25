"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ExternalLink, Lock } from "lucide-react";

type Category = "all" | "research" | "enterprise" | "probono";

const projects = [
  {
    id: "lapd",
    title: "LAPD Crime Analytics",
    subtitle: "Research · 1M+ registros",
    description:
      "Dashboard interactivo de análisis de crimen en Los Angeles. Módulos de mapas de calor, análisis temporal, tipos de crimen y módulo Arrests con filtros avanzados.",
    url: "https://lapd-data-crime.vercel.app/dashboard",
    tags: ["Next.js", "Mapbox", "D3.js", "REST API"],
    category: "research" as Category,
    accent: "#635bff",
  },
  {
    id: "atlas-one",
    title: "Atlas One ERP",
    subtitle: "Enterprise · SaaS B2B",
    description:
      "ERP modular para PyMEs argentinas con módulos de finanzas, inventario, clientes y reportes BI integrados. Diseño enfocado en UX para equipos no técnicos.",
    url: "https://www.atlaones-erp.com",
    tags: ["React", "FastAPI", "PostgreSQL", "Power BI"],
    category: "enterprise" as Category,
    accent: "#06b6d4",
  },
  {
    id: "rsi",
    title: "Real Estate Intelligence",
    subtitle: "Research · Alpha Score",
    description:
      "Plataforma PropTech con Alpha Score por radio censal. Analiza 4 ciudades ARG con datos INDEC, valuaciones fiscales y métricas de liquidez del mercado inmobiliario.",
    url: "https://real-state-intelligence.vercel.app/",
    tags: ["Next.js 15", "MapLibre", "PostGIS", "FastAPI"],
    category: "research" as Category,
    accent: "#8b5cf6",
  },
  {
    id: "atlas-nexus",
    title: "Atlas Nexus",
    subtitle: "Enterprise · Integración pagos",
    description:
      "SaaS de integración de pagos para comercios chicos compatible con Clover POS. Tracking de transacciones, reconciliación automática y reportes financieros.",
    url: "https://trackintegracionpagos.vercel.app/",
    tags: ["React", "FastAPI", "Neon", "Clover API"],
    category: "enterprise" as Category,
    accent: "#10b981",
  },
  {
    id: "electoral",
    title: "Electoral Analytics",
    subtitle: "Research · Análisis municipal",
    description:
      "Plataforma de inteligencia electoral para municipios del conurbano bonaerense. Análisis por radio censal, mapas coropléticos y segmentación de zonas operativas.",
    url: "#",
    tags: ["Python", "QGIS", "GeoPandas", "Leaflet"],
    category: "research" as Category,
    accent: "#f59e0b",
  },
  {
    id: "cipe",
    title: "Fundación CIPE",
    subtitle: "Pro-bono · Empleabilidad juvenil",
    description:
      "Sitio institucional para fundación de empleabilidad juvenil con CMS integrado, sistema de donaciones y plataforma de voluntariado. Diseño accesible y mobile-first.",
    url: "https://www.fundacioncipe.com/",
    tags: ["Next.js", "CMS", "Tailwind", "Vercel"],
    category: "probono" as Category,
    accent: "#ec4899",
  },
];

type FilterKey = "all" | "research" | "enterprise" | "probono";

export function SelectedWork() {
  const t = useTranslations("work");
  const [filter, setFilter] = useState<FilterKey>("all");

  const filters: { key: FilterKey; label: string }[] = [
    { key: "all", label: t("filter_all") },
    { key: "research", label: t("filter_research") },
    { key: "enterprise", label: t("filter_enterprise") },
    { key: "probono", label: t("filter_probono") },
  ];

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-[#f6f9fc] dark:bg-[#0d2d50]">
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#635bff]/10 text-[#635bff] text-xs font-semibold uppercase tracking-widest mb-4">
            {t("label")}
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a2540] dark:text-white tracking-tight mb-3">
                {t("title")}
              </h2>
              <p className="text-[#425466] dark:text-[#a8c0d8] text-lg max-w-xl">
                {t("subtitle")}
              </p>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2 flex-shrink-0">
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    filter === f.key
                      ? "bg-[#635bff] text-white"
                      : "bg-white dark:bg-[#0a2540] text-[#425466] dark:text-[#a8c0d8] border border-[#e3e8ee] dark:border-[#1a3a5c] hover:border-[#635bff] dark:hover:border-[#635bff]"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.07}>
              <div className="h-full flex flex-col p-8 rounded-2xl bg-white dark:bg-[#0a2540] border border-[#e3e8ee] dark:border-[#1a3a5c] card-shadow card-shadow-hover transition-all duration-300 group">
                {/* Accent bar */}
                <div
                  className="w-10 h-1 rounded-full mb-6 group-hover:w-16 transition-all duration-300"
                  style={{ backgroundColor: project.accent }}
                />

                {/* Category */}
                <span className="text-xs font-semibold uppercase tracking-widest text-[#8898aa] dark:text-[#6b8fa8] mb-3">
                  {project.subtitle}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0a2540] dark:text-white mb-3 leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#425466] dark:text-[#a8c0d8] leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-[#f6f9fc] dark:bg-[#0d2d50] text-[#425466] dark:text-[#a8c0d8] text-xs font-medium border border-[#e3e8ee] dark:border-[#1a3a5c]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {project.url !== "#" ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-[#635bff] hover:gap-3 transition-all group/link"
                  >
                    {t("cta")}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-sm font-semibold text-[#8898aa] dark:text-[#6b8fa8]">
                    <Lock className="w-3.5 h-3.5" />
                    Privado / confidencial
                  </span>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
