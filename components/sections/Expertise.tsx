"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  BarChart3,
  TrendingUp,
  Brain,
  Target,
} from "lucide-react";

const icons = [BarChart3, TrendingUp, Brain, Target];
const keys = ["analytics", "finance", "ds", "strategy"] as const;
const accentColors = [
  "from-[#635bff] to-[#818cf8]",
  "from-[#06b6d4] to-[#67e8f9]",
  "from-[#8b5cf6] to-[#c4b5fd]",
  "from-[#f59e0b] to-[#fcd34d]",
];

export function Expertise() {
  const t = useTranslations("expertise");

  return (
    <section
      id="expertise"
      className="py-24 bg-[#f6f9fc] dark:bg-[#0d2d50]"
    >
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="mb-16 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-[#635bff]/10 text-[#635bff] text-xs font-semibold uppercase tracking-widest mb-4">
            {t("label")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a2540] dark:text-white tracking-tight mb-4">
            {t("title")}
          </h2>
          <p className="text-[#425466] dark:text-[#a8c0d8] text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keys.map((key, i) => {
            const Icon = icons[i];
            return (
              <AnimatedSection key={key} delay={i * 0.1}>
                <div className="h-full p-8 rounded-2xl bg-white dark:bg-[#0a2540] border border-[#e3e8ee] dark:border-[#1a3a5c] card-shadow card-shadow-hover transition-all duration-300 group cursor-default">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accentColors[i]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#0a2540] dark:text-white mb-3">
                    {t(`${key}_title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#425466] dark:text-[#a8c0d8] leading-relaxed mb-5">
                    {t(`${key}_desc`)}
                  </p>

                  {/* Skills chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {t(`${key}_skills`)
                      .split(" · ")
                      .map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded-md bg-[#f6f9fc] dark:bg-[#0d2d50] text-[#635bff] text-xs font-medium border border-[#e3e8ee] dark:border-[#1a3a5c]"
                        >
                          {skill}
                        </span>
                      ))}
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
