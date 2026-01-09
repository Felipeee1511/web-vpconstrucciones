import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { nombre, email, telefono, empresa, mensaje, turnstileToken } = body;

    // Validación básica
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    // Verificar Turnstile token si está configurado
    if (process.env.TURNSTILE_SECRET_KEY && turnstileToken) {
      const verifyResponse = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            secret: process.env.TURNSTILE_SECRET_KEY,
            response: turnstileToken,
          }),
        }
      );

      const verifyData = await verifyResponse.json();

      if (!verifyData.success) {
        return NextResponse.json(
          {
            error:
              "Verificación de seguridad fallida. Por favor, intenta nuevamente.",
          },
          { status: 400 }
        );
      }
    }

    // Convertir la cadena de correos en un array
    const toEmails = process.env.RESEND_TO_EMAIL
      ? process.env.RESEND_TO_EMAIL.split(",")
          .map((email) => email.trim())
          .filter((email) => email.length > 0)
      : [email];

    // Enviar el correo
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: toEmails,
      subject: `Nuevo mensaje de contacto de ${nombre}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
              }
              .content {
                background: #ffffff;
                padding: 30px;
                border: 1px solid #e5e7eb;
                border-top: none;
              }
              .field {
                margin-bottom: 20px;
                padding-bottom: 20px;
                border-bottom: 1px solid #f3f4f6;
              }
              .field:last-child {
                border-bottom: none;
              }
              .label {
                font-weight: 600;
                color: #2563eb;
                margin-bottom: 5px;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
              }
              .value {
                color: #374151;
                font-size: 16px;
              }
              .footer {
                background: #f9fafb;
                padding: 20px;
                border-radius: 0 0 10px 10px;
                text-align: center;
                color: #6b7280;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>📧 Nuevo Mensaje de Contacto</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">VP Construcciones</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Nombre</div>
                <div class="value">${nombre}</div>
              </div>
              <div class="field">
                <div class="label">📧 Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></div>
              </div>
              ${
                telefono
                  ? `
              <div class="field">
                <div class="label">📱 Teléfono</div>
                <div class="value"><a href="tel:${telefono}" style="color: #2563eb; text-decoration: none;">${telefono}</a></div>
              </div>
              `
                  : ""
              }
              ${
                empresa
                  ? `
              <div class="field">
                <div class="label">🏢 Empresa</div>
                <div class="value">${empresa}</div>
              </div>
              `
                  : ""
              }
              <div class="field">
                <div class="label">💬 Mensaje</div>
                <div class="value" style="white-space: pre-wrap;">${mensaje}</div>
              </div>
            </div>
            <div class="footer">
              <p style="margin: 0;">Este mensaje fue enviado desde el formulario de contacto de VP Construcciones</p>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { message: "Correo enviado exitosamente", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json(
      { error: "Error al enviar el correo", details: error.message },
      { status: 500 }
    );
  }
}
