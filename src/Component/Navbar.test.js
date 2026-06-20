import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';
import Header from './Navbar';

beforeEach(() => {
  global.IntersectionObserver = function IntersectionObserver() {
    this.observe = jest.fn();
    this.unobserve = jest.fn();
    this.disconnect = jest.fn();
  };
});

describe('Navbar', () => {
  it('renders the site logo', () => {
    render(<Header />);
    expect(screen.getByText('Adri Camarotto')).toBeInTheDocument();
  });

  it('renders all 5 navigation links', () => {
    render(<Header />);
    const links = ['Home', 'Portfolio', 'Skills', 'About', 'Contact'];
    links.forEach((label) => {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    });
  });

  it('hamburger button is in the document with correct aria attributes', () => {
    render(<Header />);
    const btn = screen.getByRole('button', { name: /toggle navigation/i });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveAttribute('aria-expanded', 'false');
    expect(btn).toHaveAttribute('aria-controls', 'navbar-menu');
  });

  it('clicking hamburger opens the menu (aria-expanded becomes true)', () => {
    render(<Header />);
    const btn = screen.getByRole('button', { name: /toggle navigation/i });
    fireEvent.click(btn);
    expect(btn).toHaveAttribute('aria-expanded', 'true');
  });

  it('clicking hamburger a second time closes the menu', () => {
    render(<Header />);
    const btn = screen.getByRole('button', { name: /toggle navigation/i });
    fireEvent.click(btn);
    fireEvent.click(btn);
    expect(btn).toHaveAttribute('aria-expanded', 'false');
  });

  it('clicking a nav link closes the menu', () => {
    render(<Header />);
    const hamburger = screen.getByRole('button', { name: /toggle navigation/i });
    fireEvent.click(hamburger);
    expect(hamburger).toHaveAttribute('aria-expanded', 'true');
    // Click first nav link (there are multiple "Home" texts — find the link by role)
    const homeLinks = screen.getAllByRole('link', { name: /home/i });
    fireEvent.click(homeLinks[0]);
    expect(hamburger).toHaveAttribute('aria-expanded', 'false');
  });

  it('initial active section is "home" (home link has aria-current="page")', () => {
    render(<Header />);
    // The active link wraps the label in angle brackets — match by aria-current
    const currentLinks = screen.getAllByRole('link');
    const activeLinkEl = currentLinks.find(
      (el) => el.getAttribute('aria-current') === 'page'
    );
    expect(activeLinkEl).toBeTruthy();
    expect(activeLinkEl).toHaveAttribute('href', '#home');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Header />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
