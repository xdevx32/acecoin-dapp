# Dockerfile for user-svc

# Stage 1: Build the application
FROM node:18.20.4 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json /app/

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY ./ /app

# Stage 2: Run the application
FROM node:18.20.4-slim

# Set the working directory
WORKDIR /app

# Copy the built application from the build stage
COPY --from=build /app /app

# Expose the application port
EXPOSE 3000

# Set the entry point
CMD ["npm", "start"]
