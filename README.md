# KmerHosting Documentation

Official documentation source for [KmerHosting](https://kmerhosting.com).

The published documentation is available at:

**https://kmerhosting.com/docs**

This repository contains documentation for KmerHosting services, products, the Customer Dashboard, developer tools, API integrations, and troubleshooting.

## Documentation stack

- [Mintlify](https://mintlify.com) for the documentation site
- `openapi.json` for the API reference
- GitHub Actions for validation and consistency checks

## Validate locally

Run the documentation checks before submitting changes:

```bash
npx --yes mint@4.2.647 validate
python3 scripts/check-links.py
```

The committed OpenAPI specification is also checked in CI against:

```text
https://api.kmerhosting.com/openapi.json
```

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before adding or changing documentation.

Documentation should reflect the current production behavior of KmerHosting. Avoid documenting planned, internal, or unsupported functionality as generally available.

## Related links

- [KmerHosting](https://kmerhosting.com)
- [Documentation](https://kmerhosting.com/docs)
- [Customer Dashboard](https://dashboard.kmerhosting.com)
- [KmerHosting API](https://api.kmerhosting.com)
- [GitHub organization](https://github.com/KmerHosting)

## License

Except where otherwise noted, the KmerHosting documentation source and code examples in this repository are licensed under the **GNU General Public License v3.0 only (GPL-3.0-only)**. See [LICENSE](LICENSE).

KmerHosting names, logos, trademarks, and other brand assets are not granted under the GPL merely by being present in this repository.
