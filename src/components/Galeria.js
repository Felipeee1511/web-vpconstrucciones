"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Reveal from "@/components/ui/Reveal";

const ITEMS = [
  {
    src: "/assets/galeria/equipo-certificado.webp",
    alt: "Equipo de trabajo con elementos de protección",
    caption: "Equipo profesional certificado",
    cls: "g-lg",
  },
  {
    src: "/assets/galeria/tratamiento-aguas.webp",
    alt: "Planta de tratamiento de aguas",
    caption: "Tratamiento y gestión de aguas",
    cls: "g-wide",
  },
  {
    src: "/assets/galeria/mantenimiento-industrial.webp",
    alt: "Mantenimiento de maquinaria industrial",
    caption: "Mantenimiento industrial",
    cls: "",
  },
  {
    src: "/assets/galeria/servicios-especializados.webp",
    alt: "Trabajo de soldadura y mantenimiento especializado",
    caption: "Servicios especializados",
    cls: "",
  },
  {
    src: "/assets/galeria/centrales-termicas.webp",
    alt: "Instalación industrial",
    caption: "Centrales térmicas e instalaciones",
    cls: "g-wide",
  },
  {
    src: "/assets/galeria/servicios-generales.webp",
    alt: "Gestión de almacenes y servicios generales",
    caption: "Servicios generales",
    cls: "",
  },
  {
    src: "/assets/galeria/soluciones-sostenibles.webp",
    alt: "Gestión sostenible del agua",
    caption: "Soluciones sostenibles",
    cls: "",
  },
];

export default function Galeria() {
  const [lightbox, setLightbox] = useState(null); // { src, alt, caption }
  const dialogRef = useRef(null);

  const openLightbox = useCallback((item) => {
    setLightbox(item);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e) => { if (e.key === "Escape") closeLightbox(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [lightbox, closeLightbox]);

  // Focus trap: focus close button on open
  useEffect(() => {
    if (lightbox && dialogRef.current) {
      const closeBtn = dialogRef.current.querySelector("button");
      closeBtn?.focus();
    }
  }, [lightbox]);

  return (
    <section
      id="galeria"
      className="w-full py-24 bg-white"
      aria-label="Galería de Proyectos"
    >
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal className="text-center mb-[50px]">
          <span className="inline-block font-bold text-[0.78rem] tracking-[0.12em] uppercase mb-[18px] px-4 py-[7px] rounded-full text-[#1d4ed8] bg-[#eef4ff]">
            Nuestro Trabajo
          </span>
          <h2
            className="font-extrabold tracking-[-0.02em] leading-[1.15] text-[#0f172a]"
            style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.75rem)" }}
          >
            Galería de Proyectos
          </h2>
          <p className="mt-[14px] mx-auto text-[#475569] text-[1.08rem] max-w-[640px]">
            Imágenes que reflejan el compromiso, la seguridad y la calidad con que
            ejecutamos cada servicio industrial.
          </p>
        </Reveal>

        {/* Masonry grid */}
        <Reveal>
          <div
            className="gallery-grid mt-[50px]"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridAutoRows: "200px",
              gridAutoFlow: "dense",
              gap: "14px",
            }}
          >
            {ITEMS.map((item, i) => (
              <figure
                key={i}
                className={`g-item relative overflow-hidden rounded-[16px] m-0 cursor-pointer group shadow-[0_1px_3px_rgba(15,23,42,0.08)] ${
                  item.cls === "g-lg"   ? "col-span-2 row-span-2" :
                  item.cls === "g-wide" ? "col-span-2" : ""
                }`}
                onClick={() => openLightbox(item)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") openLightbox(item); }}
                tabIndex={0}
                role="button"
                aria-label={`Ver imagen ampliada: ${item.caption}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.09] block"
                  loading="lazy"
                />
                {/* Overlay base */}
                <div
                  className="absolute inset-0 transition-opacity duration-300 opacity-50 group-hover:opacity-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(11,37,69,0.9), rgba(11,37,69,0.05) 55%, transparent)",
                  }}
                  aria-hidden="true"
                />
                {/* Overlay hover */}
                <div
                  className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(11,37,69,0.9), rgba(11,37,69,0.05) 55%, transparent)",
                  }}
                  aria-hidden="true"
                />
                <figcaption
                  className="absolute left-0 right-0 bottom-0 px-5 py-[18px] font-bold z-[2] text-white text-[1.02rem] transition-transform duration-300 translate-y-2 group-hover:translate-y-0"
                  style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}
                >
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <dialog
          ref={dialogRef}
          open
          className="fixed inset-0 z-[200] flex items-center justify-center p-[30px] m-0 w-full h-full max-w-none max-h-none border-0"
          style={{
            background: "rgba(7,18,36,0.92)",
            backdropFilter: "blur(6px)",
          }}
          aria-modal="true"
          aria-label="Imagen ampliada"
          onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-[22px] right-[26px] w-[46px] h-[46px] rounded-full flex items-center justify-center border-0 text-white text-[1.5rem] transition-colors duration-200 cursor-pointer bg-white/[0.14] hover:bg-white/[0.28] focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Cerrar imagen"
          >
            ×
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-[92vw] max-h-[86vh] rounded-[14px] shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
          />
          <div className="absolute bottom-[26px] left-0 right-0 text-center font-semibold text-white">
            {lightbox.caption}
          </div>
        </dialog>
      )}

      {/* Responsive grid styles */}
      <style>{`
        @media (max-width: 980px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-auto-rows: 170px !important;
          }
        }
        @media (max-width: 760px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-auto-rows: 150px !important;
          }
          .gallery-grid .col-span-2 { grid-column: span 2 !important; grid-row: span 1 !important; }
        }
        @media (max-width: 440px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
          .gallery-grid .col-span-2 { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  );
}
