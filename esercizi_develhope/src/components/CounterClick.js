import React from "react";
//import ClickTracker from "./ClickTracker";

const CounterClick = (props) => {

  return (
    <>
      <h1 onChange={props.onCounterChange}>Count: {props.count}</h1>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
      <button onClick={props.reset}>Reset</button>
    </>
  );
};

export default CounterClick;