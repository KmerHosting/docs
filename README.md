# KmerHosting Docs

Official Mintlify documentation for the KmerHosting customer platform and public developer interfaces.

## Local validation

```bash
npx --yes mint@4.2.647 validate
python3 scripts/check-links.py
```

The committed OpenAPI reference is checked against `https://api.kmerhosting.com/openapi.json` in CI. Read [CONTRIBUTING.md](CONTRIBUTING.md) before documenting a new product or operation.

The documentation is mounted publicly at `https://kmerhosting.com/docs`. The standalone help chooser lives in the main website at `https://kmerhosting.com/help`.
