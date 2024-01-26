// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract Soulbound is ERC721, ERC721URIStorage, Ownable {
    uint256 private _tokenIdCounter;

    constructor() ERC721('SoulBound', 'SBT') {}

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

    function safeMint(address to) public onlyOwner {
        _tokenIdCounter += 1;
        _safeMint(to, _tokenIdCounter);
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
}
