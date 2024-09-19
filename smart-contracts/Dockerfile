# Dockerfile for smart-contracts

# Stage 1: Build the smart contracts
FROM node:18.20.4-bullseye-slim AS build

# Install required dependencies
RUN apt-get update && \
    apt-get install --no-install-recommends -y \
        build-essential \
        python3 && \
    rm -rf /var/lib/apt/lists/*

# Install Truffle and Ganache globally
RUN npm install --global truffle ganache-cli

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Compile the smart contracts
RUN truffle compile --all

# Stage 2: Run the Ganache CLI
FROM node:18.20.4-bullseye-slim

# Install required dependencies
RUN apt-get update && \
    apt-get install --no-install-recommends -y \
        build-essential \
        python3 && \
    rm -rf /var/lib/apt/lists/*

# Install Truffle and Ganache globally
RUN npm install --global truffle ganache-cli

# Set the working directory
WORKDIR /usr/src/app

# Copy the built contracts from the build stage
COPY --from=build /usr/src/app /usr/src/app

# Expose Ganache port
EXPOSE 8545

# Start Ganache CLI
CMD ["ganache-cli", "--accounts", "10", "--defaultBalanceEther", "100", "--host", "0.0.0.0"]
