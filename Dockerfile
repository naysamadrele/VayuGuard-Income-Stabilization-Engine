FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# --- Production image ---
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/public/manifest.json /usr/share/nginx/html/manifest.json
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
