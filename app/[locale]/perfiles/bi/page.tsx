import { Navigation } from "@/components/Navigation";
import { BiHero } from "@/components/sections/perfiles/BiHero";
import { BiContent } from "@/components/sections/perfiles/BiContent";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Corporate BI & Data Analyst — Germán Cárdenas",
  description:
    "Pipelines de ETL, modelado relacional y dashboards ejecutivos en Power BI para control de gestión y optimización de márgenes operativos.",
};

export default function BiPage() {
  return (
    <>
      <Navigation />
      <main>
        <BiHero />
        <BiContent />
      </main>
      <Footer />
    </>
  );
}
