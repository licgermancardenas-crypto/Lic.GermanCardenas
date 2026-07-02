import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Work — Germán Cárdenas",
  description:
    "Casos de estudio completos: Atlas One ERP, Atlas Nexus, AgroNova y LAPD Crime Analytics.",
};

type CaseCard = {
  slug: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  accent: string;
  thumbnail: string;
};

const cases: CaseCard[] = [
  {
    slug: "atlas-one-erp",
    number: "01",
    category: "Enterprise · SaaS B2B",
    title: "Atlas One ERP",
    subtitle: "ERP modular para PyMEs argentinas con inteligencia de negocio integrada.",
    accent: "#06b6d4",
    thumbnail: "/screenshots/atlas-erp/1766963976633.jpg",
  },
  {
    slug: "atlas-nexus",
    number: "02",
    category: "SaaS B2B · Hackathon Winner 🏆",
    title: "Atlas Nexus",
    subtitle: "Plataforma de inteligencia comercial para comercios independientes con POS nativo.",
    accent: "#F59E0B",
    thumbnail: "/screenshots/atlas-nexus.png",
  },
  {
    slug: "agronova",
    number: "03",
    category: "AgriTech · GIS · Enterprise",
    title: "AgroNova",
    subtitle: "Plataforma geoespacial de escala nacional para la agroindustria argentina.",
    accent: "#10b981",
    thumbnail: "/screenshots/agronova.png",
  },
  {
    slug: "lapd",
    number: "04",
    category: "Research · Data Analytics",
    title: "LAPD Crime Analytics",
    subtitle: "Análisis de 1 millón de registros policiales de Los Ángeles con rigor metodológico.",
    accent: "#8b5cf6",
    thumbnail: "/screenshots/lapd.png",
  },
];

export default async function WorkIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <Navigation />
      <main>
        <section
          style={{ backgroundColor: "#06080D", minHeight: "100svh" }}
          className="pt-36 pb-28"
        >
          <div className="container-custom">
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
              ─── Work
            </p>
            <h1
              className="font-serif"
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 400,
                color: "#F0F4FB",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: "64px",
                maxWidth: "720px",
              }}
            >
              Casos de estudio.{" "}
              <span style={{ fontStyle: "italic" }}>De punta a punta.</span>
            </h1>

            <div className="grid sm:grid-cols-2 gap-5">
              {cases.map((c) => (
                <Link
                  key={c.slug}
                  href={`/${locale}/work/${c.slug}`}
                  className="group block overflow-hidden transition-all duration-[400ms] hover:border-white/20"
                  style={{
                    borderRadius: "20px",
                    border: "1px solid rgba(255,255,255,0.06)",
                    background: "#0F1623",
                    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: "16/10", background: "#06080D" }}>
                    <Image
                      src={c.thumbnail}
                      alt={c.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(6,8,13,0.5) 0%, transparent 45%)" }}
                    />
                    <span
                      className="absolute top-4 left-4"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        letterSpacing: "0.14em",
                        color: c.accent,
                        background: "rgba(6,8,13,0.65)",
                        padding: "4px 10px",
                        borderRadius: "6px",
                        border: `1px solid ${c.accent}33`,
                      }}
                    >
                      {c.number}
                    </span>
                  </div>

                  <div style={{ padding: "28px 28px 32px" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: c.accent,
                        marginBottom: "10px",
                      }}
                    >
                      {c.category}
                    </p>
                    <h3
                      className="flex items-center gap-2"
                      style={{
                        fontSize: "22px",
                        fontWeight: 500,
                        color: "#F0F4FB",
                        letterSpacing: "-0.01em",
                        marginBottom: "10px",
                      }}
                    >
                      {c.title}
                      <ArrowUpRight
                        className="w-4 h-4 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                        style={{ color: c.accent }}
                      />
                    </h3>
                    <p style={{ fontSize: "15px", lineHeight: 1.65, color: "#9AA5B8" }}>
                      {c.subtitle}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
