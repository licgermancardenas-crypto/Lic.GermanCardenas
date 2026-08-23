import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Navigation } from "@/components/Navigation";
import { DataScienceHero } from "@/components/sections/perfiles/DataScienceHero";
import { Footer } from "@/components/sections/Footer";

import { pageMetadata } from "@/lib/seo";
import { profileCopy } from "@/lib/profiles";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const copy = profileCopy(locale, "data-science");
  return pageMetadata({
    locale,
    path: "/perfiles/data-science",
    title: copy.title,
    description: copy.description,
  });
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function DataSciencePage({
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
        <DataScienceHero />
      </main>
      <Footer />
    </>
  );
}
