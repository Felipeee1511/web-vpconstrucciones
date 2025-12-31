export default function Servicios() {
  const servicios = [
    {
      icon: "🔧",
      title: "Mantenimiento Industrial",
      description: [
        "Mantenimiento preventivo y correctivo",
        "Gestión de instalaciones",
        "Servicios especializados para centrales térmicas",
        "Mantenimiento de equipos industriales",
      ],
    },
    {
      icon: "🧹",
      title: "Limpieza industrial",
      description: [
        "Limpieza de calderas",
        "Limpieza de instalaciones industriales",
        "Manejo de residuos industriales",
        "Servicios especializados de limpieza",
      ],
    },
    {
      icon: "🌿",
      title: "Jardinería",
      description: [
        "Mantenimiento de áreas verdes",
        "Diseño paisajístico",
        "Instalación y mantenimiento de sistemas de riego.",
        "Servicios de poda y control de vegetación.",
      ],
    },
    {
      icon: "🏗️",
      title: "Servicios generales",
      description: [
        "Gestión de almacenes",
        "Operación de romana",
        "Mantenimiento de edificios",
      ],
    },
    {
      icon: "♻️",
      title: "Gestión de residuos",
      description: [
        "Manejo de residuos peligrosos (RESPEL)",
        "Gestión de residuos industriales",
        "Disposición controlada",
        "Asesoría en cumplimiento normativo",
      ],
    },
    {
      icon: "🚰",
      title: "Tratamiento de aguas",
      description: [
        "Tratamiento de aguas servidas",
        "Gestión de agua potable",
        "Análisis y control de calidad",
        "Mantenimiento de sistemas de tratamiento",
      ],
    },
  ];

  return (
    <section
      id="servicios"
      className="w-full min-h-screen bg-gray-50 flex items-center justify-center border-t-4 border-gray-200"
    >
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto"></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="bg-white p-8 lg:p-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="text-5xl lg:text-6xl mb-6">{servicio.icon}</div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-5">
                {servicio.title}
              </h3>
              {Array.isArray(servicio.description) ? (
                <ul className="text-gray-600 text-base lg:text-lg space-y-3 text-left">
                  {servicio.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1 shrink-0">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 text-sm lg:text-base text-left">
                  {servicio.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
