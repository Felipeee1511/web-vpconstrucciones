import Reveal from "@/components/ui/Reveal";

const LOGOS = [
  { src: "/assets/clientes/logo-cge.png",      alt: "CGE" },
  { src: "/assets/clientes/logo-nutrisco.png",  alt: "Nutrisco" },
  { src: "/assets/clientes/logo-enel.svg",      alt: "ENEL" },
];

// Duplicamos 4x para un marquee suave
const MARQUEE_LOGOS = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

const SECTORS = [
  "Centrales térmicas",
  "Sector energético",
  "Industria forestal",
  "Sector minero",
  "Sector portuario",
  "Tratamiento de aguas",
];

export default function Clientes() {
  return (
    <section
      id="clientes"
      className="w-full py-24 bg-[#f8fafc]"
      aria-labelledby="clientes-heading"
    >
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal className="text-center mb-[48px]">
          <span className="inline-block font-bold text-[0.78rem] tracking-[0.12em] uppercase mb-[18px] px-4 py-[7px] rounded-full text-[#1d4ed8] bg-[#eef4ff]">
            Nuestros Clientes
          </span>
          <h2
            id="clientes-heading"
            className="font-extrabold tracking-[-0.02em] leading-[1.15] text-[#0f172a]"
            style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.75rem)" }}
          >
            Empresas que Confían en Nosotros
          </h2>
          <p className="mt-[14px] mx-auto text-[#475569] text-[1.08rem] max-w-[640px]">
            Más de 10 años trabajando junto a las principales empresas industriales
            de Chile.
          </p>
        </Reveal>
      </div>

      {/* Marquee */}
      <Reveal>
        <div
          className="overflow-hidden relative"
          role="region"
          aria-label="Logos de clientes"
          style={{
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
            maskImage:
              "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          }}
        >
          <div
            className="flex gap-[22px] animate-scrollx hover:[animation-play-state:paused]"
            style={{ width: "max-content" }}
            aria-label="Logos de clientes en bucle"
          >
            {MARQUEE_LOGOS.map((logo, i) => (
              <div
                key={i}
                className="group flex-shrink-0 w-[210px] h-[118px] rounded-[16px] grid place-items-center p-6 transition-all duration-300 hover:-translate-y-[5px] hover:border-[#3b82f6] bg-white border border-[#e2e8f0] shadow-[0_1px_3px_rgba(15,23,42,0.08)]"
                aria-hidden={i >= LOGOS.length}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={i < LOGOS.length ? logo.alt : ""}
                  className="object-contain transition-all duration-300 grayscale opacity-65 group-hover:grayscale-0 group-hover:opacity-100"
                  style={{
                    maxHeight: "70px",
                    maxWidth: "150px",
                    width: "auto",
                  }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Chips de sectores */}
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal>
          <div className="mt-[34px] text-center">
            <span className="block font-semibold tracking-[0.08em] uppercase mb-[14px] text-[0.82rem] text-[#64748b]">
              También al servicio de:
            </span>
            <div className="flex flex-wrap gap-[10px] justify-center">
              {SECTORS.map((sector) => (
                <span
                  key={sector}
                  className="rounded-full px-[18px] py-2 font-semibold transition-colors duration-200 cursor-default text-[0.88rem] bg-white border border-[#e2e8f0] text-[#475569] hover:border-[#3b82f6] hover:text-[#1d4ed8] hover:bg-[#eef4ff]"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Banda de stats */}
        <Reveal>
          <div
            className="mt-[42px] rounded-[24px] overflow-hidden grid grid-cols-1 sm:grid-cols-3 text-white"
            style={{
              background: "linear-gradient(135deg, #102a56, #2563eb)",
            }}
          >
            {[
              { num: "24/7",  lbl: "Disponibilidad" },
              { num: "+200", lbl: "Proyectos de limpieza y mantenimiento" },
              { num: "100%",  lbl: "Satisfacción de clientes" },
            ].map((cell, i) => (
              <div
                key={i}
                className={`py-9 px-6 text-center ${i < 2 ? "border-b sm:border-b-0 sm:border-r border-white/[0.12]" : ""}`}
              >
                <div className="font-black leading-none text-[2.4rem]">
                  {cell.num}
                </div>
                <div className="mt-2 text-[0.88rem] text-white/80">
                  {cell.lbl}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
