/** Luminancia relativa WCAG de un color #RRGGBB. */
function luminance(hex: string): number {
  const h = hex.replace("#", "");
  const [r, g, b] = [0, 2, 4].map((i) => {
    const v = parseInt(h.slice(i, i + 2), 16) / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a: number, b: number): number {
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}

/** Color de texto (blanco o casi negro) con mejor contraste sobre un fondo de acento. */
export function textOn(accent: string): string {
  const L = luminance(accent);
  return contrast(L, 1) >= contrast(L, luminance("#050505")) ? "#FFFFFF" : "#050505";
}
