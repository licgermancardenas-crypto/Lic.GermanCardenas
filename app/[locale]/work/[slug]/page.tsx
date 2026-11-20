import { ResponsiveVideo } from "@/components/ResponsiveVideo";
import { textOn } from "@/lib/color";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { ArrowLeft, ExternalLink, ArrowRight, Trophy } from "lucide-react";
import { ScreenshotGallery } from "@/components/ScreenshotGallery";
import { ContactCta } from "@/components/ContactCta";

type Locale = "es" | "en";

const VIDEO_ERP = { src: "/videos/atlas-one-recorrido.mp4", poster: "/videos/atlas-one-recorrido-poster.jpg", width: 1600, height: 900 };

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
    { src: "/screenshots/atlas-erp/mockup-farmacia.png", caption: "Concepto: el panel en el mostrador de una farmacia" },
    { src: "/screenshots/atlas-erp/mockup-licorera.png", caption: "Concepto: gestión de stock en una licorería" },
    { src: "/screenshots/atlas-erp/mockup-farmacia-2.png", caption: "Concepto: resumen ejecutivo en el local" },
    { src: "/screenshots/atlas-erp/mockup-farmacia-3.png", caption: "Concepto: vista operativa en la caja" },
  ],
  en: [
    { src: "/screenshots/atlas-erp/mockup-tablet.png", caption: "Stock & Inventory — real-time management module" },
    { src: "/screenshots/atlas-erp/mockup-farmacia.png", caption: "Concept: the dashboard at a pharmacy counter" },
    { src: "/screenshots/atlas-erp/mockup-licorera.png", caption: "Concept: stock management at a liquor store" },
    { src: "/screenshots/atlas-erp/mockup-farmacia-2.png", caption: "Concept: executive summary in the store" },
    { src: "/screenshots/atlas-erp/mockup-farmacia-3.png", caption: "Concept: operational view at the register" },
  ],
};

const CABA_SHOTS = ["portada.jpg", "mapa-2025.jpg", "mesas.jpg", "gemelo-3d.jpg"].map((f) => `/screenshots/caba/${f}`);

const ZEUS_SHOTS = ["resumen.jpg", "edr.jpg", "alertas.jpg", "en-vivo.jpg"].map((f) => `/screenshots/zeus/${f}`);

const AA_SHOTS = ["portadas.jpg", "apellidos.jpg", "reservas.jpg", "sitio.jpg"].map((f) => `/screenshots/atlas-analytics/${f}`);

const PHANTOM_SHOTS = ["red.jpg", "anillos.jpg", "casos.jpg", "direccion.jpg"].map((f) => `/screenshots/phantom/${f}`);

const SENTINEL_SHOTS = ["inicio.jpg", "mapa.jpg"].map((f) => `/screenshots/sentinel/${f}`);

const YPF_SHOTS = [
  "web-caso.jpg",
  "web-mapa.jpg",
  "web-produccion.jpg",
  "powerbi-tablero.jpg",
  "powerbi-puente.jpg",
  "powerbi-deuda.jpg",
  "excel-resumen.jpg",
  "excel-puente.jpg",
].map((f) => `/screenshots/ypf/${f}`);

const YERBA_SHOTS = [
  "mapa-gis.jpg",
  "mapa-coropletico.jpg",
  "produccion.jpg",
  "consumo-heatmap.jpg",
  "exportaciones.jpg",
  "cadena-productiva.jpg",
  "estacionalidad.jpg",
].map((f) => `/screenshots/yerba-mate/${f}`);

type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  subtitle: string;
  accent: string;
  isHackathon?: boolean;
  hackathonName?: string;
  screenshots: string[];
  /** Sin url = proyecto de cliente sin link público */
  url?: string;
  privateNote?: string;
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
  video?: { src: string; poster: string; width: number; height: number; label: string };
  nextSlug: string;
  nextTitle: string;
};

const content: Record<Locale, Record<string, CaseStudy>> = {
  es: {
    "atlas-one-erp": {
      slug: "atlas-one-erp",
      title: "Atlas One ERP",
      category: "SaaS B2B · Comercio de cercanía",
      subtitle: "El sistema de gestión para kioscos, minimarkets y comercios de cercanía: ventas, stock, compras, facturación y una capa de IA que avisa antes de que falte algo.",
      accent: "#06b6d4",
      screenshots: ERP_SHOTS,
      url: "https://www.atlaones-erp.com",
      video: { ...VIDEO_ERP, label: "Recorrido por el producto: punto de venta, stock, compras, multisucursal, equipo, facturación ARCA e IA predictiva. Datos de demo." },
      context:
        "En la Argentina hay unos 96.000 kioscos y maxikioscos, y miles de autoservicios, pet shops y vinotecas. La mayoría gestiona pegando con cinta un POS, un Excel, un grupo de WhatsApp y una calculadora: nadie ve el costo de ese desorden hasta que falta un producto en la góndola y el cliente se va a otro comercio.",
      challenge:
        "Reemplazar toda esa pila con un solo sistema que el dueño de un comercio pueda usar sin capacitación, a un precio que tenga sentido para un negocio chico: por debajo de los ERP corporativos que exigen consultor y por encima de un POS que solo cobra.",
      role:
        "Cofundador y CEO de Atlas One, junto a Darién Pérez como CTO. Definí el producto y sus módulos, la experiencia de quien atiende el mostrador, la capa de datos e IA predictiva, el modelo de negocio, el pricing y la estrategia comercial, y armé el pitch para la ronda pre-seed.",
      approach:
        "Un único núcleo donde la venta descuenta stock en tiempo real: punto de venta por código de barras con cualquier medio de pago, stock por sucursal con alertas de quiebre, compras a proveedores con recepción de mercadería, empleados con acceso por PIN y permisos a medida, facturación electrónica ARCA con contabilidad de partida doble, y una capa predictiva que anticipa ventas y detecta categorías en riesgo. Todo web, sobre Next.js y Supabase.",
      stack: [
        { name: "Next.js", why: "Una sola aplicación web para el mostrador, el depósito y el dueño, sin instalar nada" },
        { name: "Supabase", why: "Base de datos, autenticación y permisos por usuario y sucursal" },
        { name: "Facturación ARCA", why: "Facturas A, B, C y E y notas de crédito y débito desde el mismo sistema" },
        { name: "Mercado Pago, PedidosYa y Rappi", why: "Integrado con lo que el comercio ya usa, en vez de reinventarlo" },
        { name: "IA predictiva", why: "Proyección de ventas y alertas de categorías en baja, para decidir antes de fin de mes" },
        { name: "Telegram", why: "Notificaciones de ventas al celular del dueño, aunque no esté en el local" },
      ],
      decisions: [
        {
          decision: "Vertical, no genérico",
          reasoning: "Odoo o Tango sirven para todo y por eso necesitan un consultor. Atlas One está pensado para el comercio de cercanía: el mostrador, el código de barras, el quiebre de stock y el proveedor que llega con la mercadería.",
        },
        {
          decision: "La IA tiene que decidir, no decorar",
          reasoning: "Un tablero que muestra lo que ya pasó llega tarde. La capa predictiva proyecta las ventas y avisa qué categoría está cayendo, que es la decisión que el dueño de un comercio toma todos los días.",
        },
        {
          decision: "Un precio entre el POS y el ERP corporativo",
          reasoning: "Suscripción de $25.000 a $50.000 por mes según sucursales y volumen: lo que cuesta un empleado part-time, contra herramientas corporativas que salen entre diez y veinte veces más y exigen implementación.",
        },
      ],
      results:
        "Atlas One funciona en producción y ya lo usan comercios de cercanía. Tiene una demo pública para probarlo, y el próximo paso, que es el objetivo de la ronda pre-seed, es la app móvil nativa para iOS y Android.",
      learned:
        "En un comercio chico, quien decide la compra y quien usa el sistema son personas distintas: el dueño decide, el empleado atiende. El producto tiene que convencer a los dos, y por eso el punto de venta tiene que ser tan rápido como una caja registradora.",
      metrics: [
        { value: "96.000", description: "Kioscos en la Argentina, el primer mercado" },
        { value: "ARCA", description: "Facturación electrónica integrada" },
        { value: "$25–50K", description: "Por mes, entre el POS básico y el ERP corporativo" },
      ],
      impactImages: ERP_IMPACT_IMAGES.es,
      nextSlug: "atlas-nexus",
      nextTitle: "Atlas Nexus →",
    },
    "atlas-nexus": {
      slug: "atlas-nexus",
      title: "Atlas Nexus",
      category: "SaaS B2B · Hackathon Winner",
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
      nextSlug: "yerba-mate-ml",
      nextTitle: "Yerba Mate Intelligence →",
    },
    "yerba-mate-ml": {
      slug: "yerba-mate-ml",
      title: "Yerba Mate Intelligence",
      category: "Data Science · Agroindustria · Freelance",
      subtitle: "Plataforma de inteligencia de mercado para un cliente del sector yerbatero: datos que no se estiman, se verifican.",
      accent: "#22c55e",
      screenshots: YERBA_SHOTS,
      context:
        "Un cliente del sector yerbatero necesitaba una visión consolidada del mercado: producción, consumo, exportaciones, importaciones, precios, competencia y cadena productiva. Los datos públicos existen, pero dispersos entre INYM, INDEC, BCRA y relevamientos de precios, en PDFs mensuales, geoservidores y planillas con cortes incompatibles entre sí.",
      challenge:
        "Construir una única fuente confiable sin caer en el error típico de rellenar huecos para que los gráficos se vean completos. Las trampas eran concretas: el INYM no publica producción por departamento, solo por zona; el consumo per cápita es un dato anual aunque se publique mes a mes; y las exportaciones están tan concentradas que tres destinos explican el 86,3% del volumen.",
      role:
        "Trabajo freelance de punta a punta, en solitario: relevamiento de fuentes, diseño del esquema en PostGIS, 19 pipelines ETL (incluido un scraper de los reportes PDF del INYM), API en FastAPI, frontend Next.js con 12 vistas y mapa GIS, modelos de ML y auditoría automática de datos en CI.",
      approach:
        "Tres capas: (1) Ingesta — scrapers y APIs que cargan series y capas geoespaciales en PostgreSQL/PostGIS, con la fuente registrada por tabla y visible en cada vista; (2) Auditoría — un script en CI valida cada serie nueva antes de mergear: un dato faltante queda como NULL, nunca como relleno, y todo valor estimado se marca visualmente; (3) Análisis — tres modelos desarrollados y validados (SARIMA de producción por zona, SARIMA de consumo interno y un modelo gravitacional de exportaciones) más una segmentación K-means de municipios por perfil productivo.",
      stack: [
        { name: "Next.js + TypeScript", why: "12 vistas con filtros compartidos y Server Components que leen la API sin exponer la base al navegador" },
        { name: "FastAPI", why: "API de datos separada del frontend: el cliente puede consumirla desde otras herramientas sin pasar por la web" },
        { name: "PostgreSQL + PostGIS (Supabase)", why: "Series temporales y capas geoespaciales del INYM en una misma base, con consultas espaciales como ST_Contains" },
        { name: "MapLibre GL", why: "Mapas coropléticos, clusters de 203 secaderos y bases topográfica o satelital sin costo de licencia" },
        { name: "statsmodels + scikit-learn", why: "SARIMA y regresión de panel para los pronósticos; K-means con silhouette para la segmentación de municipios" },
        { name: "GitHub Actions", why: "La auditoría de datos corre sola en cada cambio que toca un ETL: ningún dato inventado llega a producción" },
      ],
      decisions: [
        {
          decision: "\"Sin dato\" antes que un relleno",
          reasoning: "Interpolar o clonar el período anterior hace que un gráfico se vea completo, pero miente. Definí una regla que no se negocia: si falta el dato, la celda dice \"sin dato\". Los valores realmente estimados llevan una marca visual, y cada vista declara de qué fuente sale.",
        },
        {
          decision: "Cambiar el objetivo del modelo cuando el dato no existe",
          reasoning: "La producción por departamento no se publica: el modelo se hizo por zona (6 zonas), después de verificar que cada uno de los 19 departamentos cae entero dentro de una sola. El consumo per cápita es anual, así que el modelo de consumo usa la salida de molino al mercado interno, el único dato mensual real de ese lado de la cadena.",
        },
        {
          decision: "Quedarse con el modelo simple",
          reasoning: "Probé sumar NDVI satelital, lluvia, tipo de cambio y salario real como variables explicativas. Ninguna mejoró el pronóstico. En vez de forzar un modelo más complejo, me quedé con el más simple y documenté los resultados negativos para que nadie los repita.",
        },
        {
          decision: "K-means con 4 grupos, no 3",
          reasoning: "Con 3 grupos el silhouette era apenas mayor (0,48 contra 0,47), pero juntaba en un mismo grupo municipios con perfiles productivos distintos. Elegí 4 porque cada grupo se puede explicar y usar, que es lo que necesita el cliente.",
        },
      ],
      results:
        "Plataforma de 12 vistas sobre 24 años de datos reales y tres modelos desarrollados y validados. El modelo de consumo interno pronostica con un 6,3% de error medio. El de producción por zona queda entre 20% y 30% de error según la zona, razonable para una base puramente estacional. El gravitacional explica el 42% de la variación del comercio entre 20 destinos: sirve para entender la estructura del mercado, no para proyectar volúmenes. Los municipios productores quedaron segmentados en 4 perfiles.",
      learned:
        "Con datos públicos, lo más valioso es decir con precisión qué no se sabe. Los resultados negativos también son resultados: saber que el clima no mejora el pronóstico mensual le ahorra al cliente meses de búsqueda. Y la confianza en un tablero se gana mostrando la fuente y el nivel de certeza de cada número.",
      metrics: [
        { value: "19", description: "Pipelines ETL sobre INYM, INDEC y BCRA" },
        { value: "6,3%", description: "Error medio del modelo de consumo interno" },
        { value: "87", description: "Destinos de exportación analizados" },
      ],
      nextSlug: "atlas-ypf",
      nextTitle: "ATLAS-YPF →",
    },
    "atlas-ypf": {
      slug: "atlas-ypf",
      title: "ATLAS-YPF",
      category: "Finanzas · Energía · Research",
      subtitle: "YPF publicó el mejor trimestre de su historia y el mercado lo vendió. Este caso reconstruye por qué.",
      accent: "#38bdf8",
      screenshots: YPF_SHOTS,
      url: "https://atlas-ypf.vercel.app/ypf-project",
      context:
        "En el segundo trimestre de 2026 YPF reportó su mejor balance: EBITDA ajustado de US$ 2.804M (+149% interanual), margen de 42,7%, shale oil en 212,7 mil barriles diarios y la deuda neta en el mínimo de la serie. Ese mismo día la acción cayó 3,6%.",
      challenge:
        "\"El mercado se equivocó\" es una respuesta cómoda que no resiste los datos. Para explicar el precio había que cruzar fuentes que nunca vienen juntas: los estados contables de la SEC, la producción pozo por pozo de la Secretaría de Energía, el Brent, el riesgo país, la deuda y los balances de Vista y Pampa como comparables, sin que un solo número quedara escrito a mano.",
      role:
        "Proyecto propio de punta a punta: diseño de la pregunta, ingesta de 8 fuentes públicas, modelado financiero y econométrico, y las tres salidas: la web en Next.js, el tablero de Power BI y el libro de Excel.",
      approach:
        "Un pipeline en Python con tres capas separadas: ingesta (una fuente por script, nunca mezcladas), transformación (todo cálculo vive ahí y solo ahí) y exportación (las salidas leen, no calculan). Catorce invariantes revisan cada corrida: que las partes sumen el total, que ningún operador produzca más que el país, que el puente del EBITDA cierre contra lo publicado. Sobre esa base, un modelo de cuatro drivers para el EBITDA, un estudio de eventos para la reacción del mercado y una regresión del riesgo país.",
      stack: [
        { name: "Python + pandas + geopandas", why: "Ingesta y cálculo en un solo lugar; los 14 chequeos frenan el pipeline si algo no cierra" },
        { name: "Next.js + Recharts", why: "La web cuenta el caso en 7 capítulos, con filtros que se guardan en el link para poder compartir una vista exacta" },
        { name: "deck.gl + DEM Copernicus", why: "Mapa 3D de Vaca Muerta sobre el relieve real, con 5.089 pozos, su producción acumulada y su valor actual neto" },
        { name: "Power BI (PBIP + TMDL)", why: "El mismo tablero como proyecto de texto versionable, generado por script: 5 páginas con filtros sincronizados" },
        { name: "Excel sin macros", why: "Para el público financiero: cuatro listas desplegables gobiernan todo y cada número sale de una fórmula auditable" },
        { name: "SEC EDGAR + Secretaría de Energía", why: "Fuentes primarias: 20-F y 6-K para los estados contables, capítulo IV y SESCO para la producción por pozo" },
      ],
      decisions: [
        {
          decision: "Separar el precio del crudo de la gestión",
          reasoning: "Un récord que se explica por el ciclo se paga distinto que uno que se explica por la compañía. El puente del EBITDA descompone el aumento interanual de US$ 1.680M: US$ 851M son precio, el volumen aporta −2M y el costo −28M. El modelo de cuatro drivers (Brent, producción, lifting cost y crudo procesado) explica el 91% de la variación trimestral desde 2022.",
        },
        {
          decision: "Medir la reacción contra el patrón, no contra la intuición",
          reasoning: "Un estudio de eventos sobre cada balance desde 2020, con un modelo de mercado estimado en las 120 ruedas previas, muestra que 16 de 22 reportes tuvieron retorno anormal negativo. La caída del 2T26 (−2,0% anormal) está dentro de lo normal para YPF: no fue un rechazo al récord, fue el comportamiento de siempre.",
        },
        {
          decision: "Un pipeline, tres salidas",
          reasoning: "La web, el Power BI y el Excel leen los mismos datos procesados y ninguno calcula por su cuenta. Así un analista, un gerente y un lector general ven exactamente los mismos números, cada uno en la herramienta que usa.",
        },
        {
          decision: "Chequear que el dato no sea imposible",
          reasoning: "Los 14 invariantes no prueban que un número sea correcto, pero sí detectan cuando es imposible: un operador que produce más que el país, un territorio cuyas cinco dimensiones no suman lo mismo, un puente que no cierra contra la variación publicada.",
        },
      ],
      results:
        "La respuesta está en el puente: casi la mitad de la mejora viene del Brent, el único driver que la compañía no controla y que puede desandarse en un trimestre. Para repetir el EBITDA del 2T26 haría falta un Brent de US$ 106. A eso se suma un descuento estructural: con el Brent controlado, cada 100 puntos básicos de riesgo país le restan 3,3% a la acción. YPF cotiza a 6,7x EV/EBITDA, contra 8,1x de Vista y 7,7x de Pampa.",
      learned:
        "Un número récord no es una conclusión: hay que separar qué parte es ciclo y qué parte es gestión. Y una sola fuente de verdad con varias salidas vale más que tres tableros hechos a mano, porque nadie discute de dónde salió cada cifra.",
      metrics: [
        { value: "US$ 851M", description: "Del aumento interanual del EBITDA explicado por el precio del crudo" },
        { value: "91%", description: "De la variación trimestral del EBITDA explicada por 4 drivers" },
        { value: "16 de 22", description: "Balances desde 2020 con reacción anormal negativa" },
      ],
      nextSlug: "atlas-sentinel",
      nextTitle: "ATLAS SENTINEL →",
    },
    "atlas-sentinel": {
      slug: "atlas-sentinel",
      title: "ATLAS SENTINEL",
      category: "Data Science · Seguridad urbana · GovTech",
      subtitle: "Riesgo delictivo de Buenos Aires por zona y turno, y qué hacer con eso: dónde patrullar, dónde poner cámaras y qué corredores controlar.",
      accent: "#3b82f6",
      screenshots: SENTINEL_SHOTS,
      url: "https://dashboard-two-sepia-39.vercel.app",
      context:
        "La Ciudad de Buenos Aires registró 130.418 delitos en 2025, uno cada cuatro minutos. Las comisarías, las patrullas y las cámaras se ubican por historia y por decisión administrativa, no por dónde y cuándo se concentra el riesgo.",
      challenge:
        "Los datos para decidir mejor existen, pero están repartidos en más de 20 datasets abiertos del portal de la Ciudad que nunca se cruzan entre sí: delitos 2016-2025, colectivos, subte, EcoBici, alumbrado LED, siniestros viales, cámaras, comisarías y censo, cada uno con su propia geometría y su propio corte temporal.",
      role:
        "Proyecto propio de punta a punta: ingesta y normalización de las fuentes, unificación espacio-temporal, modelado, validación, los tres módulos de optimización, la auditoría de equidad y el tablero web en Next.js.",
      approach:
        "Cuatro capas: (0) unificación de todas las fuentes en una grilla hexagonal H3 de resolución 8, por turno; (1) un modelo núcleo de conteo de delitos por hexágono y turno; (2) tres módulos de decisión —patrullas por cobertura máxima, cámaras nuevas sobre la red vial y controles en corredores de acceso—; (3) validación con SHAP, backtesting y holdout espacial, más una auditoría de equidad que mide a qué población cubre cada plan.",
      stack: [
        { name: "Python + GeoPandas + H3", why: "Una grilla de hexágonos de igual área permite cruzar fuentes con geometrías distintas y comparar zonas sin el sesgo del tamaño de cada barrio" },
        { name: "LightGBM (objetivo Poisson)", why: "Se predicen conteos de delitos, que no pueden ser negativos y cuya varianza crece con la media: Poisson respeta esa forma" },
        { name: "SHAP + predicción conformal", why: "Explicar qué empuja el riesgo de cada zona y dar intervalos de incertidumbre honestos, no un número suelto" },
        { name: "PuLP (programación entera)", why: "El módulo de patrullas es un problema de cobertura máxima (MCLP): dónde ubicar k puestos para cubrir el mayor riesgo posible" },
        { name: "Prophet con regímenes", why: "Pronóstico 2026 que trata la pandemia y la caída de 2025 como escalones aparte, elegido por backtesting sobre 84 cortes" },
        { name: "Next.js + Leaflet", why: "Tablero con filtros por turno, tipo de delito y comuna, mapa a pantalla completa y vista 3D, publicado en Vercel" },
      ],
      decisions: [
        {
          decision: "Hexágonos H3 en lugar de barrios",
          reasoning: "Los 48 barrios tienen tamaños y poblaciones muy distintos, y un promedio por barrio esconde lo que pasa adentro. Los 401 hexágonos de igual área permiten cruzar delitos, paradas, luminarias y siniestros sobre la misma unidad.",
        },
        {
          decision: "Medirse contra repetir el pasado, y decirlo",
          reasoning: "Antes de celebrar el modelo lo comparé con la línea de base ingenua. El resultado fue que apenas la mejora: error de 0,290 contra 0,296. El delito porteño es muy persistente. Eso cambió el foco del proyecto: de adivinar mejor a decidir mejor.",
        },
        {
          decision: "Optimizar con los recursos que ya existen",
          reasoning: "Pedir más patrullas es fácil. El módulo A responde otra pregunta: con las mismas 75, ¿cuánto riesgo se cubre si se reubican? La respuesta, 58,7% contra 35,1% de hoy, es un argumento de gestión que no requiere presupuesto nuevo.",
        },
        {
          decision: "Auditar a quién cubre cada plan",
          reasoning: "Maximizar el riesgo cubierto puede dejar afuera a los barrios más vulnerables. Cada plan se mide también por la población que cubre, incluidos los hogares con necesidades básicas insatisfechas y los mayores de 65, para que la eficiencia no tape la equidad.",
        },
      ],
      results:
        "Con las mismas 75 patrullas, reubicadas por riesgo, la cobertura pasa del 35,1% al 58,7%, y 22 de los puestos propuestos reutilizan comisarías existentes. El 58,5% de los delitos ocurre en el 30% del área. Treinta cámaras nuevas bien ubicadas cubrirían 86,4 km de la red vial. El pronóstico 2026 es de 131.911 delitos, un 1,1% más que en 2025.",
      learned:
        "Un modelo que apenas supera a la línea de base no es un fracaso si se cuenta bien: dice que el problema es de decisión, no de predicción. Y en seguridad, la eficiencia sin una mirada de equidad puede reproducir las mismas desigualdades que se quieren resolver.",
      metrics: [
        { value: "+23,6 pts", description: "De cobertura de riesgo con las mismas 75 patrullas" },
        { value: "58,5%", description: "De los delitos ocurre en el 30% del área" },
        { value: "0,290 vs 0,296", description: "Error del modelo contra repetir el pasado" },
      ],
      nextSlug: "phantom-ai",
      nextTitle: "Phantom AI →",
    },
    "phantom-ai": {
      slug: "phantom-ai",
      title: "Phantom AI",
      category: "Data Science · Finanzas · Prevención de lavado",
      subtitle: "Redes neuronales de grafos para encontrar lavado de activos que las reglas tradicionales no ven. Prueba de concepto con datos sintéticos.",
      accent: "#787BF3",
      screenshots: PHANTOM_SHOTS,
      url: "https://fraude-bancario-2026.vercel.app",
      context:
        "Los sistemas de prevención de lavado de los bancos trabajan con reglas: montos, frecuencias, umbrales. Funcionan para la operación aislada, pero el lavado moderno se diseña para esquivarlas: reparte grandes sumas en movimientos chicos a través de cuentas que, una por una, parecen normales.",
      challenge:
        "Detectar el patrón en la red y no en la transacción: anillos cíclicos, pitufeo, agregación de fondos, cuentas de paso, sociedades pantalla, cuentas durmientes reactivadas, redes de mulas y round-tripping. Y hacerlo de una forma que un oficial de cumplimiento pueda usar y explicar ante un regulador.",
      role:
        "Proyecto propio de punta a punta: generador de datos sintéticos, análisis exploratorio del grafo, modelos tabulares y de grafos, explicabilidad, calibración, rastreo de origen, la API en FastAPI y la aplicación de compliance en Next.js.",
      approach:
        "Un banco simulado con 75.000 cuentas y 11,2 millones de transacciones sintéticas con ocho tipologías de lavado alineadas con GAFI. Sobre ese grafo comparé una regresión logística, XGBoost, Node2Vec, GAT y GraphSAGE con las mismas métricas. El mejor modelo se calibró, se explica cuenta por cuenta con GNNExplainer y se completa con un rastreo hacia atrás que remonta el dinero hasta su origen.",
      stack: [
        { name: "PyTorch Geometric", why: "GraphSAGE y GAT aprenden de cada cuenta y de sus vecinos a la vez: la señal del lavado está en las conexiones" },
        { name: "XGBoost + regresión logística", why: "Líneas de base tabulares contra las que medir cuánto aporta el grafo de verdad" },
        { name: "GNNExplainer", why: "Para cada alerta, qué conexiones y qué variables la dispararon: lo que un oficial necesita para justificar un reporte" },
        { name: "Calibración isotónica", why: "Convierte el score en una probabilidad confiable para ordenar la cola de casos" },
        { name: "FastAPI en Render", why: "API pública con la documentación interactiva, para integrar el scoring con otros sistemas" },
        { name: "Next.js", why: "La aplicación de compliance: alertas, casos con vencimiento de reportes, KYC, screening, investigación de redes y gobernanza del modelo" },
      ],
      decisions: [
        {
          decision: "Datos sintéticos, y decirlo en todos lados",
          reasoning: "No existen datos públicos de lavado con etiquetas confiables. Construí un generador reproducible con las ocho tipologías de GAFI y lo declaro en la app, en el README y acá: es una prueba de concepto, no un modelo validado con datos de un banco real.",
        },
        {
          decision: "Medir cuánto aporta el grafo, no suponerlo",
          reasoning: "Antes de usar redes neuronales de grafos comparé contra modelos tabulares con las mismas métricas. GraphSAGE llega a 0,943 de PR-AUC contra 0,882 de XGBoost, y deja escapar el 13% del fraude contra el 21%: el grafo suma, pero la ventaja tiene un tamaño concreto.",
        },
        {
          decision: "Una ablación para entender de dónde sale la señal",
          reasoning: "Node2Vec aprende solo de la forma de la red, sin el comportamiento de cada cuenta, y cae a 0,235. La señal no es topología pura: hace falta combinar estructura y comportamiento, que es exactamente lo que hace GraphSAGE.",
        },
        {
          decision: "Calibrar antes de priorizar",
          reasoning: "El 51% de los scores crudos estaba saturado en 1,0 y entre las mil cuentas más riesgosas había solo cuatro valores distintos: imposible ordenar la cola de casos. Con calibración isotónica el error de calibración bajó de 0,043 a 0,003.",
        },
      ],
      results:
        "GraphSAGE detecta el 90% del fraude exigiendo que 9 de cada 10 alertas sean reales, con un PR-AUC de 0,943. Las cuentas mula son crediticiamente normales y se delatan por sus conexiones: el vecino de una cuenta fraudulenta tiene 2,9 veces más chances de serlo también. El rastreo hacia atrás encontró 149 cuentas de origen, 98 de ellas invisibles para el modelo principal.",
      learned:
        "Un buen score no alcanza: tiene que poder ordenarse, explicarse y defenderse ante un regulador. Y en fraude, la parte más difícil no es encontrar a la mula sino a quien la usa, algo que un clasificador de nodos no ve sin una segunda mirada sobre la red.",
      metrics: [
        { value: "0,943", description: "PR-AUC de GraphSAGE, contra 0,882 de XGBoost" },
        { value: "90%", description: "Del fraude detectado con 9 de cada 10 alertas reales" },
        { value: "13% vs 21%", description: "Fraude no detectado: grafo contra mejor modelo tabular" },
      ],
      nextSlug: "atlas-analytics",
      nextTitle: "Atlas Analytics →",
    },
    "atlas-analytics": {
      slug: "atlas-analytics",
      title: "Atlas Analytics",
      category: "AI Engineering · Datos públicos · Consultora",
      subtitle: "Mi consultora de análisis de datos y geointeligencia política, y el sistema de IA que investiga con fuentes reales antes de escribir una sola línea.",
      accent: "#AA64F8",
      screenshots: AA_SHOTS,
      url: "https://www.atlas-analytics.site",
      context:
        "Atlas Analytics es mi consultora: análisis de datos y geointeligencia territorial y política para campañas, gobiernos y empresas. Varios de los informes territoriales de este portfolio salieron de ahí. La marca necesitaba además una voz pública constante: análisis cortos, con datos abiertos de Argentina, que muestren cómo trabajamos.",
      challenge:
        "Producir contenido de datos todas las semanas con IA sin heredar sus vicios: cifras inventadas, fuentes que no existen, gráficos con números mal escritos y una estética genérica. En una consultora que vende precisión, un error así no es un detalle: es el producto fallando en público.",
      role:
        "Fundador y desarrollador de punta a punta: la arquitectura de agentes, los prompts, el radar de fuentes, el renderer visual, la base de datos, el control de costos y la identidad de la marca.",
      approach:
        "El sistema sigue un orden fijo: investigar, encontrar la oportunidad, definir la estrategia, escribir, diseñar y revisar. Seis agentes con responsabilidades separadas, que no tocan la base de datos y devuelven siempre salidas validadas con esquema. Antes del pipeline corre el radar: barre unas 300 series de fuentes públicas y gratuitas, las convierte en señales, las agrupa y las puntúa de 0 a 100, sin usar modelos.",
      stack: [
        { name: "Next.js 16", why: "La plataforma privada: investigación, estudio de contenido, biblioteca, calendario y panel de consumo de IA" },
        { name: "Claude (Sonnet y Haiku)", why: "Ruteo por tarea: el modelo más capaz donde importa el razonamiento, el más barato para formateo y verificación" },
        { name: "Búsqueda web intercambiable", why: "Proveedores detrás de una interfaz: cambiar de buscador es configuración, no código" },
        { name: "Renderer editorial en SVG", why: "Compone cada placa por código con los valores reales de las fuentes: exacto y a costo cero" },
        { name: "Supabase / Postgres", why: "Almacén con dos implementaciones, JSON local o Postgres, intercambiables con una variable" },
        { name: "Zod", why: "Toda salida de un modelo se valida contra un esquema: sin reintentos por texto mal formado" },
      ],
      decisions: [
        {
          decision: "Los modelos nunca escriben un link",
          reasoning: "El agente de investigación recibe los resultados numerados y solo puede citarlos por número; el código resuelve ese número contra la fuente real. Si cita algo que no existe, se descarta. Una cita inventada es imposible por diseño, no por buena voluntad del modelo.",
        },
        {
          decision: "Clasificar cada afirmación y mostrar lo no verificado",
          reasoning: "Todo se etiqueta como hecho, opinión, interpretación o inferencia. Lo que no se pudo verificar se muestra como \"No verificado\" en vez de esconderse, y cada placa publicada dice si es dato observado o imagen generada.",
        },
        {
          decision: "Un radar sin IA para decidir qué contar",
          reasoning: "Elegir temas no necesita un modelo. El radar puntúa cada señal con ocho factores de peso fijo —novedad, sorpresa, relevancia, calidad del dato, potencial visual y narrativo, si se comparte, actualidad—, gratis y reproducible. Limita cuántas señales aporta cada organismo para que uno solo no se lleve todo, y debajo de 55 puntos ni siquiera se investiga.",
        },
        {
          decision: "Gráficos compuestos por código, no generados",
          reasoning: "Un modelo de imagen cuesta entre 2 y 15 centavos de dólar por pieza y no escribe bien \"1,9%\". El renderer propio pone los números reales en la placa, siempre igual y sin costo. La imagen generada queda solo para fondos y atmósfera.",
        },
      ],
      results:
        "41 carruseles de 11 placas producidos entre agosto y noviembre de 2026 —demografía, reservas del BCRA, delito por provincia, comercio exterior, energía—, cada uno con su ficha de fuentes. Investigar el mismo tema dos veces en 12 horas no cuesta nada, y pedir otro título cuesta unos 400 tokens, no una pasada completa.",
      learned:
        "El control de calidad automático ayuda, pero no reemplaza a una persona: por eso ningún contenido avanza solo hacia la publicación. Y la mejor manera de que una IA no invente datos no es pedírselo, es diseñar el sistema para que no pueda.",
      metrics: [
        { value: "41", description: "Carruseles producidos, 451 placas" },
        { value: "~300", description: "Series públicas por barrido del radar" },
        { value: "0", description: "Links escritos por el modelo" },
      ],
      nextSlug: "zeus",
      nextTitle: "ZEUS · Atlas Control →",
    },
    zeus: {
      slug: "zeus",
      title: "ZEUS · Atlas Control",
      category: "Ciberseguridad · DLP · Producto SaaS",
      subtitle: "Seguridad del endpoint y prevención de fuga de datos para empresas que manejan dinero: detecta ransomware, credenciales filtradas y pendrives sin leer lo que la gente escribe.",
      accent: "#8376F6",
      screenshots: ZEUS_SHOTS,
      privateNote: "Producto propio · demo a pedido",
      context:
        "En una financiera, un broker o un call center, diez o quince personas tocan dinero y datos de clientes todo el día desde las computadoras de la empresa. Una tarjeta copiada, un pendrive o un ransomware alcanzan para un problema serio, y el regulador pregunta qué controles había.",
      challenge:
        "Dar a una empresa chica controles de seguridad de nivel corporativo sin el precio corporativo, y sin caer en el spyware: un agente que el antivirus marca como malware o que el empleado no sabe que existe no es vendible a una empresa regulada ni sirve como prueba.",
      role:
        "Producto propio, de punta a punta: el agente de Windows en Go, la ingesta en tiempo real, la consola web, el modelo de datos multi-tenant, el instalador, el monitoreo de la infraestructura y la auditoría de seguridad.",
      approach:
        "Tres piezas. El agente corre como servicio en cada equipo, sin ventana, y manda eventos y miniaturas por WebSocket seguro. La ingesta autentica cada equipo por su clave —nunca por lo que dice el mensaje—, retransmite en vivo y es la única que escribe en la base. La consola lee con Row Level Security: cada empresa ve solo lo suyo dentro de un mismo proyecto de Supabase. Las alertas críticas llegan por email y Telegram.",
      stack: [
        { name: "Go", why: "El agente: un binario de Windows sin dependencias, que corre como servicio y no se cae si falla la captura de un monitor" },
        { name: "Node.js / TypeScript", why: "La ingesta por WebSocket: autentica equipos, retransmite en vivo y es la única con permiso de escritura" },
        { name: "Next.js", why: "La consola ZEUS: resumen, pantallas, alertas, EDR, equipos y actividad" },
        { name: "Supabase + RLS", why: "Postgres multi-tenant: el aislamiento entre empresas lo garantiza la base, no el código del panel" },
        { name: "WMI y API de Windows", why: "Procesos, red, registro de eventos, dispositivos USB y recursos, leídos desde el sistema operativo" },
        { name: "Render, Vercel y Better Stack", why: "Ingesta, consola y monitoreo de disponibilidad separados, con alertas si algo se cae" },
      ],
      decisions: [
        {
          decision: "Discreto, pero nunca encubierto",
          reasoning: "El agente no muestra ícono ni ventana, y un empleado sin permisos de administrador no lo puede apagar. Pero figura con su nombre real en Servicios y en Programas, y el monitoreo se declara en el contrato. No oculta procesos ni evade el antivirus: eso lo convertiría en stalkerware, lo haría invendible a una empresa regulada y dejaría sin valor la evidencia.",
        },
        {
          decision: "Detectar la fuga sin leer lo que se escribe",
          reasoning: "La detección de credenciales tipeadas reconstruye el texto en memoria, lo clasifica y lo borra en el acto. Solo si era un secreto —una tarjeta, un CBU, un token— emite un aviso con el valor enmascarado y la aplicación donde se tipeó. No es un keylogger: el texto normal nunca sale del equipo.",
        },
        {
          decision: "Detección en el propio equipo, sin tocar la base",
          reasoning: "Los ocho detectores EDR —procesos de riesgo, persistencia, red, ransomware, honeytokens, registro de Windows, anomalías y recursos por proceso— corren en el agente y emiten eventos genéricos. Sumar un detector no requiere migrar la base de datos.",
        },
        {
          decision: "Anomalías aprendidas por equipo, no umbrales fijos",
          reasoning: "Cada agente aprende la línea de base de CPU y red de su propia máquina y solo avisa ante un desvío fuerte y sostenido. Mientras dura la anomalía no actualiza la línea de base, para que un ataque lento no se vuelva normal.",
        },
      ],
      results:
        "El MVP funciona de punta a punta: pantallas en vivo, eventos, alertas, EDR, DLP y un segundo modo de proctoring para entrevistas y exámenes virtuales que corre en el navegador del candidato, con su consentimiento. Se probó en una misma red y entre casas distintas por internet. La auditoría interna del aislamiento multi-tenant cerró sin agujeros abiertos. Hoy está en pausa, listo para el primer cliente; el próximo paso es la firma de código del instalador.",
      learned:
        "En seguridad, la línea ética es parte del producto: lo que separa una herramienta de control de un spyware es exactamente lo que la hace vendible a un cliente serio. Y un agente que corre 24/7 no puede morir por un frame: cada captura falla sola, sin tirar abajo al resto.",
      metrics: [
        { value: "8", description: "Detectores EDR corriendo en el agente" },
        { value: "0", description: "Agujeros abiertos en la auditoría multi-tenant" },
        { value: "2", description: "Modos: empresa y proctoring" },
      ],
      nextSlug: "caba-jefatura",
      nextTitle: "Atlas CABA →",
    },
    "caba-jefatura": {
      slug: "caba-jefatura",
      title: "Atlas CABA · Jefatura de Gobierno",
      category: "Inteligencia electoral · Geoespacial · Cliente",
      subtitle: "Treinta años del voto porteño, de la comuna a la mesa, para una candidatura a Jefe de Gobierno 2027. El hallazgo: el derrumbe del PRO fue de marca, no de territorio.",
      accent: "#00A3C4",
      screenshots: CABA_SHOTS,
      url: "https://atlas-caba-ciudad.vercel.app/gemelo/",
      context:
        "Una candidatura a la Jefatura de Gobierno porteña de 2027 contrató a Atlas Analytics para responder una pregunta: dónde es fuerte y dónde es débil el oficialismo después de 2025. La Ciudad venía de dos años en los que el PRO perdió siete de cada diez votos y la oferta política cambió por completo.",
      challenge:
        "La lectura fácil decía que el PRO se había derrumbado en su núcleo duro. La correlación entre fuerza previa y caída en puntos daba −0,98, pero eso es casi aritmética: si todos pierden la misma proporción, el que tenía más pierde más puntos. Había que separar lo que es geografía de lo que es un artefacto del cálculo, con una base que no existía armada.",
      role:
        "Director del proyecto por Atlas Analytics: diseño de la base, todo el análisis, la cartografía, el gemelo digital, los informes y las herramientas de decisión que se entregaron.",
      approach:
        "Quince elecciones armonizadas de 2013 a 2025 por mesa y circuito, más ocho elecciones a Jefe de Gobierno desde 1996; el censo 2022 llevado de radio a circuito; el padrón separando a los 510.287 extranjeros habilitados; escuelas, 3,6 millones de reclamos ciudadanos, barrios populares y 318.607 parcelas. Cada script declara qué pregunta contesta, qué supone y qué no puede afirmar, y cada hallazgo pasa tres filtros antes de publicarse.",
      stack: [
        { name: "Python · pandas · GeoPandas", why: "474 tablas derivadas y 343 scripts numerados, reproducibles desde el dato de origen" },
        { name: "Inferencia ecológica (King, NNLS, saldo)", why: "Tres caminos con supuestos distintos para estimar cuántos votantes conservó el PRO" },
        { name: "Spearman parcial · Benjamini-Hochberg", why: "Correlaciones por rangos con la clase social descontada y corrección por comparaciones múltiples" },
        { name: "Pruebas de dígitos", why: "17 pruebas sobre las actas de 2015 a 2023 para medir, no suponer, si son confiables" },
        { name: "Gemelo digital (MapLibre y 3D)", why: "La ciudad parcela por parcela para decidir dónde rinde el esfuerzo de campaña" },
        { name: "Chrome headless · Excel", why: "Informes en PDF, libros de Excel y un votómetro para el equipo de campaña" },
      ],
      decisions: [
        {
          decision: "El denominador es el padrón nativo",
          reasoning: "El padrón total de 2023 y 2025 incluye medio millón de extranjeros que votan al 15-20%. Cruzar cualquier variable social contra la participación del padrón total da −0,91 por pura mecánica. Separar nativos de extranjeros fue la diferencia entre un hallazgo y un error.",
        },
        {
          decision: "Medir en votos, no en puntos porcentuales",
          reasoning: "En puntos, el PRO parecía haberse hundido en su núcleo. En votos, retuvo el 29,9% y la retención va de 29,0% a 30,7% en los cinco quintiles de fuerza previa: no hubo refugio territorial. Cambió la conclusión y, con ella, dónde poner la campaña.",
        },
        {
          decision: "Tres métodos para un mismo número",
          reasoning: "El saldo aritmético da 29,9%, la matriz NNLS 29,9% y el modelo de King 29,8%, con un intervalo de 29,4% a 30,0%. Tres caminos con supuestos distintos llegan al mismo lugar. Lo que no sobrevivió esa prueba —de dónde venía el voto libertario— se publicó solo como cota.",
        },
        {
          decision: "Publicar también el resultado negativo",
          reasoning: "Se probaron 73 indicadores censales y tres fuentes independientes para predecir la retención: el R² validado fue −0,05, peor que predecir la media. En vez de forzar un modelo, se dijo: el cambio no se predice con el territorio, y eso también orienta la estrategia.",
        },
      ],
      results:
        "El territorio explica casi todo el nivel del voto —R² validado de 0,935 para el voto a Jorge Macri en 2023— y casi nada del cambio. El derrumbe del PRO fue parejo en toda la ciudad; lo que varía por barrio es quién capturó ese voto. Se entregaron informes por comuna, mesa por mesa, encuesta cruzada con territorio, libros de Excel, un votómetro y el gemelo digital. El análisis de candidatos y el modelo 2027 quedan reservados para el cliente.",
      learned:
        "La trampa más cara en análisis electoral no es un mal modelo: es una lectura correcta en la unidad equivocada. Pasar de puntos a votos, y del padrón total al nativo, cambió las conclusiones más que cualquier técnica sofisticada.",
      metrics: [
        { value: "29,9%", description: "Retención del PRO 2023→2025, con tres métodos" },
        { value: "0,935", description: "R² validado del territorio sobre el nivel de voto" },
        { value: "−0,05", description: "R² validado sobre el cambio: no se predice" },
      ],
      nextSlug: "atlas-one-erp",
      nextTitle: "Atlas One ERP →",
    },
  },
  en: {
    "atlas-one-erp": {
      slug: "atlas-one-erp",
      title: "Atlas One ERP",
      category: "B2B SaaS · Neighbourhood retail",
      subtitle: "The management system for kiosks, minimarkets and neighbourhood stores: sales, stock, purchasing, invoicing and an AI layer that warns before something runs out.",
      accent: "#06b6d4",
      screenshots: ERP_SHOTS,
      url: "https://www.atlaones-erp.com",
      video: { ...VIDEO_ERP, label: "Product walkthrough: point of sale, stock, purchasing, multi-branch, team, ARCA invoicing and predictive AI. Demo data." },
      context:
        "Argentina has about 96,000 kiosks and convenience stores, plus thousands of small supermarkets, pet shops and wine shops. Most of them run on a POS, a spreadsheet, a WhatsApp group and a calculator taped together: nobody sees the cost of that mess until a product is missing from the shelf and the customer walks to another store.",
      challenge:
        "Replacing that whole stack with a single system a shop owner can use without training, at a price that makes sense for a small business: below enterprise ERPs that need a consultant, and above a POS that only takes payments.",
      role:
        "Co-founder and CEO of Atlas One, with Darién Pérez as CTO. I defined the product and its modules, the experience of whoever is at the counter, the data and predictive-AI layer, the business model, pricing and go-to-market, and built the pitch for the pre-seed round.",
      approach:
        "A single core where every sale updates stock in real time: barcode point of sale with any payment method, stock by branch with stock-out alerts, purchasing with goods receipt, staff access by PIN with custom permissions, ARCA electronic invoicing with double-entry accounting, and a predictive layer that forecasts sales and flags categories at risk. Fully web-based, on Next.js and Supabase.",
      stack: [
        { name: "Next.js", why: "One web app for the counter, the stockroom and the owner, with nothing to install" },
        { name: "Supabase", why: "Database, authentication and permissions per user and branch" },
        { name: "ARCA invoicing", why: "Type A, B, C and E invoices and credit and debit notes from the same system" },
        { name: "Mercado Pago, PedidosYa and Rappi", why: "Integrated with what the store already uses instead of reinventing it" },
        { name: "Predictive AI", why: "Sales forecasts and alerts on declining categories, to decide before the month closes" },
        { name: "Telegram", why: "Sales notifications on the owner's phone, even when they're not at the store" },
      ],
      decisions: [
        {
          decision: "Vertical, not generic",
          reasoning: "Odoo or Tango work for everything, which is why they need a consultant. Atlas One is built for neighbourhood retail: the counter, the barcode, the stock-out and the supplier arriving with goods.",
        },
        {
          decision: "AI has to decide, not decorate",
          reasoning: "A dashboard showing what already happened arrives too late. The predictive layer forecasts sales and flags which category is falling, which is the decision a shop owner makes every day.",
        },
        {
          decision: "Priced between a POS and an enterprise ERP",
          reasoning: "A subscription of ARS 25,000 to 50,000 per month depending on branches and volume: the cost of a part-time employee, versus enterprise tools that cost ten to twenty times more and require implementation.",
        },
      ],
      results:
        "Atlas One runs in production and neighbourhood stores already use it. There's a public demo to try it, and the next step — the goal of the pre-seed round — is a native mobile app for iOS and Android.",
      learned:
        "In a small store, the person who buys the system and the person who uses it are different people: the owner decides, the employee serves customers. The product has to win over both, which is why the point of sale has to be as fast as a cash register.",
      metrics: [
        { value: "96,000", description: "Kiosks in Argentina, the first market" },
        { value: "ARCA", description: "Built-in electronic invoicing" },
        { value: "ARS 25–50K", description: "Per month, between a basic POS and an enterprise ERP" },
      ],
      impactImages: ERP_IMPACT_IMAGES.en,
      nextSlug: "atlas-nexus",
      nextTitle: "Atlas Nexus →",
    },
    "atlas-nexus": {
      slug: "atlas-nexus",
      title: "Atlas Nexus",
      category: "SaaS B2B · Hackathon Winner",
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
      nextSlug: "yerba-mate-ml",
      nextTitle: "Yerba Mate Intelligence →",
    },
    "yerba-mate-ml": {
      slug: "yerba-mate-ml",
      title: "Yerba Mate Intelligence",
      category: "Data Science · Agribusiness · Freelance",
      subtitle: "Market intelligence platform for a yerba mate industry client: data that isn't estimated, it's verified.",
      accent: "#22c55e",
      screenshots: YERBA_SHOTS,
      context:
        "A client in the Argentine yerba mate industry needed a consolidated view of the market: production, consumption, exports, imports, prices, competition and the supply chain. The public data exists, but it is scattered across INYM, INDEC, the central bank and retail price surveys — monthly PDFs, geoservers and spreadsheets with incompatible breakdowns.",
      challenge:
        "Build a single trustworthy source without falling into the usual trap of filling gaps so the charts look complete. The pitfalls were concrete: INYM doesn't publish production by department, only by zone; per-capita consumption is an annual figure even though it's published monthly; and exports are so concentrated that three destinations account for 86.3% of volume.",
      role:
        "End-to-end freelance work, solo: source research, PostGIS schema design, 19 ETL pipelines (including a scraper for INYM's PDF reports), a FastAPI backend, a Next.js frontend with 12 views and a GIS map, ML models, and automated data auditing in CI.",
      approach:
        "Three layers: (1) Ingestion — scrapers and APIs load time series and geospatial layers into PostgreSQL/PostGIS, with the source recorded per table and shown on every view; (2) Auditing — a CI script validates every new series before merge: a missing value stays NULL, never a fill-in, and every estimated value is visually flagged; (3) Analysis — three models developed and validated (SARIMA for production by zone, SARIMA for domestic consumption, and a gravity model for exports) plus a K-means segmentation of municipalities by production profile.",
      stack: [
        { name: "Next.js + TypeScript", why: "12 views with shared filters and Server Components that read the API without exposing the database to the browser" },
        { name: "FastAPI", why: "A data API decoupled from the frontend, so the client can consume it from other tools" },
        { name: "PostgreSQL + PostGIS (Supabase)", why: "Time series and INYM geospatial layers in one database, with spatial queries such as ST_Contains" },
        { name: "MapLibre GL", why: "Choropleth maps, clusters of 203 drying plants and topographic or satellite basemaps with no licensing cost" },
        { name: "statsmodels + scikit-learn", why: "SARIMA and panel regression for forecasting; K-means with silhouette scoring for municipality segmentation" },
        { name: "GitHub Actions", why: "The data audit runs automatically on every change to an ETL: no invented value reaches production" },
      ],
      decisions: [
        {
          decision: "\"No data\" over a fill-in",
          reasoning: "Interpolating or copying the previous period makes a chart look complete, but it lies. I set a non-negotiable rule: if the value is missing, the cell says \"no data\". Genuinely estimated values carry a visual flag, and every view states its source.",
        },
        {
          decision: "Change the model's target when the data doesn't exist",
          reasoning: "Production by department isn't published, so the model works by zone (6 zones), after verifying that each of the 19 departments falls entirely within a single zone. Per-capita consumption is annual, so the consumption model uses mill output to the domestic market — the only real monthly series on that side of the chain.",
        },
        {
          decision: "Keep the simple model",
          reasoning: "I tested adding satellite NDVI, rainfall, the exchange rate and real wages as explanatory variables. None improved the forecast. Instead of forcing a more complex model, I kept the simplest one and documented the negative results so nobody repeats them.",
        },
        {
          decision: "K-means with 4 clusters, not 3",
          reasoning: "Three clusters scored a marginally higher silhouette (0.48 vs 0.47) but lumped together municipalities with different production profiles. I chose 4 because every cluster can be explained and acted on, which is what the client needs.",
        },
      ],
      results:
        "A 12-view platform built on 24 years of real data, plus three models developed and validated. The domestic consumption model forecasts with a 6.3% mean error. Production by zone lands between 20% and 30% error depending on the zone — reasonable for a purely seasonal baseline. The gravity model explains 42% of the variation in trade across 20 destinations: useful for understanding market structure, not for projecting volumes. Producing municipalities were segmented into 4 profiles.",
      learned:
        "With public data, the most valuable thing is stating precisely what isn't known. Negative results are results too: knowing that weather doesn't improve the monthly forecast saves the client months of searching. And trust in a dashboard is earned by showing the source and the level of certainty behind every number.",
      metrics: [
        { value: "19", description: "ETL pipelines across INYM, INDEC and the central bank" },
        { value: "6.3%", description: "Mean error of the domestic consumption model" },
        { value: "87", description: "Export destinations analysed" },
      ],
      nextSlug: "atlas-ypf",
      nextTitle: "ATLAS-YPF →",
    },
    "atlas-ypf": {
      slug: "atlas-ypf",
      title: "ATLAS-YPF",
      category: "Finance · Energy · Research",
      subtitle: "YPF posted the best quarter in its history and the market sold it. This case reconstructs why.",
      accent: "#38bdf8",
      screenshots: YPF_SHOTS,
      url: "https://atlas-ypf.vercel.app/ypf-project",
      context:
        "In Q2 2026 YPF reported its best results ever: adjusted EBITDA of US$ 2,804M (+149% year on year), a 42.7% margin, shale oil at 212.7 thousand barrels a day and net debt at the lowest point of the series. The stock fell 3.6% that same day.",
      challenge:
        "\"The market got it wrong\" is a comfortable answer that doesn't survive the data. Explaining the price meant combining sources that never come together: SEC financial statements, well-by-well production from Argentina's Energy Secretariat, Brent, country risk, debt, and Vista and Pampa as comparables — without a single number typed in by hand.",
      role:
        "Personal project end to end: framing the question, ingesting 8 public sources, financial and econometric modelling, and all three outputs — the Next.js website, the Power BI dashboard and the Excel workbook.",
      approach:
        "A Python pipeline with three separate layers: ingestion (one source per script, never mixed), transformation (every calculation lives there and only there) and export (outputs read, they don't compute). Fourteen invariants check every run: parts must add up to the total, no operator can produce more than the country, the EBITDA bridge must reconcile with the reported change. On top of that: a four-driver EBITDA model, an event study of the market reaction, and a country-risk regression.",
      stack: [
        { name: "Python + pandas + geopandas", why: "Ingestion and calculation in one place; the 14 checks stop the pipeline if anything doesn't reconcile" },
        { name: "Next.js + Recharts", why: "The website tells the case in 7 chapters, with filters stored in the URL so an exact view can be shared" },
        { name: "deck.gl + Copernicus DEM", why: "A 3D map of Vaca Muerta on the real terrain, with 5,089 wells, their cumulative output and net present value" },
        { name: "Power BI (PBIP + TMDL)", why: "The same dashboard as a version-controlled text project, generated by script: 5 pages with synced filters" },
        { name: "Macro-free Excel", why: "For a finance audience: four dropdowns drive everything and every number comes from an auditable formula" },
        { name: "SEC EDGAR + Energy Secretariat", why: "Primary sources: 20-F and 6-K for the financials, chapter IV and SESCO for well-level production" },
      ],
      decisions: [
        {
          decision: "Separate the oil price from management",
          reasoning: "A record explained by the cycle is valued differently from one explained by the company. The EBITDA bridge breaks down the US$ 1,680M year-on-year increase: US$ 851M is price, volume contributes −2M and cost −28M. The four-driver model (Brent, production, lifting cost and crude processed) explains 91% of quarterly variation since 2022.",
        },
        {
          decision: "Measure the reaction against the pattern, not intuition",
          reasoning: "An event study of every earnings release since 2020, using a market model estimated over the prior 120 trading days, shows 16 of 22 reports had a negative abnormal return. The Q2 2026 drop (−2.0% abnormal) is normal for YPF: not a rejection of the record, just the usual behaviour.",
        },
        {
          decision: "One pipeline, three outputs",
          reasoning: "The website, Power BI and Excel all read the same processed data and none of them computes on its own. An analyst, a manager and a general reader see exactly the same numbers, each in the tool they use.",
        },
        {
          decision: "Check that the data isn't impossible",
          reasoning: "The 14 invariants don't prove a number is right, but they catch when it's impossible: an operator producing more than the country, a territory whose five breakdowns don't match, a bridge that doesn't reconcile with the reported change.",
        },
      ],
      results:
        "The answer is in the bridge: almost half of the improvement comes from Brent, the one driver the company doesn't control and that can reverse within a quarter. Repeating Q2 2026 EBITDA would take Brent at US$ 106. On top of that sits a structural discount: controlling for Brent, every 100 basis points of country risk takes 3.3% off the stock. YPF trades at 6.7x EV/EBITDA, against 8.1x for Vista and 7.7x for Pampa.",
      learned:
        "A record number isn't a conclusion: you have to separate what is cycle from what is management. And one source of truth with several outputs beats three hand-built dashboards, because nobody argues about where a figure came from.",
      metrics: [
        { value: "US$ 851M", description: "Of the year-on-year EBITDA increase explained by the oil price" },
        { value: "91%", description: "Of quarterly EBITDA variation explained by 4 drivers" },
        { value: "16 of 22", description: "Earnings releases since 2020 with a negative abnormal return" },
      ],
      nextSlug: "atlas-sentinel",
      nextTitle: "ATLAS SENTINEL →",
    },
    "atlas-sentinel": {
      slug: "atlas-sentinel",
      title: "ATLAS SENTINEL",
      category: "Data Science · Urban safety · GovTech",
      subtitle: "Crime risk in Buenos Aires by area and time of day, and what to do about it: where to patrol, where to place cameras and which corridors to control.",
      accent: "#3b82f6",
      screenshots: SENTINEL_SHOTS,
      url: "https://dashboard-two-sepia-39.vercel.app",
      context:
        "The City of Buenos Aires recorded 130,418 crimes in 2025, one every four minutes. Police stations, patrols and cameras are placed by history and administrative decision, not by where and when risk concentrates.",
      challenge:
        "The data to decide better exists, but it's spread across more than 20 open datasets on the City's portal that never get combined: crime 2016-2025, buses, subway, bike share, LED street lighting, road accidents, cameras, police stations and the census, each with its own geometry and time breakdown.",
      role:
        "Personal project end to end: ingesting and normalising the sources, spatio-temporal unification, modelling, validation, the three optimisation modules, the fairness audit and the Next.js web dashboard.",
      approach:
        "Four layers: (0) every source unified on an H3 resolution-8 hexagonal grid, by time of day; (1) a core model counting crimes per hexagon and shift; (2) three decision modules — patrols by maximal coverage, new cameras on the road network and checkpoints on access corridors; (3) validation with SHAP, backtesting and spatial holdout, plus a fairness audit measuring which population each plan covers.",
      stack: [
        { name: "Python + GeoPandas + H3", why: "An equal-area hexagon grid lets sources with different geometries be combined and areas compared without each neighbourhood's size bias" },
        { name: "LightGBM (Poisson objective)", why: "The target is crime counts, which can't be negative and whose variance grows with the mean: Poisson respects that shape" },
        { name: "SHAP + conformal prediction", why: "Explain what drives each area's risk and give honest uncertainty intervals, not a bare number" },
        { name: "PuLP (integer programming)", why: "The patrol module is a maximal covering location problem (MCLP): where to place k posts to cover as much risk as possible" },
        { name: "Prophet with regimes", why: "A 2026 forecast that treats the pandemic and the 2025 drop as separate steps, chosen by backtesting over 84 cutoffs" },
        { name: "Next.js + Leaflet", why: "A dashboard filtered by shift, crime type and district, with a full-screen map and a 3D view, deployed on Vercel" },
      ],
      decisions: [
        {
          decision: "H3 hexagons instead of neighbourhoods",
          reasoning: "The 48 neighbourhoods vary widely in size and population, and a neighbourhood average hides what happens inside. The 401 equal-area hexagons put crime, bus stops, street lights and accidents on the same unit.",
        },
        {
          decision: "Measure against repeating the past, and say so",
          reasoning: "Before celebrating the model I compared it with the naive baseline. It barely beats it: an error of 0.290 versus 0.296. Crime in Buenos Aires is highly persistent. That shifted the project's focus from predicting better to deciding better.",
        },
        {
          decision: "Optimise with the resources that already exist",
          reasoning: "Asking for more patrols is easy. Module A answers a different question: with the same 75, how much risk is covered if they're relocated? The answer, 58.7% versus 35.1% today, is a management case that needs no new budget.",
        },
        {
          decision: "Audit who each plan covers",
          reasoning: "Maximising the risk covered can leave out the most vulnerable neighbourhoods. Each plan is also measured by the population it covers, including households with unmet basic needs and people over 65, so efficiency doesn't hide equity.",
        },
      ],
      results:
        "With the same 75 patrols relocated by risk, coverage rises from 35.1% to 58.7%, and 22 of the proposed posts reuse existing police stations. 58.5% of crime happens in 30% of the area. Thirty well-placed new cameras would cover 86.4 km of the road network. The 2026 forecast is 131,911 crimes, 1.1% more than in 2025.",
      learned:
        "A model that barely beats the baseline isn't a failure if it's told well: it says the problem is one of decisions, not prediction. And in public safety, efficiency without an equity lens can reproduce the very inequalities it's meant to fix.",
      metrics: [
        { value: "+23.6 pts", description: "Of risk coverage with the same 75 patrols" },
        { value: "58.5%", description: "Of crime happens in 30% of the area" },
        { value: "0.290 vs 0.296", description: "Model error versus repeating the past" },
      ],
      nextSlug: "phantom-ai",
      nextTitle: "Phantom AI →",
    },
    "phantom-ai": {
      slug: "phantom-ai",
      title: "Phantom AI",
      category: "Data Science · Finance · Anti-money laundering",
      subtitle: "Graph neural networks to find money laundering that traditional rules miss. A proof of concept on synthetic data.",
      accent: "#787BF3",
      screenshots: PHANTOM_SHOTS,
      url: "https://fraude-bancario-2026.vercel.app",
      context:
        "Banks' anti-money-laundering systems run on rules: amounts, frequencies, thresholds. They work for the isolated transaction, but modern laundering is designed to dodge them, splitting large sums into small movements across accounts that each look normal on their own.",
      challenge:
        "Detect the pattern in the network rather than in the transaction: cycles, structuring, fund aggregation, flow-through accounts, shell companies, reactivated dormant accounts, mule networks and round-tripping — in a way a compliance officer can use and explain to a regulator.",
      role:
        "Personal project end to end: synthetic data generator, exploratory graph analysis, tabular and graph models, explainability, calibration, source tracing, the FastAPI backend and the Next.js compliance application.",
      approach:
        "A simulated bank with 75,000 accounts and 11.2 million synthetic transactions covering eight FATF-aligned laundering typologies. On that graph I compared logistic regression, XGBoost, Node2Vec, GAT and GraphSAGE on the same metrics. The best model was calibrated, explained account by account with GNNExplainer, and complemented with backward tracing that follows the money to its source.",
      stack: [
        { name: "PyTorch Geometric", why: "GraphSAGE and GAT learn from each account and its neighbours at once: the laundering signal lives in the connections" },
        { name: "XGBoost + logistic regression", why: "Tabular baselines to measure how much the graph really adds" },
        { name: "GNNExplainer", why: "For each alert, which connections and variables triggered it: what an officer needs to justify a report" },
        { name: "Isotonic calibration", why: "Turns the score into a reliable probability to rank the case queue" },
        { name: "FastAPI on Render", why: "A public API with interactive documentation, to plug the scoring into other systems" },
        { name: "Next.js", why: "The compliance app: alerts, cases with report deadlines, KYC, screening, network investigation and model governance" },
      ],
      decisions: [
        {
          decision: "Synthetic data, and say so everywhere",
          reasoning: "There's no public laundering data with reliable labels. I built a reproducible generator with the eight FATF typologies and state it in the app, the README and here: it's a proof of concept, not a model validated on a real bank's data.",
        },
        {
          decision: "Measure what the graph adds, don't assume it",
          reasoning: "Before using graph neural networks I compared them with tabular models on the same metrics. GraphSAGE reaches 0.943 PR-AUC versus 0.882 for XGBoost, and lets 13% of fraud slip through versus 21%: the graph helps, by a concrete margin.",
        },
        {
          decision: "An ablation to understand where the signal comes from",
          reasoning: "Node2Vec learns only from the shape of the network, without each account's behaviour, and drops to 0.235. The signal isn't pure topology: it takes structure plus behaviour, which is exactly what GraphSAGE combines.",
        },
        {
          decision: "Calibrate before prioritising",
          reasoning: "51% of the raw scores were saturated at 1.0, and the thousand riskiest accounts shared only four distinct values: the case queue couldn't be ranked. Isotonic calibration cut the calibration error from 0.043 to 0.003.",
        },
      ],
      results:
        "GraphSAGE detects 90% of fraud while requiring 9 in 10 alerts to be real, with a PR-AUC of 0.943. Mule accounts look normal from a credit standpoint and give themselves away through their connections: a fraudulent account's neighbour is 2.9 times more likely to be fraudulent too. Backward tracing found 149 source accounts, 98 of them invisible to the main model.",
      learned:
        "A good score isn't enough: it has to be rankable, explainable and defensible before a regulator. And in fraud, the hardest part isn't finding the mule but whoever uses it — something a node classifier misses without a second look at the network.",
      metrics: [
        { value: "0.943", description: "GraphSAGE PR-AUC, versus 0.882 for XGBoost" },
        { value: "90%", description: "Of fraud detected with 9 in 10 alerts real" },
        { value: "13% vs 21%", description: "Undetected fraud: graph versus best tabular model" },
      ],
      nextSlug: "atlas-analytics",
      nextTitle: "Atlas Analytics →",
    },
    "atlas-analytics": {
      slug: "atlas-analytics",
      title: "Atlas Analytics",
      category: "AI Engineering · Public data · Consultancy",
      subtitle: "My data-analytics and political geo-intelligence consultancy, and the AI system that researches real sources before writing a single line.",
      accent: "#AA64F8",
      screenshots: AA_SHOTS,
      url: "https://www.atlas-analytics.site",
      context:
        "Atlas Analytics is my consultancy: data analysis and territorial and political geo-intelligence for campaigns, governments and companies. Several of the territorial reports in this portfolio came out of it. The brand also needed a steady public voice: short analyses built on Argentine open data that show how we work.",
      challenge:
        "Producing data content every week with AI without inheriting its vices: made-up figures, sources that don't exist, charts with wrongly written numbers and a generic look. For a consultancy that sells precision, that kind of error isn't a detail — it's the product failing in public.",
      role:
        "Founder and end-to-end developer: the agent architecture, prompts, source radar, visual renderer, database, cost control and the brand identity.",
      approach:
        "The system follows a fixed order: research, find the opportunity, set the strategy, write, design and review. Six agents with separate responsibilities that never touch the database and always return schema-validated output. Before the pipeline runs the radar: it sweeps about 300 free public data series, turns them into signals, clusters them and scores them from 0 to 100, without using any model.",
      stack: [
        { name: "Next.js 16", why: "The private platform: research, content studio, library, calendar and AI usage panel" },
        { name: "Claude (Sonnet and Haiku)", why: "Task routing: the most capable model where reasoning matters, the cheapest for formatting and checks" },
        { name: "Swappable web search", why: "Providers behind an interface: switching search engines is configuration, not code" },
        { name: "SVG editorial renderer", why: "Composes each slide in code with the real values from the sources: exact and at zero cost" },
        { name: "Supabase / Postgres", why: "A store with two implementations, local JSON or Postgres, swappable with one variable" },
        { name: "Zod", why: "Every model output is validated against a schema: no retries over malformed text" },
      ],
      decisions: [
        {
          decision: "Models never write a link",
          reasoning: "The research agent receives numbered search results and can only cite them by number; the code resolves that number against the real source. If it cites something that doesn't exist, it's dropped. A made-up citation is impossible by design, not by the model's good will.",
        },
        {
          decision: "Classify every claim and show what's unverified",
          reasoning: "Everything is tagged as fact, opinion, interpretation or inference. What couldn't be verified is shown as \"Not verified\" instead of being hidden, and every published slide says whether it's observed data or a generated image.",
        },
        {
          decision: "An AI-free radar to decide what to cover",
          reasoning: "Choosing topics doesn't need a model. The radar scores each signal on eight fixed-weight factors — novelty, surprise, relevance, data quality, visual and story potential, shareability, timeliness — free and reproducible. It caps how many signals each agency contributes so one source can't take over, and anything under 55 isn't even researched.",
        },
        {
          decision: "Charts composed in code, not generated",
          reasoning: "An image model costs 2 to 15 US cents per piece and can't reliably write \"1.9%\". The custom renderer puts the real numbers on the slide, always the same and at no cost. Generated imagery is kept for backgrounds and atmosphere only.",
        },
      ],
      results:
        "41 eleven-slide carousels produced between August and November 2026 — demographics, central-bank reserves, crime by province, foreign trade, energy — each with its own source sheet. Researching the same topic twice within 12 hours costs nothing, and asking for another headline costs about 400 tokens, not a full run.",
      learned:
        "Automated quality control helps, but it doesn't replace a person: that's why no content moves to publication on its own. And the best way to stop an AI from making up data isn't to ask it not to — it's to design the system so it can't.",
      metrics: [
        { value: "41", description: "Carousels produced, 451 slides" },
        { value: "~300", description: "Public series per radar sweep" },
        { value: "0", description: "Links written by the model" },
      ],
      nextSlug: "zeus",
      nextTitle: "ZEUS · Atlas Control →",
    },
    zeus: {
      slug: "zeus",
      title: "ZEUS · Atlas Control",
      category: "Cybersecurity · DLP · SaaS product",
      subtitle: "Endpoint security and data-loss prevention for companies that handle money: it detects ransomware, leaked credentials and USB drives without reading what people type.",
      accent: "#8376F6",
      screenshots: ZEUS_SHOTS,
      privateNote: "Own product · demo on request",
      context:
        "At a lender, a broker or a call center, ten or fifteen people handle money and customer data all day on company computers. A copied card number, a USB drive or a ransomware attack is enough for serious trouble, and the regulator will ask which controls were in place.",
      challenge:
        "Giving a small company enterprise-grade security controls without the enterprise price, and without sliding into spyware: an agent that antivirus flags as malware, or that employees don't know exists, can't be sold to a regulated company and isn't usable as evidence.",
      role:
        "Own product, end to end: the Go Windows agent, real-time ingestion, the web console, the multi-tenant data model, the installer, infrastructure monitoring and the security audit.",
      approach:
        "Three pieces. The agent runs as a service on each machine, with no window, and sends events and thumbnails over secure WebSocket. The ingestion service authenticates each device by its key — never by what the message claims — relays live, and is the only component that writes to the database. The console reads through Row Level Security: each company sees only its own data inside a single Supabase project. Critical alerts go out by email and Telegram.",
      stack: [
        { name: "Go", why: "The agent: a dependency-free Windows binary that runs as a service and survives a failed monitor capture" },
        { name: "Node.js / TypeScript", why: "WebSocket ingestion: authenticates devices, relays live and holds the only write access" },
        { name: "Next.js", why: "The ZEUS console: overview, screens, alerts, EDR, fleet and activity" },
        { name: "Supabase + RLS", why: "Multi-tenant Postgres: isolation between companies is enforced by the database, not by the panel's code" },
        { name: "WMI and Windows APIs", why: "Processes, network, event log, USB devices and resources, read from the operating system" },
        { name: "Render, Vercel and Better Stack", why: "Separate ingestion, console and uptime monitoring, with alerts if anything goes down" },
      ],
      decisions: [
        {
          decision: "Discreet, but never covert",
          reasoning: "The agent shows no icon or window, and an employee without admin rights can't turn it off. But it appears under its real name in Services and installed programs, and monitoring is declared in the employment contract. It never hides processes or evades antivirus: that would make it stalkerware, unsellable to a regulated company, and would void the evidence.",
        },
        {
          decision: "Detect leaks without reading what's typed",
          reasoning: "Typed-credential detection rebuilds the text in memory, classifies it and wipes it immediately. Only if it was a secret — a card, a bank account number, a token — does it send an alert with the value masked and the app where it was typed. It's not a keylogger: ordinary text never leaves the machine.",
        },
        {
          decision: "Detection on the endpoint, no schema changes",
          reasoning: "The eight EDR detectors — risky processes, persistence, network, ransomware, honeytokens, Windows event log, anomalies and per-process resources — run in the agent and emit generic events. Adding a detector doesn't require a database migration.",
        },
        {
          decision: "Anomalies learned per machine, not fixed thresholds",
          reasoning: "Each agent learns its own machine's CPU and network baseline and only alerts on a strong, sustained deviation. While an anomaly lasts the baseline isn't updated, so a slow attack can't become the new normal.",
        },
      ],
      results:
        "The MVP works end to end: live screens, events, alerts, EDR, DLP, and a second proctoring mode for virtual interviews and exams that runs in the candidate's browser, with their consent. It was tested on the same network and across different homes over the internet. The internal audit of multi-tenant isolation closed with no open holes. It's now paused, ready for its first client; the next step is code-signing the installer.",
      learned:
        "In security, the ethical line is part of the product: what separates a control tool from spyware is exactly what makes it sellable to a serious client. And an agent that runs 24/7 can't die over a single frame: each capture fails on its own without taking the rest down.",
      metrics: [
        { value: "8", description: "EDR detectors running in the agent" },
        { value: "0", description: "Open holes in the multi-tenant audit" },
        { value: "2", description: "Modes: company and proctoring" },
      ],
      nextSlug: "caba-jefatura",
      nextTitle: "Atlas CABA →",
    },
    "caba-jefatura": {
      slug: "caba-jefatura",
      title: "Atlas CABA · Mayoral race",
      category: "Electoral intelligence · Geospatial · Client",
      subtitle: "Thirty years of the Buenos Aires vote, from district down to polling station, for a 2027 mayoral campaign. The finding: PRO's collapse was about the brand, not the territory.",
      accent: "#00A3C4",
      screenshots: CABA_SHOTS,
      url: "https://atlas-caba-ciudad.vercel.app/gemelo/",
      context:
        "A 2027 campaign for Mayor of Buenos Aires hired Atlas Analytics to answer one question: where is the incumbent party strong and where is it weak after 2025. The city was coming off two years in which PRO lost seven in ten votes and the political landscape changed completely.",
      challenge:
        "The easy reading said PRO had collapsed in its stronghold. The correlation between prior strength and the drop in points was −0.98, but that's mostly arithmetic: if everyone loses the same share, whoever had more loses more points. The job was to separate geography from a calculation artifact, on a database that didn't exist yet.",
      role:
        "Project lead for Atlas Analytics: database design, all the analysis, cartography, the digital twin, the reports and the decision tools that were delivered.",
      approach:
        "Fifteen harmonised elections from 2013 to 2025 by polling station and circuit, plus eight mayoral races since 1996; the 2022 census mapped from tracts to circuits; the electoral roll split to set apart the 510,287 eligible foreign residents; schools, 3.6 million citizen complaints, informal settlements and 318,607 land parcels. Every script states what question it answers, what it assumes and what it can't claim, and every finding passes three filters before publication.",
      stack: [
        { name: "Python · pandas · GeoPandas", why: "474 derived tables and 343 numbered scripts, reproducible from the source data" },
        { name: "Ecological inference (King, NNLS, balance)", why: "Three routes with different assumptions to estimate how many voters PRO kept" },
        { name: "Partial Spearman · Benjamini-Hochberg", why: "Rank correlations with social class controlled and correction for multiple comparisons" },
        { name: "Digit tests", why: "17 tests on the 2015–2023 tally sheets to measure, not assume, whether they're reliable" },
        { name: "Digital twin (MapLibre and 3D)", why: "The city parcel by parcel, to decide where campaign effort pays off" },
        { name: "Headless Chrome · Excel", why: "PDF reports, Excel workbooks and a vote calculator for the campaign team" },
      ],
      decisions: [
        {
          decision: "The denominator is the native-born roll",
          reasoning: "The 2023 and 2025 rolls include half a million foreign residents who turn out at 15–20%. Crossing any social variable against total-roll turnout yields −0.91 purely by construction. Separating native-born from foreign voters was the difference between a finding and an error.",
        },
        {
          decision: "Measure in votes, not percentage points",
          reasoning: "In points, PRO seemed to have sunk in its stronghold. In votes, it kept 29.9%, and retention ranges from 29.0% to 30.7% across all five quintiles of prior strength: there was no territorial refuge. The conclusion changed, and with it where to campaign.",
        },
        {
          decision: "Three methods for one number",
          reasoning: "The arithmetic balance gives 29.9%, the NNLS matrix 29.9% and King's model 29.8%, with an interval of 29.4% to 30.0%. Three routes with different assumptions land in the same place. What didn't survive that test — where the libertarian vote came from — was published only as a bound.",
        },
        {
          decision: "Publish the negative result too",
          reasoning: "73 census indicators and three independent sources were tested to predict retention: the validated R² was −0.05, worse than predicting the mean. Instead of forcing a model, the report said so: change isn't predicted by territory, and that also guides strategy.",
        },
      ],
      results:
        "Territory explains almost all of the level of the vote — validated R² of 0.935 for Jorge Macri's 2023 vote — and almost none of the change. PRO's collapse was even across the city; what varies by neighbourhood is who captured that vote. The delivery included district reports, a station-by-station analysis, a survey matched to territory, Excel workbooks, a vote calculator and the digital twin. The candidates analysis and the 2027 model remain reserved for the client.",
      learned:
        "The costliest trap in electoral analysis isn't a bad model: it's a correct reading in the wrong unit. Moving from points to votes, and from the total roll to the native-born roll, changed the conclusions more than any sophisticated technique.",
      metrics: [
        { value: "29.9%", description: "PRO retention 2023→2025, three methods" },
        { value: "0.935", description: "Validated R² of territory on vote level" },
        { value: "−0.05", description: "Validated R² on change: not predictable" },
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
  return routing.locales.flatMap((locale) =>
    Object.keys(content.es).map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const c = content[resolveLocale(locale)][slug];
  if (!c) return {};
  return pageMetadata({
    locale,
    path: `/work/${slug}`,
    title: c.title,
    description: c.subtitle,
  });
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale: rawLocale } = await params;
  setRequestLocale(rawLocale);
  const locale = resolveLocale(rawLocale);
  const c = content[locale][slug];
  const t = labels[locale];
  if (!c) notFound();

  return (
    <main id="contenido" tabIndex={-1} className="min-h-screen bg-[#0A0E1A] outline-none">
      {/* Back nav */}
      <div className="sticky top-0 z-50 bg-[#0A0E1A]/90 backdrop-blur-md border-b border-[#1F2937]">
        <div className="container-custom h-14 flex items-center justify-between">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 min-h-[40px] text-sm text-[#8D9AB3] hover:text-[#B8C1D1] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.backToPortfolio}
          </Link>
          {c.url && (
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 min-h-[40px] text-sm font-semibold transition-colors"
              style={{ color: c.accent }}
            >
              {t.viewLive}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      <div className="container-custom py-10 md:py-20 w-full max-w-5xl mx-auto">
        {/* Hero */}
        <div className="mb-10 sm:mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span aria-hidden="true" className="text-[#8D9AB3] text-xs font-mono select-none">━━━</span>
            <span className="text-[#8D9AB3] text-xs font-mono uppercase tracking-widest">
              {c.category}
            </span>
          </div>
          <h1
            className="font-serif text-[#F5F7FA] leading-tight mb-4"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.02em" }}
          >
            {c.title}
          </h1>
          <div aria-hidden="true" className="text-[#1F2937] text-xs mb-5 font-mono select-none overflow-hidden whitespace-nowrap">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
          <p className="text-[#B8C1D1] text-lg md:text-xl leading-relaxed max-w-2xl">{c.subtitle}</p>
          {c.isHackathon && (
            <div
              className="inline-flex items-center gap-3 mt-6 px-5 py-3 rounded-lg border"
              style={{ borderColor: "#F59E0B40", backgroundColor: "#F59E0B08", borderStyle: "dashed" }}
            >
              <Trophy className="w-4 h-4" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#F59E0B]">
                {t.awardWinning} · {c.hackathonName}
              </span>
            </div>
          )}
        </div>

        {c.video && (
          <figure className="mb-10" style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "#0b0b0b" }}>
            <ResponsiveVideo
              label={c.video.label}
              wide={{ src: c.video.src, poster: c.video.poster, width: c.video.width, height: c.video.height }}
              tall={{ src: c.video.src, poster: c.video.poster, width: c.video.width, height: c.video.height }}
            />
            <figcaption style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "rgba(255,255,255,0.45)", padding: "12px 16px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              {c.video.label}
            </figcaption>
          </figure>
        )}

        {/* Screenshots */}
        <ScreenshotGallery
          screenshots={c.screenshots}
          title={c.title}
          url={c.url}
          accent={c.accent}
          privateLabel={c.privateNote ?? (locale === "en" ? "Client project · private access" : "Proyecto para cliente · acceso privado")}
        />

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[#1F2937]">
          {c.metrics.map((m, i) => (
            <div key={i}>
              <div
                className="font-mono leading-none mb-3"
                style={{ fontSize: "clamp(24px, 3.5vw, 48px)", fontWeight: 600, color: c.accent }}
              >
                {m.value}
              </div>
              <div className="border-t border-[#1F2937] pt-2">
                <p className="text-xs text-[#8D9AB3] uppercase tracking-wider font-mono">{m.description}</p>
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
                <div key={s.name} className="flex flex-col sm:flex-row gap-1 sm:gap-4 p-4 rounded-lg bg-[#0F1419] border border-[#1F2937]">
                  <span
                    className="sm:flex-shrink-0 text-sm font-mono font-semibold sm:min-w-[160px] sm:max-w-[240px]"
                    style={{ color: c.accent }}
                  >
                    {s.name}
                  </span>
                  <span className="min-w-0 text-[#B8C1D1] text-sm leading-relaxed">{s.why}</span>
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
              <p className="text-[#8D9AB3] text-xs font-mono mb-6 text-center tracking-wider">
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
                    <p className="text-[#8D9AB3] text-xs font-mono tracking-wide leading-snug">
                      {img.caption}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <ContactCta
          locale={locale}
          className="mt-16"
          accent={c.accent}
          onAccent={textOn(c.accent)}
          title={locale === "en" ? "A project like this for your organization?" : "¿Un proyecto así para tu organización?"}
          text={locale === "en" ? "Tell me the problem and we'll work out how to solve it with data." : "Contame el problema y vemos cómo resolverlo con datos."}
        />

        {/* Next case */}
        <div className="mt-20 pt-10 border-t border-[#1F2937] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <p className="text-[#8D9AB3] text-xs font-mono uppercase tracking-widest mb-1">
              {t.nextCase}
            </p>
            <p className="text-[#F5F7FA] font-semibold">{c.nextTitle}</p>
          </div>
          <Link
            href={`/${locale}/work/${c.nextSlug}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:-translate-y-0.5"
            style={{ backgroundColor: c.accent, color: textOn(c.accent) }}
          >
            {t.viewCase}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
