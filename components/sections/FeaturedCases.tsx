"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ExternalLink, ArrowRight } from "lucide-react";

type CaseMeta = { rol: string; escala: string; stack: string; estado: string };
type CaseMetric = { value: string; description: string };

type CaseData = {
  id: string;
  slug: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  accent: string;
  isHackathon?: boolean;
  hackathonName?: string;
  hackathonSponsor?: string;
  hackathonTeams?: string;
  meta: CaseMeta;
  challenge: string;
  approach: string;
  impactLabel: string;
  impact: string;
  metrics: CaseMetric[];
  screenshot: string;
  url: string;
};

const cases: CaseData[] = [
  {
    id: "caso-01",
    slug: "atlas-one-erp",
    number: "01",
    category: "ENTERPRISE · SAAS B2B",
    title: "Atlas One ERP",
    subtitle: "ERP modular para PyMEs argentinas que necesitan inteligencia de negocio sin complejidad técnica.",
    accent: "#06b6d4",
    meta: {
      rol: "Founder & Lead Dev",
      escala: "B2B · PyMEs ARG",
      stack: "React · FastAPI · PostgreSQL",
      estado: "En producción",
    },
    challenge:
      "Las PyMEs argentinas operan con herramientas dispersas: planillas Excel para finanzas, WhatsApp para clientes, y ninguna visibilidad consolidada de sus KPIs. El 87% no tiene acceso a BI real por costo o complejidad técnica. Los dueños toman decisiones críticas en base a intuición, no a datos.",
    approach:
      "Diseñé una arquitectura modular donde cada equipo accede solo a lo que necesita. El módulo CRM con IA integrada genera briefings diarios automáticos, detecta leads en riesgo y sugiere el mejor horario de contacto según comportamiento histórico. Los dashboards ejecutivos consolidan ventas, inventario y finanzas en una vista unificada en tiempo real, sin necesidad de código.",
    impactLabel: "IMPACTO",
    impact:
      "Sistema en uso activo en PyMEs del sector retail y servicios. Los módulos de CRM e inteligencia comercial reducen el tiempo de análisis gerencial en un 40% y mejoran significativamente la tasa de conversión de leads. La arquitectura modular permite escalar por industria sin reescribir el core.",
    metrics: [
      { value: "2.847", description: "Leads gestionados en el CRM activo" },
      { value: "68.4%", description: "Tasa de apertura promedio de campañas" },
      { value: "−40%", description: "Reducción en tiempo de análisis gerencial" },
    ],
    screenshot: "/screenshots/atlas-erp.png",
    url: "https://www.atlaones-erp.com",
  },
  {
    id: "caso-02",
    slug: "atlas-nexus",
    number: "02",
    category: "SAAS B2B · HACKATHON WINNER",
    title: "Atlas Nexus",
    subtitle: "Plataforma de inteligencia comercial para comercios independientes con integración POS nativa.",
    accent: "#F59E0B",
    isHackathon: true,
    hackathonName: "[NOMBRE HACKATHON] 2025",
    hackathonSponsor: "[SPONSOR]",
    hackathonTeams: "200+",
    meta: {
      rol: "Lead Developer & Pitch",
      escala: "SaaS · Comercios chicos",
      stack: "React · FastAPI · Clover API",
      estado: "Ganador 2025",
    },
    challenge:
      "Los comercios pequeños no tienen visibilidad de su negocio más allá de la caja registradora. Usan 3-5 herramientas desconectadas — POS, WhatsApp, Excel — que generan datos sin ninguna inteligencia consolidada. El resultado: decisiones de compra, precio y promoción basadas en intuición, no en comportamiento real de clientes.",
    approach:
      "En 72 horas construimos una plataforma que conecta el POS (Clover), el historial de ventas y los datos de clientes en un dashboard unificado. El punto diferencial fue la IA embebida que genera un 'briefing del día' personalizado: alertas de clientes que no vuelven, análisis de medios de pago, proyección de meta mensual y recomendaciones de acción específicas.",
    impactLabel: "POR QUÉ GANAMOS",
    impact:
      "El jurado destacó la combinación de profundidad técnica — integración POS real, análisis de cohortes, IA generativa — con una UX diseñada para el comerciante promedio, no para el analista. El demo live con datos reales y el pitch narrativo que conectó el problema con la solución sellaron la presentación ante 200+ equipos competidores.",
    metrics: [
      { value: "$2.5M", description: "Revenue modelado en el demo live" },
      { value: "57.2%", description: "Tasa de retorno de clientes (muestra demo)" },
      { value: "200+", description: "Equipos superados en el hackathon" },
    ],
    screenshot: "/screenshots/atlas-nexus.png",
    url: "https://trackintegracionpagos.vercel.app/",
  },
  {
    id: "caso-03",
    slug: "agronova",
    number: "03",
    category: "AGRITECH · GIS · ENTERPRISE",
    title: "AgroNova",
    subtitle: "Plataforma geoespacial de escala nacional para la agroindustria argentina.",
    accent: "#10b981",
    meta: {
      rol: "Full-stack Developer & GIS",
      escala: "Enterprise · 24 provincias",
      stack: "Next.js 15 · PostGIS · FastAPI",
      estado: "En producción",
    },
    challenge:
      "El sector agropecuario argentino opera con información fragmentada en silos: datos climáticos en una fuente, precios en otra, logística de agroquímicos sin integración con la geografía real. Más de 3.000 productores y distribuidores toman decisiones críticas con datos desactualizados o sin ninguna capa de inteligencia espacial.",
    approach:
      "Construí un sistema modular de 27 capas GIS sobre PostGIS que integra en tiempo real: alertas climáticas por radio censal, modelado de redes de distribución de agroquímicos, detección automática de conflictos de uso de suelo y visualización choroplética del portfolio comercial por provincia. Cada módulo es independiente pero comparte una capa de datos unificada con actualización continua.",
    impactLabel: "ESCALA",
    impact:
      "La plataforma procesa datos de las 24 provincias argentinas, modela más de 200.000 envíos anuales de agroquímicos y detecta automáticamente conflictos de uso de suelo. Con más de 3.300 clientes activos y ARS 14.2B en revenue modelado, es la plataforma de mayor escala en el portfolio.",
    metrics: [
      { value: "3.387", description: "Clientes activos en plataforma" },
      { value: "ARS 14.2B", description: "Revenue modelado en el portfolio" },
      { value: "2.571", description: "Conflictos de uso de suelo detectados" },
    ],
    screenshot: "/screenshots/agronova.png",
    url: "https://agro-nova-plataforma.vercel.app/",
  },
  {
    id: "caso-04",
    slug: "lapd",
    number: "04",
    category: "RESEARCH · DATA ANALYTICS",
    title: "LAPD Crime Analytics",
    subtitle: "Análisis de 1 millón de registros policiales de Los Ángeles con rigor metodológico.",
    accent: "#8b5cf6",
    meta: {
      rol: "Data Analyst & Developer",
      escala: "Research · 5 años de datos",
      stack: "Next.js · Python · D3.js",
      estado: "Live en producción",
    },
    challenge:
      "Los datos abiertos del LAPD contienen más de 1 millón de registros de crimen entre 2020 y 2024, pero están en formato tabular sin ninguna herramienta de análisis accesible para investigadores, periodistas o ciudadanos. Los patrones espaciales, temporales y demográficos permanecen ocultos en datos brutos.",
    approach:
      "Construí un pipeline ETL en Python que normaliza, geocodifica y enriquece los registros con categorías unificadas, seguido de un dashboard Next.js con D3.js para visualizaciones interactivas. El sistema incluye mapas de calor geoespaciales, análisis por franja horaria y día de la semana, distribución por tipo de crimen, tendencia macro 2020-2024 y un módulo separado de Arrests con filtros avanzados por demografía.",
    impactLabel: "QUÉ DEMUESTRA",
    impact:
      "Este proyecto demuestra la capacidad de convertir datos gubernamentales brutos en inteligencia accionable a escala. El rigor metodológico — limpieza de datos, manejo de valores nulos, normalización de 100+ categorías de crimen — es tan importante como la visualización final. El dashboard está en producción en Vercel con acceso público.",
    metrics: [
      { value: "1M+", description: "Registros procesados y normalizados" },
      { value: "20.1%", description: "Tasa de resolución de casos 2020–2024" },
      { value: "10+", description: "Módulos de análisis independientes" },
    ],
    screenshot: "/screenshots/lapd.png",
    url: "https://lapd-data-crime.vercel.app/dashboard",
  },
];

function BrowserFrame({
  src,
  alt,
  url,
  accent,
}: {
  src: string;
  alt: string;
  url: string;
  accent: string;
}) {
  return (
    <div className="relative group">
      {/* Glow */}
      <div
        className="absolute -inset-1 rounded-xl opacity-20 blur-lg transition-opacity duration-500 group-hover:opacity-30"
        style={{ backgroundColor: accent }}
      />
      <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
        {/* Browser bar */}
        <div className="bg-[#060B14] px-4 py-2.5 flex items-center gap-3 border-b border-white/[0.06]">
          <div className="flex gap-1.5 flex-shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
          </div>
          <div className="flex-1 min-w-0 bg-white/[0.04] rounded px-3 py-1 text-[11px] text-white/20 truncate border border-white/[0.04] font-mono">
            {url}
          </div>
        </div>
        {/* Screenshot */}
        <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
      </div>
    </div>
  );
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[10px] font-mono uppercase tracking-widest text-[#6B7689]">{label}</span>
      <span className="text-sm font-medium text-[#B8C1D1]">{value}</span>
    </div>
  );
}

function NarrativeAct({
  label,
  text,
  accent,
}: {
  label: string;
  text: string;
  accent: string;
}) {
  return (
    <div className="border-l-2 pl-5" style={{ borderColor: accent + "40" }}>
      <p className="text-[10px] font-mono uppercase tracking-widest mb-2" style={{ color: accent }}>
        {label}
      </p>
      <p className="text-[#B8C1D1] text-[15px] leading-relaxed">{text}</p>
    </div>
  );
}

export function FeaturedCases() {
  return (
    <>
      {/* Section intro */}
      <section id="casos" className="py-20 bg-[#0A0E1A]">
        <div className="container-custom">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[#6B7689] text-xs font-mono select-none">━━━</span>
              <span className="text-[#6B7689] text-xs font-mono uppercase tracking-widest">
                Casos destacados
              </span>
            </div>
            <h2
              className="font-serif text-[#F5F7FA] leading-tight mb-4"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 400 }}
            >
              Cuatro proyectos.{" "}
              <span className="italic text-[#4F7CFF]">Cuatro historias.</span>
            </h2>
            <p className="text-[#6B7689] text-lg">Una constelación de evidencia.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* 4 case sections */}
      {cases.map((c) => (
        <section
          key={c.id}
          id={c.id}
          className="py-20 md:py-28 border-t border-[#1F2937] bg-[#0A0E1A]"
        >
          <div className="container-custom">
            {/* Eyebrow */}
            <AnimatedSection className="mb-10">
              <div className="flex items-center gap-4">
                <span className="text-[#6B7689] text-xs font-mono select-none">━━━</span>
                <span className="font-mono text-xs uppercase tracking-widest text-[#6B7689]">
                  CASO {c.number} · {c.category}
                </span>
              </div>
            </AnimatedSection>

            {/* 2-col: content left, screenshot right (sticky) */}
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-start">
              {/* Left column */}
              <AnimatedSection className="space-y-8">
                {/* Title */}
                <div>
                  <h3
                    className="font-serif text-[#F5F7FA] leading-tight mb-3"
                    style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 400 }}
                  >
                    {c.title}
                  </h3>
                  <div className="text-[#1F2937] text-xs mb-4 font-mono select-none tracking-wider">
                    ━━━━━━━━━━━━━━━━━━━━━━━━
                  </div>
                  <p className="text-[#B8C1D1] text-lg leading-relaxed">{c.subtitle}</p>
                </div>

                {/* Hackathon badge — only Caso 02 */}
                {c.isHackathon && (
                  <div
                    className="rounded-lg p-5 border"
                    style={{
                      borderColor: "#F59E0B40",
                      backgroundColor: "#F59E0B08",
                      borderStyle: "dashed",
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🏆</span>
                      <div>
                        <p className="font-mono text-xs uppercase tracking-widest text-[#F59E0B] mb-1">
                          Proyecto Ganador
                        </p>
                        <p className="text-[#F5F7FA] font-medium text-sm">{c.hackathonName}</p>
                        <p className="text-[#F59E0B]/70 text-xs font-mono mt-0.5">
                          {c.hackathonTeams} equipos · Sponsor: {c.hackathonSponsor}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Metadata strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 p-5 rounded-lg bg-[#0F1419] border border-[#1F2937]">
                  <MetaItem label="ROL" value={c.meta.rol} />
                  <MetaItem label="ESCALA" value={c.meta.escala} />
                  <MetaItem label="STACK" value={c.meta.stack} />
                  <MetaItem label="ESTADO" value={c.meta.estado} />
                </div>

                {/* 3-act narrative */}
                <div className="space-y-6">
                  <NarrativeAct label="El desafío" text={c.challenge} accent={c.accent} />
                  <NarrativeAct label="Mi aproximación" text={c.approach} accent={c.accent} />
                  <NarrativeAct label={c.impactLabel} text={c.impact} accent={c.accent} />
                </div>

                {/* Editorial metrics */}
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#1F2937]">
                  {c.metrics.map((m, i) => (
                    <div key={i} className="flex flex-col">
                      <span
                        className="font-mono leading-none mb-3"
                        style={{
                          fontSize: "clamp(20px, 3vw, 40px)",
                          fontWeight: 400,
                          color: c.accent,
                        }}
                      >
                        {m.value}
                      </span>
                      <div className="border-t border-[#1F2937] pt-2">
                        <span className="text-[12px] text-[#6B7689] uppercase tracking-wider font-mono leading-tight">
                          {m.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm transition-all hover:-translate-y-0.5"
                    style={{ backgroundColor: c.accent }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 24px ${c.accent}50`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    Ver en producción
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <Link
                    href={`/es/work/${c.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#1F2937] text-[#B8C1D1] font-semibold text-sm hover:border-[#4F7CFF] hover:text-white transition-all hover:-translate-y-0.5"
                  >
                    Caso completo
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </AnimatedSection>

              {/* Right column — screenshot (sticky) */}
              <AnimatedSection delay={0.15} className="lg:sticky lg:top-24 lg:self-start">
                <BrowserFrame
                  src={c.screenshot}
                  alt={`${c.title} dashboard`}
                  url={c.url}
                  accent={c.accent}
                />
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
