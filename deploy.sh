#!/usr/bin/env bash

# Build latest image
cd /
rm -rf /app
mkdir /app
tar -xvf /dist.tar.gz
mv /dist /app/dist
mv /app-server.js /app/

# Take service down
docker rm -f $(docker ps -a -q)

# Bring service up (with latest)
docker run -v /app:/app -w /app -it node:6.9.1 npm install
docker run -v /app:/app -p 80:8080 -w /app --name cowhub-web-frontend -dit node:6.9.1 node app-server.js
