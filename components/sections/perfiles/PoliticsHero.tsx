"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const CYAN = "#00A3C4";

const GRID = [
  {
    label: "01 / GEOSPATIAL",
    title: "Cartografía Electoral Avanzada",
    desc: "Procesamiento espacial de datos históricos a nivel de circuito y mesa. Identificación algorítmica de zonas de oportunidad, bastiones estructurales y optimización de rutas de canvassing.",
  },
  {
    label: "02 / ENGINE",
    title: "Procesamiento de Lenguaje Natural",
    desc: "Modelado de tópicos, análisis de sentimiento y detección de anomalías en grandes volúmenes de datos digitales. A/B Testing automatizado para microsegmentación en tiempo real.",
  },
  {
    label: "03 / VISUALIZATION",
    title: "Business Intelligence Electoral",
    desc: "Dashboards integrados que consolidan tracking cuantitativo, demografía, métricas digitales y control presupuestario. Centralización operativa para reducir tiempos de respuesta ante crisis.",
  },
  {
    label: "04 / CORE METHOD",
    title: "Eficiencia Operativa de Campaña",
    desc: "La ventaja competitiva radica en la velocidad del ciclo: capturar, procesar, segmentar y actuar antes que el adversario. El electorado no es un bloque homogéneo.",
  },
];

export function PoliticsHero() {
  const params = useParams();
  const locale = (params?.locale as string) ?? "es";
  const [imgError, setImgError] = useState(false);

  return (
    <section
      className="relative flex flex-col"
      style={{ height: "100svh", minHeight: "700px", backgroundColor: "#050505" }}
    >
      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Sunset gradient — always visible, Congress photo enhances it */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #1a0800 0%, #3d1400 14%, #7a2e00 28%, #c45200 42%, #e07000 48%, #c45200 54%, #4a1a00 70%, #150800 84%, #050505 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 55%, rgba(200,90,0,0.28) 0%, transparent 70%)",
          }}
        />

        {/* Congress photo — replace /public/perfiles/congreso-sunset.jpg to activate */}
        {!imgError && (
          <motion.div
            className="absolute inset-0"
            animate={{ scale: [1.0, 1.05] }}
            transition={{
              duration: 22,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Image
              src="/perfiles/congreso-sunset.jpg"
              alt="Congreso de la Nación Argentina al atardecer"
              fill
              className="object-cover object-center"
              priority
              quality={95}
              sizes="100vw"
              style={{ filter: "saturate(0.72) contrast(1.1) brightness(0.85)" }}
              onError={() => setImgError(true)}
            />
          </motion.div>
        )}
      </div>

      {/* ── GRADIENT OVERLAYS ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, #050505 0%, rgba(5,5,5,0.9) 25%, rgba(5,5,5,0.4) 58%, rgba(5,5,5,0.08) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(5,5,5,0.6) 0%, rgba(5,5,5,0.1) 55%, transparent 100%)",
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
      <div className="relative z-10 mt-auto px-6 md:px-16 lg:px-24">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
          className="mb-5 flex items-center gap-3"
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: CYAN,
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: CYAN, flexShrink: 0 }}
            />
            DATA-DRIVEN ELECTORAL STRATEGY&nbsp;//&nbsp;PERFIL 06&nbsp;//&nbsp;ATLAS ANALYTICS
          </span>
        </motion.div>

        {/* Title — ARCHIVO BLACK */}
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: EASE, delay: 0.45 }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(50px, 9.5vw, 136px)",
            fontWeight: 400,
            color: "#FFFFFF",
            lineHeight: 0.93,
            letterSpacing: "0.03em",
            textTransform: "uppercase",
            marginBottom: "22px",
          }}
        >
          POLITICAL
          <br />
          INTELLIGENCE
        </motion.h1>

        {/* Manifesto */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.62 }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(11px, 1.3vw, 14px)",
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.5)",
            maxWidth: "600px",
            marginBottom: "36px",
            letterSpacing: "0.025em",
          }}
        >
          El análisis de datos transformado en poder estratégico. Traduzco la
          complejidad del territorio y el caos de la conversación digital en
          modelos predictivos, segmentación científica y tableros tácticos. Sin
          intuición ni supuestos: arquitectura de datos diseñada para optimizar
          recursos, mitigar riesgos y dominar la estrategia electoral en
          escenarios de alta complejidad.
        </motion.p>

        {/* ── SPACEX DATA GRID ── */}
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
                paddingBottom: "24px",
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
                  color: CYAN,
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
            background: `linear-gradient(to bottom, transparent, ${CYAN})`,
          }}
          animate={{ height: [0, 52] }}
          transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
        />
      </div>
    </section>
  );
}
