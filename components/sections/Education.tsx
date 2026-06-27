"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GraduationCap, Award, Globe } from "lucide-react";

const education = [
  {
    institution: "UCES",
    degree: "Lic. en Dirección de Negocios",
    period: "2019 – 2024",
    detail: "Graduado",
    icon: GraduationCap,
    accent: "#635bff",
  },
  {
    institution: "Instituto de Capacitación Bursátil",
    degree: "Inversor y Asesor Global de Inversiones",
    period: "2021 – 2022",
    detail: "Certificado",
    icon: GraduationCap,
    accent: "#06b6d4",
  },
];

const certifications = [
  {
    name: "Financial Forecasting with Analytics",
    issuer: "LinkedIn Learning",
    year: "2024",
    accent: "#635bff",
  },
  {
    name: "Building KPIs for Data-Driven Strategy",
    issuer: "LinkedIn Learning",
    year: "2024",
    accent: "#8b5cf6",
  },
  {
    name: "Excel and ChatGPT: Data Analysis Power Tips",
    issuer: "LinkedIn Learning",
    year: "2024",
    accent: "#06b6d4",
  },
  {
    name: "The Non-Technical Skills of Effective Data Scientists",
    issuer: "LinkedIn Learning",
    year: "2024",
    accent: "#10b981",
  },
  {
    name: "Asesor Global de Inversiones",
    issuer: "Instituto de Capacitación Bursátil",
    year: "2022",
    accent: "#f59e0b",
  },
];

const languages = [
  { lang: "Español", level_key: "native", flag: "🇦🇷", pct: 100 },
  { lang: "Inglés", level_key: "advanced", flag: "🇺🇸", pct: 85 },
  { lang: "Francés", level_key: "intermediate", flag: "🇫🇷", pct: 55 },
  { lang: "Italiano", level_key: "basic", flag: "🇮🇹", pct: 30 },
];

export function Education() {
  const t = useTranslations("education");

  return (
    <section id="education" className="py-24 bg-[#0F1419] border-t border-[#1F2937]">
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <AnimatedSection className="lg:col-span-1">
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[#0A0E1A] border border-[#1F2937] card-shadow"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${edu.accent}20` }}
                  >
                    <edu.icon className="w-5 h-5" style={{ color: edu.accent }} />
                  </div>
                  <p className="text-xs text-[#6B7689] mb-1">{edu.period}</p>
                  <h3 className="text-base font-bold text-[#F5F7FA] mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-[#B8C1D1]">{edu.institution}</p>
                  <span className="inline-block mt-2 px-2 py-0.5 rounded-md text-xs font-medium border"
                    style={{ color: edu.accent, borderColor: `${edu.accent}40`, backgroundColor: `${edu.accent}10` }}>
                    {edu.detail}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Certifications */}
          <AnimatedSection delay={0.1} className="lg:col-span-1">
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-[#0A0E1A] border border-[#1F2937] card-shadow"
                >
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: `${cert.accent}20` }}
                  >
                    <Award className="w-4 h-4" style={{ color: cert.accent }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#F5F7FA] leading-tight mb-0.5">
                      {cert.name}
                    </p>
                    <p className="text-xs text-[#6B7689]">
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Languages */}
          <AnimatedSection delay={0.2} className="lg:col-span-1">
            <div className="p-6 rounded-2xl bg-[#0A0E1A] border border-[#1F2937] card-shadow h-full">
              <div className="flex items-center gap-2 mb-6">
                <Globe className="w-5 h-5 text-[#4F7CFF]" />
                <h3 className="text-base font-bold text-[#F5F7FA]">
                  {t("languages_title")}
                </h3>
              </div>
              <div className="space-y-5">
                {languages.map((lang) => (
                  <div key={lang.lang}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="flex items-center gap-2 text-sm font-medium text-[#F5F7FA]">
                        <span>{lang.flag}</span>
                        {lang.lang}
                      </span>
                      <span className="text-xs text-[#6B7689]">
                        {t(lang.level_key as "native" | "advanced" | "intermediate" | "basic")}
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-[#1F2937] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#4F7CFF] to-[#818cf8] transition-all duration-700"
                        style={{ width: `${lang.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
