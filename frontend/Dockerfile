# frontend/Dockerfile
FROM node:18

WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install all dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Ensure Next.js is installed and ready
RUN npm install next

# Expose the frontend port
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "dev"]
