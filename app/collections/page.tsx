import Image from "next/image";
import Link from "next/link";
import { IconFleche } from "@/components/icons";
import { Kicker } from "@/components/cta";
import { Comparatif } from "./comparatif";
import { EditionYoles } from "./edition-yoles";

export const metadata = {
  title: "Collections · Uncommon People Tribe",
  description: "Les collections Héritage et Signature de la marque martiniquaise Uncommon People Tribe.",
};

function TimbreHeritage() {
  return (
    <svg viewBox="0 0 180 180" className="h-full w-full overflow-visible text-[#b98e3e]" aria-hidden="true">
      <defs>
        <path id="cercle-timbre-heritage" d="M 90,90 m -65,0 a 65,65 0 1,1 130,0 a 65,65 0 1,1 -130,0" />
      </defs>
      <circle cx="90" cy="90" r="61" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <text fill="currentColor" fontSize="10.5" letterSpacing="4.2">
        <textPath href="#cercle-timbre-heritage" startOffset="2%">WEST INDIAN EXCELLENCE · MARTINIQUE ·</textPath>
      </text>
      <text x="90" y="99" textAnchor="middle" fill="currentColor" fontFamily="serif" fontSize="28">UP</text>
    </svg>
  );
}

function LienCollection({ variante = "sombre" }: { variante?: "sombre" | "clair" }) {
  return (
    <Link
      href="/boutique"
      className={`group relative inline-flex h-[2.625rem] items-center justify-between gap-3 px-5 text-[0.64rem] font-semibold uppercase tracking-[0.17em] transition-colors ${
        variante === "sombre"
          ? "btn-cut w-64 bg-[#17130f] text-[#f3ede3] hover:bg-[#2b241d]"
          : "w-[16.5rem] border border-[#b98e3e]/55 bg-[#f5efe5]/45 text-[#2f2922] hover:bg-[#e9ddca]/70"
      }`}
    >
      <span>Découvrir la collection</span>
      <IconFleche className="text-[1rem] text-[#b98e3e] transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      {variante === "clair" && <span className="pointer-events-none absolute inset-1 border border-[#b98e3e]/22" aria-hidden="true" />}
    </Link>
  );
}

export default function Collections() {
  return (
    <main className="bg-[#f1e9dc] text-[#251f19]">
      <div className="h-[6.6rem] bg-[#0A0908]" aria-hidden="true" />

      <section className="relative min-h-[54rem] overflow-hidden bg-[#f3ede3] px-5 pb-16 pt-4 md:px-8 lg:pb-12">
        <span
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.045] mix-blend-multiply"
          style={{ backgroundImage: "url(/img/fond-papier.webp)" }}
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute -left-44 top-12 h-[30rem] w-[42rem] bg-contain bg-left-top bg-no-repeat opacity-[0.065] mix-blend-multiply"
          style={{ backgroundImage: "url(/img/fond-feuillage.webp)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-[70.5rem]">
          <article className="grid items-start gap-8 lg:grid-cols-[32.5rem_minmax(0,1fr)] lg:gap-[4.5rem]">
            <div className="relative mx-auto w-full max-w-[28.375rem] lg:ml-[4.25rem] lg:mr-0">
              <div className="absolute -bottom-2 -right-2 h-full w-full border border-[#b98e3e]/70" aria-hidden="true" />
              <div className="absolute -right-2 -top-2 z-20 h-4 w-4 rotate-45 border border-[#c29a4b] bg-[#f3ede3]" aria-hidden="true" />
              <div className="relative aspect-[1.247/1] overflow-hidden bg-[#d4b486]">
                <Image
                  src="/img/tee-sable.webp"
                  alt="Homme portant le tee-shirt sable de la collection Héritage"
                  fill
                  priority
                  sizes="(min-width: 1024px) 454px, (min-width: 640px) 70vw, calc(100vw - 40px)"
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute -left-[7rem] top-[10.25rem] hidden h-32 w-32 -rotate-[12deg] lg:block">
                <TimbreHeritage />
              </div>
            </div>

            <div className="mx-auto w-full max-w-[29rem] pt-1 lg:mx-0 lg:pl-5 lg:pt-11">
              <Kicker>Collection</Kicker>
              <h1 className="font-faq mt-2 text-[clamp(3.25rem,5vw,3.85rem)] font-medium uppercase leading-[0.9] tracking-[0.075em] text-[#1d1915]">Héritage</h1>
              <p className="font-faq mt-4 text-[1.23rem] italic text-[#b18435]">L&apos;héritage, fièrement porté.</p>
              <p className="mt-5 max-w-[24rem] text-[0.81rem] leading-[1.65] text-[#403832]/80">
                Les tee-shirts aux visuels inspirés des traditions martiniquaises. Chaque visuel raconte un morceau de l&apos;île, sérigraphié or sur coton premium.
              </p>
              <div className="mt-7"><LienCollection /></div>
            </div>
          </article>

          <article className="mt-12 grid items-start gap-8 lg:mt-8 lg:grid-cols-[30rem_minmax(0,1fr)] lg:gap-[2.375rem]">
            <div className="order-2 mx-auto w-full max-w-[30rem] lg:order-1 lg:mx-0 lg:ml-32 lg:pt-14">
              <div className="relative">
                <div className="absolute -left-20 top-0 hidden h-[17.5rem] w-[3.5rem] lg:flex lg:items-center lg:justify-center">
                  <p className="[writing-mode:vertical-rl] rotate-180 text-[0.64rem] uppercase tracking-[0.22em] text-[#ad8130]">
                    De la tradition <span className="mx-2 inline-block h-1.5 w-1.5 rotate-45 bg-[#b98e3e]" /> à la modernité
                  </p>
                </div>
                <Kicker>Collection</Kicker>
                <h2 className="font-faq mt-2 text-[clamp(3.1rem,4.5vw,3.65rem)] font-medium uppercase leading-[0.92] tracking-[0.075em] text-[#1d1915]">Signature</h2>
                <p className="font-faq mt-4 text-[1.2rem] italic text-[#b18435]">L&apos;élégance dans chaque détail.</p>
                <p className="mt-5 max-w-[22rem] text-[0.81rem] leading-[1.65] text-[#403832]/80">
                  Polos piqués premium au monogramme UP brodé au fil d&apos;or. Noir, vert et rouge : les couleurs du drapeau, portées avec élégance.
                </p>
                <div className="mt-7"><LienCollection variante="clair" /></div>
              </div>
            </div>

            <div className="order-1 mx-auto w-full max-w-[36rem] lg:order-2 lg:mx-0">
              <div className="relative min-h-0 overflow-hidden border border-[#b98e3e]/45 bg-[#e8ddc9] p-4 pb-5 lg:min-h-[23.75rem] lg:pl-11 lg:pr-[5.25rem]">
                <span className="pointer-events-none absolute -right-2 top-1/2 -translate-y-1/2 rotate-90 font-faq text-[5.5rem] font-light leading-none text-[#b98e3e]/18" aria-hidden="true">UP</span>
                <span className="absolute -right-2 -top-2 h-4 w-4 rotate-45 border border-[#c29a4b] bg-[#f3ede3]" aria-hidden="true" />
                <div className="relative aspect-[1.315/1] overflow-hidden bg-[#b88e6b]">
                  <Image
                    src="/img/polo-rouge.webp"
                    alt="Homme portant le polo rouge de la collection Signature"
                    fill
                    sizes="(min-width: 1024px) 450px, (min-width: 640px) 70vw, calc(100vw - 72px)"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Comparatif />
      <EditionYoles />
    </main>
  );
}
