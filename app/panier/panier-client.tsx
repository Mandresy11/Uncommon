"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/cart-provider";
import { PageShell } from "@/components/page-shell";
import { Cta } from "@/components/cta";

type EtatPaiement = "idle" | "chargement" | "erreur";

export function PanierClient() {
  const { articles, changerQuantite, retirer, sousTotal, pret } = useCart();
  const [etatPaiement, setEtatPaiement] = useState<EtatPaiement>("idle");
  const [message, setMessage] = useState("");

  const passerAuPaiement = async () => {
    setEtatPaiement("chargement");
    setMessage("");
    try {
      const reponse = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          articles: articles.map((article) => ({
            variantKey: article.variantKey,
            quantite: article.quantite,
          })),
        }),
      });
      const resultat = (await reponse.json()) as { checkoutUrl?: string; erreur?: string };
      if (!reponse.ok || !resultat.checkoutUrl) {
        throw new Error(resultat.erreur || "Le paiement est momentanément indisponible.");
      }
      window.location.assign(resultat.checkoutUrl);
    } catch (erreur) {
      setEtatPaiement("erreur");
      setMessage(erreur instanceof Error ? erreur.message : "Le paiement est momentanément indisponible.");
    }
  };

  return (
    <PageShell kicker="Votre sélection" titre={<>Panier</>}>
      {!pret ? (
        <div className="mx-auto h-56 max-w-3xl animate-pulse bg-[#E5DCC9]/55" aria-label="Chargement du panier" />
      ) : articles.length === 0 ? (
        <div className="mx-auto max-w-md border border-[#191610]/20 bg-[#E5DCC9]/60 p-8 text-center sm:p-10">
          <p className="font-display text-xl">Votre panier est vide.</p>
          <p className="mt-3 text-[0.9rem] text-[#191610]/70">
            Découvrez les pièces Héritage et Signature, puis choisissez votre couleur et votre taille.
          </p>
          <div className="mt-7">
            <Cta href="/boutique" variante="noir">Découvrir la collection</Cta>
          </div>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1fr_21rem] lg:items-start lg:gap-12">
          <div className="divide-y divide-[#191610]/12 border-y border-[#191610]/15">
            {articles.map((article) => (
              <article key={article.variantKey} className="grid grid-cols-[6.5rem_1fr] gap-4 py-5 sm:grid-cols-[8rem_1fr_auto] sm:gap-6 sm:py-6">
                <Link href={article.href} className="relative aspect-[4/5] overflow-hidden bg-[#D6CBB2]">
                  <Image
                    src={article.image}
                    alt={`${article.nom}, ${article.couleur}`}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </Link>

                <div className="min-w-0">
                  <Link href={article.href} className="font-display text-[1.02rem] text-[#191610] hover:text-[#9C7E32]">
                    {article.nom}
                  </Link>
                  <p className="mt-2 text-[0.78rem] text-[#191610]/62">
                    {article.couleur} · Taille {article.taille}
                  </p>
                  <p className="mt-2 font-semibold text-[#9C7E32] sm:hidden">
                    {(article.prix * article.quantite).toFixed(2).replace(".", ",")} €
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <div className="flex h-10 items-center border border-[#191610]/20" aria-label={`Quantité pour ${article.nom}`}>
                      <button
                        type="button"
                        onClick={() => changerQuantite(article.variantKey, article.quantite - 1)}
                        className="flex h-full w-10 items-center justify-center text-lg text-[#191610] hover:bg-[#E5DCC9]"
                        aria-label="Diminuer la quantité"
                      >
                        −
                      </button>
                      <span className="flex h-full min-w-9 items-center justify-center border-x border-[#191610]/15 text-[0.82rem] font-semibold text-[#191610]">
                        {article.quantite}
                      </span>
                      <button
                        type="button"
                        onClick={() => changerQuantite(article.variantKey, article.quantite + 1)}
                        disabled={article.quantite >= 10}
                        className="flex h-full w-10 items-center justify-center text-lg text-[#191610] hover:bg-[#E5DCC9] disabled:cursor-not-allowed disabled:opacity-30"
                        aria-label="Augmenter la quantité"
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => retirer(article.variantKey)}
                      className="text-[0.67rem] font-semibold uppercase tracking-[0.12em] text-[#191610]/55 underline underline-offset-4 hover:text-[#9C7E32]"
                    >
                      Retirer
                    </button>
                  </div>
                </div>

                <p className="hidden shrink-0 font-semibold text-[#191610] sm:block">
                  {(article.prix * article.quantite).toFixed(2).replace(".", ",")} €
                </p>
              </article>
            ))}
          </div>

          <aside className="border border-[#191610]/18 bg-[#E5DCC9]/55 p-6 sm:p-7 lg:sticky lg:top-32">
            <h2 className="font-display text-xl text-[#191610]">Récapitulatif</h2>
            <dl className="mt-6 space-y-4 text-[0.88rem] text-[#191610]/70">
              <div className="flex items-center justify-between gap-4">
                <dt>Sous-total</dt>
                <dd className="font-semibold text-[#191610]">{sousTotal.toFixed(2).replace(".", ",")} €</dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt>Livraison</dt>
                <dd className="max-w-[10rem] text-right text-[0.78rem]">Calculée au paiement</dd>
              </div>
            </dl>
            <div className="mt-5 border-t border-[#191610]/15 pt-5">
              <div className="flex items-center justify-between gap-4">
                <p className="font-semibold text-[#191610]">Total provisoire</p>
                <p className="text-lg font-semibold text-[#191610]">{sousTotal.toFixed(2).replace(".", ",")} €</p>
              </div>
            </div>

            <button
              type="button"
              onClick={passerAuPaiement}
              disabled={etatPaiement === "chargement"}
              className="btn-cut mt-7 flex min-h-14 w-full items-center justify-center bg-[#191610] px-5 text-center text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#0A0908] disabled:cursor-wait disabled:opacity-60"
            >
              {etatPaiement === "chargement" ? "Redirection…" : "Passer au paiement"}
            </button>
            <p className="mt-3 text-center text-[0.7rem] leading-relaxed text-[#191610]/55">
              Le stock et les frais de livraison sont vérifiés avant le paiement sécurisé.
            </p>
            {etatPaiement === "erreur" && (
              <div className="mt-4 border border-[#C8202E]/30 bg-white/65 p-3 text-center" role="alert">
                <p className="text-[0.76rem] leading-relaxed text-[#8A1D26]">{message}</p>
                <Link href="/contact" className="mt-2 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-[#191610] underline underline-offset-4">
                  Nous contacter
                </Link>
              </div>
            )}
          </aside>
        </div>
      )}
    </PageShell>
  );
}
