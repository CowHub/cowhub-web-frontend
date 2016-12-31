FROM node:7.2.1

WORKDIR /app

COPY package.json ./
RUN wget https://yarnpkg.com/install.sh && chmod +x install.sh && ./install.sh
RUN ~/.yarn/bin/yarn install

ENV SERVER_PORT 3000
EXPOSE 3000
