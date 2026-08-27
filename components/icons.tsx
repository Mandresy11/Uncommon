// Icones importees via MCP Iconify (mcp__iconify__get_icon), jamais de SVG bricole.
// Sources reelles : ph:shopping-bag-light, tabler:needle-thread, ph:flag-banner-light,
// ph:scissors-light, ph:arrow-right-light, ph:instagram-logo-light, ph:facebook-logo-light,
// ph:whatsapp-logo-light, ph:caret-left-light, ph:caret-right-light, ph:check-light,
// ph:list-light, ph:x-light, ph:sailboat-light
import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const ph = (props: P) => ({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 256 256",
  width: "1em",
  height: "1em",
  ...props,
});

export function IconPanier(props: P) {
  return (
    <svg {...ph(props)}>
      <path fill="currentColor" d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14m2 158a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V56a2 2 0 0 1 2-2h176a2 2 0 0 1 2 2ZM174 88a46 46 0 0 1-92 0a6 6 0 0 1 12 0a34 34 0 0 0 68 0a6 6 0 0 1 12 0" />
    </svg>
  );
}

export function IconAiguille(props: P) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M3 21Q2 20 14.785 4.291a3.5 3.5 0 1 1 5.078 4.791Q4.001 22 3 21M17.5 6.5l-1 1" />
        <path d="M17 7c-2.333-2.667-3.5-4-5-4s-2 1-2 2c0 4 8.161 8.406 6 11c-1.056 1.268-3.363 1.285-5.75.808m-4.511-1.383C4.346 14.86 2 13.5 2 12m17.5-2.5L21 11" />
      </g>
    </svg>
  );
}

export function IconDrapeau(props: P) {
  return (
    <svg {...ph(props)}>
      <path fill="currentColor" d="M237.07 52.8A6 6 0 0 0 232 50H40a6 6 0 0 0-4.24 10.24L79.51 104l-43.75 43.76A6 6 0 0 0 40 158h136.78l-30.2 63.42a6 6 0 0 0 10.84 5.16l80-168a6 6 0 0 0-.35-5.78M182.5 146h-128l37.75-37.76a6 6 0 0 0 0-8.48L54.49 62h168Z" />
    </svg>
  );
}

export function IconCiseaux(props: P) {
  return (
    <svg {...ph(props)}>
      <path fill="currentColor" d="M159.38 112a6 6 0 0 1 1.57-8.34l67.66-46.31a6 6 0 0 1 6.78 9.91l-67.67 46.3a6 6 0 0 1-8.34-1.56M237 197.09a6 6 0 0 1-8.34 1.56L136 135.27l-45 30.79A34 34 0 1 1 84 156a2 2 0 0 0 .19.2l41.18-28.2l-41.14-28.16l-.23.16a34 34 0 1 1 7-10.1l144.38 98.8a6 6 0 0 1 1.62 8.39M75.56 91.55a22 22 0 1 0-31.12 0a21.88 21.88 0 0 0 31.12 0M82 180a22 22 0 1 0-6.44 15.56A21.88 21.88 0 0 0 82 180" />
    </svg>
  );
}

export function IconFleche(props: P) {
  return (
    <svg {...ph(props)}>
      <path fill="currentColor" d="m220.24 132.24l-72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48" />
    </svg>
  );
}

export function IconInstagram(props: P) {
  return (
    <svg {...ph(props)}>
      <path fill="currentColor" d="M128 82a46 46 0 1 0 46 46a46.06 46.06 0 0 0-46-46m0 80a34 34 0 1 1 34-34a34 34 0 0 1-34 34m48-136H80a54.06 54.06 0 0 0-54 54v96a54.06 54.06 0 0 0 54 54h96a54.06 54.06 0 0 0 54-54V80a54.06 54.06 0 0 0-54-54m42 150a42 42 0 0 1-42 42H80a42 42 0 0 1-42-42V80a42 42 0 0 1 42-42h96a42 42 0 0 1 42 42ZM190 76a10 10 0 1 1-10-10a10 10 0 0 1 10 10" />
    </svg>
  );
}

export function IconFacebook(props: P) {
  return (
    <svg {...ph(props)}>
      <path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m6 191.8V150h26a6 6 0 0 0 0-12h-26v-26a18 18 0 0 1 18-18h16a6 6 0 0 0 0-12h-16a30 30 0 0 0-30 30v26H96a6 6 0 0 0 0 12h26v67.8a90 90 0 1 1 12 0" />
    </svg>
  );
}

export function IconWhatsapp(props: P) {
  return (
    <svg {...ph(props)}>
      <path fill="currentColor" d="m186.68 146.63l-32-16a6 6 0 0 0-6 .38L133 141.46A42.5 42.5 0 0 1 114.54 123L125 107.33a6 6 0 0 0 .38-6l-16-32A6 6 0 0 0 104 66a38 38 0 0 0-38 38a86.1 86.1 0 0 0 86 86a38 38 0 0 0 38-38a6 6 0 0 0-3.32-5.37M152 178a74.09 74.09 0 0 1-74-74a26 26 0 0 1 22.42-25.75l12.66 25.32l-10.39 15.58a6 6 0 0 0-.54 5.63a54.43 54.43 0 0 0 29.07 29.07a6 6 0 0 0 5.63-.54l15.58-10.39l25.32 12.66A26 26 0 0 1 152 178M128 26a102 102 0 0 0-89.65 150.69l-11.62 34.87a14 14 0 0 0 17.71 17.71l34.87-11.62A102 102 0 1 0 128 26m0 192a90 90 0 0 1-45.06-12.08a6.1 6.1 0 0 0-3-.81a6.2 6.2 0 0 0-1.9.31l-37.39 12.46a2 2 0 0 1-2.53-2.53L50.58 178a6 6 0 0 0-.5-4.91A90 90 0 1 1 128 218" />
    </svg>
  );
}

export function IconCamion(props: P) {
  return (
    <svg {...ph(props)}>
      <path fill="currentColor" d="M247.42 117.85 217 71.19A14 14 0 0 0 205.24 65H176a6 6 0 0 0-6 6v104a6 6 0 0 0 6 6h9.15a30 30 0 0 0 58.7 0H208a6 6 0 0 1 0-12h38v-46a5.9 5.9 0 0 0-.58-2.15M182 77h23.24a2 2 0 0 1 1.68.9l24.19 37.1H182ZM215 197a18 18 0 1 1 18-18a18 18 0 0 1-18 18M164 60a6 6 0 0 0-6-6H16a6 6 0 0 0 0 12h142a6 6 0 0 0 6-6m-14 32a6 6 0 0 0-6-6H8a6 6 0 0 0 0 12h136a6 6 0 0 0 6-6M8 116h108a6 6 0 0 1 0 12H8a6 6 0 0 1 0-12m127.15 60H83.15a30 30 0 0 1-58.3 0H8a6 6 0 0 1 0-12h150a6 6 0 0 1 0 12h-22.85M54 197a18 18 0 1 0-18-18a18 18 0 0 0 18 18" />
    </svg>
  );
}

export function IconColisRetour(props: P) {
  return (
    <svg {...ph(props)}>
      <path fill="currentColor" d="M223.68 66.15 135.68 18a15.9 15.9 0 0 0-15.36 0l-88 48.17A16 16 0 0 0 24 80.14v95.72a16 16 0 0 0 8.32 14l88 48.17a15.9 15.9 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.14a16 16 0 0 0-8.32-14M128 30l80.34 44l-29.77 16.3l-80.35-44ZM128 122L47.66 78l33.9-18.56l80.34 44ZM40 90.9l82 44.83v85.14l-82-44.9Zm176 79.94v.16l-82 44.9v-85.13l32-17.51V152a6 6 0 0 0 12 0v-46.15l38-20.8v85.79Z" />
      <path fill="currentColor" d="M108 176a6 6 0 0 1-6 6H82a6 6 0 0 1-4.24-10.24l14-14a6 6 0 0 1 8.48 8.48L98.49 168H102a6 6 0 0 1 6 8" />
    </svg>
  );
}

export function IconRetour(props: P) {
  return (
    <svg {...ph(props)}>
      <path fill="currentColor" d="M232 128A104 104 0 1 1 128 24a103.4 103.4 0 0 1 73.5 30.7l14.8-14.8a6 6 0 0 1 10.2 4.24V88a6 6 0 0 1-6 6h-43.86a6 6 0 0 1-4.24-10.24l16.5-16.5A91.4 91.4 0 0 0 128 36a92 92 0 1 0 92 92a6 6 0 0 1 12 0" />
    </svg>
  );
}

export function IconColis(props: P) {
  return (
    <svg {...ph(props)}>
      <path fill="currentColor" d="m223.68 66.15-88-48.17a15.9 15.9 0 0 0-15.36 0l-88 48.17A16 16 0 0 0 24 80.14v95.72a16 16 0 0 0 8.32 14l88 48.17a15.9 15.9 0 0 0 15.36 0l88-48.17a16 16 0 0 0 8.32-14V80.14a16 16 0 0 0-8.32-14M128 30l80.34 44l-29.77 16.3l-80.35-44ZM128 122L47.66 78l33.9-18.56l80.34 44ZM40 90.9l82 44.83v85.14l-82-44.9Zm176 79.94v.16l-82 44.9v-85.13l82-44.87Z" />
    </svg>
  );
}

export function IconEtiquette(props: P) {
  return (
    <svg {...ph(props)}>
      <path fill="currentColor" d="M231.4 121.4 134.6 24.6A14 14 0 0 0 124.7 20H40a14 14 0 0 0-14 14v84.7a14 14 0 0 0 4.1 9.9l96.8 96.8a14 14 0 0 0 19.8 0l84.7-84.7a14 14 0 0 0 0-19.8ZM144 216 47.2 119.2V32h87.5L231.4 128.7Zm-56-134a18 18 0 1 1-18-18a18 18 0 0 1 18 18" />
    </svg>
  );
}

export function IconTshirt(props: P) {
  return (
    <svg {...ph(props)}>
      <path fill="currentColor" d="M247.4 92.7 190 48.2A14 14 0 0 0 181.4 45H162.9a6 6 0 0 0-5.9 5.1a29 29 0 0 1-57.9 0a6 6 0 0 0-5.9-5.1H74.6A14 14 0 0 0 66 48.2L8.6 92.7A14 14 0 0 0 6 111.4l24.4 41.7a14 14 0 0 0 19.7 4.9L64 149.5V196a14 14 0 0 0 14 14h100a14 14 0 0 0 14-14v-46.5l13.9 8.5a14 14 0 0 0 19.7-4.9L250 111.4a14 14 0 0 0-2.6-18.7M203.7 145l-27.7-17V196H80v-68l-27.7 17L18 91.5L75.4 47H92.6a41 41 0 0 0 80.8 0h17.2L248 91.5Z" />
    </svg>
  );
}

export function IconGrille(props: P) {
  return (
    <svg {...ph(props)}>
      <path fill="currentColor" d="M104 42v60a14 14 0 0 1-14 14H42a14 14 0 0 1-14-14V42a14 14 0 0 1 14-14h48a14 14 0 0 1 14 14M166 28h48a14 14 0 0 1 14 14v60a14 14 0 0 1-14 14h-48a14 14 0 0 1-14-14V42a14 14 0 0 1 14-14M42 152h48a14 14 0 0 1 14 14v48a14 14 0 0 1-14 14H42a14 14 0 0 1-14-14v-48a14 14 0 0 1 14-14m124 0h48a14 14 0 0 1 14 14v48a14 14 0 0 1-14 14h-48a14 14 0 0 1-14-14v-48a14 14 0 0 1 14-14" />
    </svg>
  );
}

export function IconRecherche(props: P) {
  return (
    <svg {...ph(props)}>
      <path fill="currentColor" d="m229.66 218.34-50.07-50.06a88 88 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72" />
    </svg>
  );
}

export function IconCasque(props: P) {
  return (
    <svg {...ph(props)}>
      <path fill="currentColor" d="M128 24a88.1 88.1 0 0 0-88 88v56a24 24 0 0 0 24 24h16a8 8 0 0 0 8-8v-64a8 8 0 0 0-8-8H56v-8a72 72 0 0 1 144 0v8h-24a8 8 0 0 0-8 8v64a8 8 0 0 0 8 8h16a24 24 0 0 0 24-24v-56a88.1 88.1 0 0 0-88-88" />
    </svg>
  );
}

export function IconCasqueContour(props: P) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="1em" height="1em" {...props}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
        <path d="M9 25v-3a15 15 0 0 1 30 0v3" />
        <path d="M9 24h3.5a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H9V24Zm30 0h-3.5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3H39V24Z" />
        <path d="M39 37c0 4-3.4 6-8.5 6H27" />
      </g>
    </svg>
  );
}

export function IconDiscussion(props: P) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="1em" height="1em" {...props}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
        <path d="M7.5 21.5c0-7 6.8-12.5 15.2-12.5s15.2 5.5 15.2 12.5S31.1 34 22.7 34c-2.1 0-4.2-.4-6-1.1L10 36l1.8-6.2a11.6 11.6 0 0 1-4.3-8.3Z" />
        <path d="M28.5 34.1c1.8 2.9 5.3 4.9 9.2 4.9 1.3 0 2.5-.2 3.6-.6l4.2 1.8-1.1-3.8a7.3 7.3 0 0 0 2.1-5.1c0-4.5-4.1-8.1-9.2-8.1" />
        <path d="M16.5 21.5h.1m6-.1h.1m6-.1h.1" strokeWidth="2.7" />
      </g>
    </svg>
  );
}

export function IconHorloge(props: P) {
  return (
    <svg {...ph(props)}>
      <path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m6-92V72a6 6 0 0 0-12 0v56a6 6 0 0 0 1.76 4.24l40 40a6 6 0 0 0 8.48-8.48Z" />
    </svg>
  );
}

export function IconEmail(props: P) {
  return (
    <svg {...ph(props)}>
      <path fill="currentColor" d="M224 48H32a8 8 0 0 0-8 8v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8m-96 85.15L52.57 64h150.86ZM98.71 128L40 181.81V74.19Zm11.84 10.85l12.63 11.51a8 8 0 0 0 10.64 0l12.63-11.51L214.29 192H41.71ZM157.29 128L216 74.18v107.64Z" />
    </svg>
  );
}

export function IconGauche(props: P) {
  return (
    <svg {...ph(props)}>
      <path fill="currentColor" d="M164.24 203.76a6 6 0 1 1-8.48 8.48l-80-80a6 6 0 0 1 0-8.48l80-80a6 6 0 0 1 8.48 8.48L88.49 128Z" />
    </svg>
  );
}

export function IconDroite(props: P) {
  return (
    <svg {...ph(props)}>
      <path fill="currentColor" d="m180.24 132.24l-80 80a6 6 0 0 1-8.48-8.48L167.51 128L91.76 52.24a6 6 0 0 1 8.48-8.48l80 80a6 6 0 0 1 0 8.48" />
    </svg>
  );
}

export function IconCoche(props: P) {
  return (
    <svg {...ph(props)}>
      <path fill="currentColor" d="m228.24 76.24l-128 128a6 6 0 0 1-8.48 0l-56-56a6 6 0 0 1 8.48-8.48L96 191.51L219.76 67.76a6 6 0 0 1 8.48 8.48" />
    </svg>
  );
}

export function IconMenu(props: P) {
  return (
    <svg {...ph(props)}>
      <path fill="currentColor" d="M222 128a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6M40 70h176a6 6 0 0 0 0-12H40a6 6 0 0 0 0 12m176 116H40a6 6 0 0 0 0 12h176a6 6 0 0 0 0-12" />
    </svg>
  );
}

export function IconFermer(props: P) {
  return (
    <svg {...ph(props)}>
      <path fill="currentColor" d="M204.24 195.76a6 6 0 1 1-8.48 8.48L128 136.49l-67.76 67.75a6 6 0 0 1-8.48-8.48L119.51 128L51.76 60.24a6 6 0 0 1 8.48-8.48L128 119.51l67.76-67.75a6 6 0 0 1 8.48 8.48L136.49 128Z" />
    </svg>
  );
}

export function IconYole(props: P) {
  return (
    <svg {...ph(props)}>
      <path fill="currentColor" d="M245.41 173.4A6 6 0 0 0 240 170h-98v-28h74a6 6 0 0 0 4.44-10L142 45.68V8a6 6 0 0 0-10.66-3.78l-104 128A6 6 0 0 0 32 142h98v28H16a6 6 0 0 0-4.69 9.75l29.6 37A14 14 0 0 0 51.84 222h152.32a14 14 0 0 0 10.93-5.25l29.6-37a6 6 0 0 0 .72-6.35m-43-43.4H142V63.52Zm-157.8 0L130 24.9V130Zm161.11 79.25a2 2 0 0 1-1.56.75H51.84a2 2 0 0 1-1.56-.75L28.48 182h199Z" />
    </svg>
  );
}

// Drapeau officiel de la Martinique (image fournie par Tom, Flag-of-Martinique.svg) :
// moitie haute NOIRE, moitie basse VERTE, un TRIANGLE ROUGE ancre a gauche (hampe), sommet au centre.
// Rectangle x:[4,20] y:[5,19].
export function IconDrapeauMartinique({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" className={className} aria-hidden="true">
      {/* moitie haute : noir */}
      <rect x="4" y="5" width="16" height="7" fill="#231F1E" />
      {/* moitie basse : vert */}
      <rect x="4" y="12" width="16" height="7" fill="#00A650" />
      {/* triangle rouge, base sur la hampe (gauche), sommet au centre */}
      <polygon points="4,5 12,12 4,19" fill="#EF1923" />
      {/* contour dore fin pour la lisibilite */}
      <rect x="4" y="5" width="16" height="14" fill="none" stroke="#D4B36A" strokeWidth="1.1" />
    </svg>
  );
}

// Lisere aux couleurs du drapeau officiel de la Martinique (rouge, vert, noir).
export function LisereDrapeau({ className = "" }: { className?: string }) {
  return (
    <div className={`flex h-[3px] w-full ${className}`} aria-hidden="true">
      <span className="h-full flex-1" style={{ background: "#EF1923" }} />
      <span className="h-full flex-1" style={{ background: "#00A650" }} />
      <span className="h-full flex-1" style={{ background: "#231F1E", borderTop: "1px solid rgba(212,179,106,0.5)" }} />
    </div>
  );
}
