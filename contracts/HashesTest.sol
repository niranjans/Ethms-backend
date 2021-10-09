// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

contract HashesTest {
    
    function supportsInterface(uint256 nonce, address minter, string memory _phrase) public view returns (bytes32) {
        return keccak256(abi.encodePacked(nonce, minter, _phrase));
    }
}