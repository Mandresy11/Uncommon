import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { IconCamion, IconColisRetour } from "@/components/icons";
import styles from "./infos.module.css";

type CarteProps = {
  titre: string;
  Icone: ComponentType<SVGProps<SVGSVGElement>>;
  position: "gauche" | "droite";
  children: React.ReactNode;
};

function Boussole() {
  return (
    <svg viewBox="0 0 84 84" className="h-14 w-14" aria-hidden="true">
      <circle cx="42" cy="42" r="30" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="42" cy="42" r="22" fill="none" stroke="currentColor" strokeWidth="0.7" opacity=".55" />
      <path d="M42 5v13M42 66v13M5 42h13M66 42h13" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="m42 18 6 18 18 6-18 6-6 18-6-18-18-6 18-6Z" fill="currentColor" opacity=".88" />
      <circle cx="42" cy="42" r="4" fill="#f4ede2" />
    </svg>
  );
}

function Coins() {
  return (
    <span className={styles.coins} aria-hidden="true">
      <i className={styles.coinHautGauche} />
      <i className={styles.coinHautDroit} />
      <i className={styles.coinBasGauche} />
      <i className={styles.coinBasDroit} />
    </span>
  );
}

function Carte({ titre, Icone, position, children }: CarteProps) {
  return (
    <article className={`${styles.carteWrap} ${position === "droite" ? styles.carteDroite : ""}`}>
      <span className={`${styles.feuillePapier} ${styles.feuilleArriereDeux}`} aria-hidden="true" />
      <span className={`${styles.feuillePapier} ${styles.feuilleArriereUne}`} aria-hidden="true" />

      <div className={styles.carte}>
        <span
          className={`${styles.feuillageCarte} ${position === "droite" ? styles.feuillageDroit : styles.feuillageGauche}`}
          aria-hidden="true"
        />
        <span className={styles.cadreInterieur} aria-hidden="true" />
        <Coins />

        <div className={styles.contenuCarte}>
          <Icone className={styles.icone} aria-hidden="true" />
          <h2 className={styles.titreCarte}>{titre}</h2>
          <p className={styles.texteCarte}>{children}</p>
        </div>
      </div>
    </article>
  );
}

export function Infos() {
  return (
    <section className={styles.section} aria-labelledby="titre-livraison-retours">
      <h1 id="titre-livraison-retours" className="sr-only">Livraison et retours</h1>
      <span className={styles.textureFond} aria-hidden="true" />

      <div className={styles.conteneur}>
        <div className={styles.grilleCartes}>
          <Carte titre="Livraison" Icone={IconCamion} position="gauche">
            Nous livrons en Martinique, en Guadeloupe, en Guyane, ainsi que dans
            l&apos;Hexagone. Le retrait en main propre est gratuit, sous 1 à 2 jours.
            Les tarifs et délais des autres zones seront affichés lors du lancement de
            la boutique en ligne.
          </Carte>

          <div className={styles.connecteur} aria-hidden="true">
            <span className={styles.ligneConnecteur} />
            <span className={styles.medaillonExterieur}>
              <span className={styles.medaillonInterieur}><Boussole /></span>
            </span>
          </div>

          <Carte titre="Retours et échanges" Icone={IconColisRetour} position="droite">
            Vous disposez de 14 jours après réception pour retourner un article non
            porté dans son emballage d&apos;origine. Les échanges de taille se font
            selon le stock disponible : les séries étant limitées, contactez-nous
            rapidement.
          </Carte>
        </div>

        <div className={styles.action}>
          <Link href="/contact" className={styles.boutonContact}>
            <span>Nous contacter</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
