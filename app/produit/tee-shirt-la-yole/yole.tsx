"use client";

// Grande section immersive "La yole ronde" : raconte le symbole culturel derriere le
// tee-shirt best-seller. Fond photo mer/yole pleine largeur + overlay, registre coherent
// avec Declic (notre-histoire) et Calendrier (blog).
import { Reveal } from "@/components/cta";

export function LaYole() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/img/fond-mer.webp)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#0A0908]/68" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
        <Reveal>
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#D4B36A]">
            Le symbole
          </span>
          <h2 className="font-display mt-3 text-[clamp(2rem,4.2vw,2.9rem)] leading-[1.15] text-[#F5F1E8]">
            La <span className="italic text-[#E3C888]">yole ronde</span>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-[#F5F1E8]/78">
            La yole ronde est une embarcation traditionnelle martiniquaise, taillée dans
            un tronc d&apos;arbre, sans quille ni dérive. À son bord, un équipage soudé
            qui doit ramer, gouverner et gérer le vent ensemble pour ne pas chavirer.
          </p>
          <p className="mt-4 max-w-md leading-relaxed text-[#F5F1E8]/78">
            C&apos;est ce qu&apos;elle représente qui a guidé le choix : l&apos;équipage,
            le dépassement de soi, l&apos;équilibre entre tradition et effort collectif.
            Sérigraphiée en or dans le cercle Uncommon, elle devient le symbole de la
            collection Héritage.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -right-3 -top-3 h-full w-full border border-[#D4B36A]" aria-hidden="true" />
            <img
              src="/img/detailv-yole.webp"
              alt="La yole ronde sérigraphiée or sur le tee-shirt La Yole"
              width={896}
              height={1152}
              loading="lazy"
              className="relative w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
