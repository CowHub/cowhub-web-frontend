#!/usr/bin/env bash

# Build latest image
cd /app

# Take service down
docker rm -f $(docker ps -a -q)

# Bring service up (with latest)
docker run -dit -v "$PWD":/usr/local/apache2/htdocs -p 80:80 -p 443:443 --name cowhub-web-frontend httpd
