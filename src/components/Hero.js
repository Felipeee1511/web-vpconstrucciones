export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(11,37,69,0.93), rgba(16,42,86,0.85) 45%, rgba(29,78,216,0.78)), url(/assets/Imagen.webp) center/cover no-repeat",
      }}
    >
      {/* Radial decorativos */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(900px 500px at 80% 10%, rgba(59,130,246,0.35), transparent 60%), radial-gradient(700px 500px at 10% 90%, rgba(245,158,11,0.16), transparent 60%)",
        }}
      />

      {/* Grilla sutil */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "54px 54px",
        }}
      />

      {/* Layout principal */}
      <div className="relative z-[2] w-full max-w-[1180px] mx-auto px-6 pt-[110px] pb-[70px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-[50px] items-center">
          {/* Columna izquierda */}
          <div>
            {/* Pills */}
            <div className="flex gap-[10px] flex-wrap mb-[26px]">
              {["✓ ISO 9001 · 14001 · 45001", "★ Cero accidentes en 8 años"].map(
                (text) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-[7px] text-[0.8rem] font-bold px-[15px] py-2 rounded-full bg-white/10 border border-white/[0.22]"
                  >
                    {text}
                  </span>
                )
              )}
            </div>

            {/* H1 */}
            <h1
              className="font-black leading-[1.05] tracking-[-0.03em] max-w-[14ch] mb-0"
              style={{ fontSize: "clamp(2.4rem, 5.6vw, 4.3rem)" }}
            >
              Limpieza Industrial y{" "}
              <span
                style={{
                  background: "linear-gradient(120deg, #f3781f, #fbbf24)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Mantenimiento
              </span>{" "}
              Especializado
            </h1>

            {/* Subtítulo */}
            <p className="mt-[22px] mb-[34px] text-[1.2rem] text-white/85 max-w-[560px]">
              Soluciones integrales para la industria en Chile: mantenimiento
              preventivo y correctivo, gestión de residuos, tratamiento de aguas
              y servicios generales, con los más altos estándares de calidad y
              seguridad.
            </p>

            {/* CTAs */}
            <div className="flex gap-[14px] flex-wrap">
              <a
                href="#servicios"
                className="inline-flex items-center gap-[9px] font-bold text-[0.98rem] px-7 py-[14px] rounded-full border-2 border-transparent transition-all duration-200 hover:-translate-y-0.5 bg-[#f3781f] text-[#1a1206] hover:bg-[#d9620f] hover:shadow-[0_12px_28px_rgba(217,119,6,0.35)]"
                aria-label="Ver nuestros servicios"
              >
                Nuestros Servicios →
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center gap-[9px] font-bold text-[0.98rem] px-7 py-[14px] rounded-full transition-all duration-200 hover:-translate-y-0.5 bg-white/[0.08] text-white border-2 border-white/[0.45] hover:bg-white/[0.18]"
                aria-label="Solicitar cotización"
              >
                Solicitar Cotización
              </a>
            </div>

            {/* Trust bar */}
            <div className="mt-12 flex gap-[34px] flex-wrap items-center">
              {[
                { value: "+10", label: "Años de experiencia" },
                null,
                { value: "+200", label: "Proyectos ejecutados" },
                null,
                { value: "24/7", label: "Disponibilidad" },
              ].map((item, i) =>
                item === null ? (
                  <div
                    key={i}
                    className="w-px h-[42px] bg-white/20"
                    aria-hidden="true"
                  />
                ) : (
                  <div key={i} className="flex flex-col">
                    <b className="font-black leading-none text-[1.9rem]">
                      {item.value}
                    </b>
                    <span className="font-medium mt-1 text-[0.82rem] text-white/70">
                      {item.label}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Columna derecha — visual animado (oculto en móvil) */}
          <div
            className="hidden md:grid relative h-[316px] xl:h-[440px] place-items-center"
            aria-hidden="true"
          >
            {/* Canvas de tamaño fijo: las posiciones absolutas internas siempre son relativas a 460×440.
                Se escala hacia abajo en viewports medios para evitar choques y desbordamientos. */}
            <div className="relative w-[460px] h-[440px] shrink-0 grid place-items-center scale-[0.72] lg:scale-[0.8] xl:scale-100 origin-center">
              <HeroVisual />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-[26px] left-1/2 z-[2] flex flex-col items-center gap-2 animate-bob text-white/60 text-[0.78rem]"
        style={{ transform: "translateX(-50%)" }}
        aria-hidden="true"
      >
        Desliza <span>↓</span>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <>
      {/* Anillo giratorio */}
      <div
        className="absolute w-[360px] h-[360px] rounded-full animate-spin-slow border-[1.5px] border-dashed border-white/25"
      >
        {/* Punto naranja en el anillo */}
        <div
          className="absolute -top-[7px] left-1/2 w-[14px] h-[14px] rounded-full bg-[#f3781f] shadow-[0_0_18px_#f3781f] -translate-x-1/2"
        />
      </div>

      {/* Orbe pulsante */}
      <div
        className="absolute w-[300px] h-[300px] rounded-full animate-pulse2 blur-[2px]"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, rgba(59,130,246,0.55), rgba(11,37,69,0.2))",
        }}
      />

      {/* Tarjeta central glassmorphism */}
      <div
        className="relative z-[2] flex flex-col items-center justify-center gap-[14px] p-5 w-[212px] h-[200px] rounded-[32px] border border-white/30 shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
        style={{
          background:
            "linear-gradient(150deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06))",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Logo en caja blanca */}
        <div
          className="self-center mx-auto bg-white rounded-[14px] px-4 py-3 inline-flex shadow-[0_8px_20px_rgba(0,0,0,0.18)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logovp.png"
            alt="VP Construcciones"
            className="h-[46px] w-auto block"
          />
        </div>
        <span
          className="block w-full text-center font-semibold text-[0.66rem] tracking-[0.16em] uppercase text-white/85 leading-[1.4]"
        >
          Servicios Industriales
        </span>
      </div>

      {/* Tarjetas flotantes */}
      {[
        { top: "8px",  left: "-6px",  right: undefined, bottom: undefined, mt: undefined, delay: "0s",   dot: "blue",   value: "ISO 9001", label: "Gestión de Calidad" },
        { top: "50%",  left: "-26px", right: undefined, bottom: undefined, mt: "-22px",   delay: "1.2s",  dot: "green",  value: "ISO 14001", label: "Gestión Ambiental" },
        { top: "30px", left: undefined, right: "-14px", bottom: undefined, mt: undefined, delay: "0.6s",  dot: "orange", value: "ISO 45001", label: "Seguridad y Salud" },
        { top: undefined, left: undefined, right: "-6px", bottom: "74px", mt: undefined, delay: "1.8s",  dot: "sky",    value: "100%",     label: "Satisfacción" },
        { top: undefined, left: "24px",    right: undefined, bottom: "8px", mt: undefined, delay: "0.9s", dot: "blue",  value: "24/7",     label: "Disponibilidad" },
      ].map((card) => {
        const dotColors = {
          blue:   { bg: "#2563eb", shadow: "rgba(37,99,235,0.15)" },
          green:  { bg: "#16a34a", shadow: "rgba(22,163,74,0.15)" },
          orange: { bg: "#f3781f", shadow: "rgba(243,120,31,0.15)" },
          sky:    { bg: "#0ea5e9", shadow: "rgba(14,165,233,0.15)" },
        };
        const dc = dotColors[card.dot];
        const posStyle = {
          ...(card.top    !== undefined && { top:        card.top }),
          ...(card.left   !== undefined && { left:       card.left }),
          ...(card.right  !== undefined && { right:      card.right }),
          ...(card.bottom !== undefined && { bottom:     card.bottom }),
          ...(card.mt     !== undefined && { marginTop:  card.mt }),
        };
        return (
          <div
            key={card.value}
            className="absolute z-[3] flex items-center gap-[11px] animate-floaty rounded-[14px] shadow-[0_18px_40px_rgba(0,0,0,0.28)] bg-white/[0.97] text-[#0f172a] px-4 py-3"
            style={{ ...posStyle, animationDelay: card.delay }}
          >
            <span
              className="flex-shrink-0 w-[10px] h-[10px] rounded-full"
              style={{
                background: dc.bg,
                boxShadow: `0 0 0 4px ${dc.shadow}`,
              }}
            />
            <div>
              <b className="block font-extrabold leading-[1.1] text-[1.05rem]">
                {card.value}
              </b>
              <small className="text-[0.72rem] text-[#475569]">
                {card.label}
              </small>
            </div>
          </div>
        );
      })}
    </>
  );
}
