"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "@/components/AnimatedSection";

const stackData = [
  {
    cat_key: "cat_languages",
    accent: "#635bff",
    items: ["Python", "TypeScript", "SQL", "R", "JavaScript", "Bash"],
  },
  {
    cat_key: "cat_analytics",
    accent: "#f59e0b",
    items: ["Power BI", "Tableau", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"],
  },
  {
    cat_key: "cat_ml",
    accent: "#8b5cf6",
    items: ["scikit-learn", "TensorFlow", "LangChain", "OpenAI API", "Hugging Face", "XGBoost"],
  },
  {
    cat_key: "cat_gis",
    accent: "#10b981",
    items: ["QGIS", "GeoPandas", "PostGIS", "Leaflet", "MapLibre", "Folium", "Contextily"],
  },
  {
    cat_key: "cat_web",
    accent: "#06b6d4",
    items: ["Next.js 15", "React 19", "FastAPI", "Node.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    cat_key: "cat_databases",
    accent: "#ec4899",
    items: ["PostgreSQL", "Neon", "SQLite", "MongoDB", "Redis"],
  },
  {
    cat_key: "cat_cloud",
    accent: "#f97316",
    items: ["Vercel", "Docker", "Git", "GitHub Actions", "Linux", "REST APIs"],
  },
];

export function TechStack() {
  const t = useTranslations("stack");

  return (
    <section id="stack" className="py-24 bg-white dark:bg-[#0a2540]">
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

        {/* Categories */}
        <div className="space-y-6">
          {stackData.map((cat, i) => (
            <AnimatedSection key={cat.cat_key} delay={i * 0.06}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-2xl bg-[#f6f9fc] dark:bg-[#0d2d50] border border-[#e3e8ee] dark:border-[#1a3a5c]">
                {/* Category label */}
                <div className="flex-shrink-0 sm:w-36">
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: cat.accent }}
                  >
                    {t(cat.cat_key as "cat_languages" | "cat_analytics" | "cat_ml" | "cat_gis" | "cat_web" | "cat_databases" | "cat_cloud")}
                  </span>
                </div>

                {/* Divider */}
                <div
                  className="hidden sm:block w-px h-6 flex-shrink-0"
                  style={{ backgroundColor: cat.accent + "40" }}
                />

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-white dark:bg-[#0a2540] border border-[#e3e8ee] dark:border-[#1a3a5c] text-sm font-medium text-[#0a2540] dark:text-white hover:border-current transition-colors cursor-default"
                      style={{ "--badge-accent": cat.accent } as React.CSSProperties}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = cat.accent;
                        (e.currentTarget as HTMLElement).style.color = cat.accent;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "";
                        (e.currentTarget as HTMLElement).style.color = "";
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
