"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Globe, Menu, X, Download, Command } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const currentLocale = pathname.startsWith("/en") ? "en" : "es";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleLocale() {
    const newLocale = currentLocale === "es" ? "en" : "es";
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/") || `/${newLocale}`);
  }

  function scrollTo(id: string) {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function openPalette() {
    setMenuOpen(false);
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true }));
  }

  const navLinks = [
    { label: "Casos", id: "casos" },
    { label: "Proyectos", id: "projects" },
    { label: "Experiencia", id: "experience" },
    { label: "Contacto", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0E1A]/90 backdrop-blur-md border-b border-[#1F2937]"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-16">
        {/* Logo */}
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2.5 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold tracking-tight group-hover:scale-110 transition-transform"
            style={{ backgroundColor: "#4F7CFF" }}
          >
            GC
          </div>
          <span className="font-semibold text-[#F5F7FA] hidden sm:block text-sm">
            Germán Cárdenas
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm text-[#B8C1D1] hover:text-[#F5F7FA] transition-colors font-medium"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* ⌘K */}
          <button
            onClick={openPalette}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono text-[#6B7689] hover:text-[#B8C1D1] border border-[#1F2937] hover:border-[#4F7CFF] transition-colors"
            title="Command palette"
          >
            <Command className="w-3 h-3" />K
          </button>

          {/* Lang toggle */}
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#B8C1D1] hover:text-[#F5F7FA] border border-[#1F2937] hover:border-[#4F7CFF] transition-colors"
          >
            <Globe className="w-3.5 h-3.5" />
            {currentLocale === "es" ? "EN" : "ES"}
          </button>

          {/* CV download */}
          <a
            href="/cv.pdf"
            download
            className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#4F7CFF" }}
          >
            <Download className="w-3.5 h-3.5" />
            CV
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full text-[#B8C1D1] hover:bg-[#0F1419] border border-[#1F2937] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0A0E1A] border-b border-[#1F2937] overflow-hidden"
          >
            <div className="container-custom py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#B8C1D1] hover:bg-[#0F1419] hover:text-[#F5F7FA] transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={openPalette}
                className="text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#6B7689] hover:bg-[#0F1419] hover:text-[#B8C1D1] transition-colors font-mono"
              >
                ⌘K Búsqueda rápida
              </button>
              <a
                href="/cv.pdf"
                download
                className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-white text-sm font-semibold"
                style={{ backgroundColor: "#4F7CFF" }}
                onClick={() => setMenuOpen(false)}
              >
                <Download className="w-4 h-4" />
                Descargar CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
