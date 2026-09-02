import { Infos } from "./infos";
import { Etapes } from "./etapes";

export const metadata = {
  title: "Livraison et retours · Uncommon People Tribe",
  description: "Zones de livraison, délais et politique de retour d'Uncommon People Tribe.",
};

export default function LivraisonRetours() {
  return (
    <main>
      <Infos />
      <Etapes />
    </main>
  );
}
