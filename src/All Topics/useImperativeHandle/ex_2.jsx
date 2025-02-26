import React, { useRef, useImperativeHandle, forwardRef, useState } from 'react';

// Child component
const Counter = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => ({
    getCount: () => count, // Expose the count
  }));

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
    </div>
  );
});

// Parent component
function App() {
  const counterRef = useRef(null);

  const checkCount = () => {
    const currentCount = counterRef.current.getCount();
    console.log('Current count:', currentCount);
  };

  return (
    <div>
      <Counter ref={counterRef} />
      <button onClick={checkCount}>Check Count</button>
    </div>
  );
}

export default App;