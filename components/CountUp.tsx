"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Cuenta desde 0 hasta el número de `value` ("11", "1M+", "24") una sola vez, al entrar en pantalla.
 * El servidor renderiza el valor final (sin JS se ve igual) y el lector de pantalla lee solo el final.
 */
export function CountUp({ value, duration = 1400, delay = 0 }: { value: string; duration?: number; delay?: number }) {
  const m = /^(\D*)(\d+(?:[.,]\d+)?)(.*)$/.exec(value);
  const target = m ? parseFloat(m[2].replace(",", ".")) : NaN;
  const [shown, setShown] = useState<number | null>(null);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!m || !Number.isFinite(target) || target <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let timer = 0;
    const el = ref.current;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        setShown(0);
        timer = window.setTimeout(() => {
          const t0 = performance.now();
          const step = (now: number) => {
            const p = Math.min(1, (now - t0) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setShown(Math.round(target * eased));
            if (p < 1) raf = requestAnimationFrame(step);
          };
          raf = requestAnimationFrame(step);
        }, delay);
      },
      { threshold: 0.4 }
    );
    if (el) io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const text = m && shown !== null ? `${m[1]}${shown}${m[3]}` : value;
  return (
    <>
      <span ref={ref} aria-hidden="true">{text}</span>
      <span className="sr-only">{value}</span>
    </>
  );
}
