#!/usr/bin/env bash

# Build latest image
cd /
rm -rf /app
mkdir /app
tar -xvf /dist.tar.gz
mv /dist /app/dist

# Take service down
docker rm -f $(docker ps -a -q)

# Bring service up (with latest)
docker run -it node:6.9.1 -v /app:/app -w /app npm install
docker run -dit node:6.9.1 -v /app:/app -p 80:8080 -w /app --name cowhub-web-frontend node app-server.js
