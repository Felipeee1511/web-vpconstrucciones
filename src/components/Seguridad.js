export default function Seguridad() {
  const medidas = [
    {
      icon: "👷",
      title: "Compromiso con la Seguridad",
      description: [
        "Record de cero accidentes en 8 años",
        "Protocolos estrictos de seguridad",
        "Capacitación continua para todo el personal",
        "Evaluaciones periódicas de riesgos",
      ],
    },
    {
      icon: "🦺",
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
      className="w-full min-h-screen bg-gray-900 text-white flex items-center justify-center border-t-4 border-gray-800"
    >
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center">
        <div className="w-full text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Seguridad Laboral
          </h2>
          <div className="flex justify-center">
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              La seguridad de nuestro equipo y colaboradores es nuestra
              prioridad absoluta. Implementamos las mejores prácticas de la
              industria.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 mb-16 lg:mb-20 w-full">
          {medidas.map((medida, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 lg:p-10 rounded-lg hover:bg-gray-700 transition-colors text-center"
            >
              <div className="text-5xl lg:text-6xl mb-6">{medida.icon}</div>
              <h3 className="text-xl lg:text-2xl font-bold mb-6">
                {medida.title}
              </h3>
              {Array.isArray(medida.description) ? (
                <ul className="text-gray-300 text-base lg:text-lg space-y-4 text-left inline-block">
                  {medida.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1 shrink-0">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-300 text-base lg:text-lg">
                  {medida.description}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="w-full bg-linear-to-r from-orange-600 to-red-600 rounded-lg p-10 lg:p-14 text-center">
          <div className="w-full space-y-8">
            <div className="text-6xl lg:text-7xl mb-8">🛡️</div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-8">
              Cero Accidentes es Nuestro Objetivo
            </h3>
            <p className="text-xl lg:text-2xl mb-12 leading-relaxed">
              Trabajamos cada día con el compromiso de que todos nuestros
              colaboradores regresen seguros a sus hogares. La seguridad no es
              negociable.
            </p>
            <div className="grid grid-cols-3 gap-6 md:gap-10 lg:gap-12 mt-12">
              <div className="space-y-4">
                <div className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                  0
                </div>
                <div className="text-sm md:text-xl lg:text-2xl text-gray-100 font-medium">
                  Accidentes Graves (2024)
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                  100%
                </div>
                <div className="text-sm md:text-xl lg:text-2xl text-gray-100 font-medium">
                  Personal Capacitado
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                  24/7
                </div>
                <div className="text-sm md:text-xl lg:text-2xl text-gray-100 font-medium">
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
