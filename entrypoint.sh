#!/bin/bash
set -e

protocol="${SAB_PROTOCOL:-http}"
hostname="${SAB_HOSTNAME:-localhost}"
port="${SAB_PORT:-8080}"

mkdir -p /var/www/html
echo "{ \"protocol\":\"$protocol\", \"hostname\":\"$hostname\", \"port\":\"$port\" }" > /var/www/html/config.default.json

exec "$@"