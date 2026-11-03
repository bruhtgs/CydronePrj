FROM node:22-bookworm-slim

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV NODE_ENV=production

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@9.15.0 --activate

# Install the workspace dependencies, compile TypeScript, and retain the
# workspace layout so the bot can resolve its internal @cydrone/core package.
COPY package.json pnpm-workspace.yaml tsconfig.base.json ./
COPY apps/bot/package.json apps/bot/package.json
COPY packages/core/package.json packages/core/package.json
COPY apps/bot/ apps/bot/
COPY packages/core/ packages/core/

RUN pnpm install --no-frozen-lockfile
RUN pnpm build

CMD ["pnpm", "--filter", "@cydrone/bot", "start"]
