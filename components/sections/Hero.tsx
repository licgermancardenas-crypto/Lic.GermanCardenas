"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "next-intl";
import { HexField } from "@/components/HexField";
import { CountUp } from "@/components/CountUp";
import { COMPANIES_COUNT, yearsOfExperience } from "@/lib/experience-data";
import { CASES_COUNT } from "@/components/sections/FeaturedCases";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const COPY = {
  es: {
    available: "DISPONIBLE · REMOTO",
    h1: ["Construyo", "sistemas de", "inteligencia", "para decisiones", "de negocio."],
    body: (y: string) =>
      `${y} años traduciendo datos en decisiones que mueven millones en agroindustria, retail, real estate, fintech y servicios financieros.`,
    remote: "Disponible para trabajo remoto",
    ctaCases: "Ver casos destacados",
    ctaTalk: "Hablemos",
    ctaCv: "Descargar CV",
    production: "─── EN PRODUCCIÓN",
    metrics: [
      { value: String(CASES_COUNT), label: "casos\npublicados" },
      { value: "1", label: "hackathon\nganado" },
      { value: "1M+", label: "registros\nprocesados" },
      { value: "24", label: "provincias\ncubiertas" },
      { value: String(COMPANIES_COUNT), label: "empresas\ntransformadas" },
      { value: "4", label: "idiomas\nprofesionales" },
    ],
  },
  en: {
    available: "AVAILABLE · REMOTE",
    h1: ["I build", "", "intelligence", "systems for", "business decisions."],
    body: (y: string) =>
      `${y} years turning data into decisions that move millions in agribusiness, retail, real estate, fintech and financial services.`,
    remote: "Available for remote work",
    ctaCases: "See featured cases",
    ctaTalk: "Let's talk",
    ctaCv: "Download CV",
    production: "─── IN PRODUCTION",
    metrics: [
      { value: String(CASES_COUNT), label: "published\ncases" },
      { value: "1", label: "hackathon\nwon" },
      { value: "1M+", label: "records\nprocessed" },
      { value: "24", label: "provinces\ncovered" },
      { value: String(COMPANIES_COUNT), label: "companies\ntransformed" },
      { value: "4", label: "professional\nlanguages" },
    ],
  },
} as const;

export function Hero() {
  const t = COPY[useLocale() === "en" ? "en" : "es"];
  const years = yearsOfExperience();
  const metrics = t.metrics;
  useEffect(() => {
    console.log(
      "%cHola.",
      "color: #4A8BFF; font-size: 24px;"
    );
    console.log(
      "%cSi estás leyendo esto, probablemente sepas código.\nEstoy disponible para proyectos serios.\nlic.germancardenas@gmail.com",
      "color: #C5CFE2; font-size: 14px; line-height: 1.6;"
    );
  }, []);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: "#06080D" }}
    >
      {/* PHOTO — full-bleed background */}
      <div className="absolute inset-0">
        <Image
          src="/photo.jpg"
          alt="Germán Cárdenas"
          fill
          priority
          className="object-contain object-[center_bottom] md:object-[right_center]"
          sizes="100vw"
          style={{
            filter: "brightness(0.80) contrast(1.06) saturate(0.88)",
          }}
        />
        {/* Mobile only: top-to-bottom fade so the text never sits on the face */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(6,8,13,0.96) 0%, rgba(6,8,13,0.90) 55%, rgba(6,8,13,0.55) 80%, rgba(6,8,13,0.35) 100%)",
          }}
        />
        {/* Left-to-right gradient: text readable on left, photo visible on right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(6,8,13,0.98) 0%, rgba(6,8,13,0.92) 30%, rgba(6,8,13,0.60) 52%, rgba(6,8,13,0.15) 72%, rgba(6,8,13,0.05) 100%)",
          }}
        />
        {/* Bottom fade for metrics */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(6,8,13,0.85) 0%, transparent 30%)",
          }}
        />
      </div>

      {/* Subtle blue atmospheric tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 40%, rgba(26,58,140,0.25) 0%, transparent 60%)",
        }}
      />

      {/* Grilla hexagonal viva (detrás del texto, se desvanece antes de la foto) */}
      <div
        className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,black_35%,transparent_70%)] md:[mask-image:linear-gradient(to_right,black_25%,transparent_55%)]"
      >
        <HexField className="w-full h-full" />
      </div>

      <div className="container-custom pt-28 pb-8 relative z-10">
        {/* TEXT — left half only, max-width keeps it from clashing with photo */}
        <motion.div
          className="max-w-xl lg:max-w-2xl flex flex-col gap-8"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Badge pills */}
          <motion.div variants={item} className="flex flex-wrap gap-2">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: "rgba(245,181,68,0.10)",
                backdropFilter: "blur(24px) saturate(180%)",
                border: "1px solid rgba(245,181,68,0.25)",
                color: "#F5B544",
                fontSize: "12px",
                letterSpacing: "0.08em",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  backgroundColor: "#F5B544",
                  animation: "pulse-dot 4s ease-in-out infinite",
                }}
              />
              HACKATHON WINNER · 2025
            </span>
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: "rgba(74,139,255,0.08)",
                backdropFilter: "blur(24px) saturate(180%)",
                border: "1px solid rgba(74,139,255,0.18)",
                color: "#4A8BFF",
                fontSize: "12px",
                letterSpacing: "0.08em",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  backgroundColor: "#4ADE80",
                  animation: "pulse-dot 4s ease-in-out infinite 1s",
                }}
              />
              {t.available}
            </span>
          </motion.div>

          {/* H1 — single font, large */}
          <motion.h1
            variants={item}
            style={{
              textTransform: "uppercase",
              fontSize: "clamp(48px, 6.5vw, 100px)",
              fontWeight: 600,
              color: "#F0F4FB",
              lineHeight: 0.97,
              letterSpacing: "-0.02em",
            }}
          >
            {t.h1[0]}<br />
            {t.h1[1] && <>{t.h1[1]}{" "}</>}
            <span>{t.h1[2]}</span>
            <br />
            {t.h1[3]}<br />
            {t.h1[4]}
          </motion.h1>

          {/* Subtitle */}
          <motion.div variants={item} className="flex items-center gap-4">
            <div className="w-8 h-px" style={{ backgroundColor: "#3F4A5F" }} />
            <p
              style={{
                fontSize: "12px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#8D9AB3",
              }}
            >
              Financial Analyst · Data Scientist · AI Engineer
            </p>
          </motion.div>

          {/* Body */}
          <motion.p
            variants={item}
            style={{ fontSize: "clamp(15px, 2vw, 19px)", color: "#C5CFE2", lineHeight: 1.6, maxWidth: "480px" }}
          >
            {t.body(years)}
          </motion.p>

          {/* Location */}
          <motion.p
            variants={item}
            style={{
              fontSize: "13px",
              letterSpacing: "0.08em",
              color: "#8D9AB3",
            }}
          >
            Buenos Aires, Argentina
            <span style={{ color: "#7888A5", margin: "0 12px" }}>|</span>
            <span style={{ color: "#4A8BFF" }}>{t.remote}</span>
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo("casos")}
              className="inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                padding: "14px 28px",
                borderRadius: "999px",
                background: "#2B6FE8",
                color: "#fff",
                fontSize: "15px",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 8px 32px rgba(43,111,232,0.45)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {t.ctaCases}
            </button>

            <a
              href="mailto:lic.germancardenas@gmail.com"
              className="inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                padding: "14px 28px",
                borderRadius: "999px",
                background: "rgba(15,22,35,0.55)",
                backdropFilter: "blur(24px) saturate(180%)",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "#C5CFE2",
                fontSize: "15px",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              {t.ctaTalk}
            </a>

            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                padding: "14px 22px",
                borderRadius: "999px",
                background: "rgba(15,22,35,0.55)",
                backdropFilter: "blur(24px) saturate(180%)",
                border: "1px solid rgba(255,255,255,0.06)",
                color: "#8D9AB3",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#C5CFE2";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(74,139,255,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#8D9AB3";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.06)";
              }}
            >
              {t.ctaCv}
            </a>
          </motion.div>
        </motion.div>

        {/* METRICS — bottom of hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
          className="mt-16 pt-10 relative"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p
            className="mb-10"
            style={{
              fontSize: "12px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#7888A5",
            }}
          >
            {t.production}
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-x-4 sm:gap-x-8 lg:gap-x-16 gap-y-6 lg:gap-y-10">
            {metrics.map((m, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span
                  className="leading-none"
                  style={{
                    textTransform: "uppercase",
                    fontSize: "clamp(36px, 4.5vw, 64px)",
                    fontWeight: 600,
                    color: "#F0F4FB",
                    letterSpacing: "0.02em",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  <CountUp value={m.value} delay={900 + i * 90} />
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#8D9AB3",
                    lineHeight: 1.5,
                    whiteSpace: "pre-line",
                  }}
                >
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
