/**
 * Los borradores (testimonios sin completar, notas sin publicar) se ven en desarrollo
 * o con SHOW_DRAFTS=1 al compilar. En Vercel no está definida: quedan ocultos.
 */
export const SHOW_DRAFTS =
  process.env.NODE_ENV === "development" || process.env.SHOW_DRAFTS === "1";
