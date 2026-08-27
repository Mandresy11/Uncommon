"use client";

// INSPIRATION: planche-desktop.png (concept 1, boutons or pleins) + regles boutons luxe 55/59/74
// Bouton premium sobre : aplat or / bordure or, uppercase tracking large, coins droits.
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE_LUXE = [0.22, 1, 0.36, 1] as const;

type CtaProps = {
  href?: string;
  children: ReactNode;
  variante?: "or" | "contour-or" | "noir" | "contour-noir";
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  taille?: "normal" | "geant";
};

const styles: Record<string, string> = {
  or: "bg-[#D4B36A] text-[#0A0908] hover:bg-[#E3C888]",
  "contour-or":
    "border border-[#D4B36A] bg-[#0A0908]/40 text-[#E3C888] backdrop-blur-sm hover:bg-[#D4B36A] hover:text-[#0A0908]",
  noir: "bg-[#191610] text-[#F0EAE0] hover:bg-[#0A0908]",
  "contour-noir":
    "border border-[#191610]/60 bg-transparent text-[#191610] hover:bg-[#191610] hover:text-[#F0EAE0]",
};

const base =
  "btn-cut relative inline-flex min-h-12 items-center justify-center px-8 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 cursor-pointer whitespace-nowrap";

// Variante GEANTE (retour Tom v11) : boutons hero tres grands, texte plus gros, du padding
// autour du texte (le texte ne remplit pas tout), hauteur mesuree.
const geant =
  "btn-cut relative inline-flex w-full items-center justify-center px-3 py-4 text-center text-[0.6rem] font-semibold uppercase leading-tight tracking-[0.12em] transition-colors duration-300 cursor-pointer sm:px-8 sm:py-7 sm:text-[0.95rem] sm:tracking-[0.24em] sm:whitespace-nowrap";

// Bouton travaille (regle 77) : coin coupe + liseres internes (btn-cut). Le petit carre a droite
// a ete RETIRE (retour Tom v5).
export function Cta({ href, children, variante = "or", type = "button", disabled = false, className = "", taille = "normal" }: CtaProps) {
  const cls = `${taille === "geant" ? geant : base} ${styles[variante]} ${disabled ? "cursor-wait opacity-60" : ""} ${className}`;
  // Le wrapper prend toute la largeur en variante geante pour que le bouton remplisse son
  // conteneur (ex : 45% du hero) au lieu de se limiter a la largeur du texte (bug v14).
  const wrapper = taille === "geant" ? "flex w-full" : "inline-flex";
  if (href) {
    return (
      <span className={wrapper}>
        <Link href={href} className={cls}>
          <span className="relative z-10">{children}</span>
        </Link>
      </span>
    );
  }
  return (
    <motion.button whileTap={disabled ? undefined : { scale: 0.97 }} transition={{ ease: EASE_LUXE, duration: 0.3 }} type={type} disabled={disabled} className={cls}>
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

// Reveal REVERSIBLE (retour Tom v18) : anime a l'entree quand on scrolle vers le bas ET rejoue
// en sens inverse quand on remonte (pas de once). Direction variable pour varier les effets.
type RevealDir = "up" | "down" | "left" | "right" | "scale" | "blur";

const hidden: Record<RevealDir, Record<string, number>> = {
  up: { opacity: 0, y: 40 },
  down: { opacity: 0, y: -40 },
  left: { opacity: 0, x: -50 },
  right: { opacity: 0, x: 50 },
  scale: { opacity: 0, scale: 0.9 },
  blur: { opacity: 0, y: 30 },
};
const shown = { opacity: 1, y: 0, x: 0, scale: 1 };

export function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
  amount = 0.25,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: RevealDir;
  amount?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      initial={hidden[direction]}
      whileInView={shown}
      viewport={{ amount }}
      transition={{ duration: 0.75, delay, ease: EASE_LUXE }}
      className={className}
      style={direction === "blur" ? { willChange: "transform, opacity, filter" } : undefined}
    >
      {children}
    </motion.div>
  );
}

// Stagger reversible : conteneur qui cascade ses enfants (RevealItem), dans les 2 sens.
export function RevealGroup({
  children,
  className = "",
  amount = 0.2,
  stagger = 0.09,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className = "",
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: RevealDir;
}) {
  return (
    <motion.div
      className={className}
      variants={{ hidden: hidden[direction], visible: shown }}
      transition={{ duration: 0.65, ease: EASE_LUXE }}
    >
      {children}
    </motion.div>
  );
}

// Kicker de section (retour Tom 24/07) : label centre entoure d'un contour arrondi type gelule,
// moitie gauche ROUGE et moitie droite VERTE (couleurs de la Martinique). SVG pour le degrade net
// rouge/vert sur le trait. Le texte reste dore/sombre selon le fond.
export function Kicker({ children, sombre = true }: { children: ReactNode; sombre?: boolean }) {
  // Pilule blanche a bordure rouge (gauche) / verte (droite), Martinique. La bordure suit
  // toujours parfaitement la pilule quelle que soit la largeur (double-background, pas de SVG etire).
  return (
    <span
      className="relative inline-flex items-center justify-center rounded-full px-6 py-2.5 shadow-[0_2px_14px_rgba(10,9,8,0.12)]"
      style={{
        background:
          "linear-gradient(#fff,#fff) padding-box, linear-gradient(90deg,#C8202E 0%,#C8202E 50%,#1E7A3C 50%,#1E7A3C 100%) border-box",
        border: "1.5px solid transparent",
      }}
    >
      <span className="font-display relative whitespace-nowrap text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#9C7E32]">
        {children}
      </span>
    </span>
  );
}
