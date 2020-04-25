FROM node:12

ARG NODE_ENV=${NODE_ENV}
ENV NODE_ENV=${NODE_ENV}
ARG PORT=${PORT}
ENV PORT=${PORT}

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --only=production

COPY . .

USER node

EXPOSE ${PORT}

CMD ["npm", "run", "start"]
