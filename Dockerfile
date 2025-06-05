FROM node:22.16.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate --schema ./prisma/schema.prisma

CMD ["npm", "run", "start:dev"]
