FROM node:22

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY index.js ./

EXPOSE 3099

CMD ["node", "index.js"]