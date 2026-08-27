"use client";

// Galerie cliquable : chaque vignette ouvre une lightbox plein ecran (navigation clavier +
// boutons, fermeture par croix/fond/Echap), meme registre visuel que le popup newsletter.
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconFermer, IconGauche, IconDroite } from "@/components/icons";

const EASE_LUXE = [0.22, 1, 0.36, 1] as const;

type Categorie = "produits" | "details" | "campagne";
type Image = { src: string; alt: string; tall: boolean; categorie: Categorie };

const FILTRES: { valeur: Categorie | "tous"; label: string }[] = [
  { valeur: "tous", label: "Tous" },
  { valeur: "produits", label: "Produits" },
  { valeur: "details", label: "Détails" },
  { valeur: "campagne", label: "Campagne" },
];

export function Galerie({ images }: { images: Image[] }) {
  const [filtre, setFiltre] = useState<Categorie | "tous">("tous");
  const [actif, setActif] = useState<number | null>(null);

  const visibles = filtre === "tous" ? images : images.filter((img) => img.categorie === filtre);

  const fermer = () => setActif(null);
  const precedent = () => setActif((i) => (i === null ? null : (i - 1 + visibles.length) % visibles.length));
  const suivant = () => setActif((i) => (i === null ? null : (i + 1) % visibles.length));

  useEffect(() => {
    if (actif === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") fermer();
      if (e.key === "ArrowLeft") precedent();
      if (e.key === "ArrowRight") suivant();
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
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {FILTRES.map((f) => (
          <button
            key={f.valeur}
            type="button"
            onClick={() => {
              setFiltre(f.valeur);
              setActif(null);
            }}
            className={`border px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] transition-colors ${
              filtre === f.valeur
                ? "border-[#191610] bg-[#191610] text-[#F5F1E8]"
                : "border-[#191610]/25 text-[#191610]/70 hover:border-[#191610]/60"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
        {visibles.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActif(i)}
            aria-label={`Agrandir : ${img.alt}`}
            className="group block w-full break-inside-avoid overflow-hidden border border-[#191610]/12"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className={`w-full cursor-zoom-in object-cover transition-transform duration-500 group-hover:scale-[1.04] ${
                img.tall ? "aspect-[4/5]" : "aspect-[16/9]"
              }`}
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {actif !== null && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label={visibles[actif].alt}
          >
            <div className="absolute inset-0 bg-[#0A0908]/92 backdrop-blur-sm" onClick={fermer} aria-hidden="true" />

            <button
              onClick={fermer}
              aria-label="Fermer"
              className="absolute right-5 top-5 z-10 text-2xl text-[#F5F1E8]/80 transition-colors hover:text-[#E3C888]"
            >
              <IconFermer />
            </button>

            <button
              onClick={precedent}
              aria-label="Image précédente"
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-xl text-[#F5F1E8]/80 transition-colors hover:text-[#E3C888] md:left-6"
            >
              <IconGauche />
            </button>
            <button
              onClick={suivant}
              aria-label="Image suivante"
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center text-xl text-[#F5F1E8]/80 transition-colors hover:text-[#E3C888] md:right-6"
            >
              <IconDroite />
            </button>

            <motion.div
              key={actif}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, ease: EASE_LUXE }}
              className="relative z-[1] max-h-[85vh] max-w-4xl"
            >
              <img
                src={visibles[actif].src}
                alt={visibles[actif].alt}
                className="max-h-[85vh] w-auto border border-[#D4B36A]/40 object-contain"
              />
              <p className="mt-3 text-center text-[0.72rem] uppercase tracking-[0.16em] text-[#F5F1E8]/70">
                {visibles[actif].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
