// acecoin/smart-contracts/acecoin.sol

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AceCoin {
    struct Document {
        uint256 id;
        address owner;
        string ipfsHash;
        mapping(address => bool) signatures;
    }

    mapping(uint256 => Document) public documents;
    uint256 public documentCount;

    event DocumentCreated(uint256 id, address owner, string ipfsHash);
    event DocumentSigned(uint256 id, address signer);

    function createDocument(string memory _ipfsHash) public {
        documentCount++;
        Document storage doc = documents[documentCount];
        doc.id = documentCount;
        doc.owner = msg.sender;
        doc.ipfsHash = _ipfsHash;
        emit DocumentCreated(documentCount, msg.sender, _ipfsHash);
    }

    function signDocument(uint256 _id) public {
        Document storage doc = documents[_id];
        require(doc.id != 0, "Document does not exist");
        doc.signatures[msg.sender] = true;
        emit DocumentSigned(_id, msg.sender);
    }

    function hasSigned(uint256 _id, address _signer) public view returns (bool) {
        Document storage doc = documents[_id];
        return doc.signatures[_signer];
    }
}