import React, { useEffect, useState } from "react";
//import ClickTracker from "./ClickTracker";

const CounterClick = (props) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  useEffect(() => {
    props.onCounterChange(count);
  }, [count]);

  return (
    <>
      <h1>Count: { count }</h1>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default CounterClick;