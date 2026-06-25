"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ExternalLink, Layers, Users, MapPin, AlertTriangle, Package } from "lucide-react";

const stack = ["Next.js 15", "PostGIS", "Neon", "FastAPI", "Leaflet", "Python", "QGIS"];

const metricIcons = [Users, MapPin, Layers, AlertTriangle, Package];

export function FeaturedCase() {
  const t = useTranslations("case");

  const metrics = [
    { icon: Users, value: t("metric1_value"), label: t("metric1_label") },
    { icon: MapPin, value: t("metric2_value"), label: t("metric2_label") },
    { icon: Layers, value: t("metric3_value"), label: t("metric3_label") },
    { icon: AlertTriangle, value: t("metric4_value"), label: t("metric4_label") },
    { icon: Package, value: t("metric5_value"), label: t("metric5_label") },
  ];

  return (
    <section id="featured" className="py-24 bg-white dark:bg-[#0a2540]">
      <div className="container-custom">
        <AnimatedSection className="mb-6">
          <span className="inline-block px-3 py-1 rounded-full bg-[#635bff]/10 text-[#635bff] text-xs font-semibold uppercase tracking-widest">
            {t("label")}
          </span>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="rounded-3xl bg-gradient-to-br from-[#0a2540] via-[#0d2d50] to-[#0a2540] dark:from-[#0d2d50] dark:via-[#0a2540] dark:to-[#0d2d50] overflow-hidden border border-[#1a3a5c] relative">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#635bff]/10 blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-cyan-500/10 blur-[80px]" />
              {/* Grid */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
                  backgroundSize: "30px 30px",
                }}
              />
            </div>

            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Content */}
                <div>
                  {/* Live badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {t("live_badge")}
                    </span>
                    <span className="text-white/40 text-xs">AgroNova</span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                    {t("title")}
                  </h2>
                  <p className="text-[#635bff] font-medium mb-6">{t("subtitle")}</p>
                  <p className="text-[#a8c0d8] leading-relaxed mb-8 text-base">
                    {t("description")}
                  </p>

                  {/* Stack */}
                  <div className="mb-8">
                    <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-3">
                      {t("stack_label")}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/80 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="https://agro-nova-plataforma.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#635bff] text-white font-semibold text-sm hover:bg-[#4f46e5] transition-all hover:shadow-lg hover:shadow-[#635bff]/30 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {t("cta")}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Right: Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                  {metrics.map((m, i) => {
                    const Icon = m.icon;
                    return (
                      <div
                        key={i}
                        className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                      >
                        <Icon className="w-5 h-5 text-[#635bff] mb-3" />
                        <div className="text-2xl font-bold text-white mb-1">{m.value}</div>
                        <div className="text-xs text-white/50 leading-tight">{m.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
