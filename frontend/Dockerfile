# Arenda-sosedi frontend: build (Node) + serve (nginx)
# Multi-stage: stage 0 — build, stage 1 — runtime

# -----------------------------------------------------------------------------
# Stage 0: build
# -----------------------------------------------------------------------------
FROM node:20-alpine AS builder

WORKDIR /app

# Install deps (peer react/react-dom for build)
COPY package.json ./
RUN npm install && npm install react@18.3.1 react-dom@18.3.1 --save-dev

COPY . .
RUN npm run build

# -----------------------------------------------------------------------------
# Stage 1: serve static
# -----------------------------------------------------------------------------
FROM nginx:alpine

RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
