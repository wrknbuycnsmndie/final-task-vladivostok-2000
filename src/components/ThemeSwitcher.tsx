import { useState, useEffect } from 'react';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme; // Use saved theme if available
    }

    const prefersDarkScheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    return prefersDarkScheme ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme); // Save user preference in localStorage
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button onClick={toggleTheme} className='theme-switcher'>
      {theme === 'light' ? '🌞' : '🌙'}
    </button>
  );
};

export default ThemeSwitcher;
