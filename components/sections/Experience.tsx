"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Atlas Analytics",
    role: "Founder & Lead Data Scientist",
    period: "2023",
    end: "present",
    location: "Buenos Aires, ARG",
    description:
      "Fundé y lidero el desarrollo de 6 plataformas SaaS en producción: AgroNova (AgriTech GIS), Atlas One ERP (B2B), Real Estate Intelligence (PropTech), Atlas Nexus (pagos) y dashboards de analytics para clientes enterprise.",
    tags: ["Python", "Next.js", "FastAPI", "GIS", "PostgreSQL"],
    highlight: true,
  },
  {
    company: "EMPRESA 2",
    role: "Senior Financial Analyst",
    period: "Oct 2025",
    end: "present",
    location: "Buenos Aires, ARG",
    description:
      "— Completar con tu empresa y rol actuales —",
    tags: ["FP&A", "Power BI", "SQL", "Forecasting"],
    highlight: false,
  },
  {
    company: "EMPRESA 3",
    role: "Data Analyst / Financial Analyst",
    period: "2022",
    end: "2024",
    location: "Buenos Aires, ARG",
    description:
      "— Completar con empresa y responsabilidades —",
    tags: ["Excel", "Power BI", "SQL", "Reporting"],
    highlight: false,
  },
  {
    company: "EMPRESA 4",
    role: "Financial Analyst Jr.",
    period: "2022",
    end: "2023",
    location: "Buenos Aires, ARG",
    description:
      "— Completar con empresa y responsabilidades —",
    tags: ["Excel", "Análisis financiero", "Presupuesto"],
    highlight: false,
  },
  {
    company: "EMPRESA 5",
    role: "Analista de Datos",
    period: "2021",
    end: "2022",
    location: "Buenos Aires, ARG",
    description:
      "— Completar con empresa y responsabilidades —",
    tags: ["Python", "SQL", "Pandas", "Reportes"],
    highlight: false,
  },
  {
    company: "Fundación CIPE",
    role: "Consultor Pro-bono & Desarrollador",
    period: "Ene 2021",
    end: "2022",
    location: "Buenos Aires, ARG",
    description:
      "Diseño y desarrollo del sitio institucional, plataforma de voluntariado y sistema de donaciones. Análisis de impacto social y métricas de empleabilidad juvenil.",
    tags: ["Next.js", "Análisis social", "CMS", "Vercel"],
    highlight: false,
  },
];

export function Experience() {
  const t = useTranslations("experience");

  return (
    <section id="experience" className="py-24 bg-white dark:bg-[#0a2540]">
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[#635bff]/10 text-[#635bff] text-xs font-semibold uppercase tracking-widest mb-4">
            {t("label")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a2540] dark:text-white tracking-tight mb-4">
            {t("title")}
          </h2>
          <p className="text-[#425466] dark:text-[#a8c0d8] text-lg">{t("subtitle")}</p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[#e3e8ee] dark:bg-[#1a3a5c] hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="md:pl-20 relative">
                  {/* Dot */}
                  <div
                    className={`hidden md:flex absolute left-3.5 top-6 w-5 h-5 rounded-full border-2 items-center justify-center ${
                      exp.highlight
                        ? "bg-[#635bff] border-[#635bff]"
                        : "bg-white dark:bg-[#0a2540] border-[#e3e8ee] dark:border-[#1a3a5c]"
                    }`}
                  >
                    {exp.highlight && (
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </div>

                  <div
                    className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 card-shadow-hover ${
                      exp.highlight
                        ? "bg-gradient-to-br from-[#635bff]/5 to-[#635bff]/10 dark:from-[#635bff]/10 dark:to-[#635bff]/5 border-[#635bff]/20 dark:border-[#635bff]/30"
                        : "bg-[#f6f9fc] dark:bg-[#0d2d50] border-[#e3e8ee] dark:border-[#1a3a5c]"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                      <div className="flex items-start gap-3">
                        <div
                          className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
                            exp.highlight
                              ? "bg-[#635bff] text-white"
                              : "bg-[#e3e8ee] dark:bg-[#1a3a5c] text-[#8898aa]"
                          }`}
                        >
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[#0a2540] dark:text-white">
                            {exp.role}
                          </h3>
                          <p
                            className={`text-sm font-semibold ${
                              exp.highlight
                                ? "text-[#635bff]"
                                : "text-[#425466] dark:text-[#a8c0d8]"
                            }`}
                          >
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <div className="sm:text-right flex-shrink-0">
                        <div className="text-sm font-medium text-[#425466] dark:text-[#a8c0d8]">
                          {exp.period} — {exp.end === "present" ? t("present") : exp.end}
                        </div>
                        <div className="text-xs text-[#8898aa] dark:text-[#6b8fa8]">
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-[#425466] dark:text-[#a8c0d8] leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-white dark:bg-[#0a2540] text-[#635bff] text-xs font-medium border border-[#e3e8ee] dark:border-[#1a3a5c]"
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
