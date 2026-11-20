/**
 * Recomendaciones. EDITAR ACÁ.
 *
 * Cada testimonio se muestra en producción solo cuando `ready: true`.
 * Mientras ninguno esté listo, la sección entera queda oculta en el sitio publicado
 * (en desarrollo se ve con una marca de "borrador" para revisar el diseño).
 *
 * Reglas: texto real y aprobado por quien lo firma; nombre y cargo tal como esa
 * persona quiere aparecer; si no hay versión en inglés aprobada, traducirla y
 * mandársela para que la confirme.
 */
export type Testimonial = {
  id: string;
  ready: boolean;
  name: string;
  role: { es: string; en: string };
  quote: { es: string; en: string };
  /** Opcional: perfil de LinkedIn de quien recomienda. */
  linkedin?: string;
  /** Opcional: caso del portfolio relacionado (slug de /work). */
  caseSlug?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    ready: false,
    name: "[Nombre y apellido]",
    role: { es: "[Cargo · Empresa]", en: "[Role · Company]" },
    quote: {
      es: "[Testimonio pendiente: qué problema había, qué hizo Germán y qué cambió después.]",
      en: "[Pending testimonial: what the problem was, what Germán did and what changed afterwards.]",
    },
  },
  {
    id: "t2",
    ready: false,
    name: "[Nombre y apellido]",
    role: { es: "[Cargo · Empresa]", en: "[Role · Company]" },
    quote: {
      es: "[Testimonio pendiente.]",
      en: "[Pending testimonial.]",
    },
  },
  {
    id: "t3",
    ready: false,
    name: "[Nombre y apellido]",
    role: { es: "[Cargo · Empresa]", en: "[Role · Company]" },
    quote: {
      es: "[Testimonio pendiente.]",
      en: "[Pending testimonial.]",
    },
  },
];
