import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const BLUE = "#00CFFF";

type Lang = "es" | "en";

const copy = {
  es: {
    eyebrow: "// Proyectos",
    title: "Modelos sobre datos reales.",
    intro:
      "Cada métrica que aparece acá sale de una validación real, incluidos los resultados que no salieron como esperaba.",
    yerba: {
      tag: "Freelance · Agroindustria",
      title: "Yerba Mate Intelligence",
      desc: "Plataforma de inteligencia de mercado para un cliente del sector yerbatero: 19 pipelines ETL sobre INYM, INDEC y BCRA, y tres modelos desarrollados y validados.",
      models: [
        { name: "SARIMA · Consumo interno", metric: "6,3%", note: "error medio (MAPE)" },
        { name: "SARIMA · Producción por zona", metric: "20–30%", note: "error según zona, base estacional" },
        { name: "Gravitacional · Exportaciones", metric: "R² 0,42", note: "explica estructura, no proyecta" },
        { name: "K-means · Municipios", metric: "4", note: "perfiles productivos" },
      ],
      finding:
        "Clima, NDVI satelital, tipo de cambio y salario no mejoraron ningún pronóstico. Quedó documentado como resultado, no escondido.",
      captions: ["Cosecha nacional mensual de hoja verde, 2012–2026", "Estacionalidad de la cosecha de hoja verde"],
      cta: "Ver caso completo",
    },
    lapd: {
      tag: "Research · Datos abiertos",
      title: "LAPD Crime Analytics",
      desc: "Pipeline ETL sobre más de 1 millón de registros policiales de Los Ángeles: normalización de 120+ categorías de delito en 8 macro-categorías y análisis espacial, temporal y demográfico.",
      cta: "Ver caso completo",
    },
  },
  en: {
    eyebrow: "// Projects",
    title: "Models on real data.",
    intro:
      "Every metric here comes from an actual validation, including the results that didn't go the way I expected.",
    yerba: {
      tag: "Freelance · Agribusiness",
      title: "Yerba Mate Intelligence",
      desc: "Market intelligence platform for a yerba mate industry client: 19 ETL pipelines across INYM, INDEC and the central bank, and three models developed and validated.",
      models: [
        { name: "SARIMA · Domestic consumption", metric: "6.3%", note: "mean error (MAPE)" },
        { name: "SARIMA · Production by zone", metric: "20–30%", note: "error by zone, seasonal baseline" },
        { name: "Gravity · Exports", metric: "R² 0.42", note: "explains structure, doesn't project" },
        { name: "K-means · Municipalities", metric: "4", note: "production profiles" },
      ],
      finding:
        "Weather, satellite NDVI, the exchange rate and wages didn't improve any forecast. That was documented as a result, not hidden.",
      captions: ["Monthly national green-leaf harvest, 2012–2026", "Seasonality of the green-leaf harvest"],
      cta: "View full case",
    },
    lapd: {
      tag: "Research · Open data",
      title: "LAPD Crime Analytics",
      desc: "ETL pipeline over more than 1 million Los Angeles police records: 120+ offense types normalised into 8 macro-categories, with spatial, temporal and demographic analysis.",
      cta: "View full case",
    },
  },
} as const;

const mono = { fontFamily: "var(--font-mono)" } as const;

export function DataScienceProjects({ locale }: { locale: string }) {
  const lang: Lang = locale === "en" ? "en" : "es";
  const t = copy[lang];

  return (
    <section
      id="proyectos"
      className="py-24 md:py-32"
      style={{ backgroundColor: "#050505", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="container-custom max-w-6xl mx-auto">
        {/* Header */}
        <p
          style={{ ...mono, fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: BLUE, marginBottom: "16px" }}
        >
          {t.eyebrow}
        </p>
        <h2
          style={{
            fontSize: "clamp(32px, 4.5vw, 56px)",
            fontWeight: 600,
            color: "#FFFFFF",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          {t.title}
        </h2>
        <p style={{ fontSize: "16px", lineHeight: 1.7, color: "rgba(212,212,216,0.75)", maxWidth: "620px", marginBottom: "56px" }}>
          {t.intro}
        </p>

        {/* Yerba Mate — featured */}
        <article
          className="rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {["produccion", "estacionalidad"].map((img, i) => (
              <figure key={img} className="relative" style={{ background: "#050505" }}>
                <div className="relative w-full" style={{ aspectRatio: "1869 / 900" }}>
                  <Image
                    src={`/screenshots/yerba-mate/${img}.jpg`}
                    alt={t.yerba.captions[i]}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <figcaption
                  style={{ ...mono, fontSize: "11px", color: "rgba(255,255,255,0.4)", padding: "10px 16px" }}
                >
                  {t.yerba.captions[i]}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="p-6 md:p-10">
            <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: BLUE, marginBottom: "10px" }}>
              {t.yerba.tag}
            </p>
            <h3 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 600, color: "#FFFFFF", marginBottom: "12px", letterSpacing: "-0.01em" }}>
              {t.yerba.title}
            </h3>
            <p style={{ fontSize: "16px", lineHeight: 1.7, color: "rgba(212,212,216,0.85)", maxWidth: "760px", marginBottom: "32px" }}>
              {t.yerba.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {t.yerba.models.map((m) => (
                <div
                  key={m.name}
                  className="rounded-xl p-4"
                  style={{ border: "1px solid rgba(0,207,255,0.14)", background: "rgba(0,207,255,0.03)" }}
                >
                  <p style={{ ...mono, fontSize: "10px", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "10px", lineHeight: 1.4 }}>
                    {m.name}
                  </p>
                  <p style={{ fontSize: "28px", fontWeight: 600, color: "#FFFFFF", lineHeight: 1, marginBottom: "6px", fontVariantNumeric: "tabular-nums" }}>
                    {m.metric}
                  </p>
                  <p style={{ fontSize: "13px", color: "rgba(212,212,216,0.6)", lineHeight: 1.4 }}>{m.note}</p>
                </div>
              ))}
            </div>

            <p
              className="pl-4 mb-8"
              style={{ borderLeft: `2px solid ${BLUE}`, fontSize: "15px", lineHeight: 1.65, color: "rgba(212,212,216,0.8)", maxWidth: "760px" }}
            >
              {t.yerba.finding}
            </p>

            <Link
              href={`/${lang}/work/yerba-mate-ml`}
              className="inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
              style={{ padding: "12px 24px", borderRadius: "8px", background: BLUE, color: "#050505", fontSize: "14px", fontWeight: 600 }}
            >
              {t.yerba.cta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </article>

        {/* LAPD — secondary */}
        <article
          className="mt-6 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-[2fr_3fr]"
          style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}
        >
          <div className="relative w-full min-h-[200px]" style={{ background: "#0b0b0b" }}>
            <Image
              src="/screenshots/lapd.png"
              alt={t.lapd.title}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-top"
            />
          </div>
          <div className="p-6 md:p-8">
            <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: BLUE, marginBottom: "10px" }}>
              {t.lapd.tag}
            </p>
            <h3 style={{ fontSize: "24px", fontWeight: 600, color: "#FFFFFF", marginBottom: "10px" }}>{t.lapd.title}</h3>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "rgba(212,212,216,0.8)", marginBottom: "20px" }}>{t.lapd.desc}</p>
            <Link
              href={`/${lang}/work/lapd`}
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color: BLUE }}
            >
              {t.lapd.cta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
