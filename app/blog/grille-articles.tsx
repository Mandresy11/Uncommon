"use client";

// Grille des 4 articles du blog, cliquables : ouvre une modale plein ecran avec le contenu
// detaille de l'article. Meme registre visuel que la lightbox de la galerie (overlay sombre,
// fermeture par croix/fond/Echap).
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconFermer } from "@/components/icons";

const EASE_LUXE = [0.22, 1, 0.36, 1] as const;

export type Article = {
  titre: string;
  extrait: string;
  image: string;
  tag: string;
  contenu: string[];
};

export const ARTICLES: Article[] = [
  {
    titre: "La yole ronde, notre premier récit",
    extrait: "Pourquoi cette embarcation traditionnelle est devenue l'emblème de la collection Héritage.",
    image: "/img/fond-mer.webp",
    tag: "Culture",
    contenu: [
      "La yole ronde est une embarcation traditionnelle martiniquaise, taillée dans un tronc d'arbre, sans quille ni dérive. À son bord, un équipage soudé qui doit ramer, gouverner et gérer le vent ensemble pour ne pas chavirer.",
      "C'est ce qu'elle représente qui a guidé le choix : l'équipage, le dépassement de soi, l'équilibre entre tradition et effort collectif. Sérigraphiée en or dans le cercle Uncommon, elle devient le symbole de la collection Héritage.",
      "Chaque tee-shirt qui porte ce visuel raconte donc un peu plus que de la couture : il porte une histoire de mer, de famille et de transmission, propre à la Martinique.",
    ],
  },
  {
    titre: "Le fil d'or, un choix de finition",
    extrait: "Broder plutôt qu'imprimer : ce que ce détail change sur un vêtement premium.",
    image: "/img/detail-monogramme.webp",
    tag: "Savoir-faire",
    contenu: [
      "Sur nos polos, le monogramme UP n'est jamais imprimé : il est brodé au fil d'or, point après point. Ce choix change tout, du toucher au relief, en passant par la tenue dans le temps.",
      "Une broderie ne craquelle pas, ne s'estompe pas après quelques lavages. Elle vieillit avec la pièce, prend même plus de caractère à mesure que le tissu se patine.",
      "C'est un choix plus coûteux et plus lent qu'une sérigraphie, mais c'est celui qui correspond à l'exigence que nous voulons pour chaque pièce Signature.",
    ],
  },
  {
    titre: "Revenir en Martinique",
    extrait: "Le retour d'Érick sur son île et la naissance d'une marque de chez nous.",
    image: "/img/fond-cote.webp",
    tag: "Histoire",
    contenu: [
      "Érick quitte la Martinique à 11 ans pour l'Hexagone. Un parcours que beaucoup de Martiniquais, Guadeloupéens, Guyanais et Réunionnais connaissent : partir jeune, construire sa vie ailleurs, sans jamais oublier d'où l'on vient.",
      "En 2019, un séjour en famille le ramène au sommet de la montagne Pelée. C'est là que l'envie de rentrer prend racine pour de bon. En 2022, une mutation lui permet enfin de revenir vivre sur son île.",
      "Uncommon People Tribe naît de ce retour : une marque pour celles et ceux qui, comme lui, n'ont jamais oublié d'où ils viennent.",
    ],
  },
  {
    titre: "Porter le drapeau, avec fierté",
    extrait: "Rouge, vert, noir : le sens du drapeau cousu sur chaque manche.",
    image: "/img/detail-drapeau.webp",
    tag: "Identité",
    contenu: [
      "Rouge, vert, noir : sur chaque pièce Uncommon People Tribe, le drapeau martiniquais est cousu ou brodé sur la manche, jamais collé ni imprimé à la va-vite.",
      "C'est un choix simple mais assumé : rappeler d'où vient la maison, sans en faire un décor touristique. Un micro-accent, précis, qui se remarque de près.",
      "Porter ce drapeau sur la manche, c'est afficher discrètement une appartenance à une culture et à une histoire commune, où que l'on se trouve.",
    ],
  },
];

export function GrilleArticles() {
  const [actif, setActif] = useState<number | null>(null);

  const fermer = () => setActif(null);

  useEffect(() => {
    if (actif === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") fermer();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [actif]);

  return (
    <>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ARTICLES.map((a, i) => (
          <button
            key={a.titre}
            type="button"
            onClick={() => setActif(i)}
            className="group relative flex min-h-[24rem] flex-col justify-end overflow-hidden border border-[#191610]/10 text-left"
          >
            <img
              src={a.image}
              alt={a.titre}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/40 to-[#0A0908]/10" aria-hidden="true" />
            <span className="absolute left-4 top-4 bg-[#0A0908] px-2.5 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-[#F5F1E8]">
              {a.tag}
            </span>
            <div className="relative z-10 p-5">
              <span className="text-[0.85rem] text-[#E3C888]" aria-hidden="true">✦</span>
              <h2 className="font-display mt-2 text-[1.1rem] leading-tight text-[#F5F1E8]">
                {a.titre}
              </h2>
              <p className="mt-2 text-[0.78rem] leading-relaxed text-[#F5F1E8]/78">
                {a.extrait}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#E3C888]">
                Lire l&apos;article
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {actif !== null && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label={ARTICLES[actif].titre}
          >
            <div className="absolute inset-0 bg-[#0A0908]/90 backdrop-blur-sm" onClick={fermer} aria-hidden="true" />

            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10 }}
              transition={{ duration: 0.3, ease: EASE_LUXE }}
              className="relative z-[1] max-h-[88vh] w-full max-w-3xl overflow-y-auto border border-[#D4B36A]/40 bg-[#F5F1E8]"
            >
              <button
                onClick={fermer}
                aria-label="Fermer"
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center bg-[#0A0908] text-lg text-[#F5F1E8] transition-colors hover:bg-[#191610]"
              >
                <IconFermer />
              </button>

              <div className="relative h-64 overflow-hidden sm:h-80">
                <img
                  src={ARTICLES[actif].image}
                  alt={ARTICLES[actif].titre}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/70 via-transparent to-transparent" aria-hidden="true" />
                <span className="absolute left-5 top-5 bg-[#0A0908] px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-[#F5F1E8]">
                  {ARTICLES[actif].tag}
                </span>
              </div>

              <div className="p-6 sm:p-10">
                <h2 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] leading-tight text-[#191610]">
                  {ARTICLES[actif].titre}
                </h2>
                <div className="mt-6 space-y-4">
                  {ARTICLES[actif].contenu.map((p, i) => (
                    <p key={i} className="text-[0.92rem] leading-relaxed text-[#191610]/78">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
