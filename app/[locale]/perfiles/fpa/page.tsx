import { Navigation } from "@/components/Navigation";
import { FpaHero } from "@/components/sections/perfiles/FpaHero";
import { FpaContent } from "@/components/sections/perfiles/FpaContent";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "FP&A Specialist — Germán Cárdenas",
  description:
    "Financial Planning & Analysis Specialist. Modelos de proyección financiera, Private Equity, portafolios bursátiles y valuación de proyectos de inversión.",
};

export default function FpaPage() {
  return (
    <>
      <Navigation />
      <main>
        <FpaHero />
        <FpaContent />
      </main>
      <Footer />
    </>
  );
}
