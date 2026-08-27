import type { Metadata } from "next";

// Page de comparaison des typographies pour le hero (demande Tom).
// 20 polices A FORTE IDENTITE chargees via Google Fonts (link), chacune rendue sur le vrai titre.
export const metadata: Metadata = {
  title: "Typographies · Uncommon People Tribe",
  description: "Comparaison de 20 typographies à forte identité pour le hero.",
};

// [nom affiche, famille CSS, poids/style pour l'URL Google, description, note optionnelle]
type Font = { nom: string; famille: string; url: string; desc: string; note?: string };

const FONTS: Font[] = [
  { nom: "Anton", famille: "'Anton', sans-serif", url: "Anton", desc: "Grotesque ultra condensé et massif. Impact brut, sportif, streetwear. Très fort en gros titre." },
  { nom: "Bebas Neue", famille: "'Bebas Neue', sans-serif", url: "Bebas+Neue", desc: "Capitales hautes et serrées. Signature affiche/mode, sobre mais très présent." },
  { nom: "Archivo Black", famille: "'Archivo Black', sans-serif", url: "Archivo+Black", desc: "Grotesque noir et carré. Moderne, affirmé, esprit magazine contemporain." },
  { nom: "Big Shoulders Display", famille: "'Big Shoulders Display', sans-serif", url: "Big+Shoulders+Display:wght@500;700;900", desc: "Condensé industriel inspiré de Chicago. Fort caractère, un peu brut, très identitaire." },
  { nom: "Syne", famille: "'Syne', sans-serif", url: "Syne:wght@600;700;800", desc: "Grotesque display atypique, un peu déformé. Très arty, moderne, mode indépendante." },
  { nom: "Unbounded", famille: "'Unbounded', sans-serif", url: "Unbounded:wght@500;700", desc: "Display géométrique arrondi et audacieux. Contemporain, jeune, qui ose." },
  { nom: "Clash-like (Space Grotesk)", famille: "'Space Grotesk', sans-serif", url: "Space+Grotesk:wght@500;700", desc: "Grotesque technique aux détails marqués. Streetwear premium, esprit Clash Display.", note: "Alternative libre à Clash Display." },
  { nom: "Abril Fatface", famille: "'Abril Fatface', serif", url: "Abril+Fatface", desc: "Serif display gras à fort contraste. Éditorial fort, esprit affiche de mode vintage." },
  { nom: "Rozha One", famille: "'Rozha One', serif", url: "Rozha+One", desc: "Serif indien à contraste extrême et empattements fins. Rare, luxueux, très distinctif." },
  { nom: "Yeseva One", famille: "'Yeseva One', serif", url: "Yeseva+One", desc: "Serif display élégant aux courbes marquées. Chaleureux, féminin/premium, singulier." },
  { nom: "Prata", famille: "'Prata', serif", url: "Prata", desc: "Didone fine et haute couture. Très mode, raffiné, esprit maison de luxe." },
  { nom: "Gloock", famille: "'Gloock', serif", url: "Gloock", desc: "Serif contrasté moderne, généreux. Éditorial actuel, prestige sans être classique." },
  { nom: "DM Serif Display", famille: "'DM Serif Display', serif", url: "DM+Serif+Display:ital@0;1", desc: "Serif display haut de gamme, autorité lisible. Élégant, un cran plus original que Playfair." },
  { nom: "Fraunces", famille: "'Fraunces', serif", url: "Fraunces:ital,opsz,wght@0,9..144,500;1,9..144,500", desc: "Serif old-style chaleureux à détails organiques. Premium avec une âme, artisanal." },
  { nom: "Newsreader", famille: "'Newsreader', serif", url: "Newsreader:ital@0;1", desc: "Serif éditorial littéraire, italique superbe. Raconte une histoire, chic et posé." },
  { nom: "Marcellus", famille: "'Marcellus', serif", url: "Marcellus", desc: "Capitales romaines fines et nobles. Antique élégant, esprit lapidaire raffiné." },
  { nom: "Italiana", famille: "'Italiana', serif", url: "Italiana", desc: "Serif fin et aérien, très couture italienne. Léger, distingué, rare." },
  { nom: "Cormorant Garamond", famille: "'Cormorant Garamond', serif", url: "Cormorant+Garamond:ital,wght@0,500;0,600;1,500", desc: "Serif haute couture aux empattements fins (esprit Ogg / Canela). Éditorial, distinctif.", note: "Alternative libre à Ogg / Canela." },
  { nom: "Zilla Slab Highlight", famille: "'Zilla Slab', serif", url: "Zilla+Slab:wght@500;700", desc: "Slab serif robuste et carré. Solide, un peu brut, caractère affirmé." },
  { nom: "Bodoni Moda", famille: "'Bodoni Moda', serif", url: "Bodoni+Moda:ital,wght@0,500;0,700;1,500", desc: "Didone de mode à contraste extrême. L'ADN des magazines de mode et du luxe italien." },
];

function fontsUrl() {
  const families = FONTS.map((f) => `family=${f.url}`).join("&");
  return `https://fonts.googleapis.com/css2?${families}&display=swap`;
}

export default function Typographies() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href={fontsUrl()} rel="stylesheet" />
      <main className="min-h-screen bg-[#0A0908] pb-24 pt-32 text-[#F5F1E8]">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-center text-[0.7rem] uppercase tracking-[0.3em] text-[#E3C888]">
            Uncommon People Tribe
          </p>
          <h1
            className="mt-4 text-center text-[clamp(2rem,5vw,3.2rem)]"
            style={{ fontFamily: "'Prata', serif" }}
          >
            20 typographies à forte identité
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-center text-[0.9rem] leading-relaxed text-[#F5F1E8]/70">
            Le vrai titre du hero rendu dans 20 polices à caractère marqué. Dites-moi le
            ou les numéros qui vous parlent, je les applique sur le site.
          </p>

          <div className="mt-16 space-y-14">
            {FONTS.map((f, i) => (
              <section key={f.nom} className="border-t border-[#D4B36A]/25 pt-8">
                <h2 className="text-[0.72rem] uppercase tracking-[0.2em] text-[#E3C888]">
                  {i + 1}. {f.nom}
                </h2>
                <p className="mt-2 max-w-2xl text-[0.82rem] leading-relaxed text-[#F5F1E8]/65">
                  {f.desc}
                </p>
                {f.note && (
                  <p className="mt-1 text-[0.72rem] italic text-[#F5F1E8]/45">{f.note}</p>
                )}
                <div
                  className="mt-6 text-[clamp(1.9rem,5.5vw,3.8rem)] leading-[1.08]"
                  style={{ fontFamily: f.famille }}
                >
                  La Martinique ne se raconte pas.{" "}
                  <span className="italic text-[#E3C888]">Elle se porte.</span>
                </div>
                <div
                  className="mt-4 text-[clamp(1.1rem,2.5vw,1.6rem)] text-[#F5F1E8]/80"
                  style={{ fontFamily: f.famille }}
                >
                  Polo Signature UP · Collection Héritage
                </div>
              </section>
            ))}
          </div>

          <p className="mt-20 border-t border-[#D4B36A]/25 pt-8 text-center text-[0.8rem] text-[#F5F1E8]/55">
            Une police qui vous plaît ? Donnez-moi son numéro, je l&apos;installe sur tout le site.
          </p>
        </div>
      </main>
    </>
  );
}
