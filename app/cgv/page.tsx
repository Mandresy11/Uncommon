// INSPIRATION: gabarit legal Fondation Studio (CGV e-commerce, contenu a confirmer client).
import { PageShell } from "@/components/page-shell";

export const metadata = {
  title: "Conditions générales de vente · Uncommon People Tribe",
  description: "Conditions générales de vente de la boutique Uncommon People Tribe.",
};

export default function Cgv() {
  return (
    <PageShell kicker="Informations légales" titre={<>Conditions générales de vente</>}>
      <div className="mx-auto max-w-2xl space-y-6 text-[0.9rem] leading-relaxed text-[#191610]/78">
        <p>
          Les présentes conditions encadreront les ventes réalisées sur la boutique en
          ligne Uncommon People Tribe. Elles seront finalisées avec l&apos;entreprise
          avant l&apos;activation du paiement en ligne.
        </p>
        <div>
          <h2 className="font-display text-lg text-[#191610]">Prix et commande</h2>
          <p className="mt-2">
            Les prix sont affichés en euros, toutes taxes comprises. La commande est
            confirmée après validation du paiement sécurisé (carte bancaire ou PayPal).
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg text-[#191610]">Livraison</h2>
          <p className="mt-2">
            Martinique, Guadeloupe, Guyane, Hexagone, ou retrait en main propre. Délais et
            frais précisés au moment de la commande.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg text-[#191610]">Rétractation</h2>
          <p className="mt-2">
            Conformément à la loi, vous disposez de 14 jours après réception pour exercer
            votre droit de rétractation, article non porté.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
