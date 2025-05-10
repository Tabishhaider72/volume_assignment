import React from 'react';
import './App.css';

const Navbar = () => {
  return (
    <nav>
      {/* Left: Logo */}
      <div className="navbar-left">
        <img src="../assets/logo.png" alt="Logo" className="logo" />
      </div>

      {/* Center: Navigation Links */}
      <ul className="navbar-links">
        <li>Home</li>
        <li>Mattress</li>
        <li>Accessories</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>

      {/* Right: Icons */}
      <div className="navbar-icons">
        <img src="../assets/search-icon.svg" alt="Search" className="icon" />
        <img src="../assets/profile-icon.svg" alt="Profile" className="icon" />
        <img src="../assets/bag-icon.svg" alt="Bag" className="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
