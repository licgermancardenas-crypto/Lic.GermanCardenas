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
  {
    id: "yerba-mate",
    number: "09",
    name: {
      es: "Inteligencia de mercado yerbatero",
      en: "Yerba Mate Market Intelligence",
    },
    tagline: {
      es: "Plataforma web para un cliente del sector yerbatero: producción, consumo, exportaciones, competencia y cadena productiva sobre 24 años de datos oficiales (INYM, INDEC), donde un dato faltante se muestra como \"sin dato\" y nunca se rellena.",
      en: "Web platform for a yerba mate industry client: production, consumption, exports, competition and supply chain across 24 years of official data (INYM, INDEC), where a missing value shows as \"no data\" and is never filled in.",
    },
    dataSource: "public",
    period: "2002–2026",
    tags: ["Next.js", "PostGIS", "Series temporales", "Freelance"],
    shots: [
      {
        src: "/screenshots/yerba-mate/produccion.jpg",
        width: 1873,
        height: 910,
        caption: {
          es: "Producción — 889 M kg en 2025 (−9,9% vs. 2024), cosecha mensual 2012–2026 y superficie por departamento",
          en: "Production — 889 M kg in 2025 (−9.9% vs. 2024), monthly harvest 2012–2026 and planted area by department",
        },
      },
      {
        src: "/screenshots/yerba-mate/cadena-productiva.jpg",
        width: 1884,
        height: 912,
        caption: {
          es: "Cadena productiva — hoja verde a secadero y salida de molino interna y externa",
          en: "Supply chain — green leaf to dryers and mill output to domestic and export markets",
        },
      },
      {
        src: "/screenshots/yerba-mate/exportaciones.jpg",
        width: 1881,
        height: 906,
        caption: {
          es: "Exportaciones — 57,98 M kg en 2025 a 15 destinos, Siria concentra el 80,1%",
          en: "Exports — 57.98 M kg in 2025 to 15 destinations, Syria takes 80.1%",
        },
      },
      {
        src: "/screenshots/yerba-mate/consumo.jpg",
        width: 1900,
        height: 909,
        caption: {
          es: "Consumo — 5,59 kg por persona en 2025 y mix de envases del mercado interno",
          en: "Consumption — 5.59 kg per person in 2025 and packaging mix in the domestic market",
        },
      },
    ],
  },  {
    id: "ypf",
    number: "10",
    name: {
      es: "YPF · El récord que el mercado no pagó",
      en: "YPF · The Record the Market Didn't Pay For",
    },
    tagline: {
      es: "Estados contables de la SEC cruzados con producción pozo por pozo, Brent, deuda y comparables: por qué la acción cayó 3,6% el día del mejor balance de la historia. Proyecto PBIP con modelo TMDL, generado por script.",
      en: "SEC financial statements combined with well-level production, Brent, debt and comparables: why the stock fell 3.6% on the day of its best-ever results. A PBIP project with a TMDL model, generated by script.",
    },
    dataSource: "public",
    period: "2009–2026",
    tags: ["Power BI", "PBIP + TMDL", "Puente de EBITDA", "Simulador"],
    shots: [
      {
        src: "/screenshots/ypf/powerbi-tablero.jpg",
        width: 1254,
        height: 668,
        caption: {
          es: "Tablero 2T26 — EBITDA ajustado de US$ 2.804M (+149,5%), ingresos de US$ 6.574M y margen de 42,7%",
          en: "Q2 2026 dashboard — adjusted EBITDA of US$ 2,804M (+149.5%), revenue of US$ 6,574M and a 42.7% margin",
        },
      },
      {
        src: "/screenshots/ypf/powerbi-puente.jpg",
        width: 1254,
        height: 668,
        caption: {
          es: "Puente del EBITDA — de US$ 1.680M de mejora, US$ 851M son precio; simulador de Brent, producción y lifting cost",
          en: "EBITDA bridge — of a US$ 1,680M improvement, US$ 851M is price; Brent, production and lifting-cost simulator",
        },
      },
      {
        src: "/screenshots/ypf/powerbi-deuda.jpg",
        width: 1254,
        height: 668,
        caption: {
          es: "Deuda y comparables — US$ 8.950M a cupón promedio de 7,3%, vencimientos por año y YPF contra Vista y Pampa",
          en: "Debt and comparables — US$ 8,950M at a 7.3% average coupon, maturities by year, and YPF against Vista and Pampa",
        },
      },
      {
        src: "/screenshots/ypf/powerbi-territorio.jpg",
        width: 1254,
        height: 668,
        caption: {
          es: "Producción por territorio — 556.591 boe/d, 81% shale, abierta por cuenca",
          en: "Production by territory — 556,591 boe/d, 81% shale, broken down by basin",
        },
      },
    ],
  },  {
    id: "puntualidad-eeuu",
    number: "11",
    name: {
      es: "Puntualidad aérea de EE.UU.",
      en: "US Airline On-Time Performance",
    },
    tagline: {
      es: "21,1 M de vuelos de EE.UU. (sep-2023 a ago-2026) con datos oficiales del BTS (Bureau of Transportation Statistics): puntualidad, causas de demora, aeropuertos, rutas y patrones horarios. Diseño oscuro tipo app, con navegación propia, cajón de filtros y medidas SVG, todo generado por scripts.",
      en: "21.1 M US flights (Sep 2023 to Aug 2026) from official BTS (Bureau of Transportation Statistics) data: punctuality, delay causes, airports, routes and hourly patterns. A dark app-style design with custom navigation, a filter drawer and SVG measures, all generated by script.",
    },
    dataSource: "public",
    period: "2023–2026",
    tags: ["Power BI", "PBIR + TMDL", "Medidas SVG", "21 M de vuelos"],
    shots: [
      {
        src: "/perfiles/bi/dashboards/bsi-portada.jpg",
        width: 1340,
        height: 753,
        caption: {
          es: "Portada — 21,1 M de vuelos analizados, 78,6% de puntualidad global y 72,1 min de demora media",
          en: "Cover — 21.1 M flights analysed, 78.6% on-time overall and a 72.1-minute average delay",
        },
      },
      {
        src: "/perfiles/bi/dashboards/bsi-resumen.jpg",
        width: 1340,
        height: 753,
        caption: {
          es: "Resumen — 78,6% a tiempo (−2,1 pp en 12 meses), 1,49% cancelados y ranking de aerolíneas con semáforo",
          en: "Summary — 78.6% on time (−2.1 pp over 12 months), 1.49% cancelled and an airline ranking with traffic-light colours",
        },
      },
      {
        src: "/perfiles/bi/dashboards/bsi-aeropuertos.jpg",
        width: 1340,
        height: 753,
        caption: {
          es: "Aeropuertos y rutas — demoras por aeropuerto de origen y las rutas con peor puntualidad",
          en: "Airports and routes — delays by origin airport and the routes with the worst punctuality",
        },
      },
      {
        src: "/perfiles/bi/dashboards/bsi-patrones.jpg",
        width: 1340,
        height: 753,
        caption: {
          es: "Patrones — matriz día × hora de vuelos demorados, estacionalidad y puntualidad por franja",
          en: "Patterns — day × hour matrix of delayed flights, seasonality and punctuality by time band",
        },
      },
      {
        src: "/perfiles/bi/dashboards/bsi-causas.jpg",
        width: 1340,
        height: 753,
        caption: {
          es: "Causas — el avión previo explica el 39,8% de los minutos de demora; el 73,5% es controlable por la aerolínea",
          en: "Causes — late-arriving aircraft explains 39.8% of delay minutes; 73.5% is within the airline's control",
        },
      },
    ],
  },  {
    id: "brasil-balotaje",
    number: "12",
    name: {
      es: "Brasil 2026 · Balotaje presidencial",
      en: "Brazil 2026 · Presidential Runoff",
    },
    tagline: {
      es: "17 páginas y 130 medidas DAX para el balotaje de Brasil: del país al radio censal (472 mil), con simulador, 33 encuestas y seguimiento en vivo de la noche electoral. El pronóstico falló —daba ganador a Flávio y ganó Lula con 51,79%—. El post-mortem muestra que el mapa acertó el orden de los estados (correlación 0,996) y que el error vino de un supuesto nacional.",
      en: "17 pages and 130 DAX measures for Brazil's runoff: from the whole country down to 472,000 census tracts, with a simulator, 33 polls and live election-night tracking. The forecast missed — it called Flávio and Lula won with 51.79%. The post-mortem shows the map got the ranking of states right (0.996 correlation) and the error came from a national assumption.",
    },
    dataSource: "public",
    period: "2026",
    tags: ["Power BI", "130 medidas DAX", "472 mil radios censales", "Post-mortem"],
    shots: [
      {
        src: "/perfiles/bi/dashboards/brasil-inicio.jpg",
        width: 1978,
        height: 1138,
        caption: {
          es: "Inicio — el pronóstico previo al 25/10 (Lula 47,3%). El resultado oficial fue Lula 51,79%: el pronóstico falló",
          en: "Home — the forecast ahead of 25/10 (Lula 47.3%). The official result was Lula 51.79%: the forecast missed",
        },
      },
      {
        src: "/perfiles/bi/dashboards/brasil-resumen.jpg",
        width: 1978,
        height: 1138,
        caption: {
          es: "Resumen nacional — pronóstico por estado y región, termómetro del 50% y escenarios del modelo",
          en: "National summary — forecast by state and region, the 50% gauge and model scenarios",
        },
      },
      {
        src: "/perfiles/bi/dashboards/brasil-minas-gerais.jpg",
        width: 1978,
        height: 1138,
        caption: {
          es: "Atlas por estado — Minas Gerais municipio por municipio, con la capital y las ciudades principales",
          en: "State atlas — Minas Gerais municipality by municipality, with the capital and main cities",
        },
      },
      {
        src: "/perfiles/bi/dashboards/brasil-sao-paulo.jpg",
        width: 1978,
        height: 1138,
        caption: {
          es: "Mapa fino — São Paulo en 27 mil radios censales, la escala más chica del país",
          en: "Fine-grained map — São Paulo across 27,000 census tracts, the country's smallest unit",
        },
      },
      {
        src: "/perfiles/bi/dashboards/brasil-municipios.jpg",
        width: 1978,
        height: 1138,
        caption: {
          es: "Los 5.571 municipios coloreados por la métrica elegida, con ficha de cada uno",
          en: "All 5,571 municipalities coloured by the selected metric, each with its own detail card",
        },
      },
      {
        src: "/perfiles/bi/dashboards/brasil-simulador.jpg",
        width: 1978,
        height: 1138,
        caption: {
          es: "Simulador — cambia los supuestos de transferencia y movilización y recalcula el resultado nacional",
          en: "Simulator — change the transfer and turnout assumptions and the national result recalculates",
        },
      },
    ],
  },  {
    id: "california-gobernador",
    number: "13",
    name: {
      es: "California 2026 · Gobernador",
      en: "California 2026 · Governor",
    },
    tagline: {
      es: "17 páginas y 243 medidas DAX para la elección de gobernador de California: de los 58 condados a 385 mil manzanas, con minería de datos, simulador y noche electoral en vivo. Acertó el ganador y 51 de 58 condados; el post-mortem muestra que subestimó a Becerra donde más pesa el voto latino (correlación del error 0,84).",
      en: "17 pages and 243 DAX measures for California's governor race: from 58 counties down to 385,000 census blocks, with data mining, a simulator and live election-night tracking. It called the winner and 51 of 58 counties; the post-mortem shows it underestimated Becerra where the Latino vote weighs most (error correlation 0.84).",
    },
    dataSource: "public",
    period: "2002–2026",
    tags: ["Power BI", "243 medidas DAX", "385 mil manzanas", "Post-mortem"],
    shots: [
      {
        src: "/perfiles/bi/dashboards/california-inicio.jpg",
        width: 1920,
        height: 1080,
        caption: {
          es: "Inicio — el pronóstico del 03/11: Becerra 61,8% con 99,9% de probabilidad. Ganó Becerra con 65,6% (no oficial al 19/11)",
          en: "Home — the 3/11 forecast: Becerra 61.8% at 99.9% probability. Becerra won with 65.6% (unofficial as of 19/11)",
        },
      },
      {
        src: "/perfiles/bi/dashboards/california-condados.jpg",
        width: 1920,
        height: 1080,
        caption: {
          es: "Mapa de condados — voto demócrata de los 58 condados con el ranking por la métrica elegida",
          en: "County map — Democratic vote across all 58 counties with a ranking by the selected metric",
        },
      },
      {
        src: "/perfiles/bi/dashboards/california-orange.jpg",
        width: 1920,
        height: 1080,
        caption: {
          es: "Atlas por condado — Orange, el condado swing, precinto por precinto",
          en: "County atlas — Orange, the swing county, precinct by precinct",
        },
      },
      {
        src: "/perfiles/bi/dashboards/california-cuadra.jpg",
        width: 1920,
        height: 1080,
        caption: {
          es: "Cuadra por cuadra — Fresno en manzanas del censo con coordenadas",
          en: "Block by block — Fresno at census-block level, with coordinates",
        },
      },
      {
        src: "/perfiles/bi/dashboards/california-mineria.jpg",
        width: 1920,
        height: 1080,
        caption: {
          es: "Minería de datos — gradient boosting (R² 0,63), correlaciones ponderadas y perfiles k-means",
          en: "Data mining — gradient boosting (R² 0.63), weighted correlations and k-means profiles",
        },
      },
      {
        src: "/perfiles/bi/dashboards/california-proyeccion.jpg",
        width: 1920,
        height: 1080,
        caption: {
          es: "Proyección y confianza — 20.000 simulaciones y backtest 2022 con 58 de 58 ganadores",
          en: "Projection and confidence — 20,000 simulations and a 2022 backtest with 58 of 58 winners",
        },
      },
    ],
  },  {
    id: "espana-29n",
    number: "14",
    name: {
      es: "España 29-N · Generales 2026",
      en: "Spain 29-N · 2026 General Election",
    },
    tagline: {
      es: "Pronóstico de las 52 circunscripciones y los 350 escaños del Congreso para las generales del 29 de noviembre de 2026: 9 páginas generadas por código, con mapas SVG dibujados en DAX, fichas por circunscripción, evolución 2015–2023 y validación de modelos. Publicado antes de la elección para medirlo contra el resultado oficial.",
      en: "Forecast of all 52 constituencies and 350 seats in the Congress for Spain's 29 November 2026 general election: 9 pages generated by code, with SVG maps drawn in DAX, constituency cards, 2015–2023 trends and model validation. Published before the vote, to be measured against the official result.",
    },
    dataSource: "public",
    period: "2015–2026",
    tags: ["Power BI", "Mapas SVG en DAX", "D'Hondt", "Pronóstico abierto"],
    shots: [
      {
        src: "/perfiles/bi/dashboards/espana-panel.jpg",
        width: 1340,
        height: 753,
        caption: {
          es: "Panel nacional — escaños esperados por candidatura y probabilidad de cada mayoría",
          en: "National panel — expected seats by party and the probability of each majority",
        },
      },
      {
        src: "/perfiles/bi/dashboards/espana-competitividad.jpg",
        width: 1340,
        height: 753,
        caption: {
          es: "Mapa nacional — competitividad de las 52 circunscripciones, con Canarias en recuadro",
          en: "National map — competitiveness of the 52 constituencies, with the Canary Islands inset",
        },
      },
      {
        src: "/perfiles/bi/dashboards/espana-barcelona.jpg",
        width: 1340,
        height: 753,
        caption: {
          es: "Mapa por provincia — Barcelona municipio por municipio, con el pronóstico de la circunscripción",
          en: "Provincial map — Barcelona municipality by municipality, with the constituency forecast",
        },
      },
      {
        src: "/perfiles/bi/dashboards/espana-sevilla.jpg",
        width: 1340,
        height: 753,
        caption: {
          es: "Ficha de circunscripción — Sevilla: candidaturas, cabezas de lista, escaños por escenario",
          en: "Constituency card — Seville: party lists, lead candidates and seats by scenario",
        },
      },
      {
        src: "/perfiles/bi/dashboards/espana-evolucion.jpg",
        width: 1340,
        height: 753,
        caption: {
          es: "Evolución 2015–2023 — candidatura más votada por circunscripción en las cinco generales",
          en: "2015–2023 trend — top party by constituency across five general elections",
        },
      },
      {
        src: "/perfiles/bi/dashboards/espana-validacion.jpg",
        width: 1340,
        height: 753,
        caption: {
          es: "Validación — cinco modelos con backtest a ciegas; el swing proporcional, elegido por parsimonia",
          en: "Validation — five models backtested blind; proportional swing chosen for parsimony",
        },
      },
    ],
  },
  {
    id: "ecuador-29n",
    number: "15",
    name: {
      es: "Ecuador 29-N · Alcaldías 2026",
      en: "Ecuador 29-N · 2026 Mayoral Races",
    },
    tagline: {
      es: "Las 222 alcaldías de Ecuador sobre 1.103 elecciones de 2004 a 2023: evolución cantón por cantón, fortaleza territorial de cada organización y validación a ciegas de cinco modelos. El pronóstico 2026 está en veda electoral hasta el cierre de urnas del 29 de noviembre.",
      en: "Ecuador's 222 mayoralties over 1,103 races from 2004 to 2023: canton-by-canton trends, each party's territorial strength and a blind validation of five models. The 2026 forecast is under the electoral blackout until polls close on 29 November.",
    },
    dataSource: "public",
    period: "2004–2026",
    tags: ["Power BI", "Mapas SVG en DAX", "Backtesting", "Datos abiertos"],
    shots: [
      {
        src: "/perfiles/bi/dashboards/ecuador-evolucion.jpg",
        width: 1264,
        height: 711,
        caption: {
          es: "Evolución 2004–2023 — organización ganadora de cada alcaldía y alcaldías por organización",
          en: "2004–2023 trend — winning party in every mayoralty and mayoralties by party",
        },
      },
      {
        src: "/perfiles/bi/dashboards/ecuador-validacion.jpg",
        width: 1264,
        height: 711,
        caption: {
          es: "Validación — cinco modelos contra 2019 y 2023; la regresión logística condicional, elegida por parsimonia",
          en: "Validation — five models against 2019 and 2023; conditional logistic regression chosen for parsimony",
        },
      },
    ],
  },
];

/** Los que se muestran como adelanto en /perfiles/bi */
export const FEATURED_DASHBOARD_IDS = [
  "yerba-mate",
  "exportaciones",
  "ingresos-tarjeta",
];

export const DASHBOARD_STATS = {
  dashboards: DASHBOARDS.length,
  views: DASHBOARDS.reduce((n, d) => n + d.shots.length, 0),
  openData: DASHBOARDS.filter((d) => d.dataSource === "public").length,
};

export function dashboardLocale(locale: string): "es" | "en" {
  return locale === "en" ? "en" : "es";
}
