import React from 'react';
import { Link } from 'react-router-dom';
import hamburger from '../../assets/images/hamburger.png';
import logo from '../../assets/images/logo.png';

const Header: React.FC = () => {


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
        <div className="menu">
          <img src={hamburger} alt="" />
        </div>
        <div className="menu_container">
          <Link to="index.html">Home</Link>
          <Link to="#">Studio</Link>
          <Link to="#">Services</Link>
          <Link to="#">Contact</Link>
          <Link to="#">FAQ`s</Link>
          <Link to="#" className="btn_1">Let's talk</Link>
        </div>
      </div>
    </nav >
  );
};

export default Header;