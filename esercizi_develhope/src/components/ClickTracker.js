import React, { useState } from "react";

const ClickTracker = () => {
  const [lastClick, setLastClick] = useState(null);
  const [count, setCount] = useState(0);

  const ClickTracker = (name) => {
    setLastClick(name);
  };

  const dec = () => setCount(count - 1);
  const inc = () => setCount(count + 1);
  const res = () => setCount(0);

  const increment = () => {
    ClickTracker("Increment");
    inc();
  };
  const decrement = () => {
    ClickTracker("Decrement");
    dec();
  };
  const reset = () => {
    ClickTracker("Reset");
    res();
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      {lastClick && <h1>Last button clicked: {lastClick}</h1>}
    </>
  );
};

export default ClickTracker;