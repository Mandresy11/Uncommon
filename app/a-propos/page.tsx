import Image from "next/image";
import { Cta, Kicker } from "@/components/cta";

export const metadata = {
  title: "À propos · Uncommon People Tribe",
  description:
    "Découvrez la maison Uncommon People Tribe, ses valeurs et sa façon de transformer les symboles martiniquais en vêtements contemporains.",
};

const VALEURS = [
  {
    numero: "01",
    titre: "Identité",
    image: "/img/detail-yole.webp",
    alt: "Détail doré de la yole, symbole de la collection Héritage",
    texte:
      "Représenter la Martinique avec justesse, par ses symboles et son énergie, jamais comme un simple décor.",
  },
  {
    numero: "02",
    titre: "Exigence",
    image: "/img/detailv-pique.webp",
    alt: "Gros plan sur la matière piquée premium d’un polo",
    texte:
      "Sélectionner des matières premium et accorder la même attention à la coupe, au toucher et aux finitions.",
  },
  {
    numero: "03",
    titre: "Distinction",
    image: "/img/detail-monogramme.webp",
    alt: "Monogramme UP brodé au fil doré sur un polo noir",
    texte:
      "Créer des pièces sobres et reconnaissables, capables d’affirmer une identité sans jamais la caricaturer.",
  },
] as const;

const CREATION = [
  {
    numero: "01",
    titre: "Le symbole",
    texte: "La yole, les couleurs et les signes de l’île constituent notre point de départ.",
  },
  {
    numero: "02",
    titre: "Le dessin",
    texte: "Chaque référence est épurée pour devenir un langage graphique contemporain.",
  },
  {
    numero: "03",
    titre: "Le geste",
    texte: "Broderie ou sérigraphie, la technique est choisie pour servir le motif et la matière.",
  },
  {
    numero: "04",
    titre: "La pièce",
    texte: "Le symbole prend vie sur un vêtement pensé pour être porté, transmis et remarqué avec subtilité.",
  },
] as const;

function Ornement({ sombre = false }: { sombre?: boolean }) {
  return (
    <span className="inline-flex items-center" aria-hidden="true">
      <span className="h-1.5 w-1.5 rotate-45 border border-[#c49a3f]" />
    </span>
  );
}

export default function APropos() {
  return (
    <main className="overflow-x-hidden">
      <section className="grain relative isolate overflow-hidden bg-[#090908] px-6 pb-20 pt-36 text-[#f5f1e8] sm:pt-40 lg:min-h-[50rem] lg:pb-24" aria-labelledby="titre-maison">
        <span
          className="absolute inset-0 -z-20 scale-105 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url(/img/fond-broderie.webp)" }}
          aria-hidden="true"
        />
        <span className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#090908_0%,rgba(9,9,8,0.9)_45%,rgba(9,9,8,0.48)_100%)]" aria-hidden="true" />
        <span className="font-faq pointer-events-none absolute -left-10 bottom-0 -z-10 select-none text-[18rem] leading-none text-[#d4b36a]/[0.035] sm:text-[28rem]" aria-hidden="true">
          UP
        </span>

        <div className="mx-auto grid w-full max-w-6xl min-w-0 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="relative z-10 min-w-0">
            <Kicker>À propos</Kicker>
            <h1 id="titre-maison" className="font-display mt-7 max-w-[37rem] text-[clamp(2.6rem,5vw,4.6rem)] leading-[1.05] tracking-[-0.02em]">
              La Martinique,
              <br />
              <span className="italic text-[#e3c888]">
                portée <span className="block sm:inline">autrement.</span>
              </span>
            </h1>
            <span className="mt-7 block"><Ornement sombre /></span>
            <p className="mt-7 max-w-[34rem] text-[clamp(0.95rem,1.5vw,1.08rem)] leading-[1.8] text-[#f5f1e8]/76">
              Uncommon People Tribe est une maison martiniquaise de vêtements premium.
              Nous transformons les codes, les symboles et l’énergie de l’île en pièces
              sobres, contemporaines et faites pour durer.
            </p>
            <p className="mt-7 text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-[#d4b36a]">
              Martinique · 14°36&apos; N · 61°05&apos; W
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[36rem] min-w-0 lg:justify-self-end">
            <span className="absolute -bottom-3 -right-3 h-full w-full border border-[#d4b36a]/45" aria-hidden="true" />
            <span className="absolute -right-3 -top-3 z-20 h-6 w-6 rotate-45 border border-[#d4b36a] bg-[#090908]" aria-hidden="true" />
            <div className="relative aspect-[1.12/1] overflow-hidden border border-[#d4b36a]/30 bg-[#11100e]">
              <Image
                src="/img/detail-pile.webp"
                alt="Polos noir, vert et rouge de la collection Signature, brodés du monogramme UP"
                fill
                priority
                sizes="(min-width: 1024px) 576px, calc(100vw - 48px)"
                className="object-cover object-center contrast-[1.08]"
              />
              <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(9,9,8,0.06),transparent_52%,rgba(9,9,8,0.55))]" aria-hidden="true" />
              <span className="absolute bottom-5 right-5 border border-[#d4b36a]/55 bg-[#090908]/80 px-4 py-3 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-[#e3c888] backdrop-blur-sm">
                West Indian Excellence
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f1e9dc] px-6 py-20 text-[#191610] md:py-28" aria-labelledby="titre-valeurs">
        <span
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.2] mix-blend-multiply"
          style={{ backgroundImage: "url(/img/fond-papier.webp)" }}
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute -left-28 top-0 h-[32rem] w-[34rem] bg-contain bg-left-top bg-no-repeat opacity-[0.08] mix-blend-multiply"
          style={{ backgroundImage: "url(/img/fond-feuillage.webp)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl min-w-0">
          <header className="mx-auto max-w-2xl text-center">
            <p className="text-[0.67rem] font-semibold uppercase tracking-[0.3em] text-[#9c7e32]">L’ADN de la maison</p>
            <h2 id="titre-valeurs" className="font-display mt-4 text-[clamp(1.75rem,4vw,3.25rem)] leading-tight">
              Ce qui nous <span className="block sm:inline">guide</span>
            </h2>
            <span className="mt-5 flex justify-center"><Ornement /></span>
            <p className="mx-auto mt-6 max-w-xl leading-[1.75] text-[#191610]/68">
              Trois principes donnent une direction à chaque création et définissent
              la façon dont nous souhaitons représenter notre île.
            </p>
          </header>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VALEURS.map((valeur) => (
              <article key={valeur.numero} className="group min-w-0 border border-[#191610]/14 bg-[#f7f2e9]/85 shadow-[0_18px_45px_rgba(25,22,16,0.07)]">
                <div className="relative aspect-[1.35/1] overflow-hidden bg-[#171510]">
                  <Image
                    src={valeur.image}
                    alt={valeur.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, calc(100vw - 48px)"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-[#0a0908]/55 via-transparent to-transparent" aria-hidden="true" />
                  <span className="font-faq absolute bottom-3 left-4 text-[2.8rem] leading-none text-[#e3c888]">
                    {valeur.numero}
                  </span>
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="font-display text-xl text-[#191610]">{valeur.titre}</h3>
                  <p className="mt-5 text-[0.9rem] leading-[1.7] text-[#191610]/70">{valeur.texte}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grain relative isolate overflow-hidden bg-[#0a0908] px-6 py-20 text-[#f5f1e8] md:py-28" aria-labelledby="titre-creation">
        <span
          className="absolute inset-0 -z-20 bg-cover bg-center opacity-35"
          style={{ backgroundImage: "url(/img/fond-grain-or.webp)" }}
          aria-hidden="true"
        />
        <span className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_45%,rgba(190,145,53,0.1),transparent_38%),rgba(10,9,8,0.82)]" aria-hidden="true" />

        <div className="mx-auto grid w-full max-w-6xl min-w-0 items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
          <div className="relative mx-auto hidden w-full max-w-[28rem] min-w-0 sm:block lg:mx-0">
            <span className="absolute -left-3 -top-3 h-full w-full border border-[#d4b36a]/45" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden border border-[#d4b36a]/25 bg-[#16130f]">
              <Image
                src="/img/tee-noir.webp"
                alt="Tee-shirt noir La Yole porté, aboutissement du processus de création"
                fill
                sizes="(min-width: 1024px) 448px, calc(100vw - 48px)"
                className="object-cover object-top"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-[#090908]/65 via-transparent to-transparent" aria-hidden="true" />
              <p className="absolute bottom-6 left-6 right-6 text-[0.61rem] font-semibold uppercase tracking-[0.22em] text-[#e3c888]">
                Héritage · Tee-shirt La Yole
              </p>
            </div>
          </div>

          <div className="min-w-0">
            <p className="text-[0.67rem] font-semibold uppercase tracking-[0.3em] text-[#d4b36a]">Notre façon de créer</p>
            <h2 id="titre-creation" className="font-display mt-4 text-[clamp(1.85rem,4vw,3.4rem)] leading-tight">
              Du symbole <span className="block sm:inline">à la pièce</span>
            </h2>
            <span className="mt-5 block"><Ornement sombre /></span>
            <p className="mt-6 max-w-xl leading-[1.75] text-[#f5f1e8]/68">
              Nous ne reproduisons pas un symbole : nous cherchons la forme juste pour
              qu’il trouve naturellement sa place sur un vêtement contemporain.
            </p>

            <ol className="relative mt-9 border-l border-[#d4b36a]/35 pl-7 sm:pl-9">
              {CREATION.map((etape) => (
                <li key={etape.numero} className="relative pb-7 last:pb-0">
                  <span className="absolute -left-[2.22rem] top-1 h-3 w-3 rotate-45 border border-[#d4b36a] bg-[#0a0908] sm:-left-[2.72rem]" aria-hidden="true" />
                  <div className="grid gap-2 sm:grid-cols-[3.25rem_minmax(0,1fr)] sm:gap-4">
                    <span className="font-faq text-xl text-[#d4b36a]">{etape.numero}</span>
                    <div>
                      <h3 className="font-display text-[1.03rem] uppercase tracking-[0.04em] text-[#f5f1e8]">{etape.titre}</h3>
                      <p className="mt-2 max-w-lg text-[0.88rem] leading-[1.65] text-[#f5f1e8]/66">{etape.texte}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10">
              <Cta href="/collections" variante="or">Découvrir les collections</Cta>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
