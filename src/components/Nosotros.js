"use client";

import { useState, useEffect, useRef } from "react";

export default function Nosotros() {
  const [isVisible, setIsVisible] = useState(false);
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const sectionRef = useRef(null);

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
      }, 80);

      // Animar proyectos completados (0 a 500)
      const projectsInterval = setInterval(() => {
        setProjects((prev) => {
          if (prev >= 500) {
            clearInterval(projectsInterval);
            return 500;
          }
          return prev + 20;
        });
      }, 20);

      // Animar satisfacción (0 a 100)
      const satisfactionInterval = setInterval(() => {
        setSatisfaction((prev) => {
          if (prev >= 100) {
            clearInterval(satisfactionInterval);
            return 100;
          }
          return prev + 4;
        });
      }, 30);

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
    >
      {/* Container principal con borde sutil */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span
                  style={{ padding: "0.75rem 1.5rem" }}
                  className="inline-block bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4"
                >
                  Quiénes Somos
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Sobre Nosotros
                </h2>
              </div>
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

            {/* Imagen con borde y sombra */}
            <div className="relative h-96 lg:h-full min-h-125">
              <div
                className="absolute inset-0 bg-cover bg-center rounded-2xl shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-300"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80)",
                }}
              >
                {/* Overlay sutil para mejorar contraste */}
                <div className="absolute inset-0 bg-black/5 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
