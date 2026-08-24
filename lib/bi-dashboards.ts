/**
 * Galería de dashboards Power BI (/perfiles/bi/dashboards).
 * width/height = dimensiones nativas del archivo: la galería nunca escala
 * por encima de ellas para no perder nitidez.
 */
export type DashboardShot = {
  src: string;
  width: number;
  height: number;
  caption: { es: string; en: string };
};

export type Dashboard = {
  id: string;
  number: string;
  name: { es: string; en: string };
  tagline: { es: string; en: string };
  /** "public" = dato abierto, "client" = operación real de cliente */
  dataSource: "public" | "client";
  period: string;
  tags: string[];
  shots: DashboardShot[];
};

export const DASHBOARDS: Dashboard[] = [
  {
    id: "exportaciones",
    number: "01",
    name: {
      es: "Exportaciones Argentina",
      en: "Argentine Exports",
    },
    tagline: {
      es: "Serie 2007–2023 de valor FOB exportado, cruzada por tamaño de empresa, rubro y destino. Navegación por páginas sobre un mismo modelo de datos, con mapa coroplético de mercados.",
      en: "2007–2023 FOB export value, cross-analysed by company size, sector and destination. Multi-page navigation over a single data model, with a choropleth map of markets.",
    },
    dataSource: "public",
    period: "2007–2023",
    tags: ["Power BI", "Modelo estrella", "Mapa coroplético", "Serie temporal"],
    shots: [
      {
        src: "/perfiles/bi/dashboards/expo-tamano-empresa.jpg",
        width: 1280,
        height: 624,
        caption: {
          es: "Por tamaño de empresa — USD 17,79 B FOB sobre 152.553 empresas exportadoras",
          en: "By company size — USD 17.79 B FOB across 152,553 exporting companies",
        },
      },
      {
        src: "/perfiles/bi/dashboards/expo-rubro.jpg",
        width: 1280,
        height: 612,
        caption: {
          es: "Por rubro — productos primarios, MOI, MOA y combustibles",
          en: "By sector — primary goods, industrial and agricultural manufactures, fuels",
        },
      },
      {
        src: "/perfiles/bi/dashboards/expo-destinos.jpg",
        width: 1280,
        height: 611,
        caption: {
          es: "Por destino — top 10 países, mapa coroplético y FOB por mercado",
          en: "By destination — top 10 countries, choropleth map and FOB per market",
        },
      },
    ],
  },
  {
    id: "patentamientos",
    number: "02",
    name: {
      es: "Patentamientos de automóviles",
      en: "Vehicle Registrations",
    },
    tagline: {
      es: "1,14 millones de patentamientos abiertos por marca, modelo, versión, provincia y tipo de vehículo, con seis dimensiones de slicers sincronizados.",
      en: "1.14 M vehicle registrations broken down by brand, model, trim, province and vehicle type, across six synchronised slicer dimensions.",
    },
    dataSource: "public",
    period: "2025",
    tags: ["Power BI", "Slicers sincronizados", "Ranking", "Drill-down"],
    shots: [
      {
        src: "/perfiles/bi/dashboards/patentamientos.jpg",
        width: 1208,
        height: 668,
        caption: {
          es: "1.142.406 patentamientos — top marcas, modelos, versiones y provincias",
          en: "1,142,406 registrations — top brands, models, trims and provinces",
        },
      },
    ],
  },
  {
    id: "ingresos-tarjeta",
    number: "03",
    name: {
      es: "Ingresos por tarjeta — conciliación",
      en: "Card Revenue — Reconciliation",
    },
    tagline: {
      es: "Conciliación diaria de cobros con tarjeta contra lo facturado: diferencia de cobro, cobros de más y de menos, y radares de mejores y peores días del mes.",
      en: "Daily reconciliation of card settlements against invoiced revenue: collection gap, over- and under-collection, plus radar charts of best and worst days.",
    },
    dataSource: "client",
    period: "Feb–Abr 2024",
    tags: ["Conciliación", "Control de gestión", "Radar", "KPI cards"],
    shots: [
      {
        src: "/perfiles/bi/dashboards/ingresos-tarjeta.jpg",
        width: 1280,
        height: 457,
        caption: {
          es: "Diferencia de cobro de −$1,78 M detectada sobre $1.582 M facturados",
          en: "A −$1.78 M collection gap surfaced against $1,582 M invoiced",
        },
      },
    ],
  },
  {
    id: "kiosco",
    number: "04",
    name: {
      es: "Cadena de kioscos 24 hs",
      en: "24h Convenience Chain",
    },
    tagline: {
      es: "Margen de ganancia por barrio, sucursal, categoría y producto sobre 1,5 M de unidades vendidas, con apertura por método de pago y billetera virtual.",
      en: "Gross margin by neighbourhood, store, category and product across 1.5 M units sold, broken down by payment method and digital wallet.",
    },
    dataSource: "client",
    period: "2024",
    tags: ["Margen bruto", "Mix de pago", "Ranking de sucursales"],
    shots: [
      {
        src: "/perfiles/bi/dashboards/kiosco.jpg",
        width: 1280,
        height: 505,
        caption: {
          es: "$354,7 M vendidos con $169,5 M de margen — top 10 sucursales por ganancia",
          en: "$354.7 M in sales, $169.5 M margin — top 10 stores by profit",
        },
      },
    ],
  },
  {
    id: "mayorista",
    number: "05",
    name: {
      es: "Venta mayorista — calzado e indumentaria",
      en: "Wholesale — Footwear & Apparel",
    },
    tagline: {
      es: "5,75 M de unidades en cinco años, con estacionalidad mensual, ranking de clientes mayoristas y apertura por modelo, color y género.",
      en: "5.75 M units over five years, with monthly seasonality, wholesale customer ranking and breakdown by model, colour and gender.",
    },
    dataSource: "client",
    period: "2021–2025",
    tags: ["Estacionalidad", "Matriz año/mes", "Top clientes"],
    shots: [
      {
        src: "/perfiles/bi/dashboards/mayorista-rubro.jpg",
        width: 1280,
        height: 556,
        caption: {
          es: "Por rubro y cliente — matriz 2021-2025 sobre 5.751.004 unidades",
          en: "By sector and customer — 2021–2025 matrix covering 5,751,004 units",
        },
      },
      {
        src: "/perfiles/bi/dashboards/mayorista-tienda.jpg",
        width: 1280,
        height: 620,
        caption: {
          es: "Por categoría de tienda — top modelos, colores y género",
          en: "By store category — top models, colours and gender split",
        },
      },
    ],
  },
  {
    id: "forma-de-pago",
    number: "06",
    name: {
      es: "Ventas por forma de pago",
      en: "Sales by Payment Method",
    },
    tagline: {
      es: "$10.220 M en 45.530 operaciones abiertas por unidad de negocio, local, plataforma de cobro, banco y tipo de tarjeta, con filtro por cantidad de cuotas.",
      en: "$10,220 M across 45,530 transactions, split by business unit, store, acquirer, bank and card type, filterable by instalment count.",
    },
    dataSource: "client",
    period: "1er semestre 2025",
    tags: ["Mix de cobro", "Adquirentes", "Cuotas"],
    shots: [
      {
        src: "/perfiles/bi/dashboards/forma-de-pago.jpg",
        width: 1145,
        height: 417,
        caption: {
          es: "E-commerce, locales y mayorista — plataformas, bancos y tipo de tarjeta",
          en: "E-commerce, stores and wholesale — acquirers, banks and card types",
        },
      },
    ],
  },
  {
    id: "creditos-personales",
    number: "07",
    name: {
      es: "Ventas por créditos personales",
      en: "Sales via Personal Credit",
    },
    tagline: {
      es: "Los créditos personales explican el 22 % de la venta con sólo el 13 % de las operaciones: facturación por financiera, por local y por mes.",
      en: "Personal credit drives 22 % of revenue on just 13 % of transactions: billing by lender, by store and by month.",
    },
    dataSource: "client",
    period: "1er semestre 2025",
    tags: ["Financieras", "Ticket promedio", "Penetración"],
    shots: [
      {
        src: "/perfiles/bi/dashboards/creditos-personales.jpg",
        width: 1155,
        height: 426,
        caption: {
          es: "$2.265 M en 6.098 operaciones — ticket promedio de $174.298",
          en: "$2,265 M across 6,098 transactions — $174,298 average ticket",
        },
      },
    ],
  },
  {
    id: "farmacia",
    number: "08",
    name: {
      es: "Cadena de farmacias",
      en: "Pharmacy Chain",
    },
    tagline: {
      es: "Venta, costo y margen por categoría, subcategoría y barrio sobre 1,5 M de unidades, con cobertura de obra social y medio de pago del cliente.",
      en: "Revenue, cost and margin by category, subcategory and neighbourhood over 1.5 M units, including health-insurance coverage and customer payment method.",
    },
    dataSource: "client",
    period: "2024",
    tags: ["Margen por categoría", "Obra social", "Mix de pago"],
    shots: [
      {
        src: "/perfiles/bi/dashboards/farmacia.jpg",
        width: 1280,
        height: 483,
        caption: {
          es: "$1.321 M vendidos con $495 M de margen — apertura por barrio y categoría",
          en: "$1,321 M in sales with $495 M margin — split by neighbourhood and category",
        },
      },
    ],
  },
];

/** Los que se muestran como adelanto en /perfiles/bi */
export const FEATURED_DASHBOARD_IDS = [
  "exportaciones",
  "ingresos-tarjeta",
  "kiosco",
];

export const DASHBOARD_STATS = {
  dashboards: DASHBOARDS.length,
  views: DASHBOARDS.reduce((n, d) => n + d.shots.length, 0),
  openData: DASHBOARDS.filter((d) => d.dataSource === "public").length,
};

export function dashboardLocale(locale: string): "es" | "en" {
  return locale === "en" ? "en" : "es";
}
