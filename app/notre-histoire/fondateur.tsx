import Image from "next/image";
import styles from "./fondateur.module.css";

function Compass() {
  return (
    <svg viewBox="0 0 48 48" className={styles.compass} aria-hidden="true">
      <circle cx="24" cy="24" r="15" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <path d="M24 3v42M3 24h42M9 9l30 30M39 9 9 39" fill="none" stroke="currentColor" strokeWidth="0.55" />
      <path d="m24 10 4 10 10 4-10 4-4 10-4-10-10-4 10-4Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
    </svg>
  );
}

function HistoireAccessible() {
  return (
    <>
      <h1>Parti à 11 ans. Revenu pour créer.</h1>
      <p>
        Érick quitte le nord de la Martinique à 11 ans pour l&apos;Hexagone. Il y construit sa vie comme enseignant en EPS et ostéopathe, au contact de la transmission, de l&apos;effort et des autres, sans jamais perdre le lien avec son île.
      </p>
      <p>
        En 2022, il revient s&apos;installer en Martinique. Uncommon People Tribe naît de ce retour : transformer ses racines en un langage vestimentaire contemporain et prouver qu&apos;avec du travail et les bonnes personnes, on accomplit de grandes choses.
      </p>
      <blockquote>« Plus qu&apos;une marque : une identité à porter. »</blockquote>
    </>
  );
}

export function Fondateur() {
  return (
    <section className={styles.section}>
      <div className={styles.desktopArtwork}>
        <div className="sr-only"><HistoireAccessible /></div>
      </div>

      <div className={styles.mobileArtwork}>
        <div className={styles.layout}>
          <article className={styles.panel}>
            <div className={styles.panelContent}>
              <p className={styles.eyebrow}>Le fondateur</p>
              <h1 className={styles.title}>
                Parti à 11 ans.
                <span className={styles.titleAccent}>Revenu pour créer.</span>
              </h1>
              <p className={styles.copy}>
                Érick quitte le nord de la Martinique à 11 ans pour l&apos;Hexagone. Il y construit sa vie comme enseignant en EPS et ostéopathe, au contact de la transmission, de l&apos;effort et des autres, sans jamais perdre le lien avec son île.
              </p>
              <p className={styles.copy}>
                En 2022, il revient s&apos;installer en Martinique. Uncommon People Tribe naît de ce retour : transformer ses racines en un langage vestimentaire contemporain et prouver qu&apos;avec du travail et les bonnes personnes, on accomplit de grandes choses.
              </p>
              <div className={styles.quote}>
                <blockquote className={styles.quoteText}>« Plus qu&apos;une marque :<br />une identité à porter. »</blockquote>
                <p className={styles.signature}>Érick · Fondateur</p>
              </div>
            </div>
          </article>

          <div className={styles.portraitWrap}>
            <Image
              src="/img/portrait-erick.webp"
              alt="Érick, fondateur d'Uncommon People Tribe, sur la côte martiniquaise"
              width={896}
              height={1152}
              priority
              sizes="(min-width: 1280px) 0px, (min-width: 768px) 640px, calc(100vw - 48px)"
              className={styles.portrait}
            />
            <aside className={styles.plaque} aria-label="Les piliers du fondateur">
              <span className={styles.plaqueLogo}>UP</span>
              <p className={styles.plaqueCopy}>Racines<br />Transmission<br />Exigence</p>
              <Compass />
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
