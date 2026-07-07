"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, BarChart2, Terminal } from "lucide-react";

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

type ExpItem = {
  company: string;
  role: string;
  period: string;
  end: string;
  location: string;
  bullets: string[];
  impacts: { metric: string; label: string }[];
  technologies: string[];
  core_stack: string[];
  methodology: string[];
};

const experiences: ExpItem[] = [
  {
    company: "AgroJuntos",
    role: "Analista BI & Planeamiento Financiero",
    period: "Oct 2025",
    end: "Presente",
    location: "Buenos Aires, Argentina · Remoto",
    bullets: [
      "Diseño y ejecución de análisis de datos comerciales, financieros y operativos sobre clientes, productos y canales; generando insights estratégicos para la toma de decisiones.",
      "Desarrollo y mantenimiento de dashboards ejecutivos en Power BI con KPIs de crecimiento, rentabilidad, riesgo y eficiencia operativa.",
      "Análisis de rentabilidad por tipo de cliente (productor, agroindustria, importador) y canal de venta (B2B directo y e-commerce), identificando oportunidades en pricing y mix de producto.",
      "Automatizaciones en Python (Pandas) para limpieza y consolidación de bases de múltiples fuentes, reduciendo en 35% los tiempos de procesamiento.",
      "Diseño de esquemas SQL relacionales orientados a analítica y CRM interno B2B con herramientas AI-assisted (v0).",
      "Modelos de proyección financiera y forecasting de ventas con análisis de escenarios y sensibilidad de márgenes.",
    ],
    impacts: [
      { metric: "−35%", label: "Tiempo de procesamiento de datos" },
      { metric: "+18%", label: "Precisión en forecasting de ventas" },
      { metric: "4+", label: "Dashboards ejecutivos en producción" },
    ],
    technologies: ["Python", "Pandas", "Power BI", "SQL", "DAX", "v0"],
    core_stack: ["ETL Pipelines", "Financial Modeling", "CRM Design", "KPI Architecture"],
    methodology: ["Agile Analytics", "FP&A", "Scenario Analysis", "BI Reporting"],
  },
  {
    company: "RP de Went S.A.",
    role: "Data & BI Analyst",
    period: "Ene 2025",
    end: "Presente",
    location: "Buenos Aires, Argentina · Freelance",
    bullets: [
      "Relevamiento y estructuración del catálogo digital completo de la cadena (1.479 productos, 125 categorías en 3 niveles jerárquicos) mediante scripts automatizados en Python, con cobertura del 98% en marcas y 99,9% en imágenes.",
      "Scripts de inteligencia competitiva de mercado para relevar precios y catálogos de farmacias competidoras, supermercados y e-commerce, generando benchmarks de pricing por categoría (perfumería, dermocosméticos, cuidado personal).",
      "Pipelines de extracción, limpieza y consolidación de datos transaccionales del POS de 12 sucursales, automatizando ingesta y validación de integridad de datos.",
      "Definición de KPIs comerciales — rotación por SKU y categoría, ticket promedio, ventas por sucursal, estacionalidad, mix de marcas — consolidados en dashboards ejecutivos.",
      "Análisis de rotación de inventario por SKU, sucursal y categoría, identificando productos de movimiento lento y riesgo de vencimiento, con dashboards de control de stock y alertas operativas.",
      "En desarrollo: modelo predictivo de demanda por categoría × sucursal (horizonte 7 y 30 días) para automatizar la planificación de pedidos a droguería.",
    ],
    impacts: [
      { metric: "1.479", label: "Productos catalogados" },
      { metric: "98%", label: "Cobertura de marcas" },
      { metric: "99,9%", label: "Cobertura de imágenes" },
      { metric: "12", label: "Sucursales integradas" },
    ],
    technologies: ["Python", "Pandas", "SQL", "Power BI", "Web Scraping"],
    core_stack: ["Catalog Data Engineering", "Competitive Intelligence", "Inventory Analytics", "POS Data Pipelines"],
    methodology: ["Market Benchmarking", "Demand Forecasting", "Data Quality Assurance", "Retail Analytics"],
  },
  {
    company: "Atomik",
    role: "Analista Comercial & Business Intelligence",
    period: "Ago 2025",
    end: "Oct 2025",
    location: "Buenos Aires, Argentina",
    bullets: [
      "Análisis de performance de ventas de 18 locales y +200 clientes mayoristas, integrando datos de canales retail, franquicias y e-commerce para evaluar rentabilidad, márgenes y rotación.",
      "Dashboards y reportes automatizados en Power BI y Excel con KPIs Sell-In/Sell-Out, ticket promedio, rotación y conversión digital, reduciendo tiempos de análisis en 30%.",
      "Proyecciones de ventas y forecasting de demanda con modelos estadísticos y análisis estacional, mejorando la precisión de planificación en +18%.",
      "Estrategias de mix de producto, promociones y pricing junto a Marketing y Operaciones: +15% rotación general, +10% rentabilidad por línea.",
    ],
    impacts: [
      { metric: "−30%", label: "Tiempos de análisis gerencial" },
      { metric: "+18%", label: "Precisión en forecast de demanda" },
      { metric: "+15%", label: "Rotación general de producto" },
      { metric: "+10%", label: "Rentabilidad por línea" },
    ],
    technologies: ["Power BI", "Excel", "DAX", "SQL", "Python"],
    core_stack: ["Sell-In/Sell-Out KPIs", "Demand Forecasting", "Pricing Strategy", "Multi-channel Analytics"],
    methodology: ["Statistical Modeling", "Retail Analytics", "Product Mix Optimization", "BI Reporting"],
  },
  {
    company: "CyE — 4 Nortes",
    role: "Analista Comercial",
    period: "Abr 2025",
    end: "Ago 2025",
    location: "Buenos Aires, Argentina",
    bullets: [
      "Análisis de performance comercial de 12 locales propios y e-commerce: márgenes, rentabilidad y comportamiento de compra por medio de pago, producto y estacionalidad.",
      "Implementación de CRM + WhatsApp Business API para segmentación y contacto de clientes mayoristas y minoristas con ofertas personalizadas (+15% ventas).",
      "Estrategia de retargeting multicanal (WhatsApp + email marketing) para promociones estacionales (+12% rotación de stock).",
      "Automatización de reportes de ventas y cash flows diarios via macros Excel, reduciendo en 30% los tiempos de procesamiento.",
      "Análisis de estructura de costos por punto de venta: −10% en gastos de abastecimiento y almacenamiento.",
    ],
    impacts: [
      { metric: "+15%", label: "Ventas por CRM segmentado" },
      { metric: "+12%", label: "Rotación de stock" },
      { metric: "−30%", label: "Tiempo en reportes de ventas" },
      { metric: "−10%", label: "Gastos de abastecimiento" },
    ],
    technologies: ["Excel VBA", "WhatsApp API", "Power BI", "CRM Tools", "Python"],
    core_stack: ["CRM Automation", "Sales Reporting", "Cash Flow Modeling", "E-commerce Analytics"],
    methodology: ["Segmented Outreach", "Retargeting Multicanal", "Process Automation", "Cost Analysis"],
  },
  {
    company: "Grupo Dietrich",
    role: "Analista y Asesor Comercial",
    period: "Sep 2024",
    end: "Mar 2025",
    location: "Buenos Aires, Argentina",
    bullets: [
      "Gestión, limpieza y clasificación de +20.000 leads mensuales desde web, redes, WhatsApp y Salesforce mediante procesos ETL para generar bases depuradas y accionables.",
      "Modelos de scoring y segmentación para asignación de leads por sucursal, producto y perfil crediticio (+15% tasa de conversión).",
      "Análisis de cartera activa y vencida de planes de ahorro y financiamientos, diseñando estrategias de reactivación (+10% contratos recuperados).",
      "Dashboards Power BI y Excel con KPIs de conversión, tiempo de respuesta, origen de lead y rentabilidad, reduciendo tiempos de análisis en 25%.",
      "Recuperación y reciclaje de leads históricos: +15% en ventas con bajo costo de adquisición.",
    ],
    impacts: [
      { metric: "+15%", label: "Tasa de conversión de leads" },
      { metric: "+10%", label: "Contratos recuperados" },
      { metric: "−25%", label: "Tiempos de análisis gerencial" },
      { metric: "20K+", label: "Leads gestionados mensualmente" },
    ],
    technologies: ["Salesforce", "Power BI", "Excel", "SQL", "Python"],
    core_stack: ["Lead Scoring", "ETL Pipelines", "CRM Analytics", "Portfolio Recovery"],
    methodology: ["ML Scoring Models", "Multi-channel Integration", "BI Reporting", "Lead Lifecycle Management"],
  },
  {
    company: "Wall Street Group",
    role: "Analista Administrativo-Financiero",
    period: "Jun 2023",
    end: "Jul 2024",
    location: "Buenos Aires, Argentina",
    bullets: [
      "Flujos de fondos, presupuestos y estructuras de capital para +10 proyectos inmobiliarios de construcción y renovación, asegurando control del capital invertido.",
      "Modelos financieros y de inversión (ROI, IRR, VAN, payback) estimando capital requerido y retorno para socios e inversores, con margen de error inferior al 5%.",
      "Administración y seguimiento de fondos de inversión, aportes de capital y distribución de utilidades (+8% eficiencia financiera).",
      "Negociación con proveedores de materiales de construcción: −12% en costos totales sin afectar calidad.",
      "Tableros Power BI y Excel con KPIs de rentabilidad, costo/m², tasa de ocupación y ROI.",
    ],
    impacts: [
      { metric: "< 5%", label: "Margen de error en modelos financieros" },
      { metric: "+8%", label: "Eficiencia en gestión de fondos" },
      { metric: "−12%", label: "Costos por negociación proveedores" },
      { metric: "10+", label: "Proyectos inmobiliarios modelados" },
    ],
    technologies: ["Excel VBA", "Power BI", "Financial Modeling", "SQL", "Bloomberg"],
    core_stack: ["DCF Modeling", "IRR/NPV Analysis", "Capital Structure", "Fund Management"],
    methodology: ["Corporate Finance", "Real Estate Valuation", "Scenario Analysis", "Vendor Negotiation"],
  },
  {
    company: "Florida Trading Co.",
    role: "Analista de Ventas y Finanzas",
    period: "Ene 2021",
    end: "Abr 2023",
    location: "Buenos Aires, Argentina",
    bullets: [
      "Performance financiera y comercial de importadora/distribuidora de insumos médicos en canales mayorista, minorista y online.",
      "Cash flow mensual y proyecciones presupuestarias: +15% precisión en forecast y optimización del capital operativo.",
      "Análisis de márgenes y estructura de costos por canal de venta: +10% rentabilidad.",
      "Control de carga de facturas, precios y documentación comercial, garantizando coherencia con el flujo de fondos.",
      "Negociación con proveedores nacionales e internacionales en condiciones de compra, logística y abastecimiento: −8% costos anuales.",
    ],
    impacts: [
      { metric: "+15%", label: "Precisión en forecast mensual" },
      { metric: "+10%", label: "Rentabilidad por canal" },
      { metric: "−8%", label: "Costos anuales vía negociación" },
    ],
    technologies: ["Excel", "Power BI", "SQL", "ERP Systems", "Financial Modeling"],
    core_stack: ["Cash Flow Modeling", "Multi-channel P&L", "Import/Export Analytics", "Margin Analysis"],
    methodology: ["Financial Analysis", "International Negotiation", "Sales Intelligence", "Supply Chain Finance"],
  },
];

// ── Timeline Node — financial glass ──────────────────────────────────────────

function TimelineNode({
  exp,
  active,
  onClick,
}: {
  exp: ExpItem;
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
              fontSize: "9px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: lit ? "#93c5fd" : "#3F4A5F",
              marginBottom: "4px",
              transition: "color 0.3s ease",
            }}
          >
            {exp.period} — {exp.end}
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
              fontSize: "10px",
              color: lit ? "rgba(147,197,253,0.8)" : "#3F4A5F",
              lineHeight: 1.4,
              transition: "color 0.3s ease",
            }}
          >
            {exp.role}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Executive View ────────────────────────────────────────────────────────────

function ExecutiveView({ exp }: { exp: ExpItem }) {
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
          {exp.role}
        </h3>
        <p style={{ fontSize: "16px", color: "#4A8BFF", fontWeight: 500, marginBottom: "10px" }}>
          {exp.company}
        </p>
        <div className="flex flex-wrap gap-4">
          <span className="flex items-center gap-1.5" style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#6B7A95" }}>
            <Calendar style={{ width: "10px", height: "10px" }} />
            {exp.period} → {exp.end}
          </span>
          <span className="flex items-center gap-1.5" style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#6B7A95" }}>
            <MapPin style={{ width: "10px", height: "10px" }} />
            {exp.location}
          </span>
        </div>
      </div>

      {/* Impact chips */}
      <div>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#3F4A5F", marginBottom: "10px" }}>
          // impact_metrics[]
        </p>
        <div className="flex flex-wrap gap-2">
          {exp.impacts.map((imp, i) => (
            <div key={i} className="flex items-center gap-2 rounded-lg px-3 py-1.5" style={{ background: "rgba(43,111,232,0.1)", border: "1px solid rgba(74,139,255,0.22)" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", fontWeight: 700, color: "#7dd3fc", letterSpacing: "-0.02em" }}>
                {imp.metric}
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "rgba(203,213,225,0.6)", letterSpacing: "0.02em" }}>
                {imp.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CV bullets */}
      <div>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#3F4A5F", marginBottom: "10px" }}>
          // responsabilidades[]
        </p>
        <ul className="flex flex-col gap-2.5">
          {exp.bullets.map((b, i) => (
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
        fontSize: "11px",
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

function CodeView({ exp }: { exp: ExpItem }) {
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
        <span className="ml-2" style={{ fontSize: "10px", color: "rgba(255,255,255,0.25)", letterSpacing: "0.08em" }}>
          career_engine.json — {exp.company}
        </span>
      </div>

      <div className="p-5 overflow-x-auto">
        <span style={{ color: B }}>{"{"}</span><br />
        <span style={{ color: K }}>&nbsp;&nbsp;&quot;role&quot;</span><span style={{ color: B }}>: </span><span style={{ color: S }}>&quot;{exp.role}&quot;</span><span style={{ color: B }}>,</span><br />
        <span style={{ color: K }}>&nbsp;&nbsp;&quot;company&quot;</span><span style={{ color: B }}>: </span><span style={{ color: S }}>&quot;{exp.company}&quot;</span><span style={{ color: B }}>,</span><br />
        <span style={{ color: K }}>&nbsp;&nbsp;&quot;period&quot;</span><span style={{ color: B }}>: </span><span style={{ color: P }}>&quot;{exp.period} → {exp.end}&quot;</span><span style={{ color: B }}>,</span><br />
        <span style={{ color: K }}>&nbsp;&nbsp;&quot;location&quot;</span><span style={{ color: B }}>: </span><span style={{ color: S }}>&quot;{exp.location}&quot;</span><span style={{ color: B }}>,</span><br /><br />

        <span style={{ color: C }}>&nbsp;&nbsp;// stack técnico</span><br />
        <span style={{ color: K }}>&nbsp;&nbsp;&quot;technologies&quot;</span><span style={{ color: B }}>: [</span><br />
        <span style={{ color: B }}>&nbsp;&nbsp;&nbsp;&nbsp;</span>{exp.technologies.map((t) => <TechTag key={t} label={t} />)}<br />
        <span style={{ color: B }}>&nbsp;&nbsp;],</span><br />

        <span style={{ color: K }}>&nbsp;&nbsp;&quot;core_stack&quot;</span><span style={{ color: B }}>: [</span><br />
        <span style={{ color: B }}>&nbsp;&nbsp;&nbsp;&nbsp;</span>{exp.core_stack.map((t) => <TechTag key={t} label={t} />)}<br />
        <span style={{ color: B }}>&nbsp;&nbsp;],</span><br />

        <span style={{ color: K }}>&nbsp;&nbsp;&quot;methodology&quot;</span><span style={{ color: B }}>: [</span><br />
        <span style={{ color: B }}>&nbsp;&nbsp;&nbsp;&nbsp;</span>{exp.methodology.map((t) => <TechTag key={t} label={t} />)}<br />
        <span style={{ color: B }}>&nbsp;&nbsp;],</span><br /><br />

        <span style={{ color: C }}>&nbsp;&nbsp;// métricas de impacto</span><br />
        <span style={{ color: K }}>&nbsp;&nbsp;&quot;impact&quot;</span><span style={{ color: B }}>: {"{"}</span><br />
        {exp.impacts.map((imp, i) => {
          const key = imp.label.toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "").slice(0, 24);
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
  const [selected, setSelected] = useState(0);
  const [tab, setTab] = useState<TabType>("executive");
  const exp = experiences[selected];

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
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#6B7A95", marginBottom: "20px" }}>
            ─── Experiencia profesional
          </p>
          <h2 className="font-serif" style={{ fontSize: "clamp(36px, 4vw, 60px)", fontWeight: 400, color: "#F0F4FB", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            5+ años.{" "}<span style={{ fontStyle: "italic" }}>7 empresas.</span>
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
              {experiences.map((e, i) => (
                <TimelineNode key={i} exp={e} active={selected === i} onClick={() => selectExp(i)} />
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
                  <span className="ml-2" style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.06em" }}>
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
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-md"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "10px",
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
                    {tab === "executive" ? <ExecutiveView exp={exp} /> : <CodeView exp={exp} />}
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
