import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { visibleNotes, NOTES } from "@/lib/notes";

const COPY = {
  es: { back: "Volver", eyebrow: "/notas", title: "Notas técnicas", sub: "Hallazgos y métodos detrás de los casos, contados en corto.", draft: "Borrador", min: "min de lectura" },
  en: { back: "Back", eyebrow: "/notes", title: "Technical notes", sub: "Findings and methods behind the cases, in short form.", draft: "Draft", min: "min read" },
} as const;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = COPY[locale === "en" ? "en" : "es"];
  const anyPublished = NOTES.some((n) => n.published);
  return { title: t.title, description: t.sub, robots: anyPublished ? undefined : { index: false, follow: false } };
}

export default async function NotesIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const lang = locale === "en" ? "en" : "es";
  const t = COPY[lang];
  const notes = visibleNotes();
  if (notes.length === 0) notFound();

  return (
    <div className="min-h-screen bg-[#06080D]">
      <div className="sticky top-0 z-50 bg-[#06080D]/90 backdrop-blur-md border-b border-white/5">
        <div className="container-custom h-14 flex items-center">
          <Link href={`/${lang}`} className="inline-flex items-center gap-2 min-h-[40px] text-sm text-[#8D9AB3] hover:text-[#C5CFE2] transition-colors">
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            {t.back}
          </Link>
        </div>
      </div>
      <main id="contenido" tabIndex={-1} className="outline-none container-custom py-16 md:py-24 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#8D9AB3] mb-5">{t.eyebrow}</p>
        <h1 className="font-serif uppercase text-[#F0F4FB] leading-none mb-4" style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 600, letterSpacing: "0.02em" }}>
          {t.title}
        </h1>
        <p className="text-[#C5CFE2] text-lg mb-12">{t.sub}</p>
        <ul className="space-y-4">
          {notes.map((n) => (
            <li key={n.slug}>
              <Link
                href={`/${lang}/notas/${n.slug}`}
                className="group block rounded-2xl p-6 transition-colors hover:bg-white/[0.03]"
                style={{ border: `1px ${n.published ? "solid" : "dashed"} rgba(255,255,255,0.08)` }}
              >
                <p className="font-mono text-xs text-[#8D9AB3] mb-2">
                  {n.date} · {n.readingMin} {t.min}
                  {!n.published && <span className="ml-2 text-[#F5B544]">· {t.draft}</span>}
                </p>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#F0F4FB] mb-2 flex items-start gap-2">
                  {n.title[lang]}
                  <ArrowRight className="w-5 h-5 mt-1 shrink-0 text-[#4A8BFF] transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </h2>
                <p className="text-[#C5CFE2] leading-relaxed">{n.summary[lang]}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
