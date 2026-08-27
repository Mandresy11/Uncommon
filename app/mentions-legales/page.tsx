// INSPIRATION: gabarit legal Fondation Studio (page mentions legales complete obligatoire).
import { PageShell } from "@/components/page-shell";

export const metadata = {
  title: "Mentions légales · Uncommon People Tribe",
  description: "Mentions légales du site Uncommon People Tribe.",
};

export default function PageMentions() {
  return (
    <PageShell kicker="Informations légales" titre={<>Mentions légales</>}>
      <div className="mx-auto max-w-2xl space-y-6 text-[0.9rem] leading-relaxed text-[#191610]/78">
        <div>
          <h2 className="font-display text-lg text-[#191610]">Éditeur du site</h2>
          <p className="mt-2">
            Uncommon People Tribe, marque en cours d&apos;immatriculation. Siège social,
            numéro SIRET et coordonnées complètes : informations à confirmer avec
            l&apos;entreprise avant mise en ligne définitive. Directeur de la
            publication : Érick, fondateur.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg text-[#191610]">Hébergement</h2>
          <p className="mt-2">Vercel Inc., 340 S Lemon Ave 4133, Walnut CA 91789, États-Unis.</p>
        </div>
        <div>
          <h2 className="font-display text-lg text-[#191610]">Propriété intellectuelle</h2>
          <p className="mt-2">
            L&apos;ensemble des contenus du site (logos, visuels, textes, monogramme UP)
            est la propriété exclusive d&apos;Uncommon People Tribe. Toute reproduction
            sans autorisation est interdite.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg text-[#191610]">Données personnelles</h2>
          <p className="mt-2">
            Les données collectées via les formulaires (contact, newsletter) servent
            uniquement à répondre à vos demandes. Vous disposez d&apos;un droit
            d&apos;accès, de rectification et de suppression : voir la page
            Confidentialité.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
