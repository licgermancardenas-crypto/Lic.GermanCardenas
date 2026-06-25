import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Expertise } from "@/components/sections/Expertise";
import { FeaturedCase } from "@/components/sections/FeaturedCase";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { TechStack } from "@/components/sections/TechStack";
import { WorkWithMe } from "@/components/sections/WorkWithMe";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Expertise />
        <FeaturedCase />
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
