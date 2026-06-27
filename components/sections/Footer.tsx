"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "CAPABILITIES", href: "#casos" },
  { label: "CASES", href: "#casos" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "STACK", href: "#stack" },
  { label: "CREDENTIALS", href: "#education" },
  { label: "CONTACT", href: "#contact" },
];

const social = [
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/german-cardenas-070118175/" },
  { label: "GITHUB", href: "https://github.com/licgermancardenas-crypto" },
  { label: "EMAIL", href: "mailto:lic.germancardenas@gmail.com" },
];

function FooterTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("es-AR", {
        timeZone: "America/Argentina/Buenos_Aires",
        hour: "2-digit",
        minute: "2-digit",
      });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span style={{ fontVariantNumeric: "tabular-nums" }}>
      {time ?? "--:--"}
    </span>
  );
}

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0A0B0F",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "80px",
        paddingBottom: "48px",
      }}
    >
      <div className="container-custom">
        {/* System status bar */}
        <div
          className="flex flex-wrap items-center gap-8"
          style={{
            paddingBottom: "40px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            marginBottom: "48px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.14em",
              color: "#5A6478",
            }}
          >
            ─── SYSTEM STATUS
          </p>

          <div className="flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{
                backgroundColor: "#00C781",
                animation: "pulse-live 2s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.08em",
                color: "#8B95A8",
              }}
            >
              All systems operational
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: "#00C781" }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.08em",
                color: "#8B95A8",
              }}
            >
              Open to work — Q3 2026
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:ml-auto">
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.08em",
                color: "#5A6478",
              }}
            >
              ◎ Buenos Aires ·{" "}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.08em",
                color: "#5A6478",
              }}
            >
              <FooterTime />
            </span>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid sm:grid-cols-3 gap-12 mb-16">
          {/* Identity */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.10em",
                color: "#F0F4FB",
                marginBottom: "8px",
              }}
            >
              GC · CARDENAS
            </p>
            <p
              style={{
                fontSize: "13px",
                lineHeight: 1.7,
                color: "#5A6478",
              }}
            >
              Senior Data & Finance Analyst.
              <br />
              Buenos Aires, Argentina.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.14em",
                color: "#5A6478",
                marginBottom: "16px",
              }}
            >
              ─── NAVIGATION
            </p>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      letterSpacing: "0.10em",
                      color: "#5A6478",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#C5CFE2";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#5A6478";
                    }}
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.14em",
                color: "#5A6478",
                marginBottom: "16px",
              }}
            >
              ─── CONNECT
            </p>
            <div className="space-y-2">
              {social.map((s) => (
                <div key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      letterSpacing: "0.10em",
                      color: "#5A6478",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#4A8BFF";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#5A6478";
                    }}
                  >
                    {s.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-wrap justify-between gap-3"
          style={{
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.06em",
              color: "#3A404F",
            }}
          >
            © {new Date().getFullYear()} Germán Cárdenas. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.06em",
              color: "#3A404F",
            }}
          >
            v2.0.0 · ANALYTICAL CATHEDRAL
          </p>
        </div>
      </div>
    </footer>
  );
}
