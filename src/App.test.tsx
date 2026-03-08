import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import App from './App';

const renderAtRoute = (route: string) => {
  window.history.pushState({}, '', route);
  return render(<App />);
};

describe('App smoke tests', () => {
  test('renders home page on /', () => {
    renderAtRoute('/');

    expect(
      screen.getByRole('heading', { name: /владивосток — город на краю мира/i })
    ).toBeInTheDocument();
  });

  test('renders history page on /history-of-city', () => {
    renderAtRoute('/history-of-city');

    expect(
      screen.getByRole('heading', { name: /история города владивосток/i })
    ).toBeInTheDocument();
  });

  test('renders tourism page on /tourism', () => {
    renderAtRoute('/tourism');

    expect(
      screen.getByRole('heading', { name: /туризм во владивостоке/i })
    ).toBeInTheDocument();
  });

  test('renders culture page on /culture-and-traditions', () => {
    renderAtRoute('/culture-and-traditions');

    expect(
      screen.getByRole('heading', { name: /культура и традиции владивостока/i })
    ).toBeInTheDocument();
  });

  test('navigates from home to tourism via navbar link', async () => {
    const user = userEvent.setup();
    renderAtRoute('/');

    await user.click(screen.getByRole('link', { name: /туризм/i }));

    expect(
      await screen.findByRole('heading', { name: /туризм во владивостоке/i })
    ).toBeInTheDocument();
  });

  test('toggles theme and persists to localStorage', async () => {
    const user = userEvent.setup();
    renderAtRoute('/');

    const themeButton = screen.getByRole('button', {
      name: /включить темную тему/i,
    });
    await user.click(themeButton);

    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    expect(window.localStorage.getItem('theme')).toBe('dark');
    expect(
      screen.getByRole('button', { name: /включить светлую тему/i })
    ).toBeInTheDocument();
  });

  test('renders footer links to X and GitHub', () => {
    renderAtRoute('/');

    const footer = screen.getByRole('contentinfo');
    const xLink = within(footer).getByRole('link', {
      name: /x · @wrknbuycnsmndie/i,
    });
    const githubLink = within(footer).getByRole('link', {
      name: /github · wrknbuycnsmndie/i,
    });

    expect(xLink.getAttribute('href')).toBe('https://x.com/wrknbuycnsmndie');
    expect(githubLink.getAttribute('href')).toBe(
      'https://github.com/wrknbuycnsmndie'
    );
  });
});
