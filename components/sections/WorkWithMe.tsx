"use client";

import { useLocale } from "next-intl";
import { MessageCircle } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const COPY = {
  es: {
    title: "Hablemos.",
    hiringEyebrow: "Estás reclutando",
    hiringTitle: "Roles que me interesan",
    availability: "Disponible ahora · Remoto o Buenos Aires",
    cv: "Ver CV completo",
    projectEyebrow: "Tenés un proyecto",
    projectTitle: "Qué puedo hacer por vos",
    services: ["Dashboard ejecutivo desde cero", "Modelo financiero o forecast", "Pipeline de datos + BI", "Plataforma web con IA integrada"],
    method: "Trabajo en sprints cortos con entregables claros. Sin agencias, sin intermediarios. Directo con quien toma las decisiones.",
    book: "Agendá 30 min",
    email: "Email directo",
    orWrite: "O simplemente escribime",
    whatsapp: "Escribime por WhatsApp",
    reply: "Respondo en menos de 24 h. Sin filtros, sin bots.",
  },
  en: {
    title: "Let's talk.",
    hiringEyebrow: "Hiring",
    hiringTitle: "Roles I'm interested in",
    availability: "Available now · Remote or Buenos Aires",
    cv: "See full CV",
    projectEyebrow: "Have a project",
    projectTitle: "What I can do for you",
    services: ["Executive dashboard from scratch", "Financial model or forecast", "Data pipeline + BI", "Web platform with built-in AI"],
    method: "I work in short sprints with clear deliverables. No agencies, no middlemen. Straight with whoever makes the decisions.",
    book: "Book 30 min",
    email: "Email me",
    orWrite: "Or just write to me",
    whatsapp: "Message me on WhatsApp",
    reply: "I reply within 24 h. No filters, no bots.",
  },
} as const;

export function WorkWithMe() {
  const t = COPY[useLocale() === "en" ? "en" : "es"];
  return (
    <section
      id="contact"
      className="py-40"
      style={{ backgroundColor: "#0A0F1A", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="container-custom">
        {/* Headline */}
        <AnimatedSection className="mb-20">
          <h2
            className="font-serif"
            style={{
              textTransform: "uppercase",
              fontSize: "clamp(56px, 7vw, 96px)",
              fontWeight: 600,
              color: "#F0F4FB",
              lineHeight: 0.95,
              letterSpacing: "-0.015em",
            }}
          >
            {t.title}
          </h2>
        </AnimatedSection>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {/* LEFT — Enterprise */}
          <AnimatedSection delay={0.08}>
            <div
              className="h-full group transition-all duration-[400ms]"
              style={{
                background: "#0F1623",
                border: "1px solid rgba(255,255,255,0.04)",
                borderRadius: "24px",
                padding: "56px 48px",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#131B2B";
                el.style.borderColor = "rgba(74,139,255,0.1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#0F1623";
                el.style.borderColor = "rgba(255,255,255,0.04)";
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#6B7A95",
                  marginBottom: "24px",
                }}
              >
                {t.hiringEyebrow}
              </p>

              <h3
                style={{
                  fontSize: "28px",
                  fontWeight: 500,
                  color: "#F0F4FB",
                  marginBottom: "28px",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}
              >
                {t.hiringTitle}
              </h3>

              <div className="space-y-4 mb-10">
                {[
                  "Senior BI / FP&A Analyst",
                  "Senior Data Scientist",
                  "Business Intelligence Lead",
                  "AI Product Analyst",
                ].map((role) => (
                  <div key={role} className="flex items-center gap-3">
                    <span style={{ color: "#4A8BFF", fontFamily: "var(--font-mono)", fontSize: "14px" }}>→</span>
                    <span style={{ fontSize: "16px", color: "#C5CFE2" }}>{role}</span>
                  </div>
                ))}
              </div>

              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  letterSpacing: "0.06em",
                  color: "#6B7A95",
                  marginBottom: "28px",
                  lineHeight: 1.6,
                }}
              >
                {t.availability}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    padding: "12px 24px",
                    borderRadius: "10px",
                    background: "#2B6FE8",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  {t.cv}
                </a>
                <a
                  href="https://www.linkedin.com/in/german-cardenas-070118175/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    padding: "12px 24px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    color: "#C5CFE2",
                    fontSize: "14px",
                    fontWeight: 500,
                    textDecoration: "none",
                  }}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* RIGHT — Freelance */}
          <AnimatedSection delay={0.14}>
            <div
              className="h-full group transition-all duration-[400ms]"
              style={{
                background: "#0F1623",
                border: "1px solid rgba(255,255,255,0.04)",
                borderRadius: "24px",
                padding: "56px 48px",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#131B2B";
                el.style.borderColor = "rgba(74,139,255,0.1)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#0F1623";
                el.style.borderColor = "rgba(255,255,255,0.04)";
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#6B7A95",
                  marginBottom: "24px",
                }}
              >
                {t.projectEyebrow}
              </p>

              <h3
                style={{
                  fontSize: "28px",
                  fontWeight: 500,
                  color: "#F0F4FB",
                  marginBottom: "28px",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}
              >
                {t.projectTitle}
              </h3>

              <div className="space-y-4 mb-10">
                {t.services.map((service) => (
                  <div key={service} className="flex items-center gap-3">
                    <span style={{ color: "#4A8BFF", fontFamily: "var(--font-mono)", fontSize: "14px" }}>→</span>
                    <span style={{ fontSize: "16px", color: "#C5CFE2" }}>{service}</span>
                  </div>
                ))}
              </div>

              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "#6B7A95",
                  marginBottom: "28px",
                }}
              >
                {t.method}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://calendly.com/lic-germancardenas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    padding: "12px 24px",
                    borderRadius: "10px",
                    background: "#2B6FE8",
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  {t.book}
                </a>
                <a
                  href="mailto:lic.germancardenas@gmail.com"
                  className="inline-flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    padding: "12px 24px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    color: "#C5CFE2",
                    fontSize: "14px",
                    fontWeight: 500,
                    textDecoration: "none",
                  }}
                >
                  {t.email}
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Below — direct contact */}
        <AnimatedSection delay={0.22} className="text-center">
          <p
            style={{
              fontSize: "15px",
              color: "#6B7A95",
              marginBottom: "20px",
            }}
          >
            {t.orWrite}
          </p>

          <a
            href="mailto:lic.germancardenas@gmail.com"
            className="block transition-colors duration-200 hover:opacity-80"
            style={{
              fontSize: "clamp(20px, 3vw, 32px)",
              fontWeight: 400,
              color: "#4A8BFF",
              textDecoration: "none",
              letterSpacing: "-0.02em",
              marginBottom: "12px",
            }}
          >
            lic.germancardenas@gmail.com
          </a>

          <a
            href="https://wa.me/5491158562766"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
            style={{
              padding: "12px 24px",
              borderRadius: "999px",
              border: "1px solid rgba(74,222,128,0.35)",
              background: "rgba(74,222,128,0.08)",
              fontSize: "15px",
              fontWeight: 500,
              color: "#4ADE80",
              textDecoration: "none",
              marginBottom: "28px",
            }}
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            {t.whatsapp}
          </a>

          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              letterSpacing: "0.06em",
              color: "#3F4A5F",
            }}
          >
            {t.reply}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
