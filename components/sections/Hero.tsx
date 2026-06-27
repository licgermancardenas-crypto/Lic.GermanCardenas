"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const perf = [
  { label: "PROJECTS",  value: "04",        sub: "▲ IN PROD" },
  { label: "RECORDS",   value: "1,004,894",  sub: "▲ ETL PIPE" },
  { label: "REGIONS",   value: "24",         sub: "▲ GIS LAYER" },
  { label: "CLIENTS",   value: "3,387",      sub: "▲ ACTIVE" },
  { label: "LANGUAGES", value: "04",         sub: "▲ ES·EN·FR·IT" },
];

function LiveTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("es-AR", {
          timeZone: "America/Argentina/Buenos_Aires",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);
  return <>{time || "14:00"}</>;
}

export function Hero() {
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(
      "%cGermán Cárdenas",
      "color: #4A8BFF; font-size: 20px; font-family: 'Instrument Serif', serif;"
    );
    console.log(
      "%cFinancial Analyst · Data Scientist · AI Engineer\nlic.germancardenas@gmail.com\ngerman-cardenas-portfolio.vercel.app",
      "color: #8B95A8; font-size: 12px; font-family: monospace; line-height: 1.8;"
    );
  }, []);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: "#0A0B0F", paddingTop: "56px" }}
    >
      {/* Radial atmospheric glow */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "600px",
          background:
            "radial-gradient(ellipse 1200px 600px at 50% 0%, rgba(74,139,255,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="container-custom relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-16 items-center">

          {/* LEFT — col-span-7 */}
          <motion.div
            className="lg:col-span-7"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {/* REF code */}
            <motion.p
              variants={item}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#4A8BFF",
                marginBottom: "24px",
              }}
            >
              REF-001 / SENIOR ANALYST
            </motion.p>

            {/* Name — Instrument Serif */}
            <motion.h1
              variants={item}
              className="font-serif"
              style={{
                fontSize: "clamp(52px, 7vw, 96px)",
                fontWeight: 400,
                color: "#F0F4FB",
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
                marginBottom: "28px",
              }}
            >
              Germán<br />Cárdenas
            </motion.h1>

            {/* Subtitle — mono stacked */}
            <motion.div
              variants={item}
              className="flex flex-col gap-1 mb-8"
            >
              {["Financial Analyst", "Data Scientist", "AI Engineer"].map((role, i) => (
                <div key={role} className="flex items-center gap-3">
                  {i > 0 && (
                    <span style={{ color: "#1A1E2A", fontFamily: "var(--font-mono)", fontSize: "12px" }}>
                      ───
                    </span>
                  )}
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "13px",
                      letterSpacing: "0.06em",
                      color: "#5A6478",
                    }}
                  >
                    {role}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={item}
              style={{
                height: "1px",
                backgroundColor: "rgba(255,255,255,0.06)",
                marginBottom: "28px",
              }}
            />

            {/* Bio */}
            <motion.p
              variants={item}
              style={{
                fontSize: "19px",
                lineHeight: 1.65,
                color: "#C5CFE2",
                maxWidth: "480px",
                marginBottom: "12px",
              }}
            >
              Building decision intelligence systems for finance, ops, and enterprise platforms.
            </motion.p>
            <motion.p
              variants={item}
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#8B95A8",
                maxWidth: "480px",
                marginBottom: "40px",
              }}
            >
              6+ years across 6 industries. Built 4 platforms in production. Hackathon winner.
            </motion.p>

            {/* CTAs — institutional button style */}
            <motion.div variants={item} className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("casos")}
                className="inline-flex items-center gap-2 transition-all duration-200 group focus-ring"
                style={{
                  padding: "12px 24px",
                  borderRadius: "4px",
                  border: "1px solid #4A8BFF",
                  background: "transparent",
                  color: "#4A8BFF",
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  letterSpacing: "0.08em",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.backgroundColor = "rgba(74,139,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.backgroundColor = "transparent";
                }}
              >
                VIEW CASES
                <span
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  style={{ display: "inline-block" }}
                >
                  →
                </span>
              </button>

              <a
                href="mailto:lic.germancardenas@gmail.com"
                className="inline-flex items-center gap-2 transition-all duration-200 group focus-ring"
                style={{
                  padding: "12px 24px",
                  borderRadius: "4px",
                  border: "1px solid rgba(255,255,255,0.10)",
                  background: "transparent",
                  color: "#C5CFE2",
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
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
                HABLEMOS
                <span
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  style={{ display: "inline-block" }}
                >
                  →
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT — col-span-5 */}
          <div className="hidden lg:flex lg:col-span-5 flex-col gap-4">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
              ref={photoRef}
              className="relative overflow-hidden"
              style={{
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.06)",
                aspectRatio: "4/3",
              }}
            >
              <Image
                src="/photo.jpg"
                alt="Germán Cárdenas"
                fill
                className="object-cover object-center"
                priority
                sizes="40vw"
                style={{
                  filter: "brightness(0.82) contrast(1.08) saturate(0.85)",
                }}
              />
              {/* Duotone blue overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "rgba(43,95,181,0.10)", mixBlendMode: "multiply" }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to bottom, transparent 50%, rgba(10,11,15,0.5) 100%)",
                }}
              />

              {/* Live status — overlaid on photo bottom */}
              <div
                className="absolute bottom-3 left-3 right-3"
                style={{
                  background: "rgba(14,16,21,0.88)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "6px",
                  padding: "12px 16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: "#00C781",
                      animation: "pulse-live 2s ease-in-out infinite",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      letterSpacing: "0.10em",
                      color: "#00C781",
                    }}
                  >
                    AVAILABLE
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    letterSpacing: "0.08em",
                    color: "#5A6478",
                  }}
                >
                  BUENOS AIRES · <LiveTime /> ART
                </span>
              </div>
            </motion.div>

            {/* Performance panel */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
              style={{
                background: "#0E1015",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "8px",
                padding: "20px 24px",
              }}
            >
              {/* Panel header */}
              <div
                className="flex items-center justify-between pb-3 mb-3"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#5A6478",
                  }}
                >
                  PERFORMANCE
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.08em",
                    color: "#5A6478",
                  }}
                >
                  ──
                </span>
              </div>

              {/* Metric rows */}
              <div className="flex flex-col gap-2.5">
                {perf.map((m) => (
                  <div key={m.label} className="flex items-center justify-between">
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "10px",
                        letterSpacing: "0.12em",
                        color: "#5A6478",
                      }}
                    >
                      {m.label}
                    </span>
                    <div className="flex items-center gap-3">
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "13px",
                          fontWeight: 500,
                          color: "#F0F4FB",
                          fontVariantNumeric: "tabular-nums",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {m.value}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "10px",
                          letterSpacing: "0.08em",
                          color: "#00C781",
                        }}
                      >
                        {m.sub}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Timestamp */}
              <div
                className="pt-3 mt-3"
                style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.08em",
                    color: "#5A6478",
                  }}
                >
                  AS OF 27 JUN 2026
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
