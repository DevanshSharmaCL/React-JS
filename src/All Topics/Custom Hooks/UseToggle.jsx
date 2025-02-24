//TOGGLE LIGHTS

import { useState } from 'react';
// Custom hook
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue(!value);

  return [value, toggle];
}

// Using it in a component
function LightSwitch() {
  const [isOn, toggleLight] = useToggle(false); // Start off

  return (
    <div>
      <p>The light is {isOn ? 'on' : 'off'}</p>
      <button onClick={toggleLight}>Toggle</button>
    </div>
  );
}

export default LightSwitch;