import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { success: false, error: "Token no proporcionado" },
        { status: 400 }
      );
    }

    // Verificar el token con Cloudflare Turnstile
    const verifyResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: token,
        }),
      }
    );

    const data = await verifyResponse.json();

    if (data.success) {
      return NextResponse.json(
        { success: true, message: "Verificación exitosa" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          error: "Verificación fallida",
          details: data["error-codes"],
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error al verificar Turnstile:", error);
    return NextResponse.json(
      { success: false, error: "Error en el servidor", details: error.message },
      { status: 500 }
    );
  }
}
