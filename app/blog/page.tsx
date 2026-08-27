// Page Blog (retour Tom v6). Reprend le contenu editorial de la marque.
// Layout editorial calque sur la maquette client : article vedette grand format +
// 3 articles compacts empiles.
import { Cta } from "@/components/cta";
import { AlerteArticles } from "./alerte";
import { Calendrier } from "./calendrier";

export const metadata = {
  title: "Le blog · Uncommon People Tribe",
  description: "Le blog d'Uncommon People Tribe : culture martiniquaise, savoir-faire et histoires de la tribu.",
};

const ARTICLES = [
  {
    titre: "La yole ronde, notre premier récit",
    extrait: "Pourquoi cette embarcation traditionnelle est devenue l'emblème de la collection Héritage.",
    image: "/img/fond-mer.webp",
    tag: "Culture",
  },
  {
    titre: "Le fil d'or, un choix de finition",
    extrait: "Broder plutôt qu'imprimer : ce que ce détail change sur un vêtement premium.",
    image: "/img/detail-monogramme.webp",
    tag: "Savoir-faire",
  },
  {
    titre: "Revenir en Martinique",
    extrait: "Le retour d'Érick sur son île et la naissance d'une marque de chez nous.",
    image: "/img/fond-cote.webp",
    tag: "Histoire",
  },
  {
    titre: "Porter le drapeau, avec fierté",
    extrait: "Rouge, vert, noir : le sens du drapeau cousu sur chaque manche.",
    image: "/img/detail-drapeau.webp",
    tag: "Identité",
  },
];

const [vedette, ...compacts] = ARTICLES;

export default function Blog() {
  return (
    <main className="bg-[#EEE5D5]">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-32 md:pt-40">
        <div className="text-center">
          <span className="flex items-center justify-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#9C7E32] sm:text-[0.68rem] sm:tracking-[0.28em]" aria-hidden="true">
            <span className="text-[0.55rem] sm:text-[0.6rem]">◆</span> Le blog UP <span className="text-[0.55rem] sm:text-[0.6rem]">◆</span>
          </span>
          <h1 className="font-display mt-2 text-[clamp(1.8rem,7vw,3.2rem)] text-[#191610] sm:mt-4">
            Des récits de <span className="italic text-[#9C7E32]">la tribu</span>
          </h1>
          <span className="mt-3 flex items-center justify-center gap-3 sm:mt-5" aria-hidden="true">
            <span className="h-1.5 w-1.5 rotate-45 border border-[#B8925A]" />
          </span>
          <p className="mx-auto mt-3 hidden max-w-md text-[0.92rem] leading-relaxed text-[#191610]/65 sm:mt-6 sm:block">
            Histoires, savoir-faire et inspirations : plonge dans l&apos;univers UP et
            découvre ce qui nous relie.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Article vedette */}
          <article className="group relative min-h-[26rem] overflow-hidden border border-[#191610]/10 lg:min-h-0">
            <img
              src={vedette.image}
              alt={vedette.titre}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/35 to-[#0A0908]/10" aria-hidden="true" />
            <span className="absolute left-6 top-6 bg-[#0A0908] px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-[#F5F1E8]">
              {vedette.tag}
            </span>
            <span className="absolute bottom-[7.5rem] left-6 text-lg text-[#E3C888]" aria-hidden="true">✦</span>
            <div className="relative z-10 flex h-full min-h-[26rem] flex-col justify-end p-6 md:p-8">
              <h2 className="font-display text-[clamp(1.5rem,2.6vw,2rem)] leading-tight text-[#F5F1E8]">
                {vedette.titre}
              </h2>
              <p className="mt-4 max-w-sm text-[0.88rem] leading-relaxed text-[#F5F1E8]/78">
                {vedette.extrait}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#E3C888]">
                Bientôt disponible
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </article>

          {/* Articles compacts */}
          <div className="grid gap-6">
            {compacts.map((a) => (
              <article
                key={a.titre}
                className="group grid grid-cols-[1fr_1.15fr] overflow-hidden border border-[#191610]/10 bg-[#F5F1E8]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.titre}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                  <span className="absolute left-3 top-3 bg-[#0A0908] px-2.5 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-[#F5F1E8]">
                    {a.tag}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-5">
                  <span className="text-[0.85rem] text-[#D4B36A]" aria-hidden="true">✦</span>
                  <h2 className="font-display mt-2 text-[1.05rem] leading-tight text-[#191610]">
                    {a.titre}
                  </h2>
                  <p className="mt-3 text-[0.8rem] leading-relaxed text-[#191610]/65">
                    {a.extrait}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[#9C7E32]">
                    Bientôt disponible
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <Calendrier />

      <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pt-28">
        <AlerteArticles />

        <div className="mt-10 text-center">
          <Cta href="/notre-histoire" variante="noir">Découvrir notre histoire</Cta>
        </div>
      </div>
    </main>
  );
}
