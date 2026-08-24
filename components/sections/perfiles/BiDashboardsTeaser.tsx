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
    cta: "Ver los 8 tableros",
  },
  en: {
    eyebrow: "Full gallery",
    title: "Dashboards in production",
    lead: `${DASHBOARD_STATS.dashboards} Power BI dashboards built on real operating data and Argentine open data — exports, vehicle registrations, retail, wholesale, pharmacy and card settlement reconciliation.`,
    cta: "See all 8 dashboards",
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
            className="inline-flex items-center gap-2 shrink-0 transition-opacity hover:opacity-70"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: EMERALD,
              border: `1px solid ${EMERALD}`,
              borderRadius: "999px",
              padding: "12px 22px",
            }}
          >
            {t.cta}
            <ArrowUpRight className="w-3.5 h-3.5" />
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
      </div>
    </section>
  );
}
