"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const CYAN = "#00A3C4";

// Drone approach: 13s cinematic zoom, crossfade between 62%-82%
const DRONE_DURATION = 13;
const CROSSFADE_TIMES: [number, number, number] = [0, 0.62, 0.82];

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
  const [arrived, setArrived] = useState(false);

  return (
    <section
      className="relative flex flex-col"
      style={{ height: "100svh", minHeight: "700px", backgroundColor: "#050505" }}
    >
      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Sunset gradient — base layer */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #1a0800 0%, #3d1400 14%, #7a2e00 28%, #c45200 42%, #e07000 48%, #c45200 54%, #4a1a00 70%, #150800 84%, #050505 100%)",
          }}
        />

        {/* IMAGE 1 — Wide aerial panorama (drone start position)
            Zooms in with easeIn (slow → fast, like a drone accelerating).
            transform-origin: 50% 42% keeps the Congress dome centered during zoom. */}
        <motion.div
          className="absolute inset-0"
          style={{ transformOrigin: "50% 42%" }}
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 2.8, opacity: [1, 1, 0] }}
          transition={{
            duration: DRONE_DURATION,
            scale: { ease: [0.4, 0, 0.9, 1], duration: DRONE_DURATION },
            opacity: { times: CROSSFADE_TIMES, ease: "linear", duration: DRONE_DURATION },
          }}
          onAnimationComplete={() => setArrived(true)}
        >
          <Image
            src="/perfiles/congreso-wide.jpg"
            alt="Buenos Aires — vista aérea panorámica al anochecer"
            fill
            className="object-cover"
            style={{
              objectPosition: "center 42%",
              filter: "saturate(0.75) contrast(1.08) brightness(0.8)",
            }}
            priority
            quality={90}
            sizes="100vw"
          />
        </motion.div>

        {/* IMAGE 2 — Close-up Congress (drone arrival position)
            Fades in during the crossfade window, then hovers with a gentle breathe. */}
        <motion.div
          className="absolute inset-0"
          style={{ transformOrigin: "50% 48%" }}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={
            arrived
              ? { scale: [1.44, 1.5, 1.44], opacity: 1 }
              : { scale: 1.44, opacity: [0, 0, 1] }
          }
          transition={
            arrived
              ? {
                  scale: {
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                  opacity: { duration: 0 },
                }
              : {
                  duration: DRONE_DURATION,
                  scale: { ease: [0.6, 0, 0.35, 1], duration: DRONE_DURATION },
                  opacity: { times: CROSSFADE_TIMES, ease: "linear", duration: DRONE_DURATION },
                }
          }
        >
          <Image
            src="/perfiles/congreso-close.jpg"
            alt="Congreso de la Nación Argentina al atardecer"
            fill
            className="object-cover"
            style={{
              objectPosition: "center 48%",
              filter: "saturate(0.68) contrast(1.12) brightness(0.8)",
            }}
            quality={90}
            sizes="100vw"
          />
        </motion.div>

        {/* Radial warm glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 55%, rgba(200,90,0,0.28) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ── GRADIENT OVERLAYS ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, #050505 0%, rgba(5,5,5,0.82) 22%, rgba(5,5,5,0.2) 50%, rgba(5,5,5,0.04) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(5,5,5,0.55) 0%, rgba(5,5,5,0.08) 40%, transparent 100%)",
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

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: EASE, delay: 0.45 }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 3.8vw, 58px)",
            fontWeight: 400,
            color: "#FFFFFF",
            lineHeight: 1.05,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            marginBottom: "18px",
            maxWidth: "480px",
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
            fontWeight: 700,
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.82)",
            maxWidth: "560px",
            marginBottom: "36px",
            letterSpacing: "0.02em",
          }}
        >
          El análisis de datos transformado en poder estratégico. Traduzco la
          complejidad del territorio y el caos de la conversación digital en
          modelos predictivos, segmentación científica y tableros tácticos. Sin
          intuición ni supuestos: arquitectura de datos diseñada para optimizar
          recursos, mitigar riesgos y dominar la estrategia electoral en
          escenarios de alta complejidad.
        </motion.p>

        {/* ── DATA GRID ── */}
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
