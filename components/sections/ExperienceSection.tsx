"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { ExperienceCard, type ExperienceData } from "./ExperienceCard";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const experiences: ExperienceData[] = [
  {
    id: "exp-01",
    number: "01",
    title: { es: "Hackatones & Desarrollo Colaborativo", en: "Hackathons & Collaborative Development" },
    date: "2024 — 2025",
    location: { es: "Buenos Aires, Argentina", en: "Buenos Aires, Argentina" },
    role: { es: "Desarrollador", en: "Developer" },
    description: {
      es: "Participé en hackatones donde trabajé junto a equipos multidisciplinarios para diseñar soluciones tecnológicas en tiempos muy reducidos. Estas experiencias fortalecieron mi capacidad para colaborar, priorizar problemas, adaptarme rápidamente y transformar ideas en productos funcionales.",
      en: "I took part in hackathons, working with multidisciplinary teams to design tech solutions under very tight deadlines. These experiences sharpened my ability to collaborate, prioritise problems, adapt quickly and turn ideas into working products.",
    },
    learning: {
      es: "Las mejores soluciones surgen cuando distintas disciplinas trabajan con un mismo objetivo.",
      en: "The best solutions come from different disciplines working towards the same goal.",
    },
    image: "/experiences/exp-01-hackathon-team.jpg",
    imageAlt: { es: "Equipo de hackathon — Buenos Aires 2025", en: "Hackathon team — Buenos Aires 2025" },
    badges: ["team", "hackathon", "ai", "startup"],
    tech: ["React", "FastAPI", "Python"],
  },
  {
    id: "exp-02",
    number: "02",
    title: { es: "Startup Weekend Córdoba", en: "Startup Weekend Córdoba" },
    date: "2025",
    location: { es: "Córdoba, Argentina", en: "Córdoba, Argentina" },
    role: { es: "Participante", en: "Participant" },
    description: {
      es: "Durante Startup Weekend colaboré en el desarrollo de un proyecto desde cero, validando una idea, diseñando un MVP y presentando una solución frente a mentores y jurados. Fue una experiencia intensa de innovación, emprendimiento y trabajo en equipo.",
      en: "At Startup Weekend I helped build a project from scratch: validating an idea, designing an MVP and pitching a solution to mentors and judges. An intense experience in innovation, entrepreneurship and teamwork.",
    },
    learning: {
      es: "La importancia de validar problemas reales antes de construir tecnología.",
      en: "Validate real problems before building technology.",
    },
    image: "/experiences/exp-02-startup-weekend.jpg",
    imageAlt: { es: "Germán Cárdenas presentando en Startup Weekend Argentina 26", en: "Germán Cárdenas pitching at Startup Weekend Argentina 26" },
    badges: ["startup", "team", "speaker"],
  },
  {
    id: "exp-03",
    number: "03",
    title: { es: "Capacitación sobre IA para Exportadores", en: "AI Training for Exporters" },
    date: "2025",
    location: { es: "Buenos Aires, Argentina", en: "Buenos Aires, Argentina" },
    role: { es: "Disertante", en: "Speaker" },
    description: {
      es: "Participé como expositor en una capacitación sobre inteligencia artificial aplicada al comercio internacional dirigida a empresas, gerentes y consorcios exportadores. Compartimos aplicaciones concretas de IA para optimizar procesos y apoyar la toma de decisiones.",
      en: "I spoke at a training session on artificial intelligence for international trade, aimed at companies, managers and export consortia. We shared concrete AI applications to streamline processes and support decision-making.",
    },
    learning: {
      es: "Comunicar tecnología es tan importante como desarrollarla.",
      en: "Communicating technology matters as much as building it.",
    },
    image: "/experiences/exp-03-icbc-speaker.jpg",
    imageAlt: { es: "Germán Cárdenas disertante en ICBC Argentina", en: "Germán Cárdenas speaking at ICBC Argentina" },
    badges: ["speaker", "ai", "gis", "data"],
    tech: ["AI", "Data Analytics"],
  },
  {
    id: "exp-04",
    number: "04",
    title: { es: "Innovación junto a empresas e instituciones", en: "Innovation with companies and institutions" },
    date: "2024 — 2025",
    location: { es: "Buenos Aires, Argentina", en: "Buenos Aires, Argentina" },
    role: { es: "Consultor / Desarrollador", en: "Consultant / Developer" },
    description: {
      es: "Participé en encuentros con organizaciones interesadas en incorporar inteligencia artificial, análisis de datos y tecnologías emergentes para resolver desafíos concretos y acelerar su transformación digital.",
      en: "I took part in meetings with organisations looking to adopt artificial intelligence, data analysis and emerging technologies to solve concrete challenges and speed up their digital transformation.",
    },
    learning: {
      es: "La tecnología genera verdadero impacto cuando responde a necesidades reales.",
      en: "Technology has real impact when it answers real needs.",
    },
    image: "/experiences/exp-04-icbc-group.jpg",
    imageAlt: { es: "Encuentro con empresas e instituciones en ICBC", en: "Meeting with companies and institutions at ICBC" },
    badges: ["ai", "data", "team"],
  },
  {
    id: "exp-05",
    number: "05",
    title: { es: "Construyendo comunidad", en: "Building community" },
    date: "2024 — 2025",
    location: { es: "Buenos Aires, Argentina", en: "Buenos Aires, Argentina" },
    role: { es: "Miembro de comunidades tecnológicas", en: "Tech community member" },
    description: {
      es: "Participo activamente en espacios donde desarrolladores, emprendedores y profesionales comparten conocimientos, presentan proyectos y colaboran en nuevas ideas. Creo que el aprendizaje continuo también ocurre fuera del escritorio.",
      en: "I'm active in spaces where developers, founders and professionals share knowledge, present projects and collaborate on new ideas. I believe continuous learning also happens away from the desk.",
    },
    learning: {
      es: "Cada conversación puede convertirse en una nueva oportunidad.",
      en: "Every conversation can become a new opportunity.",
    },
    image: "/experiences/exp-05-fiserv-community.jpg",
    imageAlt: { es: "Comunidad tecnológica Fiserv Tech — Buenos Aires", en: "Fiserv Tech community — Buenos Aires" },
    badges: ["team", "ai", "startup"],
  },
];

const COPY = {
  es: {
    eyebrow: "─── Experiencias",
    title: ["Donde las ideas", "toman forma."],
    lead: "Los proyectos más importantes no nacen trabajando en solitario. Creo en el aprendizaje continuo, la colaboración y el intercambio de ideas como motores de la innovación. Por eso participo activamente en hackatones, eventos tecnológicos, comunidades de innovación, capacitaciones y encuentros donde la inteligencia artificial, los datos y el desarrollo de software se transforman en soluciones con impacto.",
    sub: "Cada experiencia representa una oportunidad para aprender, compartir conocimiento, construir equipos y convertir ideas en proyectos reales.",
    bgAlt: "Donde las ideas toman forma — espacio de trabajo de una hackathon",
  },
  en: {
    eyebrow: "─── Experiences",
    title: ["Where ideas", "take shape."],
    lead: "The most important projects aren't built alone. I believe in continuous learning, collaboration and the exchange of ideas as engines of innovation. That's why I'm active in hackathons, tech events, innovation communities, training sessions and meetups where artificial intelligence, data and software development turn into solutions with impact.",
    sub: "Every experience is a chance to learn, share knowledge, build teams and turn ideas into real projects.",
    bgAlt: "Where ideas take shape — hackathon workspace",
  },
} as const;

export function ExperienceSection() {
  const lang = useLocale() === "en" ? "en" : "es";
  const t = COPY[lang];
  return (
    <section
      id="experiencias"
      style={{ backgroundColor: "#06080D", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      {/* ── PHOTO HEADER ── */}
      <div className="relative overflow-hidden" style={{ minHeight: "480px" }}>
        {/* Background photo */}
        <div className="absolute inset-0">
          <Image
            src="/experiences/exp-header-bg.jpg"
            alt={t.bgAlt}
            fill
            className="object-cover object-center"
            quality={90}
            sizes="100vw"
          />
        </div>

        {/* Overlays: heavy bottom + left bias so text reads perfectly */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(6,8,13,1) 0%, rgba(6,8,13,0.88) 35%, rgba(6,8,13,0.45) 65%, rgba(6,8,13,0.15) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(6,8,13,0.75) 0%, rgba(6,8,13,0.3) 50%, transparent 100%)",
          }}
        />

        {/* Text over photo */}
        <div className="relative container-custom pt-20 sm:pt-32 pb-16 sm:pb-24 flex flex-col justify-end" style={{ minHeight: "480px" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="max-w-3xl"
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#8D9AB3",
                marginBottom: "28px",
              }}
            >
              {t.eyebrow}
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
                marginBottom: "24px",
              }}
            >
              {t.title[0]}{" "}
              <span>{t.title[1]}</span>
            </h2>
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.78,
                color: "#C5CFE2",
                maxWidth: "600px",
                marginBottom: "14px",
              }}
            >
              {t.lead}
            </p>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.72,
                color: "#8D9AB3",
                maxWidth: "560px",
              }}
            >
              {t.sub}
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── CARDS ── */}
      <div className="container-custom py-20 sm:py-28 lg:py-36">
        <div className="flex flex-col gap-20 sm:gap-28 lg:gap-36">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}
