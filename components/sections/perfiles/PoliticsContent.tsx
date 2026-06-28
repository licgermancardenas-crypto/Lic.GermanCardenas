"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const CYAN = "#00A3C4";

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
    category: "GEOSPATIAL INTELLIGENCE",
    title: "Inteligencia Territorial",
    subtitle: "Cartografía Electoral Avanzada",
    description:
      "El territorio es la primera dimensión de análisis. Proceso datos históricos electorales a nivel de circuito y mesa para construir mapas de comportamiento que revelan lo que las encuestas no capturan: la granularidad real del voto.",
    points: [
      "Procesamiento espacial a nivel de circuito y mesa de votación",
      "Identificación algorítmica de zonas de oportunidad (voto blando)",
      "Análisis de bastiones estructurales y volatilidad histórica",
      "Optimización de rutas críticas de canvassing por densidad electoral",
      "Modelos de proyección territorial por radio censal",
    ],
    tech: ["Python", "GeoPandas", "PostGIS", "QGIS", "Leaflet.js", "Folium"],
  },
  {
    number: "02",
    category: "NLP & SOCIAL INTELLIGENCE",
    title: "Procesamiento de Lenguaje Natural",
    subtitle: "Social Listening & Narrative Engineering",
    description:
      "La conversación digital es un flujo de señal entre el ruido. Extraigo patrones de agenda, mido sentimiento en tiempo real y detecto anomalías antes de que se conviertan en crisis. El testeo de narrativas elimina la intuición del proceso.",
    points: [
      "Modelado de tópicos (LDA / BERTopic) sobre corpus digitales masivos",
      "Análisis de sentimiento y emoción por segmento demográfico",
      "Detección de anomalías y puntos de inflexión narrativa",
      "A/B Testing automatizado de mensajes para microsegmentos",
      "Monitoreo multicanal: Twitter/X, Instagram, YouTube, noticias",
    ],
    tech: ["Python", "spaCy", "BERTopic", "Transformers", "Spark", "Kafka"],
  },
  {
    number: "03",
    category: "BI & WAR ROOM SYSTEMS",
    title: "Business Intelligence Electoral",
    subtitle: "Sistemas de Comando y Control",
    description:
      "Un War Room sin datos en tiempo real es una sala de reuniones con mapas viejos. Diseño sistemas de BI que integran múltiples fuentes en un dashboard operativo único, permitiendo decisiones en horas, no en días.",
    points: [
      "Dashboards de tracking integrado: cuantitativo + digital + presupuestario",
      "Consolidación de demografía, intención de voto y métricas de campaña",
      "Alertas automáticas por umbrales críticos de KPIs electorales",
      "Control presupuestario por distrito y tipo de acción",
      "Reportes ejecutivos automatizados para equipo de conducción",
    ],
    tech: ["Power BI", "Metabase", "SQL", "FastAPI", "React", "Recharts"],
  },
  {
    number: "04",
    category: "CAMPAIGN OPERATIONS",
    title: "Eficiencia Operativa de Campaña",
    subtitle: "Metodología de Ciclo Rápido",
    description:
      "Tratar al electorado como un bloque homogéneo es la fuente principal de ineficiencia. La ventaja competitiva no está en el presupuesto: está en la velocidad del ciclo de inteligencia. Capturar, procesar, segmentar y actuar antes que el adversario.",
    points: [
      "Segmentación científica del electorado por comportamiento y actitud",
      "Modelado predictivo de participación y probabilidad de voto",
      "Optimización de asignación de recursos por retorno electoral esperado",
      "Protocolos de respuesta ante crisis narrativa en tiempo real",
      "Medición de impacto de acciones de campaña sobre intención de voto",
    ],
    tech: ["Scikit-learn", "XGBoost", "SQL", "Python", "Airflow", "dbt"],
  },
];

function CapabilityBlock({ cap, index }: { cap: Capability; index: number }) {
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
              color: CYAN,
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
                    background: CYAN,
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
                  background: "rgba(0,163,196,0.06)",
                  border: `1px solid rgba(0,163,196,0.18)`,
                  color: CYAN,
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

export function PoliticsContent() {
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
              color: CYAN,
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
                background: CYAN,
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
            CUATRO VECTORES.
            <br />
            <span style={{ color: CYAN }}>UN SISTEMA.</span>
          </h2>
        </motion.div>

        {/* Capabilities */}
        <div>
          {capabilities.map((cap, i) => (
            <CapabilityBlock key={cap.number} cap={cap} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
