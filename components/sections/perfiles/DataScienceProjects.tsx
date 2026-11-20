import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { ContactCta } from "@/components/ContactCta";

const BLUE = "#00CFFF";

type Lang = "es" | "en";

const copy = {
  es: {
    eyebrow: "// Proyectos",
    title: "Modelos sobre datos reales.",
    intro:
      "Cada métrica que aparece acá sale de una validación real, incluidos los resultados que no salieron como esperaba.",
    sentinel: {
      tag: "Proyecto propio · Seguridad urbana",
      title: "ATLAS SENTINEL",
      desc: "Riesgo delictivo de la Ciudad de Buenos Aires por zona y turno. Más de 20 fuentes abiertas —delitos 2016-2025, colectivos, subte, EcoBici, alumbrado, siniestros viales y censo— cruzadas sobre una grilla hexagonal H3, un modelo de conteo y tres módulos que convierten la predicción en decisiones: dónde patrullar, dónde sumar cámaras y qué corredores controlar.",
      metrics: [
        { k: "35% → 59%", v: "del riesgo cubierto con las mismas 75 patrullas, reubicadas con un modelo de cobertura máxima (MCLP)" },
        { k: "58,5%", v: "de los delitos ocurre en el 30% del área de la ciudad" },
        { k: "0,290 vs 0,296", v: "error del modelo contra repetir el pasado: el delito porteño es muy persistente" },
        { k: "84", v: "cortes de backtesting para elegir el pronóstico 2026" },
      ],
      finding:
        "El modelo apenas mejora a la línea de base: dónde hubo delito, va a volver a haber. El valor no está en adivinar mejor, sino en decidir mejor con lo que ya se sabe, y eso es lo que optimizan los tres módulos.",
      stack: ["LightGBM Poisson", "Grilla H3", "SHAP", "Predicción conformal", "Programación entera (PuLP)", "Auditoría de equidad", "Probados: Hawkes y red neuronal de grafos"],
      captions: ["Tablero: riesgo por barrio, cobertura y concentración", "Patrullas propuestas contra las 75 comisarías actuales"],
      live: "Ver el tablero en vivo",
    },
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
    sentinel: {
      tag: "Personal project · Urban safety",
      title: "ATLAS SENTINEL",
      desc: "Crime risk across the City of Buenos Aires by area and time of day. More than 20 open sources — crime 2016-2025, buses, subway, bike share, street lighting, road accidents and the census — joined on an H3 hexagonal grid, a count model, and three modules that turn the prediction into decisions: where to patrol, where to add cameras and which corridors to control.",
      metrics: [
        { k: "35% → 59%", v: "of risk covered by the same 75 patrols, relocated with a maximal covering location model (MCLP)" },
        { k: "58.5%", v: "of crime happens in 30% of the city's area" },
        { k: "0.290 vs 0.296", v: "model error versus repeating the past: crime in Buenos Aires is highly persistent" },
        { k: "84", v: "backtesting cutoffs used to choose the 2026 forecast" },
      ],
      finding:
        "The model barely beats the baseline: where crime happened, it will happen again. The value isn't in predicting better, it's in deciding better with what is already known, and that's what the three modules optimise.",
      stack: ["LightGBM Poisson", "H3 grid", "SHAP", "Conformal prediction", "Integer programming (PuLP)", "Fairness audit", "Tested: Hawkes and graph neural network"],
      captions: ["Dashboard: risk by neighbourhood, coverage and concentration", "Proposed patrols versus the 75 current police stations"],
      live: "See the live dashboard",
    },
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

        {/* ATLAS SENTINEL — featured */}
        <article
          className="rounded-2xl overflow-hidden mb-6"
          style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {["inicio", "mapa"].map((img, i) => (
              <figure key={img} className="relative" style={{ background: "#050505" }}>
                <div className="relative w-full" style={{ aspectRatio: "2400 / 1500" }}>
                  <Image
                    src={`/screenshots/sentinel/${img}.jpg`}
                    alt={t.sentinel.captions[i]}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <figcaption style={{ ...mono, fontSize: "11px", color: "rgba(255,255,255,0.4)", padding: "10px 16px" }}>
                  {t.sentinel.captions[i]}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="p-6 md:p-10">
            <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: BLUE, marginBottom: "10px" }}>
              {t.sentinel.tag}
            </p>
            <h3 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 600, color: "#FFFFFF", marginBottom: "12px", letterSpacing: "-0.01em" }}>
              {t.sentinel.title}
            </h3>
            <p style={{ fontSize: "16px", lineHeight: 1.7, color: "rgba(212,212,216,0.85)", maxWidth: "780px", marginBottom: "28px" }}>
              {t.sentinel.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {t.sentinel.metrics.map((m) => (
                <div key={m.k} className="rounded-xl p-4" style={{ border: "1px solid rgba(0,207,255,0.14)", background: "rgba(0,207,255,0.03)" }}>
                  <p style={{ fontSize: "24px", fontWeight: 600, color: "#FFFFFF", lineHeight: 1.1, marginBottom: "8px", fontVariantNumeric: "tabular-nums" }}>
                    {m.k}
                  </p>
                  <p style={{ fontSize: "13px", color: "rgba(212,212,216,0.65)", lineHeight: 1.45 }}>{m.v}</p>
                </div>
              ))}
            </div>

            <p
              className="pl-4 mb-6"
              style={{ borderLeft: `2px solid ${BLUE}`, fontSize: "15px", lineHeight: 1.65, color: "rgba(212,212,216,0.85)", maxWidth: "780px" }}
            >
              {t.sentinel.finding}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {t.sentinel.stack.map((x) => (
                <span key={x} style={{ ...mono, fontSize: "11px", padding: "6px 11px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(230,230,235,0.8)" }}>
                  {x}
                </span>
              ))}
            </div>

            <a
              href="https://dashboard-two-sepia-39.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
              style={{ padding: "12px 24px", borderRadius: "8px", background: BLUE, color: "#050505", fontSize: "14px", fontWeight: 600 }}
            >
              {t.sentinel.live}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </article>

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
        <ContactCta
          locale={lang}
          variant="compact"
          className="mt-8"
          accent={BLUE}
          onAccent="#050505"
          title={lang === "en" ? "Need a model you can audit?" : "¿Necesitás un modelo que se pueda auditar?"}
          text={lang === "en" ? "Real data, honest validation, and the results that didn't work out in plain sight too." : "Datos reales, validación honesta y los resultados que no salieron también a la vista."}
        />
      </div>
    </section>
  );
}
