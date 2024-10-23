import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [jammerOn, setJammerOn] = useState(false);
  const [detectionOn, setDetectionOn] = useState(false);

  const handleJammerToggle = () => {
    setJammerOn(!jammerOn);
  };

  const handleDetectionToggle = () => {
    setDetectionOn(!detectionOn);
  };

  return (
    <div className="sidebar">
      <h2>Jammer Nodes</h2>
      <div className="checkbox-group">
        <label>
          <input type="checkbox" />
          Manual
        </label>
        <label>
          <input type="checkbox" />
          Semi-Automatic
        </label>
        <label>
          <input type="checkbox" />
          Automatic
        </label>
      </div>

      <button className={`toggle-button ${jammerOn ? 'active' : ''}`} onClick={handleJammerToggle}>
        Jammer {jammerOn ? 'ON' : 'OFF'} <span role="img" aria-label="button">🔘</span>
      </button>

      <button className={`toggle-button ${detectionOn ? 'active' : ''}`} onClick={handleDetectionToggle}>
        Detection {detectionOn ? 'ON' : 'OFF'} <span role="img" aria-label="button">🔘</span>
      </button>
    </div>
  );
};

export default Sidebar;
