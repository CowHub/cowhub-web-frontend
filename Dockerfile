FROM node:6.9.1

WORKDIR /app

COPY package.json ./
RUN npm install

ENV SERVER_PORT 3000
EXPOSE 3000
