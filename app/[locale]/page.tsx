import { ScrollProgress } from "@/components/ScrollProgress";
import { CommandPalette } from "@/components/CommandPalette";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { MisPerfiles } from "@/components/sections/MisPerfiles";
import { FeaturedCases } from "@/components/sections/FeaturedCases";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { TechStack } from "@/components/sections/TechStack";
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
        <MisPerfiles />
        <FeaturedCases />
        <SelectedWork />
        <Experience />
        <Education />
        <TechStack />
        <WorkWithMe />
      </main>
      <Footer />
    </>
  );
}
