import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let corps: unknown;
  try {
    corps = await request.json();
  } catch {
    return NextResponse.json({ erreur: "Requête invalide." }, { status: 400 });
  }

  const emailBrut = (corps as { email?: unknown } | null)?.email;
  const email = typeof emailBrut === "string" ? emailBrut.trim().toLowerCase() : "";
  if (!EMAIL.test(email) || email.length > 254) {
    return NextResponse.json({ erreur: "Saisissez une adresse e-mail valide." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { erreur: "L’inscription n’est pas encore configurée. Réessayez prochainement." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const segmentId = process.env.RESEND_SEGMENT_ID?.trim();
  const { error } = await resend.contacts.create({
    email,
    unsubscribed: false,
    ...(segmentId ? { segments: [{ id: segmentId }] } : {}),
  });

  if (error) {
    const dejaInscrit = /already|exists|duplicate/i.test(error.message ?? "");
    if (!dejaInscrit) {
      return NextResponse.json({ erreur: "L’inscription a échoué. Réessayez dans quelques instants." }, { status: 502 });
    }
  }

  const code = process.env.NEWSLETTER_WELCOME_CODE?.trim();
  const from = process.env.RESEND_FROM_EMAIL?.trim();
  let codeEnvoye = false;

  if (code && from) {
    const bienvenue = await resend.emails.send({
      from,
      to: email,
      subject: "Bienvenue dans la tribu · Votre avantage de bienvenue",
      text: `Bienvenue dans la tribu Uncommon People Tribe. Votre code de bienvenue est ${code}. Il sera valable selon les conditions indiquées lors de l’ouverture des commandes.`,
    });
    codeEnvoye = !bienvenue.error;
  }

  return NextResponse.json({ ok: true, codeEnvoye });
}
