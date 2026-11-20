"use client";

import { MotionConfig } from "framer-motion";

/**
 * Con "user", Framer Motion respeta prefers-reduced-motion en todo el sitio:
 * desactiva los movimientos (transform, layout) y deja solo los fundidos de opacidad.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
