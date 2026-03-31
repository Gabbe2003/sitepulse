import { NextRequest, NextResponse } from "next/server";

async function sendEmail(payload: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  const { name, email, phone, subject, message } = payload;

  const res = await fetch(process.env.REACHELY_API_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.REACHELY_API_KEY!,
    },
    body: JSON.stringify({
      transaction_type: "email",
      transaction_name: "contact_form",
      subject: `Nytt kontaktformulär: ${subject || "Inget ämne"}`,
      from: {
        name: "Sitepulse",
        email: "info@sitepulse.se",
      },
      to: {
        email: "gabriell.touma@gmail.com",
      },
      content: {
        plain: `Namn: ${name}\nE-post: ${email}\nTelefon: ${phone || "–"}\nÄmne: ${subject || "–"}\n\nMeddelande:\n${message}`,
        html: `
          <h2 style="color:#1e293b">Nytt meddelande från sitepulse.se</h2>
          <p><strong>Namn:</strong> ${name}</p>
          <p><strong>E-post:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone || "–"}</p>
          <p><strong>Ämne:</strong> ${subject || "–"}</p>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0" />
          <p><strong>Meddelande:</strong></p>
          <p style="white-space:pre-wrap">${message}</p>
        `,
      },
    }),
  });

  if (!res.ok) {
    const error = await res.text();
    console.error("Reachely response:", res.status, error);
    throw new Error(`Reachely ${res.status}: ${error}`);
  }

  return res.json();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Namn, e-post och meddelande krävs." },
        { status: 400 }
      );
    }

    await sendEmail({ name, email, phone, subject, message });

    return NextResponse.json(
      { success: true, message: "Meddelandet har skickats!" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Ett fel inträffade. Försök igen." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await sendEmail({
      name: "Test",
      email: "test@sitepulse.se",
      phone: "+46 70 000 00 00",
      subject: "webbdesign",
      message: "Detta är ett testmeddelande från Sitepulse kontaktformulär.",
    });

    return NextResponse.json({ success: true, message: "Testmail skickat!" });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Fel vid testmail.";
    console.error("Test email failed:", msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
