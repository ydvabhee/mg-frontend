# Step 1: Build the Vite app
FROM node:18 AS build
WORKDIR /app

# Copy files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the full project and build
COPY . .
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copy built files
COPY --from=build /app/dist .

# Copy custom Nginx config to support .env variables
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
