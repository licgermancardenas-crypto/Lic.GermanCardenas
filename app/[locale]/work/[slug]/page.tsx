import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink, ArrowRight } from "lucide-react";
import { ScreenshotGallery } from "@/components/ScreenshotGallery";

type Locale = "es" | "en";

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

const ERP_IMPACT_IMAGES: Record<Locale, { src: string; caption: string }[]> = {
  es: [
    { src: "/screenshots/atlas-erp/mockup-tablet.png", caption: "Stock & Inventario — módulo de gestión en tiempo real" },
    { src: "/screenshots/atlas-erp/mockup-farmacia.png", caption: "Deploy en punto de venta — farmacia" },
    { src: "/screenshots/atlas-erp/mockup-licorera.png", caption: "Gestión de stock — rubro bebidas" },
    { src: "/screenshots/atlas-erp/mockup-farmacia-2.png", caption: "Resumen ejecutivo en sala de ventas" },
    { src: "/screenshots/atlas-erp/mockup-farmacia-3.png", caption: "Vista operativa — dashboard en caja" },
  ],
  en: [
    { src: "/screenshots/atlas-erp/mockup-tablet.png", caption: "Stock & Inventory — real-time management module" },
    { src: "/screenshots/atlas-erp/mockup-farmacia.png", caption: "Point-of-sale deployment — pharmacy" },
    { src: "/screenshots/atlas-erp/mockup-licorera.png", caption: "Stock management — beverage retail" },
    { src: "/screenshots/atlas-erp/mockup-farmacia-2.png", caption: "Executive summary on the sales floor" },
    { src: "/screenshots/atlas-erp/mockup-farmacia-3.png", caption: "Operational view — register dashboard" },
  ],
};

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

const content: Record<Locale, Record<string, CaseStudy>> = {
  es: {
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
      impactImages: ERP_IMPACT_IMAGES.es,
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
          decision: "Datos reales en el demo vs. datos mockeados",
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
  },
  en: {
    "atlas-one-erp": {
      slug: "atlas-one-erp",
      title: "Atlas One ERP",
      category: "Enterprise · SaaS B2B",
      subtitle: "Modular ERP for Argentine SMEs with built-in business intelligence.",
      accent: "#06b6d4",
      screenshots: ERP_SHOTS,
      url: "https://www.atlaones-erp.com",
      context:
        "The SME software market in Argentina is dominated by expensive, inflexible solutions (SAP, Oracle) or by disconnected tools (spreadsheets, WhatsApp, Excel). 87% of SMEs have no access to real Business Intelligence. Atlas One was built to close that gap with a modular ERP designed for teams with no technical background.",
      challenge:
        "Design a system robust enough to replace 5+ tools at once (CRM, inventory, finance, reporting, communications) yet simple enough for a shop owner to run without training. The technical challenge was building on a modular architecture where each client activates only the modules it needs, without paying for what it doesn't use.",
      role:
        "I was the sole technical lead on the project: architecture design, full-stack development (React + FastAPI + PostgreSQL), integration of the AI module (Groq API for the CRM), UX design, and production deployment. I also led the early sales conversations with the first clients to validate the model.",
      approach:
        "A decoupled microservices architecture behind a central API Gateway. The CRM module uses Groq + Llama to generate automatic daily briefings by analyzing each client's historical behavior. Executive dashboards were built with custom React visualizations that update in real time via WebSockets. The database uses PostgreSQL with Row Level Security for secure multitenancy.",
      stack: [
        { name: "React + TypeScript", why: "SPA with complex state; TypeScript prevents errors in the financial data model" },
        { name: "FastAPI (Python)", why: "Development speed plus a native data-analysis ecosystem (Pandas, NumPy)" },
        { name: "PostgreSQL + Neon", why: "RLS for multitenancy, geospatial extensions, and serverless to scale without ops overhead" },
        { name: "Groq API (Llama)", why: "Ultra-low latency (<200ms) for the real-time AI briefing — key to the UX" },
        { name: "Vercel + Render", why: "Automatic deploys and preview URLs for client demos, no dedicated infra required" },
      ],
      decisions: [
        {
          decision: "Independent modules vs. a monolithic system",
          reasoning: "A monolith is simpler at first but forces clients to pay for everything. Modularity enables granular pricing and incremental adoption — the right sales model for SMEs.",
        },
        {
          decision: "AI in the CRM from day one",
          reasoning: "A CRM without AI is just a glorified spreadsheet. The automated daily briefing is the feature that moves the needle in demos: once a client sees the system say 'Ana García hasn't bought in 18 days, reach out today,' the value becomes immediate.",
        },
        {
          decision: "Don't build everything — integrate what already exists",
          reasoning: "For payments I used Mercado Pago. For email, Resend. For WhatsApp, the official API. The value is in the orchestration and intelligence, not in reinventing messaging infrastructure.",
        },
      ],
      results:
        "System in active use. The AI-powered CRM module was the key differentiator in every demo — clients adopt it first and scale to other modules from there. Campaigns created from the CRM see an open rate above 68%, well over the market's 20–25%. Management analysis time dropped by roughly 40% according to early client feedback.",
      learned:
        "I underestimated onboarding time. UX can be flawless, but if a client can't figure out how to import their Excel data, they churn. I dedicated the entire second iteration to building smart importers. I also learned that in SMEs, the buyer and the user are different people: the owner decides, the employee operates the system. The product has to convince both.",
      metrics: [
        { value: "2,847", description: "Leads managed in the CRM" },
        { value: "68.4%", description: "Campaign open rate" },
        { value: "−40%", description: "Reduction in management analysis time" },
      ],
      impactImages: ERP_IMPACT_IMAGES.en,
      nextSlug: "atlas-nexus",
      nextTitle: "Atlas Nexus →",
    },
    "atlas-nexus": {
      slug: "atlas-nexus",
      title: "Atlas Nexus",
      category: "SaaS B2B · Hackathon Winner 🏆",
      subtitle: "Commercial intelligence platform for independent retailers with native POS integration.",
      accent: "#F59E0B",
      isHackathon: true,
      hackathonName: "[HACKATHON NAME] 2025",
      screenshots: ["/screenshots/atlas-nexus.png"],
      url: "https://trackintegracionpagos.vercel.app/",
      context:
        "Independent retailers (kiosks, hardware stores, clothing shops, pharmacies) generate valuable data with every sale but have no way to interpret it. The POS records transactions, but nobody tells them that Tuesdays sell 3x more than Mondays, or that 57% of customers never come back after their first purchase.",
      challenge:
        "Build, in 72 hours of hackathon, a product that: (1) integrates with a real POS (Clover API), (2) generates actionable intelligence with zero user configuration, and (3) has a UX simple enough for a shop owner to grasp in 30 seconds — all while competing against 200+ teams with more resources.",
      role:
        "Lead developer for the team: full architecture, Clover API integration, data-analysis pipeline, dashboard and AI module design, and co-presenting the final pitch to the judges. I also proposed the strategic differentiator: the AI-generated 'daily briefing.'",
      approach:
        "Brutal prioritization from minute zero: first the POS integration (without real data the product is an empty demo), second the AI briefing (the emotional hook of the pitch), third the dashboards (proof of depth). In 72 hours there's no time for refactoring — the code is functional, not perfect. The MVP prioritized the demo path over robustness.",
      stack: [
        { name: "React + Vite", why: "Setup in minutes; Vite is 10x faster than CRA/webpack for hackathon iteration" },
        { name: "FastAPI", why: "Endpoints stood up in hours; Pydantic typing prevents integration bugs with the Clover API" },
        { name: "Clover REST API", why: "The only POS with a well-documented public API for the target market" },
        { name: "Groq (Llama 3.1)", why: "The AI briefing needs <500ms latency for the demo; Groq is the only one that guarantees it" },
        { name: "Neon (PostgreSQL)", why: "Serverless, instant setup, free tier was enough for the hackathon and the demo" },
      ],
      decisions: [
        {
          decision: "Real data in the demo vs. mocked data",
          reasoning: "Most teams fake their demo data. We connected to a real Clover test account with real transactions instead. That meant when a judge asked 'does this actually work?', the answer was yes.",
        },
        {
          decision: "AI briefing as the core feature, not an add-on",
          reasoning: "Everyone has dashboards. The briefing — 'Today: 183 customers didn't come back. You're at 167% of goal. KANJI is your top seller.' — is the wow moment of the demo. We built the product around that moment.",
        },
        {
          decision: "UX for the shop owner, not the analyst",
          reasoning: "No technical jargon, no configuration, no tutorials. The system just works. That's what the judges called out: 'you can tell they designed for the real user, not an idealized one.'",
        },
      ],
      results:
        "First place at [HACKATHON NAME] among 200+ teams. Judges highlighted the real POS integration, the practical AI, and the UX built for non-technical users. Post-hackathon, the project evolved into a SaaS in development, with interest from a bank for distribution.",
      learned:
        "Hackathons teach brutal prioritization. I learned that 80% of the impact comes from 20% of the features, and identifying that correct 20% is the hardest skill of all. Also: the pitch matters as much as the product. Teams with better products than ours didn't win because they couldn't sell the story.",
      metrics: [
        { value: "$2.5M", description: "Modeled revenue in the live demo" },
        { value: "57.2%", description: "Customer return rate" },
        { value: "1st", description: "Place among 200+ teams" },
      ],
      nextSlug: "agronova",
      nextTitle: "AgroNova →",
    },
    agronova: {
      slug: "agronova",
      title: "AgroNova",
      category: "AgriTech · GIS · Enterprise",
      subtitle: "Nationwide geospatial platform for Argentina's agribusiness sector.",
      accent: "#10b981",
      screenshots: ["/screenshots/agronova.png"],
      url: "https://agro-nova-plataforma.vercel.app/",
      context:
        "Argentina is the world's third-largest soybean exporter and one of the largest agricultural producers on the planet. Yet the sector runs on minimal digitization: data is fragmented across silos (weather, prices, logistics, agrochemical stock) with no intelligence layer connecting them. AgroNova was built to change that.",
      challenge:
        "Build a geospatial platform that integrates real-time data from Argentina's 24 provinces, processes weather alerts down to the census-tract level, models agrochemical distribution networks, and visualizes the commercial portfolio with choropleth maps — all within a modular 27-layer GIS system that scales without degrading.",
      role:
        "Full-stack developer and GIS architecture lead: PostGIS data model design, implementation of the 27 geospatial layers, ETL pipeline for external data sources (INDEC, SMN, BCRA), the Next.js frontend with Leaflet, and the FastAPI backend with geospatial endpoints.",
      approach:
        "The key was separating the data layers (PostGIS) from the visualization layers (Leaflet/Next.js). Each GIS module is independent and shares a unified database via API. The system uses the POSGAR CRS for geospatial accuracy in Argentina. Weather alerts are processed via cron jobs that query Argentina's national weather service (SMN) and update the layers in real time.",
      stack: [
        { name: "Next.js 15 + React 19", why: "App Router for per-province dynamic routes; React Server Components for the map's first render" },
        { name: "PostGIS (Neon)", why: "Native spatial functions (ST_Within, ST_Intersects) with no middle layer — essential for 27 GIS layers" },
        { name: "FastAPI + GeoPandas", why: "Geospatial analysis in Python; GeoPandas integrates natively with the GIS ecosystem (Fiona, Shapely)" },
        { name: "Leaflet + GeoJSON", why: "Performant interactive maps; lighter than MapBox for 24 provinces at once" },
        { name: "QGIS (pre-processing)", why: "Initial processing of INDEC shapefiles, CRS normalization, and topology validation" },
      ],
      decisions: [
        {
          decision: "PostGIS vs. an external maps solution (MapBox, Google Maps)",
          reasoning: "External solutions charge per request and don't allow complex server-side spatial queries. PostGIS runs in the same database as the rest of the system, supports arbitrarily complex spatial joins, and costs nothing extra at scale.",
        },
        {
          decision: "Modular architecture with 27 independent layers",
          reasoning: "Clients activate only the layers they need. This also allows iterating on layers independently without affecting the whole system. Separating data layers from visualization layers was the single most important architectural decision.",
        },
        {
          decision: "POSGAR CRS for the coordinate system",
          reasoning: "WGS84 (the global standard) introduces significant distortion over large areas like Argentina. POSGAR (EPSG:5347) is the official system of Argentina's National Geographic Institute (IGN) and guarantees accuracy down to the census-tract level.",
        },
      ],
      results:
        "Platform in production with 3,387 active clients. The weather-alert module detected 2,571 land-use conflicts in the first quarter. The portfolio covers all 24 provinces with up-to-date data. The system models more than 200,000 annual agrochemical shipments to optimize distribution routes.",
      learned:
        "The biggest lesson was geospatial performance: the first versions of the PostGIS queries took 8–12 seconds for complex polygons. The fix was using GIST indexes, simplifying geometries with ST_Simplify for visualization (not for analysis), and caching frequent query results. From 12 seconds down to 200ms.",
      metrics: [
        { value: "3,387", description: "Active clients on the platform" },
        { value: "ARS 14.2B", description: "Modeled portfolio revenue" },
        { value: "2,571", description: "Land-use conflicts detected" },
      ],
      nextSlug: "lapd",
      nextTitle: "LAPD Crime Analytics →",
    },
    lapd: {
      slug: "lapd",
      title: "LAPD Crime Analytics",
      category: "Research · Data Analytics",
      subtitle: "Analysis of 1 million Los Angeles police records with methodological rigor.",
      accent: "#8b5cf6",
      screenshots: ["/screenshots/lapd.png"],
      url: "https://lapd-data-crime.vercel.app/dashboard",
      context:
        "The LAPD has published its crime data openly since 2020 — more than 1 million records with dates, locations, offense types, suspect demographics, and case status. The problem: it's all raw CSV, with no tool to explore it.",
      challenge:
        "Turn 1M+ tabular records into an interactive analysis system that surfaces spatial, temporal, and demographic patterns. The methodological challenge was category normalization — the LAPD uses 120+ crime types with inconsistent naming — and geocoding the locations.",
      role:
        "Data analyst and full developer: ETL pipeline design, exploratory data analysis (EDA), category normalization, Next.js dashboard development, D3.js visualization implementation, and production deployment.",
      approach:
        "A 3-stage pipeline: (1) Ingestion and cleaning in Python/Pandas — normalizing dates, coordinates, categories, and null values; (2) Analysis and feature engineering — aggregations by zone, hour, crime type, and demographics; (3) A Next.js API serving the pre-processed data with dynamic filters. The Arrests module is a separate analysis over the arrests sub-dataset.",
      stack: [
        { name: "Python + Pandas", why: "Robust ETL for 1M+ rows; Pandas' vectorized operations are 100x faster than loops" },
        { name: "Next.js + TypeScript", why: "Dashboard with complex filters and shared state; TypeScript is a must given the schema's complexity" },
        { name: "D3.js", why: "The custom visualizations (heatmaps, treemaps, timelines) don't exist in off-the-shelf libraries" },
        { name: "Vercel", why: "Instant deployment with edge functions for the dynamic-filter endpoints" },
        { name: "GeoJSON + Leaflet", why: "Visualizing geo-referenced crimes by zone; lightweight and performant for 100k+ points with clustering" },
      ],
      decisions: [
        {
          decision: "Pre-process vs. process in real time",
          reasoning: "With 1M+ records, real-time queries over the raw CSV are unacceptably slow. I chose to pre-process the most common aggregations (by hour, day, zone, type) and serve them from pre-computed endpoints. Complex queries use the API, but against already-normalized data.",
        },
        {
          decision: "Arrests module as a separate section",
          reasoning: "Arrest data has a different structure from the crime reports (it includes the arrestee's demographics). Folding it into the main dashboard would have complicated it unnecessarily. A separate module allows for specific analysis without contaminating the crime analysis.",
        },
        {
          decision: "Normalizing 120+ categories into 8 macro-categories",
          reasoning: "The LAPD uses an inconsistent taxonomy with 120+ crime types. Without normalization, analysis by type is useless. I defined 8 macro-categories (Violent, Property, Drugs, Weapons, Traffic, Persons, Fraud, Other) with explicit, documented assignment rules.",
        },
      ],
      results:
        "Dashboard live on Vercel with public access. The macro-level analysis revealed that violent crime accounts for 26.2% of the total with an upward trend, that peak hours are 12–2pm (not nighttime, as popular imagination suggests), and that the 20.1% resolution rate varies significantly by crime type.",
      learned:
        "Open data isn't clean data. I spent 60% of the time on ETL and only 40% on visualizations. I also learned that methodological decisions (how to normalize categories, what to do with null values) matter as much as the code, if not more — they change the conclusions. Documenting those decisions is part of the job.",
      metrics: [
        { value: "1M+", description: "Records processed and normalized" },
        { value: "20.1%", description: "LAPD case resolution rate" },
        { value: "26.2%", description: "Share of violent crime" },
      ],
      nextSlug: "atlas-one-erp",
      nextTitle: "Atlas One ERP →",
    },
  },
};

const labels: Record<Locale, Record<string, string>> = {
  es: {
    backToPortfolio: "Volver al portfolio",
    viewLive: "Ver live",
    awardWinning: "Proyecto Ganador",
    context: "Contexto",
    challenge: "El desafío",
    role: "Mi rol",
    approach: "Aproximación",
    stackTitle: "Stack — por qué cada tecnología",
    decisionsTitle: "Decisiones clave",
    results: "Resultados",
    learned: "Qué aprendí",
    impactTitle: "Impacto y soluciones visuales",
    nextCase: "Siguiente caso",
    viewCase: "Ver caso",
  },
  en: {
    backToPortfolio: "Back to portfolio",
    viewLive: "View live",
    awardWinning: "Award-winning project",
    context: "Context",
    challenge: "The Challenge",
    role: "My Role",
    approach: "Approach",
    stackTitle: "Stack — why each technology",
    decisionsTitle: "Key Decisions",
    results: "Results",
    learned: "What I Learned",
    impactTitle: "Impact & Visual Solutions",
    nextCase: "Next case",
    viewCase: "View case",
  },
};

function resolveLocale(locale: string): Locale {
  return locale === "en" ? "en" : "es";
}

export async function generateStaticParams() {
  return Object.keys(content.es).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const c = content[resolveLocale(locale)][slug];
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
  const { slug, locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const c = content[locale][slug];
  const t = labels[locale];
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
            {t.backToPortfolio}
          </Link>
          <a
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: c.accent }}
          >
            {t.viewLive}
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
                {t.awardWinning} · {c.hackathonName}
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
            { label: t.context, content: c.context },
            { label: t.challenge, content: c.challenge },
            { label: t.role, content: c.role },
            { label: t.approach, content: c.approach },
          ].map(({ label, content: sectionContent }) => (
            <section key={label}>
              <h2 className="text-[#F5F7FA] font-semibold text-base mb-4 flex items-center gap-3">
                <span className="w-4 h-px inline-block" style={{ backgroundColor: c.accent }} />
                {label}
              </h2>
              <p className="text-[#B8C1D1] leading-relaxed">{sectionContent}</p>
            </section>
          ))}

          {/* Stack deep dive */}
          <section>
            <h2 className="text-[#F5F7FA] font-semibold text-base mb-5 flex items-center gap-3">
              <span className="w-4 h-px inline-block" style={{ backgroundColor: c.accent }} />
              {t.stackTitle}
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
              {t.decisionsTitle}
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
            { label: t.results, content: c.results },
            { label: t.learned, content: c.learned },
          ].map(({ label, content: sectionContent }) => (
            <section key={label}>
              <h2 className="text-[#F5F7FA] font-semibold text-base mb-4 flex items-center gap-3">
                <span className="w-4 h-px inline-block" style={{ backgroundColor: c.accent }} />
                {label}
              </h2>
              <p className="text-[#B8C1D1] leading-relaxed">{sectionContent}</p>
            </section>
          ))}

          {/* Impact images */}
          {c.impactImages && c.impactImages.length > 0 && (
            <section>
              <h2 className="text-[#F5F7FA] font-semibold text-base mb-6 flex items-center gap-3">
                <span className="w-4 h-px inline-block" style={{ backgroundColor: c.accent }} />
                {t.impactTitle}
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
              {t.nextCase}
            </p>
            <p className="text-[#F5F7FA] font-semibold">{c.nextTitle}</p>
          </div>
          <Link
            href={`/${locale}/work/${c.nextSlug}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm transition-all hover:-translate-y-0.5"
            style={{ backgroundColor: c.accent }}
          >
            {t.viewCase}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
