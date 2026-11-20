import Image from "next/image";
import { Lock } from "lucide-react";
import { ContactCta } from "@/components/ContactCta";

const VIOLET = "#B062FF";

type Lang = "es" | "en";

const copy = {
  es: {
    eyebrow: "// Proyecto · Provincia de Buenos Aires 2027",
    title: "La Provincia no se gana en el mapa: se gana con tres perillas.",
    lead:
      "Inteligencia electoral propia de Atlas Analytics para la Gobernación y las 135 intendencias bonaerenses de 2027. Quince elecciones mesa por mesa, de 2011 a 2025, llevadas a unos mil circuitos estables y cruzadas con los censos de 1991 a 2022, 2.065 barrios populares, 21.592 escuelas y 3.052 centros de salud. Encima, un motor de escenarios que se juzga por cómo predice elecciones que no vio.",
    facts: [
      { k: "59%", t: "Empate si se repite octubre de 2025", v: "El peronismo gana el 59% de las simulaciones, por +0,3 puntos. Lo que la define es el nivel provincial, si la derecha va unida y quién se suma a votar." },
      { k: "2,7 pts", t: "Error del motor por municipio", v: "Dado el resultado provincial, reproduce cada municipio con 2,7 puntos de error y acierta el 89% de los ganadores municipales en 13 pares de elecciones." },
      { k: "−0,2 pts", t: "Lo que arrastra un intendente al gobernador", v: "En 267 elecciones municipales ajustadas, ganar la intendencia no mueve el voto a Gobernador siguiente (intervalo −4,4 a +4,0). Sí ayuda a retenerla: +7,4 puntos." },
      { k: "513.000", t: "Votantes de Kicillof que se abstuvieron", v: "El 12,6% de sus votantes de 2023 no fue a votar en octubre de 2025, y ninguno pasó a LLA-PRO: es voto recuperable sin convencer a nadie de cambiar." },
    ],
    mainCaption: "Del empate a +13: probabilidad de que el peronismo salga primero en cada municipio, en tres escenarios",
    captions: ["Todo el informe en una hoja", "El Conurbano vota más peronista, pero se mueve igual que el interior"],
    mayorsTitle: "Los 135 intendentes: quién puede seguir en 2027",
    mayorsText:
      "Un relevamiento propio que amplía el listado oficial con partido, edad, formación, años en el cargo y la situación de cada uno frente al límite de reelección de la Ley 14.836. Con la ley actual, 80 intendentes no pueden presentarse en 2027 —14 en zona gris por licencias— y 55 están habilitados. Es el mapa de dónde habrá intendencias abiertas.",
    mayorsFacts: [
      { k: "80", v: "no pueden reelegir" },
      { k: "55", v: "habilitados" },
      { k: "54", v: "años de edad promedio" },
    ],
    mayorsCaption: "Relevamiento de los 135 intendentes al 10/10/2026",
    reservedTitle: "Lo que no está en esta página",
    reserved:
      "Los perfiles estratégicos de los 135 municipios y la plataforma completa —base de datos, motor, simulador y asistente con IA— se muestran en una demo a pedido.",
    ctaTitle: "¿Vas por una intendencia o por la Gobernación en 2027?",
    ctaText: "Del municipio a la sección y a la Provincia: qué se puede ganar, con qué escenario y dónde rinde el esfuerzo.",
  },
  en: {
    eyebrow: "// Project · Buenos Aires Province 2027",
    title: "The province isn't won on the map: it's won with three dials.",
    lead:
      "Atlas Analytics' own electoral intelligence for the 2027 governor's race and the 135 mayoralties of Buenos Aires Province. Fifteen elections at polling-station level, from 2011 to 2025, mapped onto about a thousand stable circuits and crossed with the 1991–2022 censuses, 2,065 informal settlements, 21,592 schools and 3,052 health centres. On top of it, a scenario engine judged by how well it predicts elections it never saw.",
    facts: [
      { k: "59%", t: "A tie if October 2025 repeats", v: "Peronism wins 59% of the simulations, by +0.3 points. What decides it is the province-wide level, whether the right runs united and who turns out." },
      { k: "2.7 pts", t: "Engine error per municipality", v: "Given the province-wide result, it reproduces each municipality within 2.7 points and calls 89% of municipal winners across 13 pairs of elections." },
      { k: "−0.2 pts", t: "What a mayor carries to the governor", v: "In 267 close municipal races, winning the mayoralty doesn't move the next governor vote (interval −4.4 to +4.0). It does help keep it: +7.4 points." },
      { k: "513,000", t: "Kicillof voters who stayed home", v: "12.6% of his 2023 voters didn't vote in October 2025, and none switched to LLA-PRO: recoverable votes without persuading anyone to change sides." },
    ],
    mainCaption: "From a tie to +13: probability that Peronism comes first in each municipality, under three scenarios",
    captions: ["The whole report on one page", "Greater Buenos Aires votes more Peronist, but moves just like the interior"],
    mayorsTitle: "The 135 mayors: who can run again in 2027",
    mayorsText:
      "An original survey that extends the official list with party, age, education, years in office and each mayor's status under the re-election limit of Law 14,836. Under current law, 80 mayors can't run in 2027 — 14 in a grey zone because of leaves of absence — and 55 can. It's the map of where mayoralties will be open.",
    mayorsFacts: [
      { k: "80", v: "can't run again" },
      { k: "55", v: "eligible" },
      { k: "54", v: "average age" },
    ],
    mayorsCaption: "Survey of the 135 mayors as of 10/10/2026",
    reservedTitle: "What isn't on this page",
    reserved:
      "The strategic profiles of all 135 municipalities and the full platform — database, engine, simulator and AI assistant — are shown in a demo on request.",
    ctaTitle: "Running for a mayoralty or for governor in 2027?",
    ctaText: "From the municipality to the section and the whole province: what can be won, under which scenario and where the effort pays off.",
  },
} as const;

const mono = { fontFamily: "var(--font-mono)" } as const;

export function PoliticsPba({ locale }: { locale: string }) {
  const lang: Lang = locale === "en" ? "en" : "es";
  const t = copy[lang];

  return (
    <section id="pba" className="pb-24 md:pb-32" style={{ backgroundColor: "#050505" }}>
      <div className="container-custom max-w-6xl mx-auto pt-16 md:pt-20" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <p style={{ ...mono, fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: VIOLET, marginBottom: "16px" }}>
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

        <figure style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "#130630", marginBottom: "40px" }}>
          <Image
            src="/screenshots/pba/escenarios.jpg"
            alt={t.mainCaption}
            width={1754}
            height={1240}
            sizes="(max-width: 1200px) 100vw, 1150px"
            className="w-full h-auto"
          />
          <figcaption style={{ ...mono, fontSize: "12px", color: "rgba(255,255,255,0.45)", padding: "12px 16px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            {t.mainCaption}
          </figcaption>
        </figure>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {t.facts.map((f) => (
            <div key={f.t} className="rounded-xl p-5" style={{ border: "1px solid rgba(176,98,255,0.2)", background: "rgba(176,98,255,0.05)" }}>
              <p style={{ fontSize: "26px", fontWeight: 600, color: VIOLET, lineHeight: 1, marginBottom: "10px", fontVariantNumeric: "tabular-nums" }}>{f.k}</p>
              <p style={{ fontSize: "16px", fontWeight: 600, color: "#FFFFFF", marginBottom: "6px" }}>{f.t}</p>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "rgba(212,212,216,0.8)" }}>{f.v}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
          {["resumen", "conurbano"].map((img, i) => (
            <figure key={img} style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "#130630" }}>
              <Image
                src={`/screenshots/pba/${img}.jpg`}
                alt={t.captions[i]}
                width={1754}
                height={1240}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto"
              />
              <figcaption style={{ ...mono, fontSize: "12px", color: "rgba(255,255,255,0.45)", padding: "10px 14px" }}>{t.captions[i]}</figcaption>
            </figure>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(0,380px)] gap-8 items-start mb-14">
          <div>
            <h3 style={{ fontSize: "24px", fontWeight: 600, color: "#FFFFFF", marginBottom: "12px" }}>{t.mayorsTitle}</h3>
            <p style={{ fontSize: "16px", lineHeight: 1.7, color: "rgba(212,212,216,0.85)", marginBottom: "22px" }}>{t.mayorsText}</p>
            <div className="grid grid-cols-3 gap-3">
              {t.mayorsFacts.map((m) => (
                <div key={m.v} className="rounded-xl p-4" style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
                  <p style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 600, color: "#FFFFFF", lineHeight: 1, marginBottom: "6px", fontVariantNumeric: "tabular-nums" }}>{m.k}</p>
                  <p style={{ ...mono, fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>{m.v}</p>
                </div>
              ))}
            </div>
          </div>
          <figure style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "#FFFFFF" }}>
            <Image
              src="/screenshots/pba/intendentes.jpg"
              alt={t.mayorsCaption}
              width={1075}
              height={1521}
              sizes="(max-width: 768px) 100vw, 380px"
              className="w-full h-auto"
            />
            <figcaption style={{ ...mono, fontSize: "12px", color: "rgba(255,255,255,0.5)", padding: "10px 14px", background: "#0b0b0b" }}>{t.mayorsCaption}</figcaption>
          </figure>
        </div>

        <div className="flex gap-3 items-start rounded-xl p-5 mb-12" style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
          <Lock className="w-5 h-5 shrink-0 mt-0.5" style={{ color: VIOLET }} />
          <div>
            <p style={{ fontSize: "15px", fontWeight: 600, color: "#FFFFFF", marginBottom: "4px" }}>{t.reservedTitle}</p>
            <p style={{ fontSize: "14px", lineHeight: 1.6, color: "rgba(212,212,216,0.8)" }}>{t.reserved}</p>
          </div>
        </div>

        <ContactCta locale={lang} variant="full" accent={VIOLET} onAccent="#050505" title={t.ctaTitle} text={t.ctaText} />
      </div>
    </section>
  );
}
