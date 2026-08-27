// INSPIRATION: gabarit legal Fondation Studio (politique de confidentialite RGPD).
import { PageShell } from "@/components/page-shell";

export const metadata = {
  title: "Politique de confidentialité · Uncommon People Tribe",
  description: "Politique de confidentialité et gestion des données personnelles d'Uncommon People Tribe.",
};

export default function Confidentialite() {
  return (
    <PageShell kicker="Informations légales" titre={<>Politique de confidentialité</>}>
      <div className="mx-auto max-w-2xl space-y-6 text-[0.9rem] leading-relaxed text-[#191610]/78">
        <div>
          <h2 className="font-display text-lg text-[#191610]">Données collectées</h2>
          <p className="mt-2">
            Formulaire de contact (nom, prénom, e-mail, message) et inscription à la
            newsletter (e-mail). Aucune donnée n&apos;est revendue à des tiers.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg text-[#191610]">Utilisation</h2>
          <p className="mt-2">
            Répondre à vos demandes et vous informer des nouveautés si vous y avez
            consenti. Désinscription possible en un clic dans chaque e-mail.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg text-[#191610]">Vos droits</h2>
          <p className="mt-2">
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
            rectification, d&apos;opposition et de suppression de vos données. Exercez-le
            via la page Contact.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
