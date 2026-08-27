export type Produit = {
  slug: string;
  href: string;
  productId?: ProductId;
  nom: string;
  prix: number;
  image: string;
  badge?: string;
  disponible: boolean;
  couleurs: { nom: string; hex: string }[];
  collection: "heritage" | "signature";
};

export type ProductId = "polo-signature-up" | "tee-shirt-la-yole";

export type ProduitAchetable = {
  id: ProductId;
  nom: string;
  href: string;
  prix: number;
  couleurs: readonly { nom: string; hex: string; image: string }[];
  tailles: readonly string[];
};

export const CATALOGUE: Record<ProductId, ProduitAchetable> = {
  "polo-signature-up": {
    id: "polo-signature-up",
    nom: "Polo Signature UP",
    href: "/produit/polo-signature-up",
    prix: 60,
    couleurs: [
      { nom: "Noir", hex: "#0A0908", image: "/img/polo-noir.webp" },
      { nom: "Vert", hex: "#1E7A3C", image: "/img/polo-vert.webp" },
      { nom: "Rouge", hex: "#C8202E", image: "/img/polo-rouge.webp" },
    ],
    tailles: ["M", "L", "XL", "XXL"],
  },
  "tee-shirt-la-yole": {
    id: "tee-shirt-la-yole",
    nom: "Tee-shirt La Yole",
    href: "/produit/tee-shirt-la-yole",
    prix: 39,
    couleurs: [
      { nom: "Noir", hex: "#0A0908", image: "/img/tee-noir.webp" },
      { nom: "Sable", hex: "#D8CDB4", image: "/img/tee-sable.webp" },
      { nom: "Olive", hex: "#4A4A32", image: "/img/tee-olive.webp" },
    ],
    tailles: ["S", "M", "L", "XL", "XXL"],
  },
};

export function creerCleVariante(productId: ProductId, couleur: string, taille: string) {
  return `${productId}:${couleur.toLocaleLowerCase("fr-FR")}:${taille.toUpperCase()}`;
}

export const PRODUITS: Produit[] = [
  {
    slug: "polo-signature-up-noir",
    href: "/produit/polo-signature-up",
    productId: "polo-signature-up",
    nom: "Polo Signature UP · Noir",
    prix: 60,
    image: "/img/polo-noir.webp",
    badge: "Série limitée",
    disponible: true,
    couleurs: [
      { nom: "Noir", hex: "#0A0908" },
      { nom: "Vert", hex: "#1E7A3C" },
      { nom: "Rouge", hex: "#C8202E" },
    ],
    collection: "signature",
  },
  {
    slug: "tee-shirt-la-yole-noir",
    href: "/produit/tee-shirt-la-yole",
    productId: "tee-shirt-la-yole",
    nom: "Tee-shirt La Yole · Noir",
    prix: 39,
    image: "/img/tee-noir.webp",
    badge: "Best-seller",
    disponible: true,
    couleurs: [
      { nom: "Noir", hex: "#0A0908" },
      { nom: "Sable", hex: "#D8CDB4" },
      { nom: "Olive", hex: "#4A4A32" },
    ],
    collection: "heritage",
  },
  {
    slug: "sweat-heritage-up-ivoire",
    href: "/contact",
    nom: "Sweat Héritage UP · Ivoire",
    prix: 79,
    image: "/img/sweat-ivoire-up.webp",
    badge: "Nouveau",
    disponible: false,
    couleurs: [{ nom: "Ivoire", hex: "#EEE8D9" }],
    collection: "heritage",
  },
  {
    slug: "casquette-monogramme-up-noire",
    href: "/contact",
    nom: "Casquette Monogramme UP · Noir",
    prix: 32,
    image: "/img/casquette-noire-up.webp",
    badge: "Nouveau",
    disponible: false,
    couleurs: [{ nom: "Noir", hex: "#0A0908" }],
    collection: "signature",
  },
  {
    slug: "polo-signature-up-vert",
    href: "/produit/polo-signature-up?couleur=vert",
    productId: "polo-signature-up",
    nom: "Polo Signature UP · Vert",
    prix: 60,
    image: "/img/polo-vert.webp",
    disponible: true,
    couleurs: [{ nom: "Vert", hex: "#1E7A3C" }],
    collection: "signature",
  },
  {
    slug: "tee-shirt-la-yole-sable",
    href: "/produit/tee-shirt-la-yole?couleur=sable",
    productId: "tee-shirt-la-yole",
    nom: "Tee-shirt La Yole · Sable",
    prix: 39,
    image: "/img/tee-sable.webp",
    disponible: true,
    couleurs: [{ nom: "Sable", hex: "#D8CDB4" }],
    collection: "heritage",
  },
  {
    slug: "polo-signature-up-rouge",
    href: "/produit/polo-signature-up?couleur=rouge",
    productId: "polo-signature-up",
    nom: "Polo Signature UP · Rouge",
    prix: 60,
    image: "/img/polo-rouge.webp",
    disponible: true,
    couleurs: [{ nom: "Rouge", hex: "#C8202E" }],
    collection: "signature",
  },
  {
    slug: "tee-shirt-la-yole-olive",
    href: "/produit/tee-shirt-la-yole?couleur=olive",
    productId: "tee-shirt-la-yole",
    nom: "Tee-shirt La Yole · Olive",
    prix: 39,
    image: "/img/tee-olive.webp",
    disponible: true,
    couleurs: [{ nom: "Olive", hex: "#4A4A32" }],
    collection: "heritage",
  },
];

export const POLO_COULEURS = CATALOGUE["polo-signature-up"].couleurs;

export const TAILLES = CATALOGUE["tee-shirt-la-yole"].tailles;
export const TAILLES_POLO = CATALOGUE["polo-signature-up"].tailles;

// Stock initial de la commande fournisseur au lancement (80 pièces au total, confirmé client).
// À synchroniser avec le stock temps réel une fois Shopify branché : ces chiffres ne bougent
// pas automatiquement quand une vente a lieu sur ce site de démo.
export const STOCK_INITIAL_POLO: Record<string, number> = {
  M: 25,
  L: 25,
  XL: 20,
  XXL: 10,
};
