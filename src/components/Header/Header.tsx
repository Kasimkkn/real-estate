import React, { useState } from 'react';
import logo from '../../assets/images/logo.png'
import hamburger from '../../assets/images/hamburger.png'
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="container-fluid">
      <div className="container-xl">
        <Link to="index.html" className="logo">
          <img src={logo} alt="" />
        </Link>
        <Link to="index.html">Home</Link>
        <Link to="#">Studio</Link>
        <Link to="#">Services</Link>
        <Link to="#">Contact</Link>
        <Link to="#">FAQ`s</Link>
        <Link to="#" className="btn_1">Let's talk</Link>
        <div onClick={toggleMenu} className="menu">
          <img src={hamburger} alt="" />
        </div>
        {isOpen && (
          <div className="menu_container">
            <Link to="index.html">Home</Link>
            <Link to="#">Studio</Link>
            <Link to="#">Services</Link>
            <Link to="#">Contact</Link>
            <Link to="#">FAQ`s</Link>
            <Link to="#" className="btn_1">Let's talk</Link>
          </div>
        )}
      </div>
    </nav >
  );
};

export default Header;