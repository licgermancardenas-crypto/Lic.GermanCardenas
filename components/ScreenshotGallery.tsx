"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

function Lightbox({
  screenshots,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  screenshots: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
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
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.97)" }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2.5 rounded-full text-white transition-colors"
        style={{ background: "rgba(255,255,255,0.1)" }}
      >
        <X className="w-5 h-5" />
      </button>

      <div
        className="absolute top-4 left-1/2 -translate-x-1/2 z-10 px-3 py-1 rounded-full text-sm tabular-nums"
        style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}
      >
        {index + 1} / {screenshots.length}
      </div>

      <div
        className="relative w-full h-full p-10 md:p-16"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          key={screenshots[index]}
          src={screenshots[index]}
          alt={`Screenshot ${index + 1}`}
          fill
          className="object-contain"
          sizes="100vw"
          quality={95}
        />
      </div>

      {screenshots.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full text-white"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full text-white"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}
    </div>,
    document.body
  );
}

export function ScreenshotGallery({
  screenshots,
  title,
  url,
  accent,
}: {
  screenshots: string[];
  title: string;
  url: string;
  accent: string;
}) {
  const [idx, setIdx] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [lbIdx, setLbIdx] = useState(0);
  const multiple = screenshots.length > 1;

  const prev = useCallback(
    () => setIdx((i) => (i - 1 + screenshots.length) % screenshots.length),
    [screenshots.length]
  );
  const next = useCallback(
    () => setIdx((i) => (i + 1) % screenshots.length),
    [screenshots.length]
  );

  return (
    <div className="mb-16">
      {/* Browser chrome */}
      <div
        className="relative group rounded-xl overflow-hidden border shadow-2xl"
        style={{ borderColor: "#1F2937" }}
      >
        {/* Bar */}
        <div
          className="flex items-center gap-3 px-4 py-2.5"
          style={{ background: "#060B14", borderBottom: "1px solid #1F2937" }}
        >
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
          </div>
          <span className="flex-1 bg-white/[0.03] rounded px-3 py-1 text-[11px] text-white/20 font-mono truncate">
            {url}
          </span>
          {multiple && (
            <span className="flex-shrink-0 text-[11px] font-mono tabular-nums" style={{ color: "rgba(255,255,255,0.3)" }}>
              {idx + 1}/{screenshots.length}
            </span>
          )}
        </div>

        {/* Main image */}
        <div
          className="relative cursor-zoom-in"
          style={{ aspectRatio: "16/9", backgroundColor: "#060810" }}
          onClick={() => { setLbIdx(idx); setLightbox(true); }}
        >
          <Image
            key={screenshots[idx]}
            src={screenshots[idx]}
            alt={`${title} screenshot ${idx + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 800px"
            quality={90}
          />

          {/* Zoom hint */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <div className="p-3 rounded-full" style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}>
              <ZoomIn className="w-6 h-6 text-white/80" />
            </div>
          </div>

          {/* Arrows */}
          {multiple && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                style={{ background: "rgba(0,0,0,0.7)", color: "white" }}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                style={{ background: "rgba(0,0,0,0.7)", color: "white" }}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail strip */}
        {multiple && (
          <div
            className="flex gap-2 px-3 py-2.5 overflow-x-auto"
            style={{ backgroundColor: "#060810", borderTop: "1px solid #1F2937", scrollbarWidth: "none" }}
          >
            {screenshots.map((src, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className="flex-shrink-0 relative rounded overflow-hidden transition-all"
                style={{
                  width: 64,
                  height: 40,
                  outline: i === idx ? `2px solid ${accent}` : "2px solid transparent",
                  outlineOffset: "1px",
                  opacity: i === idx ? 1 : 0.4,
                }}
              >
                <Image src={src} alt="" fill className="object-cover" sizes="64px" quality={25} />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          screenshots={screenshots}
          index={lbIdx}
          onClose={() => setLightbox(false)}
          onPrev={() => setLbIdx((i) => (i - 1 + screenshots.length) % screenshots.length)}
          onNext={() => setLbIdx((i) => (i + 1) % screenshots.length)}
        />
      )}
    </div>
  );
}
