import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import FullScreenMap from './FullScreenMap';
import Sidebar from './Sidebar.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <FullScreenMap />
        <Sidebar/>
      </div>
    </Router>
  );
}

export default App;
