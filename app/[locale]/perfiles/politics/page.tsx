import { Navigation } from "@/components/Navigation";
import { PoliticsHero } from "@/components/sections/perfiles/PoliticsHero";
import { PoliticsContent } from "@/components/sections/perfiles/PoliticsContent";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Political Intelligence & Analytics — Germán Cárdenas",
  description:
    "Inteligencia electoral basada en datos. Cartografía geoespacial, NLP, War Room BI y segmentación científica del electorado para campaña de alta complejidad.",
};

export default function PoliticsPage() {
  return (
    <>
      <Navigation />
      <main>
        <PoliticsHero />
        <PoliticsContent />
      </main>
      <Footer />
    </>
  );
}
