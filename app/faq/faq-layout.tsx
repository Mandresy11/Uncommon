"use client";

// Layout FAQ calque sur la maquette client : bandeau lateral texture + nom de marque empile
// + monogramme filigrane, contenu avec accordeons numerotes 01-04, pied "reponse rapide",
// puis section "D'autres questions" avec recherche + filtre par categorie.
import { useMemo, useState } from "react";
import Link from "next/link";
import {
  IconPanier,
  IconCamion,
  IconRetour,
  IconEtiquette,
  IconTshirt,
  IconGrille,
  IconRecherche,
  IconCasqueContour,
  IconDiscussion,
  IconFleche,
} from "@/components/icons";

type Question = { q: string; r: string };
type Categorie = "commande" | "livraison" | "retours" | "tailles" | "produit";
type QuestionCategorisee = Question & { categorie: Categorie };

const CATEGORIES: { valeur: Categorie | "toutes"; label: string; icone: React.ReactNode }[] = [
  { valeur: "toutes", label: "Toutes", icone: <IconGrille /> },
  { valeur: "commande", label: "Commande", icone: <IconPanier /> },
  { valeur: "livraison", label: "Livraison", icone: <IconCamion /> },
  { valeur: "retours", label: "Retours", icone: <IconRetour /> },
  { valeur: "tailles", label: "Tailles", icone: <IconEtiquette /> },
  { valeur: "produit", label: "Produit", icone: <IconTshirt /> },
];

export function Faq({ autres }: { autres: QuestionCategorisee[] }) {
  const [ouvertAutres, setOuvertAutres] = useState<number | null>(null);
  const [recherche, setRecherche] = useState("");
  const [categorie, setCategorie] = useState<Categorie | "toutes">("toutes");

  const filtrees = useMemo(() => {
    const q = recherche.trim().toLowerCase();
    return autres.filter((item) => {
      const matchCategorie = categorie === "toutes" || item.categorie === categorie;
      const matchRecherche = q === "" || item.q.toLowerCase().includes(q) || item.r.toLowerCase().includes(q);
      return matchCategorie && matchRecherche;
    });
  }, [autres, recherche, categorie]);

  return (
    <main className="bg-[#0A0908]">
      {/* D'autres questions : composition claire calée sur la maquette de référence */}
      <section id="autres-questions" className="font-faq relative overflow-hidden bg-[#f1e9dc] px-5 pb-16 pt-32 text-[#28221c] md:px-8 md:pb-20 md:pt-36 lg:min-h-[58.8125rem]">
        <span
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.055] mix-blend-multiply"
          style={{ backgroundImage: "url(/img/fond-papier.webp)" }}
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.045] mix-blend-multiply"
          style={{ backgroundImage: "url(/img/fond-feuillage.webp)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-[71.25rem]">
          <div className="text-center">
            <span className="relative mx-auto block h-11 w-12 text-[#b28732]" aria-hidden="true">
              <span className="absolute left-1/2 top-0 -translate-x-[72%] text-[2.7rem] font-light leading-none">U</span>
              <span className="absolute left-1/2 top-0 -translate-x-[12%] text-[2.7rem] font-light leading-none">P</span>
            </span>
            <p className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.32em] text-[#4b4238]/70">
              Uncommon People Tribe
            </p>
            <h1 className="mt-10 text-[clamp(2.35rem,3.15vw,2.9rem)] font-medium uppercase leading-none tracking-[0.065em] text-[#211c18]">
              D&apos;autres questions
            </h1>
            <span className="mx-auto mt-5 flex items-center justify-center gap-2" aria-hidden="true">
              <span className="h-1.5 w-1.5 rotate-45 border border-[#b68b37]" />
            </span>
          </div>

          <div className="mt-9 grid items-start gap-6 lg:grid-cols-[20.5rem_minmax(0,1fr)]">
            {/* Colonne recherche + categories */}
            <aside className="order-1 border border-[#74634e]/25 bg-[#f7f1e7]/25 p-4 md:px-6 md:pt-6 md:pb-[1.6875rem]">
                <label htmlFor="recherche-faq" className="sr-only">
                  Rechercher une question
                </label>
                <div className="flex h-11 items-center gap-3 border border-[#74634e]/30 bg-[#f8f3ea]/35 px-3.5">
                  <input
                    id="recherche-faq"
                    type="text"
                    value={recherche}
                    onChange={(e) => setRecherche(e.target.value)}
                    placeholder="Rechercher une question..."
                    className="min-w-0 flex-1 bg-transparent font-sans text-[0.78rem] text-[#28221c] placeholder:text-[#5c5247]/55 focus:outline-none"
                  />
                  <span className="shrink-0 text-[1.15rem] text-[#28221c]" aria-hidden="true">
                    <IconRecherche />
                  </span>
                </div>

                <p className="mt-7 text-[0.69rem] font-semibold uppercase tracking-[0.16em] text-[#40372f]">
                  Parcourir par catégorie
                </p>
                <div className="mt-4">
                  {CATEGORIES.map((c) => (
                    <button
                      type="button"
                      key={c.valeur}
                      onClick={() => setCategorie(c.valeur)}
                      className={`flex h-[2.55rem] w-full items-center gap-4 border-b border-[#74634e]/18 px-4 text-[0.9rem] transition-colors ${
                        categorie === c.valeur
                          ? "border-l-[3px] border-l-[#b68b37] bg-[#e8decd]/80 pl-[0.8125rem] text-[#28221c]"
                          : "border-l-[3px] border-l-transparent pl-[0.8125rem] text-[#40372f] hover:bg-[#e8decd]/45"
                      }`}
                    >
                      <span className="text-[1.18rem] text-[#a88136]">{c.icone}</span>
                      {c.label}
                    </button>
                  ))}
                </div>

              {/* Desktop uniquement : reste dans la sidebar */}
              <div className="mt-[1.125rem] hidden border border-[#74634e]/30 bg-[#f8f3ea]/25 px-[1.875rem] py-[0.6875rem] text-center lg:block">
                <span className="mx-auto flex h-9 w-12 items-center justify-center text-[2.75rem] text-[#b68b37]" aria-hidden="true">
                  <IconDiscussion />
                </span>
                <p className="mt-3 text-[0.92rem] font-medium uppercase leading-[1.3] tracking-[0.08em] text-[#302921]">
                  Vous ne trouvez pas<br />votre réponse ?
                </p>
                <p className="mt-2 font-sans text-[0.78rem] leading-[1.45] text-[#4d443b]/75">
                  Notre équipe est là pour<br />vous aider.
                </p>
                <Link
                  href="/contact"
                  className="mt-2 flex h-10 w-full items-center justify-between bg-[#17130f] px-6 font-sans text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#c49a43] transition-colors hover:bg-[#2b241d]"
                >
                  <span>Poser une question</span>
                  <IconFleche className="text-[1rem]" aria-hidden="true" />
                </Link>
              </div>
            </aside>

            {/* Colonne questions */}
            <div className="order-2">
              <div className="divide-y divide-[#74634e]/22 border border-[#74634e]/25 bg-[#f8f3ea]/25">
                {filtrees.length === 0 && (
                  <p className="px-10 py-8 text-center font-sans text-[0.88rem] text-[#40372f]/65">
                    Aucune question ne correspond à ta recherche.
                  </p>
                )}
                {filtrees.map((item, i) => {
                  const estOuvert = ouvertAutres === i;
                  return (
                    <div key={item.q}>
                      <button
                        type="button"
                        onClick={() => setOuvertAutres(estOuvert ? null : i)}
                        aria-expanded={estOuvert}
                        className="flex min-h-[4.25rem] w-full items-center justify-between gap-5 px-6 text-left md:pl-10 md:pr-8"
                      >
                        <span className="text-[1.18rem] font-medium leading-tight text-[#28221c]">{item.q}</span>
                        <span
                          className={`shrink-0 font-sans text-[1.3rem] font-light leading-none text-[#b28732] transition-transform ${estOuvert ? "rotate-45" : ""}`}
                          aria-hidden="true"
                        >
                          +
                        </span>
                      </button>
                      {estOuvert && (
                        <p className="px-6 pb-6 font-sans text-[0.86rem] leading-relaxed text-[#40372f]/75 md:px-10">
                          {item.r}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-[1.8125rem] flex items-start justify-center gap-5 md:justify-start md:pl-[12.75rem]">
                <span className="mt-1 text-[1.75rem] text-[#b28732]" aria-hidden="true">
                  <IconCasqueContour />
                </span>
                <span className="text-left">
                  <span className="block text-[0.69rem] font-semibold uppercase tracking-[0.16em] text-[#40372f]">
                    Besoin d&apos;aide immédiate ?
                  </span>
                  <Link
                    href="/contact"
                    className="mt-1 block border-b border-[#b68b37] pb-1 font-sans text-[0.8rem] text-[#51483f]/75 transition-colors hover:text-[#9c752d]"
                  >
                    Nous contacter directement
                  </Link>
                </span>
              </div>
            </div>

            {/* Mobile uniquement : carte "reponse rapide" en bas de la section */}
            <div className="order-3 border border-[#74634e]/30 bg-[#f8f3ea]/25 px-[1.875rem] py-6 text-center lg:hidden">
              <span className="mx-auto flex h-9 w-12 items-center justify-center text-[2.75rem] text-[#b68b37]" aria-hidden="true">
                <IconDiscussion />
              </span>
              <p className="mt-3 text-[0.92rem] font-medium uppercase leading-[1.3] tracking-[0.08em] text-[#302921]">
                Vous ne trouvez pas<br />votre réponse ?
              </p>
              <p className="mt-2 font-sans text-[0.78rem] leading-[1.45] text-[#4d443b]/75">
                Notre équipe est là pour<br />vous aider.
              </p>
              <Link
                href="/contact"
                className="mx-auto mt-4 flex h-10 w-full max-w-xs items-center justify-between bg-[#17130f] px-6 font-sans text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-[#c49a43] transition-colors hover:bg-[#2b241d]"
              >
                <span>Poser une question</span>
                <IconFleche className="text-[1rem]" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
