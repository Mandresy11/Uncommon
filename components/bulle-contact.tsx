"use client";

// Bouton flottant mobile-only, fixe en bas a droite, qui renvoie vers la boutique.
// N'apparait qu'apres un leger scroll, pas des le chargement de la page.
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const EASE_LUXE = [0.22, 1, 0.36, 1] as const;

export function BulleContact() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 220);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/boutique" || pathname.startsWith("/boutique/")) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: EASE_LUXE }}
          className="fixed bottom-5 right-5 z-40 md:hidden"
        >
          <Link
            href="/boutique"
            className="btn-cut flex h-11 items-center justify-center bg-[#D4B36A] px-4 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#0A0908] shadow-[0_8px_20px_rgba(10,9,8,0.35)] transition-transform duration-300 hover:scale-105 hover:bg-[#E3C888]"
          >
            Boutique
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
