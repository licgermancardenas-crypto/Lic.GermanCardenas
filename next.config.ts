import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import createMDX from "@next/mdx";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");
// Notas técnicas en MDX (content/notas). Plugins por nombre (string) para que funcione con Turbopack.
const withMDX = createMDX({ options: { remarkPlugins: [["remark-gfm"]] } });

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [],
    qualities: [75, 90],
  },
};

export default withNextIntl(withMDX(nextConfig));
