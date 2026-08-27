import { ProduitClient } from "./produit-client";

export const metadata = {
  title: "Tee-shirt La Yole · Uncommon People Tribe",
  description:
    "Tee-shirt premium La Yole : la yole ronde sérigraphiée or, coton peigné épais, drapeau martiniquais cousu. Série limitée numérotée.",
};

export default async function FicheProduit({
  searchParams,
}: {
  searchParams: Promise<{ couleur?: string | string[] }>;
}) {
  const params = await searchParams;
  const couleur = Array.isArray(params.couleur) ? params.couleur[0] : params.couleur;
  return <ProduitClient couleurInitiale={couleur} />;
}
