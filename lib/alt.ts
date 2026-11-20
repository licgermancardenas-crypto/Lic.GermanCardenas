/**
 * Texto alternativo para capturas de los casos, en el idioma de la página.
 * Usa el nombre del archivo cuando describe algo ("mapa-2025.jpg" → "mapa 2025");
 * si el nombre es un número o un hash, cae en "captura 3 de 12".
 */
export type AltLang = "es" | "en";

export function describeShot(src: string, title: string, i: number, total: number, lang: AltLang): string {
  const file = decodeURIComponent(src.split("/").pop() ?? "").replace(/\.[a-z0-9]+$/i, "");
  const words = file
    .replace(/[-_]+/g, " ")
    .replace(/\b(v\d+|\d{6,})\b/gi, "")
    .replace(/\s+/g, " ")
    .trim();
  const meaningful = /[a-záéíóúñ]{3,}/i.test(words);
  const position = lang === "en" ? `screenshot ${i + 1} of ${total}` : `captura ${i + 1} de ${total}`;
  return meaningful ? `${title} — ${words} (${position})` : `${title} — ${position}`;
}

export const UI_LABELS = {
  es: { close: "Cerrar", prev: "Anterior", next: "Siguiente", zoom: "Ampliar captura", show: "Ver captura" },
  en: { close: "Close", prev: "Previous", next: "Next", zoom: "Enlarge screenshot", show: "Show screenshot" },
} as const;
