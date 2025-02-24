//Click Tracker

import { useRef } from 'react';

function ClickCounter() {
  const clickCount = useRef(0); // Box starts at 0

  const handleClick = () => {
    clickCount.current = clickCount.current + 1; // Add 1 to the box
    console.log(`Clicked ${clickCount.current} times`);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p>Check the console to see the count!</p>
    </div>
  );
}



export default ClickCounter