import './Navbar.css';

import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const sections = ['home', 'about', 'projects', 'contact'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element != null) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop - windowHeight / 2 &&
            scrollPosition < offsetTop + offsetHeight - windowHeight / 2
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <ul>
        <li className={activeSection === 'home' ? 'active' : ''}>
          <a href="#home">Home</a>
        </li>
        <li className={activeSection === 'about' ? 'active' : ''}>
          <a href="#about">About</a>
        </li>
        <li className={activeSection === 'projects' ? 'active' : ''}>
          <a href="#projects">Projects</a>
        </li>
        <li className={activeSection === 'contact' ? 'active' : ''}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
