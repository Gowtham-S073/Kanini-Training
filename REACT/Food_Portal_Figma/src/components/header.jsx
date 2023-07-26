import React from "react";
import Logo from '../Images/Logo.png';
import './header.css'
const Header = () => {
  return (
    <div>
      <nav>
      <img src={Logo} className="head" alt="headerImage"/>
      </nav>
    </div>
  );
};

export default Header;
