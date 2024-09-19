// document-svc/app.js

require('dotenv').config();
const express = require('express');
const { create } = require('ipfs-http-client');

const app = express();

app.use(express.json());

// Initialize IPFS client
const ipfs = create({
    host: 'ipfs.infura.io', // Use a public IPFS node or your own
    port: 5001,
    protocol: 'https'
});

// Example route
app.post('/upload', async (req, res) => {
    const { file } = req.body;

    if (!file) {
        return res.status(400).send('File data is required');
    }

    try {
        const { cid } = await ipfs.add(file);
        res.status(201).json({ cid: cid.toString() });
    } catch (error) {
        console.error('Error uploading file to IPFS:', error);
        res.status(500).send('Error uploading file to IPFS');
    }
});

app.listen(3000, () => {
    console.log('Document service running on port 3000');
});
