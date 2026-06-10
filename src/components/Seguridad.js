import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";

const CHECK_SVG = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SHIELD_SVG = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#fbbf24" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GLOBE_SVG = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="#fbbf24" strokeWidth="1.8" />
    <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" stroke="#fbbf24" strokeWidth="1.8" />
  </svg>
);

export default function Seguridad() {
  return (
    <section
      id="seguridad"
      className="w-full py-24 text-white"
      style={{ background: "linear-gradient(135deg, #0b2545, #102a56)" }}
      aria-label="Seguridad Laboral"
    >
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal className="text-center mb-[50px]">
          <span className="inline-block font-bold text-[0.78rem] tracking-[0.12em] uppercase mb-[18px] px-4 py-[7px] rounded-full bg-[rgba(245,158,11,0.18)] text-[#f3781f]">
            Nuestra Prioridad
          </span>
          <h2
            className="font-extrabold tracking-[-0.02em] leading-[1.15]"
            style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.75rem)" }}
          >
            Seguridad Laboral
          </h2>
          <p className="mt-[14px] mx-auto text-white/80 text-[1.08rem] max-w-[640px]">
            La seguridad de nuestro equipo y colaboradores es nuestra prioridad
            absoluta. Implementamos las mejores prácticas de la industria.
          </p>
        </Reveal>

        {/* 2 cards glass — 2 cols → 1 @980px */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mb-[30px]">
          {[
            {
              icon: SHIELD_SVG,
              title: "Compromiso con la Seguridad",
              items: [
                "Récord de cero accidentes graves en 8 años",
                "Protocolos estrictos de seguridad",
                "Capacitación continua para todo el personal",
                "Evaluaciones periódicas de riesgos",
              ],
            },
            {
              icon: GLOBE_SVG,
              title: "Gestión Ambiental",
              items: [
                "Certificación ISO 14001",
                "Manejo responsable de residuos",
                "Prácticas sostenibles",
                "Cumplimiento normativo vigente",
              ],
            },
          ].map((card, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="rounded-[16px] p-8 bg-white/[0.06] border border-white/[0.12]">
                <h3 className="text-[1.25rem] font-extrabold mb-[18px] flex items-center gap-[11px]">
                  {card.icon}
                  {card.title}
                </h3>
                <ul className="grid gap-3 list-none">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-[11px] items-start text-[0.96rem] text-[#f3781f]"
                    >
                      <span className="text-[#f3781f] flex-shrink-0 mt-[3px]">
                        {CHECK_SVG}
                      </span>
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stats — 3 cols → 2 @760px */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { target: 0,   suffix: "",  label: "Accidentes graves" },
            { target: 100, suffix: "%", label: "Personal capacitado" },
            { static: "24/7",           label: "Monitoreo de seguridad" },
          ].map((stat, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="text-center rounded-[16px] py-7 px-4 bg-white/[0.06] border border-white/[0.12]">
                <div className="font-black leading-none text-[2.6rem] text-[#f3781f]">
                  {stat.static !== undefined ? (
                    stat.static
                  ) : (
                    <CountUp
                      target={stat.target}
                      suffix={stat.suffix}
                      className="font-black leading-none text-[2.6rem] text-[#f3781f]"
                    />
                  )}
                </div>
                <div className="font-semibold mt-2 text-[0.85rem] text-white/75">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
