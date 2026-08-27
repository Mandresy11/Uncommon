"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

type Critere = {
  label: string;
  heritage: string;
  signature: string;
  Icone: (props: IconProps) => React.ReactNode;
};

const iconProps = (props: IconProps) => ({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

function IconDiamant(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M6.5 3.5h11L22 9l-10 12L2 9l4.5-5.5Z" />
      <path d="m2.5 9 6-1.5L12 20.5 15.5 7.5 21.5 9M6.5 3.5l2 4h7l2-4" />
    </svg>
  );
}

function IconMatiere(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M5 3v18M9.7 3v18M14.3 3v18M19 3v18M3 5h18M3 9.7h18M3 14.3h18M3 19h18" />
      <path d="m3 7.3 18 9.4M3 16.7 21 7.3" opacity=".55" />
    </svg>
  );
}

function IconCoupe(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="m8 4-4 2-2 5 4 2v7h12v-7l4-2-2-5-4-2c-.4 2-1.8 3-4 3S8.4 6 8 4Z" />
    </svg>
  );
}

function IconFinition(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="m4 20 12.6-16a2.4 2.4 0 0 1 3.6 3.2L6 21" />
      <path d="m15.5 5.4 3.1 3.1M7.5 14.8 4 11.5M10 12l-3.5-3.5M13 8.5 9.5 5" />
    </svg>
  );
}

function IconCouleurs(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M12 3a9 9 0 1 0 0 18h1.3a2 2 0 0 0 1.2-3.6 1.7 1.7 0 0 1 1-3.1H18a3 3 0 0 0 3-3C21 6.7 17 3 12 3Z" />
      <circle cx="7.5" cy="10" r=".8" fill="currentColor" stroke="none" />
      <circle cx="10" cy="6.8" r=".8" fill="currentColor" stroke="none" />
      <circle cx="14" cy="6.8" r=".8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconPrix(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M3 12 12 3h7l2 2v7l-9 9-9-9Z" />
      <circle cx="17" cy="7" r="1" />
    </svg>
  );
}

function IconOccasion(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M4 5h16v16H4zM4 9h16M8 3v4M16 3v4" />
      <path d="m9 15 2 2 4-5" />
    </svg>
  );
}

function IconBalance(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M12 3v18M8 21h8M12 5 5 8m14-3-7 3M5 8l-2.5 5a3 3 0 0 0 5 0ZM19 5l2.5 8a3 3 0 0 1-5 0Z" />
    </svg>
  );
}

// 4 criteres cles visibles directement (registre mobile), les autres restent dans l'accordeon.
const CRITERES_CLES: Critere[] = [
  { label: "Pièce phare", heritage: "Tee-shirt La Yole", signature: "Polo Signature UP", Icone: IconDiamant },
  { label: "Matière", heritage: "Coton peigné épais", signature: "Piqué premium, 95 % coton / 5 % élasthanne", Icone: IconMatiere },
  { label: "Finition", heritage: "Yole sérigraphiée or", signature: "Monogramme UP brodé or", Icone: IconFinition },
  { label: "Pour quelle occasion", heritage: "Quotidien, décontracté", signature: "Élégant, plus habillé", Icone: IconOccasion },
];

const CRITERES_DETAIL: Critere[] = [
  { label: "Coupe", heritage: "Droite", signature: "Normale", Icone: IconCoupe },
  { label: "Couleurs", heritage: "Noir, Sable, Olive", signature: "Noir, Vert, Rouge", Icone: IconCouleurs },
  { label: "Prix", heritage: "39 €", signature: "60 €", Icone: IconPrix },
];

function Ornement({ court = false }: { court?: boolean }) {
  return (
    <span className="inline-flex items-center" aria-hidden="true">
      <span className="mx-1.5 h-2 w-2 rotate-45 border border-[#d0a841]" />
    </span>
  );
}

type Collection = "heritage" | "signature";

const COLLECTIONS = {
  heritage: {
    nom: "Héritage",
    image: "/img/tee-noir.webp",
    alt: "Tee-shirt noir La Yole de la collection Héritage",
    accroche: "L’essence de la tribu.",
    description: "Un basique brut et authentique, pensé pour le quotidien.",
    href: "/produit/tee-shirt-la-yole",
  },
  signature: {
    nom: "Signature",
    image: "/img/polo-noir.webp",
    alt: "Polo noir au monogramme doré de la collection Signature",
    accroche: "L’élégance de la tribu.",
    description: "Une pièce raffinée, subtilement distinctive.",
    href: "/produit/polo-signature-up",
  },
} as const;

function CarteCollection({ collection }: { collection: Collection }) {
  const contenu = COLLECTIONS[collection];
  const signature = collection === "signature";
  const [detailsOuverts, setDetailsOuverts] = useState(false);

  return (
    <article className="relative flex min-w-0 flex-col overflow-hidden rounded-[0.9rem] border border-[#a98539]/65 bg-[radial-gradient(circle_at_50%_15%,#1a1916_0%,#11110f_43%,#0c0c0b_100%)] px-5 pb-7 pt-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.025),0_24px_70px_rgba(0,0,0,0.3)] sm:px-8 sm:pb-8 sm:pt-6">
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,rgba(255,255,255,0.025),transparent_35%,rgba(196,151,52,0.025)_70%,transparent)]" aria-hidden="true" />

      <div className="relative grid items-center gap-4 border-b border-[#a98539]/70 pb-5 sm:grid-cols-[minmax(0,0.92fr)_minmax(13.5rem,1.08fr)] sm:gap-6">
        <div className="relative mx-auto h-44 w-full max-w-[16.5rem] overflow-hidden bg-[#090908] sm:h-[11.25rem]">
          <Image
            src={contenu.image}
            alt={contenu.alt}
            fill
            sizes="(min-width: 1280px) 250px, (min-width: 640px) 38vw, calc(100vw - 80px)"
            className="object-cover object-[50%_58%] contrast-[1.16] saturate-[0.65] brightness-[0.68]"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, black 13%, black 75%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 13%, black 75%, transparent 100%)",
            }}
          />
          <span className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(8,8,7,0.18)_55%,#090908_100%)]" aria-hidden="true" />
        </div>

        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h3 className={`font-faq text-[clamp(2rem,3vw,2.65rem)] font-medium uppercase leading-none tracking-[0.025em] ${signature ? "text-[#d9b34e]" : "text-[#f5f1e8]"}`}>
            {contenu.nom}
          </h3>
          <span className="mt-5 flex justify-center sm:justify-start"><Ornement court /></span>
          <p className="mt-6 text-[0.93rem] leading-[1.65] text-[#f5f1e8]/82">
            {contenu.accroche}<br />
            {contenu.description}
          </p>
        </div>
      </div>

      <dl className="relative flex-1">
        {CRITERES_CLES.map(({ label, heritage, signature: valeurSignature, Icone }) => (
          <div key={label} className="grid min-h-[3rem] grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] items-center gap-3 border-b border-[#f5f1e8]/8 py-2.5 sm:gap-5">
            <dt className="flex min-w-0 items-center gap-3 text-[0.66rem] font-semibold uppercase leading-[1.35] tracking-[0.1em] text-[#dbb343] sm:text-[0.7rem]">
              <Icone className="h-[1.35rem] w-[1.35rem] shrink-0" />
              <span>{label}</span>
            </dt>
            <dd className="text-[0.73rem] leading-[1.45] text-[#f5f1e8]/88 sm:text-[0.78rem]">
              {signature ? valeurSignature : heritage}
            </dd>
          </div>
        ))}

        {detailsOuverts &&
          CRITERES_DETAIL.map(({ label, heritage, signature: valeurSignature, Icone }) => (
            <div key={label} className="grid min-h-[3rem] grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] items-center gap-3 border-b border-[#f5f1e8]/8 py-2.5 sm:gap-5">
              <dt className="flex min-w-0 items-center gap-3 text-[0.66rem] font-semibold uppercase leading-[1.35] tracking-[0.1em] text-[#dbb343] sm:text-[0.7rem]">
                <Icone className="h-[1.35rem] w-[1.35rem] shrink-0" />
                <span>{label}</span>
              </dt>
              <dd className="text-[0.73rem] leading-[1.45] text-[#f5f1e8]/88 sm:text-[0.78rem]">
                {signature ? valeurSignature : heritage}
              </dd>
            </div>
          ))}
      </dl>

      <button
        type="button"
        onClick={() => setDetailsOuverts((v) => !v)}
        aria-expanded={detailsOuverts}
        className="flex min-h-[2.75rem] items-center justify-between border-b border-[#f5f1e8]/8 py-2.5 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[#dbb343] sm:text-[0.7rem]"
      >
        <span>Voir tous les détails</span>
        <span className={`text-base transition-transform ${detailsOuverts ? "rotate-45" : ""}`} aria-hidden="true">+</span>
      </button>

      <Link
        href={contenu.href}
        className="relative mt-6 flex min-h-[3.55rem] items-center justify-center gap-2 rounded-[0.35rem] border border-[#c89f3d] px-4 text-center text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#e0b94e] transition-colors duration-300 hover:bg-[#d4aa45] hover:text-[#0a0908] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e3c888] sm:text-[0.78rem]"
      >
        Découvrir {contenu.nom}
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}

function Separateur() {
  return (
    <div className="relative hidden h-28 items-center justify-center lg:flex lg:h-auto lg:min-h-full" aria-hidden="true">
      <span className="absolute left-0 right-0 h-px bg-[#b48d37]/70 lg:inset-y-3 lg:left-1/2 lg:right-auto lg:h-auto lg:w-px lg:-translate-x-1/2" />
      <span className="relative flex h-[5.8rem] w-[5.8rem] items-center justify-center rounded-full border border-[#c49b3c] bg-[#090908] font-faq text-[2.75rem] leading-none text-[#d8b552] shadow-[0_0_0_9px_#090908]">
        UP
      </span>
    </div>
  );
}

export function Comparatif() {
  const [ongletActif, setOngletActif] = useState<Collection>("heritage");

  return (
    <section className="grain relative isolate overflow-hidden bg-[#090908] px-4 pb-10 pt-7 sm:px-6 sm:pb-14 sm:pt-10" aria-labelledby="titre-comparatif">
      <span className="pointer-events-none absolute left-1/2 top-[42%] -z-10 h-[42rem] w-[90rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse,rgba(105,82,35,0.08)_0%,transparent_64%)]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[87.5rem]">
        <header className="text-center">
          <p className="sr-only">Aide au choix</p>
          <h2 id="titre-comparatif" className="font-faq text-[clamp(2.65rem,5vw,4.2rem)] font-medium uppercase leading-[0.95] tracking-[0.01em] text-[#f5f1e8]">
            Héritage <span className="italic text-[#dfbf67]">ou</span> Signature
          </h2>
          <div className="mx-auto mt-5 flex justify-center"><Ornement /></div>
          <p className="mx-auto mt-5 max-w-xl text-[0.92rem] leading-[1.75] text-[#f5f1e8]/74 sm:text-[1.02rem]">
            Deux collections, deux façons de porter la tribu.<br className="hidden sm:block" />
            Voici de quoi t’aider à choisir.
          </p>
        </header>

        {/* Onglets mobile uniquement : une seule carte affichee a la fois */}
        <div className="mt-9 flex items-center justify-center gap-8 lg:hidden">
          {(["heritage", "signature"] as const).map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setOngletActif(c)}
              className={`border-b-2 pb-2 text-[1.05rem] font-semibold uppercase tracking-[0.08em] transition-colors ${
                ongletActif === c
                  ? "border-[#d4b36a] text-[#f5f1e8]"
                  : "border-transparent text-[#f5f1e8]/45"
              }`}
            >
              {COLLECTIONS[c].nom}
            </button>
          ))}
        </div>

        <div className="mt-6 grid items-stretch lg:mt-8 lg:grid-cols-[minmax(0,1fr)_6.5rem_minmax(0,1fr)] lg:gap-4">
          <div className={ongletActif === "heritage" ? "block" : "hidden lg:block"}>
            <CarteCollection collection="heritage" />
          </div>
          <Separateur />
          <div className={ongletActif === "signature" ? "block" : "hidden lg:block"}>
            <CarteCollection collection="signature" />
          </div>
        </div>

        {/* Pagination mobile uniquement */}
        <div className="mt-6 flex items-center justify-center gap-2 lg:hidden" aria-hidden="true">
          {(["heritage", "signature"] as const).map((c) => (
            <span
              key={c}
              className={`h-2 w-2 rounded-full transition-colors ${
                ongletActif === c ? "bg-[#d4b36a]" : "bg-[#f5f1e8]/25"
              }`}
            />
          ))}
        </div>

        {/* Rappel "Tu hesites ?" */}
        <div className="mx-auto mt-9 flex max-w-md items-center justify-center gap-4 border-t border-[#f5f1e8]/10 pt-6 text-center lg:max-w-none">
          <span className="shrink-0 text-[#dbb343]"><IconBalance className="h-6 w-6" /></span>
          <p className="text-left text-[0.82rem] leading-relaxed text-[#f5f1e8]/70">
            <span className="block font-semibold uppercase tracking-[0.1em] text-[#f5f1e8]">Tu hésites ?</span>
            Héritage = plus casual · Signature = plus élégant
          </p>
        </div>
      </div>
    </section>
  );
}
