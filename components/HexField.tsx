"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/**
 * Grilla hexagonal tenue (estilo H3) donde algunas celdas se "encienden" como un mapa de calor.
 * SVG puro, sin librerías. Se pausa fuera de pantalla y queda estática con movimiento reducido.
 */
const R = 22; // radio del hexágono
const W = Math.sqrt(3) * R;
const H = 1.5 * R;
const COLS = 18;
const ROWS = 14;
const HOT = 9;

function hexPath(cx: number, cy: number) {
  const pts = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 180) * (60 * i - 30);
    return `${(cx + (R - 1.5) * Math.cos(a)).toFixed(1)},${(cy + (R - 1.5) * Math.sin(a)).toFixed(1)}`;
  });
  return `M${pts.join("L")}Z`;
}

// Patrón inicial determinístico (igual en servidor y cliente).
function seeded(n: number) {
  const out = new Map<number, number>();
  let x = 7;
  for (let i = 0; i < HOT; i++) {
    x = (x * 9301 + 49297) % 233280;
    out.set(Math.floor((x / 233280) * n), 0.35 + ((i * 37) % 60) / 100);
  }
  return out;
}

export function HexField({ className }: { className?: string }) {
  const cells = useMemo(() => {
    const list: { d: string; key: number }[] = [];
    for (let r = 0; r < ROWS; r++)
      for (let c = 0; c < COLS; c++) {
        const cx = c * W + (r % 2 ? W / 2 : 0) + W / 2;
        const cy = r * H + R;
        list.push({ d: hexPath(cx, cy), key: r * COLS + c });
      }
    return list;
  }, []);

  const [hot, setHot] = useState(() => seeded(COLS * ROWS));
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let visible = true;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    if (ref.current) io.observe(ref.current);
    const id = window.setInterval(() => {
      if (!visible || document.hidden) return;
      setHot((prev) => {
        const next = new Map(prev);
        // se apaga una celda y se enciende otra cerca de una caliente (parece difusión)
        const keys = [...next.keys()];
        next.delete(keys[Math.floor(Math.random() * keys.length)]);
        const base = keys[Math.floor(Math.random() * keys.length)];
        const jump = [1, -1, COLS, -COLS, COLS + 1, -COLS - 1][Math.floor(Math.random() * 6)];
        const k = Math.random() < 0.7 ? base + jump : Math.floor(Math.random() * COLS * ROWS);
        if (k >= 0 && k < COLS * ROWS) next.set(k, 0.3 + Math.random() * 0.7);
        while (next.size > HOT + 2) next.delete(next.keys().next().value as number);
        return next;
      });
    }, 1100);
    return () => {
      window.clearInterval(id);
      io.disconnect();
    };
  }, []);

  return (
    <svg
      ref={ref}
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox={`0 0 ${COLS * W + W / 2} ${ROWS * H + R / 2}`}
      preserveAspectRatio="xMinYMid slice"
    >
      {cells.map(({ d, key }) => {
        const v = hot.get(key) ?? 0;
        return (
          <path
            key={key}
            d={d}
            fill="#4A8BFF"
            fillOpacity={v * 0.16}
            stroke="#4A8BFF"
            strokeOpacity={0.07 + v * 0.18}
            strokeWidth={1}
            style={{ transition: "fill-opacity 1.6s ease, stroke-opacity 1.6s ease" }}
          />
        );
      })}
    </svg>
  );
}
