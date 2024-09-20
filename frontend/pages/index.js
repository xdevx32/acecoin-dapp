import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import Modal from 'react-modal';

const IndexPage = () => {
    const [account, setAccount] = useState('');
    const [document, setDocument] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

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
        const accounts = await window.web3.eth.getAccounts();
        setAccount(accounts[0]);
    };

    const uploadDocument = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('document', document);

        const response = await fetch('http://localhost:8082/sign/' + document.name, {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            setModalMessage('Document uploaded and signed successfully.');
        } else {
            setModalMessage('Document upload failed.');
        }

        setIsModalOpen(true);
    };

    return (
        <div>
            <h1>AceCoin Document Signing</h1>
            <p>Connected Account: {account}</p>

            <form onSubmit={uploadDocument}>
                <input type="file" onChange={(e) => setDocument(e.target.files[0])} />
                <button type="submit">Upload and Sign Document</button>
            </form>

            <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
                <h2>Status</h2>
                <p>{modalMessage}</p>
                <button onClick={() => setIsModalOpen(false)}>Close</button>
            </Modal>
        </div>
    );
};

export default IndexPage;
