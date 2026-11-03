# Cydrone

**One platform. An entire community ecosystem.**

Cydrone is a modular, self-hostable Discord community platform with an optional official hosted instance.

> Status: Foundation scaffold — early development. This is not production-ready yet.

## Principles

- One codebase for self-hosted and official deployments.
- Modular systems sharing a small, stable core.
- Deterministic permissions for every consequential action.
- AI is optional; core bot functionality must continue without it.
- No mandatory paid APIs, databases, hosting providers, or software licences.
- Member privacy, consent, and data controls are first-class requirements.

## Current scaffold

- TypeScript + pnpm workspace
- Discord bot using discord.js
- Shared core package with permission primitives and module contracts
- Environment validation
- Basic `/ping` and `/about` slash commands
- Architecture and security decision records

## Requirements

- Node.js 22+
- pnpm 9+
- A Discord application and bot token
- A Discord test server

The scaffold does not require a hosted database or AI provider yet.

## Quick start

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Copy `.env.example` to `.env` and fill in the Discord values.

3. Register slash commands:

   ```bash
   pnpm --filter @cydrone/bot deploy-commands
   ```

4. Start the bot:

   ```bash
   pnpm dev
   ```

Never commit `.env`, bot tokens, client secrets, or database credentials.

## Workspace

```text
apps/
  bot/                 Discord Gateway runtime
packages/
  core/                Shared contracts and permission primitives
docs/
  ARCHITECTURE.md
  SECURITY.md
  ROADMAP.md
  decisions/
```

The dashboard, API, database package, workers, and feature modules will be added as the first vertical slice grows. We are deliberately not generating empty placeholder apps just to make the tree look larger.

## Deployment model

The same application should support:

- **Self-hosted:** an operator runs Cydrone using their own infrastructure.
- **Official instance:** the project maintainers run a centrally managed public instance.

Deployment-specific configuration must never fork product logic.

## Development status

See [docs/ROADMAP.md](docs/ROADMAP.md) for the current sequence of work.
