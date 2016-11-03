FROM node:6.9.1

WORKDIR /app

COPY package.json ./
COPY node_modules ./
RUN npm install

COPY . .
RUN npm run build
RUN npm run tar

ENV SERVER_PORT 3000
EXPOSE 3000
CMD ["npm", "run", "server"]
