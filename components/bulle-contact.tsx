"use client";

// Bulle flottante mobile-only, fixee en bas a droite, qui renvoie vers le formulaire de contact.
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconDiscussion } from "./icons";

export function BulleContact() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 md:hidden">
      <Link
        href="/contact"
        aria-label="Nous contacter"
        className="btn-cut flex h-14 w-14 items-center justify-center bg-[#D4B36A] text-[1.4rem] text-[#0A0908] shadow-[0_8px_20px_rgba(10,9,8,0.35)] transition-transform duration-300 hover:scale-105 hover:bg-[#E3C888]"
      >
        <IconDiscussion aria-hidden="true" />
      </Link>
    </div>
  );
}
