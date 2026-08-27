"use client";

// Section "Le déclic" : panneau plein écran deux tons, calqué sur la maquette fournie par le
// client (noir texturé + monogramme filigrane à gauche, sable/feuillage + carte-citation encadrée
// à droite, médaillon UP au centre).
import { Reveal } from "@/components/cta";

export function Declic() {
  return (
    <section className="relative isolate grid overflow-hidden md:grid-cols-2">
      {/* Colonne gauche : sombre, texture broderie, monogramme filigrane */}
      <div className="relative overflow-hidden bg-[#0A0908] px-8 py-20 md:px-16 md:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url(/img/fond-broderie.webp)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#0A0908]/55" aria-hidden="true" />
        <span
          className="font-display pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 select-none text-[24rem] leading-none text-[#F5F1E8] opacity-[0.04]"
          aria-hidden="true"
        >
          UP
        </span>
        <Reveal className="relative z-10 mx-auto max-w-md">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#D4B36A]/50">
            <span className="font-display text-xl text-[#E3C888]">UP</span>
          </span>
          <h2 className="font-display mt-6 text-[clamp(2rem,4vw,2.8rem)] text-[#F5F1E8]">Le déclic</h2>
          <p className="mt-6 leading-relaxed text-[#F5F1E8]/80">
            J&apos;avais déjà créé ma marque il y a quelques années, après ma participation
            à Koh-Lanta. Elle était déjà axée sur le côté tribal, mais les visuels
            représentaient davantage des tribus indiennes, aborigènes, africaines.
            J&apos;ai laissé de côté le projet pour des raisons personnelles.
          </p>
          <p className="mt-4 leading-relaxed text-[#F5F1E8]/80">
            C&apos;est courant mars 2026, après ma séparation, avec un esprit plus libre et
            créatif, que j&apos;ai décidé de relancer ce projet sous les conseils de ma
            nouvelle compagne et associée.
          </p>
          <p className="font-display mt-8 text-2xl text-[#E3C888]">Érick</p>
          <p className="mt-1 text-[0.62rem] uppercase tracking-[0.22em] text-[#F5F1E8]/55">
            Fondateur de Uncommon People Tribe
          </p>
        </Reveal>
      </div>

      {/* Colonne droite : sable, texture feuillage, carte-citation encadrée */}
      <div className="relative flex items-center overflow-hidden bg-[#D6CBB2] px-8 py-20 md:px-16 md:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url(/img/fond-feuillage.webp)" }}
          aria-hidden="true"
        />
        <Reveal className="relative z-10 mx-auto w-full max-w-md" delay={0.1}>
          <div className="relative border border-[#191610]/25 bg-[#F0EAE0]/90 p-9 text-center backdrop-blur-sm">
            <span className="pointer-events-none absolute inset-2 border border-[#D4B36A]/40" aria-hidden="true" />
            <span className="font-display block text-4xl leading-none text-[#D4B36A]" aria-hidden="true">
              &ldquo;
            </span>
            <p className="font-display mt-4 text-[1.15rem] uppercase leading-tight tracking-[0.02em] text-[#191610]">
              Pourquoi <span className="italic text-[#9C7E32]">Uncommon People Tribe</span>
            </p>
            <p className="mt-5 text-[0.92rem] leading-relaxed text-[#191610]/75">
              Cette fois, l&apos;univers tribal s&apos;ancre directement dans mes propres
              racines : la Martinique, ses traditions, la yole ronde, le drapeau. Une
              marque pensée pour celles et ceux qui, comme moi, n&apos;ont jamais oublié
              d&apos;où ils viennent.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Médaillon losange centré sur la ligne de séparation (desktop uniquement) */}
      <span
        className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 rotate-45 items-center justify-center border border-[#D4B36A] bg-[#14120E] md:flex"
        aria-hidden="true"
      >
        <span className="font-display -rotate-45 text-[0.85rem] text-[#E3C888]">UP</span>
      </span>
    </section>
  );
}
