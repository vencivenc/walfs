FROM node:20-alpine

RUN npm install -g npm

ENV CODE=/code

WORKDIR ${CODE}

COPY --chown=node package*.json ./

RUN npm install --force

COPY --chown=node .env tsconfig.json nest-cli.json tsconfig.build.json ./
COPY --chown=node src src
COPY --chown=node fe/build src/fe/build

RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=9000

EXPOSE ${PORT}

CMD [ "npm", "run", "start:prod" ]
