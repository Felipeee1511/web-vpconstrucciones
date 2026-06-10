"use client";

import { useState } from "react";
import Link from "next/link";

const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "¿Qué servicios ofrece VP Construcciones?", acceptedAnswer: { "@type": "Answer", text: "VP Construcciones ofrece servicios de mantenimiento industrial, limpieza industrial, gestión de residuos (RESPEL), tratamiento de aguas, jardinería y servicios generales para la industria." } },
    { "@type": "Question", name: "¿En qué zonas de Chile operan?", acceptedAnswer: { "@type": "Answer", text: "VP Construcciones opera en todo Chile, con especialización en servicios para centrales térmicas e instalaciones industriales." } },
    { "@type": "Question", name: "¿Cuentan con certificaciones de calidad?", acceptedAnswer: { "@type": "Answer", text: "Sí, VP Construcciones cuenta con certificaciones ISO 9001, 14001 y 45001." } },
    { "@type": "Question", name: "¿Qué es RESPEL y cómo lo manejan?", acceptedAnswer: { "@type": "Answer", text: "RESPEL son Residuos Peligrosos. VP Construcciones cuenta con personal capacitado y procedimientos certificados para el manejo, transporte y disposición controlada de residuos peligrosos, cumpliendo con toda la normativa vigente." } },
    { "@type": "Question", name: "¿Realizan mantenimiento preventivo?", acceptedAnswer: { "@type": "Answer", text: "Sí, ofrecemos servicios de mantenimiento preventivo y correctivo para instalaciones industriales, equipos y centrales térmicas, garantizando la operación continua de sus instalaciones." } },
    { "@type": "Question", name: "¿Cómo puedo solicitar una cotización?", acceptedAnswer: { "@type": "Answer", text: "Puedes contactarnos a través del formulario en nuestra página web, por teléfono o correo electrónico. Te responderemos en un plazo máximo de 24 horas." } },
  ],
};

const faqs = [
  { question: "¿Qué servicios ofrece VP Construcciones?", answer: "VP Construcciones ofrece servicios de mantenimiento industrial, limpieza industrial, gestión de residuos (RESPEL), tratamiento de aguas, jardinería y servicios generales para la industria." },
  { question: "¿En qué zonas de Chile operan?", answer: "VP Construcciones opera en todo Chile, con especialización en servicios para centrales térmicas e instalaciones industriales." },
  { question: "¿Cuentan con certificaciones de calidad?", answer: "Sí, VP Construcciones cuenta con certificaciones ISO 9001, 14001 y 45001." },
  { question: "¿Qué es RESPEL y cómo lo manejan?", answer: "RESPEL son Residuos Peligrosos. VP Construcciones cuenta con personal capacitado y procedimientos certificados para el manejo, transporte y disposición controlada de residuos peligrosos, cumpliendo con toda la normativa vigente." },
  { question: "¿Realizan mantenimiento preventivo?", answer: "Sí, ofrecemos servicios de mantenimiento preventivo y correctivo para instalaciones industriales, equipos y centrales térmicas, garantizando la operación continua de sus instalaciones." },
  { question: "¿Cómo puedo solicitar una cotización?", answer: "Puedes contactarnos a través del formulario en nuestra página web, por teléfono o correo electrónico. Te responderemos en un plazo máximo de 24 horas." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }} />

      <section
        id="faq"
        className="w-full py-24 bg-[#f8fafc]"
        aria-labelledby="faq-heading"
      >
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-12 text-center">
            <span className="inline-block font-bold text-[0.78rem] tracking-[0.12em] uppercase mb-[18px] px-4 py-[7px] rounded-full text-[#1d4ed8] bg-[#eef4ff]">
              Preguntas Frecuentes
            </span>
            <h1
              id="faq-heading"
              className="font-extrabold tracking-[-0.02em] leading-[1.15] mb-4 text-[#0f172a]"
              style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.75rem)" }}
            >
              ¿Tienes dudas?
            </h1>
            <p className="text-[#475569] text-[1.08rem]">
              Encuentra respuestas a las preguntas más comunes sobre nuestros servicios.
            </p>
          </header>

          <div className="overflow-hidden rounded-[16px] border border-[#e2e8f0]">
            {faqs.map((faq, index) => (
              <article
                key={index}
                className={`bg-white ${index < faqs.length - 1 ? "border-b border-[#e2e8f0]" : ""}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`w-full px-6 py-4 min-h-[52px] text-left flex justify-between items-center gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1d4ed8] transition-colors duration-150 ${
                    openIndex === index ? "bg-[#f8fafc]" : "bg-transparent hover:bg-[#f8fafc]"
                  }`}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="font-bold shrink-0 select-none text-[0.78rem] text-[#1d4ed8]"
                      style={{ fontVariantNumeric: "tabular-nums" }}
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-semibold leading-snug text-[#0f172a]">
                      {faq.question}
                    </span>
                  </div>
                  <svg
                    className={`shrink-0 transition-transform duration-200 text-[#1d4ed8] ${openIndex === index ? "rotate-180" : ""}`}
                    width="16" height="16"
                    fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`overflow-hidden transition-[max-height,opacity] duration-200 ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div
                    className="px-6 pb-5 pt-2 text-sm leading-relaxed text-[#475569] border-t border-[#e2e8f0]"
                    style={{ paddingLeft: "3.75rem" }}
                  >
                    {faq.answer}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm mb-4 text-[#475569]">¿No encontraste lo que buscabas?</p>
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3 min-h-[44px] rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1d4ed8] bg-[#1d4ed8] text-white hover:bg-[#102a56] hover:shadow-[0_12px_28px_rgba(29,78,216,0.35)]"
            >
              Contáctanos
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
