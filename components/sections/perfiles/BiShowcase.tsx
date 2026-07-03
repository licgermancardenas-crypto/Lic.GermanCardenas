"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EMERALD = "#10b981";

type System = {
  number: string;
  name: string;
  tagline: string;
  images: string[];
};

const systems: System[] = [
  {
    number: "A",
    name: "Terranova",
    tagline:
      "E-commerce & Retail — margen bruto, rotación de inventario, riesgo de stock-out por sucursal.",
    images: ["/perfiles/bi/dash-terranova-01.png"],
  },
  {
    number: "B",
    name: "TechNova Finance",
    tagline:
      "SaaS Revenue Ops — ingresos por categoría, avance de ventas, alertas de concentración de riesgo.",
    images: [
      "/perfiles/bi/dash-technova-01.png",
      "/perfiles/bi/dash-technova-02.png",
    ],
  },
  {
    number: "C",
    name: "Atlas One",
    tagline:
      "Investment & Portfolio Management — revenue de tarjetas por red, holdings, radar de instrumentos.",
    images: [
      "/perfiles/bi/dash-atlasone-sales.png",
      "/perfiles/bi/dash-atlasone-portfolio-01.png",
      "/perfiles/bi/dash-atlasone-portfolio-02.png",
    ],
  },
  {
    number: "D",
    name: "UBank",
    tagline:
      "Digital Banking & Wallets — tarjetas virtuales, transferencias entre billeteras, ingresos consolidados.",
    images: [
      "/perfiles/bi/dash-ubank-01.png",
      "/perfiles/bi/dash-ubank-02.png",
    ],
  },
];

function SystemRow({ system, index }: { system: System; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "48px",
        paddingBottom: "56px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: EASE }}
        className="flex items-baseline gap-4 mb-8"
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.2em",
            color: EMERALD,
          }}
        >
          {system.number}
        </span>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(20px, 2.2vw, 28px)",
            fontWeight: 500,
            color: "#FFFFFF",
            letterSpacing: "0.01em",
          }}
        >
          {system.name}
        </h3>
        <span
          className="hidden sm:block"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.35)",
          }}
        >
          — {system.tagline}
        </span>
      </motion.div>
      <p
        className="sm:hidden mb-5"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          lineHeight: 1.6,
          color: "rgba(255,255,255,0.35)",
        }}
      >
        {system.tagline}
      </p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
        className={`grid gap-4 ${
          system.images.length === 1
            ? "grid-cols-1"
            : "grid-cols-1 sm:grid-cols-2"
        }`}
      >
        {system.images.map((src, i) => (
          <div
            key={i}
            className="group relative overflow-hidden"
            style={{
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "#0A0A0A",
            }}
          >
            <div className="relative w-full aspect-[16/10]">
              <Image
                src={src}
                alt={`${system.name} — dashboard ${i + 1}`}
                fill
                quality={90}
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: "inset 0 0 0 1px rgba(16,185,129,0)",
                transition: "box-shadow 0.3s ease",
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function BiShowcase() {
  return (
    <section
      id="bi-showcase"
      style={{
        backgroundColor: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Header */}
      <div className="container-custom pt-24 sm:pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="mb-16"
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: EMERALD,
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "24px",
                height: "1px",
                background: EMERALD,
              }}
            />
            PORTFOLIO EJECUTABLE
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 72px)",
              fontWeight: 400,
              color: "#FFFFFF",
              lineHeight: 1.0,
              letterSpacing: "0.03em",
              textTransform: "uppercase",
              marginBottom: "28px",
            }}
          >
            DASHBOARDS
            <br />
            <span style={{ color: EMERALD }}>EN PRODUCCIÓN.</span>
          </h2>

          {/* Intro copy */}
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.78,
              color: "rgba(255,255,255,0.55)",
              maxWidth: "680px",
            }}
          >
            Una muestra de sistemas de tablero diseñados para distintos
            verticales de negocio: retail, fintech, gestión de inversiones
            y banca digital. Cada uno resuelve el mismo problema de fondo
            — comprimir datos operativos dispersos en decisiones claras
            para quien mira la pantalla una vez por día.
          </p>
        </motion.div>
      </div>

      {/* Full-bleed atmospheric band */}
      <div
        className="relative w-full"
        style={{ height: "26vh", minHeight: "220px", maxHeight: "380px" }}
      >
        <Image
          src="/perfiles/bi/bi-interstitial.jpg"
          alt="Workstation multi-monitor con dashboards de datos en tiempo real"
          fill
          className="object-cover"
          style={{ objectPosition: "center 40%" }}
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #050505 0%, rgba(5,5,5,0.6) 40%, rgba(5,5,5,0.15) 75%, rgba(5,5,5,0.35) 100%)",
          }}
        />
        <div className="absolute bottom-8 left-0 px-6 md:px-16 lg:px-24">
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(13px, 1.6vw, 18px)",
              letterSpacing: "0.02em",
              color: "rgba(255,255,255,0.85)",
              maxWidth: "560px",
            }}
          >
            De la arquitectura de datos al tablero ejecutivo.
          </p>
        </div>
      </div>

      {/* Systems */}
      <div className="container-custom pt-4 pb-24">
        {systems.map((system, i) => (
          <SystemRow key={system.name} system={system} index={i} />
        ))}
      </div>
    </section>
  );
}
