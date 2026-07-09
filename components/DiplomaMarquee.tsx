"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";
import type { Diploma } from "@/components/sections/diplomas-data";

const TILTS = [-3, 2, -2, 3, -1.5, 1.5, -2.5, 2.5];

function DiplomaCard({
  diploma,
  index,
  onOpen,
}: {
  diploma: Diploma;
  index: number;
  onOpen: () => void;
}) {
  return (
    <button
      onClick={onOpen}
      className="diploma-float group/card flex-shrink-0 w-64 sm:w-72 rounded-2xl overflow-hidden border border-[#1F2937] bg-[#0A0E1A] card-shadow text-left transition-transform duration-300 hover:-translate-y-1.5 hover:border-[#4F7CFF]/50"
      style={
        {
          "--tilt": `${TILTS[index % TILTS.length]}deg`,
          animationDelay: `${(index % 6) * 0.5}s`,
        } as React.CSSProperties
      }
    >
      <div className="relative w-full aspect-[4/3] bg-white">
        <Image
          src={`/certificates/${diploma.file}`}
          alt={diploma.title}
          fill
          className="object-cover object-[center_38%] transition-transform duration-500 group-hover/card:scale-105"
          sizes="288px"
          quality={75}
        />
      </div>
      <div className="p-4">
        <p className="text-sm font-semibold text-[#F5F7FA] leading-snug line-clamp-2 mb-1">
          {diploma.title}
        </p>
        <p className="text-xs text-[#6B7689]">
          {diploma.issuer} · {diploma.date}
        </p>
      </div>
    </button>
  );
}

function DiplomaLightbox({ diploma, onClose }: { diploma: Diploma; onClose: () => void }) {
  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-6"
      style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 p-2.5 rounded-full text-white"
        style={{ background: "rgba(255,255,255,0.1)" }}
      >
        <X className="w-5 h-5" />
      </button>
      <div
        className="w-full max-w-2xl rounded-2xl overflow-hidden border border-[#1F2937] bg-[#0A0E1A]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full aspect-[4/3] bg-white">
          <Image
            src={`/certificates/${diploma.file}`}
            alt={diploma.title}
            fill
            className="object-contain"
            sizes="700px"
            quality={90}
          />
        </div>
        <div className="p-5">
          <p className="text-base font-semibold text-[#F5F7FA] mb-1">{diploma.title}</p>
          <p className="text-sm text-[#6B7689]">
            {diploma.issuer} · {diploma.date}
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}

export function DiplomaMarquee({ diplomas }: { diplomas: Diploma[] }) {
  const [active, setActive] = useState<Diploma | null>(null);
  const half = Math.ceil(diplomas.length / 2);
  const rowA = diplomas.slice(0, half);
  const rowB = diplomas.slice(half);

  return (
    <div
      className="relative -mx-4 sm:-mx-6 lg:-mx-8"
      style={{
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0, black 64px, black calc(100% - 64px), transparent 100%)",
        maskImage:
          "linear-gradient(90deg, transparent 0, black 64px, black calc(100% - 64px), transparent 100%)",
      }}
    >
      <div className="space-y-6 py-4">
        <div className="group overflow-hidden">
          <div className="flex gap-5 w-max animate-marquee-left group-hover:[animation-play-state:paused]">
            {[...rowA, ...rowA].map((d, i) => (
              <DiplomaCard key={`a-${i}`} diploma={d} index={i} onOpen={() => setActive(d)} />
            ))}
          </div>
        </div>
        <div className="group overflow-hidden">
          <div className="flex gap-5 w-max animate-marquee-right group-hover:[animation-play-state:paused]">
            {[...rowB, ...rowB].map((d, i) => (
              <DiplomaCard key={`b-${i}`} diploma={d} index={i + 3} onOpen={() => setActive(d)} />
            ))}
          </div>
        </div>
      </div>

      {active && <DiplomaLightbox diploma={active} onClose={() => setActive(null)} />}
    </div>
  );
}
