"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  DASHBOARDS,
  dashboardLocale,
  type DashboardShot,
} from "@/lib/bi-dashboards";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EMERALD = "#10b981";

type FlatShot = DashboardShot & { dashboard: string };

/**
 * Todas las capturas en una lista plana para poder navegar el lightbox
 * de punta a punta con las flechas.
 */
function flatten(locale: "es" | "en"): FlatShot[] {
  return DASHBOARDS.flatMap((d) =>
    d.shots.map((s) => ({ ...s, dashboard: d.name[locale] })),
  );
}

function Lightbox({
  shots,
  index,
  locale,
  onClose,
  onPrev,
  onNext,
}: {
  shots: FlatShot[];
  index: number;
  locale: "es" | "en";
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const [fit, setFit] = useState(false);
  const shot = shots[index];

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handle);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handle);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex flex-col"
      style={{ backgroundColor: "rgba(0,0,0,0.97)" }}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3 shrink-0">
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "rgba(255,255,255,0.55)",
          }}
        >
          {index + 1} / {shots.length} · {shot.dashboard} ·{" "}
          <span style={{ color: EMERALD }}>
            {shot.width}×{shot.height}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFit((v) => !v)}
            className="px-3 py-1.5 rounded-full text-white"
            style={{
              background: "rgba(255,255,255,0.1)",
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
            }}
          >
            {fit
              ? locale === "en"
                ? "Actual size"
                : "Tamaño real"
              : locale === "en"
                ? "Fit to screen"
                : "Ajustar a pantalla"}
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-white"
            style={{ background: "rgba(255,255,255,0.1)" }}
            aria-label={locale === "en" ? "Close" : "Cerrar"}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* overflow-auto: a tamaño real la imagen se panea, nunca se reescala */}
      <div className="flex-1 overflow-auto flex items-center justify-center p-4">
        <Image
          key={shot.src}
          src={shot.src}
          alt={shot.caption[locale]}
          width={shot.width}
          height={shot.height}
          unoptimized
          priority
          style={
            fit
              ? {
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "auto",
                  height: "auto",
                }
              : { width: shot.width, height: shot.height, maxWidth: "none" }
          }
        />
      </div>

      <div className="flex items-center justify-between gap-4 px-4 py-3 shrink-0">
        <button
          onClick={onPrev}
          className="p-2 rounded-full text-white"
          style={{ background: "rgba(255,255,255,0.1)" }}
          aria-label={locale === "en" ? "Previous" : "Anterior"}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <p
          className="text-center"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          {shot.caption[locale]}
        </p>
        <button
          onClick={onNext}
          className="p-2 rounded-full text-white"
          style={{ background: "rgba(255,255,255,0.1)" }}
          aria-label={locale === "en" ? "Next" : "Siguiente"}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>,
    document.body,
  );
}

export function BiDashboardGallery({ locale }: { locale: string }) {
  const lang = dashboardLocale(locale);
  const shots = flatten(lang);
  const [lbIdx, setLbIdx] = useState<number | null>(null);

  const prev = useCallback(
    () => setLbIdx((i) => (i === null ? i : (i - 1 + shots.length) % shots.length)),
    [shots.length],
  );
  const next = useCallback(
    () => setLbIdx((i) => (i === null ? i : (i + 1) % shots.length)),
    [shots.length],
  );

  let cursor = 0;

  return (
    <>
      {DASHBOARDS.map((d, di) => (
        <section
          key={d.id}
          id={d.id}
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "56px",
            paddingBottom: "64px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-4">
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  color: EMERALD,
                }}
              >
                {d.number}
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(20px, 2.2vw, 28px)",
                  fontWeight: 500,
                  color: "#FFFFFF",
                }}
              >
                {d.name[lang]}
              </h2>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                {d.period}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "3px 10px",
                  borderRadius: "999px",
                  border: `1px solid ${
                    d.dataSource === "public"
                      ? "rgba(16,185,129,0.35)"
                      : "rgba(255,255,255,0.16)"
                  }`,
                  color:
                    d.dataSource === "public"
                      ? EMERALD
                      : "rgba(255,255,255,0.5)",
                }}
              >
                {d.dataSource === "public"
                  ? lang === "en"
                    ? "Open data"
                    : "Dato abierto"
                  : lang === "en"
                    ? "Client operation"
                    : "Operación real"}
              </span>
            </div>

            <p
              className="max-w-3xl mb-5"
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.55)",
              }}
            >
              {d.tagline[lang]}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {d.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "4px 10px",
                    borderRadius: "4px",
                    background: "rgba(255,255,255,0.05)",
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="flex flex-col gap-8">
            {d.shots.map((shot, si) => {
              const flatIndex = cursor++;
              return (
                <motion.figure
                  key={shot.src}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.65,
                    ease: EASE,
                    delay: Math.min(si * 0.08, 0.24),
                  }}
                  /* nunca por encima del ancho nativo: sin upscaling, sin blur */
                  style={{ maxWidth: shot.width, margin: 0 }}
                >
                  <button
                    onClick={() => setLbIdx(flatIndex)}
                    className="group relative block w-full overflow-hidden cursor-zoom-in"
                    style={{
                      borderRadius: "12px",
                      border: "1px solid rgba(255,255,255,0.08)",
                      background: "#0A0A0A",
                      lineHeight: 0,
                    }}
                  >
                    <Image
                      src={shot.src}
                      alt={shot.caption[lang]}
                      width={shot.width}
                      height={shot.height}
                      unoptimized
                      loading={di === 0 && si === 0 ? "eager" : "lazy"}
                      sizes={`(max-width: ${shot.width}px) 100vw, ${shot.width}px`}
                      style={{ width: "100%", height: "auto" }}
                    />
                    <span
                      className="absolute top-3 right-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: "rgba(0,0,0,0.7)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: "999px",
                        padding: "5px 11px",
                        fontFamily: "var(--font-mono)",
                        fontSize: "10px",
                        letterSpacing: "0.1em",
                        color: "rgba(255,255,255,0.8)",
                        lineHeight: 1.4,
                      }}
                    >
                      <Maximize2 className="w-3 h-3" />
                      {shot.width}×{shot.height}
                    </span>
                  </button>
                  <figcaption
                    style={{
                      marginTop: "12px",
                      fontFamily: "var(--font-mono)",
                      fontSize: "11.5px",
                      lineHeight: 1.6,
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    {shot.caption[lang]}
                  </figcaption>
                </motion.figure>
              );
            })}
          </div>
        </section>
      ))}

      {lbIdx !== null && (
        <Lightbox
          shots={shots}
          index={lbIdx}
          locale={lang}
          onClose={() => setLbIdx(null)}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}
