import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import myPhoto from '../assets/images/my_photo.png';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const navItems = ['Home', 'About', 'Education', 'Experience', 'Projects', 'Certifications', 'Skills'];
  const [activeSection, setActiveSection] = useState('Home');
  const [navbarTheme, setNavbarTheme] = useState('white');
  
  // Check if we're on a project page
  const isProjectPage = location.pathname.startsWith('/projects/');

  // Define section themes
  const sectionThemes = {
    'Home': 'white',
    'About': 'black', 
    'Education': 'blue',
    'Experience': 'white',
    'Projects': 'white',
    'Certifications': 'black',
    'Skills': 'black'
  };

  useEffect(() => {
    if (isProjectPage) {
      // On project pages, set default theme and active section
      setActiveSection('Projects');
      setNavbarTheme('white');
    } else {
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
    }
  }, [navItems, isProjectPage]);

  const handleNavClick = (item) => {
    if (isProjectPage) {
      // On project pages, navigate to home page with the specific section
      window.location.href = `/#${item.toLowerCase()}`;
    } else {
      // On home page, scroll to the section
      const element = document.getElementById(item.toLowerCase());
      if (element) {
        const offsetTop = element.offsetTop - 60; // Account for navbar height
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className={`navbar navbar-${navbarTheme}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src={myPhoto} alt="Prajwal" className="navbar-photo" />
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