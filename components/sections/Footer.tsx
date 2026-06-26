"use client";

import { Mail, MessageCircle } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/licgermancardenas-crypto",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/german-cardenas-070118175/",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:lic.germancardenas@gmail.com",
    icon: <Mail className="w-4 h-4" />,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5491158562766",
    icon: <MessageCircle className="w-4 h-4" />,
  },
];

const navLinks = [
  { label: "Casos", id: "casos" },
  { label: "Proyectos", id: "projects" },
  { label: "Experiencia", id: "experience" },
  { label: "Stack", id: "stack" },
  { label: "Contacto", id: "contact" },
];

const projectLinks = [
  { label: "AgroNova", url: "https://agro-nova-plataforma.vercel.app/" },
  { label: "LAPD Analytics", url: "https://lapd-data-crime.vercel.app/dashboard" },
  { label: "Atlas One ERP", url: "https://www.atlaones-erp.com" },
  { label: "Real Estate Intelligence", url: "https://real-state-intelligence.vercel.app/" },
  { label: "Fundación CIPE", url: "https://www.fundacioncipe.com/" },
];

export function Footer() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <footer
      style={{
        backgroundColor: "#06080D",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                style={{ backgroundColor: "#2B6FE8" }}
              >
                GC
              </div>
              <span
                className="font-semibold"
                style={{ color: "#F0F4FB" }}
              >
                Germán Cárdenas
              </span>
            </div>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                color: "#6B7A95",
                marginBottom: "20px",
                maxWidth: "260px",
              }}
            >
              Financial Analyst · Data Scientist · AI Engineer. Buenos Aires, Argentina.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    color: "rgba(255,255,255,0.4)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  aria-label={s.label}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "#2B6FE8";
                    el.style.color = "#fff";
                    el.style.borderColor = "transparent";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255,255,255,0.04)";
                    el.style.color = "rgba(255,255,255,0.4)";
                    el.style.borderColor = "rgba(255,255,255,0.06)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#3F4A5F",
                marginBottom: "16px",
              }}
            >
              Navegación
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "#6B7A95" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#C5CFE2";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#6B7A95";
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#3F4A5F",
                marginBottom: "16px",
              }}
            >
              Proyectos
            </h4>
            <ul className="space-y-3">
              {projectLinks.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors duration-200"
                    style={{ color: "#6B7A95", textDecoration: "none" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#4A8BFF";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#6B7A95";
                    }}
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "#3F4A5F",
            }}
          >
            © {new Date().getFullYear()} Germán Cárdenas
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "#3F4A5F",
            }}
          >
            Hecho con Next.js · Vercel · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
