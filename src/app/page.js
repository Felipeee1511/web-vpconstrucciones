import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Nosotros from "@/components/Nosotros";
import Servicios from "@/components/Servicios";
import Calidad from "@/components/Calidad";
import Seguridad from "@/components/Seguridad";
import Clientes from "@/components/Clientes";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// Datos estructurados JSON-LD para SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VP Construcciones SpA",
  description:
    "Especialistas en limpieza industrial, mantenimiento preventivo y correctivo, gestión de residuos, tratamiento de aguas y servicios generales para la industria.",
  url: "https://www.vpconstrucciones.cl",
  logo: "https://www.vpconstrucciones.cl/assets/logovp.png",
  image: "https://www.vpconstrucciones.cl/assets/logovp.png",
  telephone: "+56-9-XXXX-XXXX", // Agregar tu teléfono real
  email: "contacto@vpconstrucciones.cl",
  address: {
    "@type": "PostalAddress",
    addressCountry: "CL",
    addressLocality: "Chile", // Agregar ciudad específica
  },
  sameAs: [
    // Agregar tus redes sociales
    // "https://www.facebook.com/vpconstrucciones",
    // "https://www.linkedin.com/company/vpconstrucciones",
    // "https://www.instagram.com/vpconstrucciones"
  ],
  areaServed: {
    "@type": "Country",
    name: "Chile",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios Industriales",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mantenimiento Industrial",
          description:
            "Mantenimiento preventivo y correctivo, gestión de instalaciones, servicios para centrales térmicas",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Limpieza Industrial",
          description:
            "Limpieza de calderas, instalaciones industriales y manejo de residuos industriales",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gestión de Residuos",
          description:
            "Manejo de residuos peligrosos (RESPEL), gestión de residuos industriales y disposición controlada",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tratamiento de Aguas",
          description:
            "Tratamiento de aguas servidas, gestión de agua potable y análisis de calidad",
        },
      },
    ],
  },
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://www.vpconstrucciones.cl",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Servicios",
      item: "https://www.vpconstrucciones.cl/#servicios",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Preguntas Frecuentes",
      item: "https://vpconstrucciones.cl/faq",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Contacto",
      item: "https://vpconstrucciones.cl/#contacto",
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* Datos estructurados para motores de búsqueda */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      <div className="w-full min-h-screen overflow-x-hidden">
        <Navbar />
        <Hero />
        <Nosotros />
        <Servicios />
        <Calidad />
        <Seguridad />
        <Clientes />
        <Contacto />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
