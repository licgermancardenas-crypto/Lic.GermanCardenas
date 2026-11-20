"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ContactCta } from "@/components/ContactCta";
import { ResponsiveVideo } from "@/components/ResponsiveVideo";
import { useLocale } from "next-intl";
import { describeShot, UI_LABELS } from "@/lib/alt";
import { CASES_EN, CASE_TAGS, FEATURED_IDS, TAG_LABELS, type CaseTag } from "@/lib/cases-i18n";
import {
  ExternalLink,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  Trophy,
} from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type CaseMeta = { rol: string; escala: string; stack: string; estado: string };
type CaseMetric = { value: string; label: string };

type CaseData = {
  id: string;
  slug: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  isHackathon?: boolean;
  hackathonName?: string;
  hackathonSponsor?: string;
  hackathonTeams?: string;
  meta: CaseMeta;
  challenge: string;
  approach: string;
  impactLabel: string;
  impact: string;
  metrics: CaseMetric[];
  screenshots: string[];
  /** Sin url = proyecto de cliente sin link público: se oculta "Ver en producción". */
  url?: string;
  /** Texto de la barra cuando no hay url pública (por defecto: proyecto para cliente). */
  privateNote?: string;
  /** Video del producto, se muestra arriba de la galería. */
  video?: { src: string; poster: string; width: number; height: number; label: string };
  pitchPhoto?: string;
  pitchPhotoCaption?: string;
};

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

const cases: CaseData[] = [
  {
    id: "caso-01",
    slug: "atlas-one-erp",
    number: "01",
    category: "SAAS B2B · COMERCIO DE CERCANÍA",
    title: "Atlas One ERP",
    subtitle: "El sistema de gestión para kioscos, minimarkets y comercios de cercanía: ventas, stock, compras, facturación y una IA que avisa antes de que falte algo.",
    meta: {
      rol: "Cofundador · CEO",
      escala: "Comercio de cercanía · Argentina",
      stack: "Next.js · Supabase · ARCA",
      estado: "En producción",
    },
    challenge:
      "Un kiosco o un minimarket se gestiona pegando con cinta un POS, un Excel, un grupo de WhatsApp y una calculadora. Nadie ve el costo de ese desorden hasta que falta un producto en la góndola y el cliente se va a otro comercio.",
    approach:
      "Un único núcleo donde cada venta descuenta stock en tiempo real: punto de venta por código de barras, stock por sucursal con alertas de quiebre, compras a proveedores, equipo con permisos a medida, facturación electrónica ARCA y una capa predictiva que proyecta ventas y marca las categorías en riesgo. Integrado con Mercado Pago, PedidosYa y Rappi.",
    impactLabel: "QUÉ RESUELVE",
    impact:
      "Reemplaza cinco herramientas sueltas por una, a un precio pensado para un comercio chico: entre el POS que solo cobra y el ERP corporativo que necesita consultor. Ya lo usan comercios de cercanía, y el próximo paso es la app móvil nativa.",
    metrics: [
      { value: "96.000", label: "Kioscos en la Argentina" },
      { value: "ARCA", label: "Facturación integrada" },
      { value: "$25–50K", label: "Por mes, según sucursales" },
    ],
    screenshots: ERP_SHOTS,
    url: "https://www.atlaones-erp.com",
    video: {
      src: "/videos/atlas-one-recorrido.mp4",
      poster: "/videos/atlas-one-recorrido-poster.jpg",
      width: 1600,
      height: 900,
      label: "Recorrido por el producto en 2 minutos · datos de demo",
    },
  },
  {
    id: "caso-02",
    slug: "atlas-nexus",
    number: "02",
    category: "SAAS B2B · HACKATHON WINNER",
    title: "Atlas Nexus",
    subtitle: "Plataforma de inteligencia comercial para comercios independientes con integración POS nativa.",
    isHackathon: true,
    hackathonName: "Hackathon 2025",
    hackathonSponsor: "Clover / Fiserv",
    hackathonTeams: "200+",
    meta: {
      rol: "Lead Developer & Pitch",
      escala: "SaaS · Comercios chicos",
      stack: "React · FastAPI · Clover API",
      estado: "Ganador 2025",
    },
    challenge:
      "Los comercios pequeños no tienen visibilidad de su negocio más allá de la caja registradora. Usan 3-5 herramientas desconectadas — POS, WhatsApp, Excel — que generan datos sin ninguna inteligencia consolidada. El resultado: decisiones de compra, precio y promoción basadas en intuición, no en comportamiento real de clientes.",
    approach:
      "En 72 horas construimos una plataforma que conecta el POS (Clover), el historial de ventas y los datos de clientes en un dashboard unificado. El punto diferencial fue la IA embebida que genera un 'briefing del día' personalizado: alertas de clientes que no vuelven, análisis de medios de pago, proyección de meta mensual y recomendaciones de acción específicas.",
    impactLabel: "POR QUÉ GANAMOS",
    impact:
      "El jurado destacó la combinación de profundidad técnica — integración POS real, análisis de cohortes, IA generativa — con una UX diseñada para el comerciante promedio, no para el analista. El demo live con datos reales y el pitch narrativo sellaron la presentación ante 200+ equipos competidores.",
    metrics: [
      { value: "$2.5M", label: "Revenue modelado" },
      { value: "57.2%", label: "Retorno clientes" },
      { value: "200+", label: "Equipos superados" },
    ],
    screenshots: ["/screenshots/atlas-nexus.png"],
    url: "https://trackintegracionpagos.vercel.app/",
    pitchPhoto: "/atlas-nexus-fiserv-pitch.jpg",
    pitchPhotoCaption: "Presentación ante Fiserv × Clover · Buenos Aires · 2025",
  },
  {
    id: "caso-03",
    slug: "agronova",
    number: "03",
    category: "AGRITECH · GIS · ENTERPRISE",
    title: "AgroNova",
    subtitle: "Plataforma geoespacial de escala nacional para la agroindustria argentina.",
    meta: {
      rol: "Full-stack Developer & GIS",
      escala: "Enterprise · 24 provincias",
      stack: "Next.js 15 · PostGIS · FastAPI",
      estado: "En producción",
    },
    challenge:
      "El sector agropecuario argentino opera con información fragmentada en silos: datos climáticos en una fuente, precios en otra, logística de agroquímicos sin integración con la geografía real. Más de 3.000 productores y distribuidores toman decisiones críticas con datos desactualizados o sin ninguna capa de inteligencia espacial.",
    approach:
      "Construí un sistema modular de 27 capas GIS sobre PostGIS que integra en tiempo real: alertas climáticas por radio censal, modelado de redes de distribución de agroquímicos, detección automática de conflictos de uso de suelo y visualización choroplética del portfolio comercial por provincia. Cada módulo es independiente pero comparte una capa de datos unificada con actualización continua.",
    impactLabel: "ESCALA",
    impact:
      "La plataforma procesa datos de las 24 provincias argentinas, modela más de 200.000 envíos anuales de agroquímicos y detecta automáticamente conflictos de uso de suelo. Con más de 3.300 clientes activos y ARS 14.2B en revenue modelado, es la plataforma de mayor escala en el portfolio.",
    metrics: [
      { value: "3.387", label: "Clientes activos" },
      { value: "ARS 14.2B", label: "Revenue modelado" },
      { value: "2.571", label: "Conflictos detectados" },
    ],
    screenshots: ["/screenshots/agronova.png"],
    url: "https://agro-nova-plataforma.vercel.app/",
  },
  {
    id: "caso-04",
    slug: "lapd",
    number: "04",
    category: "RESEARCH · DATA ANALYTICS",
    title: "LAPD Crime Analytics",
    subtitle: "Análisis de 1 millón de registros policiales de Los Ángeles con rigor metodológico.",
    meta: {
      rol: "Data Analyst & Developer",
      escala: "Research · 5 años de datos",
      stack: "Next.js · Python · D3.js",
      estado: "Live en producción",
    },
    challenge:
      "Los datos abiertos del LAPD contienen más de 1 millón de registros de crimen entre 2020 y 2024, pero están en formato tabular sin ninguna herramienta de análisis accesible para investigadores, periodistas o ciudadanos. Los patrones espaciales, temporales y demográficos permanecen ocultos en datos brutos.",
    approach:
      "Construí un pipeline ETL en Python que normaliza, geocodifica y enriquece los registros con categorías unificadas, seguido de un dashboard Next.js con D3.js para visualizaciones interactivas. El sistema incluye mapas de calor geoespaciales, análisis por franja horaria y día de la semana, distribución por tipo de crimen y un módulo de Arrests con filtros avanzados por demografía.",
    impactLabel: "QUÉ DEMUESTRA",
    impact:
      "Este proyecto demuestra la capacidad de convertir datos gubernamentales brutos en inteligencia accionable a escala. El rigor metodológico — limpieza de datos, manejo de valores nulos, normalización de 100+ categorías — es tan importante como la visualización final. Dashboard en producción en Vercel con acceso público.",
    metrics: [
      { value: "1M+", label: "Registros procesados" },
      { value: "20.1%", label: "Tasa resolución" },
      { value: "10+", label: "Módulos análisis" },
    ],
    screenshots: ["/screenshots/lapd.png"],
    url: "https://lapd-data-crime.vercel.app/dashboard",
  },
  {
    id: "caso-05",
    slug: "yerba-mate-ml",
    number: "05",
    category: "DATA SCIENCE · AGROINDUSTRIA · FREELANCE",
    title: "Yerba Mate Intelligence",
    subtitle: "Plataforma de inteligencia de mercado para un cliente del sector yerbatero: datos que no se estiman, se verifican.",
    meta: {
      rol: "Freelance Data Scientist & Full-stack",
      escala: "12 vistas · 24 años de datos",
      stack: "Next.js · FastAPI · PostGIS",
      estado: "Entregado al cliente",
    },
    challenge:
      "Los datos de la yerba mate están dispersos entre INYM, INDEC y BCRA, en PDFs, geoservidores y planillas con cortes distintos. No existe producción oficial por departamento y el consumo per cápita es anual aunque se publique mes a mes. Un tablero armado a ojo termina mezclando datos reales con rellenos inventados.",
    approach:
      "Construí 19 pipelines ETL que extraen y cruzan esas fuentes con una regla no negociable: si falta un dato queda como \"sin dato\", nunca se rellena. Una auditoría automática en CI valida cada serie nueva antes de publicarla. Sobre esa base desarrollé y validé 3 modelos de ML —producción por zona, consumo interno y un modelo gravitacional de exportaciones— y una segmentación K-means de municipios por perfil productivo, todo sobre un mapa GIS.",
    impactLabel: "QUÉ DEMUESTRA",
    impact:
      "Rigor antes que apariencia: en los modelos, la versión más simple le ganó a la compleja —clima, NDVI y tipo de cambio no mejoraron el pronóstico— y esos resultados negativos se documentaron en lugar de esconderse. El modelo de consumo interno alcanza un 6,3% de error medio. Cada vista declara su fuente y su nivel de confianza.",
    metrics: [
      { value: "3", label: "Modelos ML validados" },
      { value: "6,3%", label: "Error modelo consumo" },
      { value: "87", label: "Destinos de exportación" },
    ],
    screenshots: [
      "mapa-gis.jpg",
      "mapa-coropletico.jpg",
      "produccion.jpg",
      "consumo-heatmap.jpg",
      "exportaciones.jpg",
      "cadena-productiva.jpg",
      "estacionalidad.jpg",
    ].map((f) => `/screenshots/yerba-mate/${f}`),
  },
  {
    id: "caso-06",
    slug: "atlas-ypf",
    number: "06",
    category: "FINANZAS · ENERGÍA · RESEARCH",
    title: "ATLAS-YPF",
    subtitle: "YPF publicó el mejor trimestre de su historia y el mercado lo vendió. Este caso reconstruye por qué.",
    meta: {
      rol: "Analista financiero & Full-stack",
      escala: "5.089 pozos · datos desde 2009",
      stack: "Python · Next.js · Power BI",
      estado: "En producción",
    },
    challenge:
      "En el 2T26 YPF reportó un EBITDA ajustado de US$ 2.804M, 149% arriba del año anterior, con la deuda en mínimos y el shale creciendo 47%. Ese mismo día la acción cayó 3,6%. La lectura fácil es que el mercado se equivocó; para sostener cualquier respuesta había que cruzar los estados contables con la producción pozo por pozo, el crudo, la deuda y los comparables.",
    approach:
      "Un pipeline en Python que ingiere cada fuente por separado —20-F y 6-K de la SEC, producción de la Secretaría de Energía, relieve de Copernicus, ADR, Brent, riesgo país— y calcula todo en un solo lugar, con 14 chequeos automáticos que frenan el proceso si algo no cierra. Los mismos datos alimentan tres superficies: una web con mapa 3D de la cuenca, un tablero de Power BI y un Excel sin macros auditable celda por celda.",
    impactLabel: "LA RESPUESTA",
    impact:
      "De los US$ 1.680M de aumento interanual del EBITDA, US$ 851M son precio del crudo: un récord que se explica por el ciclo y no por la compañía. Además, el castigo no fue la excepción: 16 de los últimos 22 balances tuvieron reacción anormal negativa, y cada 100 puntos básicos de riesgo país le restan 3,3% a la acción.",
    metrics: [
      { value: "US$ 851M", label: "Del aumento es precio" },
      { value: "91%", label: "EBITDA explicado (4 drivers)" },
      { value: "16 de 22", label: "Balances castigados" },
    ],
    screenshots: [
      "web-caso.jpg",
      "web-mapa.jpg",
      "web-produccion.jpg",
      "powerbi-tablero.jpg",
      "powerbi-puente.jpg",
      "excel-resumen.jpg",
    ].map((f) => `/screenshots/ypf/${f}`),
    url: "https://atlas-ypf.vercel.app/ypf-project",
  },  {
    id: "caso-07",
    slug: "atlas-sentinel",
    number: "07",
    category: "DATA SCIENCE · SEGURIDAD URBANA · GOVTECH",
    title: "ATLAS SENTINEL",
    subtitle: "Riesgo delictivo de Buenos Aires por zona y turno, y qué hacer con eso: dónde patrullar, dónde poner cámaras y qué corredores controlar.",
    meta: {
      rol: "Data Scientist & Full-stack",
      escala: "401 hexágonos · 2016–2025",
      stack: "Python · LightGBM · Next.js",
      estado: "En producción",
    },
    challenge:
      "La Ciudad registra más de 130.000 delitos por año, y comisarías, patrullas y cámaras se ubican por historia, no por riesgo. Los datos para hacerlo mejor existen, pero están repartidos en más de 20 datasets abiertos que nunca se cruzan: delitos, transporte, alumbrado, siniestros viales y censo.",
    approach:
      "Unifiqué todas las fuentes en una grilla hexagonal H3 por turno y entrené un modelo de conteo (LightGBM con objetivo Poisson), validado en el espacio y explicado con SHAP. Sobre la predicción construí tres módulos de optimización —patrullas por cobertura máxima, cámaras nuevas sobre la red vial y controles en corredores de acceso— y una auditoría de equidad para ver a quién cubre cada plan.",
    impactLabel: "QUÉ DEMUESTRA",
    impact:
      "Con las mismas 75 patrullas, reubicadas según el riesgo, la cobertura pasa del 35,1% al 58,7%: 23,6 puntos más sin sumar un solo recurso. Y una lección honesta: el modelo apenas supera a repetir el pasado, porque el delito porteño es muy persistente. El valor está en decidir mejor, no en adivinar mejor.",
    metrics: [
      { value: "+23,6 pts", label: "Cobertura, mismos recursos" },
      { value: "58,5%", label: "Delitos en el 30% del área" },
      { value: "130.418", label: "Delitos 2025 analizados" },
    ],
    screenshots: ["inicio.jpg", "mapa.jpg"].map((f) => `/screenshots/sentinel/${f}`),
    url: "https://dashboard-two-sepia-39.vercel.app",
  },  {
    id: "caso-08",
    slug: "phantom-ai",
    number: "08",
    category: "DATA SCIENCE · FINANZAS · PREVENCIÓN DE LAVADO",
    title: "Phantom AI",
    subtitle: "Redes neuronales de grafos para encontrar lavado de activos que las reglas tradicionales no ven. Prueba de concepto con datos sintéticos.",
    meta: {
      rol: "Data Scientist & Full-stack",
      escala: "75.000 cuentas · 11,2 M de transacciones",
      stack: "PyTorch Geometric · FastAPI · Next.js",
      estado: "Demo en vivo",
    },
    challenge:
      "Las reglas clásicas de prevención de lavado miran cada transacción por monto o frecuencia. Pero el pitufeo, los anillos y las redes de mulas reparten grandes sumas en movimientos chicos que, uno por uno, parecen normales: el patrón está en la red, no en la operación individual.",
    approach:
      "Construí un banco simulado con 75.000 cuentas y 11,2 millones de transacciones sintéticas con ocho tipologías de lavado alineadas con GAFI, y comparé modelos tabulares contra redes neuronales de grafos (GraphSAGE y GAT), con explicabilidad por cuenta, calibración de probabilidades y rastreo hacia atrás hasta el origen del dinero. Encima, el módulo que usa un oficial de cumplimiento: alertas, casos, KYC, screening y reportes de operaciones sospechosas.",
    impactLabel: "QUÉ DEMUESTRA",
    impact:
      "Con el grafo se escapa el 13% del fraude, contra el 21% del mejor modelo tabular: las mulas tienen un perfil crediticio normal y se delatan por con quién transaccionan. Y una limitación dicha a tiempo: el modelo encuentra a las mulas pero no a quien inyecta el dinero, así que se sumó una segunda pasada para llegar al origen.",
    metrics: [
      { value: "0,943", label: "PR-AUC (GraphSAGE)" },
      { value: "90%", label: "Fraude detectado con 90% de precisión" },
      { value: "2,9×", label: "Homofilia del fraude en la red" },
    ],
    screenshots: ["red.jpg", "anillos.jpg", "casos.jpg", "direccion.jpg"].map((f) => `/screenshots/phantom/${f}`),
    url: "https://fraude-bancario-2026.vercel.app",
  },
  {
    id: "caso-09",
    slug: "atlas-analytics",
    number: "09",
    category: "AI ENGINEERING · DATOS PÚBLICOS · CONSULTORA",
    title: "Atlas Analytics",
    subtitle: "Mi consultora de análisis de datos y geointeligencia política, y el sistema de IA que investiga con fuentes reales antes de escribir una sola línea.",
    meta: {
      rol: "Fundador · AI Engineer",
      escala: "41 carruseles · 451 placas",
      stack: "Next.js · Claude · Supabase",
      estado: "En producción",
    },
    challenge:
      "Publicar análisis de datos todas las semanas sin caer en lo que la IA generativa hace por defecto: inventar cifras, citar fuentes que no existen y producir una estética genérica. Para una consultora cuyo producto es la precisión, un solo número inventado alcanza para perder la credibilidad.",
    approach:
      "Un pipeline de seis agentes —investigación, inteligencia, estrategia, copy, visual y control de calidad— en el que los modelos nunca escriben un link: citan los resultados de búsqueda por número y el código resuelve la fuente real. Antes, un radar sin IA barre unas 300 series públicas (BCRA, datos.gob.ar, RENAPER, Ministerio de Seguridad) y puntúa cada señal de 0 a 100 como oportunidad. Las placas se componen por código con los valores reales, porque un modelo de imagen no escribe bien un porcentaje.",
    impactLabel: "QUÉ DEMUESTRA",
    impact:
      "41 carruseles producidos entre agosto y noviembre de 2026, cada uno con su ficha de fuentes y cada placa marcada como dato observado o imagen generada. Es la misma forma de trabajar que ofrezco a clientes: IA que acelera el trabajo, con trazabilidad completa y una persona que aprueba antes de publicar.",
    metrics: [
      { value: "41", label: "Carruseles producidos" },
      { value: "~300", label: "Series públicas por barrido del radar" },
      { value: "0", label: "Links escritos por el modelo" },
    ],
    screenshots: ["portadas.jpg", "apellidos.jpg", "reservas.jpg", "sitio.jpg"].map((f) => `/screenshots/atlas-analytics/${f}`),
    url: "https://www.atlas-analytics.site",
  },
  {
    id: "caso-10",
    slug: "zeus",
    number: "10",
    category: "CIBERSEGURIDAD · DLP · PRODUCTO SAAS",
    title: "ZEUS · Atlas Control",
    subtitle: "Seguridad del endpoint y prevención de fuga de datos para empresas que manejan dinero: detecta ransomware, credenciales filtradas y pendrives sin leer lo que la gente escribe.",
    meta: {
      rol: "Fundador · Arquitectura y desarrollo",
      escala: "Agente Go · tiempo real · multi-tenant",
      stack: "Go · Node/TS · Next.js · Supabase",
      estado: "MVP probado · buscando primer cliente",
    },
    challenge:
      "Financieras, brokers y call centers tienen a 10 o 15 personas tocando dinero y datos de clientes todo el día. Las herramientas de seguridad empresariales son caras y pensadas para corporaciones; las baratas son spyware que el antivirus marca y que ningún regulador aceptaría.",
    approach:
      "Un agente de Windows en Go que corre como servicio, se comunica en tiempo real con una ingesta propia y alimenta una consola web multi-tenant. Detecta en el propio equipo: procesos de riesgo, persistencia, barridos de red, ráfagas de cifrado tipo ransomware, honeytokens, borrado de registros de Windows y anomalías de CPU o red aprendidas por equipo. La fuga de datos se detecta sin espiar: si alguien tipea una tarjeta o un CBU, el agente avisa con el valor enmascarado y nunca guarda ni envía el resto del texto.",
    impactLabel: "QUÉ DEMUESTRA",
    impact:
      "Un producto de seguridad completo construido de punta a punta: probado entre redes distintas por internet, con aislamiento entre empresas por Row Level Security y una auditoría interna sin agujeros abiertos. Y una línea de diseño que lo hace vendible a empresas reguladas: discreto, pero nunca encubierto.",
    metrics: [
      { value: "8", label: "Detectores EDR en el agente" },
      { value: "0", label: "Agujeros abiertos en la auditoría multi-tenant" },
      { value: "2", label: "Modos: empresa y proctoring" },
    ],
    screenshots: ["resumen.jpg", "edr.jpg", "alertas.jpg", "en-vivo.jpg"].map((f) => `/screenshots/zeus/${f}`),
    privateNote: "Producto propio · demo a pedido",
  },
  {
    id: "caso-11",
    slug: "caba-jefatura",
    number: "11",
    category: "INTELIGENCIA ELECTORAL · GEOESPACIAL · CLIENTE",
    title: "Atlas CABA · Jefatura de Gobierno",
    subtitle: "Treinta años del voto porteño, de la comuna a la mesa, para una candidatura a Jefe de Gobierno 2027. El hallazgo: el derrumbe del PRO fue de marca, no de territorio.",
    meta: {
      rol: "Director del proyecto · Atlas Analytics",
      escala: "474 tablas · 167 circuitos · 318.607 parcelas",
      stack: "Python · GeoPandas · inferencia ecológica",
      estado: "Para cliente · 2026",
    },
    challenge:
      "La lectura fácil de 2025 era que el PRO se había derrumbado en Recoleta y Palermo, su núcleo duro. Es cierta en puntos porcentuales y engañosa como diagnóstico: si todos pierden la misma proporción, el que tenía más pierde más puntos. Una campaña que se arma sobre esa lectura defiende los barrios equivocados.",
    approach:
      "Una base que cruza quince elecciones armonizadas con el censo 2022 por radio, el padrón separando nativos de extranjeros, escuelas, reclamos ciudadanos y barrios populares, y un gemelo digital de la ciudad con cada parcela. Nada se publica sin pasar tres filtros: corrección por comparaciones múltiples, control de composición social y prueba de fragilidad caso por caso. Y la retención se estimó con tres métodos de inferencia ecológica independientes.",
    impactLabel: "QUÉ ENCONTRAMOS",
    impact:
      "Los tres métodos coinciden: el PRO retuvo el 29,9% de sus votos, y la retención es pareja en toda la ciudad. Ninguno de 73 indicadores censales explica quién se quedó: no hubo refugio territorial, fue un colapso de marca. Lo que sí cambia por barrio es quién capturó ese voto. El territorio explica casi todo el nivel del voto y casi nada del cambio, y decirlo a tiempo evita gastar campaña en el lugar equivocado.",
    metrics: [
      { value: "29,9%", label: "Retención del PRO, con tres métodos" },
      { value: "0,935", label: "R² validado: el territorio explica el nivel" },
      { value: "−0,05", label: "R² validado: no explica el cambio" },
    ],
    screenshots: ["portada.jpg", "mapa-2025.jpg", "mesas.jpg", "gemelo-3d.jpg"].map((f) => `/screenshots/caba/${f}`),
    url: "https://atlas-caba-ciudad.vercel.app/gemelo/",
  },
];

/** Cantidad de casos publicados (la usa el hero). */
export const CASES_COUNT = cases.length;

// ── Lightbox ──────────────────────────────────────────────────────────────────

function Lightbox({
  screenshots,
  title,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  screenshots: string[];
  title: string;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const lang = useLocale() === "en" ? "en" : "es";
  const ui = UI_LABELS[lang];
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handle);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handle);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.96)" }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2.5 rounded-full text-white transition-colors"
        style={{ background: "rgba(255,255,255,0.1)" }}
        aria-label={ui.close}
      >
        <X className="w-5 h-5" />
      </button>

      <div
        className="absolute top-4 left-1/2 -translate-x-1/2 z-10 px-3 py-1 rounded-full text-sm tabular-nums"
        style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}
      >
        {index + 1} / {screenshots.length}
      </div>

      <div
        className="relative w-full h-full p-12 md:p-16"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          key={screenshots[index]}
          src={screenshots[index]}
          alt={describeShot(screenshots[index], title, index, screenshots.length, lang)}
          fill
          className="object-contain"
          sizes="100vw"
          quality={95}
        />
      </div>

      {screenshots.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full text-white transition-colors"
            style={{ background: "rgba(255,255,255,0.1)" }}
            aria-label={ui.prev}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full text-white transition-colors"
            style={{ background: "rgba(255,255,255,0.1)" }}
            aria-label={ui.next}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}
    </div>,
    document.body
  );
}

// ── ParallaxScreenshot ────────────────────────────────────────────────────────

function ParallaxScreenshot({
  screenshots,
  title,
  url,
  privateNote,
  isHackathon,
}: {
  screenshots: string[];
  title: string;
  url?: string;
  privateNote?: string;
  isHackathon?: boolean;
}) {
  const lang = useLocale() === "en" ? "en" : "es";
  const ui = UI_LABELS[lang];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const reduceMotion = useReducedMotion();

  const [idx, setIdx] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [lbIdx, setLbIdx] = useState(0);
  const multiple = screenshots.length > 1;

  const prev = useCallback(
    () => setIdx((i) => (i - 1 + screenshots.length) % screenshots.length),
    [screenshots.length]
  );
  const next = useCallback(
    () => setIdx((i) => (i + 1) % screenshots.length),
    [screenshots.length]
  );

  const glowColor = isHackathon ? "rgba(245,181,68,0.15)" : "rgba(74,139,255,0.15)";
  const isContain = multiple;

  return (
    <div ref={ref} className="relative">
      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          // Solo vertical: un inset lateral negativo generaba scroll horizontal en móvil.
          // El blur ya expande el brillo hacia los costados.
          inset: "-60px 0",
          background: `radial-gradient(ellipse at 50% 50%, ${glowColor} 0%, transparent 65%)`,
          filter: "blur(40px)",
          opacity: 0.8,
        }}
      />

      <motion.div style={{ y: reduceMotion ? 0 : y }} className="relative group">
        {/* Browser chrome */}
        <div
          className="overflow-hidden"
          style={{
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 30px 60px -20px rgba(0,0,0,0.6), 0 0 120px -20px " + glowColor,
          }}
        >
          {/* Browser bar */}
          <div
            className="flex items-center gap-3 px-4 py-2.5"
            style={{
              background: "#060810",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <div className="flex gap-1.5">
              {["#ff5f56", "#ffbd2e", "#27c93f"].map((c) => (
                <div
                  key={c}
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: c, opacity: 0.5 }}
                />
              ))}
            </div>
            <div
              className="flex-1 rounded px-3 py-1 truncate"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.04)",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                color: "rgba(255,255,255,0.2)",
              }}
            >
              {url ?? privateNote ?? "Proyecto para cliente · acceso privado"}
            </div>
            {multiple && (
              <span
                className="flex-shrink-0 tabular-nums"
                style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "rgba(255,255,255,0.3)" }}
              >
                {idx + 1}/{screenshots.length}
              </span>
            )}
          </div>

          {/* Image area */}
          <div
            className="relative cursor-zoom-in"
            style={{
              aspectRatio: "16/10",
              backgroundColor: "#060810",
              overflow: "hidden",
            }}
            role="button"
            tabIndex={0}
            aria-label={`${ui.zoom}: ${describeShot(screenshots[idx], title, idx, screenshots.length, lang)}`}
            onClick={() => { setLbIdx(idx); setLightbox(true); }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setLbIdx(idx); setLightbox(true); }
            }}
          >
            <Image
              key={screenshots[idx]}
              src={screenshots[idx]}
              alt={describeShot(screenshots[idx], title, idx, screenshots.length, lang)}
              fill
              className={isContain ? "object-contain" : "object-cover object-top"}
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
            />

            {/* Zoom hint */}
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
            >
              <div className="p-3 rounded-full" style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)", color: "rgba(255,255,255,0.8)" }}>
                <ZoomIn className="w-6 h-6" />
              </div>
            </div>

            {/* Prev arrow */}
            {multiple && (
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 focus-visible:opacity-100 transition-all"
                style={{ background: "rgba(0,0,0,0.6)", color: "rgba(255,255,255,0.8)" }}
                aria-label={ui.prev}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            )}

            {/* Next arrow */}
            {multiple && (
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 focus-visible:opacity-100 transition-all"
                style={{ background: "rgba(0,0,0,0.6)", color: "rgba(255,255,255,0.8)" }}
                aria-label={ui.next}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Thumbnail strip */}
          {multiple && (
            <div
              className="flex gap-1.5 px-3 py-2 overflow-x-auto"
              style={{ backgroundColor: "#060810", borderTop: "1px solid rgba(255,255,255,0.04)", scrollbarWidth: "none" }}
            >
              {screenshots.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className="flex-shrink-0 relative rounded overflow-hidden transition-all"
                  style={{
                    width: 60,
                    height: 40,
                    outline: i === idx ? "2px solid rgba(74,139,255,0.8)" : "2px solid transparent",
                    outlineOffset: "1px",
                    opacity: i === idx ? 1 : 0.4,
                  }}
                  aria-label={`${ui.show}: ${describeShot(src, title, i, screenshots.length, lang)}`}
                  aria-current={i === idx ? "true" : undefined}
                >
                  <Image src={src} alt="" fill className="object-cover" sizes="60px" quality={30} />
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          screenshots={screenshots}
          title={title}
          index={lbIdx}
          onClose={() => setLightbox(false)}
          onPrev={() => setLbIdx((i) => (i - 1 + screenshots.length) % screenshots.length)}
          onNext={() => setLbIdx((i) => (i + 1) % screenshots.length)}
        />
      )}
    </div>
  );
}

// ── Textos de la sección ──────────────────────────────────────────────────────

type Lang = "es" | "en";

const UI = {
  es: {
    eyebrow: "─── Casos destacados",
    title: (n: number, k: number) => [`${n} proyectos.`, `${k} a fondo.`],
    sub: "Los cuatro más representativos, en detalle; el resto, en la grilla. Filtrá por tema.",
    filterLabel: "Filtrar casos por tema",
    all: "Todos",
    caseWord: "CASO",
    problem: "Problema",
    did: "Qué hice",
    result: "Resultado",
    winner: "Proyecto ganador",
    teams: (t: string, sp: string) => `${t} equipos · Sponsor: ${sp}`,
    role: "Rol",
    status: "Estado",
    live: "Ver en producción",
    full: "Caso completo",
    more: "Más casos",
    empty: "No hay casos con ese tema.",
    privateDefault: "Proyecto para cliente · acceso privado",
  },
  en: {
    eyebrow: "─── Featured cases",
    title: (n: number, k: number) => [`${n} projects.`, `${k} in depth.`],
    sub: "The four most representative ones in detail; the rest in the grid. Filter by topic.",
    filterLabel: "Filter cases by topic",
    all: "All",
    caseWord: "CASE",
    problem: "Problem",
    did: "What I did",
    result: "Result",
    winner: "Winning project",
    teams: (t: string, sp: string) => `${t} teams · Sponsor: ${sp}`,
    role: "Role",
    status: "Status",
    live: "See it live",
    full: "Full case",
    more: "More cases",
    empty: "No cases with that topic.",
    privateDefault: "Client project · private access",
  },
} as const;

/** Texto del caso en el idioma de la página (el inglés vive en lib/cases-i18n.ts). */
function localize(c: CaseData, lang: Lang) {
  const en = lang === "en" ? CASES_EN[c.id] : undefined;
  return {
    category: en?.category ?? c.category,
    subtitle: en?.subtitle ?? c.subtitle,
    meta: en?.meta ?? c.meta,
    metrics: c.metrics.map((m, i) => ({ value: m.value, label: en?.metricLabels[i] ?? m.label })),
    challenge: en?.challenge ?? c.challenge,
    approach: en?.approach ?? c.approach,
    impact: en?.impact ?? c.impact,
    privateNote: en?.privateNote ?? c.privateNote,
  };
}

const mono = { fontFamily: "var(--font-mono)" } as const;

// ── Caso en formato grande ────────────────────────────────────────────────────

function FeaturedBig({ c, lang }: { c: CaseData; lang: Lang }) {
  const t = UI[lang];
  const L = localize(c, lang);
  const gold = c.isHackathon;
  const accent = gold ? "#F5B544" : "#4A8BFF";

  return (
    <motion.section
      layout
      id={c.id}
      initial={false}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: EASE }}
      className="py-14 sm:py-20 scroll-mt-20"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <p style={{ ...mono, fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#8D9AB3" }}>
        {t.caseWord} {c.number} · {L.category}
      </p>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div className="space-y-8 min-w-0">
          <div>
            <h3
              className="font-serif"
              style={{ textTransform: "uppercase", fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 600, color: "#F0F4FB", lineHeight: 1.0, letterSpacing: "0.02em", marginBottom: "16px" }}
            >
              {c.title}
            </h3>
            <div style={{ height: "2px", width: "64px", background: gold ? "#F5B544" : "#2B6FE8", marginBottom: "20px" }} />
            <p style={{ fontSize: "19px", lineHeight: 1.6, color: "#C5CFE2" }}>{L.subtitle}</p>
          </div>

          {/* Métricas clave, arriba */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            {L.metrics.map((m) => (
              <div key={m.value + m.label} className="flex flex-col gap-2 min-w-0">
                <span style={{ fontSize: "clamp(22px, 2.6vw, 36px)", fontWeight: 600, color: "#F0F4FB", letterSpacing: "-0.03em", fontVariantNumeric: "tabular-nums", lineHeight: 1.05 }}>
                  {m.value}
                </span>
                <span style={{ ...mono, fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", color: "#8D9AB3", lineHeight: 1.45 }}>
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {gold && (
            <div className="flex items-start gap-4" style={{ borderRadius: "12px", padding: "18px 22px", border: "1px dashed rgba(245,181,68,0.3)", background: "rgba(245,181,68,0.04)" }}>
              <Trophy className="w-6 h-6 shrink-0" style={{ color: "#F5B544" }} aria-hidden="true" />
              <div>
                <p style={{ ...mono, fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#F5B544", marginBottom: "4px" }}>{t.winner}</p>
                <p style={{ fontSize: "16px", fontWeight: 500, color: "#F0F4FB", marginBottom: "2px" }}>{c.hackathonName}</p>
                <p style={{ ...mono, fontSize: "12px", color: "#D9B36A" }}>{t.teams(c.hackathonTeams ?? "", c.hackathonSponsor ?? "")}</p>
              </div>
            </div>
          )}

          {/* Problema → Qué hice → Resultado */}
          <div className="space-y-6">
            {[
              { label: t.problem, text: L.challenge },
              { label: t.did, text: L.approach },
              { label: t.result, text: L.impact },
            ].map(({ label, text }) => (
              <div key={label} style={{ paddingLeft: "18px", borderLeft: `2px solid ${gold ? "rgba(245,181,68,0.3)" : "rgba(43,111,232,0.35)"}` }}>
                <h4 style={{ ...mono, fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: accent, marginBottom: "8px", fontWeight: 600 }}>
                  {label}
                </h4>
                <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#C5CFE2" }}>{text}</p>
              </div>
            ))}
          </div>

          <dl className="flex flex-wrap gap-x-8 gap-y-3" style={{ paddingTop: "4px" }}>
            {[
              [t.role, L.meta.rol],
              ["Stack", L.meta.stack],
              [t.status, L.meta.estado],
            ].map(([k, v]) => (
              <div key={k}>
                <dt style={{ ...mono, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8D9AB3", marginBottom: "4px" }}>{k}</dt>
                <dd style={{ fontSize: "14px", fontWeight: 500, color: "#C5CFE2" }}>{v}</dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap gap-3">
            {c.url && (
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 min-h-[44px] transition-all duration-200 hover:-translate-y-0.5"
                style={{ padding: "12px 24px", borderRadius: "8px", background: gold ? "#F5B544" : "#2B6FE8", color: gold ? "#06080D" : "#fff", fontSize: "14px", fontWeight: 600 }}
              >
                {t.live}
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            )}
            <Link
              href={`/${lang}/work/${c.slug}`}
              className="inline-flex items-center gap-2 min-h-[44px] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#4A8BFF]/40"
              style={{ padding: "12px 24px", borderRadius: "8px", background: "rgba(15,22,35,0.6)", border: "1px solid rgba(255,255,255,0.08)", color: "#C5CFE2", fontSize: "14px", fontWeight: 500 }}
            >
              {t.full}
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start min-w-0">
          <ParallaxScreenshot
            screenshots={c.pitchPhoto ? [c.pitchPhoto, ...c.screenshots] : c.screenshots}
            title={c.title}
            url={c.url}
            privateNote={L.privateNote ?? t.privateDefault}
            isHackathon={c.isHackathon}
          />
        </div>
      </div>
    </motion.section>
  );
}

// ── Tarjeta compacta (bento) ──────────────────────────────────────────────────

function BentoCard({ c, lang, wide }: { c: CaseData; lang: Lang; wide: boolean }) {
  const t = UI[lang];
  const L = localize(c, lang);
  const m = L.metrics[0];

  return (
    <motion.article
      layout
      id={c.id}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3, ease: EASE }}
      className={`relative group flex flex-col rounded-2xl overflow-hidden scroll-mt-24 ${wide ? "md:col-span-2" : ""}`}
      style={{ background: "#0B1019", border: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="relative z-10">
        {c.video ? (
          <ResponsiveVideo
            label={c.video.label}
            wide={{ src: c.video.src, poster: c.video.poster, width: c.video.width, height: c.video.height }}
            tall={{ src: c.video.src, poster: c.video.poster, width: c.video.width, height: c.video.height }}
          />
        ) : (
          <div className="relative w-full" style={{ aspectRatio: "16 / 10", background: "#060810" }}>
            <Image
              src={c.screenshots[0]}
              alt={describeShot(c.screenshots[0], c.title, 0, c.screenshots.length, lang)}
              fill
              sizes={wide ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 p-5 sm:p-6 flex-1">
        <p style={{ ...mono, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8D9AB3" }}>
          {c.number} · {L.category}
        </p>
        <h4 style={{ fontSize: "22px", fontWeight: 600, color: "#F0F4FB", lineHeight: 1.2 }}>
          <Link
            href={`/${lang}/work/${c.slug}`}
            className="after:absolute after:inset-0 after:content-[''] focus:outline-none focus-visible:underline"
          >
            {c.title}
          </Link>
        </h4>
        <p className="line-clamp-3" style={{ fontSize: "15px", lineHeight: 1.6, color: "#C5CFE2" }}>
          {L.subtitle}
        </p>

        <div className="flex items-baseline gap-3 mt-1">
          <span style={{ fontSize: "28px", fontWeight: 600, color: "#F0F4FB", letterSpacing: "-0.03em", fontVariantNumeric: "tabular-nums" }}>{m.value}</span>
          <span style={{ ...mono, fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", color: "#8D9AB3", lineHeight: 1.4 }}>{m.label}</span>
        </div>

        <p style={{ fontSize: "13px", color: "#8D9AB3", lineHeight: 1.5 }}>
          {L.meta.rol} · {L.meta.stack}
        </p>

        <div className="mt-auto pt-2 flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: "#4A8BFF" }}>
            {t.full}
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
          {c.url && (
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-1.5 min-h-[40px] text-sm hover:text-[#F0F4FB] transition-colors"
              style={{ color: "#8D9AB3" }}
            >
              {t.live}
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

// ── FeaturedCases ─────────────────────────────────────────────────────────────

type Filter = "all" | CaseTag;

export function FeaturedCases() {
  const lang: Lang = useLocale() === "en" ? "en" : "es";
  const t = UI[lang];
  const [filter, setFilter] = useState<Filter>("all");

  const matches = (c: CaseData) => filter === "all" || (CASE_TAGS[c.id] ?? []).includes(filter);
  const featured = FEATURED_IDS.map((id) => cases.find((c) => c.id === id)).filter((c): c is CaseData => !!c);
  const rest = cases.filter((c) => !(FEATURED_IDS as readonly string[]).includes(c.id));
  const featuredShown = featured.filter(matches);
  const restShown = rest.filter(matches);
  const count = (f: Filter) => (f === "all" ? cases.length : cases.filter((c) => (CASE_TAGS[c.id] ?? []).includes(f)).length);
  const [h2a, h2b] = t.title(cases.length, featured.length);

  return (
    <section id="casos" className="scroll-mt-16" style={{ backgroundColor: "#06080D" }}>
      <div className="container-custom pt-20 sm:pt-28 pb-6">
        <p style={{ ...mono, fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#8D9AB3", marginBottom: "24px" }}>
          {t.eyebrow}
        </p>
        <h2
          className="font-serif"
          style={{ textTransform: "uppercase", fontSize: "clamp(40px, 5.5vw, 80px)", fontWeight: 600, color: "#F0F4FB", lineHeight: 1.05, letterSpacing: "0.02em" }}
        >
          {h2a} <span>{h2b}</span>
        </h2>
        <p style={{ marginTop: "16px", fontSize: "16px", color: "#C5CFE2", maxWidth: "640px" }}>{t.sub}</p>

        {/* Filtros */}
        <div role="group" aria-label={t.filterLabel} className="mt-8 flex flex-wrap gap-2">
          {(["all", "finance", "gis", "ai", "security"] as Filter[]).map((f) => {
            const on = filter === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={on}
                className="relative inline-flex items-center gap-2 min-h-[40px] px-4 rounded-full text-sm font-medium transition-colors"
                style={{
                  color: on ? "#06080D" : "#C5CFE2",
                  border: `1px solid ${on ? "transparent" : "rgba(255,255,255,0.12)"}`,
                }}
              >
                {on && (
                  <motion.span
                    layoutId="case-filter-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "#F0F4FB" }}
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="relative">{f === "all" ? t.all : TAG_LABELS[f][lang]}</span>
                <span className="relative tabular-nums" style={{ ...mono, fontSize: "12px", opacity: 0.75 }}>{count(f)}</span>
              </button>
            );
          })}
        </div>
      </div>

      <LayoutGroup>
        <div className="container-custom">
          <AnimatePresence initial={false} mode="popLayout">
            {featuredShown.map((c) => (
              <FeaturedBig key={c.id} c={c} lang={lang} />
            ))}
          </AnimatePresence>

          {restShown.length > 0 && (
            <motion.div layout className="pt-14 pb-10" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <h3 style={{ ...mono, fontSize: "12px", letterSpacing: "0.16em", textTransform: "uppercase", color: "#8D9AB3", marginBottom: "24px", fontWeight: 500 }}>
                ─── {t.more}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <AnimatePresence initial={false} mode="popLayout">
                  {restShown.map((c) => (
                    <BentoCard key={c.id} c={c} lang={lang} wide={!!c.video} />
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {featuredShown.length + restShown.length === 0 && (
            <p className="py-16 text-center" style={{ color: "#8D9AB3" }}>{t.empty}</p>
          )}
        </div>
      </LayoutGroup>

      <div className="container-custom pb-24">
        <div className="max-w-5xl mx-auto">
          <ContactCta
            locale={lang}
            variant="full"
            title={lang === "en" ? "Got a similar data problem?" : "¿Tenés un problema de datos parecido?"}
            text={lang === "en" ? "From raw data to a dashboard in production: ETL, models, maps and the website that tells the story." : "Del dato crudo al tablero en producción: ETL, modelos, mapas y la web que lo cuenta."}
          />
        </div>
      </div>
    </section>
  );
}
