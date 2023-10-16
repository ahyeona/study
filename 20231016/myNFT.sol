// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyNFT is ERC721 {
    uint256 tokenId = 0;
    mapping(address => string[]) tokenAddress;
    mapping(uint256 => string) tokens;

    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {}

    // function minting(uint256 _tokenId) public {
    function minting(string memory jsonHash) public {
        tokenAddress[msg.sender].push(jsonHash);
        tokens[tokenId] = jsonHash;
        _mint(msg.sender, tokenId);
        tokenId+=1;
    }

    function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        // return "QmRzwVvhpfkXpn3fgG5jSt2vbX4dba4h67FMLaB5YMZLFK";
        return string.concat(_baseURI(), tokens[_tokenId]);
    }

    function _baseURI() internal view override returns (string memory) {
        return "https://apricot-wrong-platypus-336.mypinata.cloud/ipfs/";
    }

    function getTokens() public returns (string[] memory) {
        return tokenAddress[msg.sender];
    }
}
