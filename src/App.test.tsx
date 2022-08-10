import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders rick and morty app', () => {
  render(<App />);
  const linkElement = screen.getByText(/rick and morty/i);
  expect(linkElement).toBeInTheDocument();
});
