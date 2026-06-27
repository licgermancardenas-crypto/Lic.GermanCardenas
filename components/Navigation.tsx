"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const navLinks = [
  { label: "CASES", id: "casos" },
  { label: "STACK", id: "stack" },
  { label: "CONTACT", id: "contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const currentLocale = pathname.startsWith("/en") ? "en" : "es";

  useEffect(() => {
    const ids = ["hero", "casos", "stack", "experience", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActiveSection(e.target.id);
        }
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    ids.forEach((id) => {
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

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        height: "56px",
        backgroundColor: "rgba(10,11,15,0.90)",
        backdropFilter: "blur(24px) saturate(180%)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container-custom h-full flex items-center justify-between gap-8">
        {/* Logo + status */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-3 flex-shrink-0"
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              fontWeight: 500,
              color: "#F0F4FB",
              letterSpacing: "0.06em",
            }}
          >
            GC · CARDENAS
          </span>
          <span
            className="hidden sm:flex items-center gap-1.5"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.10em",
              color: "#00C781",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: "#00C781",
                animation: "pulse-live 2s ease-in-out infinite",
              }}
            />
            AVAILABLE Q1 2026
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="relative focus-ring transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  color: isActive ? "#F0F4FB" : "#5A6478",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = "#8B95A8";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = "#5A6478";
                }}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-line"
                    className="absolute -bottom-px left-0 right-0"
                    style={{ height: "1px", backgroundColor: "#4A8BFF" }}
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
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 focus-ring transition-all duration-200"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.08em",
              color: "#5A6478",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "4px",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "#4A8BFF";
              el.style.borderColor = "rgba(74,139,255,0.30)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "#5A6478";
              el.style.borderColor = "rgba(255,255,255,0.06)";
            }}
          >
            ⌘K
          </button>

          {/* Lang toggle */}
          <button
            onClick={toggleLocale}
            className="px-3 py-1.5 focus-ring transition-all duration-200"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.12em",
              color: "#5A6478",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "4px",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "#4A8BFF";
              el.style.borderColor = "rgba(74,139,255,0.30)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = "#5A6478";
              el.style.borderColor = "rgba(255,255,255,0.06)";
            }}
          >
            {currentLocale === "es" ? "EN" : "ES"}
          </button>

          {/* CV */}
          <a
            href="/cv.pdf"
            download
            className="hidden md:flex items-center gap-1.5 px-4 py-1.5 focus-ring transition-all duration-200"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.08em",
              color: "#4A8BFF",
              border: "1px solid rgba(74,139,255,0.40)",
              borderRadius: "4px",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(74,139,255,0.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
            }}
          >
            <Download className="w-3 h-3" />
            CV
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden w-8 h-8 flex items-center justify-center focus-ring"
            style={{
              color: "#8B95A8",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "4px",
            }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
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
              backgroundColor: "#0A0B0F",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="container-custom py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left px-3 py-2.5 rounded text-sm transition-colors"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    letterSpacing: "0.10em",
                    color: "#8B95A8",
                  }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={openPalette}
                className="text-left px-3 py-2.5 rounded transition-colors"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  letterSpacing: "0.10em",
                  color: "#5A6478",
                }}
              >
                ⌘K SEARCH
              </button>
              <a
                href="/cv.pdf"
                download
                className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  color: "#4A8BFF",
                  border: "1px solid rgba(74,139,255,0.40)",
                  textDecoration: "none",
                }}
                onClick={() => setMenuOpen(false)}
              >
                <Download className="w-3.5 h-3.5" />
                DOWNLOAD CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
