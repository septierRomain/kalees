import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

function Navbar() {
  return (
    <div className="Navbar">
      <li>
        <NavLink to="/">Accueil</NavLink>
      </li>
      <li>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </div>
  );
}

export default Navbar;