import type { MetadataRoute } from "next";
import { LOCALES, ROUTES, SITE_URL, DEFAULT_LOCALE } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return LOCALES.flatMap((locale) =>
    ROUTES.map((route) => ({
      url: `${SITE_URL}/${locale}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency as "weekly" | "monthly",
      priority: locale === DEFAULT_LOCALE ? route.priority : route.priority - 0.1,
      alternates: {
        languages: Object.fromEntries([
          ...LOCALES.map((l) => [l, `${SITE_URL}/${l}${route.path}`]),
          ["x-default", `${SITE_URL}/${DEFAULT_LOCALE}${route.path}`],
        ]),
      },
    })),
  );
}
