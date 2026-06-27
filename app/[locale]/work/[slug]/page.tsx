import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink, ArrowRight } from "lucide-react";
import { ScreenshotGallery } from "@/components/ScreenshotGallery";

const ERP_SHOTS = [
  "1766963976633.jpg",
  "exec-overview-v3.png",
  "dashboard-home.png",
  "ingresos-wallets-v2.png",
  "ingresos-tarjetas-v2.png",
  "comportamiento-v2.png",
  "desempeno-vendedor-v3.png",
  "prod-horaria-v3.png",
  "prod-local-v2.png",
  "ticket-detail-v2.png",
  "tickets-v2.png",
  "cont-balance.png",
  "cont-cuentas.png",
  "cont-libromayor.png",
  "cont-asientos.png",
  "exec-overview-v2.png",
  "exec-overview.png",
  "desempeno-vendedor-v2.png",
  "desempeno-vendedor.png",
  "prod-horaria-v2.png",
  "1768431718219.jpg",
  "1768431718570.jpg",
  "1767014183778.jpg",
  "1767014183865.jpg",
  "1766963976611.jpg",
].map((f) => `/screenshots/atlas-erp/${f}`);

const ERP_IMPACT_IMAGES = [
  { src: "/screenshots/atlas-erp/mockup-tablet.png", caption: "Stock & Inventario — módulo de gestión en tiempo real" },
  { src: "/screenshots/atlas-erp/mockup-farmacia.png", caption: "Deploy en punto de venta — farmacia" },
  { src: "/screenshots/atlas-erp/mockup-licorera.png", caption: "Gestión de stock — rubro bebidas" },
  { src: "/screenshots/atlas-erp/mockup-farmacia-2.png", caption: "Resumen ejecutivo en sala de ventas" },
  { src: "/screenshots/atlas-erp/mockup-farmacia-3.png", caption: "Vista operativa — dashboard en caja" },
];

type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  subtitle: string;
  accent: string;
  isHackathon?: boolean;
  hackathonName?: string;
  screenshots: string[];
  url: string;
  context: string;
  challenge: string;
  role: string;
  approach: string;
  stack: { name: string; why: string }[];
  decisions: { decision: string; reasoning: string }[];
  results: string;
  learned: string;
  metrics: { value: string; description: string }[];
  impactImages?: { src: string; caption: string }[];
  nextSlug: string;
  nextTitle: string;
};

const cases: Record<string, CaseStudy> = {
  "atlas-one-erp": {
    slug: "atlas-one-erp",
    title: "Atlas One ERP",
    category: "Enterprise · SaaS B2B",
    subtitle: "ERP modular para PyMEs argentinas con inteligencia de negocio integrada.",
    accent: "#06b6d4",
    screenshots: ERP_SHOTS,
    url: "https://www.atlaones-erp.com",
    context:
      "El mercado de software para PyMEs en Argentina está dominado por soluciones costosas e inflexibles (SAP, Oracle) o por herramientas desconectadas (planillas, WhatsApp, Excel). El 87% de las PyMEs no tiene acceso a Business Intelligence real. Atlas One nació para cerrar esa brecha con un ERP modular pensado para equipos sin perfil técnico.",
    challenge:
      "Diseñar un sistema que sea suficientemente robusto para reemplazar 5+ herramientas simultáneamente (CRM, inventario, finanzas, reportes, comunicaciones) pero tan simple que el dueño de un comercio pueda operarlo sin capacitación. El desafío técnico fue construir sobre una arquitectura modular donde cada cliente activa solo los módulos que necesita, sin pagar por lo que no usa.",
    role:
      "Fui el único responsable técnico del proyecto: diseño de la arquitectura, desarrollo full-stack (React + FastAPI + PostgreSQL), integración del módulo de IA (Groq API para el CRM), diseño de la experiencia de usuario y despliegue en producción. También lideré las conversaciones comerciales con los primeros clientes para validar el modelo.",
    approach:
      "Arquitectura de microservicios desacoplados con un API Gateway central. El módulo CRM usa Groq + Llama para generar briefings diarios automáticos analizando el comportamiento histórico de cada cliente. Los dashboards ejecutivos se construyeron con visualizaciones custom en React que actualizan en tiempo real via WebSockets. La base de datos usa PostgreSQL con Row Level Security para multitenancy seguro.",
    stack: [
      { name: "React + TypeScript", why: "SPA con estado complejo; TypeScript previene errores en el modelo de datos financiero" },
      { name: "FastAPI (Python)", why: "Velocidad de desarrollo + ecosistema de análisis de datos nativo (Pandas, NumPy)" },
      { name: "PostgreSQL + Neon", why: "RLS para multitenancy, extensiones geoespaciales y serverless para escalar sin ops" },
      { name: "Groq API (Llama)", why: "Latencia ultralow (<200ms) para el briefing de IA en tiempo real, clave para UX" },
      { name: "Vercel + Render", why: "Deploy automático, preview URLs para demos con clientes sin infra dedicada" },
    ],
    decisions: [
      {
        decision: "Módulos independientes vs. sistema monolítico",
        reasoning: "Un monolito es más simple al inicio pero obliga a los clientes a pagar por todo. La modularidad permite pricing granular y adopción incremental, que es el modelo de ventas correcto para PyMEs.",
      },
      {
        decision: "IA en el CRM desde el día 1",
        reasoning: "El CRM sin IA es solo un glorificado Excel. El briefing diario automatizado es la feature que mueve la aguja en demos: cuando el cliente ve que el sistema le dice 'Ana García no compra hace 18 días, escribile hoy', el valor se vuelve inmediato.",
      },
      {
        decision: "No construir todo, integrar lo que existe",
        reasoning: "Para pagos usé Mercado Pago. Para emails, Resend. Para WhatsApp, la API oficial. El valor está en la orquestación e inteligencia, no en reinventar infraestructura de mensajería.",
      },
    ],
    results:
      "Sistema en uso activo. El módulo CRM con IA fue el diferenciador clave en todas las demos — los clientes lo adoptan primero y desde allí escalan a otros módulos. La tasa de apertura de campañas creadas desde el CRM supera el 68%, significativamente por encima del 20-25% del mercado. El tiempo de análisis gerencial se redujo en ~40% según feedback de los primeros clientes.",
    learned:
      "Subestimé el tiempo de onboarding. La UX puede ser perfecta pero si el cliente no entiende cómo importar sus datos de Excel al sistema, abandonan. Dediqué la segunda iteración completa a construir importadores inteligentes. También aprendí que en PyMEs, quien decide la compra y quien usa el sistema son personas distintas: el dueño decide, el empleado usa. El producto tiene que convencer a ambos.",
    metrics: [
      { value: "2.847", description: "Leads gestionados en el CRM" },
      { value: "68.4%", description: "Tasa de apertura de campañas" },
      { value: "−40%", description: "Tiempo en análisis gerencial" },
    ],
    impactImages: ERP_IMPACT_IMAGES,
    nextSlug: "atlas-nexus",
    nextTitle: "Atlas Nexus →",
  },
  "atlas-nexus": {
    slug: "atlas-nexus",
    title: "Atlas Nexus",
    category: "SaaS B2B · Hackathon Winner 🏆",
    subtitle: "Plataforma de inteligencia comercial para comercios independientes con POS nativo.",
    accent: "#F59E0B",
    isHackathon: true,
    hackathonName: "[NOMBRE HACKATHON] 2025",
    screenshots: ["/screenshots/atlas-nexus.png"],
    url: "https://trackintegracionpagos.vercel.app/",
    context:
      "Los comercios independientes (kioscos, ferreterías, indumentaria, farmacias) generan datos valiosos en cada venta pero no tienen forma de interpretarlos. El POS registra transacciones, pero nadie les dice qué significa que el martes venden 3x más que el lunes, o que el 57% de sus clientes no vuelve después de la primera compra.",
    challenge:
      "Construir en 72 horas de hackathon un producto que: (1) integre con POS real (Clover API), (2) genere inteligencia accionable sin requerir configuración del usuario, y (3) tenga una UX tan simple que el dueño del comercio lo entienda en 30 segundos. Todo esto siendo competitivos contra 200+ equipos con más recursos.",
    role:
      "Lead developer del equipo: arquitectura completa, integración con la API de Clover, pipeline de análisis de datos, diseño del dashboard y del módulo de IA, y co-presentación del pitch final ante el jurado. También fui el que propuso el diferenciador estratégico: el 'briefing del día' generado por IA.",
    approach:
      "Priorización brutal desde el minuto 0: primero la integración POS (sin datos reales el producto es una demo vacía), segundo el briefing de IA (el gancho emocional en el pitch), tercero los dashboards (evidencia de profundidad). En 72 horas no hay tiempo para refactoring; el código es funcional, no perfecto. El MVP priorizó el demo path sobre la robustez.",
    stack: [
      { name: "React + Vite", why: "Setup en minutos; Vite es 10x más rápido que CRA/webpack para iteración en hackathon" },
      { name: "FastAPI", why: "Endpoints levantados en horas; tipado con Pydantic previene bugs de integración con Clover API" },
      { name: "Clover REST API", why: "El único POS con API pública bien documentada para el mercado objetivo" },
      { name: "Groq (Llama 3.1)", why: "El briefing de IA requiere < 500ms de latencia para el demo; Groq es el único que lo garantiza" },
      { name: "Neon (PostgreSQL)", why: "Serverless, setup instantáneo, free tier suficiente para el hackathon y el demo" },
    ],
    decisions: [
      {
        decision: "Dados reales en el demo vs. datos mockeados",
        reasoning: "La mayoría de los equipos usan datos falsos en sus demos. Decidimos conectar con datos reales de una cuenta Clover de prueba con transacciones reales. Eso hizo que cuando el jurado preguntó '¿esto funciona de verdad?', la respuesta fue sí.",
      },
      {
        decision: "Briefing de IA como feature central, no como extra",
        reasoning: "Todos tienen dashboards. El briefing — 'Hoy: 183 clientes no volvieron. Tu meta está al 167%. KANJI es tu producto estrella.' — es el momento WOW de la demo. Construimos el producto alrededor de ese momento.",
      },
      {
        decision: "UX para el comerciante, no para el analista",
        reasoning: "Sin jerga técnica, sin configuración, sin tutoriales. El sistema funciona solo. Eso fue lo que el jurado destacó: 'se nota que pensaron en el usuario real, no en un usuario ideal'.",
      },
    ],
    results:
      "Primer lugar en [NOMBRE HACKATHON] entre 200+ equipos. El jurado destacó la integración POS real, la IA práctica y la UX orientada al usuario no técnico. El proyecto evolucionó post-hackathon hacia un SaaS en desarrollo con interés de un banco para distribución.",
    learned:
      "Los hackathons enseñan a priorizar con brutalidad. Aprendí que el 80% del impacto viene del 20% de las features, y que identificar ese 20% correcto es la habilidad más difícil. También: el pitch es tan importante como el producto. Equipos con productos mejores que el nuestro no ganaron porque no supieron vender la historia.",
    metrics: [
      { value: "$2.5M", description: "Revenue modelado en demo live" },
      { value: "57.2%", description: "Tasa de retorno de clientes" },
      { value: "1°", description: "Puesto entre 200+ equipos" },
    ],
    nextSlug: "agronova",
    nextTitle: "AgroNova →",
  },
  agronova: {
    slug: "agronova",
    title: "AgroNova",
    category: "AgriTech · GIS · Enterprise",
    subtitle: "Plataforma geoespacial de escala nacional para la agroindustria argentina.",
    accent: "#10b981",
    screenshots: ["/screenshots/agronova.png"],
    url: "https://agro-nova-plataforma.vercel.app/",
    context:
      "Argentina es el tercer exportador mundial de soja y uno de los mayores productores agropecuarios del mundo. Sin embargo, el sector opera con una digitalización mínima: los datos están fragmentados en silos (clima, precios, logística, stock de agroquímicos) sin ninguna capa de inteligencia que los conecte. AgroNova nació para cambiar eso.",
    challenge:
      "Construir una plataforma geoespacial que integre en tiempo real datos de 24 provincias argentinas, procese alertas climáticas a nivel de radio censal, modele redes de distribución de agroquímicos y visualice el portfolio comercial con mapas coropléticos — todo en un sistema modular de 27 capas GIS que escale sin degradarse.",
    role:
      "Full-stack developer y responsable de la arquitectura GIS: diseño del modelo de datos PostGIS, implementación de las 27 capas geoespaciales, pipeline ETL para fuentes de datos externas (INDEC, SMN, BCRA), desarrollo del frontend Next.js con Leaflet y construcción de la API FastAPI con endpoints geoespaciales.",
    approach:
      "La clave fue separar las capas de datos (PostGIS) de las capas de visualización (Leaflet/Next.js). Cada módulo GIS es independiente y comparte una base de datos unificada via API. El sistema usa CRS POSGAR para precisión geoespacial en Argentina. Las alertas climáticas se procesan via cron jobs que consultan el SMN y actualizan las capas en tiempo real.",
    stack: [
      { name: "Next.js 15 + React 19", why: "App Router para rutas dinámicas por provincia; React Server Components para el primer render del mapa" },
      { name: "PostGIS (Neon)", why: "Funciones espaciales nativas (ST_Within, ST_Intersects) sin capa intermedia; esencial para 27 capas GIS" },
      { name: "FastAPI + GeoPandas", why: "Análisis geoespacial en Python; GeoPandas integra nativamente con el ecosistema GIS (Fiona, Shapely)" },
      { name: "Leaflet + GeoJSON", why: "Mapas interactivos performantes; más liviano que MapBox para 24 provincias simultáneas" },
      { name: "QGIS (pre-procesamiento)", why: "Procesamiento inicial de shapefiles del INDEC, normalización de CRS y validación de topología" },
    ],
    decisions: [
      {
        decision: "PostGIS vs. solución de mapas externa (MapBox, Google Maps)",
        reasoning: "Las soluciones externas cobran por request y no permiten consultas espaciales complejas server-side. PostGIS corre en la misma base de datos que el resto del sistema, permite joins espaciales arbitrariamente complejos y tiene costo cero a escala.",
      },
      {
        decision: "Arquitectura modular de 27 capas independientes",
        reasoning: "El cliente activa las capas que necesita. Esto también permite iterar capas independientemente sin afectar el sistema completo. La separación entre capas de datos y capas de visualización fue la decisión arquitectural más importante.",
      },
      {
        decision: "CRS POSGAR para el sistema de coordenadas",
        reasoning: "WGS84 (el estándar global) introduce distorsiones significativas en áreas grandes como Argentina. POSGAR (EPSG:5347) es el sistema oficial del IGN argentino y garantiza precisión a nivel de radio censal.",
      },
    ],
    results:
      "Plataforma en producción con 3.387 clientes activos. El módulo de alertas climáticas detectó 2.571 conflictos de uso de suelo en el primer trimestre. El portfolio cubre las 24 provincias con datos actualizados. El sistema modela más de 200.000 envíos anuales de agroquímicos para optimizar rutas de distribución.",
    learned:
      "El mayor aprendizaje fue en performance geoespacial: las primeras versiones de las consultas PostGIS tardaban 8-12 segundos para polígonos complejos. La solución fue usar índices GIST, simplificar geometrías con ST_Simplify para la visualización (no para el análisis) y cachear los resultados de consultas frecuentes. De 12 segundos a 200ms.",
    metrics: [
      { value: "3.387", description: "Clientes activos en plataforma" },
      { value: "ARS 14.2B", description: "Revenue modelado en portfolio" },
      { value: "2.571", description: "Conflictos de suelo detectados" },
    ],
    nextSlug: "lapd",
    nextTitle: "LAPD Crime Analytics →",
  },
  lapd: {
    slug: "lapd",
    title: "LAPD Crime Analytics",
    category: "Research · Data Analytics",
    subtitle: "Análisis de 1 millón de registros policiales de Los Ángeles con rigor metodológico.",
    accent: "#8b5cf6",
    screenshots: ["/screenshots/lapd.png"],
    url: "https://lapd-data-crime.vercel.app/dashboard",
    context:
      "El LAPD publica abiertamente sus datos de crimen desde 2020. Son más de 1 millón de registros con fechas, ubicaciones, tipos de delito, información demográfica del sospechoso y estado de resolución. El problema es que están en formato CSV crudo, sin ninguna herramienta para explorarlos.",
    challenge:
      "Transformar 1M+ de registros tabulares en un sistema de análisis interactivo que permita descubrir patrones espaciales, temporales y demográficos. El desafío metodológico fue la normalización de categorías — el LAPD usa 120+ tipos de crimen con nomenclaturas inconsistentes — y el georreferenciamiento de las ubicaciones.",
    role:
      "Analista de datos y desarrollador completo: diseño del pipeline ETL, análisis exploratorio de datos (EDA), normalización de categorías, desarrollo del dashboard Next.js, implementación de visualizaciones D3.js y despliegue en producción.",
    approach:
      "Pipeline en 3 etapas: (1) Ingesta y limpieza en Python/Pandas — normalización de fechas, coordenadas, categorías y valores nulos; (2) Análisis y feature engineering — agregaciones por zona, hora, tipo de crimen y demografía; (3) API Next.js que sirve los datos pre-procesados con filtros dinámicos. El módulo de Arrests es un análisis separado sobre el sub-dataset de detenciones.",
    stack: [
      { name: "Python + Pandas", why: "ETL robusto para 1M+ filas; las operaciones vectorizadas de Pandas son 100x más rápidas que loops" },
      { name: "Next.js + TypeScript", why: "Dashboard con filtros complejos y estado compartido; TypeScript obligatorio para la complejidad del schema" },
      { name: "D3.js", why: "Las visualizaciones personalizadas (mapas de calor, treemaps, líneas de tiempo) no existen en librerías genéricas" },
      { name: "Vercel", why: "Deployment instantáneo con edge functions para los endpoints de filtros dinámicos" },
      { name: "GeoJSON + Leaflet", why: "Visualización de crímenes geo-referenciados por zona; ligero y performante para 100k+ puntos con clustering" },
    ],
    decisions: [
      {
        decision: "Pre-procesar vs. procesar en tiempo real",
        reasoning: "Con 1M+ registros, las consultas en tiempo real sobre el CSV crudo son inaceptablemente lentas. Decidí pre-procesar las agregaciones más comunes (por hora, día, zona, tipo) y servirlas desde endpoints pre-calculados. Las consultas complejas usan la API pero con datos ya normalizados.",
      },
      {
        decision: "Módulo de Arrests como sección separada",
        reasoning: "Los datos de arrestos tienen una estructura diferente al reporte de crímenes (incluyen demografía del arrestado). Integrarlos en el dashboard principal lo hubiese complicado innecesariamente. Un módulo separado permite análisis específicos sin contaminar el análisis de crímenes.",
      },
      {
        decision: "Normalización de 120+ categorías en 8 macro-categorías",
        reasoning: "El LAPD usa una taxonomía inconsistente con 120+ tipos de crimen. Sin normalización, el análisis por tipo es inútil. Definí 8 macro-categorías (Violento, Propiedad, Drogas, Armas, Tráfico, Personas, Fraude, Otro) con reglas explícitas de asignación documentadas.",
      },
    ],
    results:
      "Dashboard en producción en Vercel con acceso público. El análisis macro reveló que los crímenes violentos representan el 26.2% del total con una tendencia creciente, que el horario pico es 12-14h (no la noche como sugiere el imaginario popular), y que la tasa de resolución del 20.1% varía significativamente por tipo de crimen.",
    learned:
      "Los datos abiertos no son datos limpios. Dediqué el 60% del tiempo al ETL y solo el 40% a las visualizaciones. También aprendí que las decisiones metodológicas (cómo normalizar categorías, qué hacer con valores nulos) son tanto o más importantes que el código: cambian las conclusiones. La documentación de esas decisiones es parte del trabajo.",
    metrics: [
      { value: "1M+", description: "Registros procesados y normalizados" },
      { value: "20.1%", description: "Tasa de resolución de casos LAPD" },
      { value: "26.2%", description: "Proporción de crímenes violentos" },
    ],
    nextSlug: "atlas-one-erp",
    nextTitle: "Atlas One ERP →",
  },
};

export async function generateStaticParams() {
  return Object.keys(cases).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = cases[slug];
  if (!c) return {};
  return {
    title: c.title,
    description: c.subtitle,
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const c = cases[slug];
  if (!c) notFound();

  return (
    <div className="min-h-screen bg-[#0A0E1A]">
      {/* Back nav */}
      <div className="sticky top-0 z-50 bg-[#0A0E1A]/90 backdrop-blur-md border-b border-[#1F2937]">
        <div className="container-custom h-14 flex items-center justify-between">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 text-sm text-[#6B7689] hover:text-[#B8C1D1] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al portfolio
          </Link>
          <a
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: c.accent }}
          >
            Ver live
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div className="container-custom py-10 md:py-20 w-full max-w-5xl mx-auto">
        {/* Hero */}
        <div className="mb-10 sm:mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#6B7689] text-xs font-mono select-none">━━━</span>
            <span className="text-[#6B7689] text-xs font-mono uppercase tracking-widest">
              {c.category}
            </span>
          </div>
          <h1
            className="font-serif text-[#F5F7FA] leading-tight mb-4"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 400 }}
          >
            {c.title}
          </h1>
          <div className="text-[#1F2937] text-xs mb-5 font-mono select-none">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
          <p className="text-[#B8C1D1] text-lg md:text-xl leading-relaxed max-w-2xl">{c.subtitle}</p>
          {c.isHackathon && (
            <div
              className="inline-flex items-center gap-3 mt-6 px-5 py-3 rounded-lg border"
              style={{ borderColor: "#F59E0B40", backgroundColor: "#F59E0B08", borderStyle: "dashed" }}
            >
              <span>🏆</span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#F59E0B]">
                Proyecto Ganador · {c.hackathonName}
              </span>
            </div>
          )}
        </div>

        {/* Screenshots */}
        <ScreenshotGallery
          screenshots={c.screenshots}
          title={c.title}
          url={c.url}
          accent={c.accent}
        />

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#1F2937]">
          {c.metrics.map((m, i) => (
            <div key={i}>
              <div
                className="font-mono leading-none mb-3"
                style={{ fontSize: "clamp(24px, 3.5vw, 48px)", color: c.accent }}
              >
                {m.value}
              </div>
              <div className="border-t border-[#1F2937] pt-2">
                <p className="text-[11px] text-[#6B7689] uppercase tracking-wider font-mono">{m.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Content sections */}
        <div className="space-y-14">
          {[
            { label: "Contexto", content: c.context },
            { label: "El desafío", content: c.challenge },
            { label: "Mi rol", content: c.role },
            { label: "Aproximación", content: c.approach },
          ].map(({ label, content }) => (
            <section key={label}>
              <h2 className="text-[#F5F7FA] font-semibold text-base mb-4 flex items-center gap-3">
                <span className="w-4 h-px inline-block" style={{ backgroundColor: c.accent }} />
                {label}
              </h2>
              <p className="text-[#B8C1D1] leading-relaxed">{content}</p>
            </section>
          ))}

          {/* Stack deep dive */}
          <section>
            <h2 className="text-[#F5F7FA] font-semibold text-base mb-5 flex items-center gap-3">
              <span className="w-4 h-px inline-block" style={{ backgroundColor: c.accent }} />
              Stack — por qué cada tecnología
            </h2>
            <div className="space-y-3">
              {c.stack.map((s) => (
                <div key={s.name} className="flex gap-4 p-4 rounded-lg bg-[#0F1419] border border-[#1F2937]">
                  <span
                    className="flex-shrink-0 text-sm font-mono font-semibold min-w-[160px]"
                    style={{ color: c.accent }}
                  >
                    {s.name}
                  </span>
                  <span className="text-[#B8C1D1] text-sm leading-relaxed">{s.why}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Key decisions */}
          <section>
            <h2 className="text-[#F5F7FA] font-semibold text-base mb-5 flex items-center gap-3">
              <span className="w-4 h-px inline-block" style={{ backgroundColor: c.accent }} />
              Decisiones clave
            </h2>
            <div className="space-y-5">
              {c.decisions.map((d, i) => (
                <div key={i} className="border-l-2 pl-5" style={{ borderColor: c.accent + "50" }}>
                  <p className="text-[#F5F7FA] font-medium mb-2">{d.decision}</p>
                  <p className="text-[#B8C1D1] text-sm leading-relaxed">{d.reasoning}</p>
                </div>
              ))}
            </div>
          </section>

          {[
            { label: "Resultados", content: c.results },
            { label: "Qué aprendí", content: c.learned },
          ].map(({ label, content }) => (
            <section key={label}>
              <h2 className="text-[#F5F7FA] font-semibold text-base mb-4 flex items-center gap-3">
                <span className="w-4 h-px inline-block" style={{ backgroundColor: c.accent }} />
                {label}
              </h2>
              <p className="text-[#B8C1D1] leading-relaxed">{content}</p>
            </section>
          ))}

          {/* Impact images */}
          {c.impactImages && c.impactImages.length > 0 && (
            <section>
              <h2 className="text-[#F5F7FA] font-semibold text-base mb-6 flex items-center gap-3">
                <span className="w-4 h-px inline-block" style={{ backgroundColor: c.accent }} />
                Impacto y soluciones visuales
              </h2>

              {/* Tablet hero — full width */}
              <div className="mb-4 rounded-xl overflow-hidden border border-[#1F2937] relative" style={{ aspectRatio: "16/9" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.impactImages[0].src}
                  alt={c.impactImages[0].caption}
                  className="w-full h-full object-contain"
                  style={{ backgroundColor: "#060810" }}
                />
              </div>
              <p className="text-[#6B7689] text-xs font-mono mb-6 text-center tracking-wider">
                {c.impactImages[0].caption}
              </p>

              {/* 2-col grid for context photos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {c.impactImages.slice(1).map((img, i) => (
                  <div key={i} className="space-y-2">
                    <div className="rounded-lg overflow-hidden border border-[#1F2937] relative" style={{ aspectRatio: "4/3" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img.src}
                        alt={img.caption}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-[#6B7689] text-[10px] font-mono tracking-wide leading-snug">
                      {img.caption}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Next case */}
        <div className="mt-20 pt-10 border-t border-[#1F2937] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <p className="text-[#6B7689] text-xs font-mono uppercase tracking-widest mb-1">
              Siguiente caso
            </p>
            <p className="text-[#F5F7FA] font-semibold">{c.nextTitle}</p>
          </div>
          <Link
            href={`/${locale}/work/${c.nextSlug}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm transition-all hover:-translate-y-0.5"
            style={{ backgroundColor: c.accent }}
          >
            Ver caso
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
