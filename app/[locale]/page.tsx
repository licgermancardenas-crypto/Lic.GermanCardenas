import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { alternates, SITE_URL } from "@/lib/seo";
import { routing } from "@/i18n/routing";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CommandPalette } from "@/components/CommandPalette";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { MisPerfiles } from "@/components/sections/MisPerfiles";
import { FeaturedCases } from "@/components/sections/FeaturedCases";
import { AboutMeBento } from "@/components/ui/about-me-bento";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { TechStack } from "@/components/sections/TechStack";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { WorkWithMe } from "@/components/sections/WorkWithMe";
import { Footer } from "@/components/sections/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: { absolute: t("title") },
    description: t("description"),
    alternates: alternates(locale, ""),
    openGraph: {
      type: "profile",
      url: `/${locale}`,
      title: t("title"),
      description: t("description"),
      siteName: "Germán Cárdenas",
      locale: locale === "en" ? "en_US" : "es_AR",
      alternateLocale: locale === "en" ? "es_AR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  };
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Germán Cárdenas",
  url: SITE_URL,
  image: `${SITE_URL}/photo.jpg`,
  jobTitle: "Financial Analyst · Data Scientist · AI Engineer",
  description:
    "Financial Analyst, Data Scientist & AI Engineer. 6+ años construyendo sistemas de inteligencia para decisiones de negocio en agroindustria, retail, real estate y fintech.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressCountry: "AR",
  },
  email: "mailto:lic.germancardenas@gmail.com",
  knowsAbout: [
    "Financial Planning & Analysis",
    "Data Science",
    "Machine Learning",
    "Business Intelligence",
    "Geospatial Analytics",
    "Political Data Analysis",
  ],
  sameAs: [
    "https://github.com/licgermancardenas-crypto",
    "https://www.linkedin.com/in/german-cardenas-070118175/",
  ],
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <ScrollProgress />
      <CommandPalette />
      <Navigation />
      <main>
        <Hero />
        <MisPerfiles />
        <section id="sobre-mi">
          <AboutMeBento />
        </section>
        <ExperienceSection />
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
