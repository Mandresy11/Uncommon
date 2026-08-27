// Page Livraison et retours : premiere section calquee sur la maquette client (deux colonnes
// asymetriques, medaillon boussole central, fond feuillage filigrane).
import { PageShell } from "@/components/page-shell";
import { Infos } from "./infos";
import { Etapes } from "./etapes";

export const metadata = {
  title: "Livraison et retours · Uncommon People Tribe",
  description: "Zones de livraison, délais et politique de retour d'Uncommon People Tribe.",
};

export default function LivraisonRetours() {
  return (
    <>
      <PageShell kicker="Infos pratiques" titre={<>Livraison et retours</>}>
        <Infos />
      </PageShell>
      <Etapes />
    </>
  );
}
