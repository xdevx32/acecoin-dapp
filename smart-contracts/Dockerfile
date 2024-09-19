FROM node:14

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

CMD ["truffle", "migrate", "--reset", "--network", "development"]
