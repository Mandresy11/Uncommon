"use client";

// Deux colonnes asymetriques (Livraison / Retours et echanges), calquees sur la maquette
// client : icones dorees, ligne verticale a medaillon boussole, colonne droite decalee et
// encadree, fond feuillage filigrane.
import { Cta } from "@/components/cta";
import { IconCamion, IconColisRetour } from "@/components/icons";

function Boussole() {
  return (
    <svg viewBox="0 0 64 64" className="h-9 w-9 text-[#B8925A]" aria-hidden="true">
      <circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="32" cy="32" r="2" fill="currentColor" />
      <path d="M32 4v10M32 50v10M4 32h10M50 32h10" stroke="currentColor" strokeWidth="1" />
      <path d="m32 14 6 16-6 16-6-16Z" fill="currentColor" fillOpacity="0.85" />
    </svg>
  );
}

export function Infos() {
  return (
    <section className="relative overflow-hidden">
      <span
        className="pointer-events-none absolute -right-10 top-0 h-full w-96 bg-contain bg-right-top bg-no-repeat opacity-[0.1]"
        style={{ backgroundImage: "url(/img/fond-feuillage.webp)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-4 md:py-10">
        <div className="relative grid gap-16 md:grid-cols-2 md:gap-10">
          {/* Ligne verticale + medaillon boussole, desktop uniquement */}
          <span className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-[#B8925A]/40 md:block" aria-hidden="true" />
          <span className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#B8925A]/50 bg-[#F0EAE0] p-2.5 md:flex" aria-hidden="true">
            <Boussole />
          </span>

          {/* Colonne gauche : Livraison */}
          <div>
            <span className="flex h-12 w-12 items-center justify-center text-[1.6rem] text-[#B8925A]">
              <IconCamion />
            </span>
            <h2 className="font-display mt-6 text-2xl text-[#191610]">Livraison</h2>
            <span className="mt-3 flex items-center gap-2" aria-hidden="true">
              <span className="h-1.5 w-1.5 rotate-45 bg-[#B8925A]" />
            </span>
            <p className="mt-5 max-w-sm leading-relaxed text-[#191610]/75">
              Nous livrons en Martinique, en Guadeloupe, en Guyane, ainsi que dans
              l&apos;Hexagone. Le retrait en main propre est gratuit, sous 1 à 2 jours.
              Les tarifs et délais des autres zones seront affichés lors du lancement de
              la boutique en ligne.
            </p>
          </div>

          {/* Colonne droite : Retours et echanges, decalee + encadree */}
          <div className="relative md:mt-16 md:border-t md:border-r md:border-[#B8925A]/40 md:pl-10 md:pt-10">
            <span className="flex h-12 w-12 items-center justify-center text-[1.6rem] text-[#B8925A]">
              <IconColisRetour />
            </span>
            <h2 className="font-display mt-4 text-2xl text-[#191610]">Retours et échanges</h2>
            <span className="mt-3 flex items-center gap-2" aria-hidden="true">
              <span className="h-1.5 w-1.5 rotate-45 bg-[#B8925A]" />
            </span>
            <p className="mt-5 max-w-sm leading-relaxed text-[#191610]/75">
              Tu disposes de 14 jours après réception pour retourner un article non
              porté dans son emballage d&apos;origine. Les échanges de taille se font
              selon le stock disponible : les séries étant limitées, contacte-nous
              rapidement.
            </p>
          </div>
        </div>

        <div className="mt-14 text-center">
          <Cta href="/contact" variante="noir">Nous contacter</Cta>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3" aria-hidden="true">
          <span className="flex items-center gap-1.5">
            <span className="h-1 w-1 rotate-45 bg-[#B8925A]" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#B8925A]" />
            <span className="h-1 w-1 rotate-45 bg-[#B8925A]" />
          </span>
        </div>
      </div>
    </section>
  );
}
