// acecoin/frontend/pages/index.js

import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import AceCoinContract from '../contracts/AceCoin.json';

const IndexPage = () => {
    const [account, setAccount] = useState('');
    const [document, setDocument] = useState(null);
    const [aceCoin, setAceCoin] = useState(null);

    useEffect(() => {
        console.log('Initializing Web3 and Blockchain Data...');
        loadWeb3();
        loadBlockchainData();
    }, []);

    const loadWeb3 = async () => {
        if (window.ethereum) {
            console.log('MetaMask detected, requesting account access...');
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.request({ method: 'eth_requestAccounts' });
        } else {
            console.error('MetaMask not detected');
            alert('MetaMask not detected');
        }
    };

    const loadBlockchainData = async () => {
        let web3;

        // Check if Web3 has been injected by the browser (MetaMask)
        if (window.ethereum) {
            web3 = new Web3(window.ethereum);
            try {
                // Request account access if needed
                console.log('Requesting account access from MetaMask...');
                await window.ethereum.enable();
            } catch (error) {
                console.error('User denied account access');
            }
        } else if (window.web3) {
            // Legacy dapp browsers...
            console.log('Legacy dapp browser detected, using injected Web3');
            web3 = new Web3(window.web3.currentProvider);
        } else {
            // Non-dapp browsers...
            console.warn('Non-Ethereum browser detected. You should consider trying MetaMask!');
        }

        if (web3) {
            const accounts = await web3.eth.getAccounts();
            console.log('Connected account:', accounts[0]);
            setAccount(accounts[0]);

            const networkId = await web3.eth.net.getId();
            console.log('Connected to Network ID:', networkId);
        }
    };


    const uploadDocument = async (e) => {
        e.preventDefault();

        console.log('Preparing document for upload:', document);

        const formData = new FormData();
        formData.append('document', document);

        console.log('Sending POST request to upload document...');
        const response = await fetch('http://localhost:3001/upload', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            console.log('Document uploaded successfully.');
        } else {
            console.error('Document upload failed:', response.statusText);
        }
    };

    const signDocument = async (docId) => {
        console.log('Signing document with ID:', docId);
        await aceCoin.methods.signDocument(docId).send({ from: account });
        console.log('Document signed successfully.');
    };

    return (
        <div>
            <h1>AceCoin Document Signing</h1>
            <p>Connected Account: {account}</p>

            <form onSubmit={uploadDocument}>
                <input
                    type="file"
                    onChange={(e) => setDocument(e.target.files[0])}
                />
                <button type="submit">Upload Document</button>
            </form>

            {/* Additional UI elements for displaying documents and signing */}
        </div>
    );
};

export default IndexPage;
