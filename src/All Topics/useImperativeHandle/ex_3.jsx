import React, { useRef, useImperativeHandle, forwardRef } from 'react';

// Child component
const VideoPlayer = forwardRef((props, ref) => {
  const videoRef = useRef(null);

  useImperativeHandle(ref, () => ({
    play: () => videoRef.current.play(),
    pause: () => videoRef.current.pause(),
    reset: () => {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    },
  }));

  return (
    <video
      ref={videoRef}
      width="300"
      src="https://www.w3schools.com/html/mov_bbb.mp4"
    />
  );
});

// Parent component
function App() {
  const videoControl = useRef(null);

  return (
    <div>
      <VideoPlayer ref={videoControl} />
      <br />
      <button onClick={() => videoControl.current.play()}>Play</button>
      <button onClick={() => videoControl.current.pause()}>Pause</button>
      <button onClick={() => videoControl.current.reset()}>Reset</button>
    </div>
  );
}

export default App;