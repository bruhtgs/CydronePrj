# Deployment

## Current runtime

The Discord bot is a long-running process. It must remain connected to Discord's
Gateway to receive interactions and events. Closing the terminal that owns the
process stops that process; this is expected for local development, not an
acceptable final operating model.

## Container deployment

The repository includes a Dockerfile so the same application can run under a
container runtime on a VPS, dedicated machine, or supported container platform.

Required runtime environment variables:

- `DISCORD_TOKEN`
- `DISCORD_CLIENT_ID`
- `DISCORD_GUILD_ID` (optional; use a test guild for fast command registration)

Pass secrets through the host's environment/secret manager. Do not bake a
`.env` file or credentials into the image.

Build the image from the repository root:

```sh
docker build -t cydrone:latest .
```

Run it with the required environment variables supplied by the host:

```sh
docker run -d --name cydrone --restart unless-stopped \
  -e DISCORD_TOKEN \
  -e DISCORD_CLIENT_ID \
  -e DISCORD_GUILD_ID \
  cydrone:latest
```

The container restart policy helps recover from process or host restarts. It
does not make an unavailable host available.

## Hosting policy

Cydrone is designed to be self-hostable and to support an optional official
instance. No paid hosting provider is mandatory. However, a continuously
available Discord bot needs continuously available compute. A free tier may
sleep, impose quotas, or change its terms; therefore the project must not promise
free 24/7 uptime until a specific host has been tested against its current terms.

For development, the bot can run on the developer's computer. For an always-on
instance, deploy the container to an always-on machine or a hosting service whose
limits and cost are understood. The official instance can be introduced only
when its operating budget and hosting arrangement are explicit.

## Environment file

The bot loads the repository-root `.env` file by resolving it relative to the
compiled/source module. A second copy under `apps/bot` is not required. In
production, prefer injected environment variables rather than a file.
