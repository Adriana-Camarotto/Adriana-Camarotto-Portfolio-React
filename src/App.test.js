import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';

// Mock all heavy child components so this file only tests App-level behaviour
jest.mock('./Component/Home', () => () => <div data-testid="home" />);
jest.mock('./Component/About', () => () => <div data-testid="about" />);
jest.mock('./Component/Experience', () => () => <div data-testid="experience" />);
jest.mock('./Component/Skills', () => () => <div data-testid="skills" />);
jest.mock('./Component/Projects', () => () => <div data-testid="projects" />);
jest.mock('./Component/ContactMe', () => () => <div data-testid="contact" />);
jest.mock('./Component/Navbar', () => () => <nav data-testid="navbar" />);
jest.mock('./Component/Footer', () => () => <footer data-testid="footer" />);
jest.mock('./Component/AccessibilityToolbar', () => () => <div data-testid="a11y-toolbar" />);

beforeEach(() => {
  Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 0 });
  window.scrollTo = jest.fn();
  global.IntersectionObserver = function IntersectionObserver() {
    this.observe = jest.fn();
    this.unobserve = jest.fn();
    this.disconnect = jest.fn();
  };


  
});

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByTestId('home')).toBeInTheDocument();
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('renders the skip-to-main-content link', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: /skip to main content/i })).toBeInTheDocument();
  });

  it('scroll-to-top button is invisible initially (scrollY = 0)', () => {
    render(<App />);
    const btn = screen.getByRole('button', { name: /scroll to top/i });
    expect(btn).toHaveClass('opacity-0');
    expect(btn).toHaveClass('invisible');
  });

  it('scroll-to-top button becomes visible after scrolling past 400px', () => {
    render(<App />);
    act(() => {
      Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 500 });
      fireEvent.scroll(window);
    });
    const btn = screen.getByRole('button', { name: /scroll to top/i });
    expect(btn).toHaveClass('opacity-100');
    expect(btn).toHaveClass('visible');
  });

  it('scroll-to-top button calls window.scrollTo on click', () => {
    render(<App />);
    act(() => {
      Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 500 });
      fireEvent.scroll(window);
    });
    fireEvent.click(screen.getByRole('button', { name: /scroll to top/i }));
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
