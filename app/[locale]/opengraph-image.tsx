import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const alt =
  "Germán Cárdenas — Financial Analyst, Data Scientist & AI Engineer";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return renderOg({
    eyebrow: "german-cardenas-portfolio.vercel.app",
    title: "Germán Cárdenas",
    subtitle: "Financial Analyst · Data Scientist · AI Engineer",
    chips:
      locale === "en"
        ? ["FP&A", "Data Science", "Corporate BI", "Political Intelligence"]
        : ["FP&A", "Data Science", "Corporate BI", "Inteligencia Política"],
  });
}
