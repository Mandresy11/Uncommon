import Image from "next/image";
import Link from "next/link";
import styles from "./edition-yoles.module.css";

export function EditionYoles() {
  return (
    <section className={styles.section} aria-labelledby="titre-edition-yoles">
      <div className={styles.desktopArtwork}>
        <Image
          src="/img/edition-course-yoles-v2.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <h2 id="titre-edition-yoles" className="sr-only">Édition spéciale Course de Yoles</h2>
        <p className="sr-only">
          La nouvelle collection arrive en novembre, pour Noël. Une capsule dédiée à la Course de Yoles suivra environ six mois plus tard. Inscris-toi à la newsletter pour être prévenu en premier.
        </p>
        <Link href="/#newsletter" className={styles.desktopLink} aria-label="Être prévenu de la sortie de la collection Course de Yoles">
          <span className="sr-only">Être prévenu</span>
        </Link>
      </div>

      <div className={styles.mobileArtwork}>
        <div className={styles.card}>
          <div className={styles.topOrnament} aria-hidden="true"><span>✣</span></div>
          <h2 id="titre-edition-yoles-mobile" className={styles.title}>
            Édition spéciale
            <span className={styles.titleAccent}>Course de Yoles</span>
          </h2>
          <div className={styles.divider} aria-hidden="true"><span className={styles.dividerDiamond} /></div>
          <p className={styles.copy}>
            La nouvelle collection arrive en novembre, pour Noël. Une capsule dédiée à la Course de Yoles suivra environ six mois plus tard. Inscris-toi à la newsletter pour être prévenu en premier.
          </p>
          <Link href="/#newsletter" className={styles.cta}>Être prévenu</Link>
        </div>
      </div>
    </section>
  );
}
