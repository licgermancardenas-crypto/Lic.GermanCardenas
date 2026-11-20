import Link from "next/link";
import { Quote, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/testimonials";
import { SHOW_DRAFTS } from "@/lib/drafts";

const COPY = {
  es: { eyebrow: "─── Recomendaciones", title: "Lo que dicen quienes trabajaron conmigo.", draft: "Borrador · no se publica hasta completar lib/testimonials.ts", case: "Ver el caso" },
  en: { eyebrow: "─── Recommendations", title: "What people I've worked with say.", draft: "Draft · not published until lib/testimonials.ts is filled in", case: "See the case" },
} as const;

/** Componente de servidor: en producción no renderiza nada hasta que haya testimonios listos. */
export function Recommendations({ locale }: { locale: string }) {
  const lang = locale === "en" ? "en" : "es";
  const t = COPY[lang];
  const ready = TESTIMONIALS.filter((x) => x.ready);
  const items = ready.length > 0 ? ready : SHOW_DRAFTS ? TESTIMONIALS : [];
  if (items.length === 0) return null;
  const isDraft = ready.length === 0;

  return (
    <section
      id="recomendaciones"
      aria-labelledby="recomendaciones-title"
      className="py-20 sm:py-28"
      style={{ backgroundColor: "#06080D", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="container-custom">
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#8D9AB3", marginBottom: "24px" }}>
          {t.eyebrow}
        </p>
        <h2
          id="recomendaciones-title"
          className="font-serif"
          style={{ textTransform: "uppercase", fontSize: "clamp(32px, 4.5vw, 64px)", fontWeight: 600, color: "#F0F4FB", lineHeight: 1.05, letterSpacing: "0.02em", maxWidth: "900px" }}
        >
          {t.title}
        </h2>

        {isDraft && (
          <p
            className="mt-6 inline-block rounded-md px-3 py-1.5"
            style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "#F5B544", border: "1px dashed rgba(245,181,68,0.45)" }}
          >
            {t.draft}
          </p>
        )}

        <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((x) => (
            <li key={x.id}>
              <figure
                className="h-full flex flex-col gap-5 rounded-2xl p-6"
                style={{ background: "#0B1019", border: `1px ${isDraft ? "dashed" : "solid"} rgba(255,255,255,0.08)` }}
              >
                <Quote className="w-6 h-6" style={{ color: "#4A8BFF" }} aria-hidden="true" />
                <blockquote style={{ fontSize: "16px", lineHeight: 1.7, color: "#C5CFE2" }}>{x.quote[lang]}</blockquote>
                <figcaption className="mt-auto">
                  <p style={{ fontSize: "15px", fontWeight: 600, color: "#F0F4FB" }}>
                    {x.linkedin ? (
                      <a href={x.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {x.name}
                      </a>
                    ) : (
                      x.name
                    )}
                  </p>
                  <p style={{ fontSize: "13px", color: "#8D9AB3" }}>{x.role[lang]}</p>
                  {x.caseSlug && (
                    <Link
                      href={`/${lang}/work/${x.caseSlug}`}
                      className="mt-2 inline-flex items-center gap-1.5 min-h-[40px] text-sm"
                      style={{ color: "#4A8BFF" }}
                    >
                      {t.case}
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  )}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
