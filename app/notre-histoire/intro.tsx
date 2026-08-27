"use client";

// Section d'ouverture "Notre histoire" : calquee sur la maquette fournie par le client
// (portrait + carte "Racines / Transmission / Exigence" en superposition legere, bloc
// savoir-faire compact, feuillage filigrane en fond).
import { Reveal } from "@/components/cta";

function Monogramme({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display block italic leading-none text-[#B8925A] ${className}`} aria-hidden="true">
      UP
    </span>
  );
}

export function Intro() {
  return (
    <section className="relative overflow-hidden bg-[#EEE5D5] px-6 py-20 md:py-28">
      <span
        className="pointer-events-none absolute -left-10 -top-10 h-[26rem] w-[26rem] bg-contain bg-left-top bg-no-repeat opacity-[0.14] mix-blend-multiply"
        style={{ backgroundImage: "url(/img/fond-feuillage.webp)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#9C7E32]">
              Notre histoire
            </span>
            <h1 className="font-display mt-4 text-[clamp(2.1rem,4.2vw,3.1rem)] leading-[1.12] text-[#191610]">
              Nés de la terre,
              <br />
              <span className="italic text-[#9C7E32]">portés par l&apos;héritage.</span>
            </h1>
            <p className="mt-7 max-w-lg leading-relaxed text-[#191610]/78">
              Originaire de Martinique, de Guadeloupe et de Guyane, je porte en moi
              l&apos;héritage de nos terres, de nos familles et de nos traditions.
              C&apos;est cette richesse qui m&apos;anime et donne un sens profond à
              chacune de mes créations.
            </p>
            <p className="mt-4 max-w-lg leading-relaxed text-[#191610]/78">
              De Koh-Lanta à aujourd&apos;hui, chaque étape a renforcé ma volonté de
              bâtir une marque qui nous ressemble : authentique, exigeante et tournée
              vers l&apos;avenir.
            </p>

            <div className="mt-9 border-l-2 border-[#D4B36A] pl-5">
              <blockquote className="font-display text-lg italic leading-snug text-[#191610]">
                « Plus qu&apos;une marque,
                <br />
                une identité, une excellence. »
              </blockquote>
              <Monogramme className="mt-4 text-2xl" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mx-auto flex max-w-md items-start justify-center">
              <div className="relative z-10 w-64 shrink-0 border border-[#D4B36A] bg-[#F0EAE0] p-1.5 shadow-[0_24px_50px_rgba(25,22,16,0.16)] sm:w-72">
                <img
                  src="/img/portrait-erick.webp"
                  alt="Érick, fondateur d'Uncommon People Tribe"
                  width={896}
                  height={1152}
                  className="w-full object-cover"
                />
              </div>
              <div className="relative z-0 -ml-10 mt-8 hidden h-[85%] w-32 shrink-0 flex-col items-center border border-[#191610]/12 bg-[#E5DCC9] pt-8 shadow-[0_18px_40px_rgba(25,22,16,0.14)] sm:flex">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4B36A]/60">
                  <Monogramme className="text-base" />
                </span>
                <p className="mt-5 px-2 text-center text-[0.62rem] font-semibold uppercase leading-relaxed tracking-[0.1em] text-[#191610]/70">
                  Racines
                  <br />
                  Transmission
                  <br />
                  Exigence
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-14">
          <div
            id="savoir-faire"
            className="grid overflow-hidden border border-[#191610]/12 bg-[#F5F1E8] shadow-[0_16px_36px_rgba(25,22,16,0.08)] sm:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="flex flex-col justify-center p-7">
              <h2 className="font-display text-lg text-[#191610]">Le savoir-faire</h2>
              <p className="mt-4 text-[0.88rem] leading-relaxed text-[#191610]/72">
                Broderies délicates, matières sélectionnées, finitions exigeantes.
              </p>
              <p className="mt-1 text-[0.82rem] font-semibold text-[#9C7E32]">
                Chaque détail raconte notre exigence.
              </p>
            </div>
            <img
              src="/img/detail-drapeau.webp"
              alt="Macro du drapeau martiniquais cousu sur la manche"
              width={1344}
              height={768}
              loading="lazy"
              className="h-full min-h-[9rem] w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="mt-16 flex items-center justify-center gap-4" aria-hidden="true">
          <span className="h-1.5 w-1.5 rotate-45 border border-[#B8925A]" />
        </div>
        <p className="mt-4 text-center text-[0.62rem] uppercase tracking-[0.28em] text-[#191610]/50">
          Uncommon People Tribe <span className="text-[#B8925A]">|</span> West Indian Excellence
        </p>
      </div>
    </section>
  );
}
