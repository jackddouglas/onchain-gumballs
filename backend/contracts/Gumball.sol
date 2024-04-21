// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Gumball {
    uint256 gumballs;

    constructor() {
        gumballs = 50;
    }

    function getGumballs() public returns (uint256) {
        require(gumballs > 0);
        gumballs--;
        return gumballs;
    }

    function addFreshGumballs(uint256 _gumballs) public {
        gumballs += _gumballs;
    }

    function getNumGumballs() public view returns (uint256) {
        return gumballs;
    }
}
