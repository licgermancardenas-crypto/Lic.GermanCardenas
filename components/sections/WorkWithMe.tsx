"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Building2, Lightbulb, Mail, MessageCircle, Calendar } from "lucide-react";

export function WorkWithMe() {
  const t = useTranslations("wwm");

  return (
    <section id="contact" className="py-24 bg-[#0F1419] border-t border-[#1F2937]">
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="mb-16 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-[#4F7CFF]/10 text-[#4F7CFF] text-xs font-semibold uppercase tracking-widest mb-4">
            {t("label")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F7FA] tracking-tight">
            {t("title")}
          </h2>
        </AnimatedSection>

        {/* Dual path cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Enterprise card */}
          <AnimatedSection delay={0.1}>
            <div className="h-full p-8 md:p-10 rounded-2xl bg-[#0A0E1A] border border-[#1F2937] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#4F7CFF]/10 blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#4F7CFF]/20 flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6 text-[#4F7CFF]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{t("enterprise_title")}</h3>
                <p className="text-[#a8c0d8] leading-relaxed mb-8">{t("enterprise_desc")}</p>
                <a
                  href="https://www.linkedin.com/in/german-cardenas-070118175/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#4F7CFF] text-white font-semibold text-sm hover:opacity-90 transition-all hover:shadow-lg hover:shadow-[#4F7CFF]/30 hover:-translate-y-0.5 active:translate-y-0"
                >
                  {t("enterprise_cta")}
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Freelance card */}
          <AnimatedSection delay={0.15}>
            <div className="h-full p-8 md:p-10 rounded-2xl bg-[#0A0E1A] border border-[#1F2937] relative overflow-hidden group card-shadow card-shadow-hover transition-all duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#4F7CFF]/5 blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#4F7CFF]/10 flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-[#4F7CFF]" />
                </div>
                <h3 className="text-2xl font-bold text-[#F5F7FA] mb-4">
                  {t("freelance_title")}
                </h3>
                <p className="text-[#B8C1D1] leading-relaxed mb-8">
                  {t("freelance_desc")}
                </p>
                <a
                  href="https://calendly.com/lic-germancardenas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#4F7CFF] text-[#4F7CFF] font-semibold text-sm hover:bg-[#4F7CFF] hover:text-white transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Calendar className="w-4 h-4" />
                  {t("freelance_cta")}
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Direct contact bar */}
        <AnimatedSection delay={0.25}>
          <div className="p-6 md:p-8 rounded-2xl bg-[#0A0E1A] border border-[#1F2937] card-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold text-[#F5F7FA] mb-1">
                  {t("contact_title")}
                </h3>
                <p className="text-sm text-[#6B7689]">{t("contact_desc")}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:lic.germancardenas@gmail.com"
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#0F1419] border border-[#1F2937] text-sm font-medium text-[#B8C1D1] hover:border-[#4F7CFF] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#4F7CFF]" />
                  lic.germancardenas@gmail.com
                </a>
                <a
                  href="https://wa.me/5491158562766"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#0F1419] border border-[#1F2937] text-sm font-medium text-[#B8C1D1] hover:border-[#25D366] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  +54 11 5856-2766
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
