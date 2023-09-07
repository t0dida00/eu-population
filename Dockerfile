FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm ci --quiet

EXPOSE 3000
CMD ["node", "index.js"]