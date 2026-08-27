// INSPIRATION: gabarit interne commun (mode DEMO : pages presentes, home seule optimisee).
// Bandeau titre sombre sur texture IA + conteneur clair, coherent avec la direction visuelle.
import type { ReactNode } from "react";
import { Kicker } from "./cta";

export function PageShell({
  kicker,
  titre,
  children,
  sombre = false,
}: {
  kicker: string;
  titre: ReactNode;
  children: ReactNode;
  sombre?: boolean;
}) {
  return (
    <main className={sombre ? "bg-[#0A0908]" : "bg-[#F0EAE0]"}>
      <div className="grain relative overflow-hidden bg-[#0A0908]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{ backgroundImage:`url(/img/fond-grain-or.webp)` }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-40 text-center">
          <Kicker>{kicker}</Kicker>
          <h1 className="font-display mt-3 text-[clamp(2rem,5vw,3.4rem)] text-[#F5F1E8]">{titre}</h1>
        </div>
      </div>
      <div className={`mx-auto max-w-6xl px-6 py-16 ${sombre ? "text-[#F5F1E8]" : "text-[#191610]"}`}>
        {children}
      </div>
    </main>
  );
}
