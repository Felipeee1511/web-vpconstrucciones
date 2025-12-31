export default function Calidad() {
  const certificaciones = [
    {
      title: "ISO 9001",
      description: "Sistema de Gestión de Calidad",
    },
    {
      title: "ISO 14001",
      description: "Sistema de Gestión Ambiental",
    },
    {
      title: "ISO 45001",
      description: "Sistema de Gestión de Seguridad y Salud",
    },
  ];

  const principios = [
    "Cumplimiento de estándares internacionales",
    "Mejora continua de procesos",
    "Capacitación permanente del personal",
    "Control de calidad en todas las etapas",
    "Auditorías internas y externas",
    "Compromiso con la excelencia",
  ];

  return (
    <section
      id="calidad"
      className="w-full min-h-screen bg-white flex items-center justify-center border-t-4 border-gray-100"
    >
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Calidad y Certificaciones
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nuestro compromiso con la calidad está respaldado por
            certificaciones internacionales y un riguroso sistema de gestión.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 lg:mb-20">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
              Certificaciones
            </h3>
            <div className="space-y-6">
              {certificaciones.map((cert, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-6 lg:p-8 rounded-lg border-l-4 border-blue-600"
                >
                  <h4 className="text-xl lg:text-2xl font-bold text-blue-600 mb-3">
                    {cert.title}
                  </h4>
                  <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
              Principios de Calidad
            </h3>
            <div className="space-y-5">
              {principios.map((principio, index) => (
                <div key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 lg:w-7 lg:h-7 text-green-500 mr-3 lg:mr-4 mt-1 shrink-0"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 text-base lg:text-lg leading-relaxed">
                    {principio}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-blue-600 rounded-lg p-10 lg:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold">
              Compromiso con la Excelencia
            </h3>
            <p className="text-xl lg:text-2xl leading-relaxed">
              Cada proyecto que realizamos cumple con los más altos estándares
              de calidad, garantizando resultados que superan las expectativas
              de nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
