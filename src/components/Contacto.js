"use client";

import { useState, useRef } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { CheckIcon } from "./icons";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', 'security-error', null
  const [turnstileToken, setTurnstileToken] = useState(null);
  const turnstileRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Verificar si hay token de Turnstile cuando está habilitado
    if (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && !turnstileToken) {
      setSubmitStatus("security-error");
      setIsSubmitting(false);
      console.error("Por favor, completa la verificación de seguridad");
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          empresa: "",
          mensaje: "",
        });
        setTurnstileToken(null);
        // Resetear Turnstile
        if (turnstileRef.current) {
          turnstileRef.current.reset();
        }
        // Limpiar el mensaje de éxito después de 5 segundos
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus("error");
        console.error("Error:", data.error);
        // Resetear Turnstile en caso de error
        if (turnstileRef.current) {
          turnstileRef.current.reset();
        }
        setTurnstileToken(null);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error al enviar el formulario:", error);
      // Resetear Turnstile en caso de error
      if (turnstileRef.current) {
        turnstileRef.current.reset();
      }
      setTurnstileToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contacto"
      className="w-full min-h-screen bg-linear-to-br from-blue-50 via-white to-gray-50 flex items-center justify-center py-20 md:py-24"
    >
      {/* Container principal */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span
            style={{ padding: "0.75rem 1.5rem" }}
            className="inline-block bg-blue-600 text-white rounded-full text-sm font-semibold mb-4"
          >
            Conversemos
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Contáctanos
          </h2>
          <p
            style={{
              textAlign: "center",
              maxWidth: "48rem",
              margin: "0 auto",
              fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
              lineHeight: "1.5",
            }}
            className="text-gray-600"
          >
            ¿Tienes un proyecto en mente? Conversemos sobre cómo podemos
            ayudarte a alcanzar tus objetivos.
          </p>
        </div>

        {/* Grid de contenido */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Información de Contacto */}
          <div className="flex flex-col space-y-6">
            {/* Tarjeta de información */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex-1 flex flex-col">
              <div className="grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  Información de Contacto
                </h3>
                <div
                  style={{ marginTop: "6rem", gap: "1.5rem" }}
                  className="flex flex-col"
                >
                  <div className="flex items-start p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300 group border border-gray-100">
                    <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors duration-300">
                      <svg
                        className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300"
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
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Ubicación
                      </h4>
                      <p className="text-gray-600">Coronel, Chile</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300 group border border-gray-100">
                    <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors duration-300">
                      <svg
                        className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Teléfono
                      </h4>
                      <p className="text-gray-600">+56 9 7935 7965</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300 group border border-gray-100">
                    <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors duration-300">
                      <svg
                        className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Email
                      </h4>
                      <p className="text-gray-600">
                        contacto@vpconstrucciones.cl
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300 group border border-gray-100">
                    <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors duration-300">
                      <svg
                        className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Horario
                      </h4>
                      <p className="text-gray-600">
                        Lunes a Viernes: 8:00 - 18:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tarjeta de beneficios integrada */}
              <div className="mt-auto bg-linear-to-br from-blue-600 to-blue-700 p-8 rounded-xl text-white">
                <h4 className="text-xl font-bold mb-6">¿Por qué elegirnos?</h4>
                <ul className="space-y-5">
                  <li className="flex items-start group">
                    <span className="shrink-0 w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center mr-3 mt-0.5 group-hover:bg-white/40 transition-colors duration-300">
                      <CheckIcon />
                    </span>
                    <span>Experiencia comprobada en el sector</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="shrink-0 w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center mr-3 mt-0.5 group-hover:bg-white/40 transition-colors duration-300">
                      <CheckIcon />
                    </span>
                    <span>Compromiso con calidad y seguridad</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="shrink-0 w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center mr-3 mt-0.5 group-hover:bg-white/40 transition-colors duration-300">
                      <CheckIcon />
                    </span>
                    <span>Equipo altamente calificado</span>
                  </li>
                  <li className="flex items-start group">
                    <span className="shrink-0 w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center mr-3 mt-0.5 group-hover:bg-white/40 transition-colors duration-300">
                      <CheckIcon />
                    </span>
                    <span>Cumplimiento de plazos garantizado</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              </div>
              Envíanos un Mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none hover:border-gray-300"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none hover:border-gray-300"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="telefono"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  required
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none hover:border-gray-300"
                  placeholder="+56 9 1234 5678"
                />
              </div>
              <div>
                <label
                  htmlFor="empresa"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Empresa
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none hover:border-gray-300"
                  placeholder="Nombre de tu empresa (opcional)"
                />
              </div>
              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows="5"
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 outline-none hover:border-gray-300 resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                ></textarea>
              </div>

              {/* Mensaje de éxito */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-green-600 shrink-0 mt-0.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-green-900">
                      ¡Mensaje enviado exitosamente!
                    </h4>
                    <p className="text-green-700 text-sm mt-1">
                      Nos pondremos en contacto contigo pronto.
                    </p>
                  </div>
                </div>
              )}

              {/* Mensaje de error de verificación de seguridad */}
              {submitStatus === "security-error" && (
                <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-red-600 shrink-0 mt-0.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-red-900">
                      Error al enviar el mensaje
                    </h4>
                    <p className="text-red-700 text-sm mt-1">
                      Por favor, completa la verificación de seguridad antes de
                      enviar el formulario.
                    </p>
                  </div>
                </div>
              )}

              {/* Mensaje de error */}
              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-red-600 shrink-0 mt-0.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-red-900">
                      Error al enviar el mensaje
                    </h4>
                    <p className="text-red-700 text-sm mt-1">
                      Por favor, intenta nuevamente o contáctanos directamente.
                    </p>
                  </div>
                </div>
              )}

              {/* Cloudflare Turnstile */}
              {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
                <div className="flex justify-center">
                  <Turnstile
                    ref={turnstileRef}
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                    onSuccess={(token) => setTurnstileToken(token)}
                    onError={() => setTurnstileToken(null)}
                    onExpire={() => setTurnstileToken(null)}
                    options={{
                      theme: "light",
                      size: "normal",
                    }}
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                style={{ padding: "1.5rem 2rem" }}
                className={`w-full font-semibold rounded-xl transition-all duration-300 transform shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-400 flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] hover:shadow-xl"
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensaje
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
