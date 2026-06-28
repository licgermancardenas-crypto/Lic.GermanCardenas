"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { ExperienceCard, type ExperienceData } from "./ExperienceCard";

const experiences: ExperienceData[] = [
  {
    id: "exp-01",
    number: "01",
    title: "Hackatones & Desarrollo Colaborativo",
    date: "2024 — 2025",
    location: "Buenos Aires, Argentina",
    role: "Desarrollador",
    description:
      "Participé en hackatones donde trabajé junto a equipos multidisciplinarios para diseñar soluciones tecnológicas en tiempos muy reducidos. Estas experiencias fortalecieron mi capacidad para colaborar, priorizar problemas, adaptarme rápidamente y transformar ideas en productos funcionales.",
    learning:
      "Las mejores soluciones surgen cuando distintas disciplinas trabajan con un mismo objetivo.",
    image: "/experiences/exp-01-hackathon-team.jpg",
    imageAlt: "Equipo de hackathon — Buenos Aires 2025",
    badges: ["👥 Equipo", "🏆 Hackathon", "🧠 IA", "🚀 Startup"],
    tech: ["React", "FastAPI", "Python"],
  },
  {
    id: "exp-02",
    number: "02",
    title: "Startup Weekend Córdoba",
    date: "2025",
    location: "Córdoba, Argentina",
    role: "Participante",
    description:
      "Durante Startup Weekend colaboré en el desarrollo de un proyecto desde cero, validando una idea, diseñando un MVP y presentando una solución frente a mentores y jurados. Fue una experiencia intensa de innovación, emprendimiento y trabajo en equipo.",
    learning:
      "La importancia de validar problemas reales antes de construir tecnología.",
    image: "/experiences/exp-02-startup-weekend.jpg",
    imageAlt: "Germán Cárdenas presentando en Startup Weekend Argentina 26",
    badges: ["🚀 Startup", "👥 Equipo", "🎤 Speaker"],
  },
  {
    id: "exp-03",
    number: "03",
    title: "Capacitación sobre IA para Exportadores",
    date: "2025",
    location: "Buenos Aires, Argentina",
    role: "Disertante",
    description:
      "Participé como expositor en una capacitación sobre inteligencia artificial aplicada al comercio internacional dirigida a empresas, gerentes y consorcios exportadores. Compartimos aplicaciones concretas de IA para optimizar procesos y apoyar la toma de decisiones.",
    learning:
      "Comunicar tecnología es tan importante como desarrollarla.",
    image: "/experiences/exp-03-icbc-speaker.jpg",
    imageAlt: "Germán Cárdenas disertante en ICBC Argentina",
    badges: ["🎤 Speaker", "🧠 IA", "🌎 GIS", "📊 Datos"],
    tech: ["AI", "Data Analytics"],
  },
  {
    id: "exp-04",
    number: "04",
    title: "Innovación junto a empresas e instituciones",
    date: "2024 — 2025",
    location: "Buenos Aires, Argentina",
    role: "Consultor / Desarrollador",
    description:
      "Participé en encuentros con organizaciones interesadas en incorporar inteligencia artificial, análisis de datos y tecnologías emergentes para resolver desafíos concretos y acelerar su transformación digital.",
    learning:
      "La tecnología genera verdadero impacto cuando responde a necesidades reales.",
    image: "/experiences/exp-04-icbc-group.jpg",
    imageAlt: "Encuentro con empresas e instituciones en ICBC",
    badges: ["🧠 IA", "📊 Datos", "👥 Equipo"],
  },
  {
    id: "exp-05",
    number: "05",
    title: "Construyendo comunidad",
    date: "2024 — 2025",
    location: "Buenos Aires, Argentina",
    role: "Miembro de comunidades tecnológicas",
    description:
      "Participo activamente en espacios donde desarrolladores, emprendedores y profesionales comparten conocimientos, presentan proyectos y colaboran en nuevas ideas. Creo que el aprendizaje continuo también ocurre fuera del escritorio.",
    learning:
      "Cada conversación puede convertirse en una nueva oportunidad.",
    image: "/experiences/exp-05-fiserv-community.jpg",
    imageAlt: "Comunidad tecnológica Fiserv Tech — Buenos Aires",
    badges: ["👥 Equipo", "🧠 IA", "🚀 Startup"],
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experiencias"
      className="py-20 sm:py-32 lg:py-40"
      style={{
        backgroundColor: "#06080D",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection className="mb-16 sm:mb-24 max-w-3xl">
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
            ─── Experiencias
          </p>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(40px, 5.5vw, 80px)",
              fontWeight: 400,
              color: "#F0F4FB",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: "28px",
            }}
          >
            Donde las ideas{" "}
            <span style={{ fontStyle: "italic" }}>toman forma.</span>
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.78,
              color: "#C5CFE2",
              maxWidth: "600px",
              marginBottom: "16px",
            }}
          >
            Los proyectos más importantes no nacen trabajando en solitario. Creo
            en el aprendizaje continuo, la colaboración y el intercambio de ideas
            como motores de la innovación. Por eso participo activamente en
            hackatones, eventos tecnológicos, comunidades de innovación,
            capacitaciones y encuentros donde la inteligencia artificial, los
            datos y el desarrollo de software se transforman en soluciones con
            impacto.
          </p>
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.72,
              color: "#6B7A95",
              maxWidth: "560px",
            }}
          >
            Cada experiencia representa una oportunidad para aprender, compartir
            conocimiento, construir equipos y convertir ideas en proyectos
            reales.
          </p>
        </AnimatedSection>

        {/* Cards */}
        <div className="flex flex-col gap-20 sm:gap-28 lg:gap-36">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
