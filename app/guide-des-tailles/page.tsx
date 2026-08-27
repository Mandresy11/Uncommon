import Image from "next/image";
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
    tailles: ["M", "L", "XL", "XXL"],
    conseil: "Choisis ta taille habituelle pour un porté net. Si tu recherches plus d’aisance, privilégie la taille supérieure.",
    matiere: "Piqué premium · 95 % coton · 5 % élasthanne",
  },
  {
    nom: "Tee-shirt La Yole",
    coupe: "Coupe droite",
    tailles: ["S", "M", "L", "XL", "XXL"],
    conseil: "Choisis ta taille habituelle pour un tombé droit. Prends une taille au-dessus pour une allure plus ample.",
    matiere: "Coton peigné épais · Tombé structuré",
  },
] as const;

function Ornement({ sombre = false }: { sombre?: boolean }) {
  return (
    <span className="inline-flex items-center" aria-hidden="true">
      <span className="h-1.5 w-1.5 rotate-45 border border-[#c49a3f]" />
    </span>
  );
}

function SchemaMesures() {
  return (
    <div className="border border-[#191610]/15 bg-[#e5dcc9]/65 p-4 sm:p-7">
      <div className="relative mx-auto aspect-[4/4.2] w-full max-w-[17rem] sm:max-w-[24rem]">
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

      <dl className="mt-4 grid gap-4 sm:grid-cols-3">
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
      <section className="grain relative isolate overflow-hidden bg-[#090908] px-6 pb-14 pt-32 text-[#f5f1e8] sm:pb-20 sm:pt-40 lg:min-h-[47rem] lg:pb-24" aria-labelledby="titre-guide">
        <span
          className="absolute inset-0 -z-20 scale-105 bg-cover bg-center opacity-35"
          style={{ backgroundImage: "url(/img/fond-grain-or.webp)" }}
          aria-hidden="true"
        />
        <span className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_45%,rgba(173,129,48,0.12),transparent_38%),rgba(9,9,8,0.86)]" aria-hidden="true" />
        <span className="font-faq pointer-events-none absolute -left-6 bottom-0 -z-10 select-none text-[17rem] leading-none text-[#d4b36a]/[0.035] sm:text-[25rem]" aria-hidden="true">
          FIT
        </span>

        <div className="mx-auto grid w-full max-w-6xl min-w-0 items-center gap-10 sm:gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
          <div className="min-w-0">
            <Kicker>Bien choisir</Kicker>
            <h1 id="titre-guide" className="font-display mt-6 max-w-[35rem] text-[clamp(2.15rem,5vw,4.5rem)] leading-[1.06] tracking-[-0.02em] sm:mt-7">
              La bonne coupe,
              <br />
              <span className="italic text-[#e3c888]">sans hésiter.</span>
            </h1>
            <span className="mt-6 block sm:mt-7"><Ornement sombre /></span>
            <p className="mt-5 max-w-[33rem] text-[0.9rem] leading-[1.7] text-[#f5f1e8]/74 sm:mt-7 sm:text-[clamp(0.94rem,1.4vw,1.06rem)] sm:leading-[1.8]">
              Compare les coupes, prends trois mesures simples et trouve le tombé qui te
              correspond. Un bon choix commence toujours par un vêtement qui te va déjà bien.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3 text-[0.54rem] font-semibold uppercase leading-[1.45] tracking-[0.14em] text-[#d4b36a] sm:mt-8 sm:flex sm:flex-wrap sm:gap-x-7 sm:gap-y-3 sm:text-[0.63rem] sm:tracking-[0.2em]">
              <span>Du S au XXL</span>
              <span>Deux coupes</span>
              <span>Séries limitées</span>
            </div>
          </div>

          <div className="relative mx-auto grid h-[19rem] w-full max-w-[37rem] min-w-0 grid-cols-2 gap-2 sm:h-[25rem] sm:gap-3 lg:justify-self-end">
            <span className="absolute -bottom-3 -right-3 h-full w-full border border-[#d4b36a]/40" aria-hidden="true" />

            <div className="relative overflow-hidden border border-[#d4b36a]/25 bg-[#15120f]">
              <Image
                src="/img/polo-noir.webp"
                alt="Polo Signature UP noir à coupe normale"
                fill
                priority
                sizes="(min-width: 1024px) 290px, 45vw"
                className="object-cover object-top"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-[#090908]/80 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <p className="text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-[#d4b36a]">Signature</p>
                <p className="font-display mt-1 text-[0.82rem] uppercase text-[#f5f1e8] sm:text-[0.95rem]">Coupe normale</p>
              </div>
            </div>

            <div className="relative mt-8 overflow-hidden border border-[#d4b36a]/25 bg-[#15120f]">
              <Image
                src="/img/tee-noir.webp"
                alt="Tee-shirt La Yole noir à coupe droite"
                fill
                priority
                sizes="(min-width: 1024px) 290px, 45vw"
                className="object-cover object-top"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-[#090908]/80 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <p className="text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-[#d4b36a]">Héritage</p>
                <p className="font-display mt-1 text-[0.82rem] uppercase text-[#f5f1e8] sm:text-[0.95rem]">Coupe droite</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <p className="text-[0.67rem] font-semibold uppercase tracking-[0.3em] text-[#9c7e32]">En trois gestes</p>
            <h2 id="titre-mesures" className="font-display mt-4 text-[clamp(1.8rem,4vw,3.2rem)] leading-tight">
              Mesure, compare, <span className="block sm:inline">choisis</span>
            </h2>
            <span className="mt-5 flex justify-center"><Ornement /></span>
            <p className="mx-auto mt-6 max-w-xl leading-[1.75] text-[#191610]/68">
              Pose à plat un vêtement dans lequel tu te sens bien. Mesure-le sans tirer
              sur le tissu, puis compare son type de coupe avec nos modèles.
            </p>
          </header>

          <div className="mt-9 grid items-start gap-7 sm:mt-12 sm:gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
            <SchemaMesures />

            <div className="min-w-0">
              <div
                className="-mx-6 flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto overflow-y-hidden scroll-px-6 px-6 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:block sm:snap-none sm:space-y-5 sm:overflow-visible sm:px-0 sm:pb-0"
                style={{ touchAction: "pan-x", overscrollBehaviorInline: "contain" }}
                aria-label="Coupes et tailles disponibles"
              >
                {PRODUITS.map((produit) => (
                <article key={produit.nom} className="w-[78vw] max-w-[18rem] shrink-0 snap-start border border-[#191610]/14 bg-[#f8f3eb]/90 p-5 shadow-[0_16px_38px_rgba(25,22,16,0.06)] sm:w-auto sm:max-w-none sm:shrink sm:p-8">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#9c7e32]">{produit.coupe}</p>
                      <h3 className="font-display mt-2 text-[1.15rem] text-[#191610] sm:text-[1.3rem]">{produit.nom}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2" aria-label={`Tailles disponibles pour ${produit.nom}`}>
                      {produit.tailles.map((taille) => (
                        <span key={taille} className="flex h-9 min-w-9 items-center justify-center border border-[#9c7e32]/45 bg-[#efe5d5] px-2 text-[0.7rem] font-semibold text-[#191610]">
                          {taille}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="mt-5 block h-px w-full bg-[#191610]/10" aria-hidden="true" />
                  <p className="mt-5 text-[0.88rem] leading-[1.65] text-[#191610]/72">{produit.conseil}</p>
                  <p className="mt-3 text-[0.68rem] uppercase tracking-[0.12em] text-[#191610]/48">{produit.matiere}</p>
                </article>
                ))}
              </div>

              <div className="mt-5 border-l-2 border-[#d4b36a] bg-[#e5dcc9]/55 px-5 py-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
                <div>
                  <p className="font-display text-[0.95rem] text-[#191610]">Encore un doute ?</p>
                  <p className="mt-2 max-w-md text-[0.8rem] leading-[1.55] text-[#191610]/62">
                    Envoie-nous ta taille habituelle, ta taille et ton tour de poitrine : nous t’aiderons à choisir.
                  </p>
                </div>
                <div className="mt-5 shrink-0 sm:mt-0">
                  <Cta href="/contact" variante="noir">Demander conseil</Cta>
                </div>
              </div>

              <p className="mt-5 text-[0.7rem] leading-relaxed text-[#191610]/48">
                Les mensurations détaillées de chaque vêtement seront ajoutées après validation définitive des productions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
