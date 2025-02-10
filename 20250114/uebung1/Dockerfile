FROM node:current-alpine3.21 AS build

WORKDIR /app

COPY ./my-app/package.json ./

RUN npm install

COPY ./my-app ./

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80