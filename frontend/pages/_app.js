import React, { useState } from 'react';
import './app.css';

function App() {
  const [account, setAccount] = useState(null);

  const handleFileUpload = (event) => {
    // Handle file upload logic
  };

  const connectAccount = () => {
    // Handle account connection logic
    setAccount("0x1234...abcd");
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>AceCoin Document Signing</h1>
      </div>
      <div className="content">
        <div className="account-info">
          <p>Connected Account: {account ? account : 'Not Connected'}</p>
          {!account && <button className="connect-btn" onClick={connectAccount}>Connect Wallet</button>}
        </div>
        <div className="upload-section">
          <label className="file-input-label">
            <input type="file" onChange={handleFileUpload} />
          </label>
          <button className="upload-btn">Upload Document</button>
        </div>
      </div>
    </div>
  );
}

export default App;
