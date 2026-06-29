"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

const SIZE = 700;
const CENTER = 350;
const RADIUS = 205;
const NODE_SIZE = 56;
const LABEL_OFFSET = NODE_SIZE / 2 + 20;

export type OrbitalStatus = "completed" | "in-progress" | "pending";

export interface OrbitalNode {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: OrbitalStatus;
  energy: number;
  href?: string;
}

interface Props {
  timelineData: OrbitalNode[];
}

const CATEGORY_COLORS: Record<string, string> = {
  Finance: "#2B6FE8",
  BI: "#10b981",
  "Data Science": "#8b5cf6",
  AI: "#f59e0b",
  Business: "#ef4444",
  Politics: "#06b6d4",
};

function hexToRgb(hex: string): string {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return m
    ? `${parseInt(m[1], 16)},${parseInt(m[2], 16)},${parseInt(m[3], 16)}`
    : "43,111,232";
}

export default function RadialOrbitalTimeline({ timelineData }: Props) {
  const [rotDeg, setRotDeg] = useState(0);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [hoverId, setHoverId] = useState<number | null>(null);
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Responsive scale
  useEffect(() => {
    function update() {
      if (!containerRef.current) return;
      setScale(Math.min(1, containerRef.current.clientWidth / SIZE));
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Auto-rotation — pauses when a node is active
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (activeId !== null) return;
    intervalRef.current = setInterval(() => {
      setRotDeg((d) => (d + 0.25) % 360);
    }, 50);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeId]);

  const n = timelineData.length;
  const rotRad = (rotDeg * Math.PI) / 180;

  const positions = timelineData.map((node, i) => {
    const angle = (2 * Math.PI * i) / n + rotRad;
    const x = CENTER + RADIUS * Math.cos(angle);
    const y = CENTER + RADIUS * Math.sin(angle);
    return {
      node,
      x,
      y,
      // label center: outward from center
      lx: CENTER + (RADIUS + LABEL_OFFSET) * Math.cos(angle),
      ly: CENTER + (RADIUS + LABEL_OFFSET) * Math.sin(angle),
    };
  });

  const activeNode = activeId !== null ? timelineData.find((n) => n.id === activeId) ?? null : null;
  const activePos = positions.find((p) => p.node.id === activeId) ?? null;

  const isRelated = (id: number) => activeNode?.relatedIds.includes(id) ?? false;

  function handleClick(id: number) {
    setActiveId((prev) => (prev === id ? null : id));
  }

  return (
    <div ref={containerRef} className="w-full">
      {/* Orbital canvas */}
      <div style={{ height: SIZE * scale, position: "relative" }}>
        <div
          style={{
            width: SIZE,
            height: SIZE,
            position: "absolute",
            top: 0,
            left: "50%",
            transform: `translateX(-50%) scale(${scale})`,
            transformOrigin: "top center",
          }}
        >
          {/* SVG: orbit ring + connection lines */}
          <svg
            className="absolute inset-0 pointer-events-none"
            width={SIZE}
            height={SIZE}
            style={{ overflow: "visible" }}
          >
            {/* Dashed orbit ring */}
            <circle
              cx={CENTER}
              cy={CENTER}
              r={RADIUS}
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
              strokeDasharray="3 10"
            />
            {/* Tinted orbit ring (changes to active color) */}
            <circle
              cx={CENTER}
              cy={CENTER}
              r={RADIUS}
              fill="none"
              stroke={
                activeNode
                  ? `${CATEGORY_COLORS[activeNode.category] ?? "#2B6FE8"}30`
                  : "rgba(43,111,232,0.12)"
              }
              strokeWidth="1"
              style={{ transition: "stroke 0.4s ease" }}
            />

            {/* Connection lines for active node */}
            <AnimatePresence>
              {activeId !== null &&
                activePos &&
                positions.map(({ node, x, y }) => {
                  if (!isRelated(node.id)) return null;
                  const color = CATEGORY_COLORS[activeNode!.category] ?? "#2B6FE8";
                  return (
                    <motion.line
                      key={`conn-${activeId}-${node.id}`}
                      x1={activePos.x}
                      y1={activePos.y}
                      x2={x}
                      y2={y}
                      stroke={color}
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.45 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  );
                })}
            </AnimatePresence>
          </svg>

          {/* Central hub */}
          <div
            className="absolute flex items-center justify-center rounded-full"
            style={{
              width: 72,
              height: 72,
              top: CENTER - 36,
              left: CENTER - 36,
              background:
                "radial-gradient(circle at 38% 38%, rgba(43,111,232,0.35), rgba(6,8,13,0.92))",
              border: "1px solid rgba(43,111,232,0.22)",
              boxShadow:
                "0 0 48px rgba(43,111,232,0.12), inset 0 0 20px rgba(43,111,232,0.06)",
            }}
          >
            <span
              className="font-bold text-white"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "18px",
                letterSpacing: "-0.02em",
              }}
            >
              GC
            </span>
            {/* Slow pulse rings */}
            {[0, 1].map((i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full"
                style={{ border: "1px solid rgba(43,111,232,0.18)" }}
                animate={{ scale: [1, 1.9], opacity: [0.5, 0] }}
                transition={{
                  duration: 2.8,
                  delay: i * 1.4,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Orbital nodes + labels */}
          {positions.map(({ node, x, y, lx, ly }) => {
            const Icon = node.icon;
            const color = CATEGORY_COLORS[node.category] ?? "#2B6FE8";
            const rgb = hexToRgb(color);
            const isActive = activeId === node.id;
            const isHov = hoverId === node.id;
            const isRel = isRelated(node.id);
            const isDim = activeId !== null && !isActive && !isRel;

            return (
              <div key={node.id}>
                {/* Node */}
                <motion.button
                  onClick={() => handleClick(node.id)}
                  onMouseEnter={() => setHoverId(node.id)}
                  onMouseLeave={() => setHoverId(null)}
                  className="absolute focus:outline-none"
                  style={{
                    top: y - NODE_SIZE / 2,
                    left: x - NODE_SIZE / 2,
                    width: NODE_SIZE,
                    height: NODE_SIZE,
                  }}
                  animate={{
                    opacity: isDim ? 0.22 : 1,
                    scale: isActive ? 1.18 : isHov ? 1.08 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center relative"
                    style={{
                      background: isActive
                        ? color
                        : `rgba(${rgb},0.08)`,
                      border: `1.5px solid ${
                        isActive ? color : `rgba(${rgb},0.4)`
                      }`,
                      boxShadow: isActive
                        ? `0 0 24px rgba(${rgb},0.5),0 0 48px rgba(${rgb},0.18)`
                        : isRel
                        ? `0 0 14px rgba(${rgb},0.35)`
                        : isHov
                        ? `0 0 16px rgba(${rgb},0.28)`
                        : "none",
                      transition: "all 0.25s ease",
                    }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: isActive ? "#fff" : color }}
                    />
                    {/* Active pulse ring */}
                    {isActive && (
                      <motion.div
                        className="absolute rounded-full"
                        style={{
                          inset: -3,
                          border: `1px solid rgba(${rgb},0.6)`,
                        }}
                        animate={{ scale: [1, 1.65], opacity: [0.7, 0] }}
                        transition={{
                          duration: 1.4,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                      />
                    )}
                  </div>
                </motion.button>

                {/* Label — floats outward from node */}
                <div
                  className="absolute pointer-events-none select-none text-center"
                  style={{
                    top: ly - 26,
                    left: lx - 68,
                    width: 136,
                    minHeight: 52,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: isDim ? 0.12 : 1,
                    transition: "opacity 0.25s",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "9px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: isActive
                        ? color
                        : isRel
                        ? `rgba(${rgb},0.85)`
                        : "rgba(255,255,255,0.35)",
                      fontWeight: isActive ? 700 : 400,
                      lineHeight: 1.5,
                      transition: "color 0.25s",
                    }}
                  >
                    {node.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Info card — below the orbital */}
      <AnimatePresence mode="wait">
        {activeNode && (
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto w-full max-w-lg relative"
            style={{
              marginTop: "8px",
              padding: "28px 32px",
              borderRadius: "16px",
              background: "rgba(15,22,35,0.88)",
              backdropFilter: "blur(32px)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {/* Close */}
            <button
              onClick={() => setActiveId(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full transition-all"
              style={{
                color: "rgba(255,255,255,0.25)",
                background: "rgba(255,255,255,0.04)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "#F0F4FB";
                el.style.background = "rgba(255,255,255,0.08)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "rgba(255,255,255,0.25)";
                el.style.background = "rgba(255,255,255,0.04)";
              }}
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="flex items-start gap-4 mb-5">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: `rgba(${hexToRgb(
                    CATEGORY_COLORS[activeNode.category] ?? "#2B6FE8"
                  )},0.12)`,
                  border: `1px solid rgba(${hexToRgb(
                    CATEGORY_COLORS[activeNode.category] ?? "#2B6FE8"
                  )},0.3)`,
                }}
              >
                <activeNode.icon
                  className="w-5 h-5"
                  style={{
                    color: CATEGORY_COLORS[activeNode.category] ?? "#2B6FE8",
                  }}
                />
              </div>
              <div className="min-w-0">
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: CATEGORY_COLORS[activeNode.category] ?? "#2B6FE8",
                    marginBottom: "5px",
                  }}
                >
                  {activeNode.category} · {activeNode.date}
                </p>
                <h4
                  style={{
                    fontSize: "22px",
                    fontWeight: 400,
                    color: "#F0F4FB",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    fontFamily: "var(--font-serif)",
                  }}
                >
                  {activeNode.title}
                </h4>
              </div>
            </div>

            {/* Content */}
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.75,
                color: "#C5CFE2",
                marginBottom: "24px",
              }}
            >
              {activeNode.content}
            </p>

            {/* Energy bar */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#6B7A95",
                  }}
                >
                  Nivel técnico
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: CATEGORY_COLORS[activeNode.category] ?? "#2B6FE8",
                    fontWeight: 600,
                  }}
                >
                  {activeNode.energy}%
                </p>
              </div>
              <div
                style={{
                  height: "2px",
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "1px",
                  overflow: "hidden",
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${activeNode.energy}%` }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.15,
                  }}
                  style={{
                    height: "100%",
                    background:
                      CATEGORY_COLORS[activeNode.category] ?? "#2B6FE8",
                    borderRadius: "1px",
                  }}
                />
              </div>
            </div>

            {/* Ver perfil link */}
            {activeNode.href && (
              <Link
                href={activeNode.href}
                className="flex items-center gap-2 mb-5 w-fit transition-opacity duration-200 hover:opacity-70"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: CATEGORY_COLORS[activeNode.category] ?? "#2B6FE8",
                  fontWeight: 600,
                }}
              >
                Ver perfil completo
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between flex-wrap gap-3">
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "4px 12px",
                  borderRadius: "100px",
                  ...(activeNode.status === "completed"
                    ? {
                        border: "1px solid rgba(16,185,129,0.35)",
                        color: "#10b981",
                        background: "rgba(16,185,129,0.08)",
                      }
                    : {
                        border: "1px solid rgba(245,181,68,0.35)",
                        color: "#F5B544",
                        background: "rgba(245,181,68,0.08)",
                      }),
                }}
              >
                {activeNode.status === "completed" ? "Consolidado" : "En evolución"}
              </span>

              <div className="flex items-center gap-2">
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "9px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#6B7A95",
                  }}
                >
                  Sinergias:
                </p>
                {activeNode.relatedIds.map((rid) => {
                  const rel = timelineData.find((n) => n.id === rid);
                  if (!rel) return null;
                  const rColor =
                    CATEGORY_COLORS[rel.category] ?? "#2B6FE8";
                  const rRgb = hexToRgb(rColor);
                  return (
                    <button
                      key={rid}
                      onClick={() => setActiveId(rid)}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "9px",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        padding: "3px 9px",
                        borderRadius: "6px",
                        color: rColor,
                        background: `rgba(${rRgb},0.1)`,
                        border: `1px solid rgba(${rRgb},0.3)`,
                        cursor: "pointer",
                        transition: "background 0.15s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = `rgba(${rRgb},0.22)`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = `rgba(${rRgb},0.1)`;
                      }}
                    >
                      {rel.category}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
