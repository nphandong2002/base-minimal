# build stage
FROM node:16.15.0-alpine as build-stage

WORKDIR /app

COPY yarn.lock ./
RUN NO_PREPARE_INSTALL=1 yarn install --frozen-lockfile 

COPY . .
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]
