import { useLayoutEffect, useRef } from 'react';

function MovingBox() {
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    const box = boxRef.current;
    const leftPosition = box.getBoundingClientRect().left;

    if (leftPosition < 50) { // If too close to left edge
      box.style.left = '50px'; // Move it right
    }
  }, []); // Runs once

  return (
    <div
      ref={boxRef}
      style={{ position: 'absolute', left: '10px', top: '10px', width: '50px', height: '50px', background: 'pink' }}
    >
      Box
    </div>
  );
}


export default MovingBox;

// What’s Happening:
// boxRef points to the box.
// useLayoutEffect checks its position and moves it if needed.
// The user never sees it at 10px—it jumps to 50px before painting.