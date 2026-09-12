"use client";

// Bouton flottant mobile-only, fixe en bas a droite, qui renvoie vers la boutique.
import Link from "next/link";
import { usePathname } from "next/navigation";

export function BulleContact() {
  const pathname = usePathname();
  if (pathname === "/boutique" || pathname.startsWith("/boutique/")) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 md:hidden">
      <Link
        href="/boutique"
        className="btn-cut flex h-11 items-center justify-center bg-[#D4B36A] px-4 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#0A0908] shadow-[0_8px_20px_rgba(10,9,8,0.35)] transition-transform duration-300 hover:scale-105 hover:bg-[#E3C888]"
      >
        Boutique
      </Link>
    </div>
  );
}
