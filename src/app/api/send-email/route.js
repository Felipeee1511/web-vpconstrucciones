import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request) {
  try {
    const body = await request.json();
    const { nombre, email, telefono, empresa, mensaje, turnstileToken } = body;

    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 });
    }

    if (!resend) {
      return NextResponse.json(
        { error: "Servicio de correo no configurado" },
        { status: 503 }
      );
    }

    // Verificar Turnstile token si está configurado
    if (process.env.TURNSTILE_SECRET_KEY && turnstileToken) {
      const verifyResponse = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            secret: process.env.TURNSTILE_SECRET_KEY,
            response: turnstileToken,
          }),
        }
      );
      const verifyData = await verifyResponse.json();
      if (!verifyData.success) {
        return NextResponse.json(
          { error: "Verificación de seguridad fallida. Por favor, intenta nuevamente." },
          { status: 400 }
        );
      }
    }

    const toEmails = process.env.RESEND_TO_EMAIL
      ? process.env.RESEND_TO_EMAIL.split(",")
          .map((e) => e.trim())
          .filter((e) => e.length > 0)
      : [email];

    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: toEmails,
      replyTo: email,
      subject: `Nuevo mensaje de contacto de ${nombre}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #EA580C 0%, #C2410C 100%); color: white; padding: 30px; border-radius: 4px 4px 0 0; text-align: center; }
              .header h1 { margin: 0; font-size: 22px; }
              .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
              .field { margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #f3f4f6; }
              .field:last-child { border-bottom: none; }
              .label { font-weight: 600; color: #EA580C; margin-bottom: 5px; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; }
              .value { color: #374151; font-size: 16px; }
              .footer { background: #f9fafb; padding: 20px; border-radius: 0 0 4px 4px; text-align: center; color: #6b7280; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>Nuevo Mensaje de Contacto</h1>
              <p style="margin: 8px 0 0 0; opacity: 0.9; font-size: 14px;">VP Construcciones</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Nombre</div>
                <div class="value">${nombre}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #EA580C; text-decoration: none;">${email}</a></div>
              </div>
              ${telefono ? `<div class="field"><div class="label">Teléfono</div><div class="value"><a href="tel:${telefono}" style="color: #EA580C; text-decoration: none;">${telefono}</a></div></div>` : ""}
              ${empresa ? `<div class="field"><div class="label">Empresa</div><div class="value">${empresa}</div></div>` : ""}
              <div class="field">
                <div class="label">Mensaje</div>
                <div class="value" style="white-space: pre-wrap;">${mensaje}</div>
              </div>
            </div>
            <div class="footer">
              <p style="margin: 0;">Formulario de contacto — VP Construcciones SpA</p>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ message: "Correo enviado exitosamente", data }, { status: 200 });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json({ error: "Error al enviar el correo", details: error.message }, { status: 500 });
  }
}
