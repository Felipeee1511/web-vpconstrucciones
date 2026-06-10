import Image from "next/image";
import Link from "next/link";

const QUICK_LINKS = [
  { label: "Inicio",    href: "/#inicio" },
  { label: "Nosotros",  href: "/#nosotros" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Galería",   href: "/#galeria" },
  { label: "Proceso",   href: "/#proceso" },
  { label: "Contacto",  href: "/#contacto" },
];

const CONTACT_INFO = [
  { text: "Coronel, Región del Biobío, Chile", href: null },
  { text: "+56 9 7935 7965",                   href: "tel:+56979357965" },
  { text: "contacto@vpconstrucciones.cl",       href: "mailto:contacto@vpconstrucciones.cl" },
  { text: "Lun – Vie · 8:00 – 18:00",          href: null },
];

export default function Footer() {
  return (
    <footer
      className="w-full bg-[#0b2545] text-white/75 pt-[64px] pb-[28px]"
      aria-label="Pie de página"
    >
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-10 mb-11">
          {/* Columna 1: Marca */}
          <div>
            <div className="inline-block mb-4 rounded-[12px] bg-white px-[18px] py-3">
              <Image
                src="/assets/logovp.png"
                alt="VP Construcciones"
                width={170}
                height={46}
                className="h-[46px] w-auto block"
                style={{ width: "auto" }}
              />
            </div>
            <p className="max-w-[300px] text-[0.92rem]">
              Especialistas en limpieza industrial y mantenimiento, con
              certificaciones ISO 9001, 14001 y 45001.
            </p>

            {/* Redes sociales */}
            <div className="flex gap-[10px] mt-[18px]">
              <a
                href="https://www.linkedin.com/company/vp-construcciones-spa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de VP Construcciones"
                className="w-10 h-10 rounded-[10px] grid place-items-center text-white transition-all duration-200 hover:-translate-y-[3px] bg-white/[0.08] hover:bg-[#2563eb]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4z" />
                </svg>
              </a>
              <a
                href="https://wa.me/56979357965"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de VP Construcciones"
                className="w-10 h-10 rounded-[10px] grid place-items-center text-white transition-all duration-200 hover:-translate-y-[3px] bg-white/[0.08] hover:bg-[#2563eb]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a10 10 0 00-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1112 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.5 6.5 0 01-1.9-1.2 7.2 7.2 0 01-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.4c.1-.2.2-.3.2-.5s0-.4-.1-.5l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5a1 1 0 00-.7.3 2.8 2.8 0 00-.9 2.1c0 1.3.9 2.5 1 2.6a10 10 0 003.9 3.4c1.4.6 1.9.6 2.6.5.4 0 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1z" />
                </svg>
              </a>
              <a
                href="mailto:contacto@vpconstrucciones.cl"
                aria-label="Email de VP Construcciones"
                className="w-10 h-10 rounded-[10px] grid place-items-center text-white transition-all duration-200 hover:-translate-y-[3px] bg-white/[0.08] hover:bg-[#2563eb]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" stroke="#fff" strokeWidth="1.7" />
                  <path d="M22 7l-10 6L2 7" stroke="#fff" strokeWidth="1.7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h5 className="font-extrabold mb-[18px] uppercase tracking-[0.06em] text-white text-[0.95rem]">
              Enlaces Rápidos
            </h5>
            <ul className="grid gap-[11px] list-none">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block text-[0.92rem] text-white/[0.72] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h5 className="font-extrabold mb-[18px] uppercase tracking-[0.06em] text-white text-[0.95rem]">
              Contacto
            </h5>
            <ul className="grid gap-[11px] list-none text-[0.92rem]">
              {CONTACT_INFO.map((item, i) => (
                <li key={i}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="block text-white/[0.72] hover:text-white transition-colors duration-200"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="text-center pt-6 border-t border-white/[0.12] text-[0.85rem] text-white/[0.55]">
          &copy; {new Date().getFullYear()} VP Construcciones SpA. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
