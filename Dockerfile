FROM node:16.14.2-alpine3.15

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ARG PORT=3000
ENV PORT $PORT

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn && yarn cache clean

COPY ./src ./src
CMD ["node", "src/app.js"]
