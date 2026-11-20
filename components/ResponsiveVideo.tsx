"use client";

import { useEffect, useRef, useState } from "react";

type Source = { src: string; poster: string; width: number; height: number };

/**
 * Video mudo en loop que elige la versión horizontal o vertical según el ancho,
 * y solo empieza a descargar cuando entra en pantalla.
 */
export function ResponsiveVideo({
  wide,
  tall,
  label,
  breakpoint = 768,
}: {
  wide: Source;
  tall: Source;
  label: string;
  breakpoint?: number;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [isTall, setIsTall] = useState(false);
  const [visible, setVisible] = useState(false);
  // Con movimiento reducido no arranca solo: se muestran los controles y lo inicia quien mira.
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduce(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsTall(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);

  const s = isTall ? tall : wide;

  // Se vuelve a enganchar cuando cambia la versión (el <video> se recrea por la key).
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [s.src]);

  return (
    <video
      ref={ref}
      key={s.src}
      src={visible ? s.src : undefined}
      poster={s.poster}
      width={s.width}
      height={s.height}
      muted
      loop
      autoPlay={visible && !reduce}
      controls={reduce}
      playsInline
      preload={reduce ? "metadata" : "none"}
      aria-label={label}
      className="w-full h-auto block"
      style={{ aspectRatio: `${s.width} / ${s.height}` }}
    />
  );
}
