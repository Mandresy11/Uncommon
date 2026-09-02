// INSPIRATION: accordeon natif details (FAQ SEO friendly). Layout calque sur la maquette
// client : bandeau lateral texture + monogramme filigrane, accordeons numerotes 01-04,
// puis section "D'autres questions" avec recherche et filtre par categorie.
import { Faq as FaqLayout } from "./faq-layout";

export const metadata = {
  title: "FAQ · Uncommon People Tribe",
  description: "Questions fréquentes : livraison, retours, tailles, séries limitées Uncommon People Tribe.",
};

const QUESTIONS_AUTRES = [
  {
    q: "Pourquoi avoir créé Uncommon People Tribe ?",
    r: "La marque est née du parcours de son fondateur, parti très jeune de Martinique puis revenu vivre sur l'île en 2022. Elle traduit ce lien intact avec les origines, la culture et les traditions, ainsi que l'idée que rien n'est impossible lorsqu'on refuse de se fixer des limites.",
    categorie: "produit" as const,
  },
  {
    q: "Est-ce que c'est de la bonne qualité ?",
    r: "Oui. Sur les polos, le monogramme et le drapeau martiniquais sont brodés, avec un tissu piqué composé de 95 % de coton et 5 % d'élasthanne. Sur les tee-shirts, les visuels dorés sont sérigraphiés sur un coton peigné épais. Les finitions sont contrôlées pièce par pièce.",
    categorie: "produit" as const,
  },
  {
    q: "Où sont fabriquées les pièces ?",
    r: "La première collection a été fabriquée en Martinique. Les prochaines collections seront produites par un fournisseur en Chine, avec la même exigence portée aux matières, aux broderies et aux finitions. Nous préférons te l'indiquer clairement.",
    categorie: "produit" as const,
  },
  {
    q: "À qui s'adresse la marque ?",
    r: "En priorité aux hommes de 35 ans et plus qui entretiennent un lien fort avec la Martinique : ceux qui y vivent, ceux qui sont partis et souhaitent revenir, et ceux qui font vivre la culture antillaise dans l'Hexagone. Elle s'adresse aussi à toutes les personnes qui ont choisi la Martinique comme pays de cœur.",
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
    q: "Quand arrive la prochaine collection ?",
    r: "La prochaine collection est prévue pour novembre afin d'être disponible avant Noël. Une édition limitée consacrée à la Course de Yoles est ensuite envisagée environ six mois plus tard.",
    categorie: "produit" as const,
  },
  {
    q: "Comment je choisis ma taille ?",
    r: "Consulte le guide des tailles. Les polos taillent normal, les tee-shirts ont une coupe droite.",
    categorie: "tailles" as const,
  },
  {
    q: "Quelles tailles sont disponibles ?",
    r: "Le polo Signature UP est proposé du M au XXL. Le tee-shirt La Yole est disponible du S au XXL, selon le stock de chaque couleur.",
    categorie: "tailles" as const,
  },
  {
    q: "Comment prendre mes mesures correctement ?",
    r: "Pose à plat un vêtement qui te va bien, sans tirer sur le tissu. Mesure la largeur des épaules, la poitrine d'aisselle à aisselle et la longueur du haut de l'épaule jusqu'au bas, puis compare avec notre guide des tailles.",
    categorie: "tailles" as const,
  },
  {
    q: "Que choisir si je suis entre deux tailles ?",
    r: "Privilégie la taille supérieure si tu souhaites davantage d'aisance. Pour un rendu plus près du corps, choisis la taille inférieure en tenant compte de tes mesures et de la coupe du modèle.",
    categorie: "tailles" as const,
  },
  {
    q: "Le polo et le tee-shirt ont-ils la même coupe ?",
    r: "Non. Le polo Signature UP a une coupe normale, tandis que le tee-shirt La Yole présente une coupe droite et un tombé plus structuré.",
    categorie: "tailles" as const,
  },
  {
    q: "Quelle taille choisir pour un porté plus ample ?",
    r: "Choisis une taille au-dessus de ta taille habituelle. Tu gagneras en aisance tout en conservant le tombé du modèle.",
    categorie: "tailles" as const,
  },
  {
    q: "Puis-je demander conseil avant de commander ?",
    r: "Oui. Envoie-nous ta taille habituelle, ta taille en centimètres et ton tour de poitrine via la page Contact : nous t'aiderons à choisir la coupe la plus adaptée.",
    categorie: "tailles" as const,
  },
  {
    q: "Puis-je modifier ou annuler ma commande ?",
    r: "Écris-nous rapidement après ta commande via la page Contact : tant qu'elle n'est pas expédiée, on peut encore l'ajuster.",
    categorie: "commande" as const,
  },
  {
    q: "Quels moyens de paiement sont acceptés ?",
    r: "Tu peux régler ta commande par carte bancaire ou avec PayPal.",
    categorie: "commande" as const,
  },
  {
    q: "Les prix affichés sont-ils TTC ?",
    r: "Oui, tous les prix présentés sur la boutique sont affichés toutes taxes comprises.",
    categorie: "commande" as const,
  },
  {
    q: "Quels sont les délais de livraison ?",
    r: "Le retrait en main propre se fait sous 1 à 2 jours. Les délais pour la Martinique, la Guadeloupe, la Guyane et l'Hexagone seront précisés au lancement de la boutique en ligne.",
    categorie: "livraison" as const,
  },
  {
    q: "Où livrez-vous ?",
    r: "Nous livrons en Martinique, en Guadeloupe, en Guyane ainsi que dans l'Hexagone.",
    categorie: "livraison" as const,
  },
  {
    q: "Puis-je retirer ma commande en main propre ?",
    r: "Oui. Le retrait en main propre est gratuit et généralement disponible sous 1 à 2 jours.",
    categorie: "livraison" as const,
  },
  {
    q: "Combien coûte la livraison ?",
    r: "Le retrait en main propre est gratuit. Les tarifs des autres modes de livraison seront indiqués clairement dans la boutique dès leur confirmation.",
    categorie: "livraison" as const,
  },
  {
    q: "Puis-je retourner un article ?",
    r: "Oui, sous 14 jours après réception, à condition que l'article n'ait pas été porté et soit dans son emballage d'origine.",
    categorie: "retours" as const,
  },
  {
    q: "Comment demander un retour ?",
    r: "Contacte-nous dans les 14 jours suivant la réception de ta commande, avant de renvoyer l'article. Nous te communiquerons les étapes à suivre. La pièce doit être non portée et conservée dans son emballage d'origine.",
    categorie: "retours" as const,
  },
  {
    q: "Puis-je échanger un article pour une autre taille ?",
    r: "Oui, selon les tailles encore disponibles. Les collections étant produites en séries limitées, contacte-nous rapidement pour que nous puissions vérifier le stock.",
    categorie: "retours" as const,
  },
  {
    q: "Comment entretenir mes pièces UP ?",
    r: "Lavage à 30 degrés sur l'envers, pas de sèche-linge, repassage en évitant la broderie ou la sérigraphie. Le fil d'or reste impeccable lavage après lavage.",
    categorie: "produit" as const,
  },
];

export default function Faq() {
  return <FaqLayout autres={QUESTIONS_AUTRES} />;
}
