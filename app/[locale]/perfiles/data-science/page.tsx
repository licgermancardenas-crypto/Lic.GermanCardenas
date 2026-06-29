import { Navigation } from "@/components/Navigation";
import { DataScienceHero } from "@/components/sections/perfiles/DataScienceHero";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Data Scientist & ML Engineer — Germán Cárdenas",
  description:
    "Pipelines predictivos, Machine Learning, NLP y Geospatial Data Engineering integrados en infraestructura de producción.",
};

export default function DataSciencePage() {
  return (
    <>
      <Navigation />
      <main>
        <DataScienceHero />
      </main>
      <Footer />
    </>
  );
}
