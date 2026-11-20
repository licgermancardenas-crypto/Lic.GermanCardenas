import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";

const CYAN = "#00A3C4";

type Lang = "es" | "en";

const PAGES = [
  "territorio-disputa",
  "zdero-ciudades",
  "cinco-chacos",
  "manzanas-gran-resistencia",
  "voto-sociedad",
  "metodo",
] as const;

const copy = {
  es: {
    eyebrow: "// Proyecto · Chaco 2027",
    title: "Leer una provincia de punta a punta.",
    lead:
      "Un análisis electoral y territorial del Chaco hacia la gobernación 2027, hecho para un cliente: 18 elecciones, 154 circuitos y 1.942 radios censales en una sola base, en un informe de 68 páginas con formato de consultora. No es un pronóstico: es saber dónde se gana, dónde se pierde y por qué, antes de que empiece la campaña.",
    findings: [
      { k: "6 de 10", v: "electores viven en circuitos en disputa: ahí se define la elección, no en los bastiones." },
      { k: "38 pts", v: "giró Gran Resistencia entre 2019 y 2025. Las ciudades del interior son el nuevo campo de batalla." },
      { k: "15 de 187", v: "cruces entre voto y censo resisten los controles por clase y por efecto capital. Los que no, también se publican." },
      { k: "16 de 32", v: "bancas tiene el oficialismo en la Legislatura: gobierna sin mayoría propia." },
    ],
    captions: [
      "Territorio en disputa: 60% del padrón",
      "Gobernador 2023: dónde ganó cada frente",
      "Los 25 departamentos en cinco Chacos que votan distinto",
      "Gran Resistencia manzana por manzana con el Censo 2022",
      "Voto y sociedad: qué rasgos quedan en pie",
      "Cómo se hizo: 18 elecciones en una sola base",
    ],
    readersTitle: "Un mismo motor de datos, dos lectores",
    readers: [
      {
        t: "Para quien gobierna",
        v: "Dónde retiene y dónde se le escapa el voto, qué de su gestión rinde en las urnas y qué no, y cuánto margen fiscal real tiene para el año electoral.",
      },
      {
        t: "Para quien quiere ganarle",
        v: "Dónde está el voto disponible, qué coalición alcanza para ganar, contra qué estructura territorial compite y en qué circuitos se juega la elección.",
      },
    ],
    reservedTitle: "Lo que no está en esta página",
    reserved:
      "Las fichas de actores y factores de poder, los escenarios para 2027 y las cinco decisiones para cada lado del mostrador. Eso es del cliente.",
    ctaTitle: "¿Necesitás este análisis para tu provincia o tu municipio?",
    ctaText: "Mismo método, misma profundidad: del territorio completo a la manzana, con las fuentes oficiales y los resultados que no convienen también a la vista.",
    cta: "Hablemos",
  },
  en: {
    eyebrow: "// Project · Chaco 2027",
    title: "Reading a province end to end.",
    lead:
      "An electoral and territorial analysis of Chaco, Argentina, ahead of the 2027 governor race, built for a client: 18 elections, 154 circuits and 1,942 census tracts in a single base, delivered as a 68-page consultancy report. It isn't a forecast: it's knowing where an election is won, where it's lost and why, before the campaign starts.",
    findings: [
      { k: "6 in 10", v: "voters live in contested circuits: that's where the election is decided, not in the strongholds." },
      { k: "38 pts", v: "swing in Greater Resistencia between 2019 and 2025. Interior cities are the new battleground." },
      { k: "15 of 187", v: "vote-by-census relationships survive controls for class and the capital effect. The ones that don't are published too." },
      { k: "16 of 32", v: "seats held by the governing party in the Legislature: it governs without a majority of its own." },
    ],
    captions: [
      "Contested territory: 60% of the electorate",
      "Governor 2023: where each front won",
      "25 departments in five Chacos that vote differently",
      "Greater Resistencia block by block with the 2022 Census",
      "Vote and society: which traits hold up",
      "How it was built: 18 elections in a single base",
    ],
    readersTitle: "One data engine, two readers",
    readers: [
      {
        t: "For the incumbent",
        v: "Where the vote holds and where it slips, which parts of the administration pay off at the ballot box and which don't, and how much real fiscal room there is in an election year.",
      },
      {
        t: "For the challenger",
        v: "Where the available vote is, which coalition is enough to win, which territorial machine it's up against, and which circuits decide the race.",
      },
    ],
    reservedTitle: "What isn't on this page",
    reserved:
      "The profiles of political actors and power brokers, the 2027 scenarios and the five decisions for each side of the table. Those belong to the client.",
    ctaTitle: "Need this analysis for your province or city?",
    ctaText: "Same method, same depth: from the whole territory down to the city block, with official sources and the inconvenient results in plain sight too.",
    cta: "Let's talk",
  },
} as const;

const mono = { fontFamily: "var(--font-mono)" } as const;

export function PoliticsChaco({ locale }: { locale: string }) {
  const lang: Lang = locale === "en" ? "en" : "es";
  const t = copy[lang];

  return (
    <section
      id="chaco"
      className="py-24 md:py-32"
      style={{ backgroundColor: "#050505", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="container-custom max-w-6xl mx-auto">
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
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "rgba(212,212,216,0.85)", maxWidth: "780px", marginBottom: "40px" }}>
          {t.lead}
        </p>

        {/* Key findings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {t.findings.map((f) => (
            <div key={f.k} className="rounded-xl p-5" style={{ border: "1px solid rgba(0,163,196,0.18)", background: "rgba(0,163,196,0.04)" }}>
              <p style={{ fontSize: "28px", fontWeight: 600, color: CYAN, lineHeight: 1, marginBottom: "10px", fontVariantNumeric: "tabular-nums" }}>{f.k}</p>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "rgba(212,212,216,0.85)" }}>{f.v}</p>
            </div>
          ))}
        </div>

        {/* Report pages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {PAGES.map((p, i) => (
            <figure
              key={p}
              className={i === 0 ? "md:col-span-2" : ""}
              style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "#FFFFFF" }}
            >
              <Image
                src={`/screenshots/chaco/${p}.jpg`}
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

        {/* Two readers */}
        <h3 style={{ fontSize: "22px", fontWeight: 600, color: "#FFFFFF", marginBottom: "20px" }}>{t.readersTitle}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {t.readers.map((r) => (
            <div key={r.t} className="rounded-xl p-6" style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
              <p style={{ fontSize: "17px", fontWeight: 600, color: "#FFFFFF", marginBottom: "8px" }}>{r.t}</p>
              <p style={{ fontSize: "15px", lineHeight: 1.65, color: "rgba(212,212,216,0.8)" }}>{r.v}</p>
            </div>
          ))}
        </div>

        {/* Reserved */}
        <div className="flex gap-3 items-start rounded-xl p-5 mb-14" style={{ border: "1px dashed rgba(255,255,255,0.15)" }}>
          <Lock className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: CYAN }} />
          <div>
            <p style={{ fontSize: "15px", fontWeight: 600, color: "#FFFFFF", marginBottom: "4px" }}>{t.reservedTitle}</p>
            <p style={{ fontSize: "14px", lineHeight: 1.6, color: "rgba(212,212,216,0.75)" }}>{t.reserved}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-8 md:p-10" style={{ background: "linear-gradient(135deg, rgba(0,163,196,0.16), rgba(0,163,196,0.04))", border: "1px solid rgba(0,163,196,0.3)" }}>
          <p style={{ fontSize: "clamp(22px, 2.6vw, 30px)", fontWeight: 600, color: "#FFFFFF", lineHeight: 1.2, marginBottom: "10px" }}>{t.ctaTitle}</p>
          <p style={{ fontSize: "16px", lineHeight: 1.65, color: "rgba(230,230,235,0.85)", maxWidth: "680px", marginBottom: "24px" }}>{t.ctaText}</p>
          <Link
            href={`/${lang}#contact`}
            className="inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
            style={{ padding: "13px 26px", borderRadius: "8px", background: CYAN, color: "#050505", fontSize: "15px", fontWeight: 600 }}
          >
            {t.cta}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
