"use client";

import { useState } from "react";

// Datos estructurados para FAQ (Schema.org)
const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué servicios ofrece VP Construcciones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VP Construcciones ofrece servicios de mantenimiento industrial, limpieza industrial, gestión de residuos (RESPEL), tratamiento de aguas, jardinería y servicios generales para la industria.",
      },
    },
    {
      "@type": "Question",
      name: "¿En qué zonas de Chile operan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VP Construcciones opera en todo Chile, con especialización en servicios para centrales térmicas e instalaciones industriales.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuentan con certificaciones de calidad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, VP Construcciones cuenta con certificaciones de calidad y cumplimiento de normativas ambientales y de seguridad industrial.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es RESPEL y cómo lo manejan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "RESPEL son Residuos Peligrosos. VP Construcciones cuenta con personal capacitado y procedimientos certificados para el manejo, transporte y disposición controlada de residuos peligrosos, cumpliendo con toda la normativa vigente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Realizan mantenimiento preventivo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, ofrecemos servicios de mantenimiento preventivo y correctivo para instalaciones industriales, equipos y centrales térmicas, garantizando la operación continua de sus instalaciones.",
      },
    },
  ],
};

const faqs = [
  {
    question: "¿Qué servicios ofrece VP Construcciones?",
    answer:
      "VP Construcciones ofrece servicios de mantenimiento industrial, limpieza industrial, gestión de residuos (RESPEL), tratamiento de aguas, jardinería y servicios generales para la industria.",
  },
  {
    question: "¿En qué zonas de Chile operan?",
    answer:
      "VP Construcciones opera en todo Chile, con especialización en servicios para centrales térmicas e instalaciones industriales.",
  },
  {
    question: "¿Cuentan con certificaciones de calidad?",
    answer:
      "Sí, VP Construcciones cuenta con certificaciones de calidad y cumplimiento de normativas ambientales y de seguridad industrial.",
  },
  {
    question: "¿Qué es RESPEL y cómo lo manejan?",
    answer:
      "RESPEL son Residuos Peligrosos. VP Construcciones cuenta con personal capacitado y procedimientos certificados para el manejo, transporte y disposición controlada de residuos peligrosos, cumpliendo con toda la normativa vigente.",
  },
  {
    question: "¿Realizan mantenimiento preventivo?",
    answer:
      "Sí, ofrecemos servicios de mantenimiento preventivo y correctivo para instalaciones industriales, equipos y centrales térmicas, garantizando la operación continua de sus instalaciones.",
  },
  {
    question: "¿Cómo puedo solicitar una cotización?",
    answer:
      "Puedes contactarnos a través del formulario en nuestra página web, por teléfono o correo electrónico. Te responderemos en un plazo máximo de 24 horas.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Schema markup para FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />

      <section
        id="faq"
        className="w-full min-h-screen bg-linear-to-br from-gray-50 to-blue-50 flex items-center justify-center py-20 md:py-24"
        aria-labelledby="faq-heading"
      >
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-16">
            <span
              className="inline-block bg-blue-600 text-white rounded-full text-sm font-semibold mb-4"
              style={{ padding: "0.75rem 1.5rem" }}
            >
              Preguntas Frecuentes
            </span>
            <h2
              id="faq-heading"
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              ¿Tienes dudas?
            </h2>
            <p className="text-xl text-gray-600">
              Encuentra respuestas a las preguntas más comunes
            </p>
          </header>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-blue-600 transition-transform duration-300 shrink-0 ${
                      openIndex === index ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA adicional */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              ¿No encontraste lo que buscabas?
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contacto")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contáctanos
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
