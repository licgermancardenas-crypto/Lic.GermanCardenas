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
    phantom: {
      tag: "Proyecto propio · Prevención de lavado · Datos sintéticos",
      title: "Phantom AI",
      desc: "Detección de redes de lavado de activos con redes neuronales de grafos, en una prueba de concepto de punta a punta para un banco simulado: 75.000 cuentas y 11,2 millones de transacciones sintéticas con ocho tipologías de lavado alineadas con GAFI —anillos, pitufeo, mulas, sociedades pantalla, round-tripping— y el módulo que usa un oficial de cumplimiento: alertas, casos, KYC, screening y reportes de operaciones sospechosas.",
      metrics: [
        { k: "0,943", v: "de PR-AUC con GraphSAGE, contra 0,882 de XGBoost y 0,471 de una regresión logística" },
        { k: "90%", v: "del fraude detectado exigiendo que 9 de cada 10 alertas sean reales" },
        { k: "13% vs 21%", v: "de fraude que se escapa con el grafo, contra el mejor modelo tabular" },
        { k: "2,9×", v: "más probable que el vecino de una cuenta fraudulenta también lo sea" },
      ],
      finding:
        "Las cuentas mula son crediticiamente normales: el score de riesgo externo no las distingue. Se delatan por con quién transaccionan. Y el rastreo hacia atrás mostró que el modelo encuentra a las mulas pero no a quien inyecta el dinero, así que se sumó una segunda pasada para llegar al origen.",
      stack: ["PyTorch Geometric", "GraphSAGE · GAT", "XGBoost", "GNNExplainer", "Calibración isotónica", "Ablación con Node2Vec", "FastAPI · Next.js"],
      captions: ["Investigación de redes: el flujo del dinero alrededor de una cuenta", "Panel ejecutivo del programa de prevención de lavado"],
      note: "Datos 100% sintéticos: es una prueba de concepto, no validada con datos de un banco real.",
      live: "Ver el tablero en vivo",
      api: "API en vivo",
    },
    precios: {
      tag: "Proyecto propio · Datos propios · Se actualiza todos los días",
      title: "Atlas Precios",
      desc: "Un robot que todos los días a las 6 de la mañana releva una canasta fija de 45 productos en Coto, Día, Carrefour y Jumbo, la guarda en una base histórica y la publica como datos abiertos. Con eso arma el Índice Canasta Atlas —un índice de precios de supermercado con resolución diaria—, un comparador entre cadenas producto por producto y un agente que responde preguntas sobre la base en lenguaje natural.",
      metrics: [
        { k: "125 días", v: "de relevamiento automático, sin intervención manual, desde julio de 2026" },
        { k: "17.302", v: "precios guardados y publicados como datos abiertos (CC BY 4.0)" },
        { k: "+5,9%", v: "subió la canasta desde julio, con un salto del 4% en septiembre" },
        { k: "55%", v: "más caro el mismo producto según la cadena: huevos de 30 unidades, $5.990 contra $9.300" },
      ],
      finding:
        "El primer índice daba +157% en una semana. No era inflación: una de las APIs devolvía el precio promocional multiplicado por 80. Desde entonces el índice usa solo precio de lista y tiene controles de sanidad en dos capas. Y una salvedad dicha en voz alta: la canasta no sigue al IPC mes a mes —en septiembre subió 4,07% contra 1,93%— porque mide 41 productos de supermercado, no toda la economía.",
      stack: ["Python", "APIs VTEX y Constructor.io", "GitHub Actions", "SQLite", "Prophet", "Streamlit", "Claude (text-to-SQL)"],
      captions: [
        "El Índice Canasta Atlas, día por día desde julio (base 100)",
        "Canasta contra IPC del INDEC, mes a mes: miden cosas distintas",
        "El mismo producto, distinta cadena: la diferencia entre la más cara y la más barata",
      ],
      note: "Gráficos armados con los datos abiertos del proyecto al 20/11/2026. El tablero corre en Streamlit Cloud: si estuvo sin visitas, tarda unos segundos en despertar.",
      live: "Ver el tablero en vivo",
      data: "Datos abiertos y código",
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
    phantom: {
      tag: "Personal project · Anti-money laundering · Synthetic data",
      title: "Phantom AI",
      desc: "Money-laundering network detection with graph neural networks, as an end-to-end proof of concept for a simulated bank: 75,000 accounts and 11.2 million synthetic transactions covering eight FATF-aligned laundering typologies — cycles, structuring, mules, shell companies, round-tripping — plus the module a compliance officer uses: alerts, cases, KYC, screening and suspicious activity reports.",
      metrics: [
        { k: "0.943", v: "PR-AUC with GraphSAGE, versus 0.882 for XGBoost and 0.471 for logistic regression" },
        { k: "90%", v: "of fraud detected while requiring 9 in 10 alerts to be real" },
        { k: "13% vs 21%", v: "of fraud slipping through with the graph, versus the best tabular model" },
        { k: "2.9×", v: "more likely that a fraudulent account's neighbour is fraudulent too" },
      ],
      finding:
        "Mule accounts look normal from a credit standpoint: the external risk score can't tell them apart. They give themselves away through who they transact with. And backward tracing showed the model finds the mules but not whoever injects the money, so a second pass was added to reach the source.",
      stack: ["PyTorch Geometric", "GraphSAGE · GAT", "XGBoost", "GNNExplainer", "Isotonic calibration", "Node2Vec ablation", "FastAPI · Next.js"],
      captions: ["Network investigation: the money flow around one account", "Executive panel of the anti-money-laundering programme"],
      note: "100% synthetic data: it's a proof of concept, not validated on a real bank's data.",
      live: "See the live dashboard",
      api: "Live API",
    },
    precios: {
      tag: "Personal project · Own data · Updated every day",
      title: "Atlas Precios",
      desc: "A bot that every morning at 6 collects a fixed basket of 45 products from Coto, Día, Carrefour and Jumbo, stores it in a historical database and publishes it as open data. From that it builds the Atlas Basket Index — a supermarket price index with daily resolution —, a product-by-product comparison across chains and an agent that answers questions about the database in plain language.",
      metrics: [
        { k: "125 days", v: "of automated collection, with no manual intervention, since July 2026" },
        { k: "17,302", v: "prices stored and published as open data (CC BY 4.0)" },
        { k: "+5.9%", v: "rise in the basket since July, with a 4% jump in September" },
        { k: "55%", v: "price gap for the same product across chains: a 30-egg tray, ARS 5,990 versus 9,300" },
      ],
      finding:
        "The first index showed +157% in one week. It wasn't inflation: one of the APIs returned the promotional price multiplied by 80. Since then the index uses list prices only and has sanity checks at two levels. And a caveat stated up front: the basket doesn't track the CPI month by month — in September it rose 4.07% against 1.93% — because it measures 41 supermarket products, not the whole economy.",
      stack: ["Python", "VTEX and Constructor.io APIs", "GitHub Actions", "SQLite", "Prophet", "Streamlit", "Claude (text-to-SQL)"],
      captions: [
        "The Atlas Basket Index, day by day since July (base 100)",
        "Basket versus INDEC CPI, month by month: they measure different things",
        "Same product, different chain: the gap between the most and least expensive",
      ],
      note: "Charts built from the project's open data as of 20/11/2026. The dashboard runs on Streamlit Cloud: if it hasn't had visitors, it takes a few seconds to wake up.",
      live: "See the live dashboard",
      data: "Open data and code",
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

        {/* Phantom AI */}
        <article
          className="rounded-2xl overflow-hidden mb-6"
          style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {["red", "direccion"].map((img, i) => (
              <figure key={img} className="relative" style={{ background: "#050505" }}>
                <div className="relative w-full" style={{ aspectRatio: "2400 / 1500" }}>
                  <Image
                    src={`/screenshots/phantom/${img}.jpg`}
                    alt={t.phantom.captions[i]}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <figcaption style={{ ...mono, fontSize: "11px", color: "rgba(255,255,255,0.4)", padding: "10px 16px" }}>
                  {t.phantom.captions[i]}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="p-6 md:p-10">
            <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: BLUE, marginBottom: "10px" }}>
              {t.phantom.tag}
            </p>
            <h3 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 600, color: "#FFFFFF", marginBottom: "12px", letterSpacing: "-0.01em" }}>
              {t.phantom.title}
            </h3>
            <p style={{ fontSize: "16px", lineHeight: 1.7, color: "rgba(212,212,216,0.85)", maxWidth: "780px", marginBottom: "28px" }}>
              {t.phantom.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {t.phantom.metrics.map((m) => (
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
              {t.phantom.finding}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {t.phantom.stack.map((x) => (
                <span key={x} style={{ ...mono, fontSize: "11px", padding: "6px 11px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(230,230,235,0.8)" }}>
                  {x}
                </span>
              ))}
            </div>

            <p style={{ ...mono, fontSize: "12px", color: "rgba(245,181,68,0.85)", marginBottom: "22px" }}>{t.phantom.note}</p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://fraude-bancario-2026.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
                style={{ padding: "12px 24px", borderRadius: "8px", background: BLUE, color: "#050505", fontSize: "14px", fontWeight: 600 }}
              >
                {t.phantom.live}
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://phantom-rcs9.onrender.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
                style={{ padding: "12px 24px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(230,230,235,0.9)", fontSize: "14px", fontWeight: 500 }}
              >
                {t.phantom.api}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </article>

        {/* Atlas Precios */}
        <article
          className="rounded-2xl overflow-hidden mb-6"
          style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}
        >
          <figure style={{ background: "#0B0F17" }}>
            <div className="relative w-full" style={{ aspectRatio: "1600 / 1000" }}>
              <Image src="/screenshots/precios/indice.jpg" alt={t.precios.captions[0]} fill sizes="(max-width: 1200px) 100vw, 1100px" className="object-cover" />
            </div>
            <figcaption style={{ ...mono, fontSize: "11px", color: "rgba(255,255,255,0.4)", padding: "10px 16px" }}>{t.precios.captions[0]}</figcaption>
          </figure>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {["canasta-vs-ipc", "dispersion"].map((img, i) => (
              <figure key={img} style={{ background: "#0B0F17" }}>
                <div className="relative w-full" style={{ aspectRatio: "1600 / 1000" }}>
                  <Image src={`/screenshots/precios/${img}.jpg`} alt={t.precios.captions[i + 1]} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
                <figcaption style={{ ...mono, fontSize: "11px", color: "rgba(255,255,255,0.4)", padding: "10px 16px" }}>{t.precios.captions[i + 1]}</figcaption>
              </figure>
            ))}
          </div>

          <div className="p-6 md:p-10">
            <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: BLUE, marginBottom: "10px" }}>
              {t.precios.tag}
            </p>
            <h3 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 600, color: "#FFFFFF", marginBottom: "12px", letterSpacing: "-0.01em" }}>
              {t.precios.title}
            </h3>
            <p style={{ fontSize: "16px", lineHeight: 1.7, color: "rgba(212,212,216,0.85)", maxWidth: "780px", marginBottom: "28px" }}>
              {t.precios.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {t.precios.metrics.map((m) => (
                <div key={m.k} className="rounded-xl p-4" style={{ border: "1px solid rgba(0,207,255,0.14)", background: "rgba(0,207,255,0.03)" }}>
                  <p style={{ fontSize: "24px", fontWeight: 600, color: "#FFFFFF", lineHeight: 1.1, marginBottom: "8px", fontVariantNumeric: "tabular-nums" }}>
                    {m.k}
                  </p>
                  <p style={{ fontSize: "13px", color: "rgba(212,212,216,0.65)", lineHeight: 1.45 }}>{m.v}</p>
                </div>
              ))}
            </div>

            <p className="pl-4 mb-6" style={{ borderLeft: `2px solid ${BLUE}`, fontSize: "15px", lineHeight: 1.65, color: "rgba(212,212,216,0.85)", maxWidth: "780px" }}>
              {t.precios.finding}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {t.precios.stack.map((x) => (
                <span key={x} style={{ ...mono, fontSize: "11px", padding: "6px 11px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(230,230,235,0.8)" }}>
                  {x}
                </span>
              ))}
            </div>

            <p style={{ ...mono, fontSize: "12px", color: "rgba(212,212,216,0.55)", marginBottom: "22px" }}>{t.precios.note}</p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://preciosargentina2026-hzmu5aufmjjbsieqf7ek7d.streamlit.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
                style={{ padding: "12px 24px", borderRadius: "8px", background: BLUE, color: "#050505", fontSize: "14px", fontWeight: 600 }}
              >
                {t.precios.live}
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/licgermancardenas-crypto/precios_argentina2026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
                style={{ padding: "12px 24px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(230,230,235,0.9)", fontSize: "14px", fontWeight: 500 }}
              >
                {t.precios.data}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
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
