# frontend/Dockerfile
FROM node:18

WORKDIR /app

# Copy package files and install dependencies
COPY ./frontend/package.json ./frontend/package-lock.json ./
RUN npm install

# Copy the frontend source code
COPY ./frontend/ ./

# Copy the smart contract artifacts
COPY ./smart-contracts/build/contracts ./contracts

EXPOSE 3000

CMD ["npm", "run", "dev"]
