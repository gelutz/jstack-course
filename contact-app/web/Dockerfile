FROM oven/bun:1 AS base
WORKDIR /app

# instalar as dependências num temp para ficar no cache das próximas builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# pega o node_modules do temp
# e copia o resto dos arquivos necessários
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .
RUN bun run build

# copy production dependencies and source code into final image
FROM caddy:alpine AS release
WORKDIR /app
COPY --from=prerelease /app/Caddyfile /etc/caddy/Caddyfile
COPY --from=prerelease /app/dist /usr/share/caddy

EXPOSE 80
