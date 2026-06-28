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
    primaryImageSrc: "/screenshots/atlas-erp/exec-overview-v3.png",
    secondaryImageSrc: "/screenshots/atlas-erp/dashboard-home.png",
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
    primaryImageSrc: "/screenshots/atlas-erp/ingresos-wallets-v2.png",
    secondaryImageSrc: "/screenshots/atlas-erp/ingresos-tarjetas-v2.png",
    reverseLayout: true,
  },
  {
    title: (
      <>
        Valuación de Empresas
        <br />
        <span style={{ fontStyle: "italic" }}>DCF & Múltiplos.</span>
      </>
    ),
    description:
      "Evaluación técnica de unidades de negocio y proyectos mediante Flujos de Fondos Descontados (DCF), costo de capital (WACC) y múltiplos de mercado para la toma de decisiones de inversión con rigor metodológico.",
    primaryImageSrc: "/screenshots/atlas-erp/cont-balance.png",
    secondaryImageSrc: "/screenshots/atlas-erp/cont-cuentas.png",
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
    primaryImageSrc: "/screenshots/atlas-erp/desempeno-vendedor-v3.png",
    secondaryImageSrc: "/screenshots/atlas-erp/prod-horaria-v3.png",
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
    primaryImageSrc: "/screenshots/lapd.png",
    secondaryImageSrc: "/screenshots/rsi.png",
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
    primaryImageSrc: "/screenshots/agronova.png",
    secondaryImageSrc: "/screenshots/atlas-nexus.png",
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
