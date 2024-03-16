'use client';
import React, { useState } from 'react';
import {Logo} from '../../SigEdge/LogoImage/Logo'; // Assuming Logo component is in a separate file
import './MainNav.css';

interface NavLink {
  label: string;
  path: string;
}

const navLinks: NavLink[] = [
  { label: 'Individuals', path: '/individuals' },
  { label: 'Companies', path: '/companies' },
  { label: 'Sign In', path: '/SignIn' },
  { label: 'Sign Up', path: '/SignUp' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="big-box">
        <div className='logo'>
      <Logo />
      </div>
      <div className="navbar-container">
        
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.path}>{link.label}</a>
            </li>
          ))}
         
        </ul>
        <button className="nav-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
