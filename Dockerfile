# Stage 1: Build the React application
FROM node:22-alpine AS build
WORKDIR /app

# Copy configuration files first to leverage Docker cache
COPY package*.json ./
COPY .npmrc ./

# Install dependencies (using the .npmrc we created earlier)
RUN npm install

# Copy the rest of the source code and build
COPY . .
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:stable-alpine
# Copy the build output from the first stage to Nginx's html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
