import Reveal from "@/components/ui/Reveal";

const PASOS = [
  {
    num: "01",
    title: "Diagnóstico y evaluación",
    desc: "Visitamos tu instalación, analizamos necesidades y evaluamos riesgos para definir el alcance exacto.",
  },
  {
    num: "02",
    title: "Planificación y propuesta",
    desc: "Diseñamos un plan de trabajo a medida con cronograma, recursos y protocolos de seguridad.",
  },
  {
    num: "03",
    title: "Ejecución segura",
    desc: "Personal certificado ejecuta el servicio bajo estrictos estándares ISO y supervisión continua.",
  },
  {
    num: "04",
    title: "Control y entrega",
    desc: "Verificamos la calidad, documentamos resultados y entregamos con seguimiento post-servicio.",
  },
];

export default function Proceso() {
  return (
    <section
      id="proceso"
      className="w-full py-24 bg-white"
      aria-label="Nuestro Proceso"
    >
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal className="text-center mb-[52px]">
          <span className="inline-block font-bold text-[0.78rem] tracking-[0.12em] uppercase mb-[18px] px-4 py-[7px] rounded-full text-[#1d4ed8] bg-[#eef4ff]">
            Cómo Trabajamos
          </span>
          <h2
            className="font-extrabold tracking-[-0.02em] leading-[1.15] text-[#0f172a]"
            style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.75rem)" }}
          >
            Nuestro Proceso
          </h2>
          <p className="mt-[14px] mx-auto text-[#475569] text-[1.08rem] max-w-[640px]">
            Una metodología clara y rigurosa que garantiza resultados, seguridad y
            cumplimiento en cada proyecto.
          </p>
        </Reveal>

        {/* 4 cols → 2 @980px → 1 @760px */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PASOS.map((paso, i) => (
            <Reveal key={paso.num} delay={i * 80}>
              <div
                className="group relative overflow-hidden rounded-[16px] border border-[#e2e8f0] bg-white p-[32px_26px_28px] transition-all duration-[280ms] hover:-translate-y-[6px] hover:border-transparent hover:shadow-[0_24px_60px_rgba(15,23,42,0.16)]"
              >
                {/* Barra lateral izquierda al hover */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1 origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"
                  style={{ background: "linear-gradient(#2563eb, #f3781f)" }}
                  aria-hidden="true"
                />

                {/* Número con gradiente */}
                <div
                  className="font-black leading-none mb-[14px] text-[2.6rem]"
                  style={{
                    background: "linear-gradient(135deg, #2563eb, #f3781f)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {paso.num}
                </div>

                <h3 className="font-extrabold mb-[9px] text-[1.1rem] text-[#0f172a]">
                  {paso.title}
                </h3>
                <p className="text-[0.92rem] text-[#475569]">{paso.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
