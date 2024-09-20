# Use an official Node.js image.
FROM node:16-alpine AS builder

# Install Python for node-gyp
RUN apk add --no-cache python3 make g++

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package.json package-lock.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:16-alpine AS production

# Set the working directory in the production container
WORKDIR /app

# Copy the built files from the builder stage
COPY --from=builder /app ./

# Install only production dependencies
RUN npm install --only=production

# Expose the port that the app will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
