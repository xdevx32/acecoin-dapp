module.exports = {
  networks: {
    development: {
      host: "ganache",  // Docker service name for Ganache
      port: 8545,
      network_id: "*",  // Match any network id
    },
  },
  contracts_build_directory: "./build/contracts",
  compilers: {
    solc: {
      version: "0.8.0",
    },
  },
};
