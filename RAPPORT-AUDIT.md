# RAPPORT D'AUDIT : Uncommon People Tribe (mode DEMO)

Auditeur séparé, audit du 24/07/2026. Périmètre : app/, components/, lib/, artefacts BRIEF, DIRECTION-VISUELLE, COLORISTE, COPYWRITING, MCP-PROOFS. TypeScript : `npx tsc --noEmit` passe sans erreur.

Score global : 15/20. Site propre et fidèle à la direction visuelle, mais 3 défauts majeurs à corriger avant livraison.

---

## DÉFAUTS MAJEURS (bloquants, à corriger avant livraison)

1. **Ancre `/#newsletter` cassée (lien interne mort)**
   Fichier : `app/collections/page.tsx`, ligne 61. Le lien "Être prévenu" pointe vers `/#newsletter`, mais aucune section de la home ne porte `id="newsletter"` (vérifié : le seul `id` de `components/sections/home.tsx` est `id="email"` ligne 671). Le visiteur atterrit en haut de la home sans voir le formulaire.
   Correction : ajouter `id="newsletter"` sur la balise `<section>` de la fonction `Newsletter()` (`components/sections/home.tsx`, ligne 640) et ajouter `scroll-margin-top` (la navbar est fixed) via `className="... scroll-mt-24"`.

2. **CTA "Ajouter au panier" qui n'ajoute rien : promesse du bouton non tenue sur tout le parcours d'achat**
   Fichier 1 : `components/sections/home.tsx`, lignes 420 à 422 : le bouton "Ajouter au panier" de la section Pièce vedette est un simple lien vers `/produit/tee-shirt-la-yole`.
   Fichier 2 : `app/produit/tee-shirt-la-yole/page.tsx`, ligne 70 : "Ajouter au panier" mène vers `/panier`, qui affiche "Votre panier est vide" (`app/panier/page.tsx`, ligne 15). Le visiteur clique deux fois sur "Ajouter au panier" et se retrouve devant un panier vide : c'est le pire moment possible pour casser la confiance sur un site e-commerce, même en démo.
   Correction minimale (démo) : renommer le CTA de la home en "Voir le produit" ou "Commander", et sur la fiche produit soit renommer en "Commander" avec un message clair, soit simuler l'ajout (état local : le panier affiche 1 article, le compteur navbar passe à 1). Ne jamais afficher "panier vide" juste après un clic "Ajouter au panier".

3. **Preuves MCP non conformes aux règles de l'AUDITEUR**
   AUDITEUR.md exige un commentaire `// MCP:` en tête de CHAQUE fichier de section (avec 3 composants évalués pour le Hero) ; la CHECKLIST exige que MCP-PROOFS.md cite un searchQuery ET un composant retourné pour chaque section. État réel : aucun commentaire `// MCP:` dans le code, et `MCP-PROOFS.md` documente 3 appels réels seulement (Heroes, Cards, Navbar), tous en erreur protocole -32602 ; les 5 autres requêtes sont listées comme "prévues", donc jamais tentées. Point positif : le repli est honnête (aucun `// MCP` inventé, traçabilité `// INSPIRATION` réelle par section). Au sens strict des règles c'est un REFUS ; en pratique, si la panne du serveur Magic est avérée sur la session, la décision revient à Tom.
   Correction : retenter les 5 requêtes manquantes (Product, Features, About, Accordion, CTA, Footer) si le serveur répond, sinon ajouter dans chaque fichier de section le commentaire toléré `// MCP: "X" -> erreur serveur -32602, repli [source]` pour que le code soit auto-porteur.

---

## DÉFAUTS MINEURS (améliorations)

1. **FAQ : accordéons invisibles en tant qu'accordéons**
   `app/faq/page.tsx`, lignes 40 à 45 : `<details>` avec `list-none marker:content-none`, donc aucun indicateur visuel (ni +, ni chevron). Rien n'indique que les questions sont cliquables.
   Correction : ajouter un signe "+" à droite du `<summary>` (avec rotation en `group-open:rotate-45`), comme l'accordéon de la section Pourquoi la tribu de la home.

2. **Lien "Voir le savoir-faire" qui ignore son ancre**
   `components/sections/home.tsx`, ligne 483 : le CTA pointe vers `/notre-histoire` alors que le bloc cible existe avec `id="savoir-faire"` (`app/notre-histoire/page.tsx`, ligne 52). Pointer vers `/notre-histoire#savoir-faire` et ajouter `scroll-mt-28` sur le bloc.

3. **Réseaux sociaux placeholders dans le footer**
   `components/footer.tsx`, lignes 52 à 60 : `https://instagram.com`, `https://facebook.com`, `https://wa.me/596000000` (numéro factice). À remplacer par les vrais comptes d'Érick avant livraison, ou retirer les icônes sans compte réel.

4. **Boutique : toutes les cartes mènent à la même fiche, y compris les polos**
   `app/boutique/page.tsx`, ligne 17 : `href="/produit/tee-shirt-la-yole"` codé en dur pour les 4 produits. Un visiteur qui clique "Polo Signature UP" arrive sur la fiche du tee-shirt. Acceptable en DEMO (une seule fiche existe), mais à signaler à Tom : au minimum utiliser `p.slug` et rediriger, ou griser les produits sans fiche.

5. **Données de stock inventées ("plus que 3", "XL épuisé")**
   `components/sections/home.tsx`, lignes 348 à 354 et `app/produit/tee-shirt-la-yole/page.tsx`, lignes 14 à 20 : chiffres de rareté non fournis par le client. Ce ne sont pas de faux avis (interdit respecté), mais la fausse rareté chiffrée est un cousin du même problème : à valider avec Érick ou remplacer par un neutre "Série limitée" sans compte précis.

6. **Duplication du bloc stocks/tailles entre home et fiche produit**
   Même liste S à XXL avec états codée deux fois (fichiers du point 5), avec déjà une divergence de format ("3 restants" vs "plus que 3"). Factoriser dans `lib/products.ts` pour éviter les incohérences futures.

7. **`<img>` natif partout au lieu de `next/image`**
   Tout le site utilise `<img>` (ex. `components/sections/home.tsx` lignes 225, 296, 375). Les images sont légères (webp, max 284 Ko) avec width/height et lazy corrects, donc impact limité, mais `next/image` apporterait srcset et priorité hero gratuitement sur Vercel.

8. **Effet "compteur série limitée" annoncé mais absent**
   DIRECTION-VISUELLE.md promettait 2 effets premium : grain (présent via `.grain`) et count-up série limitée (introuvable dans le code). Écart de conformité avec l'artefact, pas un défaut visuel. Soit l'implémenter, soit mettre à jour l'artefact.

9. **Placeholders légaux visibles**
   `app/mentions-legales/page.tsx`, lignes 15 à 20 : "Siège social, numéro SIRET et coordonnées complètes : informations à confirmer avec l'entreprise avant mise en ligne définitive." Assumé en DEMO, mais à ne surtout pas laisser lors du passage en production (idem CGV "seront finalisées").

---

## CONFORME (points vérifiés OK)

- **Zéro tiret cadratin** : grep sur tout app/, components/, lib/ : aucune occurrence.
- **Accents français** : vérifiés partout (série, épuisé, première, métropole, Érick) : aucun mot dé-accentué trouvé.
- **Interdits du brief respectés** : aucun faux avis ni témoignage (grep "avis/témoignage" vide), aucune mention de Koh-Lanta, aucune fabrication France/Martinique affirmée ("pensée en Martinique", "créée et pilotée depuis l'île" : formulations prudentes ; "atelier de confection sélectionné" sans lieu), aucun engagement écologique inventé, la course de yoles jamais nommée ("la grande course de yoles").
- **Patterns IA bannis absents** : pas de badge pill au-dessus du H1 hero (kicker typographique filets or), pas de cartes numérotées 01/02/03, pas de barre+label générique (dispositif kicker italique + filets propre au projet), pas de rangée de badges de réassurance, pas de point pulsant, pas de texte sous les CTA du hero, pas de timeline à cercles numérotés.
- **Pas d'excès de grilles de cartes** : la home varie réellement les layouts : showcase interactif couleurs, carrousel scroll-snap, 2 grands blocs photo, split produit, bandeau 3 colonnes à filets, split portrait, accordéons, formulaire. Aucune grille 6-8 cartes identiques.
- **Coins droits partout** : aucun `rounded` hors `rounded-full` réservé aux pastilles couleur et médaillons d'icônes (exceptions prévues par la direction visuelle).
- **Alternance sombre/clair** : séquence exacte de DIRECTION-VISUELLE respectée (sombre / clair / sombre / clair / sombre / clair / sable foncé / sombre), jamais deux photos fortes consécutives.
- **Aucune section vide ou texte seul sur fond nu** : les 8 sections ont une image de fond IA (les 17 fichiers existent dans public/img/), overlays entre 0.45 et 0.60.
- **Contraste** : ratios COLORISTE respectés dans le code (texte #F5F1E8 sur noir, #191610 sur sable, or foncé #8A6A1D pour les accents sur fonds clairs, jamais d'or clair sur sable), mots fantômes à opacité 0.05 purement décoratifs et aria-hidden.
- **Hero conforme** : fond fixe, aucune parallaxe ni zoom, version mobile 9:16 dédiée, H1 2-3 lignes avec variation italique dorée, se termine aux 2 CTA (le filet animé est décoratif aria-hidden), text-shadow de lisibilité.
- **CTA** : un élément cliquable visible par section (8/8 plus CTA flottant unique), boutons premium sobres (aplat or, contour or avec fond semi-opaque et backdrop-blur, jamais de ghost nu), CTA principal above the fold, libellés orientés bénéfice.
- **Ordre des sections e-commerce logique** : hero, produits, collections, best-seller, finitions, histoire, raisons, newsletter : le produit arrive avant le storytelling, conforme à la logique visiteur mode.
- **Mobile** : CTA sous l'image (Pièce vedette en ordre titre/image/détails+CTA via order-1/2/3, Histoire avec CTA sous le portrait), carrousel scroll-snap avec touch-action pan-x et overscroll contain, accordéons pour les 4 raisons, menu burger dans la continuité du header, bandeau annonce avec taille réduite mobile.
- **Cartes** : bordures fines contrastantes systématiques (or 0.30-0.35 sur sombre, noir 0.15 sur clair), cartes tee-shirts de largeur et ratio identiques (aspect 4/5).
- **Formulaires identifiables** : newsletter et contact avec vrais labels visibles, placeholders réalistes, cadre opaque, focus visible, message de confirmation.
- **Copywriting** : fidèle à COPYWRITING.md, phrases courtes, aucun pavé (aucune section ne dépasse 80 mots sans rupture), pas de titres "Notre mission/vision", chaque info donnée une seule fois (contrôle duplication respecté).
- **Technique** : `tsc --noEmit` sans erreur, toutes les images avec alt + width + height, `loading="lazy"` partout sauf hero, fonts `display: swap`, `prefers-reduced-motion` géré (globals.css + once:true), aria-labels sur les boutons icônes, `lang="fr"`, navbar transparente puis opaque au scroll avec lisière drapeau signature.
- **Anti-répétition studio** : typo (Libre Caslon Display + Public Sans) et navbar logo-centré inédites par rapport à VELOCE et BUNZY, palette propre au client.

---

## À VÉRIFIER MANUELLEMENT PAR TOM

- Rendu réel des 17 images IA (fidélité des polos au monogramme UP, crédibilité du portrait d'Érick) : non évaluable depuis le code.
- Lisibilité réelle du H1 sur `fond-hero-mobile.webp` à 375px.
- Décision sur le point majeur 3 (panne MCP Magic avérée ou non sur la session).
