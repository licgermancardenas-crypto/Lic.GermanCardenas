"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Hash } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

type Command = {
  id: string;
  label: string;
  description?: string;
  type: "scroll" | "navigate";
  target: string;
  icon?: string;
};

const commands: Command[] = [
  { id: "inicio", label: "Inicio", description: "Volver al principio", type: "scroll", target: "hero", icon: "↑" },
  { id: "casos", label: "Casos destacados", description: "Atlas ERP, Nexus, AgroNova, LAPD", type: "scroll", target: "casos", icon: "⬡" },
  { id: "caso-erp", label: "Atlas One ERP", description: "Caso 01 · Enterprise SaaS B2B", type: "scroll", target: "caso-01", icon: "01" },
  { id: "caso-nexus", label: "Atlas Nexus", description: "Caso 02 · Hackathon Winner", type: "scroll", target: "caso-02", icon: "🏆" },
  { id: "caso-agronova", label: "AgroNova", description: "Caso 03 · AgriTech · 24 provincias", type: "scroll", target: "caso-03", icon: "03" },
  { id: "caso-lapd", label: "LAPD Crime Analytics", description: "Caso 04 · Research · 1M+ registros", type: "scroll", target: "caso-04", icon: "04" },
  { id: "mas-trabajo", label: "Más proyectos", description: "RSI, Electoral, CIPE", type: "scroll", target: "projects", icon: "+" },
  { id: "experiencia", label: "Experiencia", description: "Timeline 2021–presente", type: "scroll", target: "experience", icon: "◎" },
  { id: "stack", label: "Tech Stack", description: "Herramientas y tecnologías", type: "scroll", target: "stack", icon: "⌘" },
  { id: "contacto", label: "Contacto", description: "Hablemos", type: "scroll", target: "contact", icon: "✉" },
  { id: "work-erp", label: "Ver caso completo: Atlas ERP", type: "navigate", target: "/es/work/atlas-one-erp", icon: "→" },
  { id: "work-nexus", label: "Ver caso completo: Atlas Nexus", type: "navigate", target: "/es/work/atlas-nexus", icon: "→" },
  { id: "work-agronova", label: "Ver caso completo: AgroNova", type: "navigate", target: "/es/work/agronova", icon: "→" },
  { id: "work-lapd", label: "Ver caso completo: LAPD", type: "navigate", target: "/es/work/lapd", icon: "→" },
  { id: "now", label: "¿Qué estoy haciendo ahora?", type: "navigate", target: "/es/now", icon: "●" },
  { id: "cv", label: "Descargar CV", type: "navigate", target: "/cv.pdf", icon: "↓" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const filtered = query
    ? commands.filter(
        (c) =>
          c.label.toLowerCase().includes(query.toLowerCase()) ||
          (c.description?.toLowerCase().includes(query.toLowerCase()) ?? false)
      )
    : commands;

  const execute = useCallback(
    (cmd: Command) => {
      setOpen(false);
      setQuery("");
      if (cmd.type === "scroll") {
        setTimeout(() => {
          document.getElementById(cmd.target)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      } else if (cmd.target === "/cv.pdf") {
        const a = document.createElement("a");
        a.href = "/cv.pdf";
        a.download = "CV_German_Cardenas.pdf";
        a.click();
      } else {
        router.push(cmd.target);
      }
    },
    [router]
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
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
    setSelected(0);
  }, [query]);

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

  return (
    <>
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
              initial={{ opacity: 0, scale: 0.97, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -8 }}
              transition={{ duration: 0.15 }}
              className="fixed left-1/2 top-[20%] -translate-x-1/2 z-[9991] w-full max-w-[560px] mx-4"
            >
              <div className="rounded-2xl border border-[#1F2937] bg-[#0F1419] shadow-2xl overflow-hidden">
                {/* Search input */}
                <div className="flex items-center gap-3 px-4 py-4 border-b border-[#1F2937]">
                  <Search className="w-4 h-4 text-[#6B7689] flex-shrink-0" />
                  <input
                    ref={inputRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Buscar sección o proyecto..."
                    className="flex-1 bg-transparent text-[#F5F7FA] placeholder-[#6B7689] text-sm outline-none"
                  />
                  <kbd className="text-[10px] text-[#6B7689] border border-[#1F2937] rounded px-1.5 py-0.5 font-mono">
                    ESC
                  </kbd>
                </div>
                {/* Results */}
                <div className="max-h-80 overflow-y-auto py-2">
                  {filtered.length === 0 ? (
                    <div className="px-4 py-8 text-center text-sm text-[#6B7689]">
                      Sin resultados para &quot;{query}&quot;
                    </div>
                  ) : (
                    filtered.map((cmd, i) => (
                      <button
                        key={cmd.id}
                        onClick={() => execute(cmd)}
                        onMouseEnter={() => setSelected(i)}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                          selected === i
                            ? "bg-[#4F7CFF]/10 text-[#F5F7FA]"
                            : "text-[#B8C1D1] hover:bg-white/5"
                        }`}
                      >
                        <span
                          className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded text-xs font-mono"
                          style={{ color: selected === i ? "#4F7CFF" : "#6B7689" }}
                        >
                          {cmd.icon ?? <Hash className="w-3 h-3" />}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium truncate">{cmd.label}</div>
                          {cmd.description && (
                            <div className="text-xs text-[#6B7689] truncate">{cmd.description}</div>
                          )}
                        </div>
                        {selected === i && <ArrowRight className="w-3.5 h-3.5 text-[#4F7CFF] flex-shrink-0" />}
                      </button>
                    ))
                  )}
                </div>
                {/* Footer */}
                <div className="px-4 py-2.5 border-t border-[#1F2937] flex items-center gap-4 text-[10px] text-[#6B7689] font-mono">
                  <span><kbd className="border border-[#1F2937] rounded px-1">↑↓</kbd> navegar</span>
                  <span><kbd className="border border-[#1F2937] rounded px-1">↵</kbd> abrir</span>
                  <span><kbd className="border border-[#1F2937] rounded px-1">⌘K</kbd> cerrar</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
