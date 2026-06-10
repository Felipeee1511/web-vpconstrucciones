import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";

const CHECK_SVG = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GALLERY = [
  { src: "/assets/Imagen2.webp",   alt: "Trabajo en espacios confinados",  caption: "Espacios confinados" },
  { src: "/assets/nosotros1.webp", alt: "Personal en faena con EPP",       caption: "Mantenimiento en terreno" },
  { src: "/assets/nosotros2.webp", alt: "Equipos especializados en operación", caption: "Equipos especializados" },
  { src: "/assets/nosotros3.webp", alt: "Personal con equipo de protección", caption: "Seguridad y protección" },
  { src: "/assets/nosotros4.webp", alt: "Instalación industrial",           caption: "Instalaciones" },
];

export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="w-full py-24 bg-white"
      aria-label="Sobre Nosotros"
    >
      <div className="max-w-[1180px] mx-auto px-6">
        {/* Grid 2 columnas → 1 @980px */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-[60px] items-start">
          {/* Izquierda: texto + stats */}
          <Reveal>
            <span className="inline-block font-bold text-[0.78rem] tracking-[0.12em] uppercase mb-[18px] px-4 py-[7px] rounded-full text-[#1d4ed8] bg-[#eef4ff]">
              Quiénes Somos
            </span>
            <h2
              className="font-extrabold tracking-[-0.02em] leading-[1.15] text-[#0f172a]"
              style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.75rem)" }}
            >
              Sobre Nosotros
            </h2>
            <p className="mt-4 text-[#475569]">
              VP Construcciones SpA es una empresa líder en servicios industriales y
              mantenimiento, con una sólida trayectoria respaldada por certificaciones
              internacionales <strong>ISO 9001, ISO 14001 e ISO 45001</strong>.
            </p>
            <p className="mt-4 text-[#475569]">
              Nuestro enfoque se centra en la excelencia operativa y el compromiso con
              cada cliente. Un equipo de profesionales altamente capacitados trabaja día
              a día para superar expectativas, garantizando resultados excepcionales en
              cada etapa del proceso.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-[18px] mt-6">
              {[
                { target: 10,  suffix: "+", label: "Años de experiencia" },
                { target: 200, suffix: "+", label: "Proyectos completados" },
                { target: 100, suffix: "%", label: "Satisfacción" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="text-center rounded-[16px] p-[26px_20px] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(15,23,42,0.1)] hover:border-[#3b82f6] bg-[#f8fafc] border border-[#e2e8f0]"
                >
                  <CountUp
                    target={s.target}
                    suffix={s.suffix}
                    className="block font-black leading-none tracking-[-0.02em] text-[2.5rem] text-[#1d4ed8]"
                  />
                  <div className="font-semibold mt-2 text-[0.86rem] text-[#475569]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Derecha: tarjeta compromiso */}
          <Reveal delay={120}>
            <div
              className="rounded-[24px] p-10 text-white relative overflow-hidden shadow-[0_24px_60px_rgba(15,23,42,0.16)]"
              style={{
                background: "linear-gradient(160deg, #102a56, #2563eb)",
              }}
            >
              {/* Orbe decorativo */}
              <div
                className="absolute -right-10 -top-10 w-[180px] h-[180px] rounded-full pointer-events-none bg-[rgba(245,158,11,0.18)]"
                aria-hidden="true"
              />
              <h3 className="text-[1.35rem] font-extrabold mb-[18px] relative">
                Nuestro compromiso
              </h3>
              <ul className="grid gap-[14px] relative list-none">
                {[
                  "Excelencia operativa en cada proyecto",
                  "Cumplimiento de plazos garantizado",
                  "Gestión ambiental responsable",
                  "Seguridad como prioridad absoluta",
                  "Personal certificado y en formación continua",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start text-[0.97rem] text-white/[0.92]">
                    {CHECK_SVG}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Galería de fotos reales — 5 columnas → adaptivo */}
        <div
          className="grid mt-[34px] gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
          style={{ gridAutoRows: "200px" }}
        >
          {GALLERY.map((photo) => (
            <figure
              key={photo.src}
              className="relative overflow-hidden rounded-[16px] m-0 group shadow-[0_1px_3px_rgba(15,23,42,0.08)]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.09]"
                loading="lazy"
                sizes="(max-width: 760px) 50vw, 20vw"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300 opacity-50 group-hover:opacity-[0.82]"
                style={{
                  background:
                    "linear-gradient(to top, rgba(11,37,69,0.9), rgba(11,37,69,0.05) 55%, transparent)",
                }}
                aria-hidden="true"
              />
              <figcaption
                className="absolute left-0 right-0 bottom-0 px-5 py-[18px] font-bold z-[2] text-white text-[1.02rem] transition-transform duration-300 group-hover:translate-y-0 translate-y-2"
                style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}
              >
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
