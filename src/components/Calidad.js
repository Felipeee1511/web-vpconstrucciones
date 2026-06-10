import Reveal from "@/components/ui/Reveal";

const CHECK_CIRCLE = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="#dbeafe" />
    <path d="M16 9l-5 5-3-3" stroke="#1d4ed8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PRINCIPIOS = [
  "Cumplimiento de estándares internacionales",
  "Mejora continua de procesos",
  "Capacitación permanente del personal",
  "Control de calidad en todas las etapas",
  "Auditorías internas y externas",
  "Compromiso con la excelencia",
];

export default function Calidad() {
  return (
    <section
      id="calidad"
      className="w-full py-24 bg-[#f8fafc]"
      aria-label="Calidad y Certificaciones"
    >
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal className="text-center mb-[18px]">
          <span className="inline-block font-bold text-[0.78rem] tracking-[0.12em] uppercase mb-[18px] px-4 py-[7px] rounded-full text-[#1d4ed8] bg-[#eef4ff]">
            Nuestro Compromiso
          </span>
          <h2
            className="font-extrabold tracking-[-0.02em] leading-[1.15] text-[#0f172a]"
            style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.75rem)" }}
          >
            Calidad y Certificaciones
          </h2>
          <p className="mt-[14px] mx-auto text-[#475569] text-[1.08rem] max-w-[640px]">
            Nuestro compromiso con la calidad está respaldado por certificaciones
            internacionales y un riguroso sistema de gestión.
          </p>
        </Reveal>

        {/* Sellos ISO — 3 cols → 2 @980px → 1 @440px */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px] mt-[18px]">
          {[
            {
              id: "g9001",
              colors: ["#1d4ed8", "#3b82f6"],
              textColor: "#1d4ed8",
              code: "9001",
              year: "2015",
              title: "ISO 9001:2015",
              desc: "Sistema de Gestión de Calidad",
              aria: "Certificación ISO 9001:2015",
            },
            {
              id: "g14001",
              colors: ["#15803d", "#22c55e"],
              textColor: "#15803d",
              code: "14001",
              year: "2015",
              title: "ISO 14001:2015",
              desc: "Sistema de Gestión Ambiental",
              aria: "Certificación ISO 14001:2015",
            },
            {
              id: "g45001",
              colors: ["#b45309", "#f59e0b"],
              textColor: "#b45309",
              code: "45001",
              year: "2018",
              title: "ISO 45001:2018",
              desc: "Seguridad y Salud Ocupacional",
              aria: "Certificación ISO 45001:2018",
            },
          ].map((cert) => (
            <Reveal key={cert.id}>
              <div className="rounded-[16px] bg-white border border-[#e2e8f0] p-[30px] text-center transition-all duration-200 hover:-translate-y-[5px] hover:shadow-[0_10px_30px_rgba(15,23,42,0.1)] hover:border-[#3b82f6]">
                <svg
                  viewBox="0 0 200 200"
                  role="img"
                  aria-label={cert.aria}
                  className="mx-auto mb-4 block w-[124px] h-[124px]"
                  style={{ filter: "drop-shadow(0 8px 18px rgba(15,23,42,0.18))" }}
                >
                  <defs>
                    <linearGradient id={cert.id} x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor={cert.colors[0]} />
                      <stop offset="1" stopColor={cert.colors[1]} />
                    </linearGradient>
                  </defs>
                  <circle cx="100" cy="100" r="94" fill={`url(#${cert.id})`} />
                  <circle cx="100" cy="100" r="94" fill="none" stroke="#fff" strokeOpacity=".22" strokeWidth="3" />
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="2" strokeDasharray="2 5" />
                  <circle cx="100" cy="100" r="70" fill="#fff" />
                  <path d="M100 42l3.8 7.7 8.5 1.2-6.2 6 1.5 8.5-7.6-4-7.6 4 1.5-8.5-6.2-6 8.5-1.2z" fill={cert.colors[0]} />
                  <text x="100" y="103" textAnchor="middle" fontFamily="Inter,Arial,sans-serif" fontSize="15" fontWeight="700" fill={cert.textColor} letterSpacing="4">ISO</text>
                  <text x="100" y="135" textAnchor="middle" fontFamily="Inter,Arial,sans-serif" fontSize="33" fontWeight="900" fill="#0f172a">{cert.code}</text>
                  <text x="100" y="156" textAnchor="middle" fontFamily="Inter,Arial,sans-serif" fontSize="12.5" fontWeight="700" fill={cert.textColor} letterSpacing="2">{cert.year}</text>
                </svg>
                <h4 className="font-extrabold mb-[6px] text-[1.15rem] text-[#0f172a]">
                  {cert.title}
                </h4>
                <p className="text-[0.9rem] text-[#475569]">{cert.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Principios + compromiso — 2 cols → 1 @980px */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] items-start mt-[56px]">
          <Reveal>
            <h3 className="font-extrabold mb-[18px] text-[1.35rem] text-[#0f172a]">
              Principios de Calidad
            </h3>
            <ul className="grid gap-3 list-none">
              {PRINCIPIOS.map((p) => (
                <li
                  key={p}
                  className="flex gap-3 items-center font-semibold rounded-[12px] border border-[#e2e8f0] px-[18px] py-[14px] text-[0.95rem] bg-[#f8fafc]"
                >
                  {CHECK_CIRCLE}
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <div
              className="rounded-[24px] p-10 text-white relative overflow-hidden shadow-[0_24px_60px_rgba(15,23,42,0.16)]"
              style={{
                background: "linear-gradient(160deg, #0b2545, #1d4ed8)",
              }}
            >
              <div
                className="absolute -right-10 -top-10 w-[180px] h-[180px] rounded-full pointer-events-none bg-[rgba(245,158,11,0.18)]"
                aria-hidden="true"
              />
              <h3 className="text-[1.35rem] font-extrabold mb-[18px] relative">
                Compromiso con la Excelencia
              </h3>
              <p className="relative text-white/90">
                Cada proyecto que realizamos cumple con los más altos estándares de
                calidad, garantizando resultados que superan las expectativas de
                nuestros clientes.
              </p>
              <p className="relative mt-[14px] text-white/90">
                La calidad no es un objetivo puntual, sino una cultura presente en
                todo nuestro equipo y en cada etapa de la operación.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
