# DIRECTION VISUELLE : Uncommon People Tribe

Skills invoques : design-god (charge en conversation, regles appliquees). ui-ux-pro-max et design-system sont couverts par design-god (sections integrees "workflow integre" et "tokens"), note de contournement pour limiter la charge, mode une-traite.

## Registre
Luxe / mode. Ecrin noir et or, chaleur antillaise en contrepoint sable.

## TYPO (tirage R=1, registre LUXE, banque reduite : regle 60 exclut Fraunces en titre luxe)
Titre = Libre Caslon Display (serif a fort contraste, prestige, jamais utilisee sur les derniers projets : VELOCE = Cormorant, BUNZY = autre registre)
Corps = Public Sans (neutre lisible, autorise en corps)
Chiffres/stats : Public Sans (jamais de serif sur les chiffres)
H1 : Libre Caslon Display, 2-3 lignes max, mot "porte" en italique dore (regle 20 : variation dans le titre)

## Palette (hex du brief, extraits des visuels)
- --noir : #0A0908 (fond dominant sombre)
- --noir-surface : #14120E (surfaces cartes sombres)
- --or : #C99B2D (accent UNIQUE des CTA et details)
- --or-clair : #D4AF37 (hover, reflets, texte dore sur noir)
- --sable : #E5DCC9 (fond clair alterne)
- --sable-clair : #F0EAE0 (surfaces claires)
- --vert-drapeau : #1E7A3C (micro-accents drapeau uniquement)
- --rouge-drapeau : #C8202E (micro-accents drapeau uniquement)
- --texte-clair : #F5F1E8 (texte sur noir)
- --texte-sombre : #191610 (texte sur sable)
- --texte-muted-clair : rgba(245,241,232,0.75)
- --texte-muted-sombre : rgba(25,22,16,0.72)

## Coins : DROITS (0px partout, registre luxe, regle design-god "Luxe = 0px"). Aucun arrondi, y compris boutons et cartes. Exception unique : pastilles couleur produits (cercles).

## Boutons (regles 55 + 59 + 74)
- CTA principal sur image/hero : aplat OR plein #C99B2D, texte noir, uppercase tracking large. Hover : or clair.
- CTA secondaire : fond noir semi-opaque + backdrop-blur + bordure or 1px + texte or. Hover : remplissage or, texte noir (inversion douce).
- Sur fond sable : CTA noir plein texte sable, secondaire bordure noire.
- Sobres : pas de reflet qui balaie, micro-transitions douces uniquement.

## Navbar (unique, regle 68 : jamais reutilisee)
Structure logo CENTRE : liens gauche (Boutique, Collections, Notre histoire), monogramme UP + UNCOMMON PEOPLE TRIBE au centre, liens droite (FAQ, Contact) + icone panier avec compteur. Lisere drapeau martiniquais (3 segments rouge/vert/noir) en filet 2px sous la navbar. Transparente sur le hero, fond noir opaque des le scroll. Mobile : burger, menu deroulant dans la continuite du header (regle 48).

## Systeme de titres de sections (anti "barre+label", regle 65)
Kicker : label serif ITALIQUE dore encadre de deux filets dores lateraux courts (famille regle 52 approuvee par Tom), centre ou aligne selon section. En complement sur 2 sections max : grand mot fantome outline dore (opacite 6%) derriere le H2.

## Sequence d'alternance des fonds (home, 8 sections, footer exclu)
Tom exige UNE IMAGE GENEREE EN FOND DE CHAQUE SECTION (meme quasi unie). L'alternance se joue donc sombre/clair et photo-forte/texture-subtile. Jamais 2 photos fortes consecutives (regle 54).
1. Hero : SOMBRE, photo-forte (texture textile noir brode or, monogramme filigrane), overlay modere 0.45
2. Pieces phares : CLAIR, texture subtile lin sable (voile 0.9)
3. Collections : SOMBRE, texture subtile grain noir + reflets or (voile 0.75)
4. Piece vedette (Yole) : CLAIR, texture subtile papier sable chaud
5. Finitions : SOMBRE, photo-forte (macro broderie or), overlay 0.55, bandeau 3 colonnes separees par filets dores verticaux + medaillons Iconify (pattern approuve regle 52)
6. Histoire : CLAIR, texture photo tres voilee (cote nord Martinique sepia, voile sable 0.88)
7. Pourquoi la tribu : SABLE FONCE intermediaire (texture feuillage tropical grave clair, voile 0.85, cartes noires contrastees)
8. Newsletter : SOMBRE, photo-forte (mer des Caraibes au crepuscule dore), overlay 0.5
Sequence arretee : 1 sombre / 2 clair / 3 sombre / 4 clair / 5 sombre / 6 clair / 7 sable fonce / 8 sombre. Jamais 2 photos-fortes consecutives (photos fortes en 1, 5, 8 ; le reste en textures subtiles), conforme regle 54.

## Animations (framer-motion, EASE_LUXE [0.22,1,0.36,1])
- Reveal au scroll : opacity + translateY 20, once:true. Stagger 0.07 sur listes.
- Hero : AUCUNE parallaxe ni zoom du fond (regle absolue). Entree du texte en fade stagger.
- Hover cartes produit : image scale 1.04 douce + apparition bouton "Voir".
- 2 effets premium max : (a) grain/noise 0.03 sur sections sombres, (b) showcase polo interactif par couleur (remplace le count-up initialement envisage). Pas de tilt, pas de curseur custom.
- prefers-reduced-motion respecte via useReducedMotion.

## Images (toutes generees IA Higgsfield recraft_v4_1)
Produits : polos noir/vert/rouge portes (reproduction fidele des visuels fournis : monogramme UP or poitrine, drapeau manche gauche), tee-shirts yole noir/sable/olive, macro broderie, macro drapeau cousu.
Portrait fondateur : homme antillais 50 ans souriant, polo noir UP, lumiere doree.
Fonds : 8 textures/photos listees dans la sequence + version hero mobile 9:16 dediee (regle 58).
Interdit : unsplash/picsum, parallaxe hero, reutiliser une meme image sur 2 sections (regle 45).

## Anti-repetition
- Verifie : VELOCE (location auto, Cormorant, navbar pill sombre, hero photo voiture) et BUNZY (resto colore) : aucun chevauchement de palette/typo/navbar/hero.
- Navbar logo-centre jamais utilisee sur les projets precedents.
