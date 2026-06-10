import FAQ from "@/components/FAQ";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Preguntas Frecuentes | VP Construcciones",
  description: "Encuentra respuestas a las preguntas más comunes sobre nuestros servicios de limpieza industrial, mantenimiento, gestión de residuos y más.",
  alternates: { canonical: "https://www.vpconstrucciones.cl/faq" },
  openGraph: {
    title: "Preguntas Frecuentes | VP Construcciones",
    description: "Encuentra respuestas a las preguntas más comunes sobre nuestros servicios industriales.",
    url: "https://www.vpconstrucciones.cl/faq",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function FAQPage() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
