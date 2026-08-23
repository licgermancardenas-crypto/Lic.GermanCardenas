/** Copy compartido por los perfiles: metadata SEO + tarjetas OG. */
export type ProfileKey = "fpa" | "data-science" | "bi" | "politics";

type ProfileCopy = {
  title: string;
  description: string;
  ogTitle: string;
  ogSubtitle: string;
  chips: string[];
};

export const PROFILE_ACCENT: Record<ProfileKey, string> = {
  fpa: "#635bff",
  "data-science": "#06b6d4",
  bi: "#F59E0B",
  politics: "#EF4444",
};

export const PROFILES: Record<"es" | "en", Record<ProfileKey, ProfileCopy>> = {
  es: {
    fpa: {
      title: "FP&A Specialist — Germán Cárdenas",
      description:
        "Financial Planning & Analysis: modelos de proyección financiera, three-statement, DCF, Private Equity, portafolios bursátiles y valuación de proyectos de inversión.",
      ogTitle: "FP&A Specialist",
      ogSubtitle:
        "Modelos de proyección, DCF y valuación de proyectos de inversión",
      chips: ["Three-statement", "DCF", "Sensibilidad", "Reporting"],
    },
    "data-science": {
      title: "Data Scientist & ML Engineer — Germán Cárdenas",
      description:
        "Pipelines predictivos, Machine Learning, NLP y Geospatial Data Engineering integrados en infraestructura de producción.",
      ogTitle: "Data Scientist & ML Engineer",
      ogSubtitle:
        "Modelos predictivos, NLP y data engineering geoespacial en producción",
      chips: ["Machine Learning", "NLP", "Geospatial", "MLOps"],
    },
    bi: {
      title: "Corporate BI & Data Analyst — Germán Cárdenas",
      description:
        "Pipelines de ETL, modelado relacional y dashboards ejecutivos en Power BI para control de gestión y optimización de márgenes operativos.",
      ogTitle: "Corporate BI & Data Analyst",
      ogSubtitle:
        "ETL, modelado relacional y dashboards ejecutivos en producción",
      chips: ["Power BI", "ETL", "SQL", "KPIs"],
    },
    politics: {
      title: "Political Intelligence & Analytics — Germán Cárdenas",
      description:
        "Inteligencia electoral basada en datos: cartografía geoespacial, social listening, War Room BI y segmentación científica del electorado.",
      ogTitle: "Political Intelligence",
      ogSubtitle:
        "Cartografía electoral, social listening y War Room BI de campaña",
      chips: ["GIS electoral", "Social Listening", "War Room", "Segmentación"],
    },
  },
  en: {
    fpa: {
      title: "FP&A Specialist — Germán Cárdenas",
      description:
        "Financial Planning & Analysis: forecasting models, three-statement modelling, DCF, private equity, market portfolios and investment project valuation.",
      ogTitle: "FP&A Specialist",
      ogSubtitle: "Forecasting models, DCF and investment project valuation",
      chips: ["Three-statement", "DCF", "Sensitivity", "Reporting"],
    },
    "data-science": {
      title: "Data Scientist & ML Engineer — Germán Cárdenas",
      description:
        "Predictive pipelines, machine learning, NLP and geospatial data engineering shipped into production infrastructure.",
      ogTitle: "Data Scientist & ML Engineer",
      ogSubtitle:
        "Predictive models, NLP and geospatial data engineering in production",
      chips: ["Machine Learning", "NLP", "Geospatial", "MLOps"],
    },
    bi: {
      title: "Corporate BI & Data Analyst — Germán Cárdenas",
      description:
        "ETL pipelines, relational modelling and executive Power BI dashboards for management control and operating-margin optimisation.",
      ogTitle: "Corporate BI & Data Analyst",
      ogSubtitle: "ETL, relational modelling and executive dashboards in production",
      chips: ["Power BI", "ETL", "SQL", "KPIs"],
    },
    politics: {
      title: "Political Intelligence & Analytics — Germán Cárdenas",
      description:
        "Data-driven electoral intelligence: geospatial cartography, social listening, war-room BI and scientific voter segmentation.",
      ogTitle: "Political Intelligence",
      ogSubtitle: "Electoral cartography, social listening and campaign war-room BI",
      chips: ["Electoral GIS", "Social Listening", "War Room", "Segmentation"],
    },
  },
};

export function profileCopy(locale: string, key: ProfileKey) {
  return PROFILES[locale === "en" ? "en" : "es"][key];
}
