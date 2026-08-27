"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ProductId } from "@/lib/products";

export type ArticlePanier = {
  variantKey: string;
  productId: ProductId;
  nom: string;
  href: string;
  image: string;
  couleur: string;
  taille: string;
  prix: number;
  quantite: number;
};

type NouvelArticle = Omit<ArticlePanier, "quantite"> & { quantite?: number };

type ContextePanier = {
  articles: ArticlePanier[];
  nombreArticles: number;
  sousTotal: number;
  pret: boolean;
  ajouter: (article: NouvelArticle) => void;
  changerQuantite: (variantKey: string, quantite: number) => void;
  retirer: (variantKey: string) => void;
  vider: () => void;
};

const CLE_STOCKAGE = "upt-panier-v1";
const PanierContext = createContext<ContextePanier | null>(null);

function estArticlePanier(value: unknown): value is ArticlePanier {
  if (!value || typeof value !== "object") return false;
  const article = value as Partial<ArticlePanier>;
  return (
    typeof article.variantKey === "string" &&
    typeof article.productId === "string" &&
    typeof article.nom === "string" &&
    typeof article.href === "string" &&
    typeof article.image === "string" &&
    typeof article.couleur === "string" &&
    typeof article.taille === "string" &&
    typeof article.prix === "number" &&
    typeof article.quantite === "number"
  );
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [articles, setArticles] = useState<ArticlePanier[]>([]);
  const [pret, setPret] = useState(false);

  useEffect(() => {
    try {
      const memorise = window.localStorage.getItem(CLE_STOCKAGE);
      if (memorise) {
        const valeur = JSON.parse(memorise) as unknown;
        if (Array.isArray(valeur)) {
          setArticles(
            valeur
              .filter(estArticlePanier)
              .map((article) => ({ ...article, quantite: Math.min(10, Math.max(1, Math.floor(article.quantite))) }))
          );
        }
      }
    } catch {
      window.localStorage.removeItem(CLE_STOCKAGE);
    } finally {
      setPret(true);
    }
  }, []);

  useEffect(() => {
    if (!pret) return;
    window.localStorage.setItem(CLE_STOCKAGE, JSON.stringify(articles));
  }, [articles, pret]);

  const valeur = useMemo<ContextePanier>(() => {
    const ajouter = (article: NouvelArticle) => {
      const quantiteAjoutee = Math.min(10, Math.max(1, Math.floor(article.quantite ?? 1)));
      setArticles((actuels) => {
        const existant = actuels.find((item) => item.variantKey === article.variantKey);
        if (!existant) return [...actuels, { ...article, quantite: quantiteAjoutee }];
        return actuels.map((item) =>
          item.variantKey === article.variantKey
            ? { ...item, quantite: Math.min(10, item.quantite + quantiteAjoutee) }
            : item
        );
      });
    };

    const changerQuantite = (variantKey: string, quantite: number) => {
      if (quantite <= 0) {
        setArticles((actuels) => actuels.filter((item) => item.variantKey !== variantKey));
        return;
      }
      setArticles((actuels) =>
        actuels.map((item) =>
          item.variantKey === variantKey
            ? { ...item, quantite: Math.min(10, Math.max(1, Math.floor(quantite))) }
            : item
        )
      );
    };

    const retirer = (variantKey: string) => {
      setArticles((actuels) => actuels.filter((item) => item.variantKey !== variantKey));
    };

    const vider = () => setArticles([]);
    const nombreArticles = articles.reduce((total, item) => total + item.quantite, 0);
    const sousTotal = articles.reduce((total, item) => total + item.prix * item.quantite, 0);

    return { articles, nombreArticles, sousTotal, pret, ajouter, changerQuantite, retirer, vider };
  }, [articles, pret]);

  return <PanierContext.Provider value={valeur}>{children}</PanierContext.Provider>;
}

export function useCart() {
  const contexte = useContext(PanierContext);
  if (!contexte) throw new Error("useCart doit être utilisé dans CartProvider.");
  return contexte;
}
