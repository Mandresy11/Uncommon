// Page unique réunissant le fondateur, la raison d'être, les valeurs et le savoir-faire.
import { ContenuMaison } from "@/app/a-propos/contenu";
import { Fondateur } from "./fondateur";

export const metadata = {
  title: "Notre histoire et nos valeurs · Uncommon People Tribe",
  description:
    "Découvrez Érick, fondateur d'Uncommon People Tribe, la raison d'être de la marque martiniquaise, ses valeurs et son savoir-faire.",
};

export default function NotreHistoire() {
  return (
    <main className="overflow-x-hidden">
      <Fondateur />
      <ContenuMaison />
    </main>
  );
}
