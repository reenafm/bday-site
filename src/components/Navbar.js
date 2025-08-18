import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <Link to="/bday-site">Home</Link>
      <Link to="/bday-site/pagetwo">About</Link>
    </nav>
  );
}

export default Navbar;