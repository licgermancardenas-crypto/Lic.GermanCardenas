"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Globe, Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const currentLocale = pathname.startsWith("/en") ? "en" : "es";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["hero", "perfiles", "casos", "projects", "experience", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
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
    { label: "Perfiles", id: "perfiles" },
    { label: "Casos", id: "casos" },
    { label: "Proyectos", id: "projects" },
    { label: "Experiencia", id: "experience" },
    { label: "Contacto", id: "contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        backgroundColor: scrolled ? "rgba(6,8,13,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.05)"
          : "1px solid transparent",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div className="container-custom flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2.5 group"
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold tracking-tight transition-all duration-200 group-hover:scale-105"
            style={{ backgroundColor: "#2B6FE8" }}
          >
            GC
          </div>
          <span
            className="font-semibold hidden sm:block text-sm"
            style={{ color: "#F0F4FB" }}
          >
            Germán Cárdenas
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="relative text-sm font-medium transition-colors duration-200"
                style={{
                  color: isActive ? "#F0F4FB" : "#6B7A95",
                  fontFamily: "var(--font-sans)",
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLElement).style.color = "#C5CFE2";
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLElement).style.color = "#6B7A95";
                }}
              >
                {link.label}
                {/* Active underline */}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0"
                    style={{
                      height: "1px",
                      background: "#4A8BFF",
                    }}
                    initial={false}
                    transition={{ duration: 0.2, ease: EASE }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* ⌘K */}
          <button
            onClick={openPalette}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all duration-200"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "#6B7A95",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "#C5CFE2";
              el.style.borderColor = "rgba(74,139,255,0.3)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "#6B7A95";
              el.style.borderColor = "rgba(255,255,255,0.06)";
            }}
          >
            ⌘K
          </button>

          {/* Lang toggle */}
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              fontWeight: 600,
              color: "#6B7A95",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "#C5CFE2";
              el.style.borderColor = "rgba(74,139,255,0.3)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "#6B7A95";
              el.style.borderColor = "rgba(255,255,255,0.06)";
            }}
          >
            <Globe className="w-3.5 h-3.5" />
            {currentLocale === "es" ? "EN" : "ES"}
          </button>

          {/* CV download */}
          <a
            href="/cv.pdf"
            download
            className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
            style={{ backgroundColor: "#2B6FE8" }}
          >
            <Download className="w-3.5 h-3.5" />
            CV
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-colors duration-200"
            style={{
              color: "#C5CFE2",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
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
            transition={{ duration: 0.2, ease: EASE }}
            className="md:hidden overflow-hidden"
            style={{
              backgroundColor: "rgba(6,8,13,0.95)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <div className="container-custom py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left px-3 py-3 rounded-lg text-sm font-medium transition-colors duration-200"
                  style={{ color: "#C5CFE2" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={openPalette}
                className="text-left px-3 py-3 rounded-lg text-sm font-medium transition-colors duration-200"
                style={{
                  color: "#6B7A95",
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                }}
              >
                ⌘K Búsqueda rápida
              </button>
              <a
                href="/cv.pdf"
                download
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-white text-sm font-semibold"
                style={{ backgroundColor: "#2B6FE8" }}
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
