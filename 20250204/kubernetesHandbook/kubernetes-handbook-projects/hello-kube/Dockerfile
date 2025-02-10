FROM node as builder

WORKDIR /usr/app

COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 80

FROM nginx
COPY --from=builder /usr/app/dist /usr/share/nginx/html
