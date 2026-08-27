"use client";

import Image from "next/image";
import { Reveal } from "@/components/cta";
import {
  IconAiguille,
  IconCamion,
  IconDrapeauMartinique,
  IconRetour,
} from "@/components/icons";
import styles from "./pourquoi.module.css";

const REASSURANCES = [
  {
    icone: <IconAiguille />,
    titre: "Broderie au fil d’or",
    texte: <>Le monogramme UP, brodé relief,<br className="hidden 2xl:block" /> jamais imprimé.</>,
  },
  {
    icone: <IconDrapeauMartinique className="text-[2.25rem]" />,
    titre: "Séries limitées",
    texte: <>Des petites productions maîtrisées,<br className="hidden 2xl:block" /> jamais de stock infini.</>,
  },
  {
    icone: <IconCamion />,
    titre: "Livraison large",
    texte: <>Martinique, Guadeloupe, Guyane,<br className="hidden 2xl:block" /> Hexagone, ou retrait en main propre.</>,
  },
  {
    icone: <IconRetour />,
    titre: "Retours 14 jours",
    texte: <>Article non porté, dans son<br className="hidden 2xl:block" /> emballage d’origine.</>,
  },
] as const;

function Monogramme({ grand = false }: { grand?: boolean }) {
  return (
    <span
      className={`relative block overflow-hidden ${grand ? "h-12 w-14" : "h-8 w-10"}`}
      aria-hidden="true"
    >
      <Image
        src="/img/logo-up.svg"
        alt=""
        width={grand ? 56 : 40}
        height={grand ? 48 : 32}
        className="h-full w-full scale-x-[1.72] scale-y-[2.7] object-contain"
      />
    </span>
  );
}

function PetitOrnement() {
  return (
    <span className="relative block h-5 w-5" aria-hidden="true">
      <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rotate-45 bg-[#D4B36A]" />
      <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border border-[#D4B36A]" />
      <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border border-[#D4B36A]" />
      <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-[#D4B36A]" />
    </span>
  );
}

function RailDore() {
  return (
    <div className="pointer-events-none absolute bottom-0 left-[3.9rem] top-0 z-20 hidden w-px xl:block" aria-hidden="true">
      <span className="absolute inset-x-0 top-0 h-[81.5%] bg-[#D4B36A]/70" />
      <span className="absolute left-1/2 top-[83.6%] -translate-x-1/2">
        <Monogramme grand />
      </span>
      <span className="absolute left-1/2 top-[93.2%] h-3 w-3 -translate-x-1/2 rotate-45 bg-[#E3C888]" />
    </div>
  );
}

function FiletTitre() {
  return (
    <span className="mt-9 inline-flex items-center" aria-hidden="true">
      <span className="h-3 w-3 rotate-45 border-2 border-[#D4B36A] bg-[#0A0908]" />
    </span>
  );
}

function PlaqueEngagements() {
  return (
    <div className={`${styles.plaqueFrame} relative mx-auto w-full max-w-[51.75rem]`}>
      <div className={`${styles.plaqueBorder} ${styles.plaqueShape}`}>
        <div className={`${styles.plaque} ${styles.plaqueShape}`}>
          <span className="pointer-events-none absolute bottom-9 left-1/2 top-16 z-10 hidden w-px -translate-x-1/2 bg-[#B8925A]/35 sm:block" aria-hidden="true" />
          <span className="pointer-events-none absolute left-5 right-5 top-1/2 z-10 hidden h-px -translate-y-1/2 bg-[#B8925A]/35 sm:block" aria-hidden="true" />
          <span className="pointer-events-none absolute left-1/2 top-1/2 z-30 hidden h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border-2 border-[#D4B36A] bg-[#F4EEE2] sm:block" aria-hidden="true">
            <span className="absolute inset-[2px] border border-[#B8925A]" />
          </span>

          <div className="relative z-20 grid h-full grid-cols-1 px-8 pb-6 pt-12 sm:grid-cols-2 sm:grid-rows-2 sm:px-8 sm:pb-5 sm:pt-8 lg:px-10">
            {REASSURANCES.map((engagement, index) => (
              <div
                key={engagement.titre}
                className={`flex min-h-[13rem] flex-col items-center justify-center px-2 py-6 text-center sm:min-h-0 sm:px-5 sm:py-3 ${
                  index < REASSURANCES.length - 1 ? "border-b border-[#B8925A]/25 sm:border-b-0" : ""
                }`}
              >
                <span className="flex h-[4.7rem] w-[4.7rem] shrink-0 items-center justify-center rounded-full border-2 border-[#D4B36A] bg-[#0A0908] text-[1.7rem] text-[#D4B36A] shadow-[0_0_0_5px_rgba(184,146,90,0.16),0_8px_18px_rgba(25,22,16,0.28)]">
                  {engagement.icone}
                </span>
                <h3 className="font-display mt-3 text-[clamp(0.92rem,1.25vw,1.18rem)] font-normal uppercase leading-tight text-[#27221D]">
                  {engagement.titre}
                </h3>
                <p className="mt-2 max-w-[18rem] text-[clamp(0.74rem,0.9vw,0.86rem)] leading-[1.45] text-[#27221D]/70">
                  {engagement.texte}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <span className="absolute left-1/2 top-0 z-30 flex h-[5.25rem] w-[5.25rem] -translate-x-1/2 -translate-y-[38%] items-center justify-center rounded-full border-2 border-[#B8925A]/80 bg-[#0A0908] shadow-[0_5px_16px_rgba(0,0,0,0.3)]" aria-hidden="true">
        <Monogramme />
      </span>
    </div>
  );
}

export function Pourquoi() {
  return (
    <section className="relative isolate overflow-hidden bg-[#070706] lg:h-screen lg:max-h-[50rem]" aria-labelledby="titre-pourquoi">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center"
        style={{ backgroundImage: "url(/img/fond-broderie.webp)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.9)_0%,rgba(5,5,5,0.72)_36%,rgba(5,5,5,0.34)_65%,rgba(5,5,5,0.5)_100%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_47%_50%,transparent_0%,rgba(0,0,0,0.16)_65%,rgba(0,0,0,0.4)_100%)]" aria-hidden="true" />

      <RailDore />

      <div className="relative z-10 mx-auto grid h-full max-w-[105rem] items-center gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[0.72fr_1fr] lg:gap-16 lg:py-14 lg:pl-[7.75rem] lg:pr-16">
        <Reveal className="max-w-[36rem] lg:self-center">
          <PetitOrnement />
          <p className="mt-5 text-[0.78rem] font-semibold uppercase tracking-[0.3em] text-[#E3C888] sm:text-[0.95rem]">
            Pourquoi acheter chez nous
          </p>
          <h2
            id="titre-pourquoi"
            className="font-display mt-4 text-[clamp(2rem,3.4vw,3.4rem)] font-normal uppercase leading-[1.15] tracking-[0.01em] text-[#F7F3EB] lg:w-[115%] lg:origin-left lg:scale-x-[0.98]"
          >
            Une <span className="text-[#E3C888]">pièce</span>,
            <br />
            pas un produit
          </h2>
          <FiletTitre />
          <p className="mt-6 max-w-[34rem] text-[clamp(0.88rem,1.05vw,1.05rem)] leading-[1.65] text-[#F5F1E8]/86">
            Chaque création est le fruit d&apos;un savoir-faire
            <br className="hidden xl:block" /> exigeant et de matériaux d&apos;exception.
            <br className="hidden xl:block" /> Rare par nature, pensée pour durer.
          </p>
        </Reveal>

        <Reveal className="w-full lg:-translate-x-3 lg:self-center" delay={0.1}>
          <PlaqueEngagements />
        </Reveal>
      </div>
    </section>
  );
}
