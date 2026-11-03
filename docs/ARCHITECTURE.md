# Architecture

## Deployment invariant

Cydrone has one product codebase. Self-hosted and official deployments differ through validated configuration, deployment manifests, and operational policy — not duplicated business logic.

## Initial shape

- `apps/bot`: Discord Gateway adapter and interaction handlers.
- `packages/core`: stable shared contracts and security primitives.
- `apps/api` (planned): dashboard/API boundary.
- `apps/dashboard` (planned): web control plane.
- `apps/worker` (planned): retry-safe background work.
- `packages/database` (planned): schema, migrations, repositories.
- `modules/*` (planned): feature implementations.

## Architectural rules

1. Feature modules depend on core contracts, not on each other's internal implementation.
2. Cross-module communication uses typed domain events or explicit application services.
3. Discord API calls stay behind adapters.
4. Database access stays behind repositories/services.
5. AI providers stay behind a provider interface; the rest of the product must not depend on a particular model.
6. AI-generated action proposals are untrusted input. A deterministic authorization service validates every action.
7. Every guild-scoped record and query must carry and enforce a guild boundary.
8. Event handlers and background jobs must be idempotent or use deduplication keys.
9. Optional AI failure must not disable deterministic bot functionality.
10. Do not introduce Redis, queues, microservices, or a hosted dashboard before a demonstrated need.

## First vertical slice

Discord bot → identity resolution → consent and participation policy → response adapter → audit/event record.

A later milestone adds PostgreSQL for durable identity, guild configuration, consent, and member-controlled memory.
