import { useState } from 'react';

type CounterProps = {
  initialValue?: number;
};

export const Counter = ({ initialValue = 0 }: CounterProps) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(Math.max(0, count - 1));

  return (
    <div>
      <h1 data-testid="counter-title">Contador: {count}</h1>
      <button onClick={increment} data-testid="increment-button">
        Incrementar
      </button>
      <button onClick={decrement} data-testid="decrement-button">
        Decrementar
      </button>
    </div>
  );
};
