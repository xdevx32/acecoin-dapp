// acecoin/document-svc/app.js

require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const ipfsClient = require('ipfs-http-client');
const Web3 = require('web3');
const aceCoinAbi = require('./contracts/AceCoin.json').abi;

const app = express();
app.use(fileUpload());

const ipfs = ipfsClient({
    host: process.env.IPFS_HOST,
    port: process.env.IPFS_PORT,
    protocol: process.env.IPFS_PROTOCOL,
});

const web3 = new Web3(process.env.ETH_NODE_URL);
const aceCoinContract = new web3.eth.Contract(
    aceCoinAbi,
    '0xAbCdEf1234567890aBcDef1234567890aBcDef12' // Deployed Contract Address
);

app.post('/upload', async (req, res) => {
    try {
        const file = req.files.document;
        const fileBuffer = file.data;

        const result = await ipfs.add(fileBuffer);
        const ipfsHash = result.path;

        const accounts = await web3.eth.getAccounts();
        await aceCoinContract.methods
            .createDocument(ipfsHash)
            .send({ from: accounts[0] });

        res.json({ ipfsHash });
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

app.get('/document/:hash', async (req, res) => {
    try {
        const fileHash = req.params.hash;
        let chunks = [];
        for await (const chunk of ipfs.cat(fileHash)) {
            chunks.push(chunk);
        }
        res.send(Buffer.concat(chunks));
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

app.listen(process.env.PORT, () =>
    console.log(`Document Service running on port ${process.env.PORT}`)
);