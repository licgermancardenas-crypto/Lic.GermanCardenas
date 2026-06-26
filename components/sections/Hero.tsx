"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const metrics = [
  { value: "4",    label: "plataformas\nen operación" },
  { value: "1",    label: "hackathon\nganado" },
  { value: "1M+",  label: "registros\nprocesados" },
  { value: "24",   label: "provincias\ncubiertas" },
  { value: "6",    label: "empresas\ntransformadas" },
  { value: "4",    label: "idiomas\nprofesionales" },
];

export function Hero() {
  const photoRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 600], [0, -30]);

  useEffect(() => {
    console.log(
      "%cHola.",
      "color: #4A8BFF; font-size: 24px; font-family: 'Instrument Serif', serif;"
    );
    console.log(
      "%cSi estás leyendo esto, probablemente sepas código.\nEstoy disponible para proyectos serios.\nlic.germancardenas@gmail.com",
      "color: #C5CFE2; font-size: 14px; font-family: monospace; line-height: 1.6;"
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
      {/* Atmospheric radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, #1A3A8C 0%, transparent 65%)",
          opacity: 0.55,
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(74,139,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(74,139,255,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container-custom pt-28 pb-8 relative z-10">
        {/* 12-col grid */}
        <div className="grid lg:grid-cols-12 gap-x-16 items-center min-h-[calc(100vh-200px)]">

          {/* LEFT — 7 cols */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-8"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {/* Badge pills — glassmorphism */}
            <motion.div variants={item} className="flex flex-wrap gap-2">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
                style={{
                  background: "rgba(245,181,68,0.08)",
                  backdropFilter: "blur(24px) saturate(180%)",
                  border: "1px solid rgba(245,181,68,0.2)",
                  color: "#F5B544",
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: "#F5B544",
                    animation: "pulse 4s ease-in-out infinite",
                  }}
                />
                HACKATHON WINNER · 2025
              </span>
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
                style={{
                  background: "rgba(74,139,255,0.06)",
                  backdropFilter: "blur(24px) saturate(180%)",
                  border: "1px solid rgba(74,139,255,0.15)",
                  color: "#4A8BFF",
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: "#4ADE80",
                    animation: "pulse 4s ease-in-out infinite 1s",
                  }}
                />
                DISPONIBLE · REMOTO
              </span>
            </motion.div>

            {/* H1 — Instrument Serif, no gradient, plain white */}
            <motion.h1
              variants={item}
              className="font-serif leading-[0.95] tracking-[-0.04em]"
              style={{
                fontSize: "clamp(52px, 7vw, 108px)",
                fontWeight: 400,
                color: "#F0F4FB",
              }}
            >
              Construyo<br />
              sistemas de{" "}
              <span style={{ fontStyle: "italic", color: "#F0F4FB" }}>
                inteligencia
              </span>
              <br />
              para decisiones<br />
              de negocio.
            </motion.h1>

            {/* Subtitle — mono uppercase */}
            <motion.div variants={item} className="flex items-center gap-4">
              <div className="w-8 h-px" style={{ backgroundColor: "#3F4A5F" }} />
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#6B7A95",
                }}
              >
                Financial Analyst · Data Scientist · AI Engineer
              </p>
            </motion.div>

            {/* Body */}
            <motion.p
              variants={item}
              className="leading-relaxed max-w-lg"
              style={{ fontSize: "20px", color: "#C5CFE2", lineHeight: 1.6 }}
            >
              6+ años traduciendo datos en decisiones que mueven millones en
              agroindustria, retail, real estate, fintech y servicios financieros.
            </motion.p>

            {/* Location */}
            <motion.p
              variants={item}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                letterSpacing: "0.08em",
                color: "#6B7A95",
              }}
            >
              Buenos Aires, Argentina
              <span style={{ color: "#3F4A5F", margin: "0 12px" }}>|</span>
              <span style={{ color: "#4A8BFF" }}>Disponible para trabajo remoto</span>
            </motion.p>

            {/* Glass pill CTAs */}
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
                    "0 8px 32px rgba(43,111,232,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                Ver casos destacados
              </button>

              <a
                href="mailto:lic.germancardenas@gmail.com"
                className="inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  padding: "14px 28px",
                  borderRadius: "999px",
                  background: "rgba(15,22,35,0.6)",
                  backdropFilter: "blur(24px) saturate(180%)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "#C5CFE2",
                  fontSize: "15px",
                  fontWeight: 500,
                }}
              >
                Hablemos
              </a>

              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  padding: "14px 22px",
                  borderRadius: "999px",
                  background: "rgba(15,22,35,0.6)",
                  backdropFilter: "blur(24px) saturate(180%)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  color: "#6B7A95",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#C5CFE2";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(74,139,255,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#6B7A95";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.06)";
                }}
              >
                Descargar CV
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT — 5 cols photo */}
          <motion.div
            className="hidden lg:block lg:col-span-5"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
          >
            <div className="relative" ref={photoRef}>
              {/* Glow halo behind photo */}
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: "-40px",
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(74,139,255,0.20) 0%, transparent 60%)",
                  filter: "blur(40px)",
                  borderRadius: "24px",
                }}
              />

              {/* Photo container */}
              <motion.div
                style={{ y: photoY }}
                className="relative overflow-hidden"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.06)",
                    aspectRatio: "4/5",
                  }}
                >
                  <Image
                    src="/photo.jpg"
                    alt="Germán Cárdenas"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 1024px) 0px, 40vw"
                    style={{
                      filter: "brightness(0.85) contrast(1.05) saturate(0.9)",
                    }}
                  />
                  {/* Duotone blue overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "rgba(43,111,232,0.08)",
                      mixBlendMode: "color",
                    }}
                  />
                  {/* Subtle vignette */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 60%, rgba(6,8,13,0.4) 100%)",
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* METRICS — editorial, no borders, just typography */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
          className="mt-16 pt-10 relative"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p
            className="mb-10"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#3F4A5F",
            }}
          >
            ─── EN PRODUCCIÓN
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-x-16 gap-y-10">
            {metrics.map((m, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span
                  className="leading-none"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "clamp(36px, 4.5vw, 64px)",
                    fontWeight: 300,
                    color: "#F0F4FB",
                    letterSpacing: "-0.04em",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {m.value}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#6B7A95",
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
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
