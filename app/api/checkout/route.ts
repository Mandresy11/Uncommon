import { NextResponse } from "next/server";
import { creerCheckoutShopify, type LigneCheckout } from "@/lib/shopify";

function lireLignes(value: unknown): LigneCheckout[] | null {
  if (!value || typeof value !== "object") return null;
  const articles = (value as { articles?: unknown }).articles;
  if (!Array.isArray(articles) || articles.length === 0 || articles.length > 20) return null;

  const lignes: LigneCheckout[] = [];
  for (const article of articles) {
    if (!article || typeof article !== "object") return null;
    const { variantKey, quantite } = article as { variantKey?: unknown; quantite?: unknown };
    if (typeof variantKey !== "string" || variantKey.length > 100 || typeof quantite !== "number" || !Number.isInteger(quantite) || quantite < 1 || quantite > 10) {
      return null;
    }
    lignes.push({ variantKey, quantite });
  }
  return lignes;
}

export async function POST(request: Request) {
  let corps: unknown;
  try {
    corps = await request.json();
  } catch {
    return NextResponse.json({ erreur: "Requête invalide." }, { status: 400 });
  }

  const lignes = lireLignes(corps);
  if (!lignes) return NextResponse.json({ erreur: "Le panier est invalide." }, { status: 400 });

  try {
    const checkoutUrl = await creerCheckoutShopify(lignes);
    return NextResponse.json({ checkoutUrl });
  } catch (erreur) {
    const code = erreur instanceof Error ? erreur.message : "";
    if (code === "CONFIGURATION_SHOPIFY_MANQUANTE") {
      return NextResponse.json(
        { erreur: "Le paiement en ligne est en cours de configuration. Écris-nous pour réserver ta sélection." },
        { status: 503 }
      );
    }
    if (code === "VARIANTE_INVALIDE" || code === "VARIANTE_NON_RELIEE") {
      return NextResponse.json(
        { erreur: "Une pièce de ton panier n’est plus disponible. Retire-la puis réessaie." },
        { status: 422 }
      );
    }
    return NextResponse.json(
      { erreur: "Le stock ou le paiement n’a pas pu être vérifié. Réessaie dans quelques instants." },
      { status: 502 }
    );
  }
}
