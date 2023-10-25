FROM node:18

WORKDIR /

EXPOSE 3000

COPY ./index.html /index.html
COPY ./src /src
COPY ./public /public
COPY ./package.json /package.json
COPY ./vite.config.ts /vite.config.ts
COPY ./tsconfig.json /tsconfig.json
COPY ./.env /.env

RUN npm i

CMD ["npm", "run", "build", "--watch"]
CMD ["npm", "run", "dev"]


