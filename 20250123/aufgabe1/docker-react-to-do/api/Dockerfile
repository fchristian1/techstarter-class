FROM node:slim

RUN npm install -g pnpm


WORKDIR /app

COPY package.json .

RUN pnpm install --production

COPY . .

CMD ["npm", "start"]