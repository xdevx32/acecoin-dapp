# Dockerfile for document-svc

# Stage 1: Build the application
FROM node:18.20.4 AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json /usr/src/app/

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY ./ /usr/src/app/

# Stage 2: Run the application
FROM node:18.20.4-slim

# Set the working directory
WORKDIR /usr/src/app

# Copy the built application from the build stage
COPY --from=build /usr/src/app /usr/src/app

# Expose the application port
EXPOSE 3000

# Set the entry point
CMD ["npm", "start"]
