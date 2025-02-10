FROM node:lts-slim

RUN npm install -g pnpm

WORKDIR /app

COPY package.json .

RUN pnpm install

COPY . .

RUN pnpm test

CMD ["pnpm", "start"]