import React, { useState } from 'react';
import logo from '../assets/logo.png';
import searchIcon from '../assets/search-icon.svg';
import profileIcon from '../assets/profile-icon.svg';
import bagIcon from '../assets/bag-icon.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <div className="navbar-right">
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li>Home</li>
            <li>Mattress</li>
            <li>Accessories</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>

          <div className="navbar-icons">
            <img src={searchIcon} alt="Search" />
            <img src={profileIcon} alt="Profile" />
            <img src={bagIcon} alt="Bag" />
          </div>

          <div
            className={`burger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* CSS */}
      <style>{`
        * {
          margin: 0;
          padding: 5;
          box-sizing: border-box;
          font-family: 'Arial', sans-serif;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          background-color: #fff;
          position: relative;
          z-index: 1000;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        .logo {
          height: 50px;
        }

        .navbar-right {
          display: flex;
          align-items: center;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 20px;
        }

        .nav-links li {
          font-size: var(--menu_font_size, 10px);
          font-weight: var(--menu_font_weight, 500);
          color: var(--header-menucolor, #333);
          padding: 38px var(--padding-menu, 15px);
          text-transform: var(--menu_type_text, uppercase);
          letter-spacing: var(--menu_spacing, 1px);
          transition: color 0.3s ease;
          white-space: nowrap;
          cursor: pointer;
        }

        .nav-links li:hover {
          color: #007bff;
        }

        .navbar-icons {
          display: flex;
          gap: 15px;
          margin-left: 20px;
        }

        .navbar-icons img {
          width: 15px;
          height: 15px;
          cursor: pointer;
        }

        .burger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 5px;
          margin-left: 20px;
        }

        .burger span {
          height: 3px;
          width: 25px;
          background: #333;
          border-radius: 2px;
          transition: 0.3s ease;
        }

        .burger.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .burger.open span:nth-child(2) {
          opacity: 0;
        }

        .burger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        @media (max-width: 768px) {
          .nav-links {
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background: #fff;
            flex-direction: column;
            align-items: center;
            display: none;
            gap: 10px;
            padding: 20px 0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }

          .nav-links.active {
            display: flex;
          }

          .burger {
            display: flex;
          }

          .nav-links,
          .navbar-icons {
            display: none;
          }

          .nav-links.active,
          .navbar-icons {
            display: flex;
          }

          .navbar-right {
            display: flex;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
