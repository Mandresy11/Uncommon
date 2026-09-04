"use client";

import Image from "next/image";
import { Cta, Reveal } from "@/components/cta";

const PARCOURS = [
  {
    etape: "Coach sportif",
    texte: <>Une école du<br />lien humain.</>,
    hauteur: "lg:h-[20rem]",
    decor: "none",
    logoEstompe: true,
    decalage: "lg:-translate-y-2",
  },
  {
    etape: "Décathlon",
    texte: <>La rigueur du terrain<br />et du commerce.</>,
    hauteur: "lg:h-[22.25rem]",
    decor: "palmier-haut",
    logoEstompe: false,
    decalage: "lg:translate-y-3",
  },
  {
    etape: <>Enseignant<br />en EPS</>,
    texte: <>Une base stable<br />depuis 2010.</>,
    hauteur: "lg:h-[24.5rem]",
    decor: "ondes",
    logoEstompe: false,
    decalage: "lg:translate-y-2",
  },
  {
    etape: <>Micro-ostéopathe<br />digitale</>,
    texte: <>Soigner,<br />transmettre,<br />accompagner.</>,
    hauteur: "lg:h-[22.25rem]",
    decor: "palmiers",
    logoEstompe: false,
    decalage: "",
  },
  {
    etape: "Koh-Lanta 2007",
    texte: <>Une expérience<br />de dépassement.</>,
    hauteur: "lg:h-[20rem]",
    decor: "boussole",
    logoEstompe: false,
    decalage: "lg:-translate-y-2",
  },
] as const;

function Monogramme({ estompe = false }: { estompe?: boolean }) {
  return (
    <span
      className={`relative block h-8 w-9 shrink-0 overflow-hidden ${estompe ? "opacity-15" : "opacity-90"}`}
      aria-hidden="true"
    >
      <Image
        src="/img/logo-up.svg"
        alt=""
        width={36}
        height={32}
        className="h-full w-full scale-x-[1.72] scale-y-[2.7] object-contain"
      />
    </span>
  );
}

function MotifTitre() {
  return (
    <div className="relative hidden h-[6.25rem] w-[4.5rem] shrink-0 border-r border-[#B8925A]/65 sm:flex sm:flex-col sm:items-center sm:justify-center">
      <span className="absolute top-1 h-1 w-1 rounded-full bg-[#B8925A]" aria-hidden="true" />
      <Monogramme />
      <span className="absolute bottom-1 h-1 w-1 rounded-full bg-[#B8925A]" aria-hidden="true" />
    </div>
  );
}


function Boussole() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="absolute -bottom-8 -right-7 h-32 w-32 text-[#967A48] opacity-[0.09]"
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="60" cy="60" r="31" fill="none" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="60" cy="60" r="4" fill="none" stroke="currentColor" />
      <path d="M60 8v104M8 60h104M23 23l74 74M97 23L23 97" fill="none" stroke="currentColor" strokeWidth="0.65" />
      <path d="m60 20 8 32 32 8-32 8-8 32-8-32-32-8 32-8Z" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="m60 34 4 22 22 4-22 4-4 22-4-22-22-4 22-4Z" fill="currentColor" fillOpacity="0.3" />
    </svg>
  );
}

function DecorCarte({ type }: { type: (typeof PARCOURS)[number]["decor"] }) {
  if (type === "none") return null;

  if (type === "ondes") {
    return (
      <span
        className="absolute -top-8 left-1/2 h-44 w-52 -translate-x-1/2 rounded-[50%] opacity-[0.055]"
        style={{
          background:
            "repeating-radial-gradient(ellipse at center, transparent 0 10px, #9C7E32 11px 12px)",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
        aria-hidden="true"
      />
    );
  }

  if (type === "boussole") return <Boussole />;

  return (
    <>
      <span
        className={`absolute bg-no-repeat opacity-[0.1] mix-blend-multiply ${
          type === "palmier-haut"
            ? "-right-10 -top-12 h-48 w-52 bg-[length:235%_175%] bg-left-top"
            : "-right-8 -top-12 h-44 w-52 bg-[length:235%_175%] bg-left-top"
        }`}
        style={{ backgroundImage: "url(/img/fond-feuillage.webp)" }}
        aria-hidden="true"
      />
      {type === "palmiers" && (
        <span
          className="absolute -bottom-12 -right-16 h-56 w-60 bg-[length:225%_165%] bg-right-bottom bg-no-repeat opacity-[0.09] mix-blend-multiply"
          style={{ backgroundImage: "url(/img/fond-feuillage.webp)" }}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export function Parcours() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#EEE5D5] px-5 pb-16 pt-[3.375rem] sm:px-8 lg:min-h-[45.25rem] lg:px-12"
      aria-labelledby="titre-parcours"
    >
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center opacity-[0.23] mix-blend-multiply"
        style={{ backgroundImage: "url(/img/fond-papier.webp)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,252,244,0.72),rgba(238,229,213,0.12)_58%,rgba(203,188,159,0.16))]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[112rem]">
        <Reveal className="flex items-start gap-7 sm:gap-9">
          <MotifTitre />
          <div className="pt-0.5">
            <h2
              id="titre-parcours"
              className="font-display text-[clamp(1.55rem,2.2vw,2rem)] font-normal uppercase leading-tight tracking-[0.025em] text-[#28231D]"
            >
              Un parcours, une marque
            </h2>
            <p className="mt-4 max-w-[44rem] text-[clamp(0.9rem,1.25vw,1.05rem)] leading-[1.55] text-[#28231D]/75">
              Chaque étape du parcours d&apos;Érick a laissé sa trace
              <br className="hidden md:block" /> dans Uncommon People Tribe : la rigueur, la relation humaine, la persévérance.
            </p>
          </div>
        </Reveal>

        <ol
          className="-mx-5 mt-9 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto overflow-y-hidden scroll-px-5 px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-auto sm:grid sm:max-w-[100rem] sm:snap-none sm:grid-cols-2 sm:items-end sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-5 lg:gap-[1.875rem] 2xl:mx-0 2xl:ml-24"
          style={{ touchAction: "pan-x", overscrollBehaviorInline: "contain" }}
          aria-label="Les étapes du parcours d’Érick"
        >
          {PARCOURS.map((parcours, index) => (
            <li key={index} className={`min-h-[17rem] w-[64vw] min-w-[13.5rem] max-w-[15rem] shrink-0 snap-start sm:w-auto sm:min-w-0 sm:max-w-none sm:shrink ${parcours.hauteur}`}>
              <Reveal delay={index * 0.07} className="h-full">
                <article className="relative flex h-full min-h-[17rem] flex-col items-center overflow-hidden border-x border-t border-[#8D7144]/15 bg-[#F7F1E5] px-4 pb-8 pt-12 text-center shadow-[0_14px_24px_rgba(49,36,19,0.15),0_3px_6px_rgba(49,36,19,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] sm:px-5 lg:min-h-0">
                  <span
                    className="absolute inset-0 scale-125 bg-cover bg-center opacity-[0.075] mix-blend-multiply"
                    style={{ backgroundImage: "url(/img/fond-papier.webp)" }}
                    aria-hidden="true"
                  />
                  <span
                    className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.44),transparent_48%,rgba(188,163,118,0.08))]"
                    aria-hidden="true"
                  />
                  <DecorCarte type={parcours.decor} />

                  <div className={`relative z-10 flex h-full flex-col items-center ${parcours.decalage}`}>
                    <Monogramme estompe={parcours.logoEstompe} />
                    <h3 className="font-display mt-12 text-[clamp(0.94rem,1.3vw,1.18rem)] font-medium uppercase leading-[1.4] tracking-[0.01em] text-[#24201C]">
                      {parcours.etape}
                    </h3>
                    <p className="mt-7 text-[clamp(0.82rem,1.15vw,1rem)] leading-[1.45] text-[#332E28]/72">
                      {parcours.texte}
                    </p>
                  </div>

                  <span
                    className="absolute inset-x-0 bottom-0 z-20 h-1 bg-[linear-gradient(90deg,#9C7626,#D5AF58_50%,#A17A27)] shadow-[0_-1px_0_rgba(255,255,255,0.35)]"
                    aria-hidden="true"
                  />
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-8 text-center 2xl:ml-24 2xl:max-w-[100rem]" delay={0.12}>
          <Cta
            href="/boutique"
            variante="noir"
            className="group h-[4.125rem] w-[calc(100vw-2.5rem)] max-w-[23rem] border border-[#9C7E32]/65 shadow-[0_8px_14px_rgba(25,22,16,0.22)]"
          >
            <span className="inline-flex items-center gap-4">
              Découvrir la collection
              <span className="text-base leading-none text-[#D4B36A] transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </span>
          </Cta>
        </Reveal>
      </div>
    </section>
  );
}
