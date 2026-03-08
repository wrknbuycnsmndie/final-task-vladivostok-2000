import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
import './Navbar.css';

const NAV_LINKS = [
  {
    to: '/',
    image: '/vladivostok-image.jpg',
    alt: 'Главная',
    label: 'Главная',
    end: true,
  },
  {
    to: '/history-of-city',
    image: '/first-card-image.jpg',
    alt: 'История города',
    label: 'История',
    end: false,
  },
  {
    to: '/tourism',
    image: '/second-card-image.jpg',
    alt: 'Туризм',
    label: 'Туризм',
    end: false,
  },
  {
    to: '/culture-and-traditions',
    image: '/third-card-image.jpg',
    alt: 'Культура и традиции',
    label: 'Культура',
    end: false,
  },
] as const;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className='site-header'>
      <nav className='navbar' aria-label='Основная навигация'>
        <NavLink to='/' className='logo' onClick={() => setIsMenuOpen(false)}>
          <span className='logo-mark' aria-hidden='true'>
            VL
          </span>
          <span className='logo-text'>Владивосток 2000</span>
        </NavLink>

        <ul
          className={`navbar-links ${isMenuOpen ? 'active' : ''}`}
          id='primary-nav-links'
        >
          {NAV_LINKS.map((link) => (
            <li key={link.to} onClick={() => setIsMenuOpen(false)}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                <img src={link.image} alt={link.alt} className='nav-image' />
                <span>{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className='nav-controls'>
          <ThemeSwitcher />
          <button
            className='burger-menu'
            onClick={toggleMenu}
            type='button'
            aria-expanded={isMenuOpen}
            aria-controls='primary-nav-links'
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            <span aria-hidden='true'>{isMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
