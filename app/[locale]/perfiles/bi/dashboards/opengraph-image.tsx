import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { DASHBOARD_STATS } from "@/lib/bi-dashboards";

export const alt = "Dashboards Power BI — Germán Cárdenas";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const en = locale === "en";

  return renderOg({
    eyebrow: en ? "Power BI · Gallery" : "Power BI · Galería",
    title: en ? "Dashboards in production" : "Dashboards en producción",
    subtitle: en
      ? `${DASHBOARD_STATS.dashboards} dashboards across exports, retail, wholesale, pharmacy and card reconciliation`
      : `${DASHBOARD_STATS.dashboards} tableros: exportaciones, retail, mayorista, farmacia y conciliación de cobros`,
    chips: ["Power BI", "ETL", "DAX", "Control de gestión"],
    accent: "#10b981",
  });
}
