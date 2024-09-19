// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AceCoinToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("AceCoin", "ACE") {
        _mint(msg.sender, initialSupply * (10 ** decimals()));
    }
}