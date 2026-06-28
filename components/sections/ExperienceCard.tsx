"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export type ExperienceData = {
  id: string;
  number: string;
  title: string;
  date: string;
  location: string;
  role: string;
  description: string;
  learning: string;
  image: string;
  imageAlt: string;
  badges: string[];
  tech?: string[];
};

export function ExperienceCard({ exp, index }: { exp: ExperienceData; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const photoLeft = index % 2 === 0;

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: EASE }}
        className={photoLeft ? "order-1" : "order-1 lg:order-2"}
      >
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative overflow-hidden group"
          style={{
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(15,22,35,0.5)",
            backdropFilter: "blur(16px) saturate(180%)",
            boxShadow:
              "0 24px 48px -12px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          {/* Glass shimmer */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 45%, rgba(255,255,255,0.01) 100%)",
              borderRadius: "20px",
            }}
          />

          {/* Image */}
          <div className="relative" style={{ aspectRatio: "4/3", overflow: "hidden" }}>
            <Image
              src={exp.image}
              alt={exp.imageAlt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 55%, rgba(6,8,13,0.55) 100%)",
              }}
            />
          </div>

          {/* Number badge */}
          <div
            className="absolute top-4 left-4 z-20"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
              background: "rgba(6,8,13,0.78)",
              backdropFilter: "blur(12px)",
              padding: "4px 10px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {exp.number}
          </div>
        </motion.div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.13 }}
        className={`flex flex-col gap-6 ${photoLeft ? "order-2" : "order-2 lg:order-1"}`}
      >
        {/* Role pill */}
        <div className="flex items-center gap-3">
          <div style={{ width: "20px", height: "1px", background: "#2B6FE8", flexShrink: 0 }} />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#4A8BFF",
            }}
          >
            {exp.role}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-serif"
          style={{
            fontSize: "clamp(26px, 3vw, 44px)",
            fontWeight: 400,
            color: "#F0F4FB",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          {exp.title}
        </h3>

        {/* Meta */}
        <div
          className="flex flex-wrap gap-5"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "#6B7A95",
            letterSpacing: "0.04em",
          }}
        >
          <span>📅 {exp.date}</span>
          <span>📍 {exp.location}</span>
        </div>

        {/* Description */}
        <p style={{ fontSize: "16px", lineHeight: 1.78, color: "#C5CFE2" }}>
          {exp.description}
        </p>

        {/* Learning block */}
        <div
          style={{
            borderRadius: "12px",
            padding: "16px 20px",
            background: "rgba(74,139,255,0.04)",
            border: "1px solid rgba(74,139,255,0.10)",
            backdropFilter: "blur(8px)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#4A8BFF",
              marginBottom: "8px",
            }}
          >
            Aprendizaje clave
          </p>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.65,
              color: "#C5CFE2",
              fontStyle: "italic",
            }}
          >
            &ldquo;{exp.learning}&rdquo;
          </p>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          {exp.badges.map((badge) => (
            <span
              key={badge}
              style={{
                fontSize: "12px",
                padding: "5px 12px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                color: "#6B7A95",
                backdropFilter: "blur(6px)",
              }}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Tech */}
        {exp.tech && exp.tech.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {exp.tech.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  background: "rgba(43,111,232,0.06)",
                  border: "1px solid rgba(43,111,232,0.14)",
                  color: "#4A8BFF",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
