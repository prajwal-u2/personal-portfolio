import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const navItems = ['Home', 'About', 'Education', 'Experience', 'Skills', 'Projects'];
  const [activeSection, setActiveSection] = useState('Home');
  const [navbarTheme, setNavbarTheme] = useState('white');

  // Define section themes
  const sectionThemes = {
    'Home': 'white',
    'About': 'black', 
    'Education': 'blue',
    'Experience': 'white',
    'Skills': 'blue',
    'Projects': 'black'
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        name: item,
        element: document.getElementById(item.toLowerCase())
      }));

      // Find which section is currently in view
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.name);
          setNavbarTheme(sectionThemes[section.name]);
          break;
        }
      }
    };

    // Set initial active section
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const handleNavClick = (item) => {
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      const offsetTop = element.offsetTop - 60; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar navbar-${navbarTheme}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <span>Portfolio</span>
        </div>
        <ul className="navbar-menu">
          {navItems.map((item, index) => (
            <li key={index} className="navbar-item">
              <a 
                href={`#${item.toLowerCase()}`} 
                className={`navbar-link ${activeSection === item ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
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