import type { Metadata } from "next";

export const SITE_URL = "https://german-cardenas-portfolio.vercel.app";

export const LOCALES = ["es", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "es";

/**
 * Rutas públicas del sitio (sin prefijo de locale).
 * Se usa tanto para el sitemap como para los hreflang.
 */
export const ROUTES = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/work", priority: 0.9, changeFrequency: "monthly" },
  { path: "/work/atlas-one-erp", priority: 0.8, changeFrequency: "monthly" },
  { path: "/work/atlas-nexus", priority: 0.8, changeFrequency: "monthly" },
  { path: "/work/agronova", priority: 0.8, changeFrequency: "monthly" },
  { path: "/work/lapd", priority: 0.8, changeFrequency: "monthly" },
  { path: "/perfiles/fpa", priority: 0.9, changeFrequency: "monthly" },
  { path: "/perfiles/data-science", priority: 0.9, changeFrequency: "monthly" },
  { path: "/perfiles/bi", priority: 0.9, changeFrequency: "monthly" },
  { path: "/perfiles/bi/dashboards", priority: 0.8, changeFrequency: "monthly" },
  { path: "/perfiles/politics", priority: 0.9, changeFrequency: "monthly" },
  { path: "/now", priority: 0.5, changeFrequency: "weekly" },
] as const;

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function localePath(locale: string, path: string) {
  return `/${locale}${path}`;
}

/**
 * canonical + hreflang para una página concreta.
 * Se aplica por página (no en el layout) para que ninguna ruta
 * herede el canonical del home.
 */
export function alternates(locale: string, path = ""): Metadata["alternates"] {
  return {
    canonical: localePath(locale, path),
    languages: {
      es: localePath("es", path),
      en: localePath("en", path),
      "x-default": localePath(DEFAULT_LOCALE, path),
    },
  };
}

/** Metadata base compartida por las páginas: canonical + OG coherente. */
export function pageMetadata({
  locale,
  path = "",
  title,
  description,
}: {
  locale: string;
  path?: string;
  title: string;
  description: string;
}): Metadata {
  return {
    title,
    description,
    alternates: alternates(locale, path),
    openGraph: {
      type: "website",
      url: localePath(locale, path),
      title,
      description,
      locale: locale === "en" ? "en_US" : "es_AR",
      alternateLocale: locale === "en" ? "es_AR" : "en_US",
      siteName: "Germán Cárdenas",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
