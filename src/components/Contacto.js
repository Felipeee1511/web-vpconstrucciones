"use client";

import { useState, useRef } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import Reveal from "@/components/ui/Reveal";

const INFO_ITEMS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1116 0z" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    label: "Ubicación",
    value: "Coronel, Región del Biobío, Chile",
    href: "https://maps.google.com/?q=Coronel,Chile",
    target: "_blank",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012 4.2 2 2 0 014 2h3a2 2 0 012 1.7c.1.9.4 1.8.7 2.7a2 2 0 01-.5 2.1L8.1 9.6a16 16 0 006 6l1.1-1.1a2 2 0 012.1-.5c.9.3 1.8.6 2.7.7a2 2 0 011.7 2z" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
    label: "Teléfono",
    value: "+56 9 7935 7965",
    href: "tel:+56979357965",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M22 7l-10 6L2 7" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
    label: "Email",
    value: "contacto@vpconstrucciones.cl",
    href: "mailto:contacto@vpconstrucciones.cl",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
    label: "Horario",
    value: "Lunes a Viernes · 8:00 – 18:00",
    href: null,
  },
];

const WHY_ITEMS = [
  "Experiencia comprobada en el sector industrial",
  "Compromiso con la calidad y la seguridad",
  "Equipo altamente calificado",
  "Cumplimiento de plazos garantizado",
];

const CHECK_CIRCLE = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="#dbeafe" />
    <path d="M16 9l-5 5-3-3" stroke="#1d4ed8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "", email: "", telefono: "", empresa: "", mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [turnstileToken, setTurnstileToken] = useState(null);
  const turnstileRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && !turnstileToken) {
      setSubmitStatus("security-error");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, turnstileToken }),
      });
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ nombre: "", email: "", telefono: "", empresa: "", mensaje: "" });
        setTurnstileToken(null);
        if (turnstileRef.current) turnstileRef.current.reset();
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus("error");
        if (turnstileRef.current) turnstileRef.current.reset();
        setTurnstileToken(null);
      }
    } catch {
      setSubmitStatus("error");
      if (turnstileRef.current) turnstileRef.current.reset();
      setTurnstileToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section
      id="contacto"
      className="w-full py-24 bg-white"
      aria-label="Contacto"
    >
      <div className="max-w-[1180px] mx-auto px-6">
        {/* Header */}
        <Reveal className="text-center mb-[52px]">
          <span className="inline-block font-bold text-[0.78rem] tracking-[0.12em] uppercase mb-[18px] px-4 py-[7px] rounded-full text-[#1d4ed8] bg-[#eef4ff]">
            Conversemos
          </span>
          <h2
            className="font-extrabold tracking-[-0.02em] leading-[1.15] text-[#0f172a]"
            style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.75rem)" }}
          >
            Contáctanos
          </h2>
          <p className="mt-[14px] mx-auto text-[#475569] text-[1.08rem] max-w-[640px]">
            ¿Tienes un proyecto en mente? Conversemos sobre cómo podemos ayudarte a
            alcanzar tus objetivos.
          </p>
        </Reveal>

        {/* Grid info + form — 2 cols → 1 @980px */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-[50px]">
          {/* Columna info */}
          <Reveal>
            <h3 className="font-extrabold mb-[22px] text-[1.3rem] text-[#0f172a]">
              Información de Contacto
            </h3>

            <div className="grid gap-[14px]">
              {INFO_ITEMS.map((item) => {
                const Inner = (
                  <>
                    <span className="w-[46px] h-[46px] rounded-[12px] grid place-items-center flex-shrink-0 bg-[#1d4ed8] text-white">
                      {item.icon}
                    </span>
                    <div>
                      <b className="block uppercase tracking-[0.08em] text-[0.78rem] text-[#64748b] mb-[3px]">
                        {item.label}
                      </b>
                      <span className="font-semibold text-[#0f172a]">
                        {item.value}
                      </span>
                    </div>
                  </>
                );
                const baseClass = "flex gap-4 items-start bg-[#f8fafc] border border-[#e2e8f0] rounded-[14px] px-5 py-[18px] transition-all duration-200";

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.target}
                    rel={item.target ? "noopener noreferrer" : undefined}
                    className={`${baseClass} hover:border-[#3b82f6] hover:translate-x-1 no-underline text-inherit`}
                  >
                    {Inner}
                  </a>
                ) : (
                  <div key={item.label} className={baseClass}>
                    {Inner}
                  </div>
                );
              })}
            </div>

            {/* Por qué elegirnos */}
            <div className="mt-6 rounded-[16px] p-6 bg-[#eef4ff] border border-[#dbe7ff]">
              <h4 className="font-extrabold mb-[14px] text-[1.05rem] text-[#102a56]">
                ¿Por qué elegirnos?
              </h4>
              <ul className="grid gap-[10px] list-none">
                {WHY_ITEMS.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-[10px] font-medium text-[0.93rem] text-[#475569]"
                  >
                    {CHECK_CIRCLE}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Formulario */}
          <Reveal delay={80}>
            <div className="rounded-[24px] p-[38px] bg-white border border-[#e2e8f0] shadow-[0_10px_30px_rgba(15,23,42,0.1)]">
              <h3 className="font-extrabold mb-6 text-[1.4rem] text-[#0f172a]">
                Envíanos un Mensaje
              </h3>

              <form onSubmit={handleSubmit}>
                {/* Fila 1: Nombre + Empresa */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-[18px]">
                  <div>
                    <label htmlFor="nombre" className="block text-[0.85rem] font-semibold mb-[7px] text-[#0f172a]">
                      Nombre completo <span aria-hidden="true" className="text-[#f3781f]">*</span>
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="contacto-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="block text-[0.85rem] font-semibold mb-[7px] text-[#0f172a]">Empresa</label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      placeholder="Nombre de empresa"
                      className="contacto-input"
                    />
                  </div>
                </div>

                {/* Fila 2: Email + Teléfono */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-[18px]">
                  <div>
                    <label htmlFor="email" className="block text-[0.85rem] font-semibold mb-[7px] text-[#0f172a]">
                      Email <span aria-hidden="true" className="text-[#f3781f]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="contacto-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-[0.85rem] font-semibold mb-[7px] text-[#0f172a]">
                      Teléfono <span aria-hidden="true" className="text-[#f3781f]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+56 9 1234 5678"
                      className="contacto-input"
                    />
                  </div>
                </div>

                {/* Mensaje */}
                <div className="mb-[18px]">
                  <label htmlFor="mensaje" className="block text-[0.85rem] font-semibold mb-[7px] text-[#0f172a]">
                    Mensaje <span aria-hidden="true" className="text-[#f3781f]">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                    className="contacto-input resize-vertical min-h-[120px]"
                  />
                </div>

                {/* Status messages */}
                {submitStatus === "success" && (
                  <div role="status" aria-live="polite" className="mb-4 p-4 rounded-[11px] flex items-start gap-3 bg-[#f0fdf4] border border-[#16a34a]">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#16a34a]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div>
                      <p className="font-semibold text-sm text-[#15803d]">¡Mensaje enviado exitosamente!</p>
                      <p className="text-xs mt-0.5 text-[#16a34a]">Nos pondremos en contacto contigo pronto.</p>
                    </div>
                  </div>
                )}
                {(submitStatus === "error" || submitStatus === "security-error") && (
                  <div role="alert" aria-live="assertive" className="mb-4 p-4 rounded-[11px] flex items-start gap-3 bg-[#fef2f2] border border-[#dc2626]">
                    <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#dc2626]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <div>
                      <p className="font-semibold text-sm text-[#b91c1c]">
                        {submitStatus === "security-error" ? "Error de verificación de seguridad" : "Error al enviar el mensaje"}
                      </p>
                      <p className="text-xs mt-0.5 text-[#dc2626]">
                        {submitStatus === "security-error"
                          ? "Completa la verificación de seguridad antes de enviar."
                          : "Por favor, intenta nuevamente o contáctanos directamente."}
                      </p>
                    </div>
                  </div>
                )}

                {/* Turnstile */}
                {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
                  <div className="flex justify-center mb-4">
                    <Turnstile
                      ref={turnstileRef}
                      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                      onSuccess={(token) => setTurnstileToken(token)}
                      onError={() => setTurnstileToken(null)}
                      onExpire={() => setTurnstileToken(null)}
                      options={{ theme: "light", size: "normal" }}
                    />
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 font-bold text-[0.98rem] px-7 py-[14px] rounded-full transition-all duration-200 mt-[6px] text-white border-2 border-transparent ${
                    isSubmitting
                      ? "bg-[#94a3b8] cursor-not-allowed"
                      : "bg-[#1d4ed8] cursor-pointer hover:bg-[#102a56] hover:shadow-[0_12px_28px_rgba(29,78,216,0.35)] hover:-translate-y-0.5"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    "Enviar Mensaje →"
                  )}
                </button>

                <p className="text-center mt-[14px] text-[0.82rem] text-[#64748b]">
                  Te responderemos a la brevedad. También puedes escribirnos directamente por WhatsApp.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
