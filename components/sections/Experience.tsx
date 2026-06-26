"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "AgroJuntos",
    role: "Analista BI & Planeamiento Financiero",
    period: "Oct 2025",
    end: "present",
    location: "Remoto",
    description:
      "Dashboards ejecutivos en Power BI con KPIs de crecimiento, rentabilidad y eficiencia operativa. Automatizaciones Python (Pandas) sobre múltiples fuentes de datos reduciendo 35% los tiempos de procesamiento. Modelos de proyección financiera y forecasting de ventas con análisis de escenarios y sensibilidad de márgenes. Diseño y desarrollo de CRM interno B2B con herramientas AI-assisted (v0).",
    tags: ["Power BI", "Python", "SQL", "FP&A", "Forecasting", "CRM"],
    highlight: true,
  },
  {
    company: "Atomik",
    role: "Analista Comercial & Business Intelligence",
    period: "Ago 2025",
    end: "Oct 2025",
    location: "Buenos Aires",
    description:
      "Análisis de performance de 18 locales y +200 clientes mayoristas (retail, franquicias, e-commerce). Dashboards Power BI con KPIs Sell-In/Sell-Out, ticket promedio y rotación → reducción 30% en tiempos de análisis. Forecasting de demanda con modelos estadísticos y análisis estacional → +18% en precisión de planificación. Estrategias de mix de producto y pricing → +15% rotación y +10% rentabilidad por línea.",
    tags: ["Power BI", "Excel", "Forecasting", "Retail Analytics", "Pricing"],
    highlight: false,
  },
  {
    company: "CyE (4 Nortes)",
    role: "Analista Comercial",
    period: "Abr 2025",
    end: "Ago 2025",
    location: "Buenos Aires",
    description:
      "Performance comercial de 12 locales y canal e-commerce: márgenes, rentabilidad y comportamiento por medio de pago y estacionalidad. Implementé CRM + WhatsApp Business API para contacto segmentado a mayoristas y minoristas → +15% en ventas. Automatización de reportes de ventas y cash flows diarios con macros Excel → -30% en tiempos de procesamiento.",
    tags: ["Excel", "CRM", "WhatsApp API", "Cash Flow", "Analytics"],
    highlight: false,
  },
  {
    company: "Grupo Dietrich",
    role: "Analista y Asesor Comercial",
    period: "Sep 2024",
    end: "Mar 2025",
    location: "Buenos Aires",
    description:
      "ETL y gestión de +20.000 leads mensuales desde Salesforce y múltiples canales (web, redes, WhatsApp, presencial). Modelos de scoring y segmentación que aumentaron la tasa de conversión en +15%. Power BI y Excel con KPIs de conversión, tiempo de respuesta y rentabilidad → -25% en tiempos de análisis gerencial. Recuperación de leads históricos → +15% en ventas con bajo costo de adquisición.",
    tags: ["Salesforce", "ETL", "Power BI", "Lead Scoring", "SQL"],
    highlight: false,
  },
  {
    company: "Wall Street Group",
    role: "Analista Administrativo-Financiero",
    period: "Jun 2023",
    end: "Jul 2024",
    location: "Buenos Aires",
    description:
      "Flujos de fondos, presupuestos y estructuras de capital para +10 proyectos inmobiliarios y de construcción. Modelos financieros (ROI, IRR, VAN, payback) para socios e inversores con margen de error < 5%. Control y seguimiento de fondos de inversión y aportes de capital → +8% de eficiencia financiera. Negociación con proveedores → reducción de costos totales del 12%.",
    tags: ["FP&A", "ROI/IRR/VAN", "Power BI", "Excel", "Real Estate"],
    highlight: false,
  },
  {
    company: "Florida Trading Company",
    role: "Analista de Ventas y Finanzas",
    period: "Ene 2021",
    end: "Abr 2023",
    location: "Buenos Aires",
    description:
      "Performance financiera y comercial de importadora y distribuidora de insumos médicos (mayorista, minorista, online). Cash flow mensual y proyecciones presupuestarias → +15% en precisión del forecast. Análisis de márgenes y estructura de costos por canal → +10% en rentabilidad. Negociación con proveedores nacionales e internacionales → -8% en costos anuales.",
    tags: ["Cash Flow", "Forecasting", "Excel", "Importación", "B2B"],
    highlight: false,
  },
];

export function Experience() {
  const t = useTranslations("experience");

  return (
    <section id="experience" className="py-24 bg-[#0A0E1A] border-t border-[#1F2937]">
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[#4F7CFF]/10 text-[#4F7CFF] text-xs font-semibold uppercase tracking-widest mb-4">
            {t("label")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F7FA] tracking-tight mb-4">
            {t("title")}
          </h2>
          <p className="text-[#B8C1D1] text-lg">{t("subtitle")}</p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[#1F2937] hidden md:block" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="md:pl-20 relative">
                  {/* Dot */}
                  <div
                    className={`hidden md:flex absolute left-3.5 top-6 w-5 h-5 rounded-full border-2 items-center justify-center ${
                      exp.highlight
                        ? "bg-[#4F7CFF] border-[#4F7CFF]"
                        : "bg-[#0A0E1A] border-[#1F2937]"
                    }`}
                  >
                    {exp.highlight && (
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </div>

                  <div
                    className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 card-shadow-hover ${
                      exp.highlight
                        ? "bg-gradient-to-br from-[#4F7CFF]/5 to-[#4F7CFF]/10 border-[#4F7CFF]/20"
                        : "bg-[#0F1419] border-[#1F2937]"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                      <div className="flex items-start gap-3">
                        <div
                          className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
                            exp.highlight
                              ? "bg-[#4F7CFF] text-white"
                              : "bg-[#1F2937] text-[#6B7689]"
                          }`}
                        >
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[#F5F7FA]">
                            {exp.role}
                          </h3>
                          <p
                            className={`text-sm font-semibold ${
                              exp.highlight ? "text-[#4F7CFF]" : "text-[#B8C1D1]"
                            }`}
                          >
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <div className="sm:text-right flex-shrink-0">
                        <div className="text-sm font-medium text-[#B8C1D1]">
                          {exp.period} — {exp.end === "present" ? t("present") : exp.end}
                        </div>
                        <div className="text-xs text-[#6B7689]">
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-[#B8C1D1] leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-[#0A0E1A] text-[#4F7CFF] text-xs font-medium border border-[#1F2937]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
