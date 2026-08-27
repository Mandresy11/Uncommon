// Page Galerie (retour Tom v6) : toutes les images des produits et des details, cliquables
// (lightbox plein ecran) et filtrables par categorie.
import { PageShell } from "@/components/page-shell";
import { Cta } from "@/components/cta";
import { IconInstagram, IconEmail } from "@/components/icons";
import { Galerie as GalerieLightbox } from "./lightbox";
import { Finitions } from "./finitions";

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
          Clique sur une photo pour l&apos;agrandir.
        </p>
        <GalerieLightbox images={IMAGES} />
        <div className="mt-12 text-center">
          <Cta href="/boutique" variante="noir">Voir la boutique</Cta>
        </div>
      </PageShell>

      <Finitions />

      <div className="bg-[#F0EAE0] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-2xl border border-[#191610]/15 bg-[#E5DCC9]/60 p-8 text-center">
          <h2 className="font-display text-xl text-[#191610]">Envoie-nous ta photo</h2>
          <p className="mx-auto mt-3 max-w-md text-[0.88rem] leading-relaxed text-[#191610]/72">
            Tu portes une pièce Uncommon People Tribe ? Partage ta photo par e-mail ou sur
            Instagram : les meilleures rejoindront cette galerie.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:uncommonpeopletribe@gmail.com"
              className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#191610] transition-colors hover:text-[#9C7E32]"
            >
              <IconEmail className="text-lg" />
              uncommonpeopletribe@gmail.com
            </a>
            <a
              href="https://www.instagram.com/uncommonpeopletribe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#191610] transition-colors hover:text-[#9C7E32]"
            >
              <IconInstagram className="text-lg" />
              @uncommonpeopletribe
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
