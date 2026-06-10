import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-code",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata = {
  metadataBase: new URL("https://www.vpconstrucciones.cl"),
  title: {
    default: "VP Construcciones | Limpieza Industrial y Mantenimiento Especializado",
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
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://www.vpconstrucciones.cl",
    title: "VP Construcciones | Limpieza Industrial y Mantenimiento Especializado",
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
  alternates: {
    canonical: "https://www.vpconstrucciones.cl",
  },
  category: "Servicios Industriales",
};

export default function RootLayout({ children }) {
  const GTM_ID = "GTM-MX3H7W8B";

  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/assets/logovp.png" />
        <meta name="theme-color" content="#1d4ed8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

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
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
