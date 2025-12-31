import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Nosotros from "@/components/Nosotros";
import Servicios from "@/components/Servicios";
import Calidad from "@/components/Calidad";
import Seguridad from "@/components/Seguridad";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Nosotros />
      <Servicios />
      <Calidad />
      <Seguridad />
      <Contacto />
      <Footer />
    </div>
  );
}
