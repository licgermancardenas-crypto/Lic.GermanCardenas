import Image from "next/image";
import { ResponsiveVideo } from "@/components/ResponsiveVideo";
import { ContactCta } from "@/components/ContactCta";

const CYAN = "#00A3C4";

type Lang = "es" | "en";

const copy = {
  es: {
    eyebrow: "// Proyecto · California 2026",
    title: "Acertó el ganador. Subestimó el voto latino.",
    lead:
      "El mismo método aplicado a la elección de gobernador de California del 3 de noviembre: un tablero de Power BI de 17 páginas y 243 medidas, con mapas a cuatro escalas, de los 58 condados a 385 mil manzanas, minería de datos, un simulador y la noche electoral en vivo contra el Secretario de Estado.",
    videoNote: "Recorrido del tablero, grabado antes de la elección: los números que muestra son el pronóstico.",
    resultTitle: "Pronóstico contra resultado (Secretario de Estado, no oficial al 19/11)",
    result: [
      { k: "Becerra · pronóstico", v: "61,8%" },
      { k: "Becerra · resultado", v: "65,6%" },
      { k: "Ganador por condado", v: "51 de 58" },
    ],
    pmTitle: "Post-mortem",
    findings: [
      {
        k: "0,979",
        t: "El mapa, otra vez bien",
        v: "Correlación por condado entre el pronóstico y el resultado. El modelo acertó el ganador del estado, con 99,9% de probabilidad, y en 51 de los 58 condados.",
      },
      {
        k: "0,84",
        t: "El error tiene nombre",
        v: "Es la correlación entre el error de cada condado y su porcentaje de población latina. En el tercio más latino el modelo subestimó a Becerra por 6,7 puntos; en el menos latino, por 1,0.",
      },
      {
        k: "7",
        t: "Condados con el ganador errado",
        v: "Todos del Valle Central y el interior: Kern, Tulare, Fresno, Merced, Stanislaus, Butte e Inyo. Dos estaban marcados con confianza alta.",
      },
      {
        k: "41 de 58",
        t: "Dentro del intervalo del 90%",
        v: "Lo esperable eran unos 52. El backtest contra 2022 (58 de 58 ganadores) no alcanzaba para anticipar un cambio en un grupo entero.",
      },
    ],
    bridge:
      "Dos elecciones, dos países, el mismo sesgo: en Brasil y en California el mapa salió bien ordenado y el error fue en la misma dirección, con intervalos demasiado estrechos. Eso no es mala suerte, es un patrón del método, y es lo que corrige la próxima versión: incertidumbre calibrada con varias elecciones y escenarios de movilización por grupo dentro del Montecarlo.",
    captions: ["Noche electoral en vivo contra el Secretario de Estado", "Simulador con el giro del voto latino como palanca"],
  },
  en: {
    eyebrow: "// Project · California 2026",
    title: "Called the winner. Underestimated the Latino vote.",
    lead:
      "The same method applied to California's 3 November governor race: a 17-page, 243-measure Power BI dashboard with maps at four scales, from 58 counties down to 385,000 census blocks, data mining, a simulator and live election-night tracking against the Secretary of State.",
    videoNote: "Walkthrough of the dashboard, recorded before the election: the figures on screen are the forecast.",
    resultTitle: "Forecast versus result (Secretary of State, unofficial as of 19/11)",
    result: [
      { k: "Becerra · forecast", v: "61.8%" },
      { k: "Becerra · result", v: "65.6%" },
      { k: "County winners", v: "51 of 58" },
    ],
    pmTitle: "Post-mortem",
    findings: [
      {
        k: "0.979",
        t: "The map, right again",
        v: "County-level correlation between forecast and result. The model called the statewide winner, at 99.9% probability, and the winner in 51 of 58 counties.",
      },
      {
        k: "0.84",
        t: "The error has a name",
        v: "That's the correlation between each county's error and its Latino share. In the most Latino third the model underestimated Becerra by 6.7 points; in the least Latino third, by 1.0.",
      },
      {
        k: "7",
        t: "Counties with the wrong winner",
        v: "All in the Central Valley and the interior: Kern, Tulare, Fresno, Merced, Stanislaus, Butte and Inyo. Two were rated high confidence.",
      },
      {
        k: "41 of 58",
        t: "Inside the 90% interval",
        v: "About 52 were expected. The 2022 backtest (58 of 58 winners) couldn't anticipate a shift across an entire group.",
      },
    ],
    bridge:
      "Two elections, two countries, the same bias: in Brazil and in California the map ranked places well and the error went the same way, with intervals that were too narrow. That isn't bad luck, it's a pattern in the method, and it's what the next version fixes: uncertainty calibrated on several elections and group-level turnout scenarios inside the Monte Carlo.",
    captions: ["Live election night against the Secretary of State", "Simulator with the Latino-vote shift as a lever"],
  },
} as const;

const mono = { fontFamily: "var(--font-mono)" } as const;

export function PoliticsCalifornia({ locale }: { locale: string }) {
  const lang: Lang = locale === "en" ? "en" : "es";
  const t = copy[lang];

  return (
    <section
      id="california"
      className="pb-24 md:pb-32"
      style={{ backgroundColor: "#050505" }}
    >
      <div className="container-custom max-w-6xl mx-auto pt-16 md:pt-20" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
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

        <figure
          className="mx-auto max-w-[480px] md:max-w-none"
          style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "#0b0b0b" }}
        >
          <ResponsiveVideo
            label={t.videoNote}
            wide={{ src: "/videos/california-powerbi.mp4", poster: "/videos/california-powerbi-poster.jpg", width: 1600, height: 900 }}
            tall={{ src: "/videos/california-powerbi-vertical.mp4", poster: "/videos/california-powerbi-vertical-poster.jpg", width: 864, height: 1080 }}
          />
          <figcaption style={{ ...mono, fontSize: "12px", color: "rgba(255,255,255,0.45)", padding: "12px 16px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            {t.videoNote}
          </figcaption>
        </figure>

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

        <h3 style={{ fontSize: "22px", fontWeight: 600, color: "#FFFFFF", marginBottom: "20px" }}>{t.pmTitle}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {t.findings.map((f) => (
            <div key={f.t} className="rounded-xl p-5" style={{ border: "1px solid rgba(0,163,196,0.18)", background: "rgba(0,163,196,0.04)" }}>
              <p style={{ fontSize: "26px", fontWeight: 600, color: CYAN, lineHeight: 1, marginBottom: "10px", fontVariantNumeric: "tabular-nums" }}>{f.k}</p>
              <p style={{ fontSize: "16px", fontWeight: 600, color: "#FFFFFF", marginBottom: "6px" }}>{f.t}</p>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "rgba(212,212,216,0.8)" }}>{f.v}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {["noche-en-vivo", "simulador"].map((img, i) => (
            <figure key={img} style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "#0b0b0b" }}>
              <Image
                src={`/screenshots/california/${img}.jpg`}
                alt={t.captions[i]}
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto"
              />
              <figcaption style={{ ...mono, fontSize: "12px", color: "rgba(255,255,255,0.45)", padding: "10px 14px" }}>{t.captions[i]}</figcaption>
            </figure>
          ))}
        </div>

        <p className="pl-4" style={{ borderLeft: `2px solid ${CYAN}`, fontSize: "16px", lineHeight: 1.7, color: "rgba(230,230,235,0.9)", maxWidth: "860px" }}>
          {t.bridge}
        </p>
        <ContactCta
          locale={lang}
          variant="compact"
          className="mt-10"
          accent={CYAN}
          onAccent="#050505"
          title={lang === "en" ? "Want a model like this for your district?" : "¿Querés un modelo así para tu distrito?"}
          text={lang === "en" ? "From the whole territory down to the block, with data mining and live election-night tracking." : "Del territorio completo a la manzana, con minería de datos y noche electoral en vivo."}
        />
      </div>
    </section>
  );
}
