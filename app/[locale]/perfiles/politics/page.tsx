import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Navigation } from "@/components/Navigation";
import { PoliticsHero } from "@/components/sections/perfiles/PoliticsHero";
import { PoliticsContent } from "@/components/sections/perfiles/PoliticsContent";
import { Footer } from "@/components/sections/Footer";

import { pageMetadata } from "@/lib/seo";
import { profileCopy } from "@/lib/profiles";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const copy = profileCopy(locale, "politics");
  return pageMetadata({
    locale,
    path: "/perfiles/politics",
    title: copy.title,
    description: copy.description,
  });
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function PoliticsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

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
