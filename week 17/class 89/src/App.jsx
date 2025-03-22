import React, { useRef, useState } from 'react';
import Page1 from './components/Page1';
import LandD from './components/LandD';
import Page2 from './components/Page2';
import Page3 from './components/Page3';

function Counter() {
  const count = useRef(0);
  const [stateCount, setStateCount] = useState(0);

  const incrementRef = () => {
    count.current += 1;
    console.log("Ref count (doesn't cause re-render):", count.current);
  };

  const incrementState = () => {
    setStateCount(stateCount + 1);
  };

  return (
    <div>
      <p>State Count: {stateCount}</p>
      <p>Ref Count: {count.current}</p>
      <button onClick={incrementState}>Increment State</button>
      <button onClick={incrementRef}>Increment Ref</button>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <Counter />
      <Page1/>
      <LandD/>
      <Page2/>
      <Page3/>
    </div>
  );
}

export default App;