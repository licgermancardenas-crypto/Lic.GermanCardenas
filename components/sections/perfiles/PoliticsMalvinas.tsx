import Image from "next/image";
import { Lock } from "lucide-react";
import { ContactCta } from "@/components/ContactCta";

const CYAN = "#00A3C4";

type Lang = "es" | "en";

const MAPS = ["hot-spots", "lla-radio", "votos-manzana", "lisa", "bivariado"] as const;

const copy = {
  es: {
    eyebrow: "// Proyecto · Malvinas Argentinas 2027",
    title: "Del municipio a la manzana.",
    lead:
      "Inteligencia electoral para una campaña municipal en el conurbano bonaerense, hecha para un cliente: las legislativas de octubre de 2025 bajadas a 320 radios censales y 3.829 manzanas, cruzadas con el Censo 2022 y analizadas con estadística espacial. Cada mapa sale en A3, listo para operar en el territorio.",
    findings: [
      { k: "0,817", v: "de I de Moran global: el voto no se reparte al azar. 165 radios tienen autocorrelación espacial significativa." },
      { k: "79 · 126", v: "hot y cold spots (Getis-Ord): en dos tercios del partido el patrón está definido." },
      { k: "3.829", v: "manzanas con voto estimado: el puerta a puerta se planifica cuadra por cuadra." },
      { k: "320", v: "radios censales con su perfil social, de densidad y de participación." },
    ],
    captions: [
      "Hot y cold spots (Getis-Ord Gi*): dónde el voto se concentra y dónde no llega",
      "Voto por radio censal, legislativas de octubre de 2025",
      "Votos estimados por manzana",
      "Clusters LISA: núcleos de apoyo y de rechazo estadísticamente significativos",
      "Mapa bivariado: voto × densidad de población",
    ],
    reservedTitle: "Lo que no está en esta página",
    reserved:
      "El ranking de radios prioritarios, las zonas pivote para 2027, el plan de pauta digital por escuela y las recomendaciones para la campaña. Eso es del cliente.",
    ctaTitle: "¿Tu campaña municipal necesita saber en qué puerta golpear?",
    ctaText: "Del padrón a la manzana: dónde está tu voto, dónde no llega el mensaje y dónde conviene poner el esfuerzo.",
  },
  en: {
    eyebrow: "// Project · Malvinas Argentinas 2027",
    title: "From the municipality to the city block.",
    lead:
      "Electoral intelligence for a municipal campaign in Greater Buenos Aires, built for a client: the October 2025 legislative election broken down to 320 census tracts and 3,829 city blocks, combined with the 2022 Census and analysed with spatial statistics. Every map ships in A3, ready to work the ground.",
    findings: [
      { k: "0.817", v: "global Moran's I: the vote isn't randomly spread. 165 tracts show significant spatial autocorrelation." },
      { k: "79 · 126", v: "hot and cold spots (Getis-Ord): two thirds of the district have a defined pattern." },
      { k: "3,829", v: "city blocks with an estimated vote: door-knocking gets planned block by block." },
      { k: "320", v: "census tracts, each with its social, density and turnout profile." },
    ],
    captions: [
      "Hot and cold spots (Getis-Ord Gi*): where the vote clusters and where it doesn't reach",
      "Vote by census tract, October 2025 legislative election",
      "Estimated votes by city block",
      "LISA clusters: statistically significant pockets of support and rejection",
      "Bivariate map: vote × population density",
    ],
    reservedTitle: "What isn't on this page",
    reserved:
      "The ranking of priority tracts, the 2027 swing zones, the school-by-school digital media plan and the campaign recommendations. Those belong to the client.",
    ctaTitle: "Does your municipal campaign need to know which doors to knock on?",
    ctaText: "From the voter roll to the city block: where your vote is, where the message isn't landing and where the effort pays off.",
  },
} as const;

const mono = { fontFamily: "var(--font-mono)" } as const;

export function PoliticsMalvinas({ locale }: { locale: string }) {
  const lang: Lang = locale === "en" ? "en" : "es";
  const t = copy[lang];

  return (
    <section id="malvinas" className="pb-24 md:pb-32" style={{ backgroundColor: "#050505" }}>
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
          {MAPS.map((m, i) => (
            <figure
              key={m}
              className={i === 0 ? "md:col-span-2" : ""}
              style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "#140c2e" }}
            >
              <Image
                src={`/screenshots/malvinas/${m}.jpg`}
                alt={t.captions[i]}
                width={2400}
                height={1438}
                sizes={i === 0 ? "(max-width: 768px) 100vw, 1100px" : "(max-width: 768px) 100vw, 550px"}
                className="w-full h-auto"
              />
              <figcaption style={{ ...mono, fontSize: "12px", color: "rgba(255,255,255,0.5)", padding: "10px 14px", background: "#0b0b0b" }}>
                {t.captions[i]}
              </figcaption>
            </figure>
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
