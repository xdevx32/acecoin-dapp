# smart-contracts/Dockerfile
FROM node:18

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Install Truffle globally
RUN npm install -g truffle

# Copy the rest of the application code
COPY . .

# Compile and migrate contracts
CMD ["truffle", "migrate", "--reset", "--network", "development"]
