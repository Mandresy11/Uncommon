// INSPIRATION: WayFarer (Pinterest, lu via Read) : cartes produit photo + nom + prix + bouton.
import Link from "next/link";
import Image from "next/image";
import { PageShell } from "@/components/page-shell";
import { Cta } from "@/components/cta";
import { PRODUITS } from "@/lib/products";
import { Pourquoi } from "./pourquoi";

export const metadata = {
  title: "Boutique · Uncommon People Tribe",
  description: "Polos et tee-shirts premium de la marque martiniquaise Uncommon People Tribe.",
};

export default function Boutique() {
  return (
    <>
    <PageShell kicker="La boutique" titre={<>Toutes les pièces</>}>
      <div className="mb-6 flex items-center justify-between border-b border-[#191610]/15 pb-3">
        <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-[#191610]/55">
          {PRODUITS.length} pièces
        </p>
        <p className="text-[0.68rem] uppercase tracking-[0.16em] text-[#9C7E32]">
          Héritage · Signature
        </p>
      </div>

      <div
        className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden scroll-px-6 px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-x-5 sm:gap-y-9 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4"
        style={{ touchAction: "pan-x", overscrollBehaviorInline: "contain" }}
        aria-label="Produits de la boutique"
      >
        {PRODUITS.map((p) => (
          <Link
            key={p.slug}
            href={p.disponible ? p.href : "/#newsletter"}
            aria-label={p.disponible ? `Voir ${p.nom}` : `${p.nom}, bientôt disponible`}
            className="group relative w-[82vw] max-w-[19rem] shrink-0 snap-start border border-[#191610]/15 bg-[#F0EAE0] shadow-[0_8px_24px_rgba(25,22,16,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(25,22,16,0.12)] sm:w-auto sm:max-w-none sm:shrink"
          >
            <div className="relative overflow-hidden bg-[#D6CBB2]">
              <Image
                src={p.image}
                alt={p.nom}
                width={896}
                height={1120}
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              {(p.badge || !p.disponible) && (
                <span className="absolute left-3 top-3 bg-[#D4B36A] px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#0A0908]">
                  {p.disponible ? p.badge : "Bientôt disponible"}
                </span>
              )}
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#D4B36A] transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
            </div>
            <div className="flex min-h-[5.25rem] items-center justify-between gap-3 px-4 py-4">
              <div className="min-w-0">
                <p className="text-[0.84rem] font-semibold leading-snug">{p.nom}</p>
                <div className="mt-1.5 flex gap-1.5">
                  {p.couleurs.map((c) => (
                    <span
                      key={c.nom}
                      title={c.nom}
                      className="h-3 w-3 rounded-full border border-[#191610]/20"
                      style={{ background: c.hex }}
                    />
                  ))}
                </div>
              </div>
              <p className="shrink-0 text-right font-semibold text-[#9C7E32]">
                {p.disponible ? `${p.prix} €` : <span className="text-[0.65rem] uppercase tracking-[0.1em]">Être prévenu</span>}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <p className="mt-10 text-center text-[0.85rem] text-[#191610]/60">
        Chaque modèle est produit en série limitée. Les tailles épuisées ne sont pas toujours rééditées.
      </p>
      <div className="mt-6 text-center">
        <Cta href="/collections" variante="contour-noir">Voir les collections</Cta>
      </div>
    </PageShell>
    <Pourquoi />
    </>
  );
}
