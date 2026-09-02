"use client";

// Grande section "Les finitions en detail" : zoom sur 4 macro-photos en tres grand format
// avec legende explicative, met en avant la qualite avant le clic vers la boutique.
import { Reveal, Kicker } from "@/components/cta";

const FINITIONS = [
  {
    image: "/img/detailv-monogramme.webp",
    titre: "Le monogramme",
    texte: "Brodé au fil d'or, jamais imprimé. Le relief se sent sous les doigts.",
  },
  {
    image: "/img/detailv-drapeau.webp",
    titre: "Le drapeau",
    texte: "Rouge, vert, noir. Cousu ou brodé sur la manche, jamais collé.",
  },
  {
    image: "/img/detailv-col.webp",
    titre: "Le col et les boutons",
    texte: "Col structuré, boutons choisis un à un, assortis à la couleur du polo.",
  },
  {
    image: "/img/detailv-pique.webp",
    titre: "Le piqué",
    texte: "Coton épais, tissage serré. Une matière qui dure, pas qui s'use.",
  },
];

export function Finitions() {
  return (
    <section className="relative overflow-hidden bg-[#0A0908] py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <Kicker>Zoom</Kicker>
          <h2 className="font-display mt-3 text-[clamp(2rem,4.2vw,2.9rem)] text-[#F5F1E8]">
            Les finitions <span className="italic text-[#E3C888]">en détail</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[0.95rem] leading-relaxed text-[#F5F1E8]/72">
            Ce qui se voit de loin, c&apos;est la pièce. Ce qui se remarque de près,
            c&apos;est le soin.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {FINITIONS.map((f, i) => (
            <Reveal key={f.titre} delay={i * 0.08}>
              <div className="group relative overflow-hidden border border-[#D4B36A]/25">
                <img
                  src={f.image}
                  alt={f.titre}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.06] lg:aspect-[3/4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/25 to-transparent" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
                  <p className="font-display mt-2 text-[0.85rem] leading-tight text-[#F5F1E8] sm:mt-3 sm:text-[1.05rem]">{f.titre}</p>
                  <p className="mt-1 hidden text-[0.78rem] leading-relaxed text-[#F5F1E8]/72 sm:mt-2 sm:block">{f.texte}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
