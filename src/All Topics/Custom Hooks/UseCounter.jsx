import { useState } from 'react';

// Custom hook
function useCounter(startingValue = 0) {
  const [count, setCount] = useState(startingValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
}

// Using it in a component
function Counter() {
  const { count, increment, decrement } = useCounter(5); // Start at 5

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Add 1</button>
      <button onClick={decrement}>Subtract 1</button>
    </div>
  );
}

export default Counter;