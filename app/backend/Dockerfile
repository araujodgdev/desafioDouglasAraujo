FROM node:22-alpine

WORKDIR /app-backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

ENTRYPOINT [ "npm" ]

CMD ["run", "dev"]