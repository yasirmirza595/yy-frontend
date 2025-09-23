import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/welcome to yasin & yasir automotive/i);
  expect(headingElement).toBeInTheDocument();
});
