"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const nosotrosSection = document.getElementById("nosotros");
    if (nosotrosSection) {
      nosotrosSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative w-full h-screen overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url(/assets/Imagen.PNG)",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-4">
        <div className="text-center text-white max-w-5xl mx-auto">
          {/* Container con fondo sutil */}
          <div className="bg-black/20 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in leading-tight">
              VP Construcciones
            </h1>
            <p className="text-xl md:text-3xl mb-10 text-gray-100 font-light leading-relaxed">
              Especialistas en Limpieza Industrial y Mantenimiento
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <button
                onClick={() =>
                  document
                    .getElementById("servicios")
                    .scrollIntoView({ behavior: "smooth" })
                }
                style={{ padding: "1.5rem 4rem" }}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg w-full sm:w-auto focus:outline-none focus:ring-4 focus:ring-blue-400"
                aria-label="Ver nuestros servicios"
              >
                Nuestros Servicios
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contacto")
                    .scrollIntoView({ behavior: "smooth" })
                }
                style={{ padding: "1.5rem 4rem" }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-gray-900 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl shadow-lg w-full sm:w-auto focus:outline-none focus:ring-4 focus:ring-white/50"
                aria-label="Contactar con nosotros"
              >
                Contáctanos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNextSection}
        style={{ padding: "1.25rem" }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform bg-transparent border-0"
        aria-label="Scroll hacia abajo"
        type="button"
      >
        <svg
          className="w-10 h-10 text-white drop-shadow-lg"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </button>
    </section>
  );
}
