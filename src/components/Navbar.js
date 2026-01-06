"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detectar sección activa solo en la página principal
      if (isHomePage) {
        const sections = [
          "inicio",
          "nosotros",
          "servicios",
          "calidad",
          "seguridad",
          "clientes",
          "contacto",
        ];
        const scrollPosition = window.scrollY + 100; // Offset para activación temprana

        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    handleScroll(); // Llamar al cargar
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const handleNavigation = (sectionId) => {
    setIsMobileMenuOpen(false);

    if (isHomePage) {
      // Si estamos en la página principal, hacer scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    // Si no estamos en la página principal, el Link se encargará de la navegación
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg backdrop-blur-sm"
          : "bg-black/20 backdrop-blur-md"
      }`}
    >
      <div className="w-full mx-auto px-8 sm:px-12 lg:px-16 xl:px-24">
        <div className="flex justify-between items-center h-20">
          {/* Logo con contenedor visual */}
          <div className="shrink-0">
            <Link
              href="/"
              style={{ padding: "1rem 1.5rem" }}
              className={`block transition-all duration-300 rounded-xl ${
                isScrolled ? "hover:bg-blue-50" : "hover:bg-white/10"
              }`}
              aria-label="Ir a inicio"
            >
              <Image
                src="/assets/logovp.png"
                alt="VP Construcciones Logo"
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu con mejor diseño */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {[
              { label: "Inicio", id: "inicio" },
              { label: "Nosotros", id: "nosotros" },
              { label: "Servicios", id: "servicios" },
              { label: "Calidad", id: "calidad" },
              { label: "Seguridad", id: "seguridad" },
              { label: "Clientes", id: "clientes" },
              { label: "Contacto", id: "contacto" },
            ].map((item) => {
              const isActive = isHomePage && activeSection === item.id;
              const href = isHomePage ? `#${item.id}` : `/#${item.id}`;

              return (
                <Link
                  key={item.id}
                  href={href}
                  onClick={() => handleNavigation(item.id)}
                  style={{ padding: "0.875rem 1.5rem" }}
                  className={`transition-all duration-300 font-medium text-sm lg:text-base whitespace-nowrap rounded-xl ${
                    isActive
                      ? isScrolled
                        ? "text-blue-600 bg-blue-50 font-semibold"
                        : "text-white bg-white/30 font-semibold"
                      : isScrolled
                      ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      : "text-white hover:bg-white/20"
                  }`}
                  aria-label={`Ir a ${item.label}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button con mejor diseño */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{ padding: "1rem" }}
              className={`rounded-xl transition-all duration-300 ${
                isScrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/20"
              }`}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <svg
                className="h-7 w-7"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu mejorado */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-2xl border-t border-gray-200 animate-fade-in">
          <div className="px-4 pt-3 pb-4 space-y-2 max-w-7xl mx-auto">
            {[
              { label: "Inicio", id: "inicio" },
              { label: "Nosotros", id: "nosotros" },
              { label: "Servicios", id: "servicios" },
              { label: "Calidad", id: "calidad" },
              { label: "Seguridad", id: "seguridad" },
              { label: "Clientes", id: "clientes" },
              { label: "Contacto", id: "contacto" },
            ].map((item) => {
              const isActive = isHomePage && activeSection === item.id;
              const href = isHomePage ? `#${item.id}` : `/#${item.id}`;

              return (
                <Link
                  key={item.id}
                  href={href}
                  onClick={() => handleNavigation(item.id)}
                  style={{ padding: "1.25rem 1.5rem" }}
                  className={`block w-full text-left text-base font-medium rounded-xl transition-all duration-200 ${
                    isActive
                      ? "text-blue-600 bg-blue-50 font-semibold"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                  aria-label={`Ir a ${item.label}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
