import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Test text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Test/i);
  expect(linkElement).toBeInTheDocument();
});
