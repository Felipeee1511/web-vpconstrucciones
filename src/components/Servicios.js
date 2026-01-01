"use client";

import {
  MantenimientoIcon,
  LimpiezaIcon,
  JardineriaIcon,
  ServiciosGeneralesIcon,
  ResiduosIcon,
  AguasIcon,
} from "./icons";

export default function Servicios() {
  const servicios = [
    {
      icon: <MantenimientoIcon />,
      title: "Mantenimiento Industrial",
      description: [
        "Mantenimiento preventivo y correctivo",
        "Gestión de instalaciones",
        "Servicios especializados para centrales térmicas",
        "Mantenimiento de equipos industriales",
      ],
    },
    {
      icon: <LimpiezaIcon />,
      title: "Limpieza industrial",
      description: [
        "Limpieza de calderas",
        "Limpieza de instalaciones industriales",
        "Manejo de residuos industriales",
        "Servicios especializados de limpieza",
      ],
    },
    {
      icon: <JardineriaIcon />,
      title: "Jardinería",
      description: [
        "Mantenimiento de áreas verdes",
        "Diseño paisajístico",
        "Instalación y mantenimiento de sistemas de riego.",
        "Servicios de poda y control de vegetación.",
      ],
    },
    {
      icon: <ServiciosGeneralesIcon />,
      title: "Servicios generales",
      description: [
        "Gestión de almacenes",
        "Operación de romana",
        "Mantenimiento de edificios",
      ],
    },
    {
      icon: <ResiduosIcon />,
      title: "Gestión de residuos",
      description: [
        "Manejo de residuos peligrosos (RESPEL)",
        "Gestión de residuos industriales",
        "Disposición controlada",
        "Asesoría en cumplimiento normativo",
      ],
    },
    {
      icon: <AguasIcon />,
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
      className="w-full min-h-screen bg-linear-to-br from-blue-50 to-gray-100 flex items-center justify-center py-20 md:py-24"
    >
      {/* Container principal */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header con contenedor visual */}
        <div className="text-center mb-16 lg:mb-20">
          <span
            style={{ padding: "0.75rem 1.5rem" }}
            className="inline-block bg-blue-600 text-white rounded-full text-sm font-semibold mb-4"
          >
            Lo que ofrecemos
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Nuestros Servicios
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            Soluciones integrales para la industria
          </p>
        </div>

        {/* Grid de servicios con mejores contenedores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
            >
              {/* Icono con fondo */}
              <div className="flex items-center justify-center w-20 h-20 bg-blue-100 rounded-2xl mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 group-hover:scale-110 transform">
                {servicio.icon}
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-5 min-h-15 flex items-center">
                {servicio.title}
              </h3>

              {Array.isArray(servicio.description) ? (
                <ul className="text-gray-600 text-base lg:text-lg space-y-3">
                  {servicio.description.map((item, idx) => (
                    <li key={idx} className="flex items-start group/item">
                      <span className="text-blue-600 mr-3 mt-1 shrink-0 font-bold group-hover/item:scale-125 transition-transform duration-200">
                        •
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                  {servicio.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-24 lg:mt-32">
          <div className="w-full bg-white rounded-2xl shadow-lg p-10 lg:p-12 border border-gray-100 text-center">
            <p className="text-xl lg:text-2xl text-gray-700 mb-6">
              ¿Necesitas un servicio personalizado?
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contacto")
                  .scrollIntoView({ behavior: "smooth" })
              }
              style={{ padding: "1.25rem 3rem" }}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-400"
              aria-label="Contactar para servicio personalizado"
            >
              Contáctanos Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
