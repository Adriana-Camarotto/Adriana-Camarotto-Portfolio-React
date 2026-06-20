import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';
import AccessibilityToolbar from './AccessibilityToolbar';

beforeEach(() => {
  localStorage.clear();
  document.body.className = '';
  document.documentElement.style.fontSize = '';
});

const openPanel = () => fireEvent.click(screen.getByRole('button', { name: /open accessibility panel/i }));

describe('AccessibilityToolbar', () => {
  it('renders the toggle button', () => {
    render(<AccessibilityToolbar />);
    expect(screen.getByRole('button', { name: /open accessibility panel/i })).toBeInTheDocument();
  });

  it('opens the panel on toggle button click', () => {
    render(<AccessibilityToolbar />);
    openPanel();
    expect(screen.getByRole('region', { name: /accessibility controls/i })).toBeInTheDocument();
  });

  it('closes the panel on second click', () => {
    render(<AccessibilityToolbar />);
    openPanel();
    fireEvent.click(screen.getByRole('button', { name: /close accessibility panel/i }));
    expect(screen.queryByRole('region', { name: /accessibility controls/i })).not.toBeInTheDocument();
  });

  it('adds a11y-dyslexia to body when Dyslexia font is toggled', () => {
    render(<AccessibilityToolbar />);
    openPanel();
    fireEvent.click(screen.getByRole('checkbox', { name: /dyslexia font/i }));
    expect(document.body).toHaveClass('a11y-dyslexia');
  });

  it('adds a11y-high-contrast to body when High contrast is toggled', () => {
    render(<AccessibilityToolbar />);
    openPanel();
    fireEvent.click(screen.getByRole('checkbox', { name: /high contrast/i }));
    expect(document.body).toHaveClass('a11y-high-contrast');
  });

  it('adds a11y-no-motion to body when No animations is toggled', () => {
    render(<AccessibilityToolbar />);
    openPanel();
    fireEvent.click(screen.getByRole('checkbox', { name: /no animations/i }));
    expect(document.body).toHaveClass('a11y-no-motion');
  });

  it('adds a11y-line-height to body when Line height is toggled', () => {
    render(<AccessibilityToolbar />);
    openPanel();
    fireEvent.click(screen.getByRole('checkbox', { name: /line height/i }));
    expect(document.body).toHaveClass('a11y-line-height');
  });

  it('adds a11y-letter-spacing to body when Letter spacing is toggled', () => {
    render(<AccessibilityToolbar />);
    openPanel();
    fireEvent.click(screen.getByRole('checkbox', { name: /letter spacing/i }));
    expect(document.body).toHaveClass('a11y-letter-spacing');
  });

  it('increases font size by 10 on + click', () => {
    render(<AccessibilityToolbar />);
    openPanel();
    fireEvent.click(screen.getByRole('button', { name: /increase font size/i }));
    expect(screen.getByText('110%')).toBeInTheDocument();
    expect(document.documentElement.style.fontSize).toBe('110%');
  });

  it('decreases font size by 10 on - click', () => {
    render(<AccessibilityToolbar />);
    openPanel();
    fireEvent.click(screen.getByRole('button', { name: /increase font size/i }));
    fireEvent.click(screen.getByRole('button', { name: /increase font size/i }));
    expect(screen.getByText('120%')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /decrease font size/i }));
    expect(screen.getByText('110%')).toBeInTheDocument();
    expect(document.documentElement.style.fontSize).toBe('110%');
  });

  it('does not go below 100% or above 150%', () => {
    render(<AccessibilityToolbar />);
    openPanel();
    fireEvent.click(screen.getByRole('button', { name: /decrease font size/i }));
    expect(screen.getByText('100%')).toBeInTheDocument();
    for (let i = 0; i < 6; i++) {
      fireEvent.click(screen.getByRole('button', { name: /increase font size/i }));
    }
    expect(screen.getByText('150%')).toBeInTheDocument();
  });

  it('Reset all restores default settings and removes body classes', () => {
    render(<AccessibilityToolbar />);
    openPanel();
    fireEvent.click(screen.getByRole('checkbox', { name: /dyslexia font/i }));
    fireEvent.click(screen.getByRole('checkbox', { name: /high contrast/i }));
    expect(document.body).toHaveClass('a11y-dyslexia');
    fireEvent.click(screen.getByRole('button', { name: /reset all/i }));
    expect(document.body).not.toHaveClass('a11y-dyslexia');
    expect(document.body).not.toHaveClass('a11y-high-contrast');
    expect(screen.getByText('100%')).toBeInTheDocument();
  });

  it('persists settings to localStorage on change', () => {
    render(<AccessibilityToolbar />);
    openPanel();
    fireEvent.click(screen.getByRole('checkbox', { name: /dyslexia font/i }));
    const saved = JSON.parse(localStorage.getItem('a11y-settings'));
    expect(saved.dyslexia).toBe(true);
  });

  it('loads settings from localStorage on mount', () => {
    localStorage.setItem('a11y-settings', JSON.stringify({
      fontSize: 100, dyslexia: true, highContrast: false,
      noMotion: false, lineHeight: false, letterSpacing: false,
    }));
    render(<AccessibilityToolbar />);
    expect(document.body).toHaveClass('a11y-dyslexia');
  });

  it('closes the panel on Escape key', () => {
    render(<AccessibilityToolbar />);
    openPanel();
    expect(screen.getByRole('region', { name: /accessibility controls/i })).toBeInTheDocument();
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('region', { name: /accessibility controls/i })).not.toBeInTheDocument();
  });

  it('has no accessibility violations (closed state)', async () => {
    const { container } = render(<AccessibilityToolbar />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no accessibility violations (open state)', async () => {
    const { container } = render(<AccessibilityToolbar />);
    openPanel();
    expect(await axe(container)).toHaveNoViolations();
  });
});
