import './Header.css';

import React from 'react';

import pfp from './assets/pfp.png';

const Header: React.FC = () => {
  return (
    <header id="home" className="section header">
      <img src={pfp} alt="Profile" className="pfp" />
      <h1>양진혁</h1>
      <p className="tagline">JinHyeok Yang</p>
    </header>
  );
};

export default Header;
