FROM node:22.16.0

WORKDIR /app

COPY package*.json ./

RUN npm install

# Установим Prisma CLI глобально
# RUN npm install -g prisma

# Копируем все остальные файлы проекта, включая schema.prisma
COPY . .

# Генерируем Prisma клиент
RUN npx prisma generate --schema ./prisma/schema.prisma

CMD ["npm", "run", "start:dev"]
