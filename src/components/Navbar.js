"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Inicio",     id: "inicio" },
  { label: "Nosotros",   id: "nosotros" },
  { label: "Servicios",  id: "servicios" },
  { label: "Galería",    id: "galeria" },
  { label: "Proceso",    id: "proceso" },
  { label: "Calidad",    id: "calidad" },
  { label: "Seguridad",  id: "seguridad" },
  { label: "Clientes",   id: "clientes" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      if (isHomePage) {
        const sections = [...NAV_ITEMS.map((i) => i.id), "contacto"];
        const scrollPos = window.scrollY + 100;
        for (const sid of sections) {
          const el = document.getElementById(sid);
          if (el) {
            const { offsetTop, offsetHeight } = el;
            if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
              setActiveSection(sid);
              break;
            }
          }
        }
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleNavigation = (sectionId) => {
    closeMobileMenu();
    if (isHomePage) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const linkHref = (id) => (isHomePage ? `#${id}` : `/#${id}`);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-[box-shadow] duration-300 bg-white/[0.96] backdrop-blur-[12px] border-b border-[#e2e8f0] ${
        isScrolled ? "shadow-[0_1px_3px_rgba(15,23,42,0.08)]" : ""
      }`}
      aria-label="Encabezado del sitio"
    >
      <div className="max-w-[1180px] mx-auto px-6 flex items-center justify-between h-[78px]">
        {/* Logo */}
        <Link
          href="/"
          aria-label="VP Construcciones — inicio"
          className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] rounded"
        >
          <Image
            src="/assets/logovp.png"
            alt="VP Construcciones — Servicios Industriales"
            width={170}
            height={48}
            className="h-12 w-auto object-contain"
            style={{ width: "auto" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-0.5"
          aria-label="Navegación principal"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = isHomePage && activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={linkHref(item.id)}
                onClick={() => handleNavigation(item.id)}
                className={`font-semibold text-[0.9rem] px-[11px] py-2 rounded-[9px] transition-colors duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] ${
                  isActive
                    ? "text-[#1d4ed8] bg-[#eef4ff]"
                    : "text-[#0f172a] hover:text-[#1d4ed8] hover:bg-[#eef4ff]"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}

          {/* CTA pill */}
          <span className="ml-2">
            <Link
              href={linkHref("contacto")}
              onClick={() => handleNavigation("contacto")}
              className="inline-flex items-center gap-2 font-bold text-[0.98rem] px-[22px] py-[11px] rounded-full bg-[#f3781f] text-[#1a1206] hover:bg-[#d9620f] hover:shadow-[0_12px_28px_rgba(217,119,6,0.35)] hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3781f]"
            >
              Contáctanos
            </Link>
          </span>
        </nav>

        {/* Burger */}
        <button
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-0 p-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] rounded"
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMobileMenuOpen}
          type="button"
        >
          <span
            className={`block w-[26px] h-[2.5px] bg-[#0f172a] rounded-sm transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[7.5px]" : ""}`}
          />
          <span
            className={`block w-[26px] h-[2.5px] bg-[#0f172a] rounded-sm transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-[26px] h-[2.5px] bg-[#0f172a] rounded-sm transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[7.5px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white border-t border-[#e2e8f0] shadow-[0_10px_30px_rgba(15,23,42,0.1)] transition-all duration-350 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="px-6 py-[18px] flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = isHomePage && activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={linkHref(item.id)}
                onClick={() => handleNavigation(item.id)}
                tabIndex={isMobileMenuOpen ? 0 : -1}
                className={`block font-semibold text-[0.9rem] px-[14px] py-[13px] rounded-[9px] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] ${
                  isActive
                    ? "text-[#1d4ed8] bg-[#eef4ff]"
                    : "text-[#0f172a] hover:text-[#1d4ed8] hover:bg-[#eef4ff]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={linkHref("contacto")}
            onClick={() => handleNavigation("contacto")}
            tabIndex={isMobileMenuOpen ? 0 : -1}
            className="mt-2 block text-center font-bold text-[0.98rem] px-6 py-3 rounded-full bg-[#f3781f] text-[#1a1206] hover:bg-[#d9620f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3781f]"
          >
            Contáctanos
          </Link>
        </div>
      </div>
    </header>
  );
}
