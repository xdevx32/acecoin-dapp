// acecoin/frontend/pages/index.js

import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import AceCoinContract from '../contracts/AceCoin.json';

const IndexPage = () => {
    const [account, setAccount] = useState('');
    const [document, setDocument] = useState(null);
    const [aceCoin, setAceCoin] = useState(null);

    useEffect(() => {
        loadWeb3();
        loadBlockchainData();
    }, []);

    const loadWeb3 = async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.request({ method: 'eth_requestAccounts' });
        } else {
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
            await window.ethereum.enable();
          } catch (error) {
            console.error("User denied account access");
          }
        } else if (window.web3) {
          // Legacy dapp browsers...
          web3 = new Web3(window.web3.currentProvider);
        } else {
          // Non-dapp browsers...
          console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
        }
      
        if (web3) {
          const accounts = await web3.eth.getAccounts();
          setAccount(accounts[0]);
      
          const networkId = await web3.eth.net.getId();
          console.log("Network ID:", networkId);
        }
      };
      

    const uploadDocument = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('document', document);

        await fetch('http://localhost:3001/upload', {
            method: 'POST',
            body: formData,
        });
    };

    const signDocument = async (docId) => {
        await aceCoin.methods.signDocument(docId).send({ from: account });
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