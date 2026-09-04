"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Kicker } from "@/components/cta";
import { IconFermer, IconFleche } from "@/components/icons";
import { PRODUITS, type Produit } from "@/lib/products";
import styles from "./catalogue.module.css";

type Tri = "selection" | "nom-asc" | "prix-asc" | "prix-desc";

const OPTIONS_TRI: { valeur: Tri; libelle: string }[] = [
  { valeur: "selection", libelle: "Notre sélection" },
  { valeur: "nom-asc", libelle: "Nom A–Z" },
  { valeur: "prix-asc", libelle: "Prix croissant" },
  { valeur: "prix-desc", libelle: "Prix décroissant" },
];

function IconeFiltres() {
  return (
    <span className={styles.filterIcon} aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}

function CarteProduit({ produit }: { produit: Produit }) {
  return (
    <Link
      href={produit.disponible ? produit.href : "/#newsletter"}
      aria-label={produit.disponible ? `Voir ${produit.nom}` : `${produit.nom}, bientôt disponible`}
      className={`${styles.productCard} group min-w-0`}
    >
      <div className={`${styles.productImage} relative overflow-hidden bg-[#d6cbb2]`}>
        <Image
          src={produit.image}
          alt={produit.nom}
          width={896}
          height={1120}
          sizes="(max-width: 639px) 50vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 25vw"
          className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />
        <span className={styles.collectionTag}>
          {produit.collection === "heritage" ? "Héritage" : "Signature"}
        </span>
        {(produit.badge || !produit.disponible) && (
          <span className={styles.badge}>
            {produit.disponible ? produit.badge : "Bientôt"}
          </span>
        )}
      </div>

      <div className={styles.productInfo}>
        <div className="min-w-0">
          <h2 className={styles.productName}>{produit.nom}</h2>
          <div className={styles.colors} aria-label={`Coloris proposés pour ${produit.nom}`}>
            {produit.couleurs.map((couleur) => (
              <span
                key={couleur.nom}
                title={couleur.nom}
                className={styles.color}
                style={{ backgroundColor: couleur.hex }}
              />
            ))}
          </div>
        </div>
        <p className={styles.price}>
          {produit.disponible ? `${produit.prix} €` : "Être prévenu"}
        </p>
      </div>
    </Link>
  );
}

export function Catalogue() {
  const [tri, setTri] = useState<Tri>("selection");
  const [disponible, setDisponible] = useState(true);
  const [bientot, setBientot] = useState(true);
  const [heritage, setHeritage] = useState(true);
  const [signature, setSignature] = useState(true);
  const [prixMin, setPrixMin] = useState("");
  const [prixMax, setPrixMax] = useState("");
  const [filtresOuverts, setFiltresOuverts] = useState(false);

  useEffect(() => {
    if (!filtresOuverts) return;

    const fermerAvecEchap = (event: KeyboardEvent) => {
      if (event.key === "Escape") setFiltresOuverts(false);
    };

    const overflowInitial = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", fermerAvecEchap);

    return () => {
      document.body.style.overflow = overflowInitial;
      window.removeEventListener("keydown", fermerAvecEchap);
    };
  }, [filtresOuverts]);

  const produits = useMemo(() => {
    const minimum = prixMin === "" ? Number.NEGATIVE_INFINITY : Number(prixMin);
    const maximum = prixMax === "" ? Number.POSITIVE_INFINITY : Number(prixMax);

    const resultat = PRODUITS.filter((produit) => {
      const stockCorrespond = (produit.disponible && disponible) || (!produit.disponible && bientot);
      const collectionCorrespond =
        (produit.collection === "heritage" && heritage) ||
        (produit.collection === "signature" && signature);

      return stockCorrespond && collectionCorrespond && produit.prix >= minimum && produit.prix <= maximum;
    });

    if (tri === "nom-asc") {
      return [...resultat].sort((a, b) => a.nom.localeCompare(b.nom, "fr"));
    }
    if (tri === "prix-asc") {
      return [...resultat].sort((a, b) => a.prix - b.prix);
    }
    if (tri === "prix-desc") {
      return [...resultat].sort((a, b) => b.prix - a.prix);
    }
    return resultat;
  }, [bientot, disponible, heritage, prixMax, prixMin, signature, tri]);

  const nombreFiltres =
    Number(!disponible || !bientot) +
    Number(!heritage || !signature) +
    Number(prixMin !== "" || prixMax !== "");

  const reinitialiser = () => {
    setDisponible(true);
    setBientot(true);
    setHeritage(true);
    setSignature(true);
    setPrixMin("");
    setPrixMax("");
    setTri("selection");
  };

  const panneauFiltres = (mobile = false) => (
    <div className={mobile ? styles.mobileFilterContent : styles.desktopFilterContent}>
      <fieldset className={styles.filterGroup}>
        <legend>Disponibilité</legend>
        <label className={styles.checkLabel}>
          <input type="checkbox" checked={disponible} onChange={(event) => setDisponible(event.target.checked)} />
          <span>Disponible maintenant</span>
          <small>{PRODUITS.filter((produit) => produit.disponible).length}</small>
        </label>
        <label className={styles.checkLabel}>
          <input type="checkbox" checked={bientot} onChange={(event) => setBientot(event.target.checked)} />
          <span>Bientôt disponible</span>
          <small>{PRODUITS.filter((produit) => !produit.disponible).length}</small>
        </label>
      </fieldset>

      <fieldset className={styles.filterGroup}>
        <legend>Collection</legend>
        <label className={styles.checkLabel}>
          <input type="checkbox" checked={heritage} onChange={(event) => setHeritage(event.target.checked)} />
          <span>Héritage</span>
          <small>{PRODUITS.filter((produit) => produit.collection === "heritage").length}</small>
        </label>
        <label className={styles.checkLabel}>
          <input type="checkbox" checked={signature} onChange={(event) => setSignature(event.target.checked)} />
          <span>Signature</span>
          <small>{PRODUITS.filter((produit) => produit.collection === "signature").length}</small>
        </label>
      </fieldset>

      <fieldset className={styles.filterGroup}>
        <legend>Prix</legend>
        <div className={styles.priceFields}>
          <label>
            <span>Minimum</span>
            <span className={styles.priceInput}>
              <input
                type="number"
                min="0"
                inputMode="numeric"
                placeholder="0"
                value={prixMin}
                onChange={(event) => setPrixMin(event.target.value)}
              />
              <i>€</i>
            </span>
          </label>
          <span className={styles.priceDash} aria-hidden="true" />
          <label>
            <span>Maximum</span>
            <span className={styles.priceInput}>
              <input
                type="number"
                min="0"
                inputMode="numeric"
                placeholder="100"
                value={prixMax}
                onChange={(event) => setPrixMax(event.target.value)}
              />
              <i>€</i>
            </span>
          </label>
        </div>
      </fieldset>

      {mobile && (
        <label className={styles.mobileSort}>
          <span>Trier par</span>
          <select value={tri} onChange={(event) => setTri(event.target.value as Tri)}>
            {OPTIONS_TRI.map((option) => (
              <option key={option.valeur} value={option.valeur}>{option.libelle}</option>
            ))}
          </select>
        </label>
      )}

      <button type="button" onClick={reinitialiser} className={styles.resetButton}>
        Réinitialiser les filtres
      </button>
    </div>
  );

  return (
    <main className={`${styles.section} ${filtresOuverts ? styles.dialogOpen : ""}`}>
      <header className={styles.catalogueHeader}>
        <Kicker>La boutique</Kicker>
        <h1 id="titre-boutique">Toutes les pièces</h1>
        <p>Deux collections, une même exigence : des pièces pensées en Martinique et produites en séries limitées.</p>
      </header>

      <div className={styles.catalogueLayout}>
        <div className={styles.mobileControls}>
          <button
            type="button"
            className={styles.filterButton}
            onClick={() => setFiltresOuverts(true)}
            aria-expanded={filtresOuverts}
            aria-controls="filtres-boutique-mobile"
          >
            <IconeFiltres />
            Filtrer & trier
            {nombreFiltres > 0 && <span>{nombreFiltres}</span>}
          </button>
        </div>

        <div className={styles.productsLayout}>
          <aside className={styles.sidebar} aria-label="Filtres du catalogue">
            <div className={styles.sidebarHeading}>
              <span>Affiner</span>
            </div>
            {panneauFiltres()}
          </aside>

          <div className="min-w-0">
            <div className={styles.catalogueBar}>
              <p><strong>{produits.length}</strong> {produits.length > 1 ? "pièces" : "pièce"}</p>
              <label>
                <span>Trier par</span>
                <select value={tri} onChange={(event) => setTri(event.target.value as Tri)}>
                  {OPTIONS_TRI.map((option) => (
                    <option key={option.valeur} value={option.valeur}>{option.libelle}</option>
                  ))}
                </select>
              </label>
            </div>

            {produits.length > 0 ? (
              <div className={styles.productGrid} aria-live="polite">
                {produits.map((produit) => <CarteProduit key={produit.slug} produit={produit} />)}
              </div>
            ) : (
              <div className={styles.emptyState} aria-live="polite">
                <span aria-hidden="true">◇</span>
                <h2>Aucune pièce ne correspond</h2>
                <p>Modifiez vos critères pour retrouver l’ensemble de la collection.</p>
                <button type="button" onClick={reinitialiser}>Voir toutes les pièces</button>
              </div>
            )}
          </div>
        </div>

        <div className={styles.catalogueFooter}>
          <p>Chaque modèle est produit en série limitée. Les tailles épuisées ne sont pas toujours rééditées.</p>
          <Link href="/collections">
            Découvrir les collections
            <IconFleche aria-hidden="true" />
          </Link>
        </div>
      </div>

      {filtresOuverts && (
        <div className={styles.mobileDialog} id="filtres-boutique-mobile">
          <button
            type="button"
            className={styles.backdrop}
            onClick={() => setFiltresOuverts(false)}
            aria-label="Fermer les filtres"
          />
          <div className={styles.drawer} role="dialog" aria-modal="true" aria-labelledby="titre-filtres-mobile">
            <div className={styles.drawerHeader}>
              <div>
                <span>La boutique</span>
                <h2 id="titre-filtres-mobile">Filtrer & trier</h2>
              </div>
              <button type="button" onClick={() => setFiltresOuverts(false)} aria-label="Fermer">
                <IconFermer />
              </button>
            </div>
            <div className={styles.drawerScroll}>{panneauFiltres(true)}</div>
            <div className={styles.drawerFooter}>
              <button type="button" onClick={() => setFiltresOuverts(false)}>
                Voir {produits.length} {produits.length > 1 ? "pièces" : "pièce"}
                <IconFleche aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
