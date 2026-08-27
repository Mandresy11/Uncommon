// INSPIRATION: accordeon natif details (FAQ SEO friendly). Layout calque sur la maquette
// client : bandeau lateral texture + monogramme filigrane, accordeons numerotes 01-04,
// puis section "D'autres questions" avec recherche et filtre par categorie.
import { Faq as FaqLayout } from "./faq-layout";

export const metadata = {
  title: "FAQ · Uncommon People Tribe",
  description: "Questions fréquentes : livraison, retours, tailles, séries limitées Uncommon People Tribe.",
};

const QUESTIONS_PRINCIPALES = [
  {
    q: "Ta marque vient d'où ?",
    r: "Uncommon People Tribe est née en Martinique. Érick, son fondateur, a quitté l'île à 11 ans pour l'Hexagone et y a construit sa vie, avant de rentrer vivre en Martinique en 2022. La marque porte cette histoire de départ et de retour aux racines. Toute l'histoire est sur la page Notre histoire.",
  },
  {
    q: "Tu fabriques où ?",
    r: "La première collection a été fabriquée en Martinique. Les prochaines collections seront produites par un fournisseur en Chine, avec le même niveau d'exigence sur les finitions. On te le dit clairement, sans rien laisser croire d'autre.",
  },
  {
    q: "Vous livrez où ?",
    r: "En Martinique, en Guadeloupe et en Guyane, ainsi que dans l'Hexagone. Le retrait en main propre est gratuit, sous 1 à 2 jours. Les tarifs et délais des autres zones seront précisés au lancement de la boutique en ligne.",
  },
  {
    q: "Je peux retourner un article ?",
    r: "Oui, sous 14 jours après réception, article non porté dans son emballage d'origine. Voir la page Livraison et retours.",
  },
];

const QUESTIONS_AUTRES = [
  {
    q: "Est-ce que c'est de la bonne qualité ?",
    r: "Oui : broderie or (jamais imprimée), drapeau martiniquais cousu ou brodé, piqué premium, boutons choisis un à un, finitions contrôlées pièce par pièce. Chaque collection est produite en série limitée, pas en stock infini.",
    categorie: "produit" as const,
  },
  {
    q: "Qu'est-ce que le logo veut dire ?",
    r: "Le monogramme UP entrelacé représente Uncommon People, la tribu qui porte la marque. Le drapeau martiniquais brodé ou cousu rappelle l'origine de la maison, où que tu sois.",
    categorie: "produit" as const,
  },
  {
    q: "Les modèles épuisés reviennent ?",
    r: "Pas toujours. Les pièces sont produites en séries limitées : quand une taille part, elle n'est pas systématiquement rééditée. La newsletter annonce les retours en stock.",
    categorie: "commande" as const,
  },
  {
    q: "Comment je choisis ma taille ?",
    r: "Consulte le guide des tailles. Les polos taillent normal, les tee-shirts ont une coupe droite.",
    categorie: "tailles" as const,
  },
  {
    q: "Puis-je modifier ou annuler ma commande ?",
    r: "Écris-nous rapidement après ta commande via la page Contact : tant qu'elle n'est pas expédiée, on peut encore l'ajuster.",
    categorie: "commande" as const,
  },
  {
    q: "Quels sont les délais de livraison ?",
    r: "Le retrait en main propre se fait sous 1 à 2 jours. Les délais pour la Martinique, la Guadeloupe, la Guyane et l'Hexagone seront précisés au lancement de la boutique en ligne.",
    categorie: "livraison" as const,
  },
  {
    q: "Puis-je retourner un article ?",
    r: "Oui, sous 14 jours après réception, à condition que l'article n'ait pas été porté et soit dans son emballage d'origine.",
    categorie: "retours" as const,
  },
  {
    q: "Comment entretenir mes pièces UP ?",
    r: "Lavage à 30 degrés sur l'envers, pas de sèche-linge, repassage en évitant la broderie ou la sérigraphie. Le fil d'or reste impeccable lavage après lavage.",
    categorie: "produit" as const,
  },
];

export default function Faq() {
  return <FaqLayout principales={QUESTIONS_PRINCIPALES} autres={QUESTIONS_AUTRES} />;
}
