// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/Counters.sol';

contract SoulbondNFT is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    uint[] public ids;
    mapping(address => uint[]) userNFTs;

    constructor() ERC721('Banxify', 'BXF') {}

    function safeMint(string memory uri) public {
        require(getUserNFTs(msg.sender).length < 1, 'You already have a soulbond NFT');
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, uri);
        ids.push(tokenId);
        userNFTs[msg.sender].push(tokenId);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal virtual override {
        // Custom logic here, e.g., checking special conditions
        require(from == address(0), 'Err: token transfer is BLOCKED');
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function getNFts() public view returns (uint[] memory) {
        return ids;
    }

    function getUserNFTs(address user) public view returns (uint[] memory) {
        return userNFTs[user];
    }
}
