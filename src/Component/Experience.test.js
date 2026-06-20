import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { axe } from 'jest-axe';
import Experience from './Experience';

describe('Experience', () => {
  it('renders the section heading', () => {
    render(<Experience />);
    expect(screen.getByText(/Where I've Worked/i)).toBeInTheDocument();
  });

  it('shows the first experience (Alt Design) by default', () => {
    render(<Experience />);
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Alt Design');
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Web Developer');
  });

  it('renders all 4 company tabs', () => {
    render(<Experience />);
    const companies = ['Alt Design', 'Design Monkey Media', 'DizzitUp', 'Apanvi'];
    const [desktopTablist] = screen.getAllByRole('tablist', { name: /companies/i });
    companies.forEach((company) => {
      expect(within(desktopTablist).getByRole('tab', { name: company })).toBeInTheDocument();
    });
  });

  it('clicking a tab shows that company panel', () => {
    render(<Experience />);
    const [desktopTablist] = screen.getAllByRole('tablist', { name: /companies/i });
    fireEvent.click(within(desktopTablist).getByRole('tab', { name: 'DizzitUp' }));
    expect(screen.getByRole('tabpanel')).toHaveTextContent('DizzitUp');
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Front-End Web Developer Intern');
  });

  it('ArrowRight moves to the next tab', () => {
    render(<Experience />);
    const [desktopTablist] = screen.getAllByRole('tablist', { name: /companies/i });
    fireEvent.keyDown(desktopTablist, { key: 'ArrowRight' });
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Design Monkey Media');
  });

  it('ArrowLeft wraps to the last tab from the first', () => {
    render(<Experience />);
    const [desktopTablist] = screen.getAllByRole('tablist', { name: /companies/i });
    fireEvent.keyDown(desktopTablist, { key: 'ArrowLeft' });
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Apanvi');
  });

  it('Home key moves to the first tab', () => {
    render(<Experience />);
    const [desktopTablist] = screen.getAllByRole('tablist', { name: /companies/i });
    // First go to last tab
    fireEvent.keyDown(desktopTablist, { key: 'End' });
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Apanvi');
    // Then Home returns to first
    fireEvent.keyDown(desktopTablist, { key: 'Home' });
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Alt Design');
  });

  it('End key moves to the last tab', () => {
    render(<Experience />);
    const [desktopTablist] = screen.getAllByRole('tablist', { name: /companies/i });
    fireEvent.keyDown(desktopTablist, { key: 'End' });
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Apanvi');
  });

  it('carousel Next button advances to the next company', () => {
    render(<Experience />);
    fireEvent.click(screen.getByRole('button', { name: /next company/i }));
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Design Monkey Media');
  });

  it('carousel Previous button wraps from first to last company', () => {
    render(<Experience />);
    fireEvent.click(screen.getByRole('button', { name: /previous company/i }));
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Apanvi');
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Experience />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
