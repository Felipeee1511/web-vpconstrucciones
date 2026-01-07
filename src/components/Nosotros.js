"use client";

import { useState, useEffect, useRef } from "react";

export default function Nosotros() {
  const [isVisible, setIsVisible] = useState(false);
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);

  const images = [
    { src: "/assets/Imagen2.PNG", alt: "Instalaciones VP Construcciones" },
    { src: "/assets/nosotros1.jpeg", alt: "Proyecto VP Construcciones 1" },
    { src: "/assets/nosotros2.jpeg", alt: "Proyecto VP Construcciones 2" },
    { src: "/assets/nosotros3.jpeg", alt: "Proyecto VP Construcciones 3" },
    { src: "/assets/nosotros4.jpeg", alt: "Proyecto VP Construcciones 4" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  // Auto-play del slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (isVisible) {
      // Animar años de experiencia (0 a 10)
      const yearsInterval = setInterval(() => {
        setYears((prev) => {
          if (prev >= 10) {
            clearInterval(yearsInterval);
            return 10;
          }
          return prev + 1;
        });
      }, 150);

      // Animar proyectos completados (0 a 500)
      const projectsInterval = setInterval(() => {
        setProjects((prev) => {
          if (prev >= 500) {
            clearInterval(projectsInterval);
            return 500;
          }
          return prev + 20;
        });
      }, 40);

      // Animar satisfacción (0 a 100)
      const satisfactionInterval = setInterval(() => {
        setSatisfaction((prev) => {
          if (prev >= 100) {
            clearInterval(satisfactionInterval);
            return 100;
          }
          return prev + 4;
        });
      }, 60);

      return () => {
        clearInterval(yearsInterval);
        clearInterval(projectsInterval);
        clearInterval(satisfactionInterval);
      };
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="nosotros"
      className="w-full min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-white py-20 md:py-24"
      aria-labelledby="nosotros-heading"
    >
      {/* Container principal con borde sutil */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <header className="text-center">
                <span
                  style={{ padding: "0.75rem 1.5rem" }}
                  className="inline-block bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4"
                >
                  Quiénes Somos
                </span>
                <h2
                  id="nosotros-heading"
                  className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                >
                  Sobre Nosotros
                </h2>
              </header>
              <div className="space-y-6">
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                  VP Construcciones SpA es una empresa líder en servicios
                  industriales y mantenimiento, con una sólida trayectoria
                  respaldada por certificaciones internacionales ISO 45001,
                  14001 y 9001.
                </p>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Nuestro enfoque se centra en la excelencia operativa y el
                  compromiso con nuestros clientes.
                </p>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Nuestro equipo de profesionales altamente capacitados trabaja
                  día a día para superar las expectativas de nuestros clientes,
                  garantizando resultados excepcionales en cada etapa del
                  proceso constructivo.
                </p>
              </div>

              {/* Estadísticas con contenedor visual */}
              <div className="grid grid-cols-3 gap-4 lg:gap-6 mt-12 pt-8 border-t-2 border-gray-200">
                <div className="text-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
                  <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2 transition-all duration-300">
                    {years}+
                  </div>
                  <div className="text-gray-700 text-sm lg:text-base font-medium">
                    Años de Experiencia
                  </div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
                  <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2 transition-all duration-300">
                    {projects}+
                  </div>
                  <div className="text-gray-700 text-sm lg:text-base font-medium">
                    Proyectos Completados
                  </div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
                  <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2 transition-all duration-300">
                    {satisfaction}%
                  </div>
                  <div className="text-gray-700 text-sm lg:text-base font-medium">
                    Satisfacción
                  </div>
                </div>
              </div>
            </div>

            {/* Slider de imágenes */}
            <div className="relative h-96 lg:h-full min-h-125 overflow-hidden rounded-2xl shadow-2xl border-4 border-white group">
              {/* Imágenes del slider */}
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${image.src})`,
                      backgroundPosition: "center",
                    }}
                    role="img"
                    aria-label={image.alt}
                  >
                    {/* Overlay sutil para mejorar contraste */}
                    <div className="absolute inset-0 bg-black/5"></div>
                  </div>
                </div>
              ))}

              {/* Botón anterior */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                aria-label="Imagen anterior"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Botón siguiente */}
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                aria-label="Imagen siguiente"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Indicadores de puntos */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-white w-8"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
