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
      className="w-full min-h-screen flex items-center justify-center bg-white"
      style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
    >
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Sobre Nosotros
            </h2>
            <div className="space-y-6">
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                VP Construcciones SpA es una empresa líder en servicios
                industriales y mantenimiento, con una sólida trayectoria
                respaldada por certificaciones internacionales ISO 45001, 14001
                y 9001.
              </p>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                Nuestro enfoque se centra en la excelencia operativa y el
                compromiso con nuestros clientes.
              </p>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                Nuestro equipo de profesionales altamente capacitados trabaja
                día a día para superar las expectativas de nuestros clientes,
                garantizando resultados excepcionales en cada etapa del proceso
                constructivo.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 lg:gap-8 mt-12 pt-8 border-t-2 border-gray-200">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-3 transition-all duration-300">
                  {years}+
                </div>
                <div className="text-gray-600 text-sm lg:text-base font-medium">
                  Años de Experiencia
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-3 transition-all duration-300">
                  {projects}+
                </div>
                <div className="text-gray-600 text-sm lg:text-base font-medium">
                  Proyectos Completados
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-3 transition-all duration-300">
                  {satisfaction}%
                </div>
                <div className="text-gray-600 text-sm lg:text-base font-medium">
                  Satisfacción
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-96 lg:h-full min-h-100">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-lg shadow-2xl"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
