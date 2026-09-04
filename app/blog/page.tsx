// Page Blog (retour Tom v6). Reprend le contenu editorial de la marque.
// Grille de 4 articles cote a cote, cliquables (modale plein ecran avec le contenu detaille).
import { Cta, Kicker } from "@/components/cta";
import { AlerteArticles } from "./alerte";
import { GrilleArticles } from "./grille-articles";

export const metadata = {
  title: "Le blog · Uncommon People Tribe",
  description: "Le blog d'Uncommon People Tribe : culture martiniquaise, savoir-faire et histoires de la tribu.",
};

export default function Blog() {
  return (
    <main className="bg-[#EEE5D5]">
      <section>
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-32 md:pt-40">
          <div className="text-center">
            <Kicker>Le blog UP</Kicker>
            <h1 className="font-display mt-2 text-[clamp(1.8rem,7vw,3.2rem)] text-[#191610] sm:mt-4">
              Des récits de <span className="italic text-[#9C7E32]">la tribu</span>
            </h1>
            <p className="mx-auto mt-5 hidden max-w-md text-[0.92rem] leading-relaxed text-[#191610]/65 sm:mt-7 sm:block">
              Histoires, savoir-faire et inspirations : plongez dans l&apos;univers UP et
              découvrez ce qui nous relie.
            </p>
          </div>

          <GrilleArticles />
        </div>

        <AlerteArticles />
      </section>

      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="text-center">
          <Cta href="/notre-histoire" variante="noir">Découvrir notre histoire</Cta>
        </div>
      </div>
    </main>
  );
}
