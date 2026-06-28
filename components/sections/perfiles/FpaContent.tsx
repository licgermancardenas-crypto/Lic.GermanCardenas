import SectionWithMockup from "@/components/ui/section-with-mockup";

const pillars = [
  {
    title: (
      <>
        Modelos Financieros
        <br />
        <span style={{ fontStyle: "italic" }}>Dinámicos.</span>
      </>
    ),
    description:
      "Arquitectura de modelos de proyección financiera flexibles y escalables a medida de la estructura del negocio, permitiendo simular múltiples horizontes operativos con solidez matemática. Diseñados para tomar decisiones, no solo para reportar.",
    primaryImageSrc: "/fpa-balance-situacion.png",
    secondaryImageSrc: "/fpa-three-statement.png",
    reverseLayout: false,
  },
  {
    title: (
      <>
        Advanced Excel
        <br />
        <span style={{ fontStyle: "italic" }}>&amp; VBA.</span>
      </>
    ),
    description:
      "Dominio avanzado de hojas de cálculo complejas, funciones lógicas anidadas, macros complejas y optimización de flujos mediante código para eliminar tareas manuales repetitivas. Automatización real al servicio del análisis financiero.",
    primaryImageSrc: "/fpa-excel-vba-heatmap.png",
    secondaryImageSrc: "/fpa-reporting-bi.png",
    reverseLayout: true,
  },
  {
    title: (
      <>
        Valuación de Empresas
        <br />
        <span style={{ fontStyle: "italic" }}>DCF &amp; Múltiplos.</span>
      </>
    ),
    description:
      "Evaluación técnica de unidades de negocio y proyectos mediante Flujos de Fondos Descontados (DCF), costo de capital (WACC) y múltiplos de mercado para la toma de decisiones de inversión con rigor metodológico.",
    primaryImageSrc: "/fpa-dcf-cocacola.png",
    secondaryImageSrc: "/fpa-balance-situacion.png",
    reverseLayout: false,
  },
  {
    title: (
      <>
        Three-Statement
        <br />
        <span style={{ fontStyle: "italic" }}>Forecasting.</span>
      </>
    ),
    description:
      "Vinculación dinámica de los tres estados contables fundamentales: Income Statement (P&L), Balance Sheet y Cash Flow Statement. Sincronización perfecta de lógica financiera corporativa que garantiza consistencia en cada escenario proyectado.",
    primaryImageSrc: "/fpa-three-statement.png",
    secondaryImageSrc: "/fpa-dcf-cocacola.png",
    reverseLayout: true,
  },
  {
    title: (
      <>
        Reporting Ejecutivo
        <br />
        <span style={{ fontStyle: "italic" }}>&amp; Business Intelligence.</span>
      </>
    ),
    description:
      "Traducción de métricas financieras densas en dashboards ejecutivos de alta fidelidad, uniendo la precisión de los números contables con la agilidad de la inteligencia de datos. Información accionable para la alta dirección.",
    primaryImageSrc: "/fpa-reporting-bi.png",
    secondaryImageSrc: "/fpa-excel-vba-heatmap.png",
    reverseLayout: false,
  },
  {
    title: (
      <>
        Análisis de Sensibilidad
        <br />
        <span style={{ fontStyle: "italic" }}>&amp; Stress Testing.</span>
      </>
    ),
    description:
      "Modelado de escenarios estresados (Bull/Bear cases) mediante tablas de datos y herramientas de simulación para evaluar el impacto instantáneo de variables macro en el flujo libre de caja. Gestión de riesgo financiero basada en datos.",
    primaryImageSrc: "/fpa-sensibilidad-escenarios.png",
    secondaryImageSrc: "/fpa-reporting-bi.png",
    reverseLayout: true,
  },
];

export function FpaContent() {
  return (
    <>
      {pillars.map((pillar, i) => (
        <SectionWithMockup key={i} {...pillar} />
      ))}
    </>
  );
}
