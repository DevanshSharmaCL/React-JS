// Focus an input field on page load using useRef hook

import { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null); // Box starts empty

  const handleFocus = () => {
    inputRef.current.focus(); // Tell the input to wake up
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Type here" />
      <button onClick={handleFocus}>Focus the Input</button>
    </div>
  );
}

export default FocusInput;


// What’s Happening:
// inputRef is our box, starting with null.
// <input ref={inputRef}> sticks the input into the box (React does this for us).
// Clicking the button uses inputRef.current.focus() to make the cursor jump to the input.