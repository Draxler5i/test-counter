import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from '../components/Counter';
import '@testing-library/jest-dom';

describe('Counter Component', () => {
  it('renders initial value', () => {
    render(<Counter initialValue={5} />);
    expect(screen.getByText(/Contador: 5/i)).toBeInTheDocument();
  });

  it('increments count when button is clicked', () => {
    render(<Counter />);
    fireEvent.click(screen.getByTestId('increment-button'));
    expect(screen.getByText(/Contador: 1/i)).toBeInTheDocument();
  });

  it('does not decrement below 0', () => {
    render(<Counter initialValue={0} />);
    fireEvent.click(screen.getByTestId('decrement-button'));
    expect(screen.getByText(/Contador: 0/i)).toBeInTheDocument();
  });
});
