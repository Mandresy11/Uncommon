import { Resend } from "resend";
import { NextResponse } from "next/server";

const DESTINATAIRE = "uncommonpeopletribe@gmail.com";
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function texte(value: unknown, max: number) {
  if (typeof value !== "string") return null;
  const propre = value.trim();
  return propre.length > 0 && propre.length <= max ? propre : null;
}

export async function POST(request: Request) {
  let corps: unknown;
  try {
    corps = await request.json();
  } catch {
    return NextResponse.json({ erreur: "Requête invalide." }, { status: 400 });
  }

  const donnees = corps as Record<string, unknown>;
  const nom = texte(donnees.nom, 80);
  const prenom = texte(donnees.prenom, 80);
  const email = texte(donnees.email, 254)?.toLowerCase() ?? null;
  const message = texte(donnees.message, 5000);

  if (!nom || !prenom || !email || !EMAIL.test(email) || !message) {
    return NextResponse.json({ erreur: "Vérifie les informations saisies." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { erreur: "Envoi non configuré (RESEND_API_KEY manquante côté serveur)." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const expediteur = process.env.RESEND_FROM_EMAIL?.trim() || "Uncommon People Tribe <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from: expediteur,
    to: DESTINATAIRE,
    replyTo: email,
    subject: `Nouveau message de ${prenom} ${nom} · Formulaire de contact`,
    text: `Nom : ${nom}\nPrénom : ${prenom}\nE-mail : ${email}\n\nMessage :\n${message}`,
  });

  if (error) {
    return NextResponse.json({ erreur: "L'envoi a échoué." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
