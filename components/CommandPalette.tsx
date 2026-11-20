"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Download, Languages, MessageCircle, Clock } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { CASE_INDEX } from "@/lib/cases-i18n";

type Lang = "es" | "en";
type Group = "sections" | "cases" | "actions";

type Command = {
  id: string;
  group: Group;
  label: string;
  description?: string;
  /** Palabras extra para la búsqueda (no se muestran). */
  keywords?: string;
  icon: React.ReactNode;
  run: () => void;
};

const UI = {
  es: {
    placeholder: "Buscar sección, caso o acción…",
    empty: (q: string) => `Sin resultados para "${q}"`,
    groups: { sections: "Secciones", cases: "Casos", actions: "Acciones" },
    nav: "navegar",
    open: "abrir",
    close: "cerrar",
    dialog: "Búsqueda rápida",
    sections: [
      ["hero", "Inicio", "Volver al principio"],
      ["perfiles", "Perfiles", "Seis especialidades"],
      ["sobre-mi", "Sobre mí", "Quién soy y cómo trabajo"],
      ["casos", "Casos destacados", "Los proyectos, con filtros por tema"],
      ["projects", "Más proyectos", "Trabajo seleccionado"],
      ["experience", "Experiencia", "Trayectoria 2021–presente"],
      ["stack", "Tech stack", "Herramientas y tecnologías"],
      ["contact", "Contacto", "Hablemos"],
    ],
    cv: "Descargar CV",
    cvDesc: "PDF",
    lang: "Switch to English",
    langDesc: "Ver el sitio en inglés",
    wa: "Escribir por WhatsApp",
    waDesc: "Respuesta en el día",
    now: "¿Qué estoy haciendo ahora?",
    caseDesc: (n: string, cat: string) => `Caso ${n} · ${cat}`,
  },
  en: {
    placeholder: "Search a section, case or action…",
    empty: (q: string) => `No results for "${q}"`,
    groups: { sections: "Sections", cases: "Cases", actions: "Actions" },
    nav: "navigate",
    open: "open",
    close: "close",
    dialog: "Quick search",
    sections: [
      ["hero", "Home", "Back to the top"],
      ["perfiles", "Profiles", "Six specialties"],
      ["sobre-mi", "About me", "Who I am and how I work"],
      ["casos", "Featured cases", "The projects, filterable by topic"],
      ["projects", "More projects", "Selected work"],
      ["experience", "Experience", "Career 2021–present"],
      ["stack", "Tech stack", "Tools and technologies"],
      ["contact", "Contact", "Let's talk"],
    ],
    cv: "Download CV",
    cvDesc: "PDF",
    lang: "Cambiar a español",
    langDesc: "View the site in Spanish",
    wa: "Message me on WhatsApp",
    waDesc: "Same-day reply",
    now: "What am I doing now?",
    caseDesc: (n: string, cat: string) => `Case ${n} · ${cat}`,
  },
} as const;

const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

export function CommandPalette() {
  const lang: Lang = useLocale() === "en" ? "en" : "es";
  const t = UI[lang];
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const scrollTo = useCallback((id: string) => {
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  }, []);

  const commands: Command[] = useMemo(() => {
    const other = lang === "es" ? "en" : "es";
    const sections: Command[] = t.sections.map(([id, label, description]) => ({
      id: `s-${id}`,
      group: "sections",
      label,
      description,
      icon: <span className="font-mono text-xs">#</span>,
      run: () => scrollTo(id),
    }));
    const cases: Command[] = CASE_INDEX.map((c) => ({
      id: `c-${c.id}`,
      group: "cases",
      label: c.title,
      description: t.caseDesc(c.number, c[lang]),
      keywords: `${c.slug} ${c.es} ${c.en}`,
      icon: <span className="font-mono text-xs">{c.number}</span>,
      run: () => router.push(`/${lang}/work/${c.slug}`),
    }));
    const actions: Command[] = [
      {
        id: "a-cv",
        group: "actions",
        label: t.cv,
        description: t.cvDesc,
        keywords: "cv resume curriculum pdf",
        icon: <Download className="w-3.5 h-3.5" />,
        run: () => {
          const a = document.createElement("a");
          a.href = "/cv.pdf";
          a.download = "CV_German_Cardenas.pdf";
          a.click();
        },
      },
      {
        id: "a-lang",
        group: "actions",
        label: t.lang,
        description: t.langDesc,
        keywords: "idioma language english español ingles",
        icon: <Languages className="w-3.5 h-3.5" />,
        run: () => {
          const seg = pathname.split("/");
          seg[1] = other;
          router.push(seg.join("/") || `/${other}`);
        },
      },
      {
        id: "a-wa",
        group: "actions",
        label: t.wa,
        description: t.waDesc,
        keywords: "whatsapp contacto contact mensaje",
        icon: <MessageCircle className="w-3.5 h-3.5" />,
        run: () => window.open("https://wa.me/5491158562766", "_blank", "noopener,noreferrer"),
      },
      {
        id: "a-now",
        group: "actions",
        label: t.now,
        keywords: "now ahora",
        icon: <Clock className="w-3.5 h-3.5" />,
        run: () => router.push(`/${lang}/now`),
      },
    ];
    return [...actions, ...sections, ...cases];
  }, [lang, t, pathname, router, scrollTo]);

  const filtered = useMemo(() => {
    if (!query) return commands;
    const q = norm(query);
    return commands.filter((c) => norm(`${c.label} ${c.description ?? ""} ${c.keywords ?? ""}`).includes(q));
  }, [commands, query]);

  const execute = useCallback((cmd: Command) => {
    setOpen(false);
    setQuery("");
    cmd.run();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
        setQuery("");
        setSelected(0);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => {
    listRef.current?.querySelector(`[data-idx="${selected}"]`)?.scrollIntoView({ block: "nearest" });
  }, [selected]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[selected]) execute(filtered[selected]);
    }
  }

  const activeId = filtered[selected] ? `cmd-${filtered[selected].id}` : undefined;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[9990] bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={t.dialog}
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.15 }}
            className="fixed left-1/2 top-[12%] sm:top-[18%] -translate-x-1/2 z-[9991] w-[calc(100%-32px)] max-w-[560px]"
          >
            <div className="rounded-2xl border border-[#1F2937] bg-[#0F1419] shadow-2xl overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-[#1F2937]">
                <Search className="w-4 h-4 text-[#8D9AB3] flex-shrink-0" aria-hidden="true" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelected(0);
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder={t.placeholder}
                  aria-label={t.placeholder}
                  role="combobox"
                  aria-expanded="true"
                  aria-controls="cmdk-list"
                  aria-activedescendant={activeId}
                  className="flex-1 min-h-[40px] bg-transparent text-[#F5F7FA] placeholder-[#8D9AB3] text-base sm:text-sm outline-none"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-xs text-[#8D9AB3] border border-[#1F2937] rounded px-2 min-h-[32px] font-mono"
                >
                  ESC
                </button>
              </div>

              <div ref={listRef} id="cmdk-list" role="listbox" aria-label={t.dialog} className="max-h-[60vh] sm:max-h-96 overflow-y-auto py-2">
                {filtered.length === 0 ? (
                  <div className="px-4 py-8 text-center text-sm text-[#8D9AB3]">{t.empty(query)}</div>
                ) : (
                  filtered.map((cmd, i) => {
                    const head = i === 0 || filtered[i - 1].group !== cmd.group;
                    const on = selected === i;
                    return (
                      <div key={cmd.id}>
                        {head && (
                          <p className="px-4 pt-3 pb-1 text-xs font-mono uppercase tracking-[0.14em] text-[#8D9AB3]" aria-hidden="true">
                            {t.groups[cmd.group]}
                          </p>
                        )}
                        <button
                          id={`cmd-${cmd.id}`}
                          data-idx={i}
                          role="option"
                          aria-selected={on}
                          onClick={() => execute(cmd)}
                          onMouseMove={() => setSelected(i)}
                          className={`w-full flex items-center gap-3 px-4 py-2.5 min-h-[44px] text-left transition-colors ${
                            on ? "bg-[#4F7CFF]/10 text-[#F5F7FA]" : "text-[#B8C1D1] hover:bg-white/5"
                          }`}
                        >
                          <span
                            className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded"
                            style={{ color: on ? "#7FA2FF" : "#8D9AB3" }}
                            aria-hidden="true"
                          >
                            {cmd.icon}
                          </span>
                          <span className="flex-1 min-w-0">
                            <span className="block text-sm font-medium truncate">{cmd.label}</span>
                            {cmd.description && <span className="block text-xs text-[#8D9AB3] truncate">{cmd.description}</span>}
                          </span>
                          {on && <ArrowRight className="w-3.5 h-3.5 text-[#7FA2FF] flex-shrink-0" aria-hidden="true" />}
                        </button>
                      </div>
                    );
                  })
                )}
              </div>

              <div className="hidden sm:flex px-4 py-2.5 border-t border-[#1F2937] items-center gap-4 text-xs text-[#8D9AB3] font-mono">
                <span><kbd className="border border-[#1F2937] rounded px-1">↑↓</kbd> {t.nav}</span>
                <span><kbd className="border border-[#1F2937] rounded px-1">↵</kbd> {t.open}</span>
                <span><kbd className="border border-[#1F2937] rounded px-1">⌘K</kbd> {t.close}</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
