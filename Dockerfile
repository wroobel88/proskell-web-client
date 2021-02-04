# FROM node:14-alpine AS builder

# install simple http server for serving static content
# RUN npm install -g http-server
FROM node:latest as build-stage
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile && yarn cache clean
COPY ./ .
RUN yarn build

# EXPOSE 8080
# CMD [ "http-server", "--proxy", "http://proskell-api:5000", "dist" ]

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
