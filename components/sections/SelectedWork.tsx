"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ExternalLink, Lock } from "lucide-react";

type Tier2Project = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  stack: string;
  url: string;
  live: boolean;
  screenshot?: string;
};

const projects: Tier2Project[] = [
  {
    id: "rsi",
    eyebrow: "Research · PropTech",
    title: "Real Estate Intelligence",
    description:
      "Alpha Score propietario por radio censal para 4 ciudades argentinas. Integra datos INDEC, valuaciones fiscales y métricas de liquidez de mercado para identificar las zonas con mayor potencial de rentabilidad inmobiliaria.",
    stack: "Next.js 15 · MapLibre · PostGIS · FastAPI · INDEC API",
    url: "https://real-state-intelligence.vercel.app/",
    live: true,
    screenshot: "/screenshots/rsi.png",
  },
  {
    id: "mapa-del-poder",
    eyebrow: "Civic tech · Grafos",
    title: "Mapa del Estado BA",
    description:
      "Un grafo navegable del poder en la Provincia y la Ciudad de Buenos Aires: 7.255 organismos, 9.978 personas, 10.261 cargos y 887 vacantes, de los ministerios a los juzgados y los concejos. Un solo botón vuelve a bajar todas las fuentes oficiales, rearma el grafo y muestra qué cambió: designaciones, bajas y vacantes que se abren o se cubren.",
    stack: "Python · 20 scrapers de fuentes oficiales · D3 · GitHub Pages",
    url: "https://licgermancardenas-crypto.github.io/MAPA-DEL-PODER/",
    live: true,
    screenshot: "/screenshots/mapa-del-poder.jpg",
  },
  {
    id: "presupuesto-caba",
    eyebrow: "Civic tech · Finanzas públicas",
    title: "Presupuesto CABA",
    description:
      "Monitor del presupuesto porteño 2022–2026 en pesos constantes: cuánto se gasta, en qué, quién lo gasta y cómo, programa por programa y comuna por comuna, con un mapa de obras. Armado desde cero con datos abiertos, en una web propia y en Power BI sobre el mismo modelo. Toma la idea del monitor de Juan Ignacio Fernández.",
    stack: "Python · modelo estrella · Power BI · IPC del INDEC",
    url: "https://licgermancardenas-crypto.github.io/presupuesto-caba/",
    live: true,
    screenshot: "/screenshots/presupuesto-caba.jpg",
  },
  {
    id: "atlas-signal",
    eyebrow: "Seguridad · Criptografía",
    title: "Atlas Signal",
    description:
      "Esconde archivos y mensajes cifrados dentro de una imagen o un audio que se ve y suena igual que el original. Cifrado AES-256-GCM con clave derivada por PBKDF2 en 600.000 iteraciones, bits repartidos en posiciones que solo la contraseña conoce, y todo el proceso en el navegador: nada se sube a internet.",
    stack: "JavaScript · Web Crypto API · esteganografía · 100% local",
    url: "https://licgermancardenas-crypto.github.io/ATLAS-SIGNAL/",
    live: true,
    screenshot: "/screenshots/atlas-signal.jpg",
  },
  {
    id: "electoral",
    eyebrow: "Research · Civic Intelligence",
    title: "Electoral Analytics",
    description:
      "Plataforma de inteligencia electoral para municipios del conurbano bonaerense. Análisis geoespacial por radio censal, mapas coropléticos de volatilidad y segmentación de zonas operativas para campañas políticas.",
    stack: "Python · QGIS · GeoPandas · Matplotlib · ReportLab",
    url: "#",
    live: false,
    screenshot: "/screenshots/electoral.png",
  },
  {
    id: "cipe",
    eyebrow: "Pro-bono · Social Impact",
    title: "Fundación CIPE",
    description:
      "Sitio institucional para fundación de empleabilidad juvenil con CMS integrado, sistema de donaciones y plataforma de voluntariado. Diseño accesible, mobile-first y optimizado para conversión de donantes.",
    stack: "Next.js · CMS · Tailwind CSS · Vercel",
    url: "https://www.fundacioncipe.com/",
    live: true,
  },
];

export function SelectedWork() {
  return (
    <section
      id="projects"
      className="py-40"
      style={{ backgroundColor: "#0A0F1A", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="mb-20">
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#6B7A95",
              marginBottom: "24px",
            }}
          >
            ─── Otros proyectos
          </p>
          <h2
            className="font-serif"
            style={{
              textTransform: "uppercase",
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 600,
              color: "#F0F4FB",
              lineHeight: 1.05,
              letterSpacing: "0.02em",
            }}
          >
            Research, civic tech,{" "}
            <span>seguridad e impacto social.</span>
          </h2>
        </AnimatedSection>

        {/* Alternating horizontal cards */}
        <div className="space-y-5">
          {projects.map((p, i) => {
            const isEven = i % 2 === 0;

            return (
              <AnimatedSection key={p.id} delay={i * 0.07}>
                <div
                  className="grid md:grid-cols-2 overflow-hidden group transition-all duration-[400ms]"
                  style={{
                    borderRadius: "24px",
                    border: "1px solid rgba(255,255,255,0.04)",
                    background: "#0F1623",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(74,139,255,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(255,255,255,0.04)";
                  }}
                >
                  {/* Screenshot */}
                  <div
                    className={`relative overflow-hidden ${isEven ? "md:order-last" : ""}`}
                    style={{ minHeight: "260px", background: "#06080D" }}
                  >
                    {p.screenshot ? (
                      <Image
                        src={p.screenshot}
                        alt={p.title}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                          background: "linear-gradient(135deg, #0A0F1A 0%, rgba(43,111,232,0.06) 100%)",
                        }}
                      >
                        <span style={{ color: "#3F4A5F", fontSize: "32px" }}>✦</span>
                      </div>
                    )}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `linear-gradient(to ${isEven ? "right" : "left"}, rgba(15,22,35,0.3) 0%, transparent 40%)`,
                      }}
                    />
                  </div>

                  {/* Text */}
                  <div
                    className="flex flex-col justify-center transition-transform duration-[400ms] group-hover:translate-x-2"
                    style={{
                      padding: "48px 40px",
                      transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#4A8BFF",
                        marginBottom: "12px",
                      }}
                    >
                      {p.eyebrow}
                    </p>

                    <h3
                      style={{
                        fontSize: "24px",
                        fontWeight: 500,
                        color: "#F0F4FB",
                        letterSpacing: "-0.01em",
                        marginBottom: "12px",
                        lineHeight: 1.2,
                      }}
                    >
                      {p.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "16px",
                        lineHeight: 1.7,
                        color: "#C5CFE2",
                        marginBottom: "16px",
                      }}
                    >
                      {p.description}
                    </p>

                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "12px",
                        letterSpacing: "0.06em",
                        color: "#6B7A95",
                        marginBottom: "24px",
                        lineHeight: 1.7,
                      }}
                    >
                      {p.stack}
                    </p>

                    {p.live ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 transition-colors duration-200 self-start"
                        style={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "#4A8BFF",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.color = "#F0F4FB";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.color = "#4A8BFF";
                        }}
                      >
                        Ver live
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span
                        className="inline-flex items-center gap-2 self-start"
                        style={{ fontSize: "14px", color: "#3F4A5F" }}
                      >
                        <Lock className="w-3.5 h-3.5" />
                        Confidencial
                      </span>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
