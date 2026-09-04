"use client";

// Gabarit repris de la fiche tee-shirt La Yole (structure Nike : galerie + panneau sticky).
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { IconCoche } from "@/components/icons";
import { Kicker } from "@/components/cta";
import { useCart } from "@/components/cart-provider";
import { CATALOGUE, creerCleVariante, TAILLES_POLO } from "@/lib/products";
import { useDisponibilites } from "@/lib/use-disponibilites";

const EASE_LUXE = [0.22, 1, 0.36, 1] as const;

const PRODUIT = CATALOGUE["polo-signature-up"];
const COULEURS = PRODUIT.couleurs;

const ACCORDEONS = [
  {
    titre: "Description et finitions",
    contenu:
      "Monogramme UP brodé au fil d'or côté cœur, drapeau martiniquais brodé sur la manche droite. Col et tissu piqués, coupe normale, boutons assortis à la couleur du polo, fentes latérales, étiquette de taille et de propreté à l'intérieur du col. Composition : 95 % coton, 5 % élasthanne. Matière confortable, joli tombé. Pièce de série limitée.",
  },
  {
    titre: "Livraison et retours",
    contenu:
      "Livraison en Martinique, en Guadeloupe et en Guyane, dans l'Hexagone, ou retrait en main propre (gratuit, sous 1 à 2 jours). Retours acceptés sous 14 jours, article non porté dans son emballage d'origine.",
  },
  {
    titre: "Entretien",
    contenu:
      "Lavage à 30 degrés sur l'envers, pas de sèche-linge, repassage en évitant la broderie. Le fil d'or reste impeccable lavage après lavage.",
  },
];

export function ProduitClient({ couleurInitiale }: { couleurInitiale?: string }) {
  const couleurDemandee = COULEURS.find(
    (option) => option.nom.toLocaleLowerCase("fr-FR") === couleurInitiale?.toLocaleLowerCase("fr-FR")
  );
  const [couleur, setCouleur] = useState(couleurDemandee ?? COULEURS[0]);
  const [taille, setTaille] = useState<string | null>(null);
  const [ouvert, setOuvert] = useState<number | null>(0);
  const [active, setActive] = useState(0);
  const [ajoute, setAjoute] = useState(false);
  const { ajouter } = useCart();
  const { configure: stockSynchronise, charge: stockCharge, estDisponible } = useDisponibilites();

  const galerie = [couleur.image, "/img/detailv-monogramme.webp", "/img/detailv-drapeau.webp", "/img/detailv-col.webp"];
  const imageActive = galerie[active] ?? galerie[0];

  const ajouterAuPanier = () => {
    if (!taille) return;
    ajouter({
      variantKey: creerCleVariante(PRODUIT.id, couleur.nom, taille),
      productId: PRODUIT.id,
      nom: PRODUIT.nom,
      href: `${PRODUIT.href}?couleur=${encodeURIComponent(couleur.nom.toLocaleLowerCase("fr-FR"))}`,
      image: couleur.image,
      couleur: couleur.nom,
      taille,
      prix: PRODUIT.prix,
    });
    setAjoute(true);
  };

  return (
    <main className="bg-white">
      <div className="grain relative overflow-hidden bg-[#0A0908] pt-28 md:pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{ backgroundImage: "url(/img/fond-broderie.webp)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-14 pt-8 text-center md:pb-16">
          <Kicker>Collection</Kicker>
          <h1 className="font-display mt-3 text-[clamp(2rem,5vw,3.4rem)] text-[#F5F1E8]">
            Polo Signature UP
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <nav className="py-4 text-[0.7rem] uppercase tracking-[0.12em] text-[#191610]/50">
          <Link href="/" className="hover:text-[#9C7E32]">Accueil</Link>
          <span className="px-2">/</span>
          <Link href="/boutique" className="hover:text-[#9C7E32]">Boutique</Link>
          <span className="px-2">/</span>
          <span className="text-[#191610]">Polo Signature UP</span>
        </nav>

        <div className="grid gap-8 pb-16 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
          <div>
            <div className="mb-4 md:hidden">
              <p className="mt-1 text-xl font-semibold text-[#191610]">60 €</p>
            </div>

            <div className="relative overflow-hidden border border-[#191610]/10 bg-[#F5F1EA]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={imageActive}
                  src={imageActive}
                  alt={`Polo Signature UP ${couleur.nom}`}
                  width={896}
                  height={1152}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: EASE_LUXE }}
                  className="aspect-[4/5] w-full object-cover"
                />
              </AnimatePresence>
            </div>

            <div className="mt-3 hidden gap-3 sm:flex">
              {galerie.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setActive(i)}
                  aria-label={`Voir la photo ${i + 1}`}
                  className={`h-20 w-16 shrink-0 overflow-hidden border-2 transition sm:h-24 sm:w-20 ${
                    active === i ? "border-[#9C7E32]" : "border-[#191610]/15 hover:border-[#191610]/40"
                  }`}
                >
                  <img src={src} alt="" width={160} height={200} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="md:sticky md:top-32 md:h-fit">
            <div className="hidden md:block">
              <Kicker>Collection Signature · Série limitée</Kicker>
              <h2 className="font-display mt-2 text-[clamp(1.7rem,3.5vw,2.4rem)] text-[#191610]">
                Polo Signature UP
              </h2>
              <p className="mt-2 text-xl font-semibold text-[#191610]">60 €</p>
            </div>

            <div className="mt-2 md:mt-7">
              <p className="text-[0.68rem] uppercase tracking-[0.16em] text-[#191610]/55">Couleur : {couleur.nom}</p>
              <div className="mt-3 flex gap-3">
                {COULEURS.map((c) => (
                  <button
                    key={c.nom}
                    onClick={() => {
                      setCouleur(c);
                      setActive(0);
                      setAjoute(false);
                      if (taille && !estDisponible(creerCleVariante(PRODUIT.id, c.nom, taille))) setTaille(null);
                    }}
                    aria-label={`Couleur ${c.nom}`}
                    className={`h-16 w-14 overflow-hidden border-2 transition ${
                      couleur.nom === c.nom ? "border-[#9C7E32]" : "border-[#191610]/15 hover:border-[#191610]/40"
                    }`}
                  >
                    <img src={c.image} alt={c.nom} width={112} height={128} className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <div className="flex items-center justify-between">
                <p className="text-[0.68rem] uppercase tracking-[0.16em] text-[#191610]/55">Choisir la taille</p>
                <Link href="/guide-des-tailles" className="text-[0.72rem] text-[#9C7E32] underline underline-offset-2">
                  Guide des tailles
                </Link>
              </div>
              <div className="mt-3 grid grid-cols-4 gap-3">
                {TAILLES_POLO.map((t) => {
                  const dispo = estDisponible(creerCleVariante(PRODUIT.id, couleur.nom, t));
                  const selectionne = taille === t;
                  return (
                    <button
                      key={t}
                      disabled={!dispo}
                      onClick={() => {
                        setTaille(t);
                        setAjoute(false);
                      }}
                      className={`btn-cut relative flex h-14 items-center justify-center text-[0.95rem] font-bold uppercase tracking-[0.06em] transition-all duration-200 ${
                        !dispo
                          ? "cursor-not-allowed bg-[#191610]/5 text-[#191610]/25 line-through"
                          : selectionne
                            ? "scale-[1.04] bg-[#191610] text-[#E3C888] shadow-[0_8px_20px_rgba(25,22,16,0.35)]"
                            : "bg-white text-[#191610] shadow-[0_2px_8px_rgba(25,22,16,0.1)] ring-1 ring-inset ring-[#191610]/15 hover:bg-[#191610] hover:text-white hover:shadow-[0_6px_16px_rgba(25,22,16,0.25)]"
                      }`}
                    >
                      {t}
                      {selectionne && (
                        <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#9C7E32] text-[0.6rem] text-white shadow-[0_2px_6px_rgba(0,0,0,0.3)]" aria-hidden="true">
                          ✓
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
              <p className="mt-2 text-[0.75rem] text-[#191610]/55">
                Coupe normale. {stockCharge && stockSynchronise ? "Stock synchronisé avec la boutique." : "Disponibilité vérifiée avant le paiement."}
              </p>
            </div>

            <div className="mt-7 space-y-3">
              <button
                type="button"
                onClick={ajouterAuPanier}
                disabled={!taille}
                className={`btn-cut flex min-h-14 w-full items-center justify-center text-[0.75rem] font-semibold uppercase tracking-[0.2em] transition-colors ${
                  taille ? "bg-[#191610] text-white hover:bg-[#0A0908]" : "cursor-not-allowed bg-[#191610]/25 text-white/70"
                }`}
              >
                {ajoute ? "Ajouté au panier" : taille ? "Ajouter au panier" : "Choisir une taille"}
              </button>
              {ajoute && (
                <Link
                  href="/panier"
                  className="flex min-h-12 w-full items-center justify-center border border-[#9C7E32] text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#9C7E32] transition-colors hover:bg-[#F5F1EA]"
                >
                  Voir le panier
                </Link>
              )}
              <Link
                href="/contact"
                className="flex min-h-12 w-full items-center justify-center border border-[#191610]/30 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#191610] transition-colors hover:bg-[#F5F1EA]"
              >
                Poser une question
              </Link>
            </div>

            <ul className="mt-7 space-y-2 border-t border-[#191610]/12 pt-6">
              {["Monogramme UP brodé or côté cœur", "Drapeau martiniquais brodé sur la manche droite", "95 % coton, 5 % élasthanne", "Série limitée"].map((d) => (
                <li key={d} className="flex items-center gap-2.5 text-[0.85rem] text-[#191610]/75">
                  <span className="text-[#9C7E32]"><IconCoche /></span>
                  {d}
                </li>
              ))}
            </ul>

            <div className="mt-6 divide-y divide-[#191610]/12 border-t border-[#191610]/12">
              {ACCORDEONS.map((a, i) => (
                <div key={a.titre}>
                  <button
                    onClick={() => setOuvert(ouvert === i ? null : i)}
                    className="flex w-full items-center justify-between py-4 text-left"
                    aria-expanded={ouvert === i}
                  >
                    <span className="text-[0.9rem] font-semibold text-[#191610]">{a.titre}</span>
                    <motion.span animate={{ rotate: ouvert === i ? 45 : 0 }} transition={{ duration: 0.3 }} className="text-xl leading-none text-[#9C7E32]" aria-hidden="true">+</motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {ouvert === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASE_LUXE }}
                        className="overflow-hidden"
                      >
                        <p className="pb-4 text-[0.86rem] leading-relaxed text-[#191610]/70">{a.contenu}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#191610]/12 py-14">
          <h2 className="font-display text-2xl text-[#191610]">Vous aimerez aussi</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { image: "/img/tee-noir.webp", nom: "Tee-shirt La Yole Noir", prix: 39, href: "/produit/tee-shirt-la-yole?couleur=noir" },
              { image: "/img/polo-vert.webp", nom: "Polo Signature UP Vert", prix: 60, href: "/produit/polo-signature-up?couleur=vert" },
              { image: "/img/polo-rouge.webp", nom: "Polo Signature UP Rouge", prix: 60, href: "/produit/polo-signature-up?couleur=rouge" },
              { image: "/img/tee-olive.webp", nom: "Tee-shirt La Yole Olive", prix: 39, href: "/produit/tee-shirt-la-yole?couleur=olive" },
            ].map((p) => (
              <Link key={p.nom} href={p.href} className="group border border-[#191610]/12 bg-white">
                <img src={p.image} alt={p.nom} width={896} height={1152} loading="lazy" className="aspect-[4/5] w-full bg-[#F5F1EA] object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                <div className="px-3 py-3">
                  <p className="text-[0.8rem] font-semibold text-[#191610]">{p.nom}</p>
                  <p className="text-[0.8rem] font-semibold text-[#9C7E32]">{p.prix} €</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
