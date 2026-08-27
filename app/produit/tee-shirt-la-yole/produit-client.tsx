"use client";

// INSPIRATION: page produit NIKE (retour Tom regle 80) : galerie verticale a gauche, panneau
// sticky a droite (titre, prix, vignettes couleur, grille de tailles, gros CTA pleine largeur,
// accordeons description/livraison/entretien). Structure reproduite, habillage UPT.
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { IconCoche } from "@/components/icons";
import { Kicker } from "@/components/cta";
import { useCart } from "@/components/cart-provider";
import { CATALOGUE, creerCleVariante } from "@/lib/products";
import { useDisponibilites } from "@/lib/use-disponibilites";
import { LaYole } from "./yole";

const EASE_LUXE = [0.22, 1, 0.36, 1] as const;

const PRODUIT = CATALOGUE["tee-shirt-la-yole"];
const COULEURS = PRODUIT.couleurs;

const TAILLES = PRODUIT.tailles.map((t) => ({ t, dispo: true }));

const ACCORDEONS = [
  {
    titre: "Description et inspiration",
    contenu:
      "La yole ronde, embarcation traditionnelle martiniquaise, symbole d'équipage et de dépassement, sérigraphiée or dans le cercle Uncommon. Coton peigné épais, coupe droite, drapeau martiniquais cousu à l'ourlet. Chaque pièce est numérotée.",
  },
  {
    titre: "Livraison et retours",
    contenu:
      "Livraison en Martinique, en Guadeloupe et en Guyane, dans l'Hexagone, ou retrait en main propre (gratuit, sous 1 à 2 jours). Retours acceptés sous 14 jours, article non porté dans son emballage d'origine. Les échanges de taille se font selon le stock disponible.",
  },
  {
    titre: "Entretien",
    contenu:
      "Lavage à 30 degrés sur l'envers, pas de sèche-linge, repassage sans toucher la sérigraphie. Le fil d'or et la sérigraphie restent impeccables lavage après lavage.",
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

  // Galerie : photo produit (selon couleur) + details reels. Vrai drapeau (detailv-drapeau).
  const galerie = [couleur.image, "/img/detailv-monogramme.webp", "/img/detailv-drapeau.webp", "/img/detailv-yole.webp"];
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
          <Kicker>Best-seller</Kicker>
          <h1 className="font-display mt-3 text-[clamp(2rem,5vw,3.4rem)] text-[#F5F1E8]">
            Tee-shirt La Yole
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <nav className="py-4 text-[0.7rem] uppercase tracking-[0.12em] text-[#191610]/50">
          <Link href="/" className="hover:text-[#9C7E32]">Accueil</Link>
          <span className="px-2">/</span>
          <Link href="/boutique" className="hover:text-[#9C7E32]">Boutique</Link>
          <span className="px-2">/</span>
          <span className="text-[#191610]">Tee-shirt La Yole</span>
        </nav>

        <div className="grid gap-8 pb-16 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
          {/* Galerie : MOBILE = titre+prix, puis 1 grande photo + vignettes cliquables (retour Tom v18).
              DESKTOP = grande photo + vignettes en colonne. */}
          <div>
            {/* Titre + prix AU-DESSUS de la photo, sur mobile uniquement */}
            <div className="mb-4 md:hidden">
              <p className="text-[0.66rem] uppercase tracking-[0.2em] text-[#9C7E32]">Best-seller · Série limitée</p>
              <p className="font-display mt-1 text-[1.7rem] text-[#191610]">Tee-shirt La Yole</p>
              <p className="mt-1 text-xl font-semibold text-[#191610]">39 €</p>
            </div>

            {/* Grande photo active */}
            <div className="relative overflow-hidden border border-[#191610]/10 bg-[#F5F1EA]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={imageActive}
                  src={imageActive}
                  alt={`Tee-shirt La Yole ${couleur.nom}`}
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

            {/* Vignettes cliquables */}
            <div className="mt-3 flex gap-3">
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

          {/* Panneau sticky (titre+prix caches sur mobile car deja au-dessus de la photo) */}
          <div className="md:sticky md:top-32 md:h-fit">
            <div className="hidden md:block">
              <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[#9C7E32]">Best-seller · Série limitée</p>
              <h2 className="font-display mt-2 text-[clamp(1.7rem,3.5vw,2.4rem)] text-[#191610]">
                Tee-shirt La Yole
              </h2>
              <p className="mt-2 text-xl font-semibold text-[#191610]">39 €</p>
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
              <div className="mt-3 grid grid-cols-3 gap-2.5 sm:grid-cols-5">
                {TAILLES.map((s) => (
                  <button
                    key={s.t}
                    disabled={!estDisponible(creerCleVariante(PRODUIT.id, couleur.nom, s.t))}
                    onClick={() => {
                      setTaille(s.t);
                      setAjoute(false);
                    }}
                    className={`flex h-12 items-center justify-center border text-[0.82rem] font-semibold transition ${
                      !estDisponible(creerCleVariante(PRODUIT.id, couleur.nom, s.t))
                        ? "cursor-not-allowed border-[#191610]/10 text-[#191610]/25 line-through"
                        : taille === s.t
                          ? "border-[#191610] bg-[#191610] text-white"
                          : "border-[#191610]/25 text-[#191610] hover:border-[#191610]"
                    }`}
                  >
                    {s.t}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-[0.75rem] text-[#191610]/55">
                Coupe droite. {stockCharge && stockSynchronise ? "Stock synchronisé avec la boutique." : "Disponibilité vérifiée avant le paiement."}
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
              {["Coton peigné épais", "Drapeau martiniquais cousu à l'ourlet", "Série limitée numérotée"].map((d) => (
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
      </div>

      <LaYole />

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Suggestions */}
        <div className="py-14">
          <h2 className="font-display text-2xl text-[#191610]">Tu aimeras aussi</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { image: "/img/polo-noir.webp", nom: "Polo Signature UP Noir", prix: 60, href: "/produit/polo-signature-up?couleur=noir" },
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
