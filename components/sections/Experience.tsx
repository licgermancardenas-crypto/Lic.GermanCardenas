"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, BarChart2, Terminal } from "lucide-react";
import { useLocale } from "next-intl";
import {
  EXPERIENCES,
  COMPANIES_COUNT,
  formatYM,
  yearsOfExperience,
  type ExpItem,
  type Lang,
} from "@/lib/experience-data";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// ── Glass tokens — idénticos a financial-stack-cards ──────────────────────────
const GLASS_BG        = "rgba(6, 14, 52, 0.58)";
const GLASS_BLUR      = "blur(22px) saturate(170%)";
const BORDER_PASSIVE  = "1px solid rgba(255,255,255,0.09)";
const BORDER_ACTIVE   = "1px solid rgba(59,130,246,0.45)";
const SHADOW_PASSIVE  = "inset 0 1px 0 rgba(255,255,255,0.05)";
const SHADOW_ACTIVE   = "0 0 32px rgba(0,82,255,0.30), 0 0 72px rgba(0,82,255,0.14), inset 0 1px 0 rgba(147,197,253,0.14)";
const GLOW_PASSIVE    = "radial-gradient(ellipse 75% 55% at 8% 0%, rgba(59,130,246,0.13) 0%, transparent 65%)";
const GLOW_ACTIVE     = "radial-gradient(ellipse 80% 60% at 15% 0%, rgba(99,160,255,0.22) 0%, rgba(59,130,246,0.06) 45%, transparent 70%)";
const SHIMMER_PASSIVE = "linear-gradient(to right, transparent 10%, rgba(255,255,255,0.12) 50%, transparent 90%)";
const SHIMMER_ACTIVE  = "linear-gradient(to right, transparent 5%, rgba(147,197,253,0.55) 40%, rgba(147,197,253,0.55) 60%, transparent 95%)";

// ── Timeline Node — financial glass ──────────────────────────────────────────

function TimelineNode({
  exp,
  lang,
  active,
  onClick,
}: {
  exp: ExpItem;
  lang: Lang;
  active: boolean;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const lit = active || hovered;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex items-start gap-4 cursor-pointer lg:pl-8 py-2.5"
    >
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-[20px] w-3.5 h-3.5 rounded-full hidden lg:flex items-center justify-center flex-shrink-0"
        style={{
          backgroundColor: active ? "#4A8BFF" : "rgba(63,74,95,0.7)",
          boxShadow: active ? "0 0 0 3px rgba(74,139,255,0.15), 0 0 16px rgba(74,139,255,0.5)" : "none",
          transition: "all 0.3s ease",
          zIndex: 2,
        }}
      >
        {active && <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#fff" }} />}
      </div>

      {/* Glass card */}
      <div
        className="relative flex-1 overflow-hidden rounded-2xl p-3.5"
        style={{
          background: GLASS_BG,
          backdropFilter: GLASS_BLUR,
          border: lit ? BORDER_ACTIVE : BORDER_PASSIVE,
          boxShadow: lit ? SHADOW_ACTIVE : SHADOW_PASSIVE,
          transform: hovered && !active ? "translateY(-2px)" : "translateY(0)",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Passive glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: GLOW_PASSIVE, opacity: lit ? 0 : 1, transition: "opacity 0.3s ease" }}
        />
        {/* Active glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: GLOW_ACTIVE, opacity: lit ? 1 : 0, transition: "opacity 0.3s ease" }}
        />
        {/* Top shimmer */}
        <div
          className="absolute inset-x-0 top-0 h-px pointer-events-none"
          style={{ background: lit ? SHIMMER_ACTIVE : SHIMMER_PASSIVE, transition: "background 0.3s ease" }}
        />

        <div className="relative z-10">
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: lit ? "#93c5fd" : "#7888A5",
              marginBottom: "4px",
              transition: "color 0.3s ease",
            }}
          >
            {formatYM(exp.start, lang)} — {formatYM(exp.end, lang)}
          </p>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 600,
              color: lit ? "#F0F4FB" : "#8A9BB5",
              lineHeight: 1.3,
              marginBottom: "2px",
              transition: "color 0.3s ease",
            }}
          >
            {exp.company}
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: lit ? "rgba(147,197,253,0.8)" : "#7888A5",
              lineHeight: 1.4,
              transition: "color 0.3s ease",
            }}
          >
            {exp.role[lang]}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Executive View ────────────────────────────────────────────────────────────

function ExecutiveView({ exp, lang }: { exp: ExpItem; lang: Lang }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3
          style={{
            fontSize: "clamp(20px, 2.6vw, 32px)",
            fontWeight: 600,
            color: "#F0F4FB",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            marginBottom: "5px",
          }}
        >
          {exp.role[lang]}
        </h3>
        <p style={{ fontSize: "16px", color: "#4A8BFF", fontWeight: 500, marginBottom: "10px" }}>
          {exp.company}
        </p>
        <div className="flex flex-wrap gap-4">
          <span className="flex items-center gap-1.5" style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "#8D9AB3" }}>
            <Calendar style={{ width: "10px", height: "10px" }} />
            {formatYM(exp.start, lang)} → {formatYM(exp.end, lang)}
          </span>
          <span className="flex items-center gap-1.5" style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "#8D9AB3" }}>
            <MapPin style={{ width: "10px", height: "10px" }} />
            {exp.location[lang]}
          </span>
        </div>
      </div>

      {/* Impact chips */}
      <div>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#7888A5", marginBottom: "10px" }}>
          {"// impact_metrics[]"}
        </p>
        <div className="flex flex-wrap gap-2">
          {exp.impacts.map((imp, i) => (
            <div key={i} className="flex items-center gap-2 rounded-lg px-3 py-1.5" style={{ background: "rgba(43,111,232,0.1)", border: "1px solid rgba(74,139,255,0.22)" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", fontWeight: 700, color: "#7dd3fc", letterSpacing: "-0.02em" }}>
                {imp.metric}
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "rgba(203,213,225,0.6)", letterSpacing: "0.02em" }}>
                {imp.label[lang]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CV bullets */}
      <div>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#7888A5", marginBottom: "10px" }}>
          {lang === "en" ? "// responsibilities[]" : "// responsabilidades[]"}
        </p>
        <ul className="flex flex-col gap-2.5">
          {exp.bullets[lang].map((b, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span
                style={{
                  flexShrink: 0,
                  marginTop: "7px",
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(74,139,255,0.6)",
                }}
              />
              <span style={{ fontSize: "13px", lineHeight: 1.7, color: "#8A9BB5" }}>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ── Code View ─────────────────────────────────────────────────────────────────

function TechTag({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        padding: "2px 10px",
        borderRadius: "6px",
        display: "inline-block",
        marginRight: "6px",
        marginBottom: "4px",
        background: hovered ? "rgba(74,139,255,0.14)" : "rgba(255,255,255,0.05)",
        border: hovered ? "1px solid rgba(74,139,255,0.35)" : "1px solid rgba(255,255,255,0.08)",
        color: hovered ? "#93c5fd" : "#86efac",
        boxShadow: hovered ? "0 0 10px rgba(74,139,255,0.25)" : "none",
        transition: "all 0.2s ease",
        cursor: "default",
      }}
    >
      &quot;{label}&quot;
    </span>
  );
}

function CodeView({ exp, lang }: { exp: ExpItem; lang: Lang }) {
  const K = "#7dd3fc";
  const S = "#86efac";
  const P = "#fcd34d";
  const B = "rgba(255,255,255,0.35)";
  const C = "rgba(255,255,255,0.22)";

  return (
    <div className="rounded-xl overflow-hidden" style={{ background: "rgba(3,6,18,0.92)", border: "1px solid rgba(255,255,255,0.06)", fontFamily: "var(--font-mono)", fontSize: "12px", lineHeight: 1.85 }}>
      <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        {["#ff5f56", "#ffbd2e", "#27c93f"].map((c) => (
          <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c, opacity: 0.65 }} />
        ))}
        <span className="ml-2" style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)", letterSpacing: "0.08em" }}>
          career_engine.json — {exp.company}
        </span>
      </div>

      <div className="p-5 overflow-x-auto">
        <span style={{ color: B }}>{"{"}</span><br />
        <span style={{ color: K }}>&nbsp;&nbsp;&quot;role&quot;</span><span style={{ color: B }}>: </span><span style={{ color: S }}>&quot;{exp.role[lang]}&quot;</span><span style={{ color: B }}>,</span><br />
        <span style={{ color: K }}>&nbsp;&nbsp;&quot;company&quot;</span><span style={{ color: B }}>: </span><span style={{ color: S }}>&quot;{exp.company}&quot;</span><span style={{ color: B }}>,</span><br />
        <span style={{ color: K }}>&nbsp;&nbsp;&quot;period&quot;</span><span style={{ color: B }}>: </span><span style={{ color: P }}>&quot;{formatYM(exp.start, lang)} → {formatYM(exp.end, lang)}&quot;</span><span style={{ color: B }}>,</span><br />
        <span style={{ color: K }}>&nbsp;&nbsp;&quot;location&quot;</span><span style={{ color: B }}>: </span><span style={{ color: S }}>&quot;{exp.location[lang]}&quot;</span><span style={{ color: B }}>,</span><br /><br />

        <span style={{ color: C }}>&nbsp;&nbsp;{lang === "en" ? "// tech stack" : "// stack técnico"}</span><br />
        <span style={{ color: K }}>&nbsp;&nbsp;&quot;technologies&quot;</span><span style={{ color: B }}>: [</span><br />
        <span style={{ color: B }}>&nbsp;&nbsp;&nbsp;&nbsp;</span>{exp.technologies.map((t) => <TechTag key={t} label={t} />)}<br />
        <span style={{ color: B }}>&nbsp;&nbsp;],</span><br />

        <span style={{ color: K }}>&nbsp;&nbsp;&quot;core_stack&quot;</span><span style={{ color: B }}>: [</span><br />
        <span style={{ color: B }}>&nbsp;&nbsp;&nbsp;&nbsp;</span>{exp.core_stack.map((t) => <TechTag key={t} label={t} />)}<br />
        <span style={{ color: B }}>&nbsp;&nbsp;],</span><br />

        <span style={{ color: K }}>&nbsp;&nbsp;&quot;methodology&quot;</span><span style={{ color: B }}>: [</span><br />
        <span style={{ color: B }}>&nbsp;&nbsp;&nbsp;&nbsp;</span>{exp.methodology.map((t) => <TechTag key={t} label={t} />)}<br />
        <span style={{ color: B }}>&nbsp;&nbsp;],</span><br /><br />

        <span style={{ color: C }}>&nbsp;&nbsp;{lang === "en" ? "// impact metrics" : "// métricas de impacto"}</span><br />
        <span style={{ color: K }}>&nbsp;&nbsp;&quot;impact&quot;</span><span style={{ color: B }}>: {"{"}</span><br />
        {exp.impacts.map((imp, i) => {
          const key = imp.label.en.toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "").slice(0, 24);
          return (
            <span key={i}>
              <span style={{ color: K }}>&nbsp;&nbsp;&nbsp;&nbsp;&quot;{key}&quot;</span>
              <span style={{ color: B }}>: </span>
              <span style={{ color: P }}>&quot;{imp.metric}&quot;</span>
              {i < exp.impacts.length - 1 && <span style={{ color: B }}>,</span>}
              <br />
            </span>
          );
        })}
        <span style={{ color: B }}>&nbsp;&nbsp;{"}"}</span><br />
        <span style={{ color: B }}>{"}"}</span>
        <span className="inline-block ml-1 animate-pulse align-middle" style={{ width: "8px", height: "16px", backgroundColor: "#22d3ee", borderRadius: "1px" }} />
      </div>
    </div>
  );
}

// ── Main Export ───────────────────────────────────────────────────────────────

type TabType = "executive" | "code";

export function Experience() {
  const lang: Lang = useLocale() === "en" ? "en" : "es";
  const years = yearsOfExperience();
  const [selected, setSelected] = useState(0);
  const [tab, setTab] = useState<TabType>("executive");
  const exp = EXPERIENCES[selected];

  function selectExp(i: number) {
    setSelected(i);
    setTab("executive");
  }

  return (
    <section
      id="experience"
      className="py-24 sm:py-32"
      style={{ backgroundColor: "#06080D", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="container-custom">
        <div className="mb-14">
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#8D9AB3", marginBottom: "20px" }}>
            {lang === "en" ? "─── Professional experience" : "─── Experiencia profesional"}
          </p>
          <h2 className="font-serif" style={{ fontSize: "clamp(36px, 4vw, 60px)", fontWeight: 600, color: "#F0F4FB", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            {lang === "en" ? `${years}+ years.` : `${years}+ años.`}{" "}
            <span>{lang === "en" ? `${COMPANIES_COUNT} companies.` : `${COMPANIES_COUNT} empresas.`}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* LEFT — Timeline */}
          <div className="lg:col-span-4 relative">
            <div
              className="absolute top-0 bottom-0 hidden lg:block"
              style={{ left: "7px", width: "1px", background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.08) 10%, rgba(255,255,255,0.08) 90%, transparent)" }}
            />
            <div className="flex flex-col">
              {EXPERIENCES.map((e, i) => (
                <TimelineNode key={e.company} exp={e} lang={lang} active={selected === i} onClick={() => selectExp(i)} />
              ))}
            </div>
          </div>

          {/* RIGHT — Glass Console */}
          <div className="lg:col-span-8">
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{
                background: GLASS_BG,
                backdropFilter: GLASS_BLUR,
                border: BORDER_PASSIVE,
                boxShadow: SHADOW_PASSIVE,
              }}
            >
              {/* Passive glow — always on for console */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: GLOW_PASSIVE }} />
              <div className="absolute inset-x-0 top-0 h-px pointer-events-none" style={{ background: SHIMMER_PASSIVE }} />

              {/* IDE header */}
              <div
                className="relative z-10 flex items-center justify-between px-5 py-3"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
              >
                <div className="flex items-center gap-1.5">
                  {["#ff5f56", "#ffbd2e", "#27c93f"].map((c) => (
                    <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c, opacity: 0.5 }} />
                  ))}
                  <span className="ml-2" style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.06em" }}>
                    career_engine.ts
                  </span>
                </div>

                <div className="flex items-center gap-1 rounded-lg p-1" style={{ background: "rgba(255,255,255,0.04)" }}>
                  {(
                    [
                      { id: "executive", icon: BarChart2, label: "view.executive()" },
                      { id: "code",      icon: Terminal,  label: "view.code()" },
                    ] as const
                  ).map(({ id, icon: Icon, label }) => (
                    <button
                      key={id}
                      onClick={() => setTab(id)}
                      className="flex items-center gap-1.5 px-3 py-1.5 min-h-[40px] rounded-md"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "12px",
                        letterSpacing: "0.04em",
                        background: tab === id ? "rgba(43,111,232,0.2)" : "transparent",
                        border: tab === id ? "1px solid rgba(74,139,255,0.3)" : "1px solid transparent",
                        color: tab === id ? "#93c5fd" : "rgba(255,255,255,0.3)",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <Icon style={{ width: "11px", height: "11px" }} />
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${selected}-${tab}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25, ease: EASE }}
                  >
                    {tab === "executive" ? <ExecutiveView exp={exp} lang={lang} /> : <CodeView exp={exp} lang={lang} />}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
