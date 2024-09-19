package com.acecoin.signing.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.http.HttpService;
// Import additional Web3j classes as needed

@RestController
@RequestMapping("/sign")
public class SigningController {

    @Value("${eth.node.url}")
    private String ethNodeUrl;

    private Web3j web3j;

    public SigningController() {
        this.web3j = Web3j.build(new HttpService(ethNodeUrl));
        // Load contract and credentials here
    }

    @PostMapping("/{documentId}")
    public ResponseEntity<String> signDocument(@PathVariable Long documentId) {
        // Implement smart contract interaction to sign the document
        return ResponseEntity.ok("Document signed successfully");
    }
}