import React, { useReducer } from 'react';

// Reducer function
function reducer(state, action) {
  if (action.type === 'increment') {
    return state + 1;
  }
  if (action.type === 'decrement') {
    return state - 1;
  }
  return state;
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0); // Initial state = 0

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Add 1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Subtract 1</button>
    </div>
  );
}

export default Counter;


// What’s Happening:
// reducer checks the action.type and updates count.
// dispatch({ type: 'increment' }) tells it to add 1.
// The component re-renders with the new count.