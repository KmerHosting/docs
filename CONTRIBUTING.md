# Documentation source policy

This repository documents only public, supported KmerHosting behavior.

## Sources of truth

- Public HTTP contract: `KmerHosting/api`, deployed at `https://api.kmerhosting.com/openapi.json`.
- SDK behavior and package names: `KmerHosting/sdk`.
- Command surface: `KmerHosting/cli`.
- MCP tools and OAuth metadata: `KmerHosting/mcp` and `https://mcp.kmerhosting.com`.
- Customer-visible product catalog and lifecycle behavior: the owning product repository and customer console.

Do not infer undocumented products, pricing, plan limits, provider capabilities, database structure, or account flows. Prices and availability must be described as live catalog data unless a versioned public contract guarantees a value.

## Updating the API reference

Update `openapi.json` from the deployed API contract after an API deployment. CI compares the parsed snapshot with production so the Mintlify reference cannot silently drift.

## Before opening a pull request

```bash
mint validate
```

Check every code example against the corresponding source repository, remove secrets and personal data, and use the exact operation names exposed by the API, CLI, SDK, or MCP server.
