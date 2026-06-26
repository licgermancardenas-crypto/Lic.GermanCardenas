"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ExternalLink, ArrowRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type CaseMeta = { rol: string; escala: string; stack: string; estado: string };
type CaseMetric = { value: string; label: string };

type CaseData = {
  id: string;
  slug: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
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
      { value: "2.847", label: "Leads gestionados" },
      { value: "68.4%", label: "Tasa de apertura" },
      { value: "−40%", label: "Tiempo análisis" },
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
    isHackathon: true,
    hackathonName: "Hackathon 2025",
    hackathonSponsor: "Clover / Fiserv",
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
      "El jurado destacó la combinación de profundidad técnica — integración POS real, análisis de cohortes, IA generativa — con una UX diseñada para el comerciante promedio, no para el analista. El demo live con datos reales y el pitch narrativo sellaron la presentación ante 200+ equipos competidores.",
    metrics: [
      { value: "$2.5M", label: "Revenue modelado" },
      { value: "57.2%", label: "Retorno clientes" },
      { value: "200+", label: "Equipos superados" },
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
      { value: "3.387", label: "Clientes activos" },
      { value: "ARS 14.2B", label: "Revenue modelado" },
      { value: "2.571", label: "Conflictos detectados" },
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
    meta: {
      rol: "Data Analyst & Developer",
      escala: "Research · 5 años de datos",
      stack: "Next.js · Python · D3.js",
      estado: "Live en producción",
    },
    challenge:
      "Los datos abiertos del LAPD contienen más de 1 millón de registros de crimen entre 2020 y 2024, pero están en formato tabular sin ninguna herramienta de análisis accesible para investigadores, periodistas o ciudadanos. Los patrones espaciales, temporales y demográficos permanecen ocultos en datos brutos.",
    approach:
      "Construí un pipeline ETL en Python que normaliza, geocodifica y enriquece los registros con categorías unificadas, seguido de un dashboard Next.js con D3.js para visualizaciones interactivas. El sistema incluye mapas de calor geoespaciales, análisis por franja horaria y día de la semana, distribución por tipo de crimen y un módulo de Arrests con filtros avanzados por demografía.",
    impactLabel: "QUÉ DEMUESTRA",
    impact:
      "Este proyecto demuestra la capacidad de convertir datos gubernamentales brutos en inteligencia accionable a escala. El rigor metodológico — limpieza de datos, manejo de valores nulos, normalización de 100+ categorías — es tan importante como la visualización final. Dashboard en producción en Vercel con acceso público.",
    metrics: [
      { value: "1M+", label: "Registros procesados" },
      { value: "20.1%", label: "Tasa resolución" },
      { value: "10+", label: "Módulos análisis" },
    ],
    screenshot: "/screenshots/lapd.png",
    url: "https://lapd-data-crime.vercel.app/dashboard",
  },
];

function ParallaxScreenshot({
  src,
  alt,
  url,
  isHackathon,
}: {
  src: string;
  alt: string;
  url: string;
  isHackathon?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const glowColor = isHackathon
    ? "rgba(245,181,68,0.15)"
    : "rgba(74,139,255,0.15)";

  return (
    <div ref={ref} className="relative">
      {/* Ambient backdrop glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: "-60px",
          background: `radial-gradient(ellipse at 50% 50%, ${glowColor} 0%, transparent 65%)`,
          filter: "blur(40px)",
          opacity: 0.8,
        }}
      />

      <motion.div style={{ y }} className="relative">
        {/* Browser chrome */}
        <div
          className="overflow-hidden"
          style={{
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow:
              "0 30px 60px -20px rgba(0,0,0,0.6), 0 0 120px -20px " + glowColor,
          }}
        >
          {/* Bar */}
          <div
            className="flex items-center gap-3 px-4 py-2.5"
            style={{
              background: "#060810",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <div className="flex gap-1.5">
              {["#ff5f56", "#ffbd2e", "#27c93f"].map((c) => (
                <div
                  key={c}
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: c, opacity: 0.5 }}
                />
              ))}
            </div>
            <div
              className="flex-1 rounded px-3 py-1 truncate"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.04)",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "rgba(255,255,255,0.2)",
              }}
            >
              {url}
            </div>
          </div>

          {/* Screenshot */}
          <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function FeaturedCases() {
  return (
    <>
      {/* Section intro */}
      <section id="casos" className="pt-40 pb-20" style={{ backgroundColor: "#06080D" }}>
        <div className="container-custom">
          <AnimatedSection>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#6B7A95",
                marginBottom: "32px",
              }}
            >
              ─── Casos destacados
            </p>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(40px, 5.5vw, 80px)",
                fontWeight: 400,
                color: "#F0F4FB",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              Cuatro proyectos.{" "}
              <span style={{ fontStyle: "italic" }}>Cuatro historias.</span>
            </h2>
            <p
              style={{
                marginTop: "16px",
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "#6B7A95",
                letterSpacing: "0.04em",
              }}
            >
              Una constelación de evidencia.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 4 case sections */}
      {cases.map((c) => {
        const isGold = c.isHackathon;

        return (
          <section
            key={c.id}
            id={c.id}
            className="py-32"
            style={{
              backgroundColor: "#06080D",
              borderTop: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <div className="container-custom">
              {/* Eyebrow */}
              <AnimatedSection className="mb-16">
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#6B7A95",
                  }}
                >
                  CASO {c.number} · {c.category}
                </p>
              </AnimatedSection>

              {/* 2-col layout */}
              <div className="grid lg:grid-cols-2 gap-20 items-start">
                {/* LEFT: narrative */}
                <AnimatedSection className="space-y-10">
                  {/* Title */}
                  <div>
                    <h3
                      className="font-serif"
                      style={{
                        fontSize: "clamp(40px, 5vw, 72px)",
                        fontWeight: 400,
                        color: "#F0F4FB",
                        lineHeight: 1.0,
                        letterSpacing: "-0.03em",
                        marginBottom: "16px",
                      }}
                    >
                      {c.title}
                    </h3>
                    {/* Animated underline */}
                    <div
                      style={{
                        height: "2px",
                        width: "64px",
                        background: isGold ? "#F5B544" : "#2B6FE8",
                        marginBottom: "24px",
                      }}
                    />
                    <p
                      style={{
                        fontSize: "20px",
                        lineHeight: 1.6,
                        color: "#C5CFE2",
                      }}
                    >
                      {c.subtitle}
                    </p>
                  </div>

                  {/* Hackathon badge — only Case 02 */}
                  {c.isHackathon && (
                    <div
                      style={{
                        borderRadius: "12px",
                        padding: "20px 24px",
                        border: "1px dashed rgba(245,181,68,0.3)",
                        background: "rgba(245,181,68,0.04)",
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <span style={{ fontSize: "24px" }}>🏆</span>
                        <div>
                          <p
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "11px",
                              letterSpacing: "0.16em",
                              textTransform: "uppercase",
                              color: "#F5B544",
                              marginBottom: "6px",
                            }}
                          >
                            Proyecto Ganador
                          </p>
                          <p
                            style={{
                              fontSize: "16px",
                              fontWeight: 500,
                              color: "#F0F4FB",
                              marginBottom: "4px",
                            }}
                          >
                            {c.hackathonName}
                          </p>
                          <p
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "12px",
                              color: "rgba(245,181,68,0.6)",
                            }}
                          >
                            {c.hackathonTeams} equipos · Sponsor: {c.hackathonSponsor}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Metadata strip */}
                  <div
                    className="grid grid-cols-2 sm:grid-cols-4 gap-5"
                    style={{
                      padding: "20px 24px",
                      borderRadius: "12px",
                      background: "#0F1623",
                      border: "1px solid rgba(255,255,255,0.04)",
                    }}
                  >
                    {(
                      [
                        ["ROL", c.meta.rol],
                        ["ESCALA", c.meta.escala],
                        ["STACK", c.meta.stack],
                        ["ESTADO", c.meta.estado],
                      ] as [string, string][]
                    ).map(([label, value]) => (
                      <div key={label}>
                        <p
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "10px",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "#6B7A95",
                            marginBottom: "6px",
                          }}
                        >
                          {label}
                        </p>
                        <p
                          style={{
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "#C5CFE2",
                          }}
                        >
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* 3-act narrative */}
                  <div className="space-y-8">
                    {[
                      { label: "El desafío", text: c.challenge },
                      { label: "Mi aproximación", text: c.approach },
                      { label: c.impactLabel, text: c.impact },
                    ].map(({ label, text }) => (
                      <div
                        key={label}
                        style={{
                          paddingLeft: "20px",
                          borderLeft: `2px solid ${isGold ? "rgba(245,181,68,0.3)" : "rgba(43,111,232,0.3)"}`,
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "10px",
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: isGold ? "#F5B544" : "#4A8BFF",
                            marginBottom: "10px",
                          }}
                        >
                          {label}
                        </p>
                        <p
                          style={{
                            fontSize: "16px",
                            lineHeight: 1.7,
                            color: "#C5CFE2",
                          }}
                        >
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Metrics — editorial */}
                  <div
                    className="grid grid-cols-3 gap-8"
                    style={{
                      paddingTop: "32px",
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {c.metrics.map((m) => (
                      <div key={m.label} className="flex flex-col gap-2">
                        <span
                          style={{
                            fontSize: "clamp(24px, 3vw, 40px)",
                            fontWeight: 300,
                            color: "#F0F4FB",
                            letterSpacing: "-0.04em",
                            fontVariantNumeric: "tabular-nums",
                            fontFamily: "var(--font-sans)",
                          }}
                        >
                          {m.value}
                        </span>
                        <div
                          style={{
                            height: "1px",
                            width: "40px",
                            background: isGold ? "#F5B544" : "#2B6FE8",
                            marginBottom: "8px",
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "11px",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "#6B7A95",
                            lineHeight: 1.5,
                          }}
                        >
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
                      style={{
                        padding: "12px 24px",
                        borderRadius: "8px",
                        background: isGold ? "#F5B544" : "#2B6FE8",
                        color: isGold ? "#06080D" : "#fff",
                        fontSize: "14px",
                        fontWeight: 600,
                      }}
                    >
                      Ver en producción
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <Link
                      href={`/es/work/${c.slug}`}
                      className="inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
                      style={{
                        padding: "12px 24px",
                        borderRadius: "8px",
                        background: "rgba(15,22,35,0.6)",
                        backdropFilter: "blur(24px)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        color: "#C5CFE2",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(74,139,255,0.3)";
                        (e.currentTarget as HTMLElement).style.color = "#F0F4FB";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                        (e.currentTarget as HTMLElement).style.color = "#C5CFE2";
                      }}
                    >
                      Caso completo
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </AnimatedSection>

                {/* RIGHT: sticky screenshot */}
                <AnimatedSection delay={0.15} className="lg:sticky lg:top-24 lg:self-start">
                  <ParallaxScreenshot
                    src={c.screenshot}
                    alt={`${c.title} dashboard`}
                    url={c.url}
                    isHackathon={c.isHackathon}
                  />
                </AnimatedSection>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
