FROM node:16.13.1-alpine
RUN apk update && apk add bash

# Create app directory
WORKDIR /var/www/nftopia-backend

COPY . .

RUN npm install
RUN npm run build

CMD ["node", "dist/main.js"]