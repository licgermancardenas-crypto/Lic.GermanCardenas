"use client";

import { AnimatedSection } from "@/components/AnimatedSection";

const experiences = [
  {
    company: "AgroJuntos",
    role: "Analista BI & Planeamiento Financiero",
    period: "Oct 2025",
    end: "Presente",
    description:
      "Dashboards ejecutivos en Power BI con KPIs de crecimiento, rentabilidad y eficiencia operativa. Automatizaciones Python reduciendo 35% los tiempos de procesamiento. Modelos de proyección financiera y forecasting de ventas con análisis de escenarios. Diseño de CRM interno B2B con herramientas AI-assisted.",
    metrics: "−35% tiempo procesamiento · +18% precisión forecast",
    active: true,
  },
  {
    company: "Atomik",
    role: "Analista Comercial & Business Intelligence",
    period: "Ago 2025",
    end: "Oct 2025",
    description:
      "Análisis de performance de 18 locales y +200 clientes mayoristas. Dashboards Power BI con KPIs Sell-In/Sell-Out → −30% en tiempos de análisis. Forecasting de demanda con modelos estadísticos → +18% precisión. Estrategias de mix de producto y pricing → +15% rotación y +10% rentabilidad.",
    metrics: "−30% análisis · +15% rotación · +10% rentabilidad",
    active: false,
  },
  {
    company: "CyE (4 Nortes)",
    role: "Analista Comercial",
    period: "Abr 2025",
    end: "Ago 2025",
    description:
      "Performance comercial de 12 locales y canal e-commerce. CRM + WhatsApp Business API para contacto segmentado → +15% en ventas. Automatización de reportes de ventas y cash flows diarios → −30% en tiempos de procesamiento.",
    metrics: "+15% ventas · −30% tiempo reportes",
    active: false,
  },
  {
    company: "Grupo Dietrich",
    role: "Analista y Asesor Comercial",
    period: "Sep 2024",
    end: "Mar 2025",
    description:
      "ETL y gestión de +20.000 leads mensuales desde Salesforce y múltiples canales. Modelos de scoring y segmentación → +15% tasa de conversión. Power BI con KPIs de conversión → −25% tiempos de análisis gerencial. Recuperación de leads históricos → +15% en ventas.",
    metrics: "+15% conversión · −25% análisis",
    active: false,
  },
  {
    company: "Wall Street Group",
    role: "Analista Administrativo-Financiero",
    period: "Jun 2023",
    end: "Jul 2024",
    description:
      "Flujos de fondos, presupuestos y estructuras de capital para +10 proyectos inmobiliarios. Modelos financieros (ROI, IRR, VAN) con margen de error < 5%. Control de fondos de inversión → +8% eficiencia financiera. Negociación con proveedores → −12% costos totales.",
    metrics: "< 5% margen error · +8% eficiencia · −12% costos",
    active: false,
  },
  {
    company: "Florida Trading Company",
    role: "Analista de Ventas y Finanzas",
    period: "Ene 2021",
    end: "Abr 2023",
    description:
      "Performance financiera y comercial de importadora de insumos médicos (mayorista, minorista, online). Cash flow mensual y proyecciones → +15% precisión del forecast. Análisis de márgenes por canal → +10% rentabilidad. Negociación internacional → −8% costos anuales.",
    metrics: "+15% forecast · +10% rentabilidad · −8% costos",
    active: false,
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-40"
      style={{ backgroundColor: "#0A0F1A", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="container-custom">
        <div className="max-w-3xl">
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
              ─── Experiencia profesional
            </p>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 400,
                color: "#F0F4FB",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              6 años.{" "}
              <span style={{ fontStyle: "italic" }}>6 empresas.</span>
            </h2>
          </AnimatedSection>

          {/* Timeline */}
          <div className="relative">
            {/* Left rail */}
            <div
              className="absolute top-0 bottom-0 hidden md:block"
              style={{
                left: "7px",
                width: "1px",
                backgroundColor: "#3F4A5F",
              }}
            />

            <div className="space-y-20 md:pl-12">
              {experiences.map((exp, i) => (
                <AnimatedSection key={i} delay={i * 0.06}>
                  <div className="relative">
                    {/* Dot */}
                    <div
                      className="hidden md:block absolute"
                      style={{
                        left: "-38px",
                        top: "6px",
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: exp.active ? "#4A8BFF" : "#3F4A5F",
                        boxShadow: exp.active
                          ? "0 0 0 4px rgba(74,139,255,0.12), 0 0 16px rgba(74,139,255,0.3)"
                          : "none",
                        animation: exp.active ? "pulse-dot 3s ease-in-out infinite" : "none",
                      }}
                    />

                    {/* Date */}
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "12px",
                        letterSpacing: "0.08em",
                        color: "#6B7A95",
                        marginBottom: "8px",
                      }}
                    >
                      {exp.period} — {exp.end}
                    </p>

                    {/* Role */}
                    <h3
                      style={{
                        fontSize: "22px",
                        fontWeight: 500,
                        color: exp.active ? "#F0F4FB" : "#C5CFE2",
                        letterSpacing: "-0.01em",
                        marginBottom: "4px",
                        lineHeight: 1.3,
                      }}
                    >
                      {exp.role}
                    </h3>

                    {/* Company */}
                    <p
                      style={{
                        fontSize: "15px",
                        color: "#4A8BFF",
                        marginBottom: "16px",
                        fontWeight: 400,
                      }}
                    >
                      {exp.company}
                    </p>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: "16px",
                        lineHeight: 1.7,
                        color: "#6B7A95",
                        marginBottom: "14px",
                      }}
                    >
                      {exp.description}
                    </p>

                    {/* Mini metrics as text */}
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "12px",
                        letterSpacing: "0.06em",
                        color: exp.active ? "#4A8BFF" : "#3F4A5F",
                      }}
                    >
                      {exp.metrics}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 0 4px rgba(74,139,255,0.12), 0 0 16px rgba(74,139,255,0.3); }
          50% { box-shadow: 0 0 0 6px rgba(74,139,255,0.06), 0 0 24px rgba(74,139,255,0.2); }
        }
      `}</style>
    </section>
  );
}
