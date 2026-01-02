import {
  SeguridadPersonaIcon,
  SeguridadCandadoIcon,
  EscudoCheckIcon,
} from "./icons";

export default function Seguridad() {
  const medidas = [
    {
      icon: <SeguridadPersonaIcon />,
      title: "Compromiso con la Seguridad",
      description: [
        "Record de cero accidentes en 8 años",
        "Protocolos estrictos de seguridad",
        "Capacitación continua para todo el personal",
        "Evaluaciones periódicas de riesgos",
      ],
    },
    {
      icon: <SeguridadCandadoIcon />,
      title: "Gestión Ambiental",
      description: [
        "Certificación ISO 14001",
        "Manejo responsable de residuos",
        "Practicas sostenibles",
        "Cumplimiento normativo",
      ],
    },
  ];

  return (
    <section
      id="seguridad"
      className="w-full min-h-screen bg-gray-900 text-white flex items-center justify-center py-20 md:py-24"
    >
      {/* Container principal */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20 flex flex-col items-center">
          <span
            style={{ padding: "0.75rem 1.5rem" }}
            className="inline-block bg-orange-600 text-white rounded-full text-sm font-semibold mb-4"
          >
            Nuestra Prioridad
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Seguridad Laboral
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl leading-relaxed text-center">
            La seguridad de nuestro equipo y colaboradores es nuestra prioridad
            absoluta. Implementamos las mejores prácticas de la industria.
          </p>
        </div>

        {/* Tarjetas de medidas con borde */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16 lg:mb-20">
          {medidas.map((medida, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 lg:p-10 rounded-2xl hover:bg-gray-750 transition-all duration-300 border border-gray-700 shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
            >
              {/* Icono con contenedor */}
              <div
                className="flex items-center justify-center w-24 h-24 bg-gray-700 rounded-2xl mb-6 text-white"
                style={{ margin: "0 auto 1.5rem auto" }}
              >
                {medida.icon}
              </div>

              <h3 className="text-xl lg:text-2xl font-bold mb-6 text-center">
                {medida.title}
              </h3>

              {Array.isArray(medida.description) ? (
                <ul className="text-gray-300 text-base lg:text-lg space-y-4">
                  {medida.description.map((item, idx) => (
                    <li key={idx} className="flex items-start group/item">
                      <span className="text-orange-500 mr-3 mt-1 shrink-0 font-bold text-xl group-hover/item:scale-125 transition-transform duration-200">
                        •
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                  {medida.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Sección destacada de cero accidentes con contenedor visual */}
        <div className="bg-linear-to-r from-orange-600 to-red-600 rounded-3xl p-10 lg:p-14 shadow-2xl border-4 border-orange-400/20">
          <div className="space-y-8">
            {/* Icono principal */}
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm text-white">
                <EscudoCheckIcon />
              </div>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-center leading-tight">
              Cero Accidentes es Nuestro Objetivo
            </h3>

            <p
              style={{
                textAlign: "center",
                maxWidth: "48rem",
                margin: "0 auto",
                fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
                lineHeight: "1.75",
                color: "rgb(254, 243, 231)",
              }}
            >
              Trabajamos cada día con el compromiso de que todos nuestros
              colaboradores regresen seguros a sus hogares. La seguridad no es
              negociable.
            </p>

            {/* Estadísticas en tarjetas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
              <div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors duration-300"
                style={{ textAlign: "center" }}
              >
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                  0
                </div>
                <div className="text-base md:text-xl lg:text-2xl text-orange-50 font-medium">
                  Accidentes Graves
                </div>
              </div>

              <div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors duration-300"
                style={{ textAlign: "center" }}
              >
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                  100%
                </div>
                <div className="text-base md:text-xl lg:text-2xl text-orange-50 font-medium">
                  Personal Capacitado
                </div>
              </div>

              <div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors duration-300"
                style={{ textAlign: "center" }}
              >
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                  24/7
                </div>
                <div className="text-base md:text-xl lg:text-2xl text-orange-50 font-medium">
                  Monitoreo de Seguridad
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
