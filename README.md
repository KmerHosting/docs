# KmerHosting Docs

Complete Mintlify documentation for KmerHosting.

## Preview

```bash
npm i -g mint
mint dev --port 3000 --no-open
```

## Deploy

Push these files to the GitHub repository connected to Mintlify: `kmerhosting/docs`, branch `main`.

```bash
git add .
git commit -m "Complete KmerHosting Mintlify documentation"
git push origin main
```

## Domain

The Mintlify project should use:

- custom domain: `kmerhosting.com`
- base path: `/docs`
- Cloudflare Worker route: `kmerhosting.com/docs*`
