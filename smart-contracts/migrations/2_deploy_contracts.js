const AceCoin = artifacts.require("AceCoin");
const AceCoinToken = artifacts.require("AceCoinToken");

module.exports = async function (deployer) {
    await deployer.deploy(AceCoin);
    const aceCoinInstance = await AceCoin.deployed();
    console.log('AceCoin deployed at address:', aceCoinInstance.address);

    await deployer.deploy(AceCoinToken, 1000000);
    const aceCoinTokenInstance = await AceCoinToken.deployed();
    console.log('AceCoinToken deployed at address:', aceCoinTokenInstance.address);
};