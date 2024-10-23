import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="https://www.indowings.com/images/logo-mobile.svg" alt="Indowings Logo" className="navbar-logo" />
      <Link to="/radar-history">RADAR HISTORY</Link>
      <Link to="/jammer-history">JAMMER HISTORY</Link>
      <Link to="/control-panel">CONTROL PANEL</Link>
      <Link to="/detection">DETECTION</Link>
      <Link to="/settings">
        <FontAwesomeIcon icon={faCog} /> SETTINGS
      </Link>
      <Link to="/recorder">
        🔴 RECORDER <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </nav>
  );
};

export default Navbar;
