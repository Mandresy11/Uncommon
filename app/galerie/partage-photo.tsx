import { IconEmail, IconInstagram } from "@/components/icons";
import styles from "./partage-photo.module.css";

function Boussole() {
  return (
    <svg viewBox="0 0 84 84" className={styles.boussole} aria-hidden="true">
      <circle cx="42" cy="42" r="30" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="42" cy="42" r="22" fill="none" stroke="currentColor" strokeWidth="0.7" opacity=".55" />
      <path d="M42 5v13M42 66v13M5 42h13M66 42h13" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="m42 18 6 18 18 6-18 6-6 18-6-18-18-6 18-6Z" fill="currentColor" opacity=".88" />
      <circle cx="42" cy="42" r="4" fill="#f4ede2" />
    </svg>
  );
}

export function PartagePhoto() {
  return (
    <section className={styles.section} aria-labelledby="titre-partage-photo">
      <span className={styles.texture} aria-hidden="true" />
      <span className={styles.feuillage} aria-hidden="true" />

      <div className={styles.cadre}>
        <svg
          viewBox="0 0 1000 400"
          preserveAspectRatio="none"
          className={styles.contour}
          aria-hidden="true"
        >
          <path
            d="M24 0H976C976 14 986 24 1000 24V376C986 376 976 386 976 400H24C24 386 14 376 0 376V24C14 24 24 14 24 0Z"
            fill="none"
            stroke="currentColor"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className={styles.contenu}>
          <header className={styles.entete}>
            <h2 id="titre-partage-photo" className={styles.titre}>Envoyez-nous votre photo</h2>
            <p className={styles.texte}>
              Vous portez une pièce Uncommon People Tribe ? Partagez votre photo par e-mail
              <br className={styles.retourLigne} /> ou sur Instagram : les meilleures rejoindront cette galerie.
            </p>
          </header>

          <div className={styles.cartes}>
            <a
              href="mailto:uncommonpeopletribe@gmail.com"
              className={styles.carte}
              aria-label="Envoyer une photo par e-mail à uncommonpeopletribe@gmail.com"
            >
              <IconEmail className={styles.icone} aria-hidden="true" />
              <span className={styles.coordonnees}>uncommonpeopletribe@gmail.com</span>
            </a>

            <a
              href="https://www.instagram.com/uncommonpeopletribe"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.carte}
              aria-label="Partager une photo sur le compte Instagram Uncommon People Tribe"
            >
              <IconInstagram className={styles.icone} aria-hidden="true" />
              <span className={styles.coordonnees}>@uncommonpeopletribe</span>
            </a>

            <span className={styles.medaillon} aria-hidden="true">
              <Boussole />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
