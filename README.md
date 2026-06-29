# KmerHosting Docs

Documentation Mintlify complète pour KmerHosting.

## Prévisualiser

```bash
npm i -g mint
mint dev --port 3000 --no-open
```

## Déployer

Poussez ces fichiers dans le dépôt GitHub connecté à Mintlify : `kmerhosting/docs`, branche `main`.

```bash
git add .
git commit -m "Complete KmerHosting Mintlify documentation"
git push origin main
```

## Domaine

Le projet Mintlify doit avoir :

- custom domain : `kmerhosting.com`
- base path : `/docs`
- Cloudflare Worker route : `kmerhosting.com/docs*`
