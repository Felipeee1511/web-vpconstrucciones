export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-16 lg:py-20">
      {/* Container principal */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenedor con borde sutil */}
        <div className="border-t-4 border-blue-600 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
            {/* Columna principal */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-7 h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">VP Construcciones</h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Empresa líder en servicios de construcción e ingeniería
                industrial, comprometida con la excelencia, calidad y seguridad
                en cada proyecto.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/vp-construcciones-spa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Enlaces Rápidos */}
            <div>
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-blue-600 rounded"></div>
                Enlaces Rápidos
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#inicio"
                    className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-200 block"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#nosotros"
                    className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-200 block"
                  >
                    Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-200 block"
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="text-gray-400 hover:text-white hover:pl-2 transition-all duration-200 block"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-blue-600 rounded"></div>
                Contacto
              </h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3 group">
                  <svg
                    className="w-5 h-5 text-blue-600 mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-200"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span className="leading-relaxed">
                    Av. Principal 123
                    <br />
                    Santiago, Chile
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <svg
                    className="w-5 h-5 text-blue-600 mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-200"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span>+56 2 1234 5678</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <svg
                    className="w-5 h-5 text-blue-600 mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-200"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span>contacto@vpconstrucciones.cl</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} VP Construcciones. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
