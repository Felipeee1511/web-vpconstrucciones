/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimizaciones para producción
  reactStrictMode: true,

  // Compresión de imágenes
  images: {
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Headers de seguridad y SEO
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // Redirecciones específicas para evitar problemas de indexación
  async redirects() {
    return [
      // Redirigir no-www a www (todas las rutas)
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "vpconstrucciones.cl",
          },
        ],
        destination: "https://www.vpconstrucciones.cl/:path*",
        permanent: true,
      },
    ];
  },

  // Configuración de trailing slash
  trailingSlash: false,

  // Generar sitemap y robots en build
  output: "standalone",
};

export default nextConfig;
