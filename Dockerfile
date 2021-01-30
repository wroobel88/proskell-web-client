FROM node:14-alpine AS builder

# install simple http server for serving static content
RUN npm install -g http-server

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile && yarn cache clean

COPY . .

RUN yarn build

EXPOSE 8080
CMD [ "http-server", "--proxy", "http://proskell-api:5000", "dist" ]


