"use client";

import { IconCoche, IconEmail } from "@/components/icons";
import { useNewsletter } from "@/components/use-newsletter";
import styles from "./alerte.module.css";

export function AlerteArticles() {
  const { statut, message, inscrire } = useNewsletter();

  return (
    <section className={styles.section} aria-labelledby="titre-alerte-blog">
      <span className={styles.background} aria-hidden="true" />
      <span className={styles.foliage} aria-hidden="true" />

      <div className={styles.panel}>
        <div className={styles.copy}>
          <span className={styles.spark} aria-hidden="true">✦</span>
          <h2 id="titre-alerte-blog">Soyez parmi les premiers informés</h2>
          <p>
            Rejoignez notre cercle et recevez en avant-première nos nouveaux récits,
            articles et inspirations autour des cultures caribéennes et de l’excellence.
          </p>

          <span className={styles.seal} aria-hidden="true">
            <span>UP</span>
            <i>Uncommon People Tribe · West Indian Excellence</i>
          </span>
        </div>

        <div className={styles.formColumn}>
          <span className={styles.mailIcon} aria-hidden="true"><IconEmail /></span>
          <p className={styles.formTitle}>Recevez chaque nouveau récit</p>

          {statut === "ok" ? (
            <div className={styles.success} role="status">
              <span><IconCoche /></span>
              <p>{message}</p>
            </div>
          ) : (
            <form onSubmit={inscrire} className={styles.form}>
              <label htmlFor="email-blog" className="sr-only">Votre adresse e-mail</label>
              <div className={styles.inputWrap}>
                <span aria-hidden="true"><IconEmail /></span>
                <input
                  id="email-blog"
                  name="email"
                  type="email"
                  required
                  disabled={statut === "envoi"}
                  placeholder="Votre adresse e-mail"
                />
              </div>
              <button type="submit" disabled={statut === "envoi"}>
                {statut === "envoi" ? "Inscription…" : "M’alerter"}
              </button>
              {statut === "erreur" && <p className={styles.error} role="alert">{message}</p>}
              <p className={styles.reassurance}>
                <span aria-hidden="true"><IconCoche /></span>
                Aucun spam. Désinscription en un clic.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
