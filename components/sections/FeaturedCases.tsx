"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactCta } from "@/components/ContactCta";
import { ResponsiveVideo } from "@/components/ResponsiveVideo";
import { useLocale } from "next-intl";
import {
  ExternalLink,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  X,
  ZoomIn,
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

// ── Lightbox ──────────────────────────────────────────────────────────────────

function Lightbox({
  screenshots,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  screenshots: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
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
        aria-label="Cerrar"
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
          alt={`Screenshot ${index + 1}`}
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
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full text-white transition-colors"
            style={{ background: "rgba(255,255,255,0.1)" }}
            aria-label="Siguiente"
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
  alt,
  url,
  privateNote,
  isHackathon,
}: {
  screenshots: string[];
  alt: string;
  url?: string;
  privateNote?: string;
  isHackathon?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

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

      <motion.div style={{ y }} className="relative group">
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
                fontSize: "11px",
                color: "rgba(255,255,255,0.2)",
              }}
            >
              {url ?? privateNote ?? "Proyecto para cliente · acceso privado"}
            </div>
            {multiple && (
              <span
                className="flex-shrink-0 tabular-nums"
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "rgba(255,255,255,0.3)" }}
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
            onClick={() => { setLbIdx(idx); setLightbox(true); }}
          >
            <Image
              key={screenshots[idx]}
              src={screenshots[idx]}
              alt={alt}
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
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                style={{ background: "rgba(0,0,0,0.6)", color: "rgba(255,255,255,0.8)" }}
                aria-label="Anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            )}

            {/* Next arrow */}
            {multiple && (
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                style={{ background: "rgba(0,0,0,0.6)", color: "rgba(255,255,255,0.8)" }}
                aria-label="Siguiente"
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
                    width: 52,
                    height: 34,
                    outline: i === idx ? "2px solid rgba(74,139,255,0.8)" : "2px solid transparent",
                    outlineOffset: "1px",
                    opacity: i === idx ? 1 : 0.4,
                  }}
                  aria-label={`Screenshot ${i + 1}`}
                >
                  <Image src={src} alt="" fill className="object-cover" sizes="52px" quality={30} />
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
          index={lbIdx}
          onClose={() => setLightbox(false)}
          onPrev={() => setLbIdx((i) => (i - 1 + screenshots.length) % screenshots.length)}
          onNext={() => setLbIdx((i) => (i + 1) % screenshots.length)}
        />
      )}
    </div>
  );
}

// ── PitchHero ─────────────────────────────────────────────────────────────────

function PitchHero({
  photo,
  title,
  category,
  caption,
  nextId,
}: {
  photo: string;
  title: string;
  category: string;
  caption: string;
  nextId: string;
}) {
  const scrollToCase = () => {
    document.getElementById(nextId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative" style={{ height: "100svh", minHeight: "600px" }}>
      <Image
        src={photo}
        alt={`${title} — pitch`}
        fill
        className="object-cover"
        quality={90}
        sizes="100vw"
      />

      {/* Gradient overlay: light on top, heavy on bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(6,8,13,0.25) 0%, rgba(6,8,13,0.35) 50%, rgba(6,8,13,0.88) 85%, rgba(6,8,13,1) 100%)",
        }}
      />

      {/* Text: bottom-left */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
        className="absolute bottom-0 left-0 right-0 px-6 pb-24 md:px-16 lg:px-24"
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)",
            marginBottom: "14px",
          }}
        >
          CASO 02 · {category}
        </p>
        <h3
          style={{
            textTransform: "uppercase",
            fontSize: "clamp(44px, 6.5vw, 96px)",
            fontWeight: 600,
            color: "#F0F4FB",
            lineHeight: 1.0,
            letterSpacing: "0.02em",
            fontFamily: "var(--font-serif)",
            marginBottom: "16px",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            letterSpacing: "0.08em",
            color: "rgba(255,255,255,0.35)",
          }}
        >
          {caption}
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToCase}
        aria-label="Ver caso"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 group"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          style={{ color: "rgba(255,255,255,0.4)" }}
          className="group-hover:text-white transition-colors duration-200"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
    </section>
  );
}

// ── FeaturedCases ─────────────────────────────────────────────────────────────

export function FeaturedCases() {
  const locale = useLocale();
  return (
    <>
      {/* Section intro */}
      <section id="casos" className="pt-20 sm:pt-32 lg:pt-40 pb-12 sm:pb-20" style={{ backgroundColor: "#06080D" }}>
        <div className="container-custom">
          <AnimatedSection>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#6B7A95",
                marginBottom: "32px",
              }}
            >
              ─── Casos destacados
            </p>
            <h2
              className="font-serif"
              style={{
                textTransform: "uppercase",
                fontSize: "clamp(40px, 5.5vw, 80px)",
                fontWeight: 600,
                color: "#F0F4FB",
                lineHeight: 1.05,
                letterSpacing: "0.02em",
              }}
            >
              Once proyectos.{" "}
              <span>Once historias.</span>
            </h2>
            <p
              style={{
                marginTop: "16px",
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                color: "#6B7A95",
                letterSpacing: "0.04em",
              }}
            >
              Una constelación de evidencia.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 4 case sections */}
      {cases.map((c) => {
        const isGold = c.isHackathon;

        return (
          <div key={c.id}>
          {c.pitchPhoto && (
            <PitchHero
              photo={c.pitchPhoto}
              title={c.title}
              category={c.category}
              caption={c.pitchPhotoCaption ?? ""}
              nextId={c.id}
            />
          )}
          <section
            id={c.id}
            className="py-16 sm:py-24 lg:py-32"
            style={{
              backgroundColor: "#06080D",
              borderTop: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <div className="container-custom">
              {/* Eyebrow */}
              <AnimatedSection className="mb-8 sm:mb-16">
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#6B7A95",
                  }}
                >
                  CASO {c.number} · {c.category}
                </p>
              </AnimatedSection>

              {/* 2-col layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
                {/* LEFT: narrative */}
                <AnimatedSection className="space-y-10">
                  <div>
                    <h3
                      className="font-serif"
                      style={{
                        textTransform: "uppercase",
                        fontSize: "clamp(40px, 5vw, 72px)",
                        fontWeight: 600,
                        color: "#F0F4FB",
                        lineHeight: 1.0,
                        letterSpacing: "0.02em",
                        marginBottom: "16px",
                      }}
                    >
                      {c.title}
                    </h3>
                    <div
                      style={{
                        height: "2px",
                        width: "64px",
                        background: isGold ? "#F5B544" : "#2B6FE8",
                        marginBottom: "24px",
                      }}
                    />
                    <p style={{ fontSize: "20px", lineHeight: 1.6, color: "#C5CFE2" }}>
                      {c.subtitle}
                    </p>
                  </div>

                  {c.isHackathon && (
                    <div
                      style={{
                        borderRadius: "12px",
                        padding: "20px 24px",
                        border: "1px dashed rgba(245,181,68,0.3)",
                        background: "rgba(245,181,68,0.04)",
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <span style={{ fontSize: "24px" }}>🏆</span>
                        <div>
                          <p
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: "11px",
                              letterSpacing: "0.16em",
                              textTransform: "uppercase",
                              color: "#F5B544",
                              marginBottom: "6px",
                            }}
                          >
                            Proyecto Ganador
                          </p>
                          <p style={{ fontSize: "16px", fontWeight: 500, color: "#F0F4FB", marginBottom: "4px" }}>
                            {c.hackathonName}
                          </p>
                          <p style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "rgba(245,181,68,0.6)" }}>
                            {c.hackathonTeams} equipos · Sponsor: {c.hackathonSponsor}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4"
                    style={{
                      padding: "20px 24px",
                      borderRadius: "12px",
                      background: "#0F1623",
                      border: "1px solid rgba(255,255,255,0.04)",
                    }}
                  >
                    {(
                      [
                        ["ROL", c.meta.rol],
                        ["ESCALA", c.meta.escala],
                        ["STACK", c.meta.stack],
                        ["ESTADO", c.meta.estado],
                      ] as [string, string][]
                    ).map(([label, value]) => (
                      <div key={label}>
                        <p
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "10px",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "#6B7A95",
                            marginBottom: "6px",
                          }}
                        >
                          {label}
                        </p>
                        <p style={{ fontSize: "14px", fontWeight: 500, color: "#C5CFE2" }}>
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-8">
                    {[
                      { label: "El desafío", text: c.challenge },
                      { label: "Mi aproximación", text: c.approach },
                      { label: c.impactLabel, text: c.impact },
                    ].map(({ label, text }) => (
                      <div
                        key={label}
                        style={{
                          paddingLeft: "20px",
                          borderLeft: `2px solid ${isGold ? "rgba(245,181,68,0.3)" : "rgba(43,111,232,0.3)"}`,
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "10px",
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            color: isGold ? "#F5B544" : "#4A8BFF",
                            marginBottom: "10px",
                          }}
                        >
                          {label}
                        </p>
                        <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#C5CFE2" }}>
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div
                    className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8"
                    style={{ paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    {c.metrics.map((m) => (
                      <div key={m.label} className="flex flex-col gap-2">
                        <span
                          style={{
                            fontSize: "clamp(24px, 3vw, 40px)",
                            fontWeight: 600,
                            color: "#F0F4FB",
                            letterSpacing: "-0.04em",
                            fontVariantNumeric: "tabular-nums",
                            fontFamily: "var(--font-sans)",
                          }}
                        >
                          {m.value}
                        </span>
                        <div
                          style={{
                            height: "1px",
                            width: "40px",
                            background: isGold ? "#F5B544" : "#2B6FE8",
                            marginBottom: "8px",
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "11px",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "#6B7A95",
                            lineHeight: 1.5,
                          }}
                        >
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    {c.url && (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
                      style={{
                        padding: "12px 24px",
                        borderRadius: "8px",
                        background: isGold ? "#F5B544" : "#2B6FE8",
                        color: isGold ? "#06080D" : "#fff",
                        fontSize: "14px",
                        fontWeight: 600,
                      }}
                    >
                      Ver en producción
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    )}
                    <Link
                      href={`/es/work/${c.slug}`}
                      className="inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
                      style={{
                        padding: "12px 24px",
                        borderRadius: "8px",
                        background: "rgba(15,22,35,0.6)",
                        backdropFilter: "blur(24px)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        color: "#C5CFE2",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(74,139,255,0.3)";
                        (e.currentTarget as HTMLElement).style.color = "#F0F4FB";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                        (e.currentTarget as HTMLElement).style.color = "#C5CFE2";
                      }}
                    >
                      Caso completo
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </AnimatedSection>

                {/* RIGHT: gallery */}
                <AnimatedSection delay={0.15} className="lg:sticky lg:top-24 lg:self-start">
                  {c.video && (
                    <figure className="mb-5" style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "#0b0b0b" }}>
                      <ResponsiveVideo
                        label={c.video.label}
                        wide={{ src: c.video.src, poster: c.video.poster, width: c.video.width, height: c.video.height }}
                        tall={{ src: c.video.src, poster: c.video.poster, width: c.video.width, height: c.video.height }}
                      />
                      <figcaption style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "rgba(255,255,255,0.4)", padding: "10px 14px" }}>
                        {c.video.label}
                      </figcaption>
                    </figure>
                  )}
                  <ParallaxScreenshot
                    screenshots={c.screenshots}
                    alt={`${c.title} dashboard`}
                    url={c.url}
                    privateNote={c.privateNote}
                    isHackathon={c.isHackathon}
                  />
                </AnimatedSection>
              </div>
            </div>
          </section>
          </div>
        );
      })}
      <div className="container-custom pb-24" style={{ backgroundColor: "#06080D" }}>
        <div className="max-w-5xl mx-auto">
          <ContactCta
            locale={locale}
            variant="full"
            title={locale === "en" ? "Got a similar data problem?" : "¿Tenés un problema de datos parecido?"}
            text={locale === "en" ? "From raw data to a dashboard in production: ETL, models, maps and the website that tells the story." : "Del dato crudo al tablero en producción: ETL, modelos, mapas y la web que lo cuenta."}
          />
        </div>
      </div>
    </>
  );
}
