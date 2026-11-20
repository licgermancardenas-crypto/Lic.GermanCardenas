/**
 * Veda electoral de España (art. 69.7 LOREG): prohibido publicar o difundir sondeos en los cinco días
 * anteriores a la votación del 29/11/2026. Va del 24/11 00:00 al 29/11 21:00 hora peninsular, cuando
 * cierran las urnas en Canarias. Las páginas que la usan se regeneran cada 10 minutos (revalidate),
 * así que se activa y se levanta sola.
 */
export const VEDA_ESPANA = {
  desde: Date.parse("2026-11-24T00:00:00+01:00"),
  hasta: Date.parse("2026-11-29T21:00:00+01:00"),
};

export function enVedaEspana(ahora: number = Date.now()): boolean {
  if (process.env.VEDA_ESPANA_FORZAR === "1") return true; // solo para probar el modo veda
  return ahora >= VEDA_ESPANA.desde && ahora < VEDA_ESPANA.hasta;
}

/** Capturas del tablero de España que se pueden mostrar durante la veda: solo historia y validación. */
export function capturaVisibleEnVeda(dashboardId: string, src: string): boolean {
  return dashboardId !== "espana-29n" || /evolucion|validacion/.test(src);
}
