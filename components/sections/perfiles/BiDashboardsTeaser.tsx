import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  DASHBOARDS,
  DASHBOARD_STATS,
  FEATURED_DASHBOARD_IDS,
  dashboardLocale,
} from "@/lib/bi-dashboards";

const EMERALD = "#10b981";

const COPY = {
  es: {
    eyebrow: "Galería completa",
    title: "Dashboards en producción",
    lead: `${DASHBOARD_STATS.dashboards} tableros de Power BI sobre datos reales de operación y fuentes públicas argentinas — exportaciones, patentamientos, retail, mayorista, farmacia y conciliación de cobros con tarjeta.`,
    cta: `Ver los ${DASHBOARD_STATS.dashboards} tableros`,
    more: (n: number) =>
      `Hay ${n} tableros más en la galería completa — patentamientos, mayorista, forma de pago, créditos personales y farmacia`,
    moreCta: "Abrir galería completa",
  },
  en: {
    eyebrow: "Full gallery",
    title: "Dashboards in production",
    lead: `${DASHBOARD_STATS.dashboards} Power BI dashboards built on real operating data and Argentine open data — exports, vehicle registrations, retail, wholesale, pharmacy and card settlement reconciliation.`,
    cta: `See all ${DASHBOARD_STATS.dashboards} dashboards`,
    more: (n: number) =>
      `${n} more dashboards in the full gallery — vehicle registrations, wholesale, payment mix, personal credit and pharmacy`,
    moreCta: "Open the full gallery",
  },
};

export function BiDashboardsTeaser({ locale }: { locale: string }) {
  const lang = dashboardLocale(locale);
  const t = COPY[lang];
  const featured = FEATURED_DASHBOARD_IDS.map((id) =>
    DASHBOARDS.find((d) => d.id === id),
  ).filter((d): d is (typeof DASHBOARDS)[number] => Boolean(d));

  return (
    <section
      id="bi-dashboards"
      style={{
        backgroundColor: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="container-custom py-24 sm:py-28">
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

        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(26px, 3.4vw, 40px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
                color: "#FFFFFF",
                marginBottom: "16px",
              }}
            >
              {t.title}
            </h2>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.55)",
              }}
            >
              {t.lead}
            </p>
          </div>

          <Link
            href={`/${locale}/perfiles/bi/dashboards`}
            className="inline-flex items-center gap-2.5 shrink-0 transition-transform hover:scale-[1.03]"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#04120c",
              background: EMERALD,
              borderRadius: "999px",
              padding: "18px 34px",
              boxShadow: "0 0 0 6px rgba(16,185,129,0.12)",
            }}
          >
            {t.cta}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((d) => {
            const shot = d.shots[0];
            return (
              <Link
                key={d.id}
                href={`/${locale}/perfiles/bi/dashboards#${d.id}`}
                className="group block"
              >
                <div
                  className="relative overflow-hidden"
                  style={{
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "#0A0A0A",
                    lineHeight: 0,
                  }}
                >
                  <Image
                    src={shot.src}
                    alt={d.name[lang]}
                    width={shot.width}
                    height={shot.height}
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <p
                  style={{
                    marginTop: "12px",
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  {d.name[lang]}
                </p>
                <p
                  style={{
                    marginTop: "4px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "10.5px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  {d.period}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Cierre: deja explícito que hay más tableros detrás del link */}
        <Link
          href={`/${locale}/perfiles/bi/dashboards`}
          className="group flex flex-wrap items-center justify-between gap-6 mt-8 transition-colors"
          style={{
            border: "1px solid rgba(16,185,129,0.28)",
            borderRadius: "14px",
            background: "rgba(16,185,129,0.05)",
            padding: "26px 30px",
          }}
        >
          <span
            className="max-w-xl"
            style={{
              fontSize: "15px",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {t.more(DASHBOARDS.length - featured.length)}
          </span>
          <span
            className="inline-flex items-center gap-2.5 shrink-0 transition-transform group-hover:translate-x-1"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: EMERALD,
            }}
          >
            {t.moreCta}
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </Link>
      </div>
    </section>
  );
}
