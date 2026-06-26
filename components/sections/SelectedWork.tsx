"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ExternalLink, Lock } from "lucide-react";

type Tier2Project = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  stack: string;
  url: string;
  live: boolean;
  screenshot?: string;
  accent: string;
};

const projects: Tier2Project[] = [
  {
    id: "rsi",
    eyebrow: "Research · PropTech",
    title: "Real Estate Intelligence",
    description:
      "Alpha Score propietario por radio censal para 4 ciudades argentinas. Integra datos INDEC, valuaciones fiscales y métricas de liquidez de mercado para identificar las zonas con mayor potencial de rentabilidad inmobiliaria.",
    stack: "Next.js 15 · MapLibre · PostGIS · FastAPI · INDEC API",
    url: "https://real-state-intelligence.vercel.app/",
    live: true,
    screenshot: "/screenshots/rsi.png",
    accent: "#f59e0b",
  },
  {
    id: "electoral",
    eyebrow: "Research · Civic Intelligence",
    title: "Electoral Analytics",
    description:
      "Plataforma de inteligencia electoral para municipios del conurbano bonaerense. Análisis geoespacial por radio censal, mapas coropléticos de volatilidad y segmentación de zonas operativas para campañas políticas.",
    stack: "Python · QGIS · GeoPandas · Matplotlib · ReportLab",
    url: "#",
    live: false,
    screenshot: "/screenshots/electoral.png",
    accent: "#8b5cf6",
  },
  {
    id: "cipe",
    eyebrow: "Pro-bono · Social Impact",
    title: "Fundación CIPE",
    description:
      "Sitio institucional para fundación de empleabilidad juvenil con CMS integrado, sistema de donaciones y plataforma de voluntariado. Diseño accesible, mobile-first y optimizado para conversión de donantes.",
    stack: "Next.js · CMS · Tailwind CSS · Vercel",
    url: "https://www.fundacioncipe.com/",
    live: true,
    accent: "#ec4899",
  },
];

export function SelectedWork() {
  return (
    <section id="projects" className="py-24 bg-[#0F1419] border-t border-[#1F2937]">
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <div className="flex items-center gap-4 mb-5">
            <span className="text-[#6B7689] text-xs font-mono select-none">━━━</span>
            <span className="text-[#6B7689] text-xs font-mono uppercase tracking-widest">
              Más proyectos
            </span>
          </div>
          <h2
            className="font-serif text-[#F5F7FA] leading-tight"
            style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400 }}
          >
            Otros experimentos.
          </h2>
        </AnimatedSection>

        {/* Alternating horizontal cards */}
        <div className="space-y-8">
          {projects.map((p, i) => {
            const isEven = i % 2 === 0;
            return (
              <AnimatedSection key={p.id} delay={i * 0.08}>
                <div className="grid md:grid-cols-2 gap-0 rounded-xl border border-[#1F2937] overflow-hidden group hover:border-[#2a3a50] transition-colors duration-300">
                  {/* Screenshot — alternates left/right */}
                  {p.screenshot && (
                    <div
                      className={`relative overflow-hidden ${isEven ? "md:order-last" : ""} bg-[#0A0E1A]`}
                      style={{ minHeight: "240px" }}
                    >
                      <Image
                        src={p.screenshot}
                        alt={p.title}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A]/40 to-transparent" />
                      {/* Accent line at top */}
                      <div
                        className="absolute top-0 inset-x-0 h-[2px]"
                        style={{ backgroundColor: p.accent }}
                      />
                    </div>
                  )}

                  {/* No screenshot — placeholder */}
                  {!p.screenshot && (
                    <div
                      className={`relative overflow-hidden ${isEven ? "md:order-last" : ""} flex items-center justify-center`}
                      style={{
                        minHeight: "240px",
                        background: `linear-gradient(135deg, #0A0E1A 0%, ${p.accent}10 100%)`,
                      }}
                    >
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center border"
                        style={{ borderColor: p.accent + "30", backgroundColor: p.accent + "10" }}
                      >
                        <span className="text-2xl" style={{ color: p.accent }}>
                          ✦
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Text content */}
                  <div className="p-8 md:p-10 flex flex-col justify-center bg-[#0F1419]">
                    <span
                      className="text-[11px] font-mono uppercase tracking-widest mb-3"
                      style={{ color: p.accent }}
                    >
                      {p.eyebrow}
                    </span>
                    <h3 className="text-xl font-semibold text-[#F5F7FA] mb-3 leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-[#B8C1D1] text-sm leading-relaxed mb-5">{p.description}</p>
                    <p className="text-[11px] font-mono text-[#6B7689] mb-6 leading-relaxed">
                      {p.stack}
                    </p>
                    {p.live ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-all self-start"
                        style={{ color: p.accent }}
                      >
                        Ver live
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-sm text-[#6B7689] self-start">
                        <Lock className="w-3.5 h-3.5" />
                        Confidencial
                      </span>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
