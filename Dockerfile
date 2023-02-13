FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8085

EXPOSE 8085

CMD ["node","index"]