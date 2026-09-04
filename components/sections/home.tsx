"use client";

// Page d'accueil Uncommon People Tribe. Toutes les images de fond sont des fichiers IA locaux.
// Sources d'inspiration reelles de la session : planches Higgsfield (planche-desktop.png,
// planche-mobile.png), screens Pinterest lus via Read, structures jeehaans/roboli via WebFetch.
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cta, Reveal, Kicker } from "../cta";
import { IconGauche, IconDroite, IconAiguille, IconCiseaux, IconDrapeauMartinique, IconPanier } from "../icons";
import { POLO_COULEURS } from "@/lib/products";
import { useNewsletter } from "../use-newsletter";

const EASE_LUXE = [0.22, 1, 0.36, 1] as const;

// Cadre a coins en equerre dores (contour original, retour Tom v6). Remplace le simple border.
function CadreCoins({ couleur = "#D4B36A" }: { couleur?: string }) {
  const coin = "absolute h-5 w-5 border-[#D4B36A]";
  return (
    <span className="pointer-events-none absolute inset-0 z-10" aria-hidden="true" style={{ color: couleur }}>
      <span className={`${coin} left-2 top-2 border-l-2 border-t-2`} />
      <span className={`${coin} right-2 top-2 border-r-2 border-t-2`} />
      <span className={`${coin} bottom-2 left-2 border-b-2 border-l-2`} />
      <span className={`${coin} bottom-2 right-2 border-b-2 border-r-2`} />
    </span>
  );
}

/* ============================== 1. HERO ============================== */
// INSPIRATION: campagne shooting hommes Martinique (retour Tom regle 81) : image marquante + video
// de fond. Video Kling depuis la campagne, image campagne en poster/fallback. Anti-zoom : svh fixe,
// video en transform translate3d centre, PAS d'object-fit sur viewport units. Fond FIXE, zero parallaxe.
function Hero() {
  return (
    <section className="relative h-[100svh] max-h-[100svh] min-h-[100svh] overflow-hidden bg-[#0A0908]">
      {/* Video plein arriere-plan. Hauteur svh FIXE (anti-zoom iOS) + object-cover pour couvrir
          tout l'ecran et rester centre (retour Tom : etait mal cale en haut a gauche).
          Version mobile 9:16 dediee, desktop 16:9. */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/img/hero-campagne.webp"
        className="absolute inset-0 hidden h-full w-full object-cover object-center md:block"
        aria-hidden="true"
      >
        <source src="/img/hero-campagne.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/img/hero-campagne-mobile.webp"
        className="absolute inset-0 block h-full w-full object-cover object-center md:hidden"
        aria-hidden="true"
      >
        <source src="/img/hero-campagne-mobile.mp4" type="video/mp4" />
      </video>
      {/* Overlay abaisse mobile ET desktop (retour Tom v17 : encore moins d'ombre sur ordinateur). */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0908]/25 via-[#0A0908]/15 to-[#0A0908]/45" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 55% at 50% 48%, rgba(10,9,8,0.3) 0%, transparent 75%)" }}
        aria-hidden="true"
      />
      {/* Retour Tom v12 : titre centre en BAS juste au-dessus des boutons. Boutons ancres tout
          en bas, l'un a GAUCHE, l'autre a DROITE de l'ecran. Description sur 1 ligne. */}
      <div className="relative z-10 flex h-full w-full flex-col justify-end px-5 pb-10 md:px-8 md:pb-12">
        {/* Bloc titre + description, centre horizontalement, juste au-dessus des boutons */}
        <div className="mb-8 text-center md:mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE_LUXE }}
            className="font-display text-[clamp(2.4rem,7.5vw,5.4rem)] leading-[1.02] text-[#F5F1E8]"
            style={{ textShadow: "0 2px 24px rgba(10,9,8,0.85)" }}
          >
            <span className="font-light tracking-[0.02em]">Rentre dans </span>
            <span className="font-semibold italic text-[#E3C888]">la tribu.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE_LUXE }}
            className="mx-auto mt-5 max-w-3xl text-[0.8rem] leading-relaxed text-white [text-shadow:0_1px_10px_rgba(10,9,8,0.7)] sm:whitespace-nowrap sm:text-[0.95rem]"
          >
            Polos et tee-shirts premium nés en Martinique. Broderie or, drapeau cousu sur la manche, séries limitées.
          </motion.p>
        </div>

        {/* Boutons sur une ligne. Espace EGAL bord/milieu/bord (retour Tom v15) : row centre,
            gap = padding lateral, chaque bouton flex-1 max 45%. Libelle court sur mobile pour
            tenir sur une ligne (retour Tom v15). */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: EASE_LUXE }}
          className="flex w-full flex-row items-end justify-center gap-5 md:gap-8"
        >
          <div className="flex-1">
            <Cta href="/boutique" variante="or" taille="geant">
              <span className="sm:hidden">La collection</span>
              <span className="hidden sm:inline">Découvrir la collection</span>
            </Cta>
          </div>
          <div className="flex-1">
            <Cta href="/notre-histoire" variante="contour-or" taille="geant">
              Notre histoire
            </Cta>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ===================== 2. PIECES PHARES ===================== */
// INSPIRATION: retour Tom regle 79 : carousel d'environ 8 pieces sur fond BLANC, carte vedette
// polo Signature conservee mais redesignee, showcase couleur. Fond blanc simple, zero texture.
const PHARES = [
  { image: "/img/polo-noir.webp", nom: "Polo Signature UP", variante: "Noir", prix: 60, badge: "Broderie or", href: "/produit/polo-signature-up" },
  { image: "/img/tee-noir.webp", nom: "Tee-shirt La Yole", variante: "Noir", prix: 39, badge: "Best-seller", href: "/produit/tee-shirt-la-yole" },
  { image: "/img/polo-vert.webp", nom: "Polo Signature UP", variante: "Vert", prix: 60, href: "/produit/polo-signature-up" },
  { image: "/img/tee-sable.webp", nom: "Tee-shirt La Yole", variante: "Sable", prix: 39, href: "/produit/tee-shirt-la-yole" },
  { image: "/img/polo-rouge.webp", nom: "Polo Signature UP", variante: "Rouge", prix: 60, href: "/produit/polo-signature-up" },
  { image: "/img/tee-olive.webp", nom: "Tee-shirt La Yole", variante: "Olive", prix: 39, href: "/produit/tee-shirt-la-yole" },
];

function PiecesPhares() {
  const [couleur, setCouleur] = useState(POLO_COULEURS[0]);
  const file = useRef<HTMLDivElement>(null);

  const defiler = (sens: number) => {
    file.current?.scrollBy({ left: sens * (file.current.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="text-center">
          <Kicker sombre={false}>Best-sellers</Kicker>
          <h2 className="font-display mt-4 text-[clamp(1.9rem,4.5vw,3rem)] text-[#191610]">
            Les pièces les plus portées
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[0.95rem] leading-relaxed text-[#191610]/70">
            Uncommon People Tribe habille ceux qui portent leurs racines avec fierté.
            Chaque pièce est pensée en Martinique, dessinée dans les moindres finitions.
          </p>
        </Reveal>

        {/* Carte vedette redesignee : cadre dore decale + showcase couleur du polo Signature */}
        {/* Carte vedette : plus compacte sur mobile (retour Tom v5 : trop grande) */}
        <Reveal className="mt-14">
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -left-2 -top-2 hidden h-full w-full border border-[#D4B36A]/50 md:block" aria-hidden="true" />
            <div className="relative grid items-stretch border border-[#191610]/12 bg-[#FBF9F4] md:grid-cols-2">
              <div className="relative overflow-hidden bg-[#F0EAE0]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={couleur.nom}
                    src={couleur.image}
                    alt={`Polo Signature UP ${couleur.nom}, monogramme brodé or et drapeau martiniquais sur la manche`}
                    width={896}
                    height={1152}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: EASE_LUXE }}
                    className="aspect-[4/5] w-full object-cover object-[center_20%] sm:aspect-[4/4] md:aspect-auto md:h-full md:object-top"
                  />
                </AnimatePresence>
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10">
                <span className="text-[0.62rem] uppercase tracking-[0.22em] text-[#9C7E32]">Collection Signature</span>
                <h3 className="font-display mt-2 text-[clamp(1.4rem,3vw,2.1rem)] text-[#191610]">Polo Signature UP</h3>
                <p className="mt-2 text-lg font-semibold text-[#9C7E32]">60 €</p>
                <p className="mt-4 text-[0.92rem] leading-relaxed text-[#191610]/72">
                  Piqué épais, col structuré, monogramme UP brodé au fil d&apos;or et drapeau
                  martiniquais cousu sur la manche gauche.
                </p>
                <p className="mt-6 text-[0.66rem] uppercase tracking-[0.18em] text-[#191610]/55">
                  Couleur : {couleur.nom}
                </p>
                <div className="mt-3 flex gap-3">
                  {POLO_COULEURS.map((c) => (
                    <button
                      key={c.nom}
                      onClick={() => setCouleur(c)}
                      aria-label={`Voir le polo ${c.nom}`}
                      className={`h-9 w-9 rounded-full border-2 transition-transform hover:scale-110 ${
                        couleur.nom === c.nom ? "border-[#9C7E32]" : "border-[#191610]/20"
                      }`}
                      style={{ background: c.hex }}
                    />
                  ))}
                </div>
                <p className="mt-5 text-[0.78rem] text-[#191610]/55">Tailles M à XXL · Série limitée</p>
                <div className="mt-7">
                  <Cta href="/produit/polo-signature-up" variante="noir">
                    Voir le produit
                  </Cta>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Carousel de 8 pieces (regle 79), scroll-snap conforme */}
        <Reveal className="mt-16">
          <div className="flex items-end justify-between">
            <h3 className="font-display text-xl text-[#191610]">Nos best-sellers</h3>
            <div className="flex gap-2">
              <button
                onClick={() => defiler(-1)}
                aria-label="Faire défiler vers la gauche"
                className="flex h-10 w-10 items-center justify-center border border-[#191610]/25 text-[#191610] transition-colors hover:bg-[#191610] hover:text-white"
              >
                <IconGauche />
              </button>
              <button
                onClick={() => defiler(1)}
                aria-label="Faire défiler vers la droite"
                className="flex h-10 w-10 items-center justify-center border border-[#191610]/25 text-[#191610] transition-colors hover:bg-[#191610] hover:text-white"
              >
                <IconDroite />
              </button>
            </div>
          </div>
          <div
            ref={file}
            className="-mx-6 mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto overflow-y-hidden scroll-px-6 px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ touchAction: "pan-x", overscrollBehavior: "contain" }}
          >
            {PHARES.map((t, i) => (
              // INSPIRATION: WayFarer (Pinterest, lu via Read) : carte produit photo + nom + prix
              <article
                key={i}
                className="group w-[68vw] max-w-[16rem] shrink-0 snap-start border border-[#191610]/12 bg-white"
              >
                <Link href={t.href} className="block">
                  <div className="relative overflow-hidden bg-[#F5F1EA]">
                    <img
                      src={t.image}
                      alt={`${t.nom} ${t.variante}`}
                      width={896}
                      height={1152}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex items-center justify-between px-4 pt-4">
                    <div>
                      <p className="text-[0.86rem] font-semibold text-[#191610]">{t.nom}</p>
                      <p className="text-[0.72rem] text-[#191610]/55">{t.variante}</p>
                    </div>
                    <p className="font-semibold text-[#9C7E32]">{t.prix} €</p>
                  </div>
                </Link>
                <div className="px-4 pb-4 pt-3">
                  <Link
                    href={`${t.href}?couleur=${encodeURIComponent(t.variante.toLocaleLowerCase("fr-FR"))}`}
                    className="flex h-10 w-full items-center justify-center gap-2 border border-[#191610]/25 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#191610] transition-colors hover:bg-[#191610] hover:text-white"
                  >
                    <IconPanier className="text-[0.95rem]" aria-hidden="true" />
                    Ajouter au panier
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Cta href="/boutique" variante="contour-noir">
              Voir toute la boutique
            </Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ========================= 3. COLLECTIONS ========================= */
// INSPIRATION: jeehaans.vercel.app (WebFetch) : blocs collections en photo pleine avec texte en
// superposition. Adapte : 2 grands blocs + bandeau teaser. Fond grain or IA.
function Collections() {
  const blocs = [
    {
      nom: "Héritage",
      texte: "Les tee-shirts aux visuels inspirés des traditions de l'île, la yole ronde en tête.",
      image: "/img/tee-sable.webp",
    },
    {
      nom: "Signature",
      texte: "Les polos piqué premium au monogramme UP brodé au fil d'or.",
      image: "/img/polo-vert.webp",
    },
  ];
  return (
    <section className="grain relative overflow-hidden bg-[#0A0908]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage:`url(/img/fond-grain-or.webp)` }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="text-center">
          <Kicker>Nos univers</Kicker>
          <h2 className="font-display mt-3 text-[clamp(1.9rem,4.5vw,3rem)] text-[#F5F1E8]">
            Deux collections, une même fierté
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {blocs.map((b, i) => (
            // INSPIRATION: jeehaans (bloc categorie photo sombre + texte blanc en superposition)
            <Reveal key={b.nom} delay={i * 0.12}>
              <Link href="/collections" className="group relative block overflow-hidden">
                <img
                  src={b.image}
                  alt={`Collection ${b.nom}`}
                  width={896}
                  height={1152}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/85 via-[#0A0908]/20 to-transparent" />
                <CadreCoins />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-display text-2xl font-semibold text-[#F5F1E8]">
                    {b.nom === "Héritage" ? (
                      <>Collection <span className="italic font-normal text-[#E3C888]">Héritage</span></>
                    ) : (
                      <>Collection <span className="italic font-normal text-[#E3C888]">Signature</span></>
                    )}
                  </p>
                  <p className="mt-2 max-w-sm text-[0.85rem] leading-relaxed text-[#F5F1E8]/80">{b.texte}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6">
          <div className="relative flex flex-col items-center justify-between gap-5 bg-[#14120E]/80 px-8 py-7 md:flex-row">
            <CadreCoins />
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#D4B36A]/50">
                <img src="/img/icons/yole.svg" alt="" width={48} height={48} className="h-full w-full object-cover" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-[#F5F1E8]">
                  Édition spéciale <span className="italic font-normal text-[#E3C888]">Course de Yoles</span>
                </p>
                <p className="text-[0.82rem] text-[#F5F1E8]/70">
                  Nouvelle collection en novembre. La capsule Course de Yoles suit six mois plus tard.
                </p>
              </div>
            </div>
            <Cta href="/collections" variante="contour-or">
              Explorer les collections
            </Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ======================= 4. LE LOOKBOOK (galerie) ======================= */
// DESKTOP : galerie de photos produits portees, en portrait (retour Tom v4).
// MOBILE (retour Tom v5) : bandeaux DETAILS produits, rectangles larges et peu hauts, empiles
// (bouton, manche, col, logo, drapeau brode). Chaque bandeau = un detail.
// Lookbook (retour Tom v14) : DESKTOP = images verticales dediees (detailv-*), MOBILE = anciennes
// images horizontales (detail-*), que Tom trouvait tres bien. Deux sources par detail.
const LOOKBOOK_DETAILS = [
  { desk: "/img/detailv-monogramme.webp", mob: "/img/detail-monogramme.webp", titre: "Monogramme", sous: "Brodé au fil d'or" },
  { desk: "/img/detailv-drapeau.webp", mob: "/img/detail-drapeau.webp", titre: "Drapeau", sous: "Cousu sur la manche" },
  { desk: "/img/detailv-col.webp", mob: "/img/detail-col.webp", titre: "Col & boutons", sous: "Sélectionnés un à un" },
  { desk: "/img/detailv-yole.webp", mob: "/img/detail-yole.webp", titre: "La Yole", sous: "Sérigraphie or" },
  { desk: "/img/detailv-fente.webp", mob: "/img/detail-fente.webp", titre: "Fentes", sous: "Finitions latérales" },
  { desk: "/img/detailv-pique.webp", mob: "/img/detail-pile.webp", titre: "Piqué", sous: "Coton premium" },
];

function Lookbook() {
  return (
    <section className="relative overflow-hidden bg-[#0A0908]">
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="text-center">
          <Kicker>Le lookbook</Kicker>
          <h2 className="font-display mt-4 text-[clamp(1.9rem,4.5vw,3rem)] text-[#F5F1E8]">
            Porté par la tribu
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[0.95rem] leading-relaxed text-[#F5F1E8]/80">
            Des pièces pensées pour être portées au quotidien, de Fort-de-France à
            l&apos;Hexagone. Le même fil d&apos;or, la même fierté, où que vous soyez.
          </p>
        </Reveal>

        {/* DESKTOP : 6 details en COLONNES verticales, alignes sur UNE ligne, tout sur un ecran.
            Label propre en bas : titre court (1 ligne) + sous-titre fin, filet dore. */}
        <Reveal className="mt-12 hidden md:block">
          <div className="grid grid-cols-6 gap-3">
            {LOOKBOOK_DETAILS.map((d) => (
              <div key={d.desk} className="group relative overflow-hidden border border-white/70">
                <img
                  src={d.desk}
                  alt={`${d.titre}, ${d.sous}`}
                  loading="lazy"
                  className="h-[60vh] max-h-[540px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/25 to-transparent" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-center">
                  <p className="font-display text-[0.92rem] font-semibold leading-tight text-[#F5F1E8]">{d.titre}</p>
                  <p className="mt-1 text-[0.6rem] uppercase tracking-[0.1em] text-[#E3C888]">{d.sous}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* MOBILE : anciennes images HORIZONTALES (detail-*, tres bien selon Tom), trait blanc */}
        <Reveal className="mt-10 md:hidden">
          <div className="space-y-3">
            {LOOKBOOK_DETAILS.map((d) => (
              <div key={d.mob} className="relative overflow-hidden border border-white/70">
                <img
                  src={d.mob}
                  alt={`${d.titre}, ${d.sous}`}
                  width={1344}
                  height={400}
                  loading="lazy"
                  className="h-[96px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0908] via-[#0A0908]/35 to-transparent" aria-hidden="true" />
                <div className="absolute inset-y-0 left-5 flex flex-col justify-center">
                  <p className="font-display text-[1rem] font-semibold leading-tight text-[#F5F1E8]">{d.titre}</p>
                  <p className="mt-0.5 text-[0.6rem] uppercase tracking-[0.12em] text-[#E3C888]">{d.sous}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-10 text-center">
          <Cta href="/boutique" variante="or">
            Voir la collection
          </Cta>
        </Reveal>
      </div>
    </section>
  );
}

/* ========================= 5. FINITIONS ========================= */
// INSPIRATION: pattern approuve par Tom (regle 52) : bandeau 3 colonnes separees par filets dores
// verticaux, medaillons Iconify, sur image de fond coherente avec overlay modere. Fond broderie IA.
function Finitions() {
  // Icones UNIFORMES (retour Tom v9) : meme style Phosphor, meme couleur or, currentColor.
  // Le drapeau = vrai drapeau Martinique rouge/vert/noir. Ciseaux pour les coupes.
  const colonnes = [
    {
      icone: <IconAiguille />,
      titre: "Broderie au fil d'or",
      texte: "Le monogramme UP, brodé relief, jamais imprimé.",
    },
    {
      icone: <IconDrapeauMartinique className="text-[1.6rem]" />,
      titre: "Le drapeau sur la manche",
      texte: "Rouge, vert, noir. Cousu, pas collé.",
    },
    {
      icone: <IconCiseaux />,
      titre: "Coupes travaillées",
      texte: "Col structuré, fentes latérales, boutons sélectionnés un à un.",
    },
  ];
  return (
    <section className="grain relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage:`url(/img/fond-broderie.webp)` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#0A0908]/60" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="text-center">
          <Kicker>Le détail fait la différence</Kicker>
          <h2 className="font-display mt-3 text-[clamp(1.9rem,4.5vw,3rem)] text-[#F5F1E8]">
            Des finitions qui se remarquent
          </h2>
        </Reveal>
        {/* Carte sur fond BLANC (retour Tom v3) pour la lisibilite du texte */}
        <Reveal className="mt-12">
          <div className="grid divide-y divide-[#191610]/10 border border-[#191610]/10 bg-white md:grid-cols-3 md:divide-x md:divide-y-0">
            {colonnes.map((c) => (
              <div key={c.titre} className="flex flex-col items-center px-8 py-9 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#D4B36A]/60 bg-[#0A0908] text-2xl text-[#D4B36A]">
                  {c.icone}
                </span>
                <p className="font-display mt-5 text-lg text-[#191610]">{c.titre}</p>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-[#191610]/70">{c.texte}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="mt-10 text-center">
          <Cta href="/notre-histoire#savoir-faire" variante="contour-or">
            Voir le savoir-faire
          </Cta>
        </Reveal>
      </div>
    </section>
  );
}

/* ========================= 6. HISTOIRE ========================= */
// INSPIRATION: screen Pinterest beauty salon (lu via Read) : split texte / portrait avec accents
// dores chaleureux + jeehaans section histoire. Portrait fondateur genere IA. Fond cote IA voile.
function Histoire() {
  return (
    <section className="relative overflow-hidden bg-[#E5DCC9]">
      {/* Fond TEXTURE (retour Tom v3) au lieu de la photo cote : papier sable, comme Pourquoi la tribu */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage:`url(/img/fond-papier.webp)` }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-x-14 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="order-1">
          <Reveal className="relative">
            <span
              className="font-display pointer-events-none absolute -top-8 left-0 select-none text-[clamp(3.5rem,10vw,7rem)] uppercase text-[#191610] opacity-[0.05]"
              aria-hidden="true"
            >
              Héritage
            </span>
            <Kicker sombre={false}>Notre histoire</Kicker>
            <h2 className="font-display mt-3 text-[clamp(1.9rem,4.5vw,3rem)] text-[#191610]">
              Parti à 11 ans. <span className="italic text-[#9C7E32]">Revenu pour transmettre.</span>
            </h2>
            <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-[#191610]/78">
              Érick quitte la Martinique à 11 ans pour l&apos;Hexagone. Il y construit sa
              vie, sa carrière, sa famille, sans jamais oublier d&apos;où il vient. En
              2022, il rentre au pays. Uncommon People Tribe est né de ce retour : une
              marque pour tous ceux qui portent leurs racines, ici ou là-bas.
            </p>
          </Reveal>
        </div>
        <Reveal className="order-2 mt-10 md:mt-0">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -right-3 -top-3 h-full w-full border border-[#D4B36A]" aria-hidden="true" />
            <img
              src="/img/portrait-erick.webp"
              alt="Érick, fondateur de la marque, sur la côte martiniquaise"
              width={896}
              height={1152}
              loading="lazy"
              className="relative w-full object-cover"
            />
          </div>
          <div className="mt-8 text-center">
            <Cta href="/notre-histoire" variante="or">
              Lire notre histoire
            </Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ======================= 7. POURQUOI LA TRIBU ======================= */
// INSPIRATION: regle 22 (retours Tom) : accordeons fins a la place d'une grille de cartes,
// layout volontairement different des autres sections. Fond feuillage grave IA.
function PourquoiTribu() {
  const [ouvert, setOuvert] = useState<number | null>(0);
  const raisons = [
    {
      titre: "Née en Martinique",
      texte: "Créée et pilotée depuis l'île, pas une licence lointaine. Le fondateur choisit chaque modèle, chaque couleur, chaque finition.",
    },
    {
      titre: "Séries limitées",
      texte: "Des petites productions maîtrisées, jamais de stock infini. Quand un modèle part, il ne revient pas forcément.",
    },
    {
      titre: "Qualité d'abord",
      texte: "Textiles épais, broderies relief, finitions contrôlées pièce par pièce avant l'envoi.",
    },
    {
      titre: "Une communauté",
      texte: "Porter la tribu, c'est porter un morceau de Martinique, ici comme dans l'Hexagone.",
    },
  ];
  return (
    <section className="relative overflow-hidden bg-[#D6CBB2]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage:`url(/img/fond-feuillage.webp)` }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 md:py-28">
        <Reveal className="text-center">
          <Kicker sombre={false}>Pourquoi la tribu</Kicker>
          <h2 className="font-display mt-3 text-[clamp(1.9rem,4.5vw,3rem)] text-[#191610]">
            Une marque de chez nous
          </h2>
        </Reveal>
        <Reveal className="mt-10">
          <div className="divide-y divide-[#191610]/15 border border-[#191610]/20 bg-[#F0EAE0]/85 backdrop-blur-sm">
            {raisons.map((r, i) => (
              <div key={r.titre}>
                <button
                  onClick={() => setOuvert(ouvert === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  aria-expanded={ouvert === i}
                >
                  <span className="font-display text-lg text-[#191610]">{r.titre}</span>
                  <motion.span
                    animate={{ rotate: ouvert === i ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: EASE_LUXE }}
                    className="text-xl leading-none text-[#9C7E32]"
                    aria-hidden="true"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {ouvert === i && (
                    <motion.div
                      key="contenu"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE_LUXE }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-[0.9rem] leading-relaxed text-[#191610]/75">{r.texte}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="mt-10 text-center">
          <Cta href="/boutique" variante="noir">
            Rejoindre la tribu
          </Cta>
        </Reveal>
      </div>
    </section>
  );
}

/* ========================= 8. NEWSLETTER ========================= */
// INSPIRATION: WayFarer + jeehaans (newsletter sur image sombre) et regle 61 : formulaire
// immediatement identifiable, label visible, carte opaque + blur. Fond mer au crepuscule IA.
function Newsletter() {
  const { statut, message, inscrire } = useNewsletter();
  return (
    <section id="newsletter" className="grain relative scroll-mt-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage:`url(/img/fond-mer.webp)` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#0A0908]/55" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-2xl px-6 py-20 text-center md:py-28">
        <Reveal>
          <Kicker>Newsletter</Kicker>
          <h2 className="font-display mt-3 text-[clamp(1.9rem,4.5vw,3rem)] text-[#F5F1E8]">
            Entrez dans <span className="italic text-[#E3C888]">la tribu</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[0.95rem] leading-relaxed text-white">
            Nouvelles collections, éditions limitées, retours en stock. Un mail de temps
            en temps, jamais de spam.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <form
            onSubmit={inscrire}
            className="relative mx-auto mt-9 max-w-md bg-[#0A0908]/80 p-7 text-left backdrop-blur-xl"
          >
            <CadreCoins />
            <label htmlFor="email" className="block text-[0.68rem] uppercase tracking-[0.18em] text-white">
              Votre adresse e-mail
            </label>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={statut === "envoi" || statut === "ok"}
                placeholder="erick@exemple.fr"
                className="w-full border border-[#F5F1E8]/30 bg-[#14120E] px-4 py-3.5 text-[0.9rem] text-[#F5F1E8] placeholder:text-[#F5F1E8]/40 focus:border-[#D4B36A] focus:outline-none"
              />
              <Cta type="submit" variante="or" disabled={statut === "envoi" || statut === "ok"} className="shrink-0">
                {statut === "envoi" ? "Inscription…" : "S'inscrire"}
              </Cta>
            </div>
            <p
              className={`mt-3 text-[0.72rem] ${statut === "erreur" ? "text-[#ff9a9a]" : "text-white"}`}
              role={statut === "erreur" ? "alert" : "status"}
              aria-live="polite"
            >
              {message || "Désinscription en un clic."}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

// Bouton flottant qui APPARAIT une fois le hero depasse (retour Tom : il le veut au scroll).
function CtaFlottant() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: EASE_LUXE }}
          className="fixed bottom-5 right-5 z-40 md:hidden"
        >
          <Cta href="/boutique" variante="or">
            Boutique
          </Cta>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function HomeSections() {
  return (
    <main>
      <Hero />
      <PiecesPhares />
      <Collections />
      <Lookbook />
      <Finitions />
      <Histoire />
      <PourquoiTribu />
      <Newsletter />
      <CtaFlottant />
    </main>
  );
}
