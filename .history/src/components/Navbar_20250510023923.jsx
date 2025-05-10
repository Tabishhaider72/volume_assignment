import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px',
      backgroundColor: '#fff',
      position: 'relative',
      flexWrap: 'wrap',
    },
    logo: {
      height: '50px',
    },
    navLinks: {
      display: 'flex',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      gap: '20px',
    },
    link: {
      fontSize: 'var(--menu_font_size)',
      fontWeight: 'var(--menu_font_weight)',
      position: 'relative',
      color: 'var(--header-menucolor)',
      padding: '38px var(--padding-menu)',
      display: 'block',
      whiteSpace: 'nowrap',
      textTransform: 'var(--menu_type_text)',
      letterSpacing: 'var(--menu_spacing)',
      transition: 'padding 0.3s ease',
    },
    linkHover: {
      color: '#007bff',
      textDecoration: 'none',
      backgroundColor: 'transparent',
    },
    icons: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
    },
    icon: {
      height: '24px',
      cursor: 'pointer',
    },
    burger: {
      display: 'none',
      flexDirection: 'column',
      cursor: 'pointer',
      gap: '4px',
    },
    burgerLine: {
      width: '25px',
      height: '3px',
      backgroundColor: '#333',
    },
    responsiveLinks: {
      display: menuOpen ? 'flex' : 'none',
      flexDirection: 'column',
      position: 'absolute',
      top: '60px',
      left: 0,
      right: 0,
      backgroundColor: '#fff',
    },
    '@media (maxWidth: 768px)': {
      navLinks: { display: 'none' },
      burger: { display: 'flex' },
    },
  };

  return (
    <nav style={styles.nav}>
      {/* Logo */}
      <img src="/assets/logo.png" alt="Logo" style={styles.logo} />

      {/* Burger Menu (Mobile) */}
      <div style={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
        <div style={styles.burgerLine}></div>
        <div style={styles.burgerLine}></div>
        <div style={styles.burgerLine}></div>
      </div>

      {/* Navigation Links */}
      <ul style={{ ...styles.navLinks, ...(menuOpen ? styles.responsiveLinks : {}) }}>
        {['Home', 'Mattress', 'Accessories', 'About Us', 'Contact'].map((item, idx) => (
          <li key={idx} style={styles.link}>
            {item}
          </li>
        ))}
      </ul>

      {/* Icons */}
      <div style={styles.icons}>
        <img src="/assets/search-icon.png" alt="Search" style={styles.icon} />
        <img src="/assets/profile-icon.png" alt="Profile" style={styles.icon} />
        <img src="/assets/bag-icon.png" alt="Bag" style={styles.icon} />
      </div>
    </nav>
  );
};

export default Navbar;
