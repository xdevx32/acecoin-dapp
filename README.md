
# AceCoin DApp

AceCoin DApp is a decentralized application that allows users to create and sign documents securely using blockchain technology. This project includes smart contracts written in Solidity, a frontend application built with Next.js, and utilizes Truffle and Ganache for development and testing.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Setup Guide](#setup-guide)
  - [Clone the Repository](#clone-the-repository)
  - [Environment Variables](#environment-variables)
  - [Using Docker (Recommended)](#using-docker-recommended)
  - [Manual Setup](#manual-setup)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Introduction
This project demonstrates a decentralized application (DApp) that allows users to create and sign documents stored on the Ethereum blockchain. It includes:

- Smart Contracts: Written in Solidity and deployed using Truffle.
- Frontend: Built with Next.js and interacts with the smart contracts via Web3.js or Ethers.js.
- Local Blockchain: Ganache is used for local development and testing.

## Features
- Create documents with IPFS hash storage.
- Sign documents on the blockchain.
- ERC20 Token implementation (AceCoin Token).

## Prerequisites
- Docker and Docker Compose installed on your system.

## Project Structure
```
acecoin-dapp/
├── smart-contracts/
│   ├── contracts/
│   ├── migrations/
│   ├── test/
│   ├── truffle-config.js
│   └── package.json
├── frontend/
│   ├── pages/
│   ├── components/
│   ├── public/
│   ├── next.config.js
│   └── package.json
├── docker-compose.yml
├── README.md
└── .gitignore
```

## Setup Guide

### Clone the Repository
```bash
git clone git@github.com:xdevx32/acecoin-dapp.git
cd acecoin-dapp
```

### Environment Variables

Create environment variable files for the frontend and smart contracts.

#### Frontend Environment Variables
Create a `.env.local` file inside the `frontend/` directory.

```bash
cd frontend
touch .env.local
```

Add the following variables to `frontend/.env.local`:

```makefile
NEXT_PUBLIC_CONTRACT_ADDRESS=your_contract_address
NEXT_PUBLIC_NETWORK_ID=5777
```

Replace `your_contract_address` with the deployed contract address if known.

#### Smart Contracts Environment Variables
If needed, create a `.env` file inside the `smart-contracts/` directory.

### Using Docker (Recommended)
This project includes Docker configurations to simplify setup and deployment.

#### Requirements
- Docker
- Docker Compose

#### Steps

##### Build and Run Containers

From the root directory `acecoin-dapp/`, run:

```bash
docker-compose up --build
```

This command will build and start the following services:

- `ganache`: A local blockchain instance.
- `smart-contracts`: Compiles and migrates the smart contracts.
- `frontend`: Serves the Next.js application.

##### Access the Application

Once the services are running, you can access the frontend application at:

```arduino
http://localhost:3000
```

##### Interact with the DApp

Ensure you have MetaMask or another Web3 provider configured to connect to `http://localhost:8545` (Ganache). Import accounts from Ganache into your wallet if necessary.

### Manual Setup
If you prefer to run the project without Docker, follow these steps.

#### Prerequisites
- Node.js (version 14.x or higher)
- npm or yarn
- Truffle (`npm install -g truffle`)
- Ganache CLI (`npm install -g ganache`) or Ganache GUI

#### Steps

##### Start Ganache
```bash
ganache --port 8545
```

Or start Ganache GUI and configure it to run on port 8545.

##### Deploy Smart Contracts
```bash
cd smart-contracts
npm install
truffle migrate --reset
```

##### Update Frontend Configuration
Copy the deployed contract addresses from the migration output. Update `frontend/.env.local` with the contract address and network ID.

##### Start Frontend Application
```bash
cd ../frontend
npm install
npm run dev
```

The application should now be running at `http://localhost:3000`.

## Usage

- Navigate to `http://localhost:3000` in your browser.
- Connect your Web3 wallet (e.g., MetaMask) to the local blockchain.
- Use the application to create and sign documents.

## Testing

### Smart Contracts Tests
```bash
cd smart-contracts
truffle test
```

### Frontend Tests
If you have tests configured in your frontend application, you can run them using:

```bash
cd frontend
npm run test
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or fixes.

## License
This project is licensed under the MIT License.

## Acknowledgments
- OpenZeppelin for secure smart contract libraries.
- Truffle Suite for development tools.
- The Ethereum community for support and resources.
