import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { ResponsiveVideo } from "@/components/ResponsiveVideo";
import { ContactCta } from "@/components/ContactCta";

const CYAN = "#00A3C4";
const WEB = "https://atlas-espana-29n.vercel.app";

type Lang = "es" | "en";

const copy = {
  es: {
    eyebrow: "// Proyecto · España 29-N",
    title: "Pronóstico abierto: se mide el 29 de noviembre.",
    lead:
      "Las generales españolas del 29 de noviembre de 2026: las 52 circunscripciones y los 350 escaños del Congreso. Cinco modelos con backtest a ciegas contra las generales de 2015 a 2023, 10.000 simulaciones y un motor D'Hondt que reproduce los escaños oficiales en las 260 circunscripciones históricas. Se publica antes de la elección, en una web, un tablero de Power BI y un Excel, para medirlo después contra el resultado oficial.",
    videoNote: "Recorrido del tablero de Power BI. Pronóstico con encuestas hasta el 12/11/2026.",
    forecastTitle: "Escaños pronosticados (mediana e intervalo del 80%)",
    seats: [
      { k: "Partido Popular", v: "124", r: "111–137" },
      { k: "PSOE", v: "110", r: "98–123" },
      { k: "Vox", v: "66", r: "56–76" },
    ],
    facts: [
      { k: "95%", t: "Mayoría PP + Vox", v: "Probabilidad de que sumen 176 escaños o más. La mediana del bloque es 192." },
      { k: "13", t: "Circunscripciones muy competitivas", v: "Donde un punto de voto cambia escaños. Cada una tiene su ficha con escenarios." },
      { k: "88%", t: "Acierto del ganador en el backtest", v: "Por circunscripción, prediciendo cada elección de 2016 a 2023 sin ver su resultado." },
      { k: "19", t: "Encuestas con enlace a la fuente", v: "Cada una con enlace a la publicación original y su estado de verificación a la vista." },
    ],
    note:
      "Es el tercer caso de la serie, después de Brasil y California, y se va a medir con la misma vara: pronóstico contra resultado oficial del Ministerio del Interior, con post-mortem incluido.",
    captions: ["Probabilidad del favorito en cada circunscripción", "Las 52 contiendas: favorito, margen, intervalo y competitividad"],
    cta: "Ver la web del pronóstico",
  },
  en: {
    eyebrow: "// Project · Spain 29-N",
    title: "Open forecast: it gets measured on 29 November.",
    lead:
      "Spain's general election of 29 November 2026: all 52 constituencies and 350 seats in the Congress. Five models backtested blind against the 2015–2023 general elections, 10,000 simulations and a D'Hondt engine that reproduces the official seat counts in all 260 historical constituency races. Published before the vote, as a website, a Power BI dashboard and an Excel workbook, to be measured afterwards against the official result.",
    videoNote: "Walkthrough of the Power BI dashboard. Forecast uses polls up to 12/11/2026.",
    forecastTitle: "Projected seats (median and 80% interval)",
    seats: [
      { k: "Partido Popular", v: "124", r: "111–137" },
      { k: "PSOE", v: "110", r: "98–123" },
      { k: "Vox", v: "66", r: "56–76" },
    ],
    facts: [
      { k: "95%", t: "PP + Vox majority", v: "Probability they reach 176 seats or more. The bloc's median is 192." },
      { k: "13", t: "Highly competitive constituencies", v: "Where a single point of vote share moves seats. Each one has its own scenario card." },
      { k: "88%", t: "Backtest winner accuracy", v: "By constituency, predicting each election from 2016 to 2023 without seeing its result." },
      { k: "19", t: "Polls linked to their source", v: "Each one linked to the original publication, with its verification status visible." },
    ],
    note:
      "It's the third case in the series, after Brazil and California, and it will be judged the same way: forecast versus the official Interior Ministry result, post-mortem included.",
    captions: ["Probability of the favourite in each constituency", "All 52 races: favourite, margin, interval and competitiveness"],
    cta: "See the forecast website",
  },
} as const;

const mono = { fontFamily: "var(--font-mono)" } as const;

export function PoliticsEspana({ locale }: { locale: string }) {
  const lang: Lang = locale === "en" ? "en" : "es";
  const t = copy[lang];

  return (
    <section id="espana" className="pb-24 md:pb-32" style={{ backgroundColor: "#050505" }}>
      <div className="container-custom max-w-6xl mx-auto pt-16 md:pt-20" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: CYAN, marginBottom: "16px" }}>
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

        <figure
          className="mx-auto max-w-[480px] md:max-w-none"
          style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "#0b0b0b" }}
        >
          <ResponsiveVideo
            label={t.videoNote}
            wide={{ src: "/videos/espana-powerbi.mp4", poster: "/videos/espana-powerbi-poster.jpg", width: 1600, height: 900 }}
            tall={{ src: "/videos/espana-powerbi-vertical.mp4", poster: "/videos/espana-powerbi-vertical-poster.jpg", width: 864, height: 1080 }}
          />
          <figcaption style={{ ...mono, fontSize: "12px", color: "rgba(255,255,255,0.45)", padding: "12px 16px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            {t.videoNote}
          </figcaption>
        </figure>

        <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", margin: "48px 0 14px" }}>
          {t.forecastTitle}
        </p>
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-12">
          {t.seats.map((s) => (
            <div key={s.k} className="rounded-xl p-4" style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
              <p style={{ fontSize: "clamp(24px, 3.4vw, 38px)", fontWeight: 600, color: "#FFFFFF", lineHeight: 1, marginBottom: "6px", fontVariantNumeric: "tabular-nums" }}>
                {s.v}
              </p>
              <p style={{ ...mono, fontSize: "11px", color: "rgba(255,255,255,0.45)", marginBottom: "6px", fontVariantNumeric: "tabular-nums" }}>{s.r}</p>
              <p style={{ ...mono, fontSize: "10px", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>{s.k}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {t.facts.map((f) => (
            <div key={f.t} className="rounded-xl p-5" style={{ border: "1px solid rgba(0,163,196,0.18)", background: "rgba(0,163,196,0.04)" }}>
              <p style={{ fontSize: "26px", fontWeight: 600, color: CYAN, lineHeight: 1, marginBottom: "10px", fontVariantNumeric: "tabular-nums" }}>{f.k}</p>
              <p style={{ fontSize: "16px", fontWeight: 600, color: "#FFFFFF", marginBottom: "6px" }}>{f.t}</p>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "rgba(212,212,216,0.8)" }}>{f.v}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {["probabilidad", "circunscripciones"].map((img, i) => (
            <figure key={img} style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "#0b0b0b" }}>
              <Image
                src={`/screenshots/espana/${img}.jpg`}
                alt={t.captions[i]}
                width={1340}
                height={753}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto"
              />
              <figcaption style={{ ...mono, fontSize: "12px", color: "rgba(255,255,255,0.45)", padding: "10px 14px" }}>{t.captions[i]}</figcaption>
            </figure>
          ))}
        </div>

        <p className="pl-4 mb-10" style={{ borderLeft: `2px solid ${CYAN}`, fontSize: "16px", lineHeight: 1.7, color: "rgba(230,230,235,0.9)", maxWidth: "860px" }}>
          {t.note}
        </p>

        <a
          href={WEB}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
          style={{ padding: "12px 24px", borderRadius: "8px", background: CYAN, color: "#050505", fontSize: "14px", fontWeight: 600 }}
        >
          {t.cta}
          <ExternalLink className="w-4 h-4" />
        </a>
        <ContactCta
          locale={lang}
          variant="full"
          className="mt-12"
          accent={CYAN}
          onAccent="#050505"
          title={lang === "en" ? "Want an open forecast for your election?" : "¿Querés un pronóstico abierto para tu elección?"}
          text={lang === "en" ? "Published before the vote and measured afterwards against the official result: that's how you earn the reader's trust." : "Publicado antes del voto y medido después contra el resultado oficial: así se gana la confianza de quien lo lee."}
        />
      </div>
    </section>
  );
}
