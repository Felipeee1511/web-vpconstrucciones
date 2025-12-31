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
          backgroundImage: "url(/hero/Imagen.PNG)",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-4">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            VP Construcciones
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Especialistas en Limpieza Industrial y Mantenimiento
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                document
                  .getElementById("servicios")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full font-semibold text-base transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              Nuestros Servicios
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contacto")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-gray-900 text-white px-10 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:shadow-2xl shadow-lg"
            >
              Contáctanos
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform bg-transparent border-0 p-2"
        aria-label="Scroll hacia abajo"
        type="button"
      >
        <svg
          className="w-8 h-8 text-white drop-shadow-lg"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </button>
    </section>
  );
}
