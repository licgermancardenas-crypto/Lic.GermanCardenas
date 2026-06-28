import { Navigation } from "@/components/Navigation";
import { FpaHero } from "@/components/sections/perfiles/FpaHero";
import { FinancialStackCards } from "@/components/ui/financial-stack-cards";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "FP&A Specialist — Germán Cárdenas",
  description:
    "Financial Planning & Analysis Specialist. Modelos de proyección financiera, Private Equity, portafolios bursátiles y valuación de proyectos de inversión.",
};

export default function FpaPage() {
  return (
    <>
      <Navigation />
      <main>
        <FpaHero />

        {/* Financial Engineering Stack */}
        <section
          style={{
            backgroundColor: "#06080D",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <div className="container-custom pt-20 sm:pt-28 pb-6">
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#6B7A95",
                marginBottom: "28px",
              }}
            >
              ─── Stack técnico
            </p>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(34px, 4.5vw, 64px)",
                fontWeight: 400,
                color: "#F0F4FB",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: "12px",
              }}
            >
              Financial Engineering.{" "}
              <span style={{ fontStyle: "italic" }}>Seis pilares.</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "#6B7A95",
                letterSpacing: "0.04em",
                marginBottom: "8px",
              }}
            >
              Las herramientas que uso para convertir datos en decisiones financieras de alta calidad.
            </p>
          </div>
          <FinancialStackCards />
          <div style={{ paddingBottom: "80px" }} />
        </section>
      </main>
      <Footer />
    </>
  );
}
