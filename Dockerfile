FROM node:14-alpine AS builder

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile && yarn cache clean

COPY . .
RUN yarn build

FROM nginx:1.18-alpine

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

COPY --from=builder /app/dist /usr/share/nginx/html
