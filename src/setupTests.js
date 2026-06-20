import '@testing-library/jest-dom';
import { toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

// IntersectionObserver mock — used by Navbar and App
global.IntersectionObserver = function IntersectionObserver(callback) {
  this.observe = jest.fn();
  this.unobserve = jest.fn();
  this.disconnect = jest.fn();
};

// window.scrollTo mock
global.scrollTo = jest.fn();
