FROM node:24

WORKDIR /usr/src/app

RUN npm install -g pnpm

RUN pnpm install --frozen-lockfile

COPY . .

RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
