import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { findNote, visibleNotes } from "@/lib/notes";

const COPY = {
  es: { back: "Todas las notas", draft: "Borrador: esta nota no está publicada. Solo se ve en desarrollo.", min: "min de lectura" },
  en: { back: "All notes", draft: "Draft: this note isn't published. It's only visible in development.", min: "min read" },
} as const;

export const dynamicParams = false;

export function generateStaticParams() {
  const notes = visibleNotes();
  // Sin notas visibles se genera un slug que siempre da 404 (Next exige al menos un parámetro).
  const slugs = notes.length ? notes.map((n) => n.slug) : ["_"];
  return routing.locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const note = findNote(slug);
  if (!note) return {};
  const lang = locale === "en" ? "en" : "es";
  return {
    title: note.title[lang],
    description: note.summary[lang],
    robots: note.published ? undefined : { index: false, follow: false },
  };
}

export default async function NotePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const note = findNote(slug);
  if (!note) notFound();
  const lang = locale === "en" ? "en" : "es";
  const t = COPY[lang];
  const { default: Body } = await note.body[lang]();

  return (
    <div className="min-h-screen bg-[#06080D]">
      <div className="sticky top-0 z-50 bg-[#06080D]/90 backdrop-blur-md border-b border-white/5">
        <div className="container-custom h-14 flex items-center">
          <Link href={`/${lang}/notas`} className="inline-flex items-center gap-2 min-h-[40px] text-sm text-[#8D9AB3] hover:text-[#C5CFE2] transition-colors">
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            {t.back}
          </Link>
        </div>
      </div>
      <main id="contenido" tabIndex={-1} className="outline-none container-custom py-16 md:py-24 max-w-2xl">
        {!note.published && (
          <p className="mb-8 rounded-md px-3 py-2 font-mono text-xs text-[#F5B544] border border-dashed border-[#F5B544]/45">{t.draft}</p>
        )}
        <p className="font-mono text-xs text-[#8D9AB3] mb-4">
          {note.date} · {note.readingMin} {t.min}
        </p>
        <h1 className="font-serif text-[#F0F4FB] leading-tight mb-10" style={{ fontSize: "clamp(32px, 4.5vw, 52px)", fontWeight: 600 }}>
          {note.title[lang]}
        </h1>
        <article>
          <Body />
        </article>
      </main>
    </div>
  );
}
