import "server-only";
import { CATALOGUE, creerCleVariante } from "@/lib/products";

type CarteVariantes = Record<string, string>;

const CLES_VARIANTES_VALIDES = new Set(
  Object.values(CATALOGUE).flatMap((produit) =>
    produit.couleurs.flatMap((couleur) =>
      produit.tailles.map((taille) => creerCleVariante(produit.id, couleur.nom, taille))
    )
  )
);

export type LigneCheckout = { variantKey: string; quantite: number };

function configuration() {
  const domaine = process.env.SHOPIFY_STORE_DOMAIN?.trim().toLowerCase();
  const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN?.trim();
  const version = process.env.SHOPIFY_STOREFRONT_API_VERSION?.trim() || "2026-07";

  if (!domaine || !token || !/^[a-z0-9][a-z0-9-]*\.myshopify\.com$/.test(domaine)) return null;
  if (!/^\d{4}-(01|04|07|10)$/.test(version)) return null;
  return { domaine, token, version };
}

function lireCarteVariantes(): CarteVariantes | null {
  const source = process.env.SHOPIFY_VARIANTS_JSON;
  if (!source) return null;
  try {
    const valeur = JSON.parse(source) as unknown;
    if (!valeur || typeof valeur !== "object" || Array.isArray(valeur)) return null;
    const entrees = Object.entries(valeur as Record<string, unknown>);
    const carte: CarteVariantes = {};
    for (const [cle, id] of entrees) {
      if (!CLES_VARIANTES_VALIDES.has(cle) || typeof id !== "string" || !id.startsWith("gid://shopify/ProductVariant/")) {
        return null;
      }
      carte[cle] = id;
    }
    return carte;
  } catch {
    return null;
  }
}

async function requeteShopify<T>(query: string, variables: Record<string, unknown>): Promise<T> {
  const config = configuration();
  if (!config) throw new Error("CONFIGURATION_SHOPIFY_MANQUANTE");

  const reponse = await fetch(`https://${config.domaine}/api/${config.version}/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": config.token,
    },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });

  if (!reponse.ok) throw new Error("SHOPIFY_INDISPONIBLE");
  const resultat = (await reponse.json()) as { data?: T; errors?: { message: string }[] };
  if (!resultat.data || resultat.errors?.length) throw new Error(resultat.errors?.[0]?.message || "SHOPIFY_INDISPONIBLE");
  return resultat.data;
}

export function shopifyEstConfigure() {
  return Boolean(configuration() && lireCarteVariantes());
}

export async function creerCheckoutShopify(lignes: LigneCheckout[]) {
  const carte = lireCarteVariantes();
  if (!configuration() || !carte) throw new Error("CONFIGURATION_SHOPIFY_MANQUANTE");

  const lignesShopify = lignes.map((ligne) => {
    if (!CLES_VARIANTES_VALIDES.has(ligne.variantKey)) throw new Error("VARIANTE_INVALIDE");
    const merchandiseId = carte[ligne.variantKey];
    if (!merchandiseId) throw new Error("VARIANTE_NON_RELIEE");
    return { merchandiseId, quantity: Math.min(10, Math.max(1, Math.floor(ligne.quantite))) };
  });

  const data = await requeteShopify<{
    cartCreate: {
      cart: { checkoutUrl: string } | null;
      userErrors: { message: string }[];
      warnings: { message: string }[];
    };
  }>(
    `mutation CreerPanier($input: CartInput!) {
      cartCreate(input: $input) {
        cart { checkoutUrl }
        userErrors { message }
        warnings { message }
      }
    }`,
    { input: { lines: lignesShopify } }
  );

  const erreur = data.cartCreate.userErrors[0];
  if (erreur || !data.cartCreate.cart?.checkoutUrl) {
    throw new Error(erreur?.message || "CHECKOUT_INDISPONIBLE");
  }
  return data.cartCreate.cart.checkoutUrl;
}

export async function lireDisponibilitesShopify() {
  const carte = lireCarteVariantes();
  if (!configuration() || !carte) return null;
  const ids = Object.values(carte);
  if (ids.length === 0) return {};

  const data = await requeteShopify<{
    nodes: ({ id: string; availableForSale: boolean } | null)[];
  }>(
    `query Disponibilites($ids: [ID!]!) {
      nodes(ids: $ids) {
        ... on ProductVariant { id availableForSale }
      }
    }`,
    { ids }
  );

  const parId = new Map(data.nodes.filter(Boolean).map((node) => [node!.id, node!.availableForSale]));
  return Object.fromEntries(Object.entries(carte).map(([cle, id]) => [cle, parId.get(id) ?? false]));
}
