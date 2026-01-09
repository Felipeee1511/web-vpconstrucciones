import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Metadata optimizada para SEO
export const metadata = {
  metadataBase: new URL("https://vpconstrucciones.cl"), // Cambia por tu dominio real
  title: {
    default:
      "VP Construcciones | Limpieza Industrial y Mantenimiento Especializado",
    template: "%s | VP Construcciones",
  },
  description:
    "VP Construcciones SpA - Especialistas en limpieza industrial, mantenimiento preventivo y correctivo, gestión de residuos, tratamiento de aguas y servicios generales para la industria en Chile.",
  keywords: [
    "limpieza industrial",
    "mantenimiento industrial",
    "gestión de residuos",
    "tratamiento de aguas",
    "mantenimiento preventivo",
    "limpieza de calderas",
    "jardinería industrial",
    "RESPEL",
    "servicios industriales Chile",
    "VP Construcciones",
    "centrales térmicas",
    "mantenimiento correctivo",
  ],
  authors: [{ name: "VP Construcciones SpA" }],
  creator: "VP Construcciones SpA",
  publisher: "VP Construcciones SpA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://vpconstrucciones.cl",
    title:
      "VP Construcciones | Limpieza Industrial y Mantenimiento Especializado",
    description:
      "Especialistas en limpieza industrial, mantenimiento preventivo y correctivo, gestión de residuos, tratamiento de aguas y servicios generales para la industria.",
    siteName: "VP Construcciones",
    images: [
      {
        url: "/assets/logovp.png",
        width: 1200,
        height: 630,
        alt: "VP Construcciones - Servicios Industriales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VP Construcciones | Limpieza Industrial y Mantenimiento",
    description:
      "Especialistas en servicios industriales: limpieza, mantenimiento, gestión de residuos y más.",
    images: ["/assets/logovp.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "tu-codigo-google-search-console",
    // yandex: "tu-codigo-yandex",
    // bing: "tu-codigo-bing",
  },
  alternates: {
    canonical: "https://vpconstrucciones.cl",
  },
  category: "Servicios Industriales",
};

export default function RootLayout({ children }) {
  // Google Tag Manager ID - Reemplaza 'GTM-XXXXXXX' con tu ID real
  const GTM_ID = "GTM-MX3H7W8B";

  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/assets/logovp.png" />
        <meta name="theme-color" content="#2563eb" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MX3H7W8B');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MX3H7W8B"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
      </body>
    </html>
  );
}
