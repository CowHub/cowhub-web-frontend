#!/usr/bin/env bash

# Build latest image
cd /
rm -rf /app
tar -xvf /dist.tar.gz
mv /dist /app

# Take service down
docker rm -f $(docker ps -a -q)

# Bring service up (with latest)
docker run -dit -v /app:/usr/local/apache2/htdocs -p 80:80 -p 443:443 --name cowhub-web-frontend httpd
