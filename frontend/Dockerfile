
FROM node:22.17.1-alpine AS builder

WORKDIR /app
COPY ../fonts ./public/fonts
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:22.17.1-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]