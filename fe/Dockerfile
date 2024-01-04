FROM node:20-alpine as builder

RUN npm install -g npm

ENV CODE=/code

WORKDIR ${CODE}

COPY --chown=node package*.json ./

RUN npm install --force

COPY --chown=node .env.production tsconfig.json craco.config.js ./
COPY --chown=node src src
COPY --chown=node public public

RUN npm run build

FROM nginx:alpine

COPY ./nginx.conf /etc/nginx/nginx.conf

ENV CODE=/code

COPY --from=builder ${CODE}/build /usr/share/nginx/html
