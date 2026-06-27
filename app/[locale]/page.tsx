import { ScrollProgress } from "@/components/ScrollProgress";
import { CommandPalette } from "@/components/CommandPalette";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { MetricsBar } from "@/components/sections/MetricsBar";
import { Expertise } from "@/components/sections/Expertise";
import { FeaturedCases } from "@/components/sections/FeaturedCases";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Experience } from "@/components/sections/Experience";
import { TechStack } from "@/components/sections/TechStack";
import { Education } from "@/components/sections/Education";
import { WorkWithMe } from "@/components/sections/WorkWithMe";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <CommandPalette />
      <Navigation />
      <main>
        <Hero />
        <MetricsBar />
        <Expertise />
        <FeaturedCases />
        <SelectedWork />
        <Experience />
        <TechStack />
        <Education />
        <WorkWithMe />
      </main>
      <Footer />
    </>
  );
}
