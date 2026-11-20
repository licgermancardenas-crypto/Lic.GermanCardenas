/**
 * Capa de presentación de los casos de la home: cuáles van en formato grande,
 * a qué categoría pertenece cada uno (filtros) y el texto en inglés.
 * El texto en castellano vive en FeaturedCases.tsx (datos originales).
 */

export type CaseTag = "finance" | "gis" | "ai" | "security";

export const TAG_LABELS: Record<CaseTag, { es: string; en: string }> = {
  finance: { es: "Finanzas", en: "Finance" },
  gis: { es: "GIS", en: "GIS" },
  ai: { es: "IA", en: "AI" },
  security: { es: "Seguridad", en: "Security" },
};

/** Los cuatro casos que se muestran en formato grande, en este orden. */
export const FEATURED_IDS = ["caso-02", "caso-06", "caso-07", "caso-09"] as const;

export const CASE_TAGS: Record<string, CaseTag[]> = {
  "caso-01": ["finance", "ai"],
  "caso-02": ["finance", "ai"],
  "caso-03": ["gis"],
  "caso-04": ["gis", "ai"],
  "caso-05": ["ai", "gis"],
  "caso-06": ["finance"],
  "caso-07": ["gis", "ai", "security"],
  "caso-08": ["finance", "ai", "security"],
  "caso-09": ["ai"],
  "caso-10": ["security"],
  "caso-11": ["gis"],
};

export type CaseEn = {
  category: string;
  subtitle: string;
  meta: { rol: string; escala: string; stack: string; estado: string };
  metricLabels: string[];
  /** Solo los casos en formato grande. */
  challenge?: string;
  approach?: string;
  impact?: string;
  privateNote?: string;
};

export const CASES_EN: Record<string, CaseEn> = {
  "caso-01": {
    category: "B2B SAAS · NEIGHBOURHOOD RETAIL",
    subtitle: "The management system for kiosks, minimarkets and neighbourhood stores: sales, stock, purchasing, invoicing and an AI that warns before something runs out.",
    meta: { rol: "Co-founder · CEO", escala: "Neighbourhood retail · Argentina", stack: "Next.js · Supabase · ARCA", estado: "In production" },
    metricLabels: ["Kiosks in Argentina", "Built-in invoicing", "Per month, by branches"],
  },
  "caso-02": {
    category: "B2B SAAS · HACKATHON WINNER",
    subtitle: "Commercial intelligence platform for independent stores with native POS integration.",
    meta: { rol: "Lead Developer & Pitch", escala: "SaaS · Small stores", stack: "React · FastAPI · Clover API", estado: "2025 winner" },
    metricLabels: ["Modelled revenue", "Customer return rate", "Teams outcompeted"],
    challenge:
      "Small stores have no visibility of their business beyond the cash register. They use 3–5 disconnected tools — POS, WhatsApp, Excel — that produce data without any consolidated intelligence. The result: purchasing, pricing and promotion decisions based on gut feeling, not on real customer behaviour.",
    approach:
      "In 72 hours we built a platform that connects the POS (Clover), sales history and customer data in a single dashboard. The differentiator was embedded AI that writes a personalised 'daily briefing': alerts on customers who stopped coming, payment-method analysis, a monthly target projection and specific action recommendations.",
    impact:
      "The jury highlighted the mix of technical depth — real POS integration, cohort analysis, generative AI — with a UX designed for the average shop owner, not the analyst. The live demo with real data and the narrative pitch sealed it against 200+ competing teams.",
  },
  "caso-03": {
    category: "AGRITECH · GIS · ENTERPRISE",
    subtitle: "Nationwide geospatial platform for Argentine agribusiness.",
    meta: { rol: "Full-stack Developer & GIS", escala: "Enterprise · 24 provinces", stack: "Next.js 15 · PostGIS · FastAPI", estado: "In production" },
    metricLabels: ["Active customers", "Modelled revenue", "Conflicts detected"],
  },
  "caso-04": {
    category: "RESEARCH · DATA ANALYTICS",
    subtitle: "Analysis of 1 million Los Angeles police records with methodological rigour.",
    meta: { rol: "Data Analyst & Developer", escala: "Research · 5 years of data", stack: "Next.js · Python · D3.js", estado: "Live in production" },
    metricLabels: ["Records processed", "Clearance rate", "Analysis modules"],
  },
  "caso-05": {
    category: "DATA SCIENCE · AGRIBUSINESS · FREELANCE",
    subtitle: "Market intelligence platform for a yerba mate client: data that isn't estimated, it's verified.",
    meta: { rol: "Freelance Data Scientist & Full-stack", escala: "12 views · 24 years of data", stack: "Next.js · FastAPI · PostGIS", estado: "Delivered to client" },
    metricLabels: ["Validated ML models", "Consumption model error", "Export destinations"],
  },
  "caso-06": {
    category: "FINANCE · ENERGY · RESEARCH",
    subtitle: "YPF posted the best quarter in its history and the market sold it. This case reconstructs why.",
    meta: { rol: "Financial analyst & Full-stack", escala: "5,089 wells · data since 2009", stack: "Python · Next.js · Power BI", estado: "In production" },
    metricLabels: ["Of the increase is price", "EBITDA explained (4 drivers)", "Results punished"],
    challenge:
      "In Q2 2026 YPF reported adjusted EBITDA of US$ 2,804M, up 149% year on year, with debt at a low and shale up 47%. That same day the stock fell 3.6%. The easy reading is that the market got it wrong; to back any answer you had to cross the financial statements with well-by-well production, crude prices, debt and peers.",
    approach:
      "A Python pipeline that ingests each source separately — SEC 20-F and 6-K filings, Energy Secretariat production, Copernicus terrain, ADR, Brent, country risk — and computes everything in one place, with 14 automatic checks that stop the run if anything doesn't add up. The same data feeds three outputs: a website with a 3D basin map, a Power BI dashboard and a macro-free Excel workbook auditable cell by cell.",
    impact:
      "Of the US$ 1,680M year-on-year EBITDA increase, US$ 851M is crude price: a record explained by the cycle, not by the company. And the punishment wasn't an exception: 16 of the last 22 results drew a negative abnormal reaction, and every 100 basis points of country risk takes 3.3% off the stock.",
  },
  "caso-07": {
    category: "DATA SCIENCE · URBAN SAFETY · GOVTECH",
    subtitle: "Crime risk in Buenos Aires by area and shift, and what to do about it: where to patrol, where to put cameras and which corridors to control.",
    meta: { rol: "Data Scientist & Full-stack", escala: "401 hexagons · 2016–2025", stack: "Python · LightGBM · Next.js", estado: "In production" },
    metricLabels: ["Coverage, same resources", "Crime in 30% of the area", "2025 crimes analysed"],
    challenge:
      "The city logs more than 130,000 crimes a year, and police stations, patrols and cameras are placed by history, not by risk. The data to do better exists, but it's spread across more than 20 open datasets that are never crossed: crime, transport, street lighting, road accidents and census.",
    approach:
      "I unified every source on an H3 hexagonal grid by shift and trained a count model (LightGBM with a Poisson objective), validated spatially and explained with SHAP. On top of the prediction I built three optimisation modules — patrols by maximum coverage, new cameras on the road network and checkpoints on access corridors — plus an equity audit of who each plan covers.",
    impact:
      "With the same 75 patrols, relocated by risk, coverage rises from 35.1% to 58.7%: 23.6 points more without adding a single resource. And an honest lesson: the model barely beats repeating the past, because crime in Buenos Aires is very persistent. The value lies in deciding better, not in guessing better.",
  },
  "caso-08": {
    category: "DATA SCIENCE · FINANCE · ANTI-MONEY LAUNDERING",
    subtitle: "Graph neural networks to find money laundering that traditional rules miss. A proof of concept on synthetic data.",
    meta: { rol: "Data Scientist & Full-stack", escala: "75,000 accounts · 11.2M transactions", stack: "PyTorch Geometric · FastAPI · Next.js", estado: "Live demo" },
    metricLabels: ["PR-AUC (GraphSAGE)", "Fraud detected at 90% precision", "Fraud homophily in the network"],
  },
  "caso-09": {
    category: "AI ENGINEERING · PUBLIC DATA · CONSULTANCY",
    subtitle: "My data-analytics and political geo-intelligence consultancy, and the AI system that researches real sources before writing a single line.",
    meta: { rol: "Founder · AI Engineer", escala: "41 carousels · 451 slides", stack: "Next.js · Claude · Supabase", estado: "In production" },
    metricLabels: ["Carousels produced", "Public series per radar sweep", "Links written by the model"],
    challenge:
      "Publishing data analysis every week without falling into what generative AI does by default: making up figures, citing sources that don't exist and producing a generic look. For a consultancy whose product is precision, a single invented number is enough to lose credibility.",
    approach:
      "A six-agent pipeline — research, intelligence, strategy, copy, visual and quality control — in which models never write a link: they cite search results by number and the code resolves the real source. Before that, an AI-free radar sweeps about 300 public series (central bank, datos.gob.ar, RENAPER, Ministry of Security) and scores each signal from 0 to 100. Slides are composed in code with the real values, because an image model can't reliably write a percentage.",
    impact:
      "41 carousels produced between August and November 2026, each with its source sheet and every slide labelled as observed data or generated image. It's the same way of working I offer clients: AI that speeds the work up, with full traceability and a person who approves before publishing.",
  },
  "caso-10": {
    category: "CYBERSECURITY · DLP · SAAS PRODUCT",
    subtitle: "Endpoint security and data-loss prevention for companies that handle money: it detects ransomware, leaked credentials and USB drives without reading what people type.",
    meta: { rol: "Founder · Architecture & development", escala: "Go agent · real time · multi-tenant", stack: "Go · Node/TS · Next.js · Supabase", estado: "Tested MVP · seeking first client" },
    metricLabels: ["EDR detectors in the agent", "Open holes in the multi-tenant audit", "Modes: company and proctoring"],
    privateNote: "Own product · demo on request",
  },
  "caso-11": {
    category: "ELECTORAL INTELLIGENCE · GEOSPATIAL · CLIENT",
    subtitle: "Thirty years of the Buenos Aires vote, from district to polling station, for a 2027 mayoral campaign. The finding: PRO's collapse was about the brand, not the territory.",
    meta: { rol: "Project lead · Atlas Analytics", escala: "474 tables · 167 circuits · 318,607 parcels", stack: "Python · GeoPandas · ecological inference", estado: "For a client · 2026" },
    metricLabels: ["PRO retention, three methods", "Validated R²: territory explains level", "Validated R²: it doesn't explain change"],
  },
};

/** Índice liviano de casos (para la paleta Cmd+K, sin cargar la sección completa). */
export const CASE_INDEX: { id: string; slug: string; number: string; title: string; es: string; en: string }[] = [
  { id: "caso-01", slug: "atlas-one-erp", number: "01", title: "Atlas One ERP", es: "SaaS B2B · Comercio de cercanía", en: "B2B SaaS · Neighbourhood retail" },
  { id: "caso-02", slug: "atlas-nexus", number: "02", title: "Atlas Nexus", es: "SaaS B2B · Hackathon winner", en: "B2B SaaS · Hackathon winner" },
  { id: "caso-03", slug: "agronova", number: "03", title: "AgroNova", es: "AgriTech · GIS · Enterprise", en: "AgriTech · GIS · Enterprise" },
  { id: "caso-04", slug: "lapd", number: "04", title: "LAPD Crime Analytics", es: "Research · Data analytics", en: "Research · Data analytics" },
  { id: "caso-05", slug: "yerba-mate-ml", number: "05", title: "Yerba Mate Intelligence", es: "Data science · Agroindustria · Freelance", en: "Data science · Agribusiness · Freelance" },
  { id: "caso-06", slug: "atlas-ypf", number: "06", title: "ATLAS-YPF", es: "Finanzas · Energía · Research", en: "Finance · Energy · Research" },
  { id: "caso-07", slug: "atlas-sentinel", number: "07", title: "ATLAS SENTINEL", es: "Data science · Seguridad urbana · GovTech", en: "Data science · Urban safety · GovTech" },
  { id: "caso-08", slug: "phantom-ai", number: "08", title: "Phantom AI", es: "Data science · Finanzas · Prevención de lavado", en: "Data science · Finance · Anti-money laundering" },
  { id: "caso-09", slug: "atlas-analytics", number: "09", title: "Atlas Analytics", es: "AI engineering · Datos públicos · Consultora", en: "AI engineering · Public data · Consultancy" },
  { id: "caso-10", slug: "zeus", number: "10", title: "ZEUS · Atlas Control", es: "Ciberseguridad · DLP · Producto SaaS", en: "Cybersecurity · DLP · SaaS product" },
  { id: "caso-11", slug: "caba-jefatura", number: "11", title: "Atlas CABA · Jefatura de Gobierno", es: "Inteligencia electoral · Geoespacial · Cliente", en: "Electoral intelligence · Geospatial · Client" },
];
