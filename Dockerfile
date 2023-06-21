FROM node:lts-alpine

WORKDIR /usr/app

COPY . ./

RUN npm install

EXPOSE 8000

CMD ["node", "dist/src/index.js"]