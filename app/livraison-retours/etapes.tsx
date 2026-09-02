"use client";

import Image from "next/image";
import { Reveal, RevealGroup, RevealItem, Kicker } from "@/components/cta";
import { IconPanier, IconColis, IconCamion, IconCoche } from "@/components/icons";

const ETAPES = [
  {
    icone: IconPanier,
    titre: "Commande",
    texte: "Tu choisis ta pièce, ta couleur, ta taille.",
    largeur: "lg:max-w-[13.5rem]",
  },
  {
    icone: IconColis,
    titre: "Préparation",
    texte: "Contrôle qualité et emballage soigné, pièce par pièce.",
    largeur: "lg:max-w-[15rem]",
  },
  {
    icone: IconCamion,
    titre: "Expédition ou retrait",
    texte: "Envoi vers ton adresse, ou retrait en main propre.",
    largeur: "lg:max-w-[15rem]",
  },
  {
    icone: IconCoche,
    titre: "Réception",
    texte: "Tu portes la tribu. 14 jours pour changer d’avis.",
    largeur: "lg:max-w-[17rem]",
  },
];

export function Etapes() {
  return (
    <section
      className="grain relative isolate overflow-hidden bg-[#070605] lg:min-h-[50.5rem]"
      aria-labelledby="titre-etapes-commande"
    >
      <Image
        src="/img/fond-hero.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-30 scale-[1.04] object-cover object-[58%_center]"
      />
      <span
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(4,4,3,0.82)_0%,rgba(6,5,4,0.66)_36%,rgba(6,5,4,0.48)_67%,rgba(4,4,3,0.63)_100%)]"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(0,0,0,0.12)_55%,rgba(0,0,0,0.58)_100%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-[105rem] flex-col px-6 py-20 sm:px-10 lg:min-h-[50.5rem] lg:px-14 lg:pb-24 lg:pt-[13.0625rem]">
        <Reveal className="text-center" amount={0.35}>
          <Kicker>De la commande à la porte</Kicker>
          <h2
            id="titre-etapes-commande"
            className="font-display mt-9 text-[clamp(2rem,3.8vw,3.25rem)] font-normal uppercase leading-[1.08] text-[#F5F1E8] [text-shadow:0_3px_24px_rgba(0,0,0,0.65)]"
          >
            Les étapes de ta commande
          </h2>
        </Reveal>

        <RevealGroup
          className="mx-auto mt-16 grid w-full gap-9 lg:mt-[6.5rem] lg:max-w-[96.25rem] lg:grid-cols-[0.95fr_0.95fr_1.05fr_1.05fr] lg:gap-0"
          amount={0.18}
          stagger={0.1}
        >
          {ETAPES.map((etape, index) => {
            const Icone = etape.icone;

            return (
              <RevealItem
                key={etape.titre}
                className="relative flex gap-5 text-left lg:block lg:text-center"
              >
                {index < ETAPES.length - 1 && (
                  <>
                    <span
                      className="pointer-events-none absolute bottom-[-2.25rem] left-8 top-[4.15rem] w-px bg-[linear-gradient(180deg,#D9B85F,rgba(217,184,95,0.18))] lg:hidden"
                      aria-hidden="true"
                    />
                    <span
                      className="pointer-events-none absolute left-[calc(50%+3.75rem)] top-10 hidden h-px w-[calc(100%-7.5rem)] bg-[linear-gradient(90deg,#D9B85F,rgba(217,184,95,0.78))] lg:block"
                      aria-hidden="true"
                    />
                  </>
                )}

                <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-[#D9B85F] bg-[#0A0908]/80 text-[1.75rem] text-[#D9B85F] shadow-[0_8px_30px_rgba(0,0,0,0.38)] backdrop-blur-sm lg:mx-auto lg:h-20 lg:w-20 lg:text-[2.1rem]">
                  <Icone aria-hidden="true" />
                </span>

                <div className="pt-0.5 lg:pt-0">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.17em] text-[#E2BE58] lg:mt-5 lg:text-[0.8rem]">
                    Étape {index + 1}
                  </p>
                  <h3 className="font-display mt-2 text-[1.2rem] uppercase leading-tight text-[#F5F1E8] lg:mt-4 lg:text-[1.45rem]">
                    {etape.titre}
                  </h3>
                  <p className={`mt-2 max-w-[18rem] text-[0.86rem] leading-6 text-[#F5F1E8]/86 lg:mx-auto lg:mt-4 lg:text-[0.98rem] lg:leading-7 ${etape.largeur}`}>
                    {etape.texte}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
