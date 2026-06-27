"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ExternalLink, ArrowRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type CaseMetric = { value: string; label: string; sub?: string };

type CaseData = {
  code: string;
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  statusLabel: string;
  isHackathon?: boolean;
  hackathonName?: string;
  hackathonSponsor?: string;
  hackathonTeams?: string;
  meta: { rol: string; escala: string; stack: string; estado: string };
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
    code: "CASE-001",
    slug: "atlas-one-erp",
    category: "ENTERPRISE · SAAS B2B",
    title: "Atlas One ERP",
    subtitle: "ERP modular para PyMEs argentinas que necesitan inteligencia de negocio sin complejidad técnica.",
    statusLabel: "PROD",
    meta: {
      rol: "Founder & Tech Lead",
      escala: "Multi-tenant · B2B",
      stack: "React · FastAPI · PostgreSQL",
      estado: "Comercial",
    },
    challenge:
      "Las PyMEs argentinas operan con herramientas dispersas: planillas Excel para finanzas, WhatsApp para clientes, y ninguna visibilidad consolidada de sus KPIs. El 87% no tiene acceso a BI real por costo o complejidad técnica.",
    approach:
      "Arquitectura modular donde cada equipo accede solo a lo que necesita. CRM con IA integrada genera briefings diarios automáticos, detecta leads en riesgo y sugiere horario óptimo de contacto según comportamiento histórico.",
    impactLabel: "IMPACTO",
    impact:
      "Sistema en uso activo en PyMEs de retail y servicios. Módulos de CRM e inteligencia comercial reducen el tiempo de análisis gerencial en un 40% y mejoran la tasa de conversión de leads.",
    metrics: [
      { value: "2,847", label: "LEADS MANAGED",    sub: "▲ CRM ACTIVE" },
      { value: "68.4%", label: "OPEN RATE",         sub: "▲ CAMPAIGNS" },
      { value: "−40%",  label: "ANALYSIS TIME",     sub: "▲ EFFICIENCY" },
    ],
    screenshot: "/screenshots/atlas-erp.png",
    url: "https://www.atlaones-erp.com",
  },
  {
    code: "CASE-002",
    slug: "atlas-nexus",
    category: "SAAS B2B · HACKATHON WINNER",
    title: "Atlas Nexus",
    subtitle: "Plataforma de inteligencia comercial para comercios independientes con integración POS nativa.",
    statusLabel: "WINNER",
    isHackathon: true,
    hackathonName: "Hackathon 2025",
    hackathonSponsor: "Clover / Fiserv",
    hackathonTeams: "200+",
    meta: {
      rol: "Lead Developer & Pitch",
      escala: "SaaS · SMB",
      stack: "React · FastAPI · Clover API",
      estado: "1st Place",
    },
    challenge:
      "Los comercios pequeños no tienen visibilidad más allá de la caja registradora. Usan 3-5 herramientas desconectadas que generan datos sin inteligencia consolidada. Decisiones de precio y promoción basadas en intuición.",
    approach:
      "En 72 horas construimos una plataforma que conecta el POS (Clover), historial de ventas y datos de clientes en un dashboard unificado con IA embebida que genera un 'briefing del día' personalizado.",
    impactLabel: "POR QUÉ GANAMOS",
    impact:
      "El jurado destacó la combinación de profundidad técnica — integración POS real, análisis de cohortes, IA generativa — con una UX diseñada para el comerciante promedio, no para el analista.",
    metrics: [
      { value: "$2.5M",  label: "REVENUE MODELED", sub: "▲ DEMO LIVE" },
      { value: "57.2%",  label: "RETURN RATE",      sub: "▲ COHORTS" },
      { value: "200+",   label: "TEAMS BEATEN",     sub: "🏆 1ST PLACE" },
    ],
    screenshot: "/screenshots/atlas-nexus.png",
    url: "https://trackintegracionpagos.vercel.app/",
  },
  {
    code: "CASE-003",
    slug: "agronova",
    category: "AGRITECH · GIS · ENTERPRISE",
    title: "AgroNova",
    subtitle: "Plataforma geoespacial de escala nacional para la agroindustria argentina.",
    statusLabel: "PROD",
    meta: {
      rol: "Full-stack · GIS Engineer",
      escala: "Enterprise · 24 prov.",
      stack: "Next.js 15 · PostGIS · FastAPI",
      estado: "Producción",
    },
    challenge:
      "El sector agropecuario opera con información fragmentada en silos: datos climáticos, precios y logística sin integración con la geografía real. +3.000 productores toman decisiones con datos desactualizados.",
    approach:
      "Sistema modular de 27 capas GIS sobre PostGIS que integra en tiempo real alertas climáticas por radio censal, modelado de redes de distribución de agroquímicos y detección automática de conflictos de uso de suelo.",
    impactLabel: "SCALE",
    impact:
      "24 provincias argentinas, +200K envíos de agroquímicos modelados anualmente, 2.571 conflictos de uso de suelo detectados automáticamente.",
    metrics: [
      { value: "3,387",    label: "ACTIVE CLIENTS",  sub: "▲ NATIONAL" },
      { value: "ARS 14.2B",label: "REV. MODELED",    sub: "▲ PORTFOLIO" },
      { value: "2,571",    label: "CONFLICTS FOUND",  sub: "▲ KNN JOIN" },
    ],
    screenshot: "/screenshots/agronova.png",
    url: "https://agro-nova-plataforma.vercel.app/",
  },
  {
    code: "CASE-004",
    slug: "lapd",
    category: "RESEARCH · DATA ANALYTICS",
    title: "LAPD Crime Analytics",
    subtitle: "Análisis de 1 millón de registros policiales de Los Ángeles con rigor metodológico.",
    statusLabel: "LIVE",
    meta: {
      rol: "Data Analyst · Developer",
      escala: "Research · 5-year data",
      stack: "Next.js · Python · D3.js",
      estado: "Live público",
    },
    challenge:
      "+1 millón de registros de crimen LAPD 2020-2024 en formato tabular sin ninguna herramienta de análisis accesible para investigadores, periodistas o ciudadanos.",
    approach:
      "Pipeline ETL en Python que normaliza, geocodifica y enriquece los registros. Dashboard Next.js con D3.js: mapas de calor, análisis temporal, distribución por tipo de crimen y módulo de Arrests con filtros avanzados.",
    impactLabel: "QUÉ DEMUESTRA",
    impact:
      "Capacidad de convertir datos gubernamentales brutos en inteligencia accionable a escala. Rigor metodológico: limpieza, valores nulos, normalización de 100+ categorías. Dashboard en producción con acceso público.",
    metrics: [
      { value: "1M+",   label: "RECORDS",    sub: "▲ ETL PIPELINE" },
      { value: "20.1%", label: "RESOLUTION",  sub: "▲ 2020–2024" },
      { value: "10+",   label: "MODULES",     sub: "▲ INDEPENDENT" },
    ],
    screenshot: "/screenshots/lapd.png",
    url: "https://lapd-data-crime.vercel.app/dashboard",
  },
];

function ParallaxScreenshot({
  src, alt, url, isHackathon,
}: {
  src: string; alt: string; url: string; isHackathon?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <div ref={ref} className="relative">
      {/* Glow behind */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: "-80px",
          background: isHackathon
            ? "radial-gradient(ellipse at 50% 50%, rgba(245,181,68,0.12) 0%, transparent 60%)"
            : "radial-gradient(ellipse at 50% 50%, rgba(74,139,255,0.15) 0%, transparent 60%)",
          filter: "blur(40px)",
          opacity: 0.7,
        }}
      />

      <motion.div style={{ y }}>
        <div
          className="overflow-hidden"
          style={{
            borderRadius: "8px",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow:
              "0 40px 80px -20px rgba(0,0,0,0.7), 0 0 160px -20px rgba(74,139,255,0.15)",
          }}
        >
          {/* Browser bar */}
          <div
            className="flex items-center gap-3 px-4 py-2.5"
            style={{
              background: "#060709",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <div className="flex gap-1.5">
              {["#ff5f56", "#ffbd2e", "#27c93f"].map((c) => (
                <div
                  key={c}
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: c, opacity: 0.45 }}
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
                color: "rgba(255,255,255,0.18)",
              }}
            >
              {url}
            </div>
          </div>
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

function FactSheet({ meta }: { meta: CaseData["meta"] }) {
  const cells = [
    { label: "ROLE",   value: meta.rol },
    { label: "SCALE",  value: meta.escala },
    { label: "STACK",  value: meta.stack },
    { label: "STATUS", value: meta.estado },
  ];
  return (
    <div
      style={{
        background: "#0E1015",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {cells.map((c, i) => (
          <div
            key={c.label}
            style={{
              padding: "20px 24px",
              borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.12em",
                color: "#5A6478",
                marginBottom: "6px",
              }}
            >
              {c.label}
            </p>
            <p style={{ fontSize: "14px", color: "#C5CFE2", lineHeight: 1.4 }}>
              {c.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FeaturedCases() {
  return (
    <>
      {/* Section opener */}
      <section
        id="casos"
        style={{
          backgroundColor: "#0A0B0F",
          paddingTop: "160px",
          paddingBottom: "80px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="container-custom">
          <AnimatedSection>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.14em",
                color: "#4A8BFF",
                marginBottom: "20px",
              }}
            >
              ─── SELECTED CASES / REF-03
            </p>
            <h2
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
              Four projects. Four proofs.
            </h2>
            <p style={{ fontSize: "16px", color: "#8B95A8", lineHeight: 1.7 }}>
              Each case demonstrates a specific capability tier.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 4 cases */}
      {cases.map((c) => (
        <section
          key={c.code}
          id={`caso-${c.code.split("-")[1]}`}
          style={{
            backgroundColor: "#0A0B0F",
            paddingTop: "120px",
            paddingBottom: "120px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="container-custom">
            {/* Eyebrow */}
            <AnimatedSection className="mb-12">
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  color: "#4A8BFF",
                }}
              >
                {c.code} / {c.category}
              </p>
            </AnimatedSection>

            {/* Title + status */}
            <AnimatedSection delay={0.04} className="mb-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: "clamp(40px, 5vw, 64px)",
                      fontWeight: 400,
                      color: "#F0F4FB",
                      lineHeight: 1.0,
                      letterSpacing: "-0.03em",
                      marginBottom: "8px",
                    }}
                  >
                    {c.title}
                  </h3>
                  <div style={{ height: "2px", width: "48px", backgroundColor: c.isHackathon ? "#F5B544" : "#4A8BFF" }} />
                </div>
                <div
                  className="flex items-center gap-2 mt-1"
                  style={{
                    padding: "6px 12px",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "4px",
                    background: "#0E1015",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      backgroundColor: c.isHackathon ? "#F5B544" : "#00C781",
                      animation: "pulse-live 2s ease-in-out infinite",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      letterSpacing: "0.10em",
                      color: c.isHackathon ? "#F5B544" : "#00C781",
                    }}
                  >
                    {c.statusLabel}
                  </span>
                </div>
              </div>
              <p style={{ fontSize: "18px", color: "#C5CFE2", lineHeight: 1.65, marginTop: "20px", maxWidth: "640px" }}>
                {c.subtitle}
              </p>
            </AnimatedSection>

            {/* Hackathon badge — CASE-002 only */}
            {c.isHackathon && (
              <AnimatedSection delay={0.06} className="mb-10">
                <div
                  style={{
                    padding: "20px 32px",
                    border: "1px solid rgba(245,181,68,0.30)",
                    borderRadius: "4px",
                    background: "rgba(245,181,68,0.04)",
                    display: "inline-block",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      fontWeight: 500,
                      letterSpacing: "0.14em",
                      color: "#F5B544",
                      marginBottom: "6px",
                    }}
                  >
                    🏆 1ST PLACE
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "13px",
                      letterSpacing: "0.08em",
                      color: "#F5B544",
                      marginBottom: "4px",
                    }}
                  >
                    {c.hackathonName}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      letterSpacing: "0.08em",
                      color: "rgba(245,181,68,0.55)",
                    }}
                  >
                    {c.hackathonTeams} TEAMS · SPONSOR: {c.hackathonSponsor}
                  </p>
                </div>
              </AnimatedSection>
            )}

            {/* Fact sheet */}
            <AnimatedSection delay={0.08} className="mb-16">
              <FactSheet meta={c.meta} />
            </AnimatedSection>

            {/* 2-col layout */}
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              {/* LEFT: narrative */}
              <AnimatedSection delay={0.1} className="space-y-12">
                {[
                  { label: "01 / CHALLENGE",   text: c.challenge },
                  { label: "02 / APPROACH",    text: c.approach },
                  { label: `03 / ${c.impactLabel}`, text: c.impact },
                ].map(({ label, text }) => (
                  <div key={label}>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        fontWeight: 500,
                        letterSpacing: "0.12em",
                        color: "#5A6478",
                        marginBottom: "14px",
                      }}
                    >
                      ─── {label}
                    </p>
                    <p
                      style={{
                        fontSize: "17px",
                        lineHeight: 1.7,
                        color: "#C5CFE2",
                        maxWidth: "560px",
                      }}
                    >
                      {text}
                    </p>
                  </div>
                ))}

                {/* Outcome metrics */}
                <div
                  style={{
                    background: "#0E1015",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <div className="grid grid-cols-3">
                    {c.metrics.map((m, i) => (
                      <div
                        key={m.label}
                        style={{
                          padding: "24px 20px",
                          borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "clamp(20px, 2.5vw, 32px)",
                            fontWeight: 400,
                            color: "#F0F4FB",
                            fontVariantNumeric: "tabular-nums",
                            letterSpacing: "-0.02em",
                            lineHeight: 1,
                            marginBottom: "8px",
                          }}
                        >
                          {m.value}
                        </p>
                        <div
                          style={{
                            height: "1px",
                            width: "32px",
                            backgroundColor: "#4A8BFF",
                            marginBottom: "8px",
                          }}
                        />
                        <p
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "10px",
                            fontWeight: 500,
                            letterSpacing: "0.12em",
                            color: "#5A6478",
                            marginBottom: "4px",
                          }}
                        >
                          {m.label}
                        </p>
                        {m.sub && (
                          <p
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "10px",
                              letterSpacing: "0.08em",
                              color: "#00C781",
                            }}
                          >
                            {m.sub}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 group transition-all duration-200 focus-ring"
                    style={{
                      padding: "12px 24px",
                      borderRadius: "4px",
                      border: `1px solid ${c.isHackathon ? "rgba(245,181,68,0.40)" : "rgba(74,139,255,0.40)"}`,
                      color: c.isHackathon ? "#F5B544" : "#4A8BFF",
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      letterSpacing: "0.08em",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        c.isHackathon ? "rgba(245,181,68,0.06)" : "rgba(74,139,255,0.06)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                    }}
                  >
                    VIEW IN PRODUCTION
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <Link
                    href={`/es/work/${c.slug}`}
                    className="inline-flex items-center gap-2 group transition-all duration-200 focus-ring"
                    style={{
                      padding: "12px 24px",
                      borderRadius: "4px",
                      border: "1px solid rgba(255,255,255,0.10)",
                      color: "#C5CFE2",
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      letterSpacing: "0.08em",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.20)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.10)";
                    }}
                  >
                    FULL CASE STUDY
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </AnimatedSection>

              {/* RIGHT: sticky screenshot */}
              <AnimatedSection delay={0.14} className="lg:sticky lg:top-24 lg:self-start">
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
      ))}
    </>
  );
}
