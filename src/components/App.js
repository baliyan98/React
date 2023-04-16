import React, { useRef, useState } from "react";

function App() {
  const [currentValue, setCurrentValue] = useState(0);
  let intervalIdRef = useRef(null);
  const onIncrementClick = () => {
    intervalIdRef.current = setInterval(() => {
      setCurrentValue((previousCount) => previousCount + 1);
    }, 1000);
  };

  const onDecrementClick = () => {
    clearInterval(intervalIdRef.current);
  };

  return (
    <>
      <button onClick={onIncrementClick}>Increment</button>
      <p>{currentValue}</p>
      <button onClick={onDecrementClick}>Stop</button>
    </>
  );
}

export default App;
