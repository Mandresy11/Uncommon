# Uncommon People Tribe

Boutique Next.js pour les collections Héritage et Signature.

## Lancer le projet

```bash
npm install
npm run dev
```

Copier `.env.example` vers `.env.local`, puis renseigner les valeurs réelles. Ne jamais committer `.env.local`.

## Paiement et stock Shopify

Le panier est conservé dans le navigateur. Au paiement, le serveur crée un panier avec la Storefront Cart API de Shopify puis redirige vers le checkout sécurisé Shopify.

Variables nécessaires :

- `SHOPIFY_STORE_DOMAIN`
- `SHOPIFY_STOREFRONT_ACCESS_TOKEN`
- `SHOPIFY_STOREFRONT_API_VERSION`
- `SHOPIFY_VARIANTS_JSON`

Les clés de `SHOPIFY_VARIANTS_JSON` sont produites par `creerCleVariante` dans `lib/products.ts`. Exemple : `polo-signature-up:noir:M`. Une variante non reliée n’est jamais envoyée au paiement.

## Contact et newsletter

Resend assure l’envoi du formulaire de contact et l’enregistrement réel des abonnés :

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`, après validation du domaine dans Resend
- `RESEND_SEGMENT_ID`, facultatif mais recommandé
- `NEWSLETTER_WELCOME_CODE`, pour envoyer automatiquement l’avantage de bienvenue

Sans configuration serveur valide, l’interface affiche une erreur explicite et ne simule jamais une inscription ou un paiement réussi.

## Vérification

```bash
npm run build
```
