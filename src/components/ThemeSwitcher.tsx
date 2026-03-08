import { useState, useEffect } from 'react';
import './ThemeSwitcher.css';

type Theme = 'light' | 'dark';

const ThemeSwitcher = () => {
  const getInitialTheme = (): Theme => {
    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }

    const prefersDarkScheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    return prefersDarkScheme ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={toggleTheme}
      className='theme-switcher'
      type='button'
      aria-label={
        theme === 'light' ? 'Включить темную тему' : 'Включить светлую тему'
      }
    >
      <span className='theme-switcher-icon' aria-hidden='true'>
        {theme === 'light' ? '☀' : '☾'}
      </span>
      <span className='theme-switcher-label'>
        {theme === 'light' ? 'Light' : 'Dark'}
      </span>
    </button>
  );
};

export default ThemeSwitcher;
