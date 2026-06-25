"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Moon, Sun, Globe, Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const t = useTranslations("nav");
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const currentLocale = pathname.startsWith("/en") ? "en" : "es";

  useEffect(() => {
    setMounted(true);
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
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const navLinks = [
    { label: t("projects"), id: "projects" },
    { label: t("experience"), id: "experience" },
    { label: t("stack"), id: "stack" },
    { label: t("contact"), id: "contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 dark:bg-[#0a2540]/90 backdrop-blur-md border-b border-[#e3e8ee] dark:border-[#1a3a5c] shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-[#635bff] flex items-center justify-center text-white text-sm font-bold tracking-tight group-hover:scale-110 transition-transform">
            GC
          </div>
          <span className="font-semibold text-[#0a2540] dark:text-white hidden sm:block">
            Germán Cárdenas
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm text-[#425466] dark:text-[#a8c0d8] hover:text-[#635bff] dark:hover:text-white transition-colors font-medium"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Lang toggle */}
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#425466] dark:text-[#a8c0d8] hover:bg-[#f6f9fc] dark:hover:bg-[#0d2d50] border border-[#e3e8ee] dark:border-[#1a3a5c] transition-colors"
            title="Toggle language"
          >
            <Globe className="w-3.5 h-3.5" />
            {currentLocale === "es" ? "EN" : "ES"}
          </button>

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 flex items-center justify-center rounded-full text-[#425466] dark:text-[#a8c0d8] hover:bg-[#f6f9fc] dark:hover:bg-[#0d2d50] border border-[#e3e8ee] dark:border-[#1a3a5c] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
          )}

          {/* CV download - desktop only */}
          <a
            href="/cv.pdf"
            download
            className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#635bff] text-white text-sm font-semibold hover:bg-[#4f46e5] transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            {t("cv")}
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full text-[#425466] dark:text-[#a8c0d8] hover:bg-[#f6f9fc] dark:hover:bg-[#0d2d50] border border-[#e3e8ee] dark:border-[#1a3a5c] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? t("close_menu") : t("open_menu")}
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
            className="md:hidden bg-white dark:bg-[#0a2540] border-b border-[#e3e8ee] dark:border-[#1a3a5c] overflow-hidden"
          >
            <div className="container-custom py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#425466] dark:text-[#a8c0d8] hover:bg-[#f6f9fc] dark:hover:bg-[#0d2d50] hover:text-[#635bff] transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/cv.pdf"
                download
                className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#635bff] text-white text-sm font-semibold hover:bg-[#4f46e5] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                <Download className="w-4 h-4" />
                {t("cv")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
