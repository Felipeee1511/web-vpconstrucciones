import Reveal from "@/components/ui/Reveal";

/* SVGs inline del mockup */
const MantenimientoSVG = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="2" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 008.6 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 8.6a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);
const LimpiezaSVG = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M9 11h6a2 2 0 012 2v7a1 1 0 01-1 1H8a1 1 0 01-1-1v-7a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.8" />
    <path d="M9 11V6a1 1 0 011-1h2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M14 4h2M17 6h2M16 8h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);
const JardineraSVG = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M11 20A7 7 0 014 13c0-5 5-9 16-9 0 11-4 16-9 16z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M11 20c0-4 2-8 7-11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);
const ServGeneralesSVG = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="currentColor" strokeWidth="1.7" />
    <path d="M3.3 7L12 12l8.7-5M12 22V12" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);
const ResiduosSVG = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 19H4.8a2 2 0 01-1.7-3l1.2-2M17 19h2.2a2 2 0 001.7-3l-3.4-6M9 5l1.5-2.6a2 2 0 013.5 0L16 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 16l-3 3 3 3M8.5 8.5l-3.4.9.9 3.4M19 11l.9-3.4-3.4-.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const AguasSVG = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2.7s7 7.3 7 11.8a7 7 0 11-14 0C5 10 12 2.7 12 2.7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M9 15a3 3 0 003 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const SERVICIOS = [
  {
    icon: MantenimientoSVG,
    title: "Mantenimiento Industrial",
    items: [
      "Mantenimiento preventivo y correctivo",
      "Gestión de instalaciones",
      "Servicios para centrales térmicas",
      "Mantenimiento de equipos industriales",
    ],
  },
  {
    icon: LimpiezaSVG,
    title: "Limpieza Industrial",
    items: [
      "Limpieza de calderas",
      "Limpieza de instalaciones industriales",
      "Manejo de residuos industriales",
      "Servicios especializados de limpieza",
    ],
  },
  {
    icon: JardineraSVG,
    title: "Jardinería",
    items: [
      "Mantenimiento de áreas verdes",
      "Diseño paisajístico",
      "Sistemas de riego: instalación y mantención",
      "Poda y control de vegetación",
    ],
  },
  {
    icon: ServGeneralesSVG,
    title: "Servicios Generales",
    items: [
      "Gestión de almacenes",
      "Operación de romana",
      "Mantenimiento de edificios",
      "Apoyo operativo integral",
    ],
  },
  {
    icon: ResiduosSVG,
    title: "Gestión de Residuos",
    items: [
      "Manejo de residuos peligrosos (RESPEL)",
      "Gestión de residuos industriales",
      "Disposición controlada",
      "Asesoría en cumplimiento normativo",
    ],
  },
  {
    icon: AguasSVG,
    title: "Tratamiento de Aguas",
    items: [
      "Gestión de agua potable",
      "Análisis y control de calidad de aguas",
      "Mantenimiento de sistemas de tratamiento",
    ],
  },
];

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="w-full py-24 bg-[#f8fafc]"
      aria-label="Nuestros Servicios"
    >
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal className="text-center mb-[52px]">
          <span className="inline-block font-bold text-[0.78rem] tracking-[0.12em] uppercase mb-[18px] px-4 py-[7px] rounded-full text-[#1d4ed8] bg-[#eef4ff]">
            Lo que ofrecemos
          </span>
          <h2
            className="font-extrabold tracking-[-0.02em] leading-[1.15] text-[#0f172a]"
            style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.75rem)" }}
          >
            Nuestros Servicios
          </h2>
          <p className="mt-[14px] mx-auto text-[#475569] text-[1.08rem] max-w-[640px]">
            Soluciones integrales para la industria, cubriendo todo el ciclo operativo
            y de mantenimiento.
          </p>
        </Reveal>

        {/* Grid 3 columnas → 2 cols @980px → 1 col @440px */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICIOS.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Reveal key={i} delay={i * 60}>
                <ServiceCard icon={<Icon />} title={svc.title} items={svc.items} />
              </Reveal>
            );
          })}
        </div>

        {/* CTA Banner */}
        <Reveal delay={120}>
          <div
            className="mt-[50px] rounded-[24px] p-[46px] text-center text-white relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #102a56, #2563eb)",
            }}
          >
            <h3 className="text-[1.7rem] font-extrabold mb-[10px]">
              ¿Necesitas un servicio personalizado?
            </h3>
            <p className="mx-auto mb-6 text-white/[0.82] max-w-[520px]">
              Conversemos sobre tu proyecto. Diseñamos soluciones a la medida de tu
              operación industrial.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-[9px] font-bold text-[0.98rem] px-7 py-[14px] rounded-full transition-all duration-200 hover:-translate-y-0.5 bg-[#f3781f] text-[#1a1206] hover:bg-[#d9620f] hover:shadow-[0_12px_28px_rgba(217,119,6,0.35)]"
            >
              Contáctanos Ahora →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, items }) {
  return (
    <div
      className="group relative overflow-hidden rounded-[16px] p-[32px_28px] bg-white border border-[#e2e8f0] transition-all duration-[280ms] hover:-translate-y-[6px] hover:border-transparent hover:shadow-[0_24px_60px_rgba(15,23,42,0.16)] cursor-default"
    >
      {/* Barra superior gradiente al hover */}
      <div
        className="absolute top-0 left-0 right-0 h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
        style={{ background: "linear-gradient(90deg, #2563eb, #f3781f)" }}
        aria-hidden="true"
      />

      {/* Icono */}
      <div
        className="w-14 h-14 rounded-[14px] grid place-items-center mb-5 transition-all duration-300 group-hover:rotate-[-6deg] bg-[#eef4ff] text-[#1d4ed8] group-hover:bg-[#1d4ed8] group-hover:text-white"
      >
        {icon}
      </div>

      <h3 className="font-extrabold mb-[14px] text-[1.18rem] text-[#0f172a]">
        {title}
      </h3>

      <ul className="grid gap-[9px] list-none">
        {items.map((item) => (
          <li
            key={item}
            className="text-[0.92rem] pl-5 relative text-[#475569]"
          >
            <span
              className="absolute left-0 top-[9px] w-[7px] h-[7px] rounded-[2px] bg-[#f3781f]"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
