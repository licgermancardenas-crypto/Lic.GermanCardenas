import type { ComponentType } from "react";
import { SHOW_DRAFTS } from "@/lib/drafts";

/**
 * Notas técnicas. Cada nota tiene un .mdx por idioma en content/notas/.
 * Para publicar una nota: revisar los dos idiomas, completar las marcas [Completar…]
 * y pasar `published: true`. Las no publicadas solo se ven en desarrollo (o SHOW_DRAFTS=1).
 */
type Lang = "es" | "en";
type Loader = () => Promise<{ default: ComponentType }>;

export type Note = {
  slug: string;
  published: boolean;
  /** Fecha de publicación (AAAA-MM-DD). */
  date: string;
  readingMin: number;
  title: Record<Lang, string>;
  summary: Record<Lang, string>;
  /** Caso del portfolio en el que se apoya la nota. */
  caseSlug?: string;
  body: Record<Lang, Loader>;
};

export const NOTES: Note[] = [
  {
    slug: "derrumbe-pro-marca-no-territorio",
    published: false,
    date: "2026-11-20",
    readingMin: 6,
    title: {
      es: "El derrumbe del PRO fue de marca, no de territorio",
      en: "PRO's collapse was about the brand, not the territory",
    },
    summary: {
      es: "Por qué mirar puntos porcentuales por barrio lleva a defender los barrios equivocados, y qué dicen tres métodos de inferencia ecológica.",
      en: "Why looking at percentage points by neighbourhood leads you to defend the wrong neighbourhoods, and what three ecological-inference methods say.",
    },
    caseSlug: "caba-jefatura",
    body: {
      es: () => import("@/content/notas/derrumbe-pro-marca-no-territorio.es.mdx"),
      en: () => import("@/content/notas/derrumbe-pro-marca-no-territorio.en.mdx"),
    },
  },
  {
    slug: "ypf-ebitda-precio-del-crudo",
    published: false,
    date: "2026-11-20",
    readingMin: 5,
    title: {
      es: "YPF: el 51% del aumento del EBITDA es precio del crudo",
      en: "YPF: 51% of the EBITDA increase is crude price",
    },
    summary: {
      es: "El mejor trimestre de la historia de YPF y una caída de la acción el mismo día. Un puente de EBITDA para separar ciclo de compañía.",
      en: "YPF's best quarter ever and a falling stock on the same day. An EBITDA bridge to separate the cycle from the company.",
    },
    caseSlug: "atlas-ypf",
    body: {
      es: () => import("@/content/notas/ypf-ebitda-precio-del-crudo.es.mdx"),
      en: () => import("@/content/notas/ypf-ebitda-precio-del-crudo.en.mdx"),
    },
  },
];

export function visibleNotes(): Note[] {
  return NOTES.filter((n) => n.published || SHOW_DRAFTS).sort((a, b) => b.date.localeCompare(a.date));
}

export function findNote(slug: string): Note | undefined {
  return visibleNotes().find((n) => n.slug === slug);
}
