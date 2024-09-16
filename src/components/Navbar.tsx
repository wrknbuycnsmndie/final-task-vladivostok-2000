import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
import './Navbar.css'; // Assuming your CSS is in Navbar.css

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle burger menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // redirect to main by click
  const redirectToMain = () => {
    window.location.replace('/');
  };

  return (
    <nav className='navbar'>
      <div onClick={redirectToMain} className='logo'>
        🌸Vladivostok 2000🌸
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li onClick={toggleMenu}>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'active' : '')}
            end
          >
            <img
              src='/vladivostok-image.jpg'
              alt='История города'
              className='nav-image'
            />
            Главная
          </NavLink>
        </li>
        <li onClick={toggleMenu}>
          <NavLink
            to='/history-of-city'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <img
              src='/first-card-image.jpg'
              alt='История города'
              className='nav-image'
            />
            История города
          </NavLink>
        </li>
        <li onClick={toggleMenu}>
          <NavLink
            to='/tourism'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <img
              src='/second-card-image.jpg'
              alt='Туризм'
              className='nav-image'
            />
            Туризм
          </NavLink>
        </li>
        <li onClick={toggleMenu}>
          <NavLink
            to='/culture-and-traditions'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <img
              src='/third-card-image.jpg'
              alt='Культура и традиции'
              className='nav-image'
            />
            Культура и традиции
          </NavLink>
        </li>
      </ul>
      <ThemeSwitcher />
      <button className='burger-menu' onClick={toggleMenu}>
        {isMenuOpen ? '✖️' : '☰'}
      </button>
    </nav>
  );
};

export default Navbar;
