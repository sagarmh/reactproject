import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn a React/i);
  expect(linkElement).toBeInTheDocument();
});
test('not renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/not learning any thing/i);
  expect(linkElement).toBeInTheDocument();
});
