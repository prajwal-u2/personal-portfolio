import React from 'react';
import './Navbar.css';

function Navbar() {
  const navItems = ['Home', 'About', 'Education', 'Experience', 'Skills', 'Projects'];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <span>Portfolio</span>
        </div>
        <ul className="navbar-menu">
          {navItems.map((item, index) => (
            <li key={index} className="navbar-item">
              <a 
                href={`#${item.toLowerCase()}`} 
                className={`navbar-link ${item === 'Home' ? 'active' : ''}`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 