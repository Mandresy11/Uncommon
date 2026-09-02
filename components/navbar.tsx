"use client";

// Navbar logo-centre (regle 68). Retours Tom v6 :
// - menus deroulants RETABLIS (Boutique, La maison) avec les nouvelles pages
// - bandeau defilant avec une ICONE entre chaque element de reassurance
// - mobile : logo horizontal centre, panier + burger a droite, "West Indian Excellence"
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconPanier, IconMenu, IconFermer, LisereDrapeau } from "./icons";
import { useCart } from "./cart-provider";

type Lien = { href: string; label: string };
type Groupe = { label: string; liens: Lien[] };

// GAUCHE : Accueil + dropdown Boutique. DROITE : dropdown La maison + Contact.
// (retour Tom v7 : garder des liens a gauche ET a droite, juste ajouter des menus deroulants)
const liensAccueil: Lien[] = [{ href: "/", label: "Accueil" }];

const menuBoutique: Groupe = {
  label: "Boutique",
  liens: [
    { href: "/boutique", label: "Tous les produits" },
    { href: "/collections", label: "Collections" },
    { href: "/galerie", label: "Galerie" },
    { href: "/produit/tee-shirt-la-yole", label: "Le best-seller" },
  ],
};

const menuMaison: Groupe = {
  label: "La maison",
  liens: [
    { href: "/notre-histoire", label: "Notre histoire" },
    { href: "/blog", label: "Le blog" },
    { href: "/guide-des-tailles", label: "Guide des tailles" },
    { href: "/livraison-retours", label: "Livraison" },
    { href: "/faq", label: "FAQ" },
  ],
};

const menus: Groupe[] = [menuBoutique, menuMaison];
const liensContact: Lien[] = [{ href: "/contact", label: "Contact" }];

const liensMobile: Lien[] = [
  { href: "/", label: "Accueil" },
  { href: "/boutique", label: "Boutique" },
  { href: "/collections", label: "Collections" },
  { href: "/galerie", label: "Galerie" },
  { href: "/notre-histoire", label: "Notre histoire" },
  { href: "/blog", label: "Le blog" },
  { href: "/guide-des-tailles", label: "Guide des tailles" },
  { href: "/livraison-retours", label: "Livraison" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const ANNONCES = [
  "Première collection en série limitée",
  "Livraison Martinique, Guadeloupe, Guyane et Hexagone",
  "Broderie or, drapeau cousu main",
  "West Indian Excellence",
];

// Petite icone diamant noire entre chaque annonce (bandeau or, texte noir)
function IconeSepareNoir() {
  return (
    <svg viewBox="0 0 12 12" width="8" height="8" aria-hidden="true" className="shrink-0">
      <path d="M6 0 L12 6 L6 12 L0 6 Z" fill="#191610" />
    </svg>
  );
}

export function Navbar() {
  const { nombreArticles } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [ouvert, setOuvert] = useState(false);
  const [menuActif, setMenuActif] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const lienCls =
    "text-[0.72rem] uppercase tracking-[0.16em] text-[#F5F1E8] transition-colors hover:text-[#E3C888] [text-shadow:0_1px_6px_rgba(10,9,8,0.7)]";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Bandeau defilant, FOND OR (retour Tom v8), texte noir, icone entre chaque element */}
      <div className="overflow-hidden bg-[#D4B36A] py-2">
        <div className="flex w-max animate-[marquee_30s_linear_infinite] items-center whitespace-nowrap">
          {[...ANNONCES, ...ANNONCES, ...ANNONCES].map((a, i) => (
            <span key={i} className="flex items-center gap-4 text-[0.6rem] uppercase tracking-[0.24em] text-[#191610]">
              <span className="px-4">{a}</span>
              <IconeSepareNoir />
            </span>
          ))}
        </div>
      </div>

      {/* Retour Tom v13 : le survol d'un menu ne teinte PLUS toute la barre (plus de bande
          semi-transparente parasite). Seuls le scroll et le menu mobile ouvert tintent la barre. */}
      <div
        className={`relative transition-colors duration-500 ${
          scrolled || ouvert ? "bg-[#0A0908]/70 backdrop-blur-md" : "bg-transparent"
        }`}
        onMouseLeave={() => setMenuActif(null)}
      >
        <nav className="relative mx-auto flex max-w-6xl items-center px-5 py-4 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-4">
          {/* Gauche : Accueil + dropdown Boutique */}
          <div className="hidden items-center gap-6 md:flex">
            {liensAccueil.map((l) => (
              <Link key={l.href} href={l.href} className={lienCls}>
                {l.label}
              </Link>
            ))}
            <button
              type="button"
              onMouseEnter={() => setMenuActif(menuBoutique.label)}
              onClick={() => setMenuActif(menuActif === menuBoutique.label ? null : menuBoutique.label)}
              className={`${lienCls} flex items-center gap-1`}
              aria-expanded={menuActif === menuBoutique.label}
            >
              {menuBoutique.label}
              <span className="text-[0.55rem]">▾</span>
            </button>
          </div>

          {/* Logo centre : UP + texte a l'horizontale mobile, "West Indian Excellence" mobile */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 leading-none md:static md:left-auto md:translate-x-0 md:justify-self-center md:text-center"
          >
            <span className="flex items-center gap-2 md:block">
              <span className="font-display text-[1.5rem] font-medium tracking-[0.06em] text-[#E3C888] [text-shadow:0_1px_8px_rgba(10,9,8,0.6)] sm:text-[1.75rem]">
                UP
              </span>
              <span className="whitespace-nowrap text-[0.44rem] uppercase tracking-[0.22em] text-[#F5F1E8] [text-shadow:0_1px_6px_rgba(10,9,8,0.7)] md:hidden">
                West Indian Excellence
              </span>
              {/* Desktop : Uncommon People Tribe + West Indian Excellence (retour Tom v11) */}
              <span className="mt-1 hidden whitespace-nowrap text-[0.5rem] uppercase tracking-[0.3em] text-[#F5F1E8] [text-shadow:0_1px_6px_rgba(10,9,8,0.7)] md:block">
                Uncommon People Tribe <span className="text-[#E3C888]">·</span> West Indian Excellence
              </span>
            </span>
          </Link>

          {/* Droite : dropdown La maison + Contact + panier + burger */}
          <div className="ml-auto flex items-center justify-end gap-6 md:ml-0">
            <div className="hidden items-center gap-6 md:flex">
              <button
                type="button"
                onMouseEnter={() => setMenuActif(menuMaison.label)}
                onClick={() => setMenuActif(menuActif === menuMaison.label ? null : menuMaison.label)}
                className={`${lienCls} flex items-center gap-1`}
                aria-expanded={menuActif === menuMaison.label}
              >
                {menuMaison.label}
                <span className="text-[0.55rem]">▾</span>
              </button>
              {liensContact.map((l) => (
                <Link key={l.href} href={l.href} className={lienCls}>
                  {l.label}
                </Link>
              ))}
            </div>
            <Link
              href="/panier"
              aria-label={`Panier, ${nombreArticles} article${nombreArticles > 1 ? "s" : ""}`}
              className="relative text-[1.35rem] text-[#F5F1E8] [filter:drop-shadow(0_1px_6px_rgba(10,9,8,0.7))]"
            >
              <IconPanier />
              <span className="absolute -right-2 -top-1.5 flex h-4 w-4 items-center justify-center bg-[#D4B36A] text-[0.55rem] font-bold text-[#0A0908]">
                {nombreArticles > 99 ? "99+" : nombreArticles}
              </span>
            </Link>
            <button
              onClick={() => setOuvert(!ouvert)}
              className="flex items-center text-2xl text-[#F5F1E8] [filter:drop-shadow(0_1px_6px_rgba(10,9,8,0.7))] md:hidden"
              aria-label={ouvert ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {ouvert ? <IconFermer /> : <IconMenu />}
            </button>
          </div>
        </nav>

        {/* Dropdown desktop (retour Tom v14) : panneau FLOTTANT en position absolue, il ne pousse
            PLUS le header (qui reste fixe). Contour BLANC, coins arrondis. */}
        <AnimatePresence mode="wait">
          {menuActif && (
            <motion.div
              key={menuActif}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-x-0 top-full hidden md:block"
              onMouseEnter={() => setMenuActif(menuActif)}
            >
              <div className={`mx-auto flex max-w-6xl px-5 pt-2 ${menuActif === menuMaison.label ? "justify-end" : "justify-start"}`}>
                {/* Panneau ARRONDI, contour BLANC (retour Tom v14) */}
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.97 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: menuActif === menuMaison.label ? "top right" : "top left" }}
                  className="w-64 overflow-hidden rounded-2xl border border-white/70 bg-[#0A0908]/95 p-2 shadow-[0_24px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl"
                >
                  {menus
                    .find((m) => m.label === menuActif)
                    ?.liens.map((l, idx) => (
                      <motion.div
                        key={l.href + l.label}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.26, delay: 0.04 + idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <Link
                          href={l.href}
                          onClick={() => setMenuActif(null)}
                          className="group/lnk flex items-center justify-between rounded-xl px-4 py-2.5 text-[0.74rem] uppercase tracking-[0.14em] text-[#F5F1E8]/85 transition-colors hover:bg-[#D4B36A]/12 hover:text-[#E3C888]"
                        >
                          <span className="transition-transform duration-300 group-hover/lnk:translate-x-1">{l.label}</span>
                          <span className="translate-x-[-6px] text-[0.85rem] text-[#D4B36A] opacity-0 transition-all duration-300 group-hover/lnk:translate-x-0 group-hover/lnk:opacity-100" aria-hidden="true">
                            →
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Menu mobile dans la continuite du header */}
        <AnimatePresence>
          {ouvert && (
            <motion.div
              key="menu-mobile"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden bg-[#0A0908]/95 backdrop-blur-md md:hidden"
            >
              <div className="flex flex-col px-6 pb-6 pt-2">
                {liensMobile.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOuvert(false)}
                    className="border-b border-[#D4B36A]/15 py-3 text-[0.8rem] uppercase tracking-[0.16em] text-[#F5F1E8]/90 transition-colors hover:text-[#E3C888]"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <LisereDrapeau />
    </header>
  );
}
