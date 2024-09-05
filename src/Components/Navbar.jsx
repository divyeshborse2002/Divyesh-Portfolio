import React, { useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
  <>
    <nav className="navbar">
      <div className="logo">
      <AnchorLink href="#home"><span className="first-ltr">D</span>ivyesh</AnchorLink>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
        <li>
          <AnchorLink href="#home">Home</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#about">About me</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#project">Project</AnchorLink>
        </li>
        <li>
          <AnchorLink href="#contact">Contact</AnchorLink>
        </li>
      </ul>
     
    </nav>
     </>
  );
};

export default Navbar;
