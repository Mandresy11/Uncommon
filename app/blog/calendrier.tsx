"use client";

// Grande section "Ce qui s'en vient" : timeline centrale sur fond photo, calquee sur la
// maquette client (jalons alternes gauche/droite, connecteurs horizontaux, cartes
// alternant clair/sombre avec coins graves).
import { Reveal } from "@/components/cta";

const ETAPES = [
  {
    periode: "Novembre",
    titre: "Nouvelle collection",
    texte: "La collection arrive à temps pour Noël. Le point de départ de tout ce qui suivra ici.",
    statut: "à venir",
    cote: "gauche" as const,
    ton: "clair" as const,
  },
  {
    periode: "Dès le lancement",
    titre: "Premiers récits",
    texte: "Culture, savoir-faire, histoire du fondateur : les premiers articles du blog accompagnent la sortie de la collection.",
    statut: "à venir",
    cote: "droite" as const,
    ton: "sombre" as const,
  },
  {
    periode: "Environ 6 mois plus tard",
    titre: "Capsule Course de Yoles",
    texte: "Une édition limitée dédiée à la Course de Yoles, avec son propre récit en coulisses.",
    statut: "à venir",
    cote: "gauche" as const,
    ton: "clair" as const,
  },
];

function CoinsCarte({ sombre }: { sombre: boolean }) {
  const couleur = sombre ? "border-[#D4B36A]/70" : "border-[#B8925A]/70";
  const coin = `absolute h-3.5 w-3.5 ${couleur}`;
  return (
    <span className="pointer-events-none absolute inset-0" aria-hidden="true">
      <span className={`${coin} left-2.5 top-2.5 border-l border-t`} />
      <span className={`${coin} right-2.5 top-2.5 border-r border-t`} />
      <span className={`${coin} bottom-2.5 left-2.5 border-b border-l`} />
      <span className={`${coin} bottom-2.5 right-2.5 border-b border-r`} />
    </span>
  );
}

export function Calendrier() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/img/hero-campagne.webp)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#0A0908]/72" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <Reveal className="text-center">
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#D4B36A]">
            Le programme
          </span>
          <h2 className="font-display mt-3 text-[clamp(2rem,4.2vw,2.9rem)] text-[#F5F1E8]">
            Ce qui <span className="italic text-[#E3C888]">s&apos;en vient</span>
          </h2>
          <span className="mt-4 flex items-center justify-center gap-2" aria-hidden="true">
            <span className="h-1.5 w-1.5 rotate-45 border border-[#B8925A]" />
          </span>
          <p className="mx-auto mt-4 max-w-md text-[0.92rem] leading-relaxed text-[#F5F1E8]/75">
            Le blog suit le rythme de la marque. Voici le calendrier tel qu&apos;il se
            dessine aujourd&apos;hui.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* Ligne verticale centrale, desktop uniquement */}
          <span className="pointer-events-none absolute bottom-4 left-1/2 top-4 hidden w-px -translate-x-1/2 bg-[#D4B36A]/50 md:block" aria-hidden="true" />
          {/* Ligne verticale gauche, mobile */}
          <span className="pointer-events-none absolute bottom-4 left-[7px] top-4 w-px bg-[#D4B36A]/40 md:hidden" aria-hidden="true" />

          <div className="space-y-10 md:space-y-14">
            {ETAPES.map((e, i) => {
              const estClaire = e.ton === "clair";
              return (
                <Reveal key={e.titre} delay={i * 0.1}>
                  <div className={`relative flex items-center pl-8 md:pl-0 ${e.cote === "droite" ? "md:justify-end" : "md:justify-start"}`}>
                    {/* Point sur la ligne centrale */}
                    <span
                      className="absolute left-0 top-1/2 z-20 flex h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#D4B36A] bg-[#191610] md:left-1/2 md:-translate-x-1/2"
                      aria-hidden="true"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D4B36A]" />
                    </span>
                    {/* Connecteur horizontal desktop */}
                    <span
                      className={`pointer-events-none absolute top-1/2 hidden h-px w-8 -translate-y-1/2 bg-[#D4B36A]/50 md:block ${
                        e.cote === "droite" ? "left-1/2" : "right-1/2"
                      }`}
                      aria-hidden="true"
                    />

                    <div
                      className={`relative w-full border px-6 py-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)] md:w-[24rem] ${
                        e.cote === "droite" ? "md:ml-14" : "md:mr-14"
                      } ${
                        estClaire
                          ? "border-[#B8925A]/50 bg-[#F5EFE1] text-[#191610]"
                          : "border-[#D4B36A]/50 bg-[#14120E]/95 text-[#F5F1E8]"
                      }`}
                    >
                      <CoinsCarte sombre={!estClaire} />
                      <span className={`flex items-center gap-2 text-[0.66rem] font-semibold uppercase tracking-[0.2em] ${estClaire ? "text-[#9C7E32]" : "text-[#D4B36A]"}`}>
                        {e.periode}
                        <span className="h-1 w-1 rotate-45 border border-current" aria-hidden="true" />
                      </span>
                      <h3 className={`font-display mt-2 text-[1.25rem] ${estClaire ? "text-[#191610]" : "text-[#F5F1E8]"}`}>
                        {e.titre}
                      </h3>
                      <p className={`mt-2 text-[0.85rem] leading-relaxed ${estClaire ? "text-[#191610]/70" : "text-[#F5F1E8]/72"}`}>
                        {e.texte}
                      </p>
                      <span
                        className={`mt-4 inline-block border px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.14em] ${
                          estClaire ? "border-[#9C7E32]/50 text-[#9C7E32]" : "border-[#D4B36A]/50 text-[#D4B36A]"
                        }`}
                      >
                        {e.statut}
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
