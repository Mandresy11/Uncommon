import Image from "next/image";
import Link from "next/link";

const SAVOIR_FAIRE = [
  {
    collection: "Héritage",
    geste: "La sérigraphie",
    titre: "Une yole dessinée comme un emblème.",
    description:
      "L’or révèle les reliefs du dessin et transforme un symbole martiniquais en pièce manifeste.",
    image: "/img/detail-yole.webp",
    alt: "Détail de la yole sérigraphiée en doré sur le tee-shirt Héritage",
    href: "/produit/tee-shirt-la-yole",
  },
  {
    collection: "Signature",
    geste: "La broderie",
    titre: "Un monogramme pensé pour durer.",
    description:
      "Point après point, le fil doré donne du relief au monogramme UP et signe la pièce avec discrétion.",
    image: "/img/detail-monogramme.webp",
    alt: "Détail du monogramme UP brodé en fil doré sur le polo Signature",
    href: "/produit/polo-signature-up",
  },
] as const;

function Fleche() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Losange() {
  return (
    <span className="flex items-center gap-3" aria-hidden="true">
      <span className="h-px w-9 bg-[#c79e47]/65" />
      <span className="h-2 w-2 rotate-45 border border-[#d4b36a]" />
      <span className="h-px w-9 bg-[#c79e47]/65" />
    </span>
  );
}

export function Comparatif() {
  return (
    <section
      className="grain relative isolate overflow-hidden bg-[#0a0908] px-5 py-16 text-[#f5f1e8] sm:px-8 sm:py-20 lg:py-28"
      aria-labelledby="titre-savoir-faire"
    >
      <span
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center opacity-[0.035] mix-blend-screen"
        style={{ backgroundImage: "url(/img/fond-grain-or.webp)" }}
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -right-24 -top-32 -z-10 select-none font-faq text-[22rem] leading-none text-[#d4b36a]/[0.025] lg:text-[34rem]"
        aria-hidden="true"
      >
        UP
      </span>

      <div className="mx-auto max-w-[80rem]">
        <header className="grid items-end gap-8 border-b border-[#d4b36a]/25 pb-10 lg:grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.55fr)] lg:gap-16 lg:pb-14">
          <div>
            <div className="flex items-center gap-4 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#d4b36a]">
              <span>Le détail UPT</span>
              <span className="h-px w-14 bg-[#d4b36a]/55" aria-hidden="true" />
            </div>
            <h2
              id="titre-savoir-faire"
              className="font-display mt-5 max-w-[52rem] text-[clamp(2.55rem,6.2vw,5.4rem)] leading-[0.98] tracking-[-0.025em]"
            >
              L&apos;or comme
              <span className="block font-faq italic text-[#d8b45f]">fil conducteur.</span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <Losange />
            <p className="mt-6 max-w-[25rem] text-[0.86rem] leading-[1.8] text-[#f5f1e8]/68 sm:text-[0.94rem]">
              Deux techniques, une même exigence. Sur chaque pièce, la finition dorée raconte notre lien à la Martinique sans jamais en faire trop.
            </p>
          </div>
        </header>

        <div className="mt-12 grid gap-14 lg:mt-16 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0">
          {SAVOIR_FAIRE.map((item, index) => (
            <article
              key={item.collection}
              className={index === 0 ? "group lg:col-span-7" : "group lg:col-span-5 lg:mt-32"}
            >
              <Link href={item.href} className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e3c888]">
                <div
                  className={`relative overflow-hidden bg-[#17130f] ${
                    index === 0 ? "aspect-[1.38/1]" : "aspect-[1.08/1]"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes={index === 0 ? "(min-width: 1024px) 720px, calc(100vw - 40px)" : "(min-width: 1024px) 500px, calc(100vw - 40px)"}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080706]/80 via-transparent to-[#080706]/10" aria-hidden="true" />
                  <p className="absolute bottom-5 left-5 text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-[#f5f1e8]/85 sm:bottom-7 sm:left-7">
                    Collection {item.collection}
                  </p>
                </div>
              </Link>

              <div className="grid gap-5 border-t border-[#d4b36a]/30 pt-6 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8 lg:pt-7">
                <p className="text-[0.61rem] font-semibold uppercase tracking-[0.22em] text-[#d4b36a]">
                  {item.geste}
                </p>
                <div>
                  <h3 className="font-display text-[clamp(1.35rem,2.2vw,1.9rem)] leading-[1.18]">
                    {item.titre}
                  </h3>
                  <p className="mt-4 max-w-[31rem] text-[0.8rem] leading-[1.75] text-[#f5f1e8]/62 sm:text-[0.86rem]">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-5 inline-flex items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.19em] text-[#e3c888] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e3c888]"
                  >
                    Voir la pièce
                    <span className="transition-transform duration-300 group-hover:translate-x-1"><Fleche /></span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-7 border border-[#d4b36a]/35 px-6 py-7 text-center sm:px-9 lg:mt-24 lg:flex-row lg:py-8 lg:text-left">
          <p className="font-faq text-[clamp(1.15rem,2vw,1.55rem)] italic text-[#f5f1e8]/88">
            Sérigraphiée ou brodée, chaque pièce porte la même histoire.
          </p>
          <Link
            href="/boutique"
            className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-4 bg-[#d4b36a] px-7 text-[0.64rem] font-bold uppercase tracking-[0.18em] text-[#0a0908] transition-colors hover:bg-[#e3c888] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e3c888]"
          >
            Explorer la boutique
            <span className="transition-transform duration-300 group-hover:translate-x-1"><Fleche /></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
