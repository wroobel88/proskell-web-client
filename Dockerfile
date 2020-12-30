FROM node:14-alpine

RUN yarn global add http-server && yarn cache clean

WORKDIR /app

COPY babel.config.js package.json vue.config.js yarn.lock ./

RUN yarn i && yarn cache clean

COPY . .

RUN yarn build

EXPOSE 8080
CMD [ "http-server", "dist" ]
