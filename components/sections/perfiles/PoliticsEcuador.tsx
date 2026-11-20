import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { ContactCta } from "@/components/ContactCta";

const GOLD = "#F2C230";
const WEB = "https://atlas-ecuador-2026.vercel.app";

type Lang = "es" | "en";

const copy = {
  es: {
    eyebrow: "// Proyecto · Ecuador 29-N",
    title: "Pronosticar donde casi nadie repite.",
    lead:
      "Un motor estadístico para las 222 alcaldías de Ecuador en las seccionales del 29 de noviembre de 2026. Primero, la base: 1.103 elecciones de alcalde y 7.140 candidaturas de 2004 a 2023, cantón por cantón. Después, cinco modelos comparados a ciegas contra 2019 y 2023, con 10.000 simulaciones por contienda. Todo en una web, un tablero de Power BI y un Excel con 38 mapas.",
    facts: [
      { k: "77%", t: "Alcaldías que cambiaron de manos en 2023", v: "No repitió ni la persona ni la organización que gobernaba. Es el contexto de cualquier pronóstico en Ecuador." },
      { k: "32 de 123", t: "Alcaldes reelectos en 2023", v: "Solo el 26% de los que buscaron otro mandato lo consiguió: gobernar un municipio desgasta más de lo que suma." },
      { k: "42", t: "Alcaldías decididas por menos de 3 puntos", v: "Catorce por menos de un punto. En Colimes, la diferencia entre el primero y el segundo fue de 0,03%." },
      { k: "39,6% vs 25%", t: "Acierto del ganador contra el azar", v: "Validado a ciegas sobre 2019 y 2023, con probabilidades calibradas. Modesto a propósito: en un sistema tan volátil, prometer más sería mentir." },
    ],
    captions: [
      "Evolución 2004–2023: la organización ganadora de cada alcaldía en las cinco elecciones",
      "Validación: cinco modelos contra 2019 y 2023, y la calibración de las probabilidades",
    ],
    carouselCaption: "Carrusel con los hallazgos, calculados desde la base histórica",
    decision:
      "El gradient boosting quedó a 0,006 de log loss del modelo elegido: no es una mejora que se pueda verificar, así que se quedó el modelo más simple, la regresión logística condicional. Y donde no hay nómina de candidatos verificada, el sistema dice N/D en vez de inventar una probabilidad.",
    note:
      "El pronóstico 2026 está en veda electoral: el Código de la Democracia (art. 282) prohíbe difundir pronósticos en los diez días anteriores a la elección. Se publica después del cierre de urnas del 29 de noviembre, junto con la comparación contra el resultado oficial del CNE, como en Brasil y California.",
    cta: "Ver la web del proyecto",
  },
  en: {
    eyebrow: "// Project · Ecuador 29-N",
    title: "Forecasting where almost nobody gets re-elected.",
    lead:
      "A statistical engine for Ecuador's 222 mayoralties in the local elections of 29 November 2026. First, the foundation: 1,103 mayoral races and 7,140 candidacies from 2004 to 2023, canton by canton. Then five models compared blind against 2019 and 2023, with 10,000 simulations per race. All of it as a website, a Power BI dashboard and an Excel workbook with 38 maps.",
    facts: [
      { k: "77%", t: "Mayoralties that changed hands in 2023", v: "Neither the person nor the party in office came back. That's the backdrop for any forecast in Ecuador." },
      { k: "32 of 123", t: "Mayors re-elected in 2023", v: "Only 26% of those who ran again won: governing a municipality wears you down more than it builds you up." },
      { k: "42", t: "Mayoralties decided by under 3 points", v: "Fourteen by under one point. In Colimes, the gap between first and second was 0.03%." },
      { k: "39.6% vs 25%", t: "Winner accuracy versus chance", v: "Validated blind on 2019 and 2023, with calibrated probabilities. Modest on purpose: in a system this volatile, promising more would be a lie." },
    ],
    captions: [
      "2004–2023: the winning party in every mayoralty across five elections",
      "Validation: five models against 2019 and 2023, and the calibration of the probabilities",
    ],
    carouselCaption: "Carousel of findings, computed from the historical database",
    decision:
      "Gradient boosting came within 0.006 log loss of the chosen model: not an improvement that can be verified, so the simpler model stayed — a conditional logistic regression. And where there's no verified list of candidates, the system says N/A instead of making up a probability.",
    note:
      "The 2026 forecast is under the electoral blackout: Ecuador's Code of Democracy (art. 282) bans publishing forecasts in the ten days before the election. It will be published after the polls close on 29 November, together with the comparison against the official CNE result, as with Brazil and California.",
    cta: "See the project website",
  },
} as const;

const mono = { fontFamily: "var(--font-mono)" } as const;

export function PoliticsEcuador({ locale }: { locale: string }) {
  const lang: Lang = locale === "en" ? "en" : "es";
  const t = copy[lang];

  return (
    <section id="ecuador" className="pb-24 md:pb-32" style={{ backgroundColor: "#050505" }}>
      <div className="container-custom max-w-6xl mx-auto pt-16 md:pt-20" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <p style={{ ...mono, fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, marginBottom: "16px" }}>
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

        <figure style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "#0b0b0b", marginBottom: "48px" }}>
          <Image
            src="/screenshots/ecuador/carrusel.jpg"
            alt={t.carouselCaption}
            width={1600}
            height={1000}
            sizes="(max-width: 1200px) 100vw, 1150px"
            className="w-full h-auto"
          />
          <figcaption style={{ ...mono, fontSize: "12px", color: "rgba(255,255,255,0.45)", padding: "12px 16px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            {t.carouselCaption}
          </figcaption>
        </figure>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {t.facts.map((f) => (
            <div key={f.t} className="rounded-xl p-5" style={{ border: "1px solid rgba(242,194,48,0.18)", background: "rgba(242,194,48,0.04)" }}>
              <p style={{ fontSize: "26px", fontWeight: 600, color: GOLD, lineHeight: 1, marginBottom: "10px", fontVariantNumeric: "tabular-nums" }}>{f.k}</p>
              <p style={{ fontSize: "16px", fontWeight: 600, color: "#FFFFFF", marginBottom: "6px" }}>{f.t}</p>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "rgba(212,212,216,0.8)" }}>{f.v}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {["evolucion", "validacion"].map((img, i) => (
            <figure key={img} style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "#0b0b0b" }}>
              <Image
                src={`/screenshots/ecuador/${img}.jpg`}
                alt={t.captions[i]}
                width={1264}
                height={711}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto"
              />
              <figcaption style={{ ...mono, fontSize: "12px", color: "rgba(255,255,255,0.45)", padding: "10px 14px" }}>{t.captions[i]}</figcaption>
            </figure>
          ))}
        </div>

        <p className="pl-4 mb-6" style={{ borderLeft: `2px solid ${GOLD}`, fontSize: "16px", lineHeight: 1.7, color: "rgba(230,230,235,0.9)", maxWidth: "860px" }}>
          {t.decision}
        </p>
        <p style={{ ...mono, fontSize: "13px", lineHeight: 1.65, color: "rgba(242,194,48,0.85)", maxWidth: "860px", marginBottom: "28px" }}>
          {t.note}
        </p>

        <a
          href={WEB}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
          style={{ padding: "12px 24px", borderRadius: "8px", background: GOLD, color: "#050505", fontSize: "14px", fontWeight: 600 }}
        >
          {t.cta}
          <ExternalLink className="w-4 h-4" />
        </a>
        <ContactCta
          locale={lang}
          variant="full"
          className="mt-12"
          accent={GOLD}
          onAccent="#050505"
          title={lang === "en" ? "Running in a volatile local election?" : "¿Tu elección local es así de volátil?"}
          text={
            lang === "en"
              ? "Canton-by-canton history, honest uncertainty and a model validated before anyone pays for it: that's where a strategy starts."
              : "Historia cantón por cantón, incertidumbre dicha en voz alta y un modelo validado antes de cobrarlo: por ahí empieza una estrategia."
          }
        />
      </div>
    </section>
  );
}
