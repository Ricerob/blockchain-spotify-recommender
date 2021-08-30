// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    address featuredAddress;

    constructor() {
        console.log("Initializing genius contract!");
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s is waved!", msg.sender);
        determineFeaturedAddress();
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves", totalWaves);
        return totalWaves;
    }

    function determineFeaturedAddress() private {
        if (totalWaves % 4 == 0) {
            featuredAddress = msg.sender;
            console.log("New featured address is: ", featuredAddress);
        }
    }
}
