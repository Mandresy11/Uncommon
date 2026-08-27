// INSPIRATION: maquette client (portrait + carte superposee, feuillage filigrane).
import { Kicker } from "@/components/cta";
import { Intro } from "./intro";
import { Declic } from "./declic";
import { Parcours } from "./parcours";

export const metadata = {
  title: "Notre histoire · Uncommon People Tribe",
  description:
    "L'histoire d'Érick, fondateur d'Uncommon People Tribe : parti de Martinique à 11 ans, revenu pour créer une marque qui porte l'île.",
};

export default function NotreHistoire() {
  return (
    <>
      <div className="grain relative overflow-hidden bg-[#0A0908]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{ backgroundImage: "url(/img/fond-grain-or.webp)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-40 text-center">
          <Kicker>Notre histoire</Kicker>
          <h1 className="font-display mt-3 text-[clamp(2rem,5vw,3.4rem)] text-[#F5F1E8]">
            Partir. Revenir. <span className="italic text-[#E3C888]">S&apos;élever.</span>
          </h1>
        </div>
      </div>
      <Intro />
      <Declic />
      <Parcours />
    </>
  );
}
