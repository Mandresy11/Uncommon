# COLORISTE : Uncommon People Tribe

Tokens en hex directs (jamais hsl(var())). Coins droits partout.

## Tokens CSS (globals.css :root)
--noir: #0A0908;          /* fond sombre dominant */
--noir-surface: #14120E;  /* surfaces cartes sombres */
--or: #C99B2D;            /* accent unique, CTA */
--or-clair: #D4AF37;      /* hover or, details */
--sable: #E5DCC9;         /* fond clair alterne */
--sable-clair: #F0EAE0;   /* surfaces claires */
--sable-fonce: #D6CBB2;   /* section intermediaire */
--vert-drapeau: #1E7A3C;  /* micro-accent drapeau */
--rouge-drapeau: #C8202E; /* micro-accent drapeau */
--texte-clair: #F5F1E8;
--texte-sombre: #191610;
--border-or: rgba(201,155,45,0.35);
--border-sombre: rgba(25,22,16,0.15);

## Contrastes WCAG verifies (ratios approximatifs)
- #F5F1E8 sur #0A0908 : ~17:1 PASS (texte courant sombre)
- rgba(245,241,232,0.75) sur #0A0908 : ~9.5:1 PASS (texte secondaire, regle 50 : 0.75 mini)
- #191610 sur #E5DCC9 : ~13:1 PASS
- #191610 sur #D6CBB2 : ~10:1 PASS
- Noir #0A0908 sur bouton or #C99B2D : ~8:1 PASS (texte des CTA)
- Or #C99B2D sur noir #0A0908 : ~8:1 PASS pour GRANDS titres et labels 3:1 requis ; pour petit texte dore, utiliser #D4AF37 (~9:1) PASS
- Interdit : or sur sable (ratio < 3:1) ; sur fond sable les accents passent en #8A6A1D (or fonce, ~5:1) PASS
--or-fonce: #8A6A1D;      /* accent or lisible sur fonds clairs */

## Regles d'usage
- UNE couleur d'accent : l'or. Vert et rouge drapeau UNIQUEMENT dans le lisere navbar, le badge drapeau des cartes produit et les pastilles couleur. Jamais en fond de section, jamais en CTA.
- Texte sur image : overlay noir 0.45-0.65 max (regle 41, texture doit rester visible) + text-shadow leger si besoin (regle 21).
- Cartes sombres : bordure 1px rgba(201,155,45,0.35) pour detacher du fond (regle 38).
- Cartes claires : bordure 1px rgba(25,22,16,0.15).
- Separateurs : filets or fins 1px opacite 0.35 entre blocs sombres (regle 50).
