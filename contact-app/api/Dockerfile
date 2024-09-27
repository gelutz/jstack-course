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

# copy production dependencies and source code into final image
FROM base AS release
COPY --from=install /temp/dev/node_modules node_modules
COPY --from=prerelease /app/package.json .
COPY --from=prerelease /app/.env .
# COPY --from=prerelease /app/tsconfig.json . # apenas para projetos com typescript