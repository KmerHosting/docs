# Documentation source policy

This repository documents only public, supported KmerHosting behavior.

## Sources of truth

- Public HTTP contract: `KmerHosting/api`, deployed at `https://api.kmerhosting.com/openapi.json`.
- SDK behavior and package names: `KmerHosting/sdk`.
- Command surface: `KmerHosting/cli`.
- MCP tools and OAuth metadata: `KmerHosting/mcp` and `https://mcp.kmerhosting.com`.
- Customer-visible product catalog, limits, status semantics, and lifecycle behavior: the owning product repository and customer console.

Do not infer undocumented products, pricing, plan limits, provider capabilities, database structure, or account flows. Prices and availability must be described as live catalog data unless a versioned public contract guarantees a value.

## Product synchronization

A user-visible product change is not documentation-complete until the central docs are aligned. When an owning product repository changes any of the following, update the relevant page in `KmerHosting/docs` in the same release window:

- plan limits or included resources;
- lifecycle thresholds, warning schedules, suspension, cancellation, or termination behavior;
- customer-visible status names or reasons;
- recovery, deletion, retention, or entitlement rules;
- supported control panels, runtimes, or product capabilities; or
- customer actions, upgrade paths, or restrictions.

Prefer a concise product page that points to the live catalog for volatile prices and availability. Fixed lifecycle rules that are enforced by production code may be documented explicitly, but must be updated whenever the owning product changes them.

## Updating the API reference

Update `openapi.json` from the deployed API contract after an API deployment. CI compares the parsed snapshot with production so the Mintlify reference cannot silently drift.

## Before opening a pull request

```bash
mint validate
```

Check every code example against the corresponding source repository, remove secrets and personal data, and use the exact operation names exposed by the API, CLI, SDK, MCP server, or owning product repository.