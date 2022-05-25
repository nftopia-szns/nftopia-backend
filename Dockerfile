FROM node:16.13.1-alpine
RUN apk update && apk add bash

# Create app directory
WORKDIR /var/www/nftopia-backend

COPY . .

RUN npm install -g pnpm

RUN pnpm i
RUN pnpm run build

CMD ["node", "dist/main.js"]