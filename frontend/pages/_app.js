import React, { useState } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';

Modal.setAppElement('#__next'); // For accessibility

function App() {
  const [account, setAccount] = useState(null);
  const [document, setDocument] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleFileUpload = (event) => {
    setDocument(event.target.files[0]);
  };

  const connectAccount = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setAccount(accounts[0]);
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      alert('MetaMask not detected');
    }
  };

  const signDocument = async () => {
    if (!document) {
      setModalMessage('Please upload a document before signing.');
      setIsModalOpen(true);
      return;
    }

    try {
      const response = await fetch(`/sign/${document.name}`, {
        method: 'POST',
      });
      const data = await response.text();
      setModalMessage(data);
    } catch (error) {
      setModalMessage('Error signing document');
    }

    setIsModalOpen(true);
  };

  return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            AceCoin Document Signing
          </h1>
          <div className="mb-4">
            <p className="text-gray-600">
              Connected Account: {account ? account : 'Not Connected'}
            </p>
            {!account && (
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg"
                    onClick={connectAccount}
                >
                  Connect Wallet
                </motion.button>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Upload Document
            </label>
            <input
                type="file"
                className="mb-2 w-full px-3 py-2 border border-gray-300 rounded-lg"
                onChange={handleFileUpload}
            />
            <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-green-500 text-white py-2 px-4 rounded-lg w-full"
                onClick={signDocument}
            >
              Upload and Sign Document
            </motion.button>
          </div>
        </div>

        <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
          <div className="p-4">
            <h2 className="text-xl font-bold">Document Signing Status</h2>
            <p className="mt-4">{modalMessage}</p>
            <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg"
                onClick={() => setIsModalOpen(false)}
            >
              Close
            </motion.button>
          </div>
        </Modal>
      </div>
  );
}

export default App;
