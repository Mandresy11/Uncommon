import { ProduitClient } from "./produit-client";

export const metadata = {
  title: "Polo Signature UP · Uncommon People Tribe",
  description:
    "Polo Signature UP : monogramme UP brodé or, drapeau martiniquais brodé sur la manche droite, piqué premium 95 % coton 5 % élasthanne. Série limitée.",
};

export default async function FicheProduitPolo({
  searchParams,
}: {
  searchParams: Promise<{ couleur?: string | string[] }>;
}) {
  const params = await searchParams;
  const couleur = Array.isArray(params.couleur) ? params.couleur[0] : params.couleur;
  return <ProduitClient couleurInitiale={couleur} />;
}
