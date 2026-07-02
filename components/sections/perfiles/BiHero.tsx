"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EMERALD = "#10b981";

const GRID = [
  {
    label: "01 / INGESTION",
    title: "Data Engineering & ETL",
    desc: "Pipelines integrales de extracción, transformación y carga desde múltiples fuentes operativas.",
  },
  {
    label: "02 / MODELING",
    title: "Modelado Relacional",
    desc: "Esquemas estrella, medidas DAX y arquitectura de datos optimizada para consumo analítico.",
  },
  {
    label: "03 / VISUALIZATION",
    title: "Dashboards Ejecutivos",
    desc: "Power BI de nivel producción: KPIs financieros, márgenes operativos y control de gestión.",
  },
  {
    label: "04 / IMPACT",
    title: "Optimización de Márgenes",
    desc: "Analítica orientada a decisión: identificación de fugas de rentabilidad y palancas de mejora.",
  },
];

export function BiHero() {
  const params = useParams();
  const locale = (params?.locale as string) ?? "es";

  return (
    <section
      className="relative flex flex-col"
      style={{ height: "100svh", minHeight: "700px", backgroundColor: "#050708" }}
    >
      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Placeholder: swap for /perfiles/bi-hero.jpg (Power BI workstation photo) once available */}
        <motion.div
          className="absolute inset-0"
          animate={{ scale: [1, 1.06] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 70% 35%, rgba(16,185,129,0.14) 0%, transparent 60%), linear-gradient(160deg, #0a1420 0%, #0d1b2a 45%, #050708 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(16,185,129,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.05) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage:
                "radial-gradient(ellipse 80% 70% at 65% 40%, black 0%, transparent 75%)",
            }}
          />
        </motion.div>
      </div>

      {/* ── GRADIENT OVERLAYS ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, #050708 0%, rgba(5,7,8,0.88) 20%, rgba(5,7,8,0.35) 52%, rgba(5,7,8,0.05) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(5,7,8,0.6) 0%, rgba(5,7,8,0.12) 45%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5,7,8,0.55) 0%, transparent 22%)",
        }}
      />

      {/* ── BACK LINK ── */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
        className="absolute top-20 left-0 z-10 px-6 md:px-16 lg:px-24"
      >
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 transition-colors duration-200"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.28)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.28)";
          }}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Germán Cárdenas
        </Link>
      </motion.div>

      {/* ── HERO CONTENT — bottom-anchored ── */}
      <div className="relative z-10 mt-auto px-6 md:px-8 lg:px-12">
        {/* Upper tag */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
          className="mb-4 flex items-center gap-3"
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: EMERALD,
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: EMERALD, flexShrink: 0 }}
            />
            ENTERPRISE DATA SYSTEMS&nbsp;//&nbsp;PERFIL 02&nbsp;//&nbsp;CORPORATE BI
          </span>
        </motion.div>

        {/* Giant title */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: EASE, delay: 0.45 }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 7vw, 96px)",
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            marginBottom: "10px",
            userSelect: "none",
          }}
        >
          CORPORATE BI
          <br />
          &amp; DATA ANALYST
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.56 }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(11px, 1.2vw, 14px)",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: EMERALD,
            marginBottom: "18px",
          }}
        >
          Executive Dashboards & Margin Intelligence
        </motion.p>

        {/* Manifesto */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.72 }}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(12px, 1.4vw, 16px)",
            fontWeight: 400,
            lineHeight: 1.7,
            color: "rgba(212,212,216,0.9)",
            maxWidth: "680px",
            marginBottom: "40px",
            textWrap: "balance",
          }}
        >
          Construyo el puente entre los datos operativos crudos y la decisión
          ejecutiva. Pipelines de ETL, modelado relacional y dashboards de
          Power BI diseñados para un solo propósito: que el control de gestión
          y la optimización de márgenes dejen de depender de reportes
          manuales en Excel.
        </motion.p>

        {/* ── 4-COLUMN FOOTER MATRIX ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          {GRID.map((col, i) => (
            <div
              key={i}
              style={{
                paddingTop: "18px",
                paddingBottom: "28px",
                paddingLeft: i > 0 ? "20px" : "0",
                paddingRight: i < GRID.length - 1 ? "20px" : "0",
                borderRight:
                  i < GRID.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "9px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: EMERALD,
                  marginBottom: "8px",
                }}
              >
                {col.label}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.82)",
                  marginBottom: "6px",
                  lineHeight: 1.35,
                }}
              >
                {col.title}
              </p>
              <p
                className="hidden lg:block"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.3)",
                }}
              >
                {col.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 right-8 pointer-events-none"
        style={{ opacity: 0.35, zIndex: 10 }}
      >
        <motion.div
          style={{
            width: 1,
            background: `linear-gradient(to bottom, transparent, ${EMERALD})`,
          }}
          animate={{ height: [0, 52] }}
          transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
        />
      </div>
    </section>
  );
}
