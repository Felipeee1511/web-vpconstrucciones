"use client";

import { useState, useEffect, useRef } from "react";

export default function Clientes() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const autoPlayRef = useRef(null);

  // Evitar error de hidratación - montar en el cliente
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Lista de clientes (placeholder con colores - reemplazar con logos reales)
  const clientes = [
    {
      id: 1,
      nombre: "CGE",
      logo: "/assets/clientes/logo-cge.png",
      alt: "Logo de CGE - Cliente de VP Construcciones",
    },
    {
      id: 2,
      nombre: "Nutrisco",
      logo: "/assets/clientes/logo-nutrisco.png",
      alt: "Logo de Nutrisco - Cliente de VP Construcciones",
    },
    {
      id: 3,
      nombre: "ENEL",
      logo: "/assets/clientes/logo-enel.svg",
      alt: "Logo de ENEL - Cliente de VP Construcciones",
      color: "bg-purple-500",
    },
    // {
    //   id: 4,
    //   nombre: "Cliente 4",
    //   logo: "/assets/cliente4.png",
    //   color: "bg-orange-500",
    // },
    // {
    //   id: 5,
    //   nombre: "Cliente 5",
    //   logo: "/assets/cliente5.png",
    //   color: "bg-red-500",
    // },
    // {
    //   id: 6,
    //   nombre: "Cliente 6",
    //   logo: "/assets/cliente6.png",
    //   color: "bg-indigo-500",
    // },
    // {
    //   id: 7,
    //   nombre: "Cliente 7",
    //   logo: "/assets/cliente7.png",
    //   color: "bg-pink-500",
    // },
    // {
    //   id: 8,
    //   nombre: "Cliente 8",
    //   logo: "/assets/cliente8.png",
    //   color: "bg-teal-500",
    // },
  ];

  // Función para ir al siguiente
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clientes.length);
  };

  // Función para ir al anterior
  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + clientes.length) % clientes.length
    );
  };

  // Auto-play cada 5 segundos
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        goToNext();
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex]);

  // Pausar auto-play al hacer hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  // Calcular posición y transformación para efecto 3D
  const getCardStyle = (index) => {
    if (!isMounted) {
      // Durante SSR, retornar estilos básicos para evitar hidratación mismatch
      return {
        transform: "translateX(0px) translateZ(0px) scale(1)",
        opacity: 1,
        zIndex: 50,
        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
      };
    }

    const totalCards = clientes.length;
    const angleStep = 360 / totalCards;
    const radius = 350; // Radio del carrusel 3D

    // Calcular el índice relativo al actual
    let relativeIndex = (index - currentIndex + totalCards) % totalCards;

    // Si el índice relativo es mayor a la mitad, ajustar para ir en la dirección opuesta
    if (relativeIndex > totalCards / 2) {
      relativeIndex = relativeIndex - totalCards;
    }

    const angle = relativeIndex * angleStep;
    const x = Math.sin((angle * Math.PI) / 180) * radius;
    const z = Math.cos((angle * Math.PI) / 180) * radius - radius;

    // Calcular escala basada en la posición Z (más cerca = más grande)
    const scale = 1 + z / 1000;
    const opacity = Math.max(0.3, 1 + z / 600);

    // El elemento central (relativeIndex === 0) tendrá z-index más alto
    const zIndex = Math.round(50 + z);

    return {
      transform: `translateX(${x}px) translateZ(${z}px) scale(${scale})`,
      opacity: opacity,
      zIndex: zIndex,
      transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
    };
  };

  return (
    <section
      id="clientes"
      className="w-full min-h-screen bg-linear-to-br from-gray-50 to-blue-50 flex items-center justify-center py-20 md:py-24 overflow-hidden"
      aria-labelledby="clientes-heading"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16 lg:mb-20">
          <span
            className="inline-block bg-blue-600 text-white rounded-full text-sm font-semibold mb-4"
            style={{ padding: "0.75rem 1.5rem" }}
          >
            Nuestros Clientes
          </span>
          <h2
            id="clientes-heading"
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Empresas que Confían en Nosotros
          </h2>
          <p
            className="text-xl lg:text-2xl text-gray-600 max-w-3xl text-center"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            Más de 10 años trabajando con las principales empresas industriales
            de Chile
          </p>
        </header>

        {/* Carrusel 3D Container */}
        <div
          className="relative h-96 md:h-125"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {!isMounted ? (
            // Placeholder durante la carga inicial
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="animate-pulse text-blue-600 text-lg">
                  Cargando clientes...
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Contenedor con perspectiva 3D */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  perspective: "1200px",
                  perspectiveOrigin: "50% 50%",
                }}
              >
                {/* Carrusel 3D */}
                <div className="relative w-full h-full flex items-center justify-center">
                  {clientes.map((cliente, index) => {
                    const isActive = index === currentIndex;

                    return (
                      <div
                        key={cliente.id}
                        className="absolute"
                        style={getCardStyle(index)}
                      >
                        <div
                          className={`bg-white rounded-2xl shadow-2xl p-6 md:p-8 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center border-4 transition-all duration-300 cursor-pointer group ${
                            isActive
                              ? "border-blue-400 scale-105"
                              : "border-white hover:border-blue-400"
                          }`}
                          onClick={() => setCurrentIndex(index)}
                        >
                          {/* Logo del cliente */}
                          {cliente.logo && cliente.alt ? (
                            <img
                              src={cliente.logo}
                              alt={cliente.alt}
                              className={`w-full h-full object-contain p-4 transition-all duration-300 ${
                                isActive
                                  ? "filter-none scale-105"
                                  : "filter grayscale hover:grayscale-0 hover:scale-105"
                              }`}
                              loading="lazy"
                            />
                          ) : (
                            // Placeholder para clientes sin logo
                            <div className="text-center">
                              <div
                                className={`${
                                  cliente.color
                                } w-32 h-32 md:w-40 md:h-40 mx-auto rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 ${
                                  isActive
                                    ? "scale-110"
                                    : "group-hover:scale-110"
                                }`}
                              >
                                <span className="text-white font-bold text-2xl md:text-3xl">
                                  LOGO
                                </span>
                              </div>
                              <p className="text-gray-800 font-semibold text-lg md:text-xl">
                                {cliente.nombre}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Botones de navegación */}
              <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8 pointer-events-none z-50">
                <button
                  onClick={goToPrev}
                  className="pointer-events-auto bg-white hover:bg-blue-600 text-gray-800 hover:text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-400"
                  aria-label="Cliente anterior"
                >
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>

                <button
                  onClick={goToNext}
                  className="pointer-events-auto bg-white hover:bg-blue-600 text-gray-800 hover:text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-400"
                  aria-label="Cliente siguiente"
                >
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>

              {/* Indicadores de posición */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 z-50">
                {clientes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                      index === currentIndex
                        ? "bg-blue-600 w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Ir al cliente ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Stats adicionales */}
        <div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div
              className="text-4xl font-bold text-blue-600 mb-2"
              style={{ textAlign: "center" }}
            >
              24/7
            </div>
            <div className="text-gray-600" style={{ textAlign: "center" }}>
              Disponibilidad
            </div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div
              className="text-4xl font-bold text-blue-600 mb-2"
              style={{ textAlign: "center" }}
            >
              8.000MM+
            </div>
            <div className="text-gray-600" style={{ textAlign: "center" }}>
              Proyectos de limpieza y mantenimiento
            </div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div
              className="text-4xl font-bold text-blue-600 mb-2"
              style={{ textAlign: "center" }}
            >
              100%
            </div>
            <div className="text-gray-600" style={{ textAlign: "center" }}>
              Satisfacción
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
