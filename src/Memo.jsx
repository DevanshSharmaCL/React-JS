import React, { useState } from 'react';
import TestOfMemo from './TestOfMemo';

const Memo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  function handleInput(e) {
    setInput(e.target.value);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <input type='text' value={input} onChange={handleInput} />
      <TestOfMemo newCount={count} />
    </div>
  );
};

export default Memo;
