import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { setRequestLocale } from "next-intl/server";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { BiDashboardGallery } from "@/components/sections/perfiles/BiDashboardGallery";
import { DASHBOARD_STATS, dashboardLocale } from "@/lib/bi-dashboards";
import { pageMetadata } from "@/lib/seo";
import { routing } from "@/i18n/routing";

const EMERALD = "#10b981";

const COPY = {
  es: {
    eyebrow: "Power BI · Galería de tableros",
    title: "Dashboards en producción",
    lead: "Ocho tableros de Power BI construidos sobre datos reales de operación y fuentes públicas argentinas. Cada uno resuelve una pregunta de negocio concreta: dónde se pierde margen, qué se cobró de más, qué mercado se está enfriando.",
    note: "Las capturas se muestran a su tamaño nativo, sin escalar ni recortar. Hacé clic en cualquiera para abrirla a 1:1.",
    back: "Volver a Corporate BI",
    stats: [
      { value: String(DASHBOARD_STATS.dashboards), label: "tableros" },
      { value: String(DASHBOARD_STATS.views), label: "vistas" },
      { value: String(DASHBOARD_STATS.openData), label: "sobre datos abiertos" },
    ],
    meta: {
      title: "Dashboards Power BI — Germán Cárdenas",
      description:
        "Galería de 8 dashboards de Power BI en producción: exportaciones argentinas, patentamientos, conciliación de cobros con tarjeta, retail, mayorista y farmacia.",
    },
  },
  en: {
    eyebrow: "Power BI · Dashboard gallery",
    title: "Dashboards in production",
    lead: "Eight Power BI dashboards built on real operating data and Argentine open data sources. Each one answers a concrete business question: where margin leaks, what was over-collected, which market is cooling down.",
    note: "Screenshots are shown at their native size, never upscaled or cropped. Click any of them to open it at 1:1.",
    back: "Back to Corporate BI",
    stats: [
      { value: String(DASHBOARD_STATS.dashboards), label: "dashboards" },
      { value: String(DASHBOARD_STATS.views), label: "views" },
      { value: String(DASHBOARD_STATS.openData), label: "on open data" },
    ],
    meta: {
      title: "Power BI Dashboards — Germán Cárdenas",
      description:
        "A gallery of 8 production Power BI dashboards: Argentine exports, vehicle registrations, card settlement reconciliation, retail, wholesale and pharmacy.",
    },
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = COPY[dashboardLocale(locale)];
  return pageMetadata({
    locale,
    path: "/perfiles/bi/dashboards",
    title: t.meta.title,
    description: t.meta.description,
  });
}

export default async function BiDashboardsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const lang = dashboardLocale(locale);
  const t = COPY[lang];

  return (
    <>
      <Navigation />
      <main style={{ backgroundColor: "#050505", minHeight: "100vh" }}>
        <div className="container-custom pt-28 sm:pt-32 pb-8">
          <Link
            href={`/${locale}/perfiles/bi`}
            className="inline-flex items-center gap-2 mb-12 transition-colors"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {t.back}
          </Link>

          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: EMERALD,
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "24px",
                height: "1px",
                background: EMERALD,
              }}
            />
            {t.eyebrow}
          </p>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              marginBottom: "24px",
            }}
          >
            {t.title}
          </h1>

          <p
            className="max-w-2xl"
            style={{
              fontSize: "16px",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.6)",
              marginBottom: "20px",
            }}
          >
            {t.lead}
          </p>

          <p
            className="max-w-2xl"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11.5px",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.35)",
              marginBottom: "40px",
            }}
          >
            {t.note}
          </p>

          <div className="flex flex-wrap gap-x-12 gap-y-6">
            {t.stats.map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "32px",
                    lineHeight: 1,
                    color: EMERALD,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.35)",
                    marginTop: "8px",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container-custom pb-24">
          <BiDashboardGallery locale={locale} />
        </div>
      </main>
      <Footer />
    </>
  );
}
