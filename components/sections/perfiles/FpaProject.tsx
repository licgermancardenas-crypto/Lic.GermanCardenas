import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { ContactCta } from "@/components/ContactCta";

const BLUE = "#4A8BFF";

type Lang = "es" | "en";

const SHOTS = [
  { src: "/screenshots/ypf/excel-resumen.jpg", w: 1479, h: 796 },
  { src: "/screenshots/ypf/excel-puente.jpg", w: 1480, h: 811 },
  { src: "/screenshots/ypf/excel-produccion.jpg", w: 1474, h: 721 },
];

const copy = {
  es: {
    eyebrow: "─── Proyecto",
    title: "Un balance récord, auditado celda por celda.",
    lead:
      "ATLAS-YPF reconstruye por qué el mercado castigó el mejor trimestre de la historia de YPF. Una de sus tres salidas es este libro de Excel: los estados contables de la SEC convertidos en un tablero interactivo para un público financiero.",
    captions: [
      "Resumen del 2T26 — EBITDA, ingresos, márgenes y destino de cada dólar",
      "Puente del EBITDA, simulador de escenarios, deuda y comparables",
      "Producción, precio contra volumen y reacción del mercado al balance",
    ],
    points: [
      { k: "Sin macros", v: "Cuatro listas desplegables gobiernan todo el tablero: trimestre, segmento, métrica y comparación." },
      { k: "Cero números a mano", v: "Cada cifra es una fórmula contra las hojas de estados contables, auditable celda por celda." },
      { k: "Puente del EBITDA", v: "De US$ 1.680M de mejora interanual, US$ 851M son precio del crudo: ciclo, no gestión." },
      { k: "Simulador", v: "Mueve Brent, producción, lifting cost y crudo procesado sobre un modelo de quince trimestres." },
    ],
    caseCta: "Ver caso completo",
    liveCta: "Ver la web en vivo",
  },
  en: {
    eyebrow: "─── Project",
    title: "A record quarter, audited cell by cell.",
    lead:
      "ATLAS-YPF reconstructs why the market punished the best quarter in YPF's history. One of its three outputs is this Excel workbook: SEC financial statements turned into an interactive dashboard for a finance audience.",
    captions: [
      "Q2 2026 summary — EBITDA, revenue, margins and where every dollar goes",
      "EBITDA bridge, scenario simulator, debt and comparables",
      "Production, price versus volume, and the market's reaction to the release",
    ],
    points: [
      { k: "No macros", v: "Four dropdowns drive the whole dashboard: quarter, segment, metric and comparison." },
      { k: "Zero hand-typed numbers", v: "Every figure is a formula against the financial statement sheets, auditable cell by cell." },
      { k: "EBITDA bridge", v: "Of a US$ 1,680M year-on-year improvement, US$ 851M is the oil price: cycle, not management." },
      { k: "Simulator", v: "Moves Brent, production, lifting cost and crude processed over a fifteen-quarter model." },
    ],
    caseCta: "View full case",
    liveCta: "See the live site",
  },
} as const;

const mono = { fontFamily: "var(--font-mono)" } as const;

export function FpaProject({ locale }: { locale: string }) {
  const lang: Lang = locale === "en" ? "en" : "es";
  const t = copy[lang];

  return (
    <section
      id="proyecto"
      className="py-20 sm:py-28"
      style={{ backgroundColor: "#06080D", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="container-custom">
        <p style={{ ...mono, fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#6B7A95", marginBottom: "28px" }}>
          {t.eyebrow}
        </p>
        <h2
          style={{
            textTransform: "uppercase",
            fontSize: "clamp(30px, 4vw, 56px)",
            fontWeight: 600,
            color: "#F0F4FB",
            lineHeight: 1.05,
            letterSpacing: "0.02em",
            marginBottom: "16px",
            maxWidth: "900px",
          }}
        >
          {t.title}
        </h2>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#C5CFE2", maxWidth: "720px", marginBottom: "48px" }}>{t.lead}</p>

        {/* Main shot + two secondary */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-12">
          {SHOTS.map((s, i) => (
            <figure
              key={s.src}
              className={i === 0 ? "lg:col-span-2" : ""}
              style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px", overflow: "hidden", background: "#0A0F1A" }}
            >
              <Image
                src={s.src}
                alt={t.captions[i]}
                width={s.w}
                height={s.h}
                sizes={i === 0 ? "(max-width: 1024px) 100vw, 1200px" : "(max-width: 1024px) 100vw, 600px"}
                className="w-full h-auto"
              />
              <figcaption style={{ ...mono, fontSize: "12px", color: "#6B7A95", padding: "12px 16px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                {t.captions[i]}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {t.points.map((p) => (
            <div key={p.k} style={{ borderTop: `2px solid ${BLUE}`, paddingTop: "16px" }}>
              <p style={{ fontSize: "16px", fontWeight: 600, color: "#F0F4FB", marginBottom: "8px" }}>{p.k}</p>
              <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#C5CFE2" }}>{p.v}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href={`/${lang}/work/atlas-ypf`}
            className="inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
            style={{ padding: "12px 24px", borderRadius: "999px", background: "#2B6FE8", color: "#fff", fontSize: "14px", fontWeight: 600 }}
          >
            {t.caseCta}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://atlas-ypf.vercel.app/ypf-project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
            style={{ padding: "12px 24px", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.12)", color: "#C5CFE2", fontSize: "14px", fontWeight: 500 }}
          >
            {t.liveCta}
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
        <ContactCta
          locale={lang}
          variant="compact"
          className="mt-10"
          accent="#2B6FE8"
          onAccent="#FFFFFF"
          title={lang === "en" ? "Need an auditable financial model?" : "¿Necesitás un modelo financiero auditable?"}
          text={lang === "en" ? "Financial statements turned into dashboards where every number comes from a formula you can check." : "Estados contables convertidos en tableros donde cada número sale de una fórmula que se puede revisar."}
        />
      </div>
    </section>
  );
}
