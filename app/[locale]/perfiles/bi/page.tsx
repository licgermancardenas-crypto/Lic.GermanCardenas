import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Navigation } from "@/components/Navigation";
import { BiHero } from "@/components/sections/perfiles/BiHero";
import { BiContent } from "@/components/sections/perfiles/BiContent";
import { BiShowcase } from "@/components/sections/perfiles/BiShowcase";
import { Footer } from "@/components/sections/Footer";

import { pageMetadata } from "@/lib/seo";
import { profileCopy } from "@/lib/profiles";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const copy = profileCopy(locale, "bi");
  return pageMetadata({
    locale,
    path: "/perfiles/bi",
    title: copy.title,
    description: copy.description,
  });
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function BiPage({
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
        <BiHero />
        <BiContent />
        <BiShowcase />
      </main>
      <Footer />
    </>
  );
}
