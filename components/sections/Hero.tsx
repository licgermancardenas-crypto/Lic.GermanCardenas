"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, ArrowRight, MessageCircle, Download, Command } from "lucide-react";

const EASE: [number, number, number, number] = [0.21, 1.02, 0.73, 1.0];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const metrics = [
  { value: "4", label: "plataformas\nen operación" },
  { value: "1", label: "hackathon\nganado" },
  { value: "1M+", label: "registros\nprocesados" },
  { value: "24", label: "provincias\ncubiertas" },
  { value: "6", label: "empresas\ntransformadas" },
  { value: "4", label: "idiomas\nprofesionales" },
];

export function Hero() {
  useEffect(() => {
    console.log(
      "%c 👋 Hey developer! ",
      "background: #0A0E1A; color: #4F7CFF; font-size: 13px; padding: 4px 8px; border-radius: 4px;",
      "\n\nPortfolio de Germán Cárdenas\nBuilt with Next.js 16 · Tailwind CSS v4 · Framer Motion\n\nhttps://github.com/licgermancardenas-crypto/Lic.GermanCardenas\n\nPD: Presioná ⌘K para el command palette 😉"
    );
  }, []);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A0E1A]">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(79,124,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(79,124,255,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Accent blobs */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] rounded-full opacity-[0.06] blur-[160px] pointer-events-none bg-[#4F7CFF]" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-[0.04] blur-[100px] pointer-events-none bg-[#06b6d4]" />

      <div className="container-custom pt-28 pb-16 relative z-10">
        <div className="max-w-[680px] lg:ml-auto">
          <motion.div variants={container} initial="hidden" animate="visible">
            {/* Badges */}
            <motion.div variants={item} className="flex flex-wrap gap-2 mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] text-sm font-mono tracking-wide">
                🏆 Hackathon winner · 2025
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#4F7CFF]/10 border border-[#4F7CFF]/20 text-[#4F7CFF] text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-[#4F7CFF] animate-pulse" />
                Próximo inicio: enero 2026
              </span>
            </motion.div>

            {/* Headline — serif editorial */}
            <motion.div variants={item} className="mb-5">
              <h1
                className="font-serif text-[#F5F7FA] leading-[1.08] tracking-[-0.02em]"
                style={{ fontSize: "clamp(36px, 5.5vw, 72px)", fontWeight: 400 }}
              >
                Construyo sistemas de{" "}
                <span className="italic" style={{ color: "#4F7CFF" }}>
                  inteligencia
                </span>
                <br />
                para decisiones de negocio.
              </h1>
            </motion.div>

            {/* Divider + subhead */}
            <motion.div variants={item} className="flex items-center gap-4 mb-6">
              <span className="text-[#6B7689] text-xs font-mono select-none">━━━━</span>
              <p className="text-[#B8C1D1] text-base font-medium">
                Financial Analyst · Data Scientist · AI Engineer
              </p>
            </motion.div>

            {/* Description */}
            <motion.p variants={item} className="text-[#B8C1D1] text-lg leading-relaxed mb-8 max-w-lg">
              6+ años traduciendo datos en decisiones que mueven millones en
              agroindustria, retail, real estate, fintech y servicios financieros.
            </motion.p>

            {/* Location */}
            <motion.div variants={item} className="flex items-center gap-2 text-sm text-[#6B7689] mb-10">
              <MapPin className="w-3.5 h-3.5" />
              <span>Buenos Aires, Argentina</span>
              <span className="mx-2 opacity-30">|</span>
              <span className="text-[#4F7CFF]">Disponible para trabajo remoto</span>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-3 mb-16">
              <button
                onClick={() => scrollTo("casos")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-base text-white transition-all hover:shadow-[0_8px_30px_rgba(255,107,53,0.35)] hover:-translate-y-0.5"
                style={{ backgroundColor: "#FF6B35" }}
              >
                Ver casos destacados
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="mailto:lic.germancardenas@gmail.com"
                className="flex items-center gap-2 px-7 py-3.5 rounded-lg border border-[#1F2937] text-[#B8C1D1] font-semibold text-base hover:border-[#4F7CFF] hover:text-white transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                Hablemos
              </a>
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 px-5 py-3.5 rounded-lg border border-[#1F2937] text-[#6B7689] font-medium text-sm hover:border-[#4F7CFF] hover:text-[#B8C1D1] transition-all"
              >
                <Download className="w-4 h-4" />
                CV
              </a>
              <button
                onClick={() => {
                  const event = new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true });
                  window.dispatchEvent(event);
                }}
                className="hidden md:flex items-center gap-2 px-4 py-3.5 rounded-lg border border-[#1F2937] text-[#6B7689] font-medium text-sm hover:border-[#4F7CFF] hover:text-[#B8C1D1] transition-all font-mono"
                title="Abrir command palette"
              >
                <Command className="w-3.5 h-3.5" />
                K
              </button>
            </motion.div>

            {/* Metrics — editorial typography */}
            <motion.div variants={item}>
              <div className="pt-8 border-t border-[#1F2937] grid grid-cols-3 sm:grid-cols-6 gap-x-8 gap-y-8">
                {metrics.map((m, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <span
                      className="font-mono text-[#F5F7FA] leading-none"
                      style={{ fontSize: "clamp(24px, 3.5vw, 48px)", fontWeight: 400 }}
                    >
                      {m.value}
                    </span>
                    <span className="text-[11px] uppercase tracking-widest text-[#6B7689] leading-tight whitespace-pre-line font-mono">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Photo — left side */}
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[540px] overflow-hidden rounded-r-2xl border-r border-t border-b border-[#1F2937]">
        <Image
          src="/photo.jpg"
          alt="Germán Cárdenas"
          fill
          className="object-cover object-center"
          priority
          sizes="400px"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0A0E1A]/60 via-[#0A0E1A]/10 to-transparent" />
      </div>
    </section>
  );
}
