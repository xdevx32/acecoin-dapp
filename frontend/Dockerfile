# frontend/Dockerfile
FROM node:18

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the frontend source code
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
