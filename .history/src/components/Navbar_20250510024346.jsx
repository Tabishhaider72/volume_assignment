import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img src="../assets/logo.png" alt="Logo" className="logo" />
        </div>

        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li>Home</li>
          <li>Mattress</li>
          <li>Accessories</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>

        <div className="navbar-icons">
          <img src="/assets/search-icon.png" alt="Search" />
          <img src="/assets/profile-icon.png" alt="Profile" />
          <img src="/assets/bag-icon.png" alt="Bag" />
        </div>
      </nav>

      {/* Internal Styles */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
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
        }

        .logo {
          height: 50px;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 20px;
        }

        .nav-links li {
          font-size: var(--menu_font_size, 16px);
          font-weight: var(--menu_font_weight, 500);
          color: var(--header-menucolor, #333);
          padding: 10px 15px;
          text-transform: var(--menu_type_text, uppercase);
          letter-spacing: var(--menu_spacing, 1px);
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .nav-links li:hover {
          color: #007bff;
        }

        .navbar-icons {
          display: flex;
          gap: 15px;
        }

        .navbar-icons img {
          width: 24px;
          cursor: pointer;
        }

        .burger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 4px;
        }

        .burger span {
          height: 3px;
          width: 25px;
          background: #333;
          border-radius: 2px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav-links {
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background: white;
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
        }
      `}</style>
    </>
  );
};

export default Navbar;
