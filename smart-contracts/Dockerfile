# smart-contracts/Dockerfile
FROM node:18

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Install Truffle globally
RUN npm install -g truffle

# Copy the smart contracts
COPY . .

# Compile and migrate contracts
CMD ["npm", "run", "build"]
