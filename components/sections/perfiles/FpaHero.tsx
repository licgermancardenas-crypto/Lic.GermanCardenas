"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const SKILLS = [
  "Proyección Financiera",
  "Private Equity",
  "Portafolios Bursátiles",
  "Valuación DCF",
  "FP&A Corporativo",
];

export function FpaHero() {
  const params = useParams();
  const locale = (params?.locale as string) ?? "es";

  return (
    <section
      className="relative"
      style={{ height: "100svh", minHeight: "640px" }}
    >
      {/* Ken Burns image — slow forward + upward drift */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: [1, 1.07],
            x: ["0%", "-1.5%"],
            y: ["0%", "-1%"],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Image
            src="/ba-skyline-fpa.jpg"
            alt="Buenos Aires Financial District at dusk — BBVA building"
            fill
            className="object-cover object-center"
            priority
            quality={95}
            sizes="100vw"
          />
        </motion.div>
      </div>

      {/* Gradient: heavy bottom, left bias, light vignette top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(6,8,13,1) 0%, rgba(6,8,13,0.88) 30%, rgba(6,8,13,0.35) 62%, rgba(6,8,13,0.08) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(6,8,13,0.65) 0%, rgba(6,8,13,0.2) 50%, transparent 100%)",
        }}
      />

      {/* Back link — sits just below the fixed nav */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
        className="absolute top-20 left-0 px-6 md:px-16 lg:px-24"
      >
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 transition-colors duration-200"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color =
              "rgba(255,255,255,0.7)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color =
              "rgba(255,255,255,0.3)";
          }}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Germán Cárdenas
        </Link>
      </motion.div>

      {/* Hero text — bottom of viewport */}
      <div className="absolute bottom-0 left-0 right-0 px-6 pb-16 md:px-16 lg:px-24">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.35 }}
          className="flex items-center gap-3 mb-6"
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#2B6FE8",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: "#2B6FE8", flexShrink: 0 }}
            />
            PERFIL 01 · FINANCE
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: EASE, delay: 0.5 }}
          className="font-serif"
          style={{
            fontSize: "clamp(48px, 7.5vw, 110px)",
            fontWeight: 400,
            color: "#F0F4FB",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            marginBottom: "20px",
          }}
        >
          Financial Planning
          <br />
          <span style={{ fontStyle: "italic" }}>&amp; Analysis</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.65 }}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            letterSpacing: "0.06em",
            color: "rgba(255,255,255,0.4)",
            marginBottom: "28px",
          }}
        >
          FP&amp;A Specialist · Buenos Aires, Argentina
        </motion.p>

        {/* Skill chips */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.8 }}
          className="flex flex-wrap gap-2"
        >
          {SKILLS.map((skill) => (
            <span
              key={skill}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "5px 14px",
                borderRadius: "100px",
                border: "1px solid rgba(43,111,232,0.35)",
                color: "rgba(43,111,232,0.85)",
                background: "rgba(43,111,232,0.07)",
              }}
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Vertical scroll line — bottom right */}
      <div
        className="absolute bottom-6 right-8 flex flex-col items-center gap-1.5 pointer-events-none"
        style={{ opacity: 0.4 }}
      >
        <motion.div
          style={{
            width: 1,
            background:
              "linear-gradient(to bottom, transparent, rgba(255,255,255,0.5))",
          }}
          animate={{ height: [0, 52] }}
          transition={{ duration: 1.2, delay: 1.1, ease: "easeOut" }}
        />
      </div>
    </section>
  );
}
