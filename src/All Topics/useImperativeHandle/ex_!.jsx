import React, { useRef, useImperativeHandle, forwardRef } from 'react';

// Child component with forwardRef
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    },
  }));

  return <input ref={inputRef} placeholder="Type here" />;
});

// Parent component
function App() {
  const inputControl = useRef(null);

  const handleFocus = () => {
    inputControl.current.focusInput(); // Parent calls the child’s function
  };

  return (
    <div>
      <CustomInput ref={inputControl} />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default App;