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
      className="w-full min-h-screen bg-white flex items-center justify-center py-20 md:py-24"
    >
      {/* Container principal */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header con badge */}
        <div className="text-center mb-16 lg:mb-20 flex flex-col items-center">
          <span
            style={{ padding: "0.75rem 1.5rem" }}
            className="inline-block bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4"
          >
            Nuestro Compromiso
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Calidad y Certificaciones
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl">
            Nuestro compromiso con la calidad está respaldado por
            certificaciones internacionales y un riguroso sistema de gestión.
          </p>
        </div>

        {/* Contenedor principal con borde */}
        <div className="bg-linear-to-br from-gray-50 to-white rounded-3xl shadow-xl border border-gray-200 p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            {/* Certificaciones */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  Certificaciones
                </h3>
              </div>
              <div className="space-y-5">
                {certificaciones.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 lg:p-8 rounded-2xl border-l-4 border-blue-600 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-x-2"
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

            {/* Principios */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  Principios de Calidad
                </h3>
              </div>
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-md">
                <div className="space-y-5">
                  {principios.map((principio, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="shrink-0 w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-500 transition-colors duration-300">
                        <svg
                          className="w-5 h-5 text-green-600 group-hover:text-white transition-colors duration-300"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-base lg:text-lg leading-relaxed">
                        {principio}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to action destacado */}
          <div
            className="bg-linear-to-r from-blue-600 to-blue-700 rounded-2xl p-10 lg:p-14 text-white shadow-2xl transform hover:scale-[1.02] transition-all duration-300"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                maxWidth: "48rem",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.5rem",
              }}
            >
              <div className="flex w-16 h-16 bg-white/20 rounded-2xl items-center justify-center">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "clamp(1.875rem, 5vw, 2.25rem)",
                  fontWeight: "bold",
                  lineHeight: "1.2",
                  textAlign: "center",
                  width: "100%",
                  margin: 0,
                }}
              >
                Compromiso con la Excelencia
              </h3>
              <p
                style={{
                  fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
                  lineHeight: "1.75",
                  textAlign: "center",
                  width: "100%",
                  margin: 0,
                  color: "rgba(239, 246, 255, 1)",
                }}
              >
                Cada proyecto que realizamos cumple con los más altos estándares
                de calidad, garantizando resultados que superan las expectativas
                de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
