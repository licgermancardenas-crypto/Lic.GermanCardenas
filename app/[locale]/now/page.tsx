import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ahora — Germán Cárdenas",
  description: "Qué estoy haciendo en este momento",
};

export default async function NowPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-[#0A0E1A]">
      {/* Nav */}
      <div className="sticky top-0 z-50 bg-[#0A0E1A]/90 backdrop-blur-md border-b border-[#1F2937]">
        <div className="container-custom h-14 flex items-center">
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 text-sm text-[#6B7689] hover:text-[#B8C1D1] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver
          </Link>
        </div>
      </div>

      <div className="container-custom py-16 md:py-24 max-w-2xl">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-5">
            <span className="text-[#6B7689] text-xs font-mono select-none">━━━</span>
            <span className="text-[#6B7689] text-xs font-mono uppercase tracking-widest">
              /now
            </span>
          </div>
          <h1
            className="font-serif text-[#F5F7FA] leading-tight mb-4"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 400 }}
          >
            ¿Qué estoy haciendo{" "}
            <span className="italic text-[#4F7CFF]">ahora</span>?
          </h1>
          <p className="text-[#6B7689] text-sm font-mono">
            Última actualización: junio 2026 · Buenos Aires, Argentina
          </p>
        </div>

        <div className="space-y-12">
          {/* Trabajo */}
          <section>
            <h2 className="text-[#F5F7FA] font-semibold text-base mb-5 flex items-center gap-3">
              <span className="w-4 h-px bg-[#4F7CFF] inline-block" />
              Trabajo
            </h2>
            <div className="space-y-4 text-[#B8C1D1] leading-relaxed">
              <p>
                Actualmente en{" "}
                <strong className="text-[#F5F7FA]">AgroJuntos</strong> como Analista BI &amp;
                Planeamiento Financiero — construyendo dashboards ejecutivos en Power BI, modelos
                de forecasting y automatizaciones Python sobre múltiples fuentes de datos del sector
                agropecuario.
              </p>
              <p>
                En paralelo, expandiendo{" "}
                <strong className="text-[#F5F7FA]">Atlas One ERP</strong> con nuevos módulos y
                validando el modelo de go-to-market para el sector retail.
              </p>
            </div>
          </section>

          {/* Construyendo */}
          <section>
            <h2 className="text-[#F5F7FA] font-semibold text-base mb-5 flex items-center gap-3">
              <span className="w-4 h-px bg-[#10b981] inline-block" />
              Construyendo
            </h2>
            <ul className="space-y-3 text-[#B8C1D1]">
              <li className="flex gap-3">
                <span className="text-[#10b981] flex-shrink-0 font-mono text-sm">→</span>
                <span>
                  <strong className="text-[#F5F7FA]">AgroNova v2</strong> — nuevas capas GIS y
                  módulo de predicción climática con ML.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#10b981] flex-shrink-0 font-mono text-sm">→</span>
                <span>
                  <strong className="text-[#F5F7FA]">Atlas Nexus post-hackathon</strong> — evolución
                  del MVP hacia SaaS con primer cliente piloto en negociación.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#10b981] flex-shrink-0 font-mono text-sm">→</span>
                <span>Este portfolio — el que estás leyendo ahora.</span>
              </li>
            </ul>
          </section>

          {/* Aprendiendo */}
          <section>
            <h2 className="text-[#F5F7FA] font-semibold text-base mb-5 flex items-center gap-3">
              <span className="w-4 h-px bg-[#8b5cf6] inline-block" />
              Aprendiendo
            </h2>
            <ul className="space-y-3 text-[#B8C1D1]">
              <li className="flex gap-3">
                <span className="text-[#8b5cf6] flex-shrink-0 font-mono text-sm">→</span>
                <span>
                  <strong className="text-[#F5F7FA]">RAG y sistemas de agentes</strong> — cómo
                  construir pipelines de retrieval para datos empresariales estructurados.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8b5cf6] flex-shrink-0 font-mono text-sm">→</span>
                <span>
                  <strong className="text-[#F5F7FA]">dbt</strong> — transformación de datos en el
                  warehouse, documentación automática y tests de calidad.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8b5cf6] flex-shrink-0 font-mono text-sm">→</span>
                <span>
                  <strong className="text-[#F5F7FA]">Rust</strong> — para pipelines ETL de alta
                  performance. Lento aprendizaje, alto potencial.
                </span>
              </li>
            </ul>
          </section>

          {/* Leyendo */}
          <section>
            <h2 className="text-[#F5F7FA] font-semibold text-base mb-5 flex items-center gap-3">
              <span className="w-4 h-px bg-[#F59E0B] inline-block" />
              Leyendo
            </h2>
            <ul className="space-y-3 text-[#B8C1D1]">
              <li className="flex gap-3">
                <span className="text-[#F59E0B] flex-shrink-0 font-mono text-sm">↗</span>
                <em>The Mom Test</em> — Rob Fitzpatrick. Cómo validar ideas de negocio sin mentiras.
              </li>
              <li className="flex gap-3">
                <span className="text-[#F59E0B] flex-shrink-0 font-mono text-sm">↗</span>
                <em>Designing Data-Intensive Applications</em> — Martin Kleppmann. Dense y valioso.
              </li>
              <li className="flex gap-3">
                <span className="text-[#F59E0B] flex-shrink-0 font-mono text-sm">↗</span>
                Papers sobre RAG en dominio financiero (arXiv).
              </li>
            </ul>
          </section>

          {/* Ubicación */}
          <section className="pt-8 border-t border-[#1F2937]">
            <p className="text-[#6B7689] text-sm leading-relaxed">
              Basado en <strong className="text-[#B8C1D1]">Buenos Aires</strong>, disponible para trabajo
              remoto global. Próximo inicio disponible:{" "}
              <strong className="text-[#4F7CFF]">enero 2026</strong>.
            </p>
            <p className="text-[#6B7689] text-xs mt-4 font-mono">
              Esta página está inspirada en el movimiento{" "}
              <a
                href="https://nownownow.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4F7CFF] hover:underline"
              >
                /now de Derek Sivers
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
