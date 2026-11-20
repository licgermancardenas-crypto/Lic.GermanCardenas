/**
 * Experiencia profesional — fuente única, bilingüe.
 * Las fechas son datos (año/mes), no texto: el orden, los años de experiencia
 * y la cantidad de empresas se calculan desde acá y nunca se desincronizan.
 */

export type Lang = "es" | "en";
export type L = { es: string; en: string };
export type YM = { y: number; m: number }; // m: 1-12

export type ExpItem = {
  company: string;
  role: L;
  start: YM;
  end: YM | null; // null = presente
  location: L;
  bullets: { es: string[]; en: string[] };
  impacts: { metric: string; label: L }[];
  technologies: string[];
  core_stack: string[];
  methodology: string[];
};

const RAW: ExpItem[] = [
  {
    company: "AgroJuntos",
    role: { es: "Analista BI & Planeamiento Financiero", en: "BI & Financial Planning Analyst" },
    start: { y: 2025, m: 10 },
    end: null,
    location: { es: "Buenos Aires, Argentina · Remoto", en: "Buenos Aires, Argentina · Remote" },
    bullets: {
      es: [
        "Diseño y ejecución de análisis de datos comerciales, financieros y operativos sobre clientes, productos y canales; generando insights estratégicos para la toma de decisiones.",
        "Desarrollo y mantenimiento de dashboards ejecutivos en Power BI con KPIs de crecimiento, rentabilidad, riesgo y eficiencia operativa.",
        "Análisis de rentabilidad por tipo de cliente (productor, agroindustria, importador) y canal de venta (B2B directo y e-commerce), identificando oportunidades en pricing y mix de producto.",
        "Automatizaciones en Python (Pandas) para limpieza y consolidación de bases de múltiples fuentes, reduciendo en 35% los tiempos de procesamiento.",
        "Diseño de esquemas SQL relacionales orientados a analítica y CRM interno B2B con herramientas AI-assisted (v0).",
        "Modelos de proyección financiera y forecasting de ventas con análisis de escenarios y sensibilidad de márgenes.",
      ],
      en: [
        "Design and execution of commercial, financial and operational data analysis on customers, products and channels, producing strategic insights for decision-making.",
        "Development and maintenance of executive Power BI dashboards with growth, profitability, risk and operational-efficiency KPIs.",
        "Profitability analysis by customer type (grower, agribusiness, importer) and sales channel (direct B2B and e-commerce), identifying pricing and product-mix opportunities.",
        "Python (Pandas) automations to clean and consolidate data from multiple sources, cutting processing time by 35%.",
        "Design of relational SQL schemas for analytics and an internal B2B CRM, with AI-assisted tools (v0).",
        "Financial projection and sales forecasting models with scenario analysis and margin sensitivity.",
      ],
    },
    impacts: [
      { metric: "−35%", label: { es: "Tiempo de procesamiento de datos", en: "Data processing time" } },
      { metric: "+18%", label: { es: "Precisión en forecasting de ventas", en: "Sales forecasting accuracy" } },
      { metric: "4+", label: { es: "Dashboards ejecutivos en producción", en: "Executive dashboards in production" } },
    ],
    technologies: ["Python", "Pandas", "Power BI", "SQL", "DAX", "v0"],
    core_stack: ["ETL Pipelines", "Financial Modeling", "CRM Design", "KPI Architecture"],
    methodology: ["Agile Analytics", "FP&A", "Scenario Analysis", "BI Reporting"],
  },
  {
    company: "RP de Went S.A.",
    role: { es: "Data & BI Analyst", en: "Data & BI Analyst" },
    start: { y: 2025, m: 1 },
    end: null,
    location: { es: "Buenos Aires, Argentina · Freelance", en: "Buenos Aires, Argentina · Freelance" },
    bullets: {
      es: [
        "Relevamiento y estructuración del catálogo digital completo de la cadena (1.479 productos, 125 categorías en 3 niveles jerárquicos) mediante scripts automatizados en Python, con cobertura del 98% en marcas y 99,9% en imágenes.",
        "Scripts de inteligencia competitiva de mercado para relevar precios y catálogos de farmacias competidoras, supermercados y e-commerce, generando benchmarks de pricing por categoría (perfumería, dermocosméticos, cuidado personal).",
        "Pipelines de extracción, limpieza y consolidación de datos transaccionales del POS de 12 sucursales, automatizando ingesta y validación de integridad de datos.",
        "Definición de KPIs comerciales — rotación por SKU y categoría, ticket promedio, ventas por sucursal, estacionalidad, mix de marcas — consolidados en dashboards ejecutivos.",
        "Análisis de rotación de inventario por SKU, sucursal y categoría, identificando productos de movimiento lento y riesgo de vencimiento, con dashboards de control de stock y alertas operativas.",
        "En desarrollo: modelo predictivo de demanda por categoría × sucursal (horizonte 7 y 30 días) para automatizar la planificación de pedidos a droguería.",
      ],
      en: [
        "Survey and structuring of the chain's full digital catalogue (1,479 products, 125 categories across 3 levels) with automated Python scripts, reaching 98% brand coverage and 99.9% image coverage.",
        "Competitive-intelligence scripts that track prices and catalogues of rival pharmacies, supermarkets and e-commerce, producing pricing benchmarks by category (fragrance, dermocosmetics, personal care).",
        "Extraction, cleaning and consolidation pipelines for transactional POS data from 12 branches, automating ingestion and data-integrity checks.",
        "Definition of commercial KPIs — turnover by SKU and category, average ticket, sales by branch, seasonality, brand mix — consolidated in executive dashboards.",
        "Inventory-turnover analysis by SKU, branch and category, flagging slow movers and expiry risk, with stock-control dashboards and operational alerts.",
        "In progress: a demand forecasting model by category × branch (7- and 30-day horizon) to automate purchase planning with wholesalers.",
      ],
    },
    impacts: [
      { metric: "1.479", label: { es: "Productos catalogados", en: "Products catalogued" } },
      { metric: "98%", label: { es: "Cobertura de marcas", en: "Brand coverage" } },
      { metric: "99,9%", label: { es: "Cobertura de imágenes", en: "Image coverage" } },
      { metric: "12", label: { es: "Sucursales integradas", en: "Branches integrated" } },
    ],
    technologies: ["Python", "Pandas", "SQL", "Power BI", "Web Scraping"],
    core_stack: ["Catalog Data Engineering", "Competitive Intelligence", "Inventory Analytics", "POS Data Pipelines"],
    methodology: ["Market Benchmarking", "Demand Forecasting", "Data Quality Assurance", "Retail Analytics"],
  },
  {
    company: "Atomik",
    role: { es: "Analista Comercial & Business Intelligence", en: "Commercial & Business Intelligence Analyst" },
    start: { y: 2025, m: 8 },
    end: { y: 2025, m: 10 },
    location: { es: "Buenos Aires, Argentina", en: "Buenos Aires, Argentina" },
    bullets: {
      es: [
        "Análisis de performance de ventas de 18 locales y +200 clientes mayoristas, integrando datos de canales retail, franquicias y e-commerce para evaluar rentabilidad, márgenes y rotación.",
        "Dashboards y reportes automatizados en Power BI y Excel con KPIs Sell-In/Sell-Out, ticket promedio, rotación y conversión digital, reduciendo tiempos de análisis en 30%.",
        "Proyecciones de ventas y forecasting de demanda con modelos estadísticos y análisis estacional, mejorando la precisión de planificación en +18%.",
        "Estrategias de mix de producto, promociones y pricing junto a Marketing y Operaciones: +15% rotación general, +10% rentabilidad por línea.",
      ],
      en: [
        "Sales performance analysis for 18 stores and 200+ wholesale customers, combining retail, franchise and e-commerce data to assess profitability, margins and turnover.",
        "Automated Power BI and Excel dashboards and reports with Sell-In/Sell-Out, average ticket, turnover and digital conversion KPIs, cutting analysis time by 30%.",
        "Sales projections and demand forecasting with statistical models and seasonal analysis, improving planning accuracy by 18%.",
        "Product-mix, promotion and pricing strategies with Marketing and Operations: +15% overall turnover, +10% profitability per line.",
      ],
    },
    impacts: [
      { metric: "−30%", label: { es: "Tiempos de análisis gerencial", en: "Management analysis time" } },
      { metric: "+18%", label: { es: "Precisión en forecast de demanda", en: "Demand forecast accuracy" } },
      { metric: "+15%", label: { es: "Rotación general de producto", en: "Overall product turnover" } },
      { metric: "+10%", label: { es: "Rentabilidad por línea", en: "Profitability per line" } },
    ],
    technologies: ["Power BI", "Excel", "DAX", "SQL", "Python"],
    core_stack: ["Sell-In/Sell-Out KPIs", "Demand Forecasting", "Pricing Strategy", "Multi-channel Analytics"],
    methodology: ["Statistical Modeling", "Retail Analytics", "Product Mix Optimization", "BI Reporting"],
  },
  {
    company: "CyE — 4 Nortes",
    role: { es: "Analista Comercial", en: "Commercial Analyst" },
    start: { y: 2025, m: 4 },
    end: { y: 2025, m: 8 },
    location: { es: "Buenos Aires, Argentina", en: "Buenos Aires, Argentina" },
    bullets: {
      es: [
        "Análisis de performance comercial de 12 locales propios y e-commerce: márgenes, rentabilidad y comportamiento de compra por medio de pago, producto y estacionalidad.",
        "Implementación de CRM + WhatsApp Business API para segmentación y contacto de clientes mayoristas y minoristas con ofertas personalizadas (+15% ventas).",
        "Estrategia de retargeting multicanal (WhatsApp + email marketing) para promociones estacionales (+12% rotación de stock).",
        "Automatización de reportes de ventas y cash flows diarios via macros Excel, reduciendo en 30% los tiempos de procesamiento.",
        "Análisis de estructura de costos por punto de venta: −10% en gastos de abastecimiento y almacenamiento.",
      ],
      en: [
        "Commercial performance analysis of 12 own stores and e-commerce: margins, profitability and buying behaviour by payment method, product and season.",
        "Rollout of a CRM + WhatsApp Business API to segment and reach wholesale and retail customers with personalised offers (+15% sales).",
        "Multi-channel retargeting strategy (WhatsApp + email) for seasonal promotions (+12% stock turnover).",
        "Automation of daily sales and cash-flow reports with Excel macros, cutting processing time by 30%.",
        "Cost-structure analysis by point of sale: −10% in sourcing and storage costs.",
      ],
    },
    impacts: [
      { metric: "+15%", label: { es: "Ventas por CRM segmentado", en: "Sales from segmented CRM" } },
      { metric: "+12%", label: { es: "Rotación de stock", en: "Stock turnover" } },
      { metric: "−30%", label: { es: "Tiempo en reportes de ventas", en: "Sales reporting time" } },
      { metric: "−10%", label: { es: "Gastos de abastecimiento", en: "Sourcing costs" } },
    ],
    technologies: ["Excel VBA", "WhatsApp API", "Power BI", "CRM Tools", "Python"],
    core_stack: ["CRM Automation", "Sales Reporting", "Cash Flow Modeling", "E-commerce Analytics"],
    methodology: ["Segmented Outreach", "Retargeting Multicanal", "Process Automation", "Cost Analysis"],
  },
  {
    company: "Grupo Dietrich",
    role: { es: "Analista y Asesor Comercial", en: "Commercial Analyst & Advisor" },
    start: { y: 2024, m: 9 },
    end: { y: 2025, m: 3 },
    location: { es: "Buenos Aires, Argentina", en: "Buenos Aires, Argentina" },
    bullets: {
      es: [
        "Gestión, limpieza y clasificación de +20.000 leads mensuales desde web, redes, WhatsApp y Salesforce mediante procesos ETL para generar bases depuradas y accionables.",
        "Modelos de scoring y segmentación para asignación de leads por sucursal, producto y perfil crediticio (+15% tasa de conversión).",
        "Análisis de cartera activa y vencida de planes de ahorro y financiamientos, diseñando estrategias de reactivación (+10% contratos recuperados).",
        "Dashboards Power BI y Excel con KPIs de conversión, tiempo de respuesta, origen de lead y rentabilidad, reduciendo tiempos de análisis en 25%.",
        "Recuperación y reciclaje de leads históricos: +15% en ventas con bajo costo de adquisición.",
      ],
      en: [
        "Management, cleaning and classification of 20,000+ monthly leads from web, social, WhatsApp and Salesforce through ETL processes, producing clean, actionable databases.",
        "Scoring and segmentation models to assign leads by branch, product and credit profile (+15% conversion rate).",
        "Analysis of the active and overdue portfolio of savings plans and financing, designing reactivation strategies (+10% contracts recovered).",
        "Power BI and Excel dashboards with conversion, response time, lead source and profitability KPIs, cutting analysis time by 25%.",
        "Recovery and recycling of historical leads: +15% sales at low acquisition cost.",
      ],
    },
    impacts: [
      { metric: "+15%", label: { es: "Tasa de conversión de leads", en: "Lead conversion rate" } },
      { metric: "+10%", label: { es: "Contratos recuperados", en: "Contracts recovered" } },
      { metric: "−25%", label: { es: "Tiempos de análisis gerencial", en: "Management analysis time" } },
      { metric: "20K+", label: { es: "Leads gestionados mensualmente", en: "Leads managed per month" } },
    ],
    technologies: ["Salesforce", "Power BI", "Excel", "SQL", "Python"],
    core_stack: ["Lead Scoring", "ETL Pipelines", "CRM Analytics", "Portfolio Recovery"],
    methodology: ["ML Scoring Models", "Multi-channel Integration", "BI Reporting", "Lead Lifecycle Management"],
  },
  {
    company: "Wall Street Group",
    role: { es: "Analista Administrativo-Financiero", en: "Administrative & Financial Analyst" },
    start: { y: 2023, m: 6 },
    end: { y: 2024, m: 7 },
    location: { es: "Buenos Aires, Argentina", en: "Buenos Aires, Argentina" },
    bullets: {
      es: [
        "Flujos de fondos, presupuestos y estructuras de capital para +10 proyectos inmobiliarios de construcción y renovación, asegurando control del capital invertido.",
        "Modelos financieros y de inversión (ROI, IRR, VAN, payback) estimando capital requerido y retorno para socios e inversores, con margen de error inferior al 5%.",
        "Administración y seguimiento de fondos de inversión, aportes de capital y distribución de utilidades (+8% eficiencia financiera).",
        "Negociación con proveedores de materiales de construcción: −12% en costos totales sin afectar calidad.",
        "Tableros Power BI y Excel con KPIs de rentabilidad, costo/m², tasa de ocupación y ROI.",
      ],
      en: [
        "Cash flows, budgets and capital structures for 10+ construction and renovation real estate projects, keeping invested capital under control.",
        "Financial and investment models (ROI, IRR, NPV, payback) estimating required capital and returns for partners and investors, with an error margin under 5%.",
        "Administration and tracking of investment funds, capital contributions and profit distribution (+8% financial efficiency).",
        "Negotiation with building-material suppliers: −12% in total costs without affecting quality.",
        "Power BI and Excel dashboards with profitability, cost per m², occupancy and ROI KPIs.",
      ],
    },
    impacts: [
      { metric: "< 5%", label: { es: "Margen de error en modelos financieros", en: "Error margin in financial models" } },
      { metric: "+8%", label: { es: "Eficiencia en gestión de fondos", en: "Fund management efficiency" } },
      { metric: "−12%", label: { es: "Costos por negociación proveedores", en: "Costs via supplier negotiation" } },
      { metric: "10+", label: { es: "Proyectos inmobiliarios modelados", en: "Real estate projects modelled" } },
    ],
    technologies: ["Excel VBA", "Power BI", "Financial Modeling", "SQL", "Bloomberg"],
    core_stack: ["DCF Modeling", "IRR/NPV Analysis", "Capital Structure", "Fund Management"],
    methodology: ["Corporate Finance", "Real Estate Valuation", "Scenario Analysis", "Vendor Negotiation"],
  },
  {
    company: "Florida Trading Co.",
    role: { es: "Analista de Ventas y Finanzas", en: "Sales & Finance Analyst" },
    start: { y: 2021, m: 1 },
    end: { y: 2023, m: 4 },
    location: { es: "Buenos Aires, Argentina", en: "Buenos Aires, Argentina" },
    bullets: {
      es: [
        "Performance financiera y comercial de importadora/distribuidora de insumos médicos en canales mayorista, minorista y online.",
        "Cash flow mensual y proyecciones presupuestarias: +15% precisión en forecast y optimización del capital operativo.",
        "Análisis de márgenes y estructura de costos por canal de venta: +10% rentabilidad.",
        "Control de carga de facturas, precios y documentación comercial, garantizando coherencia con el flujo de fondos.",
        "Negociación con proveedores nacionales e internacionales en condiciones de compra, logística y abastecimiento: −8% costos anuales.",
      ],
      en: [
        "Financial and commercial performance of a medical-supplies importer and distributor across wholesale, retail and online channels.",
        "Monthly cash flow and budget projections: +15% forecast accuracy and better working capital.",
        "Margin and cost-structure analysis by sales channel: +10% profitability.",
        "Control of invoices, prices and commercial documents, keeping them consistent with cash flow.",
        "Negotiation with local and international suppliers on purchase, logistics and sourcing terms: −8% annual costs.",
      ],
    },
    impacts: [
      { metric: "+15%", label: { es: "Precisión en forecast mensual", en: "Monthly forecast accuracy" } },
      { metric: "+10%", label: { es: "Rentabilidad por canal", en: "Profitability by channel" } },
      { metric: "−8%", label: { es: "Costos anuales vía negociación", en: "Annual costs via negotiation" } },
    ],
    technologies: ["Excel", "Power BI", "SQL", "ERP Systems", "Financial Modeling"],
    core_stack: ["Cash Flow Modeling", "Multi-channel P&L", "Import/Export Analytics", "Margin Analysis"],
    methodology: ["Financial Analysis", "International Negotiation", "Sales Intelligence", "Supply Chain Finance"],
  },
];

const key = (d: YM) => d.y * 12 + (d.m - 1);

/** De la más reciente a la más antigua, por fecha de inicio. */
export const EXPERIENCES: ExpItem[] = [...RAW].sort((a, b) => key(b.start) - key(a.start));

export const COMPANIES_COUNT = new Set(RAW.map((e) => e.company)).size;

/** Inicio de la carrera: la fecha de inicio más antigua de la lista. */
export const CAREER_START: YM = RAW.reduce((min, e) => (key(e.start) < key(min) ? e.start : min), RAW[0].start);

/**
 * Años de experiencia como texto, redondeados al año más cercano:
 * "6" mientras faltan meses para cumplirlos (5 años y 10 meses) y "6+" una vez cumplidos.
 * Así el número nunca promete más de lo real.
 */
export function yearsOfExperience(now: Date = new Date()): string {
  const months = Math.max(0, now.getFullYear() * 12 + now.getMonth() - key(CAREER_START));
  const rounded = Math.round(months / 12);
  return months >= rounded * 12 ? `${rounded}+` : `${rounded}`;
}

const MONTHS: Record<Lang, string[]> = {
  es: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};

export function formatYM(d: YM | null, lang: Lang): string {
  if (!d) return lang === "en" ? "Present" : "Presente";
  return `${MONTHS[lang][d.m - 1]} ${d.y}`;
}
