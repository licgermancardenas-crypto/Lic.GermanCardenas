import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ResponsiveVideo } from "@/components/ResponsiveVideo";
import { ContactCta } from "@/components/ContactCta";

const CYAN = "#00A3C4";

type Lang = "es" | "en";

const copy = {
  es: {
    eyebrow: "// Proyecto · Brasil 2026",
    title: "El pronóstico falló. El mapa, no.",
    lead:
      "Un tablero de Power BI de 17 páginas y 130 medidas para el balotaje presidencial de Brasil del 25 de octubre: del país a 472 mil radios censales, con simulador, 33 encuestas y seguimiento en vivo de la noche electoral. El modelo daba ganador a Flávio Bolsonaro y ganó Lula. Esto es lo que salió bien, lo que falló y por qué.",
    videoNote: "Recorrido del tablero, grabado antes de la elección: los números que muestra son el pronóstico, no el resultado.",
    resultTitle: "Pronóstico contra resultado oficial (TSE)",
    result: [
      { k: "Lula · pronóstico", v: "47,3%" },
      { k: "Lula · resultado", v: "51,79%" },
      { k: "Error nacional", v: "4,5 pp" },
    ],
    pmTitle: "Post-mortem",
    findings: [
      {
        k: "0,996",
        t: "El mapa estuvo bien",
        v: "La correlación entre el pronóstico y el resultado por estado fue de 0,996. Corrigiendo solo el desvío nacional, el error medio por estado es de 1,1 puntos, igual al backtest de 2022.",
      },
      {
        k: "43% → 60%+",
        t: "Los terceros fueron a Lula",
        v: "El modelo supuso que el 43% de los 9,3 millones de votos de terceros iría a Lula. Para explicar el resultado hacía falta al menos un 60%.",
      },
      {
        k: "+4,8 M",
        t: "La participación creció",
        v: "Entre vueltas hubo 4,78 millones de votos válidos más. El modelo tenía la participación congelada en el patrón de 2022, y el crecimiento favoreció a Lula.",
      },
      {
        k: "3,5%",
        t: "Demasiada confianza",
        v: "La incertidumbre se calibró con una sola elección. El 3,5% de probabilidad que el modelo le daba a Lula era exceso de confianza, no un evento raro.",
      },
    ],
    lesson:
      "Lo que cambia: incertidumbre estructural en el Montecarlo, la participación como variable y backtests contra más de una elección antes de fijar el error.",
    captions: ["São Paulo en 27 mil radios censales", "Mapa satelital interactivo", "Los 5.571 municipios, uno por uno"],
    cta: "Ver el tablero en la galería de BI",
  },
  en: {
    eyebrow: "// Project · Brazil 2026",
    title: "The forecast missed. The map didn't.",
    lead:
      "A 17-page, 130-measure Power BI dashboard for Brazil's 25 October presidential runoff: from the whole country down to 472,000 census tracts, with a simulator, 33 polls and live election-night tracking. The model called Flávio Bolsonaro and Lula won. Here's what worked, what failed and why.",
    videoNote: "Walkthrough of the dashboard, recorded before the election: the figures on screen are the forecast, not the result.",
    resultTitle: "Forecast versus official result (TSE)",
    result: [
      { k: "Lula · forecast", v: "47.3%" },
      { k: "Lula · result", v: "51.79%" },
      { k: "National error", v: "4.5 pp" },
    ],
    pmTitle: "Post-mortem",
    findings: [
      {
        k: "0.996",
        t: "The map was right",
        v: "The correlation between forecast and result by state was 0.996. Correcting only the national shift, the average error per state is 1.1 points, the same as the 2022 backtest.",
      },
      {
        k: "43% → 60%+",
        t: "Third-party voters went to Lula",
        v: "The model assumed 43% of the 9.3 million third-party votes would go to Lula. Explaining the result required at least 60%.",
      },
      {
        k: "+4.8 M",
        t: "Turnout grew",
        v: "There were 4.78 million more valid votes between rounds. The model froze turnout at the 2022 pattern, and the growth favoured Lula.",
      },
      {
        k: "3.5%",
        t: "Too much confidence",
        v: "Uncertainty was calibrated on a single election. The 3.5% chance the model gave Lula was overconfidence, not a rare event.",
      },
    ],
    lesson:
      "What changes: structural uncertainty in the Monte Carlo, turnout as a variable, and backtests against more than one election before fixing the error.",
    captions: ["São Paulo across 27,000 census tracts", "Interactive satellite map", "All 5,571 municipalities, one by one"],
    cta: "See the dashboard in the BI gallery",
  },
} as const;

const mono = { fontFamily: "var(--font-mono)" } as const;

export function PoliticsProject({ locale }: { locale: string }) {
  const lang: Lang = locale === "en" ? "en" : "es";
  const t = copy[lang];

  return (
    <section
      id="proyecto"
      className="py-24 md:py-32"
      style={{ backgroundColor: "#050505", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="container-custom max-w-6xl mx-auto">
        <p style={{ ...mono, fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: CYAN, marginBottom: "16px" }}>
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
            marginBottom: "18px",
          }}
        >
          {t.title}
        </h2>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "rgba(212,212,216,0.85)", maxWidth: "760px", marginBottom: "40px" }}>
          {t.lead}
        </p>

        {/* Video */}
        <figure
          className="mx-auto max-w-[480px] md:max-w-none"
          style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "#0b0b0b" }}
        >
          <ResponsiveVideo
            label={t.videoNote}
            wide={{ src: "/videos/brasil-powerbi.mp4", poster: "/videos/brasil-powerbi-poster.jpg", width: 1600, height: 900 }}
            tall={{ src: "/videos/brasil-powerbi-vertical.mp4", poster: "/videos/brasil-powerbi-vertical-poster.jpg", width: 864, height: 1080 }}
          />
          <figcaption style={{ ...mono, fontSize: "12px", color: "rgba(255,255,255,0.45)", padding: "12px 16px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            {t.videoNote}
          </figcaption>
        </figure>

        {/* Result vs forecast */}
        <p style={{ ...mono, fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", margin: "48px 0 14px" }}>
          {t.resultTitle}
        </p>
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-12">
          {t.result.map((r) => (
            <div key={r.k} className="rounded-xl p-4" style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
              <p style={{ fontSize: "clamp(22px, 3.2vw, 34px)", fontWeight: 600, color: "#FFFFFF", lineHeight: 1, marginBottom: "8px", fontVariantNumeric: "tabular-nums" }}>
                {r.v}
              </p>
              <p style={{ ...mono, fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>{r.k}</p>
            </div>
          ))}
        </div>

        {/* Post-mortem */}
        <h3 style={{ fontSize: "22px", fontWeight: 600, color: "#FFFFFF", marginBottom: "20px" }}>{t.pmTitle}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {t.findings.map((f) => (
            <div key={f.t} className="rounded-xl p-5" style={{ border: "1px solid rgba(0,163,196,0.18)", background: "rgba(0,163,196,0.04)" }}>
              <p style={{ fontSize: "26px", fontWeight: 600, color: CYAN, lineHeight: 1, marginBottom: "10px", fontVariantNumeric: "tabular-nums" }}>{f.k}</p>
              <p style={{ fontSize: "16px", fontWeight: 600, color: "#FFFFFF", marginBottom: "6px" }}>{f.t}</p>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "rgba(212,212,216,0.8)" }}>{f.v}</p>
            </div>
          ))}
        </div>
        <p className="pl-4 mb-14" style={{ borderLeft: `2px solid ${CYAN}`, fontSize: "15px", lineHeight: 1.65, color: "rgba(212,212,216,0.85)", maxWidth: "820px" }}>
          {t.lesson}
        </p>

        {/* LinkedIn slides */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {["lamina-sao-paulo", "lamina-satelital", "lamina-municipios"].map((img, i) => (
            <figure key={img} style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
              <Image
                src={`/screenshots/brasil/${img}.jpg`}
                alt={t.captions[i]}
                width={1080}
                height={1350}
                sizes="(max-width: 640px) 100vw, 33vw"
                className="w-full h-auto"
              />
            </figure>
          ))}
        </div>

        <Link
          href={`/${lang}/perfiles/bi/dashboards`}
          className="inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
          style={{ padding: "12px 24px", borderRadius: "8px", background: CYAN, color: "#050505", fontSize: "14px", fontWeight: 600 }}
        >
          {t.cta}
          <ArrowRight className="w-4 h-4" />
        </Link>
        <ContactCta
          locale={lang}
          variant="compact"
          className="mt-10"
          accent={CYAN}
          onAccent="#050505"
          title={lang === "en" ? "Have an election coming up?" : "¿Tenés una elección por delante?"}
          text={lang === "en" ? "A forecast with its margin of error in plain sight, and the post-mortem once the last vote is counted." : "Un pronóstico con su margen de error a la vista, y el post-mortem cuando se cuenta el último voto."}
        />
      </div>
    </section>
  );
}
