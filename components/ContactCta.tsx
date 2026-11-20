import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Llamado a contacto: lleva a la sección #contact de la home en el idioma de la página.
 * "compact" para el cierre de cada proyecto; "full" para el cierre de una sección grande.
 */
export function ContactCta({
  locale,
  title,
  text,
  accent = "#2B6FE8",
  onAccent = "#FFFFFF",
  variant = "compact",
  className = "",
}: {
  locale: string;
  title: string;
  text?: string;
  accent?: string;
  onAccent?: string;
  variant?: "compact" | "full";
  className?: string;
}) {
  const lang = locale === "en" ? "en" : "es";
  const label = lang === "en" ? "Let's talk" : "Hablemos";
  const href = `/${lang}#contact`;

  if (variant === "full") {
    return (
      <div
        className={`rounded-2xl p-8 md:p-10 ${className}`}
        style={{ background: `linear-gradient(135deg, ${accent}29, ${accent}0a)`, border: `1px solid ${accent}4d` }}
      >
        <p style={{ fontSize: "clamp(22px, 2.6vw, 30px)", fontWeight: 600, color: "#FFFFFF", lineHeight: 1.2, marginBottom: "10px" }}>{title}</p>
        {text && (
          <p style={{ fontSize: "16px", lineHeight: 1.65, color: "rgba(230,230,235,0.85)", maxWidth: "680px", marginBottom: "24px" }}>{text}</p>
        )}
        <Link
          href={href}
          className="inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
          style={{ padding: "13px 26px", borderRadius: "8px", background: accent, color: onAccent, fontSize: "15px", fontWeight: 600 }}
        >
          {label}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl px-5 py-4 ${className}`}
      style={{ border: `1px solid ${accent}40`, background: `${accent}0d` }}
    >
      <div>
        <p style={{ fontSize: "16px", fontWeight: 600, color: "#FFFFFF", marginBottom: text ? "4px" : 0 }}>{title}</p>
        {text && <p style={{ fontSize: "14px", lineHeight: 1.55, color: "rgba(212,212,216,0.8)" }}>{text}</p>}
      </div>
      <Link
        href={href}
        className="inline-flex items-center gap-2 flex-shrink-0 self-start sm:self-auto transition-all duration-200 hover:-translate-y-0.5"
        style={{ padding: "10px 20px", borderRadius: "8px", background: accent, color: onAccent, fontSize: "14px", fontWeight: 600 }}
      >
        {label}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
