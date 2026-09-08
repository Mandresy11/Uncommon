import { Cta, Kicker } from "@/components/cta";

export const metadata = {
  title: "Guide des tailles · Uncommon People Tribe",
  description:
    "Choisissez la bonne taille pour les polos Signature UP et les tee-shirts La Yole grâce au guide Uncommon People Tribe.",
};

const PRODUITS = [
  {
    nom: "Polo Signature UP",
    coupe: "Coupe normale",
    mesures: [
      { taille: "M", epaules: 44, poitrine: 52, longueur: 70 },
      { taille: "L", epaules: 46, poitrine: 55, longueur: 72 },
      { taille: "XL", epaules: 48, poitrine: 58, longueur: 74 },
      { taille: "XXL", epaules: 50, poitrine: 61, longueur: 76 },
    ],
    conseil: "Choisissez votre taille habituelle pour un porté net. Si vous recherchez plus d’aisance, privilégiez la taille supérieure.",
    matiere: "Piqué premium · 95 % coton · 5 % élasthanne",
  },
  {
    nom: "Tee-shirt La Yole",
    coupe: "Coupe droite",
    mesures: [
      { taille: "S", epaules: 42, poitrine: 49, longueur: 68 },
      { taille: "M", epaules: 44, poitrine: 52, longueur: 70 },
      { taille: "L", epaules: 46, poitrine: 55, longueur: 72 },
      { taille: "XL", epaules: 48, poitrine: 58, longueur: 74 },
      { taille: "XXL", epaules: 50, poitrine: 61, longueur: 76 },
    ],
    conseil: "Choisissez votre taille habituelle pour un tombé droit. Prenez une taille au-dessus pour une allure plus ample.",
    matiere: "Coton peigné épais · Tombé structuré",
  },
] as const;

export default function GuideTailles() {
  return (
    <main className="overflow-x-hidden">
      <div className="h-[6.6rem] bg-[#0a0908]" aria-hidden="true" />

      <section className="relative overflow-hidden bg-[#f1e9dc] px-4 py-14 text-[#191610] sm:px-6 sm:py-20 md:py-28" aria-labelledby="titre-mesures">
        <span
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.2] mix-blend-multiply"
          style={{ backgroundImage: "url(/img/fond-papier.webp)" }}
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute -right-32 top-0 h-[34rem] w-[36rem] bg-contain bg-right-top bg-no-repeat opacity-[0.07] mix-blend-multiply"
          style={{ backgroundImage: "url(/img/fond-feuillage.webp)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl min-w-0">
          <header className="mx-auto max-w-2xl text-center">
            <Kicker>En trois gestes</Kicker>
            <h1 id="titre-mesures" className="font-display mt-4 text-[clamp(1.8rem,4vw,3.2rem)] leading-tight">
              Mesurez, comparez, <span className="block sm:inline">choisissez</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl leading-[1.75] text-[#191610]/68">
              Posez à plat un vêtement dans lequel vous vous sentez bien. Mesurez-le sans tirer
              sur le tissu, puis comparez son type de coupe avec nos modèles.
            </p>
          </header>

          <div className="mt-9 sm:mt-12">
            <div className="min-w-0">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-x-7 lg:gap-y-0" aria-label="Tableaux des mesures par coupe">
                {PRODUITS.map((produit) => (
                  <article
                    key={produit.nom}
                    className="grid min-w-0 overflow-hidden border border-[#9c7e32]/25 bg-[#fcfaf5] shadow-[0_12px_36px_rgba(25,22,16,0.07)] lg:row-span-3 lg:grid-rows-subgrid"
                  >
                    <header className="border-t-2 border-[#d4b36a] bg-[#191610] px-5 py-6 sm:px-7 sm:py-7">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-[#e3c888]">
                          {produit.coupe}
                        </p>
                        <span className="text-[0.7rem] tracking-[0.06em] text-[#f5f1e8]/65">
                          {produit.mesures.length} tailles · {produit.mesures[0].taille} à {produit.mesures[produit.mesures.length - 1].taille}
                        </span>
                      </div>
                      <h2 className="font-display mt-4 text-[1.2rem] leading-snug text-[#f5f1e8] sm:text-[1.5rem]">
                        {produit.nom}
                      </h2>
                    </header>

                    <div className="min-w-0 px-3 pb-4 pt-5 sm:px-6 sm:pb-6">
                      <p className="mb-4 flex items-center justify-between gap-3 px-1 text-[0.7rem] text-[#6b6253]">
                        <span>Mesures à plat</span>
                        <span className="border border-[#9c7e32]/25 bg-[#f0e9da] px-2 py-0.5 font-medium text-[#6e5727]">En cm</span>
                      </p>
                      <table className="w-full table-fixed border-collapse text-center">
                        <caption className="sr-only">
                          Mesures indicatives en centimètres pour {produit.nom}
                        </caption>
                        <colgroup>
                          <col className="w-[22%]" />
                          <col className="w-[26%]" />
                          <col className="w-[26%]" />
                          <col className="w-[26%]" />
                        </colgroup>
                        <thead className="border-y border-[#9c7e32]/20 bg-[#f0e9da] text-[0.625rem] font-semibold uppercase tracking-[0.025em] text-[#625334] sm:text-[0.7rem] sm:tracking-[0.06em]">
                          <tr>
                            <th scope="col" className="px-1 py-4 font-semibold">
                              Taille
                            </th>
                            <th scope="col" className="px-1 py-4 font-semibold">
                              Épaules
                            </th>
                            <th scope="col" className="px-1 py-4 font-semibold">
                              Poitrine
                            </th>
                            <th scope="col" className="px-1 py-4 font-semibold">
                              Longueur
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#9c7e32]/15 border-b border-[#9c7e32]/20 text-[0.95rem] tabular-nums text-[#302a20] sm:text-base">
                          {produit.mesures.map((mesure) => (
                            <tr key={mesure.taille} className="group even:bg-[#f5f0e6]/60 transition-colors duration-150 hover:bg-[#ebe0c7]">
                              <th scope="row" className="bg-[#eee5d3]/35 px-1 py-3 font-medium">
                                <span className="inline-flex min-h-8 min-w-10 items-center justify-center border border-[#9c7e32]/30 bg-[#fcfaf5] px-1.5 text-[0.8rem] font-semibold tracking-[0.04em] text-[#715923] transition-colors duration-150 group-hover:border-[#80642d] group-hover:bg-[#80642d] group-hover:text-white">
                                  {mesure.taille}
                                </span>
                              </th>
                              <td className="px-1 py-3">{mesure.epaules}</td>
                              <td className="px-1 py-3">{mesure.poitrine}</td>
                              <td className="px-1 py-3">{mesure.longueur}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <footer className="border-t border-[#9c7e32]/20 bg-[#f3ede1] px-5 py-5 sm:px-7 sm:py-6">
                      <p className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#715923]">
                        <span className="h-px w-5 bg-[#9c7e32]" aria-hidden="true" />
                        Le conseil de la maison
                      </p>
                      <p className="mt-3 text-[0.875rem] leading-[1.7] text-[#4f483d]">{produit.conseil}</p>
                      <p className="mt-4 text-[0.7rem] leading-relaxed text-[#6b6253]">
                        {produit.matiere}
                      </p>
                    </footer>
                  </article>
                ))}
              </div>

              <div className="mt-5 border border-[#191610]/15 bg-white px-5 py-5 shadow-[0_8px_24px_rgba(25,22,16,0.08)] sm:flex sm:items-center sm:justify-between sm:gap-6">
                <div>
                  <p className="font-display text-[0.95rem] text-[#191610]">Encore un doute ?</p>
                  <p className="mt-2 max-w-md text-[0.8rem] leading-[1.55] text-[#191610]/62">
                    Envoyez-nous votre taille habituelle, votre taille et votre tour de poitrine : nous vous aiderons à choisir.
                  </p>
                </div>
                <div className="mt-5 shrink-0 sm:mt-0">
                  <Cta href="/contact" variante="noir">Demander conseil</Cta>
                </div>
              </div>

              <p className="mt-5 text-[0.7rem] leading-relaxed text-[#191610]/48">
                Mesures indicatives du vêtement posé à plat, en centimètres. Une tolérance
                de fabrication de ± 1 à 2 cm est possible. À confirmer après validation
                définitive des productions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
