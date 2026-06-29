"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const BLUE = "#00CFFF";

const GRID = [
  {
    label: "01 / PIPELINES",
    title: "Machine Learning & Forecasting",
    desc: "Algoritmos predictivos y series temporales aplicados a la demanda en producción.",
  },
  {
    label: "02 / AI LAYER",
    title: "Natural Language Processing",
    desc: "Modelado de tópicos, análisis de sentimiento masivo e integración avanzada de LLMs.",
  },
  {
    label: "03 / SPATIAL",
    title: "Geospatial Data Engineering",
    desc: "Procesamiento e inferencia estadística espacial a nivel de radio censal y manzana.",
  },
  {
    label: "04 / RUNTIME",
    title: "Production-Ready Core",
    desc: "Código modularizado con Python, SQL e infraestructura optimizada de punta a punta.",
  },
];

export function DataScienceHero() {
  const params = useParams();
  const locale = (params?.locale as string) ?? "es";

  return (
    <section
      className="relative flex flex-col"
      style={{ height: "100svh", minHeight: "700px", backgroundColor: "#050505" }}
    >
      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Ken Burns — slow continuous camera glide */}
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
          <Image
            src="/perfiles/data-science-bg.jpg"
            alt="Data Science — machine learning neural network visualization"
            fill
            className="object-cover object-center"
            priority
            quality={90}
            sizes="100vw"
            style={{ filter: "saturate(1.1) contrast(1.05) brightness(0.72)" }}
          />
        </motion.div>
      </div>

      {/* ── GRADIENT OVERLAYS ── */}
      {/* Bottom-heavy: ensures footer grid and title readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, #050505 0%, rgba(5,5,5,0.88) 20%, rgba(5,5,5,0.35) 52%, rgba(5,5,5,0.05) 100%)",
        }}
      />
      {/* Left vignette: text contrast */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(5,5,5,0.6) 0%, rgba(5,5,5,0.12) 45%, transparent 100%)",
        }}
      />
      {/* Top vignette: subtle */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5,5,5,0.55) 0%, transparent 22%)",
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
              color: BLUE,
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: BLUE, flexShrink: 0 }}
            />
            // CORE MASTERY&nbsp;//&nbsp;PERFIL 03&nbsp;//&nbsp;APPLIED DATA SCIENCE
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
            marginBottom: "20px",
            userSelect: "none",
          }}
        >
          PREDICTIVE
          <br />
          ENGINES
        </motion.h1>

        {/* Manifesto */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.62 }}
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
          No analizo datos para generar reportes estáticos que llegan tarde.
          Construyo pipelines y modelos predictivos que procesan el caos en tiempo real.
          Mi enfoque combina la rigidez matemática con la ingeniería de software para
          desplegar soluciones de Machine Learning, Deep Learning y NLP integradas
          directamente en el core de la infraestructura del negocio.
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
                  color: BLUE,
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
                  color: "rgba(255,255,255,0.28)",
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
            background: `linear-gradient(to bottom, transparent, ${BLUE})`,
          }}
          animate={{ height: [0, 52] }}
          transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
        />
      </div>
    </section>
  );
}
