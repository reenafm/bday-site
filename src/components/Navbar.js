import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <Link to="/bday-site">
      <img src="https://i.imgur.com/N9J230M.jpeg"  ></img>
      </Link>
      <Link to="/bday-site/pagetwo"><img src="https://i.imgur.com/N9J230M.jpeg"  ></img></Link>
    </nav>
  );
}

export default Navbar;