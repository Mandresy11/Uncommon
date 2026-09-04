import Link from "next/link";
import styles from "./edition-yoles.module.css";

export function EditionYoles() {
  return (
    <section className={styles.section} aria-labelledby="titre-edition-yoles">
      <div className={styles.artwork}>
        <div className={styles.card}>
          <h2 id="titre-edition-yoles" className={styles.title}>
            Édition spéciale
            <span className={styles.titleAccent}>Course de Yoles</span>
          </h2>
          <p className={styles.copy}>
            La nouvelle collection arrive en novembre, pour Noël. Une capsule dédiée à la
            Course de Yoles suivra environ six mois plus tard. Inscrivez-vous à la newsletter
            pour recevoir l&apos;annonce en avant-première.
          </p>
          <Link href="/#newsletter" className={styles.cta}>Être informé</Link>
        </div>
      </div>
    </section>
  );
}
