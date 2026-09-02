// INSPIRATION: jeehaans.vercel.app + roboli-demo.vercel.app (WebFetch) : footer e-commerce 4 colonnes,
// mention paiement securise. Adapte a l'identite UPT (noir, filets or, lisere drapeau).
import Link from "next/link";
import { IconInstagram, IconFacebook, IconEmail, LisereDrapeau } from "./icons";

const colonnes = [
  {
    titre: "Boutique",
    liens: [
      { href: "/boutique", label: "Tous les produits" },
      { href: "/collections", label: "Collection Héritage" },
      { href: "/collections", label: "Collection Signature" },
      { href: "/guide-des-tailles", label: "Guide des tailles" },
    ],
  },
  {
    titre: "Aide",
    liens: [
      { href: "/faq", label: "FAQ" },
      { href: "/livraison-retours", label: "Livraison et retours" },
      { href: "/contact", label: "Contact" },
      { href: "/panier", label: "Panier" },
    ],
  },
  {
    titre: "La maison",
    liens: [
      { href: "/notre-histoire", label: "Notre histoire" },
      { href: "/mentions-legales", label: "Mentions légales" },
      { href: "/cgv", label: "CGV" },
      { href: "/confidentialite", label: "Confidentialité" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-[#0A0908]">
      <LisereDrapeau />
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl text-[#E3C888]">UP</p>
          <p className="mt-1 text-[0.6rem] uppercase tracking-[0.28em] text-[#F5F1E8]/85">
            Uncommon People Tribe
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#F5F1E8]/75">
            Marque de vêtements premium née en Martinique. West Indian Excellence.
          </p>
          <div className="mt-5 flex gap-4 text-xl text-[#F5F1E8]/80">
            <a href="https://www.instagram.com/uncommonpeopletribe" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-colors hover:text-[#E3C888]"><IconInstagram /></a>
            <a href="https://www.facebook.com/uncommonpeopletribe" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-colors hover:text-[#E3C888]"><IconFacebook /></a>
            <a href="mailto:uncommonpeopletribe@gmail.com" aria-label="Nous écrire par e-mail" className="transition-colors hover:text-[#E3C888]"><IconEmail /></a>
          </div>
        </div>
        {colonnes.map((c) => (
          <div key={c.titre}>
            <p className="font-display text-[0.95rem] italic text-[#E3C888]">{c.titre}</p>
            <ul className="mt-4 space-y-2.5">
              {c.liens.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-[#F5F1E8]/75 transition-colors hover:text-[#E3C888]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-[#D4B36A]/20 py-5 text-center text-[0.7rem] text-[#F5F1E8]/60">
        © 2026 Uncommon People Tribe · Paiement 100 % sécurisé · Site créé par Fondation Studio
      </div>
    </footer>
  );
}
