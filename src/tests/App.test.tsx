import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

describe('App Component', () => {
  it('renders Counter with initial value', () => {
    render(<App />);

    expect(screen.getByText(/Contador: 10/i)).toBeInTheDocument();

    expect(screen.getByTestId('increment-button')).toBeInTheDocument();
    expect(screen.getByTestId('decrement-button')).toBeInTheDocument();
  });
});