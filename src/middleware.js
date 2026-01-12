import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get("host") || "";

  // PRIORIDAD 1: Redirigir no-www a www
  if (hostname === "vpconstrucciones.cl") {
    const url = new URL(request.url);
    url.hostname = "www.vpconstrucciones.cl";
    return NextResponse.redirect(url, 301);
  }

  // PRIORIDAD 2: Redirigir URLs con trailing slash (excepto la raíz)
  if (pathname !== "/" && pathname.endsWith("/")) {
    const url = new URL(request.url);
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt
     * - sitemap.xml
     */
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
