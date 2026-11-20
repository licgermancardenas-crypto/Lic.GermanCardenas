import Image from "next/image";
import { Lock, ExternalLink } from "lucide-react";
import { ContactCta } from "@/components/ContactCta";

const CYAN = "#00A3C4";

type Lang = "es" | "en";

const GEMELO = "https://atlas-caba-ciudad.vercel.app/gemelo/";

const PAGES = ["portada", "mapa-2023", "mapa-2025", "educacion", "mesas", "actas", "encuesta-territorio"] as const;

const copy = {
  es: {
    eyebrow: "// Proyecto · Ciudad de Buenos Aires 2027",
    title: "Una ciudad que cambió de oferta sin cambiar de estructura social.",
    lead:
      "Inteligencia electoral para la Jefatura de Gobierno porteña, hecha para un cliente: 27 elecciones de 1996 a 2025, 54.325 mesas, 167 circuitos y el Censo 2022 en una sola base, más una encuesta propia cruzada con el territorio. Seis informes, seis libros de Excel y un votómetro.",
    findings: [
      { k: "7 de 10", v: "votos perdió el PRO en dos años: en 2025 retuvo el 29,9% de lo que había sacado en 2023." },
      { k: "143 de 167", v: "circuitos ganó el PRO en 2023. Dos años después la ciudad quedó partida en dos." },
      { k: "Educación", v: "ordena el voto porteño mejor que cualquier otra variable del censo; la pobreza, no." },
      { k: "0 de 17", v: "pruebas de dígitos detectan anomalías en las actas de 2015 a 2023. Se mide, no se supone." },
    ],
    captions: [
      "El mapa del voto porteño: treinta años de elecciones en 167 circuitos",
      "2023: el PRO gana 143 de los 167 circuitos",
      "2025: la ciudad partida en dos",
      "El voto se ordena por nivel educativo, no por pobreza",
      "Mesa por mesa: el 49,6% de la ciudad es un promedio de mesas que van del 22% al 78%",
      "¿Son confiables las actas? 17 pruebas de dígitos, ninguna anomalía",
      "Encuesta y territorio: 511 respuestas cruzadas con el voto real de cada comuna",
    ],
    twinTitle: "El gemelo digital de la Ciudad",
    twinText:
      "Para decidir dónde poner el esfuerzo hay que ver el territorio. 318.607 parcelas con sus pisos y su uso, 12.652 manzanas, 31.961 cuadras, los radios censales y los 167 circuitos en una sola web: en 2D las manzanas se pintan por población estimada y se cruzan con escuelas, locales de votación, hospitales y transporte; en 3D los edificios se levantan sobre la foto aérea oficial.",
    twinCaptions: [
      "2D: manzanas por personas estimadas, con circuitos electorales y barrios populares",
      "3D: los edificios levantados por su cantidad de pisos sobre la foto aérea 2021",
    ],
    twinCta: "Abrir el gemelo digital",
    reportsTitle: "Qué incluye el trabajo",
    reports: [
      "El mapa del voto porteño",
      "Mesa por mesa",
      "Encuesta y territorio",
      "Encuesta ciudadana 2026",
      "Candidatos 2027",
      "Resumen ejecutivo",
      "Modelo 2027 en Excel",
      "Votómetro",
    ],
    reservedTitle: "Lo que no está en esta página",
    reserved:
      "El informe de candidatos, la encuesta completa, el modelo para 2027 y las herramientas de decisión. Eso es del cliente.",
    ctaTitle: "¿Tu campaña necesita saber dónde están los votos?",
    ctaText: "Del histórico de treinta años a la mesa de votación, con encuesta propia, control de calidad de las actas y un modelo para la próxima elección.",
  },
  en: {
    eyebrow: "// Project · City of Buenos Aires 2027",
    title: "A city that changed its options without changing its social structure.",
    lead:
      "Electoral intelligence for the Buenos Aires mayoral race, built for a client: 27 elections from 1996 to 2025, 54,325 polling stations, 167 circuits and the 2022 Census in a single base, plus an original survey crossed with the territory. Six reports, six Excel workbooks and a vote calculator.",
    findings: [
      { k: "7 in 10", v: "votes lost by PRO in two years: in 2025 it kept 29.9% of what it won in 2023." },
      { k: "143 of 167", v: "circuits won by PRO in 2023. Two years later the city was split in two." },
      { k: "Education", v: "orders the city's vote better than any other census variable; poverty doesn't." },
      { k: "0 of 17", v: "digit tests flag anomalies in the 2015–2023 tally sheets. Measured, not assumed." },
    ],
    captions: [
      "The Buenos Aires vote map: thirty years of elections across 167 circuits",
      "2023: PRO wins 143 of 167 circuits",
      "2025: the city split in two",
      "The vote follows education, not poverty",
      "Station by station: the city's 49.6% is an average of stations ranging from 22% to 78%",
      "Are the tally sheets reliable? 17 digit tests, no anomalies",
      "Survey and territory: 511 responses matched to each district's real vote",
    ],
    twinTitle: "The city's digital twin",
    twinText:
      "Deciding where to put the effort means seeing the territory. 318,607 land parcels with their floors and use, 12,652 blocks, 31,961 street segments, the census tracts and the 167 electoral circuits in a single website: in 2D the blocks are shaded by estimated population and crossed with schools, polling places, hospitals and transport; in 3D the buildings rise over the official aerial photo.",
    twinCaptions: [
      "2D: blocks by estimated population, with electoral circuits and informal settlements",
      "3D: buildings raised by their number of floors over the 2021 aerial photo",
    ],
    twinCta: "Open the digital twin",
    reportsTitle: "What the work includes",
    reports: [
      "The Buenos Aires vote map",
      "Station by station",
      "Survey and territory",
      "2026 citizen survey",
      "2027 candidates",
      "Executive summary",
      "2027 model in Excel",
      "Vote calculator",
    ],
    reservedTitle: "What isn't on this page",
    reserved:
      "The candidates report, the full survey, the 2027 model and the decision tools. Those belong to the client.",
    ctaTitle: "Does your campaign need to know where the votes are?",
    ctaText: "From thirty years of history down to the polling station, with an original survey, quality control of the tally sheets and a model for the next election.",
  },
} as const;

const mono = { fontFamily: "var(--font-mono)" } as const;

export function PoliticsCaba({ locale }: { locale: string }) {
  const lang: Lang = locale === "en" ? "en" : "es";
  const t = copy[lang];

  return (
    <section id="caba" className="pb-24 md:pb-32" style={{ backgroundColor: "#050505" }}>
      <div className="container-custom max-w-6xl mx-auto pt-16 md:pt-20" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <p style={{ ...mono, fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: CYAN, marginBottom: "16px" }}>
          {t.eyebrow}
        </p>
        <h2
          style={{
            fontSize: "clamp(30px, 4.2vw, 52px)",
            fontWeight: 600,
            color: "#FFFFFF",
            lineHeight: 1.06,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            marginBottom: "18px",
            maxWidth: "980px",
          }}
        >
          {t.title}
        </h2>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "rgba(212,212,216,0.85)", maxWidth: "780px", marginBottom: "40px" }}>
          {t.lead}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {t.findings.map((f) => (
            <div key={f.k} className="rounded-xl p-5" style={{ border: "1px solid rgba(0,163,196,0.18)", background: "rgba(0,163,196,0.04)" }}>
              <p style={{ fontSize: "28px", fontWeight: 600, color: CYAN, lineHeight: 1, marginBottom: "10px", fontVariantNumeric: "tabular-nums" }}>{f.k}</p>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "rgba(212,212,216,0.85)" }}>{f.v}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {PAGES.map((p, i) => (
            <figure
              key={p}
              className={i === 0 ? "md:col-span-2" : ""}
              style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "#FFFFFF" }}
            >
              <Image
                src={`/screenshots/caba/${p}.jpg`}
                alt={t.captions[i]}
                width={1684}
                height={1190}
                sizes={i === 0 ? "(max-width: 768px) 100vw, 1100px" : "(max-width: 768px) 100vw, 550px"}
                className="w-full h-auto"
              />
              <figcaption style={{ ...mono, fontSize: "12px", color: "rgba(255,255,255,0.5)", padding: "10px 14px", background: "#0b0b0b" }}>
                {t.captions[i]}
              </figcaption>
            </figure>
          ))}
        </div>

        <h3 style={{ fontSize: "24px", fontWeight: 600, color: "#FFFFFF", marginBottom: "10px" }}>{t.twinTitle}</h3>
        <p style={{ fontSize: "16px", lineHeight: 1.7, color: "rgba(212,212,216,0.85)", maxWidth: "820px", marginBottom: "22px" }}>{t.twinText}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          {[
            { src: "/screenshots/caba/gemelo-2d.jpg", h: 1000 },
            { src: "/screenshots/caba/gemelo-3d.jpg", h: 950 },
          ].map((img, i) => (
            <figure key={img.src} style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "#0b0b0b" }}>
              <Image src={img.src} alt={t.twinCaptions[i]} width={1600} height={img.h} sizes="(max-width: 768px) 100vw, 550px" className="w-full h-auto" />
              <figcaption style={{ ...mono, fontSize: "12px", color: "rgba(255,255,255,0.5)", padding: "10px 14px" }}>{t.twinCaptions[i]}</figcaption>
            </figure>
          ))}
        </div>
        <a
          href={GEMELO}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mb-14 transition-all duration-200 hover:-translate-y-0.5"
          style={{ padding: "12px 24px", borderRadius: "8px", background: CYAN, color: "#050505", fontSize: "14px", fontWeight: 600 }}
        >
          {t.twinCta}
          <ExternalLink className="w-4 h-4" />
        </a>

        <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#FFFFFF", marginBottom: "14px" }}>{t.reportsTitle}</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {t.reports.map((r) => (
            <span key={r} style={{ ...mono, fontSize: "12px", padding: "7px 12px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(230,230,235,0.85)" }}>
              {r}
            </span>
          ))}
        </div>

        <div className="flex gap-3 items-start rounded-xl p-5 mb-10" style={{ border: "1px dashed rgba(255,255,255,0.15)" }}>
          <Lock className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: CYAN }} />
          <div>
            <p style={{ fontSize: "15px", fontWeight: 600, color: "#FFFFFF", marginBottom: "4px" }}>{t.reservedTitle}</p>
            <p style={{ fontSize: "14px", lineHeight: 1.6, color: "rgba(212,212,216,0.75)" }}>{t.reserved}</p>
          </div>
        </div>

        <ContactCta locale={locale} variant="full" accent={CYAN} onAccent="#050505" title={t.ctaTitle} text={t.ctaText} />
      </div>
    </section>
  );
}
