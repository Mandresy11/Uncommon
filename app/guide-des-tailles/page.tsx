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

function SchemaMesures() {
  return (
    <div className="grid items-center border border-[#191610]/15 bg-[#e5dcc9]/65 p-4 sm:p-7 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 lg:p-10">
      <div className="relative mx-auto aspect-[4/4.2] w-full max-w-[17rem] sm:max-w-[21rem]">
        <svg viewBox="0 0 360 378" className="h-full w-full" aria-hidden="true">
          <path
            d="M128 60 88 80 46 142l39 24 20-28v184h150V138l20 28 39-24-42-62-40-20c-6 24-25 38-52 38s-46-14-52-38Z"
            fill="#f5f1e8"
            stroke="#8f7134"
            strokeWidth="1.5"
          />
          <path d="M128 60c6 24 25 38 52 38s46-14 52-38" fill="none" stroke="#8f7134" strokeWidth="1.5" />
          <path d="M105 138h150M105 322h150" fill="none" stroke="#191610" strokeOpacity=".12" />

          <g fill="none" stroke="#b58c35" strokeWidth="1.6">
            <path d="M112 116h136" />
            <path d="m112 116 8-5m-8 5 8 5m128-5-8-5m8 5-8 5" />
            <path d="M100 205h160" />
            <path d="m100 205 8-5m-8 5 8 5m152-5-8-5m8 5-8 5" />
            <path d="M285 116v206" />
            <path d="m285 116-5 8m5-8 5 8m-5 198-5-8m5 8 5-8" />
          </g>

          <g fill="#0a0908" stroke="#d4b36a" strokeWidth="1">
            <circle cx="180" cy="116" r="14" />
            <circle cx="180" cy="205" r="14" />
            <circle cx="285" cy="219" r="14" />
          </g>
          <g fill="#e3c888" fontFamily="serif" fontSize="13" textAnchor="middle" dominantBaseline="central">
            <text x="180" y="116">A</text>
            <text x="180" y="205">B</text>
            <text x="285" y="219">C</text>
          </g>
        </svg>
      </div>

      <dl className="mt-4 grid gap-4 sm:grid-cols-3 lg:mt-0 lg:grid-cols-1 lg:gap-6">
        <div className="border-t border-[#9c7e32]/35 pt-3">
          <dt className="font-display text-[0.82rem] uppercase tracking-[0.08em] text-[#191610]">A · Épaules</dt>
          <dd className="mt-2 text-[0.76rem] leading-[1.55] text-[#191610]/65">D’une couture d’épaule à l’autre.</dd>
        </div>
        <div className="border-t border-[#9c7e32]/35 pt-3">
          <dt className="font-display text-[0.82rem] uppercase tracking-[0.08em] text-[#191610]">B · Poitrine</dt>
          <dd className="mt-2 text-[0.76rem] leading-[1.55] text-[#191610]/65">D’aisselle à aisselle, vêtement posé à plat.</dd>
        </div>
        <div className="border-t border-[#9c7e32]/35 pt-3">
          <dt className="font-display text-[0.82rem] uppercase tracking-[0.08em] text-[#191610]">C · Longueur</dt>
          <dd className="mt-2 text-[0.76rem] leading-[1.55] text-[#191610]/65">Du haut de l’épaule jusqu’au bas.</dd>
        </div>
      </dl>
    </div>
  );
}

export default function GuideTailles() {
  return (
    <main className="overflow-x-hidden">
      <div className="h-[6.6rem] bg-[#0a0908]" aria-hidden="true" />

      <section className="relative overflow-hidden bg-[#f1e9dc] px-6 py-14 text-[#191610] sm:py-20 md:py-28" aria-labelledby="titre-mesures">
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
            <SchemaMesures />

            <div className="mt-7 min-w-0 sm:mt-8">
              <div className="grid items-stretch gap-6 lg:grid-cols-2" aria-label="Tableaux des mesures par coupe">
                {PRODUITS.map((produit) => (
                  <article
                    key={produit.nom}
                    className="min-w-0 overflow-hidden border border-[#191610]/14 bg-[#f8f3eb]/90 shadow-[0_16px_38px_rgba(25,22,16,0.06)]"
                  >
                    <div className="flex flex-col gap-3 px-5 pb-4 pt-5 sm:flex-row sm:items-start sm:justify-between sm:px-7 sm:pt-6">
                      <div>
                        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#9c7e32]">
                          {produit.coupe}
                        </p>
                        <h3 className="font-display mt-2 text-[1.1rem] text-[#191610] sm:text-[1.25rem]">
                          {produit.nom}
                        </h3>
                      </div>
                      <span className="w-fit border border-[#9c7e32]/35 bg-[#e5dcc9]/50 px-3 py-1.5 text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-[#7e642d]">
                        Mesures à plat · cm
                      </span>
                    </div>

                    <div
                      className="overflow-hidden border-y border-[#191610]/10"
                    >
                      <table className="w-full table-fixed border-collapse text-center">
                        <caption className="sr-only">
                          Mesures indicatives en centimètres pour {produit.nom}
                        </caption>
                        <colgroup>
                          <col className="w-[18%]" />
                          <col className="w-[27.33%]" />
                          <col className="w-[27.33%]" />
                          <col className="w-[27.34%]" />
                        </colgroup>
                        <thead className="bg-[#17140f] text-[#f5f1e8]">
                          <tr>
                            <th scope="col" className="px-2 py-2.5 text-left text-[0.5rem] font-semibold uppercase tracking-[0.08em] text-[#e3c888] sm:px-4 sm:py-3 sm:text-[0.59rem] sm:tracking-[0.16em]">
                              Taille
                            </th>
                            <th scope="col" className="px-0.5 py-2.5 text-[0.48rem] font-semibold uppercase tracking-[0.045em] sm:px-3 sm:py-3 sm:text-[0.59rem] sm:tracking-[0.12em]">
                              <span className="mb-0.5 block text-[#d4b36a] sm:mb-0 sm:mr-1 sm:inline">A</span>
                              Épaules
                            </th>
                            <th scope="col" className="px-0.5 py-2.5 text-[0.48rem] font-semibold uppercase tracking-[0.045em] sm:px-3 sm:py-3 sm:text-[0.59rem] sm:tracking-[0.12em]">
                              <span className="mb-0.5 block text-[#d4b36a] sm:mb-0 sm:mr-1 sm:inline">B</span>
                              Poitrine
                            </th>
                            <th scope="col" className="px-0.5 py-2.5 text-[0.48rem] font-semibold uppercase tracking-[0.045em] sm:px-3 sm:py-3 sm:text-[0.59rem] sm:tracking-[0.12em]">
                              <span className="mb-0.5 block text-[#d4b36a] sm:mb-0 sm:mr-1 sm:inline">C</span>
                              Longueur
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#191610]/10">
                          {produit.mesures.map((mesure, index) => (
                            <tr key={mesure.taille} className={index % 2 === 0 ? "bg-white/55" : "bg-[#e5dcc9]/35"}>
                              <th scope="row" className="px-2 py-3 text-left font-display text-[0.72rem] font-semibold text-[#9c7e32] sm:px-4 sm:text-[0.78rem]">
                                {mesure.taille}
                              </th>
                              <td className="px-1 py-3 text-[0.76rem] tabular-nums text-[#191610]/78 sm:px-3 sm:text-[0.82rem]">{mesure.epaules}</td>
                              <td className="px-1 py-3 text-[0.76rem] tabular-nums text-[#191610]/78 sm:px-3 sm:text-[0.82rem]">{mesure.poitrine}</td>
                              <td className="px-1 py-3 text-[0.76rem] tabular-nums text-[#191610]/78 sm:px-3 sm:text-[0.82rem]">{mesure.longueur}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="px-5 pb-5 pt-4 sm:px-7 sm:pb-6">
                      <p className="text-[0.84rem] leading-[1.65] text-[#191610]/72">{produit.conseil}</p>
                      <p className="mt-3 text-[0.64rem] uppercase tracking-[0.12em] text-[#191610]/48">
                        {produit.matiere}
                      </p>
                    </div>
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
