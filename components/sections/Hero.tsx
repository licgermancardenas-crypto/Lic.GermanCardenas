"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Download, ArrowRight } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const EASE: [number, number, number, number] = [0.21, 1.02, 0.73, 1.0];

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const metrics = [
  { key: "years" as const },
  { key: "dashboards" as const },
  { key: "records" as const },
  { key: "companies" as const },
  { key: "languages" as const },
];

export function Hero() {
  const t = useTranslations("hero");

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white dark:bg-[#0a2540]"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(99,91,255,0.06) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient blobs */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-[#635bff]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="container-custom pt-24 pb-16 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Available badge */}
          <motion.div variants={item} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#635bff]/10 border border-[#635bff]/20 text-[#635bff] text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-[#635bff] animate-pulse" />
              {t("available")}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={item} className="mb-6">
            <h1
              className="font-bold leading-[1.08] tracking-[-0.04em] text-[#0a2540] dark:text-white"
              style={{ fontSize: "clamp(40px, 7vw, 72px)" }}
            >
              <span>{t("title_line1")}</span>
              <br />
              <span>{t("title_line2")}</span>
              <br />
              <span className="text-gradient">{t("title_line3")}</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="text-xl md:text-2xl text-[#425466] dark:text-[#a8c0d8] mb-8 max-w-2xl leading-relaxed"
          >
            {t("subtitle")}
          </motion.p>

          {/* Location */}
          <motion.div
            variants={item}
            className="flex items-center gap-2 text-[#8898aa] dark:text-[#6b8fa8] text-sm mb-10"
          >
            <MapPin className="w-4 h-4" />
            <span>{t("location")}</span>
            <span className="mx-2">·</span>
            <span className="text-[#635bff] font-medium">{t("remote")}</span>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-20">
            <button
              onClick={() => scrollTo("projects")}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#635bff] text-white font-semibold text-base hover:bg-[#4f46e5] transition-all hover:shadow-lg hover:shadow-[#635bff]/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              {t("cta_primary")}
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-[#e3e8ee] dark:border-[#1a3a5c] text-[#0a2540] dark:text-white font-semibold text-base hover:border-[#635bff] dark:hover:border-[#635bff] transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-4 h-4" />
              {t("cta_secondary")}
            </a>
          </motion.div>

          {/* Metrics bar */}
          <motion.div
            variants={item}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {metrics.map((m) => (
              <div
                key={m.key}
                className="flex flex-col items-start px-5 py-4 rounded-xl bg-[#f6f9fc] dark:bg-[#0d2d50] border border-[#e3e8ee] dark:border-[#1a3a5c]"
              >
                <span className="text-2xl font-bold text-[#0a2540] dark:text-white tracking-tight">
                  {t(`metrics_${m.key}_value`)}
                </span>
                <span className="text-xs text-[#8898aa] dark:text-[#6b8fa8] mt-0.5 leading-tight">
                  {t(`metrics_${m.key}_label`)}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Professional photo */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[420px] h-[560px] overflow-hidden rounded-l-3xl border-l border-t border-b border-[#e3e8ee] dark:border-[#1a3a5c]">
        <Image
          src="/photo.jpg"
          alt="Germán Cárdenas — Financial Analyst & Data Scientist"
          fill
          className="object-cover object-center"
          priority
          sizes="420px"
        />
        {/* Subtle gradient overlay on left edge to blend with bg */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-transparent dark:from-[#0a2540]/60 dark:via-transparent dark:to-transparent" />
      </div>
    </section>
  );
}
