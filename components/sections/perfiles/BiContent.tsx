"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EMERALD = "#10b981";

type Capability = {
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  tech: string[];
};

const capabilities: Capability[] = [
  {
    number: "01",
    category: "DATA ENGINEERING",
    title: "Pipelines de ETL",
    subtitle: "Ingesta y Transformación de Datos",
    description:
      "Ningún dashboard es mejor que su fuente. Diseño pipelines de extracción, transformación y carga que consolidan sistemas transaccionales, planillas y APIs en una única capa de datos confiable, auditable y repetible.",
    points: [
      "Extracción desde ERPs, bases transaccionales y planillas dispersas",
      "Transformaciones versionadas y testeadas (staging → core → marts)",
      "Automatización de refrescos programados y validación de calidad",
      "Documentación de linaje de datos para auditoría y control interno",
      "Orquestación de dependencias entre fuentes heterogéneas",
    ],
    tech: ["SQL", "Power Query", "Python", "dbt", "Azure Data Factory", "SSIS"],
  },
  {
    number: "02",
    category: "DATA MODELING",
    title: "Modelado Relacional",
    subtitle: "Arquitectura de Datos Analítica",
    description:
      "Un modelo de datos mal diseñado condena cualquier reporte a ser lento e inconsistente. Construyo esquemas estrella normalizados para performance, con medidas DAX centralizadas que eliminan la lógica de negocio duplicada entre reportes.",
    points: [
      "Esquemas estrella: tablas de hechos y dimensiones optimizadas",
      "Medidas DAX centralizadas para métricas de negocio consistentes",
      "Relaciones y jerarquías diseñadas para drill-down operativo",
      "Gestión de granularidad y particionado de tablas de hechos grandes",
      "Documentación de diccionario de datos para equipos no técnicos",
    ],
    tech: ["Power BI", "DAX", "Power Pivot", "SQL Server", "Star Schema", "Tabular Editor"],
  },
  {
    number: "03",
    category: "VISUALIZATION & BI",
    title: "Dashboards Ejecutivos",
    subtitle: "Business Intelligence de Producción",
    description:
      "Un dashboard ejecutivo no es un gráfico bonito: es una herramienta de decisión bajo presión de tiempo. Diseño tableros que priorizan jerarquía visual, KPIs financieros accionables y navegación intuitiva para gerencia y directorio.",
    points: [
      "Dashboards financieros: márgenes, EBITDA, cash flow y desvíos vs. presupuesto",
      "Reportes operativos con drill-through a nivel transaccional",
      "Row-Level Security para distribución segura por área o sucursal",
      "Alertas automáticas ante desvíos de KPIs críticos",
      "Publicación y gobierno de reportes en Power BI Service",
    ],
    tech: ["Power BI", "Power BI Service", "RLS", "Excel", "SharePoint", "Teams"],
  },
  {
    number: "04",
    category: "MARGIN INTELLIGENCE",
    title: "Optimización de Márgenes",
    subtitle: "Analítica Orientada a Rentabilidad",
    description:
      "El objetivo final no es reportar el pasado, es identificar dónde se está perdiendo margen hoy. Cruzo datos de costos, precios y volumen para señalar las palancas concretas de mejora en rentabilidad operativa.",
    points: [
      "Análisis de rentabilidad por producto, cliente y canal",
      "Identificación de fugas de margen y costos ocultos",
      "Modelos de sensibilidad ante cambios de precio, costo y mix",
      "Benchmarking de eficiencia operativa entre unidades de negocio",
      "Reportes de seguimiento de iniciativas de reducción de costos",
    ],
    tech: ["Power BI", "Excel", "SQL", "Python", "Pandas", "Control de Gestión"],
  },
];

function CapabilityBlock({ cap }: { cap: Capability }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "64px",
        paddingBottom: "72px",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* LEFT: number + meta */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="lg:col-span-3"
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(72px, 8vw, 112px)",
              fontWeight: 400,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              color: "rgba(255,255,255,0.04)",
              marginBottom: "24px",
            }}
          >
            {cap.number}
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "9px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: EMERALD,
              marginBottom: "12px",
            }}
          >
            {cap.category}
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "rgba(255,255,255,0.3)",
              lineHeight: 1.5,
            }}
          >
            {cap.subtitle}
          </p>
        </motion.div>

        {/* RIGHT: content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: EASE, delay: 0.1 }}
          className="lg:col-span-9 flex flex-col gap-8"
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3.5vw, 52px)",
                fontWeight: 400,
                color: "#FFFFFF",
                lineHeight: 1.05,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              {cap.title}
            </h3>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.78,
                color: "rgba(255,255,255,0.55)",
                maxWidth: "680px",
              }}
            >
              {cap.description}
            </p>
          </div>

          {/* Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {cap.points.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  style={{
                    width: "14px",
                    height: "1px",
                    background: EMERALD,
                    marginTop: "10px",
                    flexShrink: 0,
                  }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    lineHeight: 1.65,
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* Tech chips */}
          <div className="flex flex-wrap gap-2">
            {cap.tech.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "4px 12px",
                  borderRadius: "4px",
                  background: "rgba(16,185,129,0.06)",
                  border: `1px solid rgba(16,185,129,0.18)`,
                  color: EMERALD,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function BiContent() {
  return (
    <section
      style={{
        backgroundColor: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="container-custom pt-20 sm:pt-28 pb-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="mb-4"
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: EMERALD,
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "24px",
                height: "1px",
                background: EMERALD,
              }}
            />
            CAPACIDADES TÉCNICAS
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 72px)",
              fontWeight: 400,
              color: "#FFFFFF",
              lineHeight: 1.0,
              letterSpacing: "0.03em",
              textTransform: "uppercase",
            }}
          >
            DE LOS DATOS CRUDOS
            <br />
            <span style={{ color: EMERALD }}>A LA DECISIÓN.</span>
          </h2>
        </motion.div>

        {/* Capabilities */}
        <div>
          {capabilities.map((cap) => (
            <CapabilityBlock key={cap.number} cap={cap} />
          ))}
        </div>
      </div>
    </section>
  );
}
