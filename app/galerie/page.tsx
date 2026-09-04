// Page Galerie (retour Tom v6) : toutes les images des produits et des details, cliquables
// (lightbox plein ecran) et filtrables par categorie.
import { PageShell } from "@/components/page-shell";
import { Cta } from "@/components/cta";
import { Galerie as GalerieLightbox } from "./lightbox";
import { Finitions } from "./finitions";
import { PartagePhoto } from "./partage-photo";

export const metadata = {
  title: "Galerie · Uncommon People Tribe",
  description: "La galerie complète des produits Uncommon People Tribe : polos, tee-shirts et détails de finition.",
};

const IMAGES = [
  { src: "/img/polo-noir.webp", alt: "Polo Signature UP noir", tall: true, categorie: "produits" as const },
  { src: "/img/tee-noir.webp", alt: "Tee-shirt La Yole noir", tall: true, categorie: "produits" as const },
  { src: "/img/polo-vert.webp", alt: "Polo Signature UP vert", tall: true, categorie: "produits" as const },
  { src: "/img/detail-monogramme.webp", alt: "Détail du monogramme brodé or", tall: false, categorie: "details" as const },
  { src: "/img/detail-drapeau.webp", alt: "Détail du drapeau martiniquais cousu", tall: false, categorie: "details" as const },
  { src: "/img/polo-rouge.webp", alt: "Polo Signature UP rouge", tall: true, categorie: "produits" as const },
  { src: "/img/tee-sable.webp", alt: "Tee-shirt La Yole sable", tall: true, categorie: "produits" as const },
  { src: "/img/detail-col.webp", alt: "Détail du col et des boutons", tall: false, categorie: "details" as const },
  { src: "/img/detail-yole.webp", alt: "Détail de la yole sérigraphiée", tall: false, categorie: "details" as const },
  { src: "/img/tee-olive.webp", alt: "Tee-shirt La Yole olive", tall: true, categorie: "produits" as const },
  { src: "/img/detail-fente.webp", alt: "Détail des fentes latérales", tall: false, categorie: "details" as const },
  { src: "/img/hero-campagne.webp", alt: "Campagne Uncommon People Tribe", tall: false, categorie: "campagne" as const },
];

export default function Galerie() {
  return (
    <>
      <PageShell kicker="Galerie" titre={<>Toute la collection en images</>}>
        <p className="mx-auto -mt-6 mb-10 max-w-md text-center text-[0.8rem] text-[#191610]/55">
          Cliquez sur une photo pour l&apos;agrandir.
        </p>
        <GalerieLightbox images={IMAGES} />
        <div className="mt-12 text-center">
          <Cta href="/boutique" variante="noir">Voir la boutique</Cta>
        </div>
      </PageShell>

      <Finitions />

      <PartagePhoto />
    </>
  );
}
